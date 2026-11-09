/**
 * 100 Reasons Why I Choose You
 * A collection of genuine, heartfelt reasons dedicated to Kirthikha
 */

const REASONS_DATA = [
  {
    "id": 1,
    "number": "Reason 01 of 100",
    "text": "The way my overthinking mind goes completely quiet the moment you are next to me.",
    "favorite": false
  },
  {
    "id": 2,
    "number": "Reason 02 of 100",
    "text": "How I had the deepest, most peaceful sleep of my life resting my head on your chest.",
    "favorite": false
  },
  {
    "id": 3,
    "number": "Reason 03 of 100",
    "text": "Because when I am with you, I don't feel the need to hide any part of who I am.",
    "favorite": false
  },
  {
    "id": 4,
    "number": "Reason 04 of 100",
    "text": "The undeniable feeling in my chest that you are my home and my safe place.",
    "favorite": false
  },
  {
    "id": 5,
    "number": "Reason 05 of 100",
    "text": "Because in a world full of noise, your voice is the only sound that calms my soul.",
    "favorite": false
  },
  {
    "id": 6,
    "number": "Reason 06 of 100",
    "text": "How you hold my hand without letting go, as if reminding me I'll never walk alone.",
    "favorite": false
  },
  {
    "id": 7,
    "number": "Reason 07 of 100",
    "text": "The gentle way you look at me when you think I'm not noticing.",
    "favorite": false
  },
  {
    "id": 8,
    "number": "Reason 08 of 100",
    "text": "Because when you smile, my entire universe lights up and every worry disappears.",
    "favorite": false
  },
  {
    "id": 9,
    "number": "Reason 09 of 100",
    "text": "How you feel my emotions before I even say a single word out loud.",
    "favorite": false
  },
  {
    "id": 10,
    "number": "Reason 10 of 100",
    "text": "Because you are not just someone I love — you are my wife, my destiny, and my peace.",
    "favorite": false
  },
  {
    "id": 11,
    "number": "Reason 11 of 100",
    "text": "The cutest way you talk when you are sleepy or asking for something with affection.",
    "favorite": false
  },
  {
    "id": 12,
    "number": "Reason 12 of 100",
    "text": "How you pout and scold me with so much love that I just want to hug you tighter.",
    "favorite": false
  },
  {
    "id": 13,
    "number": "Reason 13 of 100",
    "text": "Because you are my sweet panniyaram, the softest and sweetest part of my everyday life.",
    "favorite": false
  },
  {
    "id": 14,
    "number": "Reason 14 of 100",
    "text": "The way your eyes crinkle with pure warmth whenever something makes you burst into laughter.",
    "favorite": false
  },
  {
    "id": 15,
    "number": "Reason 15 of 100",
    "text": "How you listen to my silly stories as if they are the most fascinating things in the world.",
    "favorite": false
  },
  {
    "id": 16,
    "number": "Reason 16 of 100",
    "text": "The warmth of your hugs that instantly erase every trace of fatigue from my body.",
    "favorite": false
  },
  {
    "id": 17,
    "number": "Reason 17 of 100",
    "text": "Because pampering you and making you feel like a queen is my favorite thing to do.",
    "favorite": false
  },
  {
    "id": 18,
    "number": "Reason 18 of 100",
    "text": "The way you tuck your chin or lean into me whenever we are close.",
    "favorite": false
  },
  {
    "id": 19,
    "number": "Reason 19 of 100",
    "text": "How even the most ordinary silence with you feels richer than a thousand conversations.",
    "favorite": false
  },
  {
    "id": 20,
    "number": "Reason 20 of 100",
    "text": "The little cute faces you make when you are trying to act serious or angry with me.",
    "favorite": false
  },
  {
    "id": 21,
    "number": "Reason 21 of 100",
    "text": "Because when you are sad, my heart aches until I see your smile return.",
    "favorite": false
  },
  {
    "id": 22,
    "number": "Reason 22 of 100",
    "text": "The honesty in your heart and the pure, genuine soul you carry inside you.",
    "favorite": false
  },
  {
    "id": 23,
    "number": "Reason 23 of 100",
    "text": "Because you understand my silent fears, even the ones I struggle to put into words.",
    "favorite": false
  },
  {
    "id": 24,
    "number": "Reason 24 of 100",
    "text": "The way you believe in me even during the moments when I doubt myself.",
    "favorite": false
  },
  {
    "id": 25,
    "number": "Reason 25 of 100",
    "text": "Because choosing you was the easiest, most natural decision my heart ever made.",
    "favorite": false
  },
  {
    "id": 26,
    "number": "Reason 26 of 100",
    "text": "The way you look in candid moments — effortlessly beautiful without even trying.",
    "favorite": false
  },
  {
    "id": 27,
    "number": "Reason 27 of 100",
    "text": "Because you have seen my vulnerabilities and met them with tenderness instead of judgment.",
    "favorite": false
  },
  {
    "id": 28,
    "number": "Reason 28 of 100",
    "text": "How you turn simple everyday moments into memories I will cherish for fifty years.",
    "favorite": false
  },
  {
    "id": 29,
    "number": "Reason 29 of 100",
    "text": "The way our fingers fit together so perfectly, like two puzzle pieces designed by fate.",
    "favorite": false
  },
  {
    "id": 30,
    "number": "Reason 30 of 100",
    "text": "Because you make me want to be the best, strongest, and most loving man for you.",
    "favorite": false
  },
  {
    "id": 31,
    "number": "Reason 31 of 100",
    "text": "The dream of having our own little world where nobody else exists — just you and me.",
    "favorite": false
  },
  {
    "id": 32,
    "number": "Reason 32 of 100",
    "text": "How excited I feel imagining us cooking together in our little kitchen and stealing bites.",
    "favorite": false
  },
  {
    "id": 33,
    "number": "Reason 33 of 100",
    "text": "The thought of waking up every morning for the rest of my life and seeing your sleeping face.",
    "favorite": false
  },
  {
    "id": 34,
    "number": "Reason 34 of 100",
    "text": "How we can sit together for hours without any rush, just talking, laughing, and konjing.",
    "favorite": false
  },
  {
    "id": 35,
    "number": "Reason 35 of 100",
    "text": "Because I don't want a grand fairytale with anyone else; I want an ordinary, beautiful life with you.",
    "favorite": false
  },
  {
    "id": 36,
    "number": "Reason 36 of 100",
    "text": "The sweet anticipation of slow evenings, making tea, and sharing the day's laughter.",
    "favorite": false
  },
  {
    "id": 37,
    "number": "Reason 37 of 100",
    "text": "How safe I feel knowing that whatever storm comes outside, you and I stand together.",
    "favorite": false
  },
  {
    "id": 38,
    "number": "Reason 38 of 100",
    "text": "The way you care for the smallest details to make sure everyone around you is comfortable.",
    "favorite": false
  },
  {
    "id": 39,
    "number": "Reason 39 of 100",
    "text": "Because you inspire me to love deeper, forgive quicker, and protect what truly matters.",
    "favorite": false
  },
  {
    "id": 40,
    "number": "Reason 40 of 100",
    "text": "The gentle rhythm of your breathing when you fall asleep beside me.",
    "favorite": false
  },
  {
    "id": 41,
    "number": "Reason 41 of 100",
    "text": "How you get excited about little things like treats, cozy corners, and warm hugs.",
    "favorite": false
  },
  {
    "id": 42,
    "number": "Reason 42 of 100",
    "text": "The adorable way you say my name that makes my heart skip a beat every single time.",
    "favorite": false
  },
  {
    "id": 43,
    "number": "Reason 43 of 100",
    "text": "Because even when we disagree, my only desire at the end of the day is to hold you close.",
    "favorite": false
  },
  {
    "id": 44,
    "number": "Reason 44 of 100",
    "text": "The warmth of your cheeks when I cup your face in my hands.",
    "favorite": false
  },
  {
    "id": 45,
    "number": "Reason 45 of 100",
    "text": "How you make a dull, stressful day feel light just by sending a sweet message.",
    "favorite": false
  },
  {
    "id": 46,
    "number": "Reason 46 of 100",
    "text": "The genuine kindness and empathy you carry for people around you.",
    "favorite": false
  },
  {
    "id": 47,
    "number": "Reason 47 of 100",
    "text": "Because you are my favorite coincidence among 8 billion people on this planet.",
    "favorite": false
  },
  {
    "id": 48,
    "number": "Reason 48 of 100",
    "text": "The way you tease me and then immediately pull me in with an affectionate smile.",
    "favorite": false
  },
  {
    "id": 49,
    "number": "Reason 49 of 100",
    "text": "How you remember small things I mentioned weeks ago that I thought you forgot.",
    "favorite": false
  },
  {
    "id": 50,
    "number": "Reason 50 of 100",
    "text": "Because being beside you is the only place where I feel 100% at peace.",
    "favorite": false
  },
  {
    "id": 51,
    "number": "Reason 51 of 100",
    "text": "The reassuring gentleness in your touch that tells me everything will be alright.",
    "favorite": false
  },
  {
    "id": 52,
    "number": "Reason 52 of 100",
    "text": "Because your love doesn't feel like a condition or a burden; it feels like pure grace.",
    "favorite": false
  },
  {
    "id": 53,
    "number": "Reason 53 of 100",
    "text": "How you check on me when I sound tired or quiet.",
    "favorite": false
  },
  {
    "id": 54,
    "number": "Reason 54 of 100",
    "text": "Because you are the very first person I want to tell good news to, and the only one I run to with bad news.",
    "favorite": false
  },
  {
    "id": 55,
    "number": "Reason 55 of 100",
    "text": "The way you make our conversations feel like the safest haven in the world.",
    "favorite": false
  },
  {
    "id": 56,
    "number": "Reason 56 of 100",
    "text": "Because you never let me go to sleep feeling alone or uncared for.",
    "favorite": false
  },
  {
    "id": 57,
    "number": "Reason 57 of 100",
    "text": "The patience you show with my flaws, teaching me how to love more gently.",
    "favorite": false
  },
  {
    "id": 58,
    "number": "Reason 58 of 100",
    "text": "How your presence turns four plain walls into a warm, welcoming home.",
    "favorite": false
  },
  {
    "id": 59,
    "number": "Reason 59 of 100",
    "text": "Because you love me not just on my best days, but especially when I am fragile.",
    "favorite": false
  },
  {
    "id": 60,
    "number": "Reason 60 of 100",
    "text": "The soft laughter you let out when I whisper silly romantic things into your ear.",
    "favorite": false
  },
  {
    "id": 61,
    "number": "Reason 61 of 100",
    "text": "The fierce loyalty and integrity you possess in your character.",
    "favorite": false
  },
  {
    "id": 62,
    "number": "Reason 62 of 100",
    "text": "The softness in your eyes when you look at children, animals, or sweet moments.",
    "favorite": false
  },
  {
    "id": 63,
    "number": "Reason 63 of 100",
    "text": "Because your smile carries a healing magic that no medicine could ever replicate.",
    "favorite": false
  },
  {
    "id": 64,
    "number": "Reason 64 of 100",
    "text": "The effortless grace and dignity with which you carry yourself.",
    "favorite": false
  },
  {
    "id": 65,
    "number": "Reason 65 of 100",
    "text": "Because you are genuinely pure-hearted in a world that is often complicated.",
    "favorite": false
  },
  {
    "id": 66,
    "number": "Reason 66 of 100",
    "text": "How your happiness genuinely becomes my happiness, effortlessly and completely.",
    "favorite": false
  },
  {
    "id": 67,
    "number": "Reason 67 of 100",
    "text": "Because you are my favorite person to dream with and my favorite person to wake up to.",
    "favorite": false
  },
  {
    "id": 68,
    "number": "Reason 68 of 100",
    "text": "The way you hold onto my arm when we are walking together.",
    "favorite": false
  },
  {
    "id": 69,
    "number": "Reason 69 of 100",
    "text": "Because you are both my greatest adventure and my calmest sanctuary.",
    "favorite": false
  },
  {
    "id": 70,
    "number": "Reason 70 of 100",
    "text": "How you never hesitate to show love when your heart is overflowing.",
    "favorite": false
  },
  {
    "id": 71,
    "number": "Reason 71 of 100",
    "text": "Because on days when you feel insecure, I want to spend every second proving how precious you are.",
    "favorite": false
  },
  {
    "id": 72,
    "number": "Reason 72 of 100",
    "text": "How you allow me to protect you and be your shelter when the world is harsh.",
    "favorite": false
  },
  {
    "id": 73,
    "number": "Reason 73 of 100",
    "text": "The strength you hold inside, even when you feel exhausted or overwhelmed.",
    "favorite": false
  },
  {
    "id": 74,
    "number": "Reason 74 of 100",
    "text": "Because I want to take away all your fears and replace them with endless comfort.",
    "favorite": false
  },
  {
    "id": 75,
    "number": "Reason 75 of 100",
    "text": "The way you trust me with your deepest thoughts and secret tears.",
    "favorite": false
  },
  {
    "id": 76,
    "number": "Reason 76 of 100",
    "text": "Because loving you taught me what true dedication and selflessness really feel like.",
    "favorite": false
  },
  {
    "id": 77,
    "number": "Reason 77 of 100",
    "text": "How you never hold back your sweetness when you miss me.",
    "favorite": false
  },
  {
    "id": 78,
    "number": "Reason 78 of 100",
    "text": "Because every prayer I whisper for the future has your name wrapped inside it.",
    "favorite": false
  },
  {
    "id": 79,
    "number": "Reason 79 of 100",
    "text": "The unmatched comfort of pulling the blanket over both of us and listening to the night.",
    "favorite": false
  },
  {
    "id": 80,
    "number": "Reason 80 of 100",
    "text": "Because with you, love is not a mystery; it is the most certain truth of my life.",
    "favorite": false
  },
  {
    "id": 81,
    "number": "Reason 81 of 100",
    "text": "Because I would choose you over and over again in every single lifetime and timeline.",
    "favorite": false
  },
  {
    "id": 82,
    "number": "Reason 82 of 100",
    "text": "The way you make ordinary street food, small walks, and car rides feel unforgettable.",
    "favorite": false
  },
  {
    "id": 83,
    "number": "Reason 83 of 100",
    "text": "How you look at me like I am the only person in a crowded room.",
    "favorite": false
  },
  {
    "id": 84,
    "number": "Reason 84 of 100",
    "text": "Because you never ask for perfection, only honesty and a loving heart.",
    "favorite": false
  },
  {
    "id": 85,
    "number": "Reason 85 of 100",
    "text": "The sweet fragrance and comfort that lingers whenever you are near.",
    "favorite": false
  },
  {
    "id": 86,
    "number": "Reason 86 of 100",
    "text": "Because you are my best friend, my soulmate, and my beloved wife all in one.",
    "favorite": false
  },
  {
    "id": 87,
    "number": "Reason 87 of 100",
    "text": "The way you giggle when I unexpectedly pull you into an embrace.",
    "favorite": false
  },
  {
    "id": 88,
    "number": "Reason 88 of 100",
    "text": "How you have turned my life into a love story I am immensely proud to live.",
    "favorite": false
  },
  {
    "id": 89,
    "number": "Reason 89 of 100",
    "text": "Because every sunrise feels more hopeful knowing you are in my life.",
    "favorite": false
  },
  {
    "id": 90,
    "number": "Reason 90 of 100",
    "text": "The gentle, reassuring kiss on the forehead that speaks louder than a thousand words.",
    "favorite": false
  },
  {
    "id": 91,
    "number": "Reason 91 of 100",
    "text": "Because my love for you doesn't depend on moods, distance, or circumstances — it is eternal.",
    "favorite": false
  },
  {
    "id": 92,
    "number": "Reason 92 of 100",
    "text": "The warmth of knowing we will grow old, gray, and wrinkled together, still holding hands.",
    "favorite": false
  },
  {
    "id": 93,
    "number": "Reason 93 of 100",
    "text": "Because when I close my eyes at night, your face is the last blessing I thank the universe for.",
    "favorite": false
  },
  {
    "id": 94,
    "number": "Reason 94 of 100",
    "text": "The promise that no matter how hard life gets, you will never have to face a single battle alone.",
    "favorite": false
  },
  {
    "id": 95,
    "number": "Reason 95 of 100",
    "text": "Because you are my favourite miracle, my sweetest coincidence, and my universe.",
    "favorite": false
  },
  {
    "id": 96,
    "number": "Reason 96 of 100",
    "text": "The comfort of knowing that even in twenty or thirty years, I will still look at you with this same awe.",
    "favorite": false
  },
  {
    "id": 97,
    "number": "Reason 97 of 100",
    "text": "Because you bring out the gentlest, most protective, and most loving version of me.",
    "favorite": false
  },
  {
    "id": 98,
    "number": "Reason 98 of 100",
    "text": "The way our souls recognized each other long before our words could explain it.",
    "favorite": false
  },
  {
    "id": 99,
    "number": "Reason 99 of 100",
    "text": "Because my heart found its forever rhythm only after it started beating for you.",
    "favorite": false
  },
  {
    "id": 100,
    "number": "Reason 100 of 100",
    "text": "And reason 100: Simply because you are Kirthikha — the one and only love of my life.",
    "favorite": false
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = REASONS_DATA;
}
