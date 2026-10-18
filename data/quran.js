window.AQ = window.AQ || { units: [], alphabet: [], vocab: [] };
AQ.units.push({
"id": "quran",
"order": 6,
"icon": "۝",
"color": "violet",
"title": { "bn": "কুরআন ও সালাত বুঝে পড়ি", "en": "Quran & Salah with Meaning" },
"subtitle": { "bn": "নামাজ, ছোট সূরা আর প্রতিদিনের দোয়া — শব্দে শব্দে অর্থসহ", "en": "Salah, short surahs and daily duas — word by word" },
"lessons": [
{
"id": "quran-wudu-adhan",
"icon": "أذان",
"title": { "bn": "ওযু ও আযান", "en": "Wudu & the Adhan" },
"subtitle": { "bn": "ওযুর দোয়া, আযান-ইকামতের প্রতিটি বাক্যের অর্থ", "en": "The wudu dua and the meaning of every adhan & iqamah phrase" },
"minutes": 15,
"goals": [
{ "bn": "ওযুর শুরুতে ও শেষে কী বলতে হয় তা অর্থসহ জানব", "en": "Know what to say before and after wudu, with meaning" },
{ "bn": "আযানের প্রতিটি বাক্য শব্দে শব্দে বুঝব", "en": "Understand every phrase of the adhan word by word" },
{ "bn": "ইকামত ও আযানের পার্থক্য জানব", "en": "Know how the iqamah differs from the adhan" },
{ "bn": "আযানের জবাব ও আযানের পরের দোয়া শিখব", "en": "Learn how to answer the adhan and the dua after it" }
],
"blocks": [
{ "type": "text", "bn": "এতদিন আমরা হরফ, হরকত, তাজবীদ আর শব্দ শিখেছি। এখন সেই সব কাজে লাগানোর সময়! এই ইউনিটে আমরা প্রতিদিন যা পড়ি — নামাজ, ছোট সূরা, দোয়া — সেগুলো **বুঝে** পড়া শিখব। শুরু করি নামাজের প্রস্তুতি দিয়ে: ওযু আর আযান।", "en": "So far we learned letters, vowels, tajweed and words. Now it is time to use them! In this unit we learn to **understand** what we recite every day — salah, short surahs and duas. We begin with getting ready for salah: wudu and the adhan." },
{ "type": "steps", "title": { "bn": "ওযু — সংক্ষেপে", "en": "Wudu — in brief" }, "items": [
{ "title": { "bn": "নিয়ত ও বিসমিল্লাহ", "en": "Intention & Bismillah" }, "ar": "بِسْمِ اللّٰهِ", "tr": { "bn": "বিসমিল্লাহ", "en": "Bismillaah" }, "mean": { "bn": "আল্লাহর নামে (শুরু করছি)", "en": "In the name of Allah (I begin)" }, "desc": { "bn": "মনে মনে ঠিক করি — আমি পবিত্র হচ্ছি আল্লাহর জন্য।", "en": "Intend in your heart that you are purifying yourself for Allah." } },
{ "title": { "bn": "হাত, মুখ, নাক", "en": "Hands, mouth, nose" }, "desc": { "bn": "দুই হাত কবজি পর্যন্ত ধুই, কুলি করি, নাকে পানি দিয়ে পরিষ্কার করি — সাধারণত তিনবার করে।", "en": "Wash both hands to the wrists, rinse the mouth, and rinse the nose — usually three times each." } },
{ "title": { "bn": "চেহারা ও দুই হাত", "en": "Face & arms" }, "desc": { "bn": "পুরো মুখমণ্ডল ধুই, তারপর ডান হাত ও বাম হাত কনুইসহ ধুই।", "en": "Wash the whole face, then the right and left arms up to and including the elbows." } },
{ "title": { "bn": "মাথা মাসেহ ও পা", "en": "Wipe the head & wash the feet" }, "desc": { "bn": "ভেজা হাতে মাথা ও কান মাসেহ করি, তারপর দুই পা টাখনুসহ ধুই।", "en": "Wipe the head and ears with wet hands, then wash both feet up to and including the ankles." } }
] },
{ "type": "examples", "title": { "bn": "ওযুর পরের দোয়া", "en": "The dua after wudu" }, "items": [
{ "ar": "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ", "tr": { "bn": "আশহাদু আল লা-ইলাহা ইল্লাল্লাহু ওয়াহদাহু লা শারীকা লাহু, ওয়া আশহাদু আন্না মুহাম্মাদান 'আবদুহু ওয়া রাসূলুহু", "en": "Ash-hadu al-laa ilaaha illallaahu waḥdahu laa shareeka lah, wa ash-hadu anna Muḥammadan 'abduhu wa rasooluh" }, "mean": { "bn": "আমি সাক্ষ্য দিচ্ছি, আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একা, তাঁর কোনো শরিক নেই; আর আমি সাক্ষ্য দিচ্ছি, মুহাম্মাদ ﷺ তাঁর বান্দা ও রাসূল।", "en": "I bear witness that there is no god but Allah, alone, with no partner; and I bear witness that Muhammad ﷺ is His servant and His Messenger." }, "note": { "bn": "সহীহ মুসলিমে আছে।", "en": "Reported in Sahih Muslim." } },
{ "ar": "اللّٰهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ", "tr": { "bn": "আল্লাহুম্মাজ'আলনী মিনাত তাওয়াবীনা ওয়াজ'আলনী মিনাল মুতাতাহহিরীন", "en": "Allaahummaj-'alnee minat-tawwaabeena waj-'alnee minal-mutaṭahhireen" }, "mean": { "bn": "হে আল্লাহ! আমাকে তাওবাকারীদের অন্তর্ভুক্ত করুন এবং পবিত্রতা অর্জনকারীদের অন্তর্ভুক্ত করুন।", "en": "O Allah, make me among those who turn back to You often, and make me among those who keep themselves pure." }, "note": { "bn": "তিরমিযীর বর্ণনায় এই অংশটি অতিরিক্ত আছে।", "en": "This addition comes in the narration of at-Tirmidhi." } }
] },
{ "type": "table", "title": { "bn": "শব্দে শব্দে", "en": "Word by word" }, "head": [ { "bn": "আরবি", "en": "Arabic" }, { "bn": "অর্থ", "en": "Meaning" } ], "rows": [
[ "أَشْهَدُ", { "bn": "আমি সাক্ষ্য দিই", "en": "I bear witness" } ],
[ "أَنْ لَا إِلٰهَ", { "bn": "যে, কোনো ইলাহ (উপাস্য) নেই", "en": "that there is no god" } ],
[ "إِلَّا اللّٰهُ", { "bn": "আল্লাহ ছাড়া", "en": "except Allah" } ],
[ "وَحْدَهُ", { "bn": "তিনি একা", "en": "He alone" } ],
[ "لَا شَرِيكَ لَهُ", { "bn": "তাঁর কোনো শরিক নেই", "en": "He has no partner" } ],
[ "عَبْدُهُ", { "bn": "তাঁর বান্দা", "en": "His servant" } ],
[ "وَرَسُولُهُ", { "bn": "ও তাঁর রাসূল", "en": "and His Messenger" } ]
] },
{ "type": "tip", "kind": "fun", "bn": "রাসূলুল্লাহ ﷺ বলেছেন: যে সুন্দর করে ওযু করে এই সাক্ষ্যটি পড়ে, তার জন্য জান্নাতের আটটি দরজাই খুলে দেওয়া হয় — যেটি দিয়ে ইচ্ছা সে প্রবেশ করবে। (সহীহ মুসলিম) ছোট্ট একটা দোয়া, কত বড় পুরস্কার!", "en": "The Prophet ﷺ said: whoever performs wudu well and then says this testimony, all eight gates of Paradise are opened for him — he may enter by whichever he wishes. (Sahih Muslim) A tiny dua, a huge reward!" },
{ "type": "text", "title": { "bn": "আযান — নামাজের ডাক", "en": "The Adhan — the call to prayer" }, "bn": "দিনে পাঁচবার মসজিদ থেকে আযান ভেসে আসে। এর প্রতিটি বাক্য আসলে একটি ছোট্ট বার্তা। চলো, বাক্যগুলো অর্থসহ দেখি।", "en": "Five times a day the adhan rings out from the masjid. Every phrase is a short message. Let us see each phrase with its meaning." },
{ "type": "steps", "title": { "bn": "আযানের বাক্যগুলো", "en": "The phrases of the adhan" }, "items": [
{ "title": { "bn": "৪ বার", "en": "4 times" }, "ar": "اللّٰهُ أَكْبَرُ", "tr": { "bn": "আল্লাহু আকবার", "en": "Allaahu akbar" }, "mean": { "bn": "আল্লাহ সবচেয়ে বড়", "en": "Allah is the Greatest" }, "desc": { "bn": "{{اللّٰهُ}} = আল্লাহ, {{أَكْبَرُ}} = সবচেয়ে বড় / সর্বশ্রেষ্ঠ। যা কিছুতে ব্যস্ত আছি, আল্লাহ তার চেয়েও বড়!", "en": "{{اللّٰهُ}} = Allah, {{أَكْبَرُ}} = greatest. Whatever keeps us busy, Allah is greater!" } },
{ "title": { "bn": "২ বার", "en": "2 times" }, "ar": "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ", "tr": { "bn": "আশহাদু আল লা-ইলাহা ইল্লাল্লাহ", "en": "Ash-hadu al-laa ilaaha illallaah" }, "mean": { "bn": "আমি সাক্ষ্য দিচ্ছি, আল্লাহ ছাড়া কোনো ইলাহ নেই", "en": "I bear witness that there is no god but Allah" }, "desc": { "bn": "{{أَشْهَدُ}} = আমি সাক্ষ্য দিই, {{لَا إِلٰهَ}} = কোনো ইলাহ নেই, {{إِلَّا}} = ছাড়া।", "en": "{{أَشْهَدُ}} = I testify, {{لَا إِلٰهَ}} = no god, {{إِلَّا}} = except." } },
{ "title": { "bn": "২ বার", "en": "2 times" }, "ar": "أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللّٰهِ", "tr": { "bn": "আশহাদু আন্না মুহাম্মাদার রাসূলুল্লাহ", "en": "Ash-hadu anna Muḥammadar-Rasoolullaah" }, "mean": { "bn": "আমি সাক্ষ্য দিচ্ছি, মুহাম্মাদ ﷺ আল্লাহর রাসূল", "en": "I bear witness that Muhammad ﷺ is the Messenger of Allah" }, "desc": { "bn": "{{أَنَّ}} = যে, নিশ্চয়ই; {{رَسُولُ اللّٰهِ}} = আল্লাহর রাসূল (বার্তাবাহক)।", "en": "{{أَنَّ}} = that (indeed); {{رَسُولُ اللّٰهِ}} = the Messenger of Allah." } },
{ "title": { "bn": "২ বার", "en": "2 times" }, "ar": "حَيَّ عَلَى الصَّلَاةِ", "tr": { "bn": "হাইয়্যা 'আলাস সালাহ", "en": "Ḥayya 'alaṣ-ṣalaah" }, "mean": { "bn": "নামাজের দিকে এসো", "en": "Come to the prayer" }, "desc": { "bn": "{{حَيَّ عَلَى}} = দ্রুত এসো, {{الصَّلَاةِ}} = নামাজ/সালাত।", "en": "{{حَيَّ عَلَى}} = hurry to, come to; {{الصَّلَاةِ}} = the prayer." } },
{ "title": { "bn": "২ বার", "en": "2 times" }, "ar": "حَيَّ عَلَى الْفَلَاحِ", "tr": { "bn": "হাইয়্যা 'আলাল ফালাহ", "en": "Ḥayya 'alal-falaaḥ" }, "mean": { "bn": "সফলতার দিকে এসো", "en": "Come to success" }, "desc": { "bn": "{{الْفَلَاحِ}} = সফলতা, কল্যাণ। লক্ষ করো — নামাজের ডাকের ঠিক পরেই সফলতার ডাক! নামাজই আসল সফলতার পথ।", "en": "{{الْفَلَاحِ}} = success, true prosperity. Notice: the call to prayer is followed by the call to success — prayer is the road to real success." } },
{ "title": { "bn": "শুধু ফজরে, ২ বার", "en": "Fajr only, 2 times" }, "ar": "الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ", "tr": { "bn": "আসসালাতু খাইরুম মিনান নাওম", "en": "Aṣ-ṣalaatu khayrum minan-nawm" }, "mean": { "bn": "ঘুমের চেয়ে নামাজ উত্তম", "en": "Prayer is better than sleep" }, "desc": { "bn": "{{خَيْرٌ}} = উত্তম, {{مِنَ}} = চেয়ে / থেকে, {{النَّوْمِ}} = ঘুম।", "en": "{{خَيْرٌ}} = better, {{مِنَ}} = than / from, {{النَّوْمِ}} = sleep." } },
{ "title": { "bn": "২ বার", "en": "2 times" }, "ar": "اللّٰهُ أَكْبَرُ", "tr": { "bn": "আল্লাহু আকবার", "en": "Allaahu akbar" }, "mean": { "bn": "আল্লাহ সবচেয়ে বড়", "en": "Allah is the Greatest" } },
{ "title": { "bn": "১ বার", "en": "1 time" }, "ar": "لَا إِلٰهَ إِلَّا اللّٰهُ", "tr": { "bn": "লা-ইলাহা ইল্লাল্লাহ", "en": "Laa ilaaha illallaah" }, "mean": { "bn": "আল্লাহ ছাড়া কোনো ইলাহ নেই", "en": "There is no god but Allah" }, "desc": { "bn": "আযান শুরু হয় আল্লাহর বড়ত্ব দিয়ে, শেষ হয় তাওহীদ দিয়ে।", "en": "The adhan begins with Allah's greatness and ends with tawheed (His oneness)." } }
] },
{ "type": "steps", "title": { "bn": "ইকামত — নামাজ দাঁড়ানোর ঘোষণা", "en": "Iqamah — the call to stand" }, "items": [
{ "title": { "bn": "আযানের মতোই, তবে…", "en": "Like the adhan, but…" }, "desc": { "bn": "জামাত শুরুর ঠিক আগে ইকামত দেওয়া হয়। বাক্যগুলো আযানের মতোই, শুধু {{حَيَّ عَلَى الْفَلَاحِ}}-এর পরে একটি নতুন বাক্য যোগ হয়। আমাদের দেশে (হানাফী মাযহাবে) ইকামতের বাক্যগুলো আযানের মতো জোড়ায় জোড়ায় বলা হয়; অন্য অনেক জায়গায় বেশিরভাগ বাক্য একবার করে বলা হয় — দুটিই হাদীসে আছে।", "en": "The iqamah is given just before the congregation starts. Its phrases are like the adhan, with one new phrase after {{حَيَّ عَلَى الْفَلَاحِ}}. In Bangladesh (Hanafi school) the phrases are said in pairs like the adhan; in many other places most phrases are said once — both come from the Sunnah." } },
{ "title": { "bn": "নতুন বাক্য, ২ বার", "en": "The new phrase, 2 times" }, "ar": "قَدْ قَامَتِ الصَّلَاةُ", "tr": { "bn": "কাদ কামাতিস সালাহ", "en": "Qad qaamatiṣ-ṣalaah" }, "mean": { "bn": "নামাজ শুরু হয়ে গেছে / দাঁড়িয়ে গেছে", "en": "The prayer has begun / is now established" }, "desc": { "bn": "{{قَدْ}} = অবশ্যই (হয়ে গেছে), {{قَامَتْ}} = দাঁড়িয়েছে / কায়েম হয়েছে, {{الصَّلَاةُ}} = নামাজ।", "en": "{{قَدْ}} = indeed (has), {{قَامَتْ}} = has stood / been established, {{الصَّلَاةُ}} = the prayer." } }
] },
{ "type": "tip", "kind": "tip", "title": { "bn": "আযানের জবাব", "en": "Answering the adhan" }, "bn": "মুয়াজ্জিন যা বলেন, আমরাও আস্তে আস্তে তাই বলি। শুধু {{حَيَّ عَلَى الصَّلَاةِ}} ও {{حَيَّ عَلَى الْفَلَاحِ}} শুনে বলি: {{لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ}} — ‘আল্লাহর সাহায্য ছাড়া কোনো শক্তি ও ক্ষমতা নেই।’ (সহীহ মুসলিম)", "en": "Quietly repeat what the muezzin says. Only at {{حَيَّ عَلَى الصَّلَاةِ}} and {{حَيَّ عَلَى الْفَلَاحِ}} say: {{لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ}} — ‘There is no power and no strength except through Allah.’ (Sahih Muslim)" },
{ "type": "examples", "title": { "bn": "আযানের পরের দোয়া", "en": "The dua after the adhan" }, "items": [
{ "ar": "اللّٰهُمَّ رَبَّ هٰذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ", "tr": { "bn": "আল্লাহুম্মা রাব্বা হা-যিহিদ দা'ওয়াতিত তা-ম্মাহ, ওয়াস সালাতিল কা-ইমাহ, আ-তি মুহাম্মাদানিল ওয়াসীলাতা ওয়াল ফাদীলাহ, ওয়াব'আসহু মাকামাম মাহমূদানিল্লাযী ওয়া'আত্তাহ", "en": "Allaahumma rabba haadhihid-da'watit-taammah, waṣ-ṣalaatil-qaa'imah, aati Muḥammadanil-waseelata wal-faḍeelah, wab'ath-hu maqaamam maḥmoodanil-ladhee wa'adtah" }, "mean": { "bn": "হে আল্লাহ! এই পরিপূর্ণ আহ্বান ও আসন্ন নামাজের রব! মুহাম্মাদ ﷺ-কে ‘ওয়াসীলা’ (জান্নাতের বিশেষ মর্যাদা) ও শ্রেষ্ঠত্ব দান করুন, এবং তাঁকে সেই প্রশংসিত স্থানে পৌঁছে দিন, যার ওয়াদা আপনি তাঁকে দিয়েছেন।", "en": "O Allah, Lord of this perfect call and of the prayer about to begin, grant Muhammad ﷺ al-Waseelah (a special rank in Paradise) and excellence, and raise him to the praised station You have promised him." }, "note": { "bn": "সহীহ বুখারী। হাদীসে আছে, যে এই দোয়া পড়ে কিয়ামতের দিন সে নবী ﷺ-এর শাফা'আত পাবে।", "en": "Sahih al-Bukhari. The hadith says whoever says it will receive the Prophet's ﷺ intercession on the Day of Judgement." } }
] },
{ "type": "vocab", "title": { "bn": "এই পাঠের শব্দ", "en": "Words from this lesson" }, "items": [
{ "ar": "أَكْبَرُ", "tr": { "bn": "আকবার", "en": "akbar" }, "mean": { "bn": "সবচেয়ে বড়", "en": "greatest" }, "root": "ك ب ر" },
{ "ar": "أَشْهَدُ", "tr": { "bn": "আশহাদু", "en": "ash-hadu" }, "mean": { "bn": "আমি সাক্ষ্য দিই", "en": "I bear witness" }, "root": "ش ه د" },
{ "ar": "الصَّلَاةُ", "tr": { "bn": "আস-সালাহ", "en": "aṣ-ṣalaah" }, "mean": { "bn": "নামাজ", "en": "the prayer" }, "root": "ص ل و" },
{ "ar": "الْفَلَاحُ", "tr": { "bn": "আল-ফালাহ", "en": "al-falaaḥ" }, "mean": { "bn": "সফলতা", "en": "success" }, "root": "ف ل ح" },
{ "ar": "خَيْرٌ", "tr": { "bn": "খাইর", "en": "khayr" }, "mean": { "bn": "উত্তম, ভালো", "en": "better, good" }, "root": "خ ي ر" },
{ "ar": "النَّوْمُ", "tr": { "bn": "আন-নাওম", "en": "an-nawm" }, "mean": { "bn": "ঘুম", "en": "sleep" }, "root": "ن و م" },
{ "ar": "رَسُولٌ", "tr": { "bn": "রাসূল", "en": "rasool" }, "mean": { "bn": "বার্তাবাহক, রাসূল", "en": "messenger" }, "root": "ر س ل" }
] },
{ "type": "tip", "kind": "memory", "title": { "bn": "ভাবনার খোরাক", "en": "Reflect" }, "bn": "আযানে দুটি ডাক পাশাপাশি: ‘নামাজে এসো’, ‘সফলতায় এসো’। পরীক্ষা, খেলা, কাজ — যা-ই চলুক, আযান শুনলে মনে রাখি: আসল সফলতা ওদিকেই ডাকছে।", "en": "Two calls stand side by side in the adhan: ‘come to prayer’, ‘come to success’. Exams, games, work — whatever is going on, when you hear the adhan remember: real success is calling from there." },
{ "type": "quiz", "items": [
{ "q": { "bn": "{{الْفَلَاحِ}} শব্দের অর্থ কী?", "en": "What does {{الْفَلَاحِ}} mean?" }, "options": [ { "bn": "সফলতা", "en": "success" }, { "bn": "ঘুম", "en": "sleep" }, { "bn": "নামাজ", "en": "prayer" }, { "bn": "সাক্ষ্য", "en": "testimony" } ], "answer": 0 },
{ "q": { "bn": "কোন বাক্যটি শুধু ফজরের আযানে বলা হয়?", "en": "Which phrase is said only in the Fajr adhan?" }, "options": [ "قَدْ قَامَتِ الصَّلَاةُ", "الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ", "حَيَّ عَلَى الْفَلَاحِ", "اللّٰهُ أَكْبَرُ" ], "answer": 1 },
{ "q": { "bn": "ইকামতে কোন বাক্যটি বাড়তি থাকে?", "en": "Which phrase is added in the iqamah?" }, "options": [ "لَا إِلٰهَ إِلَّا اللّٰهُ", "أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللّٰهِ", "قَدْ قَامَتِ الصَّلَاةُ" ], "answer": 2, "explain": { "bn": "{{قَدْ قَامَتِ الصَّلَاةُ}} — নামাজ শুরু হয়ে গেছে।", "en": "{{قَدْ قَامَتِ الصَّلَاةُ}} — the prayer has begun." } },
{ "q": { "bn": "{{حَيَّ عَلَى الصَّلَاةِ}} শুনে জবাবে কী বলি?", "en": "What do we reply when we hear {{حَيَّ عَلَى الصَّلَاةِ}}?" }, "options": [ "سُبْحَانَ اللّٰهِ", "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ", "الْحَمْدُ لِلّٰهِ" ], "answer": 1 },
{ "q": { "bn": "{{أَشْهَدُ}} মানে কী?", "en": "What does {{أَشْهَدُ}} mean?" }, "options": [ { "bn": "আমি সাক্ষ্য দিই", "en": "I bear witness" }, { "bn": "আমি ক্ষমা চাই", "en": "I seek forgiveness" }, { "bn": "আমি আশ্রয় চাই", "en": "I seek refuge" } ], "answer": 0 },
{ "q": { "bn": "আযানে {{اللّٰهُ أَكْبَرُ}} শুরুতে কতবার বলা হয়?", "en": "How many times is {{اللّٰهُ أَكْبَرُ}} said at the start of the adhan?" }, "options": [ "২ / 2", "৩ / 3", "৪ / 4" ], "answer": 2 },
{ "q": { "bn": "ওযুর পরের দোয়ায় {{وَحْدَهُ لَا شَرِيكَ لَهُ}} অর্থ কী?", "en": "In the dua after wudu, what does {{وَحْدَهُ لَا شَرِيكَ لَهُ}} mean?" }, "options": [ { "bn": "তিনি একা, তাঁর কোনো শরিক নেই", "en": "He is alone, He has no partner" }, { "bn": "তিনি দয়াময়, পরম দয়ালু", "en": "He is the Most Merciful" }, { "bn": "তিনি সবকিছু শোনেন", "en": "He hears everything" } ], "answer": 0 }
] }
]
},
{
"id": "quran-salah-steps",
"icon": "صلاة",
"title": { "bn": "ধাপে ধাপে নামাজ", "en": "Salah Step by Step" },
"subtitle": { "bn": "দাঁড়ানো থেকে সালাম — প্রতিটি অবস্থানে কী পড়ি, কী বুঝি", "en": "From standing to salam — what we say in each position, and what it means" },
"minutes": 20,
"goals": [
{ "bn": "নামাজের প্রতিটি অবস্থান ক্রমানুসারে জানব", "en": "Know every position of salah in order" },
{ "bn": "প্রতিটি অবস্থানের দোয়া/তাসবীহর অর্থ বুঝব", "en": "Understand the dua or tasbih of each position" },
{ "bn": "রুকু ও সিজদার তাসবীহর পার্থক্য মনে রাখব", "en": "Remember the difference between the ruku' and sujud tasbih" }
],
"blocks": [
{ "type": "text", "bn": "নামাজ হলো আল্লাহর সাথে কথা বলা। কিন্তু কী বলছি তা না বুঝলে কথাটা যেন অর্ধেক থেকে যায়। এই পাঠে আমরা দুই রাকাত নামাজের প্রতিটি ধাপে কী পড়ি আর তার মানে কী — সেটা দেখব।", "en": "Salah is a conversation with Allah. But if we do not understand what we say, the conversation feels half-done. In this lesson we walk through a two-rak'ah prayer and see what we say at each step and what it means." },
{ "type": "steps", "title": { "bn": "দুই রাকাত নামাজ — শুরু থেকে শেষ", "en": "A two-rak'ah salah — start to finish" }, "items": [
{ "title": { "bn": "১. নিয়ত", "en": "1. Niyyah (intention)" }, "desc": { "bn": "কিবলামুখী দাঁড়িয়ে মনে মনে ঠিক করি কোন নামাজ পড়ছি। নিয়ত অন্তরের কাজ — নির্দিষ্ট আরবি বাক্য মুখে বলা জরুরি নয়।", "en": "Stand facing the qiblah and decide in your heart which prayer you are offering. Niyyah is an act of the heart — no fixed Arabic sentence has to be spoken." } },
{ "title": { "bn": "২. তাকবীরে তাহরীমা", "en": "2. Opening takbir" }, "ar": "اللّٰهُ أَكْبَرُ", "tr": { "bn": "আল্লাহু আকবার", "en": "Allaahu akbar" }, "mean": { "bn": "আল্লাহ সবচেয়ে বড়", "en": "Allah is the Greatest" }, "desc": { "bn": "দুই হাত তুলে তাকবীর বলি। এখন থেকে দুনিয়ার সব কাজ ‘হারাম’ (বন্ধ) — তাই এর নাম ‘তাহরীমা’।", "en": "Raise both hands and say the takbir. From now, all worldly actions are ‘forbidden’ (paused) — hence the name ‘tahreemah’." } },
{ "title": { "bn": "৩. সানা", "en": "3. Thana (opening praise)" }, "ar": "سُبْحَانَكَ اللّٰهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلٰهَ غَيْرُكَ", "tr": { "bn": "সুবহানাকাল্লাহুম্মা ওয়া বিহামদিকা, ওয়া তাবারাকাসমুকা, ওয়া তা'আলা জাদ্দুকা, ওয়া লা ইলাহা গাইরুক", "en": "Subḥaanakallaahumma wa biḥamdika, wa tabaarakasmuka, wa ta'aalaa jadduka, wa laa ilaaha ghayruk" }, "mean": { "bn": "হে আল্লাহ! আপনি পবিত্র, সব প্রশংসা আপনার; আপনার নাম বরকতময়, আপনার মর্যাদা সুউচ্চ, আর আপনি ছাড়া কোনো ইলাহ নেই।", "en": "Glory be to You, O Allah, and all praise is Yours; blessed is Your Name, exalted is Your majesty, and there is no god besides You." }, "desc": { "bn": "শব্দে শব্দে: {{سُبْحَانَكَ}} আপনি পবিত্র • {{وَبِحَمْدِكَ}} ও আপনার প্রশংসাসহ • {{تَبَارَكَ}} বরকতময় • {{اسْمُكَ}} আপনার নাম • {{تَعَالَى}} সুউচ্চ • {{جَدُّكَ}} আপনার মহিমা • {{غَيْرُكَ}} আপনি ছাড়া।", "en": "Word by word: {{سُبْحَانَكَ}} glory to You • {{وَبِحَمْدِكَ}} and with Your praise • {{تَبَارَكَ}} blessed • {{اسْمُكَ}} Your name • {{تَعَالَى}} highly exalted • {{جَدُّكَ}} Your majesty • {{غَيْرُكَ}} other than You." } },
{ "title": { "bn": "৪. তা'আউয", "en": "4. Ta'awwudh (seeking refuge)" }, "ar": "أَعُوذُ بِاللّٰهِ مِنَ الشَّيْطَانِ الرَّجِيمِ", "tr": { "bn": "আ'ঊযু বিল্লাহি মিনাশ শাইতানির রাজীম", "en": "A'oodhu billaahi minash-shayṭaanir-rajeem" }, "mean": { "bn": "বিতাড়িত শয়তান থেকে আমি আল্লাহর আশ্রয় চাই", "en": "I seek refuge in Allah from Satan, the rejected one" }, "desc": { "bn": "{{أَعُوذُ}} আমি আশ্রয় চাই • {{بِاللّٰهِ}} আল্লাহর কাছে • {{مِنَ}} থেকে • {{الشَّيْطَانِ}} শয়তান • {{الرَّجِيمِ}} বিতাড়িত।", "en": "{{أَعُوذُ}} I seek refuge • {{بِاللّٰهِ}} in Allah • {{مِنَ}} from • {{الشَّيْطَانِ}} Satan • {{الرَّجِيمِ}} the outcast." } },
{ "title": { "bn": "৫. বিসমিল্লাহ", "en": "5. Basmalah" }, "ar": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ", "tr": { "bn": "বিসমিল্লাহির রাহমানির রাহীম", "en": "Bismillaahir-Raḥmaanir-Raḥeem" }, "mean": { "bn": "পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে", "en": "In the name of Allah, the Most Compassionate, the Most Merciful" } },
{ "title": { "bn": "৬. সূরা ফাতিহা ও আমীন", "en": "6. Al-Fatiha & Ameen" }, "ar": "آمِين", "tr": { "bn": "আ-মীন", "en": "Aameen" }, "mean": { "bn": "হে আল্লাহ, কবুল করুন", "en": "O Allah, accept (our prayer)" }, "desc": { "bn": "প্রতি রাকাতে সূরা ফাতিহা পড়ি (পুরো অর্থ পরের পাঠে আসছে), শেষে ‘আমীন’ বলি।", "en": "Recite Surah Al-Fatiha in every rak'ah (full meaning in a coming lesson), then say ‘Ameen’." } },
{ "title": { "bn": "৭. আরেকটি সূরা", "en": "7. Another surah" }, "desc": { "bn": "প্রথম দুই রাকাতে ফাতিহার পর কুরআনের যেকোনো অংশ পড়ি — যেমন সূরা ইখলাস, কাওসার বা আসর। এগুলোর অর্থও আমরা এই ইউনিটে শিখব।", "en": "In the first two rak'ahs, after Al-Fatiha, recite any part of the Quran — such as Al-Ikhlas, Al-Kawthar or Al-'Asr. We will learn their meanings in this unit too." } },
{ "title": { "bn": "৮. রুকু", "en": "8. Ruku' (bowing)" }, "ar": "سُبْحَانَ رَبِّيَ الْعَظِيمِ", "tr": { "bn": "সুবহানা রাব্বিয়াল 'আযীম", "en": "Subḥaana rabbiyal-'aẓeem" }, "mean": { "bn": "আমার মহান রব পবিত্র", "en": "Glory be to my Lord, the Magnificent" }, "desc": { "bn": "‘আল্লাহু আকবার’ বলে ঝুঁকে কমপক্ষে ৩ বার পড়ি। {{سُبْحَانَ}} পবিত্র • {{رَبِّيَ}} আমার রব • {{الْعَظِيمِ}} মহান।", "en": "Say ‘Allaahu akbar’, bow, and say it at least 3 times. {{سُبْحَانَ}} glory • {{رَبِّيَ}} my Lord • {{الْعَظِيمِ}} the Magnificent." } },
{ "title": { "bn": "৯. রুকু থেকে ওঠা", "en": "9. Rising from ruku'" }, "ar": "سَمِعَ اللّٰهُ لِمَنْ حَمِدَهُ", "tr": { "bn": "সামি'আল্লাহু লিমান হামিদাহ", "en": "Sami'allaahu liman ḥamidah" }, "mean": { "bn": "যে আল্লাহর প্রশংসা করে, আল্লাহ তার কথা শোনেন", "en": "Allah hears whoever praises Him" }, "desc": { "bn": "{{سَمِعَ}} শুনলেন/শোনেন • {{اللّٰهُ}} আল্লাহ • {{لِمَنْ}} তার কথা, যে • {{حَمِدَهُ}} তাঁর প্রশংসা করল।", "en": "{{سَمِعَ}} hears • {{اللّٰهُ}} Allah • {{لِمَنْ}} the one who • {{حَمِدَهُ}} praised Him." } },
{ "title": { "bn": "১০. সোজা দাঁড়িয়ে", "en": "10. Standing straight" }, "ar": "رَبَّنَا وَلَكَ الْحَمْدُ", "tr": { "bn": "রাব্বানা ওয়া লাকাল হামদ", "en": "Rabbanaa wa lakal-ḥamd" }, "mean": { "bn": "হে আমাদের রব! সব প্রশংসা আপনারই", "en": "Our Lord, and to You belongs all praise" }, "desc": { "bn": "এইমাত্র বললাম, ‘যে প্রশংসা করে, আল্লাহ তার কথা শোনেন’ — তাই সঙ্গে সঙ্গে প্রশংসা করি! {{رَبَّنَا لَكَ الْحَمْدُ}} রূপেও পড়া যায়।", "en": "We just said ‘Allah hears whoever praises Him’ — so we praise Him right away! It may also be said as {{رَبَّنَا لَكَ الْحَمْدُ}}." } },
{ "title": { "bn": "১১. সিজদা", "en": "11. Sujud (prostration)" }, "ar": "سُبْحَانَ رَبِّيَ الْأَعْلَى", "tr": { "bn": "সুবহানা রাব্বিয়াল আ'লা", "en": "Subḥaana rabbiyal-a'laa" }, "mean": { "bn": "আমার সর্বোচ্চ রব পবিত্র", "en": "Glory be to my Lord, the Most High" }, "desc": { "bn": "‘আল্লাহু আকবার’ বলে সিজদায় গিয়ে কমপক্ষে ৩ বার পড়ি। {{الْأَعْلَى}} = সবার ঊর্ধ্বে। আমরা যখন সবচেয়ে নিচে, তখন বলি — আমার রব সবচেয়ে উঁচুতে!", "en": "Say ‘Allaahu akbar’, go into sujud and say it at least 3 times. {{الْأَعْلَى}} = the Most High. When we are at our lowest, we declare: my Lord is the Highest!" } },
{ "title": { "bn": "১২. দুই সিজদার মাঝে বসা", "en": "12. Sitting between the two sajdahs" }, "ar": "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي", "tr": { "bn": "রাব্বিগফিরলী, রাব্বিগফিরলী", "en": "Rabbighfir lee, rabbighfir lee" }, "mean": { "bn": "হে আমার রব! আমাকে ক্ষমা করুন, হে আমার রব! আমাকে ক্ষমা করুন", "en": "My Lord, forgive me; my Lord, forgive me" }, "desc": { "bn": "{{رَبِّ}} হে আমার রব • {{اغْفِرْ}} ক্ষমা করুন • {{لِي}} আমাকে। চাইলে আরও পড়া যায়: {{اللّٰهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَعَافِنِي وَاهْدِنِي وَارْزُقْنِي}} — ক্ষমা করুন, দয়া করুন, সুস্থ রাখুন, পথ দেখান, রিযিক দিন।", "en": "{{رَبِّ}} my Lord • {{اغْفِرْ}} forgive • {{لِي}} me. You may add: {{اللّٰهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَعَافِنِي وَاهْدِنِي وَارْزُقْنِي}} — forgive me, have mercy on me, keep me well, guide me, provide for me." } },
{ "title": { "bn": "১৩. দ্বিতীয় সিজদা ও দ্বিতীয় রাকাত", "en": "13. Second sajdah & second rak'ah" }, "desc": { "bn": "আবার সিজদা করে একই তাসবীহ পড়ি। তারপর উঠে দ্বিতীয় রাকাত — ফাতিহা, সূরা, রুকু, সিজদা — আগের মতোই (সানা আর পড়তে হয় না)।", "en": "Prostrate again with the same tasbih. Then stand for the second rak'ah — Fatiha, a surah, ruku', sujud — just like before (the thana is not repeated)." } },
{ "title": { "bn": "১৪. তাশাহহুদ (আত্তাহিয়্যাতু)", "en": "14. Tashahhud (at-taḥiyyaat)" }, "ar": "التَّحِيَّاتُ لِلّٰهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللّٰهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ", "tr": { "bn": "আত্তাহিয়্যাতু লিল্লাহি ওয়াস সালাওয়াতু ওয়াত তাইয়্যিবাতু, আসসালামু 'আলাইকা আইয়্যুহান নাবিয়্যু ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহ, আসসালামু 'আলাইনা ওয়া 'আলা 'ইবাদিল্লাহিস সালিহীন, আশহাদু আল লা-ইলাহা ইল্লাল্লাহু ওয়া আশহাদু আন্না মুহাম্মাদান 'আবদুহু ওয়া রাসূলুহ", "en": "At-taḥiyyaatu lillaahi waṣ-ṣalawaatu waṭ-ṭayyibaat, as-salaamu 'alayka ayyuhan-nabiyyu wa raḥmatullaahi wa barakaatuh, as-salaamu 'alaynaa wa 'alaa 'ibaadillaahiṣ-ṣaaliḥeen, ash-hadu al-laa ilaaha illallaahu wa ash-hadu anna Muḥammadan 'abduhu wa rasooluh" }, "mean": { "bn": "সব সম্মান, সব ইবাদত ও সব পবিত্র কথা আল্লাহর জন্য। হে নবী! আপনার উপর শান্তি, আল্লাহর রহমত ও বরকত। শান্তি আমাদের উপর এবং আল্লাহর নেক বান্দাদের উপর। আমি সাক্ষ্য দিচ্ছি, আল্লাহ ছাড়া কোনো ইলাহ নেই, এবং সাক্ষ্য দিচ্ছি, মুহাম্মাদ ﷺ তাঁর বান্দা ও রাসূল।", "en": "All greetings, prayers and good words are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad ﷺ is His servant and Messenger." }, "desc": { "bn": "দ্বিতীয় রাকাতের পর বসে পড়ি। শব্দে শব্দে অর্থ পরের পাঠে।", "en": "Said while sitting after the second rak'ah. Word-by-word meaning in the next lesson." } },
{ "title": { "bn": "১৫. দরূদে ইবরাহীম", "en": "15. Durood Ibrahim" }, "ar": "اللّٰهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللّٰهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ", "tr": { "bn": "আল্লাহুম্মা সাল্লি 'আলা মুহাম্মাদিও ওয়া 'আলা আ-লি মুহাম্মাদ, কামা সাল্লাইতা 'আলা ইবরাহীমা ওয়া 'আলা আ-লি ইবরাহীম, ইন্নাকা হামীদুম মাজীদ। আল্লাহুম্মা বারিক 'আলা মুহাম্মাদিও ওয়া 'আলা আ-লি মুহাম্মাদ, কামা বারাকতা 'আলা ইবরাহীমা ওয়া 'আলা আ-লি ইবরাহীম, ইন্নাকা হামীদুম মাজীদ", "en": "Allaahumma ṣalli 'alaa Muḥammadiw-wa 'alaa aali Muḥammad, kamaa ṣallayta 'alaa Ibraaheema wa 'alaa aali Ibraaheem, innaka Ḥameedum Majeed. Allaahumma baarik 'alaa Muḥammadiw-wa 'alaa aali Muḥammad, kamaa baarakta 'alaa Ibraaheema wa 'alaa aali Ibraaheem, innaka Ḥameedum Majeed" }, "mean": { "bn": "হে আল্লাহ! মুহাম্মাদ ﷺ ও তাঁর পরিবারের উপর রহমত বর্ষণ করুন, যেমন ইবরাহীম (আ.) ও তাঁর পরিবারের উপর করেছেন; নিশ্চয়ই আপনি প্রশংসিত, মহিমান্বিত। হে আল্লাহ! মুহাম্মাদ ﷺ ও তাঁর পরিবারের উপর বরকত দিন, যেমন ইবরাহীম (আ.) ও তাঁর পরিবারের উপর দিয়েছেন; নিশ্চয়ই আপনি প্রশংসিত, মহিমান্বিত।", "en": "O Allah, send Your grace upon Muhammad ﷺ and the family of Muhammad, as You sent it upon Ibrahim and the family of Ibrahim; You are truly Praiseworthy, Glorious. O Allah, bless Muhammad ﷺ and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim; You are truly Praiseworthy, Glorious." }, "desc": { "bn": "শেষ বৈঠকে তাশাহহুদের পর পড়ি।", "en": "Said in the final sitting, after the tashahhud." } },
{ "title": { "bn": "১৬. সালামের আগে দোয়া", "en": "16. Dua before salam" }, "ar": "اللّٰهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ", "tr": { "bn": "আল্লাহুম্মা ইন্নী যালামতু নাফসী যুলমান কাসীরাও ওয়া লা ইয়াগফিরুয যুনূবা ইল্লা আনতা, ফাগফিরলী মাগফিরাতাম মিন 'ইনদিকা ওয়ারহামনী, ইন্নাকা আনতাল গাফূরুর রাহীম", "en": "Allaahumma innee ẓalamtu nafsee ẓulman katheeraw-wa laa yaghfirudh-dhunooba illaa ant, faghfir lee maghfiratam min 'indika warḥamnee, innaka antal-Ghafoorur-Raḥeem" }, "mean": { "bn": "হে আল্লাহ! আমি নিজের উপর অনেক জুলুম করেছি, আর আপনি ছাড়া কেউ গুনাহ মাফ করতে পারে না। তাই আপনার পক্ষ থেকে আমাকে ক্ষমা করুন এবং আমার প্রতি দয়া করুন; নিশ্চয়ই আপনি পরম ক্ষমাশীল, অতি দয়ালু।", "en": "O Allah, I have wronged myself greatly, and none forgives sins but You. So forgive me with forgiveness from Yourself and have mercy on me; You are the Forgiving, the Merciful." }, "desc": { "bn": "নবী ﷺ এই দোয়াটি আবু বকর (রা.)-কে নামাজে পড়ার জন্য শিখিয়েছিলেন। (বুখারী, মুসলিম)", "en": "The Prophet ﷺ taught this dua to Abu Bakr (may Allah be pleased with him) to say in his prayer. (Bukhari, Muslim)" } },
{ "title": { "bn": "১৭. সালাম", "en": "17. Taslim (ending with salam)" }, "ar": "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ", "tr": { "bn": "আসসালামু 'আলাইকুম ওয়া রাহমাতুল্লাহ", "en": "As-salaamu 'alaykum wa raḥmatullaah" }, "mean": { "bn": "তোমাদের উপর শান্তি ও আল্লাহর রহমত বর্ষিত হোক", "en": "Peace be upon you and the mercy of Allah" }, "desc": { "bn": "প্রথমে ডানে, তারপর বামে মুখ ফিরিয়ে বলি। নামাজ শুরু হয়েছিল ‘আল্লাহু আকবার’ দিয়ে, শেষ হলো ‘শান্তি’ দিয়ে।", "en": "Turn the face to the right, then to the left, saying it each time. Salah began with ‘Allah is the Greatest’ and ends with ‘peace’." } }
] },
{ "type": "tip", "kind": "memory", "title": { "bn": "মনে রাখার কৌশল", "en": "Memory trick" }, "bn": "রুকুতে আমরা ঝুঁকে থাকি, তাই বলি রব **মহান** ({{الْعَظِيمِ}})। সিজদায় আমরা সবচেয়ে নিচে, তাই বলি রব **সর্বোচ্চ** ({{الْأَعْلَى}})। নিচু = আ'লা (উঁচু)!", "en": "In ruku' we bow, so we say our Lord is **Magnificent** ({{الْعَظِيمِ}}). In sujud we are at our lowest, so we say our Lord is **Most High** ({{الْأَعْلَى}}). Lowest body = A'laa (Highest)!" },
{ "type": "table", "title": { "bn": "এক নজরে", "en": "At a glance" }, "head": [ { "bn": "অবস্থান", "en": "Position" }, { "bn": "কী বলি", "en": "What we say" }, { "bn": "অর্থ", "en": "Meaning" } ], "rows": [
[ { "bn": "দাঁড়ানো (কিয়াম)", "en": "Standing (qiyam)" }, "سُبْحَانَكَ اللّٰهُمَّ …", { "bn": "সানা, ফাতিহা, সূরা", "en": "Thana, Fatiha, surah" } ],
[ { "bn": "রুকু", "en": "Ruku'" }, "سُبْحَانَ رَبِّيَ الْعَظِيمِ", { "bn": "আমার মহান রব পবিত্র", "en": "Glory to my Magnificent Lord" } ],
[ { "bn": "রুকু থেকে ওঠা", "en": "Rising" }, "سَمِعَ اللّٰهُ لِمَنْ حَمِدَهُ", { "bn": "প্রশংসাকারীর কথা আল্লাহ শোনেন", "en": "Allah hears the one who praises Him" } ],
[ { "bn": "সোজা দাঁড়ানো", "en": "Standing straight" }, "رَبَّنَا وَلَكَ الْحَمْدُ", { "bn": "হে রব, সব প্রশংসা আপনার", "en": "Our Lord, all praise is Yours" } ],
[ { "bn": "সিজদা", "en": "Sujud" }, "سُبْحَانَ رَبِّيَ الْأَعْلَى", { "bn": "আমার সর্বোচ্চ রব পবিত্র", "en": "Glory to my Lord Most High" } ],
[ { "bn": "দুই সিজদার মাঝে", "en": "Between sajdahs" }, "رَبِّ اغْفِرْ لِي", { "bn": "হে রব, আমাকে ক্ষমা করুন", "en": "My Lord, forgive me" } ],
[ { "bn": "বৈঠক", "en": "Sitting" }, "التَّحِيَّاتُ لِلّٰهِ …", { "bn": "তাশাহহুদ, দরূদ, দোয়া", "en": "Tashahhud, durood, dua" } ],
[ { "bn": "শেষ", "en": "End" }, "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ", { "bn": "শান্তি ও রহমত", "en": "Peace and mercy" } ]
] },
{ "type": "tip", "kind": "tip", "bn": "তিন বা চার রাকাতের নামাজে দ্বিতীয় রাকাতের পর শুধু তাশাহহুদ পড়ে উঠে দাঁড়াই; দরূদ ও দোয়া পড়ি একেবারে শেষ বৈঠকে। আর তৃতীয়-চতুর্থ রাকাতের ফরজে সাধারণত শুধু ফাতিহা পড়ি।", "en": "In a three- or four-rak'ah prayer, after the second rak'ah we recite only the tashahhud and stand up; the durood and dua come in the final sitting. In the 3rd and 4th rak'ahs of a fard prayer we usually recite only Al-Fatiha." },
{ "type": "tip", "kind": "fun", "title": { "bn": "ভাবনার খোরাক", "en": "Reflect" }, "bn": "নবী ﷺ বলেছেন, বান্দা তার রবের সবচেয়ে কাছে থাকে যখন সে সিজদায় থাকে — তাই সিজদায় বেশি বেশি দোয়া করো। (সহীহ মুসলিম) মাথা যত নিচে, আল্লাহ তত কাছে।", "en": "The Prophet ﷺ said a servant is closest to his Lord while in sujud, so make plenty of dua there. (Sahih Muslim) The lower the head, the nearer to Allah." },
{ "type": "quiz", "items": [
{ "q": { "bn": "রুকুতে কোন তাসবীহ পড়ি?", "en": "Which tasbih do we say in ruku'?" }, "options": [ "سُبْحَانَ رَبِّيَ الْأَعْلَى", "سُبْحَانَ رَبِّيَ الْعَظِيمِ", "رَبِّ اغْفِرْ لِي" ], "answer": 1 },
{ "q": { "bn": "{{الْأَعْلَى}} অর্থ কী?", "en": "What does {{الْأَعْلَى}} mean?" }, "options": [ { "bn": "সর্বোচ্চ", "en": "the Most High" }, { "bn": "মহান", "en": "the Magnificent" }, { "bn": "দয়ালু", "en": "the Merciful" } ], "answer": 0 },
{ "q": { "bn": "{{سَمِعَ اللّٰهُ لِمَنْ حَمِدَهُ}} কখন বলি?", "en": "When do we say {{سَمِعَ اللّٰهُ لِمَنْ حَمِدَهُ}}?" }, "options": [ { "bn": "সিজদায় যাওয়ার সময়", "en": "Going into sujud" }, { "bn": "রুকু থেকে ওঠার সময়", "en": "Rising from ruku'" }, { "bn": "সালাম ফেরানোর সময়", "en": "When giving salam" } ], "answer": 1 },
{ "q": { "bn": "দুই সিজদার মাঝে বসে কী বলি?", "en": "What do we say sitting between the two sajdahs?" }, "options": [ "رَبِّ اغْفِرْ لِي", "آمِين", "سُبْحَانَكَ اللّٰهُمَّ" ], "answer": 0 },
{ "q": { "bn": "{{وَلَا إِلٰهَ غَيْرُكَ}} — এখানে {{غَيْرُكَ}} মানে কী?", "en": "In {{وَلَا إِلٰهَ غَيْرُكَ}}, what does {{غَيْرُكَ}} mean?" }, "options": [ { "bn": "আপনার নাম", "en": "Your name" }, { "bn": "আপনি ছাড়া", "en": "other than You" }, { "bn": "আপনার প্রশংসা", "en": "Your praise" } ], "answer": 1 },
{ "q": { "bn": "নামাজ শেষ হয় কোন কথা দিয়ে?", "en": "Which words end the salah?" }, "options": [ "اللّٰهُ أَكْبَرُ", "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ", "آمِين" ], "answer": 1 },
{ "q": { "bn": "{{آمِين}} অর্থ কী?", "en": "What does {{آمِين}} mean?" }, "options": [ { "bn": "হে আল্লাহ, কবুল করুন", "en": "O Allah, accept" }, { "bn": "আল্লাহ সবচেয়ে বড়", "en": "Allah is the Greatest" }, { "bn": "সব প্রশংসা আল্লাহর", "en": "All praise is for Allah" } ], "answer": 0 }
] }
]
},
{
"id": "quran-tashahhud",
"icon": "تشهد",
"title": { "bn": "তাশাহহুদ, দরূদ ও শেষ দোয়া", "en": "Tashahhud, Durood & Final Duas" },
"subtitle": { "bn": "বৈঠকের দোয়াগুলো শব্দে শব্দে, আর নামাজের পরের যিকির", "en": "The sitting duas word by word, plus remembrance after salah" },
"minutes": 18,
"goals": [
{ "bn": "আত্তাহিয়্যাতু শব্দে শব্দে বুঝব", "en": "Understand at-taḥiyyaat word by word" },
{ "bn": "দরূদে ইবরাহীমের অর্থ জানব", "en": "Know the meaning of Durood Ibrahim" },
{ "bn": "সালামের আগের দোয়া ও নামাজের পরের যিকির শিখব", "en": "Learn the dua before salam and the dhikr after salah" }
],
"blocks": [
{ "type": "text", "bn": "নামাজের শেষ বৈঠকটা যেন একটা সুন্দর চিঠির শেষ অংশ: প্রথমে আল্লাহকে সম্মান, তারপর নবী ﷺ-কে সালাম, নিজের ও সব নেককারের জন্য শান্তি, ঈমানের সাক্ষ্য, নবীর জন্য দোয়া, আর শেষে নিজের জন্য ক্ষমা চাওয়া।", "en": "The final sitting of salah is like the closing of a beautiful letter: first honour to Allah, then greetings to the Prophet ﷺ, peace for ourselves and all the righteous, the testimony of faith, prayers for the Prophet, and finally asking forgiveness for ourselves." },
{ "type": "table", "title": { "bn": "তাশাহহুদ — শব্দে শব্দে", "en": "Tashahhud — word by word" }, "head": [ { "bn": "আরবি", "en": "Arabic" }, { "bn": "অর্থ", "en": "Meaning" } ], "rows": [
[ "التَّحِيَّاتُ", { "bn": "সব সম্মান ও অভিবাদন", "en": "all greetings and honours" } ],
[ "لِلّٰهِ", { "bn": "আল্লাহর জন্য", "en": "are for Allah" } ],
[ "وَالصَّلَوَاتُ", { "bn": "এবং সব নামাজ/ইবাদত", "en": "and all prayers" } ],
[ "وَالطَّيِّبَاتُ", { "bn": "এবং সব পবিত্র ভালো কথা ও কাজ", "en": "and all pure, good things" } ],
[ "السَّلَامُ عَلَيْكَ", { "bn": "আপনার উপর শান্তি", "en": "peace be upon you" } ],
[ "أَيُّهَا النَّبِيُّ", { "bn": "হে নবী", "en": "O Prophet" } ],
[ "وَرَحْمَةُ اللّٰهِ", { "bn": "এবং আল্লাহর রহমত", "en": "and the mercy of Allah" } ],
[ "وَبَرَكَاتُهُ", { "bn": "এবং তাঁর বরকত", "en": "and His blessings" } ],
[ "السَّلَامُ عَلَيْنَا", { "bn": "আমাদের উপর শান্তি", "en": "peace be upon us" } ],
[ "وَعَلَى عِبَادِ اللّٰهِ", { "bn": "এবং আল্লাহর বান্দাদের উপর", "en": "and upon the servants of Allah" } ],
[ "الصَّالِحِينَ", { "bn": "যারা নেককার", "en": "who are righteous" } ],
[ "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ", { "bn": "আমি সাক্ষ্য দিই, আল্লাহ ছাড়া কোনো ইলাহ নেই", "en": "I bear witness there is no god but Allah" } ],
[ "وَأَشْهَدُ أَنَّ مُحَمَّدًا", { "bn": "এবং সাক্ষ্য দিই যে মুহাম্মাদ ﷺ", "en": "and I bear witness that Muhammad ﷺ" } ],
[ "عَبْدُهُ وَرَسُولُهُ", { "bn": "তাঁর বান্দা ও তাঁর রাসূল", "en": "is His servant and His Messenger" } ]
] },
{ "type": "tip", "kind": "fun", "bn": "নবী ﷺ বলেছেন: যখন তোমরা বলো {{وَعَلَى عِبَادِ اللّٰهِ الصَّالِحِينَ}}, তখন আসমান ও জমিনের প্রত্যেক নেক বান্দার কাছে তা পৌঁছে যায়। (বুখারী, মুসলিম) প্রতিটি নামাজে তুমি পৃথিবীর সব ভালো মানুষের জন্য শান্তি পাঠাচ্ছ!", "en": "The Prophet ﷺ said: when you say {{وَعَلَى عِبَادِ اللّٰهِ الصَّالِحِينَ}}, it reaches every righteous servant in the heavens and the earth. (Bukhari, Muslim) In every prayer you send peace to every good person in the world!" },
{ "type": "tip", "kind": "tip", "bn": "সাক্ষ্যের বাক্যে ({{أَشْهَدُ أَنْ لَا إِلٰهَ}}) পৌঁছে অনেকেই ডান হাতের শাহাদাত আঙুল দিয়ে ইশারা করে — এক আল্লাহর সাক্ষ্য।", "en": "When reaching the testimony ({{أَشْهَدُ أَنْ لَا إِلٰهَ}}), many raise the right index finger — a sign of witnessing that Allah is One." },
{ "type": "table", "title": { "bn": "দরূদে ইবরাহীম — শব্দে শব্দে", "en": "Durood Ibrahim — word by word" }, "head": [ { "bn": "আরবি", "en": "Arabic" }, { "bn": "অর্থ", "en": "Meaning" } ], "rows": [
[ "اللّٰهُمَّ", { "bn": "হে আল্লাহ", "en": "O Allah" } ],
[ "صَلِّ عَلَى مُحَمَّدٍ", { "bn": "মুহাম্মাদ ﷺ-এর উপর রহমত ও সম্মান বর্ষণ করুন", "en": "send Your grace and honour upon Muhammad ﷺ" } ],
[ "وَعَلَى آلِ مُحَمَّدٍ", { "bn": "এবং মুহাম্মাদ ﷺ-এর পরিবারের উপর", "en": "and upon the family of Muhammad" } ],
[ "كَمَا صَلَّيْتَ", { "bn": "যেমন আপনি রহমত বর্ষণ করেছেন", "en": "just as You sent grace" } ],
[ "عَلَى إِبْرَاهِيمَ", { "bn": "ইবরাহীম (আ.)-এর উপর", "en": "upon Ibrahim" } ],
[ "وَعَلَى آلِ إِبْرَاهِيمَ", { "bn": "এবং ইবরাহীম (আ.)-এর পরিবারের উপর", "en": "and upon the family of Ibrahim" } ],
[ "إِنَّكَ", { "bn": "নিশ্চয়ই আপনি", "en": "indeed You are" } ],
[ "حَمِيدٌ", { "bn": "প্রশংসিত", "en": "Praiseworthy" } ],
[ "مَجِيدٌ", { "bn": "মহিমান্বিত", "en": "Glorious" } ],
[ "اللّٰهُمَّ بَارِكْ", { "bn": "হে আল্লাহ, বরকত দিন", "en": "O Allah, bless" } ],
[ "كَمَا بَارَكْتَ", { "bn": "যেমন আপনি বরকত দিয়েছেন", "en": "just as You blessed" } ]
] },
{ "type": "tip", "kind": "memory", "bn": "দরূদের দুটি অংশ প্রায় একই রকম — শুধু প্রথম অংশে {{صَلِّ}} / {{صَلَّيْتَ}} (রহমত), দ্বিতীয় অংশে {{بَارِكْ}} / {{بَارَكْتَ}} (বরকত)। একটা মুখস্থ হলে অন্যটাও হয়ে যায়!", "en": "The two halves of the durood are almost the same — the first uses {{صَلِّ}} / {{صَلَّيْتَ}} (grace), the second {{بَارِكْ}} / {{بَارَكْتَ}} (blessing). Learn one half and you nearly have the other!" },
{ "type": "table", "title": { "bn": "সালামের আগের দোয়া — শব্দে শব্দে", "en": "Dua before salam — word by word" }, "head": [ { "bn": "আরবি", "en": "Arabic" }, { "bn": "অর্থ", "en": "Meaning" } ], "rows": [
[ "اللّٰهُمَّ إِنِّي", { "bn": "হে আল্লাহ, নিশ্চয়ই আমি", "en": "O Allah, indeed I" } ],
[ "ظَلَمْتُ نَفْسِي", { "bn": "নিজের উপর জুলুম করেছি", "en": "have wronged myself" } ],
[ "ظُلْمًا كَثِيرًا", { "bn": "অনেক বেশি জুলুম", "en": "a great deal" } ],
[ "وَلَا يَغْفِرُ الذُّنُوبَ", { "bn": "আর কেউ গুনাহ মাফ করে না", "en": "and none forgives sins" } ],
[ "إِلَّا أَنْتَ", { "bn": "আপনি ছাড়া", "en": "except You" } ],
[ "فَاغْفِرْ لِي", { "bn": "তাই আমাকে ক্ষমা করুন", "en": "so forgive me" } ],
[ "مَغْفِرَةً مِنْ عِنْدِكَ", { "bn": "আপনার নিজের পক্ষ থেকে ক্ষমা", "en": "with forgiveness from Yourself" } ],
[ "وَارْحَمْنِي", { "bn": "এবং আমার প্রতি দয়া করুন", "en": "and have mercy on me" } ],
[ "إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ", { "bn": "নিশ্চয়ই আপনিই পরম ক্ষমাশীল, অতি দয়ালু", "en": "You alone are the Forgiving, the Merciful" } ]
] },
{ "type": "examples", "title": { "bn": "সালামের আগে আরেকটি দোয়া", "en": "Another dua before salam" }, "items": [
{ "ar": "اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ وَمِنْ عَذَابِ الْقَبْرِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ", "tr": { "bn": "আল্লাহুম্মা ইন্নী আ'ঊযু বিকা মিন 'আযাবি জাহান্নামা, ওয়া মিন 'আযাবিল কাবরি, ওয়া মিন ফিতনাতিল মাহইয়া ওয়াল মামাতি, ওয়া মিন শাররি ফিতনাতিল মাসীহিদ দাজ্জাল", "en": "Allaahumma innee a'oodhu bika min 'adhaabi jahannama, wa min 'adhaabil-qabri, wa min fitnatil-maḥyaa wal-mamaati, wa min sharri fitnatil-maseeḥid-dajjaal" }, "mean": { "bn": "হে আল্লাহ! আমি আপনার আশ্রয় চাই জাহান্নামের শাস্তি থেকে, কবরের শাস্তি থেকে, জীবন ও মৃত্যুর পরীক্ষা থেকে, এবং মাসীহ দাজ্জালের ফিতনার অনিষ্ট থেকে।", "en": "O Allah, I seek refuge in You from the punishment of Hell, from the punishment of the grave, from the trials of life and death, and from the evil of the trial of the False Messiah (Dajjal)." }, "note": { "bn": "নবী ﷺ শেষ তাশাহহুদের পর এই চারটি জিনিস থেকে আশ্রয় চাইতে বলেছেন। (সহীহ মুসলিম)", "en": "The Prophet ﷺ told us to seek refuge from these four after the final tashahhud. (Sahih Muslim)" } }
] },
{ "type": "examples", "title": { "bn": "নামাজের পরের যিকির", "en": "Dhikr after salah" }, "items": [
{ "ar": "أَسْتَغْفِرُ اللّٰهَ", "tr": { "bn": "আসতাগফিরুল্লাহ", "en": "Astaghfirullaah" }, "mean": { "bn": "আমি আল্লাহর কাছে ক্ষমা চাই", "en": "I seek Allah's forgiveness" }, "note": { "bn": "সালামের পর ৩ বার। (সহীহ মুসলিম)", "en": "3 times after salam. (Sahih Muslim)" } },
{ "ar": "اللّٰهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", "tr": { "bn": "আল্লাহুম্মা আনতাস সালামু ওয়া মিনকাস সালামু, তাবারাকতা ইয়া যাল জালালি ওয়াল ইকরাম", "en": "Allaahumma antas-salaamu wa minkas-salaamu, tabaarakta yaa dhal-jalaali wal-ikraam" }, "mean": { "bn": "হে আল্লাহ! আপনিই শান্তি (আস-সালাম), আপনার কাছ থেকেই শান্তি আসে; আপনি বরকতময়, হে মহিমা ও সম্মানের অধিকারী।", "en": "O Allah, You are Peace (as-Salaam) and from You comes peace; blessed are You, O Possessor of majesty and honour." }, "note": { "bn": "সহীহ মুসলিম", "en": "Sahih Muslim" } },
{ "ar": "سُبْحَانَ اللّٰهِ", "tr": { "bn": "সুবহানাল্লাহ", "en": "Subḥaanallaah" }, "mean": { "bn": "আল্লাহ পবিত্র", "en": "Glory be to Allah" }, "note": { "bn": "৩৩ বার", "en": "33 times" } },
{ "ar": "الْحَمْدُ لِلّٰهِ", "tr": { "bn": "আলহামদু লিল্লাহ", "en": "Alḥamdu lillaah" }, "mean": { "bn": "সব প্রশংসা আল্লাহর", "en": "All praise is for Allah" }, "note": { "bn": "৩৩ বার", "en": "33 times" } },
{ "ar": "اللّٰهُ أَكْبَرُ", "tr": { "bn": "আল্লাহু আকবার", "en": "Allaahu akbar" }, "mean": { "bn": "আল্লাহ সবচেয়ে বড়", "en": "Allah is the Greatest" }, "note": { "bn": "৩৪ বার (সহীহ মুসলিম)", "en": "34 times (Sahih Muslim)" } }
] },
{ "type": "tip", "kind": "memory", "title": { "bn": "ভাবনার খোরাক", "en": "Reflect" }, "bn": "এত সুন্দর নামাজ পড়ার পরেও প্রথম কথা — {{أَسْتَغْفِرُ اللّٰهَ}}! কারণ আমাদের ইবাদতে ভুল-ত্রুটি থেকেই যায়। ভালো কাজ করে অহংকার নয়, বিনয় শেখায় এই যিকির।", "en": "Even after a beautiful prayer, our first words are {{أَسْتَغْفِرُ اللّٰهَ}}! Because our worship always has gaps. This dhikr teaches humility after good deeds, not pride." },
{ "type": "vocab", "items": [
{ "ar": "سَلَامٌ", "tr": { "bn": "সালাম", "en": "salaam" }, "mean": { "bn": "শান্তি", "en": "peace" }, "root": "س ل م" },
{ "ar": "رَحْمَةٌ", "tr": { "bn": "রাহমাহ", "en": "raḥmah" }, "mean": { "bn": "দয়া, রহমত", "en": "mercy" }, "root": "ر ح م" },
{ "ar": "بَرَكَةٌ", "tr": { "bn": "বারাকাহ", "en": "barakah" }, "mean": { "bn": "বরকত, কল্যাণের প্রাচুর্য", "en": "blessing" }, "root": "ب ر ك" },
{ "ar": "عِبَادٌ", "tr": { "bn": "'ইবাদ", "en": "'ibaad" }, "mean": { "bn": "বান্দারা", "en": "servants" }, "root": "ع ب د" },
{ "ar": "صَالِحٌ", "tr": { "bn": "সালিহ", "en": "ṣaaliḥ" }, "mean": { "bn": "নেককার, ভালো", "en": "righteous" }, "root": "ص ل ح" },
{ "ar": "ذُنُوبٌ", "tr": { "bn": "যুনূব", "en": "dhunoob" }, "mean": { "bn": "গুনাহসমূহ", "en": "sins" }, "root": "ذ ن ب" },
{ "ar": "نَفْسٌ", "tr": { "bn": "নাফস", "en": "nafs" }, "mean": { "bn": "নিজ, আত্মা", "en": "self, soul" }, "root": "ن ف س" }
] },
{ "type": "quiz", "items": [
{ "q": { "bn": "{{التَّحِيَّاتُ}} অর্থ কী?", "en": "What does {{التَّحِيَّاتُ}} mean?" }, "options": [ { "bn": "সব সম্মান ও অভিবাদন", "en": "all greetings and honours" }, { "bn": "সব গুনাহ", "en": "all sins" }, { "bn": "সব বান্দা", "en": "all servants" } ], "answer": 0 },
{ "q": { "bn": "তাশাহহুদে কাকে {{أَيُّهَا}} বলে সম্বোধন করি?", "en": "In the tashahhud, who is addressed with {{أَيُّهَا}}?" }, "options": [ { "bn": "নবী ﷺ", "en": "the Prophet ﷺ" }, { "bn": "ইমাম", "en": "the imam" }, { "bn": "ফেরেশতা", "en": "the angels" } ], "answer": 0, "explain": { "bn": "{{أَيُّهَا النَّبِيُّ}} — হে নবী।", "en": "{{أَيُّهَا النَّبِيُّ}} — O Prophet." } },
{ "q": { "bn": "{{الصَّالِحِينَ}} মানে কী?", "en": "What does {{الصَّالِحِينَ}} mean?" }, "options": [ { "bn": "নামাজীরা", "en": "those who pray" }, { "bn": "নেককাররা", "en": "the righteous" }, { "bn": "নবীরা", "en": "the prophets" } ], "answer": 1 },
{ "q": { "bn": "দরূদে {{حَمِيدٌ مَجِيدٌ}} অর্থ কী?", "en": "In the durood, what does {{حَمِيدٌ مَجِيدٌ}} mean?" }, "options": [ { "bn": "ক্ষমাশীল, দয়ালু", "en": "Forgiving, Merciful" }, { "bn": "প্রশংসিত, মহিমান্বিত", "en": "Praiseworthy, Glorious" }, { "bn": "শ্রোতা, দ্রষ্টা", "en": "All-Hearing, All-Seeing" } ], "answer": 1 },
{ "q": { "bn": "দরূদে মুহাম্মাদ ﷺ-এর সাথে কোন নবীর নাম আসে?", "en": "Which prophet is mentioned alongside Muhammad ﷺ in the durood?" }, "options": [ { "bn": "মূসা (আ.)", "en": "Musa" }, { "bn": "ইবরাহীম (আ.)", "en": "Ibrahim" }, { "bn": "ঈসা (আ.)", "en": "'Isa" } ], "answer": 1 },
{ "q": { "bn": "{{ظَلَمْتُ نَفْسِي}} অর্থ কী?", "en": "What does {{ظَلَمْتُ نَفْسِي}} mean?" }, "options": [ { "bn": "আমি নিজের উপর জুলুম করেছি", "en": "I have wronged myself" }, { "bn": "আমি আপনার আশ্রয় চাই", "en": "I seek Your refuge" }, { "bn": "আমাকে পথ দেখান", "en": "guide me" } ], "answer": 0 },
{ "q": { "bn": "নামাজের পর {{اللّٰهُ أَكْبَرُ}} কতবার পড়ার কথা হাদীসে আছে?", "en": "How many times is {{اللّٰهُ أَكْبَرُ}} said after salah in the hadith?" }, "options": [ "৩৩ / 33", "৩৪ / 34", "১০০ / 100" ], "answer": 1 }
] }
]
},
{
"id": "quran-fatiha",
"icon": "١",
"title": { "bn": "সূরা আল-ফাতিহা", "en": "Surah Al-Fatiha" },
"subtitle": { "bn": "কুরআনের শুরু, প্রতিটি রাকাতের প্রাণ — শব্দে শব্দে", "en": "The Opening of the Quran, the heart of every rak'ah — word by word" },
"minutes": 20,
"goals": [
{ "bn": "সূরা ফাতিহার সাতটি আয়াত শব্দে শব্দে বুঝব", "en": "Understand all seven ayahs of Al-Fatiha word by word" },
{ "bn": "ফাতিহা যে আল্লাহর সাথে একটি ‘কথোপকথন’ — তা জানব", "en": "Discover how Al-Fatiha is a ‘conversation’ with Allah" },
{ "bn": "নামাজে মনোযোগ বাড়ানোর একটি কৌশল শিখব", "en": "Learn a way to focus better in salah" }
],
"blocks": [
{ "type": "text", "bn": "দিনে অন্তত ১৭ বার আমরা সূরা ফাতিহা পড়ি — প্রতিটি ফরজ রাকাতে একবার। নবী ﷺ বলেছেন, যে ফাতিহা পড়ে না তার নামাজ হয় না। (বুখারী, মুসলিম) এই সূরার আরও নাম আছে: ‘উম্মুল কিতাব’ (কিতাবের মূল) ও ‘আস-সাব'উল মাসানী’ (বারবার পড়া সাত আয়াত)।", "en": "We recite Al-Fatiha at least 17 times a day — once in every fard rak'ah. The Prophet ﷺ said there is no prayer for one who does not recite Al-Fatiha. (Bukhari, Muslim) It has other names too: ‘Umm al-Kitab’ (the Mother of the Book) and ‘as-Sab' al-Mathani’ (the seven oft-repeated verses)." },
{ "type": "ayah", "ref": "1:1", "ar": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ", "words": [
{ "ar": "بِسْمِ", "bn": "নামে", "en": "In the name" },
{ "ar": "اللّٰهِ", "bn": "আল্লাহর", "en": "of Allah" },
{ "ar": "الرَّحْمٰنِ", "bn": "পরম করুণাময়", "en": "the Most Compassionate" },
{ "ar": "الرَّحِيمِ", "bn": "অসীম দয়ালু", "en": "the Most Merciful" }
], "tr": { "bn": "বিসমিল্লাহির রাহমানির রাহীম", "en": "Bismillaahir-Raḥmaanir-Raḥeem" }, "mean": { "bn": "পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে (শুরু করছি)।", "en": "In the name of Allah, the Most Compassionate, the Most Merciful." } },
{ "type": "tip", "kind": "tip", "bn": "{{الرَّحْمٰنِ}} আর {{الرَّحِيمِ}} দুটোই এসেছে {{رَحْمَة}} (দয়া) থেকে। ‘আর-রাহমান’ — যাঁর দয়া বিশাল, সবার জন্য ছড়ানো; ‘আর-রাহীম’ — যিনি সবসময় দয়া করেই চলেন। দুটো একসাথে মানে: দয়া আর দয়া!", "en": "{{الرَّحْمٰنِ}} and {{الرَّحِيمِ}} both come from {{رَحْمَة}} (mercy). ‘Ar-Rahman’ — whose mercy is vast and covers everyone; ‘Ar-Raheem’ — who keeps showing mercy, again and again. Together: mercy upon mercy!" },
{ "type": "ayah", "ref": "1:2", "ar": "الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ", "words": [
{ "ar": "الْحَمْدُ", "bn": "সব প্রশংসা", "en": "All praise" },
{ "ar": "لِلّٰهِ", "bn": "আল্লাহর জন্য", "en": "is for Allah" },
{ "ar": "رَبِّ", "bn": "রব, প্রতিপালক", "en": "Lord" },
{ "ar": "الْعَالَمِينَ", "bn": "সব জগতের", "en": "of all the worlds" }
], "tr": { "bn": "আলহামদু লিল্লাহি রাব্বিল 'আলামীন", "en": "Al-ḥamdu lillaahi rabbil-'aalameen" }, "mean": { "bn": "সব প্রশংসা আল্লাহর, যিনি সব জগতের রব।", "en": "All praise is for Allah, Lord of all the worlds." } },
{ "type": "ayah", "ref": "1:3", "ar": "الرَّحْمٰنِ الرَّحِيمِ", "words": [
{ "ar": "الرَّحْمٰنِ", "bn": "পরম করুণাময়", "en": "the Most Compassionate" },
{ "ar": "الرَّحِيمِ", "bn": "অসীম দয়ালু", "en": "the Most Merciful" }
], "tr": { "bn": "আর-রাহমানির রাহীম", "en": "Ar-Raḥmaanir-Raḥeem" }, "mean": { "bn": "যিনি পরম করুণাময়, অসীম দয়ালু।", "en": "The Most Compassionate, the Most Merciful." } },
{ "type": "ayah", "ref": "1:4", "ar": "مَالِكِ يَوْمِ الدِّينِ", "words": [
{ "ar": "مَالِكِ", "bn": "মালিক", "en": "Master / Owner" },
{ "ar": "يَوْمِ", "bn": "দিনের", "en": "of the Day" },
{ "ar": "الدِّينِ", "bn": "প্রতিদান / বিচার", "en": "of Judgement" }
], "tr": { "bn": "মা-লিকি ইয়াওমিদ্দীন", "en": "Maaliki yawmid-deen" }, "mean": { "bn": "যিনি বিচার দিবসের মালিক।", "en": "Master of the Day of Judgement." } },
{ "type": "ayah", "ref": "1:5", "ar": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", "words": [
{ "ar": "إِيَّاكَ", "bn": "শুধু আপনারই", "en": "You alone" },
{ "ar": "نَعْبُدُ", "bn": "আমরা ইবাদত করি", "en": "we worship" },
{ "ar": "وَإِيَّاكَ", "bn": "এবং শুধু আপনারই কাছে", "en": "and You alone" },
{ "ar": "نَسْتَعِينُ", "bn": "আমরা সাহায্য চাই", "en": "we ask for help" }
], "tr": { "bn": "ইয়্যাকা না'বুদু ওয়া ইয়্যাকা নাসতা'ঈন", "en": "Iyyaaka na'budu wa iyyaaka nasta'een" }, "mean": { "bn": "আমরা শুধু আপনারই ইবাদত করি এবং শুধু আপনারই কাছে সাহায্য চাই।", "en": "You alone we worship, and You alone we ask for help." } },
{ "type": "tip", "kind": "memory", "bn": "সাধারণ আরবিতে বলা যেত ‘না'বুদুকা’ (আমরা আপনার ইবাদত করি)। কিন্তু এখানে {{إِيَّاكَ}} আগে এসেছে — অর্থ দাঁড়ায় ‘**শুধু** আপনারই’। শব্দের এই আগে-পিছে বসানোতেই লুকিয়ে আছে তাওহীদ!", "en": "Ordinary Arabic could say ‘na'buduka’ (we worship You). But here {{إِيَّاكَ}} comes first — giving the meaning ‘You **alone**’. Tawheed is hidden in the word order!" },
{ "type": "ayah", "ref": "1:6", "ar": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", "words": [
{ "ar": "اهْدِنَا", "bn": "আমাদের পথ দেখান", "en": "Guide us" },
{ "ar": "الصِّرَاطَ", "bn": "পথে", "en": "to the path" },
{ "ar": "الْمُسْتَقِيمَ", "bn": "সরল, সোজা", "en": "the straight" }
], "tr": { "bn": "ইহদিনাস সিরাতাল মুসতাকীম", "en": "Ihdinaṣ-ṣiraaṭal-mustaqeem" }, "mean": { "bn": "আমাদের সরল-সঠিক পথ দেখান।", "en": "Guide us to the straight path." } },
{ "type": "ayah", "ref": "1:7", "ar": "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", "words": [
{ "ar": "صِرَاطَ", "bn": "পথ", "en": "The path" },
{ "ar": "الَّذِينَ", "bn": "তাদের, যাদের", "en": "of those" },
{ "ar": "أَنْعَمْتَ", "bn": "আপনি অনুগ্রহ করেছেন", "en": "You have blessed" },
{ "ar": "عَلَيْهِمْ", "bn": "তাদের উপর", "en": "upon them" },
{ "ar": "غَيْرِ", "bn": "নয়", "en": "not" },
{ "ar": "الْمَغْضُوبِ", "bn": "যাদের উপর ক্রোধ পড়েছে", "en": "those who earned anger" },
{ "ar": "عَلَيْهِمْ", "bn": "তাদের উপর", "en": "upon them" },
{ "ar": "وَلَا", "bn": "এবং নয়", "en": "and not" },
{ "ar": "الضَّالِّينَ", "bn": "পথভ্রষ্টদের", "en": "those who went astray" }
], "tr": { "bn": "সিরাতাল্লাযীনা আন'আমতা 'আলাইহিম, গাইরিল মাগদূবি 'আলাইহিম ওয়ালাদ্দাল্লীন", "en": "Ṣiraaṭal-ladheena an'amta 'alayhim, ghayril-maghḍoobi 'alayhim wa laḍ-ḍaalleen" }, "mean": { "bn": "তাদের পথ, যাদের আপনি অনুগ্রহ করেছেন; তাদের পথ নয়, যাদের উপর আপনার ক্রোধ পড়েছে, আর তাদেরও নয়, যারা পথ হারিয়েছে।", "en": "The path of those You have blessed — not of those who earned Your anger, nor of those who went astray." } },
{ "type": "steps", "title": { "bn": "ফাতিহা — আল্লাহর সাথে কথোপকথন", "en": "Al-Fatiha — a conversation with Allah" }, "items": [
{ "title": { "bn": "আমরা বলি", "en": "We say" }, "ar": "الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ", "desc": { "bn": "আল্লাহ বলেন: ‘আমার বান্দা আমার প্রশংসা করল।’", "en": "Allah says: ‘My servant has praised Me.’" } },
{ "title": { "bn": "আমরা বলি", "en": "We say" }, "ar": "الرَّحْمٰنِ الرَّحِيمِ", "desc": { "bn": "আল্লাহ বলেন: ‘আমার বান্দা আমার গুণগান করল।’", "en": "Allah says: ‘My servant has extolled Me.’" } },
{ "title": { "bn": "আমরা বলি", "en": "We say" }, "ar": "مَالِكِ يَوْمِ الدِّينِ", "desc": { "bn": "আল্লাহ বলেন: ‘আমার বান্দা আমার মহিমা ঘোষণা করল।’", "en": "Allah says: ‘My servant has glorified Me.’" } },
{ "title": { "bn": "আমরা বলি", "en": "We say" }, "ar": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", "desc": { "bn": "আল্লাহ বলেন: ‘এটা আমার ও আমার বান্দার মাঝে; আমার বান্দা যা চাইবে তা পাবে।’", "en": "Allah says: ‘This is between Me and My servant, and My servant shall have what he asks.’" } },
{ "title": { "bn": "আমরা বলি", "en": "We say" }, "ar": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ …", "desc": { "bn": "আল্লাহ বলেন: ‘এটা আমার বান্দার জন্য; আমার বান্দা যা চাইল তা পাবে।’ (সহীহ মুসলিম, হাদীসে কুদসী)", "en": "Allah says: ‘This is for My servant, and My servant shall have what he asked.’ (Sahih Muslim, hadith qudsi)" } }
] },
{ "type": "tip", "kind": "fun", "title": { "bn": "ভাবনার খোরাক", "en": "Reflect" }, "bn": "পরের নামাজে প্রতিটি আয়াতের পর একটু থামো আর মনে করো — আল্লাহ এইমাত্র আমার কথার জবাব দিলেন! ফাতিহা তখন আর মুখস্থ পড়া থাকবে না, হয়ে যাবে সত্যিকারের কথা বলা। আর লক্ষ করো, আমরা চাই ‘**আমাদের**’ পথ দেখান — শুধু ‘আমাকে’ নয়। মুমিন সবার জন্য ভালো চায়।", "en": "In your next prayer, pause briefly after each ayah and remember — Allah has just answered me! Al-Fatiha stops being a memorised recital and becomes a real conversation. And notice we ask ‘guide **us**’ — not just ‘me’. A believer wants good for everyone." },
{ "type": "vocab", "items": [
{ "ar": "حَمْدٌ", "tr": { "bn": "হামদ", "en": "ḥamd" }, "mean": { "bn": "প্রশংসা", "en": "praise" }, "root": "ح م د", "example": { "ar": "الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ", "mean": { "bn": "সব প্রশংসা আল্লাহর, যিনি সব জগতের রব", "en": "All praise is for Allah, Lord of the worlds" }, "ref": "1:2" } },
{ "ar": "رَبٌّ", "tr": { "bn": "রব", "en": "rabb" }, "mean": { "bn": "প্রতিপালক, মালিক", "en": "Lord, Sustainer" }, "root": "ر ب ب" },
{ "ar": "يَوْمٌ", "tr": { "bn": "ইয়াওম", "en": "yawm" }, "mean": { "bn": "দিন", "en": "day" }, "root": "ي و م" },
{ "ar": "نَعْبُدُ", "tr": { "bn": "না'বুদু", "en": "na'budu" }, "mean": { "bn": "আমরা ইবাদত করি", "en": "we worship" }, "root": "ع ب د" },
{ "ar": "صِرَاطٌ", "tr": { "bn": "সিরাত", "en": "ṣiraaṭ" }, "mean": { "bn": "পথ", "en": "path" }, "root": "ص ر ط" },
{ "ar": "مُسْتَقِيمٌ", "tr": { "bn": "মুসতাকীম", "en": "mustaqeem" }, "mean": { "bn": "সোজা, সরল", "en": "straight" }, "root": "ق و م" }
] },
{ "type": "quiz", "items": [
{ "q": { "bn": "{{الْعَالَمِينَ}} অর্থ কী?", "en": "What does {{الْعَالَمِينَ}} mean?" }, "options": [ { "bn": "সব জগৎ", "en": "all the worlds" }, { "bn": "বিচার দিবস", "en": "the Day of Judgement" }, { "bn": "সরল পথ", "en": "the straight path" } ], "answer": 0 },
{ "q": { "bn": "{{نَسْتَعِينُ}} মানে কী?", "en": "What does {{نَسْتَعِينُ}} mean?" }, "options": [ { "bn": "আমরা ইবাদত করি", "en": "we worship" }, { "bn": "আমরা সাহায্য চাই", "en": "we ask for help" }, { "bn": "আমাদের পথ দেখান", "en": "guide us" } ], "answer": 1 },
{ "q": { "bn": "কোন আয়াতে আল্লাহকে ‘বিচার দিবসের মালিক’ বলা হয়েছে?", "en": "Which ayah calls Allah ‘Master of the Day of Judgement’?" }, "options": [ "الرَّحْمٰنِ الرَّحِيمِ", "مَالِكِ يَوْمِ الدِّينِ", "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ" ], "answer": 1 },
{ "q": { "bn": "{{اهْدِنَا}} অর্থ কী?", "en": "What does {{اهْدِنَا}} mean?" }, "options": [ { "bn": "আমাদের ক্ষমা করুন", "en": "forgive us" }, { "bn": "আমাদের পথ দেখান", "en": "guide us" }, { "bn": "আমাদের রিযিক দিন", "en": "provide for us" } ], "answer": 1 },
{ "q": { "bn": "{{الضَّالِّينَ}} কারা?", "en": "Who are {{الضَّالِّينَ}}?" }, "options": [ { "bn": "যারা পথ হারিয়েছে", "en": "those who went astray" }, { "bn": "যাদের অনুগ্রহ করা হয়েছে", "en": "those who were blessed" }, { "bn": "যারা ইবাদত করে", "en": "those who worship" } ], "answer": 0 },
{ "q": { "bn": "সূরা ফাতিহায় কয়টি আয়াত?", "en": "How many ayahs are in Al-Fatiha?" }, "options": [ "৫ / 5", "৬ / 6", "৭ / 7", "৮ / 8" ], "answer": 2 },
{ "q": { "bn": "হাদীসে কুদসী অনুযায়ী, {{إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ}} শুনে আল্লাহ কী বলেন?", "en": "According to the hadith qudsi, what does Allah say at {{إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ}}?" }, "options": [ { "bn": "আমার বান্দা আমার প্রশংসা করল", "en": "My servant has praised Me" }, { "bn": "এটা আমার ও আমার বান্দার মাঝে", "en": "This is between Me and My servant" }, { "bn": "আমার বান্দা আমার মহিমা ঘোষণা করল", "en": "My servant has glorified Me" } ], "answer": 1 }
] }
]
},
{
"id": "quran-ikhlas",
"icon": "١١٢",
"title": { "bn": "সূরা আল-ইখলাস", "en": "Surah Al-Ikhlas" },
"subtitle": { "bn": "চার আয়াতে আল্লাহর পরিচয় — শব্দে শব্দে", "en": "Who Allah is, in four ayahs — word by word" },
"minutes": 12,
"goals": [
{ "bn": "সূরা ইখলাসের প্রতিটি শব্দের অর্থ জানব", "en": "Know the meaning of every word of Al-Ikhlas" },
{ "bn": "{{أَحَدٌ}} ও {{الصَّمَدُ}} — এই দুটি নামের গভীরতা বুঝব", "en": "Grasp the depth of the names {{أَحَدٌ}} and {{الصَّمَدُ}}" },
{ "bn": "এই সূরার বিশেষ ফযিলত জানব", "en": "Learn the special virtue of this surah" }
],
"blocks": [
{ "type": "text", "bn": "কেউ যদি জিজ্ঞেস করে, ‘তোমার রব কেমন?’ — সবচেয়ে সুন্দর উত্তর এই ছোট্ট সূরাটি। ‘ইখলাস’ মানে খাঁটি করা — এই সূরা আমাদের ঈমানকে খাঁটি তাওহীদে পরিষ্কার করে দেয়।", "en": "If someone asks, ‘What is your Lord like?’ — the most beautiful answer is this little surah. ‘Ikhlas’ means making pure — this surah purifies our faith into pure tawheed." },
{ "type": "ayah", "ref": "112:1", "ar": "قُلْ هُوَ اللّٰهُ أَحَدٌ", "words": [
{ "ar": "قُلْ", "bn": "বলুন", "en": "Say" },
{ "ar": "هُوَ", "bn": "তিনি", "en": "He is" },
{ "ar": "اللّٰهُ", "bn": "আল্লাহ", "en": "Allah" },
{ "ar": "أَحَدٌ", "bn": "এক ও অদ্বিতীয়", "en": "the One, the Unique" }
], "tr": { "bn": "কুল হুওয়াল্লা-হু আহাদ", "en": "Qul huwallaahu aḥad" }, "mean": { "bn": "বলুন: তিনিই আল্লাহ, এক ও অদ্বিতীয়।", "en": "Say: He is Allah, the One and Only." } },
{ "type": "ayah", "ref": "112:2", "ar": "اللّٰهُ الصَّمَدُ", "words": [
{ "ar": "اللّٰهُ", "bn": "আল্লাহ", "en": "Allah" },
{ "ar": "الصَّمَدُ", "bn": "অমুখাপেক্ষী, সবাই যাঁর মুখাপেক্ষী", "en": "the Self-Sufficient, on whom all depend" }
], "tr": { "bn": "আল্লা-হুস সামাদ", "en": "Allaahuṣ-ṣamad" }, "mean": { "bn": "আল্লাহ কারও মুখাপেক্ষী নন, আর সবকিছু তাঁরই মুখাপেক্ষী।", "en": "Allah needs no one, and everything depends on Him." } },
{ "type": "tip", "kind": "memory", "bn": "{{الصَّمَدُ}} এমন একজন, যাঁর কাছে সবাই নিজের প্রয়োজন নিয়ে যায়, কিন্তু তাঁর নিজের কোনো প্রয়োজন নেই। আমাদের খিদে লাগে, ঘুম পায়, সাহায্য লাগে — আল্লাহর এসব কিছুই লাগে না। তাই সব চাওয়া তাঁর কাছেই।", "en": "{{الصَّمَدُ}} is the One everyone turns to with their needs, while He Himself needs nothing. We get hungry, sleepy, we need help — Allah needs none of these. So every request goes to Him." },
{ "type": "ayah", "ref": "112:3", "ar": "لَمْ يَلِدْ وَلَمْ يُولَدْ", "words": [
{ "ar": "لَمْ يَلِدْ", "bn": "তিনি কাউকে জন্ম দেননি", "en": "He has not begotten" },
{ "ar": "وَلَمْ يُولَدْ", "bn": "এবং তাঁকেও জন্ম দেওয়া হয়নি", "en": "nor was He begotten" }
], "tr": { "bn": "লাম ইয়ালিদ ওয়া লাম ইউলাদ", "en": "Lam yalid wa lam yoolad" }, "mean": { "bn": "তিনি কাউকে জন্ম দেননি, কেউ তাঁকে জন্ম দেয়নি।", "en": "He has no child, and He was not born of anyone." } },
{ "type": "ayah", "ref": "112:4", "ar": "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", "words": [
{ "ar": "وَلَمْ يَكُن", "bn": "এবং নেই", "en": "And there is not" },
{ "ar": "لَّهُ", "bn": "তাঁর", "en": "to Him" },
{ "ar": "كُفُوًا", "bn": "সমতুল্য", "en": "equal, comparable" },
{ "ar": "أَحَدٌ", "bn": "কেউ", "en": "anyone" }
], "tr": { "bn": "ওয়া লাম ইয়াকুল লাহূ কুফুওয়ান আহাদ", "en": "Wa lam yakul-lahoo kufuwan aḥad" }, "mean": { "bn": "আর তাঁর সমতুল্য কেউই নেই।", "en": "And there is none comparable to Him." } },
{ "type": "tip", "kind": "tip", "bn": "লক্ষ করো: {{لَمْ}} + বর্তমান কালের ক্রিয়া = অতীতে ‘করেনি’। {{يَلِدْ}} = জন্ম দেয়, {{لَمْ يَلِدْ}} = জন্ম দেননি। একই শব্দমূল {{و ل د}} থেকে {{وَلَد}} (সন্তান) শব্দটিও এসেছে।", "en": "Notice: {{لَمْ}} + a present-tense verb = ‘did not’. {{يَلِدْ}} = begets, {{لَمْ يَلِدْ}} = did not beget. The same root {{و ل د}} gives {{وَلَد}} (child)." },
{ "type": "tip", "kind": "fun", "title": { "bn": "এই সূরার মর্যাদা", "en": "The rank of this surah" }, "bn": "নবী ﷺ বলেছেন, সূরা ইখলাস কুরআনের এক-তৃতীয়াংশের সমান। (সহীহ বুখারী) একজন সাহাবী নামাজে প্রতিবার এই সূরা পড়তেন; কারণ জিজ্ঞেস করলে বললেন, ‘এতে দয়াময়ের গুণাবলি আছে, তাই আমি এটা পড়তে ভালোবাসি।’ নবী ﷺ বললেন, ‘তাকে জানিয়ে দাও, আল্লাহও তাকে ভালোবাসেন।’ (বুখারী, মুসলিম)", "en": "The Prophet ﷺ said Surah Al-Ikhlas equals one third of the Quran. (Sahih al-Bukhari) A companion used to recite it in every prayer; when asked why, he said, ‘It describes the Most Merciful, and I love to recite it.’ The Prophet ﷺ said, ‘Tell him that Allah loves him too.’ (Bukhari, Muslim)" },
{ "type": "tip", "kind": "memory", "title": { "bn": "ভাবনার খোরাক", "en": "Reflect" }, "bn": "যে জিনিস ভালোবাসো, তার কথা বারবার বলো — সাহাবী আল্লাহর গুণ ভালোবাসতেন, আর আল্লাহ তাঁকে ভালোবাসলেন। আজ থেকে ইখলাস পড়ার সময় অর্থটা মনে করো — শুধু মুখে নয়, মন দিয়ে।", "en": "We speak often of what we love — the companion loved Allah's qualities, and Allah loved him. From today, recall the meaning whenever you recite Al-Ikhlas — not only with the tongue, but with the heart." },
{ "type": "quiz", "items": [
{ "q": { "bn": "{{الصَّمَدُ}} অর্থ কী?", "en": "What does {{الصَّمَدُ}} mean?" }, "options": [ { "bn": "অমুখাপেক্ষী, সবাই যাঁর মুখাপেক্ষী", "en": "Self-Sufficient, on whom all depend" }, { "bn": "সর্বশ্রোতা", "en": "All-Hearing" }, { "bn": "ক্ষমাশীল", "en": "Forgiving" } ], "answer": 0 },
{ "q": { "bn": "{{أَحَدٌ}} মানে কী?", "en": "What does {{أَحَدٌ}} mean?" }, "options": [ { "bn": "এক ও অদ্বিতীয়", "en": "the One, the Unique" }, { "bn": "প্রথম", "en": "the First" }, { "bn": "মহান", "en": "the Great" } ], "answer": 0 },
{ "q": { "bn": "কোন আয়াত বলে ‘তিনি কাউকে জন্ম দেননি, কেউ তাঁকে জন্ম দেয়নি’?", "en": "Which ayah says ‘He has no child, and was not born’?" }, "options": [ "اللّٰهُ الصَّمَدُ", "لَمْ يَلِدْ وَلَمْ يُولَدْ", "قُلْ هُوَ اللّٰهُ أَحَدٌ" ], "answer": 1 },
{ "q": { "bn": "{{كُفُوًا}} অর্থ কী?", "en": "What does {{كُفُوًا}} mean?" }, "options": [ { "bn": "সন্তান", "en": "child" }, { "bn": "সমতুল্য", "en": "equal" }, { "bn": "বন্ধু", "en": "friend" } ], "answer": 1 },
{ "q": { "bn": "হাদীস অনুযায়ী সূরা ইখলাস কুরআনের কত অংশের সমান?", "en": "According to the hadith, Al-Ikhlas equals what portion of the Quran?" }, "options": [ { "bn": "অর্ধেক", "en": "half" }, { "bn": "এক-তৃতীয়াংশ", "en": "one third" }, { "bn": "এক-চতুর্থাংশ", "en": "one quarter" } ], "answer": 1 },
{ "q": { "bn": "{{قُلْ}} অর্থ কী?", "en": "What does {{قُلْ}} mean?" }, "options": [ { "bn": "পড়ুন", "en": "Read" }, { "bn": "বলুন", "en": "Say" }, { "bn": "শুনুন", "en": "Listen" } ], "answer": 1 }
] }
]
},
{
"id": "quran-falaq-nas",
"icon": "١١٣",
"title": { "bn": "সূরা আল-ফালাক ও আন-নাস", "en": "Surah Al-Falaq & An-Nas" },
"subtitle": { "bn": "দুই আশ্রয়ের সূরা — বাইরের ও ভেতরের অনিষ্ট থেকে সুরক্ষা", "en": "The two surahs of refuge — protection from outer and inner harm" },
"minutes": 18,
"goals": [
{ "bn": "সূরা ফালাক ও নাস শব্দে শব্দে বুঝব", "en": "Understand Al-Falaq and An-Nas word by word" },
{ "bn": "কোন কোন অনিষ্ট থেকে আশ্রয় চাই তা জানব", "en": "Know which harms we seek refuge from" },
{ "bn": "রাতে ঘুমানোর আগে নবী ﷺ-এর সুন্নাহ শিখব", "en": "Learn the Prophet's ﷺ bedtime sunnah with these surahs" }
],
"blocks": [
{ "type": "text", "bn": "কুরআনের শেষ দুটি সূরাকে বলে ‘মু'আওয়িযাতাইন’ — আশ্রয় চাওয়ার দুই সূরা। দুটোই শুরু হয় {{قُلْ أَعُوذُ}} দিয়ে: ‘বলুন, আমি আশ্রয় চাই।’ সূরা ফালাক বাইরের বিপদ থেকে, আর সূরা নাস ভেতরের কুমন্ত্রণা থেকে সুরক্ষা চায়।", "en": "The last two surahs of the Quran are called ‘al-Mu'awwidhatayn’ — the two surahs of seeking refuge. Both begin with {{قُلْ أَعُوذُ}}: ‘Say, I seek refuge.’ Al-Falaq asks protection from outer dangers, An-Nas from inner whispers." },
{ "type": "tip", "kind": "fun", "bn": "সাহাবী উকবা ইবনে আমের (রা.)-কে নবী ﷺ বলেছিলেন: ‘তুমি কি দেখোনি, আজ রাতে এমন কিছু আয়াত নাযিল হয়েছে যার মতো আর কখনো দেখা যায়নি? — {{قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ}} ও {{قُلْ أَعُوذُ بِرَبِّ النَّاسِ}}।’ (সহীহ মুসলিম)", "en": "The Prophet ﷺ told the companion 'Uqbah ibn 'Amir: ‘Have you not seen the verses revealed tonight, the like of which has never been seen? — {{قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ}} and {{قُلْ أَعُوذُ بِرَبِّ النَّاسِ}}.’ (Sahih Muslim)" },
{ "type": "text", "title": { "bn": "সূরা আল-ফালাক (১১৩)", "en": "Surah Al-Falaq (113)" }, "bn": "‘ফালাক’ মানে ভোর — অন্ধকার চিরে আলো বের হওয়া।", "en": "‘Falaq’ means daybreak — light splitting through the darkness." },
{ "type": "ayah", "ref": "113:1", "ar": "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", "words": [
{ "ar": "قُلْ", "bn": "বলুন", "en": "Say" },
{ "ar": "أَعُوذُ", "bn": "আমি আশ্রয় চাই", "en": "I seek refuge" },
{ "ar": "بِرَبِّ", "bn": "রবের কাছে", "en": "in the Lord" },
{ "ar": "الْفَلَقِ", "bn": "ভোরের", "en": "of daybreak" }
], "tr": { "bn": "কুল আ'ঊযু বিরাব্বিল ফালাক", "en": "Qul a'oodhu birabbil-falaq" }, "mean": { "bn": "বলুন: আমি আশ্রয় চাই ভোরের রবের কাছে,", "en": "Say: I seek refuge in the Lord of daybreak," } },
{ "type": "ayah", "ref": "113:2", "ar": "مِنْ شَرِّ مَا خَلَقَ", "words": [
{ "ar": "مِنْ", "bn": "থেকে", "en": "from" },
{ "ar": "شَرِّ", "bn": "অনিষ্ট", "en": "the evil of" },
{ "ar": "مَا", "bn": "যা কিছু", "en": "what" },
{ "ar": "خَلَقَ", "bn": "তিনি সৃষ্টি করেছেন", "en": "He created" }
], "tr": { "bn": "মিন শাররি মা খালাক", "en": "Min sharri maa khalaq" }, "mean": { "bn": "তিনি যা কিছু সৃষ্টি করেছেন তার অনিষ্ট থেকে,", "en": "from the evil of what He has created," } },
{ "type": "ayah", "ref": "113:3", "ar": "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ", "words": [
{ "ar": "وَمِنْ شَرِّ", "bn": "এবং অনিষ্ট থেকে", "en": "and from the evil of" },
{ "ar": "غَاسِقٍ", "bn": "আঁধার রাতের", "en": "the darkness (of night)" },
{ "ar": "إِذَا", "bn": "যখন", "en": "when" },
{ "ar": "وَقَبَ", "bn": "তা ছেয়ে যায়", "en": "it settles in" }
], "tr": { "bn": "ওয়া মিন শাররি গা-সিকিন ইযা ওয়াকাব", "en": "Wa min sharri ghaasiqin idhaa waqab" }, "mean": { "bn": "এবং রাতের আঁধারের অনিষ্ট থেকে, যখন তা ছেয়ে যায়,", "en": "and from the evil of the darkness when it settles," } },
{ "type": "ayah", "ref": "113:4", "ar": "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", "words": [
{ "ar": "وَمِنْ شَرِّ", "bn": "এবং অনিষ্ট থেকে", "en": "and from the evil of" },
{ "ar": "النَّفَّاثَاتِ", "bn": "ফুঁ-দানকারীদের", "en": "those who blow" },
{ "ar": "فِي الْعُقَدِ", "bn": "গিঁটে", "en": "on knots" }
], "tr": { "bn": "ওয়া মিন শাররিন নাফফা-সা-তি ফিল 'উকাদ", "en": "Wa min sharrin-naffaathaati fil-'uqad" }, "mean": { "bn": "এবং গিঁটে ফুঁ দেয় যারা (জাদুকর), তাদের অনিষ্ট থেকে,", "en": "and from the evil of those who blow on knots (practising magic)," } },
{ "type": "ayah", "ref": "113:5", "ar": "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", "words": [
{ "ar": "وَمِنْ شَرِّ", "bn": "এবং অনিষ্ট থেকে", "en": "and from the evil of" },
{ "ar": "حَاسِدٍ", "bn": "হিংসুকের", "en": "an envier" },
{ "ar": "إِذَا", "bn": "যখন", "en": "when" },
{ "ar": "حَسَدَ", "bn": "সে হিংসা করে", "en": "he envies" }
], "tr": { "bn": "ওয়া মিন শাররি হা-সিদিন ইযা হাসাদ", "en": "Wa min sharri ḥaasidin idhaa ḥasad" }, "mean": { "bn": "এবং হিংসুকের অনিষ্ট থেকে, যখন সে হিংসা করে।", "en": "and from the evil of an envier when he envies." } },
{ "type": "text", "title": { "bn": "সূরা আন-নাস (১১৪)", "en": "Surah An-Nas (114)" }, "bn": "‘নাস’ মানে মানুষ। এই সূরায় আল্লাহর তিনটি পরিচয় দিয়ে একটিমাত্র বিপদ থেকে আশ্রয় চাওয়া হয়েছে — অন্তরের কুমন্ত্রণা।", "en": "‘Nas’ means people. In this surah, we call on three qualities of Allah to seek refuge from just one danger — the whisper in the heart." },
{ "type": "ayah", "ref": "114:1", "ar": "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", "words": [
{ "ar": "قُلْ", "bn": "বলুন", "en": "Say" },
{ "ar": "أَعُوذُ", "bn": "আমি আশ্রয় চাই", "en": "I seek refuge" },
{ "ar": "بِرَبِّ", "bn": "রবের কাছে", "en": "in the Lord" },
{ "ar": "النَّاسِ", "bn": "মানুষের", "en": "of mankind" }
], "tr": { "bn": "কুল আ'ঊযু বিরাব্বিন না-স", "en": "Qul a'oodhu birabbin-naas" }, "mean": { "bn": "বলুন: আমি আশ্রয় চাই মানুষের রবের কাছে,", "en": "Say: I seek refuge in the Lord of mankind," } },
{ "type": "ayah", "ref": "114:2", "ar": "مَلِكِ النَّاسِ", "words": [
{ "ar": "مَلِكِ", "bn": "বাদশাহ", "en": "the King" },
{ "ar": "النَّاسِ", "bn": "মানুষের", "en": "of mankind" }
], "tr": { "bn": "মালিকিন না-স", "en": "Malikin-naas" }, "mean": { "bn": "মানুষের বাদশাহর কাছে,", "en": "the King of mankind," } },
{ "type": "ayah", "ref": "114:3", "ar": "إِلٰهِ النَّاسِ", "words": [
{ "ar": "إِلٰهِ", "bn": "ইলাহ, উপাস্য", "en": "the God" },
{ "ar": "النَّاسِ", "bn": "মানুষের", "en": "of mankind" }
], "tr": { "bn": "ইলা-হিন না-স", "en": "Ilaahin-naas" }, "mean": { "bn": "মানুষের ইলাহর কাছে,", "en": "the God of mankind," } },
{ "type": "ayah", "ref": "114:4", "ar": "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", "words": [
{ "ar": "مِنْ شَرِّ", "bn": "অনিষ্ট থেকে", "en": "from the evil of" },
{ "ar": "الْوَسْوَاسِ", "bn": "কুমন্ত্রণাদাতার", "en": "the whisperer" },
{ "ar": "الْخَنَّاسِ", "bn": "যে পিছিয়ে লুকিয়ে যায়", "en": "who slinks away" }
], "tr": { "bn": "মিন শাররিল ওয়াসওয়া-সিল খান্না-স", "en": "Min sharril-waswaasil-khannaas" }, "mean": { "bn": "সেই কুমন্ত্রণাদাতার অনিষ্ট থেকে, যে (আল্লাহর নাম শুনলে) পিছিয়ে লুকিয়ে যায়,", "en": "from the evil of the whisperer who slinks away (when Allah is remembered)," } },
{ "type": "ayah", "ref": "114:5", "ar": "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", "words": [
{ "ar": "الَّذِي", "bn": "যে", "en": "who" },
{ "ar": "يُوَسْوِسُ", "bn": "কুমন্ত্রণা দেয়", "en": "whispers" },
{ "ar": "فِي صُدُورِ", "bn": "অন্তরে", "en": "into the hearts" },
{ "ar": "النَّاسِ", "bn": "মানুষের", "en": "of people" }
], "tr": { "bn": "আল্লাযী ইউওয়াসউইসু ফী সুদূরিন না-স", "en": "Alladhee yuwaswisu fee ṣudoorin-naas" }, "mean": { "bn": "যে মানুষের অন্তরে কুমন্ত্রণা দেয়,", "en": "who whispers into the hearts of people," } },
{ "type": "ayah", "ref": "114:6", "ar": "مِنَ الْجِنَّةِ وَالنَّاسِ", "words": [
{ "ar": "مِنَ", "bn": "মধ্য থেকে", "en": "from among" },
{ "ar": "الْجِنَّةِ", "bn": "জিনদের", "en": "the jinn" },
{ "ar": "وَالنَّاسِ", "bn": "ও মানুষের", "en": "and mankind" }
], "tr": { "bn": "মিনাল জিন্নাতি ওয়ান না-স", "en": "Minal-jinnati wan-naas" }, "mean": { "bn": "সে জিনদের মধ্য থেকে হোক বা মানুষের মধ্য থেকে।", "en": "whether from among the jinn or mankind." } },
{ "type": "compare", "title": { "bn": "দুই সূরার তুলনা", "en": "The two surahs compared" }, "items": [
{ "ar": "الْفَلَقِ", "label": { "bn": "আল্লাহর ১টি গুণ, ৪টি বিপদ", "en": "1 quality of Allah, 4 dangers" }, "desc": { "bn": "সৃষ্টির অনিষ্ট, রাতের আঁধার, জাদু, হিংসা — বাইরের বিপদ।", "en": "Evil of creation, darkness, magic, envy — outer dangers." } },
{ "ar": "النَّاسِ", "label": { "bn": "আল্লাহর ৩টি গুণ, ১টি বিপদ", "en": "3 qualities of Allah, 1 danger" }, "desc": { "bn": "রব, বাদশাহ, ইলাহ — শুধু কুমন্ত্রণা থেকে বাঁচতে! ভেতরের বিপদ সবচেয়ে বড়।", "en": "Lord, King, God — just to escape the whisper! The inner danger is the greatest." } }
] },
{ "type": "tip", "kind": "tip", "title": { "bn": "ঘুমানোর আগের সুন্নাহ", "en": "The bedtime sunnah" }, "bn": "নবী ﷺ প্রতি রাতে বিছানায় গিয়ে দুই হাত একত্র করে সূরা ইখলাস, ফালাক ও নাস পড়ে হাতে ফুঁ দিতেন, তারপর মাথা ও মুখ থেকে শুরু করে যতটা সম্ভব শরীরে হাত বুলাতেন — তিনবার। (সহীহ বুখারী)", "en": "Every night when the Prophet ﷺ went to bed, he would cup his hands, recite Al-Ikhlas, Al-Falaq and An-Nas, blow into them, then wipe over as much of his body as he could, starting with the head and face — three times. (Sahih al-Bukhari)" },
{ "type": "tip", "kind": "memory", "title": { "bn": "ভাবনার খোরাক", "en": "Reflect" }, "bn": "{{الْخَنَّاسِ}} — যে পিছিয়ে যায়। খারাপ চিন্তা আসলে ভয় পেও না; আল্লাহকে স্মরণ করো, {{أَعُوذُ بِاللّٰهِ}} বলো — কুমন্ত্রণাদাতা পালিয়ে যাবে। শয়তানের শক্তি শুধু ফিসফিস করা পর্যন্ত, জোর করার ক্ষমতা তার নেই।", "en": "{{الْخَنَّاسِ}} — the one who retreats. When a bad thought comes, don't panic; remember Allah and say {{أَعُوذُ بِاللّٰهِ}} — the whisperer runs away. Satan's power is only to whisper; he cannot force you." },
{ "type": "quiz", "items": [
{ "q": { "bn": "{{الْفَلَقِ}} অর্থ কী?", "en": "What does {{الْفَلَقِ}} mean?" }, "options": [ { "bn": "ভোর", "en": "daybreak" }, { "bn": "রাত", "en": "night" }, { "bn": "মানুষ", "en": "mankind" } ], "answer": 0 },
{ "q": { "bn": "{{أَعُوذُ}} মানে কী?", "en": "What does {{أَعُوذُ}} mean?" }, "options": [ { "bn": "আমি ইবাদত করি", "en": "I worship" }, { "bn": "আমি আশ্রয় চাই", "en": "I seek refuge" }, { "bn": "আমি সাক্ষ্য দিই", "en": "I bear witness" } ], "answer": 1 },
{ "q": { "bn": "কোন আয়াতে হিংসুকের অনিষ্ট থেকে আশ্রয় চাওয়া হয়েছে?", "en": "Which ayah seeks refuge from the envier?" }, "options": [ "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", "مِنْ شَرِّ مَا خَلَقَ", "مَلِكِ النَّاسِ" ], "answer": 0 },
{ "q": { "bn": "সূরা নাসে আল্লাহর কোন তিনটি পরিচয় এসেছে?", "en": "Which three qualities of Allah appear in An-Nas?" }, "options": [ { "bn": "রব, বাদশাহ, ইলাহ", "en": "Lord, King, God" }, { "bn": "দয়াময়, দয়ালু, মালিক", "en": "Compassionate, Merciful, Master" }, { "bn": "জীবিত, চিরস্থায়ী, মহান", "en": "Living, Eternal, Great" } ], "answer": 0 },
{ "q": { "bn": "{{الْوَسْوَاسِ}} কে?", "en": "Who is {{الْوَسْوَاسِ}}?" }, "options": [ { "bn": "কুমন্ত্রণাদাতা", "en": "the whisperer" }, { "bn": "জাদুকর", "en": "the magician" }, { "bn": "হিংসুক", "en": "the envier" } ], "answer": 0 },
{ "q": { "bn": "{{صُدُورِ}} অর্থ কী?", "en": "What does {{صُدُورِ}} mean?" }, "options": [ { "bn": "মুখ", "en": "faces" }, { "bn": "অন্তর / বুক", "en": "hearts / chests" }, { "bn": "হাত", "en": "hands" } ], "answer": 1 },
{ "q": { "bn": "ঘুমানোর আগে নবী ﷺ কোন তিনটি সূরা পড়ে হাতে ফুঁ দিতেন?", "en": "Which three surahs did the Prophet ﷺ recite into his hands before sleeping?" }, "options": [ { "bn": "ফাতিহা, ইখলাস, নাস", "en": "Fatiha, Ikhlas, Nas" }, { "bn": "ইখলাস, ফালাক, নাস", "en": "Ikhlas, Falaq, Nas" }, { "bn": "কাওসার, আসর, নাসর", "en": "Kawthar, 'Asr, Nasr" } ], "answer": 1 }
] }
]
},
{
"id": "quran-kawthar-asr",
"icon": "١٠٨",
"title": { "bn": "সূরা আল-কাওসার ও আল-আসর", "en": "Surah Al-Kawthar & Al-'Asr" },
"subtitle": { "bn": "কুরআনের সবচেয়ে ছোট সূরা আর সময়ের মূল্য", "en": "The shortest surah of the Quran, and the value of time" },
"minutes": 15,
"goals": [
{ "bn": "সূরা কাওসার ও আসর শব্দে শব্দে বুঝব", "en": "Understand Al-Kawthar and Al-'Asr word by word" },
{ "bn": "‘কাওসার’ কী — সহীহ হাদীস থেকে জানব", "en": "Learn what ‘al-Kawthar’ is, from an authentic hadith" },
{ "bn": "ক্ষতি থেকে বাঁচার চারটি গুণ মনে রাখব", "en": "Remember the four qualities that save from loss" }
],
"blocks": [
{ "type": "text", "title": { "bn": "সূরা আল-কাওসার (১০৮)", "en": "Surah Al-Kawthar (108)" }, "bn": "মাত্র তিন আয়াত — কুরআনের সবচেয়ে ছোট সূরা। কিন্তু এতে আছে নবী ﷺ-এর জন্য বিশাল সুসংবাদ।", "en": "Only three ayahs — the shortest surah in the Quran. Yet it carries enormous good news for the Prophet ﷺ." },
{ "type": "ayah", "ref": "108:1", "ar": "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", "words": [
{ "ar": "إِنَّا", "bn": "নিশ্চয়ই আমরা", "en": "Indeed, We" },
{ "ar": "أَعْطَيْنَاكَ", "bn": "আপনাকে দান করেছি", "en": "have given you" },
{ "ar": "الْكَوْثَرَ", "bn": "কাওসার (অফুরন্ত কল্যাণ)", "en": "al-Kawthar (abundant good)" }
], "tr": { "bn": "ইন্না আ'তাইনা-কাল কাওসার", "en": "Innaa a'ṭaynaakal-kawthar" }, "mean": { "bn": "নিশ্চয়ই আমি আপনাকে কাওসার (অফুরন্ত কল্যাণ) দান করেছি।", "en": "Indeed, We have given you al-Kawthar (abundant good)." } },
{ "type": "ayah", "ref": "108:2", "ar": "فَصَلِّ لِرَبِّكَ وَانْحَرْ", "words": [
{ "ar": "فَصَلِّ", "bn": "সুতরাং নামাজ পড়ুন", "en": "So pray" },
{ "ar": "لِرَبِّكَ", "bn": "আপনার রবের জন্য", "en": "to your Lord" },
{ "ar": "وَانْحَرْ", "bn": "এবং কুরবানি করুন", "en": "and sacrifice" }
], "tr": { "bn": "ফাসাল্লি লিরাব্বিকা ওয়ানহার", "en": "Faṣalli lirabbika wanḥar" }, "mean": { "bn": "তাই আপনার রবের জন্যই নামাজ পড়ুন এবং কুরবানি করুন।", "en": "So pray to your Lord and offer sacrifice (for Him alone)." } },
{ "type": "ayah", "ref": "108:3", "ar": "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ", "words": [
{ "ar": "إِنَّ", "bn": "নিশ্চয়ই", "en": "Indeed" },
{ "ar": "شَانِئَكَ", "bn": "আপনার শত্রু / বিদ্বেষী", "en": "your hater" },
{ "ar": "هُوَ", "bn": "সে-ই", "en": "he is" },
{ "ar": "الْأَبْتَرُ", "bn": "শিকড়কাটা, নাম-নিশানাহীন", "en": "the one cut off" }
], "tr": { "bn": "ইন্না শা-নি'আকা হুওয়াল আবতার", "en": "Inna shaani'aka huwal-abtar" }, "mean": { "bn": "নিশ্চয়ই আপনার বিদ্বেষীই শিকড়কাটা (তার কোনো স্থায়ী স্মৃতি থাকবে না)।", "en": "Indeed, it is your hater who is cut off (with no lasting legacy)." } },
{ "type": "tip", "kind": "fun", "title": { "bn": "কাওসার কী?", "en": "What is al-Kawthar?" }, "bn": "আনাস (রা.) বলেন, একদিন নবী ﷺ হালকা তন্দ্রা থেকে হাসিমুখে মাথা তুললেন এবং এই সূরা পড়লেন। তারপর বললেন, ‘কাওসার হলো জান্নাতের একটি নহর, যার ওয়াদা আমার রব আমাকে দিয়েছেন — তাতে অনেক কল্যাণ।’ (সহীহ মুসলিম)", "en": "Anas (may Allah be pleased with him) said the Prophet ﷺ once lifted his head from a light doze, smiling, and recited this surah. Then he said, ‘Al-Kawthar is a river in Paradise my Lord has promised me, full of abundant good.’ (Sahih Muslim)" },
{ "type": "tip", "kind": "memory", "bn": "শত্রুরা নবী ﷺ-কে ‘আবতার’ (যার বংশ টিকবে না) বলে উপহাস করত। আজ দেড় হাজার বছর পরেও প্রতিটি আযানে, প্রতিটি নামাজে তাঁর নাম উচ্চারিত হয় — আর সেই শত্রুদের নামই কেউ মনে রাখে না। আল্লাহর ওয়াদা সত্য!", "en": "Enemies mocked the Prophet ﷺ as ‘abtar’ (one whose line will not last). Fourteen centuries later, his name is spoken in every adhan and every prayer — while hardly anyone remembers those enemies. Allah's promise is true!" },
{ "type": "text", "title": { "bn": "সূরা আল-আসর (১০৩)", "en": "Surah Al-'Asr (103)" }, "bn": "তিন আয়াতে জীবনের পুরো রোডম্যাপ! আল্লাহ সময়ের শপথ করে বলছেন — সব মানুষ ক্ষতিতে আছে, শুধু চার গুণের মানুষ ছাড়া।", "en": "A complete roadmap for life in three ayahs! Allah swears by time that all people are in loss — except those with four qualities." },
{ "type": "ayah", "ref": "103:1", "ar": "وَالْعَصْرِ", "words": [
{ "ar": "وَالْعَصْرِ", "bn": "সময়ের শপথ", "en": "By time" }
], "tr": { "bn": "ওয়াল 'আসর", "en": "Wal-'aṣr" }, "mean": { "bn": "সময়ের শপথ!", "en": "By time!" } },
{ "type": "ayah", "ref": "103:2", "ar": "إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ", "words": [
{ "ar": "إِنَّ", "bn": "নিশ্চয়ই", "en": "Indeed" },
{ "ar": "الْإِنْسَانَ", "bn": "মানুষ", "en": "mankind" },
{ "ar": "لَفِي", "bn": "অবশ্যই মধ্যে আছে", "en": "is surely in" },
{ "ar": "خُسْرٍ", "bn": "ক্ষতির", "en": "loss" }
], "tr": { "bn": "ইন্নাল ইনসা-না লাফী খুসর", "en": "Innal-insaana lafee khusr" }, "mean": { "bn": "নিশ্চয়ই মানুষ ক্ষতির মধ্যে আছে,", "en": "Indeed, mankind is in loss," } },
{ "type": "ayah", "ref": "103:3", "ar": "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ", "words": [
{ "ar": "إِلَّا", "bn": "তবে তারা নয়", "en": "except" },
{ "ar": "الَّذِينَ", "bn": "যারা", "en": "those who" },
{ "ar": "آمَنُوا", "bn": "ঈমান এনেছে", "en": "believe" },
{ "ar": "وَعَمِلُوا", "bn": "এবং করেছে", "en": "and do" },
{ "ar": "الصَّالِحَاتِ", "bn": "নেক কাজ", "en": "righteous deeds" },
{ "ar": "وَتَوَاصَوْا", "bn": "এবং পরস্পরকে উপদেশ দিয়েছে", "en": "and urge one another" },
{ "ar": "بِالْحَقِّ", "bn": "সত্যের", "en": "to the truth" },
{ "ar": "وَتَوَاصَوْا", "bn": "এবং পরস্পরকে উপদেশ দিয়েছে", "en": "and urge one another" },
{ "ar": "بِالصَّبْرِ", "bn": "ধৈর্যের", "en": "to patience" }
], "tr": { "bn": "ইল্লাল্লাযীনা আ-মানূ ওয়া 'আমিলুস সা-লিহা-তি ওয়া তাওয়া-সাও বিল হাক্কি ওয়া তাওয়া-সাও বিস সাবর", "en": "Illal-ladheena aamanoo wa 'amiluṣ-ṣaaliḥaati wa tawaaṣaw bil-ḥaqqi wa tawaaṣaw biṣ-ṣabr" }, "mean": { "bn": "তবে তারা নয়, যারা ঈমান এনেছে, নেক কাজ করেছে, পরস্পরকে সত্যের উপদেশ দিয়েছে এবং পরস্পরকে ধৈর্যের উপদেশ দিয়েছে।", "en": "except those who believe, do righteous deeds, urge one another to the truth, and urge one another to patience." } },
{ "type": "steps", "title": { "bn": "ক্ষতি থেকে বাঁচার ৪টি চাবি", "en": "4 keys to escape loss" }, "items": [
{ "title": { "bn": "ঈমান", "en": "Faith" }, "ar": "آمَنُوا", "desc": { "bn": "মনে বিশ্বাস — সবকিছুর ভিত্তি।", "en": "Belief in the heart — the foundation of everything." } },
{ "title": { "bn": "নেক আমল", "en": "Good deeds" }, "ar": "وَعَمِلُوا الصَّالِحَاتِ", "desc": { "bn": "বিশ্বাসকে কাজে দেখানো।", "en": "Showing belief through action." } },
{ "title": { "bn": "সত্যের উপদেশ", "en": "Urging the truth" }, "ar": "وَتَوَاصَوْا بِالْحَقِّ", "desc": { "bn": "শুধু নিজে নয় — অন্যকেও ভালোর দিকে ডাকা।", "en": "Not only yourself — inviting others to good too." } },
{ "title": { "bn": "ধৈর্যের উপদেশ", "en": "Urging patience" }, "ar": "وَتَوَاصَوْا بِالصَّبْرِ", "desc": { "bn": "কঠিন সময়ে একে অপরকে সাহস দেওয়া।", "en": "Encouraging each other through hard times." } }
] },
{ "type": "tip", "kind": "fun", "title": { "bn": "ভাবনার খোরাক", "en": "Reflect" }, "bn": "ইমাম শাফেয়ী (রহ.) বলেছেন বলে বর্ণিত আছে: মানুষ যদি শুধু এই সূরা নিয়েই চিন্তা করত, তবে এটাই তাদের জন্য যথেষ্ট হতো। সময় যেন রোদে রাখা বরফ — ব্যবহার না করলেও গলে যায়। তাই আজকের দিনটা ঈমান, ভালো কাজ, সত্য আর ধৈর্যে কাজে লাগাও।", "en": "Imam ash-Shafi'i is reported to have said: if people reflected on this surah alone, it would be enough for them. Time is like ice in the sun — it melts away even if you don't use it. So spend today on faith, good deeds, truth and patience." },
{ "type": "vocab", "items": [
{ "ar": "أَعْطَى", "tr": { "bn": "আ'তা", "en": "a'ṭaa" }, "mean": { "bn": "দিলেন, দান করলেন", "en": "he gave" }, "root": "ع ط و" },
{ "ar": "رَبُّكَ", "tr": { "bn": "রাব্বুকা", "en": "rabbuka" }, "mean": { "bn": "তোমার রব", "en": "your Lord" }, "root": "ر ب ب" },
{ "ar": "الْإِنْسَانُ", "tr": { "bn": "আল-ইনসান", "en": "al-insaan" }, "mean": { "bn": "মানুষ", "en": "human being" }, "root": "ا ن س" },
{ "ar": "خُسْرٌ", "tr": { "bn": "খুসর", "en": "khusr" }, "mean": { "bn": "ক্ষতি", "en": "loss" }, "root": "خ س ر" },
{ "ar": "الْحَقُّ", "tr": { "bn": "আল-হাক্ক", "en": "al-ḥaqq" }, "mean": { "bn": "সত্য", "en": "the truth" }, "root": "ح ق ق" },
{ "ar": "الصَّبْرُ", "tr": { "bn": "আস-সাবর", "en": "aṣ-ṣabr" }, "mean": { "bn": "ধৈর্য", "en": "patience" }, "root": "ص ب ر" }
] },
{ "type": "quiz", "items": [
{ "q": { "bn": "হাদীস অনুযায়ী {{الْكَوْثَرَ}} কী?", "en": "According to the hadith, what is {{الْكَوْثَرَ}}?" }, "options": [ { "bn": "জান্নাতের একটি নহর", "en": "a river in Paradise" }, { "bn": "একটি পাহাড়", "en": "a mountain" }, { "bn": "একটি মসজিদ", "en": "a masjid" } ], "answer": 0 },
{ "q": { "bn": "{{وَانْحَرْ}} অর্থ কী?", "en": "What does {{وَانْحَرْ}} mean?" }, "options": [ { "bn": "এবং কুরবানি করুন", "en": "and sacrifice" }, { "bn": "এবং ধৈর্য ধরুন", "en": "and be patient" }, { "bn": "এবং ক্ষমা চান", "en": "and seek forgiveness" } ], "answer": 0 },
{ "q": { "bn": "{{الْأَبْتَرُ}} কাকে বলা হয়েছে?", "en": "Who is called {{الْأَبْتَرُ}}?" }, "options": [ { "bn": "নবী ﷺ-এর বিদ্বেষীকে", "en": "the Prophet's ﷺ hater" }, { "bn": "নবী ﷺ-কে", "en": "the Prophet ﷺ" }, { "bn": "মুমিনদের", "en": "the believers" } ], "answer": 0 },
{ "q": { "bn": "{{الْعَصْرِ}} অর্থ কী?", "en": "What does {{الْعَصْرِ}} mean?" }, "options": [ { "bn": "সময়", "en": "time" }, { "bn": "ভোর", "en": "daybreak" }, { "bn": "রাত", "en": "night" } ], "answer": 0 },
{ "q": { "bn": "{{خُسْرٍ}} মানে কী?", "en": "What does {{خُسْرٍ}} mean?" }, "options": [ { "bn": "সফলতা", "en": "success" }, { "bn": "ক্ষতি", "en": "loss" }, { "bn": "ধৈর্য", "en": "patience" } ], "answer": 1 },
{ "q": { "bn": "সূরা আসরে ক্ষতি থেকে বাঁচার গুণ কয়টি?", "en": "How many qualities save from loss in Al-'Asr?" }, "options": [ "২ / 2", "৩ / 3", "৪ / 4" ], "answer": 2 },
{ "q": { "bn": "কুরআনের সবচেয়ে ছোট সূরা কোনটি?", "en": "Which is the shortest surah of the Quran?" }, "options": [ { "bn": "আল-আসর", "en": "Al-'Asr" }, { "bn": "আল-কাওসার", "en": "Al-Kawthar" }, { "bn": "আল-ইখলাস", "en": "Al-Ikhlas" } ], "answer": 1 }
] }
]
},
{
"id": "quran-nasr-fil",
"icon": "١١٠",
"title": { "bn": "সূরা আন-নাসর, আল-ফীল ও কুরাইশ", "en": "Surah An-Nasr, Al-Fil & Quraysh" },
"subtitle": { "bn": "বিজয়ের সূরা, হাতির ঘটনা আর কুরাইশের প্রতি অনুগ্রহ", "en": "The surah of victory, the story of the elephant, and Allah's favour on Quraysh" },
"minutes": 20,
"goals": [
{ "bn": "সূরা নাসর, ফীল ও কুরাইশ শব্দে শব্দে বুঝব", "en": "Understand An-Nasr, Al-Fil and Quraysh word by word" },
{ "bn": "হাতির বছরের ঘটনা জানব", "en": "Learn the story of the Year of the Elephant" },
{ "bn": "সফলতার পরে কী করতে হয় — সূরা নাসর থেকে শিখব", "en": "Learn from An-Nasr what to do after success" }
],
"blocks": [
{ "type": "text", "title": { "bn": "সূরা আন-নাসর (১১০)", "en": "Surah An-Nasr (110)" }, "bn": "এটি সবশেষে নাযিল হওয়া সূরাগুলোর একটি। মক্কা বিজয়ের পর দলে দলে মানুষ ইসলামে আসছিল — এই সূরা সেই বিজয়ের কথা বলে, আর শেখায় বিজয়ের পর কী করতে হয়।", "en": "This is among the last surahs revealed. After the conquest of Makkah, people were entering Islam in crowds — this surah speaks of that victory and teaches what to do after it." },
{ "type": "ayah", "ref": "110:1", "ar": "إِذَا جَاءَ نَصْرُ اللّٰهِ وَالْفَتْحُ", "words": [
{ "ar": "إِذَا", "bn": "যখন", "en": "When" },
{ "ar": "جَاءَ", "bn": "আসে", "en": "comes" },
{ "ar": "نَصْرُ اللّٰهِ", "bn": "আল্লাহর সাহায্য", "en": "the help of Allah" },
{ "ar": "وَالْفَتْحُ", "bn": "ও বিজয়", "en": "and the victory" }
], "tr": { "bn": "ইযা জা-আ নাসরুল্লা-হি ওয়াল ফাতহ", "en": "Idhaa jaa'a naṣrullaahi wal-fatḥ" }, "mean": { "bn": "যখন আল্লাহর সাহায্য ও বিজয় আসবে,", "en": "When the help of Allah and the victory come," } },
{ "type": "ayah", "ref": "110:2", "ar": "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللّٰهِ أَفْوَاجًا", "words": [
{ "ar": "وَرَأَيْتَ", "bn": "এবং আপনি দেখবেন", "en": "and you see" },
{ "ar": "النَّاسَ", "bn": "মানুষকে", "en": "the people" },
{ "ar": "يَدْخُلُونَ", "bn": "প্রবেশ করছে", "en": "entering" },
{ "ar": "فِي دِينِ اللّٰهِ", "bn": "আল্লাহর দ্বীনে", "en": "into the religion of Allah" },
{ "ar": "أَفْوَاجًا", "bn": "দলে দলে", "en": "in crowds" }
], "tr": { "bn": "ওয়া রা-আইতান না-সা ইয়াদখুলূনা ফী দীনিল্লা-হি আফওয়া-জা", "en": "Wa ra'aytan-naasa yadkhuloona fee deenillaahi afwaajaa" }, "mean": { "bn": "আর আপনি দেখবেন, মানুষ দলে দলে আল্লাহর দ্বীনে প্রবেশ করছে,", "en": "and you see people entering the religion of Allah in crowds," } },
{ "type": "ayah", "ref": "110:3", "ar": "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا", "words": [
{ "ar": "فَسَبِّحْ", "bn": "তখন পবিত্রতা ঘোষণা করুন", "en": "then glorify" },
{ "ar": "بِحَمْدِ رَبِّكَ", "bn": "আপনার রবের প্রশংসাসহ", "en": "with the praise of your Lord" },
{ "ar": "وَاسْتَغْفِرْهُ", "bn": "এবং তাঁর কাছে ক্ষমা চান", "en": "and ask His forgiveness" },
{ "ar": "إِنَّهُ", "bn": "নিশ্চয়ই তিনি", "en": "indeed He" },
{ "ar": "كَانَ", "bn": "হলেন", "en": "is ever" },
{ "ar": "تَوَّابًا", "bn": "তাওবা কবুলকারী", "en": "accepting of repentance" }
], "tr": { "bn": "ফাসাব্বিহ বিহামদি রাব্বিকা ওয়াসতাগফিরহ, ইন্নাহূ কা-না তাওয়্যা-বা", "en": "Fasabbiḥ biḥamdi rabbika wastaghfirh, innahoo kaana tawwaabaa" }, "mean": { "bn": "তখন আপনার রবের প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করুন এবং তাঁর কাছে ক্ষমা চান; নিশ্চয়ই তিনি বারবার তাওবা কবুলকারী।", "en": "then glorify your Lord with His praise and ask His forgiveness; indeed, He is ever accepting of repentance." } },
{ "type": "tip", "kind": "fun", "bn": "উমর (রা.) সাহাবীদের জিজ্ঞেস করলেন এই সূরার অর্থ কী। তরুণ ইবনে আব্বাস (রা.) বললেন: এটি নবী ﷺ-কে জানিয়ে দিচ্ছে যে তাঁর দুনিয়ার কাজ শেষ হয়ে আসছে। উমর (রা.) বললেন, ‘আমিও এটাই বুঝি।’ (সহীহ বুখারী) আয়েশা (রা.) বলেন, এরপর নবী ﷺ রুকু-সিজদায় প্রায়ই বলতেন: {{سُبْحَانَكَ اللّٰهُمَّ رَبَّنَا وَبِحَمْدِكَ اللّٰهُمَّ اغْفِرْ لِي}}। (বুখারী, মুসলিম)", "en": "'Umar asked the companions what this surah meant. Young Ibn 'Abbas said: it tells the Prophet ﷺ that his mission in this world is nearing its end. 'Umar said, ‘I understand the same.’ (Sahih al-Bukhari) 'A'ishah said that afterwards the Prophet ﷺ often said in ruku' and sujud: {{سُبْحَانَكَ اللّٰهُمَّ رَبَّنَا وَبِحَمْدِكَ اللّٰهُمَّ اغْفِرْ لِي}}. (Bukhari, Muslim)" },
{ "type": "tip", "kind": "memory", "title": { "bn": "ভাবনার খোরাক", "en": "Reflect" }, "bn": "পরীক্ষায় ভালো রেজাল্ট, খেলায় জয়, কাজে সফলতা — তখন কী করব? সূরা নাসর বলে: অহংকার নয়, বরং {{سُبْحَانَ اللّٰهِ}}, {{الْحَمْدُ لِلّٰهِ}} আর {{أَسْتَغْفِرُ اللّٰهَ}}। সফলতা আল্লাহর দান — আমার একার কৃতিত্ব নয়।", "en": "A great exam result, a win in a match, success at work — what then? An-Nasr says: not pride, but {{سُبْحَانَ اللّٰهِ}}, {{الْحَمْدُ لِلّٰهِ}} and {{أَسْتَغْفِرُ اللّٰهَ}}. Success is Allah's gift — not my achievement alone." },
{ "type": "text", "title": { "bn": "সূরা আল-ফীল (১০৫)", "en": "Surah Al-Fil (105)" }, "bn": "নবী ﷺ-এর জন্মের বছর ইয়েমেনের শাসক আবরাহা বিশাল সৈন্যবাহিনী আর হাতি নিয়ে কাবা ভাঙতে এসেছিল। মক্কাবাসীর তাকে থামানোর শক্তি ছিল না — কিন্তু আল্লাহ নিজেই তাঁর ঘর রক্ষা করলেন। এই বছরকে বলে ‘আমুল ফীল’ — হাতির বছর।", "en": "In the year the Prophet ﷺ was born, Abrahah, ruler of Yemen, marched with a huge army and an elephant to destroy the Ka'bah. The people of Makkah had no power to stop him — but Allah Himself protected His House. That year is called ‘'Aam al-Feel’ — the Year of the Elephant." },
{ "type": "ayah", "ref": "105:1", "ar": "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ", "words": [
{ "ar": "أَلَمْ تَرَ", "bn": "আপনি কি দেখেননি", "en": "Have you not seen" },
{ "ar": "كَيْفَ", "bn": "কেমন", "en": "how" },
{ "ar": "فَعَلَ", "bn": "করেছিলেন", "en": "dealt" },
{ "ar": "رَبُّكَ", "bn": "আপনার রব", "en": "your Lord" },
{ "ar": "بِأَصْحَابِ", "bn": "অধিপতিদের সাথে", "en": "with the companions" },
{ "ar": "الْفِيلِ", "bn": "হাতির", "en": "of the elephant" }
], "tr": { "bn": "আলাম তারা কাইফা ফা'আলা রাব্বুকা বিআসহা-বিল ফীল", "en": "Alam tara kayfa fa'ala rabbuka bi'aṣḥaabil-feel" }, "mean": { "bn": "আপনি কি দেখেননি, আপনার রব হাতিওয়ালাদের সাথে কী করেছিলেন?", "en": "Have you not seen how your Lord dealt with the people of the elephant?" } },
{ "type": "ayah", "ref": "105:2", "ar": "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ", "words": [
{ "ar": "أَلَمْ يَجْعَلْ", "bn": "তিনি কি করে দেননি", "en": "Did He not make" },
{ "ar": "كَيْدَهُمْ", "bn": "তাদের চক্রান্ত", "en": "their plot" },
{ "ar": "فِي تَضْلِيلٍ", "bn": "ব্যর্থ", "en": "go astray (fail)" }
], "tr": { "bn": "আলাম ইয়াজ'আল কাইদাহুম ফী তাদলীল", "en": "Alam yaj'al kaydahum fee taḍleel" }, "mean": { "bn": "তিনি কি তাদের চক্রান্ত ব্যর্থ করে দেননি?", "en": "Did He not make their plot fail completely?" } },
{ "type": "ayah", "ref": "105:3", "ar": "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ", "words": [
{ "ar": "وَأَرْسَلَ", "bn": "এবং তিনি পাঠালেন", "en": "And He sent" },
{ "ar": "عَلَيْهِمْ", "bn": "তাদের উপর", "en": "against them" },
{ "ar": "طَيْرًا", "bn": "পাখি", "en": "birds" },
{ "ar": "أَبَابِيلَ", "bn": "ঝাঁকে ঝাঁকে", "en": "in flocks" }
], "tr": { "bn": "ওয়া আরসালা 'আলাইহিম তাইরান আবা-বীল", "en": "Wa arsala 'alayhim ṭayran abaabeel" }, "mean": { "bn": "আর তিনি তাদের উপর ঝাঁকে ঝাঁকে পাখি পাঠালেন,", "en": "And He sent against them birds in flocks," } },
{ "type": "ayah", "ref": "105:4", "ar": "تَرْمِيهِمْ بِحِجَارَةٍ مِّنْ سِجِّيلٍ", "words": [
{ "ar": "تَرْمِيهِمْ", "bn": "যারা তাদের উপর ছুড়ছিল", "en": "striking them" },
{ "ar": "بِحِجَارَةٍ", "bn": "পাথর", "en": "with stones" },
{ "ar": "مِّنْ سِجِّيلٍ", "bn": "পোড়া মাটির", "en": "of baked clay" }
], "tr": { "bn": "তারমীহিম বিহিজা-রাতিম মিন সিজ্জীল", "en": "Tarmeehim biḥijaaratim min sijjeel" }, "mean": { "bn": "যারা তাদের উপর পোড়া মাটির পাথর ছুড়ছিল,", "en": "pelting them with stones of baked clay," } },
{ "type": "ayah", "ref": "105:5", "ar": "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ", "words": [
{ "ar": "فَجَعَلَهُمْ", "bn": "ফলে তিনি তাদের করে দিলেন", "en": "So He made them" },
{ "ar": "كَعَصْفٍ", "bn": "ভুসির মতো", "en": "like straw" },
{ "ar": "مَّأْكُولٍ", "bn": "চিবানো / খাওয়া", "en": "eaten up" }
], "tr": { "bn": "ফাজা'আলাহুম কা'আসফিম মা'কূল", "en": "Faja'alahum ka'aṣfim ma'kool" }, "mean": { "bn": "ফলে তিনি তাদের চিবানো ভুসির মতো করে দিলেন।", "en": "So He made them like chewed-up straw." } },
{ "type": "text", "title": { "bn": "সূরা কুরাইশ (১০৬)", "en": "Surah Quraysh (106)" }, "bn": "সূরা ফীলের ঠিক পরের সূরা। কাবা রক্ষা পাওয়ায় কুরাইশ গোত্র নিরাপদে শীতে ইয়েমেনে আর গ্রীষ্মে শামে (সিরিয়া অঞ্চলে) বাণিজ্য-সফর করত। আল্লাহ মনে করিয়ে দিচ্ছেন — এই নিরাপত্তা আর রিযিক কার দান?", "en": "The surah right after Al-Fil. Because the Ka'bah was protected, the Quraysh tribe travelled safely for trade — to Yemen in winter and to Sham (Syria region) in summer. Allah reminds them: whose gift is this safety and provision?" },
{ "type": "ayah", "ref": "106:1", "ar": "لِإِيلَافِ قُرَيْشٍ", "words": [
{ "ar": "لِإِيلَافِ", "bn": "অভ্যস্ততার কারণে / নিরাপত্তার জন্য", "en": "For the security / familiarity" },
{ "ar": "قُرَيْشٍ", "bn": "কুরাইশের", "en": "of Quraysh" }
], "tr": { "bn": "লিঈলা-ফি কুরাইশ", "en": "Li'eelaafi Quraysh" }, "mean": { "bn": "কুরাইশের নিরাপদ অভ্যস্ত জীবনের জন্য —", "en": "For the secure, familiar life of Quraysh —" } },
{ "type": "ayah", "ref": "106:2", "ar": "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ", "words": [
{ "ar": "إِيلَافِهِمْ", "bn": "তাদের অভ্যস্ততা", "en": "their familiarity with" },
{ "ar": "رِحْلَةَ", "bn": "সফরে", "en": "the journey" },
{ "ar": "الشِّتَاءِ", "bn": "শীতের", "en": "of winter" },
{ "ar": "وَالصَّيْفِ", "bn": "ও গ্রীষ্মের", "en": "and summer" }
], "tr": { "bn": "ঈলা-ফিহিম রিহলাতাশ শিতা-য়ি ওয়াস সাইফ", "en": "Eelaafihim riḥlatash-shitaa'i waṣ-ṣayf" }, "mean": { "bn": "শীত ও গ্রীষ্মের সফরে তাদের নিরাপদ অভ্যস্ততার জন্য,", "en": "their safe journeys of winter and summer," } },
{ "type": "ayah", "ref": "106:3", "ar": "فَلْيَعْبُدُوا رَبَّ هٰذَا الْبَيْتِ", "words": [
{ "ar": "فَلْيَعْبُدُوا", "bn": "তাই তারা যেন ইবাদত করে", "en": "so let them worship" },
{ "ar": "رَبَّ", "bn": "রবের", "en": "the Lord" },
{ "ar": "هٰذَا الْبَيْتِ", "bn": "এই ঘরের (কাবার)", "en": "of this House (the Ka'bah)" }
], "tr": { "bn": "ফালইয়া'বুদূ রাব্বা হা-যাল বাইত", "en": "Falya'budoo rabba haadhal-bayt" }, "mean": { "bn": "তাই তারা যেন এই ঘরের রবের ইবাদত করে,", "en": "so let them worship the Lord of this House," } },
{ "type": "ayah", "ref": "106:4", "ar": "الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَّآمَنَهُمْ مِنْ خَوْفٍ", "words": [
{ "ar": "الَّذِي", "bn": "যিনি", "en": "who" },
{ "ar": "أَطْعَمَهُمْ", "bn": "তাদের খাবার দিয়েছেন", "en": "fed them" },
{ "ar": "مِنْ جُوعٍ", "bn": "ক্ষুধায়", "en": "against hunger" },
{ "ar": "وَّآمَنَهُمْ", "bn": "এবং তাদের নিরাপত্তা দিয়েছেন", "en": "and made them safe" },
{ "ar": "مِنْ خَوْفٍ", "bn": "ভয় থেকে", "en": "from fear" }
], "tr": { "bn": "আল্লাযী আত'আমাহুম মিন জূ'ইওঁ ওয়া আ-মানাহুম মিন খাওফ", "en": "Alladhee aṭ'amahum min joo'iw-wa aamanahum min khawf" }, "mean": { "bn": "যিনি তাদের ক্ষুধায় খাবার দিয়েছেন এবং ভয় থেকে নিরাপত্তা দিয়েছেন।", "en": "who fed them against hunger and made them safe from fear." } },
{ "type": "tip", "kind": "memory", "title": { "bn": "ভাবনার খোরাক", "en": "Reflect" }, "bn": "পেট ভরা খাবার আর নিরাপদ ঘর — এ দুটোকে আমরা সাধারণ মনে করি। সূরা কুরাইশ বলে: এগুলো আল্লাহর বিশেষ দান, আর এর শুকরিয়া হলো তাঁর ইবাদত করা। আজ খাওয়ার সময় একবার ভেবো — এই খাবার কে দিলেন?", "en": "A full stomach and a safe home — we take them for granted. Surah Quraysh says: these are special gifts from Allah, and the way to thank Him is to worship Him. At your next meal, think for a moment — who gave me this food?" },
{ "type": "quiz", "items": [
{ "q": { "bn": "{{أَفْوَاجًا}} অর্থ কী?", "en": "What does {{أَفْوَاجًا}} mean?" }, "options": [ { "bn": "দলে দলে", "en": "in crowds" }, { "bn": "একা একা", "en": "one by one" }, { "bn": "দ্রুত", "en": "quickly" } ], "answer": 0 },
{ "q": { "bn": "সূরা নাসর অনুযায়ী বিজয়ের পর কী করতে হবে?", "en": "According to An-Nasr, what should be done after victory?" }, "options": [ { "bn": "উৎসব করা", "en": "celebrate loudly" }, { "bn": "রবের প্রশংসা ও ক্ষমা প্রার্থনা", "en": "praise the Lord and seek forgiveness" }, { "bn": "বিশ্রাম নেওয়া", "en": "rest" } ], "answer": 1 },
{ "q": { "bn": "{{تَوَّابًا}} মানে কী?", "en": "What does {{تَوَّابًا}} mean?" }, "options": [ { "bn": "বারবার তাওবা কবুলকারী", "en": "ever accepting of repentance" }, { "bn": "সবচেয়ে বড়", "en": "the greatest" }, { "bn": "সাহায্যকারী", "en": "the helper" } ], "answer": 0 },
{ "q": { "bn": "{{طَيْرًا أَبَابِيلَ}} কী?", "en": "What are {{طَيْرًا أَبَابِيلَ}}?" }, "options": [ { "bn": "ঝাঁকে ঝাঁকে পাখি", "en": "birds in flocks" }, { "bn": "হাতির দল", "en": "a herd of elephants" }, { "bn": "সৈন্যবাহিনী", "en": "an army" } ], "answer": 0 },
{ "q": { "bn": "{{سِجِّيلٍ}} অর্থ কী?", "en": "What does {{سِجِّيلٍ}} mean?" }, "options": [ { "bn": "লোহা", "en": "iron" }, { "bn": "পোড়া মাটি", "en": "baked clay" }, { "bn": "বালি", "en": "sand" } ], "answer": 1 },
{ "q": { "bn": "কুরাইশরা কোন দুই ঋতুতে বাণিজ্য-সফর করত?", "en": "In which two seasons did Quraysh travel for trade?" }, "options": [ { "bn": "শীত ও গ্রীষ্ম", "en": "winter and summer" }, { "bn": "বর্ষা ও বসন্ত", "en": "monsoon and spring" }, { "bn": "শরৎ ও হেমন্ত", "en": "autumn and late autumn" } ], "answer": 0 },
{ "q": { "bn": "কোন আয়াতে বলা হয়েছে ‘তাদের ক্ষুধায় খাবার দিয়েছেন’?", "en": "Which ayah says ‘He fed them against hunger’?" }, "options": [ "فَلْيَعْبُدُوا رَبَّ هٰذَا الْبَيْتِ", "الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَّآمَنَهُمْ مِنْ خَوْفٍ", "لِإِيلَافِ قُرَيْشٍ" ], "answer": 1 }
] }
]
},
{
"id": "quran-ayatul-kursi",
"icon": "كرسي",
"title": { "bn": "আয়াতুল কুরসী", "en": "Ayat al-Kursi" },
"subtitle": { "bn": "কুরআনের সবচেয়ে মর্যাদাপূর্ণ আয়াত — শব্দগুচ্ছে শব্দগুচ্ছে", "en": "The greatest ayah of the Quran — phrase by phrase" },
"minutes": 20,
"goals": [
{ "bn": "আয়াতুল কুরসীর প্রতিটি শব্দগুচ্ছের অর্থ জানব", "en": "Know the meaning of every phrase of Ayat al-Kursi" },
{ "bn": "এতে আল্লাহর কোন কোন গুণ এসেছে তা চিনব", "en": "Recognise the qualities of Allah it describes" },
{ "bn": "কখন পড়লে বিশেষ ফযিলত — সহীহ হাদীস থেকে জানব", "en": "Learn from authentic hadith when to recite it" }
],
"blocks": [
{ "type": "text", "bn": "নবী ﷺ সাহাবী উবাই ইবনে কা'ব (রা.)-কে জিজ্ঞেস করলেন, ‘কুরআনের কোন আয়াত সবচেয়ে মহান?’ তিনি বললেন, {{اللّٰهُ لَا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ}}। নবী ﷺ খুশি হয়ে তাঁর বুকে হাত রেখে বললেন, ‘তোমার জ্ঞান তোমার জন্য আনন্দময় হোক!’ (সহীহ মুসলিম) এটি সূরা বাকারার ২৫৫ নম্বর আয়াত।", "en": "The Prophet ﷺ asked the companion Ubayy ibn Ka'b, ‘Which ayah of the Quran is the greatest?’ He answered, {{اللّٰهُ لَا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ}}. The Prophet ﷺ, pleased, placed his hand on his chest and said, ‘May your knowledge bring you joy!’ (Sahih Muslim) It is ayah 255 of Surah Al-Baqarah." },
{ "type": "ayah", "ref": "2:255", "ar": "اللّٰهُ لَا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَّلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ", "words": [
{ "ar": "اللّٰهُ", "bn": "আল্লাহ", "en": "Allah" },
{ "ar": "لَا إِلٰهَ إِلَّا هُوَ", "bn": "তিনি ছাড়া কোনো ইলাহ নেই", "en": "there is no god but He" },
{ "ar": "الْحَيُّ", "bn": "চিরঞ্জীব", "en": "the Ever-Living" },
{ "ar": "الْقَيُّومُ", "bn": "সবকিছুর ধারক", "en": "the Sustainer of all" },
{ "ar": "لَا تَأْخُذُهُ", "bn": "তাঁকে স্পর্শ করে না", "en": "does not overtake Him" },
{ "ar": "سِنَةٌ وَّلَا نَوْمٌ", "bn": "তন্দ্রা, না ঘুম", "en": "drowsiness nor sleep" },
{ "ar": "لَهُ", "bn": "তাঁরই", "en": "to Him belongs" },
{ "ar": "مَا فِي السَّمَاوَاتِ", "bn": "যা কিছু আকাশসমূহে", "en": "whatever is in the heavens" },
{ "ar": "وَمَا فِي الْأَرْضِ", "bn": "ও যা কিছু পৃথিবীতে", "en": "and whatever is on the earth" },
{ "ar": "مَنْ ذَا الَّذِي", "bn": "কে আছে এমন", "en": "who is it that" },
{ "ar": "يَشْفَعُ عِنْدَهُ", "bn": "তাঁর কাছে সুপারিশ করবে", "en": "can intercede with Him" },
{ "ar": "إِلَّا بِإِذْنِهِ", "bn": "তাঁর অনুমতি ছাড়া", "en": "except by His permission" },
{ "ar": "يَعْلَمُ", "bn": "তিনি জানেন", "en": "He knows" },
{ "ar": "مَا بَيْنَ أَيْدِيهِمْ", "bn": "যা তাদের সামনে আছে", "en": "what is before them" },
{ "ar": "وَمَا خَلْفَهُمْ", "bn": "ও যা তাদের পেছনে আছে", "en": "and what is behind them" },
{ "ar": "وَلَا يُحِيطُونَ", "bn": "আর তারা আয়ত্ত করতে পারে না", "en": "and they cannot grasp" },
{ "ar": "بِشَيْءٍ مِّنْ عِلْمِهِ", "bn": "তাঁর জ্ঞানের কিছুই", "en": "anything of His knowledge" },
{ "ar": "إِلَّا بِمَا شَاءَ", "bn": "তিনি যতটুকু চান তা ছাড়া", "en": "except what He wills" },
{ "ar": "وَسِعَ", "bn": "পরিব্যাপ্ত", "en": "extends over" },
{ "ar": "كُرْسِيُّهُ", "bn": "তাঁর কুরসী", "en": "His Kursi (Footstool)" },
{ "ar": "السَّمَاوَاتِ وَالْأَرْضَ", "bn": "আকাশসমূহ ও পৃথিবী", "en": "the heavens and the earth" },
{ "ar": "وَلَا يَئُودُهُ", "bn": "আর তাঁকে ক্লান্ত করে না", "en": "and it does not tire Him" },
{ "ar": "حِفْظُهُمَا", "bn": "এ দুটির রক্ষণাবেক্ষণ", "en": "guarding them both" },
{ "ar": "وَهُوَ الْعَلِيُّ", "bn": "আর তিনিই সর্বোচ্চ", "en": "and He is the Most High" },
{ "ar": "الْعَظِيمُ", "bn": "মহান", "en": "the Magnificent" }
], "tr": { "bn": "আল্লা-হু লা ইলা-হা ইল্লা হুওয়াল হাইয়্যুল কাইয়্যূম, লা তা'খুযুহূ সিনাতুঁও ওয়ালা নাওম, লাহূ মা ফিস সামা-ওয়া-তি ওয়ামা ফিল আরদ, মান যাল্লাযী ইয়াশফা'উ 'ইনদাহূ ইল্লা বিইযনিহ, ইয়া'লামু মা বাইনা আইদীহিম ওয়ামা খালফাহুম, ওয়ালা ইউহীতূনা বিশাইয়িম মিন 'ইলমিহী ইল্লা বিমা শা-আ, ওয়াসি'আ কুরসিয়্যুহুস সামা-ওয়া-তি ওয়াল আরদ, ওয়ালা ইয়াঊদুহূ হিফযুহুমা, ওয়া হুওয়াল 'আলিয়্যুল 'আযীম", "en": "Allaahu laa ilaaha illaa huwal-ḥayyul-qayyoom, laa ta'khudhuhoo sinatuw-wa laa nawm, lahoo maa fis-samaawaati wa maa fil-arḍ, man dhal-ladhee yashfa'u 'indahoo illaa bi'idhnih, ya'lamu maa bayna aydeehim wa maa khalfahum, wa laa yuḥeeṭoona bishay'im min 'ilmihee illaa bimaa shaa', wasi'a kursiyyuhus-samaawaati wal-arḍ, wa laa ya'ooduhoo ḥifẓuhumaa, wa huwal-'aliyyul-'aẓeem" }, "mean": { "bn": "আল্লাহ — তিনি ছাড়া কোনো ইলাহ নেই; তিনি চিরঞ্জীব, সবকিছুর ধারক। তন্দ্রা বা ঘুম তাঁকে স্পর্শ করে না। আকাশসমূহ ও পৃথিবীতে যা কিছু আছে সব তাঁরই। কে আছে যে তাঁর অনুমতি ছাড়া তাঁর কাছে সুপারিশ করবে? মানুষের সামনে-পেছনে যা আছে সবই তিনি জানেন; আর তিনি যতটুকু চান, তার বাইরে তাঁর জ্ঞানের কিছুই তারা আয়ত্ত করতে পারে না। তাঁর কুরসী আকাশসমূহ ও পৃথিবী জুড়ে বিস্তৃত, আর এ দুটির রক্ষণাবেক্ষণ তাঁকে একটুও ক্লান্ত করে না। তিনিই সর্বোচ্চ, মহান।", "en": "Allah — there is no god but He, the Ever-Living, the Sustainer of all. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who could intercede with Him except by His permission? He knows what is before them and what is behind them, and they grasp nothing of His knowledge except what He wills. His Kursi extends over the heavens and the earth, and guarding them both does not tire Him at all. He is the Most High, the Magnificent." } },
{ "type": "table", "title": { "bn": "১০টি বাক্যে আয়াতুল কুরসী", "en": "Ayat al-Kursi in 10 sentences" }, "head": [ "#", { "bn": "আরবি", "en": "Arabic" }, { "bn": "মূল বার্তা", "en": "Core message" } ], "rows": [
[ "1", "اللّٰهُ لَا إِلٰهَ إِلَّا هُوَ", { "bn": "উপাস্য শুধু তিনিই", "en": "He alone is worthy of worship" } ],
[ "2", "الْحَيُّ الْقَيُّومُ", { "bn": "চিরঞ্জীব, সবকিছু তাঁর উপর টিকে আছে", "en": "Ever-Living; everything stands by Him" } ],
[ "3", "لَا تَأْخُذُهُ سِنَةٌ وَّلَا نَوْمٌ", { "bn": "তাঁর কোনো দুর্বলতা নেই", "en": "He has no weakness" } ],
[ "4", "لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ", { "bn": "সবকিছুর মালিক তিনি", "en": "He owns everything" } ],
[ "5", "مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ", { "bn": "তাঁর অনুমতি ছাড়া কেউ সুপারিশ করতে পারে না", "en": "No one intercedes without His permission" } ],
[ "6", "يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ", { "bn": "অতীত-ভবিষ্যৎ সব তিনি জানেন", "en": "He knows past and future" } ],
[ "7", "وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ", { "bn": "আমাদের জ্ঞান তাঁরই দান", "en": "Our knowledge is only what He grants" } ],
[ "8", "وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ", { "bn": "তাঁর কুরসী সবকিছুর চেয়ে বিশাল", "en": "His Kursi is vaster than all creation" } ],
[ "9", "وَلَا يَئُودُهُ حِفْظُهُمَا", { "bn": "মহাবিশ্ব চালাতে তাঁর ক্লান্তি নেই", "en": "Running the universe never tires Him" } ],
[ "10", "وَهُوَ الْعَلِيُّ الْعَظِيمُ", { "bn": "তিনি সর্বোচ্চ, মহান", "en": "He is the Most High, the Magnificent" } ]
] },
{ "type": "tip", "kind": "memory", "bn": "আয়াতটি শুরু হয় {{اللّٰهُ}} দিয়ে আর শেষ হয় {{الْعَظِيمُ}} দিয়ে। শুরু ও শেষ দুটোই আল্লাহর পরিচয় — মাঝখানে তাঁর জীবন, ক্ষমতা, মালিকানা আর জ্ঞানের বর্ণনা। এভাবে ভাগ করে মুখস্থ করলে সহজ হয়।", "en": "The ayah begins with {{اللّٰهُ}} and ends with {{الْعَظِيمُ}}. Both ends name Allah — in between come His life, power, ownership and knowledge. Memorising it in these chunks makes it easy." },
{ "type": "steps", "title": { "bn": "কখন পড়ব?", "en": "When to recite it" }, "items": [
{ "title": { "bn": "ঘুমানোর আগে", "en": "Before sleeping" }, "desc": { "bn": "নবী ﷺ জানিয়েছেন, রাতে বিছানায় গিয়ে আয়াতুল কুরসী পড়লে সকাল পর্যন্ত আল্লাহর পক্ষ থেকে একজন রক্ষক থাকে, আর শয়তান কাছে আসতে পারে না। (সহীহ বুখারী)", "en": "The Prophet ﷺ confirmed that whoever recites Ayat al-Kursi on going to bed has a guardian from Allah until morning, and Satan cannot come near. (Sahih al-Bukhari)" } },
{ "title": { "bn": "প্রতি ফরজ নামাজের পর", "en": "After every fard prayer" }, "desc": { "bn": "হাদীসে আছে, যে প্রতি ফরজ নামাজের পর আয়াতুল কুরসী পড়ে, মৃত্যু ছাড়া তার জান্নাতে যাওয়ার পথে আর কোনো বাধা থাকে না। (নাসাঈ; মুহাদ্দিসগণ সহীহ বলেছেন)", "en": "A hadith says whoever recites Ayat al-Kursi after every fard prayer, nothing stands between him and Paradise except death. (An-Nasa'i; graded authentic by hadith scholars)" } }
] },
{ "type": "tip", "kind": "fun", "title": { "bn": "ভাবনার খোরাক", "en": "Reflect" }, "bn": "আমরা ঘুমালে সব ছেড়ে দিই — কিন্তু আল্লাহ কখনো ঘুমান না, কখনো ক্লান্ত হন না। তাই রাতে ভয় লাগলে বা দুশ্চিন্তা হলে মনে রাখো: যিনি পুরো আকাশ-পৃথিবী রক্ষা করছেন, তিনি তোমাকেও দেখছেন। নিশ্চিন্তে ঘুমাও!", "en": "When we sleep we let go of everything — but Allah never sleeps and never tires. So when you feel afraid or worried at night, remember: the One guarding all the heavens and the earth is watching over you too. Sleep in peace!" },
{ "type": "vocab", "items": [
{ "ar": "الْحَيُّ", "tr": { "bn": "আল-হাইয়্যু", "en": "al-ḥayy" }, "mean": { "bn": "চিরঞ্জীব", "en": "the Ever-Living" }, "root": "ح ي ي" },
{ "ar": "الْقَيُّومُ", "tr": { "bn": "আল-কাইয়্যূম", "en": "al-qayyoom" }, "mean": { "bn": "সবকিছুর ধারক", "en": "the Self-Sustaining Sustainer" }, "root": "ق و م" },
{ "ar": "نَوْمٌ", "tr": { "bn": "নাওম", "en": "nawm" }, "mean": { "bn": "ঘুম", "en": "sleep" }, "root": "ن و م" },
{ "ar": "السَّمَاوَاتُ", "tr": { "bn": "আস-সামাওয়াত", "en": "as-samaawaat" }, "mean": { "bn": "আকাশসমূহ", "en": "the heavens" }, "root": "س م و" },
{ "ar": "الْأَرْضُ", "tr": { "bn": "আল-আরদ", "en": "al-arḍ" }, "mean": { "bn": "পৃথিবী, জমিন", "en": "the earth" }, "root": "ا ر ض" },
{ "ar": "عِلْمٌ", "tr": { "bn": "'ইলম", "en": "'ilm" }, "mean": { "bn": "জ্ঞান", "en": "knowledge" }, "root": "ع ل م" },
{ "ar": "الْعَلِيُّ", "tr": { "bn": "আল-'আলিয়্যু", "en": "al-'aliyy" }, "mean": { "bn": "সর্বোচ্চ", "en": "the Most High" }, "root": "ع ل و" }
] },
{ "type": "quiz", "items": [
{ "q": { "bn": "{{الْقَيُّومُ}} অর্থ কী?", "en": "What does {{الْقَيُّومُ}} mean?" }, "options": [ { "bn": "সবকিছুর ধারক", "en": "the Sustainer of all" }, { "bn": "সর্বশ্রোতা", "en": "the All-Hearing" }, { "bn": "ক্ষমাশীল", "en": "the Forgiving" } ], "answer": 0 },
{ "q": { "bn": "{{سِنَةٌ}} মানে কী?", "en": "What does {{سِنَةٌ}} mean?" }, "options": [ { "bn": "বছর", "en": "year" }, { "bn": "তন্দ্রা", "en": "drowsiness" }, { "bn": "সুপারিশ", "en": "intercession" } ], "answer": 1 },
{ "q": { "bn": "কোন অংশ বলে ‘তাঁর অনুমতি ছাড়া কে সুপারিশ করবে?’", "en": "Which part says ‘who could intercede without His permission?’" }, "options": [ "وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ", "مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ", "وَهُوَ الْعَلِيُّ الْعَظِيمُ" ], "answer": 1 },
{ "q": { "bn": "{{وَلَا يَئُودُهُ حِفْظُهُمَا}} — এর অর্থ কী?", "en": "What does {{وَلَا يَئُودُهُ حِفْظُهُمَا}} mean?" }, "options": [ { "bn": "এ দুটির রক্ষণাবেক্ষণ তাঁকে ক্লান্ত করে না", "en": "guarding them both does not tire Him" }, { "bn": "তিনি সবকিছু জানেন", "en": "He knows everything" }, { "bn": "তাঁকে ঘুম স্পর্শ করে না", "en": "sleep does not overtake Him" } ], "answer": 0 },
{ "q": { "bn": "আয়াতুল কুরসী কোন সূরায়?", "en": "Ayat al-Kursi is in which surah?" }, "options": [ { "bn": "আল-বাকারা", "en": "Al-Baqarah" }, { "bn": "আল-ফাতিহা", "en": "Al-Fatiha" }, { "bn": "আল-ইখলাস", "en": "Al-Ikhlas" } ], "answer": 0 },
{ "q": { "bn": "কোন সাহাবী বলেছিলেন আয়াতুল কুরসী সবচেয়ে মহান আয়াত?", "en": "Which companion answered that Ayat al-Kursi is the greatest ayah?" }, "options": [ { "bn": "উবাই ইবনে কা'ব (রা.)", "en": "Ubayy ibn Ka'b" }, { "bn": "উকবা ইবনে আমের (রা.)", "en": "'Uqbah ibn 'Amir" }, { "bn": "আনাস (রা.)", "en": "Anas" } ], "answer": 0 },
{ "q": { "bn": "{{الْحَيُّ}} অর্থ কী?", "en": "What does {{الْحَيُّ}} mean?" }, "options": [ { "bn": "চিরঞ্জীব", "en": "the Ever-Living" }, { "bn": "সর্বোচ্চ", "en": "the Most High" }, { "bn": "মহান", "en": "the Magnificent" } ], "answer": 0 }
] }
]
},
{
"id": "quran-daily-duas",
"icon": "دعاء",
"title": { "bn": "কুরআন ও সুন্নাহর প্রতিদিনের দোয়া", "en": "Daily Duas from Quran & Sunnah" },
"subtitle": { "bn": "ঘুম থেকে ওঠা থেকে ঘুমাতে যাওয়া — সারাদিন আল্লাহর সাথে", "en": "From waking to sleeping — with Allah all day long" },
"minutes": 25,
"goals": [
{ "bn": "দিনের বিভিন্ন কাজের ছোট ছোট সহীহ দোয়া অর্থসহ শিখব", "en": "Learn short authentic duas for daily moments, with meaning" },
{ "bn": "কুরআনের কয়েকটি সুন্দর দোয়া শব্দে শব্দে বুঝব", "en": "Understand several beautiful Quranic duas word by word" },
{ "bn": "কখন কোন দোয়া পড়তে হয় তা মনে রাখব", "en": "Remember which dua to say when" }
],
"blocks": [
{ "type": "text", "bn": "ইসলামে প্রতিটি সাধারণ কাজই ইবাদত হয়ে যেতে পারে — শুধু একটা ছোট্ট দোয়া দিয়ে। ঘুম, খাওয়া, ঘর থেকে বের হওয়া, সফর — সবকিছুর জন্য নবী ﷺ আমাদের সুন্দর কথা শিখিয়েছেন। চলো, সারাদিনের সঙ্গী এই দোয়াগুলো অর্থসহ শিখি।", "en": "In Islam every ordinary action can become worship — with just a little dua. Sleeping, eating, leaving home, travelling — for each the Prophet ﷺ taught us beautiful words. Let us learn these all-day companions with their meanings." },
{ "type": "examples", "title": { "bn": "ঘুম ও জাগরণ", "en": "Sleeping & waking" }, "items": [
{ "ar": "الْحَمْدُ لِلّٰهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", "tr": { "bn": "আলহামদু লিল্লা-হিল্লাযী আহইয়া-না বা'দা মা আমা-তানা ওয়া ইলাইহিন নুশূর", "en": "Al-ḥamdu lillaahil-ladhee aḥyaanaa ba'da maa amaatanaa wa ilayhin-nushoor" }, "mean": { "bn": "সব প্রশংসা আল্লাহর, যিনি আমাদের (ঘুমের মতো) মৃত্যুর পর আবার জীবিত করলেন, আর তাঁর কাছেই আমাদের ফিরে যেতে হবে।", "en": "All praise is for Allah who gave us life after He had caused us to die (in sleep), and to Him is the return." }, "note": { "bn": "ঘুম থেকে উঠে। (সহীহ বুখারী)", "en": "On waking up. (Sahih al-Bukhari)" } },
{ "ar": "بِاسْمِكَ اللّٰهُمَّ أَمُوتُ وَأَحْيَا", "tr": { "bn": "বিসমিকা আল্লা-হুম্মা আমূতু ওয়া আহইয়া", "en": "Bismika Allaahumma amootu wa aḥyaa" }, "mean": { "bn": "হে আল্লাহ! আপনার নামেই আমি মরি (ঘুমাই) ও জীবিত হই (জাগি)।", "en": "In Your name, O Allah, I die (sleep) and I live (wake)." }, "note": { "bn": "ঘুমানোর সময়। (সহীহ বুখারী)", "en": "When going to sleep. (Sahih al-Bukhari)" } }
] },
{ "type": "tip", "kind": "memory", "bn": "ঘুম যেন ছোট্ট মৃত্যু, আর জেগে ওঠা যেন নতুন জীবন। প্রতিদিন সকালটা আল্লাহর দেওয়া একটা নতুন সুযোগ — তাই দিনের প্রথম কথাই {{الْحَمْدُ لِلّٰهِ}}!", "en": "Sleep is like a small death, and waking is like new life. Every morning is a fresh chance from Allah — so the first words of the day are {{الْحَمْدُ لِلّٰهِ}}!" },
{ "type": "examples", "title": { "bn": "খাওয়া-দাওয়া", "en": "Eating" }, "items": [
{ "ar": "بِسْمِ اللّٰهِ", "tr": { "bn": "বিসমিল্লাহ", "en": "Bismillaah" }, "mean": { "bn": "আল্লাহর নামে", "en": "In the name of Allah" }, "note": { "bn": "খাওয়ার শুরুতে; ডান হাতে, নিজের সামনে থেকে খাই। (বুখারী, মুসলিম)", "en": "Before eating; eat with the right hand, from what is in front of you. (Bukhari, Muslim)" } },
{ "ar": "بِسْمِ اللّٰهِ أَوَّلَهُ وَآخِرَهُ", "tr": { "bn": "বিসমিল্লা-হি আওয়ালাহূ ওয়া আ-খিরাহ", "en": "Bismillaahi awwalahoo wa aakhirah" }, "mean": { "bn": "আল্লাহর নামে — এর শুরুতে ও শেষে।", "en": "In the name of Allah, at its beginning and its end." }, "note": { "bn": "শুরুতে বিসমিল্লাহ বলতে ভুলে গেলে, মনে পড়লেই। (আবু দাউদ, তিরমিযী)", "en": "If you forgot Bismillah at the start, say this when you remember. (Abu Dawud, at-Tirmidhi)" } },
{ "ar": "الْحَمْدُ لِلّٰهِ الَّذِي أَطْعَمَنِي هٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", "tr": { "bn": "আলহামদু লিল্লা-হিল্লাযী আত'আমানী হা-যা ওয়া রাযাকানীহি মিন গাইরি হাওলিম মিন্নী ওয়ালা কুওয়াহ", "en": "Al-ḥamdu lillaahil-ladhee aṭ'amanee haadhaa wa razaqaneehi min ghayri ḥawlim minnee wa laa quwwah" }, "mean": { "bn": "সব প্রশংসা আল্লাহর, যিনি আমাকে এটা খাওয়ালেন এবং আমার কোনো শক্তি-সামর্থ্য ছাড়াই এই রিযিক দিলেন।", "en": "All praise is for Allah who fed me this and provided it for me without any power or strength on my part." }, "note": { "bn": "খাওয়া শেষে। (আবু দাউদ, তিরমিযী)", "en": "After eating. (Abu Dawud, at-Tirmidhi)" } }
] },
{ "type": "examples", "title": { "bn": "ঘর ও মসজিদ", "en": "Home & masjid" }, "items": [
{ "ar": "بِسْمِ اللّٰهِ تَوَكَّلْتُ عَلَى اللّٰهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ", "tr": { "bn": "বিসমিল্লা-হি তাওয়াক্কালতু 'আলাল্লা-হি ওয়ালা হাওলা ওয়ালা কুওয়াতা ইল্লা বিল্লাহ", "en": "Bismillaahi tawakkaltu 'alallaahi wa laa ḥawla wa laa quwwata illaa billaah" }, "mean": { "bn": "আল্লাহর নামে (বের হলাম), আল্লাহর উপর ভরসা করলাম; আল্লাহর সাহায্য ছাড়া কোনো শক্তি ও ক্ষমতা নেই।", "en": "In the name of Allah, I rely on Allah; there is no power and no strength except through Allah." }, "note": { "bn": "ঘর থেকে বের হওয়ার সময়। (আবু দাউদ, তিরমিযী)", "en": "When leaving home. (Abu Dawud, at-Tirmidhi)" } },
{ "ar": "بِسْمِ اللّٰهِ، السَّلَامُ عَلَيْكُمْ", "tr": { "bn": "বিসমিল্লাহ, আসসালামু 'আলাইকুম", "en": "Bismillaah, as-salaamu 'alaykum" }, "mean": { "bn": "আল্লাহর নামে; তোমাদের উপর শান্তি বর্ষিত হোক।", "en": "In the name of Allah; peace be upon you." }, "note": { "bn": "ঘরে ঢোকার সময় আল্লাহর নাম নিই — হাদীসে আছে, তাহলে শয়তান সেখানে থাকার জায়গা পায় না (সহীহ মুসলিম); আর ঘরের লোকদের সালাম দিই (সূরা নূর ২৪:৬১)।", "en": "Mention Allah's name on entering — the hadith says Satan then finds no place to stay (Sahih Muslim); and greet the household with salam (Surah An-Nur 24:61)." } },
{ "ar": "اللّٰهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", "tr": { "bn": "আল্লা-হুম্মাফতাহ লী আবওয়া-বা রাহমাতিক", "en": "Allaahummaf-taḥ lee abwaaba raḥmatik" }, "mean": { "bn": "হে আল্লাহ! আমার জন্য আপনার রহমতের দরজাগুলো খুলে দিন।", "en": "O Allah, open for me the doors of Your mercy." }, "note": { "bn": "মসজিদে ঢোকার সময়, ডান পা আগে দিয়ে। (সহীহ মুসলিম)", "en": "On entering the masjid, right foot first. (Sahih Muslim)" } },
{ "ar": "اللّٰهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ", "tr": { "bn": "আল্লা-হুম্মা ইন্নী আসআলুকা মিন ফাদলিক", "en": "Allaahumma innee as'aluka min faḍlik" }, "mean": { "bn": "হে আল্লাহ! আমি আপনার অনুগ্রহ চাই।", "en": "O Allah, I ask You of Your bounty." }, "note": { "bn": "মসজিদ থেকে বের হওয়ার সময়, বাম পা আগে দিয়ে। (সহীহ মুসলিম)", "en": "On leaving the masjid, left foot first. (Sahih Muslim)" } }
] },
{ "type": "tip", "kind": "fun", "bn": "মসজিদে ঢুকতে চাই **রহমত** ({{رَحْمَتِكَ}}), আর বের হয়ে দুনিয়ার কাজে যেতে চাই **অনুগ্রহ/রিযিক** ({{فَضْلِكَ}})। ভেতরে আখিরাতের পুঁজি, বাইরে হালাল উপার্জন — দুটোই আল্লাহর কাছে চাই।", "en": "Entering the masjid we ask for **mercy** ({{رَحْمَتِكَ}}); leaving for worldly work we ask for **bounty/provision** ({{فَضْلِكَ}}). Inside, savings for the Hereafter; outside, halal earning — we ask Allah for both." },
{ "type": "examples", "title": { "bn": "টয়লেট", "en": "The toilet" }, "items": [
{ "ar": "اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ", "tr": { "bn": "আল্লা-হুম্মা ইন্নী আ'ঊযু বিকা মিনাল খুবুসি ওয়াল খাবা-ইস", "en": "Allaahumma innee a'oodhu bika minal-khubuthi wal-khabaa'ith" }, "mean": { "bn": "হে আল্লাহ! আমি আপনার কাছে সব অপবিত্র পুরুষ ও নারী শয়তান (এবং সব নোংরা) থেকে আশ্রয় চাই।", "en": "O Allah, I seek refuge in You from the male and female evil ones (and all impurity)." }, "note": { "bn": "টয়লেটে ঢোকার আগে, বাম পা আগে দিয়ে। (বুখারী, মুসলিম)", "en": "Before entering the toilet, left foot first. (Bukhari, Muslim)" } },
{ "ar": "غُفْرَانَكَ", "tr": { "bn": "গুফরা-নাক", "en": "Ghufraanak" }, "mean": { "bn": "(হে আল্লাহ!) আপনার ক্ষমা চাই।", "en": "(O Allah,) I ask Your forgiveness." }, "note": { "bn": "টয়লেট থেকে বের হয়ে, ডান পা আগে দিয়ে। (আবু দাউদ, তিরমিযী)", "en": "After leaving the toilet, right foot first. (Abu Dawud, at-Tirmidhi)" } }
] },
{ "type": "examples", "title": { "bn": "সফর", "en": "Travel" }, "items": [
{ "ar": "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ", "tr": { "bn": "সুবহা-নাল্লাযী সাখখারা লানা হা-যা ওয়ামা কুন্না লাহূ মুকরিনীন, ওয়া ইন্না ইলা রাব্বিনা লামুনকালিবূন", "en": "Subḥaanal-ladhee sakhkhara lanaa haadhaa wa maa kunnaa lahoo muqrineen, wa innaa ilaa rabbinaa lamunqaliboon" }, "mean": { "bn": "পবিত্র তিনি, যিনি এটাকে আমাদের বশ করে দিয়েছেন, অথচ আমরা নিজেরা একে বশ করতে পারতাম না; আর নিশ্চয়ই আমরা আমাদের রবের কাছেই ফিরে যাব।", "en": "Glory be to the One who has placed this at our service, though we could never have managed it ourselves; and surely to our Lord we shall return." }, "note": { "bn": "গাড়ি, বাস, নৌকা বা যেকোনো বাহনে উঠে। এটি কুরআনের আয়াত (৪৩:১৩–১৪), নবী ﷺ সফরে এটি পড়তেন। (সহীহ মুসলিম)", "en": "On boarding a car, bus, boat or any ride. These are Quranic ayahs (43:13–14) the Prophet ﷺ recited when travelling. (Sahih Muslim)" } }
] },
{ "type": "table", "title": { "bn": "সফরের দোয়া — শব্দে শব্দে", "en": "Travel dua — word by word" }, "head": [ { "bn": "আরবি", "en": "Arabic" }, { "bn": "অর্থ", "en": "Meaning" } ], "rows": [
[ "سُبْحَانَ الَّذِي", { "bn": "পবিত্র তিনি, যিনি", "en": "Glory be to the One who" } ],
[ "سَخَّرَ لَنَا", { "bn": "আমাদের বশীভূত করে দিয়েছেন", "en": "subjected for us" } ],
[ "هٰذَا", { "bn": "এটাকে", "en": "this" } ],
[ "وَمَا كُنَّا لَهُ مُقْرِنِينَ", { "bn": "আর আমরা একে বশ করতে সক্ষম ছিলাম না", "en": "and we could not have controlled it" } ],
[ "وَإِنَّا إِلَى رَبِّنَا", { "bn": "আর নিশ্চয়ই আমরা আমাদের রবের দিকে", "en": "and surely to our Lord" } ],
[ "لَمُنْقَلِبُونَ", { "bn": "অবশ্যই ফিরে যাব", "en": "we will return" } ]
] },
{ "type": "text", "title": { "bn": "কুরআনের দোয়া", "en": "Duas from the Quran" }, "bn": "এবার কুরআনের কয়েকটি দোয়া — নবী-রাসূল ও নেককারদের মুখের দোয়া, যা আল্লাহ নিজেই আমাদের শিখিয়েছেন।", "en": "Now some duas from the Quran — words of prophets and righteous people that Allah Himself has taught us." },
{ "type": "examples", "items": [
{ "ar": "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", "tr": { "bn": "রাব্বির হামহুমা কামা রাব্বাইয়া-নী সাগীরা", "en": "Rabbir-ḥamhumaa kamaa rabbayaanee ṣagheeraa" }, "mean": { "bn": "হে আমার রব! তাঁদের (আমার বাবা-মায়ের) প্রতি দয়া করুন, যেমন তাঁরা ছোটবেলায় আমাকে লালন-পালন করেছেন।", "en": "My Lord, have mercy on them (my parents) as they raised me when I was small." }, "note": { "bn": "বাবা-মায়ের জন্য — প্রতিদিন, বিশেষ করে নামাজের পর। (সূরা ইসরা ১৭:২৪)", "en": "For parents — every day, especially after salah. (Surah Al-Isra 17:24)" } },
{ "ar": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَّفِي الْآخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ", "tr": { "bn": "রাব্বানা আ-তিনা ফিদ দুনইয়া হাসানাতাঁও ওয়া ফিল আ-খিরাতি হাসানাতাঁও ওয়া কিনা 'আযা-বান না-র", "en": "Rabbanaa aatinaa fid-dunyaa ḥasanataw-wa fil-aakhirati ḥasanataw-wa qinaa 'adhaaban-naar" }, "mean": { "bn": "হে আমাদের রব! আমাদের দুনিয়াতে কল্যাণ দিন, আখিরাতেও কল্যাণ দিন, এবং আমাদের জাহান্নামের আগুন থেকে রক্ষা করুন।", "en": "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire." }, "note": { "bn": "নবী ﷺ সবচেয়ে বেশি এই দোয়াটি পড়তেন। (বুখারী, মুসলিম) যেকোনো সময়, নামাজে সালামের আগেও। (সূরা বাকারা ২:২০১)", "en": "The dua the Prophet ﷺ made most often. (Bukhari, Muslim) Any time, including before salam in salah. (Surah Al-Baqarah 2:201)" } },
{ "ar": "رَبِّ زِدْنِي عِلْمًا", "tr": { "bn": "রাব্বি যিদনী 'ইলমা", "en": "Rabbi zidnee 'ilmaa" }, "mean": { "bn": "হে আমার রব! আমার জ্ঞান বাড়িয়ে দিন।", "en": "My Lord, increase me in knowledge." }, "note": { "bn": "পড়তে বসার আগে, ক্লাসে, পরীক্ষার আগে। (সূরা ত্বহা ২০:১১৪)", "en": "Before studying, in class, before exams. (Surah Ta-Ha 20:114)" } }
] },
{ "type": "tip", "kind": "fun", "bn": "আলেমগণ লক্ষ করেছেন: কুরআনে আল্লাহ নবী ﷺ-কে একটিমাত্র জিনিস ‘বাড়িয়ে চাইতে’ বলেছেন — সম্পদ নয়, ক্ষমতা নয় — **জ্ঞান**: {{رَبِّ زِدْنِي عِلْمًا}}। তুমি যে এখন আরবি শিখছ, এটাও সেই দোয়ার পথে হাঁটা!", "en": "Scholars have noticed: in the Quran, the one thing Allah told the Prophet ﷺ to ask for ‘more’ of is not wealth or power — it is **knowledge**: {{رَبِّ زِدْنِي عِلْمًا}}. Learning Arabic right now is walking the path of that dua!" },
{ "type": "text", "title": { "bn": "মূসা (আ.)-এর দোয়া (২০:২৫–২৮)", "en": "The dua of Musa (20:25–28)" }, "bn": "ফেরাউনের মতো জালিম শাসকের কাছে যাওয়ার আগে মূসা (আ.) এই দোয়া করেছিলেন। কঠিন কোনো কাজ, বক্তৃতা বা পরীক্ষার আগে এটা পড়া যায়।", "en": "Musa (peace be upon him) made this dua before going to a tyrant like Pharaoh. It is perfect before any hard task, speech or exam." },
{ "type": "ayah", "ref": "20:25", "ar": "قَالَ رَبِّ اشْرَحْ لِي صَدْرِي", "words": [
{ "ar": "قَالَ", "bn": "তিনি বললেন", "en": "He said" },
{ "ar": "رَبِّ", "bn": "হে আমার রব", "en": "My Lord" },
{ "ar": "اشْرَحْ", "bn": "প্রশস্ত করে দিন", "en": "expand" },
{ "ar": "لِي", "bn": "আমার জন্য", "en": "for me" },
{ "ar": "صَدْرِي", "bn": "আমার বুক / অন্তর", "en": "my chest" }
], "tr": { "bn": "কা-লা রাব্বিশ রাহ লী সাদরী", "en": "Qaala rabbish-raḥ lee ṣadree" }, "mean": { "bn": "তিনি বললেন: হে আমার রব! আমার বুক (অন্তর) প্রশস্ত করে দিন,", "en": "He said: My Lord, expand my chest for me (give me confidence)," } },
{ "type": "ayah", "ref": "20:26", "ar": "وَيَسِّرْ لِي أَمْرِي", "words": [
{ "ar": "وَيَسِّرْ", "bn": "এবং সহজ করে দিন", "en": "and make easy" },
{ "ar": "لِي", "bn": "আমার জন্য", "en": "for me" },
{ "ar": "أَمْرِي", "bn": "আমার কাজ", "en": "my task" }
], "tr": { "bn": "ওয়া ইয়াসসির লী আমরী", "en": "Wa yassir lee amree" }, "mean": { "bn": "আর আমার কাজ আমার জন্য সহজ করে দিন,", "en": "and make my task easy for me," } },
{ "type": "ayah", "ref": "20:27", "ar": "وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي", "words": [
{ "ar": "وَاحْلُلْ", "bn": "এবং খুলে দিন", "en": "and untie" },
{ "ar": "عُقْدَةً", "bn": "জড়তা / গিঁট", "en": "the knot" },
{ "ar": "مِّن لِّسَانِي", "bn": "আমার জিহ্বা থেকে", "en": "from my tongue" }
], "tr": { "bn": "ওয়াহলুল 'উকদাতাম মিল লিসা-নী", "en": "Waḥlul 'uqdatam mil-lisaanee" }, "mean": { "bn": "আর আমার জিহ্বার জড়তা দূর করে দিন,", "en": "and untie the knot from my tongue," } },
{ "type": "ayah", "ref": "20:28", "ar": "يَفْقَهُوا قَوْلِي", "words": [
{ "ar": "يَفْقَهُوا", "bn": "যেন তারা বুঝতে পারে", "en": "so they may understand" },
{ "ar": "قَوْلِي", "bn": "আমার কথা", "en": "my speech" }
], "tr": { "bn": "ইয়াফকাহূ কাওলী", "en": "Yafqahoo qawlee" }, "mean": { "bn": "যাতে তারা আমার কথা বুঝতে পারে।", "en": "so that they may understand my speech." } },
{ "type": "tip", "kind": "memory", "title": { "bn": "ভাবনার খোরাক", "en": "Reflect" }, "bn": "মূসা (আ.) একজন মহান নবী হয়েও কঠিন কাজের আগে আল্লাহর কাছে সাহস ও সহজতা চেয়েছেন। ভয় পাওয়া দোষ নয় — ভয় পেলে আল্লাহর দিকে ফেরাই আসল শক্তি।", "en": "Even Musa, a great prophet, asked Allah for courage and ease before a hard task. Feeling nervous is not a fault — turning to Allah when nervous is true strength." },
{ "type": "table", "title": { "bn": "কখন কোন দোয়া — এক নজরে", "en": "Which dua when — at a glance" }, "head": [ { "bn": "সময়", "en": "When" }, { "bn": "দোয়া", "en": "Dua" } ], "rows": [
[ { "bn": "ঘুম থেকে উঠে", "en": "Waking up" }, "الْحَمْدُ لِلّٰهِ الَّذِي أَحْيَانَا …" ],
[ { "bn": "ঘুমাতে যাওয়ার সময়", "en": "Going to sleep" }, "بِاسْمِكَ اللّٰهُمَّ أَمُوتُ وَأَحْيَا" ],
[ { "bn": "খাওয়ার আগে / পরে", "en": "Before / after eating" }, "بِسْمِ اللّٰهِ / الْحَمْدُ لِلّٰهِ …" ],
[ { "bn": "ঘর থেকে বের হতে", "en": "Leaving home" }, "بِسْمِ اللّٰهِ تَوَكَّلْتُ عَلَى اللّٰهِ …" ],
[ { "bn": "মসজিদে ঢুকতে", "en": "Entering the masjid" }, "اللّٰهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ" ],
[ { "bn": "টয়লেট থেকে বের হয়ে", "en": "Leaving the toilet" }, "غُفْرَانَكَ" ],
[ { "bn": "বাহনে উঠে", "en": "Boarding a ride" }, "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هٰذَا …" ],
[ { "bn": "পড়ালেখার আগে", "en": "Before studying" }, "رَبِّ زِدْنِي عِلْمًا" ]
] },
{ "type": "quiz", "items": [
{ "q": { "bn": "মসজিদে ঢোকার সময় কোন দোয়া পড়ি?", "en": "Which dua do we say on entering the masjid?" }, "options": [ "اللّٰهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ", "اللّٰهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", "غُفْرَانَكَ" ], "answer": 1 },
{ "q": { "bn": "{{غُفْرَانَكَ}} কখন বলি?", "en": "When do we say {{غُفْرَانَكَ}}?" }, "options": [ { "bn": "টয়লেট থেকে বের হয়ে", "en": "after leaving the toilet" }, { "bn": "খাওয়ার আগে", "en": "before eating" }, { "bn": "ঘুমানোর আগে", "en": "before sleeping" } ], "answer": 0 },
{ "q": { "bn": "{{رَبِّ زِدْنِي عِلْمًا}} অর্থ কী?", "en": "What does {{رَبِّ زِدْنِي عِلْمًا}} mean?" }, "options": [ { "bn": "হে রব, আমার জ্ঞান বাড়িয়ে দিন", "en": "My Lord, increase me in knowledge" }, { "bn": "হে রব, আমাকে ক্ষমা করুন", "en": "My Lord, forgive me" }, { "bn": "হে রব, আমার কাজ সহজ করুন", "en": "My Lord, make my task easy" } ], "answer": 0 },
{ "q": { "bn": "{{كَمَا رَبَّيَانِي صَغِيرًا}} — কাদের জন্য দোয়া?", "en": "{{كَمَا رَبَّيَانِي صَغِيرًا}} — this dua is for whom?" }, "options": [ { "bn": "শিক্ষকদের", "en": "teachers" }, { "bn": "বাবা-মায়ের", "en": "parents" }, { "bn": "বন্ধুদের", "en": "friends" } ], "answer": 1 },
{ "q": { "bn": "কোন দোয়াটি নবী ﷺ সবচেয়ে বেশি পড়তেন?", "en": "Which dua did the Prophet ﷺ make most often?" }, "options": [ "رَبِّ اشْرَحْ لِي صَدْرِي", "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَّفِي الْآخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ", "بِاسْمِكَ اللّٰهُمَّ أَمُوتُ وَأَحْيَا" ], "answer": 1 },
{ "q": { "bn": "বাসে বা গাড়িতে উঠে কী বলি?", "en": "What do we say on boarding a bus or car?" }, "options": [ "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هٰذَا", "اللّٰهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", "الْحَمْدُ لِلّٰهِ الَّذِي أَحْيَانَا" ], "answer": 0 },
{ "q": { "bn": "{{وَيَسِّرْ لِي أَمْرِي}} অর্থ কী?", "en": "What does {{وَيَسِّرْ لِي أَمْرِي}} mean?" }, "options": [ { "bn": "আমার কাজ সহজ করে দিন", "en": "make my task easy for me" }, { "bn": "আমার বুক প্রশস্ত করুন", "en": "expand my chest" }, { "bn": "আমার কথা বুঝুক", "en": "may they understand my speech" } ], "answer": 0 },
{ "q": { "bn": "ঘুমানোর সময়ের দোয়ায় {{أَمُوتُ وَأَحْيَا}} মানে কী?", "en": "In the bedtime dua, what does {{أَمُوتُ وَأَحْيَا}} mean?" }, "options": [ { "bn": "আমি মরি ও জীবিত হই", "en": "I die and I live" }, { "bn": "আমি খাই ও পান করি", "en": "I eat and drink" }, { "bn": "আমি আসি ও যাই", "en": "I come and go" } ], "answer": 0 }
] }
]
}
]
});
