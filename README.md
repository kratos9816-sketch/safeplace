# A Little Universe Called Kirthikha ❤️

> *"In a universe of 8 billion people, my favourite coincidence was YOU."*  
> *A luxury, cinematic, interactive digital universe crafted for Kirthikha.*

---

## 🌌 Overview

**"A Little Universe Called Kirthikha"** is a bespoke, luxury digital romantic experience built using pure modern HTML5, CSS3, and Vanilla JavaScript. It is designed to feel like an intimate, Apple-grade editorial website inspired by deep space, quiet nights, and eternal affection — strictly avoiding cartoonish clichés in favor of cobalt black (`#050505`), pure white (`#FFFFFF`), and soft silver (`#C0C0C0`).

---

## ✨ Features & Constellations

1. **The Opening Experience**
   - Fullscreen deep black space with slowly twinkling stars and celestial dust.
   - Cinematic entry quote: *"In a universe of 8 billion people, my favourite coincidence was YOU."*
   - Interactive **"Enter My Universe"** button with a starlight warp-speed galaxy burst transition and smooth audio fade-in.

2. **Our Universe Hub (6 Interactive Constellations)**
   - Minimalist luxury editorial cards with translucent silver borders, subtle depth, and hover interactions:
     - **I. 340 Languages of Love**
     - **II. 100 Reasons Why I Choose You**
     - **III. Our Little Memories**
     - **IV. When You Feel Unloved**
     - **V. A Letter From My Heart**
     - **VI. One Last Surprise**

3. **340 Languages of Love**
   - At least 340 verified real-world languages with authentic native scripts, romanized pronunciations, and regions.
   - Non-repeating shuffle cycle (no language repeats until all 340 have been discovered).
   - "Tell me you love me" button with dynamic particle sparkles on every click.
   - "Copy Phrase" functionality.
   - "Explore All 340" searchable archive drawer with region filtering.

4. **100 Reasons Why I Choose You**
   - 100 distinct, genuine, and deeply emotional reasons why you choose Kirthikha every day.
   - Beautiful dark-glass letter card with wax-seal accents and elegant typography.
   - Dynamic progress counter (`Reason 01 of 100`) and progress bar.
   - Interactive controls: Previous, Next, Random Surprise Reason (`🎲`), and Favorite Bookmarking (`♥` stored in `localStorage`).
   - "View All 100" modal drawer.

5. **Our Little Memories (Personal Gallery)**
   - Pre-loaded with 8 luxury aesthetic placeholder illustrations.
   - Category filters (*The Beginning, Late Nights, Touch & Warmth, Safe Place, Silly & Sweet, Forever*).
   - Interactive Lightbox modal with high-res viewing, captions, quotes, and keyboard navigation.
   - Clearly documented data file in `js/memories.js` for instant photo replacement.

6. **When You Feel Unloved (Safe Haven)**
   - An emotionally peaceful sanctuary designed like a warm hug.
   - Floating stars with an interactive "Breathe with me" pulsing orb.
   - Slow, sequential affirmations:
     - *"You are loved."*
     - *"You are precious."*
     - *"You are special."*
     - *"You are someone I never want to take for granted."*
     - *"Even on your difficult days, you deserve all the love and gentleness in this world."*
   - Emergency comfort notes for moments when she feels anxious, misses you, can't sleep, or doubts herself.

7. **A Letter From My Heart**
   - 3D interactive sealed envelope with a silver wax seal engraved with **"K ❤️"**.
   - Clicking breaks the seal and smoothly reveals the letter card.
   - Displays your **exact heartfelt letter** paragraph by paragraph with manual pacing controls and highlighted handwritten phrases.
   - "Read Full Continuous Letter" toggle to read everything uninterrupted.

8. **The Final Surprise**
   - Screen dissolves into deep darkness.
   - 460+ cosmic particles spiral inward using mathematical parametric formulas to construct a glowing, beating heart.
   - Sequential cinematic text transitions:
     1. *"Among all the things life could have given me, I'm happiest that it gave me you."*
     2. *"You're my favourite coincidence, my sweetest blessing, and my little universe."*
     3. *"I LOVE YOU, KIRTHIKHA. ❤️"*
   - Animated glowing infinity symbol (`♾️`).

9. **Music & Audio System**
   - Built-in procedural Web Audio API romantic celestial piano synthesizer that works 100% out of the box with zero external dependencies.
   - Support for custom music files (`assets/music/universe-theme.mp3`) with seamless fallback.
   - Floating audio pill with dancing equalizer bars, play/pause controls, and keyboard shortcut (`M` to mute/unmute).
   - Strictly conforms to browser autoplay policies (starts only upon entering the universe or tapping the music button).

---

## 📁 Project Directory Structure

```
little-universe-kirthikha/
│
├── index.html                  # Main application structure
├── css/
│   └── style.css               # Editorial luxury styles, responsive design, animations
├── js/
│   ├── main.js                 # Starfields, heart particle canvas, audio engine, state
│   ├── languages.js            # 340 verified translations of "I love you"
│   ├── reasons.js              # 100 heartfelt reasons why I choose you
│   ├── memories.js             # Photo gallery data, titles, dates, descriptions
│   └── letter.js               # Verbatim romantic letter & paragraphs
├── assets/
│   ├── images/                 # Placeholder SVGs & your future photos
│   ├── music/                  # Background music track (universe-theme.mp3)
│   └── fonts/                  # Local fonts directory
└── README.md                   # Complete documentation & guide
```

---

## 🚀 How to Run Locally

### Option 1: `npm run dev` (Recommended)
Simply open your terminal in this directory and run:
```bash
npm run dev
```
- Starts the local development server at **`http://localhost:3000`**.
- Automatically launches your default web browser.
- Built-in **instant live-reloading** (auto-refreshes when you save changes to any file).
- Pure Node.js — zero external package downloads needed!

### Option 2: Direct Double-Click
Double-click `index.html` in your file explorer. It opens immediately in any modern browser.

### Option 3: VS Code Live Server
If using VS Code, right-click `index.html` and choose **"Open with Live Server"**.

---

## 🛠️ How to Customize

### 1. Replacing Photographs with Real Photos:
- Save your personal pictures into `assets/images/` (e.g. `pic1.jpg`, `pic2.png`).
- Open `js/memories.js`.
- Update the `image`, `title`, `date`, and `description` fields:
  ```javascript
  {
    id: 1,
    title: "Our Very First Date",
    date: "14th February",
    category: "The Beginning",
    description: "The moment I saw you walk in...",
    image: "assets/images/pic1.jpg"
  }
  ```

### 2. Using Your Own Romantic Music File:
- Place your audio file in `assets/music/`.
- Rename it to `universe-theme.mp3`.
- The website will automatically detect it and play your chosen song!
- If absent, the built-in ambient celestial piano synthesizer plays automatically.

### 3. Adding or Updating Reasons:
- Open `js/reasons.js` and modify any reason in the list.

### 4. Updating the Letter:
- Open `js/letter.js` to review or customize your letter.

---

## 📱 Mobile & Tablet Responsiveness

- Fully responsive from mobile devices (320px+) to high-resolution desktop monitors (4K).
- Supports touch gestures, keyboard arrows (`←` and `→` for reasons, `M` for audio, `Esc` for modals).
- Zero console errors, zero external runtime library dependencies.

---

Crafted with infinite love for Kirthikha. ♾️❤️
