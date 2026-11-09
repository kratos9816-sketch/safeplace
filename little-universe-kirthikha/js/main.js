/**
 * ==============================================================================
 * A LITTLE UNIVERSE CALLED KIRTHIKHA ❤️
 * Master Controller: Interactive Animations, Audio Engine, Starfields, State
 * ==============================================================================
 */

(function () {
  'use strict';

  // State Management
  const state = {
    entered: false,
    audioPlaying: false,
    currentLangIndex: 0,
    shuffledLangIndices: [],
    discoveredLangsCount: 1,
    currentReasonIndex: 0,
    currentLetterParaIndex: 0,
    currentComfortIndex: 0,
    comfortTimer: null,
    favorites: JSON.parse(localStorage.getItem('kirthikha_fav_reasons') || '[]'),
    activeFilter: 'all',
    currentLightboxIndex: 0
  };

  // DOM Elements
  const DOM = {
    openingScene: document.getElementById('opening-scene'),
    openingCanvas: document.getElementById('opening-canvas'),
    mainCanvas: document.getElementById('main-starfield-canvas'),
    surpriseCanvas: document.getElementById('surprise-heart-canvas'),
    btnEnter: document.getElementById('btn-enter-universe'),
    universeNav: document.getElementById('universe-nav'),
    universeWrapper: document.getElementById('universe-wrapper'),
    mobileNavToggle: document.getElementById('mobile-nav-toggle'),
    navLinks: document.getElementById('nav-links'),
    audioToggleBtn: document.getElementById('audio-toggle-btn'),
    audioController: document.getElementById('audio-controller'),
    audioStatusText: document.getElementById('audio-status-text'),

    // Languages Section
    langBadge: document.getElementById('lang-badge'),
    langCounter: document.getElementById('lang-counter'),
    langScript: document.getElementById('lang-script'),
    langRomanized: document.getElementById('lang-romanized'),
    langMeaning: document.getElementById('lang-meaning'),
    btnTellLove: document.getElementById('btn-tell-love'),
    btnCopyLang: document.getElementById('btn-copy-lang'),
    btnExploreLangs: document.getElementById('btn-explore-langs'),

    // Reasons Section
    reasonCounterBadge: document.getElementById('reason-counter-badge'),
    reasonText: document.getElementById('reason-text'),
    btnPrevReason: document.getElementById('btn-prev-reason'),
    btnNextReason: document.getElementById('btn-next-reason'),
    btnRandomReason: document.getElementById('btn-random-reason'),
    btnFavReason: document.getElementById('btn-fav-reason'),
    btnViewAllReasons: document.getElementById('btn-view-all-reasons'),
    reasonProgressBar: document.getElementById('reason-progress-bar'),

    // Memories Section
    memoriesGrid: document.getElementById('memories-grid'),
    memoryFilters: document.getElementById('memory-filters'),

    // Fear / Vulnerability Section
    btnReassureHeart: document.getElementById('btn-reassure-heart'),
    reassuranceRevealed: document.getElementById('reassurance-revealed'),
    reassuranceTimestamp: document.getElementById('reassurance-timestamp'),

    // Comfort Section
    comfortMessageText: document.getElementById('comfort-message-text'),
    comfortStepDots: document.getElementById('comfort-step-dots'),
    comfortPills: document.querySelectorAll('.comfort-pill'),

    // Letter Section
    envelopeWrapper: document.getElementById('envelope-wrapper'),
    revealedLetterBox: document.getElementById('revealed-letter-box'),
    letterParaText: document.getElementById('letter-para-text'),
    letterCounterTag: document.getElementById('letter-counter-tag'),
    btnPrevPara: document.getElementById('btn-prev-para'),
    btnNextPara: document.getElementById('btn-next-para'),
    btnToggleFullLetter: document.getElementById('btn-toggle-full-letter'),
    fullLetterContainer: document.getElementById('full-letter-container'),

    // Surprise Section
    btnUnlockSurprise: document.getElementById('btn-unlock-surprise'),
    surpriseOverlay: document.getElementById('final-surprise-overlay'),
    surpriseCloseBtn: document.getElementById('surprise-close-btn'),
    surpriseLine1: document.getElementById('surprise-line-1'),
    surpriseLine2: document.getElementById('surprise-line-2'),
    surpriseLine3: document.getElementById('surprise-line-3'),
    infinityWrapper: document.getElementById('infinity-wrapper'),

    // Modals
    languagesModal: document.getElementById('languages-modal'),
    languagesListGrid: document.getElementById('languages-list-grid'),
    langSearchInput: document.getElementById('lang-search-input'),
    reasonsModal: document.getElementById('reasons-modal'),
    reasonsListGrid: document.getElementById('reasons-list-grid'),
    lightboxModal: document.getElementById('lightbox-modal'),
    lightboxImg: document.getElementById('lightbox-img'),
    lightboxTitle: document.getElementById('lightbox-title'),
    lightboxDate: document.getElementById('lightbox-date'),
    lightboxDesc: document.getElementById('lightbox-desc'),
    btnLightboxPrev: document.getElementById('btn-lightbox-prev'),
    btnLightboxNext: document.getElementById('btn-lightbox-next'),
    comfortModal: document.getElementById('comfort-modal'),
    comfortModalTitle: document.getElementById('comfort-modal-title'),
    comfortModalBody: document.getElementById('comfort-modal-body'),

    btnBackToTop: document.getElementById('btn-back-to-top')
  };

  /* ==============================================================================
     1. AUDIO SYSTEM (DUAL ENGINE: MP3 FILE + WEB AUDIO CELESTIAL SYNTHESIZER)
     ============================================================================== */
  class AudioEngine {
    constructor() {
      this.audioCtx = null;
      this.isSynthPlaying = false;
      this.htmlAudio = null;
      this.useHtmlAudio = false;
      this.synthInterval = null;
      this.gainNode = null;
      this.masterVolume = 0.45;

      this.initHtmlAudio();
    }

    initHtmlAudio() {
      // Priority list of romantic tracks
      const candidateTracks = [
        'assets/music/' + encodeURIComponent('Nee Paartha Vizhigal (The Touch of Love).mp3'),
        'assets/music/universe-theme.mp3',
        'assets/music/Nee Paartha Vizhigal (The Touch of Love).mp3'
      ];

      const audio = new Audio();
      audio.preload = 'auto';
      audio.loop = true;
      audio.volume = 0;

      let idx = 0;
      const tryNextTrack = () => {
        if (idx >= candidateTracks.length) {
          this.useHtmlAudio = false;
          return;
        }
        audio.src = candidateTracks[idx];
        audio.load();
      };

      audio.addEventListener('canplay', () => {
        this.htmlAudio = audio;
        this.useHtmlAudio = true;
        this.trackName = 'Nee Paartha Vizhigal ❤️';
        this.updateUI();
      });

      audio.addEventListener('loadeddata', () => {
        this.htmlAudio = audio;
        this.useHtmlAudio = true;
        this.trackName = 'Nee Paartha Vizhigal ❤️';
        this.updateUI();
      });

      audio.addEventListener('error', () => {
        idx++;
        tryNextTrack();
      });

      tryNextTrack();
    }

    initWebAudio() {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
        this.gainNode = this.audioCtx.createGain();
        this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
        this.gainNode.connect(this.audioCtx.destination);
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    }

    playNote(freq, time, duration = 2.5, type = 'sine') {
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const noteGain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, time);

      // Soft celesta / electric piano envelope
      noteGain.gain.setValueAtTime(0.0001, time);
      noteGain.gain.exponentialRampToValueAtTime(0.08 * this.masterVolume, time + 0.08);
      noteGain.gain.exponentialRampToValueAtTime(0.00001, time + duration);

      osc.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start(time);
      osc.stop(time + duration);
    }

    startSynthAmbient() {
      this.initWebAudio();
      this.isSynthPlaying = true;

      // Romantic chord progression in C major / A minor
      // Cmaj9 -> Am9 -> Fmaj7 -> Gsus4
      const chords = [
        [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj9 (C4, E4, G4, B4, D5)
        [220.00, 261.63, 329.63, 392.00, 493.88], // Am9 (A3, C4, E4, G4, B4)
        [174.61, 261.63, 329.63, 349.23, 440.00], // Fmaj7 (F3, C4, E4, F4, A4)
        [196.00, 261.63, 293.66, 392.00, 523.25]  // Gsus4 (G3, C4, D4, G4, C5)
      ];

      let chordIdx = 0;
      const playNextChord = () => {
        if (!this.isSynthPlaying) return;
        const now = this.audioCtx.currentTime;
        const chord = chords[chordIdx];

        // Arpeggiate gently with soft delay
        chord.forEach((freq, i) => {
          this.playNote(freq, now + i * 0.45, 4.5, i % 2 === 0 ? 'sine' : 'triangle');
        });

        chordIdx = (chordIdx + 1) % chords.length;
      };

      // Fade master gain in
      this.gainNode.gain.cancelScheduledValues(this.audioCtx.currentTime);
      this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(1, this.audioCtx.currentTime + 3);

      playNextChord();
      this.synthInterval = setInterval(playNextChord, 4200);
    }

    stopSynthAmbient() {
      if (!this.audioCtx) return;
      this.isSynthPlaying = false;
      if (this.synthInterval) {
        clearInterval(this.synthInterval);
        this.synthInterval = null;
      }
      this.gainNode.gain.cancelScheduledValues(this.audioCtx.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(0.0001, this.audioCtx.currentTime + 1.5);
    }

    play() {
      if (this.useHtmlAudio && this.htmlAudio) {
        this.htmlAudio.play().then(() => {
          let vol = 0;
          this.htmlAudio.volume = 0;
          const fadeInterval = setInterval(() => {
            vol += 0.05;
            if (vol >= this.masterVolume) {
              this.htmlAudio.volume = this.masterVolume;
              clearInterval(fadeInterval);
            } else {
              this.htmlAudio.volume = vol;
            }
          }, 100);
        }).catch(() => {
          // If htmlAudio blocked, fallback to web audio
          this.startSynthAmbient();
        });
      } else {
        this.startSynthAmbient();
      }
      state.audioPlaying = true;
      this.updateUI();
    }

    pause() {
      if (this.useHtmlAudio && this.htmlAudio) {
        let vol = this.htmlAudio.volume;
        const fadeInterval = setInterval(() => {
          vol -= 0.05;
          if (vol <= 0.05) {
            this.htmlAudio.volume = 0;
            this.htmlAudio.pause();
            clearInterval(fadeInterval);
          } else {
            this.htmlAudio.volume = vol;
          }
        }, 80);
      } else {
        this.stopSynthAmbient();
      }
      state.audioPlaying = false;
      this.updateUI();
    }

    toggle() {
      if (state.audioPlaying) {
        this.pause();
      } else {
        this.play();
      }
    }

    updateUI() {
      if (DOM.audioController) {
        const title = this.trackName || 'Celestial Melody';
        if (state.audioPlaying) {
          DOM.audioController.classList.add('audio-playing');
          if (DOM.audioStatusText) DOM.audioStatusText.textContent = `${title}`;
        } else {
          DOM.audioController.classList.remove('audio-playing');
          if (DOM.audioStatusText) DOM.audioStatusText.textContent = `${title} (Paused)`;
        }
      }
    }
  }

  const audio = new AudioEngine();

  /* ==============================================================================
     2. CANVAS STARFIELD ENGINES
     ============================================================================== */
  // Opening Scene Canvas: Slowly appearing stars, gentle floating particles & outward warp burst
  class OpeningStarfield {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.stars = [];
      this.numStars = 280;
      this.warpSpeed = 0;
      this.isWarping = false;
      this.animId = null;

      this.resize();
      this.initStars();
      window.addEventListener('resize', () => this.resize());
      this.loop();
    }

    resize() {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
      this.centerX = this.width / 2;
      this.centerY = this.height / 2;
    }

    initStars() {
      this.stars = [];
      for (let i = 0; i < this.numStars; i++) {
        this.stars.push({
          x: (Math.random() - 0.5) * this.width * 1.5,
          y: (Math.random() - 0.5) * this.height * 1.5,
          z: Math.random() * this.width,
          radius: Math.random() * 1.6 + 0.4,
          baseAlpha: Math.random() * 0.7 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.008,
          twinklePhase: Math.random() * Math.PI * 2
        });
      }
    }

    triggerWarp() {
      this.isWarping = true;
    }

    loop() {
      this.ctx.fillStyle = this.isWarping ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 1)';
      this.ctx.fillRect(0, 0, this.width, this.height);

      if (this.isWarping) {
        this.warpSpeed += 0.8;
      }

      for (let star of this.stars) {
        star.z -= this.isWarping ? this.warpSpeed : 0.35;
        if (star.z <= 0) {
          star.z = this.width;
          star.x = (Math.random() - 0.5) * this.width * 1.5;
          star.y = (Math.random() - 0.5) * this.height * 1.5;
        }

        const k = 250 / star.z;
        const px = star.x * k + this.centerX;
        const py = star.y * k + this.centerY;

        if (px >= 0 && px <= this.width && py >= 0 && py <= this.height) {
          star.twinklePhase += star.twinkleSpeed;
          const alpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.25;
          const size = Math.max(0.6, (1 - star.z / this.width) * (this.isWarping ? 3.5 : 2.2));

          this.ctx.beginPath();
          if (this.isWarping) {
            // Draw warp streaks
            const prevK = 250 / (star.z + this.warpSpeed * 1.8);
            const prevPx = star.x * prevK + this.centerX;
            const prevPy = star.y * prevK + this.centerY;
            this.ctx.moveTo(prevPx, prevPy);
            this.ctx.lineTo(px, py);
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(1, alpha * 1.5)})`;
            this.ctx.lineWidth = size * 0.8;
            this.ctx.stroke();
          } else {
            this.ctx.arc(px, py, size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, Math.max(0.1, alpha))})`;
            this.ctx.fill();
          }
        }
      }

      this.animId = requestAnimationFrame(() => this.loop());
    }

    destroy() {
      if (this.animId) cancelAnimationFrame(this.animId);
    }
  }

  // Main Background Canvas: Slow cosmic dust & gentle drifting constellation points
  class MainCosmicStarfield {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.numParticles = 120;
      this.resize();
      this.initParticles();
      window.addEventListener('resize', () => this.resize());
      this.loop();
    }

    resize() {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
    }

    initParticles() {
      this.particles = [];
      for (let i = 0; i < this.numParticles; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          radius: Math.random() * 1.3 + 0.3,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          alpha: Math.random() * 0.6 + 0.2,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.015 + 0.005
        });
      }
    }

    loop() {
      this.ctx.clearRect(0, 0, this.width, this.height);

      for (let p of this.particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) p.x = this.width;
        if (p.x > this.width) p.x = 0;
        if (p.y < 0) p.y = this.height;
        if (p.y > this.height) p.y = 0;

        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.2;

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.08, currentAlpha)})`;
        this.ctx.fill();
      }

      requestAnimationFrame(() => this.loop());
    }
  }

  // Final Surprise Canvas: 450+ particles gathering into a mathematically perfect glowing heart!
  class HeartParticleSurprise {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.numParticles = 460;
      this.assembled = false;
      this.pulsePhase = 0;
      this.animId = null;

      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
      this.centerX = this.width / 2;
      this.centerY = this.height / 2;
    }

    // Parametric heart formula:
    // x = 16 * sin^3(t)
    // y = -(13 * cos(t) - 5 * cos(2t) - 2 * cos(3t) - cos(4t))
    getHeartPoint(t, scale = 14) {
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      return {
        x: this.centerX + x * scale,
        y: this.centerY + y * scale
      };
    }

    start() {
      this.particles = [];
      const scale = Math.min(this.width, this.height) * 0.022;

      for (let i = 0; i < this.numParticles; i++) {
        const t = (i / this.numParticles) * Math.PI * 2;
        const target = this.getHeartPoint(t, scale);

        // Dispersed starting positions
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * Math.max(this.width, this.height) * 0.9 + 150;

        this.particles.push({
          x: this.centerX + Math.cos(angle) * dist,
          y: this.centerY + Math.sin(angle) * dist,
          targetX: target.x,
          targetY: target.y,
          t: t,
          scale: scale,
          size: Math.random() * 2.2 + 0.8,
          alpha: Math.random() * 0.6 + 0.4,
          speed: Math.random() * 0.035 + 0.025,
          twinkle: Math.random() * Math.PI * 2
        });
      }

      this.assembled = false;
      this.pulsePhase = 0;
      if (this.animId) cancelAnimationFrame(this.animId);
      this.loop();
    }

    loop() {
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.18)';
      this.ctx.fillRect(0, 0, this.width, this.height);

      this.pulsePhase += 0.035;
      const pulseMultiplier = 1 + Math.sin(this.pulsePhase) * 0.045;

      for (let p of this.particles) {
        // Target dynamic pulsing position
        const currentTarget = this.getHeartPoint(p.t, p.scale * pulseMultiplier);

        // Smooth magnetic pull
        p.x += (currentTarget.x - p.x) * p.speed;
        p.y += (currentTarget.y - p.y) * p.speed;

        p.twinkle += 0.05;
        const currentAlpha = p.alpha + Math.sin(p.twinkle) * 0.25;

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, Math.max(0.2, currentAlpha))})`;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      }

      this.animId = requestAnimationFrame(() => this.loop());
    }

    stop() {
      if (this.animId) {
        cancelAnimationFrame(this.animId);
        this.animId = null;
      }
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  let openingStarfield = null;
  let mainStarfield = null;
  let heartSurprise = null;

  /* ==============================================================================
     3. OPENING SCENE LOGIC
     ============================================================================== */
  function initOpeningScene() {
    if (DOM.openingCanvas) {
      openingStarfield = new OpeningStarfield(DOM.openingCanvas);
    }

    if (DOM.btnEnter) {
      DOM.btnEnter.addEventListener('click', () => {
        enterUniverse();
      });
    }
  }

  function enterUniverse() {
    if (state.entered) return;
    state.entered = true;

    // Trigger star warp
    if (openingStarfield) {
      openingStarfield.triggerWarp();
    }

    // Play celestial audio with fade-in
    audio.play();

    // Dissolve opening scene smoothly
    setTimeout(() => {
      DOM.openingScene.classList.add('dissolve');
      DOM.universeWrapper.classList.add('visible');

      // Initialize background stars for main site
      if (DOM.mainCanvas) {
        mainStarfield = new MainCosmicStarfield(DOM.mainCanvas);
      }

      // Cleanup opening canvas after animation completes
      setTimeout(() => {
        if (openingStarfield) openingStarfield.destroy();
      }, 1400);
    }, 700);
  }

  /* ==============================================================================
     4. SECTION 4: 340 LANGUAGES OF LOVE
     ============================================================================== */
  function initLanguages() {
    if (typeof LOVE_LANGUAGES === 'undefined' || !LOVE_LANGUAGES.length) return;

    // Create shuffled deck so no repetition occurs until all 340 are exhausted
    state.shuffledLangIndices = Array.from({ length: LOVE_LANGUAGES.length }, (_, i) => i);
    shuffleArray(state.shuffledLangIndices);

    // Initial display
    displayLanguage(state.shuffledLangIndices[0]);

    if (DOM.btnTellLove) {
      DOM.btnTellLove.addEventListener('click', (e) => {
        cycleNextLanguage();
        createSparkleBurst(e.clientX, e.clientY);
      });
    }

    if (DOM.btnCopyLang) {
      DOM.btnCopyLang.addEventListener('click', copyCurrentLanguagePhrase);
    }

    if (DOM.btnExploreLangs) {
      DOM.btnExploreLangs.addEventListener('click', openLanguagesModal);
    }
  }

  function cycleNextLanguage() {
    state.currentLangIndex++;
    if (state.currentLangIndex >= state.shuffledLangIndices.length) {
      state.currentLangIndex = 0;
      shuffleArray(state.shuffledLangIndices);
    }

    state.discoveredLangsCount = Math.min(LOVE_LANGUAGES.length, state.discoveredLangsCount + 1);
    const langIdx = state.shuffledLangIndices[state.currentLangIndex];

    // Smooth fade transition
    DOM.langScript.classList.add('anim-fade');
    setTimeout(() => {
      displayLanguage(langIdx);
      DOM.langScript.classList.remove('anim-fade');
    }, 280);
  }

  function displayLanguage(index) {
    const lang = LOVE_LANGUAGES[index];
    if (!lang) return;

    DOM.langBadge.textContent = `${lang.language} • ${lang.region}`;
    DOM.langCounter.textContent = `Discovered ${state.discoveredLangsCount} of ${LOVE_LANGUAGES.length}`;
    DOM.langScript.textContent = lang.script;
    DOM.langRomanized.textContent = `"${lang.romanized}"`;
    DOM.langMeaning.textContent = lang.meaning || 'I love you';
  }

  function copyCurrentLanguagePhrase() {
    const lang = LOVE_LANGUAGES[state.shuffledLangIndices[state.currentLangIndex]];
    if (!lang) return;

    const copyText = `${lang.script} (${lang.romanized}) — "${lang.meaning}" in ${lang.language}`;
    navigator.clipboard.writeText(copyText).then(() => {
      const origText = DOM.btnCopyLang.innerHTML;
      DOM.btnCopyLang.innerHTML = '<span>Copied! ❤️</span>';
      setTimeout(() => {
        DOM.btnCopyLang.innerHTML = origText;
      }, 2000);
    });
  }

  function openLanguagesModal() {
    renderLanguagesModalList(LOVE_LANGUAGES);
    DOM.languagesModal.classList.add('active');

    if (DOM.langSearchInput) {
      DOM.langSearchInput.value = '';
      DOM.langSearchInput.focus();
      DOM.langSearchInput.oninput = (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = LOVE_LANGUAGES.filter(l =>
          l.language.toLowerCase().includes(query) ||
          l.script.toLowerCase().includes(query) ||
          l.region.toLowerCase().includes(query) ||
          l.romanized.toLowerCase().includes(query)
        );
        renderLanguagesModalList(filtered);
      };
    }
  }

  function renderLanguagesModalList(langs) {
    if (!DOM.languagesListGrid) return;
    DOM.languagesListGrid.innerHTML = '';

    langs.slice(0, 150).forEach(lang => {
      const item = document.createElement('div');
      item.className = 'lang-grid-item';
      item.innerHTML = `
        <div style="font-size:0.75rem; letter-spacing:2px; color:var(--text-silver); text-transform:uppercase; margin-bottom:4px;">${lang.language}</div>
        <div style="font-family:var(--font-serif); font-size:1.2rem; color:#fff; margin-bottom:4px;">${lang.script}</div>
        <div style="font-size:0.8rem; font-style:italic; color:var(--text-muted);">${lang.romanized}</div>
      `;
      item.addEventListener('click', () => {
        const realIdx = LOVE_LANGUAGES.findIndex(l => l.id === lang.id);
        if (realIdx !== -1) {
          DOM.langScript.classList.add('anim-fade');
          setTimeout(() => {
            displayLanguage(realIdx);
            DOM.langScript.classList.remove('anim-fade');
          }, 200);
        }
        DOM.languagesModal.classList.remove('active');
      });
      DOM.languagesListGrid.appendChild(item);
    });
  }

  /* ==============================================================================
     5. SECTION 5: 100 REASONS WHY I CHOOSE YOU
     ============================================================================== */
  function initReasons() {
    if (typeof REASONS_DATA === 'undefined' || !REASONS_DATA.length) return;

    displayReason(state.currentReasonIndex);

    DOM.btnPrevReason.addEventListener('click', () => {
      navigateReason(-1);
    });

    DOM.btnNextReason.addEventListener('click', () => {
      navigateReason(1);
    });

    DOM.btnRandomReason.addEventListener('click', () => {
      const randomIdx = Math.floor(Math.random() * REASONS_DATA.length);
      state.currentReasonIndex = randomIdx;
      updateReasonWithAnim();
    });

    DOM.btnFavReason.addEventListener('click', () => {
      toggleFavoriteReason(state.currentReasonIndex);
    });

    DOM.btnViewAllReasons.addEventListener('click', openReasonsModal);

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (document.activeElement.tagName === 'INPUT') return;
      if (e.key === 'ArrowLeft') navigateReason(-1);
      if (e.key === 'ArrowRight') navigateReason(1);
    });
  }

  function navigateReason(dir) {
    state.currentReasonIndex += dir;
    if (state.currentReasonIndex < 0) {
      state.currentReasonIndex = REASONS_DATA.length - 1;
    } else if (state.currentReasonIndex >= REASONS_DATA.length) {
      state.currentReasonIndex = 0;
    }
    updateReasonWithAnim();
  }

  function updateReasonWithAnim() {
    DOM.reasonText.classList.add('anim-fade');
    setTimeout(() => {
      displayReason(state.currentReasonIndex);
      DOM.reasonText.classList.remove('anim-fade');
    }, 250);
  }

  function displayReason(index) {
    const reason = REASONS_DATA[index];
    if (!reason) return;

    DOM.reasonCounterBadge.textContent = reason.number;
    DOM.reasonText.textContent = `"${reason.text}"`;

    // Progress bar
    const progressPercent = ((index + 1) / REASONS_DATA.length) * 100;
    DOM.reasonProgressBar.style.width = `${progressPercent}%`;

    // Update favorite icon
    const isFav = state.favorites.includes(reason.id);
    if (isFav) {
      DOM.btnFavReason.classList.add('favorited');
    } else {
      DOM.btnFavReason.classList.remove('favorited');
    }
  }

  function toggleFavoriteReason(index) {
    const reason = REASONS_DATA[index];
    if (!reason) return;

    const favIndex = state.favorites.indexOf(reason.id);
    if (favIndex === -1) {
      state.favorites.push(reason.id);
      DOM.btnFavReason.classList.add('favorited');
      createSparkleBurst(window.innerWidth / 2, window.innerHeight / 2);
    } else {
      state.favorites.splice(favIndex, 1);
      DOM.btnFavReason.classList.remove('favorited');
    }
    localStorage.setItem('kirthikha_fav_reasons', JSON.stringify(state.favorites));
  }

  function openReasonsModal() {
    if (!DOM.reasonsListGrid) return;
    DOM.reasonsListGrid.innerHTML = '';

    REASONS_DATA.forEach((reason, idx) => {
      const isFav = state.favorites.includes(reason.id);
      const item = document.createElement('div');
      item.className = 'reason-grid-item';
      item.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span style="font-family:var(--font-serif-display); font-size:0.75rem; letter-spacing:2px; color:var(--text-silver);">${reason.number}</span>
          ${isFav ? '<span style="color:var(--accent-heart);">❤️</span>' : ''}
        </div>
        <div style="font-family:var(--font-serif); font-size:1.05rem; color:#fff; line-height:1.4;">"${reason.text}"</div>
      `;
      item.addEventListener('click', () => {
        state.currentReasonIndex = idx;
        updateReasonWithAnim();
        DOM.reasonsModal.classList.remove('active');
      });
      DOM.reasonsListGrid.appendChild(item);
    });

    DOM.reasonsModal.classList.add('active');
  }

  /* ==============================================================================
     6. SECTION 6: OUR LITTLE MEMORIES
     ============================================================================== */
  function initMemories() {
    if (typeof MEMORIES_DATA === 'undefined' || !MEMORIES_DATA.length) return;

    renderMemories('all');

    // Filter Buttons
    const filterButtons = DOM.memoryFilters.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        renderMemories(filter);
      });
    });

    // Lightbox Controls
    DOM.btnLightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    DOM.btnLightboxNext.addEventListener('click', () => navigateLightbox(1));
  }

  function renderMemories(filter) {
    if (!DOM.memoriesGrid) return;
    DOM.memoriesGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? MEMORIES_DATA
      : MEMORIES_DATA.filter(m => m.category.toLowerCase().includes(filter.toLowerCase()));

    filtered.forEach((memory, idx) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.innerHTML = `
        <div class="memory-img-wrapper">
          <img src="${memory.image}" alt="${memory.title}" loading="lazy">
          <span class="memory-category-tag">${memory.category}</span>
        </div>
        <div class="memory-content">
          <span class="memory-date">${memory.date}</span>
          <h3 class="memory-title">${memory.title}</h3>
          <p class="memory-desc">${memory.description}</p>
          <div class="memory-quote">"${memory.quote}"</div>
        </div>
      `;

      card.addEventListener('click', () => {
        const fullIdx = MEMORIES_DATA.findIndex(m => m.id === memory.id);
        openLightbox(fullIdx);
      });

      DOM.memoriesGrid.appendChild(card);
    });
  }

  function openLightbox(index) {
    state.currentLightboxIndex = index;
    updateLightboxContent();
    DOM.lightboxModal.classList.add('active');
  }

  function updateLightboxContent() {
    const memory = MEMORIES_DATA[state.currentLightboxIndex];
    if (!memory) return;

    DOM.lightboxImg.src = memory.image;
    DOM.lightboxImg.alt = memory.title;
    DOM.lightboxTitle.textContent = memory.title;
    DOM.lightboxDate.textContent = memory.date;
    DOM.lightboxDesc.textContent = memory.description;
  }

  function navigateLightbox(dir) {
    state.currentLightboxIndex += dir;
    if (state.currentLightboxIndex < 0) {
      state.currentLightboxIndex = MEMORIES_DATA.length - 1;
    } else if (state.currentLightboxIndex >= MEMORIES_DATA.length) {
      state.currentLightboxIndex = 0;
    }
    updateLightboxContent();
  }

  /* ==============================================================================
     SECTION: MY DEEPEST FEAR & THE VULNERABLE TRUTH
     ============================================================================== */
  function initFearSection() {
    if (!DOM.btnReassureHeart || !DOM.reassuranceRevealed) return;

    // Check if she previously sealed the promise
    const alreadyReassured = localStorage.getItem('kirthikha_reassured_fear');
    if (alreadyReassured) {
      DOM.reassuranceRevealed.classList.add('active');
      DOM.btnReassureHeart.style.display = 'none';
      if (DOM.reassuranceTimestamp) {
        DOM.reassuranceTimestamp.textContent = `Sealed with eternal love • ${alreadyReassured}`;
      }
    }

    DOM.btnReassureHeart.addEventListener('click', (e) => {
      // Audio chime note
      if (audio) {
        try {
          audio.initWebAudio();
          if (audio.audioCtx) {
            audio.playNote(659.25, audio.audioCtx.currentTime, 3, 'sine');
            audio.playNote(523.25, audio.audioCtx.currentTime + 0.25, 3.5, 'triangle');
          }
        } catch (err) {}
      }

      // Sparkle particles
      createSparkleBurst(e.clientX, e.clientY);
      createSparkleBurst(window.innerWidth / 2, window.innerHeight / 2);

      // Smooth reveal
      DOM.reassuranceRevealed.classList.add('active');
      DOM.btnReassureHeart.style.transition = 'transform 0.4s var(--ease-luxury), opacity 0.4s';
      DOM.btnReassureHeart.style.transform = 'scale(0.95)';
      DOM.btnReassureHeart.style.opacity = '0';
      setTimeout(() => {
        DOM.btnReassureHeart.style.display = 'none';
      }, 400);

      const now = new Date();
      const dateString = now.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      const timeString = `Sealed into our universe on ${dateString} • Forever ♾️❤️`;
      if (DOM.reassuranceTimestamp) {
        DOM.reassuranceTimestamp.textContent = timeString;
      }
      localStorage.setItem('kirthikha_reassured_fear', dateString);
    });
  }

  /* ==============================================================================
     7. SECTION 7: WHEN YOU FEEL UNLOVED (SAFE HAVEN)
     ============================================================================== */
  const comfortMessages = [
    "You are loved.",
    "You are precious.",
    "You are special.",
    "You are someone I never want to take for granted.",
    "Even on your difficult days, you deserve all the love and gentleness in this world."
  ];

  const comfortNotes = {
    anxious: {
      title: "When You Feel Anxious & Overwhelmed",
      body: "Close your eyes for three seconds, maaaa. Breathe slowly. None of those anxious thoughts define your worth. You are safe with me. Whenever everything feels too loud, remember that my arms are always your quiet sanctuary. You don't have to carry the weight alone."
    },
    missing: {
      title: "When You Miss Me",
      body: "Look up at the night sky. In this vast universe of 8 billion people, our hearts are beating to the exact same rhythm. You are never truly alone. Anniku un Mela paduthu thoongunen paaru... that peace is still alive between us, and soon we'll be right beside each other again."
    },
    sleep: {
      title: "When You Can't Sleep",
      body: "Imagine resting your head on my chest right now. Feel how calm and quiet everything becomes. No phone, no worries, no overthinking — just steady, slow warmth. Put everything down, let your eyes get heavy, and sleep peacefully, my sweet panniyaram. Tomorrow is a gentle new day."
    },
    doubt: {
      title: "When You Doubt Yourself",
      body: "You are the sweetest blessing of my life. You don't have to be perfect to be cherished; you are deeply, unconditionally loved just as you are. You are my wife, my home, and the brightest star in my universe."
    }
  };

  function initComfort() {
    displayComfortMessage(0);

    // Auto rotate comfort messages gently every 6 seconds
    startComfortTimer();

    // Affirmation Pills
    DOM.comfortPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const key = pill.dataset.note;
        const note = comfortNotes[key];
        if (note) {
          DOM.comfortModalTitle.textContent = note.title;
          DOM.comfortModalBody.textContent = note.body;
          DOM.comfortModal.classList.add('active');
        }
      });
    });
  }

  function displayComfortMessage(index) {
    state.currentComfortIndex = index;
    DOM.comfortMessageText.classList.add('anim-fade');

    setTimeout(() => {
      DOM.comfortMessageText.textContent = comfortMessages[index];
      DOM.comfortMessageText.classList.remove('anim-fade');

      // Update dots
      if (DOM.comfortStepDots) {
        DOM.comfortStepDots.innerHTML = '';
        comfortMessages.forEach((_, i) => {
          const dot = document.createElement('div');
          dot.className = `comfort-step-dot ${i === index ? 'active' : ''}`;
          dot.addEventListener('click', () => {
            stopComfortTimer();
            displayComfortMessage(i);
            startComfortTimer();
          });
          DOM.comfortStepDots.appendChild(dot);
        });
      }
    }, 300);
  }

  function startComfortTimer() {
    stopComfortTimer();
    state.comfortTimer = setInterval(() => {
      const nextIdx = (state.currentComfortIndex + 1) % comfortMessages.length;
      displayComfortMessage(nextIdx);
    }, 6000);
  }

  function stopComfortTimer() {
    if (state.comfortTimer) {
      clearInterval(state.comfortTimer);
      state.comfortTimer = null;
    }
  }

  /* ==============================================================================
     8. SECTION 8: A LETTER FROM MY HEART
     ============================================================================== */
  function initLetter() {
    if (typeof LETTER_DATA === 'undefined') return;

    // Envelope Click to open
    DOM.envelopeWrapper.addEventListener('click', () => {
      openLetter();
    });

    DOM.btnPrevPara.addEventListener('click', () => navigateLetterPara(-1));
    DOM.btnNextPara.addEventListener('click', () => navigateLetterPara(1));

    DOM.btnToggleFullLetter.addEventListener('click', () => {
      const isActive = DOM.fullLetterContainer.classList.toggle('active');
      DOM.btnToggleFullLetter.textContent = isActive ? 'Hide Full Letter' : 'Read Full Continuous Letter';
    });

    renderFullLetter();
  }

  function openLetter() {
    DOM.envelopeWrapper.style.transition = 'transform 0.6s var(--ease-luxury), opacity 0.6s';
    DOM.envelopeWrapper.style.transform = 'translateY(-20px) scale(0.95)';
    DOM.envelopeWrapper.style.opacity = '0';

    setTimeout(() => {
      DOM.envelopeWrapper.style.display = 'none';
      DOM.revealedLetterBox.classList.add('active');
      displayLetterParagraph(0);
      createSparkleBurst(window.innerWidth / 2, window.innerHeight / 2);
    }, 450);
  }

  function displayLetterParagraph(index) {
    state.currentLetterParaIndex = index;
    const para = LETTER_DATA.paragraphs[index];
    if (!para) return;

    DOM.letterCounterTag.textContent = `Paragraph ${index + 1} of ${LETTER_DATA.paragraphs.length}`;
    DOM.letterParaText.classList.add('anim-fade');

    setTimeout(() => {
      // Highlight special phrases in handwritten typography
      let formattedText = para.text;
      if (para.highlightPhrase && formattedText.includes(para.highlightPhrase)) {
        formattedText = formattedText.replace(
          para.highlightPhrase,
          `<span class="letter-handwriting-highlight">${para.highlightPhrase}</span>`
        );
      }

      DOM.letterParaText.innerHTML = formattedText;
      DOM.letterParaText.classList.remove('anim-fade');
    }, 250);
  }

  function navigateLetterPara(dir) {
    state.currentLetterParaIndex += dir;
    if (state.currentLetterParaIndex < 0) {
      state.currentLetterParaIndex = LETTER_DATA.paragraphs.length - 1;
    } else if (state.currentLetterParaIndex >= LETTER_DATA.paragraphs.length) {
      state.currentLetterParaIndex = 0;
    }
    displayLetterParagraph(state.currentLetterParaIndex);
  }

  function renderFullLetter() {
    if (!DOM.fullLetterContainer) return;
    DOM.fullLetterContainer.innerHTML = '';

    LETTER_DATA.paragraphs.forEach(para => {
      const p = document.createElement('p');
      p.className = 'full-letter-p';

      let formattedText = para.text;
      if (para.highlightPhrase && formattedText.includes(para.highlightPhrase)) {
        formattedText = formattedText.replace(
          para.highlightPhrase,
          `<span class="letter-handwriting-highlight">${para.highlightPhrase}</span>`
        );
      }

      p.innerHTML = formattedText;
      DOM.fullLetterContainer.appendChild(p);
    });
  }

  /* ==============================================================================
     9. SECTION 9: THE FINAL SURPRISE
     ============================================================================== */
  function initSurprise() {
    heartSurprise = new HeartParticleSurprise(DOM.surpriseCanvas);

    DOM.btnUnlockSurprise.addEventListener('click', () => {
      triggerFinalSurprise();
    });

    DOM.surpriseCloseBtn.addEventListener('click', () => {
      closeFinalSurprise();
    });
  }

  function triggerFinalSurprise() {
    DOM.surpriseOverlay.classList.add('active');
    heartSurprise.start();

    // Reset lines
    DOM.surpriseLine1.classList.remove('visible');
    DOM.surpriseLine2.classList.remove('visible');
    DOM.surpriseLine3.classList.remove('visible');
    DOM.infinityWrapper.classList.remove('visible');

    // Sequential cinematic appearances
    setTimeout(() => {
      DOM.surpriseLine1.classList.add('visible');
    }, 1800);

    setTimeout(() => {
      DOM.surpriseLine2.classList.add('visible');
    }, 4500);

    setTimeout(() => {
      DOM.surpriseLine3.classList.add('visible');
    }, 7500);

    setTimeout(() => {
      DOM.infinityWrapper.classList.add('visible');
    }, 10000);
  }

  function closeFinalSurprise() {
    DOM.surpriseOverlay.classList.remove('active');
    heartSurprise.stop();
  }

  /* ==============================================================================
     10. UTILITIES, MODALS, SPARKLE PARTICLES, NAVIGATION
     ============================================================================== */
  function initGlobalInteractions() {
    // Audio Toggle Button
    DOM.audioToggleBtn.addEventListener('click', () => {
      audio.toggle();
    });

    // Mobile Navigation Toggle
    if (DOM.mobileNavToggle) {
      DOM.mobileNavToggle.addEventListener('click', () => {
        DOM.navLinks.classList.toggle('mobile-active');
      });
    }

    // Close mobile nav on click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (DOM.navLinks) DOM.navLinks.classList.remove('mobile-active');
      });
    });

    // Modal Close Buttons
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.universe-modal').forEach(m => m.classList.remove('active'));
      });
    });

    // Close modal on outside backdrop click
    document.querySelectorAll('.universe-modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    });

    // Back to top
    if (DOM.btnBackToTop) {
      DOM.btnBackToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Keyboard 'M' shortcut for mute/unmute
    window.addEventListener('keydown', (e) => {
      if (document.activeElement.tagName === 'INPUT') return;
      if (e.key === 'm' || e.key === 'M') {
        audio.toggle();
      }
      if (e.key === 'Escape') {
        document.querySelectorAll('.universe-modal').forEach(m => m.classList.remove('active'));
        if (DOM.surpriseOverlay.classList.contains('active')) {
          closeFinalSurprise();
        }
      }
    });
  }

  // Sparkle Burst Particle Effect on click
  function createSparkleBurst(x, y) {
    const burst = document.createElement('div');
    burst.style.position = 'fixed';
    burst.style.left = `${x}px`;
    burst.style.top = `${y}px`;
    burst.style.pointerEvents = 'none';
    burst.style.zIndex = '9999';
    document.body.appendChild(burst);

    const count = 16;
    for (let i = 0; i < count; i++) {
      const spark = document.createElement('div');
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4;
      const distance = Math.random() * 65 + 30;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      spark.style.position = 'absolute';
      spark.style.width = '3px';
      spark.style.height = '3px';
      spark.style.backgroundColor = '#ffffff';
      spark.style.borderRadius = '50%';
      spark.style.boxShadow = '0 0 8px #ffffff';
      spark.style.transition = 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
      spark.style.opacity = '1';

      burst.appendChild(spark);

      requestAnimationFrame(() => {
        spark.style.transform = `translate(${tx}px, ${ty}px) scale(0)`;
        spark.style.opacity = '0';
      });
    }

    setTimeout(() => {
      burst.remove();
    }, 700);
  }

  // Fisher-Yates array shuffle
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  /* ==============================================================================
     INITIALIZE ALL SYSTEMS
     ============================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initOpeningScene();
    initLanguages();
    initReasons();
    initMemories();
    initFearSection();
    initComfort();
    initLetter();
    initSurprise();
    initGlobalInteractions();
  });

})();
