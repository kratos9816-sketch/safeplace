/**
 * ==============================================================================
 * OUR LITTLE MEMORIES DATA FILE
 * ==============================================================================
 * Welcome! This file holds all your precious shared memories.
 *
 * HOW TO CUSTOMIZE WITH YOUR REAL PHOTOGRAPHS:
 * 1. Put your photos into the folder: assets/images/ (e.g. photo1.jpg, photo2.png)
 * 2. Change the "image" field below from "assets/images/memory-1.svg" to your photo filename.
 * 3. Update the "title", "date", "description", and "category" for each memory.
 * 4. You can add more memories or remove existing ones — the gallery will adapt automatically!
 * ==============================================================================
 */

const MEMORIES_DATA = [
  {
    id: 1,
    title: "The First Moment We Met",
    date: "A Day Written in the Stars",
    category: "The Beginning",
    description: "In a universe of eight billion people, that was the exact moment my favorite coincidence began. Everything felt new, quiet, and wonderfully unscripted.",
    quote: "The day our orbits finally aligned.",
    image: "assets/images/memory-1.svg",
    aspectRatio: "landscape"
  },
  {
    id: 2,
    title: "Late Night Talks & Endless Laughter",
    date: "Under the Midnight Sky",
    category: "Late Nights",
    description: "When minutes effortlessly melted into hours. We talked about silly dreams, shared our deepest fears, and laughed until our stomachs hurt. I never wanted those calls to end.",
    quote: "When hours felt like seconds.",
    image: "assets/images/memory-2.svg",
    aspectRatio: "portrait"
  },
  {
    id: 3,
    title: "The First Time I Held Your Hand",
    date: "A Gentle Touch",
    category: "Touch & Warmth",
    description: "The warmth of your hand in mine sent a quiet stillness through my whole chest. It wasn't just holding hands — it felt like arriving home.",
    quote: "Holding your hand, holding my entire world.",
    image: "assets/images/memory-3.svg",
    aspectRatio: "landscape"
  },
  {
    id: 4,
    title: "Under the Silver Twilight",
    date: "A Quiet Evening Walk",
    category: "Sweet Moments",
    description: "Walking beside you with the cool evening breeze around us. No rush, no worries — just the sound of your footsteps and your gentle voice keeping me company.",
    quote: "Quiet promises before the stars.",
    image: "assets/images/memory-4.svg",
    aspectRatio: "landscape"
  },
  {
    id: 5,
    title: "The Deepest Peace I Ever Felt",
    date: "Resting on Your Chest",
    category: "Peace & Safe Place",
    description: "Anniku un Mela paduthu thoongunen paaru... Avoloooo peaceful ah irunthuchuuu maaaa. Not a single restless thought in my mind. Just the pure, soothing feeling of being with my wife.",
    quote: "Not a single thought. Just pure peaceful sleep.",
    image: "assets/images/memory-5.svg",
    aspectRatio: "portrait"
  },
  {
    id: 6,
    title: "Cozy Rainy Day Together",
    date: "A Rainy Afternoon",
    category: "Cozy Moments",
    description: "Watching rain droplets slide down the glass while we stayed wrapped in warm blankets, safe from the storm outside. The whole world vanished, leaving only our warmth.",
    quote: "Rain on the window, safe warmth in our arms.",
    image: "assets/images/memory-6.svg",
    aspectRatio: "landscape"
  },
  {
    id: 7,
    title: "Cooking & Sweet Panniyaram",
    date: "Kitchen Adventures",
    category: "Silly & Sweet",
    description: "Our silly kitchen moments, stealing bites, teasing each other, and laughing when things got messy. My sweetest panniyaram, making life delicious.",
    quote: "My sweet panniyaram, sweetness in every second.",
    image: "assets/images/memory-7.svg",
    aspectRatio: "portrait"
  },
  {
    id: 8,
    title: "Our Promise of Forever",
    date: "Into Eternity",
    category: "Forever",
    description: "Endha avasaramum illaama namaloda azhgaana world la namma rendu perum happy ah irukalaammmm. Forever with you, my love. ♾️❤️",
    quote: "You and me, our own little universe.",
    image: "assets/images/memory-8.svg",
    aspectRatio: "landscape"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MEMORIES_DATA;
}
