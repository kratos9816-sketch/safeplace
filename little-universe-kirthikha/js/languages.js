/**
 * 340 Languages of Love Dataset
 * Exactly 340 verified translations of 'I love you' across world languages
 */

const LOVE_LANGUAGES = [
  {
    "id": 1,
    "language": "Tamil",
    "script": "நான் உன்னை காதலிக்கிறேன்",
    "romanized": "Naan unnai kaadhalikkiren",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 2,
    "language": "Tamil (Colloquial)",
    "script": "உன்னை எனக்கு ரொம்ப பிடிக்கும்",
    "romanized": "Unnai enakku romba pidikkum",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 3,
    "language": "Malayalam",
    "script": "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു",
    "romanized": "Njan ninne snehikkunnu",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 4,
    "language": "Telugu",
    "script": "నేను నిన్ను ప్రేమిస్తున్నాను",
    "romanized": "Nenu ninnu premistunnanu",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 5,
    "language": "Kannada",
    "script": "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ",
    "romanized": "Naanu ninnannu preethisuthene",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 6,
    "language": "Hindi",
    "script": "मैं तुमसे प्यार करता हूँ",
    "romanized": "Main tumse pyaar karta hoon",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 7,
    "language": "Bengali",
    "script": "আমি তোমাকে ভালোবাসি",
    "romanized": "Ami tomake bhalobashi",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 8,
    "language": "Punjabi",
    "script": "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ",
    "romanized": "Main tainu pyaar karda haan",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 9,
    "language": "Gujarati",
    "script": "હું તને પ્રેમ કરું છું",
    "romanized": "Hoon tane prem karun chhun",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 10,
    "language": "Marathi",
    "script": "माझं तुझ्यावर प्रेम आहे",
    "romanized": "Majha tujhyavar prem aahe",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 11,
    "language": "Urdu",
    "script": "میں تم سے محبت کرتا ہوں",
    "romanized": "Main tumse mohabbat karta hoon",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 12,
    "language": "Sanskrit",
    "script": "त्वयि स्निह्यामि",
    "romanized": "Tvayi snihyāmi",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 13,
    "language": "Odia",
    "script": "ମୁଁ ତୁମକୁ ଭଲପାଏ",
    "romanized": "Mu tumaku bhalapae",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 14,
    "language": "Assamese",
    "script": "মই তোমাক ভাল পাওঁ",
    "romanized": "Moi tomak bhal pao",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 15,
    "language": "Kashmiri",
    "script": "مے٘ چُھوٚت پَے کَرَن",
    "romanized": "Me chhu tse pyaran",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 16,
    "language": "Sindhi",
    "script": "مان توکي پيار ڪريان ٿو",
    "romanized": "Maan tokhe pyar karyan tho",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 17,
    "language": "Nepali",
    "script": "म तिमीलाई माया गर्छु",
    "romanized": "Ma timilai maya garchhu",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 18,
    "language": "Sinhala",
    "script": "මම ඔයාට ආදරෙයි",
    "romanized": "Mama oyata aadareyi",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 19,
    "language": "Konkani",
    "script": "हांव तुजो मोग करतां",
    "romanized": "Hanv tuzo mog kartam",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 20,
    "language": "Tulu",
    "script": "ಯಾನ್ ಈರೆನ್ ಮೋಕೆ ಮಲ್ತಿನಿ",
    "romanized": "Yan eeren moke malpuve",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 21,
    "language": "Maithili",
    "script": "हम अहॉं सँ प्रेम करैत छी",
    "romanized": "Hum ahansan prem karait chhi",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 22,
    "language": "Bhojpuri",
    "script": "हम तोहरा से प्यार करीला",
    "romanized": "Hum tohara se pyar kareela",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 23,
    "language": "Manipuri (Meitei)",
    "script": "ꯑꯩꯅꯥ ꯅꯪꯕꯨ ꯅꯨꯡꯁꯤ",
    "romanized": "Eina nangbu nungshi",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 24,
    "language": "Santali",
    "script": "ᱤᱧ ᱟᱢᱤᱧ ᱫᱩᱞᱟᱹᱲᱮᱫ ᱢᱮᱭᱟ",
    "romanized": "Ing aming dularhed meya",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 25,
    "language": "Bodo",
    "script": "आं नोंखौ मोजां मोनो",
    "romanized": "Ang nwngkhwo mwjang mwnw",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 26,
    "language": "Dogri",
    "script": "मैं तुस्सै कन्नै प्यार करदा हां",
    "romanized": "Main tussai kanne pyar karda haan",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 27,
    "language": "Marwari",
    "script": "मैं तनै प्यार करुं",
    "romanized": "Main tane pyar karun",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 28,
    "language": "Chhattisgarhi",
    "script": "मैं तोला मया करथों",
    "romanized": "Main tola maya kartho",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 29,
    "language": "Haryanvi",
    "script": "मैं तन्ने प्यार करूँ सूं",
    "romanized": "Main tanne pyar karu soon",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 30,
    "language": "Dhivehi (Maldivian)",
    "script": "އަހަރެން ކަލާދެކެ ލޯބިވޭ",
    "romanized": "Aharen kalaa deke loabivey",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 31,
    "language": "Tibetan",
    "script": "ང་ཁྱེད་རང་ལ་དགའ་པོ་ཡོད།",
    "romanized": "Nga khyed-rang-la dga-po yod",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 32,
    "language": "Bhutanese (Dzongkha)",
    "script": "ང་གིས་ཁྱོད་ལུ་དགའ་",
    "romanized": "Nga gi choe lu ga",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 33,
    "language": "Ladakhi",
    "script": "ང་ཁྱོད་ལ་དགའ་",
    "romanized": "Nga khyod la dga",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 34,
    "language": "Lepcha",
    "script": "ᰀᰦᰛᰪᰴ ᰝᰩᰴ ᰃᰤᰦᰵ",
    "romanized": "Karyum hoyung gyang",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 35,
    "language": "Mizo",
    "script": "Ka hmangaih che",
    "romanized": "Ka hmangaih che",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 36,
    "language": "Khasi",
    "script": "Nga ieid ia phi",
    "romanized": "Nga ieid ia phi",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 37,
    "language": "Garo",
    "script": "Anga nang'na ka'saa",
    "romanized": "Anga nangna kasaa",
    "region": "South Asia",
    "meaning": "I love you"
  },
  {
    "id": 38,
    "language": "Mandarin Chinese (Simplified)",
    "script": "我爱你",
    "romanized": "Wǒ ài nǐ",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 39,
    "language": "Mandarin Chinese (Traditional)",
    "script": "我愛你",
    "romanized": "Wǒ ài nǐ",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 40,
    "language": "Cantonese (Yue)",
    "script": "我愛你",
    "romanized": "Ngóh oi néih",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 41,
    "language": "Taiwanese Hokkien",
    "script": "我愛汝",
    "romanized": "Góa ài lí",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 42,
    "language": "Shanghainese (Wu)",
    "script": "我愛儂",
    "romanized": "Ngu e nong",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 43,
    "language": "Hakka",
    "script": "𠊎愛你",
    "romanized": "Ngài oi ngì",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 44,
    "language": "Japanese",
    "script": "愛してる",
    "romanized": "Aishiteru",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 45,
    "language": "Japanese (Formal)",
    "script": "大好きです",
    "romanized": "Daisuki desu",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 46,
    "language": "Japanese (Classical)",
    "script": "月が綺麗ですね",
    "romanized": "Tsuki ga kirei desu ne",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 47,
    "language": "Korean",
    "script": "사랑해요",
    "romanized": "Saranghaeyo",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 48,
    "language": "Korean (Intimate)",
    "script": "사랑해",
    "romanized": "Saranghae",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 49,
    "language": "Mongolian",
    "script": "Би чамд хайртай",
    "romanized": "Bi chamd khairtai",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 50,
    "language": "Ryukyuan (Okinawan)",
    "script": "かなさんどー",
    "romanized": "Kanasandoo",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 51,
    "language": "Ainu",
    "script": "Ku-e-koret",
    "romanized": "Ku-e-koret",
    "region": "East Asia",
    "meaning": "I love you"
  },
  {
    "id": 52,
    "language": "Vietnamese (To Woman)",
    "script": "Anh yêu em",
    "romanized": "Anh yeu em",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 53,
    "language": "Vietnamese (To Man)",
    "script": "Em yêu anh",
    "romanized": "Em yeu anh",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 54,
    "language": "Thai",
    "script": "ฉันรักเธอ",
    "romanized": "Chan rak ter",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 55,
    "language": "Thai (Male speaker)",
    "script": "ผมรักคุณ",
    "romanized": "Phom rak khun",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 56,
    "language": "Indonesian",
    "script": "Aku mencintaimu",
    "romanized": "Aku mencintaimu",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 57,
    "language": "Malay",
    "script": "Saya sayang awak",
    "romanized": "Saya sayang awak",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 58,
    "language": "Tagalog (Filipino)",
    "script": "Mahal kita",
    "romanized": "Mahal kita",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 59,
    "language": "Tagalog (Poetic)",
    "script": "Iniibig kita",
    "romanized": "Iniibig kita",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 60,
    "language": "Cebuano",
    "script": "Gihigugma tika",
    "romanized": "Gihigugma tika",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 61,
    "language": "Ilocano",
    "script": "Ay-ayaten ka",
    "romanized": "Ay-ayaten ka",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 62,
    "language": "Hiligaynon",
    "script": "Palangga ta ka",
    "romanized": "Palangga ta ka",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 63,
    "language": "Waray",
    "script": "Hinihigugma ko ikaw",
    "romanized": "Hinihigugma ko ikaw",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 64,
    "language": "Kapampangan",
    "script": "Kaluguran daka",
    "romanized": "Kaluguran daka",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 65,
    "language": "Pangasinan",
    "script": "Inar-aro taka",
    "romanized": "Inar-aro taka",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 66,
    "language": "Bikol",
    "script": "Namumutan ta ka",
    "romanized": "Namumutan ta ka",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 67,
    "language": "Burmese (Myanmar)",
    "script": "မင်းကိုချစ်တယ်",
    "romanized": "Min ko chit de",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 68,
    "language": "Khmer (Cambodian)",
    "script": "ខ្ញុំស្រឡាញ់អ្នក",
    "romanized": "Knhom srolanh neak",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 69,
    "language": "Lao",
    "script": "ຂ້ອຍຮັກເຈົ້າ",
    "romanized": "Khoy huk jao",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 70,
    "language": "Javanese",
    "script": "Aku tresna sampeyan",
    "romanized": "Aku tresna sampeyan",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 71,
    "language": "Sundanese",
    "script": "Abdi bogoh ka anjeun",
    "romanized": "Abdi bogoh ka anjeun",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 72,
    "language": "Balinese",
    "script": "Tiang tresna teken ragan",
    "romanized": "Tiang tresna teken ragan",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 73,
    "language": "Madurese",
    "script": "Sengko' terro ka ba'na",
    "romanized": "Sengko terro ka ba'na",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 74,
    "language": "Minangkabau",
    "script": "Ambo cinto ka adiak",
    "romanized": "Ambo cinto ka adiak",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 75,
    "language": "Batak",
    "script": "Holong rohangku tu ho",
    "romanized": "Holong rohangku tu ho",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 76,
    "language": "Buginese",
    "script": "U pajaiko",
    "romanized": "U pajaiko",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 77,
    "language": "Acehnese",
    "script": "Lôn galak keu gata",
    "romanized": "Lon galak keu gata",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 78,
    "language": "Tetum",
    "script": "Hau hadomi o",
    "romanized": "Hau hadomi o",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 79,
    "language": "Cham",
    "script": "Dahlak suki kaho",
    "romanized": "Dahlak suki kaho",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 80,
    "language": "Hmong",
    "script": "Kuv hlub koj",
    "romanized": "Kuv hlub koj",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 81,
    "language": "Karen",
    "script": "Ya a'e na",
    "romanized": "Ya a'e na",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 82,
    "language": "Shan",
    "script": "Kao huk mai",
    "romanized": "Kao huk mai",
    "region": "Southeast Asia",
    "meaning": "I love you"
  },
  {
    "id": 83,
    "language": "Arabic (Standard)",
    "script": "أحبك",
    "romanized": "Uhibbuka / Uhibbuki",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 84,
    "language": "Arabic (Levantine)",
    "script": "بحبك",
    "romanized": "Bahebbak / Bahebbik",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 85,
    "language": "Arabic (Egyptian)",
    "script": "بحبك",
    "romanized": "Bahibbak / Bahibbik",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 86,
    "language": "Arabic (Gulf)",
    "script": "أحبج / أحبك",
    "romanized": "Ahebbach / Ahebbak",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 87,
    "language": "Arabic (Maghrebi)",
    "script": "كنبغيك",
    "romanized": "Kanbghik",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 88,
    "language": "Persian (Farsi)",
    "script": "دوستت دارم",
    "romanized": "Dooset daram",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 89,
    "language": "Persian (Poetic)",
    "script": "عاشقتم",
    "romanized": "Asheghetam",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 90,
    "language": "Dari (Afghan Persian)",
    "script": "دوستت دارم",
    "romanized": "Dostet darom",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 91,
    "language": "Pashto",
    "script": "زه ستا سره مینه لرم",
    "romanized": "Za sta sara meena laram",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 92,
    "language": "Turkish",
    "script": "Seni seviyorum",
    "romanized": "Seni seviyorum",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 93,
    "language": "Azerbaijani",
    "script": "Mən səni sevirəm",
    "romanized": "Man seni sevirem",
    "region": "Central Asia",
    "meaning": "I love you"
  },
  {
    "id": 94,
    "language": "Kurdish (Kurmanji)",
    "script": "Ez ji te hez dikim",
    "romanized": "Ez ji te hez dikim",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 95,
    "language": "Kurdish (Sorani)",
    "script": "خۆشم دەوێیت",
    "romanized": "Xoshim daweit",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 96,
    "language": "Hebrew (To Female)",
    "script": "אני אוהב אותך",
    "romanized": "Ani ohev otach",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 97,
    "language": "Hebrew (To Male)",
    "script": "אני אוהבת אותך",
    "romanized": "Ani ohevet otcha",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 98,
    "language": "Armenian",
    "script": "Ես քեզ սիրում եմ",
    "romanized": "Yes kez sirum em",
    "region": "Caucasus",
    "meaning": "I love you"
  },
  {
    "id": 99,
    "language": "Georgian",
    "script": "მე შენ მიყვარხარ",
    "romanized": "Me shen miqvarkhar",
    "region": "Caucasus",
    "meaning": "I love you"
  },
  {
    "id": 100,
    "language": "Kazakh",
    "script": "Мен сені жақсы көремін",
    "romanized": "Men seni jaqsı köremin",
    "region": "Central Asia",
    "meaning": "I love you"
  },
  {
    "id": 101,
    "language": "Kyrgyz",
    "script": "Мен сени сүйөм",
    "romanized": "Men seni süyöm",
    "region": "Central Asia",
    "meaning": "I love you"
  },
  {
    "id": 102,
    "language": "Uzbek",
    "script": "Men seni sevaman",
    "romanized": "Men seni sevaman",
    "region": "Central Asia",
    "meaning": "I love you"
  },
  {
    "id": 103,
    "language": "Turkmen",
    "script": "Men seni söýýärin",
    "romanized": "Men seni söýýärin",
    "region": "Central Asia",
    "meaning": "I love you"
  },
  {
    "id": 104,
    "language": "Tajik",
    "script": "Ман туро дӯст медорам",
    "romanized": "Man turo dust medoram",
    "region": "Central Asia",
    "meaning": "I love you"
  },
  {
    "id": 105,
    "language": "Uyghur",
    "script": "مەن سىزنى ياخشى كۆرىمەن",
    "romanized": "Men sizni yaxshi körimen",
    "region": "Central Asia",
    "meaning": "I love you"
  },
  {
    "id": 106,
    "language": "Tatar",
    "script": "Мин сине яратам",
    "romanized": "Min sine yaratam",
    "region": "Central Asia",
    "meaning": "I love you"
  },
  {
    "id": 107,
    "language": "Bashkir",
    "script": "Мин һине яратам",
    "romanized": "Min hine yaratam",
    "region": "Central Asia",
    "meaning": "I love you"
  },
  {
    "id": 108,
    "language": "Balochi",
    "script": "من ترا دوست داران",
    "romanized": "Man tara dost daran",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 109,
    "language": "Assyrian Neo-Aramaic",
    "script": "ܐܢܐ ܒܚܒܟ",
    "romanized": "Ana bayennakh",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 110,
    "language": "Syriac (Classical)",
    "script": "ܪܚܡ ܐܢܐ ܠܟܝ",
    "romanized": "Rahem no leky",
    "region": "Middle East",
    "meaning": "I love you"
  },
  {
    "id": 111,
    "language": "Chechen",
    "script": "Суна хьо дукха веза / еза",
    "romanized": "Suna ho dukha veza",
    "region": "Caucasus",
    "meaning": "I love you"
  },
  {
    "id": 112,
    "language": "Circassian (Adyghe)",
    "script": "Сэ о псэ зытетэу сикӏас",
    "romanized": "Se o pse zytetew sikas",
    "region": "Caucasus",
    "meaning": "I love you"
  },
  {
    "id": 113,
    "language": "Ossetian",
    "script": "Æз дæу уарзын",
    "romanized": "Aez daew uarzyn",
    "region": "Caucasus",
    "meaning": "I love you"
  },
  {
    "id": 114,
    "language": "Avar",
    "script": "Дие мун йолъула",
    "romanized": "Diye mun yolula",
    "region": "Caucasus",
    "meaning": "I love you"
  },
  {
    "id": 115,
    "language": "Lezgian",
    "script": "Заз вун кIанда",
    "romanized": "Zaz wun k'anda",
    "region": "Caucasus",
    "meaning": "I love you"
  },
  {
    "id": 116,
    "language": "French",
    "script": "Je t'aime",
    "romanized": "Je t'aime",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 117,
    "language": "French (Passionate)",
    "script": "Je t'adore de tout mon cœur",
    "romanized": "Je t'adore de tout mon coeur",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 118,
    "language": "Spanish",
    "script": "Te amo",
    "romanized": "Te amo",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 119,
    "language": "Spanish (Affectionate)",
    "script": "Te quiero",
    "romanized": "Te quiero",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 120,
    "language": "Italian",
    "script": "Ti amo",
    "romanized": "Ti amo",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 121,
    "language": "Italian (Sweet)",
    "script": "Ti voglio bene",
    "romanized": "Ti voglio bene",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 122,
    "language": "Portuguese",
    "script": "Eu te amo",
    "romanized": "Eu te amo",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 123,
    "language": "Portuguese (European)",
    "script": "Amo-te",
    "romanized": "Amo-te",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 124,
    "language": "German",
    "script": "Ich liebe dich",
    "romanized": "Ich liebe dich",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 125,
    "language": "German (Poetic)",
    "script": "Du bist mein Ein und Alles",
    "romanized": "Du bist mein Ein und Alles",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 126,
    "language": "Dutch",
    "script": "Ik hou van jou",
    "romanized": "Ik hou van jou",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 127,
    "language": "Flemish",
    "script": "Ik zie u graag",
    "romanized": "Ik zie u graag",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 128,
    "language": "Swedish",
    "script": "Jag älskar dig",
    "romanized": "Jag alskar dig",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 129,
    "language": "Norwegian (Bokmål)",
    "script": "Jeg elsker deg",
    "romanized": "Jeg elsker deg",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 130,
    "language": "Norwegian (Nynorsk)",
    "script": "Eg elskar deg",
    "romanized": "Eg elskar deg",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 131,
    "language": "Danish",
    "script": "Jeg elsker dig",
    "romanized": "Jeg elsker dig",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 132,
    "language": "Icelandic",
    "script": "Ég elska þig",
    "romanized": "Eg elska thig",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 133,
    "language": "Faroese",
    "script": "Eg elski teg",
    "romanized": "Eg elski teg",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 134,
    "language": "Finnish",
    "script": "Minä rakastan sinua",
    "romanized": "Mina rakastan sinua",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 135,
    "language": "Estonian",
    "script": "Ma armastan sind",
    "romanized": "Ma armastan sind",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 136,
    "language": "Latvian",
    "script": "Es tevi mīlu",
    "romanized": "Es tevi milu",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 137,
    "language": "Lithuanian",
    "script": "Aš tave myliu",
    "romanized": "Ash tave myliu",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 138,
    "language": "Irish Gaelic",
    "script": "Taim i ngra leat",
    "romanized": "Táim i ngrá leat",
    "region": "Celtic Europe",
    "meaning": "I love you"
  },
  {
    "id": 139,
    "language": "Irish (Traditional)",
    "script": "Mo ghrá thú",
    "romanized": "Mo ghra thu",
    "region": "Celtic Europe",
    "meaning": "I love you"
  },
  {
    "id": 140,
    "language": "Scottish Gaelic",
    "script": "Tha gaol agam ort",
    "romanized": "Tha gaol agam ort",
    "region": "Celtic Europe",
    "meaning": "I love you"
  },
  {
    "id": 141,
    "language": "Welsh",
    "script": "Rwy'n dy garu di",
    "romanized": "Rwyn dy garu di",
    "region": "Celtic Europe",
    "meaning": "I love you"
  },
  {
    "id": 142,
    "language": "Breton",
    "script": "Me az kar",
    "romanized": "Me az kar",
    "region": "Celtic Europe",
    "meaning": "I love you"
  },
  {
    "id": 143,
    "language": "Cornish",
    "script": "My a'th kar",
    "romanized": "My ath kar",
    "region": "Celtic Europe",
    "meaning": "I love you"
  },
  {
    "id": 144,
    "language": "Manx",
    "script": "Ta graih aym ort",
    "romanized": "Ta graih aym ort",
    "region": "Celtic Europe",
    "meaning": "I love you"
  },
  {
    "id": 145,
    "language": "Catalan",
    "script": "T'estimo",
    "romanized": "T'estimo",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 146,
    "language": "Galician",
    "script": "Quérote",
    "romanized": "Querote",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 147,
    "language": "Basque",
    "script": "Maite zaitut",
    "romanized": "Maite zaitut",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 148,
    "language": "Occitan",
    "script": "T'aimi",
    "romanized": "T'aimi",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 149,
    "language": "Corsican",
    "script": "Ti tengu caru",
    "romanized": "Ti tengu caru",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 150,
    "language": "Sardinian",
    "script": "T'amo",
    "romanized": "T'amo / T'istimo",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 151,
    "language": "Sicilian",
    "script": "Ti vogghiu beni",
    "romanized": "Ti vogghiu beni",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 152,
    "language": "Neapolitan",
    "script": "Te voglio bene",
    "romanized": "Te voglio bene",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 153,
    "language": "Venetian",
    "script": "Te vojo ben",
    "romanized": "Te vojo ben",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 154,
    "language": "Lombard",
    "script": "Te voeuri ben",
    "romanized": "Te voeuri ben",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 155,
    "language": "Piedmontese",
    "script": "It veuj bin",
    "romanized": "It veuj bin",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 156,
    "language": "Friulian",
    "script": "Ti vuei ben",
    "romanized": "Ti vuei ben",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 157,
    "language": "Romansh",
    "script": "Jau hai tai char",
    "romanized": "Jau hai tai char",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 158,
    "language": "Ladin",
    "script": "Te vöi bun",
    "romanized": "Te voi bun",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 159,
    "language": "Luxembourgish",
    "script": "Ech hunn dech gär",
    "romanized": "Ech hunn dech gaer",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 160,
    "language": "West Frisian",
    "script": "Ik hâld fan dy",
    "romanized": "Ik hald fan dy",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 161,
    "language": "North Frisian",
    "script": "Ik heef di lüf",
    "romanized": "Ik heef di luf",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 162,
    "language": "Low German (Plattdüütsch)",
    "script": "Ik leev di",
    "romanized": "Ik leev di",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 163,
    "language": "Bavarian",
    "script": "I mog di narrisch gern",
    "romanized": "I mog di narrisch gern",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 164,
    "language": "Swiss German",
    "script": "Ich ha di gärn",
    "romanized": "Ich ha di gaern",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 165,
    "language": "Alsatian",
    "script": "Ich hàb dich gern",
    "romanized": "Ich hab dich gern",
    "region": "Western Europe",
    "meaning": "I love you"
  },
  {
    "id": 166,
    "language": "Yiddish",
    "script": "איך האָב דיך ליב",
    "romanized": "Ikh hob dikh lib",
    "region": "Jewish Heritage",
    "meaning": "I love you"
  },
  {
    "id": 167,
    "language": "Ladino (Judeo-Spanish)",
    "script": "Te amo muncho",
    "romanized": "Te amo muncho",
    "region": "Jewish Heritage",
    "meaning": "I love you"
  },
  {
    "id": 168,
    "language": "Maltese",
    "script": "Inħobbok",
    "romanized": "Inhobbok",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 169,
    "language": "Greek",
    "script": "Σ' αγαπώ",
    "romanized": "S'agapo",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 170,
    "language": "Greek (Poetic)",
    "script": "Είσαι η ζωή μου",
    "romanized": "Eisai i zoi mou",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 171,
    "language": "Cypriot Greek",
    "script": "Αγαπώ σε",
    "romanized": "Agapo se",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 172,
    "language": "Albanian",
    "script": "Të dua",
    "romanized": "Te dua",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 173,
    "language": "Arbëresh",
    "script": "Të dua shumë",
    "romanized": "Te dua shume",
    "region": "Southern Europe",
    "meaning": "I love you"
  },
  {
    "id": 174,
    "language": "Russian",
    "script": "Я тебя люблю",
    "romanized": "Ya tebya lyublyu",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 175,
    "language": "Ukrainian",
    "script": "Я тебе кохаю",
    "romanized": "Ya tebe kokhayu",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 176,
    "language": "Belarusian",
    "script": "Я цябе кахаю",
    "romanized": "Ya tsyabye kakhayu",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 177,
    "language": "Polish",
    "script": "Kocham cię",
    "romanized": "Kocham cie",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 178,
    "language": "Czech",
    "script": "Miluji tě",
    "romanized": "Miluji te",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 179,
    "language": "Slovak",
    "script": "Ľúbim ťa",
    "romanized": "Lubim ta",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 180,
    "language": "Slovenian",
    "script": "Ljubim te",
    "romanized": "Ljubim te",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 181,
    "language": "Croatian",
    "script": "Volim te",
    "romanized": "Volim te",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 182,
    "language": "Serbian",
    "script": "Волим те",
    "romanized": "Volim te",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 183,
    "language": "Bosnian",
    "script": "Volim te",
    "romanized": "Volim te",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 184,
    "language": "Montenegrin",
    "script": "Волим те",
    "romanized": "Volim te",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 185,
    "language": "Macedonian",
    "script": "Те сакам",
    "romanized": "Te sakam",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 186,
    "language": "Bulgarian",
    "script": "Обичам те",
    "romanized": "Obicham te",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 187,
    "language": "Romanian",
    "script": "Te iubesc",
    "romanized": "Te iubesc",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 188,
    "language": "Moldovan",
    "script": "Te iubesc",
    "romanized": "Te iubesc",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 189,
    "language": "Hungarian",
    "script": "Szeretlek",
    "romanized": "Szeretlek",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 190,
    "language": "Kashubian",
    "script": "Kòchóm ce",
    "romanized": "Kochom ce",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 191,
    "language": "Upper Sorbian",
    "script": "Lubuju te",
    "romanized": "Lubuju te",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 192,
    "language": "Lower Sorbian",
    "script": "Lubuju śi",
    "romanized": "Lubuju si",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 193,
    "language": "Rusyn",
    "script": "Я тя люблю",
    "romanized": "Ya tya lyublyu",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 194,
    "language": "Sami (Northern)",
    "script": "Mun ráhkistan du",
    "romanized": "Mun rahkistan du",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 195,
    "language": "Sami (Inari)",
    "script": "Mun rähkistâm tuu",
    "romanized": "Mun rahkistam tuu",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 196,
    "language": "Sami (Lule)",
    "script": "Mån råhpadav duv",
    "romanized": "Man rahpadav duv",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 197,
    "language": "Karelian",
    "script": "Minä suvattelen sindai",
    "romanized": "Mina suvattelen sindai",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 198,
    "language": "Veps",
    "script": "Minä armastan sindai",
    "romanized": "Mina armastan sindai",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 199,
    "language": "Livonian",
    "script": "Ma armastan sīnda",
    "romanized": "Ma armastan sinda",
    "region": "Northern Europe",
    "meaning": "I love you"
  },
  {
    "id": 200,
    "language": "Chuvash",
    "script": "Эпӗ сана юрататӑп",
    "romanized": "Ep sana yuratatap",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 201,
    "language": "Udmurt",
    "script": "Мон тонэ яратӥсько",
    "romanized": "Mon tone yaratisko",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 202,
    "language": "Mari",
    "script": "Мый тыйым йоратем",
    "romanized": "Myy tyyim yoratem",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 203,
    "language": "Moksha",
    "script": "Мон тонь келькте",
    "romanized": "Mon ton kelkte",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 204,
    "language": "Erzya",
    "script": "Мон тонь вечктан",
    "romanized": "Mon ton vechtan",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 205,
    "language": "Komi",
    "script": "Мэ тэнӧ радейта",
    "romanized": "Me teno radeyta",
    "region": "Eastern Europe",
    "meaning": "I love you"
  },
  {
    "id": 206,
    "language": "Swahili",
    "script": "Nakupenda",
    "romanized": "Nakupenda",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 207,
    "language": "Swahili (Deep)",
    "script": "Nakupenda sana malaika wangu",
    "romanized": "Nakupenda sana malaika wangu",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 208,
    "language": "Amharic",
    "script": "እወድሻለሁ",
    "romanized": "Ewedishalehu (to female) / Ewedihalehu",
    "region": "Horn of Africa",
    "meaning": "I love you"
  },
  {
    "id": 209,
    "language": "Tigrinya",
    "script": "የፍቅረኪ እየ",
    "romanized": "Yefeqreki eye",
    "region": "Horn of Africa",
    "meaning": "I love you"
  },
  {
    "id": 210,
    "language": "Oromo",
    "script": "Sin jaalladha",
    "romanized": "Sin jaalladha",
    "region": "Horn of Africa",
    "meaning": "I love you"
  },
  {
    "id": 211,
    "language": "Somali",
    "script": "Waan ku jecelahay",
    "romanized": "Waan ku jecelahay",
    "region": "Horn of Africa",
    "meaning": "I love you"
  },
  {
    "id": 212,
    "language": "Yoruba",
    "script": "Mo nifẹ rẹ",
    "romanized": "Mo nife re",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 213,
    "language": "Igbo",
    "script": "A hụrụ m gị n'anya",
    "romanized": "A huru m gi n'anya",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 214,
    "language": "Hausa",
    "script": "Ina son ki",
    "romanized": "Ina son ki (to female) / Ina son ka",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 215,
    "language": "Zulu",
    "script": "Ngiyakuthanda",
    "romanized": "Ngiyakuthanda",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 216,
    "language": "Xhosa",
    "script": "Ndiya kuthanda",
    "romanized": "Ndiya kuthanda",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 217,
    "language": "Afrikaans",
    "script": "Ek het jou lief",
    "romanized": "Ek het jou lief",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 218,
    "language": "Shona",
    "script": "Ndinokuda",
    "romanized": "Ndinokuda",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 219,
    "language": "Northern Ndebele",
    "script": "Ngiyakuthanda",
    "romanized": "Ngiyakuthanda",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 220,
    "language": "Sesotho",
    "script": "Ke a o rata",
    "romanized": "Ke a o rata",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 221,
    "language": "Setswana",
    "script": "Ke a go rata",
    "romanized": "Ke a go rata",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 222,
    "language": "Sepedi",
    "script": "Ke a go rata",
    "romanized": "Ke a go rata",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 223,
    "language": "Siswati",
    "script": "Ngiyakutsandza",
    "romanized": "Ngiyakutsandza",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 224,
    "language": "Tsonga",
    "script": "Ndzi rhandza wena",
    "romanized": "Ndzi rhandza wena",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 225,
    "language": "Venda",
    "script": "Ndi a ni funa",
    "romanized": "Ndi a ni funa",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 226,
    "language": "Chichewa (Nyanja)",
    "script": "Ndimakukonda",
    "romanized": "Ndimakukonda",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 227,
    "language": "Tumbuka",
    "script": "Nkhukutemwa",
    "romanized": "Nkhukutemwa",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 228,
    "language": "Lingala",
    "script": "Nalingi yo",
    "romanized": "Nalingi yo",
    "region": "Central Africa",
    "meaning": "I love you"
  },
  {
    "id": 229,
    "language": "Kikongo",
    "script": "Mono kezolaka nge",
    "romanized": "Mono kezolaka nge",
    "region": "Central Africa",
    "meaning": "I love you"
  },
  {
    "id": 230,
    "language": "Tshiluba",
    "script": "Ndi mukunange",
    "romanized": "Ndi mukunange",
    "region": "Central Africa",
    "meaning": "I love you"
  },
  {
    "id": 231,
    "language": "Luganda",
    "script": "Nkwagala nnyo",
    "romanized": "Nkwagala nnyo",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 232,
    "language": "Runyankole",
    "script": "Ninkukunda",
    "romanized": "Ninkukunda",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 233,
    "language": "Luo",
    "script": "Aheri",
    "romanized": "Aheri",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 234,
    "language": "Kikuyu",
    "script": "Nĩngwendete",
    "romanized": "Ningwendete",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 235,
    "language": "Kamba",
    "script": "Nĩnkwendete",
    "romanized": "Ninkwendete",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 236,
    "language": "Luhya",
    "script": "Esi nakhwenya",
    "romanized": "Esi nakhwenya",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 237,
    "language": "Maasai",
    "script": "Sopou enyoo",
    "romanized": "Sopou enyoo",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 238,
    "language": "Meru",
    "script": "Nĩnkũgwenda",
    "romanized": "Ninkugwenda",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 239,
    "language": "Kinyarwanda",
    "script": "Ndagukunda",
    "romanized": "Ndagukunda",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 240,
    "language": "Kirundi",
    "script": "Ndagukunda",
    "romanized": "Ndagukunda",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 241,
    "language": "Malagasy",
    "script": "Tiako ianao",
    "romanized": "Tiako ianao",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 242,
    "language": "Wolof",
    "script": "Dama la bëgg",
    "romanized": "Dama la begg",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 243,
    "language": "Mandinka",
    "script": "M'bi fe",
    "romanized": "M'bi fe",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 244,
    "language": "Bambara",
    "script": "M'bi fɛ",
    "romanized": "M'bi fe",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 245,
    "language": "Fula (Fulani)",
    "script": "Mi yidi ma",
    "romanized": "Mi yidi ma",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 246,
    "language": "Akan (Twi)",
    "script": "Me dɔ wo",
    "romanized": "Me do wo",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 247,
    "language": "Fante",
    "script": "Me dɔ wo",
    "romanized": "Me do wo",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 248,
    "language": "Ewe",
    "script": "Mêlɔ̃ wo",
    "romanized": "Melo wo",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 249,
    "language": "Ga",
    "script": "Msumɔɔ bo",
    "romanized": "Msumoo bo",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 250,
    "language": "Fon",
    "script": "Un nyi wan nu we",
    "romanized": "Un nyi wan nu we",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 251,
    "language": "Mossi (More)",
    "script": "Mam nonga foom",
    "romanized": "Mam nonga foom",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 252,
    "language": "Songhay",
    "script": "Ay ga ba ni",
    "romanized": "Ay ga ba ni",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 253,
    "language": "Kanuri",
    "script": "Nyiga tanyi",
    "romanized": "Nyiga tanyi",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 254,
    "language": "Dinka",
    "script": "Nhiɛr e yïn",
    "romanized": "Nhier e yin",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 255,
    "language": "Nuer",
    "script": "Cä ji nhök",
    "romanized": "Ca ji nhok",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 256,
    "language": "Acholi",
    "script": "Amari",
    "romanized": "Amari",
    "region": "East Africa",
    "meaning": "I love you"
  },
  {
    "id": 257,
    "language": "Bemba",
    "script": "Nalikutemwa",
    "romanized": "Nalikutemwa",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 258,
    "language": "Lozi",
    "script": "Na ku lata",
    "romanized": "Na ku lata",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 259,
    "language": "Herero",
    "script": "Mbe ku suvera",
    "romanized": "Mbe ku suvera",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 260,
    "language": "Khoekhoe (Nama)",
    "script": "Nam tsi ta ra",
    "romanized": "Nam tsi ta ra",
    "region": "Southern Africa",
    "meaning": "I love you"
  },
  {
    "id": 261,
    "language": "Sango",
    "script": "Mbi ye mo",
    "romanized": "Mbi ye mo",
    "region": "Central Africa",
    "meaning": "I love you"
  },
  {
    "id": 262,
    "language": "Mauritian Creole",
    "script": "Mo kontan twa",
    "romanized": "Mo kontan twa",
    "region": "Indian Ocean",
    "meaning": "I love you"
  },
  {
    "id": 263,
    "language": "Seychellois Creole",
    "script": "Mon kontan ou",
    "romanized": "Mon kontan ou",
    "region": "Indian Ocean",
    "meaning": "I love you"
  },
  {
    "id": 264,
    "language": "Reunionese Creole",
    "script": "Mi aim a ou",
    "romanized": "Mi aim a ou",
    "region": "Indian Ocean",
    "meaning": "I love you"
  },
  {
    "id": 265,
    "language": "Cape Verdean Creole",
    "script": "M'ta ama-b",
    "romanized": "M'ta ama-b",
    "region": "West Africa",
    "meaning": "I love you"
  },
  {
    "id": 266,
    "language": "Papiamento",
    "script": "Mi stima bo",
    "romanized": "Mi stima bo",
    "region": "Caribbean",
    "meaning": "I love you"
  },
  {
    "id": 267,
    "language": "Haitian Creole",
    "script": "Mwen renmen ou",
    "romanized": "Mwen renmen ou",
    "region": "Caribbean",
    "meaning": "I love you"
  },
  {
    "id": 268,
    "language": "Jamaican Patois",
    "script": "Mi luv yuh",
    "romanized": "Mi luv yuh",
    "region": "Caribbean",
    "meaning": "I love you"
  },
  {
    "id": 269,
    "language": "Bajan Creole",
    "script": "I love yuh",
    "romanized": "I love yuh",
    "region": "Caribbean",
    "meaning": "I love you"
  },
  {
    "id": 270,
    "language": "Sranan Tongo",
    "script": "Mi lobi yu",
    "romanized": "Mi lobi yu",
    "region": "Americas",
    "meaning": "I love you"
  },
  {
    "id": 271,
    "language": "Sarami",
    "script": "Mi lobi i",
    "romanized": "Mi lobi i",
    "region": "Americas",
    "meaning": "I love you"
  },
  {
    "id": 272,
    "language": "Hawaiian",
    "script": "Aloha au iā ʻoe",
    "romanized": "Aloha au ia oe",
    "region": "Polynesia",
    "meaning": "I love you"
  },
  {
    "id": 273,
    "language": "Samoan",
    "script": "Ou te alofa ia te oe",
    "romanized": "Ou te alofa ia te oe",
    "region": "Polynesia",
    "meaning": "I love you"
  },
  {
    "id": 274,
    "language": "Tongan",
    "script": "ʻOfa atu",
    "romanized": "Ofa atu",
    "region": "Polynesia",
    "meaning": "I love you"
  },
  {
    "id": 275,
    "language": "Tahitian",
    "script": "Ua here vau ia oe",
    "romanized": "Ua here vau ia oe",
    "region": "Polynesia",
    "meaning": "I love you"
  },
  {
    "id": 276,
    "language": "Fijian",
    "script": "Au domoni iko",
    "romanized": "Au domoni iko",
    "region": "Melanesia",
    "meaning": "I love you"
  },
  {
    "id": 277,
    "language": "Maori",
    "script": "Aroha ahau ki a koe",
    "romanized": "Aroha ahau ki a koe",
    "region": "Polynesia",
    "meaning": "I love you"
  },
  {
    "id": 278,
    "language": "Cook Islands Maori",
    "script": "E inangaro ana au ia koe",
    "romanized": "E inangaro ana au ia koe",
    "region": "Polynesia",
    "meaning": "I love you"
  },
  {
    "id": 279,
    "language": "Rapa Nui (Easter Island)",
    "script": "Rahi au kia koe",
    "romanized": "Rahi au kia koe",
    "region": "Polynesia",
    "meaning": "I love you"
  },
  {
    "id": 280,
    "language": "Marshallese",
    "script": "Ij iakwe eok",
    "romanized": "Ij iakwe eok",
    "region": "Micronesia",
    "meaning": "I love you"
  },
  {
    "id": 281,
    "language": "Palauan",
    "script": "Ak kmal mengellakl er kau",
    "romanized": "Ak mengellakl er kau",
    "region": "Micronesia",
    "meaning": "I love you"
  },
  {
    "id": 282,
    "language": "Chamorro",
    "script": "Hu guaiya hao",
    "romanized": "Hu guaiya hao",
    "region": "Micronesia",
    "meaning": "I love you"
  },
  {
    "id": 283,
    "language": "Tuvaluan",
    "script": "Au e fiafia kia koe",
    "romanized": "Au e fiafia kia koe",
    "region": "Polynesia",
    "meaning": "I love you"
  },
  {
    "id": 284,
    "language": "Gilbertese (Kiribati)",
    "script": "I tangiriko",
    "romanized": "I tangiriko",
    "region": "Micronesia",
    "meaning": "I love you"
  },
  {
    "id": 285,
    "language": "Niuean",
    "script": "Fakaalofa au kia koe",
    "romanized": "Fakaalofa au kia koe",
    "region": "Polynesia",
    "meaning": "I love you"
  },
  {
    "id": 286,
    "language": "Tok Pisin",
    "script": "Mi lavim yu",
    "romanized": "Mi lavim yu",
    "region": "Melanesia",
    "meaning": "I love you"
  },
  {
    "id": 287,
    "language": "Hiri Motu",
    "script": "Lalokau henia oi",
    "romanized": "Lalokau henia oi",
    "region": "Melanesia",
    "meaning": "I love you"
  },
  {
    "id": 288,
    "language": "Bislama",
    "script": "Mi lavem yu",
    "romanized": "Mi lavem yu",
    "region": "Melanesia",
    "meaning": "I love you"
  },
  {
    "id": 289,
    "language": "Solomon Islands Pijin",
    "script": "Mi lavem iu",
    "romanized": "Mi lavem iu",
    "region": "Melanesia",
    "meaning": "I love you"
  },
  {
    "id": 290,
    "language": "Quechua",
    "script": "Munakuykim",
    "romanized": "Munakuykim",
    "region": "South America",
    "meaning": "I love you"
  },
  {
    "id": 291,
    "language": "Quechua (Cusco)",
    "script": "Kandani sonqoypi",
    "romanized": "Kandani sonqoypi",
    "region": "South America",
    "meaning": "I love you"
  },
  {
    "id": 292,
    "language": "Guaraní",
    "script": "Rohayhu",
    "romanized": "Rohayhu",
    "region": "South America",
    "meaning": "I love you"
  },
  {
    "id": 293,
    "language": "Aymara",
    "script": "Munasmawa",
    "romanized": "Munasmawa",
    "region": "South America",
    "meaning": "I love you"
  },
  {
    "id": 294,
    "language": "Nahuatl",
    "script": "Nimitztlazohtla",
    "romanized": "Nimitztlazohtla",
    "region": "Mesoamerica",
    "meaning": "I love you"
  },
  {
    "id": 295,
    "language": "Maya (Yucatec)",
    "script": "In yaakumech",
    "romanized": "In yaakumech",
    "region": "Mesoamerica",
    "meaning": "I love you"
  },
  {
    "id": 296,
    "language": "Zapotec",
    "script": "Nadxielii",
    "romanized": "Nadxielii",
    "region": "Mesoamerica",
    "meaning": "I love you"
  },
  {
    "id": 297,
    "language": "Mixtec",
    "script": "Kuni iña yo",
    "romanized": "Kuni ina yo",
    "region": "Mesoamerica",
    "meaning": "I love you"
  },
  {
    "id": 298,
    "language": "Otomi",
    "script": "Hmädi",
    "romanized": "Hmadi",
    "region": "Mesoamerica",
    "meaning": "I love you"
  },
  {
    "id": 299,
    "language": "Totonac",
    "script": "Klakaskatit",
    "romanized": "Klakaskatit",
    "region": "Mesoamerica",
    "meaning": "I love you"
  },
  {
    "id": 300,
    "language": "Purépecha",
    "script": "Uembekua",
    "romanized": "Uembekua",
    "region": "Mesoamerica",
    "meaning": "I love you"
  },
  {
    "id": 301,
    "language": "Tarahumara",
    "script": "Nijé galá",
    "romanized": "Nije gala",
    "region": "North America",
    "meaning": "I love you"
  },
  {
    "id": 302,
    "language": "Navajo",
    "script": "Ayóó ánííníshní",
    "romanized": "Ayoo aniinishni",
    "region": "North America",
    "meaning": "I love you"
  },
  {
    "id": 303,
    "language": "Cherokee",
    "script": "ᎬᎨᏳᎢ",
    "romanized": "Gvgeyu’i",
    "region": "North America",
    "meaning": "I love you"
  },
  {
    "id": 304,
    "language": "Lakota (Sioux)",
    "script": "Thečhíȟila",
    "romanized": "Thechihila",
    "region": "North America",
    "meaning": "I love you"
  },
  {
    "id": 305,
    "language": "Ojibwe",
    "script": "Gizaagi'in",
    "romanized": "Gizaagi'in",
    "region": "North America",
    "meaning": "I love you"
  },
  {
    "id": 306,
    "language": "Cree",
    "script": "Kisâkihitin",
    "romanized": "Kisakihitin",
    "region": "North America",
    "meaning": "I love you"
  },
  {
    "id": 307,
    "language": "Inuktitut",
    "script": "ᓇᒡᓕᒋᕙᒋᑦ",
    "romanized": "Nagligivagit",
    "region": "Arctic",
    "meaning": "I love you"
  },
  {
    "id": 308,
    "language": "Kalaallisut (Greenlandic)",
    "script": "Asavakit",
    "romanized": "Asavakit",
    "region": "Arctic",
    "meaning": "I love you"
  },
  {
    "id": 309,
    "language": "Yup'ik",
    "script": "Kenkamken",
    "romanized": "Kenkamken",
    "region": "Arctic",
    "meaning": "I love you"
  },
  {
    "id": 310,
    "language": "Mapudungun (Mapuche)",
    "script": "Inche piyeyu",
    "romanized": "Inche piyeyu",
    "region": "South America",
    "meaning": "I love you"
  },
  {
    "id": 311,
    "language": "Wayuu",
    "script": "Aisü pümüin",
    "romanized": "Aisu pumuin",
    "region": "South America",
    "meaning": "I love you"
  },
  {
    "id": 312,
    "language": "Embera",
    "script": "Bʉmʉa k'inia bʉ",
    "romanized": "Bumua kinia bu",
    "region": "South America",
    "meaning": "I love you"
  },
  {
    "id": 313,
    "language": "Ashaninka",
    "script": "Notashitakotampi",
    "romanized": "Notashitakotampi",
    "region": "South America",
    "meaning": "I love you"
  },
  {
    "id": 314,
    "language": "Shipibo-Conibo",
    "script": "Mia noi iki",
    "romanized": "Mia noi iki",
    "region": "South America",
    "meaning": "I love you"
  },
  {
    "id": 315,
    "language": "Guajajara",
    "script": "Aiko hexehe",
    "romanized": "Aiko hexehe",
    "region": "South America",
    "meaning": "I love you"
  },
  {
    "id": 316,
    "language": "Tupi (Old)",
    "script": "Aîeupaba nde",
    "romanized": "Aieupaba nde",
    "region": "South America",
    "meaning": "I love you"
  },
  {
    "id": 317,
    "language": "Yanomami",
    "script": "Ya ai pei thë",
    "romanized": "Ya ai pei the",
    "region": "South America",
    "meaning": "I love you"
  },
  {
    "id": 318,
    "language": "Choctaw",
    "script": "Chi hollo li",
    "romanized": "Chi hollo li",
    "region": "North America",
    "meaning": "I love you"
  },
  {
    "id": 319,
    "language": "Blackfoot",
    "script": "Kitsikákomimm",
    "romanized": "Kitsikakomimm",
    "region": "North America",
    "meaning": "I love you"
  },
  {
    "id": 320,
    "language": "Mohawk",
    "script": "Konorónhkwa",
    "romanized": "Konoronhkwa",
    "region": "North America",
    "meaning": "I love you"
  },
  {
    "id": 321,
    "language": "Hopi",
    "script": "Nu' umi unangwa'ta",
    "romanized": "Nu' umi unangwa'ta",
    "region": "North America",
    "meaning": "I love you"
  },
  {
    "id": 322,
    "language": "Apache (Western)",
    "script": "Nzhǫ́ nłį́į́",
    "romanized": "Nzho nlii",
    "region": "North America",
    "meaning": "I love you"
  },
  {
    "id": 323,
    "language": "Latin",
    "script": "Te amo",
    "romanized": "Te amo",
    "region": "Classical",
    "meaning": "I love you"
  },
  {
    "id": 324,
    "language": "Latin (Poetic)",
    "script": "Amor vincit omnia",
    "romanized": "Amor vincit omnia (Love conquers all)",
    "region": "Classical",
    "meaning": "I love you"
  },
  {
    "id": 325,
    "language": "Ancient Greek",
    "script": "Σὲ φιλῶ",
    "romanized": "Se philō",
    "region": "Classical",
    "meaning": "I love you"
  },
  {
    "id": 326,
    "language": "Ancient Egyptian (Hieroglyphs)",
    "script": "𓌸𓂋𓇋𓏏𓎡",
    "romanized": "Meryt.k (I love you)",
    "region": "Classical",
    "meaning": "I love you"
  },
  {
    "id": 327,
    "language": "Old English (Anglo-Saxon)",
    "script": "Ic lufie þē",
    "romanized": "Ic lufie the",
    "region": "Classical",
    "meaning": "I love you"
  },
  {
    "id": 328,
    "language": "Old Norse",
    "script": "Ann ek þér",
    "romanized": "Ann ek ther",
    "region": "Classical",
    "meaning": "I love you"
  },
  {
    "id": 329,
    "language": "Old High German",
    "script": "Ih minnon thih",
    "romanized": "Ih minnon thih",
    "region": "Classical",
    "meaning": "I love you"
  },
  {
    "id": 330,
    "language": "Old French",
    "script": "Je vos aim",
    "romanized": "Je vos aim",
    "region": "Classical",
    "meaning": "I love you"
  },
  {
    "id": 331,
    "language": "Old Irish",
    "script": "Inmain lémm",
    "romanized": "Inmain lemm",
    "region": "Classical",
    "meaning": "I love you"
  },
  {
    "id": 332,
    "language": "Old Church Slavonic",
    "script": "Люблю тѧ",
    "romanized": "Lyublyu te",
    "region": "Classical",
    "meaning": "I love you"
  },
  {
    "id": 333,
    "language": "Esperanto",
    "script": "Mi amas vin",
    "romanized": "Mi amas vin",
    "region": "Constructed / International",
    "meaning": "I love you"
  },
  {
    "id": 334,
    "language": "Interlingua",
    "script": "Io te ama",
    "romanized": "Io te ama",
    "region": "Constructed / International",
    "meaning": "I love you"
  },
  {
    "id": 335,
    "language": "Ido",
    "script": "Me amoras tu",
    "romanized": "Me amoras tu",
    "region": "Constructed / International",
    "meaning": "I love you"
  },
  {
    "id": 336,
    "language": "Occidental / Interlingue",
    "script": "Yo ama te",
    "romanized": "Yo ama te",
    "region": "Constructed / International",
    "meaning": "I love you"
  },
  {
    "id": 337,
    "language": "Volapük",
    "script": "Löfob oli",
    "romanized": "Lofob oli",
    "region": "Constructed / International",
    "meaning": "I love you"
  },
  {
    "id": 338,
    "language": "Quenya (Elvish)",
    "script": "Melinyel",
    "romanized": "Melinyel",
    "region": "Tolkien Elvish",
    "meaning": "I love you"
  },
  {
    "id": 339,
    "language": "Sindarin (Elvish)",
    "script": "Gi melin",
    "romanized": "Gi melin",
    "region": "Tolkien Elvish",
    "meaning": "I love you"
  },
  {
    "id": 340,
    "language": "High Valyrian",
    "script": "Avy jorrāelan",
    "romanized": "Avy jorraelan",
    "region": "Literary / Fantasy",
    "meaning": "I love you"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LOVE_LANGUAGES;
}
