/**
 * Lightweight Zero-Dependency Live Development Server
 * Built with native Node.js (http, fs, path, child_process)
 * Auto-port finding, live reloading, automatic browser launch
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const START_PORT = 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.m4a': 'audio/mp4',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

// Live reload SSE clients
const sseClients = new Set();

function injectLiveReload(html) {
  const script = `
    <!-- Live Reload Script -->
    <script>
      (function() {
        let es = new EventSource('/__livereload');
        es.onmessage = function(e) {
          if (e.data === 'reload') {
            console.log('⚡ Reloading Little Universe...');
            location.reload();
          }
        };
        es.onerror = function() {
          setTimeout(() => {
            es.close();
            es = new EventSource('/__livereload');
          }, 2000);
        };
      })();
    </script>
  `;
  if (html.includes('</body>')) {
    return html.replace('</body>', script + '</body>');
  }
  return html + script;
}

const server = http.createServer((req, res) => {
  let urlPath = '/';
  try {
    urlPath = decodeURIComponent(req.url.split('?')[0]);
  } catch (e) {
    urlPath = req.url.split('?')[0];
  }

  // SSE Live Reload endpoint
  if (urlPath === '/__livereload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });
    res.write('data: connected\n\n');
    sseClients.add(res);

    req.on('close', () => {
      sseClients.delete(res);
    });
    return;
  }

  let filePath = path.join(ROOT_DIR, urlPath === '/' ? 'index.html' : urlPath);

  // Security check: prevent directory traversal
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <div style="font-family:sans-serif; text-align:center; padding:50px; background:#050505; color:#fff; min-height:100vh;">
          <h1 style="color:#ff4d6d;">404 Not Found</h1>
          <p>The cosmic file <code>${urlPath}</code> could not be found.</p>
          <a href="/" style="color:#c0c0c0;">Return to Little Universe Home</a>
        </div>
      `);
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Range request support for audio streaming (.mp3, .wav, etc.)
    if (req.headers.range && (ext === '.mp3' || ext === '.wav' || ext === '.ogg' || ext === '.m4a')) {
      const range = req.headers.range;
      const totalSize = stats.size;
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;
      const chunkSize = (end - start) + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      fileStream.pipe(res);
      return;
    }

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Server Error');
        return;
      }

      res.writeHead(200, {
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Content-Length': stats.size,
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });

      if (ext === '.html') {
        const injected = injectLiveReload(content.toString('utf-8'));
        res.end(injected);
      } else {
        res.end(content);
      }
    });
  });
});

// File Watcher with debouncing for instant live reloading
let debounceTimer = null;
try {
  fs.watch(ROOT_DIR, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    if (filename.includes('node_modules') || filename.includes('.git') || filename.includes('.log')) return;

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      console.log(`\x1b[36m[LiveReload]\x1b[0m File changed: ${filename}`);
      for (const client of sseClients) {
        client.write('data: reload\n\n');
      }
    }, 120);
  });
} catch (e) {
  // Ignore watch errors if platform doesn't support recursive watch
}

function startServer(port) {
  server.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log('\n\x1b[35m' + '═'.repeat(58) + '\x1b[0m');
    console.log(`\x1b[1m\x1b[37m  ✦ A Little Universe Called Kirthikha ❤️\x1b[0m`);
    console.log('\x1b[35m' + '═'.repeat(58) + '\x1b[0m');
    console.log(`  \x1b[32m➜\x1b[0m  \x1b[1mLocal Server:\x1b[0m   \x1b[36m${url}\x1b[0m`);
    console.log(`  \x1b[32m➜\x1b[0m  \x1b[1mLive Reload:\x1b[0m    \x1b[33mActive (auto-refreshes on edits)\x1b[0m`);
    console.log(`  \x1b[90m➜  Press Ctrl+C to stop the server\x1b[0m`);
    console.log('\x1b[35m' + '═'.repeat(58) + '\x1b[0m\n');

    // Automatically open browser on Windows
    const openCmd = process.platform === 'win32' ? `start ${url}` : process.platform === 'darwin' ? `open ${url}` : `xdg-open ${url}`;
    exec(openCmd, () => {});
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(START_PORT);
