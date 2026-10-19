window.AQ = window.AQ || { units: [], alphabet: [], vocab: [] };

AQ.alphabet = [
 {
  "id": "alif",
  "ar": "ا",
  "name": {
   "bn": "আলিফ",
   "en": "Alif"
  },
  "nameAr": "أَلِفْ",
  "tr": {
   "bn": "আ",
   "en": "ā"
  },
  "forms": {
   "isolated": "ا",
   "initial": "ا",
   "medial": "ـا",
   "final": "ـا"
  },
  "connects": false,
  "heavy": false,
  "sun": false,
  "qalqalah": false,
  "makhraj": {
   "bn": "মুখ ও গলার ফাঁকা জায়গা (জাওফ) — টানা 'আ' হলে",
   "en": "The open space of mouth and throat (jawf), when it is a long 'ā'"
  },
  "sound": {
   "bn": "আলিফের নিজের কোনো আলাদা আওয়াজ নেই: এটি হরকত বা হামযা বহন করে, আর যবরের পরে এলে 'আ'-কে লম্বা করে। বাংলাভাষীরা প্রায়ই একে 'অ' পড়েন — মুখ খুলে পরিষ্কার 'আ' বলুন।",
   "en": "Alif has no sound of its own: it carries a vowel or a hamza, and after a fatha it stretches 'a' into a long 'ā'. Bangla speakers often say 'o' (অ) — open your mouth for a clear 'a'."
  },
  "family": "alif",
  "example": {
   "ar": "أَحَدٌ",
   "tr": {
    "bn": "আহাদুন",
    "en": "aḥadun"
   },
   "mean": {
    "bn": "এক",
    "en": "one"
   }
  },
  "mnemonic": {
   "bn": "আলিফ দেখতে ইংরেজি সংখ্যা 1-এর মতো — আর এটিই আরবির ১ নম্বর অক্ষর! একটা সোজা দাঁড়ানো লাঠি।",
   "en": "Alif looks like the number 1 — and it is letter number one! A straight, standing stick."
  }
 },
 {
  "id": "ba",
  "ar": "ب",
  "name": {
   "bn": "বা",
   "en": "Baa"
  },
  "nameAr": "بَاءْ",
  "tr": {
   "bn": "ব",
   "en": "b"
  },
  "forms": {
   "isolated": "ب",
   "initial": "بـ",
   "medial": "ـبـ",
   "final": "ـب"
  },
  "connects": true,
  "heavy": false,
  "sun": false,
  "qalqalah": true,
  "makhraj": {
   "bn": "দুই ঠোঁট (ভেতরের ভেজা অংশ)",
   "en": "Both lips (the inner, wet part)"
  },
  "sound": {
   "bn": "দুই ঠোঁট মিলিয়ে পরিষ্কার 'ব'। বাংলা 'ভ'-এর মতো বাতাস ছাড়বেন না, আর ইংরেজি v-এর মতো দাঁতে ঠোঁট লাগাবেন না।",
   "en": "Close both lips for a clean 'b'. Don't add a puff of air like Bangla 'ভ', and never touch your teeth to your lip like a 'v'."
  },
  "family": "ba",
  "example": {
   "ar": "بَيْتٌ",
   "tr": {
    "bn": "বাইতুন",
    "en": "baytun"
   },
   "mean": {
    "bn": "ঘর",
    "en": "house"
   }
  },
  "mnemonic": {
   "bn": "একটা নৌকা, নিচে একটি বিন্দু — যেন নৌকার নিচে একটা বল (ball)। বা = বল নিচে!",
   "en": "A boat with one dot underneath — a ball under the boat. Baa = ball below!"
  }
 },
 {
  "id": "ta",
  "ar": "ت",
  "name": {
   "bn": "তা",
   "en": "Taa"
  },
  "nameAr": "تَاءْ",
  "tr": {
   "bn": "ত",
   "en": "t"
  },
  "forms": {
   "isolated": "ت",
   "initial": "تـ",
   "medial": "ـتـ",
   "final": "ـت"
  },
  "connects": true,
  "heavy": false,
  "sun": true,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের আগা + ওপরের সামনের দুই দাঁতের গোড়া",
   "en": "Tongue tip + roots of the upper front teeth"
  },
  "sound": {
   "bn": "জিভের আগা ওপরের সামনের দাঁতের গোড়ায় লাগিয়ে পাতলা, নরম 'ত'। বাংলা 'ট'-এর মতো জিভ উল্টাবেন না, 'থ'-এর মতো বাতাসও ছাড়বেন না।",
   "en": "Tongue tip on the gum-line behind the upper front teeth: a light, crisp 't'. Don't curl the tongue like Bangla 'ট', and no puff of air like 'থ'."
  },
  "family": "ba",
  "example": {
   "ar": "تُرَابٌ",
   "tr": {
    "bn": "তুরাবুন",
    "en": "turābun"
   },
   "mean": {
    "bn": "মাটি, ধুলা",
    "en": "soil, dust"
   }
  },
  "mnemonic": {
   "bn": "নৌকার ওপরে দুটি বিন্দু — যেন দুটি চোখ ওপরে তাকিয়ে আছে। তা = দুই চোখ ওপরে!",
   "en": "Two dots on top of the boat — two eyes looking up. Taa = two on top!"
  }
 },
 {
  "id": "tha",
  "ar": "ث",
  "name": {
   "bn": "ছা",
   "en": "Thaa"
  },
  "nameAr": "ثَاءْ",
  "tr": {
   "bn": "ছ",
   "en": "th"
  },
  "forms": {
   "isolated": "ث",
   "initial": "ثـ",
   "medial": "ـثـ",
   "final": "ـث"
  },
  "connects": true,
  "heavy": false,
  "sun": true,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের আগা + ওপরের সামনের দুই দাঁতের মাথা",
   "en": "Tongue tip + edges of the upper front teeth"
  },
  "sound": {
   "bn": "জিভের আগা একটু বের করে ওপরের দাঁতের মাথায় লাগান, তারপর আলতো বাতাস ছাড়ুন — ইংরেজি think-এর th। বাংলাভাষীরা প্রায়ই 'স' বলে ফেলেন; জিভ যেন দাঁতের ফাঁকে উঁকি দেয়।",
   "en": "Let the tongue tip peek out and touch the edges of the upper front teeth, then blow softly — the 'th' in 'think'. Bangla speakers often say 's'; let the tongue show between the teeth."
  },
  "family": "ba",
  "example": {
   "ar": "ثَلَاثَةٌ",
   "tr": {
    "bn": "ছালাছাতুন",
    "en": "thalāthatun"
   },
   "mean": {
    "bn": "তিন",
    "en": "three"
   }
  },
  "mnemonic": {
   "bn": "নৌকার ওপরে তিনটি বিন্দু, ছোট্ট পাহাড়ের মতো সাজানো। ইংরেজি Three শুরু হয় th দিয়ে — Thaa-ও তাই, আর তার বিন্দুও ৩টা!",
   "en": "Three dots piled like a little hill on the boat. 'Three' starts with 'th' — so does Thaa, and it has three dots!"
  }
 },
 {
  "id": "jim",
  "ar": "ج",
  "name": {
   "bn": "জীম",
   "en": "Jeem"
  },
  "nameAr": "جِيمْ",
  "tr": {
   "bn": "জ",
   "en": "j"
  },
  "forms": {
   "isolated": "ج",
   "initial": "جـ",
   "medial": "ـجـ",
   "final": "ـج"
  },
  "connects": true,
  "heavy": false,
  "sun": false,
  "qalqalah": true,
  "makhraj": {
   "bn": "জিভের মাঝখান + তালুর মাঝখান",
   "en": "Middle of the tongue + middle of the hard palate"
  },
  "sound": {
   "bn": "জিভের মাঝখান তালুতে চেপে পরিষ্কার 'জ', যেমন jam। নরম 'য' বা 'ঝ' বানাবেন না। জযম থাকলে আওয়াজ একটু লাফিয়ে ওঠে (কলকলা)।",
   "en": "Press the middle of the tongue to the hard palate: a clear 'j' as in 'jam'. Don't soften it. With a sukun it gives a small bounce (qalqalah)."
  },
  "family": "jim",
  "example": {
   "ar": "جَنَّةٌ",
   "tr": {
    "bn": "জান্নাতুন",
    "en": "jannatun"
   },
   "mean": {
    "bn": "বাগান, জান্নাত",
    "en": "garden, Paradise"
   }
  },
  "mnemonic": {
   "bn": "একটা খোলা মুখ বা বড়শির মতো, পেটের ভেতর একটি বিন্দু — যেন জীম একটা জাম গিলে ফেলেছে!",
   "en": "An open mouth (or a hook) with a dot in its belly — Jeem swallowed a jam-berry!"
  }
 },
 {
  "id": "hha",
  "ar": "ح",
  "name": {
   "bn": "হা",
   "en": "Ḥaa"
  },
  "nameAr": "حَاءْ",
  "tr": {
   "bn": "হ",
   "en": "ḥ"
  },
  "forms": {
   "isolated": "ح",
   "initial": "حـ",
   "medial": "ـحـ",
   "final": "ـح"
  },
  "connects": true,
  "heavy": false,
  "sun": false,
  "qalqalah": false,
  "makhraj": {
   "bn": "গলার মাঝখান",
   "en": "Middle of the throat"
  },
  "sound": {
   "bn": "গলার মাঝখান একটু চেপে বাতাস ছাড়ুন — যেন গরম চা খেয়ে 'হাহ্' বলছেন। সাধারণ 'হ' (ه)-এর চেয়ে এটি বেশি ঘষা ও জোরালো; বাংলাভাষীরা প্রায়ই দুটো এক করে ফেলেন।",
   "en": "Tighten the middle of the throat and push air through — like the 'ḥaah' after sipping hot tea. It is raspier than a normal 'h' (ه); Bangla speakers often mix the two."
  },
  "family": "jim",
  "example": {
   "ar": "حَمْدٌ",
   "tr": {
    "bn": "হামদুন",
    "en": "ḥamdun"
   },
   "mean": {
    "bn": "প্রশংসা",
    "en": "praise"
   }
  },
  "mnemonic": {
   "bn": "জীমের মতোই শরীর, কিন্তু পেট খালি (বিন্দু নেই) — তাই সে ক্ষুধায় 'হাহ্' করে হাঁপাচ্ছে!",
   "en": "Same body as Jeem but an empty belly (no dot) — so it pants 'ḥaah' with hunger!"
  }
 },
 {
  "id": "kha",
  "ar": "خ",
  "name": {
   "bn": "খা",
   "en": "Khaa"
  },
  "nameAr": "خَاءْ",
  "tr": {
   "bn": "খ",
   "en": "kh"
  },
  "forms": {
   "isolated": "خ",
   "initial": "خـ",
   "medial": "ـخـ",
   "final": "ـخ"
  },
  "connects": true,
  "heavy": true,
  "sun": false,
  "qalqalah": false,
  "makhraj": {
   "bn": "গলার ওপরের অংশ (মুখের দিকের)",
   "en": "Top of the throat (nearest the mouth)"
  },
  "sound": {
   "bn": "গলার ওপরের অংশ থেকে ঘষা আওয়াজ — যেন আলতো করে গলা পরিষ্কার করছেন। এটি বাংলা 'খ' (ক + বাতাস) নয়। এটি মোটা (ভারী) অক্ষর, তাই মুখ ভরে উচ্চারণ হয়।",
   "en": "A scraping sound from the top of the throat, like gently clearing it (the 'ch' in Scottish 'loch'). It is not Bangla 'খ' (k + puff). It's a heavy letter, said with a full mouth."
  },
  "family": "jim",
  "example": {
   "ar": "خَيْرٌ",
   "tr": {
    "bn": "খাইরুন",
    "en": "khayrun"
   },
   "mean": {
    "bn": "ভালো, কল্যাণ",
    "en": "good"
   }
  },
  "mnemonic": {
   "bn": "জীমের শরীর, বিন্দুটা মাথার ওপরে — যেন টুপি পরেছে। খা = খোলা মাথায় টুপি!",
   "en": "Jeem's body with the dot on its head like a cap. Khaa wears a cap!"
  }
 },
 {
  "id": "dal",
  "ar": "د",
  "name": {
   "bn": "দাল",
   "en": "Daal"
  },
  "nameAr": "دَالْ",
  "tr": {
   "bn": "দ",
   "en": "d"
  },
  "forms": {
   "isolated": "د",
   "initial": "د",
   "medial": "ـد",
   "final": "ـد"
  },
  "connects": false,
  "heavy": false,
  "sun": true,
  "qalqalah": true,
  "makhraj": {
   "bn": "জিভের আগা + ওপরের সামনের দুই দাঁতের গোড়া",
   "en": "Tongue tip + roots of the upper front teeth"
  },
  "sound": {
   "bn": "জিভের আগা ওপরের দাঁতের গোড়ায় লাগিয়ে নরম 'দ'। বাংলা 'ড'-এর মতো জিভ পেছনে উল্টাবেন না। জযম থাকলে আওয়াজ লাফিয়ে ওঠে (কলকলা)।",
   "en": "Tongue tip on the roots of the upper front teeth: a soft 'd'. Don't curl the tongue back like Bangla 'ড'. With a sukun it bounces (qalqalah)."
  },
  "family": "dal",
  "example": {
   "ar": "دِينٌ",
   "tr": {
    "bn": "দীনুন",
    "en": "dīnun"
   },
   "mean": {
    "bn": "দীন, জীবনব্যবস্থা",
    "en": "religion, way of life"
   }
  },
  "mnemonic": {
   "bn": "দেখতে একটা ভাঁজ করা কনুই বা হাঁটুর মতো — দাল লাইনের ওপরেই ভাঁজ হয়ে বসে থাকে।",
   "en": "Looks like a bent elbow sitting right on the line — Daal sits down."
  }
 },
 {
  "id": "dhal",
  "ar": "ذ",
  "name": {
   "bn": "যাল",
   "en": "Dhaal"
  },
  "nameAr": "ذَالْ",
  "tr": {
   "bn": "য",
   "en": "dh"
  },
  "forms": {
   "isolated": "ذ",
   "initial": "ذ",
   "medial": "ـذ",
   "final": "ـذ"
  },
  "connects": false,
  "heavy": false,
  "sun": true,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের আগা + ওপরের সামনের দুই দাঁতের মাথা",
   "en": "Tongue tip + edges of the upper front teeth"
  },
  "sound": {
   "bn": "জিভের আগা ওপরের দাঁতের মাথায় লাগিয়ে গুনগুন কম্পনসহ আওয়াজ — ইংরেজি this-এর th। বাংলাভাষীরা প্রায়ই 'জ' বলেন; জিভ দাঁতের ফাঁকে রাখুন।",
   "en": "Tongue tip touching the edges of the upper front teeth, with a buzz — the 'th' in 'this'. Saying 'j' is a common slip; keep the tongue between the teeth."
  },
  "family": "dal",
  "example": {
   "ar": "ذِكْرٌ",
   "tr": {
    "bn": "যিকরুন",
    "en": "dhikrun"
   },
   "mean": {
    "bn": "স্মরণ, যিকির",
    "en": "remembrance"
   }
  },
  "mnemonic": {
   "bn": "দালের মাথায় একটি বিন্দু — দাল টুপি পরলেই যাল!",
   "en": "Daal with a dot on its head — Daal puts on a cap and becomes Dhaal!"
  }
 },
 {
  "id": "ra",
  "ar": "ر",
  "name": {
   "bn": "রা",
   "en": "Raa"
  },
  "nameAr": "رَاءْ",
  "tr": {
   "bn": "র",
   "en": "r"
  },
  "forms": {
   "isolated": "ر",
   "initial": "ر",
   "medial": "ـر",
   "final": "ـر"
  },
  "connects": false,
  "heavy": false,
  "sun": true,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের আগা (একটু পিঠসহ) + ওপরের মাড়ি",
   "en": "Tongue tip (with a little of its top) + the upper gum"
  },
  "sound": {
   "bn": "জিভের আগা ওপরের মাড়িতে একবার আলতো ছুঁয়ে 'র'। বারবার কাঁপিয়ে 'র্‌র্‌র্' করবেন না। যবর বা পেশে সাধারণত মোটা, যেরে চিকন শোনায়।",
   "en": "The tongue tip taps the upper gum once: 'r'. Don't roll it again and again. It usually sounds heavy with fatha or damma and light with kasra."
  },
  "family": "ra",
  "example": {
   "ar": "رَبٌّ",
   "tr": {
    "bn": "রাব্বুন",
    "en": "rabbun"
   },
   "mean": {
    "bn": "রব, প্রতিপালক",
    "en": "Lord, Sustainer"
   }
  },
  "mnemonic": {
   "bn": "একটা ছোট্ট স্লিপার, যা লাইনের নিচে নেমে যায় — রা পিছলে নিচে যায়!",
   "en": "A little slide that dips below the line — Raa slides down!"
  }
 },
 {
  "id": "zay",
  "ar": "ز",
  "name": {
   "bn": "যা",
   "en": "Zaay"
  },
  "nameAr": "زَايْ",
  "tr": {
   "bn": "য",
   "en": "z"
  },
  "forms": {
   "isolated": "ز",
   "initial": "ز",
   "medial": "ـز",
   "final": "ـز"
  },
  "connects": false,
  "heavy": false,
  "sun": true,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের আগা + নিচের সামনের দাঁতের কাছে (শিস দেওয়া অক্ষর)",
   "en": "Tongue tip near the lower front teeth (a whistling letter)"
  },
  "sound": {
   "bn": "জিভের আগা নিচের দাঁতের কাছে রেখে মৌমাছির মতো 'য্‌য্‌য্' গুঞ্জন — ইংরেজি z। 'জ' (j) বলবেন না।",
   "en": "Tongue tip near the lower front teeth with a bee-like buzz 'zzz' — English z. Don't say 'j'."
  },
  "family": "ra",
  "example": {
   "ar": "زَيْتُونٌ",
   "tr": {
    "bn": "যাইতূনুন",
    "en": "zaytūnun"
   },
   "mean": {
    "bn": "জলপাই",
    "en": "olive"
   }
  },
  "mnemonic": {
   "bn": "রা-এর মাথায় একটি বিন্দু — যেন স্লিপারে একটা মৌমাছি বসে 'যযয' করছে!",
   "en": "Raa with a dot on top — a bee sitting on the slide going 'zzz'!"
  }
 },
 {
  "id": "sin",
  "ar": "س",
  "name": {
   "bn": "সীন",
   "en": "Seen"
  },
  "nameAr": "سِينْ",
  "tr": {
   "bn": "স",
   "en": "s"
  },
  "forms": {
   "isolated": "س",
   "initial": "سـ",
   "medial": "ـسـ",
   "final": "ـس"
  },
  "connects": true,
  "heavy": false,
  "sun": true,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের আগা + নিচের সামনের দাঁতের কাছে (শিস দেওয়া অক্ষর)",
   "en": "Tongue tip near the lower front teeth (a whistling letter)"
  },
  "sound": {
   "bn": "জিভের আগা নিচের দাঁতের কাছে রেখে পাতলা শিসের মতো 'স' — সাপের 'স্‌স্‌স্'। বাংলাভাষীরা প্রায়ই 'শ' বলে ফেলেন; আওয়াজ চিকন ও তীক্ষ্ণ রাখুন।",
   "en": "Tongue tip near the lower front teeth: a thin, hissing 's', like a snake. Bangla speakers often slide into 'sh' — keep it thin and sharp."
  },
  "family": "sin",
  "example": {
   "ar": "سَلَامٌ",
   "tr": {
    "bn": "সালামুন",
    "en": "salāmun"
   },
   "mean": {
    "bn": "শান্তি",
    "en": "peace"
   }
  },
  "mnemonic": {
   "bn": "তিনটি ছোট দাঁত আর একটা লেজ — যেন সাপ হাসছে তিন দাঁত বের করে: স্‌স্‌স্!",
   "en": "Three little teeth and a tail — a smiling snake showing three teeth: sss!"
  }
 },
 {
  "id": "shin",
  "ar": "ش",
  "name": {
   "bn": "শীন",
   "en": "Sheen"
  },
  "nameAr": "شِينْ",
  "tr": {
   "bn": "শ",
   "en": "sh"
  },
  "forms": {
   "isolated": "ش",
   "initial": "شـ",
   "medial": "ـشـ",
   "final": "ـش"
  },
  "connects": true,
  "heavy": false,
  "sun": true,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের মাঝখান + তালুর মাঝখান",
   "en": "Middle of the tongue + middle of the hard palate"
  },
  "sound": {
   "bn": "জিভের মাঝখান তালুর দিকে তুলে 'শ' — চুপ করানোর 'শ্‌শ্‌'। বাতাস মুখে ছড়িয়ে পড়ে।",
   "en": "Raise the middle of the tongue toward the palate: 'sh' as in 'shush'. The air spreads through the mouth."
  },
  "family": "sin",
  "example": {
   "ar": "شَمْسٌ",
   "tr": {
    "bn": "শামসুন",
    "en": "shamsun"
   },
   "mean": {
    "bn": "সূর্য",
    "en": "sun"
   }
  },
  "mnemonic": {
   "bn": "সীনের মাথায় তিনটি বিন্দু — যেন তিন বন্ধু ঠোঁটে আঙুল দিয়ে বলছে 'শ্‌শ্‌শ্, চুপ!'",
   "en": "Seen with three dots on top — three friends saying 'shhh!'"
  }
 },
 {
  "id": "sad",
  "ar": "ص",
  "name": {
   "bn": "সোয়াদ",
   "en": "Ṣaad"
  },
  "nameAr": "صَادْ",
  "tr": {
   "bn": "স",
   "en": "ṣ"
  },
  "forms": {
   "isolated": "ص",
   "initial": "صـ",
   "medial": "ـصـ",
   "final": "ـص"
  },
  "connects": true,
  "heavy": true,
  "sun": true,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের আগা নিচের সামনের দাঁতের কাছে, সাথে জিভের পেছন ওপরে তোলা",
   "en": "Tongue tip near the lower front teeth, with the back of the tongue raised"
  },
  "sound": {
   "bn": "সীনের জায়গা থেকেই, কিন্তু জিভের পেছন ওপরে তুলে মুখ ভরে মোটা 'স'। এর সাথে যবর পড়লে আওয়াজ গভীর ও ভারী শোনায়।",
   "en": "Same spot as Seen, but raise the back of the tongue for a full, heavy 's'. A fatha after it sounds deep and dark."
  },
  "family": "sad",
  "example": {
   "ar": "صَبْرٌ",
   "tr": {
    "bn": "সাবরুন",
    "en": "ṣabrun"
   },
   "mean": {
    "bn": "ধৈর্য",
    "en": "patience"
   }
  },
  "mnemonic": {
   "bn": "একটা লম্বা মোটা লুপ আর ছোট্ট একটা দাঁত — মোটা লুপ = মোটা আওয়াজ!",
   "en": "A long, fat loop with a tiny tooth — fat loop = fat (heavy) sound!"
  }
 },
 {
  "id": "dad",
  "ar": "ض",
  "name": {
   "bn": "দোয়াদ",
   "en": "Ḍaad"
  },
  "nameAr": "ضَادْ",
  "tr": {
   "bn": "দ",
   "en": "ḍ"
  },
  "forms": {
   "isolated": "ض",
   "initial": "ضـ",
   "medial": "ـضـ",
   "final": "ـض"
  },
  "connects": true,
  "heavy": true,
  "sun": true,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের এক বা দুই পাশ + ওপরের মাড়ির দাঁত",
   "en": "Side(s) of the tongue + the upper molars"
  },
  "sound": {
   "bn": "জিভের পাশ ওপরের মাড়ির দাঁতে চেপে ভারী, মুখ-ভরা 'দ'-এর মতো আওয়াজ। এটি 'য/জ' নয়, আবার সাধারণ 'দ'-ও নয় — আরবির সবচেয়ে বিশেষ অক্ষর।",
   "en": "Press the side(s) of the tongue against the upper molars for a heavy, full-mouthed 'd'-like sound. It is not 'z', and not a plain 'd' — Arabic's most special letter."
  },
  "family": "sad",
  "example": {
   "ar": "ضَعِيفٌ",
   "tr": {
    "bn": "দ'ঈফুন",
    "en": "ḍa'īfun"
   },
   "mean": {
    "bn": "দুর্বল",
    "en": "weak"
   }
  },
  "mnemonic": {
   "bn": "সোয়াদের মাথায় একটি বিন্দু। আরবিকে বলা হয় 'দোয়াদের ভাষা' — কারণ এই আওয়াজ আর কোনো ভাষায় সহজে পাওয়া যায় না!",
   "en": "Ṣaad with a dot. Arabic is nicknamed 'the language of Ḍaad' because this sound is so rare!"
  }
 },
 {
  "id": "tta",
  "ar": "ط",
  "name": {
   "bn": "ত্বোয়া",
   "en": "Ṭaa"
  },
  "nameAr": "طَاءْ",
  "tr": {
   "bn": "ত",
   "en": "ṭ"
  },
  "forms": {
   "isolated": "ط",
   "initial": "طـ",
   "medial": "ـطـ",
   "final": "ـط"
  },
  "connects": true,
  "heavy": true,
  "sun": true,
  "qalqalah": true,
  "makhraj": {
   "bn": "জিভের আগা + ওপরের সামনের দাঁতের গোড়া, জিভের পেছন ওপরে তোলা",
   "en": "Tongue tip + roots of the upper front teeth, back of the tongue raised"
  },
  "sound": {
   "bn": "তা-এর জায়গা থেকেই, কিন্তু জিভের পেছন তুলে মুখ ভরে মোটা 'ত'। বাংলা 'ট' নয়। জযম থাকলে লাফিয়ে ওঠে (কলকলা)।",
   "en": "Same spot as Taa, but with the back of the tongue raised: a heavy, full 't'. Not Bangla 'ট'. With sukun it bounces (qalqalah)."
  },
  "family": "tta",
  "example": {
   "ar": "طَعَامٌ",
   "tr": {
    "bn": "ত্বা'আমুন",
    "en": "ṭa'āmun"
   },
   "mean": {
    "bn": "খাবার",
    "en": "food"
   }
  },
  "mnemonic": {
   "bn": "একটা লুপের ওপর খাড়া একটা দণ্ড — যেন কেউ ছাতা ধরে দাঁড়িয়ে আছে!",
   "en": "A loop with a tall pole standing up — like someone holding an umbrella!"
  }
 },
 {
  "id": "zza",
  "ar": "ظ",
  "name": {
   "bn": "যোয়া",
   "en": "Ẓaa"
  },
  "nameAr": "ظَاءْ",
  "tr": {
   "bn": "য",
   "en": "ẓ"
  },
  "forms": {
   "isolated": "ظ",
   "initial": "ظـ",
   "medial": "ـظـ",
   "final": "ـظ"
  },
  "connects": true,
  "heavy": true,
  "sun": true,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের আগা + ওপরের সামনের দাঁতের মাথা, জিভের পেছন ওপরে তোলা",
   "en": "Tongue tip + edges of the upper front teeth, back of the tongue raised"
  },
  "sound": {
   "bn": "যালের জায়গা থেকে (জিভ দাঁতের মাথায়), কিন্তু জিভের পেছন তুলে মোটা ও গুনগুন আওয়াজ। 'জ' বলবেন না।",
   "en": "Same spot as Dhaal (tongue on the tooth edges), but with the back of the tongue raised: a heavy, buzzing 'th' as in 'this'. Not 'j'."
  },
  "family": "tta",
  "example": {
   "ar": "ظِلٌّ",
   "tr": {
    "bn": "যিল্লুন",
    "en": "ẓillun"
   },
   "mean": {
    "bn": "ছায়া",
    "en": "shade"
   }
  },
  "mnemonic": {
   "bn": "ত্বোয়ার পাশে একটি বিন্দু — ছাতার পাশে একটা বৃষ্টির ফোঁটা!",
   "en": "Ṭaa with a dot beside the pole — a raindrop next to the umbrella!"
  }
 },
 {
  "id": "ain",
  "ar": "ع",
  "name": {
   "bn": "আইন",
   "en": "'Ayn"
  },
  "nameAr": "عَيْنْ",
  "tr": {
   "bn": "আ",
   "en": "'"
  },
  "forms": {
   "isolated": "ع",
   "initial": "عـ",
   "medial": "ـعـ",
   "final": "ـع"
  },
  "connects": true,
  "heavy": false,
  "sun": false,
  "qalqalah": false,
  "makhraj": {
   "bn": "গলার মাঝখান",
   "en": "Middle of the throat"
  },
  "sound": {
   "bn": "গলার মাঝখান চেপে স্বর বের করুন — গলা থেকে চাপা, গভীর 'আ'। বাংলাভাষীরা প্রায়ই সাধারণ 'আ' (হামযা) পড়েন; এতে শব্দের অর্থ বদলে যেতে পারে।",
   "en": "Squeeze the middle of the throat while voicing — a tight, deep 'a' from the throat. Reading it as a plain 'a' (like hamza) is the commonest mistake and can change meaning."
  },
  "family": "ain",
  "example": {
   "ar": "عِلْمٌ",
   "tr": {
    "bn": "'ইলমুন",
    "en": "'ilmun"
   },
   "mean": {
    "bn": "জ্ঞান",
    "en": "knowledge"
   }
  },
  "mnemonic": {
   "bn": "ওপরে ছোট্ট একটা খোলা মুখ, নিচে বড় একটা লেজ — যেন কেউ হাঁ করে গলা থেকে আওয়াজ বের করছে। মজার কথা: عَيْنٌ মানে 'চোখ'!",
   "en": "A small open mouth on top and a big swoosh below — someone opening wide to make a throat sound. Fun fact: عَيْنٌ means 'eye'!"
  }
 },
 {
  "id": "ghain",
  "ar": "غ",
  "name": {
   "bn": "গাইন",
   "en": "Ghayn"
  },
  "nameAr": "غَيْنْ",
  "tr": {
   "bn": "গ",
   "en": "gh"
  },
  "forms": {
   "isolated": "غ",
   "initial": "غـ",
   "medial": "ـغـ",
   "final": "ـغ"
  },
  "connects": true,
  "heavy": true,
  "sun": false,
  "qalqalah": false,
  "makhraj": {
   "bn": "গলার ওপরের অংশ (মুখের দিকের)",
   "en": "Top of the throat (nearest the mouth)"
  },
  "sound": {
   "bn": "গলার ওপরের অংশ থেকে গার্গল করার মতো কম্পনসহ আওয়াজ। এটি সাধারণ বাংলা 'গ' নয়; এটি মোটা অক্ষর।",
   "en": "From the top of the throat, a gargling, vibrating sound (like a French 'r'). Not a plain 'g'. A heavy letter."
  },
  "family": "ain",
  "example": {
   "ar": "غَفُورٌ",
   "tr": {
    "bn": "গাফূরুন",
    "en": "ghafūrun"
   },
   "mean": {
    "bn": "অতি ক্ষমাশীল",
    "en": "Most Forgiving"
   }
  },
  "mnemonic": {
   "bn": "আইনের মাথায় একটি বিন্দু — গার্গল করার সময় যেন এক ফোঁটা পানি ছিটকে উঠেছে!",
   "en": "'Ayn with a dot on its head — a drop of water splashing up while you gargle!"
  }
 },
 {
  "id": "fa",
  "ar": "ف",
  "name": {
   "bn": "ফা",
   "en": "Faa"
  },
  "nameAr": "فَاءْ",
  "tr": {
   "bn": "ফ",
   "en": "f"
  },
  "forms": {
   "isolated": "ف",
   "initial": "فـ",
   "medial": "ـفـ",
   "final": "ـف"
  },
  "connects": true,
  "heavy": false,
  "sun": false,
  "qalqalah": false,
  "makhraj": {
   "bn": "নিচের ঠোঁটের ভেতরের অংশ + ওপরের সামনের দাঁতের মাথা",
   "en": "Inner lower lip + edges of the upper front teeth"
  },
  "sound": {
   "bn": "ওপরের দাঁত নিচের ঠোঁটের ভেতরে ছুঁইয়ে বাতাস ছাড়ুন — ইংরেজি f। বাংলা 'ফ' (প + বাতাস) নয়।",
   "en": "Upper teeth touch the inside of the lower lip, then blow: English 'f'. Not Bangla 'ফ' (a breathy p)."
  },
  "family": "fa",
  "example": {
   "ar": "فِيلٌ",
   "tr": {
    "bn": "ফীলুন",
    "en": "fīlun"
   },
   "mean": {
    "bn": "হাতি",
    "en": "elephant"
   }
  },
  "mnemonic": {
   "bn": "ছোট্ট গোল মাথা, ওপরে এক বিন্দু, আর লম্বা চ্যাপ্টা শরীর। ফা = ১ বিন্দু, শরীর লাইনের ওপর।",
   "en": "A small round head with one dot and a long flat body. Faa = one dot, body on the line."
  }
 },
 {
  "id": "qaf",
  "ar": "ق",
  "name": {
   "bn": "ক্বাফ",
   "en": "Qaaf"
  },
  "nameAr": "قَافْ",
  "tr": {
   "bn": "ক",
   "en": "q"
  },
  "forms": {
   "isolated": "ق",
   "initial": "قـ",
   "medial": "ـقـ",
   "final": "ـق"
  },
  "connects": true,
  "heavy": true,
  "sun": false,
  "qalqalah": true,
  "makhraj": {
   "bn": "জিভের একদম গোড়া + নরম তালু (আলজিভের কাছে)",
   "en": "Very back of the tongue + soft palate (near the uvula)"
  },
  "sound": {
   "bn": "জিভের একদম পেছন নরম তালুতে চেপে গভীর, মোটা 'ক' — কাফ (ك)-এর চেয়েও পেছন থেকে। জযম থাকলে লাফিয়ে ওঠে (কলকলা)।",
   "en": "The very back of the tongue presses the soft palate: a deep, heavy 'q', further back than Kaaf (ك). With sukun it bounces (qalqalah)."
  },
  "family": "fa",
  "example": {
   "ar": "قَلَمٌ",
   "tr": {
    "bn": "ক্বালামুন",
    "en": "qalamun"
   },
   "mean": {
    "bn": "কলম",
    "en": "pen"
   }
  },
  "mnemonic": {
   "bn": "ফা-এর মতো মাথা, কিন্তু দুই বিন্দু, আর লেজ লাইনের নিচে গভীর বাটির মতো — গভীর বাটি, গভীর আওয়াজ!",
   "en": "Like Faa's head but with two dots, and its tail dips deep below the line like a bowl — deep bowl, deep sound!"
  }
 },
 {
  "id": "kaf",
  "ar": "ك",
  "name": {
   "bn": "কাফ",
   "en": "Kaaf"
  },
  "nameAr": "كَافْ",
  "tr": {
   "bn": "ক",
   "en": "k"
  },
  "forms": {
   "isolated": "ك",
   "initial": "كـ",
   "medial": "ـكـ",
   "final": "ـك"
  },
  "connects": true,
  "heavy": false,
  "sun": false,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের পেছন (ক্বাফের একটু সামনে) + তালু",
   "en": "Back of the tongue (a little forward of Qaaf) + the palate"
  },
  "sound": {
   "bn": "জিভের পেছন তালুতে লাগিয়ে পাতলা, হালকা 'ক' — বাংলা 'ক'-এর কাছাকাছি। ক্বাফের মতো গভীর বা মোটা করবেন না।",
   "en": "Back of the tongue against the palate: a light 'k', close to Bangla 'ক'. Don't make it deep and heavy like Qaaf."
  },
  "family": "kaf",
  "example": {
   "ar": "كِتَابٌ",
   "tr": {
    "bn": "কিতাবুন",
    "en": "kitābun"
   },
   "mean": {
    "bn": "বই",
    "en": "book"
   }
  },
  "mnemonic": {
   "bn": "দেখতে একটা ঘরের কোণের মতো, ভেতরে ছোট্ট একটা আঁকাবাঁকা চিহ্ন — কাফ নিজের ঘরে ছোট্ট একটা কলম রাখে!",
   "en": "Like the corner of a little room with a small squiggle inside — Kaaf keeps a tiny pen in its room!"
  }
 },
 {
  "id": "lam",
  "ar": "ل",
  "name": {
   "bn": "লাম",
   "en": "Laam"
  },
  "nameAr": "لَامْ",
  "tr": {
   "bn": "ল",
   "en": "l"
  },
  "forms": {
   "isolated": "ل",
   "initial": "لـ",
   "medial": "ـلـ",
   "final": "ـل"
  },
  "connects": true,
  "heavy": false,
  "sun": true,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের আগার কিনারা + ওপরের সামনের দাঁতের মাড়ি",
   "en": "Front edges of the tongue + gum above the front teeth"
  },
  "sound": {
   "bn": "জিভের আগা ওপরের মাড়িতে লাগিয়ে 'ল'। সাধারণত পাতলা; শুধু 'আল্লাহ' শব্দে (যবর বা পেশের পরে) মোটা হয়।",
   "en": "The tongue tip touches the gum above the front teeth: 'l'. Usually light; only in the word Allah (after fatha or damma) does it become heavy."
  },
  "family": "lam",
  "example": {
   "ar": "لَيْلٌ",
   "tr": {
    "bn": "লাইলুন",
    "en": "laylun"
   },
   "mean": {
    "bn": "রাত",
    "en": "night"
   }
  },
  "mnemonic": {
   "bn": "আলিফের মতো লম্বা, কিন্তু নিচে একটা বাঁকা হুক — যেন একটা হকি স্টিক!",
   "en": "Tall like Alif but with a hook at the bottom — like a hockey stick!"
  }
 },
 {
  "id": "mim",
  "ar": "م",
  "name": {
   "bn": "মীম",
   "en": "Meem"
  },
  "nameAr": "مِيمْ",
  "tr": {
   "bn": "ম",
   "en": "m"
  },
  "forms": {
   "isolated": "م",
   "initial": "مـ",
   "medial": "ـمـ",
   "final": "ـم"
  },
  "connects": true,
  "heavy": false,
  "sun": false,
  "qalqalah": false,
  "makhraj": {
   "bn": "দুই ঠোঁট (শুকনো অংশ), সাথে নাকের বাঁশি",
   "en": "Both lips (the dry part), with the nasal passage"
  },
  "sound": {
   "bn": "দুই ঠোঁট আলতো মিলিয়ে 'ম' — নাক দিয়েও একটু গুনগুন আওয়াজ বের হয়। বাংলা 'ম'-এর মতোই সহজ।",
   "en": "Close both lips gently: 'm', with a little hum through the nose. Just like Bangla 'ম'."
  },
  "family": "mim",
  "example": {
   "ar": "مَسْجِدٌ",
   "tr": {
    "bn": "মাসজিদুন",
    "en": "masjidun"
   },
   "mean": {
    "bn": "মসজিদ",
    "en": "mosque"
   }
  },
  "mnemonic": {
   "bn": "ছোট্ট গোল মাথা আর নিচে ঝুলে থাকা লেজ — যেন সুতায় বাঁধা একটা বেলুন!",
   "en": "A small round head with a tail hanging down — like a balloon on a string!"
  }
 },
 {
  "id": "nun",
  "ar": "ن",
  "name": {
   "bn": "নূন",
   "en": "Noon"
  },
  "nameAr": "نُونْ",
  "tr": {
   "bn": "ন",
   "en": "n"
  },
  "forms": {
   "isolated": "ن",
   "initial": "نـ",
   "medial": "ـنـ",
   "final": "ـن"
  },
  "connects": true,
  "heavy": false,
  "sun": true,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের আগা + ওপরের সামনের দাঁতের মাড়ি, সাথে নাকের বাঁশি",
   "en": "Tongue tip + gum above the front teeth, with the nasal passage"
  },
  "sound": {
   "bn": "জিভের আগা ওপরের মাড়িতে লাগিয়ে 'ন', সাথে নাকে গুনগুন। বাংলা 'ন'-এর মতোই।",
   "en": "Tongue tip on the upper gum: 'n', with a nasal hum. Just like Bangla 'ন'."
  },
  "family": "nun",
  "example": {
   "ar": "نُورٌ",
   "tr": {
    "bn": "নূরুন",
    "en": "nūrun"
   },
   "mean": {
    "bn": "আলো",
    "en": "light"
   }
  },
  "mnemonic": {
   "bn": "একটা গোল বাটি, ওপরে একটি বিন্দু — বাটির ওপর একটা আঙুর! বা-এর চ্যাপ্টা নৌকার চেয়ে নূনের বাটি গভীর।",
   "en": "A round bowl with one dot above — a grape over a bowl! Deeper than Baa's flat boat."
  }
 },
 {
  "id": "waw",
  "ar": "و",
  "name": {
   "bn": "ওয়াও",
   "en": "Waaw"
  },
  "nameAr": "وَاوْ",
  "tr": {
   "bn": "ও",
   "en": "w"
  },
  "forms": {
   "isolated": "و",
   "initial": "و",
   "medial": "ـو",
   "final": "ـو"
  },
  "connects": false,
  "heavy": false,
  "sun": false,
  "qalqalah": false,
  "makhraj": {
   "bn": "দুই ঠোঁট গোল করে (না মিলিয়ে)",
   "en": "Both lips rounded (not closed)"
  },
  "sound": {
   "bn": "দুই ঠোঁট গোল করে, না মিলিয়ে 'ওয়া'। দাঁত দিয়ে ঠোঁট ছুঁয়ে 'ভ' (v) বলবেন না — বাংলাভাষীদের খুব সাধারণ ভুল।",
   "en": "Round the lips without closing them: 'w'. Never touch teeth to lip to make a 'v' — a very common slip."
  },
  "family": "waw",
  "example": {
   "ar": "وَلَدٌ",
   "tr": {
    "bn": "ওয়ালাদুন",
    "en": "waladun"
   },
   "mean": {
    "bn": "সন্তান, ছেলে",
    "en": "child, boy"
   }
  },
  "mnemonic": {
   "bn": "গোল মাথা আর বাঁকা লেজ — দেখতে একটা বড় কমার (,) মতো। গোল মাথাটা মনে করিয়ে দেয়: ঠোঁট গোল করো!",
   "en": "A round head with a curved tail — like a giant comma. The round head reminds you: round your lips!"
  }
 },
 {
  "id": "ha",
  "ar": "ه",
  "name": {
   "bn": "হা (গোল হা)",
   "en": "Haa"
  },
  "nameAr": "هَاءْ",
  "tr": {
   "bn": "হ",
   "en": "h"
  },
  "forms": {
   "isolated": "ه",
   "initial": "هـ",
   "medial": "ـهـ",
   "final": "ـه"
  },
  "connects": true,
  "heavy": false,
  "sun": false,
  "qalqalah": false,
  "makhraj": {
   "bn": "গলার একদম গভীর অংশ (বুকের দিকের)",
   "en": "Deepest part of the throat (nearest the chest)"
  },
  "sound": {
   "bn": "গলার একদম গভীর থেকে নরম, বাতাসভরা 'হ' — আয়নায় ভাপ দেওয়ার মতো 'হা'। শব্দের শেষে থাকলেও স্পষ্ট শোনাতে হবে।",
   "en": "From the deepest part of the throat: a soft, breathy 'h', like fogging a mirror. Say it clearly even at the end of a word."
  },
  "family": "ha",
  "example": {
   "ar": "هُدًى",
   "tr": {
    "bn": "হুদান",
    "en": "hudan"
   },
   "mean": {
    "bn": "হিদায়াত, পথনির্দেশ",
    "en": "guidance"
   }
  },
  "mnemonic": {
   "bn": "এই অক্ষর সবচেয়ে বেশি রূপ বদলায়: ه هـ ـهـ ـه — যেন একজন অভিনেতা, প্রতি দৃশ্যে নতুন পোশাক!",
   "en": "This letter changes shape the most: ه هـ ـهـ ـه — an actor with a new costume in every scene!"
  }
 },
 {
  "id": "hamza",
  "ar": "ء",
  "name": {
   "bn": "হামযা",
   "en": "Hamzah"
  },
  "nameAr": "هَمْزَةْ",
  "tr": {
   "bn": "অ",
   "en": "ʼ"
  },
  "forms": {
   "isolated": "ء",
   "initial": "ء",
   "medial": "ء",
   "final": "ء"
  },
  "connects": false,
  "heavy": false,
  "sun": false,
  "qalqalah": false,
  "makhraj": {
   "bn": "গলার একদম গভীর অংশ (বুকের দিকের)",
   "en": "Deepest part of the throat (nearest the chest)"
  },
  "sound": {
   "bn": "গলার গভীরে হঠাৎ একটা 'থামা' — যেমন 'আ-আ' বলতে গিয়ে মাঝখানে ক্ষণিক বিরতি। তারপর হরকত অনুযায়ী আ, ই বা উ। শব্দের শেষে থাকলে একে হারিয়ে ফেলবেন না।",
   "en": "A sudden catch deep in the throat — the little stop in 'uh-oh'. Then it takes its vowel: a, i or u. Don't swallow it at the end of a word."
  },
  "family": "hamza",
  "example": {
   "ar": "سَمَاءٌ",
   "tr": {
    "bn": "সামা-উন",
    "en": "samāʼun"
   },
   "mean": {
    "bn": "আকাশ",
    "en": "sky"
   }
  },
  "mnemonic": {
   "bn": "দেখতে আইনের (ع) ছোট্ট মাথার মতো। সে একা বসতে পারে (ء), আবার আলিফ, ওয়াও বা ইয়ার পিঠে চড়েও বসে: أ إ ؤ ئ।",
   "en": "Looks like the little head of 'Ayn (ع). It can sit alone (ء) or ride on an Alif, Waaw or Yaa: أ إ ؤ ئ."
  }
 },
 {
  "id": "ya",
  "ar": "ي",
  "name": {
   "bn": "ইয়া",
   "en": "Yaa"
  },
  "nameAr": "يَاءْ",
  "tr": {
   "bn": "ই",
   "en": "y"
  },
  "forms": {
   "isolated": "ي",
   "initial": "يـ",
   "medial": "ـيـ",
   "final": "ـي"
  },
  "connects": true,
  "heavy": false,
  "sun": false,
  "qalqalah": false,
  "makhraj": {
   "bn": "জিভের মাঝখান + তালুর মাঝখান",
   "en": "Middle of the tongue + middle of the hard palate"
  },
  "sound": {
   "bn": "জিভের মাঝখান তালুর দিকে তুলে 'ইয়া' (yes-এর y)। 'জ' বলবেন না।",
   "en": "Raise the middle of the tongue toward the palate: 'y' as in 'yes'. Don't turn it into 'j'."
  },
  "family": "ya",
  "example": {
   "ar": "يَدٌ",
   "tr": {
    "bn": "ইয়াদুন",
    "en": "yadun"
   },
   "mean": {
    "bn": "হাত",
    "en": "hand"
   }
  },
  "mnemonic": {
   "bn": "শেষে বসলে হাঁসের মতো বাঁকা শরীর, নিচে দুই বিন্দু — যেন হাঁসের দুটো পা! ইয়া = নিচে ২ বিন্দু।",
   "en": "At the end it curves like a swan, with two dots underneath — the swan's two feet! Yaa = two dots below."
  }
 }
];

