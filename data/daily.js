window.AQ = window.AQ || { units: [], alphabet: [], vocab: [] };
AQ.units.push({
"id": "daily",
"order": 6,
"icon": "ح",
"color": "rose",
"title": {"bn": "দৈনন্দিন আরবি", "en": "Everyday Arabic"},
"subtitle": {"bn": "সালাম, পরিচয়, সংখ্যা, পরিবার, বাজার, সময় — প্রতিদিনের কাজের আরবি", "en": "Greetings, numbers, family, market, time — Arabic you can use every day"},
"lessons": [
  {
    "id": "daily-islamic-phrases",
    "icon": "ﷲ",
    "title": {"bn": "প্রতিদিনের ইসলামি বাক্য", "en": "Islamic Phrases for Every Day"},
    "subtitle": {"bn": "কোন কথা কখন বলবেন — সালাম থেকে ইন্না লিল্লাহ", "en": "What to say and when — from salam to inna lillah"},
    "minutes": 15,
    "goals": [
      {"bn": "সালাম দেওয়া ও সালামের উত্তর দেওয়া", "en": "Give salam and reply to it correctly"},
      {"bn": "আল্লাহর যিকরের ছোট ছোট বাক্যের অর্থ জানা", "en": "Understand short phrases of dhikr"},
      {"bn": "কোন পরিস্থিতিতে কোন বাক্য বলতে হয় তা চেনা", "en": "Know which phrase fits which situation"},
      {"bn": "ছেলে, মেয়ে ও দলকে বলার সময় শেষাংশ বদলানো", "en": "Change the ending for a man, a woman or a group"}
    ],
    "blocks": [
      {"type": "text", "bn": "আপনি হয়তো খেয়াল করেননি — আপনি **ইতিমধ্যেই** অনেক আরবি বলেন! {{السَّلَامُ عَلَيْكُمْ}}, {{الْحَمْدُ لِلّٰهِ}}, {{إِنْ شَاءَ اللّٰهُ}} — এগুলো সবই আরবি বাক্য। এই পাঠে আমরা এগুলোর আসল অর্থ জানব, আর শিখব **কখন** কোনটা বলতে হয়।", "en": "You may not have noticed — you **already** speak quite a bit of Arabic! {{السَّلَامُ عَلَيْكُمْ}}, {{الْحَمْدُ لِلّٰهِ}}, {{إِنْ شَاءَ اللّٰهُ}} are all Arabic sentences. In this lesson we learn what they really mean, and **when** to say each one."},
      {"type": "vocab", "title": {"bn": "শান্তির সালাম", "en": "The greeting of peace"}, "items": [
        {"ar": "السَّلَامُ عَلَيْكُمْ", "tr": {"bn": "আস্‌সালামু আলাইকুম", "en": "as-salaamu 'alaykum"}, "mean": {"bn": "আপনাদের উপর শান্তি বর্ষিত হোক", "en": "Peace be upon you"}, "root": "س ل م"},
        {"ar": "وَعَلَيْكُمُ السَّلَامُ", "tr": {"bn": "ওয়া আলাইকুমুস সালাম", "en": "wa 'alaykumus-salaam"}, "mean": {"bn": "আপনাদের উপরও শান্তি বর্ষিত হোক (উত্তর)", "en": "And upon you be peace (the reply)"}},
        {"ar": "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ", "tr": {"bn": "আস্‌সালামু আলাইকুম ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহ", "en": "as-salaamu 'alaykum wa raḥmatullaahi wa barakaatuh"}, "mean": {"bn": "আপনাদের উপর শান্তি, আল্লাহর রহমত ও তাঁর বরকত বর্ষিত হোক", "en": "Peace be upon you, and the mercy of Allah and His blessings"}}
      ]},
      {"type": "tip", "kind": "memory", "bn": "উত্তর দেওয়ার সহজ নিয়ম: শুধু শব্দ দুটো **উল্টে দিন** আর সামনে {{وَ}} (এবং) লাগান — {{السَّلَامُ عَلَيْكُمْ}} ➜ {{وَعَلَيْكُمُ السَّلَامُ}}। আর উত্তর সমান বা আরও সুন্দর করে দেওয়াই উত্তম — তাই {{وَرَحْمَةُ اللّٰهِ}} যোগ করে দিন।", "en": "Easy rule for the reply: just **flip** the two words and put {{وَ}} (and) in front — {{السَّلَامُ عَلَيْكُمْ}} ➜ {{وَعَلَيْكُمُ السَّلَامُ}}. It is best to reply equally or more beautifully — so add {{وَرَحْمَةُ اللّٰهِ}}."},
      {"type": "vocab", "title": {"bn": "আল্লাহর স্মরণ", "en": "Remembering Allah"}, "items": [
        {"ar": "بِسْمِ اللّٰهِ", "tr": {"bn": "বিসমিল্লাহ", "en": "bismillaah"}, "mean": {"bn": "আল্লাহর নামে (শুরু করছি)", "en": "In the name of Allah"}, "example": {"ar": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ", "mean": {"bn": "পরম করুণাময়, অতি দয়ালু আল্লাহর নামে", "en": "In the name of Allah, the Most Merciful, the Especially Merciful"}, "ref": "1:1"}},
        {"ar": "الْحَمْدُ لِلّٰهِ", "tr": {"bn": "আলহামদু লিল্লাহ", "en": "al-ḥamdu lillaah"}, "mean": {"bn": "সব প্রশংসা আল্লাহর জন্য", "en": "All praise is for Allah"}, "root": "ح م د", "example": {"ar": "الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ", "mean": {"bn": "সব প্রশংসা আল্লাহর, যিনি সারা জগতের রব", "en": "All praise is for Allah, Lord of all the worlds"}, "ref": "1:2"}},
        {"ar": "سُبْحَانَ اللّٰهِ", "tr": {"bn": "সুবহানাল্লাহ", "en": "subḥaanallaah"}, "mean": {"bn": "আল্লাহ পবিত্র (সব দোষ-ত্রুটি থেকে)", "en": "Glory be to Allah (He is free of every flaw)"}},
        {"ar": "اللّٰهُ أَكْبَرُ", "tr": {"bn": "আল্লাহু আকবার", "en": "allaahu akbar"}, "mean": {"bn": "আল্লাহ সবচেয়ে বড়", "en": "Allah is the Greatest"}, "root": "ك ب ر"},
        {"ar": "أَسْتَغْفِرُ اللّٰهَ", "tr": {"bn": "আস্তাগফিরুল্লাহ", "en": "astaghfirullaah"}, "mean": {"bn": "আমি আল্লাহর কাছে ক্ষমা চাই", "en": "I ask Allah for forgiveness"}, "root": "غ ف ر"},
        {"ar": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ", "tr": {"bn": "লা হাওলা ওয়া লা কুওয়াতা ইল্লা বিল্লাহ", "en": "laa ḥawla wa laa quwwata illaa billaah"}, "mean": {"bn": "আল্লাহর সাহায্য ছাড়া কোনো শক্তি বা সামর্থ্য নেই", "en": "There is no power and no strength except through Allah"}}
      ]},
      {"type": "vocab", "title": {"bn": "আশা, প্রশংসা ও কৃতজ্ঞতা", "en": "Hope, admiration and thanks"}, "items": [
        {"ar": "إِنْ شَاءَ اللّٰهُ", "tr": {"bn": "ইন শা আল্লাহ", "en": "in shaaʾallaah"}, "mean": {"bn": "আল্লাহ চাইলে", "en": "If Allah wills"}},
        {"ar": "مَا شَاءَ اللّٰهُ", "tr": {"bn": "মা শা আল্লাহ", "en": "maa shaaʾallaah"}, "mean": {"bn": "আল্লাহ যা চেয়েছেন (তা-ই হয়েছে)", "en": "What Allah has willed (has happened)"}, "example": {"ar": "قُلْتَ مَا شَاءَ اللّٰهُ لَا قُوَّةَ إِلَّا بِاللّٰهِ", "mean": {"bn": "তুমি বলতে: আল্লাহ যা চেয়েছেন; আল্লাহ ছাড়া কোনো শক্তি নেই", "en": "You should have said: what Allah willed; there is no power except with Allah"}, "ref": "18:39"}},
        {"ar": "جَزَاكَ اللّٰهُ خَيْرًا", "tr": {"bn": "জাযাকাল্লাহু খাইরান", "en": "jazaakallaahu khayran"}, "mean": {"bn": "আল্লাহ আপনাকে উত্তম প্রতিদান দিন", "en": "May Allah reward you with good"}},
        {"ar": "وَإِيَّاكَ", "tr": {"bn": "ওয়া ইয়্যাকা", "en": "wa iyyaaka"}, "mean": {"bn": "আপনাকেও (জাযাকাল্লাহর উত্তরে)", "en": "And you too (reply to jazaakallaah)"}},
        {"ar": "بَارَكَ اللّٰهُ فِيكَ", "tr": {"bn": "বারাকাল্লাহু ফীক", "en": "baarakallaahu feek"}, "mean": {"bn": "আল্লাহ আপনার মধ্যে বরকত দিন", "en": "May Allah bless you"}, "root": "ب ر ك"},
        {"ar": "آمِينَ", "tr": {"bn": "আমীন", "en": "aameen"}, "mean": {"bn": "হে আল্লাহ, কবুল করুন", "en": "O Allah, accept (our prayer)"}}
      ]},
      {"type": "vocab", "title": {"bn": "কষ্টের সময় ও হাঁচি দিলে", "en": "Hard moments and sneezing"}, "items": [
        {"ar": "إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", "tr": {"bn": "ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিঊন", "en": "innaa lillaahi wa innaa ilayhi raaji'oon"}, "mean": {"bn": "আমরা আল্লাহরই, আর তাঁর কাছেই আমরা ফিরে যাব", "en": "We belong to Allah, and to Him we shall return"}, "example": {"ar": "إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", "mean": {"bn": "বিপদে ধৈর্যশীলরা এ কথা বলে", "en": "The patient say this when struck by hardship"}, "ref": "2:156"}},
        {"ar": "يَرْحَمُكَ اللّٰهُ", "tr": {"bn": "ইয়ারহামুকাল্লাহ", "en": "yarḥamukallaah"}, "mean": {"bn": "আল্লাহ আপনার উপর রহম করুন", "en": "May Allah have mercy on you"}, "root": "ر ح م"},
        {"ar": "يَهْدِيكُمُ اللّٰهُ وَيُصْلِحُ بَالَكُمْ", "tr": {"bn": "ইয়াহদীকুমুল্লাহু ওয়া ইউসলিহু বালাকুম", "en": "yahdeekumullaahu wa yuṣliḥu baalakum"}, "mean": {"bn": "আল্লাহ আপনাদের হিদায়াত দিন ও আপনাদের অবস্থা ভালো করে দিন", "en": "May Allah guide you and set your affairs right"}}
      ]},
      {"type": "table", "title": {"bn": "কখন কী বলবেন", "en": "When to say what"}, "head": [{"bn": "পরিস্থিতি", "en": "Situation"}, {"bn": "বলুন", "en": "Say"}, {"bn": "অর্থ", "en": "Meaning"}], "rows": [
        [{"bn": "কারো সাথে দেখা হলে", "en": "Meeting someone"}, "السَّلَامُ عَلَيْكُمْ", {"bn": "আপনাদের উপর শান্তি", "en": "Peace be upon you"}],
        [{"bn": "খাওয়া, পড়া বা যেকোনো ভালো কাজ শুরুর আগে", "en": "Before eating, reading or any good deed"}, "بِسْمِ اللّٰهِ", {"bn": "আল্লাহর নামে", "en": "In the name of Allah"}],
        [{"bn": "খাওয়ার পরে, ভালো খবর পেলে, কেউ কেমন আছেন জিজ্ঞেস করলে", "en": "After eating, on good news, when asked how you are"}, "الْحَمْدُ لِلّٰهِ", {"bn": "সব প্রশংসা আল্লাহর", "en": "All praise is for Allah"}],
        [{"bn": "ভবিষ্যতে কিছু করার কথা বললে", "en": "Talking about something you plan to do"}, "إِنْ شَاءَ اللّٰهُ", {"bn": "আল্লাহ চাইলে", "en": "If Allah wills"}],
        [{"bn": "সুন্দর কিছু দেখলে বা কারো প্রশংসা করলে", "en": "Seeing something lovely or praising someone"}, "مَا شَاءَ اللّٰهُ", {"bn": "আল্লাহ যা চেয়েছেন", "en": "What Allah has willed"}],
        [{"bn": "আশ্চর্য কিছু দেখলে বা শুনলে", "en": "Seeing or hearing something amazing"}, "سُبْحَانَ اللّٰهِ", {"bn": "আল্লাহ পবিত্র", "en": "Glory be to Allah"}],
        [{"bn": "ভুল হয়ে গেলে", "en": "After a mistake or sin"}, "أَسْتَغْفِرُ اللّٰهَ", {"bn": "আল্লাহর কাছে ক্ষমা চাই", "en": "I seek Allah's forgiveness"}],
        [{"bn": "কেউ উপকার করলে", "en": "When someone helps you"}, "جَزَاكَ اللّٰهُ خَيْرًا", {"bn": "আল্লাহ উত্তম প্রতিদান দিন", "en": "May Allah reward you well"}],
        [{"bn": "কাউকে দোয়া দিতে বা ধন্যবাদের উত্তরে", "en": "Blessing someone or answering thanks"}, "بَارَكَ اللّٰهُ فِيكَ", {"bn": "আল্লাহ বরকত দিন", "en": "May Allah bless you"}],
        [{"bn": "মৃত্যুর খবর বা কোনো বিপদ-ক্ষতিতে", "en": "News of a death, or any loss"}, "إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", {"bn": "আমরা আল্লাহর, তাঁর কাছেই ফিরব", "en": "We belong to Allah and return to Him"}],
        [{"bn": "কেউ হাঁচি দিয়ে আলহামদুলিল্লাহ বললে", "en": "Someone sneezes and says al-ḥamdu lillaah"}, "يَرْحَمُكَ اللّٰهُ", {"bn": "আল্লাহ আপনার উপর রহম করুন", "en": "May Allah have mercy on you"}]
      ]},
      {"type": "tip", "kind": "warn", "bn": "{{إِنْ شَاءَ اللّٰهُ}} লিখুন **তিনটি আলাদা শব্দে**। একসাথে জুড়ে {{إِنْشَاء}} লিখলে অর্থ দাঁড়ায় “তৈরি করা” বা “রচনা” — একেবারে অন্য জিনিস!", "en": "Write {{إِنْ شَاءَ اللّٰهُ}} as **three separate words**. Joined together as {{إِنْشَاء}} it means “creating” or “an essay” — something completely different!"},
      {"type": "tip", "kind": "memory", "bn": "শেষের ছোট অংশটি বলে দেয় আপনি কাকে বলছেন: {{ـكَ}} (কা) = একজন ছেলে, {{ـكِ}} (কি) = একজন মেয়ে, {{ـكُمْ}} (কুম) = অনেকজন। যেমন: {{جَزَاكَ اللّٰهُ}}, {{جَزَاكِ اللّٰهُ}}, {{جَزَاكُمُ اللّٰهُ}}।", "en": "The little ending tells who you are talking to: {{ـكَ}} (ka) = one male, {{ـكِ}} (ki) = one female, {{ـكُمْ}} (kum) = a group. E.g. {{جَزَاكَ اللّٰهُ}}, {{جَزَاكِ اللّٰهُ}}, {{جَزَاكُمُ اللّٰهُ}}."},
      {"type": "examples", "title": {"bn": "ছোট্ট দৃশ্য", "en": "Mini scenes"}, "items": [
        {"ar": "بَارَكَ اللّٰهُ فِيكِ", "tr": {"bn": "বারাকাল্লাহু ফীকি", "en": "baarakallaahu feeki"}, "mean": {"bn": "আল্লাহ তোমার মধ্যে বরকত দিন (মেয়েকে)", "en": "May Allah bless you (to a girl/woman)"}, "note": {"bn": "আম্মু মজার পিঠা বানিয়েছেন — তাঁকে এভাবে বলুন।", "en": "Mum made delicious pitha — say this to her."}, "hl": "فِيكِ"},
        {"ar": "جَزَاكُمُ اللّٰهُ خَيْرًا", "tr": {"bn": "জাযাকুমুল্লাহু খাইরান", "en": "jazaakumullaahu khayran"}, "mean": {"bn": "আল্লাহ আপনাদের উত্তম প্রতিদান দিন", "en": "May Allah reward you all with good"}, "note": {"bn": "পুরো ক্লাসকে ধন্যবাদ দিতে চাইলে।", "en": "To thank a whole class."}, "hl": "جَزَاكُمُ"},
        {"ar": "أَرَاكَ غَدًا إِنْ شَاءَ اللّٰهُ", "tr": {"bn": "আরাকা গাদান ইন শা আল্লাহ", "en": "araaka ghadan in shaaʾallaah"}, "mean": {"bn": "কাল তোমার সাথে দেখা হবে, ইন শা আল্লাহ", "en": "See you tomorrow, if Allah wills"}, "note": {"bn": "ভবিষ্যতের কথা — তাই ইন শা আল্লাহ।", "en": "It is about the future — so in shaaʾallaah."}, "hl": "إِنْ شَاءَ اللّٰهُ"}
      ]},
      {"type": "tip", "kind": "fun", "bn": "বাংলায় আমরা বলি “সালাম দাও”, “শোকর আলহামদুলিল্লাহ”, “বরকত হোক”, “রহমত” — এই সালাম, শুকর, বরকত, রহমত সবই আরবি শব্দ! {{سَلَام}} (শান্তি), {{شُكْر}} (কৃতজ্ঞতা), {{بَرَكَة}} (বরকত), {{رَحْمَة}} (দয়া)।", "en": "In Bangla we say “give salam”, “shukr alhamdulillah”, “barakat”, “rahmat” — salam, shukr, barakah and rahmah are all Arabic words! {{سَلَام}} (peace), {{شُكْر}} (thanks), {{بَرَكَة}} (blessing), {{رَحْمَة}} (mercy)."},
      {"type": "quiz", "items": [
        {"q": {"bn": "কেউ বলল {{السَّلَامُ عَلَيْكُمْ}} — আপনি কী বলবেন?", "en": "Someone says {{السَّلَامُ عَلَيْكُمْ}} — what do you reply?"}, "options": ["وَعَلَيْكُمُ السَّلَامُ", "إِنْ شَاءَ اللّٰهُ", "سُبْحَانَ اللّٰهِ", "آمِينَ"], "answer": 0},
        {"q": {"bn": "আপনার বন্ধু বলল, “কাল তোমার বাসায় আসব।” তার সাথে কোন বাক্য যোগ হওয়া উচিত?", "en": "Your friend says, “I will come to your house tomorrow.” Which phrase should go with it?"}, "options": ["إِنَّا لِلّٰهِ", "إِنْ شَاءَ اللّٰهُ", "يَرْحَمُكَ اللّٰهُ"], "answer": 1},
        {"q": {"bn": "{{أَسْتَغْفِرُ اللّٰهَ}} অর্থ কী?", "en": "What does {{أَسْتَغْفِرُ اللّٰهَ}} mean?"}, "options": [{"bn": "আল্লাহ সবচেয়ে বড়", "en": "Allah is the Greatest"}, {"bn": "আমি আল্লাহর কাছে ক্ষমা চাই", "en": "I ask Allah for forgiveness"}, {"bn": "আল্লাহর নামে", "en": "In the name of Allah"}], "answer": 1},
        {"q": {"bn": "কেউ হাঁচি দিয়ে {{الْحَمْدُ لِلّٰهِ}} বলল। আপনি কী বলবেন?", "en": "Someone sneezes and says {{الْحَمْدُ لِلّٰهِ}}. What do you say?"}, "options": ["مَا شَاءَ اللّٰهُ", "يَرْحَمُكَ اللّٰهُ", "بِسْمِ اللّٰهِ", "وَإِيَّاكَ"], "answer": 1},
        {"q": {"bn": "আপনার বোন আপনাকে সাহায্য করল। তাকে কোনটি বলবেন?", "en": "Your sister helped you. What do you say to her?"}, "options": ["جَزَاكَ اللّٰهُ خَيْرًا", "جَزَاكِ اللّٰهُ خَيْرًا", "جَزَاكُمُ اللّٰهُ خَيْرًا"], "answer": 1, "explain": {"bn": "একজন মেয়েকে বলতে {{ـكِ}} (কি) লাগে।", "en": "For one female we use {{ـكِ}} (ki)."}},
        {"q": {"bn": "কারো মৃত্যুর খবর শুনলে কোনটি বলা হয়?", "en": "What is said on hearing of someone's death?"}, "options": ["اللّٰهُ أَكْبَرُ", "إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", "مَا شَاءَ اللّٰهُ"], "answer": 1},
        {"q": {"bn": "বন্ধুর নতুন সুন্দর বাগান দেখে কী বলবেন?", "en": "You see your friend's lovely new garden. What do you say?"}, "options": ["مَا شَاءَ اللّٰهُ", "أَسْتَغْفِرُ اللّٰهَ", "وَعَلَيْكُمُ السَّلَامُ"], "answer": 0, "explain": {"bn": "সূরা কাহফের (১৮:৩৯) বাগানওয়ালার ঘটনাতেও এই শিক্ষা আছে।", "en": "The story of the garden owner in Surah al-Kahf (18:39) teaches exactly this."}}
      ]}
    ]
  },
  {
    "id": "daily-greetings",
    "icon": "س",
    "title": {"bn": "শুভেচ্ছা ও নিজের পরিচয়", "en": "Greetings & Introducing Yourself"},
    "subtitle": {"bn": "সুপ্রভাত থেকে বিদায় — প্রথম আলাপের সব কথা", "en": "From good morning to goodbye — your first conversation"},
    "minutes": 15,
    "goals": [
      {"bn": "সকাল-সন্ধ্যার শুভেচ্ছা ও তার উত্তর", "en": "Morning and evening greetings with replies"},
      {"bn": "কেমন আছেন, নাম কী, কোথা থেকে — জিজ্ঞেস ও উত্তর", "en": "Ask and answer: how are you, your name, where from"},
      {"bn": "একটি ছোট সংলাপ পড়া ও অভিনয় করা", "en": "Read and act out a short dialogue"}
    ],
    "blocks": [
      {"type": "text", "bn": "নতুন কারো সাথে দেখা? চিন্তা নেই! মাত্র দশ-বারোটি বাক্য শিখলেই আপনি আরবিতে পুরো একটা পরিচয়-আলাপ করতে পারবেন। সালাম দিয়ে শুরু করুন, তারপর এই বাক্যগুলো কাজে লাগান।", "en": "Meeting someone new? No worries! With just ten or twelve sentences you can hold a whole introduction in Arabic. Start with salam, then use these."},
      {"type": "vocab", "title": {"bn": "শুভেচ্ছা", "en": "Greetings"}, "items": [
        {"ar": "صَبَاحُ الْخَيْرِ", "tr": {"bn": "সাবাহুল খাইর", "en": "ṣabaaḥul-khayr"}, "mean": {"bn": "সুপ্রভাত (সকালের শুভেচ্ছা)", "en": "Good morning"}},
        {"ar": "صَبَاحُ النُّورِ", "tr": {"bn": "সাবাহুন নূর", "en": "ṣabaaḥun-noor"}, "mean": {"bn": "আলোকিত সকাল (সুপ্রভাতের উত্তর)", "en": "Morning of light (reply to good morning)"}},
        {"ar": "مَسَاءُ الْخَيْرِ", "tr": {"bn": "মাসাউল খাইর", "en": "masaaʾul-khayr"}, "mean": {"bn": "শুভ সন্ধ্যা", "en": "Good evening"}},
        {"ar": "مَسَاءُ النُّورِ", "tr": {"bn": "মাসাউন নূর", "en": "masaaʾun-noor"}, "mean": {"bn": "আলোকিত সন্ধ্যা (উত্তর)", "en": "Evening of light (reply)"}},
        {"ar": "مَرْحَبًا", "tr": {"bn": "মারহাবান", "en": "marḥaban"}, "mean": {"bn": "স্বাগতম / হ্যালো", "en": "Hello / welcome"}},
        {"ar": "أَهْلًا وَسَهْلًا", "tr": {"bn": "আহলান ওয়া সাহলান", "en": "ahlan wa sahlan"}, "mean": {"bn": "স্বাগতম, আপন মনে করুন", "en": "Welcome, make yourself at home"}}
      ]},
      {"type": "tip", "kind": "memory", "bn": "খেয়াল করুন: উত্তরে শুধু {{الْخَيْرِ}} (কল্যাণ) বদলে {{النُّورِ}} (আলো) হয়ে যায়। “নূর” শব্দটি তো আমরা চিনি — নূরজাহান, নূরানী!", "en": "Notice: in the reply, {{الْخَيْرِ}} (goodness) simply becomes {{النُّورِ}} (light). We already know “noor” — as in Noor Jahan, Noorani!"},
      {"type": "vocab", "title": {"bn": "পরিচয়ের বাক্য", "en": "Introduction sentences"}, "items": [
        {"ar": "كَيْفَ حَالُكَ؟", "tr": {"bn": "কাইফা হালুকা?", "en": "kayfa ḥaaluka?"}, "mean": {"bn": "কেমন আছেন? (ছেলেকে)", "en": "How are you? (to a male)"}},
        {"ar": "كَيْفَ حَالُكِ؟", "tr": {"bn": "কাইফা হালুকি?", "en": "kayfa ḥaaluki?"}, "mean": {"bn": "কেমন আছেন? (মেয়েকে)", "en": "How are you? (to a female)"}},
        {"ar": "أَنَا بِخَيْرٍ، وَالْحَمْدُ لِلّٰهِ", "tr": {"bn": "আনা বিখাইর, ওয়াল হামদু লিল্লাহ", "en": "ana bikhayr, wal-ḥamdu lillaah"}, "mean": {"bn": "আমি ভালো আছি, আলহামদুলিল্লাহ", "en": "I am well, praise be to Allah"}},
        {"ar": "مَا اسْمُكَ؟", "tr": {"bn": "মাসমুকা?", "en": "masmuka?"}, "mean": {"bn": "আপনার নাম কী?", "en": "What is your name?"}},
        {"ar": "اِسْمِي ...", "tr": {"bn": "ইসমী ...", "en": "ismee ..."}, "mean": {"bn": "আমার নাম ...", "en": "My name is ..."}},
        {"ar": "مِنْ أَيْنَ أَنْتَ؟", "tr": {"bn": "মিন আইনা আন্তা?", "en": "min ayna anta?"}, "mean": {"bn": "আপনি কোথা থেকে এসেছেন?", "en": "Where are you from?"}},
        {"ar": "أَنَا مِنْ بَنْغْلَادِيشَ", "tr": {"bn": "আনা মিন বাংলাদেশ", "en": "ana min banghlaadeesh"}, "mean": {"bn": "আমি বাংলাদেশ থেকে", "en": "I am from Bangladesh"}},
        {"ar": "تَشَرَّفْنَا", "tr": {"bn": "তাশাররাফনা", "en": "tasharrafnaa"}, "mean": {"bn": "আপনার সাথে পরিচিত হয়ে খুশি হলাম", "en": "Pleased to meet you (lit. we are honoured)"}},
        {"ar": "شُكْرًا", "tr": {"bn": "শুকরান", "en": "shukran"}, "mean": {"bn": "ধন্যবাদ", "en": "Thank you"}, "root": "ش ك ر"},
        {"ar": "عَفْوًا", "tr": {"bn": "আফওয়ান", "en": "'afwan"}, "mean": {"bn": "কোনো ব্যাপার না / দুঃখিত", "en": "You're welcome / excuse me"}},
        {"ar": "مَعَ السَّلَامَةِ", "tr": {"bn": "মাআস সালামাহ", "en": "ma'as-salaamah"}, "mean": {"bn": "নিরাপদে থাকুন (বিদায়)", "en": "Goodbye (lit. with safety)"}},
        {"ar": "إِلَى اللِّقَاءِ", "tr": {"bn": "ইলাল লিকা", "en": "ilal-liqaaʾ"}, "mean": {"bn": "আবার দেখা হবে", "en": "See you again"}}
      ]},
      {"type": "compare", "title": {"bn": "ছেলে না মেয়ে?", "en": "Male or female?"}, "items": [
        {"ar": "أَنْتَ", "label": {"bn": "আন্তা — তুমি (ছেলে)", "en": "anta — you (male)"}, "desc": {"bn": "শেষে যবর: {{مِنْ أَيْنَ أَنْتَ؟}}", "en": "Ends with fatha: {{مِنْ أَيْنَ أَنْتَ؟}}"}},
        {"ar": "أَنْتِ", "label": {"bn": "আন্তি — তুমি (মেয়ে)", "en": "anti — you (female)"}, "desc": {"bn": "শেষে যের: {{مِنْ أَيْنَ أَنْتِ؟}}", "en": "Ends with kasra: {{مِنْ أَيْنَ أَنْتِ؟}}"}}
      ]},
      {"type": "tip", "kind": "tip", "bn": "{{مَا اسْمُكَ؟}}-তে {{ا}} পড়া হয় না — {{مَا}} সরাসরি {{سْ}}-এর সাথে মিলে যায়: “মাসমুকা”। কিন্তু বাক্যের শুরুতে {{اِسْمِي}} বললে “ই” উচ্চারণ করতে হয়।", "en": "In {{مَا اسْمُكَ؟}} the {{ا}} is silent — {{مَا}} joins straight onto {{سْ}}: “masmuka”. But at the very start of a sentence, {{اِسْمِي}} begins with an “i” sound."},
      {"type": "steps", "title": {"bn": "সংলাপ: মসজিদের বাইরে নতুন পরিচয়", "en": "Dialogue: a new friend outside the masjid"}, "items": [
        {"title": {"bn": "আহমাদ", "en": "Ahmad"}, "ar": "السَّلَامُ عَلَيْكُمْ.", "tr": {"bn": "আস্‌সালামু আলাইকুম।", "en": "as-salaamu 'alaykum."}, "mean": {"bn": "আসসালামু আলাইকুম।", "en": "Peace be upon you."}},
        {"title": {"bn": "যায়েদ", "en": "Zayd"}, "ar": "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللّٰهِ.", "tr": {"bn": "ওয়া আলাইকুমুস সালাম ওয়া রাহমাতুল্লাহ।", "en": "wa 'alaykumus-salaam wa raḥmatullaah."}, "mean": {"bn": "আপনার উপরও শান্তি ও আল্লাহর রহমত।", "en": "And upon you be peace and Allah's mercy."}},
        {"title": {"bn": "আহমাদ", "en": "Ahmad"}, "ar": "كَيْفَ حَالُكَ؟", "tr": {"bn": "কাইফা হালুকা?", "en": "kayfa ḥaaluka?"}, "mean": {"bn": "কেমন আছেন?", "en": "How are you?"}},
        {"title": {"bn": "যায়েদ", "en": "Zayd"}, "ar": "أَنَا بِخَيْرٍ، وَالْحَمْدُ لِلّٰهِ. وَأَنْتَ؟", "tr": {"bn": "আনা বিখাইর, ওয়াল হামদু লিল্লাহ। ওয়া আন্তা?", "en": "ana bikhayr, wal-ḥamdu lillaah. wa anta?"}, "mean": {"bn": "ভালো আছি, আলহামদুলিল্লাহ। আর আপনি?", "en": "I'm well, praise be to Allah. And you?"}},
        {"title": {"bn": "আহমাদ", "en": "Ahmad"}, "ar": "بِخَيْرٍ، الْحَمْدُ لِلّٰهِ. مَا اسْمُكَ؟", "tr": {"bn": "বিখাইর, আলহামদু লিল্লাহ। মাসমুকা?", "en": "bikhayr, al-ḥamdu lillaah. masmuka?"}, "mean": {"bn": "ভালো, আলহামদুলিল্লাহ। আপনার নাম কী?", "en": "Well, praise be to Allah. What is your name?"}},
        {"title": {"bn": "যায়েদ", "en": "Zayd"}, "ar": "اِسْمِي زَيْدٌ. وَمَا اسْمُكَ؟", "tr": {"bn": "ইসমী যাইদ। ওয়া মাসমুকা?", "en": "ismee zayd. wa masmuka?"}, "mean": {"bn": "আমার নাম যায়েদ। আর আপনার নাম?", "en": "My name is Zayd. And your name?"}},
        {"title": {"bn": "আহমাদ", "en": "Ahmad"}, "ar": "اِسْمِي أَحْمَدُ. مِنْ أَيْنَ أَنْتَ؟", "tr": {"bn": "ইসমী আহমাদ। মিন আইনা আন্তা?", "en": "ismee aḥmad. min ayna anta?"}, "mean": {"bn": "আমার নাম আহমাদ। আপনি কোথা থেকে?", "en": "My name is Ahmad. Where are you from?"}},
        {"title": {"bn": "যায়েদ", "en": "Zayd"}, "ar": "أَنَا مِنْ مِصْرَ. وَأَنْتَ؟", "tr": {"bn": "আনা মিন মিসর। ওয়া আন্তা?", "en": "ana min miṣr. wa anta?"}, "mean": {"bn": "আমি মিশর থেকে। আর আপনি?", "en": "I am from Egypt. And you?"}},
        {"title": {"bn": "আহমাদ", "en": "Ahmad"}, "ar": "أَنَا مِنْ بَنْغْلَادِيشَ.", "tr": {"bn": "আনা মিন বাংলাদেশ।", "en": "ana min banghlaadeesh."}, "mean": {"bn": "আমি বাংলাদেশ থেকে।", "en": "I am from Bangladesh."}},
        {"title": {"bn": "যায়েদ", "en": "Zayd"}, "ar": "تَشَرَّفْنَا!", "tr": {"bn": "তাশাররাফনা!", "en": "tasharrafnaa!"}, "mean": {"bn": "পরিচিত হয়ে খুশি হলাম!", "en": "Pleased to meet you!"}},
        {"title": {"bn": "আহমাদ", "en": "Ahmad"}, "ar": "وَأَنَا كَذٰلِكَ. مَعَ السَّلَامَةِ.", "tr": {"bn": "ওয়া আনা কাযালিক। মাআস সালামাহ।", "en": "wa ana kadhaalik. ma'as-salaamah."}, "mean": {"bn": "আমিও। আল্লাহ হাফেজ।", "en": "Me too. Goodbye."}}
      ]},
      {"type": "tip", "kind": "fun", "bn": "বাংলায় “শুকরিয়া” আর “শোকর” — দুটোই আরবি {{شُكْر}} থেকে এসেছে। আর অতিথি এলে আমরা যে বলি “মারহাবা!” — সেটাও খাঁটি আরবি {{مَرْحَبًا}}!", "en": "The Bangla “shukriya” and “shokor” both come from Arabic {{شُكْر}}. And when a guest arrives and we say “marhaba!” — that's pure Arabic {{مَرْحَبًا}}!"},
      {"type": "examples", "title": {"bn": "নিজের কথা বলুন", "en": "Talk about yourself"}, "items": [
        {"ar": "اِسْمِي فَاطِمَةُ", "tr": {"bn": "ইসমী ফাতিমাহ", "en": "ismee faaṭimah"}, "mean": {"bn": "আমার নাম ফাতিমা", "en": "My name is Fatimah"}, "hl": "اِسْمِي"},
        {"ar": "أَنَا مِنْ دَاكَا", "tr": {"bn": "আনা মিন ঢাকা", "en": "ana min daakaa"}, "mean": {"bn": "আমি ঢাকা থেকে", "en": "I am from Dhaka"}, "note": {"bn": "আরবিতে ‘ঢ’ নেই, তাই {{د}} দিয়ে লেখা হয়।", "en": "Arabic has no ‘dh’ (ঢ) sound, so it is written with {{د}}."}, "hl": "مِنْ"},
        {"ar": "أَنَا طَالِبٌ", "tr": {"bn": "আনা তালিব", "en": "ana ṭaalib"}, "mean": {"bn": "আমি একজন ছাত্র", "en": "I am a student (male)"}, "hl": "طَالِبٌ"},
        {"ar": "أَنَا طَالِبَةٌ", "tr": {"bn": "আনা তালিবাহ", "en": "ana ṭaalibah"}, "mean": {"bn": "আমি একজন ছাত্রী", "en": "I am a student (female)"}, "hl": "طَالِبَةٌ"}
      ]},
      {"type": "quiz", "items": [
        {"q": {"bn": "কেউ বলল {{صَبَاحُ الْخَيْرِ}}। সুন্দর উত্তর কোনটি?", "en": "Someone says {{صَبَاحُ الْخَيْرِ}}. What is the nice reply?"}, "options": ["مَسَاءُ الْخَيْرِ", "صَبَاحُ النُّورِ", "مَعَ السَّلَامَةِ"], "answer": 1},
        {"q": {"bn": "“আপনার নাম কী?” আরবিতে কোনটি?", "en": "Which means “What is your name?”"}, "options": ["مِنْ أَيْنَ أَنْتَ؟", "كَيْفَ حَالُكَ؟", "مَا اسْمُكَ؟"], "answer": 2},
        {"q": {"bn": "একজন মেয়েকে “কেমন আছেন?” জিজ্ঞেস করতে কোনটি বলবেন?", "en": "To ask a woman “How are you?” you say:"}, "options": ["كَيْفَ حَالُكَ؟", "كَيْفَ حَالُكِ؟", "كَيْفَ حَالُكُمْ؟"], "answer": 1},
        {"q": {"bn": "{{تَشَرَّفْنَا}} কখন বলা হয়?", "en": "When do you say {{تَشَرَّفْنَا}}?"}, "options": [{"bn": "কারো সাথে প্রথম পরিচয়ে", "en": "When meeting someone for the first time"}, {"bn": "খাবার শুরুর আগে", "en": "Before starting a meal"}, {"bn": "ঘুমাতে যাওয়ার আগে", "en": "Before going to sleep"}], "answer": 0},
        {"q": {"bn": "বিদায় নেওয়ার সময় কোনটি বলবেন?", "en": "Which do you say when leaving?"}, "options": ["أَهْلًا وَسَهْلًا", "مَعَ السَّلَامَةِ", "مَرْحَبًا"], "answer": 1},
        {"q": {"bn": "{{أَنَا مِنْ بَنْغْلَادِيشَ}} অর্থ কী?", "en": "What does {{أَنَا مِنْ بَنْغْلَادِيشَ}} mean?"}, "options": [{"bn": "আমি বাংলাদেশে যাব", "en": "I will go to Bangladesh"}, {"bn": "আমি বাংলাদেশ থেকে", "en": "I am from Bangladesh"}, {"bn": "বাংলাদেশ সুন্দর", "en": "Bangladesh is beautiful"}], "answer": 1},
        {"q": {"bn": "কেউ {{شُكْرًا}} বললে উত্তরে কী বলা যায়?", "en": "Someone says {{شُكْرًا}}. What can you reply?"}, "options": ["عَفْوًا", "صَبَاحُ النُّورِ", "اِسْمِي"], "answer": 0}
      ]}
    ]
  },
  {
    "id": "daily-numbers",
    "icon": "١٢٣",
    "title": {"bn": "সংখ্যা ও গণনা", "en": "Numbers & Counting"},
    "subtitle": {"bn": "০ থেকে ১০০০ — আরবি অঙ্ক আর বাংলা অঙ্কের মজার আত্মীয়তা", "en": "0 to 1000 — and the surprising family link with Bangla digits"},
    "minutes": 20,
    "goals": [
      {"bn": "আরবি অঙ্ক ٠–٩ চেনা ও লেখা", "en": "Recognise and write the Arabic digits ٠–٩"},
      {"bn": "০ থেকে ২০ পর্যন্ত আরবিতে গোনা", "en": "Count from 0 to 20 in Arabic"},
      {"bn": "দশক, একশো ও এক হাজার বলা", "en": "Say the tens, one hundred and one thousand"},
      {"bn": "২১, ৩৫-এর মতো সংখ্যা তৈরি করা", "en": "Build numbers like 21 and 35"}
    ],
    "blocks": [
      {"type": "text", "bn": "একটা মজার রহস্য দিয়ে শুরু করি: ইংরেজিতে 1, 2, 3-কে বলে “Arabic numerals”, অথচ আরবরা নিজেরা লেখে ٢، ١، ٣ আর এগুলোকে বলে “হিন্দি অঙ্ক” ({{أَرْقَامٌ هِنْدِيَّةٌ}})! কারণ — শূন্যসহ এই দশ অঙ্কের পদ্ধতি জন্মেছিল **ভারতবর্ষে**, আরবরা তা শিখে উন্নত করে, তারপর ইউরোপে পৌঁছায়। আর আমাদের বাংলা অঙ্ক ০১২৩... এসেছে সেই একই ভারতীয় পরিবার থেকে। তাই আরবি, বাংলা আর ইংরেজি অঙ্ক — তিনজনই আসলে **চাচাতো ভাই**!", "en": "Let's start with a fun puzzle: in English 1, 2, 3 are called “Arabic numerals”, yet Arabs themselves write ١، ٢، ٣ and call them “Hindi numerals” ({{أَرْقَامٌ هِنْدِيَّةٌ}})! Why? The ten-digit system with zero was born in **India**, Arab scholars learned and developed it, and from them it reached Europe. Our Bangla digits ০১২৩... come from the same Indian family. So Arabic, Bangla and English digits are really **cousins**!"},
      {"type": "table", "title": {"bn": "তিন চাচাতো ভাই: অঙ্ক মিলিয়ে দেখুন", "en": "Three cousins: compare the digits"}, "head": [{"bn": "মান", "en": "Value"}, {"bn": "বাংলা", "en": "Bangla"}, {"bn": "আরবি অঙ্ক", "en": "Arabic digit"}, {"bn": "আরবি নাম", "en": "Arabic name"}], "rows": [
        [{"bn": "শূন্য", "en": "zero"}, "০", "٠", "صِفْرٌ"],
        [{"bn": "এক", "en": "one"}, "১", "١", "وَاحِدٌ"],
        [{"bn": "দুই", "en": "two"}, "২", "٢", "اِثْنَانِ"],
        [{"bn": "তিন", "en": "three"}, "৩", "٣", "ثَلَاثَةٌ"],
        [{"bn": "চার", "en": "four"}, "৪", "٤", "أَرْبَعَةٌ"],
        [{"bn": "পাঁচ", "en": "five"}, "৫", "٥", "خَمْسَةٌ"],
        [{"bn": "ছয়", "en": "six"}, "৬", "٦", "سِتَّةٌ"],
        [{"bn": "সাত", "en": "seven"}, "৭", "٧", "سَبْعَةٌ"],
        [{"bn": "আট", "en": "eight"}, "৮", "٨", "ثَمَانِيَةٌ"],
        [{"bn": "নয়", "en": "nine"}, "৯", "٩", "تِسْعَةٌ"],
        [{"bn": "দশ", "en": "ten"}, "১০", "١٠", "عَشَرَةٌ"]
      ]},
      {"type": "tip", "kind": "warn", "bn": "**ফাঁদ থেকে সাবধান!** আরবি {{٥}} (পাঁচ) দেখতে আমাদের বাংলা শূন্য ০-এর মতো গোল! আর আরবিতে শূন্য হলো ছোট্ট একটি বিন্দু {{٠}}। মনে রাখুন: **আরবিতে গোল = পাঁচ, বিন্দু = শূন্য।** আরও একটি: বাংলা ৪ দেখতে ইংরেজি 8-এর মতো, আর আরবি {{٨}} (আট) দেখতে উল্টো V-এর মতো।", "en": "**Watch out for the trap!** The Arabic {{٥}} (five) is round like our Bangla zero ০! And the Arabic zero is just a tiny dot {{٠}}. Remember: **in Arabic, circle = five, dot = zero.** One more: Bangla ৪ looks like English 8, while Arabic {{٨}} (eight) looks like an upside-down V."},
      {"type": "tip", "kind": "memory", "bn": "চেহারার মিল খুঁজুন: আরবি {{٩}} আর বাংলা ৯ — দুটোতেই উপরে একটা গোল মাথা। আরবি {{٧}} (সাত) দেখতে V, আর {{٨}} (আট) তার উল্টো — যেন সাত উল্টে আট হয়ে গেল!", "en": "Look for family faces: Arabic {{٩}} and Bangla ৯ both have a round head on top. Arabic {{٧}} (seven) looks like a V, and {{٨}} (eight) is its upside-down twin — as if seven flipped over into eight!"},
      {"type": "tip", "kind": "fun", "bn": "আরবি লেখা ডান থেকে বামে চলে, কিন্তু **সংখ্যা লেখা হয় বাম থেকে ডানে** — ঠিক বাংলার মতো! তাই {{٢٠٢٥}} মানে ২০২৫।", "en": "Arabic text runs right to left, but **numbers are written left to right** — just like Bangla! So {{٢٠٢٥}} means 2025."},
      {"type": "vocab", "title": {"bn": "০ থেকে ১০", "en": "0 to 10"}, "items": [
        {"ar": "صِفْرٌ", "tr": {"bn": "সিফর", "en": "ṣifr"}, "mean": {"bn": "শূন্য (০)", "en": "zero (0)"}},
        {"ar": "وَاحِدٌ", "tr": {"bn": "ওয়াহিদ", "en": "waaḥid"}, "mean": {"bn": "এক (১)", "en": "one (1)"}, "example": {"ar": "وَإِلٰهُكُمْ إِلٰهٌ وَاحِدٌ", "mean": {"bn": "আর তোমাদের ইলাহ একজনই ইলাহ", "en": "And your god is One God"}, "ref": "2:163"}},
        {"ar": "اِثْنَانِ", "tr": {"bn": "ইসনান", "en": "ithnaan"}, "mean": {"bn": "দুই (২)", "en": "two (2)"}},
        {"ar": "ثَلَاثَةٌ", "tr": {"bn": "সালাসাহ", "en": "thalaathah"}, "mean": {"bn": "তিন (৩)", "en": "three (3)"}},
        {"ar": "أَرْبَعَةٌ", "tr": {"bn": "আরবাআহ", "en": "arba'ah"}, "mean": {"bn": "চার (৪)", "en": "four (4)"}},
        {"ar": "خَمْسَةٌ", "tr": {"bn": "খামসাহ", "en": "khamsah"}, "mean": {"bn": "পাঁচ (৫)", "en": "five (5)"}},
        {"ar": "سِتَّةٌ", "tr": {"bn": "সিত্তাহ", "en": "sittah"}, "mean": {"bn": "ছয় (৬)", "en": "six (6)"}},
        {"ar": "سَبْعَةٌ", "tr": {"bn": "সাবআহ", "en": "sab'ah"}, "mean": {"bn": "সাত (৭)", "en": "seven (7)"}},
        {"ar": "ثَمَانِيَةٌ", "tr": {"bn": "সামানিয়াহ", "en": "thamaaniyah"}, "mean": {"bn": "আট (৮)", "en": "eight (8)"}},
        {"ar": "تِسْعَةٌ", "tr": {"bn": "তিসআহ", "en": "tis'ah"}, "mean": {"bn": "নয় (৯)", "en": "nine (9)"}},
        {"ar": "عَشَرَةٌ", "tr": {"bn": "আশারাহ", "en": "'asharah"}, "mean": {"bn": "দশ (১০)", "en": "ten (10)"}, "example": {"ar": "تِلْكَ عَشَرَةٌ كَامِلَةٌ", "mean": {"bn": "এই হলো পূর্ণ দশ", "en": "That is ten complete (days)"}, "ref": "2:196"}}
      ]},
      {"type": "tip", "kind": "fun", "bn": "“আশারায়ে মুবাশশারা” (জান্নাতের সুসংবাদপ্রাপ্ত দশ সাহাবি) কথাটির “আশারা” মানেই দশ, {{عَشَرَة}}!", "en": "The phrase “al-'ashara al-mubashshara” (the ten Companions given glad tidings of Paradise) — that “'ashara” is exactly {{عَشَرَة}}, ten!"},
      {"type": "table", "title": {"bn": "১১ থেকে ২০", "en": "11 to 20"}, "head": [{"bn": "সংখ্যা", "en": "Number"}, {"bn": "আরবি", "en": "Arabic"}, {"bn": "উচ্চারণ", "en": "Pronunciation"}], "rows": [
        ["١١", "أَحَدَ عَشَرَ", {"bn": "আহাদা আশার", "en": "aḥada 'ashar"}],
        ["١٢", "اِثْنَا عَشَرَ", {"bn": "ইসনা আশার", "en": "ithnaa 'ashar"}],
        ["١٣", "ثَلَاثَةَ عَشَرَ", {"bn": "সালাসাতা আশার", "en": "thalaathata 'ashar"}],
        ["١٤", "أَرْبَعَةَ عَشَرَ", {"bn": "আরবাআতা আশার", "en": "arba'ata 'ashar"}],
        ["١٥", "خَمْسَةَ عَشَرَ", {"bn": "খামসাতা আশার", "en": "khamsata 'ashar"}],
        ["١٦", "سِتَّةَ عَشَرَ", {"bn": "সিত্তাতা আশার", "en": "sittata 'ashar"}],
        ["١٧", "سَبْعَةَ عَشَرَ", {"bn": "সাবআতা আশার", "en": "sab'ata 'ashar"}],
        ["١٨", "ثَمَانِيَةَ عَشَرَ", {"bn": "সামানিয়াতা আশার", "en": "thamaaniyata 'ashar"}],
        ["١٩", "تِسْعَةَ عَشَرَ", {"bn": "তিসআতা আশার", "en": "tis'ata 'ashar"}],
        ["٢٠", "عِشْرُونَ", {"bn": "ইশরূন", "en": "'ishroon"}]
      ]},
      {"type": "tip", "kind": "memory", "bn": "১৩ থেকে ১৯ বানানো খুব সহজ: **একক + {{عَشَرَ}}**। যেমন {{خَمْسَةَ}} (পাঁচ) + {{عَشَرَ}} (দশ) = পনেরো। শুধু ১১ ({{أَحَدَ عَشَرَ}}) আর ১২ ({{اِثْنَا عَشَرَ}}) একটু আলাদা — এ দুটো মুখস্থ করে নিন।", "en": "13 to 19 are easy: **unit + {{عَشَرَ}}**. For example {{خَمْسَةَ}} (five) + {{عَشَرَ}} (ten) = fifteen. Only 11 ({{أَحَدَ عَشَرَ}}) and 12 ({{اِثْنَا عَشَرَ}}) are a little different — just memorise those two."},
      {"type": "examples", "title": {"bn": "কুরআনে সংখ্যা", "en": "A number in the Quran"}, "items": [
        {"ar": "إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا", "tr": {"bn": "ইন্নী রাআইতু আহাদা আশারা কাওকাবা", "en": "innee ra'aytu aḥada 'ashara kawkaban"}, "mean": {"bn": "আমি (স্বপ্নে) এগারোটি তারা দেখেছি (১২:৪)", "en": "I saw eleven stars (12:4)"}, "note": {"bn": "ইউসুফ (আ.)-এর স্বপ্নের কথা — এগারো তারা মানে তাঁর এগারো ভাই।", "en": "Prophet Yusuf's dream — the eleven stars were his eleven brothers."}, "hl": "أَحَدَ عَشَرَ"}
      ]},
      {"type": "vocab", "title": {"bn": "দশক, শত ও হাজার", "en": "Tens, hundred and thousand"}, "items": [
        {"ar": "عِشْرُونَ", "tr": {"bn": "ইশরূন", "en": "'ishroon"}, "mean": {"bn": "বিশ (২০)", "en": "twenty (20)"}},
        {"ar": "ثَلَاثُونَ", "tr": {"bn": "সালাসূন", "en": "thalaathoon"}, "mean": {"bn": "ত্রিশ (৩০)", "en": "thirty (30)"}},
        {"ar": "أَرْبَعُونَ", "tr": {"bn": "আরবাঊন", "en": "arba'oon"}, "mean": {"bn": "চল্লিশ (৪০)", "en": "forty (40)"}},
        {"ar": "خَمْسُونَ", "tr": {"bn": "খামসূন", "en": "khamsoon"}, "mean": {"bn": "পঞ্চাশ (৫০)", "en": "fifty (50)"}},
        {"ar": "سِتُّونَ", "tr": {"bn": "সিত্তূন", "en": "sittoon"}, "mean": {"bn": "ষাট (৬০)", "en": "sixty (60)"}},
        {"ar": "سَبْعُونَ", "tr": {"bn": "সাবঊন", "en": "sab'oon"}, "mean": {"bn": "সত্তর (৭০)", "en": "seventy (70)"}},
        {"ar": "ثَمَانُونَ", "tr": {"bn": "সামানূন", "en": "thamaanoon"}, "mean": {"bn": "আশি (৮০)", "en": "eighty (80)"}},
        {"ar": "تِسْعُونَ", "tr": {"bn": "তিসঊন", "en": "tis'oon"}, "mean": {"bn": "নব্বই (৯০)", "en": "ninety (90)"}},
        {"ar": "مِائَةٌ", "tr": {"bn": "মিআহ", "en": "miʾah"}, "mean": {"bn": "একশো (১০০)", "en": "one hundred (100)"}},
        {"ar": "أَلْفٌ", "tr": {"bn": "আলফ", "en": "alf"}, "mean": {"bn": "এক হাজার (১০০০)", "en": "one thousand (1000)"}, "example": {"ar": "لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ", "mean": {"bn": "কদরের রাত হাজার মাসের চেয়েও উত্তম", "en": "The Night of Decree is better than a thousand months"}, "ref": "97:3"}}
      ]},
      {"type": "tip", "kind": "memory", "bn": "দশকগুলোর ছন্দ শুনুন: সবগুলোর শেষে **“-ঊন”** ({{ـُونَ}})। তিন {{ثَلَاثَة}} ➜ ত্রিশ {{ثَلَاثُونَ}}, চার {{أَرْبَعَة}} ➜ চল্লিশ {{أَرْبَعُونَ}}। শুধু বিশ ({{عِشْرُونَ}}) এসেছে দশ ({{عَشَرَة}}) থেকে।", "en": "Hear the rhythm of the tens: they all end in **“-oon”** ({{ـُونَ}}). Three {{ثَلَاثَة}} ➜ thirty {{ثَلَاثُونَ}}, four {{أَرْبَعَة}} ➜ forty {{أَرْبَعُونَ}}. Only twenty ({{عِشْرُونَ}}) comes from ten ({{عَشَرَة}})."},
      {"type": "tip", "kind": "warn", "bn": "{{مِائَةٌ}} বানানে একটি {{ا}} আছে, কিন্তু সেটা **পড়া হয় না** — উচ্চারণ “মিআহ”। অনেক জায়গায় {{مِئَةٌ}} লেখা হয়, অর্থ একই।", "en": "{{مِائَةٌ}} is spelled with an {{ا}}, but it is **silent** — say “mi'ah”. It is often written {{مِئَةٌ}} too; same meaning."},
      {"type": "examples", "title": {"bn": "বড় সংখ্যা বানাই — একক আগে, দশক পরে", "en": "Building bigger numbers — unit first, then the ten"}, "items": [
        {"ar": "وَاحِدٌ وَعِشْرُونَ", "tr": {"bn": "ওয়াহিদুন ওয়া ইশরূন", "en": "waaḥidun wa 'ishroon"}, "mean": {"bn": "একুশ (২১) — এক আর বিশ", "en": "twenty-one (21) — one and twenty"}, "note": {"bn": "বাংলাতেও “একুশ” মানে এক+বিশ — একক আগে! আরবিও ঠিক তাই করে।", "en": "Bangla “ekush” is also ek (one) + bish (twenty) — unit first! Arabic does exactly the same."}},
        {"ar": "خَمْسَةٌ وَثَلَاثُونَ", "tr": {"bn": "খামসাতুন ওয়া সালাসূন", "en": "khamsatun wa thalaathoon"}, "mean": {"bn": "পঁয়ত্রিশ (৩৫) — পাঁচ আর ত্রিশ", "en": "thirty-five (35) — five and thirty"}},
        {"ar": "تِسْعَةٌ وَتِسْعُونَ", "tr": {"bn": "তিসআতুন ওয়া তিসঊন", "en": "tis'atun wa tis'oon"}, "mean": {"bn": "নিরানব্বই (৯৯)", "en": "ninety-nine (99)"}, "note": {"bn": "আল্লাহর সুন্দর নামের হাদিসে এই সংখ্যাটি আছে।", "en": "This number appears in the hadith about Allah's Beautiful Names."}}
      ]},
      {"type": "tip", "kind": "tip", "bn": "আরও একটু এগিয়ে: জিনিস গোনার সময় ৩–১০ সংখ্যাগুলো উল্টো লিঙ্গ নেয় — পুরুষবাচক জিনিসের সাথে {{ة}}-যুক্ত সংখ্যা, স্ত্রীবাচকের সাথে {{ة}} ছাড়া। আপাতত শুধু গোনার রূপগুলো মুখস্থ করুন; এই নিয়ম পরে ব্যাকরণ অংশে আসবে।", "en": "A peek ahead: when counting things, numbers 3–10 take the opposite gender — the {{ة}} form goes with masculine nouns, the form without {{ة}} with feminine ones. For now just learn the counting forms; this rule comes later in grammar."},
      {"type": "practice", "bn": "জোরে জোরে গুনুন — প্রথমে ১ থেকে ১০, তারপর দশক।", "en": "Count aloud — first 1 to 10, then the tens.", "lines": [
        "وَاحِدٌ اِثْنَانِ ثَلَاثَةٌ أَرْبَعَةٌ خَمْسَةٌ",
        "سِتَّةٌ سَبْعَةٌ ثَمَانِيَةٌ تِسْعَةٌ عَشَرَةٌ",
        "عِشْرُونَ ثَلَاثُونَ أَرْبَعُونَ خَمْسُونَ",
        "سِتُّونَ سَبْعُونَ ثَمَانُونَ تِسْعُونَ مِائَةٌ"
      ]},
      {"type": "quiz", "items": [
        {"q": {"bn": "এই আরবি অঙ্কটি কত?", "en": "What value is this Arabic digit?"}, "ar": "٥", "options": [{"bn": "শূন্য", "en": "zero"}, {"bn": "পাঁচ", "en": "five"}, {"bn": "আট", "en": "eight"}], "answer": 1, "explain": {"bn": "আরবিতে গোল চিহ্ন মানে পাঁচ; শূন্য হলো বিন্দু ٠।", "en": "In Arabic a circle means five; zero is the dot ٠."}},
        {"q": {"bn": "আরবিতে লেখা এই সংখ্যাটি কত?", "en": "What number is written here?"}, "ar": "٧٨", "options": ["৮৭", "৭৮", "৬৯"], "answer": 1, "explain": {"bn": "সংখ্যা বাম থেকে ডানে পড়া হয়: ٧ = ৭, ٨ = ৮।", "en": "Numbers read left to right: ٧ = 7, ٨ = 8."}},
        {"q": {"bn": "{{سَبْعَةٌ}} মানে কত?", "en": "What is {{سَبْعَةٌ}}?"}, "options": ["৬", "৭", "৯"], "answer": 1},
        {"q": {"bn": "“পনেরো (১৫)” আরবিতে কোনটি?", "en": "Which is “fifteen (15)”?"}, "options": ["خَمْسُونَ", "خَمْسَةَ عَشَرَ", "خَمْسَةٌ"], "answer": 1},
        {"q": {"bn": "{{أَرْبَعُونَ}} কত?", "en": "What is {{أَرْبَعُونَ}}?"}, "options": ["৪", "১৪", "৪০"], "answer": 2},
        {"q": {"bn": "সূরা কদর অনুযায়ী লাইলাতুল কদর কত মাসের চেয়ে উত্তম?", "en": "According to Surah al-Qadr, Laylat al-Qadr is better than how many months?"}, "options": ["مِائَة", "أَلْف", "عَشَرَة"], "answer": 1},
        {"q": {"bn": "{{وَاحِدٌ وَعِشْرُونَ}} কোন সংখ্যা?", "en": "Which number is {{وَاحِدٌ وَعِشْرُونَ}}?"}, "options": ["১২", "২১", "১০১"], "answer": 1}
      ]}
    ]
  },
  {
    "id": "daily-family",
    "icon": "أب",
    "title": {"bn": "পরিবার ও মানুষজন", "en": "Family & People"},
    "subtitle": {"bn": "আব্বা-আম্মা থেকে শিক্ষক-বন্ধু — আপন মানুষদের আরবি নাম", "en": "From father and mother to teacher and friend — the people in your life"},
    "minutes": 15,
    "goals": [
      {"bn": "পরিবারের সদস্যদের আরবি নাম জানা", "en": "Name family members in Arabic"},
      {"bn": "{{ـِي}} যোগ করে “আমার” বলা", "en": "Say “my” by adding {{ـِي}}"},
      {"bn": "{{ة}} দিয়ে পুরুষবাচক থেকে স্ত্রীবাচক বানানো", "en": "Make feminine words with {{ة}}"},
      {"bn": "{{هٰذَا}} / {{هٰذِهِ}} দিয়ে কাউকে পরিচয় করিয়ে দেওয়া", "en": "Introduce someone with {{هٰذَا}} / {{هٰذِهِ}}"}
    ],
    "blocks": [
      {"type": "text", "bn": "আপনার পরিবারের একটা ছবি কল্পনা করুন — আব্বু, আম্মু, ভাই-বোন, দাদা-দাদি, খালা-মামা... এই পাঠ শেষে আপনি ছবির প্রত্যেককে আরবিতে পরিচয় করিয়ে দিতে পারবেন। আর মজার ব্যাপার হলো, কয়েকটা শব্দ আপনি আগে থেকেই জানেন!", "en": "Picture a photo of your family — father, mother, brothers and sisters, grandparents, aunts and uncles... By the end of this lesson you will be able to introduce everyone in it in Arabic. And the fun part: you already know a few of these words!"},
      {"type": "vocab", "title": {"bn": "ঘরের মানুষ", "en": "Close family"}, "items": [
        {"ar": "أَبٌ", "tr": {"bn": "আব", "en": "ab"}, "mean": {"bn": "বাবা", "en": "father"}},
        {"ar": "أُمٌّ", "tr": {"bn": "উম্ম", "en": "umm"}, "mean": {"bn": "মা", "en": "mother"}},
        {"ar": "الْوَالِدَانِ", "tr": {"bn": "আল-ওয়ালিদান", "en": "al-waalidaan"}, "mean": {"bn": "বাবা-মা (মাতা-পিতা)", "en": "parents"}, "root": "و ل د", "example": {"ar": "وَبِالْوَالِدَيْنِ إِحْسَانًا", "mean": {"bn": "এবং মাতা-পিতার সাথে সদ্ব্যবহার করো", "en": "And be excellent to parents"}, "ref": "17:23"}},
        {"ar": "أَخٌ", "tr": {"bn": "আখ", "en": "akh"}, "mean": {"bn": "ভাই", "en": "brother"}},
        {"ar": "أُخْتٌ", "tr": {"bn": "উখত", "en": "ukht"}, "mean": {"bn": "বোন", "en": "sister"}},
        {"ar": "اِبْنٌ", "tr": {"bn": "ইবন", "en": "ibn"}, "mean": {"bn": "ছেলে (পুত্র)", "en": "son"}},
        {"ar": "بِنْتٌ", "tr": {"bn": "বিনত", "en": "bint"}, "mean": {"bn": "মেয়ে (কন্যা)", "en": "daughter / girl"}},
        {"ar": "جَدٌّ", "tr": {"bn": "জাদ্দ", "en": "jadd"}, "mean": {"bn": "দাদা / নানা", "en": "grandfather"}},
        {"ar": "جَدَّةٌ", "tr": {"bn": "জাদ্দাহ", "en": "jaddah"}, "mean": {"bn": "দাদি / নানি", "en": "grandmother"}},
        {"ar": "زَوْجٌ", "tr": {"bn": "যাওজ", "en": "zawj"}, "mean": {"bn": "স্বামী", "en": "husband"}},
        {"ar": "زَوْجَةٌ", "tr": {"bn": "যাওজাহ", "en": "zawjah"}, "mean": {"bn": "স্ত্রী", "en": "wife"}},
        {"ar": "أُسْرَةٌ", "tr": {"bn": "উসরাহ", "en": "usrah"}, "mean": {"bn": "পরিবার", "en": "family"}}
      ]},
      {"type": "vocab", "title": {"bn": "চাচা-মামা-খালা-ফুফু", "en": "Uncles and aunts"}, "items": [
        {"ar": "عَمٌّ", "tr": {"bn": "আম্ম", "en": "'amm"}, "mean": {"bn": "চাচা (বাবার ভাই)", "en": "paternal uncle"}},
        {"ar": "عَمَّةٌ", "tr": {"bn": "আম্মাহ", "en": "'ammah"}, "mean": {"bn": "ফুফু (বাবার বোন)", "en": "paternal aunt"}},
        {"ar": "خَالٌ", "tr": {"bn": "খাল", "en": "khaal"}, "mean": {"bn": "মামা (মায়ের ভাই)", "en": "maternal uncle"}},
        {"ar": "خَالَةٌ", "tr": {"bn": "খালাহ", "en": "khaalah"}, "mean": {"bn": "খালা (মায়ের বোন)", "en": "maternal aunt"}}
      ]},
      {"type": "tip", "kind": "memory", "bn": "বাংলার **খালা** সরাসরি আরবি {{خَالَةٌ}} থেকে এসেছে — অর্থও একই, মায়ের বোন! কিন্তু সাবধান: আরবিতে {{خَالٌ}} মানে **মামা** (মায়ের ভাই), আমাদের “খালু” নয়। আর {{عَمٌّ}} মানে চাচা।", "en": "The Bangla word **khala** comes straight from Arabic {{خَالَةٌ}} — same meaning, mother's sister! But careful: in Arabic {{خَالٌ}} means **mother's brother** (mama), not the Bangla “khalu” (aunt's husband). And {{عَمٌّ}} is father's brother."},
      {"type": "vocab", "title": {"bn": "ঘরের বাইরের মানুষ", "en": "People around us"}, "items": [
        {"ar": "رَجُلٌ", "tr": {"bn": "রাজুল", "en": "rajul"}, "mean": {"bn": "পুরুষ, লোক", "en": "man"}},
        {"ar": "اِمْرَأَةٌ", "tr": {"bn": "ইমরাআহ", "en": "imraʾah"}, "mean": {"bn": "নারী, মহিলা", "en": "woman"}},
        {"ar": "وَلَدٌ", "tr": {"bn": "ওয়ালাদ", "en": "walad"}, "mean": {"bn": "ছেলে, সন্তান", "en": "boy / child"}, "root": "و ل د"},
        {"ar": "طِفْلٌ", "tr": {"bn": "তিফল", "en": "ṭifl"}, "mean": {"bn": "শিশু", "en": "baby / small child"}},
        {"ar": "صَدِيقٌ", "tr": {"bn": "সাদীক", "en": "ṣadeeq"}, "mean": {"bn": "বন্ধু", "en": "friend"}, "root": "ص د ق"},
        {"ar": "جَارٌ", "tr": {"bn": "জার", "en": "jaar"}, "mean": {"bn": "প্রতিবেশী", "en": "neighbour"}},
        {"ar": "مُعَلِّمٌ", "tr": {"bn": "মুআল্লিম", "en": "mu'allim"}, "mean": {"bn": "শিক্ষক", "en": "teacher"}, "root": "ع ل م"},
        {"ar": "طَالِبٌ", "tr": {"bn": "তালিব", "en": "ṭaalib"}, "mean": {"bn": "ছাত্র", "en": "student"}, "root": "ط ل ب"}
      ]},
      {"type": "tip", "kind": "fun", "bn": "“তালিবে ইলম” (জ্ঞান-অন্বেষী ছাত্র), “আওলাদ” (সন্তানসন্ততি), “মুআল্লিম” — এগুলো বাংলায় চলে আসা আরবি শব্দ। {{أَوْلَادٌ}} হলো {{وَلَدٌ}}-এর বহুবচন। আর “সিদ্দিক” নামটি এসেছে {{صَدِيقٌ}}-এর একই মূল {{ص د ق}} (সত্য) থেকে — সত্যিকারের বন্ধুই তো সত্যবাদী!", "en": "“Talib-e-ilm” (student of knowledge), “awlad” (children), “muallim” — these are Arabic words living in Bangla. {{أَوْلَادٌ}} is the plural of {{وَلَدٌ}}. And the name “Siddiq” shares the root {{ص د ق}} (truth) with {{صَدِيقٌ}} — a true friend is a truthful one!"},
      {"type": "table", "title": {"bn": "{{ة}} লাগিয়ে স্ত্রীবাচক", "en": "Add {{ة}} for the feminine"}, "head": [{"bn": "পুরুষ", "en": "Male"}, {"bn": "নারী", "en": "Female"}, {"bn": "অর্থ", "en": "Meaning"}], "rows": [
        ["جَدٌّ", "جَدَّةٌ", {"bn": "দাদা ➜ দাদি", "en": "grandfather ➜ grandmother"}],
        ["خَالٌ", "خَالَةٌ", {"bn": "মামা ➜ খালা", "en": "maternal uncle ➜ maternal aunt"}],
        ["مُعَلِّمٌ", "مُعَلِّمَةٌ", {"bn": "শিক্ষক ➜ শিক্ষিকা", "en": "teacher (m) ➜ teacher (f)"}],
        ["طَالِبٌ", "طَالِبَةٌ", {"bn": "ছাত্র ➜ ছাত্রী", "en": "student (m) ➜ student (f)"}],
        ["صَدِيقٌ", "صَدِيقَةٌ", {"bn": "বন্ধু (ছেলে) ➜ বান্ধবী", "en": "friend (m) ➜ friend (f)"}]
      ]},
      {"type": "tip", "kind": "memory", "bn": "“আমার” বলতে শব্দের শেষে শুধু {{ـِي}} (ঈ) লাগান: {{أَبٌ}} ➜ {{أَبِي}} (আমার বাবা), {{أُمٌّ}} ➜ {{أُمِّي}} (আমার মা), {{أَخٌ}} ➜ {{أَخِي}} (আমার ভাই)। {{ة}}-ওয়ালা শব্দে {{ة}} হয়ে যায় {{ت}}: {{جَدَّةٌ}} ➜ {{جَدَّتِي}}।", "en": "To say “my”, just add {{ـِي}} (ee) at the end: {{أَبٌ}} ➜ {{أَبِي}} (my father), {{أُمٌّ}} ➜ {{أُمِّي}} (my mother), {{أَخٌ}} ➜ {{أَخِي}} (my brother). Words with {{ة}} turn it into {{ت}}: {{جَدَّةٌ}} ➜ {{جَدَّتِي}}."},
      {"type": "examples", "title": {"bn": "পরিবারের ছবি দেখাই", "en": "Showing a family photo"}, "items": [
        {"ar": "هٰذَا أَبِي", "tr": {"bn": "হাযা আবী", "en": "haadhaa abee"}, "mean": {"bn": "ইনি আমার বাবা", "en": "This is my father"}, "note": {"bn": "পুরুষের জন্য {{هٰذَا}}।", "en": "{{هٰذَا}} for a male."}, "hl": "هٰذَا"},
        {"ar": "هٰذِهِ أُمِّي", "tr": {"bn": "হাযিহী উম্মী", "en": "haadhihee ummee"}, "mean": {"bn": "ইনি আমার মা", "en": "This is my mother"}, "note": {"bn": "নারীর জন্য {{هٰذِهِ}}।", "en": "{{هٰذِهِ}} for a female."}, "hl": "هٰذِهِ"},
        {"ar": "هٰذَا أَخِي الصَّغِيرُ", "tr": {"bn": "হাযা আখিয়াস সাগীর", "en": "haadhaa akhiyaṣ-ṣagheer"}, "mean": {"bn": "এ আমার ছোট ভাই", "en": "This is my little brother"}, "hl": "أَخِي"},
        {"ar": "هٰذِهِ جَدَّتِي", "tr": {"bn": "হাযিহী জাদ্দাতী", "en": "haadhihee jaddatee"}, "mean": {"bn": "ইনি আমার দাদি", "en": "This is my grandmother"}, "hl": "جَدَّتِي"},
        {"ar": "هُوَ مُعَلِّمِي", "tr": {"bn": "হুয়া মুআল্লিমী", "en": "huwa mu'allimee"}, "mean": {"bn": "তিনি আমার শিক্ষক", "en": "He is my teacher"}, "hl": "مُعَلِّمِي"},
        {"ar": "هِيَ صَدِيقَتِي", "tr": {"bn": "হিয়া সাদীকাতী", "en": "hiya ṣadeeqatee"}, "mean": {"bn": "সে আমার বান্ধবী", "en": "She is my friend"}, "hl": "صَدِيقَتِي"}
      ]},
      {"type": "examples", "title": {"bn": "বাবা-মায়ের জন্য কুরআনের দোয়া", "en": "A Quranic dua for parents"}, "items": [
        {"ar": "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", "tr": {"bn": "রাব্বির হামহুমা কামা রাব্বাইয়ানী সাগীরা", "en": "rabbir-ḥamhumaa kamaa rabbayaanee ṣagheeraa"}, "mean": {"bn": "হে আমার রব, তাঁদের প্রতি দয়া করুন, যেমন তাঁরা আমাকে ছোটবেলায় লালন-পালন করেছেন (১৭:২৪)", "en": "My Lord, have mercy on them as they raised me when I was small (17:24)"}, "note": {"bn": "প্রতিদিন নামাজের পর পড়ার মতো সুন্দর দোয়া।", "en": "A beautiful dua to say after every prayer."}}
      ]},
      {"type": "quiz", "items": [
        {"q": {"bn": "{{أُخْتٌ}} মানে কী?", "en": "What does {{أُخْتٌ}} mean?"}, "options": [{"bn": "ভাই", "en": "brother"}, {"bn": "বোন", "en": "sister"}, {"bn": "মা", "en": "mother"}], "answer": 1},
        {"q": {"bn": "মায়ের বোন (খালা) আরবিতে কী?", "en": "Mother's sister in Arabic is:"}, "options": ["عَمَّةٌ", "خَالَةٌ", "جَدَّةٌ"], "answer": 1},
        {"q": {"bn": "“আমার মা” কোনটি?", "en": "Which means “my mother”?"}, "options": ["أُمٌّ", "أُمِّي", "أَبِي"], "answer": 1},
        {"q": {"bn": "{{مُعَلِّمٌ}}-এর স্ত্রীবাচক রূপ কোনটি?", "en": "The feminine of {{مُعَلِّمٌ}} is:"}, "options": ["مُعَلِّمِي", "مُعَلِّمَةٌ", "مُعَلِّمُونَ"], "answer": 1},
        {"q": {"bn": "আপনার দাদিকে দেখিয়ে কী বলবেন?", "en": "Pointing to your grandmother, you say:"}, "options": ["هٰذَا جَدِّي", "هٰذِهِ جَدَّتِي", "هٰذَا أَخِي"], "answer": 1},
        {"q": {"bn": "{{صَدِيقٌ}} মানে কী?", "en": "What is {{صَدِيقٌ}}?"}, "options": [{"bn": "প্রতিবেশী", "en": "neighbour"}, {"bn": "বন্ধু", "en": "friend"}, {"bn": "শিক্ষক", "en": "teacher"}], "answer": 1},
        {"q": {"bn": "{{الْوَالِدَانِ}} বলতে কাদের বোঝায়?", "en": "Who are {{الْوَالِدَانِ}}?"}, "options": [{"bn": "দুই ভাই", "en": "two brothers"}, {"bn": "বাবা-মা", "en": "parents"}, {"bn": "দাদা-দাদি", "en": "grandparents"}], "answer": 1}
      ]}
    ]
  },
  {
    "id": "daily-body",
    "icon": "يد",
    "title": {"bn": "আমার শরীর ও স্বাস্থ্য", "en": "My Body & Health"},
    "subtitle": {"bn": "মাথা থেকে পা — আর অসুস্থ হলে কী বলবেন", "en": "Head to toe — and what to say when you feel unwell"},
    "minutes": 15,
    "goals": [
      {"bn": "শরীরের প্রধান অঙ্গের আরবি নাম", "en": "Name the main parts of the body"},
      {"bn": "অজুর অঙ্গগুলো আরবিতে চেনা", "en": "Recognise the parts of wudu in Arabic"},
      {"bn": "{{ـَانِ}} দিয়ে “দুটি” বলা", "en": "Say “two of” with {{ـَانِ}}"},
      {"bn": "অসুস্থতা ও রোগী দেখার বাক্য", "en": "Phrases for illness and visiting the sick"}
    ],
    "blocks": [
      {"type": "text", "bn": "চলুন একটা খেলা খেলি: প্রতিটি নতুন শব্দ শেখার সময় সেই অঙ্গটি **ছুঁয়ে** জোরে বলুন। মাথা ছুঁয়ে {{رَأْسٌ}}, চোখ ছুঁয়ে {{عَيْنٌ}}... শরীর নড়লে মগজও মনে রাখে!", "en": "Let's play a game: as you learn each new word, **touch** that part of your body and say it aloud. Touch your head — {{رَأْسٌ}}, your eye — {{عَيْنٌ}}... When the body moves, the brain remembers!"},
      {"type": "vocab", "title": {"bn": "মাথা ও মুখ", "en": "Head and face"}, "items": [
        {"ar": "رَأْسٌ", "tr": {"bn": "রা'স", "en": "raʾs"}, "mean": {"bn": "মাথা", "en": "head"}},
        {"ar": "وَجْهٌ", "tr": {"bn": "ওয়াজহ", "en": "wajh"}, "mean": {"bn": "মুখমণ্ডল, চেহারা", "en": "face"}},
        {"ar": "شَعْرٌ", "tr": {"bn": "শা'র", "en": "sha'r"}, "mean": {"bn": "চুল", "en": "hair"}},
        {"ar": "عَيْنٌ", "tr": {"bn": "আইন", "en": "'ayn"}, "mean": {"bn": "চোখ", "en": "eye"}},
        {"ar": "أُذُنٌ", "tr": {"bn": "উযুন", "en": "udhun"}, "mean": {"bn": "কান", "en": "ear"}},
        {"ar": "أَنْفٌ", "tr": {"bn": "আনফ", "en": "anf"}, "mean": {"bn": "নাক", "en": "nose"}},
        {"ar": "فَمٌ", "tr": {"bn": "ফাম", "en": "fam"}, "mean": {"bn": "মুখ (হাঁ)", "en": "mouth"}},
        {"ar": "لِسَانٌ", "tr": {"bn": "লিসান", "en": "lisaan"}, "mean": {"bn": "জিহ্বা; ভাষা", "en": "tongue; language"}},
        {"ar": "سِنٌّ", "tr": {"bn": "সিন্ন", "en": "sinn"}, "mean": {"bn": "দাঁত", "en": "tooth"}}
      ]},
      {"type": "tip", "kind": "fun", "bn": "{{عَيْنٌ}} (চোখ) আর আরবি বর্ণ {{ع}}-এর নাম একই — “আইন”! আর {{لِسَانٌ}} মানে জিহ্বা ও ভাষা দুটোই — কুরআন নাজিল হয়েছে {{بِلِسَانٍ عَرَبِيٍّ مُبِينٍ}} — স্পষ্ট আরবি ভাষায় (২৬:১৯৫)।", "en": "{{عَيْنٌ}} (eye) has the same name as the letter {{ع}} — “'ayn”! And {{لِسَانٌ}} means both tongue and language — the Quran was revealed {{بِلِسَانٍ عَرَبِيٍّ مُبِينٍ}} — in a clear Arabic tongue (26:195)."},
      {"type": "vocab", "title": {"bn": "শরীরের বাকি অংশ", "en": "The rest of the body"}, "items": [
        {"ar": "يَدٌ", "tr": {"bn": "ইয়াদ", "en": "yad"}, "mean": {"bn": "হাত", "en": "hand"}},
        {"ar": "إِصْبَعٌ", "tr": {"bn": "ইসবা'", "en": "iṣba'"}, "mean": {"bn": "আঙুল", "en": "finger"}},
        {"ar": "رِجْلٌ", "tr": {"bn": "রিজল", "en": "rijl"}, "mean": {"bn": "পা", "en": "leg / foot"}},
        {"ar": "صَدْرٌ", "tr": {"bn": "সাদর", "en": "ṣadr"}, "mean": {"bn": "বুক", "en": "chest"}},
        {"ar": "قَلْبٌ", "tr": {"bn": "কালব", "en": "qalb"}, "mean": {"bn": "হৃদয়, অন্তর", "en": "heart"}},
        {"ar": "بَطْنٌ", "tr": {"bn": "বাতন", "en": "baṭn"}, "mean": {"bn": "পেট", "en": "stomach, belly"}},
        {"ar": "ظَهْرٌ", "tr": {"bn": "যাহর", "en": "ẓahr"}, "mean": {"bn": "পিঠ", "en": "back"}}
      ]},
      {"type": "tip", "kind": "memory", "bn": "“কলব” শব্দটি আমরা ওয়াজে-দোয়ায় প্রায়ই শুনি — “কলব পরিষ্কার করো”। এটাই আরবি {{قَلْبٌ}} (হৃদয়)! আর {{ظَهْرٌ}} (পিঠ) এবং যোহরের নামাজ {{الظُّهْرُ}} — দুটোর মূল অক্ষর একই {{ظ ه ر}}; শুধু হরকত আলাদা!", "en": "We often hear “qalb” in talks and duas — “purify your qalb”. That is Arabic {{قَلْبٌ}} (heart)! And {{ظَهْرٌ}} (back) and the Zuhr prayer {{الظُّهْرُ}} share the same root letters {{ظ ه ر}} — only the vowels differ!"},
      {"type": "table", "title": {"bn": "অজুর অঙ্গগুলো আরবিতে", "en": "The parts of wudu in Arabic"}, "head": [{"bn": "কাজ", "en": "Action"}, {"bn": "অঙ্গ", "en": "Body part"}, {"bn": "অর্থ", "en": "Meaning"}], "rows": [
        [{"bn": "তিনবার ধোয়া", "en": "wash three times"}, "الْيَدَانِ", {"bn": "দুই হাত (কবজি পর্যন্ত)", "en": "both hands (to the wrists)"}],
        [{"bn": "কুলি করা", "en": "rinse"}, "الْفَمُ", {"bn": "মুখ", "en": "mouth"}],
        [{"bn": "পানি দিয়ে পরিষ্কার", "en": "clean with water"}, "الْأَنْفُ", {"bn": "নাক", "en": "nose"}],
        [{"bn": "ধোয়া", "en": "wash"}, "الْوَجْهُ", {"bn": "মুখমণ্ডল", "en": "face"}],
        [{"bn": "কনুই পর্যন্ত ধোয়া", "en": "wash to the elbows"}, "الْيَدَانِ", {"bn": "দুই হাত", "en": "both arms"}],
        [{"bn": "মাসেহ করা", "en": "wipe"}, "الرَّأْسُ وَالْأُذُنَانِ", {"bn": "মাথা ও দুই কান", "en": "head and both ears"}],
        [{"bn": "টাখনু পর্যন্ত ধোয়া", "en": "wash to the ankles"}, "الرِّجْلَانِ", {"bn": "দুই পা", "en": "both feet"}]
      ]},
      {"type": "tip", "kind": "memory", "bn": "আমাদের অনেক অঙ্গ **জোড়ায় জোড়ায়**! আরবিতে “দুটি” বলতে শেষে {{ـَانِ}} (আন) লাগান: {{عَيْنٌ}} ➜ {{عَيْنَانِ}} (দুই চোখ), {{يَدٌ}} ➜ {{يَدَانِ}} (দুই হাত), {{أُذُنٌ}} ➜ {{أُذُنَانِ}} (দুই কান), {{رِجْلٌ}} ➜ {{رِجْلَانِ}} (দুই পা)।", "en": "Many body parts come **in pairs**! To say “two” in Arabic, add {{ـَانِ}} (aan): {{عَيْنٌ}} ➜ {{عَيْنَانِ}} (two eyes), {{يَدٌ}} ➜ {{يَدَانِ}} (two hands), {{أُذُنٌ}} ➜ {{أُذُنَانِ}} (two ears), {{رِجْلٌ}} ➜ {{رِجْلَانِ}} (two feet)."},
      {"type": "vocab", "title": {"bn": "স্বাস্থ্য ও অসুখ", "en": "Health and illness"}, "items": [
        {"ar": "صِحَّةٌ", "tr": {"bn": "সিহ্‌হাহ", "en": "ṣiḥḥah"}, "mean": {"bn": "স্বাস্থ্য, সুস্থতা", "en": "health"}},
        {"ar": "مَرِيضٌ", "tr": {"bn": "মারীদ", "en": "mareeḍ"}, "mean": {"bn": "অসুস্থ, রোগী", "en": "sick, patient"}},
        {"ar": "أَلَمٌ", "tr": {"bn": "আলাম", "en": "alam"}, "mean": {"bn": "ব্যথা", "en": "pain"}},
        {"ar": "صُدَاعٌ", "tr": {"bn": "সুদা'", "en": "ṣudaa'"}, "mean": {"bn": "মাথাব্যথা", "en": "headache"}},
        {"ar": "طَبِيبٌ", "tr": {"bn": "তাবীব", "en": "ṭabeeb"}, "mean": {"bn": "ডাক্তার", "en": "doctor"}},
        {"ar": "دَوَاءٌ", "tr": {"bn": "দাওয়া", "en": "dawaaʾ"}, "mean": {"bn": "ওষুধ", "en": "medicine"}},
        {"ar": "مُسْتَشْفًى", "tr": {"bn": "মুসতাশফা", "en": "mustashfaa"}, "mean": {"bn": "হাসপাতাল", "en": "hospital"}, "root": "ش ف ي"}
      ]},
      {"type": "tip", "kind": "fun", "bn": "বাংলার “দাওয়াই” (ওষুধ) এসেছে আরবি {{دَوَاءٌ}} থেকে, আর হাসপাতালের নামে যে “শেফা” দেখেন, সেটি আরবি {{شِفَاءٌ}} (আরোগ্য)। {{مُسْتَشْفًى}} (হাসপাতাল) মানে “আরোগ্য খোঁজার জায়গা” — একই মূল {{ش ف ي}}!", "en": "The Bangla “dawai” (medicine) comes from Arabic {{دَوَاءٌ}}, and the “Shefa” you see on hospital signs is Arabic {{شِفَاءٌ}} (healing). {{مُسْتَشْفًى}} (hospital) literally means “the place where healing is sought” — same root {{ش ف ي}}!"},
      {"type": "examples", "title": {"bn": "অসুস্থ হলে যা বলবেন", "en": "What to say when unwell"}, "items": [
        {"ar": "أَنَا مَرِيضٌ", "tr": {"bn": "আনা মারীদ", "en": "ana mareeḍ"}, "mean": {"bn": "আমি অসুস্থ", "en": "I am sick"}, "note": {"bn": "মেয়ে বললে: {{أَنَا مَرِيضَةٌ}}", "en": "A girl says: {{أَنَا مَرِيضَةٌ}}"}},
        {"ar": "رَأْسِي يُؤْلِمُنِي", "tr": {"bn": "রা'সী ইউ'লিমুনী", "en": "raʾsee yuʾlimunee"}, "mean": {"bn": "আমার মাথা ব্যথা করছে", "en": "My head hurts"}, "hl": "رَأْسِي"},
        {"ar": "بَطْنِي يُؤْلِمُنِي", "tr": {"bn": "বাতনী ইউ'লিমুনী", "en": "baṭnee yuʾlimunee"}, "mean": {"bn": "আমার পেট ব্যথা করছে", "en": "My stomach hurts"}, "hl": "بَطْنِي"},
        {"ar": "أُرِيدُ طَبِيبًا", "tr": {"bn": "উরীদু তাবীবান", "en": "ureedu ṭabeeban"}, "mean": {"bn": "আমার একজন ডাক্তার দরকার", "en": "I need a doctor"}},
        {"ar": "شَفَاكَ اللّٰهُ", "tr": {"bn": "শাফাকাল্লাহ", "en": "shafaakallaah"}, "mean": {"bn": "আল্লাহ আপনাকে সুস্থ করে দিন", "en": "May Allah heal you"}, "note": {"bn": "অসুস্থ কাউকে দেখলে বলুন।", "en": "Say this to someone who is ill."}},
        {"ar": "لَا بَأْسَ، طَهُورٌ إِنْ شَاءَ اللّٰهُ", "tr": {"bn": "লা বা'সা, তাহূরুন ইন শা আল্লাহ", "en": "laa baʾsa, ṭahoorun in shaaʾallaah"}, "mean": {"bn": "চিন্তা নেই, এটা (গুনাহ থেকে) পবিত্রকারী, ইন শা আল্লাহ", "en": "No harm — it is a purification (from sins), if Allah wills"}, "note": {"bn": "রোগী দেখতে গিয়ে নবী ﷺ এ কথা বলতেন (সহিহ বুখারি)।", "en": "The Prophet ﷺ said this when visiting the sick (Sahih al-Bukhari)."}}
      ]},
      {"type": "quiz", "items": [
        {"q": {"bn": "{{عَيْنٌ}} মানে কী?", "en": "What does {{عَيْنٌ}} mean?"}, "options": [{"bn": "কান", "en": "ear"}, {"bn": "চোখ", "en": "eye"}, {"bn": "নাক", "en": "nose"}], "answer": 1},
        {"q": {"bn": "“হাত” আরবিতে কী?", "en": "What is “hand” in Arabic?"}, "options": ["رِجْلٌ", "يَدٌ", "فَمٌ"], "answer": 1},
        {"q": {"bn": "অজুতে কোন অঙ্গ মাসেহ করা হয়?", "en": "Which part is wiped in wudu?"}, "options": ["الرَّأْسُ", "الْوَجْهُ", "الْبَطْنُ"], "answer": 0},
        {"q": {"bn": "“দুই চোখ” কোনটি?", "en": "Which means “two eyes”?"}, "options": ["عَيْنٌ", "عَيْنِي", "عَيْنَانِ"], "answer": 2},
        {"q": {"bn": "{{قَلْبٌ}} মানে কী?", "en": "What is {{قَلْبٌ}}?"}, "options": [{"bn": "হৃদয়", "en": "heart"}, {"bn": "পিঠ", "en": "back"}, {"bn": "বুক", "en": "chest"}], "answer": 0},
        {"q": {"bn": "অসুস্থ বন্ধুকে দেখতে গিয়ে কোন দোয়া করবেন?", "en": "Visiting a sick friend, which dua do you make?"}, "options": ["شَفَاكَ اللّٰهُ", "صَبَاحُ النُّورِ", "تَشَرَّفْنَا"], "answer": 0},
        {"q": {"bn": "{{طَبِيبٌ}} কে?", "en": "Who is a {{طَبِيبٌ}}?"}, "options": [{"bn": "শিক্ষক", "en": "teacher"}, {"bn": "ডাক্তার", "en": "doctor"}, {"bn": "ছাত্র", "en": "student"}], "answer": 1}
      ]}
    ]
  },
  {
    "id": "daily-home",
    "icon": "بيت",
    "title": {"bn": "ঘর, মাদ্রাসা ও জিনিসপত্র", "en": "Home, School & Things"},
    "subtitle": {"bn": "কিতাব-কলম থেকে মসজিদ-গাড়ি — চারপাশের জিনিসের নাম", "en": "From book and pen to masjid and car — naming the world around you"},
    "minutes": 15,
    "goals": [
      {"bn": "ঘর ও ক্লাসের জিনিসপত্রের নাম", "en": "Name things at home and in class"},
      {"bn": "{{مَـ}} দিয়ে শুরু হওয়া “জায়গা”-বাচক শব্দ চেনা", "en": "Spot “place” words that start with {{مَـ}}"},
      {"bn": "{{فِي}}, {{عَلَى}}, {{تَحْتَ}} দিয়ে কোথায় আছে বলা", "en": "Say where things are with {{فِي}}, {{عَلَى}}, {{تَحْتَ}}"}
    ],
    "blocks": [
      {"type": "text", "bn": "আপনার ব্যাগ খুলুন — {{كِتَابٌ}}, {{قَلَمٌ}}, {{دَفْتَرٌ}}... আরে, এ তো আমাদের কিতাব, কলম আর দফতর! এই পাঠে আপনি দেখবেন, বাংলায় কত আরবি শব্দ লুকিয়ে আছে।", "en": "Open your bag — {{كِتَابٌ}}, {{قَلَمٌ}}, {{دَفْتَرٌ}}... hey, those are our Bangla kitab, kolom and doftor! In this lesson you'll discover how much Arabic hides inside Bangla."},
      {"type": "vocab", "title": {"bn": "ঘরের ভেতর", "en": "Inside the home"}, "items": [
        {"ar": "بَيْتٌ", "tr": {"bn": "বাইত", "en": "bayt"}, "mean": {"bn": "ঘর, বাড়ি", "en": "house, home"}},
        {"ar": "بَابٌ", "tr": {"bn": "বাব", "en": "baab"}, "mean": {"bn": "দরজা", "en": "door"}},
        {"ar": "نَافِذَةٌ", "tr": {"bn": "নাফিযাহ", "en": "naafidhah"}, "mean": {"bn": "জানালা", "en": "window"}},
        {"ar": "غُرْفَةٌ", "tr": {"bn": "গুরফাহ", "en": "ghurfah"}, "mean": {"bn": "কক্ষ, রুম", "en": "room"}},
        {"ar": "مَطْبَخٌ", "tr": {"bn": "মাতবাখ", "en": "maṭbakh"}, "mean": {"bn": "রান্নাঘর", "en": "kitchen"}},
        {"ar": "سَرِيرٌ", "tr": {"bn": "সারীর", "en": "sareer"}, "mean": {"bn": "খাট, বিছানা", "en": "bed"}},
        {"ar": "كُرْسِيٌّ", "tr": {"bn": "কুরসিয়্যুন", "en": "kursiyy"}, "mean": {"bn": "চেয়ার", "en": "chair"}},
        {"ar": "مِفْتَاحٌ", "tr": {"bn": "মিফতাহ", "en": "miftaaḥ"}, "mean": {"bn": "চাবি", "en": "key"}, "root": "ف ت ح"},
        {"ar": "مِصْبَاحٌ", "tr": {"bn": "মিসবাহ", "en": "miṣbaaḥ"}, "mean": {"bn": "বাতি", "en": "lamp"}},
        {"ar": "سَاعَةٌ", "tr": {"bn": "সা'আহ", "en": "saa'ah"}, "mean": {"bn": "ঘড়ি; ঘণ্টা", "en": "clock, watch; hour"}},
        {"ar": "هَاتِفٌ", "tr": {"bn": "হাতিফ", "en": "haatif"}, "mean": {"bn": "ফোন", "en": "phone"}}
      ]},
      {"type": "tip", "kind": "fun", "bn": "“আয়াতুল কুরসি” শুনেছেন তো? {{كُرْسِيٌّ}} মানে আসন বা চেয়ার! বাংলাতেও “কুরসি” মানে চেয়ার। আর {{مِفْتَاحٌ}} (চাবি) এসেছে {{فَتَحَ}} (খোলা) থেকে — সূরা ফাতিহাও “খোলার” সূরা, অর্থাৎ কুরআনের শুরু।", "en": "Heard of “Ayat al-Kursi”? {{كُرْسِيٌّ}} means seat or chair! In Bangla too, “kursi” means chair. And {{مِفْتَاحٌ}} (key) comes from {{فَتَحَ}} (to open) — Surah al-Fatihah is “the Opener” of the Quran."},
      {"type": "vocab", "title": {"bn": "পড়ার জিনিস", "en": "Study things"}, "items": [
        {"ar": "كِتَابٌ", "tr": {"bn": "কিতাব", "en": "kitaab"}, "mean": {"bn": "বই", "en": "book"}, "root": "ك ت ب"},
        {"ar": "قَلَمٌ", "tr": {"bn": "কালাম", "en": "qalam"}, "mean": {"bn": "কলম", "en": "pen"}, "example": {"ar": "الَّذِي عَلَّمَ بِالْقَلَمِ", "mean": {"bn": "যিনি কলমের সাহায্যে শিক্ষা দিয়েছেন", "en": "Who taught by the pen"}, "ref": "96:4"}},
        {"ar": "دَفْتَرٌ", "tr": {"bn": "দাফতার", "en": "daftar"}, "mean": {"bn": "খাতা", "en": "notebook"}},
        {"ar": "حَقِيبَةٌ", "tr": {"bn": "হাকীবাহ", "en": "ḥaqeebah"}, "mean": {"bn": "ব্যাগ", "en": "bag"}},
        {"ar": "مَكْتَبٌ", "tr": {"bn": "মাকতাব", "en": "maktab"}, "mean": {"bn": "টেবিল; অফিস", "en": "desk; office"}, "root": "ك ت ب"},
        {"ar": "سَبُّورَةٌ", "tr": {"bn": "সাব্বূরাহ", "en": "sabboorah"}, "mean": {"bn": "ব্ল্যাকবোর্ড", "en": "blackboard"}},
        {"ar": "مُصْحَفٌ", "tr": {"bn": "মুসহাফ", "en": "muṣḥaf"}, "mean": {"bn": "কুরআনের কপি (মুসহাফ)", "en": "a copy of the Quran"}}
      ]},
      {"type": "tip", "kind": "warn", "bn": "বাংলায় “দফতর” মানে অফিস, কিন্তু আরবিতে {{دَفْتَرٌ}} মানে **খাতা**। আর আরবিতে অফিস হলো {{مَكْتَبٌ}} — যেখান থেকে আমাদের “মক্তব” শব্দটি এসেছে!", "en": "In Bangla “doftor” means office, but Arabic {{دَفْتَرٌ}} means **notebook**. Office in Arabic is {{مَكْتَبٌ}} — which gave Bangla the word “moktob” (children's Quran school)!"},
      {"type": "vocab", "title": {"bn": "বাইরের জায়গা", "en": "Places outside"}, "items": [
        {"ar": "مَسْجِدٌ", "tr": {"bn": "মাসজিদ", "en": "masjid"}, "mean": {"bn": "মসজিদ", "en": "mosque"}, "root": "س ج د"},
        {"ar": "مَدْرَسَةٌ", "tr": {"bn": "মাদরাসাহ", "en": "madrasah"}, "mean": {"bn": "স্কুল, মাদ্রাসা", "en": "school"}, "root": "د ر س"},
        {"ar": "مَكْتَبَةٌ", "tr": {"bn": "মাকতাবাহ", "en": "maktabah"}, "mean": {"bn": "লাইব্রেরি; বইয়ের দোকান", "en": "library; bookshop"}, "root": "ك ت ب"},
        {"ar": "سُوقٌ", "tr": {"bn": "সূক", "en": "sooq"}, "mean": {"bn": "বাজার", "en": "market"}},
        {"ar": "شَارِعٌ", "tr": {"bn": "শারি'", "en": "shaari'"}, "mean": {"bn": "রাস্তা", "en": "street"}},
        {"ar": "سَيَّارَةٌ", "tr": {"bn": "সাইয়ারাহ", "en": "sayyaarah"}, "mean": {"bn": "গাড়ি", "en": "car"}}
      ]},
      {"type": "table", "title": {"bn": "{{مَـ}} = জায়গা: একটা গোপন সূত্র", "en": "{{مَـ}} = place: a secret formula"}, "head": [{"bn": "মূল কাজ", "en": "Root action"}, {"bn": "জায়গা", "en": "Place"}, {"bn": "অর্থ", "en": "Meaning"}], "rows": [
        ["سَجَدَ", "مَسْجِدٌ", {"bn": "সিজদা করল ➜ সিজদার জায়গা", "en": "prostrated ➜ place of prostration"}],
        ["دَرَسَ", "مَدْرَسَةٌ", {"bn": "পড়াশোনা করল ➜ পড়ার জায়গা", "en": "studied ➜ place of study"}],
        ["كَتَبَ", "مَكْتَبٌ", {"bn": "লিখল ➜ লেখার জায়গা", "en": "wrote ➜ place of writing"}],
        ["طَبَخَ", "مَطْبَخٌ", {"bn": "রান্না করল ➜ রান্নার জায়গা", "en": "cooked ➜ place of cooking"}]
      ]},
      {"type": "tip", "kind": "memory", "bn": "একটি মূল থেকে কত শব্দ! {{ك ت ب}} (লেখা) ➜ {{كِتَابٌ}} বই, {{كَاتِبٌ}} লেখক, {{مَكْتَبٌ}} টেবিল/অফিস, {{مَكْتَبَةٌ}} লাইব্রেরি। মূল চিনলে একটা শব্দ শিখে চারটে পাবেন!", "en": "So many words from one root! {{ك ت ب}} (writing) ➜ {{كِتَابٌ}} book, {{كَاتِبٌ}} writer, {{مَكْتَبٌ}} desk/office, {{مَكْتَبَةٌ}} library. Know the root — learn one word, get four!"},
      {"type": "compare", "title": {"bn": "এটা কোথায়?", "en": "Where is it?"}, "items": [
        {"ar": "فِي", "label": {"bn": "ফী — ভেতরে", "en": "fee — in"}, "desc": {"bn": "{{الْقَلَمُ فِي الْحَقِيبَةِ}} — কলম ব্যাগের ভেতরে", "en": "{{الْقَلَمُ فِي الْحَقِيبَةِ}} — the pen is in the bag"}},
        {"ar": "عَلَى", "label": {"bn": "আলা — উপরে", "en": "'alaa — on"}, "desc": {"bn": "{{الْكِتَابُ عَلَى الْمَكْتَبِ}} — বই টেবিলের উপরে", "en": "{{الْكِتَابُ عَلَى الْمَكْتَبِ}} — the book is on the desk"}},
        {"ar": "تَحْتَ", "label": {"bn": "তাহতা — নিচে", "en": "taḥta — under"}, "desc": {"bn": "{{الْحَقِيبَةُ تَحْتَ الْكُرْسِيِّ}} — ব্যাগ চেয়ারের নিচে", "en": "{{الْحَقِيبَةُ تَحْتَ الْكُرْسِيِّ}} — the bag is under the chair"}}
      ]},
      {"type": "examples", "title": {"bn": "ছোট বাক্য", "en": "Short sentences"}, "items": [
        {"ar": "هٰذَا كِتَابٌ", "tr": {"bn": "হাযা কিতাব", "en": "haadhaa kitaab"}, "mean": {"bn": "এটি একটি বই", "en": "This is a book"}, "hl": "هٰذَا"},
        {"ar": "هٰذِهِ سَيَّارَةٌ", "tr": {"bn": "হাযিহী সাইয়ারাহ", "en": "haadhihee sayyaarah"}, "mean": {"bn": "এটি একটি গাড়ি", "en": "This is a car"}, "note": {"bn": "{{ة}}-ওয়ালা শব্দের জন্য {{هٰذِهِ}}।", "en": "{{هٰذِهِ}} for a word ending in {{ة}}."}, "hl": "هٰذِهِ"},
        {"ar": "أَيْنَ الْمَسْجِدُ؟", "tr": {"bn": "আইনাল মাসজিদ?", "en": "aynal-masjid?"}, "mean": {"bn": "মসজিদ কোথায়?", "en": "Where is the masjid?"}, "hl": "أَيْنَ"},
        {"ar": "الْمَسْجِدُ قَرِيبٌ", "tr": {"bn": "আল-মাসজিদু কারীব", "en": "al-masjidu qareeb"}, "mean": {"bn": "মসজিদ কাছেই", "en": "The masjid is near"}},
        {"ar": "هٰذَا بَيْتِي", "tr": {"bn": "হাযা বাইতী", "en": "haadhaa baytee"}, "mean": {"bn": "এটা আমার বাড়ি", "en": "This is my house"}, "hl": "بَيْتِي"}
      ]},
      {"type": "quiz", "items": [
        {"q": {"bn": "{{قَلَمٌ}} মানে কী?", "en": "What is {{قَلَمٌ}}?"}, "options": [{"bn": "বই", "en": "book"}, {"bn": "কলম", "en": "pen"}, {"bn": "ব্যাগ", "en": "bag"}], "answer": 1},
        {"q": {"bn": "আরবিতে {{دَفْتَرٌ}} মানে কী?", "en": "In Arabic, {{دَفْتَرٌ}} means:"}, "options": [{"bn": "অফিস", "en": "office"}, {"bn": "খাতা", "en": "notebook"}, {"bn": "দরজা", "en": "door"}], "answer": 1},
        {"q": {"bn": "“রান্নাঘর” কোনটি?", "en": "Which is “kitchen”?"}, "options": ["مَطْبَخٌ", "مَكْتَبٌ", "مَسْجِدٌ"], "answer": 0},
        {"q": {"bn": "{{مَسْجِدٌ}} শব্দটি কোন কাজ থেকে এসেছে?", "en": "{{مَسْجِدٌ}} comes from which action?"}, "options": [{"bn": "লেখা", "en": "writing"}, {"bn": "সিজদা করা", "en": "prostrating"}, {"bn": "পড়া", "en": "studying"}], "answer": 1},
        {"q": {"bn": "“বই টেবিলের উপরে” — শূন্যস্থানে কী বসবে? {{الْكِتَابُ ___ الْمَكْتَبِ}}", "en": "“The book is on the desk” — fill the gap: {{الْكِتَابُ ___ الْمَكْتَبِ}}"}, "options": ["فِي", "عَلَى", "تَحْتَ"], "answer": 1},
        {"q": {"bn": "{{سَيَّارَةٌ}}-এর জন্য কোন শব্দ ঠিক?", "en": "Which word fits {{سَيَّارَةٌ}}?"}, "options": ["هٰذَا", "هٰذِهِ"], "answer": 1},
        {"q": {"bn": "{{مِفْتَاحٌ}} দিয়ে আমরা কী করি?", "en": "What do we do with a {{مِفْتَاحٌ}}?"}, "options": [{"bn": "দরজা খুলি", "en": "open a door"}, {"bn": "লিখি", "en": "write"}, {"bn": "খাই", "en": "eat"}], "answer": 0}
      ]}
    ]
  },
  {
    "id": "daily-food",
    "icon": "تمر",
    "title": {"bn": "খাবার-দাবার ও বাজার", "en": "Food, Drink & the Market"},
    "subtitle": {"bn": "রুটি, পানি, খেজুর — আর দোকানে দরদাম", "en": "Bread, water, dates — and bargaining at the shop"},
    "minutes": 15,
    "goals": [
      {"bn": "প্রতিদিনের খাবার ও পানীয়ের নাম", "en": "Name everyday foods and drinks"},
      {"bn": "দোকানে দাম জিজ্ঞেস করা ও কেনা", "en": "Ask prices and buy at a shop"},
      {"bn": "খাওয়ার আগে-পরের সুন্নাহ বাক্য", "en": "Sunnah phrases before and after eating"}
    ],
    "blocks": [
      {"type": "text", "bn": "ক্ষুধা লেগেছে? চলুন আরবির বাজারে ঘুরে আসি! খেজুর, রুটি, মধু, মাছ — সব কিনব, আর দাম নিয়ে একটু দরদামও করব। কিন্তু খাওয়ার আগে কী বলতে হয়, ভুলবেন না যেন!", "en": "Hungry? Let's take a walk through an Arabic market! We'll buy dates, bread, honey, fish — and haggle a little over prices. But don't forget what to say before eating!"},
      {"type": "vocab", "title": {"bn": "খাবার", "en": "Food"}, "items": [
        {"ar": "طَعَامٌ", "tr": {"bn": "তা'আম", "en": "ṭa'aam"}, "mean": {"bn": "খাবার", "en": "food"}},
        {"ar": "خُبْزٌ", "tr": {"bn": "খুবয", "en": "khubz"}, "mean": {"bn": "রুটি", "en": "bread"}},
        {"ar": "أَرُزٌّ", "tr": {"bn": "আরুযয", "en": "aruzz"}, "mean": {"bn": "ভাত, চাল", "en": "rice"}},
        {"ar": "لَحْمٌ", "tr": {"bn": "লাহম", "en": "laḥm"}, "mean": {"bn": "মাংস", "en": "meat"}},
        {"ar": "دَجَاجٌ", "tr": {"bn": "দাজাজ", "en": "dajaaj"}, "mean": {"bn": "মুরগি", "en": "chicken"}},
        {"ar": "سَمَكٌ", "tr": {"bn": "সামাক", "en": "samak"}, "mean": {"bn": "মাছ", "en": "fish"}},
        {"ar": "بَيْضٌ", "tr": {"bn": "বাইদ", "en": "bayḍ"}, "mean": {"bn": "ডিম", "en": "eggs"}},
        {"ar": "خُضَارٌ", "tr": {"bn": "খুদার", "en": "khuḍaar"}, "mean": {"bn": "শাকসবজি", "en": "vegetables"}},
        {"ar": "مِلْحٌ", "tr": {"bn": "মিলহ", "en": "milḥ"}, "mean": {"bn": "লবণ", "en": "salt"}},
        {"ar": "سُكَّرٌ", "tr": {"bn": "সুক্কার", "en": "sukkar"}, "mean": {"bn": "চিনি", "en": "sugar"}}
      ]},
      {"type": "vocab", "title": {"bn": "ফল ও মিষ্টি", "en": "Fruit and sweet things"}, "items": [
        {"ar": "فَاكِهَةٌ", "tr": {"bn": "ফাকিহাহ", "en": "faakihah"}, "mean": {"bn": "ফল", "en": "fruit"}, "example": {"ar": "فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ", "mean": {"bn": "সেখানে আছে ফল, খেজুর গাছ ও ডালিম", "en": "In them are fruit, date-palms and pomegranates"}, "ref": "55:68"}},
        {"ar": "تَمْرٌ", "tr": {"bn": "তামর", "en": "tamr"}, "mean": {"bn": "খেজুর", "en": "dates"}},
        {"ar": "تُفَّاحٌ", "tr": {"bn": "তুফফাহ", "en": "tuffaaḥ"}, "mean": {"bn": "আপেল", "en": "apples"}},
        {"ar": "مَوْزٌ", "tr": {"bn": "মাওয", "en": "mawz"}, "mean": {"bn": "কলা", "en": "bananas"}},
        {"ar": "عِنَبٌ", "tr": {"bn": "ইনাব", "en": "'inab"}, "mean": {"bn": "আঙুর", "en": "grapes"}},
        {"ar": "عَسَلٌ", "tr": {"bn": "আসাল", "en": "'asal"}, "mean": {"bn": "মধু", "en": "honey"}, "example": {"ar": "وَأَنْهَارٌ مِنْ عَسَلٍ مُصَفًّى", "mean": {"bn": "এবং বিশুদ্ধ মধুর নহর (জান্নাতে)", "en": "and rivers of purified honey (in Paradise)"}, "ref": "47:15"}}
      ]},
      {"type": "vocab", "title": {"bn": "পানীয়", "en": "Drinks"}, "items": [
        {"ar": "مَاءٌ", "tr": {"bn": "মা", "en": "maaʾ"}, "mean": {"bn": "পানি", "en": "water"}, "example": {"ar": "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ", "mean": {"bn": "আর আমি পানি থেকে প্রত্যেক জীবন্ত জিনিস সৃষ্টি করেছি", "en": "And We made from water every living thing"}, "ref": "21:30"}},
        {"ar": "حَلِيبٌ", "tr": {"bn": "হালীব", "en": "ḥaleeb"}, "mean": {"bn": "দুধ", "en": "milk"}},
        {"ar": "شَايٌ", "tr": {"bn": "শাই", "en": "shaay"}, "mean": {"bn": "চা", "en": "tea"}},
        {"ar": "قَهْوَةٌ", "tr": {"bn": "কাহওয়াহ", "en": "qahwah"}, "mean": {"bn": "কফি", "en": "coffee"}},
        {"ar": "عَصِيرٌ", "tr": {"bn": "আসীর", "en": "'aṣeer"}, "mean": {"bn": "ফলের রস, জুস", "en": "juice"}}
      ]},
      {"type": "tip", "kind": "fun", "bn": "শব্দের বিশ্বভ্রমণ! ইংরেজি **coffee** এসেছে তুর্কি হয়ে আরবি {{قَهْوَةٌ}} থেকে। ইংরেজি **sugar** এসেছে আরবি {{سُكَّرٌ}} থেকে — আর আরবরা শব্দটি পেয়েছিল পারস্য হয়ে আমাদের উপমহাদেশের “শর্করা” থেকে! আর বাংলার “শরবত” ও “হালুয়া” — দুটোই আরবি শিকড়ের শব্দ।", "en": "Words travel the world! English **coffee** came via Turkish from Arabic {{قَهْوَةٌ}}. English **sugar** came from Arabic {{سُكَّرٌ}} — and the Arabs got it via Persian from our subcontinent's Sanskrit “sharkara”! Bangla “shorbot” (sherbet) and “halua” both have Arabic roots too."},
      {"type": "tip", "kind": "tip", "bn": "কুরআনে দুধের জন্য {{لَبَنٌ}} শব্দ এসেছে (যেমন ৪৭:১৫), আর আজকের আরবিতে দুধকে সাধারণত বলে {{حَلِيبٌ}}। দুটোই চিনে রাখুন।", "en": "The Quran uses {{لَبَنٌ}} for milk (e.g. 47:15), while modern Arabic usually says {{حَلِيبٌ}}. Know both."},
      {"type": "steps", "title": {"bn": "খাওয়ার সুন্নাহ", "en": "Sunnah of eating"}, "items": [
        {"title": {"bn": "শুরুতে", "en": "Before eating"}, "ar": "بِسْمِ اللّٰهِ", "tr": {"bn": "বিসমিল্লাহ", "en": "bismillaah"}, "mean": {"bn": "আল্লাহর নামে", "en": "In the name of Allah"}, "desc": {"bn": "ডান হাতে, নিজের সামনে থেকে খান।", "en": "Eat with your right hand, from what is in front of you."}},
        {"title": {"bn": "শুরুতে ভুলে গেলে", "en": "If you forgot at the start"}, "ar": "بِسْمِ اللّٰهِ أَوَّلَهُ وَآخِرَهُ", "tr": {"bn": "বিসমিল্লাহি আওয়ালাহু ওয়া আখিরাহ", "en": "bismillaahi awwalahu wa aakhirah"}, "mean": {"bn": "এর শুরু ও শেষ আল্লাহর নামে", "en": "In the name of Allah, at its beginning and its end"}},
        {"title": {"bn": "শেষে", "en": "After eating"}, "ar": "الْحَمْدُ لِلّٰهِ", "tr": {"bn": "আলহামদু লিল্লাহ", "en": "al-ḥamdu lillaah"}, "mean": {"bn": "সব প্রশংসা আল্লাহর", "en": "All praise is for Allah"}, "desc": {"bn": "আল্লাহর নিয়ামতের জন্য শুকরিয়া জানান।", "en": "Thank Allah for His blessing."}}
      ]},
      {"type": "vocab", "title": {"bn": "বাজারের বাক্য", "en": "Market phrases"}, "items": [
        {"ar": "بِكَمْ هٰذَا؟", "tr": {"bn": "বিকাম হাযা?", "en": "bikam haadhaa?"}, "mean": {"bn": "এটার দাম কত?", "en": "How much is this?"}},
        {"ar": "أُرِيدُ ...", "tr": {"bn": "উরীদু ...", "en": "ureedu ..."}, "mean": {"bn": "আমি ... চাই", "en": "I want ..."}},
        {"ar": "هَلْ عِنْدَكَ ...؟", "tr": {"bn": "হাল ইনদাকা ...?", "en": "hal 'indaka ...?"}, "mean": {"bn": "আপনার কাছে ... আছে?", "en": "Do you have ...?"}},
        {"ar": "غَالٍ", "tr": {"bn": "গালিন", "en": "ghaalin"}, "mean": {"bn": "দামি", "en": "expensive"}},
        {"ar": "رَخِيصٌ", "tr": {"bn": "রাখীস", "en": "rakheeṣ"}, "mean": {"bn": "সস্তা", "en": "cheap"}},
        {"ar": "أَنَا جَائِعٌ", "tr": {"bn": "আনা জাই'", "en": "ana jaaʾi'"}, "mean": {"bn": "আমার ক্ষুধা লেগেছে", "en": "I am hungry"}},
        {"ar": "أَنَا عَطْشَانُ", "tr": {"bn": "আনা আতশান", "en": "ana 'aṭshaan"}, "mean": {"bn": "আমার পিপাসা লেগেছে", "en": "I am thirsty"}}
      ]},
      {"type": "examples", "title": {"bn": "দোকানে এক মিনিট", "en": "One minute at the shop"}, "items": [
        {"ar": "أُرِيدُ خُبْزًا وَحَلِيبًا", "tr": {"bn": "উরীদু খুবযান ওয়া হালীবা", "en": "ureedu khubzan wa ḥaleeban"}, "mean": {"bn": "আমি রুটি আর দুধ চাই", "en": "I want bread and milk"}, "note": {"bn": "“চাই” ক্রিয়ার পরে শব্দের শেষে {{ـًا}} (আন) হয়।", "en": "After “want”, the noun ends in {{ـًا}} (an)."}, "hl": "أُرِيدُ"},
        {"ar": "هَلْ عِنْدَكَ تَمْرٌ؟", "tr": {"bn": "হাল ইনদাকা তামর?", "en": "hal 'indaka tamr?"}, "mean": {"bn": "আপনার কাছে খেজুর আছে?", "en": "Do you have dates?"}, "hl": "هَلْ عِنْدَكَ"},
        {"ar": "بِكَمْ هٰذَا الْعَسَلُ؟", "tr": {"bn": "বিকাম হাযাল আসাল?", "en": "bikam haadhal-'asal?"}, "mean": {"bn": "এই মধুর দাম কত?", "en": "How much is this honey?"}, "hl": "بِكَمْ"},
        {"ar": "هٰذَا غَالٍ جِدًّا", "tr": {"bn": "হাযা গালিন জিদ্দা", "en": "haadhaa ghaalin jiddan"}, "mean": {"bn": "এটা খুব দামি", "en": "This is very expensive"}, "hl": "جِدًّا"}
      ]},
      {"type": "quiz", "items": [
        {"q": {"bn": "{{مَاءٌ}} মানে কী?", "en": "What is {{مَاءٌ}}?"}, "options": [{"bn": "দুধ", "en": "milk"}, {"bn": "পানি", "en": "water"}, {"bn": "চা", "en": "tea"}], "answer": 1},
        {"q": {"bn": "“খেজুর” আরবিতে কী?", "en": "What is “dates” in Arabic?"}, "options": ["تُفَّاحٌ", "تَمْرٌ", "مَوْزٌ"], "answer": 1},
        {"q": {"bn": "দোকানে দাম জিজ্ঞেস করতে কী বলবেন?", "en": "To ask the price at a shop you say:"}, "options": ["بِكَمْ هٰذَا؟", "أَيْنَ الْمَسْجِدُ؟", "مَا اسْمُكَ؟"], "answer": 0},
        {"q": {"bn": "{{سَمَكٌ}} কী?", "en": "What is {{سَمَكٌ}}?"}, "options": [{"bn": "মাংস", "en": "meat"}, {"bn": "মুরগি", "en": "chicken"}, {"bn": "মাছ", "en": "fish"}], "answer": 2},
        {"q": {"bn": "খাওয়ার শুরুতে বিসমিল্লাহ বলতে ভুলে গেলে কী বলবেন?", "en": "If you forgot bismillah at the start of a meal, say:"}, "options": ["بِسْمِ اللّٰهِ أَوَّلَهُ وَآخِرَهُ", "إِنَّا لِلّٰهِ", "مَعَ السَّلَامَةِ"], "answer": 0},
        {"q": {"bn": "{{رَخِيصٌ}}-এর বিপরীত কোনটি?", "en": "The opposite of {{رَخِيصٌ}} is:"}, "options": ["غَالٍ", "جَائِعٌ", "عَسَلٌ"], "answer": 0},
        {"q": {"bn": "ইংরেজি “coffee” শব্দটি কোন আরবি শব্দ থেকে এসেছে?", "en": "English “coffee” comes from which Arabic word?"}, "options": ["قَهْوَةٌ", "حَلِيبٌ", "عَصِيرٌ"], "answer": 0}
      ]}
    ]
  },
  {
    "id": "daily-time",
    "icon": "يوم",
    "title": {"bn": "সময়: দিন, মাস ও নামাজ", "en": "Time: Days, Months & Prayers"},
    "subtitle": {"bn": "সপ্তাহের সাত দিন, হিজরি বারো মাস, দিনের ভাগ আর পাঁচ ওয়াক্ত", "en": "Seven days, twelve Hijri months, parts of the day and the five prayers"},
    "minutes": 20,
    "goals": [
      {"bn": "সপ্তাহের দিনগুলোর আরবি নাম (আর তাদের গোপন সংখ্যা!)", "en": "The days of the week (and their hidden numbers!)"},
      {"bn": "হিজরি বারো মাসের নাম ও গুরুত্ব", "en": "The twelve Hijri months and why they matter"},
      {"bn": "আজ, কাল, গতকাল, সকাল, রাত বলা", "en": "Say today, tomorrow, yesterday, morning, night"},
      {"bn": "পাঁচ ওয়াক্ত নামাজের নামের অর্থ", "en": "The meanings of the five prayer names"}
    ],
    "blocks": [
      {"type": "text", "bn": "একজন মুসলিমের দিন ঘড়ির কাঁটায় নয়, **নামাজের ওয়াক্তে** ভাগ হয় — ফজর, যোহর, আসর, মাগরিব, এশা। আর বছর চলে চাঁদের হিসেবে — মুহাররম থেকে যুলহিজ্জাহ। এই সব নাম আসলে আরবি শব্দ, এবং প্রতিটির পেছনে একটা সুন্দর অর্থ আছে।", "en": "A Muslim's day is divided not by the clock but by **prayer times** — Fajr, Zuhr, 'Asr, Maghrib, 'Isha. And the year follows the moon — from Muharram to Dhul-Hijjah. All these names are Arabic words, and each hides a lovely meaning."},
      {"type": "vocab", "title": {"bn": "সপ্তাহের দিন", "en": "Days of the week"}, "items": [
        {"ar": "يَوْمُ الْأَحَدِ", "tr": {"bn": "ইয়াওমুল আহাদ", "en": "yawmul-aḥad"}, "mean": {"bn": "রবিবার", "en": "Sunday"}},
        {"ar": "يَوْمُ الِاثْنَيْنِ", "tr": {"bn": "ইয়াওমুল ইসনাইন", "en": "yawmul-ithnayn"}, "mean": {"bn": "সোমবার", "en": "Monday"}},
        {"ar": "يَوْمُ الثُّلَاثَاءِ", "tr": {"bn": "ইয়াওমুস সুলাসা", "en": "yawmuth-thulaathaaʾ"}, "mean": {"bn": "মঙ্গলবার", "en": "Tuesday"}},
        {"ar": "يَوْمُ الْأَرْبِعَاءِ", "tr": {"bn": "ইয়াওমুল আরবিআ", "en": "yawmul-arbi'aaʾ"}, "mean": {"bn": "বুধবার", "en": "Wednesday"}},
        {"ar": "يَوْمُ الْخَمِيسِ", "tr": {"bn": "ইয়াওমুল খামীস", "en": "yawmul-khamees"}, "mean": {"bn": "বৃহস্পতিবার", "en": "Thursday"}},
        {"ar": "يَوْمُ الْجُمُعَةِ", "tr": {"bn": "ইয়াওমুল জুমুআহ", "en": "yawmul-jumu'ah"}, "mean": {"bn": "শুক্রবার", "en": "Friday"}, "example": {"ar": "إِذَا نُودِيَ لِلصَّلَاةِ مِنْ يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَىٰ ذِكْرِ اللّٰهِ", "mean": {"bn": "যখন জুমার দিনে নামাজের জন্য ডাকা হয়, তখন আল্লাহর স্মরণের দিকে দ্রুত যাও", "en": "When the call is made for prayer on Friday, hasten to the remembrance of Allah"}, "ref": "62:9"}},
        {"ar": "يَوْمُ السَّبْتِ", "tr": {"bn": "ইয়াওমুস সাবত", "en": "yawmus-sabt"}, "mean": {"bn": "শনিবার", "en": "Saturday"}}
      ]},
      {"type": "table", "title": {"bn": "দিনের নামে লুকানো সংখ্যা", "en": "Numbers hidden in the day names"}, "head": [{"bn": "দিন", "en": "Day"}, {"bn": "লুকানো শব্দ", "en": "Hidden word"}, {"bn": "অর্থ", "en": "Meaning"}], "rows": [
        ["الْأَحَدُ", "أَحَدٌ", {"bn": "এক — সপ্তাহের ১ম দিন", "en": "one — 1st day of the week"}],
        ["الِاثْنَيْنِ", "اِثْنَانِ", {"bn": "দুই — ২য় দিন", "en": "two — 2nd day"}],
        ["الثُّلَاثَاءُ", "ثَلَاثَةٌ", {"bn": "তিন — ৩য় দিন", "en": "three — 3rd day"}],
        ["الْأَرْبِعَاءُ", "أَرْبَعَةٌ", {"bn": "চার — ৪র্থ দিন", "en": "four — 4th day"}],
        ["الْخَمِيسُ", "خَمْسَةٌ", {"bn": "পাঁচ — ৫ম দিন", "en": "five — 5th day"}],
        ["الْجُمُعَةُ", "جَمَعَ", {"bn": "একত্র করা — সবাই জামাতে জড়ো হয়", "en": "to gather — people gather for prayer"}],
        ["السَّبْتُ", "سَبْتٌ", {"bn": "বিরতি, বিশ্রাম", "en": "rest, pause"}]
      ]},
      {"type": "tip", "kind": "memory", "bn": "সংখ্যা পাঠের কথা মনে আছে? রবিবার থেকে বৃহস্পতিবার — আরবিতে দিনগুলো আসলে **১ম, ২য়, ৩য়, ৪র্থ, ৫ম দিন**! আর বাংলার “জুমা” তো আরবি {{الْجُمُعَةُ}}-ই।", "en": "Remember the numbers lesson? Sunday to Thursday are literally **day 1, 2, 3, 4, 5** in Arabic! And the Bangla “Jumma” is simply Arabic {{الْجُمُعَةُ}}."},
      {"type": "tip", "kind": "fun", "bn": "ইসলামি হিসেবে নতুন দিন শুরু হয় **মাগরিবে**, মধ্যরাতে নয়। তাই বৃহস্পতিবার সন্ধ্যার পরের রাতটাই “জুমার রাত”, আর রমজানের চাঁদ দেখা গেলে সেই রাত থেকেই তারাবিহ শুরু।", "en": "In the Islamic reckoning a new day begins at **Maghrib**, not midnight. So the night after Thursday's sunset is already “Friday night”, and when the Ramadan moon is sighted, tarawih starts that same night."},
      {"type": "table", "title": {"bn": "হিজরি বারো মাস", "en": "The twelve Hijri months"}, "head": ["#", {"bn": "আরবি নাম", "en": "Arabic name"}, {"bn": "উচ্চারণ", "en": "Pronunciation"}, {"bn": "এক লাইনে গুরুত্ব", "en": "Why it matters"}], "rows": [
        ["١", "مُحَرَّمٌ", {"bn": "মুহাররম", "en": "Muḥarram"}, {"bn": "বছরের প্রথম মাস ও সম্মানিত মাস; ১০ তারিখ আশুরার রোজা।", "en": "First month and a sacred month; fasting on the 10th, 'Ashura."}],
        ["٢", "صَفَرٌ", {"bn": "সফর", "en": "Ṣafar"}, {"bn": "এ মাসকে অশুভ ভাবার কুসংস্কার নবী ﷺ বাতিল করেছেন।", "en": "The Prophet ﷺ rejected the superstition that this month is unlucky."}],
        ["٣", "رَبِيعُ الْأَوَّلِ", {"bn": "রবিউল আউয়াল", "en": "Rabee'ul-Awwal"}, {"bn": "নবী ﷺ-এর জন্ম ও মদিনায় হিজরতের মাস হিসেবে প্রসিদ্ধ।", "en": "Known as the month of the Prophet's ﷺ birth and his Hijrah to Madinah."}],
        ["٤", "رَبِيعُ الْآخِرِ", {"bn": "রবিউল আখির (রবিউস সানি)", "en": "Rabee'ul-Aakhir (Rabee' ath-Thaanee)"}, {"bn": "“পরের রবি” — রবি মানে বসন্ত।", "en": "“The later Rabee'” — rabee' means spring."}],
        ["٥", "جُمَادَى الْأُولَى", {"bn": "জুমাদাল উলা (জমাদিউল আউয়াল)", "en": "Jumaadal-Oolaa"}, {"bn": "প্রথম জুমাদা; নামটি সম্ভবত শীতে পানি জমে যাওয়া ({{جَمَدَ}}) থেকে।", "en": "The first Jumada; the name probably comes from water freezing ({{جَمَدَ}}) in winter."}],
        ["٦", "جُمَادَى الْآخِرَةِ", {"bn": "জুমাদাল আখিরাহ (জমাদিউস সানি)", "en": "Jumaadal-Aakhirah"}, {"bn": "দ্বিতীয় জুমাদা; এ মাসে বছরের প্রথম অর্ধেক শেষ হয়।", "en": "The second Jumada; the first half of the year ends here."}],
        ["٧", "رَجَبٌ", {"bn": "রজব", "en": "Rajab"}, {"bn": "চারটি সম্মানিত মাসের একটি।", "en": "One of the four sacred months."}],
        ["٨", "شَعْبَانُ", {"bn": "শাবান", "en": "Sha'baan"}, {"bn": "নবী ﷺ এ মাসে অনেক নফল রোজা রাখতেন — রমজানের প্রস্তুতি।", "en": "The Prophet ﷺ fasted much in it — preparing for Ramadan."}],
        ["٩", "رَمَضَانُ", {"bn": "রমাদান (রমজান)", "en": "Ramaḍaan"}, {"bn": "রোজার মাস; এ মাসেই কুরআন নাজিল হয় (২:১৮৫), আছে লাইলাতুল কদর।", "en": "Month of fasting; the Quran was sent down in it (2:185); it holds Laylat al-Qadr."}],
        ["١٠", "شَوَّالٌ", {"bn": "শাওয়াল", "en": "Shawwaal"}, {"bn": "১ তারিখে ঈদুল ফিতর; ছয়টি নফল রোজার মাস।", "en": "Eid al-Fitr on the 1st; six voluntary fasts."}],
        ["١١", "ذُو الْقَعْدَةِ", {"bn": "যুলকা'দাহ (জিলকদ)", "en": "Dhul-Qa'dah"}, {"bn": "সম্মানিত মাস; {{قَعَدَ}} (বসে থাকা) থেকে — আরবরা এ মাসে যুদ্ধ থেকে বিরত থাকত।", "en": "A sacred month; from {{قَعَدَ}} (to sit) — Arabs stayed back from fighting in it."}],
        ["١٢", "ذُو الْحِجَّةِ", {"bn": "যুলহিজ্জাহ (জিলহজ)", "en": "Dhul-Ḥijjah"}, {"bn": "হজের মাস; ৯ তারিখ আরাফার দিন, ১০ তারিখ ঈদুল আযহা।", "en": "Month of Hajj; 9th is the Day of 'Arafah, 10th is Eid al-Adha."}]
      ]},
      {"type": "examples", "title": {"bn": "কুরআনে মাসের হিসাব", "en": "The months in the Quran"}, "items": [
        {"ar": "إِنَّ عِدَّةَ الشُّهُورِ عِنْدَ اللّٰهِ اثْنَا عَشَرَ شَهْرًا", "tr": {"bn": "ইন্না ইদ্দাতাশ শুহূরি ইনদাল্লাহিসনা আশারা শাহরা", "en": "inna 'iddatash-shuhoori 'indallaahith-naa 'ashara shahran"}, "mean": {"bn": "নিশ্চয়ই আল্লাহর কাছে মাসের সংখ্যা বারো (৯:৩৬)", "en": "Indeed, the number of months with Allah is twelve (9:36)"}, "note": {"bn": "এই আয়াতেই বলা হয়েছে, এর মধ্যে চারটি সম্মানিত: মুহাররম, রজব, যুলকা'দাহ, যুলহিজ্জাহ।", "en": "The same verse says four of them are sacred: Muharram, Rajab, Dhul-Qa'dah, Dhul-Hijjah."}, "hl": "اثْنَا عَشَرَ"}
      ]},
      {"type": "tip", "kind": "memory", "bn": "চারটি সম্মানিত মাস মনে রাখার ছড়া: **“বছরের শুরু-শেষ, মাঝে রজব বেশ”** — শুরু = মুহাররম, শেষ দুই = যুলকা'দাহ ও যুলহিজ্জাহ, আর মাঝে রজব।", "en": "A rhyme for the four sacred months: **“Start and end, with Rajab in the middle”** — start = Muharram, the last two = Dhul-Qa'dah and Dhul-Hijjah, and Rajab in the middle."},
      {"type": "vocab", "title": {"bn": "দিনের ভাগ ও সময়", "en": "Parts of the day and time words"}, "items": [
        {"ar": "فَجْرٌ", "tr": {"bn": "ফাজর", "en": "fajr"}, "mean": {"bn": "ভোর, ঊষা", "en": "dawn"}},
        {"ar": "صَبَاحٌ", "tr": {"bn": "সাবাহ", "en": "ṣabaaḥ"}, "mean": {"bn": "সকাল", "en": "morning"}},
        {"ar": "مَسَاءٌ", "tr": {"bn": "মাসা", "en": "masaaʾ"}, "mean": {"bn": "সন্ধ্যা", "en": "evening"}},
        {"ar": "لَيْلٌ", "tr": {"bn": "লাইল", "en": "layl"}, "mean": {"bn": "রাত", "en": "night"}},
        {"ar": "يَوْمٌ", "tr": {"bn": "ইয়াওম", "en": "yawm"}, "mean": {"bn": "দিন", "en": "day"}},
        {"ar": "أُسْبُوعٌ", "tr": {"bn": "উসবূ'", "en": "usboo'"}, "mean": {"bn": "সপ্তাহ", "en": "week"}},
        {"ar": "شَهْرٌ", "tr": {"bn": "শাহর", "en": "shahr"}, "mean": {"bn": "মাস", "en": "month"}, "example": {"ar": "شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ", "mean": {"bn": "রমজান মাস, যাতে কুরআন নাজিল করা হয়েছে", "en": "The month of Ramadan, in which the Quran was sent down"}, "ref": "2:185"}},
        {"ar": "سَنَةٌ", "tr": {"bn": "সানাহ", "en": "sanah"}, "mean": {"bn": "বছর", "en": "year"}},
        {"ar": "الْيَوْمَ", "tr": {"bn": "আল-ইয়াওমা", "en": "al-yawma"}, "mean": {"bn": "আজ", "en": "today"}},
        {"ar": "غَدًا", "tr": {"bn": "গাদান", "en": "ghadan"}, "mean": {"bn": "আগামীকাল", "en": "tomorrow"}},
        {"ar": "أَمْسِ", "tr": {"bn": "আমসি", "en": "amsi"}, "mean": {"bn": "গতকাল", "en": "yesterday"}},
        {"ar": "الْآنَ", "tr": {"bn": "আল-আনা", "en": "al-aana"}, "mean": {"bn": "এখন", "en": "now"}}
      ]},
      {"type": "table", "title": {"bn": "পাঁচ ওয়াক্ত নামাজ", "en": "The five daily prayers"}, "head": [{"bn": "নামাজ", "en": "Prayer"}, {"bn": "বাংলায়", "en": "Name"}, {"bn": "শব্দের অর্থ", "en": "Word meaning"}, {"bn": "ফরজ রাকাত", "en": "Fard rak'ahs"}], "rows": [
        ["الْفَجْرُ", {"bn": "ফজর", "en": "Fajr"}, {"bn": "ভোর — রাতের অন্ধকার “ফেটে” আলো বের হওয়া", "en": "dawn — light “breaking” through the night"}, "٢"],
        ["الظُّهْرُ", {"bn": "যোহর", "en": "Ẓuhr"}, {"bn": "দুপুর, সূর্য মাথার উপর থেকে হেলে পড়ার পর", "en": "midday, just after the sun passes its peak"}, "٤"],
        ["الْعَصْرُ", {"bn": "আসর", "en": "'Aṣr"}, {"bn": "বিকেল; “সময়” — সূরা আসরের নাম", "en": "afternoon; “time” — the name of Surah al-'Asr"}, "٤"],
        ["الْمَغْرِبُ", {"bn": "মাগরিব", "en": "Maghrib"}, {"bn": "সূর্য ডোবার সময় / পশ্চিম", "en": "sunset / the west"}, "٣"],
        ["الْعِشَاءُ", {"bn": "এশা", "en": "'Ishaaʾ"}, {"bn": "রাতের অন্ধকার নেমে আসা", "en": "when night's darkness falls"}, "٤"]
      ]},
      {"type": "tip", "kind": "fun", "bn": "{{الْمَغْرِبُ}} মানে “সূর্য ডোবার জায়গা” অর্থাৎ পশ্চিম — তাই আরবিতে মরক্কো দেশের নামও {{الْمَغْرِبُ}}, কারণ এটি আরব বিশ্বের একেবারে পশ্চিমে!", "en": "{{الْمَغْرِبُ}} means “the place where the sun sets”, i.e. the west — that's why Morocco's Arabic name is also {{الْمَغْرِبُ}}: it is at the far west of the Arab world!"},
      {"type": "examples", "title": {"bn": "সময় নিয়ে বাক্য", "en": "Sentences about time"}, "items": [
        {"ar": "الْيَوْمَ يَوْمُ الْجُمُعَةِ", "tr": {"bn": "আল-ইয়াওমা ইয়াওমুল জুমুআহ", "en": "al-yawma yawmul-jumu'ah"}, "mean": {"bn": "আজ শুক্রবার", "en": "Today is Friday"}, "hl": "الْيَوْمَ"},
        {"ar": "أُصَلِّي الْفَجْرَ فِي الْمَسْجِدِ", "tr": {"bn": "উসাল্লিল ফাজরা ফিল মাসজিদ", "en": "uṣallil-fajra fil-masjid"}, "mean": {"bn": "আমি মসজিদে ফজর পড়ি", "en": "I pray Fajr in the masjid"}, "hl": "الْفَجْرَ"},
        {"ar": "نَصُومُ فِي رَمَضَانَ", "tr": {"bn": "নাসূমু ফী রামাদান", "en": "naṣoomu fee ramaḍaan"}, "mean": {"bn": "আমরা রমজানে রোজা রাখি", "en": "We fast in Ramadan"}, "hl": "رَمَضَانَ"},
        {"ar": "أَرَاكَ غَدًا بَعْدَ الْعَصْرِ", "tr": {"bn": "আরাকা গাদান বা'দাল আসর", "en": "araaka ghadan ba'dal-'aṣr"}, "mean": {"bn": "কাল আসরের পর তোমার সাথে দেখা হবে", "en": "See you tomorrow after 'Asr"}, "hl": "غَدًا"}
      ]},
      {"type": "quiz", "items": [
        {"q": {"bn": "{{يَوْمُ الْخَمِيسِ}} কোন দিন?", "en": "Which day is {{يَوْمُ الْخَمِيسِ}}?"}, "options": [{"bn": "মঙ্গলবার", "en": "Tuesday"}, {"bn": "বৃহস্পতিবার", "en": "Thursday"}, {"bn": "শনিবার", "en": "Saturday"}], "answer": 1, "explain": {"bn": "{{خَمِيس}}-এ লুকিয়ে আছে {{خَمْسَة}} (পাঁচ) — সপ্তাহের ৫ম দিন।", "en": "{{خَمِيس}} hides {{خَمْسَة}} (five) — the 5th day of the week."}},
        {"q": {"bn": "রোজার মাস কোনটি?", "en": "Which is the month of fasting?"}, "options": ["شَعْبَانُ", "رَمَضَانُ", "شَوَّالٌ"], "answer": 1},
        {"q": {"bn": "হজ কোন মাসে হয়?", "en": "In which month is Hajj?"}, "options": ["ذُو الْحِجَّةِ", "مُحَرَّمٌ", "رَجَبٌ"], "answer": 0},
        {"q": {"bn": "{{غَدًا}} মানে কী?", "en": "What does {{غَدًا}} mean?"}, "options": [{"bn": "গতকাল", "en": "yesterday"}, {"bn": "আজ", "en": "today"}, {"bn": "আগামীকাল", "en": "tomorrow"}], "answer": 2},
        {"q": {"bn": "সূর্য ডোবার পরের নামাজ কোনটি?", "en": "Which prayer comes right after sunset?"}, "options": ["الْعَصْرُ", "الْمَغْرِبُ", "الْفَجْرُ"], "answer": 1},
        {"q": {"bn": "আশুরা কোন মাসের ১০ তারিখ?", "en": "'Ashura is the 10th of which month?"}, "options": ["صَفَرٌ", "مُحَرَّمٌ", "رَمَضَانُ"], "answer": 1},
        {"q": {"bn": "{{لَيْلٌ}} মানে কী?", "en": "What is {{لَيْلٌ}}?"}, "options": [{"bn": "রাত", "en": "night"}, {"bn": "সকাল", "en": "morning"}, {"bn": "সপ্তাহ", "en": "week"}], "answer": 0},
        {"q": {"bn": "কোনটি চারটি সম্মানিত মাসের একটি নয়?", "en": "Which is NOT one of the four sacred months?"}, "options": ["رَجَبٌ", "مُحَرَّمٌ", "شَعْبَانُ", "ذُو الْقَعْدَةِ"], "answer": 2}
      ]}
    ]
  },
  {
    "id": "daily-colours",
    "icon": "لون",
    "title": {"bn": "রং ও বর্ণনা", "en": "Colours & Describing Things"},
    "subtitle": {"bn": "সাদা-কালো-লাল-সবুজ, আর বড়-ছোট-সুন্দর-নতুন", "en": "White, black, red, green — and big, small, beautiful, new"},
    "minutes": 15,
    "goals": [
      {"bn": "ছয়টি মূল রং ও আরও কয়েকটি রঙের নাম", "en": "Six basic colours and a few more"},
      {"bn": "রঙের পুরুষবাচক ও স্ত্রীবাচক রূপ", "en": "Masculine and feminine forms of colours"},
      {"bn": "বিপরীত শব্দ জোড়ায় বিশেষণ শেখা", "en": "Learn adjectives in opposite pairs"},
      {"bn": "বিশেষ্যের পরে বিশেষণ বসিয়ে বর্ণনা করা", "en": "Describe things: noun first, adjective after"}
    ],
    "blocks": [
      {"type": "text", "bn": "বাংলাদেশের পতাকায় কী কী রং? সবুজ আর লাল — আরবিতে {{أَخْضَرُ}} আর {{أَحْمَرُ}}! এই পাঠে আমরা রং আর বর্ণনার শব্দ শিখব, যাতে শুধু “এটা বই” নয়, বলতে পারি “এটা একটা **নতুন লাল** বই”।", "en": "What colours are on Bangladesh's flag? Green and red — in Arabic {{أَخْضَرُ}} and {{أَحْمَرُ}}! In this lesson we learn colours and describing words, so that instead of just “this is a book” we can say “this is a **new red** book”."},
      {"type": "vocab", "title": {"bn": "ছয়টি মূল রং", "en": "Six basic colours"}, "items": [
        {"ar": "أَبْيَضُ", "tr": {"bn": "আবয়াদ", "en": "abyaḍ"}, "mean": {"bn": "সাদা", "en": "white"}, "example": {"ar": "الْخَيْطُ الْأَبْيَضُ مِنَ الْخَيْطِ الْأَسْوَدِ مِنَ الْفَجْرِ", "mean": {"bn": "ভোরের সাদা রেখা কালো রেখা থেকে (স্পষ্ট হয়)", "en": "the white thread (of dawn) from the black thread"}, "ref": "2:187"}},
        {"ar": "أَسْوَدُ", "tr": {"bn": "আসওয়াদ", "en": "aswad"}, "mean": {"bn": "কালো", "en": "black"}},
        {"ar": "أَحْمَرُ", "tr": {"bn": "আহমার", "en": "aḥmar"}, "mean": {"bn": "লাল", "en": "red"}},
        {"ar": "أَخْضَرُ", "tr": {"bn": "আখদার", "en": "akhḍar"}, "mean": {"bn": "সবুজ", "en": "green"}},
        {"ar": "أَزْرَقُ", "tr": {"bn": "আযরাক", "en": "azraq"}, "mean": {"bn": "নীল", "en": "blue"}},
        {"ar": "أَصْفَرُ", "tr": {"bn": "আসফার", "en": "aṣfar"}, "mean": {"bn": "হলুদ", "en": "yellow"}, "example": {"ar": "إِنَّهَا بَقَرَةٌ صَفْرَاءُ فَاقِعٌ لَوْنُهَا", "mean": {"bn": "তা একটি হলুদ গাভী, যার রং উজ্জ্বল গাঢ়", "en": "It is a yellow cow, bright in colour"}, "ref": "2:69"}}
      ]},
      {"type": "tip", "kind": "memory", "bn": "ছয়টি মূল রং একই ছাঁচে তৈরি: **{{أَ}} + তিন অক্ষর** — {{أَبْيَضُ}}, {{أَسْوَدُ}}, {{أَحْمَرُ}}, {{أَخْضَرُ}}, {{أَزْرَقُ}}, {{أَصْفَرُ}}। কাবার “হাজরে আসওয়াদ” মনে আছে? {{الْحَجَرُ الْأَسْوَدُ}} — **কালো** পাথর!", "en": "All six basic colours share one mould: **{{أَ}} + three letters** — {{أَبْيَضُ}}, {{أَسْوَدُ}}, {{أَحْمَرُ}}, {{أَخْضَرُ}}, {{أَزْرَقُ}}, {{أَصْفَرُ}}. Remember the “Hajar al-Aswad” at the Ka'bah? {{الْحَجَرُ الْأَسْوَدُ}} — the **black** stone!"},
      {"type": "table", "title": {"bn": "রঙের ছেলে-রূপ ও মেয়ে-রূপ", "en": "Masculine and feminine colours"}, "head": [{"bn": "পুরুষবাচক", "en": "Masculine"}, {"bn": "স্ত্রীবাচক", "en": "Feminine"}, {"bn": "রং", "en": "Colour"}], "rows": [
        ["أَبْيَضُ", "بَيْضَاءُ", {"bn": "সাদা", "en": "white"}],
        ["أَسْوَدُ", "سَوْدَاءُ", {"bn": "কালো", "en": "black"}],
        ["أَحْمَرُ", "حَمْرَاءُ", {"bn": "লাল", "en": "red"}],
        ["أَخْضَرُ", "خَضْرَاءُ", {"bn": "সবুজ", "en": "green"}],
        ["أَزْرَقُ", "زَرْقَاءُ", {"bn": "নীল", "en": "blue"}],
        ["أَصْفَرُ", "صَفْرَاءُ", {"bn": "হলুদ", "en": "yellow"}]
      ]},
      {"type": "tip", "kind": "tip", "bn": "স্ত্রীবাচক রঙে {{ة}} লাগে না! ছাঁচ হলো **তিন অক্ষর + {{ـَاءُ}}**: {{أَحْمَرُ}} ➜ {{حَمْرَاءُ}}। যেমন {{قَلَمٌ أَحْمَرُ}} (লাল কলম), কিন্তু {{سَيَّارَةٌ حَمْرَاءُ}} (লাল গাড়ি)। আলহামরা প্রাসাদের নামও এখান থেকে — “লাল প্রাসাদ”!", "en": "Feminine colours don't take {{ة}}! The mould is **three letters + {{ـَاءُ}}**: {{أَحْمَرُ}} ➜ {{حَمْرَاءُ}}. So {{قَلَمٌ أَحْمَرُ}} (a red pen), but {{سَيَّارَةٌ حَمْرَاءُ}} (a red car). The Alhambra palace gets its name from here — “the red one”!"},
      {"type": "vocab", "title": {"bn": "আরও কিছু রং", "en": "More colours"}, "items": [
        {"ar": "لَوْنٌ", "tr": {"bn": "লাওন", "en": "lawn"}, "mean": {"bn": "রং", "en": "colour"}},
        {"ar": "بُنِّيٌّ", "tr": {"bn": "বুন্নিয়্যুন", "en": "bunniyy"}, "mean": {"bn": "বাদামি (কফি-বীজের রং)", "en": "brown (colour of coffee beans)"}},
        {"ar": "رَمَادِيٌّ", "tr": {"bn": "রামাদিয়্যুন", "en": "ramaadiyy"}, "mean": {"bn": "ধূসর (ছাইয়ের রং)", "en": "grey (colour of ash)"}},
        {"ar": "وَرْدِيٌّ", "tr": {"bn": "ওয়ারদিয়্যুন", "en": "wardiyy"}, "mean": {"bn": "গোলাপি (গোলাপের রং)", "en": "pink (colour of roses)"}},
        {"ar": "بُرْتُقَالِيٌّ", "tr": {"bn": "বুরতুকালিয়্যুন", "en": "burtuqaaliyy"}, "mean": {"bn": "কমলা (কমলালেবুর রং)", "en": "orange (colour of oranges)"}}
      ]},
      {"type": "tip", "kind": "memory", "bn": "এই রংগুলো একটা জিনিসের নাম + {{ـِيٌّ}} (ইয়্যুন) = “ওই জিনিসের রঙের”: {{بُنٌّ}} কফি-বীজ ➜ {{بُنِّيٌّ}}, {{رَمَادٌ}} ছাই ➜ {{رَمَادِيٌّ}}, {{وَرْدٌ}} গোলাপ ➜ {{وَرْدِيٌّ}}। ঠিক বাংলার “গোলাপি”, “কমলা” রঙের মতো!", "en": "These colours are a thing's name + {{ـِيٌّ}} (-iyy) = “the colour of that thing”: {{بُنٌّ}} coffee beans ➜ {{بُنِّيٌّ}}, {{رَمَادٌ}} ash ➜ {{رَمَادِيٌّ}}, {{وَرْدٌ}} rose ➜ {{وَرْدِيٌّ}}. Just like English “rose-coloured” or “orange”!"},
      {"type": "vocab", "title": {"bn": "বর্ণনার শব্দ (বিশেষণ)", "en": "Describing words (adjectives)"}, "items": [
        {"ar": "كَبِيرٌ", "tr": {"bn": "কাবীর", "en": "kabeer"}, "mean": {"bn": "বড়", "en": "big"}, "root": "ك ب ر"},
        {"ar": "صَغِيرٌ", "tr": {"bn": "সাগীর", "en": "ṣagheer"}, "mean": {"bn": "ছোট", "en": "small"}},
        {"ar": "جَمِيلٌ", "tr": {"bn": "জামীল", "en": "jameel"}, "mean": {"bn": "সুন্দর", "en": "beautiful"}},
        {"ar": "جَدِيدٌ", "tr": {"bn": "জাদীদ", "en": "jadeed"}, "mean": {"bn": "নতুন", "en": "new"}},
        {"ar": "قَدِيمٌ", "tr": {"bn": "কাদীম", "en": "qadeem"}, "mean": {"bn": "পুরনো", "en": "old"}},
        {"ar": "طَوِيلٌ", "tr": {"bn": "তাউয়ীল", "en": "ṭaweel"}, "mean": {"bn": "লম্বা", "en": "tall, long"}},
        {"ar": "قَصِيرٌ", "tr": {"bn": "কাসীর", "en": "qaṣeer"}, "mean": {"bn": "খাটো, ছোট", "en": "short"}},
        {"ar": "حَارٌّ", "tr": {"bn": "হাররুন", "en": "ḥaarr"}, "mean": {"bn": "গরম", "en": "hot"}},
        {"ar": "بَارِدٌ", "tr": {"bn": "বারিদ", "en": "baarid"}, "mean": {"bn": "ঠান্ডা", "en": "cold"}},
        {"ar": "سَهْلٌ", "tr": {"bn": "সাহল", "en": "sahl"}, "mean": {"bn": "সহজ", "en": "easy"}},
        {"ar": "صَعْبٌ", "tr": {"bn": "সা'ব", "en": "ṣa'b"}, "mean": {"bn": "কঠিন", "en": "difficult"}},
        {"ar": "نَظِيفٌ", "tr": {"bn": "নাযীফ", "en": "naẓeef"}, "mean": {"bn": "পরিষ্কার", "en": "clean"}},
        {"ar": "كَثِيرٌ", "tr": {"bn": "কাসীর", "en": "katheer"}, "mean": {"bn": "অনেক", "en": "many, a lot"}},
        {"ar": "قَلِيلٌ", "tr": {"bn": "কালীল", "en": "qaleel"}, "mean": {"bn": "অল্প", "en": "few, a little"}}
      ]},
      {"type": "tip", "kind": "fun", "bn": "আমাদের চেনা অনেক নামই আসলে বিশেষণ! **কবির** = বড়/মহান ({{كَبِيرٌ}}), **জামিল/জামিলা** = সুন্দর ({{جَمِيلٌ}}), আর **সাহল** = সহজ ({{سَهْلٌ}}) — {{أَهْلًا وَسَهْلًا}}-র সেই “সাহলান”!", "en": "Many familiar names are really adjectives! **Kabir** = big/great ({{كَبِيرٌ}}), **Jamil/Jamila** = beautiful ({{جَمِيلٌ}}), and **Sahl** = easy ({{سَهْلٌ}}) — the same “sahlan” in {{أَهْلًا وَسَهْلًا}}!"},
      {"type": "table", "title": {"bn": "বিপরীত জোড়া", "en": "Opposite pairs"}, "head": [{"bn": "শব্দ", "en": "Word"}, {"bn": "বিপরীত", "en": "Opposite"}, {"bn": "অর্থ", "en": "Meaning"}], "rows": [
        ["كَبِيرٌ", "صَغِيرٌ", {"bn": "বড় ↔ ছোট", "en": "big ↔ small"}],
        ["جَدِيدٌ", "قَدِيمٌ", {"bn": "নতুন ↔ পুরনো", "en": "new ↔ old"}],
        ["طَوِيلٌ", "قَصِيرٌ", {"bn": "লম্বা ↔ খাটো", "en": "tall ↔ short"}],
        ["حَارٌّ", "بَارِدٌ", {"bn": "গরম ↔ ঠান্ডা", "en": "hot ↔ cold"}],
        ["سَهْلٌ", "صَعْبٌ", {"bn": "সহজ ↔ কঠিন", "en": "easy ↔ difficult"}],
        ["كَثِيرٌ", "قَلِيلٌ", {"bn": "অনেক ↔ অল্প", "en": "many ↔ few"}]
      ]},
      {"type": "tip", "kind": "warn", "bn": "বাংলায় আমরা বলি “**বড়** বাড়ি” — বিশেষণ আগে। আরবিতে উল্টো: **বিশেষ্য আগে, বিশেষণ পরে** — {{بَيْتٌ كَبِيرٌ}} (বাড়ি বড়-টা)। আর বিশেষণ বিশেষ্যের সাথে মিলে চলে: স্ত্রীবাচক হলে {{ة}}, {{الْ}} থাকলে দুটোতেই {{الْ}}।", "en": "In English and Bangla we say “a **big** house” — adjective first. Arabic flips it: **noun first, adjective after** — {{بَيْتٌ كَبِيرٌ}} (house big). And the adjective matches its noun: feminine gets {{ة}}, and if the noun has {{الْ}}, so does the adjective."},
      {"type": "examples", "title": {"bn": "বর্ণনা করি", "en": "Let's describe"}, "items": [
        {"ar": "بَيْتٌ كَبِيرٌ", "tr": {"bn": "বাইতুন কাবীর", "en": "baytun kabeer"}, "mean": {"bn": "একটি বড় বাড়ি", "en": "a big house"}, "hl": "كَبِيرٌ"},
        {"ar": "سَيَّارَةٌ كَبِيرَةٌ", "tr": {"bn": "সাইয়ারাতুন কাবীরাহ", "en": "sayyaaratun kabeerah"}, "mean": {"bn": "একটি বড় গাড়ি", "en": "a big car"}, "note": {"bn": "গাড়ি স্ত্রীবাচক, তাই বিশেষণেও {{ة}}।", "en": "Car is feminine, so the adjective takes {{ة}} too."}, "hl": "كَبِيرَةٌ"},
        {"ar": "الْبَيْتُ الْكَبِيرُ", "tr": {"bn": "আল-বাইতুল কাবীর", "en": "al-baytul-kabeer"}, "mean": {"bn": "বড় বাড়িটি", "en": "the big house"}, "note": {"bn": "দুটোতেই {{الْ}} — তাই এটা একটা শব্দগুচ্ছ।", "en": "Both have {{الْ}} — so it is a phrase."}, "hl": "الْكَبِيرُ"},
        {"ar": "الْبَيْتُ كَبِيرٌ", "tr": {"bn": "আল-বাইতু কাবীর", "en": "al-baytu kabeer"}, "mean": {"bn": "বাড়িটি বড়", "en": "The house is big"}, "note": {"bn": "বিশেষণে {{الْ}} নেই — তাই এটা পূর্ণ বাক্য!", "en": "No {{الْ}} on the adjective — so it is a full sentence!"}, "hl": "كَبِيرٌ"},
        {"ar": "عِنْدِي قَلَمٌ أَزْرَقُ جَدِيدٌ", "tr": {"bn": "ইনদী কালামুন আযরাকু জাদীদ", "en": "'indee qalamun azraqu jadeed"}, "mean": {"bn": "আমার একটি নতুন নীল কলম আছে", "en": "I have a new blue pen"}, "hl": "أَزْرَقُ"},
        {"ar": "مَا لَوْنُ سَيَّارَتِكَ؟", "tr": {"bn": "মা লাওনু সাইয়ারাতিকা?", "en": "maa lawnu sayyaaratika?"}, "mean": {"bn": "তোমার গাড়ির রং কী?", "en": "What colour is your car?"}, "hl": "لَوْنُ"},
        {"ar": "الْعَرَبِيَّةُ سَهْلَةٌ وَجَمِيلَةٌ", "tr": {"bn": "আল-আরাবিয়্যাতু সাহলাতুন ওয়া জামীলাহ", "en": "al-'arabiyyatu sahlatun wa jameelah"}, "mean": {"bn": "আরবি সহজ ও সুন্দর!", "en": "Arabic is easy and beautiful!"}, "hl": "سَهْلَةٌ"}
      ]},
      {"type": "quiz", "items": [
        {"q": {"bn": "{{أَخْضَرُ}} কোন রং?", "en": "What colour is {{أَخْضَرُ}}?"}, "options": [{"bn": "নীল", "en": "blue"}, {"bn": "সবুজ", "en": "green"}, {"bn": "হলুদ", "en": "yellow"}], "answer": 1},
        {"q": {"bn": "“সাদা” আরবিতে কোনটি?", "en": "Which is “white”?"}, "options": ["أَسْوَدُ", "أَبْيَضُ", "أَحْمَرُ"], "answer": 1},
        {"q": {"bn": "“লাল গাড়ি” — কোনটি সঠিক?", "en": "“A red car” — which is correct?"}, "options": ["سَيَّارَةٌ أَحْمَرُ", "سَيَّارَةٌ حَمْرَاءُ", "أَحْمَرُ سَيَّارَةٌ"], "answer": 1, "explain": {"bn": "গাড়ি স্ত্রীবাচক, তাই রঙের স্ত্রীবাচক রূপ {{حَمْرَاءُ}}, আর বিশেষণ বসে বিশেষ্যের পরে।", "en": "Car is feminine, so we use the feminine colour {{حَمْرَاءُ}}, and the adjective comes after the noun."}},
        {"q": {"bn": "{{جَدِيدٌ}}-এর বিপরীত কোনটি?", "en": "The opposite of {{جَدِيدٌ}} is:"}, "options": ["قَدِيمٌ", "كَبِيرٌ", "جَمِيلٌ"], "answer": 0},
        {"q": {"bn": "{{الْبَيْتُ كَبِيرٌ}} মানে কী?", "en": "What does {{الْبَيْتُ كَبِيرٌ}} mean?"}, "options": [{"bn": "বড় বাড়িটি", "en": "the big house"}, {"bn": "বাড়িটি বড়", "en": "The house is big"}, {"bn": "একটি বড় বাড়ি", "en": "a big house"}], "answer": 1},
        {"q": {"bn": "{{بَارِدٌ}} মানে কী?", "en": "What is {{بَارِدٌ}}?"}, "options": [{"bn": "গরম", "en": "hot"}, {"bn": "ঠান্ডা", "en": "cold"}, {"bn": "পরিষ্কার", "en": "clean"}], "answer": 1},
        {"q": {"bn": "হাজরে আসওয়াদের {{الْأَسْوَدُ}} শব্দের অর্থ কী?", "en": "In al-Hajar al-Aswad, what does {{الْأَسْوَدُ}} mean?"}, "options": [{"bn": "সাদা", "en": "white"}, {"bn": "কালো", "en": "black"}, {"bn": "বড়", "en": "big"}], "answer": 1}
      ]}
    ]
  },
  {
    "id": "daily-conversation",
    "icon": "قول",
    "title": {"bn": "কথোপকথন ল্যাব", "en": "Conversation Lab"},
    "subtitle": {"bn": "মসজিদে, বন্ধুর সাথে, দোকানে — আর ক্লাসের দরকারি বাক্য", "en": "At the masjid, with a friend, at a shop — plus handy classroom phrases"},
    "minutes": 20,
    "goals": [
      {"bn": "বাস্তব জীবনের তিনটি সংলাপ পড়া ও অভিনয় করা", "en": "Read and act out three real-life dialogues"},
      {"bn": "আগের পাঠের শব্দগুলো একসাথে ব্যবহার করা", "en": "Combine words from all the earlier lessons"},
      {"bn": "ক্লাসে প্রশ্ন করা ও সাহায্য চাওয়ার বাক্য", "en": "Classroom phrases to ask questions and get help"}
    ],
    "blocks": [
      {"type": "text", "bn": "অভিনন্দন! আপনি এখন সালাম, পরিচয়, সংখ্যা, পরিবার, খাবার, সময় আর রং — সবই জানেন। এবার সব জুড়ে আসল কথা বলার পালা। একজন বন্ধুকে সঙ্গী বানিয়ে প্রতিটি সংলাপ **অভিনয় করে** পড়ুন, তারপর ভূমিকা বদল করুন।", "en": "Congratulations! You now know greetings, introductions, numbers, family, food, time and colours. Time to put it all together and really talk. Grab a partner, **act out** each dialogue, then swap roles."},
      {"type": "steps", "title": {"bn": "সংলাপ ১: মসজিদে নামাজের পর", "en": "Dialogue 1: At the masjid after prayer"}, "items": [
        {"title": {"bn": "ইউসুফ", "en": "Yusuf"}, "ar": "السَّلَامُ عَلَيْكُمْ يَا أَخِي.", "tr": {"bn": "আস্‌সালামু আলাইকুম ইয়া আখী।", "en": "as-salaamu 'alaykum yaa akhee."}, "mean": {"bn": "আসসালামু আলাইকুম, ভাই।", "en": "Peace be upon you, brother."}},
        {"title": {"bn": "ইমরান", "en": "Imran"}, "ar": "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ.", "tr": {"bn": "ওয়া আলাইকুমুস সালাম ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহ।", "en": "wa 'alaykumus-salaam wa raḥmatullaahi wa barakaatuh."}, "mean": {"bn": "আপনার উপরও শান্তি, আল্লাহর রহমত ও বরকত।", "en": "And upon you be peace, Allah's mercy and His blessings."}},
        {"title": {"bn": "ইউসুফ", "en": "Yusuf"}, "ar": "تَقَبَّلَ اللّٰهُ.", "tr": {"bn": "তাকাব্বালাল্লাহ।", "en": "taqabbalallaah."}, "mean": {"bn": "আল্লাহ কবুল করুন।", "en": "May Allah accept (it)."}},
        {"title": {"bn": "ইমরান", "en": "Imran"}, "ar": "مِنَّا وَمِنْكُمْ. هَلْ أَنْتَ جَدِيدٌ هُنَا؟", "tr": {"bn": "মিন্না ওয়া মিনকুম। হাল আন্তা জাদীদুন হুনা?", "en": "minnaa wa minkum. hal anta jadeedun hunaa?"}, "mean": {"bn": "আমাদের ও আপনাদের থেকে। আপনি কি এখানে নতুন?", "en": "From us and from you. Are you new here?"}},
        {"title": {"bn": "ইউসুফ", "en": "Yusuf"}, "ar": "نَعَمْ، أَنَا طَالِبٌ جَدِيدٌ مِنْ بَنْغْلَادِيشَ.", "tr": {"bn": "না'আম, আনা তালিবুন জাদীদুন মিন বাংলাদেশ।", "en": "na'am, ana ṭaalibun jadeedun min banghlaadeesh."}, "mean": {"bn": "জি, আমি বাংলাদেশ থেকে আসা নতুন ছাত্র।", "en": "Yes, I am a new student from Bangladesh."}},
        {"title": {"bn": "ইমরান", "en": "Imran"}, "ar": "أَهْلًا وَسَهْلًا بِكَ!", "tr": {"bn": "আহলান ওয়া সাহলান বিকা!", "en": "ahlan wa sahlan bika!"}, "mean": {"bn": "আপনাকে স্বাগতম!", "en": "Welcome to you!"}},
        {"title": {"bn": "ইউসুফ", "en": "Yusuf"}, "ar": "مَتَى دَرْسُ الْقُرْآنِ؟", "tr": {"bn": "মাতা দারসুল কুরআন?", "en": "mataa darsul-qurʾaan?"}, "mean": {"bn": "কুরআনের ক্লাস কখন?", "en": "When is the Quran class?"}},
        {"title": {"bn": "ইমরান", "en": "Imran"}, "ar": "كُلَّ يَوْمٍ بَعْدَ صَلَاةِ الْمَغْرِبِ.", "tr": {"bn": "কুল্লা ইয়াওমিন বা'দা সালাতিল মাগরিব।", "en": "kulla yawmin ba'da ṣalaatil-maghrib."}, "mean": {"bn": "প্রতিদিন মাগরিবের নামাজের পর।", "en": "Every day after the Maghrib prayer."}},
        {"title": {"bn": "ইউসুফ", "en": "Yusuf"}, "ar": "جَزَاكَ اللّٰهُ خَيْرًا.", "tr": {"bn": "জাযাকাল্লাহু খাইরান।", "en": "jazaakallaahu khayran."}, "mean": {"bn": "আল্লাহ আপনাকে উত্তম প্রতিদান দিন।", "en": "May Allah reward you with good."}},
        {"title": {"bn": "ইমরান", "en": "Imran"}, "ar": "وَإِيَّاكَ. أَرَاكَ فِي الدَّرْسِ إِنْ شَاءَ اللّٰهُ.", "tr": {"bn": "ওয়া ইয়্যাকা। আরাকা ফিদ দারসি ইন শা আল্লাহ।", "en": "wa iyyaaka. araaka fid-darsi in shaaʾallaah."}, "mean": {"bn": "আপনাকেও। ক্লাসে দেখা হবে, ইন শা আল্লাহ।", "en": "And you. See you in class, if Allah wills."}}
      ]},
      {"type": "steps", "title": {"bn": "সংলাপ ২: দুই বান্ধবীর দেখা", "en": "Dialogue 2: Two friends meet"}, "items": [
        {"title": {"bn": "মারইয়াম", "en": "Maryam"}, "ar": "السَّلَامُ عَلَيْكُمْ يَا عَائِشَةُ!", "tr": {"bn": "আস্‌সালামু আলাইকুম ইয়া আয়িশাহ!", "en": "as-salaamu 'alaykum yaa 'aaʾishah!"}, "mean": {"bn": "আসসালামু আলাইকুম, আয়েশা!", "en": "Peace be upon you, Aishah!"}},
        {"title": {"bn": "আয়েশা", "en": "Aishah"}, "ar": "وَعَلَيْكُمُ السَّلَامُ يَا مَرْيَمُ! كَيْفَ حَالُكِ؟", "tr": {"bn": "ওয়া আলাইকুমুস সালাম ইয়া মারইয়াম! কাইফা হালুকি?", "en": "wa 'alaykumus-salaam yaa maryam! kayfa ḥaaluki?"}, "mean": {"bn": "ওয়ালাইকুমুস সালাম, মারইয়াম! কেমন আছ?", "en": "And upon you be peace, Maryam! How are you?"}},
        {"title": {"bn": "মারইয়াম", "en": "Maryam"}, "ar": "بِخَيْرٍ، وَالْحَمْدُ لِلّٰهِ. وَأَنْتِ؟", "tr": {"bn": "বিখাইর, ওয়াল হামদু লিল্লাহ। ওয়া আন্তি?", "en": "bikhayr, wal-ḥamdu lillaah. wa anti?"}, "mean": {"bn": "ভালো, আলহামদুলিল্লাহ। আর তুমি?", "en": "Well, praise be to Allah. And you?"}},
        {"title": {"bn": "আয়েশা", "en": "Aishah"}, "ar": "الْحَمْدُ لِلّٰهِ. أَيْنَ تَذْهَبِينَ؟", "tr": {"bn": "আলহামদু লিল্লাহ। আইনা তাযহাবীন?", "en": "al-ḥamdu lillaah. ayna tadhhabeen?"}, "mean": {"bn": "আলহামদুলিল্লাহ। কোথায় যাচ্ছ?", "en": "Praise be to Allah. Where are you going?"}},
        {"title": {"bn": "মারইয়াম", "en": "Maryam"}, "ar": "أَذْهَبُ إِلَى الْمَدْرَسَةِ. وَأَنْتِ؟", "tr": {"bn": "আযহাবু ইলাল মাদরাসাহ। ওয়া আন্তি?", "en": "adhhabu ilal-madrasah. wa anti?"}, "mean": {"bn": "মাদ্রাসায় যাচ্ছি। আর তুমি?", "en": "I'm going to school. And you?"}},
        {"title": {"bn": "আয়েশা", "en": "Aishah"}, "ar": "أَذْهَبُ إِلَى السُّوقِ مَعَ أُمِّي.", "tr": {"bn": "আযহাবু ইলাস সূকি মাআ উম্মী।", "en": "adhhabu ilas-sooqi ma'a ummee."}, "mean": {"bn": "আম্মুর সাথে বাজারে যাচ্ছি।", "en": "I'm going to the market with my mother."}},
        {"title": {"bn": "মারইয়াম", "en": "Maryam"}, "ar": "إِلَى اللِّقَاءِ غَدًا، إِنْ شَاءَ اللّٰهُ.", "tr": {"bn": "ইলাল লিকাই গাদান, ইন শা আল্লাহ।", "en": "ilal-liqaaʾi ghadan, in shaaʾallaah."}, "mean": {"bn": "কাল দেখা হবে, ইন শা আল্লাহ।", "en": "See you tomorrow, if Allah wills."}},
        {"title": {"bn": "আয়েশা", "en": "Aishah"}, "ar": "مَعَ السَّلَامَةِ!", "tr": {"bn": "মাআস সালামাহ!", "en": "ma'as-salaamah!"}, "mean": {"bn": "আল্লাহ হাফেজ!", "en": "Goodbye!"}}
      ]},
      {"type": "tip", "kind": "tip", "bn": "সংলাপ ২-এ দুজনই মেয়ে, তাই খেয়াল করুন: {{حَالُكِ}}, {{أَنْتِ}}, {{تَذْهَبِينَ}} — সবখানে মেয়ে-রূপ। ছেলে হলে হতো {{حَالُكَ}}, {{أَنْتَ}}, {{تَذْهَبُ}}।", "en": "In dialogue 2 both speakers are girls, so notice: {{حَالُكِ}}, {{أَنْتِ}}, {{تَذْهَبِينَ}} — feminine forms throughout. For boys it would be {{حَالُكَ}}, {{أَنْتَ}}, {{تَذْهَبُ}}."},
      {"type": "steps", "title": {"bn": "সংলাপ ৩: খেজুরের দোকানে", "en": "Dialogue 3: At the date shop"}, "items": [
        {"title": {"bn": "ক্রেতা", "en": "Customer"}, "ar": "السَّلَامُ عَلَيْكُمْ. هَلْ عِنْدَكَ تَمْرٌ؟", "tr": {"bn": "আস্‌সালামু আলাইকুম। হাল ইনদাকা তামর?", "en": "as-salaamu 'alaykum. hal 'indaka tamr?"}, "mean": {"bn": "আসসালামু আলাইকুম। আপনার কাছে খেজুর আছে?", "en": "Peace be upon you. Do you have dates?"}},
        {"title": {"bn": "বিক্রেতা", "en": "Seller"}, "ar": "وَعَلَيْكُمُ السَّلَامُ. نَعَمْ، عِنْدِي تَمْرٌ جَيِّدٌ.", "tr": {"bn": "ওয়া আলাইকুমুস সালাম। না'আম, ইনদী তামরুন জাইয়িদ।", "en": "wa 'alaykumus-salaam. na'am, 'indee tamrun jayyid."}, "mean": {"bn": "ওয়ালাইকুমুস সালাম। জি, আমার কাছে ভালো খেজুর আছে।", "en": "And upon you be peace. Yes, I have good dates."}},
        {"title": {"bn": "ক্রেতা", "en": "Customer"}, "ar": "بِكَمِ الْكِيلُو؟", "tr": {"bn": "বিকামিল কীলূ?", "en": "bikamil-keeloo?"}, "mean": {"bn": "এক কেজি কত?", "en": "How much per kilo?"}},
        {"title": {"bn": "বিক্রেতা", "en": "Seller"}, "ar": "الْكِيلُو بِعِشْرِينَ رِيَالًا.", "tr": {"bn": "আল-কীলূ বি-ইশরীনা রিয়ালা।", "en": "al-keeloo bi-'ishreena riyaalan."}, "mean": {"bn": "কেজি বিশ রিয়াল।", "en": "Twenty riyals a kilo."}},
        {"title": {"bn": "ক্রেতা", "en": "Customer"}, "ar": "هٰذَا غَالٍ! هَلْ عِنْدَكَ تَمْرٌ أَرْخَصُ؟", "tr": {"bn": "হাযা গালিন! হাল ইনদাকা তামরুন আরখাস?", "en": "haadhaa ghaalin! hal 'indaka tamrun arkhaṣ?"}, "mean": {"bn": "এটা তো দামি! আরও সস্তা খেজুর আছে?", "en": "That's expensive! Do you have cheaper dates?"}},
        {"title": {"bn": "বিক্রেতা", "en": "Seller"}, "ar": "نَعَمْ، هٰذَا بِخَمْسَةَ عَشَرَ رِيَالًا.", "tr": {"bn": "না'আম, হাযা বি-খামসাতা আশারা রিয়ালা।", "en": "na'am, haadhaa bi-khamsata 'ashara riyaalan."}, "mean": {"bn": "জি, এটা পনেরো রিয়াল।", "en": "Yes, this one is fifteen riyals."}},
        {"title": {"bn": "ক্রেতা", "en": "Customer"}, "ar": "أَعْطِنِي كِيلُو مِنْ هٰذَا، مِنْ فَضْلِكَ.", "tr": {"bn": "আ'তিনী কীলূ মিন হাযা, মিন ফাদলিক।", "en": "a'ṭinee keeloo min haadhaa, min faḍlik."}, "mean": {"bn": "দয়া করে এটা থেকে এক কেজি দিন।", "en": "Give me a kilo of this, please."}},
        {"title": {"bn": "বিক্রেতা", "en": "Seller"}, "ar": "تَفَضَّلْ.", "tr": {"bn": "তাফাদ্দাল।", "en": "tafaḍḍal."}, "mean": {"bn": "এই নিন।", "en": "Here you are."}},
        {"title": {"bn": "ক্রেতা", "en": "Customer"}, "ar": "شُكْرًا، بَارَكَ اللّٰهُ فِيكَ.", "tr": {"bn": "শুকরান, বারাকাল্লাহু ফীক।", "en": "shukran, baarakallaahu feek."}, "mean": {"bn": "ধন্যবাদ, আল্লাহ আপনাকে বরকত দিন।", "en": "Thank you, may Allah bless you."}},
        {"title": {"bn": "বিক্রেতা", "en": "Seller"}, "ar": "وَفِيكَ بَارَكَ اللّٰهُ.", "tr": {"bn": "ওয়া ফীকা বারাকাল্লাহ।", "en": "wa feeka baarakallaah."}, "mean": {"bn": "আপনাকেও আল্লাহ বরকত দিন।", "en": "And may Allah bless you too."}}
      ]},
      {"type": "tip", "kind": "memory", "bn": "{{تَفَضَّلْ}} একটা জাদুর শব্দ! কিছু এগিয়ে দিতে (“এই নিন”), কাউকে ভেতরে ডাকতে (“আসুন”) বা বসতে বলতে (“বসুন”) — সব জায়গায় চলে। মেয়েকে বললে {{تَفَضَّلِي}}।", "en": "{{تَفَضَّلْ}} is a magic word! Use it when handing something over (“here you are”), inviting someone in (“come in”) or offering a seat (“please sit”). To a female: {{تَفَضَّلِي}}."},
      {"type": "vocab", "title": {"bn": "ক্লাসের দরকারি বাক্য", "en": "Useful classroom phrases"}, "items": [
        {"ar": "أَعِدْ مِنْ فَضْلِكَ", "tr": {"bn": "আ'ইদ মিন ফাদলিক", "en": "a'id min faḍlik"}, "mean": {"bn": "আবার বলুন, দয়া করে", "en": "Repeat, please"}},
        {"ar": "لَا أَفْهَمُ", "tr": {"bn": "লা আফহাম", "en": "laa afham"}, "mean": {"bn": "আমি বুঝতে পারছি না", "en": "I don't understand"}},
        {"ar": "فَهِمْتُ", "tr": {"bn": "ফাহিমতু", "en": "fahimtu"}, "mean": {"bn": "বুঝেছি", "en": "I understood"}},
        {"ar": "مَا مَعْنَى ...؟", "tr": {"bn": "মা মা'না ...?", "en": "maa ma'naa ...?"}, "mean": {"bn": "... এর অর্থ কী?", "en": "What is the meaning of ...?"}},
        {"ar": "كَيْفَ أَقُولُ ... بِالْعَرَبِيَّةِ؟", "tr": {"bn": "কাইফা আকূলু ... বিল আরাবিয়্যাহ?", "en": "kayfa aqoolu ... bil-'arabiyyah?"}, "mean": {"bn": "আরবিতে ... কীভাবে বলব?", "en": "How do I say ... in Arabic?"}},
        {"ar": "تَكَلَّمْ بِبُطْءٍ مِنْ فَضْلِكَ", "tr": {"bn": "তাকাল্লাম বিবুত'ইন মিন ফাদলিক", "en": "takallam bibuṭʾin min faḍlik"}, "mean": {"bn": "দয়া করে আস্তে বলুন", "en": "Please speak slowly"}},
        {"ar": "عِنْدِي سُؤَالٌ", "tr": {"bn": "ইনদী সুআল", "en": "'indee suʾaal"}, "mean": {"bn": "আমার একটা প্রশ্ন আছে", "en": "I have a question"}},
        {"ar": "هَلْ هٰذَا صَحِيحٌ؟", "tr": {"bn": "হাল হাযা সাহীহ?", "en": "hal haadhaa ṣaḥeeḥ?"}, "mean": {"bn": "এটা কি ঠিক?", "en": "Is this correct?"}},
        {"ar": "لَا أَعْرِفُ", "tr": {"bn": "লা আ'রিফ", "en": "laa a'rif"}, "mean": {"bn": "আমি জানি না", "en": "I don't know"}},
        {"ar": "نَعَمْ", "tr": {"bn": "না'আম", "en": "na'am"}, "mean": {"bn": "হ্যাঁ, জি", "en": "yes"}},
        {"ar": "لَا", "tr": {"bn": "লা", "en": "laa"}, "mean": {"bn": "না", "en": "no"}},
        {"ar": "آسِفٌ", "tr": {"bn": "আসিফ", "en": "aasif"}, "mean": {"bn": "দুঃখিত", "en": "sorry"}},
        {"ar": "اِقْرَأْ", "tr": {"bn": "ইকরা", "en": "iqraʾ"}, "mean": {"bn": "পড়ো!", "en": "Read!"}, "example": {"ar": "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ", "mean": {"bn": "পড়ো তোমার রবের নামে, যিনি সৃষ্টি করেছেন", "en": "Read in the name of your Lord who created"}, "ref": "96:1"}},
        {"ar": "اُكْتُبْ", "tr": {"bn": "উকতুব", "en": "uktub"}, "mean": {"bn": "লেখো!", "en": "Write!"}, "root": "ك ت ب"},
        {"ar": "اِسْمَعْ", "tr": {"bn": "ইসমা'", "en": "isma'"}, "mean": {"bn": "শোনো!", "en": "Listen!"}}
      ]},
      {"type": "tip", "kind": "fun", "bn": "কুরআনের সবচেয়ে প্রথম নাজিল হওয়া শব্দটি কী জানেন? {{اقْرَأْ}} — “পড়ো!” তাই আরবি পড়তে শেখা মানে কুরআনের প্রথম আদেশটাই মেনে চলা।", "en": "Do you know the very first word of the Quran to be revealed? {{اقْرَأْ}} — “Read!” So learning to read Arabic means following the Quran's very first command."},
      {"type": "practice", "bn": "সঙ্গীর সাথে অভিনয় করুন: প্রথমে একজন প্রশ্ন করবে, অন্যজন নিজের কথা দিয়ে উত্তর দেবে।", "en": "Role-play with a partner: one asks, the other answers with their own details.", "lines": [
        "السَّلَامُ عَلَيْكُمْ — وَعَلَيْكُمُ السَّلَامُ",
        "كَيْفَ حَالُكَ؟ — أَنَا بِخَيْرٍ، وَالْحَمْدُ لِلّٰهِ",
        "مَا اسْمُكَ؟ — اِسْمِي ...",
        "مِنْ أَيْنَ أَنْتَ؟ — أَنَا مِنْ بَنْغْلَادِيشَ",
        "بِكَمْ هٰذَا؟ — بِعِشْرِينَ رِيَالًا",
        "مَعَ السَّلَامَةِ — إِلَى اللِّقَاءِ"
      ]},
      {"type": "quiz", "items": [
        {"q": {"bn": "নামাজের পর কেউ বলল {{تَقَبَّلَ اللّٰهُ}}। উত্তরে কী বলা হয়?", "en": "After prayer someone says {{تَقَبَّلَ اللّٰهُ}}. What is the reply?"}, "options": ["مِنَّا وَمِنْكُمْ", "صَبَاحُ النُّورِ", "بِكَمْ هٰذَا؟"], "answer": 0},
        {"q": {"bn": "শিক্ষক খুব দ্রুত বলছেন। আপনি কী বলবেন?", "en": "The teacher is speaking too fast. What do you say?"}, "options": ["تَكَلَّمْ بِبُطْءٍ مِنْ فَضْلِكَ", "أَنَا جَائِعٌ", "هٰذَا غَالٍ"], "answer": 0},
        {"q": {"bn": "একটি শব্দের অর্থ জানতে চাইলে কোনটি বলবেন?", "en": "To ask what a word means, you say:"}, "options": ["مَا اسْمُكَ؟", "مَا مَعْنَى ...؟", "مِنْ أَيْنَ أَنْتَ؟"], "answer": 1},
        {"q": {"bn": "সংলাপ ৩-এ সস্তা খেজুরের দাম কত?", "en": "In dialogue 3, how much were the cheaper dates?"}, "options": [{"bn": "২০ রিয়াল", "en": "20 riyals"}, {"bn": "১৫ রিয়াল", "en": "15 riyals"}, {"bn": "৫০ রিয়াল", "en": "50 riyals"}], "answer": 1},
        {"q": {"bn": "একজন মেয়েকে “কোথায় যাচ্ছ?” জিজ্ঞেস করতে কোনটি?", "en": "To ask a girl “Where are you going?”:"}, "options": ["أَيْنَ تَذْهَبُ؟", "أَيْنَ تَذْهَبِينَ؟", "أَيْنَ الْمَسْجِدُ؟"], "answer": 1},
        {"q": {"bn": "{{لَا أَفْهَمُ}} মানে কী?", "en": "What does {{لَا أَفْهَمُ}} mean?"}, "options": [{"bn": "আমি জানি না", "en": "I don't know"}, {"bn": "আমি বুঝতে পারছি না", "en": "I don't understand"}, {"bn": "আমি দুঃখিত", "en": "I'm sorry"}], "answer": 1},
        {"q": {"bn": "দোকানদার জিনিস এগিয়ে দিয়ে কোন শব্দ বলে?", "en": "Which word does the seller say when handing over the goods?"}, "options": ["تَفَضَّلْ", "آسِفٌ", "اِسْمَعْ"], "answer": 0},
        {"q": {"bn": "কুরআনের প্রথম নাজিল হওয়া শব্দ কোনটি?", "en": "Which was the first revealed word of the Quran?"}, "options": ["اُكْتُبْ", "اقْرَأْ", "اِسْمَعْ"], "answer": 1}
      ]}
    ]
  }
]});
