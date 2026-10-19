window.AQ = window.AQ || { units: [], alphabet: [], vocab: [] };
AQ.units.push({
 "id": "grammar",
 "order": 5,
 "icon": "ن",
 "color": "indigo",
 "title": {
  "bn": "সহজ আরবি ব্যাকরণ",
  "en": "Grammar Made Easy"
 },
 "subtitle": {
  "bn": "কুরআনের বাক্য কীভাবে গঠিত হয় — ধাপে ধাপে, সহজ উদাহরণে",
  "en": "How Quranic sentences are built — step by step, with easy examples"
 },
 "lessons": [
  {
   "id": "g-word-types",
   "icon": "ك",
   "title": {
    "bn": "শব্দের তিন জাত: ইসম, ফে'ল, হরফ",
    "en": "Three Kinds of Words: Ism, Fi'l, Harf"
   },
   "subtitle": {
    "bn": "আরবির প্রতিটি শব্দ এই তিন দলের কোনো একটিতে পড়ে",
    "en": "Every Arabic word belongs to one of three families"
   },
   "minutes": 12,
   "goals": [
    {
     "bn": "ইসম, ফে'ল ও হরফ কী — তা জানবে",
     "en": "Know what ism, fi'l and harf are"
    },
    {
     "bn": "প্রতিটি চেনার সহজ আলামত (চিহ্ন) শিখবে",
     "en": "Learn easy signs to recognise each one"
    },
    {
     "bn": "কুরআনের আয়াতের শব্দগুলোকে তিন দলে ভাগ করতে পারবে",
     "en": "Sort the words of a real ayah into their families"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "স্বাগতম ব্যাকরণের জগতে! ভয় পাওয়ার কিছু নেই — আরবি ব্যাকরণের শুরুটা খুব সহজ। বাংলায় আমরা বিশেষ্য, বিশেষণ, সর্বনাম, ক্রিয়া, অব্যয় — কত ভাগ শিখি! আরবিতে শব্দের ভাগ মাত্র **তিনটি**: **ইসম**, **ফে'ল** আর **হরফ**।",
     "en": "Welcome to grammar! Nothing to fear — Arabic grammar starts very simply. In English we learn nouns, adjectives, pronouns, verbs, prepositions... Arabic has only **three** word families: **ism**, **fi'l** and **harf**."
    },
    {
     "type": "table",
     "title": {
      "bn": "এক নজরে তিন জাত",
      "en": "The three families at a glance"
     },
     "head": [
      {
       "bn": "জাত",
       "en": "Family"
      },
      {
       "bn": "আরবি নাম",
       "en": "Arabic name"
      },
      {
       "bn": "কী বোঝায়",
       "en": "What it is"
      },
      {
       "bn": "উদাহরণ",
       "en": "Examples"
      }
     ],
     "rows": [
      [
       {
        "bn": "ইসম",
        "en": "Ism"
       },
       "اِسْمٌ",
       {
        "bn": "নাম-শব্দ: ব্যক্তি, বস্তু, স্থান, গুণ (বাংলার বিশেষ্য, বিশেষণ, সর্বনাম — সব এখানে)",
        "en": "Naming word: person, thing, place, quality (nouns, adjectives and pronouns all live here)"
       },
       "اللّٰهُ ، كِتَابٌ ، رَحِيمٌ ، هُوَ"
      ],
      [
       {
        "bn": "ফে'ল",
        "en": "Fi'l"
       },
       "فِعْلٌ",
       {
        "bn": "কাজ-শব্দ, যার ভেতরে সময় (অতীত / বর্তমান / আদেশ) লুকানো থাকে",
        "en": "Action word with time built in (past / present / command)"
       },
       "خَلَقَ ، يَعْلَمُ ، اِقْرَأْ"
      ],
      [
       {
        "bn": "হরফ",
        "en": "Harf"
       },
       "حَرْفٌ",
       {
        "bn": "সংযোগ-শব্দ; একা পূর্ণ অর্থ দেয় না, অন্য শব্দকে জুড়ে দেয়",
        "en": "Linking word; no full meaning alone, it connects other words"
       },
       "فِي ، مِنْ ، عَلٰى ، وَ ، لَمْ"
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "একটা ঘর বানানোর কথা ভাবো: **ইসম** হলো ইট (জিনিস), **ফে'ল** হলো মিস্ত্রির কাজ (ঘটনা), আর **হরফ** হলো সিমেন্ট — যা ইটগুলোকে জুড়ে রাখে।",
     "en": "Think of building a house: **ism** is the bricks (things), **fi'l** is the builder's work (events), and **harf** is the cement that holds the bricks together."
    },
    {
     "type": "examples",
     "title": {
      "bn": "ইসম চেনার আলামত",
      "en": "Signs of an ism"
     },
     "items": [
      {
       "ar": "اَلْكِتَابُ",
       "tr": {
        "bn": "আল-কিতাবু",
        "en": "al-kitābu"
       },
       "mean": {
        "bn": "বইটি",
        "en": "the book"
       },
       "note": {
        "bn": "শুরুতে {{اَلْ}} বসতে পারে — তাই ইসম",
        "en": "It can take {{اَلْ}} 'the' — so it is an ism"
       },
       "hl": "اَلْ"
      },
      {
       "ar": "كِتَابٌ",
       "tr": {
        "bn": "কিতাবুন",
        "en": "kitābun"
       },
       "mean": {
        "bn": "একটি বই",
        "en": "a book"
       },
       "note": {
        "bn": "শেষে তানবীন আছে — তাই ইসম",
        "en": "It ends in tanween — so it is an ism"
       },
       "hl": "بٌ"
      },
      {
       "ar": "فِي الْأَرْضِ",
       "tr": {
        "bn": "ফিল-আরদ্বি",
        "en": "fil-arḍi"
       },
       "mean": {
        "bn": "পৃথিবীতে",
        "en": "in the earth"
       },
       "note": {
        "bn": "{{فِي}}-এর মতো হরফে জারের পরে এসেছে — তাই ইসম",
        "en": "It comes after a preposition like {{فِي}} — so it is an ism"
       },
       "hl": "الْأَرْضِ"
      },
      {
       "ar": "يَا أَيُّهَا النَّاسُ",
       "tr": {
        "bn": "ইয়া আইয়ুহান-নাস",
        "en": "yā ayyuhan-nās"
       },
       "mean": {
        "bn": "হে মানুষ!",
        "en": "O mankind!"
       },
       "note": {
        "bn": "ডাকার শব্দ {{يَا}}-এর পরে আসে — তাই ইসম",
        "en": "It is called with {{يَا}} 'O' — so it is an ism"
       },
       "hl": "النَّاسُ"
      }
     ]
    },
    {
     "type": "examples",
     "title": {
      "bn": "ফে'ল চেনার আলামত",
      "en": "Signs of a fi'l"
     },
     "items": [
      {
       "ar": "قَدْ أَفْلَحَ الْمُؤْمِنُونَ",
       "tr": {
        "bn": "কদ আফলাহাল মু'মিনূন",
        "en": "qad aflaḥal-mu'minūn"
       },
       "mean": {
        "bn": "অবশ্যই মুমিনরা সফল হয়েছে (২৩:১)",
        "en": "The believers have certainly succeeded (23:1)"
       },
       "note": {
        "bn": "আগে {{قَدْ}} বসেছে — এটি শুধু ফে'লের আগে বসে",
        "en": "{{قَدْ}} comes before it — it only sits before verbs"
       },
       "hl": "أَفْلَحَ"
      },
      {
       "ar": "كَلَّا سَوْفَ تَعْلَمُونَ",
       "tr": {
        "bn": "কাল্লা সাওফা তা'লামূন",
        "en": "kallā sawfa ta'lamūn"
       },
       "mean": {
        "bn": "কখনো না, শীঘ্রই তোমরা জানবে (১০২:৩)",
        "en": "No! You will soon know (102:3)"
       },
       "note": {
        "bn": "আগে {{سَوْفَ}} (ভবিষ্যৎ) — তাই ফে'ল",
        "en": "{{سَوْفَ}} (future) before it — so it is a verb"
       },
       "hl": "تَعْلَمُونَ"
      },
      {
       "ar": "لَمْ يَلِدْ وَلَمْ يُولَدْ",
       "tr": {
        "bn": "লাম ইয়ালিদ ওয়া লাম ইউলাদ",
        "en": "lam yalid wa lam yūlad"
       },
       "mean": {
        "bn": "তিনি জন্ম দেননি, জন্মও নেননি (১১২:৩)",
        "en": "He neither begets nor was begotten (112:3)"
       },
       "note": {
        "bn": "আগে {{لَمْ}} — এটিও শুধু ফে'লের আগে বসে",
        "en": "{{لَمْ}} before it — it only comes before verbs"
       },
       "hl": "يَلِدْ"
      },
      {
       "ar": "كَذَّبَتْ ثَمُودُ",
       "tr": {
        "bn": "কাযযাবাত সামূদ",
        "en": "kadhdhabat thamūd"
       },
       "mean": {
        "bn": "সামূদ জাতি অস্বীকার করেছিল (৯১:১১)",
        "en": "Thamud denied (91:11)"
       },
       "note": {
        "bn": "শেষে সাকিন {{تْ}} (স্ত্রীলিঙ্গের চিহ্ন) — অতীত ফে'ল",
        "en": "Ends in a still {{تْ}} (feminine sign) — a past verb"
       },
       "hl": "كَذَّبَتْ"
      }
     ]
    },
    {
     "type": "text",
     "title": {
      "bn": "হরফ চেনার উপায়",
      "en": "How to spot a harf"
     },
     "bn": "যে শব্দে ইসমের কোনো আলামত নেই, ফে'লেরও কোনো আলামত নেই — সেটাই **হরফ**। হরফে {{اَلْ}} বসে না, তানবীন হয় না, সময়ও বোঝায় না। যেমন: {{فِي}} (মধ্যে), {{مِنْ}} (থেকে), {{إِلٰى}} (দিকে), {{عَلٰى}} (উপর), {{وَ}} (এবং), {{ثُمَّ}} (তারপর), {{إِنَّ}} (নিশ্চয়ই), {{لَمْ}} (না), {{هَلْ}} (কি?)।",
     "en": "A word with no sign of an ism and no sign of a verb is a **harf**. It never takes {{اَلْ}}, never takes tanween and carries no time. For example: {{فِي}} (in), {{مِنْ}} (from), {{إِلٰى}} (to), {{عَلٰى}} (on), {{وَ}} (and), {{ثُمَّ}} (then), {{إِنَّ}} (indeed), {{لَمْ}} (did not), {{هَلْ}} (is it?)."
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "কিছু হরফ এক অক্ষরের, আর সেগুলো পরের শব্দের সঙ্গে **জোড়া লেগে** থাকে: {{بِـ}} (দিয়ে), {{لِـ}} (জন্য), {{وَ}} (এবং), {{فَـ}} (তাই), {{كَـ}} (মতো)। যেমন {{بِسْمِ}} = {{بِ}} + {{اسْمِ}}। তাই একটা শব্দের মতো দেখালেও ভেতরে দুটো শব্দ থাকতে পারে!",
     "en": "Some harfs are a single letter and stay **glued** to the next word: {{بِـ}} (with), {{لِـ}} (for), {{وَ}} (and), {{فَـ}} (so), {{كَـ}} (like). For example {{بِسْمِ}} = {{بِ}} + {{اسْمِ}}. So one 'word' on the page can hide two words inside!"
    },
    {
     "type": "table",
     "title": {
      "bn": "একটি আয়াত ভেঙে দেখি (৯৬:২)",
      "en": "Let's split an ayah (96:2)"
     },
     "head": [
      {
       "bn": "শব্দ",
       "en": "Word"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      },
      {
       "bn": "জাত",
       "en": "Family"
      }
     ],
     "rows": [
      [
       "خَلَقَ",
       {
        "bn": "তিনি সৃষ্টি করেছেন",
        "en": "He created"
       },
       {
        "bn": "ফে'ল (অতীত কাজ)",
        "en": "Fi'l (past action)"
       }
      ],
      [
       "الْإِنْسَانَ",
       {
        "bn": "মানুষকে",
        "en": "man / mankind"
       },
       {
        "bn": "ইসম ({{الْ}} আছে)",
        "en": "Ism (has {{الْ}})"
       }
      ],
      [
       "مِنْ",
       {
        "bn": "থেকে",
        "en": "from"
       },
       {
        "bn": "হরফ",
        "en": "Harf"
       }
      ],
      [
       "عَلَقٍ",
       {
        "bn": "জমাট রক্তপিণ্ড",
        "en": "a clinging clot"
       },
       {
        "bn": "ইসম (তানবীন আছে)",
        "en": "Ism (has tanween)"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "কুরআনের প্রথম শব্দগুলোর একটি {{بِسْمِ}}-এর ভেতরেই {{اِسْم}} শব্দটি লুকিয়ে আছে — যার অর্থ ‘নাম’। তাই ইসম মানে আক্ষরিক অর্থেই ‘নাম-শব্দ’!",
     "en": "Hidden inside {{بِسْمِ}}, at the very start of the Quran, is the word {{اِسْم}} — meaning 'name'. So an ism is literally a 'name-word'!"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "আরবিতে শব্দ মোট কয় প্রকার?",
        "en": "How many kinds of words are there in Arabic?"
       },
       "options": [
        {
         "bn": "পাঁচ",
         "en": "Five"
        },
        {
         "bn": "দুই",
         "en": "Two"
        },
        {
         "bn": "তিন",
         "en": "Three"
        },
        {
         "bn": "আট",
         "en": "Eight"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "এই শব্দটি কোন জাতের?",
        "en": "Which family is this word?"
       },
       "ar": "اَلرَّحِيمُ",
       "options": [
        {
         "bn": "হরফ",
         "en": "Harf"
        },
        {
         "bn": "ইসম",
         "en": "Ism"
        },
        {
         "bn": "ফে'ল",
         "en": "Fi'l"
        }
       ],
       "answer": 1,
       "explain": {
        "bn": "শুরুতে {{اَلْ}} আছে — এটি ইসমের আলামত।",
        "en": "It starts with {{اَلْ}} — a sign of an ism."
       }
      },
      {
       "q": {
        "bn": "এই শব্দটি কোন জাতের?",
        "en": "Which family is this word?"
       },
       "ar": "عَلَّمَ",
       "options": [
        {
         "bn": "ইসম",
         "en": "Ism"
        },
        {
         "bn": "হরফ",
         "en": "Harf"
        },
        {
         "bn": "ফে'ল",
         "en": "Fi'l"
        }
       ],
       "answer": 2,
       "explain": {
        "bn": "অর্থ ‘তিনি শিখিয়েছেন’ — অতীত কালের কাজ, তাই ফে'ল।",
        "en": "It means 'he taught' — an action in past time, so a fi'l."
       }
      },
      {
       "q": {
        "bn": "এই শব্দটি কোন জাতের?",
        "en": "Which family is this word?"
       },
       "ar": "عَلٰى",
       "options": [
        {
         "bn": "হরফ",
         "en": "Harf"
        },
        {
         "bn": "ফে'ল",
         "en": "Fi'l"
        },
        {
         "bn": "ইসম",
         "en": "Ism"
        }
       ],
       "answer": 0,
       "explain": {
        "bn": "{{عَلٰى}} মানে ‘উপর’ — একা পূর্ণ অর্থ দেয় না, তাই হরফ।",
        "en": "{{عَلٰى}} means 'on' — no full meaning alone, so a harf."
       }
      },
      {
       "q": {
        "bn": "কোনটি ফে'লের আলামত?",
        "en": "Which one is a sign of a verb?"
       },
       "options": [
        {
         "bn": "আগে {{قَدْ}} বা {{لَمْ}}",
         "en": "{{قَدْ}} or {{لَمْ}} before it"
        },
        {
         "bn": "শেষে তানবীন",
         "en": "Tanween at the end"
        },
        {
         "bn": "শুরুতে {{اَلْ}}",
         "en": "{{اَلْ}} at the start"
        },
        {
         "bn": "আগে {{فِي}}",
         "en": "{{فِي}} before it"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{بِسْمِ}} শব্দে কয়টি শব্দ লুকিয়ে আছে?",
        "en": "How many words are hidden in {{بِسْمِ}}?"
       },
       "ar": "بِسْمِ",
       "options": [
        {
         "bn": "একটি",
         "en": "One"
        },
        {
         "bn": "দুটি: হরফ + ইসম",
         "en": "Two: harf + ism"
        },
        {
         "bn": "দুটি: ফে'ল + ইসম",
         "en": "Two: fi'l + ism"
        }
       ],
       "answer": 1,
       "explain": {
        "bn": "{{بِ}} (দিয়ে) হরফ + {{اسْمِ}} (নাম) ইসম।",
        "en": "{{بِ}} (with) is a harf + {{اسْمِ}} (name) is an ism."
       }
      }
     ]
    }
   ]
  },
  {
   "id": "g-gender",
   "icon": "ة",
   "title": {
    "bn": "লিঙ্গ: পুরুষবাচক ও স্ত্রীবাচক",
    "en": "Gender: Masculine and Feminine"
   },
   "subtitle": {
    "bn": "আরবিতে প্রতিটি ইসম হয় মুযাক্কার, নয়তো মুআন্নাস",
    "en": "Every Arabic noun is either masculine or feminine"
   },
   "minutes": 12,
   "goals": [
    {
     "bn": "মুযাক্কার (পুং) ও মুআন্নাস (স্ত্রী) চিনবে",
     "en": "Recognise masculine (mudhakkar) and feminine (mu'annath) words"
    },
    {
     "bn": "গোল তা {{ة}} ও অন্যান্য স্ত্রীলিঙ্গ চিহ্ন জানবে",
     "en": "Know round tā {{ة}} and other feminine signs"
    },
    {
     "bn": "চিহ্ন ছাড়া স্ত্রীলিঙ্গ শব্দও চিনবে",
     "en": "Spot feminine words that have no sign"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "বাংলায় আমরা বলি ছাত্র – ছাত্রী, শিক্ষক – শিক্ষিকা। আরবিতেও ঠিক তেমন — তবে আরবিতে **প্রতিটি** ইসমেরই লিঙ্গ আছে, এমনকি বই, সূর্য, আগুনেরও! পুরুষবাচককে বলে **মুযাক্কার** ({{مُذَكَّرٌ}}), স্ত্রীবাচককে বলে **মুআন্নাস** ({{مُؤَنَّثٌ}})।",
     "en": "In English we have actor – actress, prince – princess. Arabic does the same — but in Arabic **every** noun has a gender, even a book, the sun or fire! Masculine is called **mudhakkar** ({{مُذَكَّرٌ}}), feminine is **mu'annath** ({{مُؤَنَّثٌ}})."
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "সহজ সূত্র: মুযাক্কার শব্দের শেষে **গোল তা** {{ة}} লাগালেই সাধারণত মুআন্নাস হয়ে যায় — যেমন বাংলায় ‘ছাত্র’-এর সঙ্গে ‘ী’ লাগালে ‘ছাত্রী’।",
     "en": "Easy rule: add a **round tā** {{ة}} to a masculine word and it usually becomes feminine — like adding '-ess' to 'prince' to get 'princess'."
    },
    {
     "type": "table",
     "title": {
      "bn": "জোড়ায় জোড়ায় দেখি",
      "en": "Pairs side by side"
     },
     "head": [
      {
       "bn": "মুযাক্কার (পুং)",
       "en": "Masculine"
      },
      {
       "bn": "মুআন্নাস (স্ত্রী)",
       "en": "Feminine"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "مُسْلِمٌ",
       "مُسْلِمَةٌ",
       {
        "bn": "মুসলিম পুরুষ / মুসলিম নারী",
        "en": "Muslim man / Muslim woman"
       }
      ],
      [
       "مُؤْمِنٌ",
       "مُؤْمِنَةٌ",
       {
        "bn": "মুমিন পুরুষ / মুমিন নারী",
        "en": "believing man / believing woman"
       }
      ],
      [
       "صَالِحٌ",
       "صَالِحَةٌ",
       {
        "bn": "নেককার (পুং / স্ত্রী)",
        "en": "righteous (m / f)"
       }
      ],
      [
       "كَبِيرٌ",
       "كَبِيرَةٌ",
       {
        "bn": "বড় (পুং / স্ত্রী)",
        "en": "big (m / f)"
       }
      ],
      [
       "مَلِكٌ",
       "مَلِكَةٌ",
       {
        "bn": "রাজা / রানি",
        "en": "king / queen"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "গোল তা {{ة}} পড়ার নিয়ম: শব্দে **থামলে** ‘হ’ পড়ো — {{جَنَّةٌ}} → ‘জান্নাহ’। **মিলিয়ে পড়লে** ‘ত’ পড়ো — {{سُورَةُ الْفَاتِحَةِ}} → ‘সূরাতুল ফাতিহাহ’।",
     "en": "Reading the round tā {{ة}}: when you **stop** on it, say 'h' — {{جَنَّةٌ}} → 'jannah'. When you **connect**, say 't' — {{سُورَةُ الْفَاتِحَةِ}} → 'sūratul-fātiḥah'."
    },
    {
     "type": "table",
     "title": {
      "bn": "মুআন্নাস চেনার তিন পথ",
      "en": "Three ways a word is feminine"
     },
     "head": [
      {
       "bn": "ধরন",
       "en": "Type"
      },
      {
       "bn": "উদাহরণ",
       "en": "Examples"
      },
      {
       "bn": "ব্যাখ্যা",
       "en": "Explanation"
      }
     ],
     "rows": [
      [
       {
        "bn": "১. চিহ্ন আছে",
        "en": "1. Has a sign"
       },
       "جَنَّةٌ ، رَحْمَةٌ ، أُنْثٰى ، الْحُسْنٰى",
       {
        "bn": "শেষে {{ة}}, কখনো {{ـٰى}} বা {{ـَاءُ}}",
        "en": "Ends in {{ة}}, sometimes {{ـٰى}} or {{ـَاءُ}}"
       }
      ],
      [
       {
        "bn": "২. স্বভাবগত নারী",
        "en": "2. Naturally female"
       },
       "أُمٌّ ، مَرْيَمُ ، زَيْنَبُ",
       {
        "bn": "চিহ্ন নেই, কিন্তু অর্থেই নারী",
        "en": "No sign, but female by meaning"
       }
      ],
      [
       {
        "bn": "৩. প্রচলনে মুআন্নাস",
        "en": "3. Feminine by usage"
       },
       "شَمْسٌ ، أَرْضٌ ، نَارٌ ، نَفْسٌ ، دَارٌ",
       {
        "bn": "চিহ্ন নেই; আরবরা এগুলোকে স্ত্রীলিঙ্গ ধরে — মুখস্থ রাখতে হয়",
        "en": "No sign; Arabs treat them as feminine — just memorise them"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "চিহ্নহীন মুআন্নাস মনে রাখার ছড়া: **সূর্য, মাটি, আগুন, প্রাণ — ঘর আর হাত, চোখ সমান।** অর্থাৎ {{شَمْسٌ}}, {{أَرْضٌ}}, {{نَارٌ}}, {{نَفْسٌ}}, {{دَارٌ}}, {{يَدٌ}}, {{عَيْنٌ}} — সবাই মুআন্নাস। (শরীরের জোড়া অঙ্গগুলো সাধারণত মুআন্নাস।)",
     "en": "A rhyme for sign-less feminines: **sun and earth and fire and soul, home and hand and eye — the whole!** That is {{شَمْسٌ}}, {{أَرْضٌ}}, {{نَارٌ}}, {{نَفْسٌ}}, {{دَارٌ}}, {{يَدٌ}}, {{عَيْنٌ}} — all feminine. (Paired body parts are usually feminine.)"
    },
    {
     "type": "examples",
     "title": {
      "bn": "কুরআনে লিঙ্গের মিল",
      "en": "Gender agreement in the Quran"
     },
     "items": [
      {
       "ar": "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ",
       "tr": {
        "bn": "কুল্লু নাফসিন যা-ইকাতুল মাওত",
        "en": "kullu nafsin dhā'iqatul-mawt"
       },
       "mean": {
        "bn": "প্রত্যেক প্রাণ মৃত্যুর স্বাদ গ্রহণকারী (৩:১৮৫)",
        "en": "Every soul will taste death (3:185)"
       },
       "note": {
        "bn": "{{نَفْسٌ}} মুআন্নাস, তাই {{ذَائِقَةُ}}-তেও {{ة}} এসেছে",
        "en": "{{نَفْسٌ}} is feminine, so {{ذَائِقَةُ}} also takes {{ة}}"
       },
       "hl": "ذَائِقَةُ"
      },
      {
       "ar": "نَارٌ حَامِيَةٌ",
       "tr": {
        "bn": "নারুন হামিয়াহ",
        "en": "nārun ḥāmiyah"
       },
       "mean": {
        "bn": "উত্তপ্ত আগুন (১০১:১১)",
        "en": "A blazing fire (101:11)"
       },
       "note": {
        "bn": "{{نَارٌ}} চিহ্নহীন মুআন্নাস, তাই বিশেষণ {{حَامِيَةٌ}} স্ত্রীলিঙ্গ",
        "en": "{{نَارٌ}} is feminine without a sign, so the adjective {{حَامِيَةٌ}} is feminine"
       },
       "hl": "حَامِيَةٌ"
      },
      {
       "ar": "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ",
       "tr": {
        "bn": "ইয়া আইয়াতুহান নাফসুল মুত্বমা-ইন্নাহ",
        "en": "yā ayyatuhan-nafsul-muṭma'innah"
       },
       "mean": {
        "bn": "হে প্রশান্ত আত্মা! (৮৯:২৭)",
        "en": "O soul at peace! (89:27)"
       },
       "note": {
        "bn": "ডাকার শব্দও স্ত্রীলিঙ্গ হয়েছে: {{أَيُّهَا}} নয়, {{أَيَّتُهَا}}",
        "en": "Even the calling word turned feminine: {{أَيَّتُهَا}} instead of {{أَيُّهَا}}"
       },
       "hl": "أَيَّتُهَا"
      },
      {
       "ar": "وَالشَّمْسِ وَضُحٰهَا",
       "tr": {
        "bn": "ওয়াশ-শামসি ওয়া দুহা-হা",
        "en": "wash-shamsi wa ḍuḥāhā"
       },
       "mean": {
        "bn": "শপথ সূর্যের ও তার আলোর (৯১:১)",
        "en": "By the sun and its morning brightness (91:1)"
       },
       "note": {
        "bn": "সূর্যকে বোঝাতে {{هَا}} (তার — স্ত্রী) এসেছে, কারণ {{شَمْسٌ}} মুআন্নাস",
        "en": "The sun is referred to with {{هَا}} ('her'), because {{شَمْسٌ}} is feminine"
       },
       "hl": "هَا"
      },
      {
       "ar": "إِنَّ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ",
       "tr": {
        "bn": "ইন্নাল মুসলিমীনা ওয়াল মুসলিমাত",
        "en": "innal-muslimīna wal-muslimāt"
       },
       "mean": {
        "bn": "নিশ্চয়ই মুসলিম পুরুষ ও মুসলিম নারী… (৩৩:৩৫)",
        "en": "Indeed, Muslim men and Muslim women... (33:35)"
       },
       "note": {
        "bn": "একই শব্দের পুং ও স্ত্রী রূপ পাশাপাশি",
        "en": "Masculine and feminine forms of the same word side by side"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "লিঙ্গ জানা জরুরি কেন? কারণ ইসম মুআন্নাস হলে তার বিশেষণ, সর্বনাম, এমনকি ক্রিয়াও বদলে যায়: {{هُوَ}} (সে – পুং) / {{هِيَ}} (সে – স্ত্রী), {{كَتَبَ}} (সে লিখল – পুং) / {{كَتَبَتْ}} (সে লিখল – স্ত্রী)।",
     "en": "Why does gender matter? Because when a noun is feminine, its adjective, pronoun and even its verb change: {{هُوَ}} (he) / {{هِيَ}} (she), {{كَتَبَ}} (he wrote) / {{كَتَبَتْ}} (she wrote)."
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "{{مُؤْمِنٌ}}-এর স্ত্রীলিঙ্গ কোনটি?",
        "en": "What is the feminine of {{مُؤْمِنٌ}}?"
       },
       "options": [
        "مُؤْمِنُونَ",
        "اَلْمُؤْمِنُ",
        "مُؤْمِنَانِ",
        "مُؤْمِنَةٌ"
       ],
       "answer": 3
      },
      {
       "q": {
        "bn": "স্ত্রীলিঙ্গের সবচেয়ে পরিচিত চিহ্ন কোনটি?",
        "en": "What is the most common feminine sign?"
       },
       "options": [
        {
         "bn": "শুরুতে {{اَلْ}}",
         "en": "{{اَلْ}} at the start"
        },
        {
         "bn": "শেষে {{ـُونَ}}",
         "en": "{{ـُونَ}} at the end"
        },
        {
         "bn": "শেষে গোল তা {{ة}}",
         "en": "Round tā {{ة}} at the end"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "কোনটি চিহ্ন ছাড়াই মুআন্নাস?",
        "en": "Which one is feminine without any sign?"
       },
       "options": [
        "بَيْتٌ",
        "شَمْسٌ",
        "كِتَابٌ",
        "قَلَمٌ"
       ],
       "answer": 1,
       "explain": {
        "bn": "{{شَمْسٌ}} (সূর্য) প্রচলনে মুআন্নাস।",
        "en": "{{شَمْسٌ}} (sun) is feminine by usage."
       }
      },
      {
       "q": {
        "bn": "{{جَنَّةٌ}} শব্দে থামলে শেষটা কীভাবে পড়বে?",
        "en": "How do you pronounce the end of {{جَنَّةٌ}} when you stop?"
       },
       "ar": "جَنَّةٌ",
       "options": [
        {
         "bn": "জান্নাহ",
         "en": "jannah"
        },
        {
         "bn": "জান্নাতুন",
         "en": "jannatun"
        },
        {
         "bn": "জান্নাত",
         "en": "jannat"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ}} — {{ذَائِقَةُ}}-তে {{ة}} কেন?",
        "en": "In {{كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ}}, why does {{ذَائِقَةُ}} have {{ة}}?"
       },
       "options": [
        {
         "bn": "কারণ এটি বহুবচন",
         "en": "Because it is plural"
        },
        {
         "bn": "কারণ {{نَفْسٌ}} মুআন্নাস",
         "en": "Because {{نَفْسٌ}} is feminine"
        },
        {
         "bn": "কারণ এটি ফে'ল",
         "en": "Because it is a verb"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{أُمٌّ}} (মা) শব্দটি কেমন?",
        "en": "What is {{أُمٌّ}} (mother)?"
       },
       "options": [
        {
         "bn": "হরফ",
         "en": "A harf"
        },
        {
         "bn": "মুযাক্কার",
         "en": "Masculine"
        },
        {
         "bn": "স্বভাবগত মুআন্নাস",
         "en": "Naturally feminine"
        }
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "g-number",
   "icon": "٣",
   "title": {
    "bn": "বচন: এক, দুই, বহু",
    "en": "Number: One, Two, Many"
   },
   "subtitle": {
    "bn": "আরবিতে ‘দুই’-এর জন্য আলাদা রূপ আছে!",
    "en": "Arabic has a special form just for 'two'!"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "মুফরাদ (এক), মুসান্না (দুই) ও জমা (বহু) চিনবে",
     "en": "Recognise singular, dual and plural"
    },
    {
     "bn": "সালিম বহুবচনের শেষাংশ {{ـُونَ / ـِينَ}} ও {{ـَاتٌ}} চিনবে",
     "en": "Spot sound plural endings {{ـُونَ / ـِينَ}} and {{ـَاتٌ}}"
    },
    {
     "bn": "কুরআনের পরিচিত ভাঙা বহুবচন শিখবে",
     "en": "Learn common Quranic broken plurals"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "বাংলায় আছে দুটি বচন: ‘মুসলিম’ আর ‘মুসলিমরা’। আরবিতে আছে **তিনটি**: একজন — **মুফরাদ** ({{مُفْرَدٌ}}), দুজন — **মুসান্না** ({{مُثَنًّى}}), আর তিন বা তার বেশি — **জমা** ({{جَمْعٌ}})।",
     "en": "English has two numbers: 'Muslim' and 'Muslims'. Arabic has **three**: one — **mufrad** ({{مُفْرَدٌ}}), exactly two — **muthanna** ({{مُثَنًّى}}), and three or more — **jam'** ({{جَمْعٌ}})."
    },
    {
     "type": "table",
     "title": {
      "bn": "দ্বিবচন (মুসান্না): শেষে {{ـَانِ}} বা {{ـَيْنِ}}",
      "en": "The dual: add {{ـَانِ}} or {{ـَيْنِ}}"
     },
     "head": [
      {
       "bn": "এক",
       "en": "One"
      },
      {
       "bn": "দুই (কর্তা হলে)",
       "en": "Two (as subject)"
      },
      {
       "bn": "দুই (হরফের পরে / কর্ম হলে)",
       "en": "Two (after a preposition / as object)"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "مُسْلِمٌ",
       "مُسْلِمَانِ",
       "مُسْلِمَيْنِ",
       {
        "bn": "মুসলিম",
        "en": "Muslim"
       }
      ],
      [
       "كِتَابٌ",
       "كِتَابَانِ",
       "كِتَابَيْنِ",
       {
        "bn": "বই",
        "en": "book"
       }
      ],
      [
       "جَنَّةٌ",
       "جَنَّتَانِ",
       "جَنَّتَيْنِ",
       {
        "bn": "বাগান / জান্নাত",
        "en": "garden"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "{{ة}} যুক্ত শব্দের দ্বিবচন করার সময় গোল তা খুলে **লম্বা ত** {{ت}} হয়ে যায়: {{جَنَّةٌ}} → {{جَنَّتَانِ}}।",
     "en": "When a word with {{ة}} becomes dual, the round tā opens into a normal {{ت}}: {{جَنَّةٌ}} → {{جَنَّتَانِ}}."
    },
    {
     "type": "examples",
     "title": {
      "bn": "সূরা আর-রহমানে দ্বিবচন",
      "en": "Duals in Surah Ar-Rahman"
     },
     "items": [
      {
       "ar": "وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ",
       "tr": {
        "bn": "ওয়া লিমান খাফা মাকামা রব্বিহী জান্নাতান",
        "en": "wa liman khāfa maqāma rabbihī jannatān"
       },
       "mean": {
        "bn": "যে তার রবের সামনে দাঁড়ানোর ভয় করে, তার জন্য আছে দুটি জান্নাত (৫৫:৪৬)",
        "en": "For whoever fears standing before his Lord are two gardens (55:46)"
       },
       "hl": "جَنَّتَانِ"
      },
      {
       "ar": "رَبُّ الْمَشْرِقَيْنِ وَرَبُّ الْمَغْرِبَيْنِ",
       "tr": {
        "bn": "রব্বুল মাশরিকাইনি ওয়া রব্বুল মাগরিবাইন",
        "en": "rabbul-mashriqayni wa rabbul-maghribayn"
       },
       "mean": {
        "bn": "তিনি দুই উদয়াচল ও দুই অস্তাচলের রব (৫৫:১৭)",
        "en": "Lord of the two easts and Lord of the two wests (55:17)"
       },
       "note": {
        "bn": "এখানে {{ـَيْنِ}} রূপ, কারণ শব্দটি মুযাফ ইলাইহি (যের অবস্থা)",
        "en": "The {{ـَيْنِ}} form, because the word is in the genitive (after rabb)"
       },
       "hl": "الْمَشْرِقَيْنِ"
      }
     ]
    },
    {
     "type": "table",
     "title": {
      "bn": "সালিম (অক্ষত) বহুবচন — শুধু শেষে যোগ",
      "en": "Sound plurals — just add an ending"
     },
     "head": [
      {
       "bn": "ধরন",
       "en": "Type"
      },
      {
       "bn": "কর্তা হলে",
       "en": "As subject"
      },
      {
       "bn": "হরফের পরে / কর্ম হলে",
       "en": "After a preposition / as object"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      }
     ],
     "rows": [
      [
       {
        "bn": "পুরুষ বহুবচন",
        "en": "Masculine plural"
       },
       "ـُونَ",
       "ـِينَ",
       "مُسْلِمُونَ / مُسْلِمِينَ"
      ],
      [
       {
        "bn": "স্ত্রী বহুবচন",
        "en": "Feminine plural"
       },
       "ـَاتٌ",
       "ـَاتٍ",
       "مُسْلِمَاتٌ / مُسْلِمَاتٍ"
      ]
     ]
    },
    {
     "type": "examples",
     "title": {
      "bn": "এই শব্দগুলো তুমি নামাজেই রোজ পড়ো!",
      "en": "You read these every day in salah!"
     },
     "items": [
      {
       "ar": "رَبِّ الْعٰلَمِينَ",
       "tr": {
        "bn": "রব্বিল আলামীন",
        "en": "rabbil-'ālamīn"
       },
       "mean": {
        "bn": "সকল জগতের রব (১:২)",
        "en": "Lord of all the worlds (1:2)"
       },
       "note": {
        "bn": "{{ـِينَ}} — পুরুষ সালিম বহুবচন",
        "en": "{{ـِينَ}} — sound masculine plural"
       },
       "hl": "الْعٰلَمِينَ"
      },
      {
       "ar": "وَلَا الضَّالِّينَ",
       "tr": {
        "bn": "ওয়ালাদ-দ্বাল্লীন",
        "en": "wa laḍ-ḍāllīn"
       },
       "mean": {
        "bn": "এবং পথভ্রষ্টদের (পথও) নয় (১:৭)",
        "en": "nor of those astray (1:7)"
       },
       "hl": "الضَّالِّينَ"
      },
      {
       "ar": "هُدًى لِلْمُتَّقِينَ",
       "tr": {
        "bn": "হুদাল লিল মুত্তাকীন",
        "en": "hudal-lil-muttaqīn"
       },
       "mean": {
        "bn": "মুত্তাকীদের জন্য পথনির্দেশ (২:২)",
        "en": "guidance for the God-conscious (2:2)"
       },
       "hl": "لِلْمُتَّقِينَ"
      },
      {
       "ar": "وَأُولٰئِكَ هُمُ الْمُفْلِحُونَ",
       "tr": {
        "bn": "ওয়া উলা-ইকা হুমুল মুফলিহূন",
        "en": "wa ulā'ika humul-mufliḥūn"
       },
       "mean": {
        "bn": "আর তারাই সফলকাম (২:৫)",
        "en": "and it is they who are the successful (2:5)"
       },
       "note": {
        "bn": "{{ـُونَ}} — কর্তা/খবর অবস্থায়",
        "en": "{{ـُونَ}} — subject/predicate position"
       },
       "hl": "الْمُفْلِحُونَ"
      },
      {
       "ar": "وَعَمِلُوا الصَّالِحَاتِ",
       "tr": {
        "bn": "ওয়া আমিলুস সা-লিহাত",
        "en": "wa 'amiluṣ-ṣāliḥāt"
       },
       "mean": {
        "bn": "এবং সৎকর্ম করেছে (১০৩:৩)",
        "en": "and did righteous deeds (103:3)"
       },
       "note": {
        "bn": "{{ـَاتِ}} — স্ত্রী সালিম বহুবচন",
        "en": "{{ـَاتِ}} — sound feminine plural"
       },
       "hl": "الصَّالِحَاتِ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "‘উন’ উঁচুতে, ‘ঈন’ নিচে: কর্তা (রাজার আসনে) থাকলে পেশ-এর {{ـُونَ}}; হরফের নিচে বা কর্ম হলে যের-এর {{ـِينَ}}। দ্বিবচনেও তাই: {{ـَانِ}} উপরে, {{ـَيْنِ}} নিচে।",
     "en": "'-ūn' up, '-īn' down: as the subject (on the throne) use {{ـُونَ}}; after a preposition or as an object use {{ـِينَ}}. Same with duals: {{ـَانِ}} up, {{ـَيْنِ}} down."
    },
    {
     "type": "text",
     "title": {
      "bn": "ভাঙা বহুবচন (জমা মুকাসসার)",
      "en": "Broken plurals (jam' mukassar)"
     },
     "bn": "কুরআনের অনেক বহুবচন শেষে কিছু যোগ করে হয় না — শব্দের **ভেতরটা ভেঙে নতুন ছাঁচে** গড়া হয়। ইংরেজির man → men, child → children-এর মতো। এগুলো দেখে দেখে চিনতে হয়; মূল তিন অক্ষর (রুট) একই থাকে।",
     "en": "Many Quranic plurals don't add an ending — the word is **broken inside and re-moulded**, like English man → men, child → children. You learn these by sight; the three root letters stay the same."
    },
    {
     "type": "table",
     "title": {
      "bn": "কুরআনের পরিচিত ভাঙা বহুবচন",
      "en": "Common Quranic broken plurals"
     },
     "head": [
      {
       "bn": "এক",
       "en": "Singular"
      },
      {
       "bn": "বহু",
       "en": "Plural"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "كِتَابٌ",
       "كُتُبٌ",
       {
        "bn": "বই / কিতাব",
        "en": "book(s)"
       }
      ],
      [
       "رَسُولٌ",
       "رُسُلٌ",
       {
        "bn": "রাসূল",
        "en": "messenger(s)"
       }
      ],
      [
       "قَلْبٌ",
       "قُلُوبٌ",
       {
        "bn": "অন্তর",
        "en": "heart(s)"
       }
      ],
      [
       "بَيْتٌ",
       "بُيُوتٌ",
       {
        "bn": "ঘর",
        "en": "house(s)"
       }
      ],
      [
       "عَبْدٌ",
       "عِبَادٌ",
       {
        "bn": "বান্দা",
        "en": "servant(s)"
       }
      ],
      [
       "يَوْمٌ",
       "أَيَّامٌ",
       {
        "bn": "দিন",
        "en": "day(s)"
       }
      ],
      [
       "رَجُلٌ",
       "رِجَالٌ",
       {
        "bn": "পুরুষ",
        "en": "man / men"
       }
      ],
      [
       "جَبَلٌ",
       "جِبَالٌ",
       {
        "bn": "পাহাড়",
        "en": "mountain(s)"
       }
      ],
      [
       "وَلَدٌ",
       "أَوْلَادٌ",
       {
        "bn": "সন্তান",
        "en": "child(ren)"
       }
      ],
      [
       "نَفْسٌ",
       "أَنْفُسٌ",
       {
        "bn": "প্রাণ / নিজ",
        "en": "soul(s) / self"
       }
      ],
      [
       "صَاحِبٌ",
       "أَصْحَابٌ",
       {
        "bn": "সঙ্গী / অধিবাসী",
        "en": "companion(s)"
       }
      ],
      [
       "نَبِيٌّ",
       "أَنْبِيَاءُ",
       {
        "bn": "নবী",
        "en": "prophet(s)"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "{{اِمْرَأَةٌ}} (নারী)-এর বহুবচন একদম ভিন্ন শব্দ: {{نِسَاءٌ}} — কুরআনের একটি সূরার নামই {{النِّسَاءُ}}! ঠিক ইংরেজির person → people-এর মতো।",
     "en": "The plural of {{اِمْرَأَةٌ}} (woman) is a totally different word: {{نِسَاءٌ}} — a whole surah is named {{النِّسَاءُ}}! Just like English person → people."
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "‘দুটি বই’ আরবিতে কোনটি?",
        "en": "Which means 'two books'?"
       },
       "options": [
        "كُتُبٌ",
        "كِتَابٌ",
        "كِتَابَانِ",
        "كَاتِبُونَ"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "{{الْمُفْلِحُونَ}} কোন বচন?",
        "en": "What number is {{الْمُفْلِحُونَ}}?"
       },
       "ar": "الْمُفْلِحُونَ",
       "options": [
        {
         "bn": "পুরুষ সালিম বহুবচন",
         "en": "Sound masculine plural"
        },
        {
         "bn": "দ্বিবচন",
         "en": "Dual"
        },
        {
         "bn": "একবচন",
         "en": "Singular"
        },
        {
         "bn": "স্ত্রী সালিম বহুবচন",
         "en": "Sound feminine plural"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{الصَّالِحَاتِ}}-এর শেষাংশ কী বোঝায়?",
        "en": "What does the ending of {{الصَّالِحَاتِ}} show?"
       },
       "ar": "الصَّالِحَاتِ",
       "options": [
        {
         "bn": "স্ত্রী সালিম বহুবচন",
         "en": "Sound feminine plural"
        },
        {
         "bn": "দ্বিবচন",
         "en": "Dual"
        },
        {
         "bn": "ভাঙা বহুবচন",
         "en": "Broken plural"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{قَلْبٌ}}-এর বহুবচন কোনটি?",
        "en": "What is the plural of {{قَلْبٌ}}?"
       },
       "options": [
        "قَلْبَانِ",
        "قَلْبَاتٌ",
        "قَلْبُونَ",
        "قُلُوبٌ"
       ],
       "answer": 3
      },
      {
       "q": {
        "bn": "{{رَبِّ الْعٰلَمِينَ}} — এখানে {{ـُونَ}} না হয়ে {{ـِينَ}} কেন?",
        "en": "In {{رَبِّ الْعٰلَمِينَ}}, why {{ـِينَ}} and not {{ـُونَ}}?"
       },
       "options": [
        {
         "bn": "শব্দটি স্ত্রীলিঙ্গ",
         "en": "The word is feminine"
        },
        {
         "bn": "শব্দটি এখানে যের অবস্থায় (মুযাফ ইলাইহি)",
         "en": "The word is in the genitive here"
        },
        {
         "bn": "শব্দটি দ্বিবচন",
         "en": "The word is dual"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{جَنَّةٌ}}-এর দ্বিবচন কোনটি?",
        "en": "What is the dual of {{جَنَّةٌ}}?"
       },
       "options": [
        "جَنَّاتٌ",
        "جَنَّةَانِ",
        "جَنَّتَانِ"
       ],
       "answer": 2,
       "explain": {
        "bn": "গোল তা খুলে {{ت}} হয়: {{جَنَّتَانِ}} (৫৫:৪৬)।",
        "en": "The round tā opens to {{ت}}: {{جَنَّتَانِ}} (55:46)."
       }
      }
     ]
    }
   ]
  },
  {
   "id": "g-definite",
   "icon": "ال",
   "title": {
    "bn": "নির্দিষ্ট ও অনির্দিষ্ট: {{اَلْ}} বনাম তানবীন",
    "en": "Definite and Indefinite: {{اَلْ}} vs Tanween"
   },
   "subtitle": {
    "bn": "‘একটি বই’ আর ‘বইটি’-র পার্থক্য",
    "en": "The difference between 'a book' and 'the book'"
   },
   "minutes": 12,
   "goals": [
    {
     "bn": "{{اَلْ}} দিয়ে নির্দিষ্ট (মা'রিফা) শব্দ চিনবে",
     "en": "Recognise definite words made with {{اَلْ}} (ma'rifa)"
    },
    {
     "bn": "তানবীন দিয়ে অনির্দিষ্ট (নাকিরা) শব্দ চিনবে",
     "en": "Recognise indefinite words marked with tanween (nakira)"
    },
    {
     "bn": "জানবে কেন {{اَلْ}} ও তানবীন একসঙ্গে বসে না",
     "en": "Know why {{اَلْ}} and tanween never sit together"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "বাংলায় ‘একটি বই’ বললে যেকোনো একটা বই বোঝায়, আর ‘বইটি’ বললে নির্দিষ্ট একটা বই। বাংলায় ‘-টি/-টা’ বসে শেষে; আরবিতে নির্দিষ্ট করার জন্য {{اَلْ}} বসে **শুরুতে**। আর অনির্দিষ্ট শব্দের শেষে সাধারণত থাকে **তানবীন** (দুই যবর/যের/পেশ)।",
     "en": "In English 'a book' means any book, 'the book' means a specific one. Arabic puts {{اَلْ}} ('the') at the **front** to make a word definite. An indefinite word usually ends in **tanween** (doubled vowel)."
    },
    {
     "type": "table",
     "title": {
      "bn": "অনির্দিষ্ট → নির্দিষ্ট",
      "en": "Indefinite → Definite"
     },
     "head": [
      {
       "bn": "নাকিরা (অনির্দিষ্ট)",
       "en": "Nakira (indefinite)"
      },
      {
       "bn": "মা'রিফা (নির্দিষ্ট)",
       "en": "Ma'rifa (definite)"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "كِتَابٌ",
       "اَلْكِتَابُ",
       {
        "bn": "একটি বই → বইটি",
        "en": "a book → the book"
       }
      ],
      [
       "رَسُولٌ",
       "اَلرَّسُولُ",
       {
        "bn": "একজন রাসূল → রাসূলটি (সেই রাসূল)",
        "en": "a messenger → the messenger"
       }
      ],
      [
       "بَيْتٌ",
       "اَلْبَيْتُ",
       {
        "bn": "একটি ঘর → ঘরটি",
        "en": "a house → the house"
       }
      ],
      [
       "قَمَرٌ",
       "اَلْقَمَرُ",
       {
        "bn": "একটি চাঁদ → চাঁদটি",
        "en": "a moon → the moon"
       }
      ],
      [
       "شَمْسٌ",
       "اَلشَّمْسُ",
       {
        "bn": "একটি সূর্য → সূর্যটি",
        "en": "a sun → the sun"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "**{{اَلْ}} আর তানবীন কখনো একসাথে বসে না!** {{اَلْ}} এলেই তানবীন বিদায় নেয়, শুধু এক হরকত থাকে: {{كِتَابٌ}} → {{اَلْكِتَابُ}}। ভুল: ‘اَلْكِتَابٌ’ ✗",
     "en": "**{{اَلْ}} and tanween never sit together!** When {{اَلْ}} arrives, tanween leaves and a single vowel stays: {{كِتَابٌ}} → {{اَلْكِتَابُ}}. Wrong: 'اَلْكِتَابٌ' ✗"
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "ভাবো তানবীন হলো ‘একটি’ — আর {{اَلْ}} হলো ‘টি’। একই বইকে একসঙ্গে ‘একটি বইটি’ বলা যায় না, তাই দুটো একসঙ্গে বসে না!",
     "en": "Think of tanween as 'a' and {{اَلْ}} as 'the'. You can't say 'a the book' — so they never come together!"
    },
    {
     "type": "table",
     "title": {
      "bn": "তানবীনের তিন চেহারা",
      "en": "The three faces of tanween"
     },
     "head": [
      {
       "bn": "রূপ",
       "en": "Form"
      },
      {
       "bn": "উচ্চারণ",
       "en": "Sound"
      },
      {
       "bn": "কখন (সংক্ষেপে)",
       "en": "When (in short)"
      }
     ],
     "rows": [
      [
       "كِتَابٌ",
       {
        "bn": "কিতাবুন",
        "en": "kitābun"
       },
       {
        "bn": "পেশ অবস্থা — সাধারণত কর্তা/উদ্দেশ্য",
        "en": "Raf' — usually the subject"
       }
      ],
      [
       "كِتَابًا",
       {
        "bn": "কিতাবান",
        "en": "kitāban"
       },
       {
        "bn": "যবর অবস্থা — সাধারণত কর্ম",
        "en": "Nasb — usually the object"
       }
      ],
      [
       "كِتَابٍ",
       {
        "bn": "কিতাবিন",
        "en": "kitābin"
       },
       {
        "bn": "যের অবস্থা — হরফে জারের পরে বা মালিকানায়",
        "en": "Jarr — after a preposition or in possession"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "শব্দের শেষের এই হরকত বদলকে বলে **ই'রাব** ({{إِعْرَابٌ}})। ঘাবড়ানোর কিছু নেই — সামনের পাঠগুলোতে একটু একটু করে শিখব। আপাতত শুধু মনে রাখো: শেষ হরকত শব্দের ‘ভূমিকা’ বলে দেয়।",
     "en": "This change in the final vowel is called **i'rab** ({{إِعْرَابٌ}}). Don't worry — we'll learn it bit by bit in the coming lessons. For now just remember: the last vowel tells you the word's 'job'."
    },
    {
     "type": "examples",
     "title": {
      "bn": "কুরআনে নির্দিষ্ট ও অনির্দিষ্ট",
      "en": "Definite and indefinite in the Quran"
     },
     "items": [
      {
       "ar": "ذٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ",
       "tr": {
        "bn": "যালিকাল কিতাবু লা রইবা ফীহ",
        "en": "dhālikal-kitābu lā rayba fīh"
       },
       "mean": {
        "bn": "এটি সেই কিতাব, যাতে কোনো সন্দেহ নেই (২:২)",
        "en": "That is the Book, no doubt in it (2:2)"
       },
       "note": {
        "bn": "{{الْكِتَابُ}} — নির্দিষ্ট: সেই কিতাব",
        "en": "{{الْكِتَابُ}} — definite: THE Book"
       },
       "hl": "الْكِتَابُ"
      },
      {
       "ar": "قَدْ جَاءَكُمْ مِنَ اللّٰهِ نُورٌ وَكِتَابٌ مُبِينٌ",
       "tr": {
        "bn": "কদ জা-আকুম মিনাল্লাহি নূরুঁও ওয়া কিতাবুম মুবীন",
        "en": "qad jā'akum minallāhi nūruñw-wa kitābum-mubīn"
       },
       "mean": {
        "bn": "তোমাদের কাছে আল্লাহর পক্ষ থেকে এসেছে এক আলো ও এক স্পষ্ট কিতাব (৫:১৫)",
        "en": "There has come to you from Allah a light and a clear Book (5:15)"
       },
       "note": {
        "bn": "{{كِتَابٌ}} — তানবীন: ‘একটি’ কিতাব",
        "en": "{{كِتَابٌ}} — tanween: 'a' Book"
       },
       "hl": "كِتَابٌ"
      },
      {
       "ar": "لَقَدْ جَاءَكُمْ رَسُولٌ مِنْ أَنْفُسِكُمْ",
       "tr": {
        "bn": "লাকদ জা-আকুম রাসূলুম মিন আনফুসিকুম",
        "en": "laqad jā'akum rasūlum-min anfusikum"
       },
       "mean": {
        "bn": "তোমাদের কাছে তোমাদের মধ্য থেকেই একজন রাসূল এসেছেন (৯:১২৮)",
        "en": "A messenger from among yourselves has come to you (9:128)"
       },
       "hl": "رَسُولٌ"
      },
      {
       "ar": "أَطِيعُوا اللّٰهَ وَأَطِيعُوا الرَّسُولَ",
       "tr": {
        "bn": "আত্বীউল্লাহা ওয়া আত্বীউর রাসূল",
        "en": "aṭī'ullāha wa aṭī'ur-rasūl"
       },
       "mean": {
        "bn": "আল্লাহর আনুগত্য করো এবং রাসূলের আনুগত্য করো (৪:৫৯)",
        "en": "Obey Allah and obey the Messenger (4:59)"
       },
       "note": {
        "bn": "{{الرَّسُولَ}} — নির্দিষ্ট: সেই রাসূল ﷺ",
        "en": "{{الرَّسُولَ}} — definite: THE Messenger ﷺ"
       },
       "hl": "الرَّسُولَ"
      },
      {
       "ar": "إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ",
       "tr": {
        "bn": "ইন্নাল ইনসানা লাফী খুসর",
        "en": "innal-insāna lafī khusr"
       },
       "mean": {
        "bn": "নিশ্চয়ই মানুষ ক্ষতির মধ্যে আছে (১০৩:২)",
        "en": "Indeed, mankind is in loss (103:2)"
       },
       "note": {
        "bn": "{{الْإِنْسَانَ}} নির্দিষ্ট, {{خُسْرٍ}} অনির্দিষ্ট (তানবীন)",
        "en": "{{الْإِنْسَانَ}} is definite, {{خُسْرٍ}} is indefinite (tanween)"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "শামসী-কামারী মনে আছে? {{اَلْقَمَرُ}}-তে {{ل}} পড়া হয় (আল-কামারু), কিন্তু {{اَلشَّمْسُ}}-তে {{ل}} চুপ, পরের অক্ষরে তাশদীদ (আশ-শামসু)। আর আগে কোনো শব্দ থাকলে {{ا}} উচ্চারিত হয় না: {{وَالْعَصْرِ}} = ‘ওয়াল আসর’।",
     "en": "Remember sun and moon letters? In {{اَلْقَمَرُ}} the {{ل}} is said (al-qamaru), but in {{اَلشَّمْسُ}} it is silent and the next letter is doubled (ash-shamsu). And when a word comes before, the {{ا}} is skipped: {{وَالْعَصْرِ}} = 'wal-'aṣr'."
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "{{لِـ}} (জন্য) + {{اَلْ}} মিলে হয় {{لِلْ}} — আলিফ লেখাই হয় না: {{لِلْمُتَّقِينَ}} (মুত্তাকীদের জন্য), {{لِلنَّاسِ}} (মানুষের জন্য)। {{لِلّٰهِ}} (আল্লাহর জন্য)-ও এভাবেই।",
     "en": "{{لِـ}} (for) + {{اَلْ}} becomes {{لِلْ}} — the alif isn't even written: {{لِلْمُتَّقِينَ}} (for the God-conscious), {{لِلنَّاسِ}} (for people). {{لِلّٰهِ}} (for Allah) works the same way."
    },
    {
     "type": "text",
     "title": {
      "bn": "{{اَلْ}} ছাড়াও নির্দিষ্ট হওয়ার উপায়",
      "en": "Other ways to be definite"
     },
     "bn": "{{اَلْ}} ছাড়াও শব্দ নির্দিষ্ট হয়: (১) নাম — {{اللّٰهُ}}, {{مُحَمَّدٌ}}, {{مُوسٰى}}; (২) সর্বনাম যুক্ত হলে — {{كِتَابُهُ}} (তার বই); (৩) নির্দিষ্ট শব্দের সাথে সম্বন্ধ হলে — {{كِتَابُ اللّٰهِ}} (আল্লাহর কিতাব)। এগুলো পরের পাঠে আসছে।",
     "en": "Besides {{اَلْ}}, a word is definite when it is: (1) a name — {{اللّٰهُ}}, {{مُحَمَّدٌ}}, {{مُوسٰى}}; (2) joined to a pronoun — {{كِتَابُهُ}} (his book); (3) possessed by a definite word — {{كِتَابُ اللّٰهِ}} (the Book of Allah). These come in later lessons."
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "‘বইটি’ (নির্দিষ্ট) কোনটি?",
        "en": "Which means 'the book'?"
       },
       "options": [
        "كِتَابٌ",
        "اَلْكِتَابُ",
        "كِتَابًا",
        "اَلْكِتَابٌ"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "কোনটি ভুল লেখা?",
        "en": "Which one is written wrongly?"
       },
       "options": [
        "اَلْبَيْتُ",
        "بَيْتٌ",
        "اَلْبَيْتٌ",
        "بَيْتًا"
       ],
       "answer": 2,
       "explain": {
        "bn": "{{اَلْ}} আর তানবীন একসঙ্গে বসে না।",
        "en": "{{اَلْ}} and tanween never come together."
       }
      },
      {
       "q": {
        "bn": "{{خُسْرٍ}} শব্দটি কেমন?",
        "en": "What is {{خُسْرٍ}}?"
       },
       "ar": "خُسْرٍ",
       "options": [
        {
         "bn": "অনির্দিষ্ট (নাকিরা)",
         "en": "Indefinite"
        },
        {
         "bn": "ফে'ল",
         "en": "A verb"
        },
        {
         "bn": "নির্দিষ্ট (মা'রিফা)",
         "en": "Definite"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{اَلشَّمْسُ}} কীভাবে পড়বে?",
        "en": "How do you read {{اَلشَّمْسُ}}?"
       },
       "ar": "اَلشَّمْسُ",
       "options": [
        {
         "bn": "আল-শামসু",
         "en": "al-shamsu"
        },
        {
         "bn": "আশ-শামসু",
         "en": "ash-shamsu"
        },
        {
         "bn": "শামসুন",
         "en": "shamsun"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{لِـ}} + {{النَّاسِ}} মিলে কী হয়?",
        "en": "{{لِـ}} + {{النَّاسِ}} becomes?"
       },
       "options": [
        "لَنَّاسِ",
        "لِالنَّاسِ",
        "لِلنَّاسِ"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "কোনটি {{اَلْ}} ছাড়াই নির্দিষ্ট?",
        "en": "Which one is definite without {{اَلْ}}?"
       },
       "options": [
        "كِتَابُهُ",
        "كِتَابٌ",
        "رَسُولٌ"
       ],
       "answer": 0,
       "explain": {
        "bn": "সর্বনাম যুক্ত হলে শব্দ নির্দিষ্ট হয়: {{كِتَابُهُ}} = তার বই।",
        "en": "A word joined to a pronoun is definite: {{كِتَابُهُ}} = his book."
       }
      }
     ]
    }
   ]
  },
  {
   "id": "g-pronouns",
   "icon": "هو",
   "title": {
    "bn": "আলাদা সর্বনাম: আমি, তুমি, সে…",
    "en": "Detached Pronouns: I, You, He..."
   },
   "subtitle": {
    "bn": "১৪টি যমীর — বাংলার তিন পুরুষের মতো সাজানো",
    "en": "The 14 pronouns — arranged like the three 'persons'"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "১৪টি আলাদা সর্বনাম (যমীর মুনফাসিল) চিনবে",
     "en": "Recognise the 14 detached pronouns"
    },
    {
     "bn": "নাম পুরুষ, মধ্যম পুরুষ ও উত্তম পুরুষ ভাগ বুঝবে",
     "en": "Understand 3rd, 2nd and 1st person"
    },
    {
     "bn": "কুরআনের আয়াতে সর্বনাম খুঁজে পাবে",
     "en": "Find pronouns in Quranic ayahs"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "বাংলা ব্যাকরণে পড়েছ — **নাম পুরুষ** (সে, তারা), **মধ্যম পুরুষ** (তুমি, তোমরা), **উত্তম পুরুষ** (আমি, আমরা)। আরবিতেও ঠিক এই তিন ভাগ! পার্থক্য শুধু এই: আরবি নারী-পুরুষ আলাদা করে, আর ‘দুজন’-এর জন্যও আলাদা শব্দ রাখে। তাই মোট সর্বনাম **১৪টি**। এদের বলে **যমীর** ({{ضَمِيرٌ}})।",
     "en": "You know the three persons — **3rd person** (he, they), **2nd person** (you), **1st person** (I, we). Arabic has the same three! The difference: Arabic separates male and female, and has special words for 'two'. So there are **14** pronouns in total, called **ḍamīr** ({{ضَمِيرٌ}})."
    },
    {
     "type": "table",
     "title": {
      "bn": "নাম পুরুষ — অনুপস্থিত (গায়েব)",
      "en": "3rd person — absent (ghā'ib)"
     },
     "head": [
      {
       "bn": "আরবি",
       "en": "Arabic"
      },
      {
       "bn": "উচ্চারণ",
       "en": "Say"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      },
      {
       "bn": "লিঙ্গ · বচন",
       "en": "Gender · number"
      }
     ],
     "rows": [
      [
       "هُوَ",
       {
        "bn": "হুয়া",
        "en": "huwa"
       },
       {
        "bn": "সে / তিনি",
        "en": "he / it"
       },
       {
        "bn": "পুং · এক",
        "en": "m · one"
       }
      ],
      [
       "هُمَا",
       {
        "bn": "হুমা",
        "en": "humā"
       },
       {
        "bn": "তারা দুজন",
        "en": "they two"
       },
       {
        "bn": "পুং · দুই",
        "en": "m · two"
       }
      ],
      [
       "هُمْ",
       {
        "bn": "হুম",
        "en": "hum"
       },
       {
        "bn": "তারা সবাই",
        "en": "they (all)"
       },
       {
        "bn": "পুং · বহু",
        "en": "m · many"
       }
      ],
      [
       "هِيَ",
       {
        "bn": "হিয়া",
        "en": "hiya"
       },
       {
        "bn": "সে (নারী)",
        "en": "she / it"
       },
       {
        "bn": "স্ত্রী · এক",
        "en": "f · one"
       }
      ],
      [
       "هُمَا",
       {
        "bn": "হুমা",
        "en": "humā"
       },
       {
        "bn": "তারা দুজন (নারী)",
        "en": "they two (f)"
       },
       {
        "bn": "স্ত্রী · দুই",
        "en": "f · two"
       }
      ],
      [
       "هُنَّ",
       {
        "bn": "হুন্না",
        "en": "hunna"
       },
       {
        "bn": "তারা সবাই (নারী)",
        "en": "they (f, all)"
       },
       {
        "bn": "স্ত্রী · বহু",
        "en": "f · many"
       }
      ]
     ]
    },
    {
     "type": "table",
     "title": {
      "bn": "মধ্যম পুরুষ — সামনে যাকে বলছি (মুখাতাব)",
      "en": "2nd person — the one spoken to (mukhāṭab)"
     },
     "head": [
      {
       "bn": "আরবি",
       "en": "Arabic"
      },
      {
       "bn": "উচ্চারণ",
       "en": "Say"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      },
      {
       "bn": "লিঙ্গ · বচন",
       "en": "Gender · number"
      }
     ],
     "rows": [
      [
       "أَنْتَ",
       {
        "bn": "আনতা",
        "en": "anta"
       },
       {
        "bn": "তুমি",
        "en": "you"
       },
       {
        "bn": "পুং · এক",
        "en": "m · one"
       }
      ],
      [
       "أَنْتُمَا",
       {
        "bn": "আনতুমা",
        "en": "antumā"
       },
       {
        "bn": "তোমরা দুজন",
        "en": "you two"
       },
       {
        "bn": "পুং · দুই",
        "en": "m · two"
       }
      ],
      [
       "أَنْتُمْ",
       {
        "bn": "আনতুম",
        "en": "antum"
       },
       {
        "bn": "তোমরা সবাই",
        "en": "you (all)"
       },
       {
        "bn": "পুং · বহু",
        "en": "m · many"
       }
      ],
      [
       "أَنْتِ",
       {
        "bn": "আনতি",
        "en": "anti"
       },
       {
        "bn": "তুমি (নারী)",
        "en": "you (f)"
       },
       {
        "bn": "স্ত্রী · এক",
        "en": "f · one"
       }
      ],
      [
       "أَنْتُمَا",
       {
        "bn": "আনতুমা",
        "en": "antumā"
       },
       {
        "bn": "তোমরা দুজন (নারী)",
        "en": "you two (f)"
       },
       {
        "bn": "স্ত্রী · দুই",
        "en": "f · two"
       }
      ],
      [
       "أَنْتُنَّ",
       {
        "bn": "আনতুন্না",
        "en": "antunna"
       },
       {
        "bn": "তোমরা সবাই (নারী)",
        "en": "you (f, all)"
       },
       {
        "bn": "স্ত্রী · বহু",
        "en": "f · many"
       }
      ]
     ]
    },
    {
     "type": "table",
     "title": {
      "bn": "উত্তম পুরুষ — যে বলছে (মুতাকাল্লিম)",
      "en": "1st person — the speaker (mutakallim)"
     },
     "head": [
      {
       "bn": "আরবি",
       "en": "Arabic"
      },
      {
       "bn": "উচ্চারণ",
       "en": "Say"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      },
      {
       "bn": "লিঙ্গ · বচন",
       "en": "Gender · number"
      }
     ],
     "rows": [
      [
       "أَنَا",
       {
        "bn": "আনা",
        "en": "anā"
       },
       {
        "bn": "আমি",
        "en": "I"
       },
       {
        "bn": "নারী-পুরুষ উভয় · এক",
        "en": "m/f · one"
       }
      ],
      [
       "نَحْنُ",
       {
        "bn": "নাহনু",
        "en": "naḥnu"
       },
       {
        "bn": "আমরা",
        "en": "we"
       },
       {
        "bn": "উভয় · দুই বা বহু",
        "en": "m/f · two or more"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "তিনটি মজার প্যাটার্ন: (১) **দ্বিবচন সবসময় ‘-মা’** দিয়ে শেষ: {{هُمَا}}, {{أَنْتُمَا}}। (২) **পুরুষ বহুবচন ‘-ম’**: {{هُمْ}}, {{أَنْتُمْ}}। (৩) **নারী বহুবচন ‘-ন্না’**: {{هُنَّ}}, {{أَنْتُنَّ}}। এই তিনটি সূত্র মনে রাখলে অর্ধেক কাজ শেষ!",
     "en": "Three handy patterns: (1) **duals always end in '-mā'**: {{هُمَا}}, {{أَنْتُمَا}}. (2) **masculine plurals end in '-m'**: {{هُمْ}}, {{أَنْتُمْ}}. (3) **feminine plurals end in '-nna'**: {{هُنَّ}}, {{أَنْتُنَّ}}. Remember these and you're halfway there!"
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "{{أَنْتَ}} আর {{أَنْتِ}}-এর পার্থক্য শুধু শেষ হরকতে: যবর হলে পুরুষ, যের হলে নারী। বাংলায় ‘তুমি’ দুজনের জন্যই এক — কিন্তু আরবি সাবধানে আলাদা করে।",
     "en": "{{أَنْتَ}} and {{أَنْتِ}} differ only in the last vowel: fatha for a man, kasra for a woman. English 'you' is the same for both — Arabic is more careful."
    },
    {
     "type": "examples",
     "title": {
      "bn": "কুরআনে সর্বনাম",
      "en": "Pronouns in the Quran"
     },
     "items": [
      {
       "ar": "قُلْ هُوَ اللّٰهُ أَحَدٌ",
       "tr": {
        "bn": "কুল হুওয়াল্লাহু আহাদ",
        "en": "qul huwallāhu aḥad"
       },
       "mean": {
        "bn": "বলো, তিনিই আল্লাহ, এক (১১২:১)",
        "en": "Say: He is Allah, the One (112:1)"
       },
       "hl": "هُوَ"
      },
      {
       "ar": "إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
       "tr": {
        "bn": "ইন্নাকা আনতাস সামী'উল আলীম",
        "en": "innaka antas-samī'ul-'alīm"
       },
       "mean": {
        "bn": "নিশ্চয়ই তুমিই সর্বশ্রোতা, সর্বজ্ঞ (২:১২৭)",
        "en": "Indeed You are the All-Hearing, the All-Knowing (2:127)"
       },
       "hl": "أَنْتَ"
      },
      {
       "ar": "إِنِّي أَنَا رَبُّكَ",
       "tr": {
        "bn": "ইন্নী আনা রব্বুকা",
        "en": "innī anā rabbuka"
       },
       "mean": {
        "bn": "নিশ্চয়ই আমিই তোমার রব (২০:১২)",
        "en": "Indeed, I am your Lord (20:12)"
       },
       "hl": "أَنَا"
      },
      {
       "ar": "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ",
       "tr": {
        "bn": "ইন্না নাহনু নাযযালনায যিকরা",
        "en": "innā naḥnu nazzalnadh-dhikra"
       },
       "mean": {
        "bn": "নিশ্চয়ই আমরাই এই উপদেশ (কুরআন) নাযিল করেছি (১৫:৯)",
        "en": "Indeed, it is We who sent down the Reminder (15:9)"
       },
       "note": {
        "bn": "সম্মান বোঝাতে আল্লাহ নিজের জন্য {{نَحْنُ}} (আমরা) ব্যবহার করেছেন",
        "en": "Allah uses {{نَحْنُ}} ('We') for Himself to show majesty"
       },
       "hl": "نَحْنُ"
      },
      {
       "ar": "وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ",
       "tr": {
        "bn": "ওয়া লা আনতুম আবিদূনা মা আ'বুদ",
        "en": "wa lā antum 'ābidūna mā a'bud"
       },
       "mean": {
        "bn": "আর তোমরাও তার ইবাদতকারী নও, যার ইবাদত আমি করি (১০৯:৩)",
        "en": "Nor are you worshippers of what I worship (109:3)"
       },
       "hl": "أَنْتُمْ"
      },
      {
       "ar": "سَلَامٌ هِيَ حَتّٰى مَطْلَعِ الْفَجْرِ",
       "tr": {
        "bn": "সালামুন হিয়া হাত্তা মাত্বলা'ইল ফাজর",
        "en": "salāmun hiya ḥattā maṭla'il-fajr"
       },
       "mean": {
        "bn": "শান্তিময় সেই রাত, ফজর উদয় পর্যন্ত (৯৭:৫)",
        "en": "Peace it is, until the rising of dawn (97:5)"
       },
       "note": {
        "bn": "{{هِيَ}} = সে (লাইলাতুল কদর — {{لَيْلَةٌ}} মুআন্নাস)",
        "en": "{{هِيَ}} = 'it/she' (the Night — {{لَيْلَةٌ}} is feminine)"
       },
       "hl": "هِيَ"
      },
      {
       "ar": "هُنَّ لِبَاسٌ لَكُمْ وَأَنْتُمْ لِبَاسٌ لَهُنَّ",
       "tr": {
        "bn": "হুন্না লিবাসুল লাকুম ওয়া আনতুম লিবাসুল লাহুন্ন",
        "en": "hunna libāsul-lakum wa antum libāsul-lahunn"
       },
       "mean": {
        "bn": "তারা (স্ত্রীরা) তোমাদের পোশাক, আর তোমরা তাদের পোশাক (২:১৮৭)",
        "en": "They are a garment for you and you are a garment for them (2:187)"
       },
       "hl": "هُنَّ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "{{هُمْ}}-এর পরে {{اَلْ}} এলে মিলিয়ে পড়ার জন্য {{م}}-এ পেশ বসে: {{هُمُ الْمُفْلِحُونَ}} (হুমুল মুফলিহূন)। এটা নতুন শব্দ নয় — একই {{هُمْ}}।",
     "en": "When {{اَلْ}} follows {{هُمْ}}, the {{م}} gets a damma to connect: {{هُمُ الْمُفْلِحُونَ}} (humul-mufliḥūn). It's not a new word — still {{هُمْ}}."
    },
    {
     "type": "practice",
     "bn": "সর্বনামগুলো তিন পুরুষ অনুযায়ী জোরে পড়ো।",
     "en": "Read the pronouns aloud, person by person.",
     "lines": [
      "هُوَ هُمَا هُمْ هِيَ هُمَا هُنَّ",
      "أَنْتَ أَنْتُمَا أَنْتُمْ أَنْتِ أَنْتُمَا أَنْتُنَّ",
      "أَنَا نَحْنُ"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "{{نَحْنُ}} অর্থ কী?",
        "en": "What does {{نَحْنُ}} mean?"
       },
       "ar": "نَحْنُ",
       "options": [
        {
         "bn": "আমরা",
         "en": "we"
        },
        {
         "bn": "আমি",
         "en": "I"
        },
        {
         "bn": "তোমরা",
         "en": "you all"
        },
        {
         "bn": "তারা",
         "en": "they"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "একজন নারীকে ‘তুমি’ বলতে কোনটি?",
        "en": "Which is 'you' for one woman?"
       },
       "options": [
        "أَنْتَ",
        "أَنْتُمْ",
        "هِيَ",
        "أَنْتِ"
       ],
       "answer": 3
      },
      {
       "q": {
        "bn": "{{هُمْ}} কাকে বোঝায়?",
        "en": "Who does {{هُمْ}} refer to?"
       },
       "ar": "هُمْ",
       "options": [
        {
         "bn": "সে (একজন পুরুষ)",
         "en": "he"
        },
        {
         "bn": "তারা সবাই (পুরুষ বা মিশ্র)",
         "en": "they (m or mixed group)"
        },
        {
         "bn": "তারা দুজন",
         "en": "they two"
        },
        {
         "bn": "তারা সবাই (শুধু নারী)",
         "en": "they (only women)"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "কোন সর্বনামটি দ্বিবচন?",
        "en": "Which pronoun is dual?"
       },
       "options": [
        "هُنَّ",
        "نَحْنُ",
        "أَنْتُمَا",
        "أَنْتُمْ"
       ],
       "answer": 2,
       "explain": {
        "bn": "দ্বিবচন সবসময় ‘-মা’ দিয়ে শেষ।",
        "en": "Duals always end in '-mā'."
       }
      },
      {
       "q": {
        "bn": "{{قُلْ هُوَ اللّٰهُ أَحَدٌ}} — এখানে সর্বনাম কোনটি?",
        "en": "In {{قُلْ هُوَ اللّٰهُ أَحَدٌ}}, which word is the pronoun?"
       },
       "options": [
        "هُوَ",
        "اللّٰهُ",
        "قُلْ",
        "أَحَدٌ"
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{أَنَا}} কোন পুরুষ?",
        "en": "Which person is {{أَنَا}}?"
       },
       "options": [
        {
         "bn": "মধ্যম পুরুষ",
         "en": "2nd person"
        },
        {
         "bn": "উত্তম পুরুষ",
         "en": "1st person"
        },
        {
         "bn": "নাম পুরুষ",
         "en": "3rd person"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "‘তারা সবাই (নারী)’ কোনটি?",
        "en": "Which is 'they (women)'?"
       },
       "options": [
        "هُمْ",
        "هُمَا",
        "هِيَ",
        "هُنَّ"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "g-attached",
   "icon": "ـهُ",
   "title": {
    "bn": "জোড়া সর্বনাম: আমার, তোমার, তার",
    "en": "Attached Pronouns: My, Your, His"
   },
   "subtitle": {
    "bn": "শব্দের শেষে লেগে থাকা ছোট্ট সর্বনাম — কুরআনে সবচেয়ে বেশি দেখা যায়",
    "en": "Tiny pronouns glued to the end of words — everywhere in the Quran"
   },
   "minutes": 18,
   "goals": [
    {
     "bn": "১৪টি জোড়া সর্বনাম (যমীর মুত্তাসিল) চিনবে",
     "en": "Recognise the 14 attached pronouns"
    },
    {
     "bn": "ইসমের সাথে ({{كِتَابُهُ}}) ও হরফের সাথে ({{لَهُ}}, {{عَلَيْهِمْ}}) ব্যবহার বুঝবে",
     "en": "Use them on nouns ({{كِتَابُهُ}}) and prepositions ({{لَهُ}}, {{عَلَيْهِمْ}})"
    },
    {
     "bn": "{{ـهُ}} কখন {{ـهِ}} হয় — জানবে",
     "en": "Know when {{ـهُ}} becomes {{ـهِ}}"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "বাংলায় আমরা ‘আমার বই’ বলতে দুটো শব্দ বলি। আরবিতে সর্বনামটা ছোট হয়ে শব্দের **শেষে লেগে যায়**: {{كِتَابِي}} = আমার বই, {{كِتَابُكَ}} = তোমার বই। এদের বলে **যমীর মুত্তাসিল** (জোড়া সর্বনাম)। কুরআন পড়তে গেলে প্রায় প্রতিটি আয়াতেই এদের দেখা পাবে!",
     "en": "In English 'my book' is two words. In Arabic the pronoun shrinks and **sticks to the end** of the word: {{كِتَابِي}} = my book, {{كِتَابُكَ}} = your book. These are **attached pronouns** (ḍamīr muttaṣil). You'll meet them in almost every ayah!"
    },
    {
     "type": "table",
     "title": {
      "bn": "১৪টি জোড়া সর্বনাম — {{كِتَابٌ}} দিয়ে",
      "en": "The 14 attached pronouns — with {{كِتَابٌ}}"
     },
     "head": [
      {
       "bn": "আলাদা",
       "en": "Detached"
      },
      {
       "bn": "জোড়া",
       "en": "Attached"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "هُوَ",
       "ـهُ",
       "كِتَابُهُ",
       {
        "bn": "তার (পুং) বই",
        "en": "his book"
       }
      ],
      [
       "هُمَا",
       "ـهُمَا",
       "كِتَابُهُمَا",
       {
        "bn": "তাদের দুজনের বই",
        "en": "their (two) book"
       }
      ],
      [
       "هُمْ",
       "ـهُمْ",
       "كِتَابُهُمْ",
       {
        "bn": "তাদের বই",
        "en": "their book"
       }
      ],
      [
       "هِيَ",
       "ـهَا",
       "كِتَابُهَا",
       {
        "bn": "তার (স্ত্রী) বই",
        "en": "her book"
       }
      ],
      [
       "هُمَا",
       "ـهُمَا",
       "كِتَابُهُمَا",
       {
        "bn": "তাদের দুজনের (স্ত্রী) বই",
        "en": "their (two, f) book"
       }
      ],
      [
       "هُنَّ",
       "ـهُنَّ",
       "كِتَابُهُنَّ",
       {
        "bn": "তাদের (নারীদের) বই",
        "en": "their (f) book"
       }
      ],
      [
       "أَنْتَ",
       "ـكَ",
       "كِتَابُكَ",
       {
        "bn": "তোমার বই",
        "en": "your book"
       }
      ],
      [
       "أَنْتُمَا",
       "ـكُمَا",
       "كِتَابُكُمَا",
       {
        "bn": "তোমাদের দুজনের বই",
        "en": "your (two) book"
       }
      ],
      [
       "أَنْتُمْ",
       "ـكُمْ",
       "كِتَابُكُمْ",
       {
        "bn": "তোমাদের বই",
        "en": "your (all) book"
       }
      ],
      [
       "أَنْتِ",
       "ـكِ",
       "كِتَابُكِ",
       {
        "bn": "তোমার (নারী) বই",
        "en": "your (f) book"
       }
      ],
      [
       "أَنْتُمَا",
       "ـكُمَا",
       "كِتَابُكُمَا",
       {
        "bn": "তোমাদের দুজনের (নারী) বই",
        "en": "your (two, f) book"
       }
      ],
      [
       "أَنْتُنَّ",
       "ـكُنَّ",
       "كِتَابُكُنَّ",
       {
        "bn": "তোমাদের (নারীদের) বই",
        "en": "your (f, all) book"
       }
      ],
      [
       "أَنَا",
       "ـي",
       "كِتَابِي",
       {
        "bn": "আমার বই",
        "en": "my book"
       }
      ],
      [
       "نَحْنُ",
       "ـنَا",
       "كِتَابُنَا",
       {
        "bn": "আমাদের বই",
        "en": "our book"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "সহজ চাবি: **হ = সে/তারা**, **ক = তুমি/তোমরা**, **ই = আমি**, **না = আমরা**। বাকিটা আগের পাঠের মতোই: ‘-মা’ দ্বিবচন, ‘-ম’ পুরুষ বহু, ‘-ন্না’ নারী বহু।",
     "en": "Easy key: **h = he/they**, **k = you**, **ī = me**, **nā = us**. The rest follows the last lesson: '-mā' dual, '-m' masculine plural, '-nna' feminine plural."
    },
    {
     "type": "examples",
     "title": {
      "bn": "‘রব’ শব্দের সাথে — কুরআন ও দোয়ায় বারবার আসে",
      "en": "With 'Rabb' — again and again in the Quran and du'a"
     },
     "items": [
      {
       "ar": "رَبِّي",
       "tr": {
        "bn": "রব্বী",
        "en": "rabbī"
       },
       "mean": {
        "bn": "আমার রব",
        "en": "my Lord"
       },
       "note": {
        "bn": "{{ـي}}-এর আগের অক্ষরে সবসময় যের",
        "en": "The letter before {{ـي}} always takes kasra"
       }
      },
      {
       "ar": "رَبُّكَ",
       "tr": {
        "bn": "রব্বুকা",
        "en": "rabbuka"
       },
       "mean": {
        "bn": "তোমার রব",
        "en": "your Lord"
       }
      },
      {
       "ar": "رَبُّكُمْ",
       "tr": {
        "bn": "রব্বুকুম",
        "en": "rabbukum"
       },
       "mean": {
        "bn": "তোমাদের রব",
        "en": "your (all) Lord"
       }
      },
      {
       "ar": "رَبُّنَا",
       "tr": {
        "bn": "রব্বুনা",
        "en": "rabbunā"
       },
       "mean": {
        "bn": "আমাদের রব",
        "en": "our Lord"
       }
      },
      {
       "ar": "رَبُّهُ",
       "tr": {
        "bn": "রব্বুহূ",
        "en": "rabbuhū"
       },
       "mean": {
        "bn": "তার রব",
        "en": "his Lord"
       }
      },
      {
       "ar": "رَبُّهُمْ",
       "tr": {
        "bn": "রব্বুহুম",
        "en": "rabbuhum"
       },
       "mean": {
        "bn": "তাদের রব",
        "en": "their Lord"
       }
      }
     ]
    },
    {
     "type": "table",
     "title": {
      "bn": "হরফের সাথে জোড়া সর্বনাম",
      "en": "Attached pronouns on prepositions"
     },
     "head": [
      {
       "bn": "হরফ",
       "en": "Preposition"
      },
      {
       "bn": "তার / তাদের",
       "en": "him / them"
      },
      {
       "bn": "তোমার / তোমাদের",
       "en": "you / you all"
      },
      {
       "bn": "আমার / আমাদের",
       "en": "me / us"
      }
     ],
     "rows": [
      [
       "لِـ",
       "لَهُ ، لَهُمْ",
       "لَكَ ، لَكُمْ",
       "لِي ، لَنَا"
      ],
      [
       "عَلٰى",
       "عَلَيْهِ ، عَلَيْهِمْ",
       "عَلَيْكَ ، عَلَيْكُمْ",
       "عَلَيَّ ، عَلَيْنَا"
      ],
      [
       "مِنْ",
       "مِنْهُ ، مِنْهُمْ",
       "مِنْكَ ، مِنْكُمْ",
       "مِنِّي ، مِنَّا"
      ],
      [
       "فِي",
       "فِيهِ ، فِيهِمْ",
       "فِيكَ ، فِيكُمْ",
       "فِيَّ ، فِينَا"
      ],
      [
       "إِلٰى",
       "إِلَيْهِ ، إِلَيْهِمْ",
       "إِلَيْكَ ، إِلَيْكُمْ",
       "إِلَيَّ ، إِلَيْنَا"
      ],
      [
       "بِـ",
       "بِهِ ، بِهِمْ",
       "بِكَ ، بِكُمْ",
       "بِي ، بِنَا"
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "তিনটি ছোট্ট পরিবর্তন খেয়াল করো: (১) {{لِـ}} সর্বনামের আগে {{لَـ}} হয়ে যায় ({{لَهُ}}, {{لَكُمْ}}) — শুধু {{لِي}} ছাড়া। (২) {{عَلٰى}} ও {{إِلٰى}}-এর আলিফ {{ي}} হয়ে যায়: {{عَلَيْ}}، {{إِلَيْ}}। (৩) {{مِنْ}} + {{ـي}} = {{مِنِّي}}, {{مِنْ}} + {{ـنَا}} = {{مِنَّا}}।",
     "en": "Notice three small changes: (1) {{لِـ}} becomes {{لَـ}} before pronouns ({{لَهُ}}, {{لَكُمْ}}) — except {{لِي}}. (2) The alif of {{عَلٰى}} and {{إِلٰى}} turns into {{ي}}: {{عَلَيْ}}, {{إِلَيْ}}. (3) {{مِنْ}} + {{ـي}} = {{مِنِّي}}, {{مِنْ}} + {{ـنَا}} = {{مِنَّا}}."
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "**{{ـهُ}} কখন {{ـهِ}} হয়?** আগে যের বা {{ي}} থাকলে উচ্চারণ সহজ করতে পেশ যের হয়ে যায়: {{بِهِ}}, {{فِيهِ}}, {{عَلَيْهِ}}, {{رَبِّهِ}}। একইভাবে {{ـهُمْ}} → {{ـهِمْ}}: {{عَلَيْهِمْ}}, {{رَبِّهِمْ}}। অর্থ একদম একই!",
     "en": "**When does {{ـهُ}} become {{ـهِ}}?** After a kasra or a {{ي}}, the damma turns to kasra for easy flow: {{بِهِ}}, {{فِيهِ}}, {{عَلَيْهِ}}, {{رَبِّهِ}}. Likewise {{ـهُمْ}} → {{ـهِمْ}}: {{عَلَيْهِمْ}}, {{رَبِّهِمْ}}. The meaning is exactly the same!"
    },
    {
     "type": "examples",
     "title": {
      "bn": "কুরআনে জোড়া সর্বনাম",
      "en": "Attached pronouns in the Quran"
     },
     "items": [
      {
       "ar": "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
       "tr": {
        "bn": "সিরাত্বাল্লাযীনা আন'আমতা আলাইহিম",
        "en": "ṣirāṭal-ladhīna an'amta 'alayhim"
       },
       "mean": {
        "bn": "তাদের পথ, যাদের উপর তুমি অনুগ্রহ করেছ (১:৭)",
        "en": "The path of those You have blessed (1:7)"
       },
       "note": {
        "bn": "{{عَلٰى}} + {{ـهِمْ}} = তাদের উপর",
        "en": "{{عَلٰى}} + {{ـهِمْ}} = upon them"
       },
       "hl": "عَلَيْهِمْ"
      },
      {
       "ar": "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
       "tr": {
        "bn": "লাকুম দীনুকুম ওয়া লিয়া দীন",
        "en": "lakum dīnukum wa liya dīn"
       },
       "mean": {
        "bn": "তোমাদের জন্য তোমাদের দ্বীন, আর আমার জন্য আমার দ্বীন (১০৯:৬)",
        "en": "For you your religion, and for me mine (109:6)"
       },
       "note": {
        "bn": "{{لَكُمْ}} = তোমাদের জন্য, {{دِينُكُمْ}} = তোমাদের দ্বীন, {{لِيَ}} = আমার জন্য",
        "en": "{{لَكُمْ}} = for you, {{دِينُكُمْ}} = your religion, {{لِيَ}} = for me"
       },
       "hl": "دِينُكُمْ"
      },
      {
       "ar": "أُولٰئِكَ عَلٰى هُدًى مِنْ رَبِّهِمْ",
       "tr": {
        "bn": "উলা-ইকা আলা হুদাম মির রব্বিহিম",
        "en": "ulā'ika 'alā hudam-mir-rabbihim"
       },
       "mean": {
        "bn": "তারাই তাদের রবের পক্ষ থেকে হিদায়াতের উপর আছে (২:৫)",
        "en": "They are upon guidance from their Lord (2:5)"
       },
       "note": {
        "bn": "{{رَبِّ}} + {{ـهِمْ}} — আগে যের, তাই {{ـهِمْ}}",
        "en": "{{رَبِّ}} + {{ـهِمْ}} — kasra before, so {{ـهِمْ}}"
       },
       "hl": "رَبِّهِمْ"
      },
      {
       "ar": "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
       "tr": {
        "bn": "ওয়া লাম ইয়াকুল লাহূ কুফুওয়ান আহাদ",
        "en": "wa lam yakul-lahū kufuwan aḥad"
       },
       "mean": {
        "bn": "এবং তাঁর সমতুল্য কেউ নেই (১১২:৪)",
        "en": "And there is none equal to Him (112:4)"
       },
       "hl": "لَهُ"
      },
      {
       "ar": "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
       "tr": {
        "bn": "আলাম নাশরাহ লাকা সদরাক",
        "en": "alam nashraḥ laka ṣadrak"
       },
       "mean": {
        "bn": "আমি কি তোমার জন্য তোমার বক্ষ প্রশস্ত করে দিইনি? (৯৪:১)",
        "en": "Did We not expand for you your chest? (94:1)"
       },
       "hl": "صَدْرَكَ"
      },
      {
       "ar": "إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
       "tr": {
        "bn": "ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজি'ঊন",
        "en": "innā lillāhi wa innā ilayhi rāji'ūn"
       },
       "mean": {
        "bn": "নিশ্চয়ই আমরা আল্লাহর জন্য, এবং নিশ্চয়ই আমরা তাঁর দিকেই ফিরে যাব (২:১৫৬)",
        "en": "Indeed we belong to Allah, and to Him we return (2:156)"
       },
       "note": {
        "bn": "{{إِنَّا}} = {{إِنَّ}} + {{ـنَا}} (নিশ্চয়ই আমরা); {{إِلَيْهِ}} = তাঁর দিকে",
        "en": "{{إِنَّا}} = {{إِنَّ}} + {{ـنَا}} (indeed we); {{إِلَيْهِ}} = to Him"
       },
       "hl": "إِلَيْهِ"
      },
      {
       "ar": "كُتِبَ عَلَيْكُمُ الصِّيَامُ",
       "tr": {
        "bn": "কুতিবা আলাইকুমুস সিয়াম",
        "en": "kutiba 'alaykumuṣ-ṣiyām"
       },
       "mean": {
        "bn": "তোমাদের উপর রোজা ফরজ করা হয়েছে (২:১৮৩)",
        "en": "Fasting has been prescribed for you (2:183)"
       },
       "hl": "عَلَيْكُمُ"
      },
      {
       "ar": "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ",
       "tr": {
        "bn": "তাবারাকাল্লাযী বিইয়াদিহিল মুলক",
        "en": "tabārakal-ladhī biyadihil-mulk"
       },
       "mean": {
        "bn": "বরকতময় তিনি, যাঁর হাতে সার্বভৌমত্ব (৬৭:১)",
        "en": "Blessed is He in whose hand is the dominion (67:1)"
       },
       "note": {
        "bn": "{{بِـ}} + {{يَدِ}} + {{ـهِ}} — এক শব্দে তিন অংশ!",
        "en": "{{بِـ}} + {{يَدِ}} + {{ـهِ}} — three parts in one word!"
       },
       "hl": "بِيَدِهِ"
      }
     ]
    },
    {
     "type": "text",
     "title": {
      "bn": "ফে'লের সাথে: ‘আমাকে’, ‘তাদেরকে’",
      "en": "On verbs: 'me', 'them'"
     },
     "bn": "ফে'লের শেষে লাগলে জোড়া সর্বনাম **কর্ম** বোঝায় (‘-কে’)। শুধু ‘আমাকে’-র জন্য {{ـي}}-এর বদলে আসে {{ـنِي}}। যেমন: {{اِهْدِنَا}} = আমাদেরকে পথ দেখাও (১:৬), {{أَطْعَمَهُمْ}} = তাদেরকে খাইয়েছেন (১০৬:৪), {{اُدْعُونِي}} = আমাকে ডাকো (৪০:৬০)।",
     "en": "On the end of a verb, an attached pronoun is the **object** ('me', 'them'). Only 'me' uses {{ـنِي}} instead of {{ـي}}. For example: {{اِهْدِنَا}} = guide us (1:6), {{أَطْعَمَهُمْ}} = He fed them (106:4), {{اُدْعُونِي}} = call on me (40:60)."
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "জোড়া সর্বনাম লাগলে শব্দ নিজেই নির্দিষ্ট হয়ে যায় — তাই {{اَلْ}} আর তানবীন দুটোই চলে যায়: {{كِتَابٌ}} → {{كِتَابُهُ}}। ‘তার বই’ তো নির্দিষ্ট বই-ই!",
     "en": "With an attached pronoun the word becomes definite by itself — so both {{اَلْ}} and tanween disappear: {{كِتَابٌ}} → {{كِتَابُهُ}}. 'His book' is a specific book, after all!"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "{{كِتَابُنَا}} অর্থ কী?",
        "en": "What does {{كِتَابُنَا}} mean?"
       },
       "ar": "كِتَابُنَا",
       "options": [
        {
         "bn": "আমার বই",
         "en": "my book"
        },
        {
         "bn": "আমাদের বই",
         "en": "our book"
        },
        {
         "bn": "তোমাদের বই",
         "en": "your book"
        },
        {
         "bn": "তাদের বই",
         "en": "their book"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "‘তোমাদের রব’ আরবিতে কোনটি?",
        "en": "Which means 'your (pl.) Lord'?"
       },
       "options": [
        "رَبُّهُمْ",
        "رَبُّكَ",
        "رَبُّكُمْ",
        "رَبِّي"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "{{عَلَيْهِمْ}} অর্থ কী?",
        "en": "What does {{عَلَيْهِمْ}} mean?"
       },
       "ar": "عَلَيْهِمْ",
       "options": [
        {
         "bn": "তার উপর",
         "en": "upon him"
        },
        {
         "bn": "আমাদের উপর",
         "en": "upon us"
        },
        {
         "bn": "তাদের উপর",
         "en": "upon them"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "{{بِهِ}}-তে {{ـهُ}} কেন {{ـهِ}} হলো?",
        "en": "Why is it {{ـهِ}} and not {{ـهُ}} in {{بِهِ}}?"
       },
       "options": [
        {
         "bn": "আগে যের আছে, তাই উচ্চারণ সহজ করতে",
         "en": "There is a kasra before it, for easy flow"
        },
        {
         "bn": "এটি স্ত্রীলিঙ্গ",
         "en": "It is feminine"
        },
        {
         "bn": "এটি বহুবচন",
         "en": "It is plural"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{لَكُمْ دِينُكُمْ}} — {{دِينُكُمْ}} অর্থ কী?",
        "en": "In {{لَكُمْ دِينُكُمْ}}, what does {{دِينُكُمْ}} mean?"
       },
       "options": [
        {
         "bn": "আমার দ্বীন",
         "en": "my religion"
        },
        {
         "bn": "তোমাদের দ্বীন",
         "en": "your religion"
        },
        {
         "bn": "তাদের দ্বীন",
         "en": "their religion"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{اِهْدِنَا}}-তে {{ـنَا}} কী বোঝায়?",
        "en": "In {{اِهْدِنَا}}, what does {{ـنَا}} show?"
       },
       "ar": "اِهْدِنَا",
       "options": [
        {
         "bn": "তাদেরকে",
         "en": "them"
        },
        {
         "bn": "আমরা",
         "en": "we (subject)"
        },
        {
         "bn": "আমাদেরকে",
         "en": "us"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "{{إِلٰى}} + {{ـهِ}} মিলে কী হয়?",
        "en": "{{إِلٰى}} + {{ـهِ}} becomes?"
       },
       "options": [
        "إِلَيْهِ",
        "إِلٰىهِ",
        "إِلَهُ"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "g-pointing",
   "icon": "هذا",
   "title": {
    "bn": "ইশারা ও সংযোগ শব্দ: এই, ওই, যে",
    "en": "Pointing and Linking Words: This, That, Who"
   },
   "subtitle": {
    "bn": "{{هٰذَا}}, {{ذٰلِكَ}}, {{الَّذِي}} — কুরআনের প্রিয় শব্দগুলো",
    "en": "{{هٰذَا}}, {{ذٰلِكَ}}, {{الَّذِي}} — favourite words of the Quran"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "কাছের ও দূরের ইশারা শব্দ (ইসমে ইশারা) চিনবে",
     "en": "Recognise near and far pointing words (ism al-ishāra)"
    },
    {
     "bn": "{{هٰذَا كِتَابٌ}} ও {{هٰذَا الْكِتَابُ}}-এর পার্থক্য বুঝবে",
     "en": "Tell {{هٰذَا كِتَابٌ}} from {{هٰذَا الْكِتَابُ}}"
    },
    {
     "bn": "{{الَّذِي}}, {{الَّتِي}}, {{الَّذِينَ}} (যে / যারা) চিনবে",
     "en": "Recognise {{الَّذِي}}, {{الَّتِي}}, {{الَّذِينَ}} (who / which)"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "আঙুল দিয়ে কিছু দেখিয়ে আমরা বলি ‘এটা’ বা ‘ওটা’। আরবিতে এগুলোকে বলে **ইসমে ইশারা** ({{اِسْمُ الْإِشَارَةِ}})। আরবিতে এখানেও লিঙ্গ ও বচন অনুযায়ী আলাদা শব্দ আছে — তবে মাত্র ছয়টি মুখস্থ করলেই কুরআনের প্রায় সব জায়গা বুঝে যাবে।",
     "en": "When we point at something we say 'this' or 'that'. In Arabic these are **pointing words** ({{اِسْمُ الْإِشَارَةِ}}). Here too gender and number matter — but just six words cover almost all of the Quran."
    },
    {
     "type": "table",
     "title": {
      "bn": "কাছে ও দূরে",
      "en": "Near and far"
     },
     "head": [
      {
       "bn": "কার জন্য",
       "en": "For"
      },
      {
       "bn": "কাছে (এই)",
       "en": "Near (this/these)"
      },
      {
       "bn": "দূরে (ওই / সেই)",
       "en": "Far (that/those)"
      }
     ],
     "rows": [
      [
       {
        "bn": "পুং · এক",
        "en": "m · one"
       },
       "هٰذَا",
       "ذٰلِكَ"
      ],
      [
       {
        "bn": "স্ত্রী · এক",
        "en": "f · one"
       },
       "هٰذِهِ",
       "تِلْكَ"
      ],
      [
       {
        "bn": "বহু (নারী-পুরুষ)",
        "en": "plural (m/f)"
       },
       "هٰؤُلَاءِ",
       "أُولٰئِكَ"
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "**‘হা’ মানে হাতের কাছে!** কাছের শব্দগুলো {{هٰ}} দিয়ে শুরু: {{هٰذَا}}, {{هٰذِهِ}}, {{هٰؤُلَاءِ}}। আর **‘ক’ মানে কতদূর!** দূরের শব্দগুলোতে {{ك}} আছে: {{ذٰلِكَ}}, {{تِلْكَ}}, {{أُولٰئِكَ}}।",
     "en": "**'Hā' is for 'here'!** Near words start with {{هٰ}}: {{هٰذَا}}, {{هٰذِهِ}}, {{هٰؤُلَاءِ}}. **'K' is for 'kept far'!** Far words contain {{ك}}: {{ذٰلِكَ}}, {{تِلْكَ}}, {{أُولٰئِكَ}}."
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "উচ্চারণ খেয়াল করো: {{هٰذَا}}-তে খাড়া যবর আছে, তাই ‘হা-যা’ (লম্বা)। {{ذٰلِكَ}} = ‘যা-লিকা’, {{أُولٰئِكَ}} = ‘উলা-ইকা’ — এখানে {{و}} পড়া হয় না!",
     "en": "Watch the pronunciation: {{هٰذَا}} has a dagger alif, so 'hādhā' (long). {{ذٰلِكَ}} = 'dhālika', {{أُولٰئِكَ}} = 'ulā'ika' — the {{و}} is not pronounced!"
    },
    {
     "type": "compare",
     "title": {
      "bn": "একটি {{اَلْ}}-এর জাদু",
      "en": "The magic of one {{اَلْ}}"
     },
     "items": [
      {
       "ar": "هٰذَا كِتَابٌ",
       "label": {
        "bn": "পূর্ণ বাক্য",
        "en": "Full sentence"
       },
       "desc": {
        "bn": "‘এটি একটি বই।’ — পরের শব্দে তানবীন",
        "en": "'This is a book.' — next word has tanween"
       }
      },
      {
       "ar": "هٰذَا الْكِتَابُ",
       "label": {
        "bn": "শুধু শব্দগুচ্ছ",
        "en": "Just a phrase"
       },
       "desc": {
        "bn": "‘এই বইটি…’ — পরের শব্দে {{اَلْ}}; বাক্য এখনো শেষ হয়নি",
        "en": "'This book...' — next word has {{اَلْ}}; the sentence isn't finished"
       }
      }
     ]
    },
    {
     "type": "examples",
     "title": {
      "bn": "কুরআনে ইশারা শব্দ",
      "en": "Pointing words in the Quran"
     },
     "items": [
      {
       "ar": "ذٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ",
       "tr": {
        "bn": "যালিকাল কিতাবু লা রইবা ফীহ",
        "en": "dhālikal-kitābu lā rayba fīh"
       },
       "mean": {
        "bn": "সেই কিতাব — এতে কোনো সন্দেহ নেই (২:২)",
        "en": "That Book — no doubt is in it (2:2)"
       },
       "note": {
        "bn": "{{ذٰلِكَ}} = সেই (দূরের) — কুরআনের উচ্চ মর্যাদা বোঝাতে",
        "en": "{{ذٰلِكَ}} = that (far) — showing the Book's lofty rank"
       },
       "hl": "ذٰلِكَ"
      },
      {
       "ar": "هٰذَا يَوْمُ الْفَصْلِ",
       "tr": {
        "bn": "হা-যা ইয়াওমুল ফাসল",
        "en": "hādhā yawmul-faṣl"
       },
       "mean": {
        "bn": "এটিই ফয়সালার দিন (৭৭:৩৮)",
        "en": "This is the Day of Judgement (77:38)"
       },
       "hl": "هٰذَا"
      },
      {
       "ar": "تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ",
       "tr": {
        "bn": "তিলকা আ-ইয়াতুল কিতাবিল মুবীন",
        "en": "tilka āyātul-kitābil-mubīn"
       },
       "mean": {
        "bn": "এগুলো সুস্পষ্ট কিতাবের আয়াত (১২:১)",
        "en": "These are the verses of the clear Book (12:1)"
       },
       "note": {
        "bn": "মানুষ নয় এমন জিনিসের বহুবচনে ({{آيَاتٌ}}) প্রায়ই স্ত্রী-একবচন {{تِلْكَ}} আসে",
        "en": "Non-human plurals ({{آيَاتٌ}}) often take feminine singular {{تِلْكَ}}"
       },
       "hl": "تِلْكَ"
      },
      {
       "ar": "هٰذِهِ جَهَنَّمُ الَّتِي كُنْتُمْ تُوعَدُونَ",
       "tr": {
        "bn": "হা-যিহী জাহান্নামুল্লাতী কুনতুম তূ'আদূন",
        "en": "hādhihī jahannamul-latī kuntum tū'adūn"
       },
       "mean": {
        "bn": "এই সেই জাহান্নাম, যার প্রতিশ্রুতি তোমাদের দেওয়া হতো (৩৬:৬৩)",
        "en": "This is Hell which you were promised (36:63)"
       },
       "hl": "هٰذِهِ"
      },
      {
       "ar": "هٰؤُلَاءِ قَوْمُنَا",
       "tr": {
        "bn": "হা-উলা-ই কওমুনা",
        "en": "hā'ulā'i qawmunā"
       },
       "mean": {
        "bn": "এরা আমাদের জাতি (১৮:১৫)",
        "en": "These are our people (18:15)"
       },
       "hl": "هٰؤُلَاءِ"
      },
      {
       "ar": "وَأُولٰئِكَ هُمُ الْمُفْلِحُونَ",
       "tr": {
        "bn": "ওয়া উলা-ইকা হুমুল মুফলিহূন",
        "en": "wa ulā'ika humul-mufliḥūn"
       },
       "mean": {
        "bn": "আর ওরাই সফলকাম (২:৫)",
        "en": "And those are the successful (2:5)"
       },
       "hl": "أُولٰئِكَ"
      },
      {
       "ar": "فَلْيَعْبُدُوا رَبَّ هٰذَا الْبَيْتِ",
       "tr": {
        "bn": "ফালইয়া'বুদূ রব্বা হা-যাল বাইত",
        "en": "falya'budū rabba hādhal-bayt"
       },
       "mean": {
        "bn": "সুতরাং তারা যেন এই ঘরের রবের ইবাদত করে (১০৬:৩)",
        "en": "So let them worship the Lord of this House (106:3)"
       },
       "note": {
        "bn": "{{هٰذَا الْبَيْتِ}} = এই ঘর (শব্দগুচ্ছ, বাক্য নয়)",
        "en": "{{هٰذَا الْبَيْتِ}} = this House (a phrase, not a sentence)"
       },
       "hl": "هٰذَا الْبَيْتِ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "দুজনের জন্যও ইশারা শব্দ আছে: {{هٰذَانِ}} (এই দুজন – পুং), {{هٰتَانِ}} (এই দুজন – স্ত্রী)। কুরআনে কম আসে, তবে দেখলে চিনতে পারবে — শেষে সেই পরিচিত {{ـَانِ}}!",
     "en": "There are pointing words for two as well: {{هٰذَانِ}} (these two, m), {{هٰتَانِ}} (these two, f). Rare in the Quran, but you'll recognise the familiar {{ـَانِ}} ending!"
    },
    {
     "type": "text",
     "title": {
      "bn": "সংযোগ শব্দ: যে, যিনি, যারা",
      "en": "Linking words: who, which"
     },
     "bn": "বাংলায় বলি — ‘**যিনি** সৃষ্টি করেছেন’, ‘**যারা** ঈমান এনেছে’। আরবিতে এই ‘যে/যিনি/যারা’-কে বলে **ইসমে মাওসূল** ({{اِسْمٌ مَوْصُولٌ}})। এরা দুটো কথাকে জুড়ে দেয়।",
     "en": "We say 'the One **who** created', 'those **who** believe'. In Arabic these 'who/which' words are called **relative nouns** ({{اِسْمٌ مَوْصُولٌ}}). They link two ideas together."
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "আরবি",
       "en": "Arabic"
      },
      {
       "bn": "উচ্চারণ",
       "en": "Say"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      },
      {
       "bn": "কার জন্য",
       "en": "For"
      }
     ],
     "rows": [
      [
       "الَّذِي",
       {
        "bn": "আল্লাযী",
        "en": "alladhī"
       },
       {
        "bn": "যে / যিনি",
        "en": "who / which"
       },
       {
        "bn": "পুং · এক",
        "en": "m · one"
       }
      ],
      [
       "الَّتِي",
       {
        "bn": "আল্লাতী",
        "en": "allatī"
       },
       {
        "bn": "যে / যিনি (স্ত্রী)",
        "en": "who / which (f)"
       },
       {
        "bn": "স্ত্রী · এক",
        "en": "f · one"
       }
      ],
      [
       "الَّذِينَ",
       {
        "bn": "আল্লাযীনা",
        "en": "alladhīna"
       },
       {
        "bn": "যারা",
        "en": "those who"
       },
       {
        "bn": "পুং · বহু",
        "en": "m · many"
       }
      ]
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
       "tr": {
        "bn": "ইকরা' বিসমি রব্বিকাল্লাযী খালাক",
        "en": "iqra' bismi rabbikal-ladhī khalaq"
       },
       "mean": {
        "bn": "পড়ো তোমার রবের নামে, যিনি সৃষ্টি করেছেন (৯৬:১)",
        "en": "Read in the name of your Lord who created (96:1)"
       },
       "hl": "الَّذِي"
      },
      {
       "ar": "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ",
       "tr": {
        "bn": "আল্লাযীনা ইউ'মিনূনা বিল গাইব",
        "en": "alladhīna yu'minūna bil-ghayb"
       },
       "mean": {
        "bn": "যারা অদৃশ্যে বিশ্বাস করে (২:৩)",
        "en": "Those who believe in the unseen (2:3)"
       },
       "hl": "الَّذِينَ"
      },
      {
       "ar": "فَاتَّقُوا النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ",
       "tr": {
        "bn": "ফাত্তাকুন নারাল্লাতী ওয়াকূদুহান নাসু ওয়াল হিজারাহ",
        "en": "fattaqun-nāral-latī waqūduhan-nāsu wal-ḥijārah"
       },
       "mean": {
        "bn": "সেই আগুনকে ভয় করো, যার জ্বালানি মানুষ ও পাথর (২:২৪)",
        "en": "Fear the Fire whose fuel is people and stones (2:24)"
       },
       "note": {
        "bn": "{{النَّارَ}} মুআন্নাস, তাই {{الَّتِي}}",
        "en": "{{النَّارَ}} is feminine, so {{الَّتِي}}"
       },
       "hl": "الَّتِي"
      },
      {
       "ar": "الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ",
       "tr": {
        "bn": "আল্লাযী আত্ব'আমাহুম মিন জূ'ইন",
        "en": "alladhī aṭ'amahum min jū'in"
       },
       "mean": {
        "bn": "যিনি তাদের ক্ষুধায় খাবার দিয়েছেন (১০৬:৪)",
        "en": "Who fed them against hunger (106:4)"
       },
       "hl": "الَّذِي"
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "‘এই’ (কাছের, স্ত্রীলিঙ্গ) কোনটি?",
        "en": "Which is 'this' (near, feminine)?"
       },
       "options": [
        "هٰذِهِ",
        "ذٰلِكَ",
        "تِلْكَ",
        "هٰذَا"
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{أُولٰئِكَ}} অর্থ কী?",
        "en": "What does {{أُولٰئِكَ}} mean?"
       },
       "ar": "أُولٰئِكَ",
       "options": [
        {
         "bn": "এরা",
         "en": "these"
        },
        {
         "bn": "ওরা / তারা (দূরের)",
         "en": "those"
        },
        {
         "bn": "সে",
         "en": "he"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "‘এটি একটি ঘর।’ — পূর্ণ বাক্য কোনটি?",
        "en": "Which is the full sentence 'This is a house.'?"
       },
       "options": [
        "بَيْتُ هٰذَا",
        "هٰذَا الْبَيْتُ",
        "هٰذَا بَيْتٌ"
       ],
       "answer": 2,
       "explain": {
        "bn": "{{هٰذَا}}-এর পরে তানবীনযুক্ত শব্দ = পূর্ণ বাক্য।",
        "en": "{{هٰذَا}} + a word with tanween = full sentence."
       }
      },
      {
       "q": {
        "bn": "{{الَّذِينَ}} অর্থ কী?",
        "en": "What does {{الَّذِينَ}} mean?"
       },
       "ar": "الَّذِينَ",
       "options": [
        {
         "bn": "যারা",
         "en": "those who"
        },
        {
         "bn": "এরা",
         "en": "these"
        },
        {
         "bn": "যিনি",
         "en": "the one who"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{النَّارَ ... وَقُودُهَا}} — এখানে {{الَّتِي}} কেন, {{الَّذِي}} নয়?",
        "en": "Why {{الَّتِي}} and not {{الَّذِي}} with {{النَّارَ}}?"
       },
       "options": [
        {
         "bn": "{{نَارٌ}} বহুবচন",
         "en": "{{نَارٌ}} is plural"
        },
        {
         "bn": "{{نَارٌ}} মুআন্নাস",
         "en": "{{نَارٌ}} is feminine"
        },
        {
         "bn": "{{نَارٌ}} ফে'ল",
         "en": "{{نَارٌ}} is a verb"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "দূরের ইশারা শব্দগুলোর মধ্যে কোন অক্ষরটি সাধারণ?",
        "en": "Which letter do the 'far' pointing words share?"
       },
       "options": [
        "م",
        "ه",
        "ك"
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "g-nominal",
   "icon": "جملة",
   "title": {
    "bn": "নামবাচক বাক্য: মুবতাদা + খবর",
    "en": "The Nominal Sentence: Mubtada + Khabar"
   },
   "subtitle": {
    "bn": "‘বইটি নতুন’ — আরবিতে ‘হয়/is’ লাগে না!",
    "en": "'The book is new' — Arabic needs no 'is'!"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "জুমলা ইসমিয়্যা (নামবাচক বাক্য) চিনবে",
     "en": "Recognise the nominal sentence (jumla ismiyya)"
    },
    {
     "bn": "মুবতাদা ও খবর আলাদা করতে পারবে",
     "en": "Separate the mubtada (subject) and khabar (predicate)"
    },
    {
     "bn": "‘বইটি নতুন’ বনাম ‘নতুন বইটি’-র পার্থক্য বুঝবে",
     "en": "Tell 'the book is new' from 'the new book'"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "একটা মজার কথা: বাংলায় আমরা বলি ‘আমি ছাত্র’, ‘আকাশ নীল’ — মাঝে ‘হই’ বা ‘হয়’ লাগে না! আরবিও ঠিক তেমন: {{اَلْكِتَابُ جَدِيدٌ}} = ‘বইটি নতুন’। ইসম দিয়ে শুরু হওয়া এমন বাক্যকে বলে **জুমলা ইসমিয়্যা** ({{جُمْلَةٌ اِسْمِيَّةٌ}})।",
     "en": "Here's a fun fact: Arabic has no word for 'is/are' in the present. {{اَلْكِتَابُ جَدِيدٌ}} = 'The book (is) new'. A sentence that starts with a noun like this is a **nominal sentence** ({{جُمْلَةٌ اِسْمِيَّةٌ}})."
    },
    {
     "type": "table",
     "title": {
      "bn": "দুটি অংশ",
      "en": "Two parts"
     },
     "head": [
      {
       "bn": "অংশ",
       "en": "Part"
      },
      {
       "bn": "কাজ",
       "en": "Job"
      },
      {
       "bn": "সাধারণ চেহারা",
       "en": "Usual look"
      }
     ],
     "rows": [
      [
       {
        "bn": "মুবতাদা ({{مُبْتَدَأٌ}})",
        "en": "Mubtada ({{مُبْتَدَأٌ}})"
       },
       {
        "bn": "যার কথা বলছি (উদ্দেশ্য)",
        "en": "What we talk about (subject)"
       },
       {
        "bn": "নির্দিষ্ট, শেষে পেশ: {{اَلْكِتَابُ}}",
        "en": "Definite, ends in damma: {{اَلْكِتَابُ}}"
       }
      ],
      [
       {
        "bn": "খবর ({{خَبَرٌ}})",
        "en": "Khabar ({{خَبَرٌ}})"
       },
       {
        "bn": "তার সম্পর্কে খবর (বিধেয়)",
        "en": "The news about it (predicate)"
       },
       {
        "bn": "প্রায়ই অনির্দিষ্ট, শেষে দুই পেশ: {{جَدِيدٌ}}",
        "en": "Often indefinite, ends in ٌ: {{جَدِيدٌ}}"
       }
      ]
     ]
    },
    {
     "type": "examples",
     "title": {
      "bn": "সহজ বাক্য",
      "en": "Simple sentences"
     },
     "items": [
      {
       "ar": "اَلْكِتَابُ جَدِيدٌ",
       "tr": {
        "bn": "আল-কিতাবু জাদীদুন",
        "en": "al-kitābu jadīdun"
       },
       "mean": {
        "bn": "বইটি নতুন।",
        "en": "The book is new."
       },
       "hl": "جَدِيدٌ"
      },
      {
       "ar": "اَلْبَيْتُ كَبِيرٌ",
       "tr": {
        "bn": "আল-বাইতু কাবীরুন",
        "en": "al-baytu kabīrun"
       },
       "mean": {
        "bn": "ঘরটি বড়।",
        "en": "The house is big."
       },
       "hl": "كَبِيرٌ"
      },
      {
       "ar": "أَنَا مُسْلِمٌ",
       "tr": {
        "bn": "আনা মুসলিমুন",
        "en": "anā muslimun"
       },
       "mean": {
        "bn": "আমি মুসলিম।",
        "en": "I am a Muslim."
       },
       "note": {
        "bn": "সর্বনামও মুবতাদা হতে পারে",
        "en": "A pronoun can be the mubtada"
       },
       "hl": "مُسْلِمٌ"
      },
      {
       "ar": "نَحْنُ مُسْلِمُونَ",
       "tr": {
        "bn": "নাহনু মুসলিমূন",
        "en": "naḥnu muslimūn"
       },
       "mean": {
        "bn": "আমরা মুসলিম।",
        "en": "We are Muslims."
       },
       "hl": "مُسْلِمُونَ"
      },
      {
       "ar": "اَللّٰهُ أَكْبَرُ",
       "tr": {
        "bn": "আল্লাহু আকবার",
        "en": "allāhu akbar"
       },
       "mean": {
        "bn": "আল্লাহ সবচেয়ে বড়।",
        "en": "Allah is the Greatest."
       },
       "note": {
        "bn": "আজানের প্রথম কথাটিই একটি জুমলা ইসমিয়্যা!",
        "en": "The very first words of the adhan are a nominal sentence!"
       },
       "hl": "أَكْبَرُ"
      }
     ]
    },
    {
     "type": "compare",
     "title": {
      "bn": "সবচেয়ে গুরুত্বপূর্ণ পার্থক্য",
      "en": "The most important difference"
     },
     "items": [
      {
       "ar": "اَلْكِتَابُ جَدِيدٌ",
       "label": {
        "bn": "বাক্য ✓",
        "en": "Sentence ✓"
       },
       "desc": {
        "bn": "‘বইটি নতুন।’ — দ্বিতীয় শব্দে {{اَلْ}} নেই",
        "en": "'The book is new.' — 2nd word has no {{اَلْ}}"
       }
      },
      {
       "ar": "اَلْكِتَابُ الْجَدِيدُ",
       "label": {
        "bn": "শব্দগুচ্ছ",
        "en": "Phrase"
       },
       "desc": {
        "bn": "‘নতুন বইটি…’ — দুটোতেই {{اَلْ}}; কথা শেষ হয়নি",
        "en": "'The new book...' — both have {{اَلْ}}; not finished yet"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "সূত্র: **{{اَلْ}} + {{اَلْ}} = জোড়া (বিশেষণ)**; **{{اَلْ}} + তানবীন = বাক্য**। দ্বিতীয় শব্দে {{اَلْ}} না দেখলেই মনে মনে মাঝে ‘হলো’ বসিয়ে নাও!",
     "en": "Rule of thumb: **{{اَلْ}} + {{اَلْ}} = a pair (adjective)**; **{{اَلْ}} + tanween = a sentence**. If the second word has no {{اَلْ}}, mentally slip in 'is'!"
    },
    {
     "type": "examples",
     "title": {
      "bn": "কুরআনের জুমলা ইসমিয়্যা",
      "en": "Nominal sentences in the Quran"
     },
     "items": [
      {
       "ar": "اَللّٰهُ الصَّمَدُ",
       "tr": {
        "bn": "আল্লাহুস সামাদ",
        "en": "allāhuṣ-ṣamad"
       },
       "mean": {
        "bn": "আল্লাহ অমুখাপেক্ষী (১১২:২)",
        "en": "Allah is the Eternal Refuge (112:2)"
       },
       "note": {
        "bn": "এখানে খবরেও {{اَلْ}} — অর্থ: ‘একমাত্র তিনিই’ সামাদ",
        "en": "Here the khabar also has {{اَلْ}} — meaning 'He alone' is aṣ-Ṣamad"
       }
      },
      {
       "ar": "مُحَمَّدٌ رَسُولُ اللّٰهِ",
       "tr": {
        "bn": "মুহাম্মাদুর রাসূলুল্লাহ",
        "en": "muḥammadur-rasūlullāh"
       },
       "mean": {
        "bn": "মুহাম্মাদ আল্লাহর রাসূল (৪৮:২৯)",
        "en": "Muhammad is the Messenger of Allah (48:29)"
       },
       "hl": "رَسُولُ اللّٰهِ"
      },
      {
       "ar": "وَاللّٰهُ غَفُورٌ رَحِيمٌ",
       "tr": {
        "bn": "ওয়াল্লাহু গাফূরুর রাহীম",
        "en": "wallāhu ghafūrur-raḥīm"
       },
       "mean": {
        "bn": "আর আল্লাহ ক্ষমাশীল, পরম দয়ালু (২:২১৮)",
        "en": "And Allah is Forgiving, Merciful (2:218)"
       },
       "note": {
        "bn": "একই মুবতাদার দুটি খবর",
        "en": "One mubtada with two khabars"
       },
       "hl": "غَفُورٌ رَحِيمٌ"
      },
      {
       "ar": "لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ",
       "tr": {
        "bn": "লাইলাতুল কদরি খাইরুম মিন আলফি শাহর",
        "en": "laylatul-qadri khayrum-min alfi shahr"
       },
       "mean": {
        "bn": "কদরের রাত হাজার মাসের চেয়েও উত্তম (৯৭:৩)",
        "en": "The Night of Decree is better than a thousand months (97:3)"
       },
       "hl": "خَيْرٌ"
      },
      {
       "ar": "اَللّٰهُ نُورُ السَّمٰوَاتِ وَالْأَرْضِ",
       "tr": {
        "bn": "আল্লাহু নূরুস সামা-ওয়াতি ওয়াল আরদ্ব",
        "en": "allāhu nūrus-samāwāti wal-arḍ"
       },
       "mean": {
        "bn": "আল্লাহ আসমান ও জমিনের নূর (২৪:৩৫)",
        "en": "Allah is the Light of the heavens and the earth (24:35)"
       },
       "hl": "نُورُ"
      }
     ]
    },
    {
     "type": "text",
     "title": {
      "bn": "খবর যখন হরফসহ শব্দগুচ্ছ",
      "en": "When the khabar is a preposition phrase"
     },
     "bn": "খবর সবসময় একটা শব্দ হয় না; ‘কোথায়/কার জন্য’ বলা একটি শব্দগুচ্ছও খবর হতে পারে: {{اَلْحَمْدُ لِلّٰهِ}} = সব প্রশংসা **আল্লাহর জন্য**। আর মুবতাদা অনির্দিষ্ট হলে খবর **আগে** চলে আসে: {{فِي قُلُوبِهِمْ مَرَضٌ}} = তাদের অন্তরে (আছে) রোগ (২:১০)।",
     "en": "The khabar isn't always one word; a 'where/for whom' phrase can be the khabar: {{اَلْحَمْدُ لِلّٰهِ}} = all praise is **for Allah**. And when the mubtada is indefinite, the khabar comes **first**: {{فِي قُلُوبِهِمْ مَرَضٌ}} = in their hearts is a disease (2:10)."
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "আগাম খবর: বাক্যের শুরুতে {{إِنَّ}} (নিশ্চয়ই) বসলে মুবতাদার পেশ **যবর** হয়ে যায়, খবর পেশই থাকে: {{اَللّٰهُ غَفُورٌ}} → {{إِنَّ اللّٰهَ غَفُورٌ رَحِيمٌ}} (২:১৭৩)। অর্থ শুধু জোরালো হয়।",
     "en": "Sneak peek: when {{إِنَّ}} (indeed) starts the sentence, the mubtada's damma turns into **fatha**, while the khabar keeps its damma: {{اَللّٰهُ غَفُورٌ}} → {{إِنَّ اللّٰهَ غَفُورٌ رَحِيمٌ}} (2:173). The meaning just gets stronger."
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "{{اَلْبَيْتُ كَبِيرٌ}} অর্থ কী?",
        "en": "What does {{اَلْبَيْتُ كَبِيرٌ}} mean?"
       },
       "ar": "اَلْبَيْتُ كَبِيرٌ",
       "options": [
        {
         "bn": "ঘরটি বড়।",
         "en": "The house is big."
        },
        {
         "bn": "একটি বড় ঘর",
         "en": "a big house"
        },
        {
         "bn": "বড় ঘরটি",
         "en": "the big house"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "কোনটি পূর্ণ বাক্য?",
        "en": "Which one is a full sentence?"
       },
       "options": [
        "اَلْقَلَمُ الْجَدِيدُ",
        "اَلْقَلَمُ جَدِيدٌ",
        "قَلَمٌ جَدِيدٌ"
       ],
       "answer": 1,
       "explain": {
        "bn": "{{اَلْ}} + তানবীন = বাক্য: ‘কলমটি নতুন।’",
        "en": "{{اَلْ}} + tanween = sentence: 'The pen is new.'"
       }
      },
      {
       "q": {
        "bn": "{{مُحَمَّدٌ رَسُولُ اللّٰهِ}} — মুবতাদা কোনটি?",
        "en": "In {{مُحَمَّدٌ رَسُولُ اللّٰهِ}}, which is the mubtada?"
       },
       "options": [
        "اللّٰهِ",
        "رَسُولُ",
        "مُحَمَّدٌ"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "আরবিতে বর্তমান কালে ‘হয়/is’-এর জন্য আলাদা শব্দ…",
        "en": "In the present tense, Arabic's word for 'is'..."
       },
       "options": [
        {
         "bn": "লাগে না",
         "en": "is not needed"
        },
        {
         "bn": "সবসময় লাগে",
         "en": "is always needed"
        },
        {
         "bn": "শুধু প্রশ্নে লাগে",
         "en": "is only used in questions"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "মুবতাদা ও খবরের শেষে সাধারণত কোন হরকত?",
        "en": "What ending do mubtada and khabar usually have?"
       },
       "options": [
        {
         "bn": "যের",
         "en": "kasra"
        },
        {
         "bn": "পেশ",
         "en": "damma"
        },
        {
         "bn": "যবর",
         "en": "fatha"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{اَلْحَمْدُ لِلّٰهِ}} — খবর কোনটি?",
        "en": "In {{اَلْحَمْدُ لِلّٰهِ}}, what is the khabar?"
       },
       "options": [
        "اَلْحَمْدُ",
        {
         "bn": "খবর নেই",
         "en": "There is none"
        },
        "لِلّٰهِ"
       ],
       "answer": 2,
       "explain": {
        "bn": "হরফসহ শব্দগুচ্ছ {{لِلّٰهِ}} (আল্লাহর জন্য) হলো খবর।",
        "en": "The phrase {{لِلّٰهِ}} (for Allah) is the khabar."
       }
      }
     ]
    }
   ]
  },
  {
   "id": "g-prepositions",
   "icon": "فِي",
   "title": {
    "bn": "হরফে জার ও যের",
    "en": "Prepositions and the Kasra"
   },
   "subtitle": {
    "bn": "যে ছোট্ট শব্দগুলো পরের শব্দকে ‘যের’-এ টেনে নামায়",
    "en": "Little words that pull the next word down to kasra"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "কুরআনের প্রধান হরফে জার ও তাদের অর্থ শিখবে",
     "en": "Learn the main Quranic prepositions and their meanings"
    },
    {
     "bn": "জানবে হরফে জারের পরের ইসম কেন যের পায় (মাজরূর)",
     "en": "Know why the noun after them takes kasra (majrūr)"
    },
    {
     "bn": "ই'রাবের তিন অবস্থা — পেশ, যবর, যের — এক নজরে দেখবে",
     "en": "See the three case endings — damma, fatha, kasra — at a glance"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "বাংলায় বলি ‘ঘরে’, ‘ঘর থেকে’, ‘ঘরের দিকে’ — এখানে ‘-এ’, ‘থেকে’, ‘দিকে’ বসে শব্দের **পরে**। আরবিতে এমন শব্দ বসে **আগে**: {{فِي الْبَيْتِ}} (ঘরের মধ্যে)। এদের বলে **হরফে জার** ({{حُرُوفُ الْجَرِّ}})। ‘জার’ মানে টানা — এরা পরের শব্দের শেষ হরকতকে টেনে **যের** বানিয়ে দেয়!",
     "en": "English has words like 'in', 'from', 'to' — and Arabic has them too, placed **before** the noun: {{فِي الْبَيْتِ}} (in the house). They are called **ḥurūf al-jarr**. 'Jarr' means pulling — they pull the next word's ending down to **kasra**!"
    },
    {
     "type": "table",
     "title": {
      "bn": "কুরআনের প্রধান হরফে জার",
      "en": "Main prepositions of the Quran"
     },
     "head": [
      {
       "bn": "হরফ",
       "en": "Preposition"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "بِـ",
       {
        "bn": "দিয়ে, দ্বারা, সাথে",
        "en": "with, by"
       },
       "بِسْمِ اللّٰهِ",
       {
        "bn": "আল্লাহর নামে",
        "en": "in the name of Allah"
       }
      ],
      [
       "لِـ",
       {
        "bn": "জন্য, -এর",
        "en": "for, belongs to"
       },
       "لِلّٰهِ",
       {
        "bn": "আল্লাহর জন্য",
        "en": "for Allah"
       }
      ],
      [
       "فِي",
       {
        "bn": "মধ্যে, -তে",
        "en": "in"
       },
       "فِي الْأَرْضِ",
       {
        "bn": "পৃথিবীতে",
        "en": "in the earth"
       }
      ],
      [
       "مِنْ",
       {
        "bn": "থেকে",
        "en": "from, of"
       },
       "مِنَ السَّمَاءِ",
       {
        "bn": "আকাশ থেকে",
        "en": "from the sky"
       }
      ],
      [
       "إِلٰى",
       {
        "bn": "দিকে, পর্যন্ত",
        "en": "to, towards"
       },
       "إِلَى اللّٰهِ",
       {
        "bn": "আল্লাহর দিকে",
        "en": "to Allah"
       }
      ],
      [
       "عَلٰى",
       {
        "bn": "উপরে",
        "en": "on, upon"
       },
       "عَلَى اللّٰهِ",
       {
        "bn": "আল্লাহর উপর",
        "en": "upon Allah"
       }
      ],
      [
       "عَنْ",
       {
        "bn": "সম্পর্কে, থেকে (দূরে)",
        "en": "about, away from"
       },
       "عَنِ النَّبَإِ",
       {
        "bn": "সংবাদ সম্পর্কে",
        "en": "about the news"
       }
      ],
      [
       "كَـ",
       {
        "bn": "মতো",
        "en": "like"
       },
       "كَالْعِهْنِ",
       {
        "bn": "পশমের মতো",
        "en": "like wool"
       }
      ],
      [
       "حَتّٰى",
       {
        "bn": "পর্যন্ত",
        "en": "until"
       },
       "حَتّٰى مَطْلَعِ الْفَجْرِ",
       {
        "bn": "ফজর উদয় পর্যন্ত",
        "en": "until the rise of dawn"
       }
      ]
     ]
    },
    {
     "type": "table",
     "title": {
      "bn": "আগে ও পরে: শেষ হরকত বদল",
      "en": "Before and after: the ending changes"
     },
     "head": [
      {
       "bn": "একা",
       "en": "Alone"
      },
      {
       "bn": "হরফে জারের পরে",
       "en": "After a preposition"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "كِتَابٌ",
       "فِي كِتَابٍ",
       {
        "bn": "একটি কিতাবে",
        "en": "in a book"
       }
      ],
      [
       "اَلْبَيْتُ",
       "فِي الْبَيْتِ",
       {
        "bn": "ঘরটিতে",
        "en": "in the house"
       }
      ],
      [
       "اللّٰهُ",
       "بِاللّٰهِ",
       {
        "bn": "আল্লাহর প্রতি / আল্লাহ দিয়ে",
        "en": "in / by Allah"
       }
      ],
      [
       "اَلْمُسْلِمُونَ",
       "مِنَ الْمُسْلِمِينَ",
       {
        "bn": "মুসলিমদের মধ্য থেকে",
        "en": "from among the Muslims"
       }
      ],
      [
       "مُسْلِمَاتٌ",
       "لِمُسْلِمَاتٍ",
       {
        "bn": "মুসলিম নারীদের জন্য",
        "en": "for Muslim women"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "হরফে জারকে ভাবো একটা **চুম্বক**: পরের শব্দের শেষ হরকতকে নিচে টেনে **যের** বানায়। বহুবচনে {{ـُونَ}} টেনে {{ـِينَ}}, দ্বিবচনে {{ـَانِ}} টেনে {{ـَيْنِ}} — সবই এই চুম্বকের কাজ!",
     "en": "Think of a preposition as a **magnet**: it pulls the next word's ending down to **kasra**. It pulls {{ـُونَ}} down to {{ـِينَ}}, and {{ـَانِ}} down to {{ـَيْنِ}} — all the magnet's work!"
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "উচ্চারণের ছোট নিয়ম: {{اَلْ}}-এর আগে {{مِنْ}} হয়ে যায় {{مِنَ}} (মিনাস-সামা), {{عَنْ}} হয়ে যায় {{عَنِ}}। আর {{فِي}}, {{إِلٰى}}, {{عَلٰى}}-র লম্বা টান {{اَلْ}}-এর আগে ছোট হয়ে যায়: {{فِي الْأَرْضِ}} = ‘ফিল আরদ্ব’।",
     "en": "Small pronunciation rules: before {{اَلْ}}, {{مِنْ}} becomes {{مِنَ}} (minas-samā') and {{عَنْ}} becomes {{عَنِ}}. And the long vowel of {{فِي}}, {{إِلٰى}}, {{عَلٰى}} is shortened before {{اَلْ}}: {{فِي الْأَرْضِ}} = 'fil-arḍ'."
    },
    {
     "type": "examples",
     "title": {
      "bn": "কুরআনে হরফে জার",
      "en": "Prepositions in the Quran"
     },
     "items": [
      {
       "ar": "مِنْ شَرِّ مَا خَلَقَ",
       "tr": {
        "bn": "মিন শাররি মা খালাক",
        "en": "min sharri mā khalaq"
       },
       "mean": {
        "bn": "তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে (১১৩:২)",
        "en": "From the evil of what He created (113:2)"
       },
       "note": {
        "bn": "{{مِنْ}}-এর পরে {{شَرِّ}} — যের",
        "en": "After {{مِنْ}}, {{شَرِّ}} takes kasra"
       },
       "hl": "شَرِّ"
      },
      {
       "ar": "وَإِلٰى رَبِّكَ فَارْغَبْ",
       "tr": {
        "bn": "ওয়া ইলা রব্বিকা ফারগাব",
        "en": "wa ilā rabbika farghab"
       },
       "mean": {
        "bn": "আর তোমার রবের দিকেই মনোযোগী হও (৯৪:৮)",
        "en": "And to your Lord turn with longing (94:8)"
       },
       "hl": "رَبِّكَ"
      },
      {
       "ar": "عَنِ النَّبَإِ الْعَظِيمِ",
       "tr": {
        "bn": "আনিন নাবাইল আযীম",
        "en": "'anin-naba'il-'aẓīm"
       },
       "mean": {
        "bn": "মহা সংবাদ সম্পর্কে (৭৮:২)",
        "en": "About the great news (78:2)"
       },
       "hl": "عَنِ"
      },
      {
       "ar": "وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنْفُوشِ",
       "tr": {
        "bn": "ওয়া তাকূনুল জিবালু কাল ইহনিল মানফূশ",
        "en": "wa takūnul-jibālu kal-'ihnil-manfūsh"
       },
       "mean": {
        "bn": "আর পাহাড়গুলো হবে ধুনা পশমের মতো (১০১:৫)",
        "en": "And the mountains will be like fluffed-up wool (101:5)"
       },
       "hl": "كَالْعِهْنِ"
      },
      {
       "ar": "فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ",
       "tr": {
        "bn": "ফাজা'আলাহুম কা'আসফিম মা'কূল",
        "en": "faja'alahum ka'aṣfim-ma'kūl"
       },
       "mean": {
        "bn": "তারপর তিনি তাদের করে দিলেন চিবানো ভুসির মতো (১০৫:৫)",
        "en": "Then He made them like chewed-up straw (105:5)"
       },
       "note": {
        "bn": "{{كَـ}}-এর পরে তানবীনসহ যের: {{عَصْفٍ}}",
        "en": "After {{كَـ}}: kasra with tanween, {{عَصْفٍ}}"
       },
       "hl": "كَعَصْفٍ"
      },
      {
       "ar": "وَعَلَى اللّٰهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
       "tr": {
        "bn": "ওয়া আলাল্লাহি ফালইয়াতাওয়াক্কালিল মু'মিনূন",
        "en": "wa 'alallāhi falyatawakkalil-mu'minūn"
       },
       "mean": {
        "bn": "আর মুমিনরা যেন আল্লাহর উপরই ভরসা করে (৩:১২২)",
        "en": "And upon Allah let the believers rely (3:122)"
       },
       "hl": "عَلَى اللّٰهِ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "{{وَالْعَصْرِ}}, {{وَالشَّمْسِ}}, {{وَالْفَجْرِ}} — শপথের {{وَ}} ‘এবং’ নয়, ‘শপথ!’। এটিও এক ধরনের হরফে জার, তাই পরের শব্দে যের!",
     "en": "{{وَالْعَصْرِ}}, {{وَالشَّمْسِ}}, {{وَالْفَجْرِ}} — this {{وَ}} isn't 'and' but 'By...!' (an oath). It also works like a preposition, so the next word takes kasra!"
    },
    {
     "type": "table",
     "title": {
      "bn": "ই'রাব এক নজরে: শেষ হরকত = শব্দের কাজ",
      "en": "Case endings at a glance: last vowel = the word's job"
     },
     "head": [
      {
       "bn": "অবস্থা",
       "en": "Case"
      },
      {
       "bn": "চিহ্ন",
       "en": "Sign"
      },
      {
       "bn": "সাধারণ কাজ",
       "en": "Typical job"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      }
     ],
     "rows": [
      [
       {
        "bn": "রফ' (পেশ অবস্থা)",
        "en": "Raf'"
       },
       "ـُ ـٌ",
       {
        "bn": "মুবতাদা, খবর, কর্তা",
        "en": "Subject, predicate, doer"
       },
       "قُلْ هُوَ اللّٰهُ أَحَدٌ"
      ],
      [
       {
        "bn": "নাসব (যবর অবস্থা)",
        "en": "Naṣb"
       },
       "ـَ ـً",
       {
        "bn": "কর্ম; {{إِنَّ}}-এর পরের ইসম",
        "en": "Object; the noun after {{إِنَّ}}"
       },
       "إِنَّ اللّٰهَ"
      ],
      [
       {
        "bn": "জার (যের অবস্থা)",
        "en": "Jarr"
       },
       "ـِ ـٍ",
       {
        "bn": "হরফে জারের পরে; মালিকানায় দ্বিতীয় শব্দ",
        "en": "After a preposition; 2nd word of possession"
       },
       "بِسْمِ اللّٰهِ"
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "{{مَعَ}} (সাথে) ব্যাকরণে আসলে হরফ নয়, একটি ইসম (যরফ) — কিন্তু এর পরের শব্দও যের পায়: {{إِنَّ اللّٰهَ مَعَ الصَّابِرِينَ}} (নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সাথে আছেন, ২:১৫৩)।",
     "en": "{{مَعَ}} (with) is technically a noun of place/time, not a harf — but the word after it also takes kasra: {{إِنَّ اللّٰهَ مَعَ الصَّابِرِينَ}} (Indeed Allah is with the patient, 2:153)."
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "{{عَلٰى}} অর্থ কী?",
        "en": "What does {{عَلٰى}} mean?"
       },
       "ar": "عَلٰى",
       "options": [
        {
         "bn": "থেকে",
         "en": "from"
        },
        {
         "bn": "মতো",
         "en": "like"
        },
        {
         "bn": "মধ্যে",
         "en": "in"
        },
        {
         "bn": "উপরে",
         "en": "on / upon"
        }
       ],
       "answer": 3
      },
      {
       "q": {
        "bn": "‘ঘরটিতে’ সঠিকভাবে কোনটি?",
        "en": "Which correctly says 'in the house'?"
       },
       "options": [
        "فِي الْبَيْتِ",
        "فِي الْبَيْتَ",
        "فِي الْبَيْتُ"
       ],
       "answer": 0,
       "explain": {
        "bn": "হরফে জারের পরে ইসম যের পায়।",
        "en": "A noun after a preposition takes kasra."
       }
      },
      {
       "q": {
        "bn": "{{مِنْ}} + {{الْمُؤْمِنُونَ}} = ?",
        "en": "{{مِنْ}} + {{الْمُؤْمِنُونَ}} = ?"
       },
       "options": [
        "مِنَ الْمُؤْمِنُونَ",
        "مِنَ الْمُؤْمِنِينَ",
        "مِنْ الْمُؤْمِنَانِ"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{كَعَصْفٍ}}-এ {{كَـ}} অর্থ কী?",
        "en": "In {{كَعَصْفٍ}}, what does {{كَـ}} mean?"
       },
       "ar": "كَعَصْفٍ",
       "options": [
        {
         "bn": "দিয়ে",
         "en": "with"
        },
        {
         "bn": "জন্য",
         "en": "for"
        },
        {
         "bn": "মতো",
         "en": "like"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "‘জার’ শব্দের অর্থ কী?",
        "en": "What does 'jarr' mean?"
       },
       "options": [
        {
         "bn": "টানা",
         "en": "pulling"
        },
        {
         "bn": "ঠেলা",
         "en": "pushing"
        },
        {
         "bn": "থামা",
         "en": "stopping"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{وَالْعَصْرِ}}-এর {{وَ}} এখানে কী অর্থে?",
        "en": "What does {{وَ}} mean in {{وَالْعَصْرِ}}?"
       },
       "options": [
        {
         "bn": "এবং",
         "en": "and"
        },
        {
         "bn": "শপথ",
         "en": "by (an oath)"
        },
        {
         "bn": "অথবা",
         "en": "or"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{بِسْمِ اللّٰهِ}}-তে {{اللّٰهِ}}-এর শেষে যের কেন?",
        "en": "Why does {{اللّٰهِ}} end in kasra in {{بِسْمِ اللّٰهِ}}?"
       },
       "options": [
        {
         "bn": "এটি মুবতাদা",
         "en": "It is the mubtada"
        },
        {
         "bn": "এটি কর্ম",
         "en": "It is the object"
        },
        {
         "bn": "এটি মালিকানার দ্বিতীয় শব্দ (নামটি আল্লাহর)",
         "en": "It is the 2nd word of a possession (the name of Allah)"
        }
       ],
       "answer": 2,
       "explain": {
        "bn": "{{اسْمِ}} যের পেয়েছে {{بِ}}-এর কারণে; আর {{اللّٰهِ}} যের পেয়েছে মালিকানার কারণে — পরের পাঠে বিস্তারিত।",
        "en": "{{اسْمِ}} has kasra because of {{بِ}}; {{اللّٰهِ}} has kasra because of possession — details in the next lesson."
       }
      }
     ]
    }
   ]
  },
  {
   "id": "g-idafa",
   "icon": "ـِ",
   "title": {
    "bn": "মালিকানা: ইযাফা (আল্লাহর রাসূল)",
    "en": "Possession: Idafa (the Messenger of Allah)"
   },
   "subtitle": {
    "bn": "দুটি ইসম পাশাপাশি বসে ‘-এর’ অর্থ তৈরি করে",
    "en": "Two nouns side by side make an 'of' phrase"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "ইযাফা — মুযাফ ও মুযাফ ইলাইহি চিনবে",
     "en": "Recognise idafa — the mudaf and mudaf ilayh"
    },
    {
     "bn": "ইযাফার দুটি সোনালি নিয়ম মনে রাখবে",
     "en": "Remember the two golden rules of idafa"
    },
    {
     "bn": "{{مٰلِكِ يَوْمِ الدِّينِ}}-এর মতো লম্বা শিকল বুঝবে",
     "en": "Understand longer chains like {{مٰلِكِ يَوْمِ الدِّينِ}}"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "বাংলায় বলি ‘আল্লাহ**র** রাসূল’ — মালিক আগে, তার সাথে ‘-র’। আরবিতে উল্টো: আগে জিনিস, পরে মালিক — {{رَسُولُ اللّٰهِ}} (রাসূল + আল্লাহর)। আর বাংলার সেই ‘-র’-এর কাজ করে মালিক-শব্দের শেষের **যের**! এই গঠনের নাম **ইযাফা** ({{إِضَافَةٌ}})।",
     "en": "English says 'the Messenger **of** Allah'. Arabic simply puts two nouns side by side — the thing first, the owner second: {{رَسُولُ اللّٰهِ}}. The word 'of' is shown by the **kasra** on the owner word! This structure is called **idafa** ({{إِضَافَةٌ}})."
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "অংশ",
       "en": "Part"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      },
      {
       "bn": "নিয়ম",
       "en": "Rule"
      }
     ],
     "rows": [
      [
       {
        "bn": "মুযাফ (যার মালিকানা)",
        "en": "Mudaf (the thing owned)"
       },
       "رَسُولُ",
       {
        "bn": "{{اَلْ}} নেই, তানবীন নেই",
        "en": "No {{اَلْ}}, no tanween"
       }
      ],
      [
       {
        "bn": "মুযাফ ইলাইহি (মালিক)",
        "en": "Mudaf ilayh (the owner)"
       },
       "اللّٰهِ",
       {
        "bn": "সবসময় যের অবস্থায় (মাজরূর)",
        "en": "Always in the kasra case (majrūr)"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "পড়ার কৌশল: **উল্টো দিক থেকে পড়ো, আর যেরকে ‘-র/-এর’ ভাবো।** {{بَيْتُ اللّٰهِ}} → ‘আল্লাহ-**র** ঘর’। {{يَوْمِ الدِّينِ}} → ‘বিচার-**এর** দিন’।",
     "en": "Reading trick: **read the first word, then say 'of', then the second.** {{بَيْتُ اللّٰهِ}} → 'house **of** Allah'. {{يَوْمِ الدِّينِ}} → 'Day **of** Judgement'."
    },
    {
     "type": "examples",
     "title": {
      "bn": "কুরআনের পরিচিত ইযাফা",
      "en": "Familiar idafas from the Quran"
     },
     "items": [
      {
       "ar": "رَسُولُ اللّٰهِ",
       "tr": {
        "bn": "রাসূলুল্লাহ",
        "en": "rasūlullāh"
       },
       "mean": {
        "bn": "আল্লাহর রাসূল (৪৮:২৯)",
        "en": "the Messenger of Allah (48:29)"
       }
      },
      {
       "ar": "بَيْتُ اللّٰهِ",
       "tr": {
        "bn": "বাইতুল্লাহ",
        "en": "baytullāh"
       },
       "mean": {
        "bn": "আল্লাহর ঘর (কা'বা)",
        "en": "the House of Allah (the Ka'bah)"
       }
      },
      {
       "ar": "رَبِّ الْعٰلَمِينَ",
       "tr": {
        "bn": "রব্বিল আলামীন",
        "en": "rabbil-'ālamīn"
       },
       "mean": {
        "bn": "সকল জগতের রব (১:২)",
        "en": "Lord of the worlds (1:2)"
       }
      },
      {
       "ar": "نَصْرُ اللّٰهِ",
       "tr": {
        "bn": "নাসরুল্লাহ",
        "en": "naṣrullāh"
       },
       "mean": {
        "bn": "আল্লাহর সাহায্য (১১০:১)",
        "en": "the help of Allah (110:1)"
       }
      },
      {
       "ar": "بِأَصْحَابِ الْفِيلِ",
       "tr": {
        "bn": "বিআসহাবিল ফীল",
        "en": "bi-aṣḥābil-fīl"
       },
       "mean": {
        "bn": "হাতিওয়ালাদের সাথে (১০৫:১)",
        "en": "with the companions of the elephant (105:1)"
       },
       "hl": "أَصْحَابِ الْفِيلِ"
      },
      {
       "ar": "لَيْلَةُ الْقَدْرِ",
       "tr": {
        "bn": "লাইলাতুল কদর",
        "en": "laylatul-qadr"
       },
       "mean": {
        "bn": "কদরের রাত (৯৭:৩)",
        "en": "the Night of Decree (97:3)"
       }
      },
      {
       "ar": "فِي دِينِ اللّٰهِ أَفْوَاجًا",
       "tr": {
        "bn": "ফী দীনিল্লাহি আফওয়াজা",
        "en": "fī dīnillāhi afwājā"
       },
       "mean": {
        "bn": "দলে দলে আল্লাহর দ্বীনে (১১০:২)",
        "en": "into the religion of Allah in crowds (110:2)"
       },
       "hl": "دِينِ اللّٰهِ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "মুযাফে কখনো {{اَلْ}} বা তানবীন বসে না: ‘اَلرَّسُولُ اللّٰهِ’ ✗ বা ‘رَسُولٌ اللّٰهِ’ ✗ — সঠিক শুধু {{رَسُولُ اللّٰهِ}} ✓। কারণ মালিকের নাম যুক্ত হলেই সে নির্দিষ্ট হয়ে যায়।",
     "en": "The mudaf never takes {{اَلْ}} or tanween: 'اَلرَّسُولُ اللّٰهِ' ✗ or 'رَسُولٌ اللّٰهِ' ✗ — only {{رَسُولُ اللّٰهِ}} ✓. Adding the owner already makes it definite."
    },
    {
     "type": "table",
     "title": {
      "bn": "একই {{رَبّ}} — তিন অবস্থায়",
      "en": "The same {{رَبّ}} — in three cases"
     },
     "head": [
      {
       "bn": "আয়াত",
       "en": "Ayah"
      },
      {
       "bn": "{{رَبّ}}-এর শেষ",
       "en": "Ending of {{رَبّ}}"
      },
      {
       "bn": "কারণ",
       "en": "Why"
      }
     ],
     "rows": [
      [
       "رَبُّ الْمَشْرِقَيْنِ",
       {
        "bn": "পেশ — (৫৫:১৭)",
        "en": "damma — (55:17)"
       },
       {
        "bn": "তিনি (রব) — খবর/রফ'",
        "en": "(He is the) Lord — raf'"
       }
      ],
      [
       "فَلْيَعْبُدُوا رَبَّ هٰذَا الْبَيْتِ",
       {
        "bn": "যবর — (১০৬:৩)",
        "en": "fatha — (106:3)"
       },
       {
        "bn": "ইবাদতের কর্ম — নাসব",
        "en": "Object of 'worship' — naṣb"
       }
      ],
      [
       "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
       {
        "bn": "যের — (১১৪:১)",
        "en": "kasra — (114:1)"
       },
       {
        "bn": "{{بِـ}}-এর পরে — জার",
        "en": "After {{بِـ}} — jarr"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "দেখলে তো? **মুযাফের** শেষ হরকত বাক্যে তার কাজ অনুযায়ী বদলায়; কিন্তু **মুযাফ ইলাইহি** ({{الْمَشْرِقَيْنِ}}, {{هٰذَا}}, {{النَّاسِ}}) সবসময় যের অবস্থায় থাকে।",
     "en": "See? The **mudaf**'s ending changes with its job in the sentence; but the **mudaf ilayh** ({{الْمَشْرِقَيْنِ}}, {{هٰذَا}}, {{النَّاسِ}}) always stays in the kasra case."
    },
    {
     "type": "steps",
     "title": {
      "bn": "তিন শব্দের শিকল: {{مٰلِكِ يَوْمِ الدِّينِ}} (১:৪)",
      "en": "A three-word chain: {{مٰلِكِ يَوْمِ الدِّينِ}} (1:4)"
     },
     "items": [
      {
       "title": {
        "bn": "মালিক",
        "en": "Master"
       },
       "ar": "مٰلِكِ",
       "tr": {
        "bn": "মালিকি",
        "en": "māliki"
       },
       "desc": {
        "bn": "মুযাফ — {{اَلْ}} বা তানবীন নেই; আগের {{اللّٰهِ}}-এর সাথে মিল রেখে যের",
        "en": "Mudaf — no {{اَلْ}} or tanween; kasra to match {{اللّٰهِ}} before it"
       }
      },
      {
       "title": {
        "bn": "…দিনের",
        "en": "...of the Day"
       },
       "ar": "يَوْمِ",
       "tr": {
        "bn": "ইয়াওমি",
        "en": "yawmi"
       },
       "desc": {
        "bn": "প্রথমটির মুযাফ ইলাইহি (যের), আবার পরেরটির মুযাফ — তাই {{اَلْ}} নেই",
        "en": "Mudaf ilayh of the first (kasra), and mudaf of the next — so no {{اَلْ}}"
       }
      },
      {
       "title": {
        "bn": "…বিচারের",
        "en": "...of Judgement"
       },
       "ar": "الدِّينِ",
       "tr": {
        "bn": "আদ-দীন",
        "en": "ad-dīn"
       },
       "desc": {
        "bn": "শেষ মুযাফ ইলাইহি — {{اَلْ}} আছে, যের অবস্থা",
        "en": "Final mudaf ilayh — has {{اَلْ}}, kasra case"
       }
      }
     ]
    },
    {
     "type": "text",
     "title": {
      "bn": "জোড়া সর্বনামও ইযাফা!",
      "en": "Attached pronouns are idafa too!"
     },
     "bn": "{{كِتَابُهُ}} (তার বই), {{رَبُّنَا}} (আমাদের রব) — এগুলোও আসলে ইযাফা: প্রথমটি মুযাফ, জোড়া সর্বনামটি মুযাফ ইলাইহি। তাই এখানেও প্রথম শব্দে {{اَلْ}} ও তানবীন থাকে না।",
     "en": "{{كِتَابُهُ}} (his book), {{رَبُّنَا}} (our Lord) — these are idafa too: the noun is the mudaf, the attached pronoun is the mudaf ilayh. That's why the first word drops {{اَلْ}} and tanween."
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "দ্বিবচন বা {{ـُونَ}} বহুবচন মুযাফ হলে শেষের {{ن}} ঝরে পড়ে: {{يَدَانِ}} (দুই হাত) → {{تَبَّتْ يَدَا أَبِي لَهَبٍ}} (ধ্বংস হোক আবু লাহাবের দুই হাত, ১১১:১)।",
     "en": "When a dual or {{ـُونَ}} plural is a mudaf, its final {{ن}} drops off: {{يَدَانِ}} (two hands) → {{تَبَّتْ يَدَا أَبِي لَهَبٍ}} (Perish the two hands of Abu Lahab, 111:1)."
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "{{كِتَابُ اللّٰهِ}} অর্থ কী?",
        "en": "What does {{كِتَابُ اللّٰهِ}} mean?"
       },
       "ar": "كِتَابُ اللّٰهِ",
       "options": [
        {
         "bn": "আল্লাহর কিতাব",
         "en": "the Book of Allah"
        },
        {
         "bn": "কিতাবের আল্লাহ",
         "en": "the Allah of the book"
        },
        {
         "bn": "আল্লাহ একটি কিতাব",
         "en": "Allah is a book"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "মুযাফ ইলাইহি সবসময় কোন অবস্থায় থাকে?",
        "en": "What case is the mudaf ilayh always in?"
       },
       "options": [
        {
         "bn": "পেশ (রফ')",
         "en": "Raf' (damma)"
        },
        {
         "bn": "যের (জার)",
         "en": "Jarr (kasra)"
        },
        {
         "bn": "যবর (নাসব)",
         "en": "Naṣb (fatha)"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "কোনটি সঠিক ইযাফা?",
        "en": "Which idafa is correct?"
       },
       "options": [
        "اَلْبَيْتُ اللّٰهِ",
        "بَيْتٌ اللّٰهِ",
        "بَيْتُ اللّٰهِ"
       ],
       "answer": 2,
       "explain": {
        "bn": "মুযাফে {{اَلْ}} বা তানবীন বসে না।",
        "en": "The mudaf takes no {{اَلْ}} and no tanween."
       }
      },
      {
       "q": {
        "bn": "{{يَوْمِ الدِّينِ}} অর্থ কী?",
        "en": "What does {{يَوْمِ الدِّينِ}} mean?"
       },
       "options": [
        {
         "bn": "বিচারের দিন",
         "en": "the Day of Judgement"
        },
        {
         "bn": "দ্বীনের রাত",
         "en": "the night of religion"
        },
        {
         "bn": "আজকের দিন",
         "en": "today"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{رَبِّ النَّاسِ}} — মুযাফ কোনটি?",
        "en": "In {{رَبِّ النَّاسِ}}, which is the mudaf?"
       },
       "options": [
        "النَّاسِ",
        "رَبِّ"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{تَبَّتْ يَدَا}}-তে {{يَدَانِ}}-এর {{ن}} কোথায় গেল?",
        "en": "In {{تَبَّتْ يَدَا}}, where did the {{ن}} of {{يَدَانِ}} go?"
       },
       "options": [
        {
         "bn": "ভুল করে বাদ পড়েছে",
         "en": "Left out by mistake"
        },
        {
         "bn": "মুযাফ হওয়ায় ঝরে গেছে",
         "en": "Dropped because it is a mudaf"
        },
        {
         "bn": "এটি একবচন",
         "en": "It is singular"
        }
       ],
       "answer": 1
      }
     ]
    }
   ]
  },
  {
   "id": "g-adjectives",
   "icon": "صفة",
   "title": {
    "bn": "বিশেষণ: সিফাত ও মাওসূফের মিল",
    "en": "Adjectives: Noun–Adjective Agreement"
   },
   "subtitle": {
    "bn": "বিশেষণ বিশেষ্যের ছায়া — চারটি জিনিসে হুবহু মিলে চলে",
    "en": "The adjective is the noun's shadow — matching it in four ways"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "মাওসূফ (বিশেষ্য) ও সিফাত (বিশেষণ) চিনবে",
     "en": "Recognise the noun (mawṣūf) and adjective (ṣifa)"
    },
    {
     "bn": "চারটি মিলের নিয়ম শিখবে",
     "en": "Learn the four agreement rules"
    },
    {
     "bn": "{{الصِّرَاطَ الْمُسْتَقِيمَ}}-এর মতো কুরআনি জোড়া বুঝবে",
     "en": "Understand Quranic pairs like {{الصِّرَاطَ الْمُسْتَقِيمَ}}"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "বাংলায় বিশেষণ আগে বসে: ‘সরল পথ’। আরবিতে বিশেষণ বসে **পরে**: {{الصِّرَاطَ الْمُسْتَقِيمَ}} (পথ — সরল)। বিশেষ্যকে বলে **মাওসূফ** ({{مَوْصُوفٌ}}), বিশেষণকে বলে **সিফাত** ({{صِفَةٌ}})।",
     "en": "In English the adjective comes first: 'the straight path'. In Arabic it comes **after**: {{الصِّرَاطَ الْمُسْتَقِيمَ}} (the path — the straight). The noun is the **mawṣūf** ({{مَوْصُوفٌ}}), the adjective is the **ṣifa** ({{صِفَةٌ}})."
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "**সিফাত হলো মাওসূফের ছায়া।** ছায়া যেমন তোমার সব নড়াচড়া নকল করে, সিফাতও মাওসূফের **চারটি** জিনিস হুবহু নকল করে: নির্দিষ্টতা, লিঙ্গ, বচন আর শেষ হরকত।",
     "en": "**The adjective is the noun's shadow.** Just as your shadow copies every move, the adjective copies **four** things from its noun: definiteness, gender, number and case ending."
    },
    {
     "type": "table",
     "title": {
      "bn": "চারটি মিল",
      "en": "The four agreements"
     },
     "head": [
      {
       "bn": "মিল",
       "en": "Agreement"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       {
        "bn": "১. নির্দিষ্টতা",
        "en": "1. Definiteness"
       },
       "كِتَابٌ كَبِيرٌ / اَلْكِتَابُ الْكَبِيرُ",
       {
        "bn": "একটি বড় বই / বড় বইটি",
        "en": "a big book / the big book"
       }
      ],
      [
       {
        "bn": "২. লিঙ্গ",
        "en": "2. Gender"
       },
       "رَجُلٌ صَالِحٌ / اِمْرَأَةٌ صَالِحَةٌ",
       {
        "bn": "একজন নেককার পুরুষ / নারী",
        "en": "a righteous man / woman"
       }
      ],
      [
       {
        "bn": "৩. বচন",
        "en": "3. Number"
       },
       "مُسْلِمَانِ صَالِحَانِ / مُسْلِمُونَ صَالِحُونَ",
       {
        "bn": "দুজন / অনেক নেককার মুসলিম",
        "en": "two / many righteous Muslims"
       }
      ],
      [
       {
        "bn": "৪. শেষ হরকত",
        "en": "4. Case"
       },
       "كِتَابٌ كَبِيرٌ / فِي كِتَابٍ كَبِيرٍ",
       {
        "bn": "একটি বড় বই / একটি বড় বইয়ে",
        "en": "a big book / in a big book"
       }
      ]
     ]
    },
    {
     "type": "examples",
     "title": {
      "bn": "কুরআনের মাওসূফ–সিফাত",
      "en": "Noun–adjective pairs in the Quran"
     },
     "items": [
      {
       "ar": "اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
       "tr": {
        "bn": "ইহদিনাস সিরাত্বাল মুস্তাকীম",
        "en": "ihdinaṣ-ṣirāṭal-mustaqīm"
       },
       "mean": {
        "bn": "আমাদের সরল পথ দেখাও (১:৬)",
        "en": "Guide us to the straight path (1:6)"
       },
       "note": {
        "bn": "দুটোতেই {{اَلْ}}, দুটোই পুং-একবচন, দুটোই যবর (কর্ম)",
        "en": "Both have {{اَلْ}}, both masculine singular, both fatha (object)"
       },
       "hl": "الصِّرَاطَ الْمُسْتَقِيمَ"
      },
      {
       "ar": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
       "tr": {
        "bn": "বিসমিল্লাহির রাহমানির রাহীম",
        "en": "bismillāhir-raḥmānir-raḥīm"
       },
       "mean": {
        "bn": "পরম করুণাময়, অতি দয়ালু আল্লাহর নামে (১:১)",
        "en": "In the name of Allah, the Most Gracious, the Most Merciful (1:1)"
       },
       "note": {
        "bn": "{{اللّٰهِ}} যের, তাই দুই সিফাতও যের",
        "en": "{{اللّٰهِ}} has kasra, so both adjectives have kasra"
       },
       "hl": "الرَّحْمٰنِ الرَّحِيمِ"
      },
      {
       "ar": "وَكِتَابٌ مُبِينٌ",
       "tr": {
        "bn": "ওয়া কিতাবুম মুবীন",
        "en": "wa kitābum-mubīn"
       },
       "mean": {
        "bn": "এবং একটি সুস্পষ্ট কিতাব (৫:১৫)",
        "en": "and a clear Book (5:15)"
       },
       "note": {
        "bn": "দুটোই অনির্দিষ্ট, দুটোই দুই পেশ",
        "en": "Both indefinite, both with ٌ"
       },
       "hl": "كِتَابٌ مُبِينٌ"
      },
      {
       "ar": "وَلَهُمْ عَذَابٌ عَظِيمٌ",
       "tr": {
        "bn": "ওয়া লাহুম আযাবুন আযীম",
        "en": "wa lahum 'adhābun 'aẓīm"
       },
       "mean": {
        "bn": "আর তাদের জন্য আছে মহা শাস্তি (২:৭)",
        "en": "And for them is a great punishment (2:7)"
       },
       "hl": "عَذَابٌ عَظِيمٌ"
      },
      {
       "ar": "فَهُوَ فِي عِيشَةٍ رَاضِيَةٍ",
       "tr": {
        "bn": "ফাহুওয়া ফী ঈশাতির রা-দ্বিয়াহ",
        "en": "fahuwa fī 'īshatir-rāḍiyah"
       },
       "mean": {
        "bn": "সে থাকবে সন্তোষজনক জীবনে (১০১:৭)",
        "en": "He will be in a pleasant life (101:7)"
       },
       "note": {
        "bn": "স্ত্রীলিঙ্গ + অনির্দিষ্ট + যের — চারটিই মিলেছে",
        "en": "Feminine + indefinite + kasra — all four match"
       },
       "hl": "عِيشَةٍ رَاضِيَةٍ"
      },
      {
       "ar": "وَنَزَّلْنَا مِنَ السَّمَاءِ مَاءً مُبَارَكًا",
       "tr": {
        "bn": "ওয়া নাযযালনা মিনাস সামা-ই মা-আম মুবারাকা",
        "en": "wa nazzalnā minas-samā'i mā'am-mubārakā"
       },
       "mean": {
        "bn": "আর আমি আকাশ থেকে বরকতময় পানি বর্ষণ করেছি (৫০:৯)",
        "en": "And We sent down blessed water from the sky (50:9)"
       },
       "note": {
        "bn": "কর্ম, তাই দুটোই দুই যবর",
        "en": "An object, so both take ً"
       },
       "hl": "مَاءً مُبَارَكًا"
      },
      {
       "ar": "فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ",
       "tr": {
        "bn": "ফাওয়াল্লি ওয়াজহাকা শাতরাল মাসজিদিল হারাম",
        "en": "fawalli wajhaka shaṭral-masjidil-ḥarām"
       },
       "mean": {
        "bn": "তোমার মুখ মসজিদুল হারামের দিকে ফেরাও (২:১৪৪)",
        "en": "Turn your face toward al-Masjid al-Haram (2:144)"
       },
       "hl": "الْمَسْجِدِ الْحَرَامِ"
      }
     ]
    },
    {
     "type": "compare",
     "title": {
      "bn": "আবার মনে করি",
      "en": "Remember again"
     },
     "items": [
      {
       "ar": "اَلرَّسُولُ الْكَرِيمُ",
       "label": {
        "bn": "মাওসূফ + সিফাত",
        "en": "Noun + adjective"
       },
       "desc": {
        "bn": "‘সম্মানিত রাসূলটি’ — দুটোতেই {{اَلْ}}",
        "en": "'The noble messenger' — both have {{اَلْ}}"
       }
      },
      {
       "ar": "اَلرَّسُولُ كَرِيمٌ",
       "label": {
        "bn": "মুবতাদা + খবর",
        "en": "Mubtada + khabar"
       },
       "desc": {
        "bn": "‘রাসূলটি সম্মানিত।’ — পূর্ণ বাক্য",
        "en": "'The messenger is noble.' — a full sentence"
       }
      },
      {
       "ar": "رَسُولُ اللّٰهِ",
       "label": {
        "bn": "ইযাফা",
        "en": "Idafa"
       },
       "desc": {
        "bn": "‘আল্লাহর রাসূল’ — প্রথমটিতে {{اَلْ}} নেই, দ্বিতীয়টি যের",
        "en": "'Messenger of Allah' — 1st has no {{اَلْ}}, 2nd has kasra"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "সর্বনামযুক্ত শব্দ নির্দিষ্ট, তাই তার সিফাতে {{اَلْ}} বসে: {{اِقْرَأْ وَرَبُّكَ الْأَكْرَمُ}} — পড়ো, আর তোমার রব মহা সম্মানিত (৯৬:৩)। এখানে {{رَبُّكَ}} নির্দিষ্ট, তাই {{الْأَكْرَمُ}}।",
     "en": "A word with a pronoun is definite, so its adjective takes {{اَلْ}}: {{اِقْرَأْ وَرَبُّكَ الْأَكْرَمُ}} — Read, and your Lord is the Most Generous (96:3). {{رَبُّكَ}} is definite, hence {{الْأَكْرَمُ}}."
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "মজার ব্যতিক্রম: মানুষ নয় এমন জিনিসের বহুবচনের সিফাত প্রায়ই **স্ত্রী-একবচন** হয়: {{فِيهَا سُرُرٌ مَرْفُوعَةٌ}} — সেখানে আছে উঁচু উঁচু আসন (৮৮:১৩)। {{سُرُرٌ}} বহুবচন, কিন্তু {{مَرْفُوعَةٌ}} একবচন-স্ত্রী!",
     "en": "A fun exception: plurals of non-human things often take a **feminine singular** adjective: {{فِيهَا سُرُرٌ مَرْفُوعَةٌ}} — in it are raised couches (88:13). {{سُرُرٌ}} is plural, but {{مَرْفُوعَةٌ}} is feminine singular!"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "আরবিতে বিশেষণ কোথায় বসে?",
        "en": "Where does the adjective go in Arabic?"
       },
       "options": [
        {
         "bn": "বিশেষ্যের আগে",
         "en": "Before the noun"
        },
        {
         "bn": "বাক্যের শেষে",
         "en": "At the end of the sentence"
        },
        {
         "bn": "বিশেষ্যের পরে",
         "en": "After the noun"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "‘একটি বড় ঘর’ — সঠিক কোনটি?",
        "en": "Which correctly says 'a big house'?"
       },
       "options": [
        "بَيْتٌ كَبِيرٌ",
        "بَيْتٌ الْكَبِيرُ",
        "اَلْبَيْتُ كَبِيرٌ"
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{نَارٌ}}-এর সাথে কোন বিশেষণ সঠিক?",
        "en": "Which adjective fits {{نَارٌ}}?"
       },
       "options": [
        "حَامٍ",
        "حَامِيَةٌ",
        "اَلْحَامِيَةُ"
       ],
       "answer": 1,
       "explain": {
        "bn": "{{نَارٌ}} মুআন্নাস ও অনির্দিষ্ট — {{نَارٌ حَامِيَةٌ}} (১০১:১১)।",
        "en": "{{نَارٌ}} is feminine and indefinite — {{نَارٌ حَامِيَةٌ}} (101:11)."
       }
      },
      {
       "q": {
        "bn": "{{الصِّرَاطَ الْمُسْتَقِيمَ}} — দুটো শব্দের শেষে যবর কেন?",
        "en": "Why do both words in {{الصِّرَاطَ الْمُسْتَقِيمَ}} end in fatha?"
       },
       "options": [
        {
         "bn": "এরা মুবতাদা ও খবর",
         "en": "They are mubtada and khabar"
        },
        {
         "bn": "এরা ইযাফা",
         "en": "They are an idafa"
        },
        {
         "bn": "এরা {{اِهْدِنَا}}-এর কর্ম, আর সিফাত মাওসূফের হরকত নকল করে",
         "en": "It's the object of {{اِهْدِنَا}}, and the adjective copies the noun's case"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "{{اَلرَّسُولُ كَرِيمٌ}} কী?",
        "en": "What is {{اَلرَّسُولُ كَرِيمٌ}}?"
       },
       "options": [
        {
         "bn": "রাসূলটি সম্মানিত। (বাক্য)",
         "en": "The messenger is noble. (sentence)"
        },
        {
         "bn": "সম্মানিত রাসূলটি (শব্দগুচ্ছ)",
         "en": "the noble messenger (phrase)"
        },
        {
         "bn": "আল্লাহর রাসূল",
         "en": "the Messenger of Allah"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "সিফাত মাওসূফের সাথে কয়টি জিনিসে মেলে?",
        "en": "In how many things does the adjective match the noun?"
       },
       "options": [
        {
         "bn": "দুটি",
         "en": "Two"
        },
        {
         "bn": "চারটি",
         "en": "Four"
        },
        {
         "bn": "তিনটি",
         "en": "Three"
        }
       ],
       "answer": 1
      }
     ]
    }
   ]
  },
  {
   "id": "g-past",
   "icon": "فعل",
   "title": {
    "bn": "অতীত কালের ক্রিয়া (ফে'লে মাযী)",
    "en": "The Past-Tense Verb (al-Madi)"
   },
   "subtitle": {
    "bn": "{{كَتَبَ}} — সে লিখেছে; শেষাংশ বলে দেয় কে করেছে",
    "en": "{{كَتَبَ}} — he wrote; the ending tells you who did it"
   },
   "minutes": 18,
   "goals": [
    {
     "bn": "তিন অক্ষরের মূল (রুট) ও {{فَعَلَ}} ছাঁচ বুঝবে",
     "en": "Understand the 3-letter root and the {{فَعَلَ}} pattern"
    },
    {
     "bn": "{{كَتَبَ}}-এর ১৪টি রূপ চিনবে",
     "en": "Recognise all 14 forms of {{كَتَبَ}}"
    },
    {
     "bn": "শেষাংশ দেখেই কর্তা চিনবে: {{ـتُ}}, {{ـنَا}}, {{ـوا}}…",
     "en": "Spot the doer from the ending: {{ـتُ}}, {{ـنَا}}, {{ـوا}}..."
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "বাংলায় ‘লিখল, লিখলাম, লিখলে’ — একই কাজ, কিন্তু কে করেছে তা অনুযায়ী শেষটা বদলায়। আরবিতেও তাই! অতীত কালের ক্রিয়াকে বলে **ফে'লে মাযী** ({{اَلْفِعْلُ الْمَاضِي}})। মূল রূপটি হলো ‘সে (একজন পুরুষ) করেছে’: {{كَتَبَ}} = সে লিখেছে।",
     "en": "In English 'wrote' stays the same for everyone, but Arabic changes the ending depending on who did it! The past-tense verb is called **al-fi'l al-māḍī** ({{اَلْفِعْلُ الْمَاضِي}}). Its basic form means 'he did': {{كَتَبَ}} = he wrote."
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "বেশিরভাগ আরবি শব্দ তিন অক্ষরের **মূল** (রুট) থেকে আসে। {{ك ت ب}} মূলে ‘লেখা’র ভাব: {{كَتَبَ}} (লিখেছে), {{كِتَابٌ}} (বই), {{كَاتِبٌ}} (লেখক)। ব্যাকরণবিদরা ছাঁচ বোঝাতে {{ف ع ل}} ব্যবহার করেন — তাই {{فَعَلَ}} মানে ‘সে করেছে’।",
     "en": "Most Arabic words come from a 3-letter **root**. The root {{ك ت ب}} carries the idea of 'writing': {{كَتَبَ}} (wrote), {{كِتَابٌ}} (book), {{كَاتِبٌ}} (writer). Grammarians use {{ف ع ل}} as the template — so {{فَعَلَ}} means 'he did'."
    },
    {
     "type": "table",
     "title": {
      "bn": "{{كَتَبَ}}-এর ১৪টি রূপ",
      "en": "The 14 forms of {{كَتَبَ}}"
     },
     "head": [
      {
       "bn": "কে",
       "en": "Who"
      },
      {
       "bn": "ক্রিয়া",
       "en": "Verb"
      },
      {
       "bn": "উচ্চারণ",
       "en": "Say"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "هُوَ",
       "كَتَبَ",
       {
        "bn": "কাতাবা",
        "en": "kataba"
       },
       {
        "bn": "সে লিখেছে",
        "en": "he wrote"
       }
      ],
      [
       "هُمَا",
       "كَتَبَا",
       {
        "bn": "কাতাবা (লম্বা)",
        "en": "katabā"
       },
       {
        "bn": "তারা দুজন লিখেছে",
        "en": "they two wrote"
       }
      ],
      [
       "هُمْ",
       "كَتَبُوا",
       {
        "bn": "কাতাবূ",
        "en": "katabū"
       },
       {
        "bn": "তারা লিখেছে",
        "en": "they wrote"
       }
      ],
      [
       "هِيَ",
       "كَتَبَتْ",
       {
        "bn": "কাতাবাত",
        "en": "katabat"
       },
       {
        "bn": "সে (নারী) লিখেছে",
        "en": "she wrote"
       }
      ],
      [
       "هُمَا",
       "كَتَبَتَا",
       {
        "bn": "কাতাবাতা",
        "en": "katabatā"
       },
       {
        "bn": "তারা দুজন (নারী) লিখেছে",
        "en": "they two (f) wrote"
       }
      ],
      [
       "هُنَّ",
       "كَتَبْنَ",
       {
        "bn": "কাতাবনা",
        "en": "katabna"
       },
       {
        "bn": "তারা (নারীরা) লিখেছে",
        "en": "they (f) wrote"
       }
      ],
      [
       "أَنْتَ",
       "كَتَبْتَ",
       {
        "bn": "কাতাবতা",
        "en": "katabta"
       },
       {
        "bn": "তুমি লিখেছ",
        "en": "you wrote"
       }
      ],
      [
       "أَنْتُمَا",
       "كَتَبْتُمَا",
       {
        "bn": "কাতাবতুমা",
        "en": "katabtumā"
       },
       {
        "bn": "তোমরা দুজন লিখেছ",
        "en": "you two wrote"
       }
      ],
      [
       "أَنْتُمْ",
       "كَتَبْتُمْ",
       {
        "bn": "কাতাবতুম",
        "en": "katabtum"
       },
       {
        "bn": "তোমরা লিখেছ",
        "en": "you (all) wrote"
       }
      ],
      [
       "أَنْتِ",
       "كَتَبْتِ",
       {
        "bn": "কাতাবতি",
        "en": "katabti"
       },
       {
        "bn": "তুমি (নারী) লিখেছ",
        "en": "you (f) wrote"
       }
      ],
      [
       "أَنْتُمَا",
       "كَتَبْتُمَا",
       {
        "bn": "কাতাবতুমা",
        "en": "katabtumā"
       },
       {
        "bn": "তোমরা দুজন (নারী) লিখেছ",
        "en": "you two (f) wrote"
       }
      ],
      [
       "أَنْتُنَّ",
       "كَتَبْتُنَّ",
       {
        "bn": "কাতাবতুন্না",
        "en": "katabtunna"
       },
       {
        "bn": "তোমরা (নারীরা) লিখেছ",
        "en": "you (f, all) wrote"
       }
      ],
      [
       "أَنَا",
       "كَتَبْتُ",
       {
        "bn": "কাতাবতু",
        "en": "katabtu"
       },
       {
        "bn": "আমি লিখেছি",
        "en": "I wrote"
       }
      ],
      [
       "نَحْنُ",
       "كَتَبْنَا",
       {
        "bn": "কাতাবনা (লম্বা)",
        "en": "katabnā"
       },
       {
        "bn": "আমরা লিখেছি",
        "en": "we wrote"
       }
      ]
     ]
    },
    {
     "type": "table",
     "title": {
      "bn": "সবচেয়ে কাজের ৬টি শেষাংশ",
      "en": "The 6 most useful endings"
     },
     "head": [
      {
       "bn": "শেষাংশ",
       "en": "Ending"
      },
      {
       "bn": "কে করেছে",
       "en": "Who did it"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      }
     ],
     "rows": [
      [
       "ـتُ",
       {
        "bn": "আমি",
        "en": "I"
       },
       "كَتَبْتُ"
      ],
      [
       "ـنَا",
       {
        "bn": "আমরা",
        "en": "we"
       },
       "كَتَبْنَا"
      ],
      [
       "ـتَ",
       {
        "bn": "তুমি (পুং)",
        "en": "you (m)"
       },
       "كَتَبْتَ"
      ],
      [
       "ـتُمْ",
       {
        "bn": "তোমরা",
        "en": "you all"
       },
       "كَتَبْتُمْ"
      ],
      [
       "ـتْ",
       {
        "bn": "সে (নারী)",
        "en": "she"
       },
       "كَتَبَتْ"
      ],
      [
       "ـُوا",
       {
        "bn": "তারা",
        "en": "they"
       },
       "كَتَبُوا"
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "মনে রাখো: **‘তু’-তে তুমি নও, আমি!** {{كَتَبْتُ}} (পেশ) = আমি লিখেছি; {{كَتَبْتَ}} (যবর) = তুমি লিখেছ। আর {{ـتْ}} (সাকিন) = সে-নারী। একটা হরকতের পার্থক্যে অর্থ পুরো বদলে যায়!",
     "en": "Remember: **'-tu' is me, not you!** {{كَتَبْتُ}} (damma) = I wrote; {{كَتَبْتَ}} (fatha) = you wrote. And {{ـتْ}} (sukun) = she. One vowel changes the whole meaning!"
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "{{كَتَبُوا}}-এর শেষের আলিফ শুধু লেখা হয়, পড়া হয় না: ‘কাতাবূ’। এই আলিফ দেখলেই বুঝবে — ‘তারা’ করেছে।",
     "en": "The final alif in {{كَتَبُوا}} is written but not read: 'katabū'. When you see this alif, think 'they' did it."
    },
    {
     "type": "practice",
     "bn": "{{فَتَحَ}} (খুলেছে) দিয়ে একই নিয়মে পড়ো।",
     "en": "Read the same pattern with {{فَتَحَ}} (opened).",
     "lines": [
      "فَتَحَ فَتَحَا فَتَحُوا",
      "فَتَحَتْ فَتَحَتَا فَتَحْنَ",
      "فَتَحْتَ فَتَحْتُمَا فَتَحْتُمْ",
      "فَتَحْتِ فَتَحْتُنَّ",
      "فَتَحْتُ فَتَحْنَا"
     ]
    },
    {
     "type": "examples",
     "title": {
      "bn": "কুরআনে অতীত ক্রিয়া",
      "en": "Past verbs in the Quran"
     },
     "items": [
      {
       "ar": "خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ",
       "tr": {
        "bn": "খালাকাল ইনসানা মিন আলাক",
        "en": "khalaqal-insāna min 'alaq"
       },
       "mean": {
        "bn": "তিনি মানুষকে সৃষ্টি করেছেন জমাট রক্ত থেকে (৯৬:২)",
        "en": "He created man from a clinging clot (96:2)"
       },
       "note": {
        "bn": "{{هُوَ}} রূপ — কোনো শেষাংশ নেই",
        "en": "{{هُوَ}} form — no ending"
       },
       "hl": "خَلَقَ"
      },
      {
       "ar": "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
       "tr": {
        "bn": "সিরাত্বাল্লাযীনা আন'আমতা আলাইহিম",
        "en": "ṣirāṭal-ladhīna an'amta 'alayhim"
       },
       "mean": {
        "bn": "যাদের তুমি অনুগ্রহ করেছ, তাদের পথ (১:৭)",
        "en": "The path of those You have blessed (1:7)"
       },
       "note": {
        "bn": "{{ـتَ}} = তুমি",
        "en": "{{ـتَ}} = you"
       },
       "hl": "أَنْعَمْتَ"
      },
      {
       "ar": "وَقَالُوا سَمِعْنَا وَأَطَعْنَا",
       "tr": {
        "bn": "ওয়া কালূ সামি'না ওয়া আত্বা'না",
        "en": "wa qālū sami'nā wa aṭa'nā"
       },
       "mean": {
        "bn": "আর তারা বলল: আমরা শুনলাম ও মানলাম (২:২৮৫)",
        "en": "And they said: we hear and we obey (2:285)"
       },
       "note": {
        "bn": "{{قَالُوا}} = তারা বলল ({{ـُوا}}), {{سَمِعْنَا}} = আমরা শুনলাম ({{ـنَا}})",
        "en": "{{قَالُوا}} = they said ({{ـُوا}}), {{سَمِعْنَا}} = we heard ({{ـنَا}})"
       },
       "hl": "سَمِعْنَا"
      },
      {
       "ar": "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي",
       "tr": {
        "bn": "রব্বি ইন্নী যালামতু নাফসী",
        "en": "rabbi innī ẓalamtu nafsī"
       },
       "mean": {
        "bn": "হে আমার রব, আমি নিজের উপর জুলুম করেছি (২৮:১৬)",
        "en": "My Lord, I have wronged myself (28:16)"
       },
       "note": {
        "bn": "{{ـتُ}} = আমি",
        "en": "{{ـتُ}} = I"
       },
       "hl": "ظَلَمْتُ"
      },
      {
       "ar": "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ",
       "tr": {
        "bn": "ইল্লাল্লাযীনা আ-মানূ ওয়া আমিলুস সা-লিহাত",
        "en": "illal-ladhīna āmanū wa 'amiluṣ-ṣāliḥāt"
       },
       "mean": {
        "bn": "তবে তারা নয়, যারা ঈমান এনেছে ও সৎকাজ করেছে (১০৩:৩)",
        "en": "Except those who believed and did righteous deeds (103:3)"
       },
       "note": {
        "bn": "{{ـُوا}} = তারা",
        "en": "{{ـُوا}} = they"
       },
       "hl": "آمَنُوا"
      },
      {
       "ar": "كَذَّبَتْ ثَمُودُ بِطَغْوَاهَا",
       "tr": {
        "bn": "কাযযাবাত সামূদু বিত্বাগওয়া-হা",
        "en": "kadhdhabat thamūdu biṭaghwāhā"
       },
       "mean": {
        "bn": "সামূদ জাতি অবাধ্যতার কারণে অস্বীকার করেছিল (৯১:১১)",
        "en": "Thamud denied out of their transgression (91:11)"
       },
       "note": {
        "bn": "{{ـتْ}} — জাতিকে স্ত্রীলিঙ্গ ধরা হয়েছে",
        "en": "{{ـتْ}} — the tribe is treated as feminine"
       },
       "hl": "كَذَّبَتْ"
      },
      {
       "ar": "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ",
       "tr": {
        "bn": "ইন্না আনযালনা-হু ফী লাইলাতিল কদর",
        "en": "innā anzalnāhu fī laylatil-qadr"
       },
       "mean": {
        "bn": "নিশ্চয়ই আমি এটি কদরের রাতে নাযিল করেছি (৯৭:১)",
        "en": "Indeed We sent it down in the Night of Decree (97:1)"
       },
       "note": {
        "bn": "{{أَنْزَلْ + نَا + هُ}} = নাযিল করলাম + আমরা + এটিকে",
        "en": "{{أَنْزَلْ + نَا + هُ}} = sent down + We + it"
       },
       "hl": "أَنْزَلْنَاهُ"
      }
     ]
    },
    {
     "type": "text",
     "title": {
      "bn": "ক্রিয়াবাচক বাক্য: ক্রিয়া → কর্তা → কর্ম",
      "en": "The verbal sentence: verb → doer → object"
     },
     "bn": "ফে'ল দিয়ে শুরু হওয়া বাক্যকে বলে **জুমলা ফে'লিয়্যা**। ক্রম সাধারণত: ক্রিয়া, তারপর **কর্তা** (পেশ), তারপর **কর্ম** (যবর)। যেমন {{وَعَصٰى آدَمُ رَبَّهُ}} = আর আদম তার রবের অবাধ্য হলেন (২০:১২১) — {{آدَمُ}} পেশ (কর্তা), {{رَبَّهُ}} যবর (কর্ম)।",
     "en": "A sentence starting with a verb is a **verbal sentence**. The usual order: verb, then **doer** (damma), then **object** (fatha). E.g. {{وَعَصٰى آدَمُ رَبَّهُ}} = And Adam disobeyed his Lord (20:121) — {{آدَمُ}} has damma (doer), {{رَبَّهُ}} has fatha (object)."
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "এক শব্দেই পুরো বাক্য! {{رَزَقْنَاهُمْ}} = ‘আমরা তাদেরকে রিজিক দিয়েছি’ (২:৩) — ক্রিয়া {{رَزَقْ}} + কর্তা {{نَا}} + কর্ম {{هُمْ}}। বাংলায় চার শব্দ, আরবিতে এক!",
     "en": "A whole sentence in one word! {{رَزَقْنَاهُمْ}} = 'We provided them' (2:3) — verb {{رَزَقْ}} + doer {{نَا}} + object {{هُمْ}}. Three words in English, one in Arabic!"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "{{كَتَبْتُ}} অর্থ কী?",
        "en": "What does {{كَتَبْتُ}} mean?"
       },
       "ar": "كَتَبْتُ",
       "options": [
        {
         "bn": "তুমি লিখেছ",
         "en": "you wrote"
        },
        {
         "bn": "আমি লিখেছি",
         "en": "I wrote"
        },
        {
         "bn": "সে (নারী) লিখেছে",
         "en": "she wrote"
        },
        {
         "bn": "তারা লিখেছে",
         "en": "they wrote"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "‘আমরা খুলেছি’ কোনটি?",
        "en": "Which means 'we opened'?"
       },
       "options": [
        "فَتَحُوا",
        "فَتَحْتُمْ",
        "فَتَحْنَا",
        "فَتَحَتْ"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "{{سَمِعْنَا}}-তে কে শুনেছে?",
        "en": "In {{سَمِعْنَا}}, who heard?"
       },
       "ar": "سَمِعْنَا",
       "options": [
        {
         "bn": "আমি",
         "en": "I"
        },
        {
         "bn": "তারা",
         "en": "they"
        },
        {
         "bn": "আমরা",
         "en": "we"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "{{كَذَّبَتْ}}-এর শেষের {{ـتْ}} কী বোঝায়?",
        "en": "What does the final {{ـتْ}} in {{كَذَّبَتْ}} show?"
       },
       "options": [
        {
         "bn": "সে (নারী / স্ত্রীলিঙ্গ কর্তা)",
         "en": "she (a feminine doer)"
        },
        {
         "bn": "তুমি",
         "en": "you"
        },
        {
         "bn": "আমি",
         "en": "I"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{آمَنُوا}} অর্থ কী?",
        "en": "What does {{آمَنُوا}} mean?"
       },
       "ar": "آمَنُوا",
       "options": [
        {
         "bn": "সে ঈমান এনেছে",
         "en": "he believed"
        },
        {
         "bn": "তারা ঈমান এনেছে",
         "en": "they believed"
        },
        {
         "bn": "ঈমান আনো",
         "en": "believe!"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{كَتَبَ}}, {{كِتَابٌ}}, {{كَاتِبٌ}} — এদের মূল (রুট) কী?",
        "en": "What root do {{كَتَبَ}}, {{كِتَابٌ}}, {{كَاتِبٌ}} share?"
       },
       "options": [
        "ف ع ل",
        "ك ب ر",
        "ك ت ب"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "{{وَعَصٰى آدَمُ رَبَّهُ}} — কর্তা কে?",
        "en": "In {{وَعَصٰى آدَمُ رَبَّهُ}}, who is the doer?"
       },
       "options": [
        "آدَمُ",
        "عَصٰى",
        "رَبَّهُ"
       ],
       "answer": 0,
       "explain": {
        "bn": "কর্তা পেশ পায়: {{آدَمُ}}; কর্ম যবর পায়: {{رَبَّهُ}}।",
        "en": "The doer takes damma: {{آدَمُ}}; the object takes fatha: {{رَبَّهُ}}."
       }
      }
     ]
    }
   ]
  },
  {
   "id": "g-present",
   "icon": "يَـ",
   "title": {
    "bn": "বর্তমান-ভবিষ্যৎ, আদেশ ও নিষেধ",
    "en": "Present/Future, Command and Prohibition"
   },
   "subtitle": {
    "bn": "{{يَفْعَلُ}} — সামনে চার অক্ষর {{أ ن ي ت}} বসিয়ে ক্রিয়া",
    "en": "{{يَفْعَلُ}} — verbs made with four front letters {{أ ن ي ت}}"
   },
   "minutes": 20,
   "goals": [
    {
     "bn": "ফে'লে মুযারি' (বর্তমান/ভবিষ্যৎ) চিনবে",
     "en": "Recognise the present/future verb (al-mudari')"
    },
    {
     "bn": "{{سَـ}} ও {{سَوْفَ}} দিয়ে ভবিষ্যৎ বুঝবে",
     "en": "Understand the future with {{سَـ}} and {{سَوْفَ}}"
    },
    {
     "bn": "আদেশ ({{اُكْتُبْ}}) ও নিষেধ ({{لَا تَكْتُبْ}}) বানাতে ও চিনতে পারবে",
     "en": "Form and recognise commands ({{اُكْتُبْ}}) and prohibitions ({{لَا تَكْتُبْ}})"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "অতীত ক্রিয়ায় পরিবর্তন হতো **শেষে**। বর্তমান ক্রিয়ায় পরিবর্তন হয় মূলত **শুরুতে**! এই ক্রিয়াকে বলে **ফে'লে মুযারি'** ({{اَلْفِعْلُ الْمُضَارِعُ}}) — এটি ‘করে / করছে’ আবার ‘করবে’ দুটোই বোঝাতে পারে। মূল রূপ: {{يَكْتُبُ}} = সে লেখে / লিখছে।",
     "en": "In the past tense, the change came at the **end**. In the present tense, the change mainly comes at the **front**! This verb is called **al-fi'l al-muḍāri'** ({{اَلْفِعْلُ الْمُضَارِعُ}}) — it can mean 'does / is doing' and also 'will do'. Basic form: {{يَكْتُبُ}} = he writes / is writing."
    },
    {
     "type": "table",
     "title": {
      "bn": "চারটি সামনের অক্ষর",
      "en": "The four front letters"
     },
     "head": [
      {
       "bn": "অক্ষর",
       "en": "Prefix"
      },
      {
       "bn": "কে",
       "en": "Who"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "أَ",
       {
        "bn": "আমি",
        "en": "I"
       },
       "أَكْتُبُ",
       {
        "bn": "আমি লিখি",
        "en": "I write"
       }
      ],
      [
       "نَ",
       {
        "bn": "আমরা",
        "en": "we"
       },
       "نَكْتُبُ",
       {
        "bn": "আমরা লিখি",
        "en": "we write"
       }
      ],
      [
       "يَ",
       {
        "bn": "সে (পুং) / তারা",
        "en": "he / they"
       },
       "يَكْتُبُ",
       {
        "bn": "সে লেখে",
        "en": "he writes"
       }
      ],
      [
       "تَ",
       {
        "bn": "তুমি / সে (নারী)",
        "en": "you / she"
       },
       "تَكْتُبُ",
       {
        "bn": "তুমি লেখো / সে (নারী) লেখে",
        "en": "you write / she writes"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "চারটি অক্ষর মিলিয়ে একটা শব্দ বানাও: **{{أَنَيْتُ}}** (আনাইতু) — অ = আমি, ন = আমরা (নাহনু), ই = সে (হুয়া), ত = তুমি। মুযারি' চেনার চাবি এই চার অক্ষর!",
     "en": "Put the four letters together into one word: **{{أَنَيْتُ}}** (anaytu) — a = I (anā), n = we (naḥnu), y = he, t = you. These four letters are the key to spotting a present verb!"
    },
    {
     "type": "table",
     "title": {
      "bn": "{{يَكْتُبُ}}-এর ১৪টি রূপ",
      "en": "The 14 forms of {{يَكْتُبُ}}"
     },
     "head": [
      {
       "bn": "কে",
       "en": "Who"
      },
      {
       "bn": "ক্রিয়া",
       "en": "Verb"
      },
      {
       "bn": "উচ্চারণ",
       "en": "Say"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "هُوَ",
       "يَكْتُبُ",
       {
        "bn": "ইয়াকতুবু",
        "en": "yaktubu"
       },
       {
        "bn": "সে লেখে",
        "en": "he writes"
       }
      ],
      [
       "هُمَا",
       "يَكْتُبَانِ",
       {
        "bn": "ইয়াকতুবানি",
        "en": "yaktubāni"
       },
       {
        "bn": "তারা দুজন লেখে",
        "en": "they two write"
       }
      ],
      [
       "هُمْ",
       "يَكْتُبُونَ",
       {
        "bn": "ইয়াকতুবূনা",
        "en": "yaktubūna"
       },
       {
        "bn": "তারা লেখে",
        "en": "they write"
       }
      ],
      [
       "هِيَ",
       "تَكْتُبُ",
       {
        "bn": "তাকতুবু",
        "en": "taktubu"
       },
       {
        "bn": "সে (নারী) লেখে",
        "en": "she writes"
       }
      ],
      [
       "هُمَا",
       "تَكْتُبَانِ",
       {
        "bn": "তাকতুবানি",
        "en": "taktubāni"
       },
       {
        "bn": "তারা দুজন (নারী) লেখে",
        "en": "they two (f) write"
       }
      ],
      [
       "هُنَّ",
       "يَكْتُبْنَ",
       {
        "bn": "ইয়াকতুবনা",
        "en": "yaktubna"
       },
       {
        "bn": "তারা (নারীরা) লেখে",
        "en": "they (f) write"
       }
      ],
      [
       "أَنْتَ",
       "تَكْتُبُ",
       {
        "bn": "তাকতুবু",
        "en": "taktubu"
       },
       {
        "bn": "তুমি লেখো",
        "en": "you write"
       }
      ],
      [
       "أَنْتُمَا",
       "تَكْتُبَانِ",
       {
        "bn": "তাকতুবানি",
        "en": "taktubāni"
       },
       {
        "bn": "তোমরা দুজন লেখো",
        "en": "you two write"
       }
      ],
      [
       "أَنْتُمْ",
       "تَكْتُبُونَ",
       {
        "bn": "তাকতুবূনা",
        "en": "taktubūna"
       },
       {
        "bn": "তোমরা লেখো",
        "en": "you (all) write"
       }
      ],
      [
       "أَنْتِ",
       "تَكْتُبِينَ",
       {
        "bn": "তাকতুবীনা",
        "en": "taktubīna"
       },
       {
        "bn": "তুমি (নারী) লেখো",
        "en": "you (f) write"
       }
      ],
      [
       "أَنْتُمَا",
       "تَكْتُبَانِ",
       {
        "bn": "তাকতুবানি",
        "en": "taktubāni"
       },
       {
        "bn": "তোমরা দুজন (নারী) লেখো",
        "en": "you two (f) write"
       }
      ],
      [
       "أَنْتُنَّ",
       "تَكْتُبْنَ",
       {
        "bn": "তাকতুবনা",
        "en": "taktubna"
       },
       {
        "bn": "তোমরা (নারীরা) লেখো",
        "en": "you (f, all) write"
       }
      ],
      [
       "أَنَا",
       "أَكْتُبُ",
       {
        "bn": "আকতুবু",
        "en": "aktubu"
       },
       {
        "bn": "আমি লিখি",
        "en": "I write"
       }
      ],
      [
       "نَحْنُ",
       "نَكْتُبُ",
       {
        "bn": "নাকতুবু",
        "en": "naktubu"
       },
       {
        "bn": "আমরা লিখি",
        "en": "we write"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "শেষে {{ـُونَ}} দেখলে = ‘তারা’ বা ‘তোমরা’ (বহু)। সামনে {{يَـ}} থাকলে ‘তারা’ ({{يَعْلَمُونَ}}), সামনে {{تَـ}} থাকলে ‘তোমরা’ ({{تَعْلَمُونَ}})। কুরআনে এই দুটো রূপ সবচেয়ে বেশি আসে!",
     "en": "An ending of {{ـُونَ}} = 'they' or 'you all'. With {{يَـ}} in front it's 'they' ({{يَعْلَمُونَ}}); with {{تَـ}} it's 'you all' ({{تَعْلَمُونَ}}). These two forms are the most common in the Quran!"
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "মাঝের অক্ষরের হরকত সব ক্রিয়ায় এক নয়: {{يَكْتُبُ}} (পেশ), {{يَفْتَحُ}} (যবর), {{يَضْرِبُ}} (যের)। এটা অভিধান দেখে বা শুনে শিখতে হয়।",
     "en": "The middle vowel isn't the same for every verb: {{يَكْتُبُ}} (u), {{يَفْتَحُ}} (a), {{يَضْرِبُ}} (i). You learn it from a dictionary or by hearing it."
    },
    {
     "type": "examples",
     "title": {
      "bn": "কুরআনে মুযারি'",
      "en": "Present verbs in the Quran"
     },
     "items": [
      {
       "ar": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
       "tr": {
        "bn": "ইয়্যাকা না'বুদু ওয়া ইয়্যাকা নাসতা'ঈন",
        "en": "iyyāka na'budu wa iyyāka nasta'īn"
       },
       "mean": {
        "bn": "আমরা শুধু তোমারই ইবাদত করি এবং শুধু তোমারই কাছে সাহায্য চাই (১:৫)",
        "en": "You alone we worship and You alone we ask for help (1:5)"
       },
       "note": {
        "bn": "{{نَـ}} = আমরা",
        "en": "{{نَـ}} = we"
       },
       "hl": "نَعْبُدُ"
      },
      {
       "ar": "لَا أَعْبُدُ مَا تَعْبُدُونَ",
       "tr": {
        "bn": "লা আ'বুদু মা তা'বুদূন",
        "en": "lā a'budu mā ta'budūn"
       },
       "mean": {
        "bn": "তোমরা যার ইবাদত করো, আমি তার ইবাদত করি না (১০৯:২)",
        "en": "I do not worship what you worship (109:2)"
       },
       "note": {
        "bn": "{{أَعْبُدُ}} = আমি ({{أَ}}), {{تَعْبُدُونَ}} = তোমরা ({{تَـ...ـُونَ}})",
        "en": "{{أَعْبُدُ}} = I ({{أَ}}), {{تَعْبُدُونَ}} = you all ({{تَـ...ـُونَ}})"
       },
       "hl": "تَعْبُدُونَ"
      },
      {
       "ar": "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ",
       "tr": {
        "bn": "আল্লাযীনা ইউ'মিনূনা বিল গাইবি ওয়া ইউকীমূনাস সালাহ",
        "en": "alladhīna yu'minūna bil-ghaybi wa yuqīmūnaṣ-ṣalāh"
       },
       "mean": {
        "bn": "যারা অদৃশ্যে বিশ্বাস করে এবং সালাত কায়েম করে (২:৩)",
        "en": "Who believe in the unseen and establish prayer (2:3)"
       },
       "note": {
        "bn": "{{يُـ...ـُونَ}} = তারা",
        "en": "{{يُـ...ـُونَ}} = they"
       },
       "hl": "يُؤْمِنُونَ"
      },
      {
       "ar": "فَأَيْنَ تَذْهَبُونَ",
       "tr": {
        "bn": "ফাআইনা তাযহাবূন",
        "en": "fa-ayna tadh-habūn"
       },
       "mean": {
        "bn": "তাহলে তোমরা কোথায় যাচ্ছ? (৮১:২৬)",
        "en": "So where are you going? (81:26)"
       },
       "hl": "تَذْهَبُونَ"
      },
      {
       "ar": "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
       "tr": {
        "bn": "ফাবিআইয়ি আ-লা-ই রব্বিকুমা তুকাযযিবান",
        "en": "fabi-ayyi ālā'i rabbikumā tukadhdhibān"
       },
       "mean": {
        "bn": "অতএব তোমরা দুজন তোমাদের রবের কোন কোন নিয়ামত অস্বীকার করবে? (৫৫:১৩)",
        "en": "So which of the favours of your Lord will you two deny? (55:13)"
       },
       "note": {
        "bn": "দ্বিবচন! {{تُـ...ـَانِ}} = তোমরা দুজন (মানুষ ও জিন)",
        "en": "A dual! {{تُـ...ـَانِ}} = you two (mankind and jinn)"
       },
       "hl": "تُكَذِّبَانِ"
      }
     ]
    },
    {
     "type": "table",
     "title": {
      "bn": "ভবিষ্যৎ: {{سَـ}} ও {{سَوْفَ}}",
      "en": "The future: {{سَـ}} and {{سَوْفَ}}"
     },
     "head": [
      {
       "bn": "শব্দ",
       "en": "Word"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      },
      {
       "bn": "কুরআনের উদাহরণ",
       "en": "Quranic example"
      }
     ],
     "rows": [
      [
       "سَـ",
       {
        "bn": "শীঘ্রই (কাছের ভবিষ্যৎ)",
        "en": "soon (near future)"
       },
       "سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ (٢:١٤٢)"
      ],
      [
       "سَوْفَ",
       {
        "bn": "অচিরেই / পরে (একটু দূরের ভবিষ্যৎ)",
        "en": "will (a bit further future)"
       },
       "كَلَّا سَوْفَ تَعْلَمُونَ (١٠٢:٣)"
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "{{سَـ}} ছোট, তাই ভবিষ্যৎও কাছে; {{سَوْفَ}} লম্বা, তাই ভবিষ্যৎও একটু দূরে! দুটোই সবসময় মুযারি'-র আগে বসে: {{سَيَقُولُ}} = সে বলবে।",
     "en": "{{سَـ}} is short, so the future is near; {{سَوْفَ}} is long, so the future is a bit further! Both always come before a present verb: {{سَيَقُولُ}} = he will say."
    },
    {
     "type": "steps",
     "title": {
      "bn": "আদেশ (আমর) বানানোর তিন ধাপ",
      "en": "Three steps to make a command (amr)"
     },
     "items": [
      {
       "title": {
        "bn": "‘তুমি’ রূপ নাও",
        "en": "Take the 'you' form"
       },
       "ar": "تَكْتُبُ",
       "tr": {
        "bn": "তাকতুবু",
        "en": "taktubu"
       },
       "mean": {
        "bn": "তুমি লেখো",
        "en": "you write"
       }
      },
      {
       "title": {
        "bn": "সামনের {{تَـ}} ফেলে দাও, শেষে জযম দাও",
        "en": "Drop the {{تَـ}}, put sukun at the end"
       },
       "ar": "كْتُبْ",
       "desc": {
        "bn": "শুরুতে সাকিন — এভাবে পড়া যায় না!",
        "en": "It starts with a sukun — impossible to pronounce!"
       }
      },
      {
       "title": {
        "bn": "সামনে একটি হামযা যোগ করো",
        "en": "Add a hamza in front"
       },
       "ar": "اُكْتُبْ",
       "tr": {
        "bn": "উকতুব",
        "en": "uktub"
       },
       "mean": {
        "bn": "লেখো!",
        "en": "Write!"
       },
       "desc": {
        "bn": "মাঝের অক্ষরে পেশ হলে হামযায় পেশ ({{اُكْتُبْ}}), নইলে যের ({{اِفْتَحْ}} খোলো!, {{اِضْرِبْ}} মারো!)",
        "en": "If the middle letter has damma, the hamza gets damma ({{اُكْتُبْ}}); otherwise kasra ({{اِفْتَحْ}} open!, {{اِضْرِبْ}} strike!)"
       }
      }
     ]
    },
    {
     "type": "table",
     "title": {
      "bn": "কাকে আদেশ দিচ্ছ?",
      "en": "Who are you commanding?"
     },
     "head": [
      {
       "bn": "কাকে",
       "en": "To whom"
      },
      {
       "bn": "আদেশ",
       "en": "Command"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       {
        "bn": "একজন পুরুষ",
        "en": "one man"
       },
       "اُكْتُبْ",
       {
        "bn": "লেখো",
        "en": "write (m)"
       }
      ],
      [
       {
        "bn": "একজন নারী",
        "en": "one woman"
       },
       "اُكْتُبِي",
       {
        "bn": "লেখো (নারী)",
        "en": "write (f)"
       }
      ],
      [
       {
        "bn": "অনেকজন",
        "en": "a group"
       },
       "اُكْتُبُوا",
       {
        "bn": "তোমরা লেখো",
        "en": "write (pl)"
       }
      ]
     ]
    },
    {
     "type": "examples",
     "title": {
      "bn": "কুরআনের আদেশ",
      "en": "Commands in the Quran"
     },
     "items": [
      {
       "ar": "اِقْرَأْ بِاسْمِ رَبِّكَ",
       "tr": {
        "bn": "ইকরা' বিসমি রব্বিক",
        "en": "iqra' bismi rabbik"
       },
       "mean": {
        "bn": "পড়ো তোমার রবের নামে (৯৬:১)",
        "en": "Read in the name of your Lord (96:1)"
       },
       "note": {
        "bn": "{{يَقْرَأُ}} → {{اِقْرَأْ}} (মাঝে যবর, তাই হামযায় যের)",
        "en": "{{يَقْرَأُ}} → {{اِقْرَأْ}} (middle fatha, so hamza takes kasra)"
       },
       "hl": "اِقْرَأْ"
      },
      {
       "ar": "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
       "tr": {
        "bn": "ফাসাল্লি লিরব্বিকা ওয়ানহার",
        "en": "faṣalli lirabbika wanḥar"
       },
       "mean": {
        "bn": "সুতরাং তোমার রবের জন্য নামাজ পড়ো ও কুরবানি করো (১০৮:২)",
        "en": "So pray to your Lord and sacrifice (108:2)"
       },
       "hl": "وَانْحَرْ"
      },
      {
       "ar": "يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ",
       "tr": {
        "bn": "ইয়া আইয়ুহান না-সু'বুদূ রব্বাকুম",
        "en": "yā ayyuhan-nāsu'budū rabbakum"
       },
       "mean": {
        "bn": "হে মানুষ, তোমাদের রবের ইবাদত করো (২:২১)",
        "en": "O mankind, worship your Lord (2:21)"
       },
       "note": {
        "bn": "বহুবচনের আদেশ: {{ـُوا}}",
        "en": "Plural command: {{ـُوا}}"
       },
       "hl": "اعْبُدُوا"
      },
      {
       "ar": "قُلْ هُوَ اللّٰهُ أَحَدٌ",
       "tr": {
        "bn": "কুল হুওয়াল্লাহু আহাদ",
        "en": "qul huwallāhu aḥad"
       },
       "mean": {
        "bn": "বলো, তিনিই আল্লাহ, এক (১১২:১)",
        "en": "Say: He is Allah, the One (112:1)"
       },
       "note": {
        "bn": "{{يَقُولُ}} থেকে ছোট্ট আদেশ {{قُلْ}} — এখানে হামযা লাগেনি, কারণ শুরুতে সাকিন নেই",
        "en": "{{قُلْ}} comes from {{يَقُولُ}} — no hamza needed, as it doesn't start with a sukun"
       },
       "hl": "قُلْ"
      }
     ]
    },
    {
     "type": "text",
     "title": {
      "bn": "নিষেধ (নাহী): {{لَا}} + জযম",
      "en": "Prohibition (nahy): {{لَا}} + sukun"
     },
     "bn": "‘করো না!’ বলতে ‘তুমি’ রূপের আগে {{لَا}} বসাও আর শেষে জযম দাও: {{تَكْتُبُ}} → {{لَا تَكْتُبْ}} (লিখো না!)। বহুবচনে: {{لَا تَكْتُبُوا}} (তোমরা লিখো না!)।",
     "en": "To say 'don't!', put {{لَا}} before the 'you' form and give the end a sukun: {{تَكْتُبُ}} → {{لَا تَكْتُبْ}} (don't write!). Plural: {{لَا تَكْتُبُوا}} (don't write, all of you!)."
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "لَا تَحْزَنْ إِنَّ اللّٰهَ مَعَنَا",
       "tr": {
        "bn": "লা তাহযান ইন্নাল্লাহা মা'আনা",
        "en": "lā taḥzan innallāha ma'anā"
       },
       "mean": {
        "bn": "দুঃখ করো না, নিশ্চয়ই আল্লাহ আমাদের সাথে আছেন (৯:৪০)",
        "en": "Do not grieve; indeed Allah is with us (9:40)"
       },
       "hl": "لَا تَحْزَنْ"
      },
      {
       "ar": "يَا بُنَيَّ لَا تُشْرِكْ بِاللّٰهِ",
       "tr": {
        "bn": "ইয়া বুনাইয়া লা তুশরিক বিল্লাহ",
        "en": "yā bunayya lā tushrik billāh"
       },
       "mean": {
        "bn": "হে আমার ছোট্ট ছেলে, আল্লাহর সাথে শিরক করো না (৩১:১৩)",
        "en": "O my son, do not associate anything with Allah (31:13)"
       },
       "hl": "لَا تُشْرِكْ"
      },
      {
       "ar": "وَلَا تَقْرَبُوا الزِّنَا",
       "tr": {
        "bn": "ওয়া লা তাকরাবুয যিনা",
        "en": "wa lā taqrabuz-zinā"
       },
       "mean": {
        "bn": "আর তোমরা ব্যভিচারের কাছেও যেয়ো না (১৭:৩২)",
        "en": "And do not go near adultery (17:32)"
       },
       "note": {
        "bn": "বহুবচনের নিষেধ: {{ـُوا}} (শেষের {{ن}} ঝরে গেছে)",
        "en": "Plural prohibition: {{ـُوا}} (the final {{ن}} has dropped)"
       },
       "hl": "لَا تَقْرَبُوا"
      },
      {
       "ar": "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا",
       "tr": {
        "bn": "রব্বানা লা তুআ-খিযনা ইন নাসীনা আও আখত্বা'না",
        "en": "rabbanā lā tu'ākhidhnā in nasīnā aw akhṭa'nā"
       },
       "mean": {
        "bn": "হে আমাদের রব, আমরা ভুলে গেলে বা ভুল করলে আমাদের পাকড়াও করো না (২:২৮৬)",
        "en": "Our Lord, do not take us to task if we forget or err (2:286)"
       },
       "note": {
        "bn": "আল্লাহর কাছে হলে এটি নিষেধ নয়, বিনীত দোয়া",
        "en": "Addressed to Allah, it's not a prohibition but a humble du'a"
       },
       "hl": "لَا تُؤَاخِذْنَا"
      }
     ]
    },
    {
     "type": "compare",
     "title": {
      "bn": "একটি হরকতের পার্থক্য",
      "en": "One vowel makes the difference"
     },
     "items": [
      {
       "ar": "لَا تَكْتُبُ",
       "label": {
        "bn": "না-বাচক বাক্য",
        "en": "Negative statement"
       },
       "desc": {
        "bn": "শেষে পেশ: ‘তুমি লেখো না।’ (খবর দেওয়া)",
        "en": "Ends in damma: 'You don't write.' (a fact)"
       }
      },
      {
       "ar": "لَا تَكْتُبْ",
       "label": {
        "bn": "নিষেধ",
        "en": "Prohibition"
       },
       "desc": {
        "bn": "শেষে জযম: ‘লিখো না!’ (বারণ করা)",
        "en": "Ends in sukun: 'Don't write!' (an order)"
       }
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "{{نَكْتُبُ}} অর্থ কী?",
        "en": "What does {{نَكْتُبُ}} mean?"
       },
       "ar": "نَكْتُبُ",
       "options": [
        {
         "bn": "আমরা লিখি",
         "en": "we write"
        },
        {
         "bn": "আমরা লিখেছি",
         "en": "we wrote"
        },
        {
         "bn": "আমি লিখি",
         "en": "I write"
        },
        {
         "bn": "লেখো!",
         "en": "write!"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "‘তারা জানে’ কোনটি?",
        "en": "Which means 'they know'?"
       },
       "options": [
        "أَعْلَمُ",
        "تَعْلَمُونَ",
        "نَعْلَمُ",
        "يَعْلَمُونَ"
       ],
       "answer": 3
      },
      {
       "q": {
        "bn": "{{سَوْفَ تَعْلَمُونَ}} — কোন কাল?",
        "en": "What time is {{سَوْفَ تَعْلَمُونَ}}?"
       },
       "options": [
        {
         "bn": "বর্তমান",
         "en": "Present"
        },
        {
         "bn": "ভবিষ্যৎ",
         "en": "Future"
        },
        {
         "bn": "অতীত",
         "en": "Past"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{تَفْتَحُ}} থেকে আদেশ কী হবে?",
        "en": "What is the command from {{تَفْتَحُ}}?"
       },
       "options": [
        "اُفْتُحْ",
        "اِفْتَحْ",
        "فَتَحَ",
        "لَا تَفْتَحْ"
       ],
       "answer": 1,
       "explain": {
        "bn": "মাঝে যবর, তাই হামযায় যের: {{اِفْتَحْ}}।",
        "en": "Middle vowel is fatha, so the hamza takes kasra: {{اِفْتَحْ}}."
       }
      },
      {
       "q": {
        "bn": "{{لَا تَحْزَنْ}} অর্থ কী?",
        "en": "What does {{لَا تَحْزَنْ}} mean?"
       },
       "ar": "لَا تَحْزَنْ",
       "options": [
        {
         "bn": "আমি দুঃখ করিনি",
         "en": "I didn't grieve"
        },
        {
         "bn": "সে দুঃখ করে না",
         "en": "he doesn't grieve"
        },
        {
         "bn": "দুঃখ করো না!",
         "en": "Do not grieve!"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "{{اِقْرَأْ}} কী ধরনের ক্রিয়া?",
        "en": "What kind of verb is {{اِقْرَأْ}}?"
       },
       "options": [
        {
         "bn": "আদেশ",
         "en": "Command"
        },
        {
         "bn": "নিষেধ",
         "en": "Prohibition"
        },
        {
         "bn": "অতীত",
         "en": "Past"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "মুযারি'-র চার সামনের অক্ষর কোনগুলো?",
        "en": "What are the four prefixes of the present verb?"
       },
       "options": [
        "ب ت ث ج",
        "أ ن ي ت",
        "ل م ن و"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{تُكَذِّبَانِ}}-এ কতজনকে বলা হচ্ছে?",
        "en": "How many people does {{تُكَذِّبَانِ}} address?"
       },
       "ar": "تُكَذِّبَانِ",
       "options": [
        {
         "bn": "অনেকজন",
         "en": "Many"
        },
        {
         "bn": "একজন",
         "en": "One"
        },
        {
         "bn": "দুজন",
         "en": "Two"
        }
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "g-negation-questions",
   "icon": "؟",
   "title": {
    "bn": "না-বাচক, প্রশ্ন ও একটি আয়াত বিশ্লেষণ",
    "en": "Negation, Questions and Decoding an Ayah"
   },
   "subtitle": {
    "bn": "{{لَا}}, {{لَمْ}}, {{لَنْ}}, {{لَيْسَ}} আর {{هَلْ}}, {{مَنْ}}, {{كَيْفَ}} — তারপর পুরো আয়াত নিজে ভাঙো!",
    "en": "{{لَا}}, {{لَمْ}}, {{لَنْ}}, {{لَيْسَ}} and {{هَلْ}}, {{مَنْ}}, {{كَيْفَ}} — then break down a whole ayah yourself!"
   },
   "minutes": 22,
   "goals": [
    {
     "bn": "পাঁচটি না-বাচক শব্দের পার্থক্য বুঝবে",
     "en": "Tell apart the five negation words"
    },
    {
     "bn": "কুরআনের প্রশ্নবোধক শব্দগুলো চিনবে",
     "en": "Recognise the Quran's question words"
    },
    {
     "bn": "শেখা সব ব্যাকরণ দিয়ে একটি আয়াত শব্দে শব্দে বিশ্লেষণ করবে",
     "en": "Use all your grammar to decode an ayah word by word"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "এটাই এই ইউনিটের শেষ পাঠ — অভিনন্দন! আজ শিখব কীভাবে ‘না’ বলতে হয় আর কীভাবে প্রশ্ন করতে হয়। বাংলায় ‘না’ একটাই, কিন্তু আরবিতে কালের ওপর নির্ভর করে আলাদা ‘না’ আছে।",
     "en": "This is the last lesson of the unit — congratulations! Today we learn how to say 'not' and how to ask questions. English mostly uses 'not', but Arabic picks a different 'not' depending on the time."
    },
    {
     "type": "table",
     "title": {
      "bn": "পাঁচটি ‘না’",
      "en": "The five 'nots'"
     },
     "head": [
      {
       "bn": "শব্দ",
       "en": "Word"
      },
      {
       "bn": "কিসের আগে",
       "en": "Used with"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      },
      {
       "bn": "কুরআনের উদাহরণ",
       "en": "Quranic example"
      }
     ],
     "rows": [
      [
       "لَا",
       {
        "bn": "মুযারি' (বর্তমান)",
        "en": "present verb"
       },
       {
        "bn": "করে না",
        "en": "does not"
       },
       "لَا أَعْبُدُ مَا تَعْبُدُونَ"
      ],
      [
       "مَا",
       {
        "bn": "মাযী (অতীত)",
        "en": "past verb"
       },
       {
        "bn": "করেনি",
        "en": "did not"
       },
       "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلٰى"
      ],
      [
       "لَمْ",
       {
        "bn": "মুযারি' + জযম",
        "en": "present verb + sukun"
       },
       {
        "bn": "করেনি (অতীত অর্থ!)",
        "en": "did not (past meaning!)"
       },
       "لَمْ يَلِدْ وَلَمْ يُولَدْ"
      ],
      [
       "لَنْ",
       {
        "bn": "মুযারি' + যবর",
        "en": "present verb + fatha"
       },
       {
        "bn": "কখনো করবে না",
        "en": "will never"
       },
       "لَنْ تَنَالُوا الْبِرَّ"
      ],
      [
       "لَيْسَ",
       {
        "bn": "নামবাচক বাক্য",
        "en": "nominal sentence"
       },
       {
        "bn": "নয় / নেই",
        "en": "is not"
       },
       "لَيْسَ كَمِثْلِهِ شَيْءٌ"
      ]
     ]
    },
    {
     "type": "examples",
     "title": {
      "bn": "আয়াতগুলোর অর্থ",
      "en": "What those ayahs mean"
     },
     "items": [
      {
       "ar": "لَا أَعْبُدُ مَا تَعْبُدُونَ",
       "tr": {
        "bn": "লা আ'বুদু মা তা'বুদূন",
        "en": "lā a'budu mā ta'budūn"
       },
       "mean": {
        "bn": "তোমরা যার ইবাদত করো, আমি তার ইবাদত করি না (১০৯:২)",
        "en": "I do not worship what you worship (109:2)"
       },
       "hl": "لَا"
      },
      {
       "ar": "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلٰى",
       "tr": {
        "bn": "মা ওয়াদ্দা'আকা রব্বুকা ওয়া মা কলা",
        "en": "mā wadda'aka rabbuka wa mā qalā"
       },
       "mean": {
        "bn": "তোমার রব তোমাকে ছেড়ে যাননি, অসন্তুষ্টও হননি (৯৩:৩)",
        "en": "Your Lord has not forsaken you, nor is He displeased (93:3)"
       },
       "hl": "مَا وَدَّعَكَ"
      },
      {
       "ar": "لَمْ يَلِدْ وَلَمْ يُولَدْ",
       "tr": {
        "bn": "লাম ইয়ালিদ ওয়া লাম ইউলাদ",
        "en": "lam yalid wa lam yūlad"
       },
       "mean": {
        "bn": "তিনি কাউকে জন্ম দেননি, কেউ তাঁকে জন্ম দেয়নি (১১২:৩)",
        "en": "He neither begot nor was begotten (112:3)"
       },
       "note": {
        "bn": "{{يَلِدُ}} → {{لَمْ يَلِدْ}}: শেষে জযম",
        "en": "{{يَلِدُ}} → {{لَمْ يَلِدْ}}: sukun at the end"
       },
       "hl": "لَمْ يَلِدْ"
      },
      {
       "ar": "عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ",
       "tr": {
        "bn": "আল্লামাল ইনসানা মা লাম ইয়া'লাম",
        "en": "'allamal-insāna mā lam ya'lam"
       },
       "mean": {
        "bn": "তিনি মানুষকে শিখিয়েছেন যা সে জানত না (৯৬:৫)",
        "en": "He taught man what he did not know (96:5)"
       },
       "note": {
        "bn": "এখানে {{مَا}} = ‘যা’, আর {{لَمْ يَعْلَمْ}} = জানত না",
        "en": "Here {{مَا}} = 'what', and {{لَمْ يَعْلَمْ}} = did not know"
       },
       "hl": "لَمْ يَعْلَمْ"
      },
      {
       "ar": "لَنْ تَنَالُوا الْبِرَّ حَتّٰى تُنْفِقُوا مِمَّا تُحِبُّونَ",
       "tr": {
        "bn": "লান তানালুল বিররা হাত্তা তুনফিকূ মিম্মা তুহিব্বূন",
        "en": "lan tanālul-birra ḥattā tunfiqū mimmā tuḥibbūn"
       },
       "mean": {
        "bn": "তোমরা যা ভালোবাসো তা থেকে ব্যয় না করা পর্যন্ত কখনো পুণ্য লাভ করবে না (৩:৯২)",
        "en": "You will never attain righteousness until you spend from what you love (3:92)"
       },
       "hl": "لَنْ تَنَالُوا"
      },
      {
       "ar": "لَيْسَ كَمِثْلِهِ شَيْءٌ",
       "tr": {
        "bn": "লাইসা কামিসলিহী শাইউন",
        "en": "laysa kamithlihī shay'un"
       },
       "mean": {
        "bn": "তাঁর মতো কোনো কিছুই নেই (৪২:১১)",
        "en": "There is nothing like Him (42:11)"
       },
       "hl": "لَيْسَ"
      },
      {
       "ar": "لَسْتَ عَلَيْهِمْ بِمُصَيْطِرٍ",
       "tr": {
        "bn": "লাসতা আলাইহিম বিমুসাইত্বির",
        "en": "lasta 'alayhim bimuṣayṭir"
       },
       "mean": {
        "bn": "তুমি তাদের উপর জবরদস্তিকারী নও (৮৮:২২)",
        "en": "You are not a controller over them (88:22)"
       },
       "note": {
        "bn": "{{لَيْسَ}} অতীত ক্রিয়ার মতো রূপ বদলায়: {{لَسْتَ}} = তুমি নও, {{لَسْتُ}} = আমি নই",
        "en": "{{لَيْسَ}} changes like a past verb: {{لَسْتَ}} = you are not, {{لَسْتُ}} = I am not"
       },
       "hl": "لَسْتَ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "**লাম-এ ‘ম’ — মাযী (অতীত); লান-এ ‘ন’ — না কখনো (ভবিষ্যৎ)!** দুটোই মুযারি'-র আগে বসে, কিন্তু {{لَمْ}} অর্থকে পেছনে (অতীতে) টানে, আর {{لَنْ}} সামনে (ভবিষ্যতে) ঠেলে।",
     "en": "**'Lam' looks back, 'lan' looks ahead!** Both sit before a present verb, but {{لَمْ}} pulls the meaning into the past, while {{لَنْ}} pushes it into the future (never)."
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "আরেকটি বিশেষ {{لَا}}: ইসমের আগে বসে ‘কোনো… নেই’ বোঝায়, আর ইসমের শেষে এক যবর দেয়: {{لَا رَيْبَ فِيهِ}} (এতে কোনো সন্দেহ নেই, ২:২), {{لَا إِلٰهَ إِلَّا اللّٰهُ}} (আল্লাহ ছাড়া কোনো ইলাহ নেই)।",
     "en": "One more special {{لَا}}: before a noun it means 'there is no... at all', and gives the noun a single fatha: {{لَا رَيْبَ فِيهِ}} (no doubt in it, 2:2), {{لَا إِلٰهَ إِلَّا اللّٰهُ}} (there is no god but Allah)."
    },
    {
     "type": "table",
     "title": {
      "bn": "প্রশ্নবোধক শব্দ",
      "en": "Question words"
     },
     "head": [
      {
       "bn": "শব্দ",
       "en": "Word"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      },
      {
       "bn": "কুরআনের উদাহরণ",
       "en": "Quranic example"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "هَلْ",
       {
        "bn": "কি? (হ্যাঁ/না প্রশ্ন)",
        "en": "is/does...? (yes/no)"
       },
       "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ",
       {
        "bn": "তোমার কাছে কি আচ্ছন্নকারীর খবর এসেছে? (৮৮:১)",
        "en": "Has the news of the Overwhelming reached you? (88:1)"
       }
      ],
      [
       "أَ",
       {
        "bn": "কি? (হ্যাঁ/না প্রশ্ন)",
        "en": "is/does...? (yes/no)"
       },
       "أَلَيْسَ اللّٰهُ بِأَحْكَمِ الْحَاكِمِينَ",
       {
        "bn": "আল্লাহ কি শ্রেষ্ঠ বিচারক নন? (৯৫:৮)",
        "en": "Is Allah not the most just of judges? (95:8)"
       }
      ],
      [
       "مَا",
       {
        "bn": "কী?",
        "en": "what?"
       },
       "وَمَا تِلْكَ بِيَمِينِكَ يَا مُوسٰى",
       {
        "bn": "হে মূসা, তোমার ডান হাতে ওটা কী? (২০:১৭)",
        "en": "What is that in your right hand, O Musa? (20:17)"
       }
      ],
      [
       "مَنْ",
       {
        "bn": "কে?",
        "en": "who?"
       },
       "مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ",
       {
        "bn": "কে আছে যে তাঁর অনুমতি ছাড়া তাঁর কাছে সুপারিশ করবে? (২:২৫৫)",
        "en": "Who could intercede with Him except by His permission? (2:255)"
       }
      ],
      [
       "أَيْنَ",
       {
        "bn": "কোথায়?",
        "en": "where?"
       },
       "فَأَيْنَ تَذْهَبُونَ",
       {
        "bn": "তাহলে তোমরা কোথায় যাচ্ছ? (৮১:২৬)",
        "en": "So where are you going? (81:26)"
       }
      ],
      [
       "كَيْفَ",
       {
        "bn": "কীভাবে? কেমন?",
        "en": "how?"
       },
       "كَيْفَ تَكْفُرُونَ بِاللّٰهِ",
       {
        "bn": "তোমরা কীভাবে আল্লাহকে অস্বীকার করো? (২:২৮)",
        "en": "How can you disbelieve in Allah? (2:28)"
       }
      ],
      [
       "مَتٰى",
       {
        "bn": "কখন?",
        "en": "when?"
       },
       "مَتٰى نَصْرُ اللّٰهِ",
       {
        "bn": "আল্লাহর সাহায্য কখন আসবে? (২:২১৪)",
        "en": "When is the help of Allah? (2:214)"
       }
      ],
      [
       "لِمَ / لِمَاذَا",
       {
        "bn": "কেন?",
        "en": "why?"
       },
       "لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ",
       {
        "bn": "তোমরা যা করো না, তা কেন বলো? (৬১:২)",
        "en": "Why do you say what you do not do? (61:2)"
       }
      ],
      [
       "كَمْ",
       {
        "bn": "কত?",
        "en": "how many / how long?"
       },
       "كَمْ لَبِثْتَ",
       {
        "bn": "তুমি কতকাল (এভাবে) ছিলে? (২:২৫৯)",
        "en": "How long have you remained? (2:259)"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "{{مَا}}-র তিনটি কাজ — প্রসঙ্গ দেখে বুঝতে হয়: (১) প্রশ্ন ‘কী?’ — {{مَا الْقَارِعَةُ}} (১০১:২); (২) না-বাচক ‘না’ — {{مَا وَدَّعَكَ}}; (৩) ‘যা’ — {{مَا لَمْ يَعْلَمْ}}। আর ‘কেন’-এর জন্য কুরআনে ছোট রূপ {{لِمَ}} আসে; {{لِمَاذَا}} পরবর্তী আরবিতে বেশি প্রচলিত।",
     "en": "{{مَا}} has three jobs — context decides: (1) question 'what?' — {{مَا الْقَارِعَةُ}} (101:2); (2) negation 'not' — {{مَا وَدَّعَكَ}}; (3) 'what/that which' — {{مَا لَمْ يَعْلَمْ}}. And for 'why', the Quran uses the short {{لِمَ}}; {{لِمَاذَا}} is more common in later Arabic."
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "{{أَلَمْ}} = {{أَ}} (কি?) + {{لَمْ}} (করেনি) = ‘করেনি কি?’ — অর্থাৎ ‘অবশ্যই করেছে!’ {{أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ}} (৯৪:১), {{أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ}} (১০৫:১) — উত্তর জানা প্রশ্ন, মনকে জাগিয়ে তোলার জন্য।",
     "en": "{{أَلَمْ}} = {{أَ}} (?) + {{لَمْ}} (did not) = 'Did...not?' — meaning 'Of course He did!' {{أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ}} (94:1), {{أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ}} (105:1) — questions whose answer is known, asked to awaken the heart."
    },
    {
     "type": "text",
     "title": {
      "bn": "চূড়ান্ত চ্যালেঞ্জ: একটি আয়াত নিজে ভাঙো!",
      "en": "Final challenge: decode an ayah yourself!"
     },
     "bn": "এখন পর্যন্ত যা শিখেছ — ইসম, ফে'ল, হরফ, সর্বনাম, মুযারি' — সব একসাথে কাজে লাগাই। সূরা ফাতিহার এই আয়াতটি তুমি প্রতিদিন অন্তত ১৭ বার পড়ো!",
     "en": "Let's use everything you've learned — ism, fi'l, harf, pronouns, the present verb — all at once. You recite this ayah of al-Fatiha at least 17 times every day!"
    },
    {
     "type": "ayah",
     "ref": "1:5",
     "ar": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
     "words": [
      {
       "ar": "إِيَّاكَ",
       "bn": "শুধু তোমারই",
       "en": "You alone"
      },
      {
       "ar": "نَعْبُدُ",
       "bn": "আমরা ইবাদত করি",
       "en": "we worship"
      },
      {
       "ar": "وَإِيَّاكَ",
       "bn": "এবং শুধু তোমারই কাছে",
       "en": "and You alone"
      },
      {
       "ar": "نَسْتَعِينُ",
       "bn": "আমরা সাহায্য চাই",
       "en": "we ask for help"
      }
     ],
     "tr": {
      "bn": "ইয়্যাকা না'বুদু ওয়া ইয়্যাকা নাসতা'ঈন",
      "en": "iyyāka na'budu wa iyyāka nasta'īn"
     },
     "mean": {
      "bn": "আমরা শুধু তোমারই ইবাদত করি এবং শুধু তোমারই কাছে সাহায্য চাই।",
      "en": "You alone we worship, and You alone we ask for help."
     }
    },
    {
     "type": "steps",
     "title": {
      "bn": "শব্দে শব্দে ব্যাকরণ",
      "en": "Grammar, word by word"
     },
     "items": [
      {
       "title": {
        "bn": "{{إِيَّا}} + {{كَ}} — ‘তোমাকেই’",
        "en": "{{إِيَّا}} + {{كَ}} — 'You (alone)'"
       },
       "ar": "إِيَّاكَ",
       "tr": {
        "bn": "ইয়্যাকা",
        "en": "iyyāka"
       },
       "desc": {
        "bn": "ইসম (সর্বনাম)। {{إِيَّا}} হলো কর্ম-সর্বনাম বহনকারী, {{كَ}} = তুমি (পুং, এক)। সাধারণত কর্ম ক্রিয়ার পরে বসে; এখানে **আগে** এসেছে — তাই অর্থ ‘শুধু তোমাকেই’, যেমন বাংলায় ‘-ই’ যোগ করে জোর দিই।",
        "en": "Ism (pronoun). {{إِيَّا}} is a carrier for an object pronoun, {{كَ}} = you (m, one). Objects usually come after the verb; here it comes **first** — giving the meaning 'You and no one else'."
       }
      },
      {
       "title": {
        "bn": "{{نَعْبُدُ}} — ‘আমরা ইবাদত করি’",
        "en": "{{نَعْبُدُ}} — 'we worship'"
       },
       "ar": "نَعْبُدُ",
       "tr": {
        "bn": "না'বুদু",
        "en": "na'budu"
       },
       "desc": {
        "bn": "ফে'লে মুযারি'। সামনে {{نَ}} = আমরা; মূল {{ع ب د}} (ইবাদত — {{عَبْدٌ}} বান্দা-ও এখান থেকে); শেষে পেশ — সাধারণ বর্তমান কাল।",
        "en": "Present verb. Prefix {{نَ}} = we; root {{ع ب د}} (worship — {{عَبْدٌ}} 'servant' comes from it too); damma at the end — ordinary present."
       }
      },
      {
       "title": {
        "bn": "{{وَ}} — ‘এবং’",
        "en": "{{وَ}} — 'and'"
       },
       "ar": "وَ",
       "tr": {
        "bn": "ওয়া",
        "en": "wa"
       },
       "desc": {
        "bn": "হরফ — দুই অংশকে জুড়ে দেয়; পরের শব্দের সাথে লেগে আছে।",
        "en": "Harf — joins the two halves; glued to the next word."
       }
      },
      {
       "title": {
        "bn": "{{إِيَّاكَ}} — আবার ‘শুধু তোমারই’",
        "en": "{{إِيَّاكَ}} — again 'You alone'"
       },
       "ar": "إِيَّاكَ",
       "tr": {
        "bn": "ইয়্যাকা",
        "en": "iyyāka"
       },
       "desc": {
        "bn": "আবার আগে এনে জোর — সাহায্যও চাই একমাত্র আল্লাহর কাছেই।",
        "en": "Brought forward again for emphasis — help too is sought from Allah alone."
       }
      },
      {
       "title": {
        "bn": "{{نَسْتَعِينُ}} — ‘আমরা সাহায্য চাই’",
        "en": "{{نَسْتَعِينُ}} — 'we seek help'"
       },
       "ar": "نَسْتَعِينُ",
       "tr": {
        "bn": "নাসতা'ঈন",
        "en": "nasta'īn"
       },
       "desc": {
        "bn": "ফে'লে মুযারি'। {{نَ}} = আমরা; মূল {{ع و ن}} (সাহায্য); মাঝের অতিরিক্ত {{سْت}} মানে ‘চাওয়া’ — যেমন {{اِسْتَغْفَرَ}} = ক্ষমা চাইল।",
        "en": "Present verb. {{نَ}} = we; root {{ع و ن}} (help); the extra {{سْت}} adds 'seeking' — like {{اِسْتَغْفَرَ}} = he sought forgiveness."
       }
      }
     ]
    },
    {
     "type": "table",
     "title": {
      "bn": "বোনাস: পরের আয়াত {{اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ}} (১:৬)",
      "en": "Bonus: the next ayah {{اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ}} (1:6)"
     },
     "head": [
      {
       "bn": "অংশ",
       "en": "Piece"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      },
      {
       "bn": "ব্যাকরণ",
       "en": "Grammar"
      }
     ],
     "rows": [
      [
       "اِهْدِ",
       {
        "bn": "পথ দেখাও",
        "en": "guide!"
       },
       {
        "bn": "আমর (আদেশ / দোয়া) — {{يَهْدِي}} থেকে",
        "en": "Command (here a du'a) — from {{يَهْدِي}}"
       }
      ],
      [
       "نَا",
       {
        "bn": "আমাদেরকে",
        "en": "us"
       },
       {
        "bn": "জোড়া সর্বনাম — কর্ম",
        "en": "Attached pronoun — object"
       }
      ],
      [
       "الصِّرَاطَ",
       {
        "bn": "পথ",
        "en": "the path"
       },
       {
        "bn": "ইসম, নির্দিষ্ট, যবর (কর্ম) — মাওসূফ",
        "en": "Ism, definite, fatha (object) — the noun"
       }
      ],
      [
       "الْمُسْتَقِيمَ",
       {
        "bn": "সরল",
        "en": "the straight"
       },
       {
        "bn": "সিফাত — {{اَلْ}}, লিঙ্গ, বচন, যবর সব মিলেছে",
        "en": "Adjective — matches {{اَلْ}}, gender, number and fatha"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "মাশাআল্লাহ! তুমি এখন কুরআনের একটি আয়াতকে ব্যাকরণ দিয়ে ভেঙে বুঝতে পারো। নামাজে এই আয়াত পড়ার সময় এখন থেকে প্রতিটি শব্দের ভেতরের গঠনটাও মনে পড়বে — এটাই অর্থ বুঝে পড়ার প্রথম ধাপ!",
     "en": "Masha'Allah! You can now take apart an ayah of the Quran with grammar. From now on, when you recite it in salah, you'll feel the structure inside every word — the first step to reciting with understanding!"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "‘সে কখনো করবে না’ বোঝাতে কোনটি?",
        "en": "Which word means 'will never'?"
       },
       "options": [
        "لَمْ",
        "مَا",
        "لَنْ",
        "لَيْسَ"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "{{لَمْ يَلِدْ}} — কোন কালের অর্থ?",
        "en": "{{لَمْ يَلِدْ}} — what time does it refer to?"
       },
       "options": [
        {
         "bn": "অতীত (জন্ম দেননি)",
         "en": "Past (did not beget)"
        },
        {
         "bn": "ভবিষ্যৎ (জন্ম দেবেন না)",
         "en": "Future (will not beget)"
        },
        {
         "bn": "আদেশ",
         "en": "Command"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "নামবাচক বাক্যকে না-বাচক করতে কোনটি?",
        "en": "Which word negates a nominal sentence?"
       },
       "options": [
        "لَنْ",
        "لَيْسَ",
        "لَمْ"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{كَيْفَ}} অর্থ কী?",
        "en": "What does {{كَيْفَ}} mean?"
       },
       "ar": "كَيْفَ",
       "options": [
        {
         "bn": "কীভাবে?",
         "en": "how?"
        },
        {
         "bn": "কোথায়?",
         "en": "where?"
        },
        {
         "bn": "কখন?",
         "en": "when?"
        },
        {
         "bn": "কে?",
         "en": "who?"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{مَتٰى نَصْرُ اللّٰهِ}} — প্রশ্নবোধক শব্দটির অর্থ কী?",
        "en": "In {{مَتٰى نَصْرُ اللّٰهِ}}, what does the question word mean?"
       },
       "options": [
        {
         "bn": "কত",
         "en": "how many"
        },
        {
         "bn": "কেন",
         "en": "why"
        },
        {
         "bn": "কখন",
         "en": "when"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "{{مَا وَدَّعَكَ رَبُّكَ}} — এখানে {{مَا}} কী অর্থে?",
        "en": "In {{مَا وَدَّعَكَ رَبُّكَ}}, what does {{مَا}} mean?"
       },
       "options": [
        {
         "bn": "না (করেননি)",
         "en": "not (did not)"
        },
        {
         "bn": "যা",
         "en": "that which"
        },
        {
         "bn": "কী?",
         "en": "what?"
        }
       ],
       "answer": 0,
       "explain": {
        "bn": "অতীত ক্রিয়ার আগে {{مَا}} = না-বাচক।",
        "en": "Before a past verb, {{مَا}} negates."
       }
      },
      {
       "q": {
        "bn": "{{نَسْتَعِينُ}}-এ {{نَ}} কী বোঝায়?",
        "en": "In {{نَسْتَعِينُ}}, what does {{نَ}} show?"
       },
       "ar": "نَسْتَعِينُ",
       "options": [
        {
         "bn": "আমি",
         "en": "I"
        },
        {
         "bn": "আমরা",
         "en": "we"
        },
        {
         "bn": "তুমি",
         "en": "you"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{إِيَّاكَ}} ক্রিয়ার আগে আসায় কী অর্থ যোগ হয়েছে?",
        "en": "What meaning is added by putting {{إِيَّاكَ}} before the verb?"
       },
       "options": [
        {
         "bn": "প্রশ্ন",
         "en": "A question"
        },
        {
         "bn": "ভবিষ্যৎ কাল",
         "en": "Future time"
        },
        {
         "bn": "‘শুধু তোমাকেই’ — একমাত্রতা",
         "en": "'You alone' — exclusivity"
        }
       ],
       "answer": 2
      }
     ]
    }
   ]
  }
 ]
});