AQ.units.push({
 "id": "reading",
 "order": 1,
 "icon": "ا",
 "color": "teal",
 "title": {
  "bn": "আরবি পড়তে শিখি",
  "en": "Learn to Read"
 },
 "subtitle": {
  "bn": "আলিফ থেকে শুরু করে কুরআনের আয়াত পড়া পর্যন্ত — ধাপে ধাপে আধুনিক কায়দা",
  "en": "From Alif to reading real Quranic ayahs — a modern Qaida, step by step"
 },
 "lessons": [
  {
   "id": "rd-welcome",
   "icon": "أهلا",
   "title": {
    "bn": "স্বাগতম! আরবি কীভাবে কাজ করে",
    "en": "Welcome! How Arabic Works"
   },
   "subtitle": {
    "bn": "শুরু করার আগে আরবি লেখার ৫টি মজার নিয়ম",
    "en": "Five friendly facts about Arabic writing before we begin"
   },
   "minutes": 10,
   "goals": [
    {
     "bn": "আরবি কোন দিক থেকে লেখা ও পড়া হয়",
     "en": "Which direction Arabic is written and read"
    },
    {
     "bn": "আরবি বর্ণমালা বাংলা থেকে কীভাবে আলাদা",
     "en": "How the Arabic alphabet differs from Bangla"
    },
    {
     "bn": "প্রতিদিন ১৫ মিনিটে কীভাবে পড়াশোনা করবেন",
     "en": "How to study in just 15 minutes a day"
    },
    {
     "bn": "এই অ্যাপ ও বই কীভাবে ব্যবহার করবেন",
     "en": "How to use this app and book"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "আস্‌সালামু আলাইকুম! আপনি এমন এক যাত্রা শুরু করছেন, যার শেষে আপনি নিজের চোখে **কুরআন** পড়তে পারবেন। চিন্তার কিছু নেই — বয়স যা-ই হোক, প্রতিদিন অল্প অল্প করে এগোলে আরবি পড়া একদম সহজ।",
     "en": "Assalamu alaikum! You are starting a journey that ends with you reading the **Quran** with your own eyes. Don't worry — whatever your age, a little every day makes Arabic reading easy."
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "আপনি হয়তো জানেন না, কিন্তু আপনি আগে থেকেই অনেক আরবি শব্দ জানেন! বাংলায় কলম, কিতাব, দুনিয়া, ওয়াক্ত, হিসাব — সবই আরবি থেকে এসেছে।",
     "en": "You already know lots of Arabic words without realising it! Bangla words like kolom (pen), kitab (book), duniya (world), waqt (time) and hisab (account) all come from Arabic.",
     "title": {
      "bn": "আপনি আগেই আরবি জানেন!",
      "en": "You already know some Arabic!"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "قَلَمٌ",
       "tr": {
        "bn": "ক্বালামুন",
        "en": "qalamun"
       },
       "mean": {
        "bn": "কলম",
        "en": "pen"
       }
      },
      {
       "ar": "كِتَابٌ",
       "tr": {
        "bn": "কিতাবুন",
        "en": "kitābun"
       },
       "mean": {
        "bn": "কিতাব, বই",
        "en": "book"
       }
      },
      {
       "ar": "دُنْيَا",
       "tr": {
        "bn": "দুনইয়া",
        "en": "dunyā"
       },
       "mean": {
        "bn": "দুনিয়া, পৃথিবী",
        "en": "world"
       }
      },
      {
       "ar": "وَقْتٌ",
       "tr": {
        "bn": "ওয়াক্‌তুন",
        "en": "waqtun"
       },
       "mean": {
        "bn": "ওয়াক্ত, সময়",
        "en": "time"
       }
      },
      {
       "ar": "حِسَابٌ",
       "tr": {
        "bn": "হিসাবুন",
        "en": "ḥisābun"
       },
       "mean": {
        "bn": "হিসাব",
        "en": "account, reckoning"
       }
      }
     ],
     "title": {
      "bn": "বাংলায় আরবি শব্দ",
      "en": "Arabic words inside Bangla"
     }
    },
    {
     "type": "text",
     "bn": "**নিয়ম ১ — ডান থেকে বাম।** বাংলা ও ইংরেজি বাম দিক থেকে শুরু হয়, কিন্তু আরবি শুরু হয় **ডান দিক** থেকে। তাই আরবি বই খোলে আমাদের চোখে 'উল্টো' দিক থেকে — কুরআন শরীফ হাতে নিলেই দেখবেন!",
     "en": "**Fact 1 — Right to left.** Bangla and English start on the left, but Arabic starts on the **right**. So an Arabic book opens from what looks to us like the 'back' — pick up a mushaf and see!",
     "title": {
      "bn": "ডান থেকে বাম",
      "en": "Right to left"
     }
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "ডান হাত দিয়ে আমরা ভালো কাজ শুরু করি — আরবিও শুরু হয় ডান দিক থেকে! পড়ার সময় আঙুল ডানে রেখে বাম দিকে সরান।",
     "en": "We begin good deeds with the right hand — and Arabic begins on the right! When reading, put your finger on the right and slide it left."
    },
    {
     "type": "text",
     "bn": "**নিয়ম ২ — ২৯টি অক্ষর।** আরবি বর্ণমালায় (হামযাসহ) ২৯টি অক্ষর। বাংলার মতো আলাদা 'স্বরবর্ণ' নেই — প্রায় সব অক্ষরই ব্যঞ্জনের মতো কাজ করে।",
     "en": "**Fact 2 — 29 letters.** The Arabic alphabet has 29 letters (counting hamza). There are no separate 'vowel letters' like in Bangla — almost every letter works like a consonant.",
     "title": {
      "bn": "২৯টি অক্ষর",
      "en": "29 letters"
     }
    },
    {
     "type": "letters",
     "items": [
      "alif",
      "ba",
      "ta",
      "tha",
      "jim",
      "hha",
      "kha",
      "dal",
      "dhal",
      "ra",
      "zay",
      "sin",
      "shin",
      "sad",
      "dad",
      "tta",
      "zza",
      "ain",
      "ghain",
      "fa",
      "qaf",
      "kaf",
      "lam",
      "mim",
      "nun",
      "waw",
      "ha",
      "hamza",
      "ya"
     ],
     "title": {
      "bn": "পুরো বর্ণমালা — যেকোনো অক্ষরে চাপ দিন",
      "en": "The whole alphabet — tap any letter"
     }
    },
    {
     "type": "text",
     "bn": "**নিয়ম ৩ — বড় হাতের অক্ষর নেই।** ইংরেজির মতো A/a ঝামেলা নেই। তবে শব্দের শুরু, মাঝখান বা শেষে অক্ষরের চেহারা একটু বদলায় — সেটা পরে শিখব।",
     "en": "**Fact 3 — No capital letters.** No A/a fuss like English. But a letter's shape changes a little at the start, middle or end of a word — we'll learn that soon.",
     "title": {
      "bn": "বড় হাতের অক্ষর নেই",
      "en": "No capitals"
     }
    },
    {
     "type": "text",
     "bn": "**নিয়ম ৪ — অক্ষরগুলো হাত ধরাধরি করে।** আরবিতে শব্দের অক্ষরগুলো সাধারণত একে অপরের সাথে জোড়া লাগানো থাকে, যেন হাত ধরে দাঁড়িয়ে আছে।",
     "en": "**Fact 4 — Letters hold hands.** In an Arabic word the letters are usually joined to each other, as if holding hands.",
     "title": {
      "bn": "অক্ষর জোড়া লাগে",
      "en": "Letters join"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "كَتَبَ",
       "tr": {
        "bn": "কাতাবা",
        "en": "kataba"
       },
       "mean": {
        "bn": "সে লিখল",
        "en": "he wrote"
       },
       "note": {
        "bn": "ك + ت + ب = তিনটি অক্ষর জোড়া লেগে একটি শব্দ",
        "en": "ك + ت + ب = three letters joined into one word"
       }
      }
     ]
    },
    {
     "type": "text",
     "bn": "**নিয়ম ৫ — স্বর হলো ছোট্ট চিহ্ন।** বাংলায় যেমন ক + া = কা, ক + ি = কি — আরবিতেও তেমনি অক্ষরের ওপরে বা নিচে ছোট্ট চিহ্ন (হরকত) বসিয়ে স্বর দেওয়া হয়।",
     "en": "**Fact 5 — Vowels are tiny marks.** Just as Bangla adds া or ি to ক to make কা, কি — Arabic puts tiny marks (harakat) above or below a letter to give it a vowel.",
     "title": {
      "bn": "স্বর = ছোট্ট চিহ্ন",
      "en": "Vowels = tiny marks"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "بَ",
       "tr": {
        "bn": "বা",
        "en": "ba"
       },
       "note": {
        "bn": "ওপরে তির্যক দাগ = 'আ'",
        "en": "slanted line above = 'a'"
       }
      },
      {
       "ar": "بِ",
       "tr": {
        "bn": "বি",
        "en": "bi"
       },
       "note": {
        "bn": "নিচে তির্যক দাগ = 'ই'",
        "en": "slanted line below = 'i'"
       }
      },
      {
       "ar": "بُ",
       "tr": {
        "bn": "বু",
        "en": "bu"
       },
       "note": {
        "bn": "ওপরে ছোট্ট و = 'উ'",
        "en": "tiny و above = 'u'"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "বাংলার 'কার' চিহ্ন (া ি ু) আর আরবির 'হরকত' একই কাজ করে। পার্থক্য শুধু একটাই: আরবিতে এগুলো অক্ষরের ওপরে-নিচে বসে।",
     "en": "Bangla vowel signs (া ি ু) and Arabic harakat do the same job. The only difference: in Arabic they sit above or below the letter."
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "বিষয়",
       "en": "Feature"
      },
      {
       "bn": "বাংলা",
       "en": "Bangla"
      },
      {
       "bn": "আরবি",
       "en": "Arabic"
      }
     ],
     "rows": [
      [
       {
        "bn": "দিক",
        "en": "Direction"
       },
       {
        "bn": "বাম → ডান",
        "en": "Left → right"
       },
       {
        "bn": "ডান → বাম",
        "en": "Right → left"
       }
      ],
      [
       {
        "bn": "অক্ষর",
        "en": "Letters"
       },
       {
        "bn": "৫০টি (স্বর + ব্যঞ্জন)",
        "en": "50 (vowels + consonants)"
       },
       {
        "bn": "২৯টি",
        "en": "29"
       }
      ],
      [
       {
        "bn": "স্বরচিহ্ন",
        "en": "Vowel signs"
       },
       {
        "bn": "কার: া ি ু",
        "en": "kar signs: া ি ু"
       },
       {
        "bn": "হরকত: ◌َ ◌ِ ◌ُ",
        "en": "harakat: ◌َ ◌ِ ◌ُ"
       }
      ],
      [
       {
        "bn": "যুক্ত করা",
        "en": "Joining"
       },
       {
        "bn": "যুক্তবর্ণ (ক্ষ, ন্ত…)",
        "en": "conjuncts (ক্ষ, ন্ত…)"
       },
       {
        "bn": "পাশাপাশি জোড়া লাগে",
        "en": "letters join side by side"
       }
      ]
     ],
     "title": {
      "bn": "এক নজরে: বাংলা বনাম আরবি",
      "en": "At a glance: Bangla vs Arabic"
     }
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "কুরআনে একটি অক্ষরের উচ্চারণ ভুল হলে অর্থ বদলে যেতে পারে। নিচের দুটি শব্দ দেখুন — শুধু প্রথম অক্ষর আলাদা!",
     "en": "In the Quran, mispronouncing one letter can change the meaning. Look at these two words — only the first letter differs!",
     "title": {
      "bn": "কেন সঠিক উচ্চারণ জরুরি",
      "en": "Why correct sounds matter"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "قَلْبٌ",
       "label": {
        "bn": "ক্বালবুন — হৃদয়",
        "en": "qalbun — heart"
       },
       "desc": {
        "bn": "গলার কাছ থেকে গভীর ق",
        "en": "deep ق from the back of the mouth"
       }
      },
      {
       "ar": "كَلْبٌ",
       "label": {
        "bn": "কালবুন — কুকুর",
        "en": "kalbun — dog"
       },
       "desc": {
        "bn": "হালকা ك",
        "en": "light ك"
       }
      }
     ]
    },
    {
     "type": "steps",
     "items": [
      {
       "title": {
        "bn": "শুনুন",
        "en": "Listen"
       },
       "desc": {
        "bn": "আরবি লেখায় চাপ দিয়ে আওয়াজ শুনুন (বইয়ে থাকলে শিক্ষক বা ক্বারীর তিলাওয়াত শুনুন)।",
        "en": "Tap Arabic text to hear it (with the book, listen to a teacher or reciter)."
       }
      },
      {
       "title": {
        "bn": "জোরে বলুন",
        "en": "Say it aloud"
       },
       "desc": {
        "bn": "মনে মনে নয় — মুখে জোরে বলুন। জিভ ও ঠোঁটকে অভ্যস্ত করুন।",
        "en": "Not silently — out loud. Train your tongue and lips."
       }
      },
      {
       "title": {
        "bn": "লিখুন",
        "en": "Write it"
       },
       "desc": {
        "bn": "প্রতিটি অক্ষর আঙুল বা কলম দিয়ে ট্রেস করুন।",
        "en": "Trace every letter with your finger or a pen."
       }
      },
      {
       "title": {
        "bn": "কুইজ দিন",
        "en": "Take the quiz"
       },
       "desc": {
        "bn": "প্রতি পাঠের শেষে কুইজ দিন — ভুল হলে আবার দেখুন।",
        "en": "Finish each lesson with its quiz — review whatever you miss."
       }
      },
      {
       "title": {
        "bn": "আগেরটা ঝালাই করুন",
        "en": "Review yesterday"
       },
       "desc": {
        "bn": "নতুন পাঠের আগে ২ মিনিট আগের পাঠ দেখে নিন।",
        "en": "Spend 2 minutes on yesterday's lesson before starting a new one."
       }
      }
     ],
     "title": {
      "bn": "প্রতিদিন ১৫ মিনিটের রুটিন",
      "en": "Your 15-minute daily routine"
     }
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "প্রতিদিন ১৫ মিনিট, সপ্তাহে একদিন ৩ ঘণ্টার চেয়ে অনেক বেশি কাজ করে। একটা নির্দিষ্ট সময় ঠিক করুন — যেমন ফজরের পর বা ঘুমানোর আগে।",
     "en": "15 minutes every day beats 3 hours once a week. Pick a fixed time — after Fajr, or before bed."
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "অ্যাপে: যেকোনো আরবি লেখা বা অক্ষরে চাপ দিলে আওয়াজ শোনা যাবে। বইয়ে: কুইজের উত্তর ইউনিটের শেষে আছে, আর ট্রেসিংয়ের জন্য ডট লাইন দেওয়া আছে।",
     "en": "In the app: tap any Arabic word or letter to hear it. In the book: quiz answers are at the end of the unit, and dotted rows are there for tracing.",
     "title": {
      "bn": "অ্যাপ ও বই ব্যবহার",
      "en": "Using the app and book"
     }
    },
    {
     "type": "practice",
     "bn": "ডান দিক থেকে শুরু করে প্রতিটি অক্ষরে আঙুল রাখুন (নাম এখনই না জানলেও চলবে)।",
     "en": "Starting from the right, touch each letter (it's fine if you don't know the names yet).",
     "lines": [
      "ا ب ت ث",
      "ج ح خ",
      "د ذ ر ز"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "আরবি কোন দিক থেকে পড়া হয়?",
        "en": "Which way is Arabic read?"
       },
       "options": [
        {
         "bn": "ডান থেকে বাম",
         "en": "Right to left"
        },
        {
         "bn": "বাম থেকে ডান",
         "en": "Left to right"
        },
        {
         "bn": "ওপর থেকে নিচে",
         "en": "Top to bottom"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এই কোর্সে আরবি বর্ণমালায় কয়টি অক্ষর?",
        "en": "How many letters does the Arabic alphabet have in this course?"
       },
       "options": [
        {
         "bn": "২৬",
         "en": "26"
        },
        {
         "bn": "২৯",
         "en": "29"
        },
        {
         "bn": "৩৯",
         "en": "39"
        }
       ],
       "answer": 1,
       "explain": {
        "bn": "হামযাসহ ২৯টি অক্ষর।",
        "en": "29 letters, counting hamza."
       }
      },
      {
       "q": {
        "bn": "আরবিতে স্বর (আ, ই, উ) সাধারণত কীভাবে লেখা হয়?",
        "en": "How are vowels (a, i, u) usually written in Arabic?"
       },
       "options": [
        {
         "bn": "বড় হাতের অক্ষর দিয়ে",
         "en": "With capital letters"
        },
        {
         "bn": "অক্ষরের ওপরে-নিচে ছোট্ট চিহ্ন দিয়ে",
         "en": "With tiny marks above or below letters"
        },
        {
         "bn": "আলাদা বড় অক্ষর দিয়ে",
         "en": "With separate big letters"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "আরবিতে কি বড় হাতের (capital) অক্ষর আছে?",
        "en": "Does Arabic have capital letters?"
       },
       "options": [
        {
         "bn": "হ্যাঁ",
         "en": "Yes"
        },
        {
         "bn": "না",
         "en": "No"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "এই শব্দের অর্থ কী?",
        "en": "What does this word mean?"
       },
       "ar": "قَلْبٌ",
       "options": [
        {
         "bn": "কুকুর",
         "en": "dog"
        },
        {
         "bn": "কলম",
         "en": "pen"
        },
        {
         "bn": "হৃদয়",
         "en": "heart"
        }
       ],
       "answer": 2,
       "explain": {
        "bn": "قَلْبٌ = হৃদয়; كَلْبٌ = কুকুর। একটি অক্ষরেই অর্থ বদলে যায়!",
        "en": "قَلْبٌ = heart; كَلْبٌ = dog. One letter changes everything!"
       }
      },
      {
       "q": {
        "bn": "আরবি শেখার সবচেয়ে ভালো রুটিন কোনটি?",
        "en": "What is the best routine for learning?"
       },
       "options": [
        {
         "bn": "প্রতিদিন ১৫ মিনিট",
         "en": "15 minutes every day"
        },
        {
         "bn": "শুধু পরীক্ষার আগে",
         "en": "Only before a test"
        },
        {
         "bn": "মাসে একবার ৩ ঘণ্টা",
         "en": "3 hours once a month"
        }
       ],
       "answer": 0
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-letters-1",
   "icon": "ا ب",
   "title": {
    "bn": "অক্ষর ১: আলিফ থেকে খা",
    "en": "Letters 1: Alif to Khaa"
   },
   "subtitle": {
    "bn": "প্রথম ৭টি অক্ষর: ا ب ت ث ج ح خ",
    "en": "The first 7 letters: ا ب ت ث ج ح خ"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "প্রথম ৭টি অক্ষরের নাম, আকার ও উচ্চারণ",
     "en": "Names, shapes and sounds of the first 7 letters"
    },
    {
     "bn": "বিন্দু দেখে ب ت ث চেনা",
     "en": "Telling ب ت ث apart by their dots"
    },
    {
     "bn": "গলার অক্ষর ح ও খ-এর সঠিক আওয়াজ",
     "en": "The throat sounds ح and خ"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "চলুন প্রথম ৭টি অক্ষরের সাথে পরিচিত হই! প্রতিটি কার্ডে চাপ দিন, আওয়াজ শুনুন, আর জোরে জোরে নাম বলুন।",
     "en": "Let's meet the first 7 letters! Tap each card, listen, and say the name out loud."
    },
    {
     "type": "letters",
     "items": [
      "alif",
      "ba",
      "ta",
      "tha",
      "jim",
      "hha",
      "kha"
     ]
    },
    {
     "type": "text",
     "bn": "**আলিফ (ا)** একটা সোজা খাড়া দাগ। আলিফ নিজে কোনো আলাদা শব্দ করে না — এটি হয় হামযা বা হরকত বহন করে (أَ = আ), নয়তো আগের 'আ'-কে লম্বা করে (بَا = বা-)।",
     "en": "**Alif (ا)** is one straight standing line. It makes no sound of its own — it either carries a hamza/vowel (أَ = a) or stretches the 'a' before it (بَا = bā).",
     "title": {
      "bn": "আলিফ: সোজা লাঠি",
      "en": "Alif: the straight stick"
     }
    },
    {
     "type": "text",
     "bn": "এবার একটা ছোট্ট পরিবার: **ب ت ث**। তিন ভাইয়ের শরীর একদম এক — একটা চ্যাপ্টা নৌকা। পার্থক্য শুধু **বিন্দুতে**।",
     "en": "Now a little family: **ب ت ث**. The three brothers have exactly the same body — a flat boat. The only difference is the **dots**.",
     "title": {
      "bn": "নৌকা পরিবার",
      "en": "The boat family"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "ب",
       "label": {
        "bn": "বা",
        "en": "Baa"
       },
       "desc": {
        "bn": "নিচে ১ বিন্দু",
        "en": "1 dot below"
       }
      },
      {
       "ar": "ت",
       "label": {
        "bn": "তা",
        "en": "Taa"
       },
       "desc": {
        "bn": "ওপরে ২ বিন্দু",
        "en": "2 dots above"
       }
      },
      {
       "ar": "ث",
       "label": {
        "bn": "ছা",
        "en": "Thaa"
       },
       "desc": {
        "bn": "ওপরে ৩ বিন্দু",
        "en": "3 dots above"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "১-২-৩ সিঁড়ি: বা = নিচে ১, তা = ওপরে ২, ছা = ওপরে ৩। অক্ষর যত এগোয়, বিন্দু তত বাড়ে!",
     "en": "The 1-2-3 ladder: Baa = 1 below, Taa = 2 above, Thaa = 3 above. As you move along, the dots go up!"
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "ث (ছা)-কে 'স' পড়বেন না! জিভের আগা ওপরের দাঁতের নিচে সামান্য বের করে আলতো বাতাস ছাড়ুন — ইংরেজি think-এর th।",
     "en": "Don't read ث (Thaa) as 's'! Let the tongue tip peek out under the upper teeth and blow gently — the 'th' of 'think'."
    },
    {
     "type": "text",
     "bn": "দ্বিতীয় পরিবার: **ج ح خ**। শরীর এক — একটা খোলা মুখ বা বড়শি। এখানেও পার্থক্য বিন্দুতে: জীমের পেটে, খা-এর মাথায়, আর হা-এর কোথাও নেই।",
     "en": "Second family: **ج ح خ**. Same body — an open mouth or hook. Again the dots decide: Jeem's is in the belly, Khaa's on the head, and Ḥaa has none.",
     "title": {
      "bn": "বড়শি পরিবার",
      "en": "The hook family"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "ج",
       "label": {
        "bn": "জীম",
        "en": "Jeem"
       },
       "desc": {
        "bn": "পেটের ভেতরে ১ বিন্দু",
        "en": "1 dot inside the belly"
       }
      },
      {
       "ar": "ح",
       "label": {
        "bn": "হা",
        "en": "Ḥaa"
       },
       "desc": {
        "bn": "কোনো বিন্দু নেই",
        "en": "no dot"
       }
      },
      {
       "ar": "خ",
       "label": {
        "bn": "খা",
        "en": "Khaa"
       },
       "desc": {
        "bn": "মাথার ওপরে ১ বিন্দু",
        "en": "1 dot on top"
       }
      }
     ]
    },
    {
     "type": "text",
     "bn": "ح ও خ দুটোই **গলা** থেকে আসে, কিন্তু গলার ভিন্ন জায়গা থেকে। আসল মজা এখানেই — চলুন আওয়াজের তফাৎ শুনি।",
     "en": "ح and خ both come from the **throat**, but from different parts of it. Here's the fun bit — let's hear the difference.",
     "title": {
      "bn": "গলার আওয়াজ",
      "en": "Throat sounds"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "حَ",
       "label": {
        "bn": "হা — গলার মাঝখান",
        "en": "ḥa — middle of throat"
       },
       "desc": {
        "bn": "পরিষ্কার, ঘষা বাতাস: গরম চা খেয়ে 'হাহ্'",
        "en": "clean, raspy air: the 'ḥaah' after hot tea"
       }
      },
      {
       "ar": "خَ",
       "label": {
        "bn": "খা — গলার ওপর",
        "en": "kha — top of throat"
       },
       "desc": {
        "bn": "খসখসে, মোটা আওয়াজ: গলা পরিষ্কার করার মতো",
        "en": "scratchy, heavy: like clearing your throat"
       }
      },
      {
       "ar": "هَ",
       "label": {
        "bn": "হা (গোল হা) — গলার গভীর",
        "en": "ha — deepest throat"
       },
       "desc": {
        "bn": "নরম, হালকা 'হ' (পরে শিখব)",
        "en": "soft, light 'h' (coming later)"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "ح বলার কৌশল: চশমার কাচে ভাপ দিন 'হাআ', এবার গলাটা একটু চেপে ধরুন — এটাই ح! আর خ: যেন গলায় কাঁটা আটকেছে, পরিষ্কার করছেন।",
     "en": "Trick for ح: breathe 'haaa' to fog your glasses, then tighten the throat a little — that's ح! And خ: as if clearing a fishbone from your throat."
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "أَبٌ",
       "tr": {
        "bn": "আবুন",
        "en": "abun"
       },
       "mean": {
        "bn": "বাবা",
        "en": "father"
       },
       "hl": "أ"
      },
      {
       "ar": "بَابٌ",
       "tr": {
        "bn": "বাবুন",
        "en": "bābun"
       },
       "mean": {
        "bn": "দরজা",
        "en": "door"
       },
       "hl": "ب"
      },
      {
       "ar": "تَمْرٌ",
       "tr": {
        "bn": "তামরুন",
        "en": "tamrun"
       },
       "mean": {
        "bn": "খেজুর",
        "en": "dates"
       },
       "hl": "ت"
      },
      {
       "ar": "ثَوْبٌ",
       "tr": {
        "bn": "ছাওবুন",
        "en": "thawbun"
       },
       "mean": {
        "bn": "পোশাক",
        "en": "garment"
       },
       "hl": "ث"
      },
      {
       "ar": "جَبَلٌ",
       "tr": {
        "bn": "জাবালুন",
        "en": "jabalun"
       },
       "mean": {
        "bn": "পাহাড়",
        "en": "mountain"
       },
       "hl": "ج"
      },
      {
       "ar": "حَجٌّ",
       "tr": {
        "bn": "হাজ্জুন",
        "en": "ḥajjun"
       },
       "mean": {
        "bn": "হজ",
        "en": "Hajj"
       },
       "hl": "ح"
      },
      {
       "ar": "خُبْزٌ",
       "tr": {
        "bn": "খুবযুন",
        "en": "khubzun"
       },
       "mean": {
        "bn": "রুটি",
        "en": "bread"
       },
       "hl": "خ"
      }
     ],
     "title": {
      "bn": "শব্দে অক্ষর খুঁজুন (শুনুন ও বলুন)",
      "en": "Find the letter in a word (listen and repeat)"
     }
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "এই শব্দগুলো এখনই পড়তে না পারলেও কোনো সমস্যা নেই! শুধু শুনুন আর অক্ষরটা খুঁজে বের করুন। কয়েক পাঠ পরে নিজেই পড়বেন, ইন শা আল্লাহ।",
     "en": "Don't worry if you can't read these words yet! Just listen and spot the letter. In a few lessons you'll read them yourself, in sha Allah."
    },
    {
     "type": "trace",
     "items": [
      "ا",
      "ب",
      "ت",
      "ث",
      "ج",
      "ح",
      "خ"
     ],
     "title": {
      "bn": "লেখার অনুশীলন",
      "en": "Writing practice"
     }
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "লেখার সময়ও ডান থেকে বামে কলম চালান। আগে শরীর লিখুন, শেষে বিন্দু দিন।",
     "en": "When writing, move your pen right to left too. Write the body first, add the dots last."
    },
    {
     "type": "practice",
     "bn": "প্রতিটি অক্ষরের নাম জোরে বলুন। ডান দিক থেকে শুরু করুন!",
     "en": "Say each letter's name aloud. Start from the right!",
     "lines": [
      "ا ب ت ث",
      "ج ح خ",
      "ب ت ث ب",
      "ح خ ج ح",
      "ث ت ب ا",
      "خ ح ج ب ت",
      "ا ث ح ت خ ب ج"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "এই অক্ষরের নাম কী?",
        "en": "What is this letter called?"
       },
       "ar": "ب",
       "options": [
        {
         "bn": "বা",
         "en": "Baa"
        },
        {
         "bn": "তা",
         "en": "Taa"
        },
        {
         "bn": "ছা",
         "en": "Thaa"
        },
        {
         "bn": "নূন",
         "en": "Noon"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "ث অক্ষরে কয়টি বিন্দু?",
        "en": "How many dots does ث have?"
       },
       "ar": "ث",
       "options": [
        {
         "bn": "১",
         "en": "1"
        },
        {
         "bn": "২",
         "en": "2"
        },
        {
         "bn": "৩",
         "en": "3"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "এই অক্ষরের বিন্দু কোথায়?",
        "en": "Where is this letter's dot?"
       },
       "ar": "خ",
       "options": [
        {
         "bn": "নিচে",
         "en": "Below"
        },
        {
         "bn": "পেটের ভেতরে",
         "en": "Inside the belly"
        },
        {
         "bn": "ওপরে",
         "en": "Above"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "কোন অক্ষর গলার মাঝখান থেকে আসে?",
        "en": "Which letter comes from the middle of the throat?"
       },
       "options": [
        "ح",
        "ج",
        "خ"
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এই অক্ষরের নাম কী?",
        "en": "What is this letter called?"
       },
       "ar": "ت",
       "options": [
        {
         "bn": "বা",
         "en": "Baa"
        },
        {
         "bn": "তা",
         "en": "Taa"
        },
        {
         "bn": "ছা",
         "en": "Thaa"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "ث-এর সঠিক আওয়াজ কোনটি?",
        "en": "What is the correct sound of ث?"
       },
       "options": [
        {
         "bn": "স",
         "en": "s"
        },
        {
         "bn": "শ",
         "en": "sh"
        },
        {
         "bn": "think-এর th",
         "en": "'th' as in think"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "কোন অক্ষরের পেটের ভেতরে বিন্দু?",
        "en": "Which letter has its dot inside the belly?"
       },
       "options": [
        "ج",
        "ح",
        "خ"
       ],
       "answer": 0
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-letters-2",
   "icon": "د س",
   "title": {
    "bn": "অক্ষর ২: দাল থেকে সোয়াদ",
    "en": "Letters 2: Daal to Ṣaad"
   },
   "subtitle": {
    "bn": "পরের ৭টি অক্ষর: د ذ ر ز س ش ص",
    "en": "The next 7 letters: د ذ ر ز س ش ص"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "د ذ ر ز — চার 'লাজুক' অক্ষর চেনা",
     "en": "Meet four 'shy' letters: د ذ ر ز"
    },
    {
     "bn": "দাল আর রা-এর আকারের পার্থক্য",
     "en": "The shape difference between Daal and Raa"
    },
    {
     "bn": "س ش ص — তিন রকম 'স'-এর আওয়াজ",
     "en": "Three kinds of 's': س ش ص"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "দারুণ! আপনি ৭টি অক্ষর শিখে ফেলেছেন। এবার আরও ৭টি। এই দলে আছে দুটি জোড়া (د ذ, ر ز) আর 'স'-এর তিন রকম রূপ।",
     "en": "Great job — 7 letters down! Now 7 more. This group has two pairs (د ذ, ر ز) and three different kinds of 's'."
    },
    {
     "type": "letters",
     "items": [
      "dal",
      "dhal",
      "ra",
      "zay",
      "sin",
      "shin",
      "sad"
     ]
    },
    {
     "type": "text",
     "bn": "**د (দাল)** দেখতে একটা ভাঁজ করা কনুইয়ের মতো, আর **ر (রা)** একটা ছোট্ট স্লিপারের মতো। দুটোকে প্রায়ই গুলিয়ে ফেলা হয় — চলুন পাশাপাশি দেখি।",
     "en": "**د (Daal)** looks like a bent elbow, and **ر (Raa)** like a little slide. People often mix them up — let's put them side by side.",
     "title": {
      "bn": "দাল বনাম রা",
      "en": "Daal vs Raa"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "د",
       "label": {
        "bn": "দাল",
        "en": "Daal"
       },
       "desc": {
        "bn": "কোণাকৃতি, লাইনের ওপরে বসে থাকে",
        "en": "angled, sits ON the line"
       }
      },
      {
       "ar": "ر",
       "label": {
        "bn": "রা",
        "en": "Raa"
       },
       "desc": {
        "bn": "গোল বাঁক, লাইনের নিচে নেমে যায়",
        "en": "curved, dips BELOW the line"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "দাল **দাঁড়িয়ে** থাকে লাইনের ওপর (দ = দাঁড়ানো), আর রা **রাস্তায় পিছলে** নিচে চলে যায় (র = রাস্তা)!",
     "en": "Daal **sits** on the line like someone resting; Raa **slides** down below it. Daal = Down-sitting, Raa = Rolling down!"
    },
    {
     "type": "text",
     "bn": "এবার বিন্দু যোগ করুন: দাল + বিন্দু = **ذ (যাল)**, রা + বিন্দু = **ز (যা)**। দুটোর বাংলা উচ্চারণ লেখা হয় 'য' দিয়ে, কিন্তু আসলে আওয়াজ একদম আলাদা!",
     "en": "Now add a dot: Daal + dot = **ذ (Dhaal)**, Raa + dot = **ز (Zaay)**. Bangla writes both with 'য', but they actually sound quite different!",
     "title": {
      "bn": "দুই রকম 'য'",
      "en": "Two different 'z' sounds"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "ذَ",
       "label": {
        "bn": "যাল — জিভ দাঁতের ফাঁকে",
        "en": "dha — tongue between teeth"
       },
       "desc": {
        "bn": "ইংরেজি this-এর th; জিভ একটু বের হবে",
        "en": "the 'th' in 'this'; tongue peeks out"
       }
      },
      {
       "ar": "زَ",
       "label": {
        "bn": "যা — জিভ ভেতরে",
        "en": "za — tongue inside"
       },
       "desc": {
        "bn": "মৌমাছির 'যযয'; ইংরেজি z",
        "en": "a bee's 'zzz'; English z"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "বাংলাভাষীরা ذ ও ز দুটোকেই প্রায়ই 'জ' পড়েন। এটা ভুল! ذ-তে জিভ দাঁতে, ز-তে মৌমাছির গুঞ্জন — কোনোটাই 'জ' নয়।",
     "en": "Bangla speakers often read both ذ and ز as 'j'. That's wrong! ذ = tongue on teeth, ز = bee buzz — neither is 'j'."
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "د ذ ر ز — এই চারটি অক্ষর একটু 'লাজুক': এরা আগের অক্ষরের হাত ধরে, কিন্তু পরের অক্ষরের সাথে কখনো জোড়া লাগে না। এদের কথা পরে বিস্তারিত শিখব।",
     "en": "د ذ ر ز are a bit 'shy': they hold the hand of the letter before them, but never join to the letter after. More about this later."
    },
    {
     "type": "text",
     "bn": "এবার 'স' পরিবার। **س (সীন)** তিন দাঁতওয়ালা, **ش (শীন)** একই আকারের ওপর তিন বিন্দু, আর **ص (সোয়াদ)** একটা মোটা লুপ।",
     "en": "Now the 's' family. **س (Seen)** has three teeth, **ش (Sheen)** is the same shape with three dots, and **ص (Ṣaad)** is a fat loop.",
     "title": {
      "bn": "তিন রকম 'স'",
      "en": "Three kinds of 's'"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "سَ",
       "label": {
        "bn": "সীন — চিকন স",
        "en": "sa — thin s"
       },
       "desc": {
        "bn": "পাতলা শিস, সাপের স্‌স্‌স্",
        "en": "thin hiss, like a snake"
       }
      },
      {
       "ar": "شَ",
       "label": {
        "bn": "শীন — শ",
        "en": "sha — sh"
       },
       "desc": {
        "bn": "চুপ করানোর শ্‌শ্‌",
        "en": "the 'shh' of 'hush'"
       }
      },
      {
       "ar": "صَ",
       "label": {
        "bn": "সোয়াদ — মোটা স",
        "en": "ṣa — heavy s"
       },
       "desc": {
        "bn": "জিভের পেছন তুলে মুখ ভরা আওয়াজ",
        "en": "back of tongue raised, full-mouthed"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "সবচেয়ে সাধারণ ভুল: س-কে 'শ' পড়া। سَلَامٌ হলো 'সালাম', 'শালাম' নয়! আওয়াজ চিকন রাখুন।",
     "en": "The most common slip: reading س as 'sh'. سَلَامٌ is 'salām', not 'shalām'! Keep it thin."
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "সীনের তিন দাঁত = চিরুনি। শীন = চিরুনির ওপর তিন ফোঁটা পানি 'শ্‌শ্‌' করে পড়ছে। সোয়াদ = মোটা ডিম — মোটা আওয়াজ!",
     "en": "Seen's three teeth = a comb. Sheen = three water drops on the comb going 'shh'. Ṣaad = a fat egg — fat sound!"
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "دَرْسٌ",
       "tr": {
        "bn": "দারসুন",
        "en": "darsun"
       },
       "mean": {
        "bn": "পাঠ",
        "en": "lesson"
       },
       "hl": "د"
      },
      {
       "ar": "ذَهَبٌ",
       "tr": {
        "bn": "যাহাবুন",
        "en": "dhahabun"
       },
       "mean": {
        "bn": "সোনা",
        "en": "gold"
       },
       "hl": "ذ"
      },
      {
       "ar": "رَحْمَةٌ",
       "tr": {
        "bn": "রাহমাতুন",
        "en": "raḥmatun"
       },
       "mean": {
        "bn": "দয়া, রহমত",
        "en": "mercy"
       },
       "hl": "ر"
      },
      {
       "ar": "زَكَاةٌ",
       "tr": {
        "bn": "যাকাতুন",
        "en": "zakātun"
       },
       "mean": {
        "bn": "যাকাত",
        "en": "zakah (charity)"
       },
       "hl": "ز"
      },
      {
       "ar": "سَمَكٌ",
       "tr": {
        "bn": "সামাকুন",
        "en": "samakun"
       },
       "mean": {
        "bn": "মাছ",
        "en": "fish"
       },
       "hl": "س"
      },
      {
       "ar": "شَجَرٌ",
       "tr": {
        "bn": "শাজারুন",
        "en": "shajarun"
       },
       "mean": {
        "bn": "গাছপালা",
        "en": "trees"
       },
       "hl": "ش"
      },
      {
       "ar": "صَلَاةٌ",
       "tr": {
        "bn": "সালাতুন",
        "en": "ṣalātun"
       },
       "mean": {
        "bn": "নামায, সালাত",
        "en": "prayer"
       },
       "hl": "ص"
      }
     ],
     "title": {
      "bn": "শব্দে অক্ষর খুঁজুন",
      "en": "Find the letter in a word"
     }
    },
    {
     "type": "trace",
     "items": [
      "د",
      "ذ",
      "ر",
      "ز",
      "س",
      "ش",
      "ص"
     ],
     "title": {
      "bn": "লেখার অনুশীলন",
      "en": "Writing practice"
     }
    },
    {
     "type": "practice",
     "bn": "নাম বলুন — দ্রুত, কিন্তু সঠিকভাবে!",
     "en": "Say the names — quickly, but correctly!",
     "lines": [
      "د ذ ر ز",
      "س ش ص",
      "د ر د ر",
      "ذ ز ذ ز",
      "س ص س ص",
      "ش س ص ذ ز",
      "ا ب ت ث ج ح خ د ذ ر ز س ش ص"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "কোন অক্ষর লাইনের নিচে নেমে যায়?",
        "en": "Which letter dips below the line?"
       },
       "options": [
        "د",
        "ر"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "এই অক্ষরের নাম কী?",
        "en": "What is this letter called?"
       },
       "ar": "ذ",
       "options": [
        {
         "bn": "যা",
         "en": "Zaay"
        },
        {
         "bn": "যাল",
         "en": "Dhaal"
        },
        {
         "bn": "দাল",
         "en": "Daal"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "ইংরেজি this-এর th আওয়াজ কোন অক্ষরের?",
        "en": "Which letter has the 'th' sound of 'this'?"
       },
       "options": [
        "ج",
        "ز",
        "ذ"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "এই অক্ষরের নাম কী?",
        "en": "What is this letter called?"
       },
       "ar": "ش",
       "options": [
        {
         "bn": "শীন",
         "en": "Sheen"
        },
        {
         "bn": "সোয়াদ",
         "en": "Ṣaad"
        },
        {
         "bn": "সীন",
         "en": "Seen"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "কোনটি মোটা (ভারী) 'স'?",
        "en": "Which one is the heavy 's'?"
       },
       "options": [
        "ش",
        "ص",
        "س"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "سَلَامٌ শব্দের প্রথম আওয়াজ কোনটি?",
        "en": "What is the first sound of سَلَامٌ?"
       },
       "options": [
        {
         "bn": "শ",
         "en": "sh"
        },
        {
         "bn": "ছ",
         "en": "ch"
        },
        {
         "bn": "স (চিকন)",
         "en": "s (thin)"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "ز-এর সঠিক আওয়াজ কোনটি?",
        "en": "What is the correct sound of ز?"
       },
       "options": [
        {
         "bn": "মৌমাছির মতো z",
         "en": "a buzzing z"
        },
        {
         "bn": "জ (j)",
         "en": "j"
        },
        {
         "bn": "দ",
         "en": "d"
        }
       ],
       "answer": 0
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-letters-3",
   "icon": "ض ق",
   "title": {
    "bn": "অক্ষর ৩: দোয়াদ থেকে ক্বাফ",
    "en": "Letters 3: Ḍaad to Qaaf"
   },
   "subtitle": {
    "bn": "পরের ৭টি অক্ষর: ض ط ظ ع غ ف ق",
    "en": "The next 7 letters: ض ط ظ ع غ ف ق"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "মোটা (ভারী) অক্ষর কী এবং কীভাবে বলতে হয়",
     "en": "What heavy letters are and how to say them"
    },
    {
     "bn": "হালকা-মোটা জোড়া: ت/ط, د/ض, ذ/ظ, س/ص",
     "en": "Light–heavy pairs: ت/ط, د/ض, ذ/ظ, س/ص"
    },
    {
     "bn": "গলার অক্ষর ع ও غ",
     "en": "The throat letters ع and غ"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "এই পাঠে আছে আরবির সবচেয়ে 'স্পেশাল' কিছু আওয়াজ। মনোযোগ দিয়ে শুনুন — একবার ধরে ফেললে আপনার তিলাওয়াত অনেক সুন্দর হবে!",
     "en": "This lesson has some of Arabic's most special sounds. Listen closely — once you get them, your recitation will sound beautiful!"
    },
    {
     "type": "letters",
     "items": [
      "dad",
      "tta",
      "zza",
      "ain",
      "ghain",
      "fa",
      "qaf"
     ]
    },
    {
     "type": "text",
     "bn": "আরবিতে ৭টি অক্ষর **মোটা (ভারী)** — এগুলো বলার সময় জিভের পেছনটা ওপরের তালুর দিকে উঠে যায়, ফলে আওয়াজ মুখ ভরে গভীর হয়। বাকিগুলো সাধারণত **পাতলা (হালকা)**।",
     "en": "Arabic has 7 **heavy** letters — when you say them, the back of the tongue rises toward the roof of the mouth, making a full, deep sound. Most others are **light**.",
     "title": {
      "bn": "মোটা অক্ষর",
      "en": "Heavy letters"
     }
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "৭টি মোটা অক্ষর মনে রাখার বিখ্যাত আরবি বাক্য: {{خُصَّ ضَغْطٍ قِظْ}} — এতে আছে خ ص ض غ ط ق ظ। (খুস্‌সা দাগতিন ক্বিয্)",
     "en": "The famous Arabic phrase to remember the 7 heavy letters: {{خُصَّ ضَغْطٍ قِظْ}} — it contains خ ص ض غ ط ق ظ. (khuṣṣa ḍaghṭin qiẓ)"
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "মোটা অক্ষর বলার কৌশল: মুখে যেন একটা ছোট্ট আলু আছে — জিভের পেছন উঁচু, মুখ ভেতরে ফাঁপা। পাতলা অক্ষরে মুখ সমান ও হালকা।",
     "en": "Trick for heavy letters: imagine a small potato in your mouth — back of the tongue raised, mouth hollow inside. For light letters the mouth stays flat and relaxed."
    },
    {
     "type": "text",
     "bn": "মজার ব্যাপার হলো, অনেক মোটা অক্ষরের একটা করে 'হালকা যমজ' আছে। জায়গা প্রায় এক, শুধু জিভের পেছন ওঠে কি না — এই তফাৎ।",
     "en": "Here's the cool part: many heavy letters have a 'light twin'. Almost the same spot — the only difference is whether the back of the tongue rises.",
     "title": {
      "bn": "হালকা ও মোটা যমজ",
      "en": "Light and heavy twins"
     }
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "হালকা",
       "en": "Light"
      },
      {
       "bn": "মোটা",
       "en": "Heavy"
      },
      {
       "bn": "তফাৎ",
       "en": "Difference"
      }
     ],
     "rows": [
      [
       "تَ",
       "طَ",
       {
        "bn": "ত বনাম মোটা ত",
        "en": "t vs heavy ṭ"
       }
      ],
      [
       "دَ",
       "ضَ",
       {
        "bn": "দ বনাম পাশ থেকে মোটা দ",
        "en": "d vs heavy side-ḍ"
       }
      ],
      [
       "ذَ",
       "ظَ",
       {
        "bn": "হালকা th বনাম মোটা th",
        "en": "light dh vs heavy ẓ"
       }
      ],
      [
       "سَ",
       "صَ",
       {
        "bn": "চিকন স বনাম মোটা স",
        "en": "thin s vs heavy ṣ"
       }
      ],
      [
       "كَ",
       "قَ",
       {
        "bn": "হালকা ক বনাম গভীর ক্ব",
        "en": "light k vs deep q"
       }
      ]
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "تِينٌ",
       "label": {
        "bn": "তীনুন — ডুমুর",
        "en": "tīnun — fig"
       },
       "desc": {
        "bn": "হালকা ت",
        "en": "light ت"
       }
      },
      {
       "ar": "طِينٌ",
       "label": {
        "bn": "ত্বীনুন — কাদামাটি",
        "en": "ṭīnun — clay"
       },
       "desc": {
        "bn": "মোটা ط",
        "en": "heavy ط"
       }
      }
     ],
     "title": {
      "bn": "একটি অক্ষরেই অর্থ বদল",
      "en": "One letter, a new meaning"
     }
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "ض (দোয়াদ) 'য' বা 'জ' নয়, সাধারণ 'দ'-ও নয়। জিভের এক পাশ ওপরের মাড়ির দাঁতে চেপে মোটা আওয়াজ করুন। শুরুতে কঠিন লাগবে — একজন ভালো ক্বারীর তিলাওয়াত শুনে বারবার অনুশীলন করুন।",
     "en": "ض (Ḍaad) is not 'z' or 'j', and not a plain 'd'. Press one side of the tongue against the upper molars and make it heavy. It feels hard at first — listen to a good reciter and repeat often."
    },
    {
     "type": "text",
     "bn": "এবার গলার আরও দুটি অক্ষর: **ع (আইন)** আর **غ (গাইন)**। একই শরীর, গাইনের মাথায় একটি বিন্দু।",
     "en": "Now two more throat letters: **ع ('Ayn)** and **غ (Ghayn)**. Same body; Ghayn has a dot on its head.",
     "title": {
      "bn": "আইন ও গাইন",
      "en": "'Ayn and Ghayn"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "أَ",
       "label": {
        "bn": "হামযা — হালকা থামা",
        "en": "hamza — light stop"
       },
       "desc": {
        "bn": "গলার গভীরে ছোট্ট 'থামা', তারপর আ",
        "en": "a tiny stop deep in the throat, then a"
       }
      },
      {
       "ar": "عَ",
       "label": {
        "bn": "আইন — চাপা আ",
        "en": "'a — squeezed a"
       },
       "desc": {
        "bn": "গলার মাঝখান চেপে গভীর 'আ'",
        "en": "a deep 'a' with the middle of the throat squeezed"
       }
      },
      {
       "ar": "غَ",
       "label": {
        "bn": "গাইন — গার্গল",
        "en": "gha — gargle"
       },
       "desc": {
        "bn": "গলার ওপর থেকে কম্পন, মোটা",
        "en": "vibration from the top of the throat, heavy"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "ع বলার কৌশল: মনে করুন কেউ আপনার গলা হালকা চেপে ধরেছে আর আপনি 'আ' বলছেন — চাপা, গভীর আওয়াজ। غ: মুখে পানি নিয়ে গার্গল করার আওয়াজ, শুধু পানি ছাড়া!",
     "en": "Trick for ع: imagine saying 'a' while your throat is gently squeezed — tight and deep. غ: the sound of gargling, minus the water!"
    },
    {
     "type": "text",
     "bn": "শেষে **ف (ফা)** আর **ق (ক্বাফ)**। মাথা দেখতে একই রকম, কিন্তু ফা-তে এক বিন্দু আর শরীর লাইনের ওপরে; ক্বাফে দুই বিন্দু আর লেজ লাইনের নিচে গভীর বাটির মতো।",
     "en": "Finally **ف (Faa)** and **ق (Qaaf)**. Their heads look alike, but Faa has one dot and a flat body on the line; Qaaf has two dots and a deep bowl dipping below the line.",
     "title": {
      "bn": "ফা ও ক্বাফ",
      "en": "Faa and Qaaf"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "ف",
       "label": {
        "bn": "ফা",
        "en": "Faa"
       },
       "desc": {
        "bn": "১ বিন্দু, চ্যাপ্টা শরীর",
        "en": "1 dot, flat body"
       }
      },
      {
       "ar": "ق",
       "label": {
        "bn": "ক্বাফ",
        "en": "Qaaf"
       },
       "desc": {
        "bn": "২ বিন্দু, গভীর বাটি",
        "en": "2 dots, deep bowl"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "ف আসলে ইংরেজি f — ওপরের দাঁত নিচের ঠোঁটে। বাংলা 'ফ'-এর মতো দুই ঠোঁট মিলিয়ে 'ফ' (ph) বলবেন না।",
     "en": "ف is really English f — upper teeth on the lower lip. Don't close both lips for a Bangla-style 'ph'."
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "ضَيْفٌ",
       "tr": {
        "bn": "দোয়াইফুন",
        "en": "ḍayfun"
       },
       "mean": {
        "bn": "মেহমান",
        "en": "guest"
       },
       "hl": "ض"
      },
      {
       "ar": "طِفْلٌ",
       "tr": {
        "bn": "ত্বিফলুন",
        "en": "ṭiflun"
       },
       "mean": {
        "bn": "শিশু",
        "en": "child"
       },
       "hl": "ط"
      },
      {
       "ar": "ظُهْرٌ",
       "tr": {
        "bn": "যুহরুন",
        "en": "ẓuhrun"
       },
       "mean": {
        "bn": "দুপুর, যোহর",
        "en": "noon"
       },
       "hl": "ظ"
      },
      {
       "ar": "عَيْنٌ",
       "tr": {
        "bn": "'আইনুন",
        "en": "'aynun"
       },
       "mean": {
        "bn": "চোখ",
        "en": "eye"
       },
       "hl": "ع"
      },
      {
       "ar": "غَيْبٌ",
       "tr": {
        "bn": "গাইবুন",
        "en": "ghaybun"
       },
       "mean": {
        "bn": "অদৃশ্য",
        "en": "the unseen"
       },
       "hl": "غ"
      },
      {
       "ar": "فَجْرٌ",
       "tr": {
        "bn": "ফাজরুন",
        "en": "fajrun"
       },
       "mean": {
        "bn": "ভোর, ফজর",
        "en": "dawn"
       },
       "hl": "ف"
      },
      {
       "ar": "قَمَرٌ",
       "tr": {
        "bn": "ক্বামারুন",
        "en": "qamarun"
       },
       "mean": {
        "bn": "চাঁদ",
        "en": "moon"
       },
       "hl": "ق"
      }
     ],
     "title": {
      "bn": "শব্দে অক্ষর খুঁজুন",
      "en": "Find the letter in a word"
     }
    },
    {
     "type": "trace",
     "items": [
      "ض",
      "ط",
      "ظ",
      "ع",
      "غ",
      "ف",
      "ق"
     ],
     "title": {
      "bn": "লেখার অনুশীলন",
      "en": "Writing practice"
     }
    },
    {
     "type": "practice",
     "bn": "জোড়ায় জোড়ায় বলুন — হালকা, তারপর মোটা। পার্থক্যটা অনুভব করুন!",
     "en": "Say them in pairs — light, then heavy. Feel the difference!",
     "lines": [
      "تَ طَ",
      "دَ ضَ",
      "ذَ ظَ",
      "سَ صَ",
      "كَ قَ",
      "أَ عَ غَ",
      "ض ط ظ ع غ ف ق"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "নিচের কোনটি মোটা (ভারী) অক্ষর?",
        "en": "Which of these is a heavy letter?"
       },
       "options": [
        "ت",
        "ط",
        "ف"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "{{خُصَّ ضَغْطٍ قِظْ}} বাক্যটি কী মনে রাখতে সাহায্য করে?",
        "en": "What does the phrase {{خُصَّ ضَغْطٍ قِظْ}} help you remember?"
       },
       "options": [
        {
         "bn": "৭টি মোটা অক্ষর",
         "en": "The 7 heavy letters"
        },
        {
         "bn": "গলার অক্ষর",
         "en": "The throat letters"
        },
        {
         "bn": "ঠোঁটের অক্ষর",
         "en": "The lip letters"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এই অক্ষরের নাম কী?",
        "en": "What is this letter called?"
       },
       "ar": "ع",
       "options": [
        {
         "bn": "হামযা",
         "en": "Hamzah"
        },
        {
         "bn": "গাইন",
         "en": "Ghayn"
        },
        {
         "bn": "আইন",
         "en": "'Ayn"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "ক্বাফ (ق)-এ কয়টি বিন্দু?",
        "en": "How many dots does Qaaf (ق) have?"
       },
       "options": [
        {
         "bn": "১",
         "en": "1"
        },
        {
         "bn": "২",
         "en": "2"
        },
        {
         "bn": "৩",
         "en": "3"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "س-এর মোটা যমজ কোনটি?",
        "en": "Which is the heavy twin of س?"
       },
       "options": [
        "ص",
        "ث",
        "ش"
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "طِينٌ শব্দের অর্থ কী?",
        "en": "What does طِينٌ mean?"
       },
       "ar": "طِينٌ",
       "options": [
        {
         "bn": "ডুমুর",
         "en": "fig"
        },
        {
         "bn": "কাদামাটি",
         "en": "clay"
        },
        {
         "bn": "চাঁদ",
         "en": "moon"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "ف উচ্চারণের সময় কী হয়?",
        "en": "How is ف pronounced?"
       },
       "options": [
        {
         "bn": "দুই ঠোঁট মিলে যায়",
         "en": "Both lips close"
        },
        {
         "bn": "জিভ তালুতে লাগে",
         "en": "Tongue touches the palate"
        },
        {
         "bn": "ওপরের দাঁত নিচের ঠোঁটে লাগে",
         "en": "Upper teeth touch the lower lip"
        }
       ],
       "answer": 2
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-letters-4",
   "icon": "ن ي",
   "title": {
    "bn": "অক্ষর ৪: কাফ থেকে ইয়া",
    "en": "Letters 4: Kaaf to Yaa"
   },
   "subtitle": {
    "bn": "শেষ ৮টি অক্ষর: ك ل م ن و ه ء ي",
    "en": "The last 8 letters: ك ل م ن و ه ء ي"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "শেষ ৮টি অক্ষর চেনা ও বলা",
     "en": "Recognise and say the last 8 letters"
    },
    {
     "bn": "হামযা কোথায় কোথায় বসে",
     "en": "Where hamza sits"
    },
    {
     "bn": "পুরো বর্ণমালা ক্রমানুসারে বলা",
     "en": "Say the whole alphabet in order"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "শেষ ধাপ! এই ৮টি অক্ষর শিখলেই আপনি পুরো আরবি বর্ণমালা জানবেন। ভালো খবর: এগুলোর বেশিরভাগই বাংলাভাষীদের জন্য খুব সহজ।",
     "en": "The final stretch! Learn these 8 and you'll know the whole Arabic alphabet. Good news: most of them are very easy for Bangla speakers."
    },
    {
     "type": "letters",
     "items": [
      "kaf",
      "lam",
      "mim",
      "nun",
      "waw",
      "ha",
      "hamza",
      "ya"
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "ا",
       "label": {
        "bn": "আলিফ",
        "en": "Alif"
       },
       "desc": {
        "bn": "সোজা লাঠি, কোনো হুক নেই",
        "en": "straight stick, no hook"
       }
      },
      {
       "ar": "ل",
       "label": {
        "bn": "লাম",
        "en": "Laam"
       },
       "desc": {
        "bn": "লম্বা, নিচে বাঁকা হুক",
        "en": "tall, with a hook at the bottom"
       }
      }
     ],
     "title": {
      "bn": "আলিফ বনাম লাম",
      "en": "Alif vs Laam"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "ب",
       "label": {
        "bn": "বা",
        "en": "Baa"
       },
       "desc": {
        "bn": "চ্যাপ্টা নৌকা, নিচে বিন্দু",
        "en": "flat boat, dot below"
       }
      },
      {
       "ar": "ن",
       "label": {
        "bn": "নূন",
        "en": "Noon"
       },
       "desc": {
        "bn": "গভীর গোল বাটি, ওপরে বিন্দু",
        "en": "deep round bowl, dot above"
       }
      }
     ],
     "title": {
      "bn": "বা বনাম নূন",
      "en": "Baa vs Noon"
     }
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "ك (কাফ), ل (লাম), م (মীম), ن (নূন) — এগুলোর আওয়াজ বাংলা ক, ল, ম, ন-এর মতোই। শুধু ك-কে ক্বাফের মতো গভীর করবেন না।",
     "en": "ك (Kaaf), ل (Laam), م (Meem), ن (Noon) sound just like Bangla ক, ল, ম, ন. Just don't make ك deep like Qaaf."
    },
    {
     "type": "text",
     "bn": "**و (ওয়াও)** বলতে দুই ঠোঁট গোল করুন, কিন্তু মেলাবেন না। দাঁত দিয়ে ঠোঁট ছুঁলেই সেটা 'ভ' হয়ে যায় — সাবধান!",
     "en": "For **و (Waaw)**, round your lips but don't close them. If your teeth touch your lip, it turns into 'v' — careful!",
     "title": {
      "bn": "ওয়াও",
      "en": "Waaw"
     }
    },
    {
     "type": "text",
     "bn": "এখন আমরা তিন রকম 'হ' জানি। তিনটিই গলা থেকে, কিন্তু ভিন্ন গভীরতা থেকে:",
     "en": "Now we know three kinds of 'h'. All from the throat, but from different depths:",
     "title": {
      "bn": "তিন রকম 'হ'",
      "en": "Three kinds of 'h'"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "هَ",
       "label": {
        "bn": "গোল হা — সবচেয়ে গভীর",
        "en": "ha — deepest"
       },
       "desc": {
        "bn": "নরম, বাতাসভরা; আয়নায় ভাপ দেওয়ার মতো",
        "en": "soft and breathy, like fogging a mirror"
       }
      },
      {
       "ar": "حَ",
       "label": {
        "bn": "হা — মাঝখান",
        "en": "ḥa — middle"
       },
       "desc": {
        "bn": "গলা চেপে ঘষা আওয়াজ",
        "en": "raspy, with the throat tightened"
       }
      },
      {
       "ar": "خَ",
       "label": {
        "bn": "খা — ওপর",
        "en": "kha — top"
       },
       "desc": {
        "bn": "খসখসে, মোটা",
        "en": "scratchy and heavy"
       }
      }
     ]
    },
    {
     "type": "text",
     "bn": "**ء (হামযা)** হলো একটা ছোট্ট 'থামা' — যেমন বাংলায় 'আ-আ' বলতে গিয়ে মাঝখানে গলা আটকে যায়। হামযা একা বসতে পারে, আবার আলিফ, ওয়াও বা (বিন্দুহীন) ইয়ার ওপর বসতে পারে।",
     "en": "**ء (Hamzah)** is a tiny 'stop' — like the catch in your throat in 'uh-oh'. It can sit alone, or ride on an Alif, a Waaw or a (dotless) Yaa.",
     "title": {
      "bn": "হামযা — ছোট্ট থামা",
      "en": "Hamzah — the little stop"
     }
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "হামযা",
       "en": "Hamzah"
      },
      {
       "bn": "কোথায় বসে",
       "en": "Where it sits"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      }
     ],
     "rows": [
      [
       "أ",
       {
        "bn": "আলিফের ওপরে",
        "en": "on top of Alif"
       },
       "أَكَلَ"
      ],
      [
       "إ",
       {
        "bn": "আলিফের নিচে (যের হলে)",
        "en": "under Alif (with kasra)"
       },
       "إِبِلٌ"
      ],
      [
       "ؤ",
       {
        "bn": "ওয়াওয়ের ওপরে",
        "en": "on Waaw"
       },
       "يُؤْمِنُ"
      ],
      [
       "ئ",
       {
        "bn": "বিন্দুহীন ইয়ার ওপরে",
        "en": "on a dotless Yaa"
       },
       "سُئِلَ"
      ],
      [
       "ء",
       {
        "bn": "একা, লাইনের ওপরে",
        "en": "alone, on the line"
       },
       "سَمَاءٌ"
      ]
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "أَكَلَ",
       "tr": {
        "bn": "আকালা",
        "en": "akala"
       },
       "mean": {
        "bn": "সে খেল",
        "en": "he ate"
       },
       "hl": "أ"
      },
      {
       "ar": "إِبِلٌ",
       "tr": {
        "bn": "ইবিলুন",
        "en": "ibilun"
       },
       "mean": {
        "bn": "উট",
        "en": "camels"
       },
       "hl": "إ"
      },
      {
       "ar": "يُؤْمِنُ",
       "tr": {
        "bn": "ইউ'মিনু",
        "en": "yuʼminu"
       },
       "mean": {
        "bn": "সে ঈমান আনে",
        "en": "he believes"
       },
       "hl": "ؤ"
      },
      {
       "ar": "سُئِلَ",
       "tr": {
        "bn": "সু'ইলা",
        "en": "suʼila"
       },
       "mean": {
        "bn": "জিজ্ঞাসা করা হলো",
        "en": "he was asked"
       },
       "hl": "ئ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "হামযা যেন একটা ছোট্ট পাখি — কখনো আলিফের মাথায় বসে, কখনো নিচে ঝোলে, কখনো ওয়াও বা ইয়ার ডালে বসে, আবার কখনো মাটিতে একা হাঁটে!",
     "en": "Hamzah is like a little bird — sometimes on Alif's head, sometimes hanging under it, sometimes perched on a Waaw or Yaa branch, and sometimes walking alone on the ground!"
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "ي (ইয়া)-র নিচে দুটি বিন্দু। শব্দের শেষে বিন্দু ছাড়া ى দেখলে সেটা 'আলিফ মাকসূরা' — এর কথা পরে শিখব।",
     "en": "ي (Yaa) has two dots below. A dotless ى at the end of a word is an 'alif maqsura' — we'll meet it later."
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "كَرِيمٌ",
       "tr": {
        "bn": "কারীমুন",
        "en": "karīmun"
       },
       "mean": {
        "bn": "দয়ালু, সম্মানিত",
        "en": "generous, noble"
       },
       "hl": "ك"
      },
      {
       "ar": "لِسَانٌ",
       "tr": {
        "bn": "লিসানুন",
        "en": "lisānun"
       },
       "mean": {
        "bn": "জিহ্বা, ভাষা",
        "en": "tongue, language"
       },
       "hl": "ل"
      },
      {
       "ar": "مَلِكٌ",
       "tr": {
        "bn": "মালিকুন",
        "en": "malikun"
       },
       "mean": {
        "bn": "রাজা",
        "en": "king"
       },
       "hl": "م"
      },
      {
       "ar": "نَارٌ",
       "tr": {
        "bn": "নারুন",
        "en": "nārun"
       },
       "mean": {
        "bn": "আগুন",
        "en": "fire"
       },
       "hl": "ن"
      },
      {
       "ar": "وَجْهٌ",
       "tr": {
        "bn": "ওয়াজহুন",
        "en": "wajhun"
       },
       "mean": {
        "bn": "মুখমণ্ডল",
        "en": "face"
       },
       "hl": "و"
      },
      {
       "ar": "هِلَالٌ",
       "tr": {
        "bn": "হিলালুন",
        "en": "hilālun"
       },
       "mean": {
        "bn": "নতুন চাঁদ",
        "en": "crescent moon"
       },
       "hl": "ه"
      },
      {
       "ar": "يَوْمٌ",
       "tr": {
        "bn": "ইয়াওমুন",
        "en": "yawmun"
       },
       "mean": {
        "bn": "দিন",
        "en": "day"
       },
       "hl": "ي"
      }
     ],
     "title": {
      "bn": "শব্দে অক্ষর খুঁজুন",
      "en": "Find the letter in a word"
     }
    },
    {
     "type": "trace",
     "items": [
      "ك",
      "ل",
      "م",
      "ن",
      "و",
      "ه",
      "ء",
      "ي"
     ],
     "title": {
      "bn": "লেখার অনুশীলন",
      "en": "Writing practice"
     }
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "মাশা আল্লাহ! আপনি এখন পুরো আরবি বর্ণমালা চেনেন — ২৯টি অক্ষর! কুরআনের প্রতিটি শব্দ এই ২৯টি অক্ষর দিয়েই তৈরি।",
     "en": "Masha Allah! You now know the whole Arabic alphabet — all 29 letters! Every word of the Quran is built from these 29.",
     "title": {
      "bn": "অভিনন্দন!",
      "en": "Congratulations!"
     }
    },
    {
     "type": "practice",
     "bn": "পুরো বর্ণমালা ক্রমানুসারে বলুন। প্রতিদিন একবার বললে এক সপ্তাহে মুখস্থ!",
     "en": "Say the whole alphabet in order. Once a day and it's memorised in a week!",
     "lines": [
      "ك ل م ن و ه ء ي",
      "ا ب ت ث ج ح خ",
      "د ذ ر ز س ش ص",
      "ض ط ظ ع غ ف ق",
      "ك ل م ن و ه ء ي",
      "ي ه ن م ل ك ق ف",
      "ع ح ه ء غ خ"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "এই অক্ষরের নাম কী?",
        "en": "What is this letter called?"
       },
       "ar": "ل",
       "options": [
        {
         "bn": "লাম",
         "en": "Laam"
        },
        {
         "bn": "কাফ",
         "en": "Kaaf"
        },
        {
         "bn": "আলিফ",
         "en": "Alif"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "নূন (ن) আর বা (ب)-এর পার্থক্য কী?",
        "en": "What's the difference between Noon (ن) and Baa (ب)?"
       },
       "options": [
        {
         "bn": "কোনো পার্থক্য নেই",
         "en": "No difference"
        },
        {
         "bn": "নূন গভীর বাটি, বিন্দু ওপরে",
         "en": "Noon is a deep bowl, dot above"
        },
        {
         "bn": "নূনে দুই বিন্দু",
         "en": "Noon has two dots"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "কোন 'হ' গলার সবচেয়ে গভীর থেকে আসে?",
        "en": "Which 'h' comes from the deepest part of the throat?"
       },
       "options": [
        "ح",
        "خ",
        "ه"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "و উচ্চারণে কী করবেন না?",
        "en": "What should you NOT do when saying و?"
       },
       "options": [
        {
         "bn": "দাঁত দিয়ে ঠোঁট ছোঁয়া",
         "en": "Touch teeth to lip"
        },
        {
         "bn": "ঠোঁট গোল করা",
         "en": "Round the lips"
        },
        {
         "bn": "আওয়াজ করা",
         "en": "Make a sound"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "নিচের কোনটিতে হামযা ওয়াওয়ের ওপর বসেছে?",
        "en": "In which one does hamzah sit on a Waaw?"
       },
       "options": [
        "أ",
        "ؤ",
        "ئ"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "ইয়া (ي)-তে কয়টি বিন্দু, কোথায়?",
        "en": "How many dots does Yaa (ي) have, and where?"
       },
       "options": [
        {
         "bn": "নিচে ১টি",
         "en": "1 below"
        },
        {
         "bn": "ওপরে ২টি",
         "en": "2 above"
        },
        {
         "bn": "নিচে ২টি",
         "en": "2 below"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "আরবি বর্ণমালার শেষ অক্ষর কোনটি?",
        "en": "What is the last letter of the Arabic alphabet?"
       },
       "options": [
        "ي",
        "ه",
        "و"
       ],
       "answer": 0
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-families",
   "icon": "ب ت ث",
   "title": {
    "bn": "একই চেহারা, ভিন্ন বিন্দু",
    "en": "Look-Alike Families & Dots"
   },
   "subtitle": {
    "bn": "বিন্দু গুনে গুনে অক্ষর চেনার সহজ কৌশল",
    "en": "Count the dots and never mix letters up again"
   },
   "minutes": 12,
   "goals": [
    {
     "bn": "অক্ষরের 'পরিবার' বা একই আকারের দল চেনা",
     "en": "Spot the 'families' of letters that share a shape"
    },
    {
     "bn": "বিন্দুর সংখ্যা ও জায়গা দেখে অক্ষর আলাদা করা",
     "en": "Tell letters apart by the number and place of dots"
    },
    {
     "bn": "কোন কোন অক্ষরের বিন্দু নিচে থাকে",
     "en": "Know which letters have dots below"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "আরবির একটা গোপন রহস্য বলি: ২৯টি অক্ষর মনে রাখতে আসলে ২৯টি আলাদা আকার শিখতে হয় না! অনেক অক্ষরের শরীর এক — শুধু **বিন্দু** আলাদা। বিন্দু চিনলেই অর্ধেক কাজ শেষ।",
     "en": "Here's a secret: you don't need to learn 29 different shapes! Many letters share the same body — only the **dots** differ. Master the dots and you're halfway there."
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "পরিবার",
       "en": "Family"
      },
      {
       "bn": "অক্ষর",
       "en": "Letters"
      },
      {
       "bn": "কীভাবে আলাদা করবেন",
       "en": "How to tell apart"
      }
     ],
     "rows": [
      [
       {
        "bn": "নৌকা",
        "en": "Boat"
       },
       "ب ت ث",
       {
        "bn": "নিচে ১ / ওপরে ২ / ওপরে ৩",
        "en": "1 below / 2 above / 3 above"
       }
      ],
      [
       {
        "bn": "বড়শি",
        "en": "Hook"
       },
       "ج ح خ",
       {
        "bn": "ভেতরে ১ / নেই / ওপরে ১",
        "en": "1 inside / none / 1 above"
       }
      ],
      [
       {
        "bn": "কনুই",
        "en": "Elbow"
       },
       "د ذ",
       {
        "bn": "নেই / ওপরে ১",
        "en": "none / 1 above"
       }
      ],
      [
       {
        "bn": "স্লিপার",
        "en": "Slide"
       },
       "ر ز",
       {
        "bn": "নেই / ওপরে ১",
        "en": "none / 1 above"
       }
      ],
      [
       {
        "bn": "তিন দাঁত",
        "en": "Three teeth"
       },
       "س ش",
       {
        "bn": "নেই / ওপরে ৩",
        "en": "none / 3 above"
       }
      ],
      [
       {
        "bn": "মোটা লুপ",
        "en": "Fat loop"
       },
       "ص ض",
       {
        "bn": "নেই / ওপরে ১",
        "en": "none / 1 above"
       }
      ],
      [
       {
        "bn": "ছাতা",
        "en": "Umbrella"
       },
       "ط ظ",
       {
        "bn": "নেই / ওপরে ১",
        "en": "none / 1 above"
       }
      ],
      [
       {
        "bn": "খোলা মুখ",
        "en": "Open mouth"
       },
       "ع غ",
       {
        "bn": "নেই / ওপরে ১",
        "en": "none / 1 above"
       }
      ],
      [
       {
        "bn": "ছোট্ট মাথা",
        "en": "Small head"
       },
       "ف ق",
       {
        "bn": "ওপরে ১ / ওপরে ২ (আর গভীর লেজ)",
        "en": "1 above / 2 above (and a deeper tail)"
       }
      ]
     ],
     "title": {
      "bn": "৯টি আকারের পরিবার",
      "en": "The 9 shape families"
     }
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "বেশিরভাগ পরিবারে নিয়ম একটাই: **বিন্দু নেই = প্রথম ভাই, বিন্দু আছে = দ্বিতীয় ভাই।** د→ذ, ر→ز, ص→ض, ط→ظ, ع→غ — বর্ণমালায়ও এরা ঠিক এই ক্রমে আসে!",
     "en": "In most families the rule is simple: **no dot = first brother, dot = second brother.** د→ذ, ر→ز, ص→ض, ط→ظ, ع→غ — and they come in exactly this order in the alphabet!"
    },
    {
     "type": "text",
     "bn": "এবার বিন্দুর সংখ্যা অনুযায়ী সব অক্ষর সাজাই। নিজের আঙুল দিয়ে প্রতিটি অক্ষরের বিন্দু গুনে দেখুন।",
     "en": "Now let's sort all the letters by how many dots they have. Count the dots on each one with your finger.",
     "title": {
      "bn": "বিন্দু গণনা",
      "en": "Counting dots"
     }
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "বিন্দু",
       "en": "Dots"
      },
      {
       "bn": "অক্ষর",
       "en": "Letters"
      },
      {
       "bn": "মোট",
       "en": "Total"
      }
     ],
     "rows": [
      [
       {
        "bn": "কোনো বিন্দু নেই",
        "en": "No dots"
       },
       "ا ح د ر س ص ط ع ك ل م و ه",
       {
        "bn": "১৩",
        "en": "13"
       }
      ],
      [
       {
        "bn": "১টি বিন্দু",
        "en": "1 dot"
       },
       "ب ج خ ذ ز ض ظ غ ف ن",
       {
        "bn": "১০",
        "en": "10"
       }
      ],
      [
       {
        "bn": "২টি বিন্দু",
        "en": "2 dots"
       },
       "ت ق ي",
       {
        "bn": "৩",
        "en": "3"
       }
      ],
      [
       {
        "bn": "৩টি বিন্দু",
        "en": "3 dots"
       },
       "ث ش",
       {
        "bn": "২",
        "en": "2"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "তিন বিন্দুওয়ালা অক্ষর মাত্র দুটি: ث আর ش। দুটোর আওয়াজেই বাতাস 'ছড়িয়ে' পড়ে — যেন তিন বিন্দু বাতাসের তিনটি ঝাপটা!",
     "en": "Only two letters have three dots: ث and ش. Both sounds let air 'spread out' — as if the three dots are three puffs of air!"
    },
    {
     "type": "text",
     "bn": "বিন্দু কোথায় থাকে — ওপরে না নিচে? খুব সহজ: মাত্র **তিনটি** অক্ষরের বিন্দু নিচে থাকে। বাকি সবার বিন্দু ওপরে।",
     "en": "Where do the dots go — above or below? Easy: only **three** letters have dots below. Everyone else has them on top.",
     "title": {
      "bn": "ওপরে না নিচে?",
      "en": "Above or below?"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "ب",
       "label": {
        "bn": "বা",
        "en": "Baa"
       },
       "desc": {
        "bn": "নিচে ১টি",
        "en": "1 below"
       }
      },
      {
       "ar": "ج",
       "label": {
        "bn": "জীম",
        "en": "Jeem"
       },
       "desc": {
        "bn": "নিচে/ভেতরে ১টি",
        "en": "1 below, inside the curve"
       }
      },
      {
       "ar": "ي",
       "label": {
        "bn": "ইয়া",
        "en": "Yaa"
       },
       "desc": {
        "bn": "নিচে ২টি",
        "en": "2 below"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "নিচে বিন্দুওয়ালা তিন অক্ষর: ب ج ي — একসাথে বলুন 'বা-জী-ইয়া'! ভাবুন, এরা তিনজন বাজি ধরেছে যে বিন্দু নিচেই রাখবে।",
     "en": "The three 'dots-below' letters: ب ج ي — say them together: 'Baa-Jee-Yaa'! Imagine three friends who bet they'd keep their dots downstairs."
    },
    {
     "type": "text",
     "bn": "শব্দের শুরু বা মাঝখানে কয়েকটি অক্ষর একদম একই 'দাঁত'-এর মতো দেখায়। তখন শুধু বিন্দুই ভরসা!",
     "en": "At the start or middle of a word, several letters shrink to the very same little 'tooth'. Then the dots are your only clue!",
     "title": {
      "bn": "একই দাঁত, পাঁচ অক্ষর",
      "en": "One tooth, five letters"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "بـ",
       "label": {
        "bn": "বা",
        "en": "Baa"
       },
       "desc": {
        "bn": "নিচে ১",
        "en": "1 below"
       }
      },
      {
       "ar": "تـ",
       "label": {
        "bn": "তা",
        "en": "Taa"
       },
       "desc": {
        "bn": "ওপরে ২",
        "en": "2 above"
       }
      },
      {
       "ar": "نـ",
       "label": {
        "bn": "নূন",
        "en": "Noon"
       },
       "desc": {
        "bn": "ওপরে ১",
        "en": "1 above"
       }
      },
      {
       "ar": "يـ",
       "label": {
        "bn": "ইয়া",
        "en": "Yaa"
       },
       "desc": {
        "bn": "নিচে ২",
        "en": "2 below"
       }
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "بَيْتٌ",
       "tr": {
        "bn": "বাইতুন",
        "en": "baytun"
       },
       "mean": {
        "bn": "ঘর",
        "en": "house"
       },
       "note": {
        "bn": "بـ আর ـيـ — দুটো দাঁত, বিন্দু দিয়ে চিনুন",
        "en": "بـ and ـيـ — two teeth; read the dots"
       }
      },
      {
       "ar": "نَبِيٌّ",
       "tr": {
        "bn": "নাবিয়্যুন",
        "en": "nabiyyun"
       },
       "mean": {
        "bn": "নবী",
        "en": "prophet"
       },
       "note": {
        "bn": "نـ ـبـ ـيّ — তিনটি দাঁত পরপর!",
        "en": "نـ ـبـ ـيّ — three teeth in a row!"
       }
      },
      {
       "ar": "ثَبَتَ",
       "tr": {
        "bn": "ছাবাতা",
        "en": "thabata"
       },
       "mean": {
        "bn": "স্থির থাকল",
        "en": "stood firm"
       },
       "note": {
        "bn": "ثـ ـبـ ـت — তিন ভাই একসাথে",
        "en": "ثـ ـبـ ـت — all three brothers together"
       }
      }
     ],
     "title": {
      "bn": "শব্দে দাঁত গুনুন",
      "en": "Count the teeth in words"
     }
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "ف আর ق শব্দের মাঝখানে প্রায় একই রকম: ـفـ ـقـ। শুধু বিন্দু গুনুন — ১টি হলে ফা, ২টি হলে ক্বাফ। শব্দের শেষে ক্বাফের লেজ গভীরভাবে নিচে নামে।",
     "en": "In the middle of a word ف and ق look almost identical: ـفـ ـقـ. Just count — 1 dot is Faa, 2 dots is Qaaf. At the end, Qaaf's tail dips deep below the line."
    },
    {
     "type": "practice",
     "bn": "প্রতি লাইনে অক্ষরগুলোর নাম বলুন — বিন্দু দেখে!",
     "en": "Name the letters in each line — watch the dots!",
     "lines": [
      "ب ت ث ن ي",
      "ج ح خ",
      "د ذ ر ز",
      "س ش ص ض",
      "ط ظ ع غ",
      "ف ق ف ق",
      "بـ تـ ثـ نـ يـ",
      "ث ب ي ن ت"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "কোন অক্ষরের বিন্দু নিচে?",
        "en": "Which letter has its dot below?"
       },
       "options": [
        "ن",
        "ب",
        "ت"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "৩টি বিন্দুওয়ালা অক্ষর কোনটি?",
        "en": "Which letter has 3 dots?"
       },
       "options": [
        "ق",
        "ت",
        "ش"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "এই অক্ষরে কয়টি বিন্দু?",
        "en": "How many dots does this letter have?"
       },
       "ar": "ق",
       "options": [
        {
         "bn": "০",
         "en": "0"
        },
        {
         "bn": "১",
         "en": "1"
        },
        {
         "bn": "২",
         "en": "2"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "কোনটি 'বিন্দু নেই' দলের?",
        "en": "Which belongs to the 'no dots' group?"
       },
       "options": [
        "ح",
        "خ",
        "ج"
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এই অক্ষরটি কোনটি?",
        "en": "Which letter is this?"
       },
       "ar": "يـ",
       "options": [
        {
         "bn": "তা",
         "en": "Taa"
        },
        {
         "bn": "বা",
         "en": "Baa"
        },
        {
         "bn": "নূন",
         "en": "Noon"
        },
        {
         "bn": "ইয়া",
         "en": "Yaa"
        }
       ],
       "answer": 3
      },
      {
       "q": {
        "bn": "ط-এর সাথে বিন্দু যোগ করলে কোন অক্ষর হয়?",
        "en": "Adding a dot to ط makes which letter?"
       },
       "options": [
        "ز",
        "ض",
        "ظ"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "নিচে বিন্দুওয়ালা তিনটি অক্ষর কোনগুলো?",
        "en": "Which three letters have dots below?"
       },
       "options": [
        "ب ج ي",
        "ب ت ث",
        "ن ف ق"
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "শব্দের মাঝখানে এটি কোন অক্ষর?",
        "en": "Which letter is this, in the middle of a word?"
       },
       "ar": "ـقـ",
       "options": [
        {
         "bn": "ফা",
         "en": "Faa"
        },
        {
         "bn": "ক্বাফ",
         "en": "Qaaf"
        },
        {
         "bn": "মীম",
         "en": "Meem"
        }
       ],
       "answer": 1
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-forms",
   "icon": "بـ",
   "title": {
    "bn": "অক্ষরের রূপ ও জোড়া লাগানো",
    "en": "Letter Forms & Joining"
   },
   "subtitle": {
    "bn": "শুরু, মাঝখান ও শেষে অক্ষর কেমন দেখায়",
    "en": "How letters look at the start, middle and end"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "শব্দের শুরু, মাঝ ও শেষে অক্ষরের রূপ",
     "en": "Letter shapes at the start, middle and end of words"
    },
    {
     "bn": "যে ৬টি অক্ষর পরের অক্ষরের সাথে জোড়া লাগে না",
     "en": "The 6 letters that never join to the next letter"
    },
    {
     "bn": "লাম-আলিফ (لا) চেনা",
     "en": "Recognise lam-alif (لا)"
    },
    {
     "bn": "জোড়া লাগানো শব্দ ভেঙে অক্ষর খুঁজে বের করা",
     "en": "Break joined words into their letters"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "মানুষ যেমন বাসায়, স্কুলে বা বিয়েতে আলাদা পোশাক পরে, আরবি অক্ষরও শব্দে তার জায়গা অনুযায়ী 'পোশাক' বদলায়। কিন্তু চিন্তা নেই — অক্ষরের মূল চেহারা (আর বিন্দু) প্রায় একই থাকে!",
     "en": "Just as people wear different clothes at home, at school or at a wedding, Arabic letters change their 'outfit' depending on where they sit in a word. Don't worry — the core shape (and the dots) mostly stay the same!"
    },
    {
     "type": "text",
     "bn": "প্রতিটি অক্ষরের সর্বোচ্চ চারটি রূপ: **একা**, **শুরুতে** (শুধু বাম দিকে জোড়া), **মাঝখানে** (দুই দিকে জোড়া), আর **শেষে** (শুধু ডান দিকে জোড়া)। ছোট্ট টান (ـ) দেখায় কোন দিকে জোড়া লাগছে।",
     "en": "Each letter has up to four forms: **alone**, **beginning** (joins on its left), **middle** (joins on both sides) and **end** (joins on its right). The little line (ـ) shows which side connects.",
     "title": {
      "bn": "চারটি রূপ",
      "en": "Four forms"
     }
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "অক্ষর",
       "en": "Letter"
      },
      {
       "bn": "একা",
       "en": "Alone"
      },
      {
       "bn": "শুরুতে",
       "en": "Beginning"
      },
      {
       "bn": "মাঝখানে",
       "en": "Middle"
      },
      {
       "bn": "শেষে",
       "en": "End"
      }
     ],
     "rows": [
      [
       {
        "bn": "বা",
        "en": "Baa"
       },
       "ب",
       "بـ",
       "ـبـ",
       "ـب"
      ],
      [
       {
        "bn": "জীম",
        "en": "Jeem"
       },
       "ج",
       "جـ",
       "ـجـ",
       "ـج"
      ],
      [
       {
        "bn": "সীন",
        "en": "Seen"
       },
       "س",
       "سـ",
       "ـسـ",
       "ـس"
      ],
      [
       {
        "bn": "সোয়াদ",
        "en": "Ṣaad"
       },
       "ص",
       "صـ",
       "ـصـ",
       "ـص"
      ],
      [
       {
        "bn": "ত্বোয়া",
        "en": "Ṭaa"
       },
       "ط",
       "طـ",
       "ـطـ",
       "ـط"
      ],
      [
       {
        "bn": "ফা",
        "en": "Faa"
       },
       "ف",
       "فـ",
       "ـفـ",
       "ـف"
      ],
      [
       {
        "bn": "কাফ",
        "en": "Kaaf"
       },
       "ك",
       "كـ",
       "ـكـ",
       "ـك"
      ],
      [
       {
        "bn": "লাম",
        "en": "Laam"
       },
       "ل",
       "لـ",
       "ـلـ",
       "ـل"
      ],
      [
       {
        "bn": "মীম",
        "en": "Meem"
       },
       "م",
       "مـ",
       "ـمـ",
       "ـم"
      ],
      [
       {
        "bn": "নূন",
        "en": "Noon"
       },
       "ن",
       "نـ",
       "ـنـ",
       "ـن"
      ],
      [
       {
        "bn": "ইয়া",
        "en": "Yaa"
       },
       "ي",
       "يـ",
       "ـيـ",
       "ـي"
      ]
     ],
     "title": {
      "bn": "সাধারণ অক্ষরের চার রূপ",
      "en": "Four forms of common letters"
     }
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "সাধারণ নিয়ম: শুরু ও মাঝখানে অক্ষরের 'লেজ' কেটে ছোট হয়ে যায়; শেষে বা একা থাকলে পুরো লেজ ফিরে আসে।",
     "en": "General rule: at the beginning and middle a letter loses its 'tail' and gets short; at the end or alone, the full tail comes back."
    },
    {
     "type": "text",
     "bn": "দুটি অক্ষর সবচেয়ে বেশি 'পোশাক বদলায়' — ع আর ه। এদের ভালো করে দেখে রাখুন।",
     "en": "Two letters change their outfit the most — ع and ه. Take a good look at them.",
     "title": {
      "bn": "সবচেয়ে বেশি বদলায় যারা",
      "en": "The quick-change artists"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "ع  عـ  ـعـ  ـع",
       "label": {
        "bn": "আইন",
        "en": "'Ayn"
       },
       "desc": {
        "bn": "শুরুতে খোলা মুখ, মাঝখানে ভরাট ছোট ত্রিভুজ",
        "en": "open mouth at the start, a small filled loop in the middle"
       }
      },
      {
       "ar": "ه  هـ  ـهـ  ـه",
       "label": {
        "bn": "হা",
        "en": "Haa"
       },
       "desc": {
        "bn": "শুরুতে দুই চোখ, মাঝখানে আটের মতো, শেষে ছোট্ট গিঁট",
        "en": "two 'eyes' at the start, figure-8 in the middle, a small knot at the end"
       }
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "عَلَى",
       "tr": {
        "bn": "'আলা",
        "en": "'alā"
       },
       "mean": {
        "bn": "ওপরে",
        "en": "on"
       },
       "note": {
        "bn": "শুরুতে عـ",
        "en": "beginning form عـ"
       },
       "hl": "ع"
      },
      {
       "ar": "بَعْدَ",
       "tr": {
        "bn": "বা'দা",
        "en": "ba'da"
       },
       "mean": {
        "bn": "পরে",
        "en": "after"
       },
       "note": {
        "bn": "মাঝখানে ـعـ",
        "en": "middle form ـعـ"
       },
       "hl": "ع"
      },
      {
       "ar": "هُمْ",
       "tr": {
        "bn": "হুম",
        "en": "hum"
       },
       "mean": {
        "bn": "তারা",
        "en": "they"
       },
       "note": {
        "bn": "শুরুতে هـ",
        "en": "beginning form هـ"
       },
       "hl": "ه"
      },
      {
       "ar": "وَجْهٌ",
       "tr": {
        "bn": "ওয়াজহুন",
        "en": "wajhun"
       },
       "mean": {
        "bn": "মুখমণ্ডল",
        "en": "face"
       },
       "note": {
        "bn": "শেষে ـه",
        "en": "end form ـه"
       },
       "hl": "ه"
      }
     ]
    },
    {
     "type": "text",
     "bn": "এখন সবচেয়ে গুরুত্বপূর্ণ নিয়ম: ছয়টি অক্ষর আছে যারা **পরের (বাম দিকের) অক্ষরের সাথে কখনো জোড়া লাগে না।** এরা আগের অক্ষরের হাত ধরে, কিন্তু নিজের পরে একটা ফাঁক রেখে দেয়।",
     "en": "Now the most important rule: six letters **never join to the next letter (on their left).** They hold the hand of the letter before them but leave a gap after themselves.",
     "title": {
      "bn": "৬টি 'লাজুক' অক্ষর",
      "en": "The 6 'shy' letters"
     }
    },
    {
     "type": "letters",
     "items": [
      "alif",
      "dal",
      "dhal",
      "ra",
      "zay",
      "waw"
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "ছয় লাজুক অক্ষর ক্রমানুসারে: আলিফ, দাল, যাল, রা, যা, ওয়াও। প্রথম আওয়াজগুলো জুড়ে বলুন: **'আ-দা-যা-রা-যা-ও'** — শুনতে লাগে 'আদা, যারা যাও!'",
     "en": "The six shy letters in order: Alif, Daal, Dhaal, Raa, Zaay, Waaw. Chant them like a song: **'A-Da-Dha-Ra-Za-Wa!'** Clap once for each."
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "এই ছয়টির পরে যে অক্ষর আসে, সে আবার নতুন করে 'শুরুর রূপ' নেয় — যেন নতুন শব্দ শুরু হলো। তাই একটি শব্দের মাঝেও ফাঁক দেখা যায়; ভয় পাবেন না, এটা একটাই শব্দ!",
     "en": "The letter after one of these six restarts in its 'beginning' form — as if a new word started. So you'll see gaps inside one word; don't panic, it's still one word!"
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "دَارٌ",
       "tr": {
        "bn": "দারুন",
        "en": "dārun"
       },
       "mean": {
        "bn": "বাড়ি",
        "en": "home"
       },
       "note": {
        "bn": "د ا ر — তিনটিই লাজুক, কেউ কারও সাথে জোড়া নেই!",
        "en": "د ا ر — all three are shy; no joins at all!"
       }
      },
      {
       "ar": "وَرْدٌ",
       "tr": {
        "bn": "ওয়ারদুন",
        "en": "wardun"
       },
       "mean": {
        "bn": "গোলাপ",
        "en": "rose"
       },
       "note": {
        "bn": "و ر د — আবারও সবাই লাজুক",
        "en": "و ر د — all shy again"
       }
      },
      {
       "ar": "قَرَأَ",
       "tr": {
        "bn": "ক্বারাআ",
        "en": "qaraʼa"
       },
       "mean": {
        "bn": "সে পড়ল",
        "en": "he read"
       },
       "note": {
        "bn": "ق জোড়া লাগে ر-এর সাথে, কিন্তু ر-এর পরে ফাঁক",
        "en": "ق joins ر, but there's a gap after ر"
       }
      },
      {
       "ar": "رَسُولٌ",
       "tr": {
        "bn": "রাসূলুন",
        "en": "rasūlun"
       },
       "mean": {
        "bn": "রাসূল, বার্তাবাহক",
        "en": "messenger"
       },
       "note": {
        "bn": "ر-এর পরে ফাঁক, আবার و-এর পরে ফাঁক",
        "en": "gap after ر, and again after و"
       }
      }
     ],
     "title": {
      "bn": "ফাঁকওয়ালা শব্দ",
      "en": "Words with gaps"
     }
    },
    {
     "type": "text",
     "bn": "**লাম-আলিফ (لا):** লাম (ل)-এর পরে আলিফ (ا) এলে দুটো মিলে একটা বিশেষ আকার হয় — لا। এটা দুটি অক্ষর, একটি নয়!",
     "en": "**Lam-alif (لا):** when Laam (ل) is followed by Alif (ا), the two merge into a special shape — لا. It's two letters, not one!",
     "title": {
      "bn": "লাম-আলিফ",
      "en": "Lam-alif"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "ل + ا",
       "label": {
        "bn": "লাম + আলিফ",
        "en": "Laam + Alif"
       },
       "desc": {
        "bn": "দুটি আলাদা অক্ষর",
        "en": "two separate letters"
       }
      },
      {
       "ar": "لا",
       "label": {
        "bn": "লাম-আলিফ",
        "en": "Lam-alif"
       },
       "desc": {
        "bn": "মিলে একটি বিশেষ আকার",
        "en": "merged into one special shape"
       }
      },
      {
       "ar": "ـلا",
       "label": {
        "bn": "শব্দের মাঝে",
        "en": "inside a word"
       },
       "desc": {
        "bn": "আগের অক্ষরের সাথে জোড়া",
        "en": "joined to the letter before"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "لا দেখতে একটা ইংরেজি V বা কাঁচির মতো — দুই হাত তুলে বলছে 'লা!' (না!)। আসলেই لَا মানে 'না'!",
     "en": "لا looks like a V or a pair of scissors — two arms raised saying 'Laa!' (No!). And لَا really does mean 'no'!"
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "لَا",
       "tr": {
        "bn": "লা",
        "en": "lā"
       },
       "mean": {
        "bn": "না",
        "en": "no"
       },
       "hl": "لَا"
      },
      {
       "ar": "فَلَا",
       "tr": {
        "bn": "ফালা",
        "en": "falā"
       },
       "mean": {
        "bn": "তাহলে না",
        "en": "so do not"
       },
       "hl": "لَا"
      },
      {
       "ar": "سَلَامٌ",
       "tr": {
        "bn": "সালামুন",
        "en": "salāmun"
       },
       "mean": {
        "bn": "শান্তি",
        "en": "peace"
       },
       "hl": "لَا"
      },
      {
       "ar": "كَلَامٌ",
       "tr": {
        "bn": "কালামুন",
        "en": "kalāmun"
       },
       "mean": {
        "bn": "কথা, বাণী",
        "en": "speech, words"
       },
       "hl": "لَا"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "আল্লাহর নাম {{اللّٰهُ}} লেখা হয় আলিফ + লাম + লাম + হা দিয়ে, আর দ্বিতীয় লামের ওপর ছোট্ট খাড়া আলিফ বসে। কুরআনে সবচেয়ে বেশিবার আসা শব্দগুলোর একটি এটি!",
     "en": "The name {{اللّٰهُ}} is written Alif + Laam + Laam + Haa, with a small standing alif on the second Laam. It is one of the most frequent words in the Quran!"
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "শব্দ",
       "en": "Word"
      },
      {
       "bn": "অক্ষরগুলো",
       "en": "Its letters"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "كَتَبَ",
       "ك ت ب",
       {
        "bn": "সে লিখল",
        "en": "he wrote"
       }
      ],
      [
       "قَلَمٌ",
       "ق ل م",
       {
        "bn": "কলম",
        "en": "pen"
       }
      ],
      [
       "عِلْمٌ",
       "ع ل م",
       {
        "bn": "জ্ঞান",
        "en": "knowledge"
       }
      ],
      [
       "مَسْجِدٌ",
       "م س ج د",
       {
        "bn": "মসজিদ",
        "en": "mosque"
       }
      ],
      [
       "نَعَمْ",
       "ن ع م",
       {
        "bn": "হ্যাঁ",
        "en": "yes"
       }
      ],
      [
       "شَمْسٌ",
       "ش م س",
       {
        "bn": "সূর্য",
        "en": "sun"
       }
      ],
      [
       "اللّٰهُ",
       "ا ل ل ه",
       {
        "bn": "আল্লাহ",
        "en": "Allah"
       }
      ]
     ],
     "title": {
      "bn": "শব্দ ভেঙে অক্ষর খুঁজুন",
      "en": "Break words into letters"
     }
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "অনুশীলনের খেলা: যেকোনো আরবি শব্দ দেখলে আঙুল দিয়ে ডান থেকে বামে প্রতিটি অক্ষরের নাম বলুন। কুরআনের প্রথম পাতা দিয়ে শুরু করতে পারেন!",
     "en": "Practice game: whenever you see an Arabic word, run your finger right to left and name each letter. Try it on the first page of the mushaf!"
    },
    {
     "type": "practice",
     "bn": "প্রতিটি শব্দের অক্ষরগুলোর নাম ডান থেকে বামে বলুন।",
     "en": "Name the letters of each word, right to left.",
     "lines": [
      "كَتَبَ قَلَمٌ عِلْمٌ",
      "بَيْتٌ نَعَمْ شَمْسٌ",
      "دَارٌ وَرْدٌ رَسُولٌ",
      "لَا فَلَا سَلَامٌ",
      "عَلَى بَعْدَ وَجْهٌ",
      "مَسْجِدٌ اللّٰهُ"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "কোন অক্ষরটি পরের অক্ষরের সাথে জোড়া লাগে না?",
        "en": "Which letter never joins to the next letter?"
       },
       "options": [
        "س",
        "ب",
        "د"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "নিচের কোনটি ছয় 'লাজুক' অক্ষরের দলে নেই?",
        "en": "Which is NOT one of the six 'shy' letters?"
       },
       "options": [
        "م",
        "ز",
        "ر",
        "و"
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এটি কোন দুটি অক্ষর মিলে তৈরি?",
        "en": "Which two letters make this shape?"
       },
       "ar": "لا",
       "options": [
        "ن + ا",
        "ل + ا",
        "ا + ل"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "শব্দের মাঝখানে এটি কোন অক্ষর?",
        "en": "Which letter is this, in the middle of a word?"
       },
       "ar": "ـهـ",
       "options": [
        {
         "bn": "মীম",
         "en": "Meem"
        },
        {
         "bn": "আইন",
         "en": "'Ayn"
        },
        {
         "bn": "হা (ه)",
         "en": "Haa (ه)"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "এই শব্দে কয়টি অক্ষর?",
        "en": "How many letters are in this word?"
       },
       "ar": "مَسْجِدٌ",
       "options": [
        {
         "bn": "৩",
         "en": "3"
        },
        {
         "bn": "৪",
         "en": "4"
        },
        {
         "bn": "৫",
         "en": "5"
        }
       ],
       "answer": 1,
       "explain": {
        "bn": "م س ج د — ৪টি অক্ষর।",
        "en": "م س ج د — 4 letters."
       }
      },
      {
       "q": {
        "bn": "শব্দের শুরুতে বা-এর রূপ কোনটি?",
        "en": "What does Baa look like at the start of a word?"
       },
       "options": [
        "بـ",
        "ـب",
        "ـبـ"
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "دَارٌ শব্দে কয়টি জোড়া আছে?",
        "en": "How many joins are in دَارٌ?"
       },
       "ar": "دَارٌ",
       "options": [
        {
         "bn": "২টি",
         "en": "2"
        },
        {
         "bn": "কোনো জোড়া নেই",
         "en": "No joins"
        },
        {
         "bn": "১টি",
         "en": "1"
        }
       ],
       "answer": 1
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-harakat",
   "icon": "◌َ",
   "title": {
    "bn": "হরকত: যবর, যের, পেশ",
    "en": "Harakat: Fatha, Kasra, Damma"
   },
   "subtitle": {
    "bn": "তিনটি ছোট্ট চিহ্ন যা অক্ষরকে কথা বলায়",
    "en": "Three tiny marks that make letters speak"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "ফাতহা (যবর), কাসরা (যের), দাম্মা (পেশ) চেনা",
     "en": "Recognise fatha (zabar), kasra (zer) and damma (pesh)"
    },
    {
     "bn": "যেকোনো অক্ষরকে তিন হরকতে পড়া",
     "en": "Read any letter with all three vowels"
    },
    {
     "bn": "হরকত দিয়ে প্রথম আসল শব্দ পড়া",
     "en": "Read your first real words using harakat"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "এতদিন অক্ষরগুলো ছিল 'বোবা'। আজ আমরা তাদের কণ্ঠ দেব! আরবিতে তিনটি ছোট্ট চিহ্ন — **হরকত** — অক্ষরকে আ, ই বা উ বানায়। আজকের পর আপনি সত্যিই শব্দ পড়তে শুরু করবেন!",
     "en": "Until now the letters were 'silent'. Today we give them a voice! Three tiny marks — the **harakat** — turn a letter into a, i or u. After today you'll really start reading words!"
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "চিহ্ন",
       "en": "Mark"
      },
      {
       "bn": "বাংলা নাম",
       "en": "Bangla name"
      },
      {
       "bn": "আরবি নাম",
       "en": "Arabic name"
      },
      {
       "bn": "আওয়াজ",
       "en": "Sound"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      }
     ],
     "rows": [
      [
       "◌َ",
       {
        "bn": "যবর",
        "en": "Zabar"
       },
       "فَتْحَةٌ",
       {
        "bn": "আ (ছোট)",
        "en": "a (short)"
       },
       "بَ"
      ],
      [
       "◌ِ",
       {
        "bn": "যের",
        "en": "Zer"
       },
       "كَسْرَةٌ",
       {
        "bn": "ই (ছোট)",
        "en": "i (short)"
       },
       "بِ"
      ],
      [
       "◌ُ",
       {
        "bn": "পেশ",
        "en": "Pesh"
       },
       "ضَمَّةٌ",
       {
        "bn": "উ (ছোট)",
        "en": "u (short)"
       },
       "بُ"
      ]
     ],
     "title": {
      "bn": "তিনটি হরকত",
      "en": "The three harakat"
     }
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "**যবর** ওপরে বসে, মুখ ওপরে খোলে: 'আ'। **যের** নিচে বসে, থুতনি নিচে নামে: 'ই'। **পেশ** দেখতে ছোট্ট و-এর মতো, ঠোঁট গোল হয়: 'উ'।",
     "en": "**Fatha** sits on top and your mouth opens up: 'a'. **Kasra** sits below and your chin drops: 'i'. **Damma** looks like a tiny و and your lips round: 'u'."
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "بَ",
       "tr": {
        "bn": "বা",
        "en": "ba"
       },
       "note": {
        "bn": "যবর",
        "en": "fatha"
       }
      },
      {
       "ar": "بِ",
       "tr": {
        "bn": "বি",
        "en": "bi"
       },
       "note": {
        "bn": "যের",
        "en": "kasra"
       }
      },
      {
       "ar": "بُ",
       "tr": {
        "bn": "বু",
        "en": "bu"
       },
       "note": {
        "bn": "পেশ",
        "en": "damma"
       }
      },
      {
       "ar": "كَ",
       "tr": {
        "bn": "কা",
        "en": "ka"
       }
      },
      {
       "ar": "كِ",
       "tr": {
        "bn": "কি",
        "en": "ki"
       }
      },
      {
       "ar": "كُ",
       "tr": {
        "bn": "কু",
        "en": "ku"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "বাংলাভাষীদের সবচেয়ে বড় ভুল: যবরকে 'অ' পড়া (بَ-কে 'ব')। যবর হলো ছোট, খোলা 'আ' — 'বা', 'ব' নয়! তবে টেনে লম্বাও করবেন না।",
     "en": "The biggest slip for Bangla speakers: reading fatha as 'o' (بَ as 'bo'). Fatha is a short, open 'a' — 'ba', not 'bo'! But don't stretch it long either."
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "সব হরকত **ছোট** — এক তুড়ির সমান সময়। যের মানে ছোট 'ই', পেশ মানে ছোট 'উ'।",
     "en": "All harakat are **short** — one finger-snap long. Kasra is a short 'i', damma a short 'u'."
    },
    {
     "type": "build",
     "base": [
      "ب",
      "ت",
      "ث",
      "ج",
      "ح",
      "خ",
      "د",
      "ذ",
      "ر",
      "ز",
      "س",
      "ش",
      "ص",
      "ض",
      "ط",
      "ظ",
      "ع",
      "غ",
      "ف",
      "ق",
      "ك",
      "ل",
      "م",
      "ن",
      "و",
      "ه",
      "ي"
     ],
     "marks": [
      "َ",
      "ِ",
      "ُ"
     ],
     "labels": [
      {
       "bn": "যবর",
       "en": "Fatha"
      },
      {
       "bn": "যের",
       "en": "Kasra"
      },
      {
       "bn": "পেশ",
       "en": "Damma"
      }
     ],
     "title": {
      "bn": "হরকত-গ্রিড: প্রতিটি ঘরে চাপ দিয়ে শুনুন",
      "en": "Harakat grid: tap each cell to hear it"
     }
    },
    {
     "type": "text",
     "bn": "আলিফের ওপর হরকত বসলে সেখানে আসলে একটা হামযা থাকে: أَ (আ), إِ (ই — হামযা ও যের নিচে), أُ (উ)।",
     "en": "When a vowel sits on Alif, there's really a hamza there: أَ (a), إِ (i — hamza and kasra go below), أُ (u).",
     "title": {
      "bn": "আলিফের হরকত",
      "en": "Vowels on Alif"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "أَ",
       "tr": {
        "bn": "আ",
        "en": "a"
       }
      },
      {
       "ar": "إِ",
       "tr": {
        "bn": "ই",
        "en": "i"
       }
      },
      {
       "ar": "أُ",
       "tr": {
        "bn": "উ",
        "en": "u"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "মোটা অক্ষরে (خ ص ض غ ط ق ظ) যবর পড়লে আওয়াজ গভীর ও ভারী শোনায়: خَ صَ طَ قَ। হালকা অক্ষরে যবর পরিষ্কার 'আ'। তুলনা করুন: سَ / صَ, تَ / طَ।",
     "en": "With heavy letters (خ ص ض غ ط ق ظ) a fatha sounds deep and full: خَ صَ طَ قَ. With light letters it's a clear 'a'. Compare: سَ / صَ, تَ / طَ."
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "سَ",
       "label": {
        "bn": "সা — হালকা",
        "en": "sa — light"
       },
       "desc": {
        "bn": "পরিষ্কার, পাতলা আ",
        "en": "clear, thin a"
       }
      },
      {
       "ar": "صَ",
       "label": {
        "bn": "সা — মোটা",
        "en": "ṣa — heavy"
       },
       "desc": {
        "bn": "গভীর, মুখ-ভরা আ",
        "en": "deep, full-mouthed a"
       }
      }
     ]
    },
    {
     "type": "text",
     "bn": "এবার আসল মজা! শুধু হরকত দিয়ে তৈরি তিন অক্ষরের শব্দ পড়ি। প্রতিটি অক্ষর তার হরকতসহ বলুন, তারপর মিলিয়ে দিন: كَ + تَ + بَ = كَتَبَ।",
     "en": "Now the real fun! Let's read three-letter words made only of harakat. Say each letter with its vowel, then glue them together: كَ + تَ + بَ = كَتَبَ.",
     "title": {
      "bn": "প্রথম শব্দ!",
      "en": "Your first words!"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "كَتَبَ",
       "tr": {
        "bn": "কাতাবা",
        "en": "kataba"
       },
       "mean": {
        "bn": "সে লিখল",
        "en": "he wrote"
       }
      },
      {
       "ar": "خَلَقَ",
       "tr": {
        "bn": "খালাক্বা",
        "en": "khalaqa"
       },
       "mean": {
        "bn": "তিনি সৃষ্টি করলেন",
        "en": "He created"
       }
      },
      {
       "ar": "ذَهَبَ",
       "tr": {
        "bn": "যাহাবা",
        "en": "dhahaba"
       },
       "mean": {
        "bn": "সে গেল",
        "en": "he went"
       }
      },
      {
       "ar": "جَعَلَ",
       "tr": {
        "bn": "জা'আলা",
        "en": "ja'ala"
       },
       "mean": {
        "bn": "তিনি বানালেন",
        "en": "He made"
       }
      },
      {
       "ar": "عَلِمَ",
       "tr": {
        "bn": "'আলিমা",
        "en": "'alima"
       },
       "mean": {
        "bn": "সে জানল",
        "en": "he knew"
       }
      },
      {
       "ar": "سَمِعَ",
       "tr": {
        "bn": "সামি'আ",
        "en": "sami'a"
       },
       "mean": {
        "bn": "সে শুনল",
        "en": "he heard"
       }
      },
      {
       "ar": "كُتِبَ",
       "tr": {
        "bn": "কুতিবা",
        "en": "kutiba"
       },
       "mean": {
        "bn": "লেখা হলো",
        "en": "it was written"
       }
      },
      {
       "ar": "خُلِقَ",
       "tr": {
        "bn": "খুলিক্বা",
        "en": "khuliqa"
       },
       "mean": {
        "bn": "সৃষ্টি করা হলো",
        "en": "was created"
       }
      },
      {
       "ar": "رُسُلُ",
       "tr": {
        "bn": "রুসুলু",
        "en": "rusulu"
       },
       "mean": {
        "bn": "রাসূলগণ",
        "en": "messengers"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "কুরআনে নাযিল হওয়া প্রথম আয়াতগুলোতেই আছে {{خَلَقَ}} (তিনি সৃষ্টি করেছেন)। আপনি এখনই সেটা পড়তে পারছেন!",
     "en": "The very first verses revealed in the Quran contain {{خَلَقَ}} (He created). You can already read it!"
    },
    {
     "type": "practice",
     "bn": "প্রথমে ধীরে, তারপর একটু দ্রুত পড়ুন।",
     "en": "Read slowly first, then a little faster.",
     "lines": [
      "بَ تَ ثَ جَ حَ خَ",
      "بِ تِ ثِ جِ حِ خِ",
      "بُ تُ ثُ جُ حُ خُ",
      "دَ ذِ رُ زَ سِ شُ",
      "صَ ضِ طُ ظَ عِ غُ",
      "فَ قِ كُ لَ مِ نُ",
      "وَ هِ يُ أَ إِ أُ",
      "كَتَبَ خَلَقَ جَعَلَ",
      "عَلِمَ سَمِعَ شَرِبَ",
      "كُتِبَ خُلِقَ جُعِلَ",
      "رُسُلُ كُتُبُ أَحَدَ عَشَرَ"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "بِ",
       "options": [
        {
         "bn": "বু",
         "en": "bu"
        },
        {
         "bn": "বা",
         "en": "ba"
        },
        {
         "bn": "বি",
         "en": "bi"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "পেশ (দাম্মা)-র আওয়াজ কী?",
        "en": "What sound does damma (pesh) make?"
       },
       "options": [
        {
         "bn": "উ",
         "en": "u"
        },
        {
         "bn": "আ",
         "en": "a"
        },
        {
         "bn": "ই",
         "en": "i"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "كَتَبَ",
       "options": [
        {
         "bn": "কিতাবা",
         "en": "kitaba"
        },
        {
         "bn": "কাতাবা",
         "en": "kataba"
        },
        {
         "bn": "কুতিবা",
         "en": "kutiba"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "যবর কোথায় বসে?",
        "en": "Where does fatha sit?"
       },
       "options": [
        {
         "bn": "অক্ষরের নিচে",
         "en": "Below the letter"
        },
        {
         "bn": "অক্ষরের পাশে",
         "en": "Beside the letter"
        },
        {
         "bn": "অক্ষরের ওপরে",
         "en": "Above the letter"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "بَ-কে কীভাবে পড়বেন?",
        "en": "How should you read بَ?"
       },
       "ar": "بَ",
       "options": [
        {
         "bn": "বা (ছোট আ)",
         "en": "ba (short a)"
        },
        {
         "bn": "ব (অ)",
         "en": "bo"
        },
        {
         "bn": "বা-আ-আ (লম্বা)",
         "en": "baaa (long)"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "خُلِقَ",
       "options": [
        {
         "bn": "খালাক্বা",
         "en": "khalaqa"
        },
        {
         "bn": "খুলিক্বা",
         "en": "khuliqa"
        },
        {
         "bn": "হালাকা",
         "en": "halaka"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "কাসরাকে বাংলায় কী বলে?",
        "en": "What is kasra called in Bangla?"
       },
       "options": [
        {
         "bn": "পেশ",
         "en": "Pesh"
        },
        {
         "bn": "যবর",
         "en": "Zabar"
        },
        {
         "bn": "যের",
         "en": "Zer"
        }
       ],
       "answer": 2
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-sukun",
   "icon": "◌ْ",
   "title": {
    "bn": "সুকুন (জযম)",
    "en": "Sukun (Jazm)"
   },
   "subtitle": {
    "bn": "যে চিহ্ন বলে: 'এখানে থামো, স্বর নেই'",
    "en": "The mark that says: 'stop here, no vowel'"
   },
   "minutes": 12,
   "goals": [
    {
     "bn": "সুকুন/জযম চিহ্ন চেনা",
     "en": "Recognise the sukun/jazm mark"
    },
    {
     "bn": "সুকুনওয়ালা অক্ষরকে আগের অক্ষরের সাথে মিলিয়ে পড়া",
     "en": "Join a letter with sukun to the letter before it"
    },
    {
     "bn": "কলকলা (প্রতিধ্বনি) অক্ষর চেনা",
     "en": "Meet the bouncing (qalqalah) letters"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "এখন পর্যন্ত প্রতিটি অক্ষর নিজের স্বর নিয়ে আলাদা আলাদা পড়েছি: بَ تَ। কিন্তু 'আব', 'মিন' বা 'কুল' পড়তে চাইলে? এর জন্য দরকার **সুকুন** — বাংলায় যাকে বলি **জযম**।",
     "en": "So far every letter had its own vowel: بَ تَ. But what about 'ab', 'min' or 'qul'? For that we need **sukun** — called **jazm** in Bangla."
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "চিহ্ন",
       "en": "Mark"
      },
      {
       "bn": "নাম",
       "en": "Name"
      },
      {
       "bn": "কাজ",
       "en": "What it does"
      }
     ],
     "rows": [
      [
       "◌ْ",
       {
        "bn": "সুকুন / জযম",
        "en": "Sukun / Jazm"
       },
       {
        "bn": "অক্ষরে কোনো স্বর নেই — আগের অক্ষরের সাথে মিলে যায়",
        "en": "no vowel on this letter — it closes onto the letter before"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "সুকুন হলো আরবির **হসন্ত (্)**! বাংলায় যেমন 'ক্' মানে স্বরহীন ক, তেমনি আরবিতে بْ মানে স্বরহীন ব। ছোট্ট গোল চিহ্নটা যেন একটা শূন্য (০) — 'শূন্য স্বর'!",
     "en": "Sukun is Arabic's **hasanta (্)**! Just as Bangla 'ক্' is k without a vowel, Arabic بْ is b without a vowel. The little circle is a zero — 'zero vowel'!"
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "أَبْ",
       "tr": {
        "bn": "আব্",
        "en": "ab"
       },
       "note": {
        "bn": "أَ + بْ",
        "en": "أَ + بْ"
       }
      },
      {
       "ar": "إِبْ",
       "tr": {
        "bn": "ইব্",
        "en": "ib"
       },
       "note": {
        "bn": "إِ + بْ",
        "en": "إِ + بْ"
       }
      },
      {
       "ar": "أُبْ",
       "tr": {
        "bn": "উব্",
        "en": "ub"
       },
       "note": {
        "bn": "أُ + بْ",
        "en": "أُ + بْ"
       }
      }
     ],
     "title": {
      "bn": "কীভাবে মেলাবেন",
      "en": "How to join"
     }
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "সুকুনওয়ালা অক্ষর কখনো একা পড়বেন না। আগের অক্ষরের স্বরের সাথে এক নিঃশ্বাসে মিলিয়ে বলুন: أَبْ = 'আব্', 'আ-বি' নয়।",
     "en": "Never read a sukun letter on its own. Glue it to the previous vowel in one breath: أَبْ = 'ab', not 'a-bi'."
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "مِنْ",
       "tr": {
        "bn": "মিন্",
        "en": "min"
       },
       "mean": {
        "bn": "থেকে",
        "en": "from"
       }
      },
      {
       "ar": "عَنْ",
       "tr": {
        "bn": "'আন্",
        "en": "'an"
       },
       "mean": {
        "bn": "সম্পর্কে, থেকে",
        "en": "about, from"
       }
      },
      {
       "ar": "لَمْ",
       "tr": {
        "bn": "লাম্",
        "en": "lam"
       },
       "mean": {
        "bn": "না (অতীতে)",
        "en": "did not"
       }
      },
      {
       "ar": "قُلْ",
       "tr": {
        "bn": "ক্বুল্",
        "en": "qul"
       },
       "mean": {
        "bn": "বলুন",
        "en": "say!"
       }
      },
      {
       "ar": "هَلْ",
       "tr": {
        "bn": "হাল্",
        "en": "hal"
       },
       "mean": {
        "bn": "কি? (প্রশ্ন)",
        "en": "is/does…?"
       }
      },
      {
       "ar": "بَلْ",
       "tr": {
        "bn": "বাল্",
        "en": "bal"
       },
       "mean": {
        "bn": "বরং",
        "en": "rather"
       }
      },
      {
       "ar": "كَمْ",
       "tr": {
        "bn": "কাম্",
        "en": "kam"
       },
       "mean": {
        "bn": "কত?",
        "en": "how many?"
       }
      },
      {
       "ar": "هُمْ",
       "tr": {
        "bn": "হুম্",
        "en": "hum"
       },
       "mean": {
        "bn": "তারা",
        "en": "they"
       }
      }
     ],
     "title": {
      "bn": "দুই অক্ষরের শব্দ",
      "en": "Two-letter words"
     }
    },
    {
     "type": "text",
     "bn": "এবার লম্বা শব্দ। শব্দকে ছোট ছোট টুকরায় (সিলেবল) ভাগ করুন — সুকুন যেখানে, টুকরা সেখানে শেষ।",
     "en": "Now longer words. Split the word into small chunks (syllables) — a chunk ends wherever there's a sukun.",
     "title": {
      "bn": "লম্বা শব্দ ভাগ করে পড়া",
      "en": "Reading longer words in chunks"
     }
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "শব্দ",
       "en": "Word"
      },
      {
       "bn": "টুকরা",
       "en": "Chunks"
      },
      {
       "bn": "উচ্চারণ",
       "en": "Reading"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "أَنْتَ",
       "أَنْ + تَ",
       {
        "bn": "আন্‌তা",
        "en": "an-ta"
       },
       {
        "bn": "তুমি",
        "en": "you"
       }
      ],
      [
       "يَعْلَمُ",
       "يَعْ + لَ + مُ",
       {
        "bn": "ইয়া'লামু",
        "en": "ya'-la-mu"
       },
       {
        "bn": "সে জানে",
        "en": "he knows"
       }
      ],
      [
       "نَعْبُدُ",
       "نَعْ + بُ + دُ",
       {
        "bn": "না'বুদু",
        "en": "na'-bu-du"
       },
       {
        "bn": "আমরা ইবাদত করি",
        "en": "we worship"
       }
      ],
      [
       "أَنْعَمْتَ",
       "أَنْ + عَمْ + تَ",
       {
        "bn": "আন'আমতা",
        "en": "an-'am-ta"
       },
       {
        "bn": "আপনি অনুগ্রহ করেছেন",
        "en": "You have blessed"
       }
      ],
      [
       "يَخْلُقُ",
       "يَخْ + لُ + قُ",
       {
        "bn": "ইয়াখলুকু",
        "en": "yakh-lu-qu"
       },
       {
        "bn": "তিনি সৃষ্টি করেন",
        "en": "He creates"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "সুকুনওয়ালা ع বা ح হারিয়ে ফেলবেন না! نَعْبُدُ হলো 'না'বুদু' — গলায় আইনের চাপটা থাকবে; 'নাবুদু' বললে শব্দ ভুল হয়ে যায়।",
     "en": "Don't swallow a ع or ح with sukun! نَعْبُدُ is 'na'budu' — keep the throat squeeze of 'Ayn; 'nabudu' is wrong."
    },
    {
     "type": "rule",
     "name": {
      "bn": "কলকলা",
      "en": "Qalqalah (echo)"
     },
     "ar": "قَلْقَلَةٌ",
     "color": "blue",
     "letters": "ق ط ب ج د",
     "desc": {
      "bn": "পাঁচটি অক্ষরে সুকুন থাকলে আওয়াজটা একটু 'লাফিয়ে' ওঠে, যেন ছোট্ট প্রতিধ্বনি। অক্ষরগুলো মনে রাখার বাক্য: {{قُطْبُ جَدٍّ}}।",
      "en": "When five letters carry a sukun, the sound gives a little 'bounce', like a tiny echo. Remember them with the phrase {{قُطْبُ جَدٍّ}}."
     },
     "how": {
      "bn": "অক্ষর উচ্চারণের জায়গাটা চেপে ধরে হঠাৎ ছেড়ে দিন — একটা হালকা ধাক্কা। কিন্তু পরে কোনো স্বর (আ/ই/উ) যোগ করবেন না।",
      "en": "Press the letter's point firmly, then release it suddenly — a light pop. But don't add any vowel after it."
     },
     "examples": [
      {
       "ar": "قَدْ",
       "tr": {
        "bn": "ক্বাদ্",
        "en": "qad"
       },
       "hl": "دْ"
      },
      {
       "ar": "يَدْخُلُ",
       "tr": {
        "bn": "ইয়াদখুলু",
        "en": "yadkhulu"
       },
       "hl": "دْ"
      },
      {
       "ar": "يَبْسُطُ",
       "tr": {
        "bn": "ইয়াবসুতু",
        "en": "yabsuṭu"
       },
       "hl": "بْ"
      },
      {
       "ar": "يَجْعَلُ",
       "tr": {
        "bn": "ইয়াজ'আলু",
        "en": "yaj'alu"
       },
       "hl": "جْ"
      },
      {
       "ar": "يَقْطَعُ",
       "tr": {
        "bn": "ইয়াক্বতা'উ",
        "en": "yaqṭa'u"
       },
       "hl": "قْ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "বাংলাদেশে ছাপা কুরআনে জযম সাধারণত গোল নয় — দেখতে ছোট্ট একটা মাথার মতো: {{مِنۡ}}। আকার যেমনই হোক, কাজ একই!",
     "en": "In mushafs printed in Bangladesh, the jazm often isn't a circle — it looks like a tiny head: {{مِنۡ}}. Whatever its shape, the job is the same!"
    },
    {
     "type": "practice",
     "bn": "প্রতিটি টুকরা এক নিঃশ্বাসে পড়ুন।",
     "en": "Read each chunk in one breath.",
     "lines": [
      "أَبْ أَتْ أَثْ أَجْ أَحْ أَخْ",
      "أَدْ أَذْ أَرْ أَزْ أَسْ أَشْ",
      "أَصْ أَضْ أَطْ أَظْ أَعْ أَغْ",
      "أَفْ أَقْ أَكْ أَلْ أَمْ أَنْ",
      "إِبْ إِتْ إِسْ أُبْ أُتْ أُسْ",
      "مِنْ عَنْ لَمْ قُلْ",
      "هَلْ بَلْ كَمْ هُمْ",
      "أَنْتَ أَنْتُمْ لَكُمْ",
      "يَعْلَمُ نَعْبُدُ يَشْكُرُ",
      "أَنْعَمْتَ يَخْلُقُ يَدْخُلُ"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "সুকুনকে বাংলায় কী বলে?",
        "en": "What is sukun called in Bangla?"
       },
       "options": [
        {
         "bn": "জযম",
         "en": "Jazm"
        },
        {
         "bn": "যবর",
         "en": "Zabar"
        },
        {
         "bn": "তাশদীদ",
         "en": "Tashdeed"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "مِنْ",
       "options": [
        {
         "bn": "মান্",
         "en": "man"
        },
        {
         "bn": "মিন্",
         "en": "min"
        },
        {
         "bn": "মিনা",
         "en": "mina"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "বাংলার কোন চিহ্নের সাথে সুকুনের মিল?",
        "en": "Which Bangla sign is like sukun?"
       },
       "options": [
        {
         "bn": "আ-কার (া)",
         "en": "aa-kar (া)"
        },
        {
         "bn": "চন্দ্রবিন্দু (ঁ)",
         "en": "Chandrabindu (ঁ)"
        },
        {
         "bn": "হসন্ত (্)",
         "en": "Hasanta (্)"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "نَعْبُدُ",
       "options": [
        {
         "bn": "না'বুদু",
         "en": "na'budu"
        },
        {
         "bn": "না'আবুদু",
         "en": "na'abudu"
        },
        {
         "bn": "না-বু-দু",
         "en": "nabudu"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "কোন অক্ষরটি কলকলার অক্ষর?",
        "en": "Which letter is a qalqalah letter?"
       },
       "options": [
        "ك",
        "ق",
        "ف"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "قُلْ",
       "options": [
        {
         "bn": "কুল্",
         "en": "kul"
        },
        {
         "bn": "ক্বুলু",
         "en": "qulu"
        },
        {
         "bn": "ক্বুল্",
         "en": "qul"
        }
       ],
       "answer": 2
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-tanween",
   "icon": "◌ٌ",
   "title": {
    "bn": "তানবীন: দুই যবর, দুই যের, দুই পেশ",
    "en": "Tanween: Double Vowels"
   },
   "subtitle": {
    "bn": "শব্দের শেষে লুকানো 'ন্' আওয়াজ",
    "en": "The hidden 'n' sound at the end of words"
   },
   "minutes": 12,
   "goals": [
    {
     "bn": "তিন রকম তানবীন চেনা ও পড়া",
     "en": "Recognise and read the three tanween"
    },
    {
     "bn": "দুই যবরের সাথে অতিরিক্ত আলিফ বোঝা",
     "en": "Understand the extra alif after double fatha"
    },
    {
     "bn": "থামার সময় তানবীন কীভাবে বদলায়",
     "en": "How tanween changes when you stop"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "কখনো কখনো শব্দের শেষে হরকত **দুইবার** লেখা থাকে। একে বলে **তানবীন**। নিয়ম সহজ: তানবীন = হরকত + 'ন্'।",
     "en": "Sometimes a vowel is written **twice** at the end of a word. This is **tanween**. The rule is easy: tanween = vowel + 'n'."
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "চিহ্ন",
       "en": "Mark"
      },
      {
       "bn": "বাংলা নাম",
       "en": "Bangla name"
      },
      {
       "bn": "আওয়াজ",
       "en": "Sound"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      }
     ],
     "rows": [
      [
       "◌ً",
       {
        "bn": "দুই যবর",
        "en": "Double zabar"
       },
       {
        "bn": "আন্",
        "en": "-an"
       },
       "بًا"
      ],
      [
       "◌ٍ",
       {
        "bn": "দুই যের",
        "en": "Double zer"
       },
       {
        "bn": "ইন্",
        "en": "-in"
       },
       "بٍ"
      ],
      [
       "◌ٌ",
       {
        "bn": "দুই পেশ",
        "en": "Double pesh"
       },
       {
        "bn": "উন্",
        "en": "-un"
       },
       "بٌ"
      ]
     ],
     "title": {
      "bn": "তিন রকম তানবীন",
      "en": "The three tanween"
     }
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "তানবীন যেন একটা লুকানো নূন: بٌ শুনতে ঠিক بُنْ-এর মতো, بٍ = بِنْ, بًا = بَنْ। দুটো দাগ দেখলেই মনে মনে বলুন: 'ন্ যোগ করো!'",
     "en": "Tanween is a hidden noon: بٌ sounds just like بُنْ, بٍ = بِنْ, بًا = بَنْ. See two marks? Think: 'add an n!'"
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "بٌ",
       "label": {
        "bn": "বুন্",
        "en": "bun"
       },
       "desc": {
        "bn": "= بُنْ",
        "en": "= بُنْ"
       }
      },
      {
       "ar": "بٍ",
       "label": {
        "bn": "বিন্",
        "en": "bin"
       },
       "desc": {
        "bn": "= بِنْ",
        "en": "= بِنْ"
       }
      },
      {
       "ar": "بًا",
       "label": {
        "bn": "বান্",
        "en": "ban"
       },
       "desc": {
        "bn": "= بَنْ",
        "en": "= بَنْ"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "দাম্মাতান (দুই পেশ) প্রায়ই এভাবে লেখা হয়: ٌ — একটা পেশ আর তার সাথে লাগানো একটা উল্টো লেজ। দুই যবর ও দুই যের দেখতে দুটি সমান্তরাল দাগের মতো।",
     "en": "Double damma is often written like ٌ — one damma with a little curl attached. Double fatha and double kasra look like two parallel strokes."
    },
    {
     "type": "text",
     "bn": "দুই যবরের পরে সাধারণত একটা **অতিরিক্ত আলিফ** লেখা থাকে: كِتَابًا। এই আলিফ পড়ার সময় লম্বা হয় না — এটা শুধু লেখার নিয়ম। ব্যতিক্রম: শব্দ ة (গোল তা) বা আলিফের পরের ء দিয়ে শেষ হলে আলিফ বসে না: رَحْمَةً، سَمَاءً।",
     "en": "Double fatha usually comes with an **extra alif**: كِتَابًا. This alif isn't stretched when reading — it's just a spelling rule. Exception: words ending in ة (round ta), or in ء after an alif, don't get it: رَحْمَةً، سَمَاءً.",
     "title": {
      "bn": "দুই যবরের আলিফ",
      "en": "The alif of double fatha"
     }
    },
    {
     "type": "build",
     "base": [
      "ب",
      "ت",
      "ج",
      "د",
      "ر",
      "س",
      "ع",
      "ق",
      "ك",
      "ل",
      "م",
      "ن",
      "ه",
      "ي"
     ],
     "marks": [
      "ً",
      "ٍ",
      "ٌ"
     ],
     "labels": [
      {
       "bn": "দুই যবর",
       "en": "Double fatha"
      },
      {
       "bn": "দুই যের",
       "en": "Double kasra"
      },
      {
       "bn": "দুই পেশ",
       "en": "Double damma"
      }
     ],
     "title": {
      "bn": "তানবীন-গ্রিড",
      "en": "Tanween grid"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "وَلَدٌ",
       "tr": {
        "bn": "ওয়ালাদুন",
        "en": "waladun"
       },
       "mean": {
        "bn": "একটি ছেলে",
        "en": "a boy"
       }
      },
      {
       "ar": "رَجُلٍ",
       "tr": {
        "bn": "রাজুলিন",
        "en": "rajulin"
       },
       "mean": {
        "bn": "একজন পুরুষের",
        "en": "of a man"
       }
      },
      {
       "ar": "قَلَمًا",
       "tr": {
        "bn": "ক্বালামান",
        "en": "qalaman"
       },
       "mean": {
        "bn": "একটি কলম",
        "en": "a pen"
       }
      },
      {
       "ar": "أَحَدٌ",
       "tr": {
        "bn": "আহাদুন",
        "en": "aḥadun"
       },
       "mean": {
        "bn": "এক",
        "en": "one"
       }
      },
      {
       "ar": "حَسَنَةٌ",
       "tr": {
        "bn": "হাসানাতুন",
        "en": "ḥasanatun"
       },
       "mean": {
        "bn": "একটি নেকি, ভালো কাজ",
        "en": "a good deed"
       }
      },
      {
       "ar": "شَجَرَةٍ",
       "tr": {
        "bn": "শাজারাতিন",
        "en": "shajaratin"
       },
       "mean": {
        "bn": "একটি গাছের",
        "en": "of a tree"
       }
      },
      {
       "ar": "رَحْمَةً",
       "tr": {
        "bn": "রাহমাতান",
        "en": "raḥmatan"
       },
       "mean": {
        "bn": "রহমত, দয়া",
        "en": "mercy"
       }
      }
     ],
     "title": {
      "bn": "তানবীনওয়ালা শব্দ",
      "en": "Words with tanween"
     }
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "তানবীন সাধারণত বোঝায় 'একটি' — যেমন বাংলায় 'একটা বই'। كِتَابٌ = একটি বই। (আর 'আল-' যোগ করলে তানবীন চলে যায় — পরে শিখব!)",
     "en": "Tanween usually means 'a / an' — كِتَابٌ = a book. (Add 'al-' (the) and the tanween disappears — coming soon!)"
    },
    {
     "type": "text",
     "bn": "শব্দের শেষে থামলে (যেমন আয়াতের শেষে) তানবীন বদলে যায়: দুই পেশ ও দুই যের হয়ে যায় সুকুন, আর দুই যবর হয়ে যায় লম্বা 'আ'।",
     "en": "When you stop at the end of a word (e.g. at the end of an ayah), tanween changes: double damma and double kasra become a sukun, and double fatha becomes a long 'ā'.",
     "title": {
      "bn": "থামার সময়",
      "en": "When you stop"
     }
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "লেখা",
       "en": "Written"
      },
      {
       "bn": "পড়ার সময় (চলতে চলতে)",
       "en": "Reading on"
      },
      {
       "bn": "থামলে",
       "en": "When stopping"
      }
     ],
     "rows": [
      [
       "أَحَدٌ",
       {
        "bn": "আহাদুন",
        "en": "aḥadun"
       },
       {
        "bn": "আহাদ্",
        "en": "aḥad"
       }
      ],
      [
       "رَجُلٍ",
       {
        "bn": "রাজুলিন",
        "en": "rajulin"
       },
       {
        "bn": "রাজুল্",
        "en": "rajul"
       }
      ],
      [
       "قَلَمًا",
       {
        "bn": "ক্বালামান",
        "en": "qalaman"
       },
       {
        "bn": "ক্বালামা",
        "en": "qalamā"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "বাংলাদেশি কুরআনে মাঝে মাঝে তানবীনের পরে ছোট্ট মীম (ۢ) বা অন্য চিহ্ন দেখবেন — এগুলো তাজবীদের নিয়ম, পরের ইউনিটে শিখব। এখন শুধু 'হরকত + ন্' মনে রাখুন।",
     "en": "In Bangladeshi mushafs you'll sometimes see a tiny meem (ۢ) or other marks near tanween — those are tajweed rules for a later unit. For now, just remember 'vowel + n'."
    },
    {
     "type": "practice",
     "bn": "জোরে পড়ুন — শেষে 'ন্' যেন স্পষ্ট শোনা যায়!",
     "en": "Read aloud — make the final 'n' clear!",
     "lines": [
      "بًا بٍ بٌ",
      "تًا تٍ تٌ",
      "دًا دٍ دٌ",
      "رًا رٍ رٌ",
      "قًا قٍ قٌ",
      "وَلَدٌ قَلَمٌ رَجُلٌ",
      "وَلَدًا قَلَمًا رَجُلًا",
      "وَلَدٍ قَلَمٍ رَجُلٍ",
      "حَسَنَةٌ رَحْمَةً شَجَرَةٍ",
      "أَحَدٌ عَدَدًا"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "بٌ",
       "options": [
        {
         "bn": "বুন্",
         "en": "bun"
        },
        {
         "bn": "বিন্",
         "en": "bin"
        },
        {
         "bn": "বান্",
         "en": "ban"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "তানবীন মানে কী?",
        "en": "What does tanween add?"
       },
       "options": [
        {
         "bn": "দ্বিগুণ অক্ষর",
         "en": "A doubled letter"
        },
        {
         "bn": "হরকতের পরে 'ন্' আওয়াজ",
         "en": "An 'n' sound after the vowel"
        },
        {
         "bn": "লম্বা স্বর",
         "en": "A long vowel"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "رَجُلٍ",
       "options": [
        {
         "bn": "রাজুলান",
         "en": "rajulan"
        },
        {
         "bn": "রাজুলুন",
         "en": "rajulun"
        },
        {
         "bn": "রাজুলিন",
         "en": "rajulin"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "قَلَمًا-তে শেষের আলিফ কি লম্বা করে পড়বেন (চলতে চলতে)?",
        "en": "Is the final alif in قَلَمًا stretched (when reading on)?"
       },
       "ar": "قَلَمًا",
       "options": [
        {
         "bn": "না, এটা শুধু লেখার নিয়ম",
         "en": "No, it's just spelling"
        },
        {
         "bn": "হ্যাঁ, সবসময়",
         "en": "Yes, always"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "أَحَدٌ শব্দে থামলে কীভাবে পড়বেন?",
        "en": "How do you read أَحَدٌ when stopping on it?"
       },
       "options": [
        {
         "bn": "আহাদ্",
         "en": "aḥad"
        },
        {
         "bn": "আহাদা",
         "en": "aḥadā"
        },
        {
         "bn": "আহাদুন",
         "en": "aḥadun"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "দুই যেরের আওয়াজ কী?",
        "en": "What sound does double kasra make?"
       },
       "options": [
        {
         "bn": "আন্",
         "en": "-an"
        },
        {
         "bn": "ইন্",
         "en": "-in"
        },
        {
         "bn": "উন্",
         "en": "-un"
        }
       ],
       "answer": 1
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-shaddah",
   "icon": "◌ّ",
   "title": {
    "bn": "তাশদীদ (শাদ্দাহ)",
    "en": "Shaddah (Tashdeed)"
   },
   "subtitle": {
    "bn": "এক অক্ষর, দুইবার পড়া",
    "en": "One letter, read twice"
   },
   "minutes": 12,
   "goals": [
    {
     "bn": "তাশদীদ চিহ্ন চেনা",
     "en": "Recognise the shaddah mark"
    },
    {
     "bn": "তাশদীদওয়ালা অক্ষরকে দুই ভাগে ভেঙে পড়া",
     "en": "Read a doubled letter by splitting it in two"
    },
    {
     "bn": "ن ও م-এ তাশদীদ থাকলে গুন্নাহ করা",
     "en": "Add ghunnah (nasal hum) on doubled ن and م"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "অক্ষরের ওপর ছোট্ট একটা 'w'-এর মতো চিহ্ন দেখেছেন? এটা **তাশদীদ** (শাদ্দাহ)। এর মানে: এই অক্ষরটি **দুইবার** পড়তে হবে — প্রথমবার সুকুন দিয়ে, দ্বিতীয়বার নিজের হরকত দিয়ে।",
     "en": "Seen a tiny 'w' on top of a letter? That's **shaddah** (tashdeed). It means: read this letter **twice** — first with a sukun, then with its own vowel."
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "চিহ্ন",
       "en": "Mark"
      },
      {
       "bn": "নাম",
       "en": "Name"
      },
      {
       "bn": "কাজ",
       "en": "What it does"
      }
     ],
     "rows": [
      [
       "◌ّ",
       {
        "bn": "তাশদীদ / শাদ্দাহ",
        "en": "Tashdeed / Shaddah"
       },
       {
        "bn": "অক্ষর দ্বিগুণ: প্রথমে সুকুন, তারপর হরকত",
        "en": "doubles the letter: sukun first, then the vowel"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "তাশদীদ দেখতে ইংরেজি ছোট্ট w — আর ইংরেজিতে W-এর নাম 'ডাবল-ইউ' (double)! মানে: অক্ষর ডাবল করো। বাংলায় যেমন 'আব্বা', 'আম্মা' — ব আর ম দুইবার!",
     "en": "Shaddah looks like a tiny w — and W is literally called 'double-u'! So: double the letter. Just like 'Abba' and 'Amma' — the b and m are said twice!"
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "শব্দ",
       "en": "Word"
      },
      {
       "bn": "ভাঙলে",
       "en": "Split"
      },
      {
       "bn": "উচ্চারণ",
       "en": "Reading"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "رَبِّ",
       "رَبْ + بِ",
       {
        "bn": "রাব্‌বি",
        "en": "rab-bi"
       },
       {
        "bn": "হে আমার রব",
        "en": "my Lord"
       }
      ],
      [
       "إِنَّ",
       "إِنْ + نَ",
       {
        "bn": "ইন্‌না",
        "en": "in-na"
       },
       {
        "bn": "নিশ্চয়ই",
        "en": "indeed"
       }
      ],
      [
       "ثُمَّ",
       "ثُمْ + مَ",
       {
        "bn": "ছুম্‌মা",
        "en": "thum-ma"
       },
       {
        "bn": "তারপর",
        "en": "then"
       }
      ],
      [
       "كُلُّ",
       "كُلْ + لُ",
       {
        "bn": "কুল্‌লু",
        "en": "kul-lu"
       },
       {
        "bn": "প্রত্যেক",
        "en": "every"
       }
      ],
      [
       "حَقٌّ",
       "حَقْ + قٌ",
       {
        "bn": "হাক্‌কুন",
        "en": "ḥaq-qun"
       },
       {
        "bn": "সত্য",
        "en": "truth"
       }
      ]
     ],
     "title": {
      "bn": "ভেঙে পড়ার কৌশল",
      "en": "The split trick"
     }
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "তাশদীদওয়ালা অক্ষরে একটু 'চাপ' দিন, যেন সেখানে এক মুহূর্ত থামছেন: রাব্—বি। খুব দ্রুত পড়লে তাশদীদ হারিয়ে যায়, তখন রাব্বি হয়ে যায় 'রাবি'!",
     "en": "Lean on the doubled letter, as if pausing on it for a moment: rab—bi. Rushing it loses the shaddah, and rabbi turns into 'rabi'!"
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "عَلِمَ",
       "label": {
        "bn": "'আলিমা — সে জানল",
        "en": "'alima — he knew"
       },
       "desc": {
        "bn": "তাশদীদ নেই",
        "en": "no shaddah"
       }
      },
      {
       "ar": "عَلَّمَ",
       "label": {
        "bn": "'আল্লামা — সে শেখাল",
        "en": "'allama — he taught"
       },
       "desc": {
        "bn": "ل-এ তাশদীদ",
        "en": "shaddah on ل"
       }
      }
     ],
     "title": {
      "bn": "তাশদীদে অর্থ বদলায়!",
      "en": "Shaddah changes meaning!"
     }
    },
    {
     "type": "build",
     "base": [
      "ب",
      "ت",
      "ج",
      "د",
      "ر",
      "س",
      "ش",
      "ص",
      "ط",
      "ق",
      "ك",
      "ل",
      "م",
      "ن",
      "ي"
     ],
     "marks": [
      "َّ",
      "ِّ",
      "ُّ"
     ],
     "labels": [
      {
       "bn": "তাশদীদ + যবর",
       "en": "Shaddah + fatha"
      },
      {
       "bn": "তাশদীদ + যের",
       "en": "Shaddah + kasra"
      },
      {
       "bn": "তাশদীদ + পেশ",
       "en": "Shaddah + damma"
      }
     ],
     "title": {
      "bn": "তাশদীদ-গ্রিড",
      "en": "Shaddah grid"
     }
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "তাশদীদের সাথে যের কখনো তাশদীদের ঠিক নিচে ছোট করে লেখা হয়, আবার কখনো অক্ষরের নিচে। দুটোই যের — পড়া একই।",
     "en": "With shaddah, a kasra is sometimes written small just under the shaddah mark, and sometimes under the letter. Both are kasra — read the same."
    },
    {
     "type": "rule",
     "name": {
      "bn": "গুন্নাহ",
      "en": "Ghunnah (nasal hum)"
     },
     "ar": "غُنَّةٌ",
     "color": "green",
     "letters": "ن م",
     "desc": {
      "bn": "ن বা م-এ তাশদীদ থাকলে নাক দিয়ে একটা মিষ্টি গুনগুন আওয়াজ হয়, প্রায় দুই হরকত সময় ধরে।",
      "en": "When ن or م has a shaddah, a sweet humming sound comes through the nose, held for about two counts."
     },
     "how": {
      "bn": "অক্ষরে পৌঁছে আওয়াজটা নাকে ধরে রাখুন — 'ইন্‌ন্‌না', 'ছুম্‌ম্‌মা'। নাক চেপে ধরলে আওয়াজ বন্ধ হয়ে গেলে বুঝবেন ঠিক হচ্ছে!",
      "en": "Reach the letter and hold the sound in your nose — 'in-n-na', 'thum-m-ma'. If pinching your nose stops the sound, you're doing it right!"
     },
     "examples": [
      {
       "ar": "إِنَّ",
       "tr": {
        "bn": "ইন্‌না",
        "en": "inna"
       },
       "hl": "نَّ"
      },
      {
       "ar": "ثُمَّ",
       "tr": {
        "bn": "ছুম্‌মা",
        "en": "thumma"
       },
       "hl": "مَّ"
      },
      {
       "ar": "جَنَّةٌ",
       "tr": {
        "bn": "জান্‌নাতুন",
        "en": "jannatun"
       },
       "hl": "نَّ"
      },
      {
       "ar": "أُمٌّ",
       "tr": {
        "bn": "উম্‌মুন",
        "en": "ummun"
       },
       "hl": "مٌّ"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "رَبِّ",
       "tr": {
        "bn": "রাব্বি",
        "en": "rabbi"
       },
       "mean": {
        "bn": "হে আমার রব",
        "en": "my Lord"
       }
      },
      {
       "ar": "مُحَمَّدٌ",
       "tr": {
        "bn": "মুহাম্মাদুন",
        "en": "muḥammadun"
       },
       "mean": {
        "bn": "মুহাম্মাদ ﷺ",
        "en": "Muhammad ﷺ"
       }
      },
      {
       "ar": "عَلَّمَ",
       "tr": {
        "bn": "'আল্লামা",
        "en": "'allama"
       },
       "mean": {
        "bn": "তিনি শিখিয়েছেন",
        "en": "He taught"
       }
      },
      {
       "ar": "أُمَّةٌ",
       "tr": {
        "bn": "উম্মাতুন",
        "en": "ummatun"
       },
       "mean": {
        "bn": "জাতি, উম্মাহ",
        "en": "a nation, ummah"
       }
      },
      {
       "ar": "قَدَّرَ",
       "tr": {
        "bn": "ক্বাদ্দারা",
        "en": "qaddara"
       },
       "mean": {
        "bn": "তিনি নির্ধারণ করলেন",
        "en": "He measured out"
       }
      },
      {
       "ar": "كَذَّبَ",
       "tr": {
        "bn": "কায্‌যাবা",
        "en": "kadhdhaba"
       },
       "mean": {
        "bn": "সে অস্বীকার করল",
        "en": "he denied"
       }
      },
      {
       "ar": "يُعَلِّمُ",
       "tr": {
        "bn": "ইউ'আল্লিমু",
        "en": "yu'allimu"
       },
       "mean": {
        "bn": "সে শেখায়",
        "en": "he teaches"
       }
      }
     ],
     "title": {
      "bn": "তাশদীদওয়ালা শব্দ",
      "en": "Words with shaddah"
     }
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "আমাদের প্রিয় নবীর নাম {{مُحَمَّدٌ}}-এ মীমের ওপর তাশদীদ আছে — তাই 'মুহাম্মাদ', 'মুহামাদ' নয়। এবার থেকে সঠিকভাবে উচ্চারণ করবেন!",
     "en": "Our beloved Prophet's name {{مُحَمَّدٌ}} has a shaddah on the meem — so it's 'Muḥammad', not 'Muḥamad'. Now you'll always say it right!"
    },
    {
     "type": "practice",
     "bn": "তাশদীদে চাপ দিন, ن ও م-এ গুন্নাহ করুন।",
     "en": "Lean on the shaddah; hum on ن and م.",
     "lines": [
      "أَبَّ أَتَّ أَثَّ أَجَّ",
      "إِبِّ إِتِّ أُبُّ أُتُّ",
      "رَبِّ إِنَّ ثُمَّ",
      "كُلُّ حَقٌّ أُمٌّ",
      "عَلَّمَ قَدَّرَ كَذَّبَ",
      "مُحَمَّدٌ جَنَّةٌ أُمَّةٌ",
      "يُكَذِّبُ يُعَلِّمُ"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "তাশদীদ মানে কী?",
        "en": "What does shaddah mean?"
       },
       "options": [
        {
         "bn": "স্বর লম্বা করা",
         "en": "Stretch the vowel"
        },
        {
         "bn": "অক্ষর না পড়া",
         "en": "Skip the letter"
        },
        {
         "bn": "অক্ষর দুইবার পড়া",
         "en": "Read the letter twice"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "رَبِّ",
       "options": [
        {
         "bn": "রাব্বি",
         "en": "rabbi"
        },
        {
         "bn": "রাব্",
         "en": "rab"
        },
        {
         "bn": "রাবি",
         "en": "rabi"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "إِنَّ শব্দকে ভাঙলে কী হয়?",
        "en": "How does إِنَّ split?"
       },
       "options": [
        "إِنَّ + نَ",
        "إِنْ + نَ",
        "إِ + نَ"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "عَلَّمَ শব্দের অর্থ কী?",
        "en": "What does عَلَّمَ mean?"
       },
       "ar": "عَلَّمَ",
       "options": [
        {
         "bn": "সে লিখল",
         "en": "he wrote"
        },
        {
         "bn": "সে জানল",
         "en": "he knew"
        },
        {
         "bn": "সে শেখাল",
         "en": "he taught"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "কোন দুই অক্ষরে তাশদীদ থাকলে গুন্নাহ হয়?",
        "en": "Which two letters get ghunnah with a shaddah?"
       },
       "options": [
        "ن م",
        "ب ت",
        "ل ر"
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "ثُمَّ",
       "options": [
        {
         "bn": "ছুমা",
         "en": "thuma"
        },
        {
         "bn": "ছুম্‌মা (গুন্নাহসহ)",
         "en": "thumma (with a hum)"
        },
        {
         "bn": "সুম্মা",
         "en": "summa"
        }
       ],
       "answer": 1
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-madd",
   "icon": "ـَا",
   "title": {
    "bn": "মাদ্দ: লম্বা স্বর",
    "en": "Madd: Long Vowels"
   },
   "subtitle": {
    "bn": "আলিফ, ওয়াও, ইয়া দিয়ে স্বর টেনে পড়া — আর খাড়া যবর, খাড়া যের, উল্টা পেশ",
    "en": "Stretching vowels with ا و ي — plus standing fatha, standing kasra and inverted damma"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "তিনটি মাদ্দের অক্ষর (ا و ي) চেনা",
     "en": "Know the three madd letters (ا و ي)"
    },
    {
     "bn": "খাড়া যবর, খাড়া যের ও উল্টা পেশ পড়া",
     "en": "Read standing fatha, standing kasra and inverted damma"
    },
    {
     "bn": "মাদ্দের চিহ্ন (ٓ) দেখলে আরও লম্বা করা",
     "en": "Stretch longer when you see the madd sign (ٓ)"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "এতক্ষণ সব স্বর ছিল ছোট — এক তুড়ির সমান। এখন শিখব **লম্বা স্বর** (মাদ্দ): দুই তুড়ির সমান টেনে পড়া। এর জন্য তিনটি বিশেষ অক্ষর আছে: **ا و ي**।",
     "en": "So far every vowel was short — one finger-snap. Now we learn **long vowels** (madd): held for two snaps. Three special letters do this job: **ا و ي**."
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "নিয়ম",
       "en": "Rule"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      },
      {
       "bn": "আওয়াজ",
       "en": "Sound"
      }
     ],
     "rows": [
      [
       {
        "bn": "যবর + আলিফ",
        "en": "Fatha + Alif"
       },
       "بَا",
       {
        "bn": "বা- (লম্বা আ)",
        "en": "bā (long a)"
       }
      ],
      [
       {
        "bn": "যের + ইয়া",
        "en": "Kasra + Yaa"
       },
       "بِي",
       {
        "bn": "বী- (লম্বা ঈ)",
        "en": "bī (long i)"
       }
      ],
      [
       {
        "bn": "পেশ + ওয়াও",
        "en": "Damma + Waaw"
       },
       "بُو",
       {
        "bn": "বূ- (লম্বা ঊ)",
        "en": "bū (long u)"
       }
      ]
     ],
     "title": {
      "bn": "তিনটি মাদ্দের অক্ষর",
      "en": "The three madd letters"
     }
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "প্রতিটি হরকতের একজন 'বন্ধু' আছে, যে তাকে লম্বা করে: **যবরের বন্ধু আলিফ** (যবর দেখতে ছোট্ট হেলানো আলিফ), **যেরের বন্ধু ইয়া** (দুজনই নিচে থাকে), **পেশের বন্ধু ওয়াও** (পেশ দেখতে ছোট্ট ওয়াও)!",
     "en": "Each vowel has a 'best friend' that stretches it: **fatha's friend is Alif** (fatha looks like a tiny slanted alif), **kasra's friend is Yaa** (both live downstairs), **damma's friend is Waaw** (damma looks like a tiny waaw)!"
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "بَ",
       "label": {
        "bn": "বা — ছোট",
        "en": "ba — short"
       },
       "desc": {
        "bn": "১ হরকত",
        "en": "1 count"
       }
      },
      {
       "ar": "بَا",
       "label": {
        "bn": "বা- — লম্বা",
        "en": "bā — long"
       },
       "desc": {
        "bn": "২ হরকত",
        "en": "2 counts"
       }
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "بِ  بِي",
       "label": {
        "bn": "বি / বী-",
        "en": "bi / bī"
       },
       "desc": {
        "bn": "ছোট বনাম লম্বা ই",
        "en": "short vs long i"
       }
      },
      {
       "ar": "بُ  بُو",
       "label": {
        "bn": "বু / বূ-",
        "en": "bu / bū"
       },
       "desc": {
        "bn": "ছোট বনাম লম্বা উ",
        "en": "short vs long u"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "সময় মাপার সহজ উপায়: আঙুল ভাঁজ করুন। ছোট স্বরে ১টি আঙুল, লম্বা স্বরে ২টি আঙুল — খুব দ্রুতও না, খুব ধীরেও না।",
     "en": "Easy timing trick: fold your fingers. Short vowel = 1 finger, long vowel = 2 fingers — not too fast, not too slow."
    },
    {
     "type": "build",
     "base": [
      "ب",
      "ت",
      "ث",
      "ج",
      "ح",
      "خ",
      "د",
      "ر",
      "س",
      "ص",
      "ع",
      "ق",
      "ك",
      "ل",
      "م",
      "ن"
     ],
     "marks": [
      "َا",
      "ِي",
      "ُو"
     ],
     "labels": [
      {
       "bn": "যবর + আলিফ",
       "en": "Fatha + Alif"
      },
      {
       "bn": "যের + ইয়া",
       "en": "Kasra + Yaa"
      },
      {
       "bn": "পেশ + ওয়াও",
       "en": "Damma + Waaw"
      }
     ],
     "title": {
      "bn": "মাদ্দ-গ্রিড",
      "en": "Madd grid"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "قَالَ",
       "tr": {
        "bn": "ক্বা-লা",
        "en": "qāla"
       },
       "mean": {
        "bn": "সে বলল",
        "en": "he said"
       },
       "hl": "قَا"
      },
      {
       "ar": "قِيلَ",
       "tr": {
        "bn": "ক্বী-লা",
        "en": "qīla"
       },
       "mean": {
        "bn": "বলা হলো",
        "en": "it was said"
       },
       "hl": "قِي"
      },
      {
       "ar": "يَقُولُ",
       "tr": {
        "bn": "ইয়াক্বূ-লু",
        "en": "yaqūlu"
       },
       "mean": {
        "bn": "সে বলে",
        "en": "he says"
       },
       "hl": "قُو"
      },
      {
       "ar": "كِتَابٌ",
       "tr": {
        "bn": "কিতা-বুন",
        "en": "kitābun"
       },
       "mean": {
        "bn": "বই",
        "en": "book"
       }
      },
      {
       "ar": "رَسُولٌ",
       "tr": {
        "bn": "রাসূ-লুন",
        "en": "rasūlun"
       },
       "mean": {
        "bn": "রাসূল",
        "en": "messenger"
       }
      },
      {
       "ar": "دِينٌ",
       "tr": {
        "bn": "দী-নুন",
        "en": "dīnun"
       },
       "mean": {
        "bn": "দীন",
        "en": "religion"
       }
      },
      {
       "ar": "نُورٌ",
       "tr": {
        "bn": "নূ-রুন",
        "en": "nūrun"
       },
       "mean": {
        "bn": "আলো",
        "en": "light"
       }
      },
      {
       "ar": "فِيهِ",
       "tr": {
        "bn": "ফী-হি",
        "en": "fīhi"
       },
       "mean": {
        "bn": "এর মধ্যে",
        "en": "in it"
       }
      }
     ],
     "title": {
      "bn": "লম্বা স্বরের শব্দ",
      "en": "Words with long vowels"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "جَمَلٌ",
       "label": {
        "bn": "জামালুন — উট",
        "en": "jamalun — camel"
       },
       "desc": {
        "bn": "সব ছোট স্বর",
        "en": "all short vowels"
       }
      },
      {
       "ar": "جَمَالٌ",
       "label": {
        "bn": "জামা-লুন — সৌন্দর্য",
        "en": "jamālun — beauty"
       },
       "desc": {
        "bn": "মাঝে লম্বা 'আ'",
        "en": "a long 'ā' in the middle"
       }
      }
     ],
     "title": {
      "bn": "লম্বা-ছোটতে অর্থ বদলায়",
      "en": "Length changes meaning"
     }
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "ছোট স্বরকে টেনে লম্বা করবেন না, আর লম্বা স্বরকে কেটে ছোট করবেন না — দুটোতেই শব্দ বদলে যেতে পারে।",
     "en": "Don't stretch a short vowel, and don't cut a long one short — either can change the word."
    },
    {
     "type": "text",
     "bn": "কুরআনে কখনো আলিফ পুরোটা না লিখে অক্ষরের ওপর একটা ছোট্ট খাড়া দাগ দেওয়া হয়। একে বলে **খাড়া যবর** ( ٰ )। এটা ঠিক যবর + আলিফের মতো লম্বা 'আ' পড়া হয়।",
     "en": "Sometimes the Quran doesn't write a full alif — just a small upright stroke above the letter. This is the **standing fatha** ( ٰ ), read as a long 'ā' exactly like fatha + alif.",
     "title": {
      "bn": "খাড়া যবর",
      "en": "Standing fatha"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "هٰذَا",
       "tr": {
        "bn": "হা-যা",
        "en": "hādhā"
       },
       "mean": {
        "bn": "এটি",
        "en": "this"
       },
       "hl": "هٰ"
      },
      {
       "ar": "ذٰلِكَ",
       "tr": {
        "bn": "যা-লিকা",
        "en": "dhālika"
       },
       "mean": {
        "bn": "ওটি",
        "en": "that"
       },
       "hl": "ذٰ"
      },
      {
       "ar": "لٰكِنْ",
       "tr": {
        "bn": "লা-কিন্",
        "en": "lākin"
       },
       "mean": {
        "bn": "কিন্তু",
        "en": "but"
       },
       "hl": "لٰ"
      },
      {
       "ar": "إِلٰهٌ",
       "tr": {
        "bn": "ইলা-হুন",
        "en": "ilāhun"
       },
       "mean": {
        "bn": "উপাস্য",
        "en": "a god"
       },
       "hl": "لٰ"
      }
     ]
    },
    {
     "type": "text",
     "bn": "একইভাবে, বাংলাদেশি কুরআনে আরও দুটি ছোট চিহ্ন আছে: **খাড়া যের** ( ٖ ) — লম্বা 'ঈ', আর **উল্টা পেশ** ( ٗ ) — লম্বা 'ঊ'। এগুলো সাধারণত 'হু/হি' (তার/তাকে) অর্থের ه-এর সাথে বসে।",
     "en": "Similarly, Bangladeshi mushafs have two more small marks: the **standing kasra** ( ٖ ) — a long 'ī', and the **inverted damma** ( ٗ ) — a long 'ū'. They usually sit on the ه that means 'him/his'.",
     "title": {
      "bn": "খাড়া যের ও উল্টা পেশ",
      "en": "Standing kasra & inverted damma"
     }
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "চিহ্ন",
       "en": "Mark"
      },
      {
       "bn": "নাম",
       "en": "Name"
      },
      {
       "bn": "আওয়াজ",
       "en": "Sound"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      }
     ],
     "rows": [
      [
       "◌ٰ",
       {
        "bn": "খাড়া যবর",
        "en": "Standing fatha"
       },
       {
        "bn": "লম্বা আ",
        "en": "long ā"
       },
       "هٰذَا"
      ],
      [
       "◌ٖ",
       {
        "bn": "খাড়া যের",
        "en": "Standing kasra"
       },
       {
        "bn": "লম্বা ঈ",
        "en": "long ī"
       },
       "بِهٖ"
      ],
      [
       "◌ٗ",
       {
        "bn": "উল্টা পেশ",
        "en": "Inverted damma"
       },
       {
        "bn": "লম্বা ঊ",
        "en": "long ū"
       },
       "لَهٗ"
      ]
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "لَهٗ",
       "tr": {
        "bn": "লাহূ",
        "en": "lahū"
       },
       "mean": {
        "bn": "তার জন্য",
        "en": "for him"
       },
       "hl": "هٗ"
      },
      {
       "ar": "إِنَّهٗ",
       "tr": {
        "bn": "ইন্নাহূ",
        "en": "innahū"
       },
       "mean": {
        "bn": "নিশ্চয়ই সে",
        "en": "indeed he"
       },
       "hl": "هٗ"
      },
      {
       "ar": "رَبَّهٗ",
       "tr": {
        "bn": "রাব্বাহূ",
        "en": "rabbahū"
       },
       "mean": {
        "bn": "তার রবকে",
        "en": "his Lord"
       },
       "hl": "هٗ"
      },
      {
       "ar": "بِهٖ",
       "tr": {
        "bn": "বিহী",
        "en": "bihī"
       },
       "mean": {
        "bn": "তার দ্বারা",
        "en": "with it"
       },
       "hl": "هٖ"
      },
      {
       "ar": "عَبْدِهٖ",
       "tr": {
        "bn": "'আবদিহী",
        "en": "'abdihī"
       },
       "mean": {
        "bn": "তাঁর বান্দার",
        "en": "His servant"
       },
       "hl": "هٖ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "আরব দেশে ছাপা কুরআনে এই খাড়া যের ও উল্টা পেশের বদলে ছোট্ট ইয়া (ۦ) আর ছোট্ট ওয়াও (ۥ) লেখা থাকে। চেহারা ভিন্ন, পড়া একই!",
     "en": "Mushafs printed in Arab countries show a tiny yaa (ۦ) and a tiny waaw (ۥ) instead of these marks. Different look, same reading!"
    },
    {
     "type": "text",
     "bn": "শেষে একটা বিশেষ ঢেউ-চিহ্ন: **মাদ্দের চিহ্ন** ( ٓ )। মাদ্দের অক্ষরের ওপর এটা থাকলে আরও বেশি টানুন — সাধারণত ৪ থেকে ৫ হরকত (কখনো ৬)। বিস্তারিত নিয়ম তাজবীদ ইউনিটে শিখব।",
     "en": "Finally a special wave: the **madd sign** ( ٓ ). When it sits on a madd letter, stretch even longer — usually 4 to 5 counts (sometimes 6). Full rules come in the tajweed unit.",
     "title": {
      "bn": "মাদ্দের চিহ্ন ( ٓ )",
      "en": "The madd sign ( ٓ )"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "جَآءَ",
       "tr": {
        "bn": "জা---আ",
        "en": "jāʼa"
       },
       "mean": {
        "bn": "সে এল",
        "en": "he came"
       },
       "note": {
        "bn": "৪–৫ হরকত টানুন",
        "en": "stretch 4–5 counts"
       },
       "hl": "جَآ"
      },
      {
       "ar": "شَآءَ",
       "tr": {
        "bn": "শা---আ",
        "en": "shāʼa"
       },
       "mean": {
        "bn": "তিনি চাইলেন",
        "en": "He willed"
       },
       "note": {
        "bn": "৪–৫ হরকত টানুন",
        "en": "stretch 4–5 counts"
       },
       "hl": "شَآ"
      },
      {
       "ar": "الٓمّٓ",
       "tr": {
        "bn": "আলিফ-লা-ম্-মী-ম",
        "en": "alif-lām-mīm"
       },
       "note": {
        "bn": "কিছু সূরার শুরুতে অক্ষরগুলোর নাম পড়া হয়",
        "en": "at the start of some surahs, the letter names are read"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "সূরা বাকারার শুরুতে {{الٓمّٓ}} — এগুলোকে বলে 'হুরূফে মুকাত্তা'আত' (বিচ্ছিন্ন অক্ষর)। এখানে প্রতিটি অক্ষরের **নাম** পড়া হয়: আলিফ, লা-ম, মী-ম। এর অর্থ আল্লাহই ভালো জানেন।",
     "en": "Surah Al-Baqarah begins with {{الٓمّٓ}} — the 'disjointed letters'. Here you read each letter's **name**: Alif, Lāam, Mīim. Allah knows best their meaning."
    },
    {
     "type": "practice",
     "bn": "ছোট ও লম্বার পার্থক্য স্পষ্ট রাখুন। আঙুল দিয়ে গুনুন!",
     "en": "Keep short and long clearly different. Count on your fingers!",
     "lines": [
      "بَا بِي بُو",
      "تَا تِي تُو",
      "قَا قِي قُو",
      "بَ بَا بِ بِي بُ بُو",
      "قَالَ قِيلَ يَقُولُ",
      "كِتَابٌ رَسُولٌ دِينٌ",
      "نُورٌ نُوحٌ فِيهِ",
      "هٰذَا ذٰلِكَ إِلٰهٌ",
      "لَهٗ إِنَّهٗ بِهٖ",
      "جَآءَ شَآءَ"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "নিচের কোনটি মাদ্দের অক্ষর নয়?",
        "en": "Which is NOT a madd letter?"
       },
       "options": [
        "و",
        "ب",
        "ي",
        "ا"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "بُو",
       "options": [
        {
         "bn": "বূ- (লম্বা)",
         "en": "bū (long)"
        },
        {
         "bn": "বাও",
         "en": "baw"
        },
        {
         "bn": "বু",
         "en": "bu"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "যেরের 'বন্ধু' কোন অক্ষর?",
        "en": "Which letter is kasra's 'best friend'?"
       },
       "options": [
        "و",
        "ي",
        "ا"
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "খাড়া যবর ( ٰ ) কীভাবে পড়বেন?",
        "en": "How do you read a standing fatha ( ٰ )?"
       },
       "ar": "هٰذَا",
       "options": [
        {
         "bn": "ছোট আ",
         "en": "short a"
        },
        {
         "bn": "পড়া হয় না",
         "en": "not read"
        },
        {
         "bn": "লম্বা আ",
         "en": "long ā"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "لَهٗ",
       "options": [
        {
         "bn": "লাহূ (লম্বা)",
         "en": "lahū (long)"
        },
        {
         "bn": "লাহ্",
         "en": "lah"
        },
        {
         "bn": "লাহু (ছোট)",
         "en": "lahu (short)"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "মাদ্দের চিহ্ন ( ٓ ) দেখলে কী করবেন?",
        "en": "What do you do when you see the madd sign ( ٓ )?"
       },
       "options": [
        {
         "bn": "থেমে যান",
         "en": "Stop reading"
        },
        {
         "bn": "আরও লম্বা টানুন (৪–৫ হরকত)",
         "en": "Stretch longer (4–5 counts)"
        },
        {
         "bn": "অক্ষরটি বাদ দিন",
         "en": "Skip the letter"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "جَمَالٌ শব্দের অর্থ কী?",
        "en": "What does جَمَالٌ mean?"
       },
       "ar": "جَمَالٌ",
       "options": [
        {
         "bn": "পাহাড়",
         "en": "mountain"
        },
        {
         "bn": "উট",
         "en": "camel"
        },
        {
         "bn": "সৌন্দর্য",
         "en": "beauty"
        }
       ],
       "answer": 2
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-leen",
   "icon": "ـَيْ",
   "title": {
    "bn": "লীন ও সব মিলিয়ে পড়া",
    "en": "Leen Letters & Putting It Together"
   },
   "subtitle": {
    "bn": "নরম 'আই' ও 'আও' — তারপর লম্বা শব্দ সহজে পড়া",
    "en": "Soft 'ay' and 'aw' — then reading long words with ease"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "লীনের অক্ষর (ـَوْ ـَيْ) পড়া",
     "en": "Read the leen letters (ـَوْ ـَيْ)"
    },
    {
     "bn": "মাদ্দ ও লীনের পার্থক্য বোঝা",
     "en": "Tell madd and leen apart"
    },
    {
     "bn": "লম্বা শব্দকে টুকরা করে পড়া",
     "en": "Read long words by splitting them into chunks"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "ওয়াও আর ইয়া খুব কাজের অক্ষর! পেশ/যেরের পরে এরা স্বর লম্বা করে (মাদ্দ)। কিন্তু **যবরের পরে সুকুন নিয়ে** এলে এরা একটা নরম, পিছলে যাওয়া আওয়াজ তৈরি করে — একে বলে **লীন** (নরম)।",
     "en": "Waaw and Yaa are busy letters! After damma/kasra they stretch the vowel (madd). But **after a fatha, carrying a sukun**, they make a soft, gliding sound — called **leen** (soft)."
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "রূপ",
       "en": "Pattern"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      },
      {
       "bn": "আওয়াজ",
       "en": "Sound"
      }
     ],
     "rows": [
      [
       {
        "bn": "যবর + ওয়াও সাকিন",
        "en": "Fatha + Waaw with sukun"
       },
       "بَوْ",
       {
        "bn": "বাও (বৌ-এর মতো)",
        "en": "baw (like 'cow')"
       }
      ],
      [
       {
        "bn": "যবর + ইয়া সাকিন",
        "en": "Fatha + Yaa with sukun"
       },
       "بَيْ",
       {
        "bn": "বাই (বৈ-এর মতো)",
        "en": "bay (like 'buy')"
       }
      ]
     ],
     "title": {
      "bn": "দুটি লীনের অক্ষর",
      "en": "The two leen letters"
     }
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "বাংলায় আগে থেকেই লীন আছে! 'ঐ' আর 'ঔ' — যেমন 'বৈ', 'বৌ'। بَيْ ≈ বৈ, بَوْ ≈ বৌ। শুধু মুখটা একটু বেশি খুলে 'আ' থেকে শুরু করুন।",
     "en": "You already know leen sounds! Think 'buy' and 'cow': بَيْ ≈ 'bay/buy', بَوْ ≈ 'baw/cow'. Just start from an open 'a'."
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "بُو",
       "label": {
        "bn": "বূ- — মাদ্দ",
        "en": "bū — madd"
       },
       "desc": {
        "bn": "পেশের পরে ওয়াও: লম্বা ঊ",
        "en": "waaw after damma: long ū"
       }
      },
      {
       "ar": "بَوْ",
       "label": {
        "bn": "বাও — লীন",
        "en": "baw — leen"
       },
       "desc": {
        "bn": "যবরের পরে ওয়াও সাকিন: নরম আও",
        "en": "waaw with sukun after fatha: soft aw"
       }
      }
     ],
     "title": {
      "bn": "মাদ্দ বনাম লীন (ওয়াও)",
      "en": "Madd vs leen (Waaw)"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "بِي",
       "label": {
        "bn": "বী- — মাদ্দ",
        "en": "bī — madd"
       },
       "desc": {
        "bn": "যেরের পরে ইয়া: লম্বা ঈ",
        "en": "yaa after kasra: long ī"
       }
      },
      {
       "ar": "بَيْ",
       "label": {
        "bn": "বাই — লীন",
        "en": "bay — leen"
       },
       "desc": {
        "bn": "যবরের পরে ইয়া সাকিন: নরম আই",
        "en": "yaa with sukun after fatha: soft ay"
       }
      }
     ],
     "title": {
      "bn": "মাদ্দ বনাম লীন (ইয়া)",
      "en": "Madd vs leen (Yaa)"
     }
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "লীন সাধারণত টানা হয় না — একটা মসৃণ, দ্রুত পিছলানো আওয়াজ। আয়াতের শেষে লীনের পরের অক্ষরে থামলে একটু টানা যায় — সেটা তাজবীদ ইউনিটে শিখব।",
     "en": "Leen is normally not stretched — just a smooth, quick glide. When stopping on the letter after it at the end of an ayah you may lengthen a little — that's for the tajweed unit."
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "خَوْفٌ",
       "tr": {
        "bn": "খাওফুন",
        "en": "khawfun"
       },
       "mean": {
        "bn": "ভয়",
        "en": "fear"
       },
       "hl": "وْ"
      },
      {
       "ar": "يَوْمٌ",
       "tr": {
        "bn": "ইয়াওমুন",
        "en": "yawmun"
       },
       "mean": {
        "bn": "দিন",
        "en": "day"
       },
       "hl": "وْ"
      },
      {
       "ar": "قَوْمٌ",
       "tr": {
        "bn": "ক্বাওমুন",
        "en": "qawmun"
       },
       "mean": {
        "bn": "জাতি, সম্প্রদায়",
        "en": "a people"
       },
       "hl": "وْ"
      },
      {
       "ar": "بَيْتٌ",
       "tr": {
        "bn": "বাইতুন",
        "en": "baytun"
       },
       "mean": {
        "bn": "ঘর",
        "en": "house"
       },
       "hl": "يْ"
      },
      {
       "ar": "خَيْرٌ",
       "tr": {
        "bn": "খাইরুন",
        "en": "khayrun"
       },
       "mean": {
        "bn": "কল্যাণ",
        "en": "good"
       },
       "hl": "يْ"
      },
      {
       "ar": "شَيْءٌ",
       "tr": {
        "bn": "শাইউন",
        "en": "shayʼun"
       },
       "mean": {
        "bn": "কোনো কিছু",
        "en": "a thing"
       },
       "hl": "يْ"
      },
      {
       "ar": "عَلَيْهِ",
       "tr": {
        "bn": "'আলাইহি",
        "en": "'alayhi"
       },
       "mean": {
        "bn": "তার ওপর",
        "en": "on him"
       },
       "hl": "يْ"
      },
      {
       "ar": "إِلَيْكَ",
       "tr": {
        "bn": "ইলাইকা",
        "en": "ilayka"
       },
       "mean": {
        "bn": "তোমার দিকে",
        "en": "to you"
       },
       "hl": "يْ"
      }
     ],
     "title": {
      "bn": "লীনওয়ালা শব্দ",
      "en": "Words with leen"
     }
    },
    {
     "type": "text",
     "bn": "অভিনন্দন — আপনি এখন সব মূল চিহ্ন জানেন: হরকত, সুকুন, তানবীন, তাশদীদ, মাদ্দ ও লীন! এবার যেকোনো লম্বা শব্দ পড়ার 'জাদুর কৌশল' শিখি।",
     "en": "Congratulations — you now know every core mark: harakat, sukun, tanween, shaddah, madd and leen! Now let's learn the 'magic method' for any long word.",
     "title": {
      "bn": "সব মিলিয়ে",
      "en": "Putting it all together"
     }
    },
    {
     "type": "steps",
     "items": [
      {
       "title": {
        "bn": "অক্ষর ও চিহ্ন দেখুন",
        "en": "Scan letters and marks"
       },
       "ar": "يَعْلَمُونَ",
       "desc": {
        "bn": "ডান থেকে বামে প্রতিটি অক্ষর ও তার চিহ্ন চিনে নিন।",
        "en": "Right to left, identify every letter and its mark."
       }
      },
      {
       "title": {
        "bn": "টুকরা করুন",
        "en": "Cut into chunks"
       },
       "ar": "يَعْ · لَ · مُو · نَ",
       "desc": {
        "bn": "সুকুন আর লম্বা স্বরের পরে টুকরা কাটুন।",
        "en": "Cut after each sukun and each long vowel."
       }
      },
      {
       "title": {
        "bn": "প্রতিটি টুকরা পড়ুন",
        "en": "Read each chunk"
       },
       "tr": {
        "bn": "ইয়া' · লা · মূ · না",
        "en": "ya' · la · mū · na"
       },
       "desc": {
        "bn": "ধীরে ধীরে: ইয়া'-লা-মূ-না।",
        "en": "Slowly: ya'-la-mū-na."
       }
      },
      {
       "title": {
        "bn": "মসৃণভাবে জুড়ে দিন",
        "en": "Glue it smoothly"
       },
       "ar": "يَعْلَمُونَ",
       "tr": {
        "bn": "ইয়া'লামূনা",
        "en": "ya'lamūna"
       },
       "mean": {
        "bn": "তারা জানে",
        "en": "they know"
       },
       "desc": {
        "bn": "এবার এক নিঃশ্বাসে পুরো শব্দ।",
        "en": "Now the whole word in one breath."
       }
      }
     ],
     "title": {
      "bn": "যেকোনো লম্বা শব্দ পড়ার ৪ ধাপ",
      "en": "4 steps to read any long word"
     }
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "শব্দ",
       "en": "Word"
      },
      {
       "bn": "টুকরা",
       "en": "Chunks"
      },
      {
       "bn": "উচ্চারণ",
       "en": "Reading"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "مُسْلِمُونَ",
       "مُسْ · لِ · مُو · نَ",
       {
        "bn": "মুসলিমূনা",
        "en": "muslimūna"
       },
       {
        "bn": "মুসলিমগণ",
        "en": "Muslims"
       }
      ],
      [
       "يُؤْمِنُونَ",
       "يُؤْ · مِ · نُو · نَ",
       {
        "bn": "ইউ'মিনূনা",
        "en": "yuʼminūna"
       },
       {
        "bn": "তারা ঈমান আনে",
        "en": "they believe"
       }
      ],
      [
       "يَقُولُونَ",
       "يَ · قُو · لُو · نَ",
       {
        "bn": "ইয়াক্বূলূনা",
        "en": "yaqūlūna"
       },
       {
        "bn": "তারা বলে",
        "en": "they say"
       }
      ],
      [
       "عَلَيْهِمْ",
       "عَ · لَيْ · هِمْ",
       {
        "bn": "'আলাইহিম",
        "en": "'alayhim"
       },
       {
        "bn": "তাদের ওপর",
        "en": "upon them"
       }
      ],
      [
       "مُسْتَقِيمٌ",
       "مُسْ · تَ · قِي · مٌ",
       {
        "bn": "মুস্তাক্বীমুন",
        "en": "mustaqīmun"
       },
       {
        "bn": "সরল, সোজা",
        "en": "straight"
       }
      ]
     ],
     "title": {
      "bn": "টুকরা করে পড়ার অনুশীলন",
      "en": "Chunking practice"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "يُقِيمُونَ",
       "tr": {
        "bn": "ইউক্বীমূনা",
        "en": "yuqīmūna"
       },
       "mean": {
        "bn": "তারা কায়েম করে",
        "en": "they establish"
       }
      },
      {
       "ar": "يُنْفِقُونَ",
       "tr": {
        "bn": "ইউনফিক্বূনা",
        "en": "yunfiqūna"
       },
       "mean": {
        "bn": "তারা খরচ করে",
        "en": "they spend"
       }
      },
      {
       "ar": "رَزَقْنٰهُمْ",
       "tr": {
        "bn": "রাযাক্বনা-হুম",
        "en": "razaqnāhum"
       },
       "mean": {
        "bn": "আমি তাদের রিযিক দিয়েছি",
        "en": "We provided them"
       }
      },
      {
       "ar": "خٰلِدُونَ",
       "tr": {
        "bn": "খা-লিদূনা",
        "en": "khālidūna"
       },
       "mean": {
        "bn": "চিরস্থায়ী",
        "en": "abiding forever"
       }
      }
     ],
     "title": {
      "bn": "কুরআনের শব্দ — নিজে পড়ুন!",
      "en": "Quranic words — read them yourself!"
     }
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "উপরের শব্দগুলো সূরা বাকারার একদম শুরুর আয়াতগুলো থেকে নেওয়া। আপনি এখন কুরআনের শব্দ নিজে নিজে পড়ছেন — মাশা আল্লাহ!",
     "en": "Some of these words come from the opening verses of Surah Al-Baqarah. You're now reading Quranic words on your own — masha Allah!"
    },
    {
     "type": "practice",
     "bn": "প্রথমে টুকরা করে, তারপর পুরো শব্দ পড়ুন।",
     "en": "Read in chunks first, then the whole word.",
     "lines": [
      "قَوْمٌ يَوْمٌ خَوْفٌ",
      "بَيْتٌ خَيْرٌ شَيْءٌ",
      "عَلَيْهِ إِلَيْكَ لَدَيْهِ",
      "بُو بَوْ بِي بَيْ",
      "يَعْلَمُونَ يَعْمَلُونَ يَقُولُونَ",
      "مُسْلِمُونَ مُؤْمِنُونَ صَادِقُونَ",
      "عَلَيْهِمْ إِلَيْهِمْ",
      "تَعْلَمُونَ تَشْكُرُونَ"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "بَوْ",
       "options": [
        {
         "bn": "বাও",
         "en": "baw"
        },
        {
         "bn": "বূ-",
         "en": "bū"
        },
        {
         "bn": "বাওয়া",
         "en": "bawa"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "লীন তৈরি হয় কখন?",
        "en": "When does leen happen?"
       },
       "options": [
        {
         "bn": "যেরের পরে ي",
         "en": "ي after a kasra"
        },
        {
         "bn": "যবরের পরে সাকিন و বা ي",
         "en": "و or ي with sukun after a fatha"
        },
        {
         "bn": "পেশের পরে و",
         "en": "و after a damma"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "بِي আর بَيْ — কোনটি মাদ্দ?",
        "en": "بِي or بَيْ — which one is madd?"
       },
       "options": [
        "بِي",
        "بَيْ"
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "خَيْرٌ",
       "options": [
        {
         "bn": "খীরুন",
         "en": "khīrun"
        },
        {
         "bn": "খারুন",
         "en": "khārun"
        },
        {
         "bn": "খাইরুন",
         "en": "khayrun"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "يَعْلَمُونَ শব্দকে সঠিকভাবে টুকরা করুন:",
        "en": "Split يَعْلَمُونَ correctly:"
       },
       "options": [
        "يَعْ · لَ · مُو · نَ",
        "يَ · عْلَ · مُونَ",
        "يَعْلَ · مُ · ونَ"
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "عَلَيْهِمْ",
       "options": [
        {
         "bn": "'আলাহুম",
         "en": "'alāhum"
        },
        {
         "bn": "'আলাইহিম",
         "en": "'alayhim"
        },
        {
         "bn": "'আলীহিম",
         "en": "'alīhim"
        }
       ],
       "answer": 1
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-al",
   "icon": "ال",
   "title": {
    "bn": "'আল' — সূর্য ও চাঁদের অক্ষর",
    "en": "\"Al-\": Sun & Moon Letters"
   },
   "subtitle": {
    "bn": "'আল' কখন পড়া হয়, কখন হারিয়ে যায় — আর সংযোগের হামযা",
    "en": "When the 'l' of al- is heard, when it vanishes — and the connecting hamza"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "'আল' (ال) মানে ও তার প্রভাব",
     "en": "What 'al' (ال) means and what it does"
    },
    {
     "bn": "চাঁদের অক্ষর (লাম পড়া হয়) ও সূর্যের অক্ষর (লাম পড়া হয় না)",
     "en": "Moon letters (lam is read) and sun letters (lam is silent)"
    },
    {
     "bn": "হামযাতুল ওয়াসল: কখন পড়বেন, কখন বাদ দেবেন",
     "en": "Hamzatul wasl: when to read it and when to skip it"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "আরবিতে 'আল' (ال) মানে ইংরেজির 'the' — নির্দিষ্ট কিছু বোঝায়। كِتَابٌ = একটি বই, আর الْكِتَابُ = বইটি। খেয়াল করুন: 'আল' যোগ হলে তানবীন চলে যায়!",
     "en": "In Arabic 'al' (ال) means 'the'. كِتَابٌ = a book, and الْكِتَابُ = the book. Notice: when 'al' arrives, the tanween leaves!"
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "كِتَابٌ",
       "label": {
        "bn": "কিতাবুন — একটি বই",
        "en": "kitābun — a book"
       },
       "desc": {
        "bn": "তানবীন আছে",
        "en": "has tanween"
       }
      },
      {
       "ar": "الْكِتَابُ",
       "label": {
        "bn": "আলকিতাবু — বইটি",
        "en": "al-kitābu — the book"
       },
       "desc": {
        "bn": "'আল' আছে, তানবীন নেই",
        "en": "has 'al', no tanween"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "'আল' আর তানবীন কখনো একসাথে থাকে না — যেন দুই প্রতিদ্বন্দ্বী, একজন এলে অন্যজন চলে যায়!",
     "en": "'Al' and tanween are never together — like two rivals: when one walks in, the other walks out!"
    },
    {
     "type": "text",
     "bn": "এখন মজার অংশ: 'আল'-এর লাম কখনো শোনা যায়, কখনো একদম হারিয়ে যায়! এটা নির্ভর করে পরের অক্ষরের ওপর। আরবরা অক্ষরগুলোকে দুই দলে ভাগ করেছে: **চাঁদের অক্ষর** আর **সূর্যের অক্ষর**।",
     "en": "Now the fun part: the lam of 'al' is sometimes heard and sometimes vanishes completely! It depends on the next letter. The letters are split into two teams: **moon letters** and **sun letters**.",
     "title": {
      "bn": "দুই দল",
      "en": "Two teams"
     }
    },
    {
     "type": "rule",
     "name": {
      "bn": "চাঁদের অক্ষর (কামারিয়্যাহ)",
      "en": "Moon letters (qamariyyah)"
     },
     "ar": "الْحُرُوفُ الْقَمَرِيَّةُ",
     "color": "blue",
     "letters": "ا ب ج ح خ ع غ ف ق ك م و ه ي",
     "desc": {
      "bn": "এই ১৪টি অক্ষরের আগে 'আল'-এর লাম স্পষ্ট পড়া হয় — লামে সুকুন থাকে।",
      "en": "Before these 14 letters, the lam of 'al' is clearly pronounced — it carries a sukun."
     },
     "how": {
      "bn": "'আল' বলুন, তারপর পরের অক্ষর: আল্‌-ক্বামারু।",
      "en": "Say 'al', then the next letter: al-qamaru."
     },
     "examples": [
      {
       "ar": "الْقَمَرُ",
       "tr": {
        "bn": "আলক্বামারু",
        "en": "al-qamaru"
       },
       "hl": "لْ"
      },
      {
       "ar": "الْكِتَابُ",
       "tr": {
        "bn": "আলকিতাবু",
        "en": "al-kitābu"
       },
       "hl": "لْ"
      },
      {
       "ar": "الْبَيْتُ",
       "tr": {
        "bn": "আলবাইতু",
        "en": "al-baytu"
       },
       "hl": "لْ"
      },
      {
       "ar": "الْحَمْدُ",
       "tr": {
        "bn": "আলহামদু",
        "en": "al-ḥamdu"
       },
       "hl": "لْ"
      },
      {
       "ar": "الْعِلْمُ",
       "tr": {
        "bn": "আল'ইলমু",
        "en": "al-'ilmu"
       },
       "hl": "لْ"
      },
      {
       "ar": "الْيَوْمُ",
       "tr": {
        "bn": "আলইয়াওমু",
        "en": "al-yawmu"
       },
       "hl": "لْ"
      }
     ]
    },
    {
     "type": "rule",
     "name": {
      "bn": "সূর্যের অক্ষর (শামসিয়্যাহ)",
      "en": "Sun letters (shamsiyyah)"
     },
     "ar": "الْحُرُوفُ الشَّمْسِيَّةُ",
     "color": "orange",
     "letters": "ت ث د ذ ر ز س ش ص ض ط ظ ل ن",
     "desc": {
      "bn": "এই ১৪টি অক্ষরের আগে 'আল'-এর লাম পড়া হয় না; বরং পরের অক্ষরে তাশদীদ বসে, অক্ষরটি দ্বিগুণ হয়।",
      "en": "Before these 14 letters, the lam of 'al' is silent; instead the next letter gets a shaddah and is doubled."
     },
     "how": {
      "bn": "লাম বাদ দিয়ে আলিফ থেকে সরাসরি পরের অক্ষরে চলে যান: আশ্‌-শামসু।",
      "en": "Skip the lam and go straight from the alif to the next letter: ash-shamsu."
     },
     "examples": [
      {
       "ar": "الشَّمْسُ",
       "tr": {
        "bn": "আশশামসু",
        "en": "ash-shamsu"
       },
       "hl": "ش"
      },
      {
       "ar": "النُّورُ",
       "tr": {
        "bn": "আননূরু",
        "en": "an-nūru"
       },
       "hl": "ن"
      },
      {
       "ar": "الرَّحْمٰنُ",
       "tr": {
        "bn": "আররাহমা-নু",
        "en": "ar-raḥmānu"
       },
       "hl": "ر"
      },
      {
       "ar": "الدِّينُ",
       "tr": {
        "bn": "আদদীনু",
        "en": "ad-dīnu"
       },
       "hl": "د"
      },
      {
       "ar": "السَّلَامُ",
       "tr": {
        "bn": "আসসালা-মু",
        "en": "as-salāmu"
       },
       "hl": "س"
      },
      {
       "ar": "الصَّبْرُ",
       "tr": {
        "bn": "আসসাবরু",
        "en": "aṣ-ṣabru"
       },
       "hl": "ص"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "সবচেয়ে সহজ চেনার উপায়: কুরআনে দেখুন **লামের ওপর সুকুন আছে কি না।** লামে সুকুন (الْـ) = চাঁদের অক্ষর, লাম পড়ুন। লামে কিছু নেই আর পরের অক্ষরে তাশদীদ (الشَّـ) = সূর্যের অক্ষর, লাম বাদ!",
     "en": "The easiest clue: look in the mushaf **for a sukun on the lam.** Sukun on lam (الْـ) = moon letter, read the lam. Nothing on lam and a shaddah on the next letter (الشَّـ) = sun letter, skip the lam!"
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "নামেই রহস্য: الْقَمَرُ (চাঁদ) শব্দে লাম শোনা যায়, তাই এরা 'চাঁদের অক্ষর'। الشَّمْسُ (সূর্য) শব্দে লাম হারিয়ে যায় — সূর্যের তেজে লাম যেন গলে যায়! চাঁদের অক্ষরগুলো একটি বাক্যে: {{اِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ}}",
     "en": "The names hold the secret: in الْقَمَرُ (the moon) the lam is heard — 'moon letters'. In الشَّمْسُ (the sun) the lam disappears — melted by the sun's heat! The moon letters fit in one phrase: {{اِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ}}"
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "সূর্যের অক্ষরগুলোর বেশিরভাগই জিভের আগা দিয়ে উচ্চারণ হয় — ঠিক যেখানে লামও উচ্চারণ হয়। তাই লাম তাদের সাথে মিশে যায়!",
     "en": "Most sun letters are made with the tip of the tongue — exactly where lam is made. That's why the lam merges into them!"
    },
    {
     "type": "text",
     "bn": "'আল'-এর আলিফটা আরও একটা রহস্য রাখে। এটা হলো **হামযাতুল ওয়াসল** (সংযোগের হামযা): শব্দ দিয়ে **শুরু** করলে পড়া হয়, কিন্তু আগে অন্য শব্দ থাকলে **বাদ** যায় — আগের শব্দ সরাসরি লামের সাথে জোড়া লাগে।",
     "en": "The alif of 'al' hides another secret. It is a **hamzatul wasl** (connecting hamza): pronounced when you **start** with the word, but **skipped** when another word comes before — the previous word links straight to the lam.",
     "title": {
      "bn": "হামযাতুল ওয়াসল",
      "en": "Hamzatul wasl"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "الْقَمَرُ",
       "label": {
        "bn": "আলক্বামারু",
        "en": "al-qamaru"
       },
       "desc": {
        "bn": "শুরুতে: আলিফ পড়া হয় ('আ')",
        "en": "at the start: the alif is read ('a')"
       }
      },
      {
       "ar": "وَالْقَمَرِ",
       "label": {
        "bn": "ওয়ালক্বামারি",
        "en": "wal-qamari"
       },
       "desc": {
        "bn": "মাঝে: আলিফ বাদ, ওয়া + ল",
        "en": "in the middle: alif skipped, wa + l"
       }
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "بِسْمِ اللّٰهِ",
       "tr": {
        "bn": "বিসমিল্লা-হি",
        "en": "bismi-llāhi"
       },
       "mean": {
        "bn": "আল্লাহর নামে",
        "en": "in the name of Allah"
       },
       "note": {
        "bn": "اللّٰه-এর আলিফ পড়া হয় না",
        "en": "the alif of اللّٰه is not read"
       }
      },
      {
       "ar": "وَالشَّمْسِ",
       "tr": {
        "bn": "ওয়াশশামসি",
        "en": "wash-shamsi"
       },
       "mean": {
        "bn": "সূর্যের শপথ",
        "en": "by the sun"
       },
       "note": {
        "bn": "আলিফ ও লাম দুটোই নীরব!",
        "en": "both alif and lam are silent!"
       }
      },
      {
       "ar": "رَبِّ الْعٰلَمِينَ",
       "tr": {
        "bn": "রাব্বিল 'আ-লামীন",
        "en": "rabbil-'ālamīn"
       },
       "mean": {
        "bn": "সকল জগতের রব",
        "en": "Lord of the worlds"
       }
      },
      {
       "ar": "مِنَ النَّاسِ",
       "tr": {
        "bn": "মিনান্না-সি",
        "en": "minan-nāsi"
       },
       "mean": {
        "bn": "মানুষের মধ্য থেকে",
        "en": "among the people"
       }
      },
      {
       "ar": "فِي الْأَرْضِ",
       "tr": {
        "bn": "ফিল আরদ্বি",
        "en": "fil-arḍi"
       },
       "mean": {
        "bn": "পৃথিবীতে",
        "en": "on the earth"
       },
       "note": {
        "bn": "فِي-এর লম্বা ঈ এখানে ছোট হয়ে যায়",
        "en": "the long ī of فِي becomes short here"
       }
      }
     ],
     "title": {
      "bn": "সংযোগ করে পড়া",
      "en": "Linking words"
     }
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "লম্বা স্বরের পরে হামযাতুল ওয়াসল ও সুকুনওয়ালা লাম এলে লম্বা স্বরটা ছোট হয়ে যায়: فِي الْأَرْضِ পড়ুন 'ফিল আরদ্বি', 'ফীল' নয়।",
     "en": "When a long vowel meets a hamzatul wasl followed by a sukun lam, the long vowel shortens: read فِي الْأَرْضِ as 'fil-arḍi', not 'fīl'."
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "আরব দেশের কুরআনে হামযাতুল ওয়াসলের আলিফের ওপর ছোট্ট একটা 'স'-এর মাথার মতো চিহ্ন থাকে: ٱ। বাংলাদেশি কুরআনে সাধারণত আলিফটা কোনো চিহ্ন ছাড়াই থাকে — চিহ্নহীন আলিফ দেখলেই বুঝবেন সেটা সংযোগের আলিফ।",
     "en": "Mushafs from Arab countries put a tiny ṣād-head on the wasl alif: ٱ. Bangladeshi mushafs usually leave the alif bare — a bare alif with no mark is your clue that it's a connecting alif."
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "শব্দ শুরু হলে",
       "en": "When starting with"
      },
      {
       "bn": "শুরুর হরকত",
       "en": "Start with"
      },
      {
       "bn": "উদাহরণ",
       "en": "Example"
      }
     ],
     "rows": [
      [
       {
        "bn": "আল (ال)",
        "en": "Al (ال)"
       },
       {
        "bn": "যবর: 'আ'",
        "en": "fatha: 'a'"
       },
       "اَلْحَمْدُ"
      ],
      [
       {
        "bn": "ক্রিয়া, তৃতীয় অক্ষরে পেশ",
        "en": "Verb, 3rd letter has damma"
       },
       {
        "bn": "পেশ: 'উ'",
        "en": "damma: 'u'"
       },
       "اُنْظُرْ"
      ],
      [
       {
        "bn": "ক্রিয়া, তৃতীয় অক্ষরে যবর/যের",
        "en": "Verb, 3rd letter has fatha/kasra"
       },
       {
        "bn": "যের: 'ই'",
        "en": "kasra: 'i'"
       },
       "اِقْرَأْ"
      ],
      [
       {
        "bn": "কয়েকটি বিশেষ শব্দ (যেমন اسم، ابن)",
        "en": "A few special nouns (e.g. اسم، ابن)"
       },
       {
        "bn": "যের: 'ই'",
        "en": "kasra: 'i'"
       },
       "اِبْنٌ"
      ]
     ],
     "title": {
      "bn": "হামযাতুল ওয়াসল দিয়ে শুরু করলে কী পড়বেন",
      "en": "What to say when you start on a hamzatul wasl"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "اِقْرَأْ",
       "tr": {
        "bn": "ইক্বরা'",
        "en": "iqraʼ"
       },
       "mean": {
        "bn": "পড়ুন",
        "en": "read!"
       }
      },
      {
       "ar": "اِهْدِنَا",
       "tr": {
        "bn": "ইহদিনা-",
        "en": "ihdinā"
       },
       "mean": {
        "bn": "আমাদের পথ দেখান",
        "en": "guide us"
       }
      },
      {
       "ar": "اُنْظُرْ",
       "tr": {
        "bn": "উনযুর",
        "en": "unẓur"
       },
       "mean": {
        "bn": "দেখুন",
        "en": "look!"
       }
      }
     ]
    },
    {
     "type": "text",
     "bn": "শেষে আল্লাহর নামের একটা সুন্দর নিয়ম: {{اللّٰه}}-এর লাম আগের হরফে যবর বা পেশ থাকলে **মোটা** (মুখ ভরে 'আল্লাহ'), আর যের থাকলে **চিকন** পড়া হয়।",
     "en": "Finally a beautiful rule for the name of Allah: the lam in {{اللّٰه}} is **heavy** (full-mouthed) after a fatha or damma, and **light** after a kasra.",
     "title": {
      "bn": "আল্লাহ শব্দের লাম",
      "en": "The lam in 'Allah'"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "قَالَ اللّٰهُ",
       "label": {
        "bn": "ক্বা-লাল্লা-হু — মোটা",
        "en": "qālal-lāhu — heavy"
       },
       "desc": {
        "bn": "আগে যবর",
        "en": "after fatha"
       }
      },
      {
       "ar": "عَبْدُ اللّٰهِ",
       "label": {
        "bn": "'আবদুল্লা-হি — মোটা",
        "en": "'abdul-lāhi — heavy"
       },
       "desc": {
        "bn": "আগে পেশ",
        "en": "after damma"
       }
      },
      {
       "ar": "بِسْمِ اللّٰهِ",
       "label": {
        "bn": "বিসমিল্লা-হি — চিকন",
        "en": "bismil-lāhi — light"
       },
       "desc": {
        "bn": "আগে যের",
        "en": "after kasra"
       }
      }
     ]
    },
    {
     "type": "practice",
     "bn": "লামের ওপর সুকুন দেখুন — তারপর সিদ্ধান্ত নিন!",
     "en": "Check the lam for a sukun — then decide!",
     "lines": [
      "الْقَمَرُ الْكِتَابُ الْبَيْتُ",
      "الْحَمْدُ الْعِلْمُ الْيَوْمُ",
      "الشَّمْسُ النُّورُ الدِّينُ",
      "الرَّحْمٰنُ السَّلَامُ الصَّبْرُ",
      "وَالشَّمْسِ وَالْقَمَرِ",
      "فِي الْأَرْضِ مِنَ النَّاسِ",
      "بِسْمِ اللّٰهِ قَالَ اللّٰهُ",
      "اِقْرَأْ اِهْدِنَا اُنْظُرْ"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "'আল' (ال) মানে কী?",
        "en": "What does 'al' (ال) mean?"
       },
       "options": [
        {
         "bn": "এবং",
         "en": "and"
        },
        {
         "bn": "না",
         "en": "no"
        },
        {
         "bn": "the (নির্দিষ্ট)",
         "en": "the"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "এই শব্দে লাম কি পড়া হয়?",
        "en": "Is the lam pronounced in this word?"
       },
       "ar": "الشَّمْسُ",
       "options": [
        {
         "bn": "হ্যাঁ — চাঁদের অক্ষর",
         "en": "Yes — moon letter"
        },
        {
         "bn": "না — সূর্যের অক্ষর",
         "en": "No — sun letter"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "কোনটি চাঁদের অক্ষর?",
        "en": "Which is a moon letter?"
       },
       "options": [
        "س",
        "ن",
        "ق",
        "ر"
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "النُّورُ",
       "options": [
        {
         "bn": "আলনূরু",
         "en": "al-nūru"
        },
        {
         "bn": "আননূরু",
         "en": "an-nūru"
        },
        {
         "bn": "নূরু",
         "en": "nūru"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "وَالْقَمَرِ-তে 'আল'-এর আলিফ কি পড়া হয়?",
        "en": "In وَالْقَمَرِ, is the alif of 'al' read?"
       },
       "options": [
        {
         "bn": "না, ওয়া সরাসরি লামের সাথে জোড়া লাগে",
         "en": "No, wa links straight to the lam"
        },
        {
         "bn": "হ্যাঁ, সবসময়",
         "en": "Yes, always"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "بِسْمِ اللّٰهِ-তে আল্লাহর লাম কেমন?",
        "en": "In بِسْمِ اللّٰهِ, how is the lam of Allah?"
       },
       "options": [
        {
         "bn": "চিকন",
         "en": "light"
        },
        {
         "bn": "মোটা",
         "en": "heavy"
        }
       ],
       "answer": 0,
       "explain": {
        "bn": "আগে যের (ـمِ), তাই চিকন।",
        "en": "A kasra comes before it (ـمِ), so it's light."
       }
      },
      {
       "q": {
        "bn": "'আল' যোগ হলে কী চলে যায়?",
        "en": "What disappears when 'al' is added?"
       },
       "options": [
        {
         "bn": "সুকুন",
         "en": "Sukun"
        },
        {
         "bn": "তাশদীদ",
         "en": "Shaddah"
        },
        {
         "bn": "তানবীন",
         "en": "Tanween"
        }
       ],
       "answer": 2
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-special",
   "icon": "ة",
   "title": {
    "bn": "বিশেষ বানান ও কুরআনের চিহ্ন",
    "en": "Special Spellings & Mushaf Signs"
   },
   "subtitle": {
    "bn": "গোল তা, আলিফ মাকসূরা, লেখা থাকে কিন্তু পড়া হয় না — আর থামার চিহ্ন",
    "en": "Round ta, alif maqsura, letters written but not read — and stop signs"
   },
   "minutes": 15,
   "goals": [
    {
     "bn": "গোল তা (ة) ও আলিফ মাকসূরা (ى) পড়া",
     "en": "Read round ta (ة) and alif maqsura (ى)"
    },
    {
     "bn": "যে অক্ষর লেখা থাকে কিন্তু পড়া হয় না তা চেনা",
     "en": "Spot letters that are written but not read"
    },
    {
     "bn": "আলিফ-মাদ্দা (آ) পড়া",
     "en": "Read alif-madda (آ)"
    },
    {
     "bn": "কুরআনের থামার চিহ্ন বোঝা",
     "en": "Understand the stop signs in the mushaf"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "আপনি প্রায় পৌঁছে গেছেন! কুরআনের কিছু শব্দের বানান একটু বিশেষ। এগুলো জানলে আর কোনো শব্দে আটকাবেন না।",
     "en": "You're almost there! A few Quranic words have special spellings. Learn these and nothing will trip you up."
    },
    {
     "type": "text",
     "bn": "**গোল তা (ة)** শব্দের শেষে বসে। দেখতে ه-এর মতো, কিন্তু মাথায় ت-এর দুই বিন্দু। চলতে চলতে পড়লে 'ত', আর শব্দে থামলে 'হ' (হালকা)।",
     "en": "**Round ta (ة)** sits at the end of a word. It looks like ه with the two dots of ت on top. Reading on, it's 't'; stopping on the word, it's a soft 'h'.",
     "title": {
      "bn": "গোল তা (ة)",
      "en": "Round ta (ة)"
     }
    },
    {
     "type": "tip",
     "kind": "memory",
     "bn": "ة আসলে ه আর ت-এর মিশ্রণ — শরীর হা-এর, বিন্দু তা-এর! তাই কাজও দুটোরই: চলতে থাকলে 'ত' (তা-এর মতো), বিশ্রাম নিলে 'হ' (হা-এর মতো)।",
     "en": "ة is literally a mix of ه and ت — Haa's body with Taa's dots! So it does both jobs: moving on, it's 't' (like Taa); resting, it's 'h' (like Haa)."
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "ت",
       "label": {
        "bn": "তা",
        "en": "Taa"
       },
       "desc": {
        "bn": "সবসময় 't'",
        "en": "always 't'"
       }
      },
      {
       "ar": "ة",
       "label": {
        "bn": "গোল তা",
        "en": "Round ta"
       },
       "desc": {
        "bn": "চলতে 't', থামলে 'h'",
        "en": "'t' moving, 'h' stopping"
       }
      },
      {
       "ar": "ه",
       "label": {
        "bn": "হা",
        "en": "Haa"
       },
       "desc": {
        "bn": "সবসময় 'h'",
        "en": "always 'h'"
       }
      }
     ]
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "শব্দ",
       "en": "Word"
      },
      {
       "bn": "চলতে চলতে",
       "en": "Reading on"
      },
      {
       "bn": "থামলে",
       "en": "Stopping"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "رَحْمَةٌ",
       {
        "bn": "রাহমাতুন",
        "en": "raḥmatun"
       },
       {
        "bn": "রাহমাহ্",
        "en": "raḥmah"
       },
       {
        "bn": "দয়া",
        "en": "mercy"
       }
      ],
      [
       "جَنَّةٌ",
       {
        "bn": "জান্নাতুন",
        "en": "jannatun"
       },
       {
        "bn": "জান্নাহ্",
        "en": "jannah"
       },
       {
        "bn": "জান্নাত",
        "en": "Paradise"
       }
      ],
      [
       "نِعْمَةٌ",
       {
        "bn": "নি'মাতুন",
        "en": "ni'matun"
       },
       {
        "bn": "নি'মাহ্",
        "en": "ni'mah"
       },
       {
        "bn": "নিয়ামত",
        "en": "blessing"
       }
      ],
      [
       "قُوَّةٌ",
       {
        "bn": "ক্বুওয়্যাতুন",
        "en": "quwwatun"
       },
       {
        "bn": "ক্বুওয়্যাহ্",
        "en": "quwwah"
       },
       {
        "bn": "শক্তি",
        "en": "strength"
       }
      ]
     ]
    },
    {
     "type": "text",
     "bn": "**আলিফ মাকসূরা (ى)** দেখতে বিন্দুছাড়া ইয়া, শব্দের শেষে বসে, আর পড়া হয় **লম্বা 'আ'**-এর মতো। বাংলাদেশি কুরআনে প্রায়ই এর আগের অক্ষরে খাড়া যবর থাকে: عَلٰى।",
     "en": "**Alif maqsura (ى)** looks like a dotless yaa, sits at the end of a word, and is read as a **long 'ā'**. Bangladeshi mushafs often put a standing fatha on the letter before it: عَلٰى.",
     "title": {
      "bn": "আলিফ মাকসূরা (ى)",
      "en": "Alif maqsura (ى)"
     }
    },
    {
     "type": "compare",
     "items": [
      {
       "ar": "ي",
       "label": {
        "bn": "ইয়া",
        "en": "Yaa"
       },
       "desc": {
        "bn": "নিচে দুই বিন্দু: 'ই/য়'",
        "en": "two dots below: 'ī/y'"
       }
      },
      {
       "ar": "ى",
       "label": {
        "bn": "আলিফ মাকসূরা",
        "en": "Alif maqsura"
       },
       "desc": {
        "bn": "বিন্দু নেই: লম্বা 'আ'",
        "en": "no dots: long 'ā'"
       }
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "عَلَى",
       "tr": {
        "bn": "'আলা-",
        "en": "'alā"
       },
       "mean": {
        "bn": "ওপরে",
        "en": "on, upon"
       }
      },
      {
       "ar": "إِلَى",
       "tr": {
        "bn": "ইলা-",
        "en": "ilā"
       },
       "mean": {
        "bn": "দিকে",
        "en": "to, towards"
       }
      },
      {
       "ar": "هُدًى",
       "tr": {
        "bn": "হুদান",
        "en": "hudan"
       },
       "mean": {
        "bn": "হিদায়াত",
        "en": "guidance"
       },
       "note": {
        "bn": "তানবীনের সাথে আলিফ মাকসূরা",
        "en": "alif maqsura with tanween"
       }
      },
      {
       "ar": "مُوسٰى",
       "tr": {
        "bn": "মূসা-",
        "en": "mūsā"
       },
       "mean": {
        "bn": "মূসা (আ.)",
        "en": "Musa (Moses)"
       }
      },
      {
       "ar": "عِيسٰى",
       "tr": {
        "bn": "'ঈসা-",
        "en": "'īsā"
       },
       "mean": {
        "bn": "ঈসা (আ.)",
        "en": "'Isa (Jesus)"
       }
      },
      {
       "ar": "الْأَعْلٰى",
       "tr": {
        "bn": "আল-আ'লা-",
        "en": "al-a'lā"
       },
       "mean": {
        "bn": "সর্বোচ্চ",
        "en": "the Most High"
       }
      }
     ]
    },
    {
     "type": "text",
     "bn": "**আলিফ-মাদ্দা (آ):** আলিফের ওপর ঢেউ মানে হামযা + লম্বা 'আ' — একসাথে। أَا লেখার বদলে সংক্ষেপে آ লেখা হয়।",
     "en": "**Alif-madda (آ):** a wave on top of an alif means hamza + long 'ā' together. Instead of writing أَا, Arabic writes آ.",
     "title": {
      "bn": "আলিফ-মাদ্দা (آ)",
      "en": "Alif-madda (آ)"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "آمَنُوا",
       "tr": {
        "bn": "আ-মানূ",
        "en": "āmanū"
       },
       "mean": {
        "bn": "তারা ঈমান এনেছে",
        "en": "they believed"
       },
       "hl": "آ"
      },
      {
       "ar": "الْقُرْآنُ",
       "tr": {
        "bn": "আলক্বুর'আ-নু",
        "en": "al-qurʼānu"
       },
       "mean": {
        "bn": "কুরআন",
        "en": "the Quran"
       },
       "hl": "آ"
      },
      {
       "ar": "آدَمُ",
       "tr": {
        "bn": "আ-দামু",
        "en": "ādamu"
       },
       "mean": {
        "bn": "আদম (আ.)",
        "en": "Adam"
       },
       "hl": "آ"
      }
     ]
    },
    {
     "type": "text",
     "bn": "এবার কিছু অক্ষর যা **লেখা থাকে কিন্তু পড়া হয় না।** সবচেয়ে সাধারণ: বহুবচনের ওয়াওয়ের পরের আলিফ — যেমন قَالُوا (তারা বলল)। শেষের আলিফটা চুপ!",
     "en": "Now some letters that are **written but not read.** The most common: the alif after a plural waaw — as in قَالُوا (they said). The final alif is silent!",
     "title": {
      "bn": "লেখা আছে, পড়া নেই",
      "en": "Written, not read"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "قَالُوا",
       "tr": {
        "bn": "ক্বা-লূ",
        "en": "qālū"
       },
       "mean": {
        "bn": "তারা বলল",
        "en": "they said"
       },
       "note": {
        "bn": "শেষের আলিফ নীরব",
        "en": "final alif is silent"
       },
       "hl": "ا"
      },
      {
       "ar": "كَفَرُوا",
       "tr": {
        "bn": "কাফারূ",
        "en": "kafarū"
       },
       "mean": {
        "bn": "তারা অস্বীকার করল",
        "en": "they disbelieved"
       },
       "note": {
        "bn": "শেষের আলিফ নীরব",
        "en": "final alif is silent"
       }
      },
      {
       "ar": "عَمِلُوا",
       "tr": {
        "bn": "'আমিলূ",
        "en": "'amilū"
       },
       "mean": {
        "bn": "তারা কাজ করল",
        "en": "they did"
       },
       "note": {
        "bn": "শেষের আলিফ নীরব",
        "en": "final alif is silent"
       }
      },
      {
       "ar": "أَنَا",
       "tr": {
        "bn": "আনা",
        "en": "ana"
       },
       "mean": {
        "bn": "আমি",
        "en": "I"
       },
       "note": {
        "bn": "চলতে চলতে শেষের আলিফ পড়া হয় না; থামলে 'আনা-'",
        "en": "the final alif is not read when continuing; 'anā' when stopping"
       }
      },
      {
       "ar": "أُولٰئِكَ",
       "tr": {
        "bn": "উলা-ইকা",
        "en": "ulāʼika"
       },
       "mean": {
        "bn": "তারাই",
        "en": "those"
       },
       "note": {
        "bn": "প্রথম ওয়াও পড়া হয় না",
        "en": "the first waaw is not read"
       }
      },
      {
       "ar": "مِائَةٌ",
       "tr": {
        "bn": "মি'আতুন",
        "en": "miʼatun"
       },
       "mean": {
        "bn": "একশ",
        "en": "one hundred"
       },
       "note": {
        "bn": "মীমের পরের আলিফ পড়া হয় না",
        "en": "the alif after meem is not read"
       }
      }
     ]
    },
    {
     "type": "text",
     "bn": "কয়েকটি বিখ্যাত শব্দে 'আ' লম্বা করতে আলিফের বদলে ওয়াও লেখা হয়, আর তার ওপর খাড়া যবর থাকে। ওয়াওটা পড়া হয় না — খাড়া যবর থেকে লম্বা 'আ' পড়ুন।",
     "en": "In a few famous words, the long 'ā' is written with a waaw instead of an alif, with a standing fatha on top. The waaw is not read — just read the long 'ā' of the standing fatha.",
     "title": {
      "bn": "ওয়াও দিয়ে লেখা 'আ'",
      "en": "'ā' written with a waaw"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "الصَّلٰوةُ",
       "tr": {
        "bn": "আসসালা-তু",
        "en": "aṣ-ṣalātu"
       },
       "mean": {
        "bn": "নামায",
        "en": "the prayer"
       }
      },
      {
       "ar": "الزَّكٰوةُ",
       "tr": {
        "bn": "আযযাকা-তু",
        "en": "az-zakātu"
       },
       "mean": {
        "bn": "যাকাত",
        "en": "the zakah"
       }
      },
      {
       "ar": "الْحَيٰوةُ",
       "tr": {
        "bn": "আলহায়া-তু",
        "en": "al-ḥayātu"
       },
       "mean": {
        "bn": "জীবন",
        "en": "life"
       }
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "আরব দেশের কুরআনে নীরব অক্ষরের ওপর ছোট্ট গোল শূন্য ( ۟ ) দেওয়া থাকে: {{قَالُوا۟}}। বাংলাদেশি কুরআনে নীরব অক্ষরে সাধারণত কোনো হরকতই থাকে না — **হরকতহীন, সুকুনহীন অক্ষর দেখলে বুঝবেন সেটা পড়া হয় না।**",
     "en": "Mushafs from Arab countries put a tiny round zero ( ۟ ) on silent letters: {{قَالُوا۟}}. Bangladeshi mushafs usually leave a silent letter with no mark at all — **a letter with no vowel and no sukun is not read.**"
    },
    {
     "type": "text",
     "bn": "কুরআনের লাইনের ওপর ছোট ছোট অক্ষর দেখবেন — এগুলো **ওয়াকফের চিহ্ন** (কোথায় থামবেন বা থামবেন না)। নিচে বাংলাদেশি কুরআনের সবচেয়ে সাধারণ চিহ্নগুলো। বিস্তারিত তাজবীদ ইউনিটে।",
     "en": "You'll see small letters above the lines of the Quran — these are **waqf (stop) signs** telling you where to stop or not. Below are the most common ones in Bangladeshi mushafs. Details come in the tajweed unit.",
     "title": {
      "bn": "থামার চিহ্ন",
      "en": "Stop signs"
     }
    },
    {
     "type": "table",
     "head": [
      {
       "bn": "চিহ্ন",
       "en": "Sign"
      },
      {
       "bn": "অর্থ",
       "en": "Meaning"
      }
     ],
     "rows": [
      [
       "۝",
       {
        "bn": "আয়াতের শেষ — এখানে থামা উত্তম",
        "en": "End of an ayah — good to stop here"
       }
      ],
      [
       "م",
       {
        "bn": "অবশ্যই থামুন (না থামলে অর্থ বিগড়ে যেতে পারে)",
        "en": "Must stop (continuing may distort the meaning)"
       }
      ],
      [
       "ط",
       {
        "bn": "থামা উত্তম",
        "en": "Stopping is preferred"
       }
      ],
      [
       "ج",
       {
        "bn": "থামা জায়েয (থামতেও পারেন, চালিয়েও যেতে পারেন)",
        "en": "Stopping is permitted (stop or continue)"
       }
      ],
      [
       "قلے",
       {
        "bn": "থামা উত্তম",
        "en": "Stopping is better"
       }
      ],
      [
       "صلے",
       {
        "bn": "চালিয়ে যাওয়া উত্তম",
        "en": "Continuing is better"
       }
      ],
      [
       "لا",
       {
        "bn": "এখানে থামবেন না (আয়াতের মাঝে)",
        "en": "Don't stop here (inside an ayah)"
       }
      ],
      [
       {
        "bn": "∴ ∴ (তিন বিন্দু, দুই জায়গায়)",
        "en": "∴ ∴ (three dots, in two places)"
       },
       {
        "bn": "দুটির যেকোনো একটিতে থামুন, দুটোতে নয়",
        "en": "Stop at one of the two, not both"
       }
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "bn": "ভুল জায়গায় থেমে গেলে চিন্তা করবেন না — একটু আগে থেকে আবার শুরু করুন, যাতে অর্থ ঠিক থাকে।",
     "en": "If you stop in the wrong place, don't worry — go back a little and start again so the meaning stays right."
    },
    {
     "type": "practice",
     "bn": "বিশেষ বানানগুলো খেয়াল করে পড়ুন।",
     "en": "Read carefully, watching for special spellings.",
     "lines": [
      "رَحْمَةٌ جَنَّةٌ نِعْمَةٌ",
      "عَلَى إِلَى هُدًى",
      "مُوسٰى عِيسٰى الْأَعْلٰى",
      "آمَنُوا الْقُرْآنُ آدَمُ",
      "قَالُوا كَفَرُوا عَمِلُوا",
      "أَنَا أُولٰئِكَ مِائَةٌ",
      "الصَّلٰوةُ الزَّكٰوةُ الْحَيٰوةُ"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "জান্নাতুন শব্দে থামলে কীভাবে পড়বেন?",
        "en": "How do you read this word when stopping on it?"
       },
       "ar": "جَنَّةٌ",
       "options": [
        {
         "bn": "জান্নাহ্",
         "en": "jannah"
        },
        {
         "bn": "জান্নাত্",
         "en": "jannat"
        },
        {
         "bn": "জান্নাতুন",
         "en": "jannatun"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এই অক্ষর (শব্দের শেষে) কীভাবে পড়বেন?",
        "en": "How is this letter read at the end of a word?"
       },
       "ar": "ى",
       "options": [
        {
         "bn": "পড়া হয় না",
         "en": "not read"
        },
        {
         "bn": "লম্বা 'আ'",
         "en": "long 'ā'"
        },
        {
         "bn": "লম্বা 'ঈ'",
         "en": "long 'ī'"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "قَالُوا",
       "options": [
        {
         "bn": "ক্বা-লূ-আ",
         "en": "qālūā"
        },
        {
         "bn": "ক্বালা",
         "en": "qāla"
        },
        {
         "bn": "ক্বা-লূ",
         "en": "qālū"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "آ কী বোঝায়?",
        "en": "What does آ stand for?"
       },
       "options": [
        {
         "bn": "হামযা + লম্বা 'আ'",
         "en": "Hamza + long 'ā'"
        },
        {
         "bn": "শুধু ছোট 'আ'",
         "en": "Just a short 'a'"
        },
        {
         "bn": "নীরব আলিফ",
         "en": "A silent alif"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "الصَّلٰوةُ",
       "options": [
        {
         "bn": "আসসালূতু",
         "en": "aṣ-ṣalūtu"
        },
        {
         "bn": "আসসালা-তু",
         "en": "aṣ-ṣalātu"
        },
        {
         "bn": "আসসালাওয়াতু",
         "en": "aṣ-ṣalawatu"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "লা (لا) চিহ্ন আয়াতের মাঝে থাকলে কী করবেন?",
        "en": "What do you do at a لا sign inside an ayah?"
       },
       "options": [
        {
         "bn": "অবশ্যই থামবেন",
         "en": "Must stop"
        },
        {
         "bn": "সিজদা দেবেন",
         "en": "Prostrate"
        },
        {
         "bn": "থামবেন না",
         "en": "Don't stop"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "ة-এর শরীর কোন অক্ষরের মতো?",
        "en": "Round ta (ة) has the body of which letter?"
       },
       "options": [
        "ه",
        "ت",
        "ن"
       ],
       "answer": 0
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    }
   ]
  },
  {
   "id": "rd-fluency",
   "icon": "﴿﴾",
   "title": {
    "bn": "সাবলীল পড়ার ল্যাব",
    "en": "Fluency Lab"
   },
   "subtitle": {
    "bn": "ছোট শব্দ থেকে কুরআনের আয়াত — ধাপে ধাপে",
    "en": "From short words to real Quranic ayahs, level by level"
   },
   "minutes": 20,
   "goals": [
    {
     "bn": "ছোট থেকে বড় — ধাপে ধাপে সাবলীল পড়া",
     "en": "Build fluency level by level"
    },
    {
     "bn": "প্রতিদিনের দোয়া ও যিকিরের বাক্য পড়া",
     "en": "Read everyday Islamic phrases"
    },
    {
     "bn": "সূরা ফাতিহার শুরু ও সূরা ইখলাস নিজে পড়া",
     "en": "Read the opening of Al-Fatihah and Surah Al-Ikhlas yourself"
    }
   ],
   "blocks": [
    {
     "type": "text",
     "bn": "এখন সময় সবকিছু একসাথে কাজে লাগানোর! এই ল্যাবে ৫টি লেভেল আছে। প্রতিটি লেভেল ৩ বার পড়ুন: প্রথমবার ধীরে, দ্বিতীয়বার স্বাভাবিক, তৃতীয়বার আত্মবিশ্বাসের সাথে।",
     "en": "Time to put it all together! This lab has 5 levels. Read each level 3 times: first slowly, then normally, then with confidence."
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "আটকে গেলে ভয় নেই — শব্দটাকে টুকরা করুন (পাঠ ১৩-এর কৌশল), চিহ্নগুলো দেখুন, তারপর আবার চেষ্টা করুন।",
     "en": "Stuck? No problem — split the word into chunks (the lesson 13 method), check the marks, and try again."
    },
    {
     "type": "practice",
     "bn": "লেভেল ১: ছোট শব্দ। প্রতিটি শব্দ এক নিঃশ্বাসে।",
     "en": "Level 1: short words. Each word in one breath.",
     "lines": [
      "مِنْ عَنْ لَمْ قُلْ",
      "هُوَ هِيَ لَهُ بِهِ",
      "كَانَ قَالَ نَحْنُ",
      "رَبِّ إِنَّ ثُمَّ",
      "يَوْمٌ خَيْرٌ شَيْءٌ"
     ],
     "title": {
      "bn": "লেভেল ১",
      "en": "Level 1"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "رَحِيمٌ",
       "tr": {
        "bn": "রাহীমুন",
        "en": "raḥīmun"
       },
       "mean": {
        "bn": "পরম দয়ালু",
        "en": "Most Merciful"
       }
      },
      {
       "ar": "عَلِيمٌ",
       "tr": {
        "bn": "'আলীমুন",
        "en": "'alīmun"
       },
       "mean": {
        "bn": "সর্বজ্ঞ",
        "en": "All-Knowing"
       }
      },
      {
       "ar": "حَكِيمٌ",
       "tr": {
        "bn": "হাকীমুন",
        "en": "ḥakīmun"
       },
       "mean": {
        "bn": "প্রজ্ঞাময়",
        "en": "All-Wise"
       }
      },
      {
       "ar": "سَمِيعٌ",
       "tr": {
        "bn": "সামী'উন",
        "en": "samī'un"
       },
       "mean": {
        "bn": "সর্বশ্রোতা",
        "en": "All-Hearing"
       }
      },
      {
       "ar": "بَصِيرٌ",
       "tr": {
        "bn": "বাসীরুন",
        "en": "baṣīrun"
       },
       "mean": {
        "bn": "সর্বদ্রষ্টা",
        "en": "All-Seeing"
       }
      },
      {
       "ar": "غَفُورٌ",
       "tr": {
        "bn": "গাফূরুন",
        "en": "ghafūrun"
       },
       "mean": {
        "bn": "অতি ক্ষমাশীল",
        "en": "Most Forgiving"
       }
      },
      {
       "ar": "قَدِيرٌ",
       "tr": {
        "bn": "ক্বাদীরুন",
        "en": "qadīrun"
       },
       "mean": {
        "bn": "সর্বশক্তিমান",
        "en": "All-Powerful"
       }
      },
      {
       "ar": "خَبِيرٌ",
       "tr": {
        "bn": "খাবীরুন",
        "en": "khabīrun"
       },
       "mean": {
        "bn": "সব খবর রাখেন",
        "en": "All-Aware"
       }
      }
     ],
     "title": {
      "bn": "লেভেল ২: আল্লাহর সুন্দর নামসমূহ (কুরআনে বহুবার আসে)",
      "en": "Level 2: Beautiful names of Allah (frequent in the Quran)"
     }
    },
    {
     "type": "practice",
     "bn": "লেভেল ৩: 'আল'-সহ কুরআনের শব্দ। সূর্য/চাঁদের অক্ষর খেয়াল করুন!",
     "en": "Level 3: Quranic words with 'al'. Watch for sun and moon letters!",
     "lines": [
      "الْكِتَابُ الْقُرْآنُ",
      "الصَّلٰوةَ الزَّكٰوةَ",
      "الْمُؤْمِنُونَ الصّٰلِحٰتِ",
      "الْعٰلَمِينَ الْمُسْتَقِيمَ",
      "السَّمٰوٰتِ الْأَرْضِ"
     ],
     "title": {
      "bn": "লেভেল ৩",
      "en": "Level 3"
     }
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "بِسْمِ اللّٰهِ",
       "tr": {
        "bn": "বিসমিল্লা-হ",
        "en": "bismillāh"
       },
       "mean": {
        "bn": "আল্লাহর নামে",
        "en": "In the name of Allah"
       }
      },
      {
       "ar": "الْحَمْدُ لِلّٰهِ",
       "tr": {
        "bn": "আলহামদু লিল্লা-হ",
        "en": "al-ḥamdu lillāh"
       },
       "mean": {
        "bn": "সমস্ত প্রশংসা আল্লাহর",
        "en": "All praise is for Allah"
       }
      },
      {
       "ar": "سُبْحَانَ اللّٰهِ",
       "tr": {
        "bn": "সুবহা-নাল্লা-হ",
        "en": "subḥāna-llāh"
       },
       "mean": {
        "bn": "আল্লাহ পবিত্র",
        "en": "Glory be to Allah"
       }
      },
      {
       "ar": "اللّٰهُ أَكْبَرُ",
       "tr": {
        "bn": "আল্লা-হু আকবার",
        "en": "allāhu akbar"
       },
       "mean": {
        "bn": "আল্লাহ সবচেয়ে বড়",
        "en": "Allah is the Greatest"
       }
      },
      {
       "ar": "لَا إِلٰهَ إِلَّا اللّٰهُ",
       "tr": {
        "bn": "লা- ইলা-হা ইল্লাল্লা-হ",
        "en": "lā ilāha illa-llāh"
       },
       "mean": {
        "bn": "আল্লাহ ছাড়া কোনো ইলাহ নেই",
        "en": "There is no god but Allah"
       }
      },
      {
       "ar": "أَسْتَغْفِرُ اللّٰهَ",
       "tr": {
        "bn": "আসতাগফিরুল্লা-হ",
        "en": "astaghfiru-llāh"
       },
       "mean": {
        "bn": "আমি আল্লাহর কাছে ক্ষমা চাই",
        "en": "I seek Allah's forgiveness"
       }
      },
      {
       "ar": "إِنْ شَاءَ اللّٰهُ",
       "tr": {
        "bn": "ইন শা-আল্লা-হ",
        "en": "in shāʼa-llāh"
       },
       "mean": {
        "bn": "আল্লাহ চাইলে",
        "en": "If Allah wills"
       }
      },
      {
       "ar": "جَزَاكَ اللّٰهُ خَيْرًا",
       "tr": {
        "bn": "জাযা-কাল্লা-হু খাইরা-",
        "en": "jazāka-llāhu khayrā"
       },
       "mean": {
        "bn": "আল্লাহ আপনাকে উত্তম প্রতিদান দিন",
        "en": "May Allah reward you with good"
       }
      }
     ],
     "title": {
      "bn": "লেভেল ৪: প্রতিদিনের বাক্য",
      "en": "Level 4: Everyday phrases"
     }
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "এই বাক্যগুলো আপনি হয়তো প্রতিদিন বলেন — এখন আপনি এগুলো আরবিতে নিজের চোখে পড়তেও পারেন!",
     "en": "You probably say these phrases every day — now you can read them in Arabic with your own eyes!"
    },
    {
     "type": "examples",
     "items": [
      {
       "ar": "رَبِّ زِدْنِي عِلْمًا",
       "tr": {
        "bn": "রাব্বি যিদনী 'ইলমা-",
        "en": "rabbi zidnī 'ilmā"
       },
       "mean": {
        "bn": "হে আমার রব, আমার জ্ঞান বাড়িয়ে দিন",
        "en": "My Lord, increase me in knowledge"
       },
       "note": {
        "bn": "সূরা ত্বা-হা ২০:১১৪",
        "en": "Ta-Ha 20:114"
       }
      },
      {
       "ar": "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
       "tr": {
        "bn": "ফাইন্না মা'আল 'উসরি ইউসরা-",
        "en": "fa-inna ma'al-'usri yusrā"
       },
       "mean": {
        "bn": "নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে",
        "en": "Indeed, with hardship comes ease"
       },
       "note": {
        "bn": "সূরা আশ-শারহ ৯৪:৫",
        "en": "Ash-Sharh 94:5"
       }
      },
      {
       "ar": "إِنَّ اللّٰهَ مَعَ الصّٰبِرِينَ",
       "tr": {
        "bn": "ইন্নাল্লা-হা মা'আস সা-বিরীন",
        "en": "inna-llāha ma'aṣ-ṣābirīn"
       },
       "mean": {
        "bn": "নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সাথে আছেন",
        "en": "Indeed, Allah is with the patient"
       },
       "note": {
        "bn": "সূরা আল-বাকারা ২:১৫৩",
        "en": "Al-Baqarah 2:153"
       }
      },
      {
       "ar": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً",
       "tr": {
        "bn": "রাব্বানা- আ-তিনা- ফিদ দুনইয়া- হাসানাহ",
        "en": "rabbanā ātinā fid-dunyā ḥasanah"
       },
       "mean": {
        "bn": "হে আমাদের রব, দুনিয়াতে আমাদের কল্যাণ দিন",
        "en": "Our Lord, give us good in this world"
       },
       "note": {
        "bn": "সূরা আল-বাকারা ২:২০১ (অংশ)",
        "en": "Al-Baqarah 2:201 (part)"
       }
      },
      {
       "ar": "وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيرٌ",
       "tr": {
        "bn": "ওয়াল্লা-হু 'আলা- কুল্লি শাইয়িন ক্বাদীর",
        "en": "wallāhu 'alā kulli shayʼin qadīr"
       },
       "mean": {
        "bn": "আর আল্লাহ সবকিছুর ওপর ক্ষমতাবান",
        "en": "And Allah has power over all things"
       },
       "note": {
        "bn": "সূরা আল-বাকারা ২:২৮৪ (অংশ)",
        "en": "Al-Baqarah 2:284 (part)"
       }
      }
     ],
     "title": {
      "bn": "লেভেল ৫: কুরআনের ছোট বাক্য",
      "en": "Level 5: Short Quranic phrases"
     }
    },
    {
     "type": "text",
     "bn": "এবার আসল পুরস্কার: কুরআনের পুরো আয়াত! প্রথমে শব্দে শব্দে পড়ুন, তারপর পুরো আয়াত। আয়াতের শেষে থামুন — মনে আছে, থামলে শেষের হরকত/তানবীন সুকুন হয়ে যায়।",
     "en": "Now the real prize: complete ayahs of the Quran! Read word by word first, then the whole ayah. Stop at the end of each ayah — remember, stopping turns the final vowel or tanween into a sukun.",
     "title": {
      "bn": "আয়াত পড়ি!",
      "en": "Let's read ayahs!"
     }
    },
    {
     "type": "ayah",
     "ref": "1:1",
     "ar": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
     "words": [
      {
       "ar": "بِسْمِ",
       "bn": "নামে",
       "en": "In the name"
      },
      {
       "ar": "اللّٰهِ",
       "bn": "আল্লাহর",
       "en": "of Allah"
      },
      {
       "ar": "الرَّحْمٰنِ",
       "bn": "পরম করুণাময়",
       "en": "the Most Gracious"
      },
      {
       "ar": "الرَّحِيمِ",
       "bn": "অতি দয়ালু",
       "en": "the Most Merciful"
      }
     ],
     "tr": {
      "bn": "বিসমিল্লা-হির রাহমা-নির রাহীম",
      "en": "bismi-llāhi-r-raḥmāni-r-raḥīm"
     },
     "mean": {
      "bn": "পরম করুণাময়, অতি দয়ালু আল্লাহর নামে।",
      "en": "In the name of Allah, the Most Gracious, the Most Merciful."
     }
    },
    {
     "type": "ayah",
     "ref": "1:2",
     "ar": "الْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِينَ",
     "words": [
      {
       "ar": "الْحَمْدُ",
       "bn": "সমস্ত প্রশংসা",
       "en": "All praise"
      },
      {
       "ar": "لِلّٰهِ",
       "bn": "আল্লাহর জন্য",
       "en": "is for Allah"
      },
      {
       "ar": "رَبِّ",
       "bn": "রব",
       "en": "Lord"
      },
      {
       "ar": "الْعٰلَمِينَ",
       "bn": "সকল জগতের",
       "en": "of all the worlds"
      }
     ],
     "tr": {
      "bn": "আলহামদু লিল্লা-হি রাব্বিল 'আ-লামীন",
      "en": "al-ḥamdu lillāhi rabbil-'ālamīn"
     },
     "mean": {
      "bn": "সমস্ত প্রশংসা আল্লাহর, যিনি সকল জগতের রব।",
      "en": "All praise is for Allah, Lord of all the worlds."
     }
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "সূরা ইখলাস কুরআনের সবচেয়ে ছোট ও প্রিয় সূরাগুলোর একটি। প্রতিটি আয়াতের নিচে শব্দে শব্দে অর্থ আছে — পড়ার সাথে সাথে বুঝুন!",
     "en": "Surah Al-Ikhlas is one of the shortest and most beloved surahs. Each ayah has a word-by-word meaning — understand as you read!",
     "title": {
      "bn": "সূরা ইখলাস",
      "en": "Surah Al-Ikhlas"
     }
    },
    {
     "type": "ayah",
     "ref": "112:1",
     "ar": "قُلْ هُوَ اللّٰهُ أَحَدٌ",
     "words": [
      {
       "ar": "قُلْ",
       "bn": "বলুন",
       "en": "Say"
      },
      {
       "ar": "هُوَ",
       "bn": "তিনি",
       "en": "He is"
      },
      {
       "ar": "اللّٰهُ",
       "bn": "আল্লাহ",
       "en": "Allah"
      },
      {
       "ar": "أَحَدٌ",
       "bn": "এক, অদ্বিতীয়",
       "en": "One (unique)"
      }
     ],
     "tr": {
      "bn": "ক্বুল হুওয়াল্লা-হু আহাদ",
      "en": "qul huwa-llāhu aḥad"
     },
     "mean": {
      "bn": "বলুন, তিনিই আল্লাহ, এক ও অদ্বিতীয়।",
      "en": "Say: He is Allah, the One."
     }
    },
    {
     "type": "ayah",
     "ref": "112:2",
     "ar": "اللّٰهُ الصَّمَدُ",
     "words": [
      {
       "ar": "اللّٰهُ",
       "bn": "আল্লাহ",
       "en": "Allah"
      },
      {
       "ar": "الصَّمَدُ",
       "bn": "অমুখাপেক্ষী",
       "en": "the Self-Sufficient"
      }
     ],
     "tr": {
      "bn": "আল্লা-হুস সামাদ",
      "en": "allāhu-ṣ-ṣamad"
     },
     "mean": {
      "bn": "আল্লাহ অমুখাপেক্ষী — সবাই তাঁর মুখাপেক্ষী।",
      "en": "Allah, the Self-Sufficient, on whom all depend."
     }
    },
    {
     "type": "ayah",
     "ref": "112:3",
     "ar": "لَمْ يَلِدْ وَلَمْ يُولَدْ",
     "words": [
      {
       "ar": "لَمْ يَلِدْ",
       "bn": "তিনি জন্ম দেননি",
       "en": "He did not beget"
      },
      {
       "ar": "وَلَمْ",
       "bn": "এবং না",
       "en": "and not"
      },
      {
       "ar": "يُولَدْ",
       "bn": "তাঁকে জন্ম দেওয়া হয়েছে",
       "en": "was He begotten"
      }
     ],
     "tr": {
      "bn": "লাম ইয়ালিদ ওয়া লাম ইউলাদ",
      "en": "lam yalid wa lam yūlad"
     },
     "mean": {
      "bn": "তিনি কাউকে জন্ম দেননি, আর তাঁকেও জন্ম দেওয়া হয়নি।",
      "en": "He neither begets nor was He begotten."
     }
    },
    {
     "type": "ayah",
     "ref": "112:4",
     "ar": "وَلَمْ يَكُنْ لَّهٗ كُفُوًا أَحَدٌ",
     "words": [
      {
       "ar": "وَلَمْ يَكُنْ",
       "bn": "আর নেই",
       "en": "and there is not"
      },
      {
       "ar": "لَّهٗ",
       "bn": "তাঁর",
       "en": "to Him"
      },
      {
       "ar": "كُفُوًا",
       "bn": "সমতুল্য",
       "en": "equal"
      },
      {
       "ar": "أَحَدٌ",
       "bn": "কেউ",
       "en": "anyone"
      }
     ],
     "tr": {
      "bn": "ওয়া লাম ইয়াকুল লাহূ কুফুওয়ান আহাদ",
      "en": "wa lam yakul-lahū kufuwan aḥad"
     },
     "mean": {
      "bn": "আর তাঁর সমতুল্য কেউই নেই।",
      "en": "And there is none equal to Him."
     }
    },
    {
     "type": "tip",
     "kind": "tip",
     "bn": "১১২:৪-এ يَكُنْ لَّهٗ পড়া হয় 'ইয়াকুল লাহূ' — নূনটা লামের সাথে মিশে যায় (লামের ওপর তাশদীদ দেখুন)। এটা 'ইদগাম', তাজবীদ ইউনিটে বিস্তারিত শিখবেন।",
     "en": "In 112:4, يَكُنْ لَّهٗ is read 'yakul-lahū' — the noon merges into the lam (see the shaddah on the lam). This is 'idgham', covered fully in the tajweed unit."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": {
        "bn": "প্রতিদিন ৫ লাইন",
        "en": "5 lines a day"
       },
       "desc": {
        "bn": "প্রতিদিন কুরআন থেকে অন্তত ৫ লাইন জোরে পড়ুন।",
        "en": "Read at least 5 lines of the Quran aloud every day."
       }
      },
      {
       "title": {
        "bn": "শুনে শুনে মেলান",
        "en": "Follow a reciter"
       },
       "desc": {
        "bn": "একজন ভালো ক্বারীর তিলাওয়াত শুনুন আর আঙুল দিয়ে লাইন অনুসরণ করুন।",
        "en": "Listen to a good reciter and follow the lines with your finger."
       }
      },
      {
       "title": {
        "bn": "কাউকে শোনান",
        "en": "Read to someone"
       },
       "desc": {
        "bn": "সপ্তাহে একবার শিক্ষক বা পরিবারের কাউকে পড়ে শোনান — ভুল ধরিয়ে দিতে বলুন।",
        "en": "Once a week, read to a teacher or family member and ask them to correct you."
       }
      },
      {
       "title": {
        "bn": "তাজবীদ শিখুন",
        "en": "Learn tajweed"
       },
       "desc": {
        "bn": "পরের ইউনিটে তাজবীদের নিয়ম শিখে তিলাওয়াতকে আরও সুন্দর করুন।",
        "en": "Make your recitation even more beautiful with the tajweed rules in the next unit."
       }
      }
     ],
     "title": {
      "bn": "এরপর কী?",
      "en": "What's next?"
     }
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": {
        "bn": "এটি কীভাবে পড়বেন?",
        "en": "How do you read this?"
       },
       "ar": "بِسْمِ اللّٰهِ",
       "options": [
        {
         "bn": "বাসমাল্লা-হ",
         "en": "basmallāh"
        },
        {
         "bn": "বিসমিল্লা-হ",
         "en": "bismillāh"
        },
        {
         "bn": "বিসমি আল্লা-হ",
         "en": "bismi allāh"
        }
       ],
       "answer": 1,
       "explain": {
        "bn": "اللّٰه-এর আলিফ হামযাতুল ওয়াসল, তাই বাদ যায়।",
        "en": "The alif of اللّٰه is a hamzatul wasl, so it's skipped."
       }
      },
      {
       "q": {
        "bn": "الصَّمَدُ-এ লাম কেন পড়া হয় না?",
        "en": "Why is the lam silent in الصَّمَدُ?"
       },
       "options": [
        {
         "bn": "ص চাঁদের অক্ষর",
         "en": "ص is a moon letter"
        },
        {
         "bn": "লাম সবসময় নীরব",
         "en": "lam is always silent"
        },
        {
         "bn": "ص সূর্যের অক্ষর",
         "en": "ص is a sun letter"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "أَحَدٌ শব্দে আয়াতের শেষে থামলে কীভাবে পড়বেন?",
        "en": "How do you read أَحَدٌ when stopping at the end of the ayah?"
       },
       "options": [
        {
         "bn": "আহাদ্",
         "en": "aḥad"
        },
        {
         "bn": "আহাদুন",
         "en": "aḥadun"
        },
        {
         "bn": "আহাদা",
         "en": "aḥadā"
        }
       ],
       "answer": 0
      },
      {
       "q": {
        "bn": "{{رَبِّ زِدْنِي عِلْمًا}} অর্থ কী?",
        "en": "What does {{رَبِّ زِدْنِي عِلْمًا}} mean?"
       },
       "options": [
        {
         "bn": "সমস্ত প্রশংসা আল্লাহর",
         "en": "All praise is for Allah"
        },
        {
         "bn": "হে আমার রব, আমার জ্ঞান বাড়িয়ে দিন",
         "en": "My Lord, increase me in knowledge"
        },
        {
         "bn": "আল্লাহ সবচেয়ে বড়",
         "en": "Allah is the Greatest"
        }
       ],
       "answer": 1
      },
      {
       "q": {
        "bn": "لَّهٗ-এর ওপরের উল্টা পেশ কী বোঝায়?",
        "en": "What does the inverted damma on لَّهٗ mean?"
       },
       "ar": "لَّهٗ",
       "options": [
        {
         "bn": "তানবীন",
         "en": "tanween"
        },
        {
         "bn": "পড়া হয় না",
         "en": "not read"
        },
        {
         "bn": "লম্বা 'ঊ' — লাহূ",
         "en": "a long 'ū' — lahū"
        }
       ],
       "answer": 2
      },
      {
       "q": {
        "bn": "الْحَمْدُ-তে লাম কি পড়া হয়?",
        "en": "Is the lam read in الْحَمْدُ?"
       },
       "options": [
        {
         "bn": "হ্যাঁ — ح চাঁদের অক্ষর",
         "en": "Yes — ح is a moon letter"
        },
        {
         "bn": "না — ح সূর্যের অক্ষর",
         "en": "No — ح is a sun letter"
        }
       ],
       "answer": 0
      }
     ],
     "title": {
      "bn": "ছোট্ট কুইজ",
      "en": "Quick quiz"
     }
    },
    {
     "type": "tip",
     "kind": "fun",
     "bn": "আলহামদুলিল্লাহ! আপনি আলিফ থেকে শুরু করে কুরআনের আয়াত পড়া পর্যন্ত চলে এসেছেন। এটা অনেক বড় অর্জন। প্রতিদিন একটু একটু পড়তে থাকুন — প্রতিটি অক্ষরে নেকি!",
     "en": "Alhamdulillah! You've journeyed from Alif all the way to reading ayahs of the Quran. That's a huge achievement. Keep reading a little every day — there's reward in every letter!",
     "title": {
      "bn": "অভিনন্দন!",
      "en": "Congratulations!"
     }
    }
   ]
  }
 ]
});
