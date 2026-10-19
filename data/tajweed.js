window.AQ = window.AQ || { units: [], alphabet: [], vocab: [] };
AQ.units.push({
  "id": "tajweed",
  "order": 3,
  "icon": "تَ",
  "color": "emerald",
  "title": { "bn": "সুন্দর তিলাওয়াত — তাজবীদ", "en": "Beautiful Recitation — Tajweed" },
  "subtitle": { "bn": "প্রতিটি হরফকে তার হক দিয়ে কুরআন পড়া শিখি", "en": "Learn to give every letter its right when reciting the Quran" },
  "lessons": [
    {
      "id": "tj-intro",
      "icon": "۞",
      "title": { "bn": "তাজবীদ কী ও কেন?", "en": "What Is Tajweed & Why?" },
      "subtitle": { "bn": "ভুলের প্রকার, তিলাওয়াতের আদব, আ‘ঊযু ও বিসমিল্লাহ", "en": "Types of mistakes, manners of recitation, ta'awwudh and basmalah" },
      "minutes": 10,
      "goals": [
        { "bn": "তাজবীদ শব্দের অর্থ ও এর গুরুত্ব বুঝব", "en": "Understand what tajweed means and why it matters" },
        { "bn": "লাহনে জলী (স্পষ্ট ভুল) ও লাহনে খফী (সূক্ষ্ম ভুল) চিনব", "en": "Recognise clear mistakes (lahn jali) and hidden mistakes (lahn khafi)" },
        { "bn": "তিলাওয়াতের আদব জানব", "en": "Learn the manners (adab) of recitation" },
        { "bn": "আ‘ঊযু ও বিসমিল্লাহ কখন কীভাবে পড়তে হয় শিখব", "en": "Learn when and how to say the ta'awwudh and basmalah" }
      ],
      "blocks": [
        { "type": "text", "bn": "আসসালামু আলাইকুম! তুমি এখন আরবি হরফ ও হরকত পড়তে পারো। এবার সময় এসেছে কুরআনকে **সুন্দর ও সঠিকভাবে** পড়ার — ঠিক যেভাবে রাসূলুল্লাহ ﷺ পড়েছেন।", "en": "Assalamu alaikum! You can now read Arabic letters and vowels. Now it is time to recite the Quran **correctly and beautifully** — the way the Prophet ﷺ recited it." },
        { "type": "text", "title": { "bn": "তাজবীদ মানে কী?", "en": "What does tajweed mean?" }, "bn": "{{تَجْوِيد}} শব্দের অর্থ ‘সুন্দর করা, উত্তম করা’। তাজবীদ হলো প্রতিটি হরফকে তার **সঠিক মাখরাজ** (উচ্চারণের জায়গা) ও **সঠিক সিফাত** (গুণ — মোটা/চিকন, গুন্নাহ, টান ইত্যাদি) দিয়ে উচ্চারণ করা।", "en": "{{تَجْوِيد}} means ‘to make better, to beautify’. Tajweed is pronouncing every letter from its **correct makhraj** (point of articulation) with its **correct qualities** (heavy/light, nasal sound, length and so on)." },
        { "type": "ayah", "ref": "73:4", "ar": "أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا", "words": [ { "ar": "أَوْ", "bn": "অথবা", "en": "or" }, { "ar": "زِدْ", "bn": "বাড়াও", "en": "add" }, { "ar": "عَلَيْهِ", "bn": "তার ওপর", "en": "to it" }, { "ar": "وَرَتِّلِ", "bn": "এবং ধীরে ধীরে স্পষ্ট করে পড়ো", "en": "and recite clearly" }, { "ar": "الْقُرْآنَ", "bn": "কুরআন", "en": "the Quran" }, { "ar": "تَرْتِيلًا", "bn": "সুবিন্যস্তভাবে", "en": "in measured recitation" } ], "tr": { "bn": "আও যিদ আলাইহি ওয়া রত্তিলিল কুরআ-না তারতীলা", "en": "aw zid 'alayhi wa rattilil-qur'aana tarteelaa" }, "mean": { "bn": "অথবা তার চেয়ে একটু বাড়াও — আর কুরআন পড়ো ধীরে ধীরে, সুস্পষ্টভাবে।", "en": "Or add a little to it, and recite the Quran in a slow, measured way." } },
        { "type": "tip", "kind": "fun", "bn": "কুরআনের তিলাওয়াত বই থেকে নয়, **মুখ থেকে কানে** — উস্তাদ থেকে ছাত্রে — পৌঁছেছে। জিবরীল (আ.) রাসূল ﷺ-কে শিখিয়েছেন, তিনি সাহাবিদের, তারপর প্রজন্মের পর প্রজন্ম। এই ধারাকে বলে ‘সনদ’। তাই ভালো কারীর তিলাওয়াত শোনা তাজবীদ শেখার সেরা উপায়!", "en": "Quran recitation came to us **mouth to ear** — teacher to student — not just through books. Jibreel taught the Prophet ﷺ, he taught the Companions, and so on, generation after generation. This chain is called a ‘sanad’. That is why listening to a good reciter is the best way to learn tajweed!" },
        { "type": "text", "title": { "bn": "দুই ধরনের ভুল", "en": "Two kinds of mistakes" }, "bn": "তিলাওয়াতের ভুলকে আরবিতে বলে {{لَحْن}} (লাহন)। ভুল দুই প্রকার:\n**১. লাহনে জলী (স্পষ্ট ভুল):** এক হরফের জায়গায় আরেক হরফ পড়া, হরকত বদলে ফেলা, হরফ বাদ দেওয়া বা বাড়ানো। এতে অনেক সময় **অর্থই বদলে যায়** — এটা হারাম, অবশ্যই এড়াতে হবে।\n**২. লাহনে খফী (সূক্ষ্ম ভুল):** গুন্নাহ না করা, মাদ্দ কম-বেশি টানা, মোটা হরফ চিকন করা ইত্যাদি। অর্থ বদলায় না, কিন্তু সৌন্দর্য নষ্ট হয় — এটাও এড়ানো উচিত।", "en": "A mistake in recitation is called {{لَحْن}} (lahn). There are two kinds:\n**1. Lahn jali (clear mistake):** reading one letter in place of another, changing a vowel, dropping or adding a letter. It often **changes the meaning** — this is forbidden and must be avoided.\n**2. Lahn khafi (hidden mistake):** skipping ghunnah, stretching a madd too short or too long, making a heavy letter light, etc. The meaning stays, but the beauty is spoiled — this should also be avoided." },
        { "type": "compare", "title": { "bn": "একটি ছোট হরকত, বিশাল পার্থক্য!", "en": "One small vowel, a huge difference!" }, "items": [
          { "ar": "أَنْعَمْتَ", "label": { "bn": "সঠিক (তা-তে যবর)", "en": "Correct (fatha on ta)" }, "desc": { "bn": "‘(হে আল্লাহ) তুমি নিয়ামত দিয়েছ’ — সূরা ফাতিহা", "en": "‘You (O Allah) have favoured’ — Surah al-Fatiha" } },
          { "ar": "أَنْعَمْتُ", "label": { "bn": "লাহনে জলী! (তা-তে পেশ)", "en": "Clear mistake! (damma on ta)" }, "desc": { "bn": "‘আমি নিয়ামত দিয়েছি’ — অর্থ সম্পূর্ণ উল্টে গেল!", "en": "‘I have favoured’ — the meaning is completely changed!" } }
        ] },
        { "type": "text", "title": { "bn": "হুকুম (বিধান)", "en": "The ruling" }, "bn": "তাজবীদের সব নিয়মকানুন বিস্তারিত শেখা **ফরযে কিফায়া** (সমাজের কিছু মানুষ শিখলেই যথেষ্ট)। কিন্তু যে-ই কুরআন পড়ে, তার জন্য **সঠিকভাবে পড়া** — অন্তত স্পষ্ট ভুল থেকে মুক্ত থাকা — জরুরি।", "en": "Learning all the detailed rules of tajweed is **fard kifayah** (a community duty). But for anyone who recites, **reciting correctly** — at least free from clear mistakes — is a personal duty." },
        { "type": "steps", "title": { "bn": "তিলাওয়াতের আদব", "en": "Manners of recitation" }, "items": [
          { "title": { "bn": "নিয়ত খাঁটি করো", "en": "Make a sincere intention" }, "desc": { "bn": "শুধু আল্লাহকে খুশি করার জন্য পড়ো, মানুষকে দেখানোর জন্য নয়।", "en": "Recite only to please Allah, not to show off." } },
          { "title": { "bn": "পবিত্র হও", "en": "Be clean" }, "desc": { "bn": "অযু করে, পরিষ্কার জায়গায় বসো। মুসহাফ ছোঁয়ার জন্য অযু লাগে।", "en": "Make wudu and sit in a clean place. Wudu is needed to touch the mushaf." } },
          { "title": { "bn": "সম্ভব হলে কিবলামুখী হও", "en": "Face the qiblah if you can" }, "desc": { "bn": "শান্ত হয়ে, সম্মানের সাথে বসো।", "en": "Sit calmly and respectfully." } },
          { "title": { "bn": "আ‘ঊযু পড়ো", "en": "Seek refuge" }, "ar": "أَعُوذُ بِاللّٰهِ مِنَ الشَّيْطَانِ الرَّجِيمِ", "tr": { "bn": "আ‘ঊযু বিল্লা-হি মিনাশ শাইত্বা-নির রজীম", "en": "a'oodhu billaahi minash-shayṭaanir-rajeem" }, "mean": { "bn": "আমি বিতাড়িত শয়তান থেকে আল্লাহর আশ্রয় চাই।", "en": "I seek refuge in Allah from Satan, the outcast." } },
          { "title": { "bn": "সূরার শুরুতে বিসমিল্লাহ পড়ো", "en": "Say the basmalah at the start of a surah" }, "ar": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ", "tr": { "bn": "বিসমিল্লা-হির রহ্‌মা-নির রহীম", "en": "bismillaahir-raḥmaanir-raḥeem" }, "mean": { "bn": "পরম করুণাময়, অতি দয়ালু আল্লাহর নামে।", "en": "In the name of Allah, the Most Gracious, the Most Merciful." } },
          { "title": { "bn": "ধীরে, বুঝে, মন দিয়ে পড়ো", "en": "Recite slowly, with attention" }, "desc": { "bn": "তাড়াহুড়া নয়। হাই এলে তিলাওয়াত থামিয়ে দাও, পরে আবার শুরু করো।", "en": "Do not rush. If you yawn, pause the recitation and continue afterwards." } }
        ] },
        { "type": "text", "title": { "bn": "বিসমিল্লাহর নিয়ম", "en": "Rules of the basmalah" }, "bn": "• **সূরার শুরু থেকে** পড়লে: আ‘ঊযু + বিসমিল্লাহ দুটোই পড়ো।\n• **সূরার মাঝখান থেকে** পড়লে: আ‘ঊযু পড়ো; বিসমিল্লাহ পড়া ঐচ্ছিক।\n• **সূরা তাওবা (৯ নম্বর)** শুরুতে বিসমিল্লাহ নেই — শুধু আ‘ঊযু পড়ে শুরু করো (যদি এখান থেকেই তিলাওয়াত শুরু করো)।", "en": "• **Starting from the beginning of a surah:** say both the ta'awwudh and the basmalah.\n• **Starting from the middle of a surah:** say the ta'awwudh; the basmalah is optional.\n• **Surah at-Tawbah (no. 9)** has no basmalah — begin with just the ta'awwudh (if you start your recitation there)." },
        { "type": "tip", "kind": "warn", "bn": "এক সূরা শেষ করে পরের সূরা শুরু করার সময় একটি পদ্ধতি **নিষেধ**: আগের সূরার শেষ শব্দ বিসমিল্লাহর সাথে মিলিয়ে পড়ে তারপর থেমে যাওয়া। এতে মনে হয় বিসমিল্লাহ আগের সূরার অংশ! হয় সব আলাদা পড়ো, নয় বিসমিল্লাহকে পরের সূরার সাথে মেলাও।", "en": "When moving from one surah to the next, one way is **not allowed**: joining the last word of the surah to the basmalah and then stopping. It makes the basmalah sound like part of the previous surah! Either read each part separately, or join the basmalah to the next surah." },
        { "type": "tip", "kind": "memory", "bn": "মনে রাখো: **আ‘ঊযু = শয়তান থেকে ঢাল, বিসমিল্লাহ = সূরার দরজা।** তাওবা সূরার দরজায় বিসমিল্লাহ নেই।", "en": "Remember: **Ta'awwudh = a shield against Satan; basmalah = the door of a surah.** Surah at-Tawbah's door has no basmalah." },
        { "type": "practice", "bn": "ধীরে ধীরে পড়ো। প্রতিটি হরফ স্পষ্ট হচ্ছে কি না খেয়াল করো।", "en": "Read slowly. Check that every letter comes out clearly.", "lines": [
          "أَعُوذُ بِاللّٰهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
          "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
          "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
          "أَنْعَمْتَ أَنْعَمْتَ أَنْعَمْتَ"
        ] },
        { "type": "quiz", "items": [
          { "q": { "bn": "‘তাজবীদ’ শব্দের অর্থ কী?", "en": "What does the word ‘tajweed’ mean?" }, "options": [ { "bn": "দ্রুত পড়া", "en": "Reading fast" }, { "bn": "সুন্দর ও উত্তম করা", "en": "Making better and beautiful" }, { "bn": "মুখস্থ করা", "en": "Memorising" } ], "answer": 1 },
          { "q": { "bn": "যে ভুলে অর্থ বদলে যেতে পারে, তাকে কী বলে?", "en": "What is a mistake that can change the meaning called?" }, "options": [ { "bn": "লাহনে জলী", "en": "Lahn jali" }, { "bn": "লাহনে খফী", "en": "Lahn khafi" }, { "bn": "তারতীল", "en": "Tarteel" } ], "answer": 0 },
          { "q": { "bn": "গুন্নাহ না করা কোন ধরনের ভুল?", "en": "Skipping a ghunnah is which type of mistake?" }, "options": [ { "bn": "লাহনে জলী", "en": "Lahn jali" }, { "bn": "লাহনে খফী", "en": "Lahn khafi" }, { "bn": "কোনো ভুল নয়", "en": "Not a mistake" } ], "answer": 1 },
          { "q": { "bn": "কোন সূরার শুরুতে বিসমিল্লাহ নেই?", "en": "Which surah has no basmalah at its start?" }, "options": [ { "bn": "সূরা ফাতিহা", "en": "Surah al-Fatiha" }, { "bn": "সূরা তাওবা", "en": "Surah at-Tawbah" }, { "bn": "সূরা ইখলাস", "en": "Surah al-Ikhlas" } ], "answer": 1 },
          { "q": { "bn": "এখানে তা-তে পেশ দিলে অর্থ কী হয়?", "en": "If ta is read with damma here, what does it mean?" }, "ar": "أَنْعَمْتَ", "options": [ { "bn": "তুমি নিয়ামত দিয়েছ", "en": "You have favoured" }, { "bn": "আমি নিয়ামত দিয়েছি", "en": "I have favoured" }, { "bn": "অর্থ বদলায় না", "en": "No change in meaning" } ], "answer": 1, "explain": { "bn": "{{أَنْعَمْتُ}} মানে ‘আমি দিয়েছি’ — তাই হরকতের ভুল লাহনে জলী।", "en": "{{أَنْعَمْتُ}} means ‘I have given’ — so a vowel error is a clear mistake." } },
          { "q": { "bn": "সূরার মাঝখান থেকে তিলাওয়াত শুরু করলে কী পড়বে?", "en": "Starting recitation from the middle of a surah, what do you say?" }, "options": [ { "bn": "শুধু বিসমিল্লাহ (আ‘ঊযু লাগবে না)", "en": "Only the basmalah (no ta'awwudh)" }, { "bn": "আ‘ঊযু; বিসমিল্লাহ ঐচ্ছিক", "en": "The ta'awwudh; basmalah is optional" }, { "bn": "কিছুই না", "en": "Nothing" } ], "answer": 1 }
        ] }
      ]
    },
    {
      "id": "tj-makharij",
      "icon": "مخ",
      "title": { "bn": "মাখরাজ — হরফ কোথা থেকে বের হয়", "en": "Makharij — Where Letters Come From" },
      "subtitle": { "bn": "৫টি এলাকা, ১৭টি মাখরাজ এবং নিজে যাচাই করার কৌশল", "en": "5 areas, 17 points, and a trick to check yourself" },
      "minutes": 15,
      "goals": [
        { "bn": "উচ্চারণের ৫টি প্রধান এলাকা চিনব", "en": "Know the 5 main areas of articulation" },
        { "bn": "১৭টি মাখরাজ ও তাদের হরফ জানব", "en": "Learn the 17 points and their letters" },
        { "bn": "সাকিন হরফ দিয়ে নিজের মাখরাজ নিজে যাচাই করতে শিখব", "en": "Use a sukun letter to test your own articulation" }
      ],
      "blocks": [
        { "type": "text", "bn": "প্রতিটি হরফের মুখের ভেতর একটি নির্দিষ্ট ‘ঠিকানা’ আছে। এই ঠিকানাকে বলে **মাখরাজ** ({{مَخْرَج}} — বের হওয়ার জায়গা)। ঠিকানা ভুল হলে হরফটাই বদলে যায় — যেমন {{ق}} হয়ে যায় {{ك}}।", "en": "Every letter has a fixed ‘address’ inside the mouth. This address is called the **makhraj** ({{مَخْرَج}} — the place of exit). Use the wrong address and the letter itself changes — {{ق}} turns into {{ك}}." },
        { "type": "steps", "title": { "bn": "৫টি প্রধান এলাকা", "en": "The 5 main areas" }, "items": [
          { "title": { "bn": "জাওফ — মুখ ও গলার ফাঁকা জায়গা", "en": "Al-Jawf — the empty space of mouth and throat" }, "ar": "الْجَوْف", "desc": { "bn": "এখান থেকে তিনটি মাদ্দের হরফ: যবরের পর {{ا}}, পেশের পর সাকিন {{و}}, যেরের পর সাকিন {{ي}}। এগুলো বাতাস যতক্ষণ, ততক্ষণ চলে।", "en": "The three madd letters: {{ا}} after fatha, sakin {{و}} after damma, sakin {{ي}} after kasra. They flow as long as your breath." } },
          { "title": { "bn": "হালক — গলা", "en": "Al-Halq — the throat" }, "ar": "الْحَلْق", "desc": { "bn": "৬টি হরফ: {{ء ه ع ح غ خ}}", "en": "6 letters: {{ء ه ع ح غ خ}}" } },
          { "title": { "bn": "লিসান — জিহ্বা", "en": "Al-Lisan — the tongue" }, "ar": "اللِّسَان", "desc": { "bn": "সবচেয়ে বেশি হরফ — ১৮টি — জিহ্বার বিভিন্ন অংশ থেকে।", "en": "The most letters — 18 — come from different parts of the tongue." } },
          { "title": { "bn": "শাফাতান — দুই ঠোঁট", "en": "Ash-Shafatan — the two lips" }, "ar": "الشَّفَتَان", "desc": { "bn": "৪টি হরফ: {{ف ب م و}}", "en": "4 letters: {{ف ب م و}}" } },
          { "title": { "bn": "খাইশূম — নাকের বাঁশি", "en": "Al-Khayshum — the nasal passage" }, "ar": "الْخَيْشُوم", "desc": { "bn": "এখান থেকে কোনো হরফ নয়, বের হয় **গুন্নাহ** — নূন ও মীমের নাকি সুর।", "en": "No letter comes from here — only the **ghunnah**, the nasal hum of noon and meem." } }
        ] },
        { "type": "table", "title": { "bn": "১৭টি মাখরাজ", "en": "The 17 points of articulation" }, "head": [ { "bn": "নং", "en": "#" }, { "bn": "হরফ", "en": "Letters" }, { "bn": "কোথা থেকে", "en": "Where" } ], "rows": [
          [ { "bn": "১", "en": "1" }, "ـَا ـُو ـِي", { "bn": "জাওফ — মুখ-গলার ফাঁকা জায়গা (মাদ্দের হরফ)", "en": "Jawf — the open space of mouth and throat (madd letters)" } ],
          [ { "bn": "২", "en": "2" }, "ء ه", { "bn": "গলার একদম গভীর অংশ (বুকের দিকে)", "en": "Deepest part of the throat (near the chest)" } ],
          [ { "bn": "৩", "en": "3" }, "ع ح", { "bn": "গলার মাঝখান", "en": "Middle of the throat" } ],
          [ { "bn": "৪", "en": "4" }, "غ خ", { "bn": "গলার উপরের অংশ (মুখের দিকে)", "en": "Top of the throat (nearest the mouth)" } ],
          [ { "bn": "৫", "en": "5" }, "ق", { "bn": "জিহ্বার একদম গোড়া + উপরের নরম তালু", "en": "Very back of the tongue + the soft palate above" } ],
          [ { "bn": "৬", "en": "6" }, "ك", { "bn": "ক্বাফের একটু সামনে — জিহ্বার গোড়া + তালু", "en": "Slightly forward of qaf — back of tongue + palate" } ],
          [ { "bn": "৭", "en": "7" }, "ج ش ي", { "bn": "জিহ্বার মাঝখান + উপরের শক্ত তালু", "en": "Middle of the tongue + the hard palate" } ],
          [ { "bn": "৮", "en": "8" }, "ض", { "bn": "জিহ্বার এক বা দুই পাশ + উপরের মাড়ির দাঁত", "en": "One or both sides of the tongue + the upper molars" } ],
          [ { "bn": "৯", "en": "9" }, "ل", { "bn": "জিহ্বার আগার কিনারা + উপরের সামনের দাঁতের মাড়ি", "en": "Front rim of the tongue + gums of the upper front teeth" } ],
          [ { "bn": "১০", "en": "10" }, "ن", { "bn": "জিহ্বার আগা + উপরের সামনের দুই দাঁতের মাড়ি", "en": "Tip of the tongue + gum of the upper front teeth" } ],
          [ { "bn": "১১", "en": "11" }, "ر", { "bn": "নূনের কাছেই, জিহ্বার আগা ও একটু উপরের পিঠ + মাড়ি", "en": "Next to noon — tongue tip with a little of its top + the gum" } ],
          [ { "bn": "১২", "en": "12" }, "ط د ت", { "bn": "জিহ্বার আগা + উপরের সামনের দুই দাঁতের গোড়া", "en": "Tongue tip + roots of the two upper front teeth" } ],
          [ { "bn": "১৩", "en": "13" }, "ص ز س", { "bn": "জিহ্বার আগা নিচের সামনের দাঁতের কাছে, দাঁতের ফাঁক দিয়ে শিস", "en": "Tongue tip near the lower front teeth; air whistles between the teeth" } ],
          [ { "bn": "১৪", "en": "14" }, "ظ ذ ث", { "bn": "জিহ্বার আগা + উপরের সামনের দুই দাঁতের কিনারা", "en": "Tongue tip + edges of the two upper front teeth" } ],
          [ { "bn": "১৫", "en": "15" }, "ف", { "bn": "নিচের ঠোঁটের ভেতরের দিক + উপরের সামনের দাঁতের কিনারা", "en": "Inner lower lip + edges of the upper front teeth" } ],
          [ { "bn": "১৬", "en": "16" }, "ب م و", { "bn": "দুই ঠোঁট — {{ب}} ভেজা অংশ চেপে, {{م}} হালকা বন্ধ করে, {{و}} গোল করে (বন্ধ নয়)", "en": "Both lips — {{ب}} pressing the moist part, {{م}} closing lightly, {{و}} rounding (not closing)" } ],
          [ { "bn": "১৭", "en": "17" }, "نّ مّ", { "bn": "খাইশূম — নাকের বাঁশি (গুন্নাহ)", "en": "Khayshum — the nasal passage (ghunnah)" } ]
        ] },
        { "type": "letters", "title": { "bn": "গলার ৬টি হরফ — গভীর থেকে উপরে", "en": "The 6 throat letters — deep to high" }, "items": [ "hamza", "ha", "ain", "hha", "ghain", "kha" ] },
        { "type": "tip", "kind": "memory", "bn": "গলাকে তিন তলার বাড়ি ভাবো: **নিচতলা** {{ء ه}}, **দোতলা** {{ع ح}}, **তিনতলা** {{غ خ}}। নিচ থেকে উপরে উঠতে উঠতে হরফ মুখের কাছে চলে আসে।", "en": "Think of the throat as a 3-storey house: **ground floor** {{ء ه}}, **first floor** {{ع ح}}, **top floor** {{غ خ}}. Going up, the letters move closer to the mouth." },
        { "type": "tip", "kind": "tip", "title": { "bn": "নিজেই যাচাই করো!", "en": "Check yourself!" }, "bn": "যে হরফের মাখরাজ খুঁজতে চাও, তার আগে যবরসহ হামযা বসিয়ে হরফটিকে **সাকিন** করে পড়ো: {{أَبْ}}, {{أَقْ}}, {{أَثْ}}। যেখানে আওয়াজ থেমে যায় — সেটাই ঐ হরফের মাখরাজ। সাকিন অবস্থায় হরফ তার জায়গায় ‘বসে’ থাকে, তাই অনুভব করা সহজ।", "en": "To find a letter's makhraj, put a hamza with fatha before it and read the letter with **sukun**: {{أَبْ}}, {{أَقْ}}, {{أَثْ}}. Where the sound stops — that is the makhraj. With sukun the letter ‘sits’ in its place, so it is easy to feel." },
        { "type": "tip", "kind": "tip", "title": { "bn": "আয়না পরীক্ষা", "en": "The mirror test" }, "bn": "আয়নার সামনে {{أَثْ}} {{أَذْ}} {{أَظْ}} পড়ো — জিহ্বার আগা সামান্য দেখা যাওয়া উচিত। {{أَفْ}} পড়লে উপরের দাঁত নিচের ঠোঁট আলতো ছোঁবে। {{أَوْ}} পড়লে ঠোঁট গোল হবে, দাঁত ঠোঁটে লাগবে না — এটা বাংলা ‘ভ’ নয়!", "en": "In front of a mirror say {{أَثْ}} {{أَذْ}} {{أَظْ}} — the tip of your tongue should just show. For {{أَفْ}} your upper teeth gently touch your lower lip. For {{أَوْ}} your lips round and your teeth do not touch them — it is not a ‘v’!" },
        { "type": "examples", "title": { "bn": "কাছাকাছি মাখরাজ — সাবধান!", "en": "Neighbouring points — careful!" }, "items": [
          { "ar": "أَقْ", "tr": { "bn": "আক্ব্‌", "en": "aq" }, "note": { "bn": "জিহ্বার একদম গোড়া, ভারী আওয়াজ", "en": "Very back of the tongue, deep sound" } },
          { "ar": "أَكْ", "tr": { "bn": "আক্‌", "en": "ak" }, "note": { "bn": "একটু সামনে, হালকা আওয়াজ", "en": "A little forward, light sound" } },
          { "ar": "أَنْ", "tr": { "bn": "আন্‌", "en": "an" }, "note": { "bn": "জিহ্বার আগা মাড়িতে", "en": "Tongue tip on the gum" } },
          { "ar": "أَلْ", "tr": { "bn": "আল্‌", "en": "al" }, "note": { "bn": "জিহ্বার আগার কিনারা", "en": "Front rim of the tongue" } },
          { "ar": "أَرْ", "tr": { "bn": "আর্‌", "en": "ar" }, "note": { "bn": "আগা + একটু পিঠ, এক ঝটকা (র-কে কাঁপাবে না)", "en": "Tip + a little of the top, a single tap (do not roll it)" } }
        ] },
        { "type": "practice", "bn": "প্রতিটি সাকিন হরফ পড়ে এক মুহূর্ত থামো আর অনুভব করো আওয়াজ কোথায় থামছে।", "en": "Read each sukun letter, pause a moment and feel where the sound stops.", "lines": [
          "أَهْ أَعْ أَحْ أَغْ أَخْ",
          "أَقْ أَكْ أَجْ أَشْ أَيْ",
          "أَضْ أَلْ أَنْ أَرْ",
          "أَطْ أَدْ أَتْ",
          "أَصْ أَزْ أَسْ",
          "أَظْ أَذْ أَثْ",
          "أَفْ أَبْ أَمْ أَوْ"
        ] },
        { "type": "quiz", "items": [
          { "q": { "bn": "মোট কয়টি মাখরাজ?", "en": "How many points of articulation are there?" }, "options": [ "5", "14", "17", "28" ], "answer": 2, "explain": { "bn": "৫টি এলাকায় মোট ১৭টি মাখরাজ।", "en": "17 points spread over 5 areas." } },
          { "q": { "bn": "এই দুটি হরফ গলার কোন অংশ থেকে বের হয়?", "en": "From which part of the throat do these two letters come?" }, "ar": "ع ح", "options": [ { "bn": "গভীর অংশ", "en": "Deepest part" }, { "bn": "মাঝখান", "en": "Middle" }, { "bn": "উপরের অংশ", "en": "Top part" } ], "answer": 1 },
          { "q": { "bn": "{{ض}} কোথা থেকে বের হয়?", "en": "Where does {{ض}} come from?" }, "options": [ { "bn": "ঠোঁট", "en": "The lips" }, { "bn": "জিহ্বার পাশ + উপরের মাড়ির দাঁত", "en": "Side of the tongue + upper molars" }, { "bn": "গলার মাঝখান", "en": "Middle of the throat" } ], "answer": 1 },
          { "q": { "bn": "কোন হরফ বলার সময় জিহ্বার আগা উপরের দাঁতের কিনারা ছোঁয়?", "en": "For which letter does the tongue tip touch the edges of the upper front teeth?" }, "options": [ "س", "ث", "ت" ], "answer": 1 },
          { "q": { "bn": "খাইশূম (নাক) থেকে কী বের হয়?", "en": "What comes from the khayshum (nose)?" }, "options": [ { "bn": "মাদ্দ", "en": "Madd" }, { "bn": "কলকলা", "en": "Qalqalah" }, { "bn": "গুন্নাহ", "en": "Ghunnah" } ], "answer": 2 },
          { "q": { "bn": "মাখরাজ যাচাই করতে হরফটিকে কোন অবস্থায় পড়তে হয়?", "en": "To test a makhraj, the letter should be read with…" }, "options": [ { "bn": "যবর", "en": "Fatha" }, { "bn": "সাকিন (জযম)", "en": "Sukun" }, { "bn": "তানবীন", "en": "Tanween" } ], "answer": 1, "explain": { "bn": "যেমন {{أَبْ}} — সাকিন হরফ নিজের জায়গায় থেমে থাকে।", "en": "Like {{أَبْ}} — a sukun letter stays put in its place." } },
          { "q": { "bn": "{{و}} (মাদ্দ নয় এমন) উচ্চারণে ঠোঁট কী করে?", "en": "What do the lips do for a non-madd {{و}}?" }, "options": [ { "bn": "গোল হয়, পুরো বন্ধ হয় না", "en": "They round, without closing fully" }, { "bn": "দাঁত নিচের ঠোঁটে লাগে", "en": "Teeth touch the lower lip" }, { "bn": "শক্ত করে চেপে বন্ধ হয়", "en": "They press shut firmly" } ], "answer": 0 }
        ] }
      ]
    },
    {
      "id": "tj-heavy-light",
      "icon": "طَ",
      "title": { "bn": "মোটা ও চিকন হরফ", "en": "Heavy & Light Letters" },
      "subtitle": { "bn": "তাফখীম ও তারকীক, রা-এর নিয়ম ও আল্লাহ শব্দের লাম", "en": "Tafkheem and tarqeeq, the rules of Ra, and the Lam in ‘Allah’" },
      "minutes": 15,
      "goals": [
        { "bn": "৭টি সবসময়-মোটা হরফ মুখস্থ করব", "en": "Memorise the 7 always-heavy letters" },
        { "bn": "রা কখন মোটা, কখন চিকন — চিনব", "en": "Know when Ra is heavy and when it is light" },
        { "bn": "{{اللّٰه}} শব্দের লাম মোটা না চিকন — বুঝব", "en": "Know when the Lam of {{اللّٰه}} is heavy or light" }
      ],
      "blocks": [
        { "type": "text", "bn": "কিছু হরফ পড়লে মুখ যেন আওয়াজে **ভরে যায়** — এগুলো মোটা (পুর) হরফ। একে বলে **তাফখীম** ({{تَفْخِيم}})। বাকি হরফগুলো হালকা, পাতলা — একে বলে **তারকীক** ({{تَرْقِيق}})। মোটা হরফ বলার সময় জিহ্বার গোড়া উপরের তালুর দিকে উঠে যায়।", "en": "Some letters **fill the mouth** with sound — these are heavy letters. This is called **tafkheem** ({{تَفْخِيم}}). The rest are light and thin — called **tarqeeq** ({{تَرْقِيق}}). For a heavy letter, the back of the tongue rises towards the roof of the mouth." },
        { "type": "letters", "title": { "bn": "সবসময় মোটা ৭টি হরফ (ইসতি‘লা)", "en": "The 7 always-heavy letters (isti'la)" }, "items": [ "kha", "sad", "dad", "ghain", "tta", "qaf", "zza" ] },
        { "type": "tip", "kind": "memory", "bn": "সাতটি মোটা হরফ একটি ছোট্ট বাক্যে: {{خُصَّ ضَغْطٍ قِظْ}} (খুছ্‌ছা দ্বাগত্বিন ক্বিয্‌)। এই বাক্যের প্রতিটি হরফই মোটা!", "en": "All 7 heavy letters in one short phrase: {{خُصَّ ضَغْطٍ قِظْ}} (khuṣṣa ḍaghṭin qiẓ). Every letter in it is heavy!" },
        { "type": "tip", "kind": "fun", "bn": "এর মধ্যে চারটি — {{ص ض ط ظ}} — সবচেয়ে বেশি মোটা। এদের বলার সময় জিহ্বা তালুর সাথে প্রায় ‘ঢাকনার’ মতো লেগে যায় (ইতবাক)।", "en": "Four of them — {{ص ض ط ظ}} — are the heaviest. For these the tongue almost covers the palate like a lid (itbaq)." },
        { "type": "table", "title": { "bn": "মোটা হরফেরও স্তর আছে", "en": "Heavy letters have levels too" }, "head": [ { "bn": "স্তর", "en": "Level" }, { "bn": "অবস্থা", "en": "When" }, { "bn": "উদাহরণ", "en": "Example" } ], "rows": [
          [ { "bn": "১ (সবচেয়ে মোটা)", "en": "1 (heaviest)" }, { "bn": "যবর, পরে আলিফ", "en": "Fatha followed by alif" }, "طَا قَا" ],
          [ { "bn": "২", "en": "2" }, { "bn": "যবর", "en": "Fatha" }, "طَ قَ" ],
          [ { "bn": "৩", "en": "3" }, { "bn": "পেশ", "en": "Damma" }, "طُ قُ" ],
          [ { "bn": "৪", "en": "4" }, { "bn": "সাকিন", "en": "Sukun" }, "أَطْ أَقْ" ],
          [ { "bn": "৫ (সবচেয়ে কম)", "en": "5 (least)" }, { "bn": "যের — তবুও মোটা!", "en": "Kasra — still heavy!" }, "طِ قِ" ]
        ] },
        { "type": "tip", "kind": "warn", "bn": "মোটা মানে ঠোঁট গোল করা নয়! {{قَالَ}} হবে ‘ক্বা-লা’, ‘কো-লা’ নয়। ঠোঁট স্বাভাবিক রাখো, শুধু জিহ্বার গোড়া উপরে তোলো।", "en": "Heavy does not mean rounding the lips! {{قَالَ}} is ‘qaala’, not ‘qoola’. Keep your lips relaxed — just raise the back of the tongue." },
        { "type": "compare", "title": { "bn": "আলিফ আগের হরফকে অনুসরণ করে", "en": "Alif follows the letter before it" }, "items": [
          { "ar": "قَالَ", "label": { "bn": "মোটা আলিফ", "en": "Heavy alif" }, "desc": { "bn": "{{ق}} মোটা, তাই পরের আলিফও মোটা", "en": "{{ق}} is heavy, so the alif after it is heavy" } },
          { "ar": "كَانَ", "label": { "bn": "চিকন আলিফ", "en": "Light alif" }, "desc": { "bn": "{{ك}} চিকন, তাই আলিফও চিকন", "en": "{{ك}} is light, so the alif is light too" } }
        ] },
        { "type": "text", "title": { "bn": "রা ({{ر}}) — কখনো মোটা, কখনো চিকন", "en": "Ra ({{ر}}) — sometimes heavy, sometimes light" }, "bn": "সহজ সূত্র: **রা-এর নিজের হরকত দেখো।** যবর বা পেশ হলে মোটা, যের হলে চিকন। রা সাকিন হলে **তার আগের হরফের হরকত** দেখো।", "en": "Simple formula: **look at Ra's own vowel.** Fatha or damma → heavy; kasra → light. If Ra has sukun, **look at the vowel of the letter before it**." },
        { "type": "examples", "title": { "bn": "রা মোটা হয় যখন…", "en": "Ra is heavy when…" }, "items": [
          { "ar": "رَبِّ", "hl": "رَ", "tr": { "bn": "রব্বি", "en": "rabbi" }, "note": { "bn": "রা-তে যবর", "en": "Ra has fatha" } },
          { "ar": "رُزِقُوا", "hl": "رُ", "tr": { "bn": "রুযিক্বূ", "en": "ruziqoo" }, "note": { "bn": "রা-তে পেশ", "en": "Ra has damma" } },
          { "ar": "مَرْيَمَ", "hl": "رْ", "tr": { "bn": "মারইয়ামা", "en": "maryama" }, "note": { "bn": "রা সাকিন, আগে যবর", "en": "Ra sakin after fatha" } },
          { "ar": "الْقُرْآنَ", "hl": "رْ", "tr": { "bn": "আলক্বুরআ-না", "en": "al-qur'aana" }, "note": { "bn": "রা সাকিন, আগে পেশ", "en": "Ra sakin after damma" } },
          { "ar": "ارْجِعِي", "hl": "رْ", "tr": { "bn": "ইরজি‘ঈ", "en": "irji'ee" }, "note": { "bn": "আগের যের এসেছে শুরুর হামযা (হামযাতুল ওয়াসল) থেকে — এটা আসল যের নয়", "en": "The kasra before it comes from a joining hamza (hamzat al-wasl) — not an original kasra" } },
          { "ar": "قِرْطَاسٍ", "hl": "رْطَ", "tr": { "bn": "ক্বিরত্বা-সিন", "en": "qirṭaasin" }, "note": { "bn": "আগে যের, কিন্তু পরে একই শব্দে মোটা হরফ {{ط}}", "en": "Kasra before, but a heavy letter {{ط}} follows in the same word" } },
          { "ar": "وَالْعَصْرِ", "hl": "صْرِ", "tr": { "bn": "ওয়াল ‘আছর্‌ (থামলে)", "en": "wal-'aṣr (at a stop)" }, "note": { "bn": "থামলে রা সাকিন; আগের হরফ সাকিন, তার আগে যবর", "en": "Stopping makes Ra sakin; the letter before is sakin, and before that a fatha" } }
        ] },
        { "type": "examples", "title": { "bn": "রা চিকন হয় যখন…", "en": "Ra is light when…" }, "items": [
          { "ar": "رِجَالٌ", "hl": "رِ", "tr": { "bn": "রিজা-লুন", "en": "rijaalun" }, "note": { "bn": "রা-তে যের", "en": "Ra has kasra" } },
          { "ar": "فِرْعَوْنَ", "hl": "رْ", "tr": { "bn": "ফির‘আওনা", "en": "fir'awna" }, "note": { "bn": "রা সাকিন, আগে আসল যের, পরে মোটা হরফ নেই", "en": "Ra sakin after an original kasra, no heavy letter after it" } },
          { "ar": "قَدِيرٌ", "hl": "يرٌ", "tr": { "bn": "ক্বাদীর্‌ (থামলে)", "en": "qadeer (at a stop)" }, "note": { "bn": "থামলে রা সাকিন, আগে সাকিন {{ي}}", "en": "At a stop Ra is sakin with a sakin {{ي}} before it" } },
          { "ar": "حِجْرٍ", "hl": "رٍ", "tr": { "bn": "হিজর্‌ (থামলে)", "en": "ḥijr (at a stop)" }, "note": { "bn": "আগের হরফ সাকিন, তার আগে যের", "en": "The letter before is sakin, and before that a kasra" } }
        ] },
        { "type": "tip", "kind": "memory", "bn": "রা-এর ছড়া: **‘যবর-পেশে রা মোটা, যেরে রা চিকন; সাকিন হলে পেছন ফিরে দেখো তার আপনজন।’**", "en": "Ra rhyme: **‘Fatha or damma — Ra is strong; kasra makes it thin; with sukun, look back one step to the vowel before it.’**" },
        { "type": "text", "title": { "bn": "{{اللّٰه}} শব্দের লাম", "en": "The Lam in {{اللّٰه}}" }, "bn": "আল্লাহ শব্দের লাম সাধারণত চিকন হরফ, কিন্তু এখানে বিশেষ নিয়ম: আগে **যবর বা পেশ** থাকলে লাম **মোটা**; আগে **যের** থাকলে লাম **চিকন**। শব্দটি দিয়ে তিলাওয়াত শুরু করলেও (শুরুর হামযায় যবর) লাম মোটা।", "en": "Lam is normally light, but ‘Allah’ has a special rule: after **fatha or damma** the Lam is **heavy**; after **kasra** it is **light**. When you start with the word (the opening hamza has fatha), the Lam is also heavy." },
        { "type": "compare", "items": [
          { "ar": "قُلْ هُوَ اللّٰهُ أَحَدٌ", "label": { "bn": "মোটা লাম", "en": "Heavy Lam" }, "desc": { "bn": "আগে {{وَ}}-তে যবর — ভরাট, গাঢ় আওয়াজ (কিন্তু ঠোঁট গোল নয়)", "en": "Fatha on {{وَ}} before it — a full, deep sound (but no lip-rounding)" } },
          { "ar": "بِسْمِ اللّٰهِ", "label": { "bn": "চিকন লাম", "en": "Light Lam" }, "desc": { "bn": "আগে {{مِ}}-তে যের — হালকা ‘লা’", "en": "Kasra on {{مِ}} before it — a light ‘la’" } }
        ] },
        { "type": "examples", "items": [
          { "ar": "نَصْرُ اللّٰهِ", "hl": "اللّٰهِ", "tr": { "bn": "নাছরুল্লা-হ", "en": "naṣrullaah" }, "note": { "bn": "আগে পেশ → মোটা", "en": "Damma before → heavy" } },
          { "ar": "شَهِدَ اللّٰهُ", "hl": "اللّٰهُ", "tr": { "bn": "শাহিদাল্লা-হু", "en": "shahidallaahu" }, "note": { "bn": "আগে যবর → মোটা", "en": "Fatha before → heavy" } },
          { "ar": "الْحَمْدُ لِلّٰهِ", "hl": "لِلّٰهِ", "tr": { "bn": "আলহামদু লিল্লা-হ", "en": "al-ḥamdu lillaah" }, "note": { "bn": "আগে যের → চিকন", "en": "Kasra before → light" } },
          { "ar": "بِاللّٰهِ", "hl": "اللّٰهِ", "tr": { "bn": "বিল্লা-হ", "en": "billaah" }, "note": { "bn": "আগে যের → চিকন", "en": "Kasra before → light" } }
        ] },
        { "type": "practice", "bn": "প্রথমে মোটা হরফের স্তরগুলো, তারপর রা ও আল্লাহ শব্দের লাম অনুশীলন করো।", "en": "First practise the levels of heavy letters, then Ra and the Lam of Allah.", "lines": [
          "خَا صَا ضَا غَا طَا قَا ظَا",
          "خَ صَ ضَ غَ طَ قَ ظَ",
          "خُ صُ ضُ غُ طُ قُ ظُ",
          "خِ صِ ضِ غِ طِ قِ ظِ",
          "رَبِّ رُزِقُوا مَرْيَمَ الْقُرْآنَ",
          "رِجَالٌ فِرْعَوْنَ",
          "قُلْ هُوَ اللّٰهُ بِسْمِ اللّٰهِ الْحَمْدُ لِلّٰهِ"
        ] },
        { "type": "quiz", "items": [
          { "q": { "bn": "নিচের কোনটি সবসময় মোটা হরফ?", "en": "Which of these is always heavy?" }, "options": [ "ك", "ق", "ت", "س" ], "answer": 1 },
          { "q": { "bn": "মোটা হরফের মনে রাখার বাক্যটি কোনটি?", "en": "Which phrase holds all the heavy letters?" }, "options": [ "خُصَّ ضَغْطٍ قِظْ", "قُطْبُ جَدٍّ", "يَرْمَلُونَ" ], "answer": 0 },
          { "q": { "bn": "এখানে রা মোটা না চিকন?", "en": "Is the Ra heavy or light here?" }, "ar": "رِجَالٌ", "options": [ { "bn": "মোটা", "en": "Heavy" }, { "bn": "চিকন", "en": "Light" } ], "answer": 1, "explain": { "bn": "রা-তে যের, তাই চিকন।", "en": "Ra has kasra, so it is light." } },
          { "q": { "bn": "এখানে রা মোটা না চিকন?", "en": "Is the Ra heavy or light here?" }, "ar": "مَرْيَمَ", "options": [ { "bn": "মোটা", "en": "Heavy" }, { "bn": "চিকন", "en": "Light" } ], "answer": 0, "explain": { "bn": "রা সাকিন, আগে যবর — তাই মোটা।", "en": "Ra is sakin after fatha — so heavy." } },
          { "q": { "bn": "{{بِسْمِ اللّٰهِ}}-তে আল্লাহ শব্দের লাম কেমন?", "en": "In {{بِسْمِ اللّٰهِ}}, how is the Lam of Allah?" }, "options": [ { "bn": "মোটা", "en": "Heavy" }, { "bn": "চিকন", "en": "Light" } ], "answer": 1, "explain": { "bn": "আগে যের, তাই চিকন।", "en": "Kasra before it, so light." } },
          { "q": { "bn": "যেরযুক্ত মোটা হরফ (যেমন {{قِ}}) কেমন হবে?", "en": "A heavy letter with kasra (like {{قِ}}) is…" }, "options": [ { "bn": "চিকন হয়ে যায়", "en": "Becomes light" }, { "bn": "তবুও মোটা, তবে সবচেয়ে কম স্তরে", "en": "Still heavy, at the lowest level" }, { "bn": "গুন্নাহসহ পড়তে হয়", "en": "Read with ghunnah" } ], "answer": 1 },
          { "q": { "bn": "{{قَالَ}} শব্দের আলিফ কেমন?", "en": "How is the alif in {{قَالَ}}?" }, "options": [ { "bn": "মোটা — আগের ক্বাফকে অনুসরণ করে", "en": "Heavy — it follows the qaf" }, { "bn": "সবসময় চিকন", "en": "Always light" }, { "bn": "উচ্চারণ হয় না", "en": "Not pronounced" } ], "answer": 0 }
        ] }
      ]
    },
    {
      "id": "tj-noon-sakinah",
      "icon": "نْ",
      "title": { "bn": "নূন সাকিন ও তানবীন", "en": "Noon Sakinah & Tanween" },
      "subtitle": { "bn": "ইযহার, ইদগাম, ইকলাব, ইখফা — চারটি নিয়ম", "en": "Izhar, Idgham, Iqlab, Ikhfa — the four rules" },
      "minutes": 20,
      "goals": [
        { "bn": "বুঝব তানবীন আসলে একটি লুকানো নূন সাকিন", "en": "Understand that tanween is really a hidden noon sakinah" },
        { "bn": "চারটি নিয়মের হরফগুলো চিনব", "en": "Know the trigger letters of the four rules" },
        { "bn": "প্রতিটি নিয়ম কুরআনের শব্দে সঠিকভাবে পড়ব", "en": "Apply each rule correctly in Quranic words" }
      ],
      "blocks": [
        { "type": "text", "bn": "তাজবীদের সবচেয়ে বেশি ব্যবহৃত নিয়ম এটি! **নূন সাকিন** মানে জযমওয়ালা নূন: {{نْ}}। **তানবীন** ({{ـً ـٍ ـٌ}}) লেখায় নূন নেই, কিন্তু উচ্চারণে শব্দের শেষে একটি নূন সাকিন লুকিয়ে থাকে। তাই দুটোর নিয়ম একই।", "en": "This is the most-used tajweed rule! **Noon sakinah** is a noon with sukun: {{نْ}}. **Tanween** ({{ـً ـٍ ـٌ}}) has no noon in writing, but a noon sakinah hides at the end of the word when you say it. So both follow the same rules." },
        { "type": "compare", "items": [
          { "ar": "عَلِيمٌ", "label": { "bn": "যেভাবে লেখা", "en": "As written" }, "desc": { "bn": "শেষে দুই পেশ (তানবীন)", "en": "Double damma (tanween) at the end" } },
          { "ar": "عَلِيمُنْ", "label": { "bn": "যেভাবে শোনা যায়", "en": "As it sounds" }, "desc": { "bn": "পেশ + নূন সাকিন — ‘আলীমুন্‌’", "en": "Damma + noon sakinah — ‘'aleemun’" } }
        ] },
        { "type": "text", "bn": "নূন সাকিন বা তানবীনের **পরের হরফটি** দেখে ঠিক করো কোন নিয়ম হবে। আরবির ২৮টি হরফ চার দলে ভাগ:", "en": "Look at the **next letter** after the noon sakinah or tanween to decide the rule. The 28 Arabic letters fall into four groups:" },
        { "type": "table", "head": [ { "bn": "নিয়ম", "en": "Rule" }, { "bn": "হরফ", "en": "Letters" }, { "bn": "সংখ্যা", "en": "Count" }, { "bn": "কী হয়", "en": "What happens" } ], "rows": [
          [ { "bn": "ইযহার (বেগুনি)", "en": "Izhar (purple)" }, "ء ه ع ح غ خ", { "bn": "৬", "en": "6" }, { "bn": "নূন স্পষ্ট", "en": "Noon is clear" } ],
          [ { "bn": "ইদগাম (ধূসর)", "en": "Idgham (gray)" }, "ي ر م ل و ن", { "bn": "৬", "en": "6" }, { "bn": "নূন পরের হরফে মিশে যায়", "en": "Noon merges into the next letter" } ],
          [ { "bn": "ইকলাব (নীল)", "en": "Iqlab (blue)" }, "ب", { "bn": "১", "en": "1" }, { "bn": "নূন মীমে বদলে যায়", "en": "Noon turns into meem" } ],
          [ { "bn": "ইখফা (সবুজ)", "en": "Ikhfa (green)" }, "ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك", { "bn": "১৫", "en": "15" }, { "bn": "নূন লুকিয়ে নাকি সুরে", "en": "Noon is hidden with a nasal hum" } ]
        ] },
        { "type": "tip", "kind": "memory", "bn": "অঙ্কটা মনে রাখো: **৬ + ৬ + ১ + ১৫ = ২৮** — সব হরফ ভাগ হয়ে গেল! গলার ৬টি হরফ হলে ইযহার, {{يَرْمَلُونَ}} শব্দের ৬টি হলে ইদগাম, {{ب}} হলে ইকলাব — বাকি সব ইখফা।", "en": "Remember the sum: **6 + 6 + 1 + 15 = 28** — every letter is covered! Throat letters → Izhar; the 6 letters of {{يَرْمَلُونَ}} → Idgham; {{ب}} → Iqlab; everything else → Ikhfa." },
        { "type": "rule", "name": { "bn": "ইযহার হালকী — স্পষ্ট করে পড়া", "en": "Izhar Halqi — Clear Pronunciation" }, "ar": "إِظْهَار حَلْقِي", "color": "purple", "letters": "ء ه ع ح غ خ", "desc": { "bn": "নূন সাকিন বা তানবীনের পর গলার ৬টি হরফের কোনোটি এলে নূন **স্পষ্ট** উচ্চারণ হয়। গলার হরফ নূনের মাখরাজ থেকে অনেক দূরে, তাই মেশে না।", "en": "When a noon sakinah or tanween is followed by one of the 6 throat letters, the noon is said **clearly**. Throat letters are far from noon's makhraj, so they do not blend." },
          "how": { "bn": "জিহ্বার আগা মাড়িতে লাগিয়ে পরিষ্কার ‘ন্‌’ বলো, গুন্নাহ টানবে না, থামবেও না — সোজা গলার হরফে চলে যাও।", "en": "Touch the tongue tip to the gum and say a clean ‘n’ — no stretched ghunnah, no pause — then move straight to the throat letter." },
          "examples": [
            { "ar": "مَنْ آمَنَ", "hl": "نْ آ", "tr": { "bn": "মান আ-মানা", "en": "man aamana" } },
            { "ar": "أَنْعَمْتَ", "hl": "نْع", "tr": { "bn": "আন‘আমতা", "en": "an'amta" } },
            { "ar": "مِنْ خَوْفٍ", "hl": "نْ خ", "tr": { "bn": "মিন খাওফ", "en": "min khawf" } },
            { "ar": "عَلِيمٌ حَكِيمٌ", "hl": "مٌ ح", "tr": { "bn": "‘আলীমুন হাকীম", "en": "'aleemun ḥakeem" } },
            { "ar": "مِنْ غِلٍّ", "hl": "نْ غ", "tr": { "bn": "মিন গিল্ল", "en": "min ghill" } }
          ] },
        { "type": "rule", "name": { "bn": "ইদগাম বা-গুন্নাহ — গুন্নাহসহ মিশিয়ে পড়া", "en": "Idgham with Ghunnah — Merging with a Nasal Sound" }, "ar": "إِدْغَام بِغُنَّة", "color": "gray", "letters": "ي ن م و", "desc": { "bn": "পরে {{ي ن م و}} (মনে রাখো: {{يَنْمُو}} — ‘সে বাড়ে’) এলে নূন পরের হরফে **মিশে যায়**, আর দুই হরকত পরিমাণ গুন্নাহ হয়। শর্ত: নূন এক শব্দের শেষে, পরের হরফ পরের শব্দের শুরুতে।", "en": "When followed by {{ي ن م و}} (remember {{يَنْمُو}} — ‘it grows’), the noon **merges** into the next letter with a ghunnah of 2 counts. Condition: the noon ends one word and the letter starts the next word." },
          "how": { "bn": "নূনকে আলাদা বলবে না। পরের হরফটি যেন তাশদীদওয়ালা — নাকে দুই হরকত সুর রেখে সেটিতে ঢুকে যাও।", "en": "Do not say the noon separately. Treat the next letter as if it had shaddah — hum through the nose for 2 counts as you enter it." },
          "examples": [
            { "ar": "مَنْ يَقُولُ", "hl": "نْ ي", "tr": { "bn": "মাইঁ ইয়াক্বূলু", "en": "may-yaqoolu" } },
            { "ar": "مِنْ نِعْمَةٍ", "hl": "نْ ن", "tr": { "bn": "মিনঁ নি‘মাতিন", "en": "min-ni'matin" } },
            { "ar": "مِنْ مَاءٍ", "hl": "نْ م", "tr": { "bn": "মিমঁ মা-ইন", "en": "mim-maa'in" } },
            { "ar": "مِنْ وَالٍ", "hl": "نْ و", "tr": { "bn": "মিওঁ ওয়া-ল", "en": "miw-waal" } },
            { "ar": "خَيْرًا يَرَهُ", "hl": "رًا ي", "tr": { "bn": "খাইরাইঁ ইয়ারাহ", "en": "khayray-yarah" } }
          ] },
        { "type": "tip", "kind": "warn", "bn": "**ব্যতিক্রম:** নূন সাকিন আর {{ي}} বা {{و}} **একই শব্দে** থাকলে ইদগাম হয় না, নূন স্পষ্ট পড়তে হয়। কুরআনে এমন শব্দ মাত্র চারটি: {{الدُّنْيَا}}, {{بُنْيَانٌ}}, {{قِنْوَانٌ}}, {{صِنْوَانٌ}}। ‘দুনইয়া’ — ‘দুইঁয়া’ নয়!", "en": "**Exception:** if the noon sakinah and {{ي}} or {{و}} are in the **same word**, there is no idgham — the noon stays clear. Only four such words occur in the Quran: {{الدُّنْيَا}}, {{بُنْيَانٌ}}, {{قِنْوَانٌ}}, {{صِنْوَانٌ}}. Say ‘dunyaa’, not ‘duyyaa’!" },
        { "type": "rule", "name": { "bn": "ইদগাম বিলা-গুন্নাহ — গুন্নাহ ছাড়া মিশিয়ে পড়া", "en": "Idgham without Ghunnah — Merging Without Nasal Sound" }, "ar": "إِدْغَام بِلَا غُنَّة", "color": "gray", "letters": "ل ر", "desc": { "bn": "পরে {{ل}} বা {{ر}} এলে নূন **পুরোপুরি** মিশে যায়, কোনো গুন্নাহ থাকে না। পরের হরফ তাশদীদসহ পড়া হয়।", "en": "When followed by {{ل}} or {{ر}}, the noon merges **completely** with no ghunnah at all. The next letter is read with shaddah." },
          "how": { "bn": "নূনের কোনো চিহ্নই রাখবে না — সরাসরি দ্বিগুণ লাম বা দ্বিগুণ রা বলো।", "en": "Leave no trace of the noon — go straight to a doubled lam or a doubled ra." },
          "examples": [
            { "ar": "مِنْ رَبِّهِمْ", "hl": "نْ ر", "tr": { "bn": "মির রব্বিহিম", "en": "mir-rabbihim" } },
            { "ar": "هُدًى لِلْمُتَّقِينَ", "hl": "دًى ل", "tr": { "bn": "হুদাল লিলমুত্তাক্বীন", "en": "hudal-lil-muttaqeen" } },
            { "ar": "غَفُورٌ رَحِيمٌ", "hl": "رٌ ر", "tr": { "bn": "গাফূরুর রহীম", "en": "ghafoorur-raḥeem" } },
            { "ar": "وَلٰكِنْ لَا يَشْعُرُونَ", "hl": "نْ ل", "tr": { "bn": "ওয়ালা-কিল লা ইয়াশ‘উরূন", "en": "wa laakil-laa yash'uroon" } }
          ] },
        { "type": "tip", "kind": "tip", "title": { "bn": "মুসহাফ নিজেই ইশারা দেয়", "en": "The mushaf gives you hints" }, "bn": "আমাদের দেশের মুসহাফে ইযহারের নূনে জযম থাকে। ইদগামে নূনে জযম থাকে না, আর পরের হরফে তাশদীদ থাকে — যেমন {{مِنْ رَبِّهِمْ}} লেখা থাকে {{مِن رَّبِّهِمْ}}। ইকলাবে নূনের উপর ছোট্ট মীম থাকে। এই বইয়ে শেখার সুবিধার জন্য আমরা সব নূনে জযম দেখিয়েছি।", "en": "In the mushaf used in our region, an izhar noon carries a sukun. For idgham the noon has no sukun and the next letter carries a shaddah — {{مِنْ رَبِّهِمْ}} appears as {{مِن رَّبِّهِمْ}}. For iqlab a tiny meem sits on the noon. In this book we show the sukun on every noon to make learning easier." },
        { "type": "tip", "kind": "fun", "bn": "হাফস রিওয়ায়াতে দুটি জায়গায় নূনের পরে {{و}} থাকলেও ইদগাম হয় না, ইযহার হয়: {{يٰسٓ وَالْقُرْآنِ}} ও {{نٓ وَالْقَلَمِ}} — সূরার শুরুর বিচ্ছিন্ন হরফে।", "en": "In the Hafs reading there are two places where a noon is followed by {{و}} yet read with izhar, not idgham: {{يٰسٓ وَالْقُرْآنِ}} and {{نٓ وَالْقَلَمِ}} — in the disjointed letters at the start of those surahs." },
        { "type": "rule", "name": { "bn": "ইকলাব — নূনকে মীমে বদলানো", "en": "Iqlab — Turning Noon into Meem" }, "ar": "إِقْلَاب", "color": "blue", "letters": "ب", "desc": { "bn": "নূন সাকিন বা তানবীনের পর {{ب}} এলে নূন বদলে **মীম** হয়ে যায়, সাথে দুই হরকত গুন্নাহ।", "en": "When a noon sakinah or tanween is followed by {{ب}}, the noon changes into a **meem**, with a 2-count ghunnah." },
          "how": { "bn": "‘ন্‌’-এর জায়গায় ‘ম্‌’ বলো, ঠোঁট আলতো করে মেলাও (চেপে নয়), নাকে দুই হরকত গুন্নাহ রাখো, তারপর {{ب}}।", "en": "Say ‘m’ instead of ‘n’: close the lips gently (do not press), hum 2 counts through the nose, then say {{ب}}." },
          "examples": [
            { "ar": "مِنْ بَعْدِ", "hl": "نْ ب", "tr": { "bn": "মিমঁ বা‘দি", "en": "mim-ba'di" } },
            { "ar": "أَنْبِئُونِي", "hl": "نْب", "tr": { "bn": "আমঁবিঊনী", "en": "ambi'oonee" } },
            { "ar": "سَمِيعٌ بَصِيرٌ", "hl": "عٌ ب", "tr": { "bn": "সামী‘উমঁ বাছীর", "en": "samee'um-baṣeer" } },
            { "ar": "لَيُنْبَذَنَّ", "hl": "نْب", "tr": { "bn": "লাইয়ুমঁবাযান্না", "en": "layumbadhanna" } }
          ] },
        { "type": "rule", "name": { "bn": "ইখফা হাকীকী — লুকিয়ে পড়া", "en": "Ikhfa Haqiqi — Hiding the Noon" }, "ar": "إِخْفَاء حَقِيقِي", "color": "green", "letters": "ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك", "desc": { "bn": "বাকি ১৫টি হরফের কোনোটি পরে এলে নূন পুরো স্পষ্টও না, পুরো মিশেও না — মাঝামাঝি **লুকানো** অবস্থায়, দুই হরকত গুন্নাহসহ পড়া হয়।", "en": "Before any of the remaining 15 letters, the noon is neither fully clear nor fully merged — it is **hidden** in between, with a 2-count ghunnah." },
          "how": { "bn": "জিহ্বা নূনের জায়গায় শক্ত করে লাগাবে না; বরং পরের হরফের জায়গার দিকে তৈরি হয়ে যাও, নাকে দুই হরকত ‘ঁ’ সুর রাখো, তারপর হরফটি বলো।", "en": "Do not press the tongue onto noon's place; get ready for the next letter's position, hum ‘ng-like’ through the nose for 2 counts, then say the letter." },
          "examples": [
            { "ar": "أَنْتَ", "hl": "نْت", "tr": { "bn": "আঁনতা", "en": "anta (nasal)" } },
            { "ar": "يُنْفِقُونَ", "hl": "نْف", "tr": { "bn": "ইউঁনফিক্বূন", "en": "yunfiqoon (nasal)" } },
            { "ar": "مِنْ قَبْلِ", "hl": "نْ ق", "tr": { "bn": "মিঁন ক্বাবলি", "en": "min qabli (nasal)" } },
            { "ar": "مَنْ ذَا", "hl": "نْ ذ", "tr": { "bn": "মাঁন যা", "en": "man dhaa (nasal)" } },
            { "ar": "رِيحًا صَرْصَرًا", "hl": "حًا ص", "tr": { "bn": "রীহাঁন ছারছারা", "en": "reeḥan ṣarṣaraa (nasal)" } },
            { "ar": "يَنْطِقُ", "hl": "نْط", "tr": { "bn": "ইয়াঁনত্বিক্বু", "en": "yanṭiqu (nasal)" } }
          ] },
        { "type": "tip", "kind": "memory", "bn": "ইখফার ১৫টি হরফ একটি পুরনো আরবি পঙ্‌ক্তির প্রতিটি শব্দের প্রথম হরফে লুকানো: {{صِفْ ذَا ثَنَا كَمْ جَادَ شَخْصٌ قَدْ سَمَا دُمْ طَيِّبًا زِدْ فِي تُقًى ضَعْ ظَالِمَا}}। সহজ উপায়: ‘গলার নয়, {{يَرْمَلُونَ}}-এর নয়, {{ب}}-ও নয়? — তাহলে ইখফা!’", "en": "The 15 ikhfa letters hide in the first letter of each word of a classic Arabic line: {{صِفْ ذَا ثَنَا كَمْ جَادَ شَخْصٌ قَدْ سَمَا دُمْ طَيِّبًا زِدْ فِي تُقًى ضَعْ ظَالِمَا}}. Easy way: ‘Not a throat letter, not in {{يَرْمَلُونَ}}, not {{ب}}? — then it's Ikhfa!’" },
        { "type": "compare", "title": { "bn": "ইখফার গুন্নাহও মোটা-চিকন হয়", "en": "Ikhfa's ghunnah can be heavy or light" }, "items": [
          { "ar": "يَنْطِقُ", "label": { "bn": "মোটা গুন্নাহ", "en": "Heavy ghunnah" }, "desc": { "bn": "পরে মোটা হরফ {{ط}} — গুন্নাহও গাঢ়, ভরাট", "en": "A heavy letter {{ط}} follows — the hum is deep and full" } },
          { "ar": "أَنْتَ", "label": { "bn": "চিকন গুন্নাহ", "en": "Light ghunnah" }, "desc": { "bn": "পরে চিকন হরফ {{ت}} — গুন্নাহও হালকা", "en": "A light letter {{ت}} follows — the hum is light" } }
        ] },
        { "type": "practice", "bn": "প্রতিটি লাইনে একটি করে নিয়ম। আগে নিয়মটি বলো, তারপর পড়ো।", "en": "One rule per line. Name the rule first, then read.", "lines": [
          "مَنْ آمَنَ أَنْعَمْتَ مِنْ خَوْفٍ عَلِيمٌ حَكِيمٌ",
          "مَنْ يَقُولُ مِنْ مَاءٍ مِنْ وَالٍ خَيْرًا يَرَهُ",
          "مِنْ رَبِّهِمْ غَفُورٌ رَحِيمٌ هُدًى لِلْمُتَّقِينَ",
          "مِنْ بَعْدِ سَمِيعٌ بَصِيرٌ أَنْبِئُونِي",
          "أَنْتَ يُنْفِقُونَ مِنْ قَبْلِ يَنْطِقُ",
          "الدُّنْيَا بُنْيَانٌ قِنْوَانٌ صِنْوَانٌ"
        ] },
        { "type": "quiz", "items": [
          { "q": { "bn": "এখানে কোন নিয়ম?", "en": "Which rule applies here?" }, "ar": "مِنْ بَعْدِ", "options": [ { "bn": "ইযহার", "en": "Izhar" }, { "bn": "ইকলাব", "en": "Iqlab" }, { "bn": "ইখফা", "en": "Ikhfa" }, { "bn": "ইদগাম", "en": "Idgham" } ], "answer": 1 },
          { "q": { "bn": "এখানে কোন নিয়ম?", "en": "Which rule applies here?" }, "ar": "مَنْ آمَنَ", "options": [ { "bn": "ইযহার", "en": "Izhar" }, { "bn": "ইকলাব", "en": "Iqlab" }, { "bn": "ইখফা", "en": "Ikhfa" }, { "bn": "ইদগাম", "en": "Idgham" } ], "answer": 0, "explain": { "bn": "হামযা গলার হরফ।", "en": "Hamza is a throat letter." } },
          { "q": { "bn": "এখানে কোন নিয়ম?", "en": "Which rule applies here?" }, "ar": "مِنْ قَبْلِ", "options": [ { "bn": "ইযহার", "en": "Izhar" }, { "bn": "ইকলাব", "en": "Iqlab" }, { "bn": "ইখফা", "en": "Ikhfa" }, { "bn": "ইদগাম", "en": "Idgham" } ], "answer": 2 },
          { "q": { "bn": "{{غَفُورٌ رَحِيمٌ}}-এ কী হয়?", "en": "What happens in {{غَفُورٌ رَحِيمٌ}}?" }, "options": [ { "bn": "গুন্নাহসহ ইদগাম", "en": "Idgham with ghunnah" }, { "bn": "গুন্নাহ ছাড়া ইদগাম", "en": "Idgham without ghunnah" }, { "bn": "ইখফা", "en": "Ikhfa" } ], "answer": 1, "explain": { "bn": "{{ر}} ও {{ل}}-এ গুন্নাহ ছাড়া ইদগাম।", "en": "{{ر}} and {{ل}} take idgham without ghunnah." } },
          { "q": { "bn": "ইদগামের হরফ কোন শব্দে জমা?", "en": "Which word gathers the idgham letters?" }, "options": [ "يَرْمَلُونَ", "قُطْبُ جَدٍّ", "خُصَّ ضَغْطٍ قِظْ" ], "answer": 0 },
          { "q": { "bn": "{{الدُّنْيَا}} শব্দে নূন কীভাবে পড়বে?", "en": "How is the noon read in {{الدُّنْيَا}}?" }, "options": [ { "bn": "ইদগাম করে", "en": "With idgham" }, { "bn": "স্পষ্ট করে (ইযহার)", "en": "Clearly (izhar)" }, { "bn": "মীমে বদলে", "en": "Changed to meem" } ], "answer": 1, "explain": { "bn": "নূন ও {{ي}} একই শব্দে — তাই ইদগাম নয়।", "en": "Noon and {{ي}} are in the same word — so no idgham." } },
          { "q": { "bn": "ইখফার হরফ কয়টি?", "en": "How many ikhfa letters are there?" }, "options": [ "6", "1", "15", "17" ], "answer": 2 },
          { "q": { "bn": "তানবীনের পরে {{ي}} এলে কী হয়? যেমন {{خَيْرًا يَرَهُ}}", "en": "What happens when tanween is followed by {{ي}}, as in {{خَيْرًا يَرَهُ}}?" }, "options": [ { "bn": "গুন্নাহসহ ইদগাম", "en": "Idgham with ghunnah" }, { "bn": "ইযহার", "en": "Izhar" }, { "bn": "ইকলাব", "en": "Iqlab" } ], "answer": 0 }
        ] }
      ]
    },
    {
      "id": "tj-meem-sakinah",
      "icon": "مْ",
      "title": { "bn": "মীম সাকিন", "en": "Meem Sakinah" },
      "subtitle": { "bn": "ইখফা শাফাবী, ইদগাম শাফাবী ও ইযহার শাফাবী", "en": "Ikhfa shafawi, idgham shafawi and izhar shafawi" },
      "minutes": 12,
      "goals": [
        { "bn": "মীম সাকিনের তিনটি নিয়ম শিখব", "en": "Learn the three rules of meem sakinah" },
        { "bn": "{{و}} ও {{ف}}-এর আগে মীম স্পষ্ট রাখতে শিখব", "en": "Keep meem clear before {{و}} and {{ف}}" },
        { "bn": "সূরা ফীলে নিয়মগুলো খুঁজে বের করব", "en": "Spot the rules in Surah al-Fil" }
      ],
      "blocks": [
        { "type": "text", "bn": "নূনের পর এবার মীমের পালা! **মীম সাকিন** ({{مْ}}) ঠোঁট থেকে বের হয়, তাই এর নিয়মগুলোর নামের সাথে ‘শাফাবী’ ({{شَفَوِي}} — ঠোঁটের) শব্দটি যুক্ত। মাত্র তিনটি নিয়ম — নূনের চেয়েও সহজ।", "en": "After noon, it's meem's turn! **Meem sakinah** ({{مْ}}) comes from the lips, so its rules carry the word ‘shafawi’ ({{شَفَوِي}} — of the lips). Only three rules — even easier than noon." },
        { "type": "table", "head": [ { "bn": "পরের হরফ", "en": "Next letter" }, { "bn": "নিয়ম", "en": "Rule" }, { "bn": "রং", "en": "Colour" } ], "rows": [
          [ "ب", { "bn": "ইখফা শাফাবী — গুন্নাহসহ লুকানো", "en": "Ikhfa shafawi — hidden with ghunnah" }, { "bn": "সবুজ", "en": "Green" } ],
          [ "م", { "bn": "ইদগাম শাফাবী — মিশে এক মীম, গুন্নাহসহ", "en": "Idgham shafawi — merged into one meem, with ghunnah" }, { "bn": "ধূসর", "en": "Gray" } ],
          [ { "bn": "বাকি ২৬টি হরফ", "en": "The other 26 letters" }, { "bn": "ইযহার শাফাবী — স্পষ্ট", "en": "Izhar shafawi — clear" }, { "bn": "বেগুনি", "en": "Purple" } ]
        ] },
        { "type": "tip", "kind": "memory", "bn": "এক লাইনে: **‘বা এলে লুকাও, মীম এলে মেলাও, বাকি সবেতে স্পষ্ট দেখাও।’**", "en": "In one line: **‘Ba? Hide it. Meem? Merge it. Anything else? Make it clear.’**" },
        { "type": "rule", "name": { "bn": "ইখফা শাফাবী", "en": "Ikhfa Shafawi" }, "ar": "إِخْفَاء شَفَوِي", "color": "green", "letters": "ب", "desc": { "bn": "মীম সাকিনের পর {{ب}} এলে মীমকে হালকাভাবে লুকিয়ে দুই হরকত গুন্নাহসহ পড়া হয়।", "en": "When meem sakinah is followed by {{ب}}, the meem is gently hidden and read with a 2-count ghunnah." },
          "how": { "bn": "ঠোঁট আলতো করে মেলাও — চেপে ধরবে না। নাকে দুই হরকত সুর রেখে {{ب}}-এ যাও।", "en": "Close the lips softly — do not press. Hum through the nose for 2 counts, then go to {{ب}}." },
          "examples": [
            { "ar": "تَرْمِيهِمْ بِحِجَارَةٍ", "hl": "مْ ب", "tr": { "bn": "তারমীহিমঁ বিহিজা-রাতিন", "en": "tarmeehim biḥijaaratin" } },
            { "ar": "وَمَا هُمْ بِمُؤْمِنِينَ", "hl": "مْ ب", "tr": { "bn": "ওয়ামা হুমঁ বিমু'মিনীন", "en": "wa maa hum bimu'mineen" } },
            { "ar": "يَعْتَصِمْ بِاللّٰهِ", "hl": "مْ ب", "tr": { "bn": "ইয়া‘তাছিমঁ বিল্লা-হ", "en": "ya'taṣim billaah" } }
          ] },
        { "type": "rule", "name": { "bn": "ইদগাম শাফাবী (ইদগাম মিসলাইন)", "en": "Idgham Shafawi (Idgham Mithlayn)" }, "ar": "إِدْغَام شَفَوِي", "color": "gray", "letters": "م", "desc": { "bn": "মীম সাকিনের পর আরেকটি মীম এলে দুটো মিশে একটি তাশদীদওয়ালা মীম হয়, দুই হরকত গুন্নাহসহ। একই হরফ দুবার — তাই একে ‘মিসলাইন’ (দুই সমান) বলে।", "en": "When meem sakinah is followed by another meem, they merge into one meem with shaddah and a 2-count ghunnah. Two identical letters — hence ‘mithlayn’ (two alike)." },
          "how": { "bn": "ঠোঁট একবার মেলাও, নাকে দুই হরকত গুন্নাহ রাখো, তারপর ঠোঁট খুলে দ্বিতীয় মীমের হরকত বলো।", "en": "Close the lips once, hum 2 counts, then open them with the second meem's vowel." },
          "examples": [
            { "ar": "فِي قُلُوبِهِمْ مَرَضٌ", "hl": "مْ م", "tr": { "bn": "ফী ক্বুলূবিহিমঁ মারাদ্বুন", "en": "fee quloobihim-maraḍun" } },
            { "ar": "كَمْ مِنْ فِئَةٍ", "hl": "مْ م", "tr": { "bn": "কামঁ মিন ফিআতিন", "en": "kam-min fi'atin" } },
            { "ar": "لَهُمْ مَا يَشَاءُونَ", "hl": "مْ م", "tr": { "bn": "লাহুমঁ মা ইয়াশা-ঊন", "en": "lahum-maa yashaa'oon" } }
          ] },
        { "type": "rule", "name": { "bn": "ইযহার শাফাবী", "en": "Izhar Shafawi" }, "ar": "إِظْهَار شَفَوِي", "color": "purple", "letters": "ء ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل ن ه و ي", "desc": { "bn": "{{ب}} ও {{م}} ছাড়া অন্য যেকোনো হরফ পরে এলে মীম **স্পষ্ট** পড়া হয়, কোনো অতিরিক্ত গুন্নাহ নেই।", "en": "Before any letter other than {{ب}} and {{م}}, the meem is read **clearly**, with no extra ghunnah." },
          "how": { "bn": "ঠোঁট মিলিয়ে পরিষ্কার ‘ম্‌’ বলো, তারপর ঠোঁট খুলে পরের হরফে যাও। থামবে না, টানবে না।", "en": "Close the lips for a clean ‘m’, then open them for the next letter. No pause, no stretch." },
          "examples": [
            { "ar": "الْحَمْدُ", "hl": "مْد", "tr": { "bn": "আলহামদু", "en": "al-ḥamdu" } },
            { "ar": "أَنْعَمْتَ", "hl": "مْت", "tr": { "bn": "আন‘আমতা", "en": "an'amta" } },
            { "ar": "هُمْ فِيهَا خَالِدُونَ", "hl": "مْ ف", "tr": { "bn": "হুম ফীহা খা-লিদূন", "en": "hum feehaa khaalidoon" } },
            { "ar": "عَلَيْهِمْ وَلَا الضَّالِّينَ", "hl": "مْ و", "tr": { "bn": "‘আলাইহিম ওয়ালাদ্ দ্বা-ল্লীন", "en": "'alayhim wa laḍ-ḍaalleen" } },
            { "ar": "لَمْ يَلِدْ", "hl": "مْ ي", "tr": { "bn": "লাম ইয়ালিদ", "en": "lam yalid" } }
          ] },
        { "type": "tip", "kind": "warn", "bn": "**সবচেয়ে বেশি সাবধান {{و}} ও {{ف}}-এর আগে!** {{و}} মীমের মতোই ঠোঁট থেকে আসে, আর {{ف}} খুব কাছের। তাই অনেকে এখানে মীম লুকিয়ে বা গুন্নাহ করে ফেলে — এটা ভুল। {{عَلَيْهِمْ وَلَا}}-তে মীম পরিষ্কার শোনাতে হবে।", "en": "**Be most careful before {{و}} and {{ف}}!** {{و}} comes from the lips like meem, and {{ف}} is very close. Many people hide the meem or add ghunnah here — that is wrong. In {{عَلَيْهِمْ وَلَا}} the meem must be heard clearly." },
        { "type": "table", "title": { "bn": "সূরা ফীলে নিয়ম খোঁজো", "en": "Rule hunt in Surah al-Fil" }, "head": [ { "bn": "অংশ", "en": "Phrase" }, { "bn": "নিয়ম", "en": "Rule" } ], "rows": [
          [ "أَلَمْ تَرَ", { "bn": "ইযহার শাফাবী", "en": "Izhar shafawi" } ],
          [ "كَيْدَهُمْ فِي", { "bn": "ইযহার শাফাবী ({{ف}}-এর আগে!)", "en": "Izhar shafawi (before {{ف}}!)" } ],
          [ "طَيْرًا أَبَابِيلَ", { "bn": "ইযহার (তানবীন + হামযা)", "en": "Izhar (tanween + hamza)" } ],
          [ "تَرْمِيهِمْ بِحِجَارَةٍ", { "bn": "ইখফা শাফাবী", "en": "Ikhfa shafawi" } ],
          [ "بِحِجَارَةٍ مِنْ", { "bn": "গুন্নাহসহ ইদগাম (তানবীন + মীম)", "en": "Idgham with ghunnah (tanween + meem)" } ],
          [ "مِنْ سِجِّيلٍ", { "bn": "ইখফা (নূন + সীন)", "en": "Ikhfa (noon + seen)" } ],
          [ "كَعَصْفٍ مَأْكُولٍ", { "bn": "গুন্নাহসহ ইদগাম", "en": "Idgham with ghunnah" } ]
        ] },
        { "type": "practice", "bn": "সূরা ফীল পড়ো। প্রতিটি মীম সাকিন ও নূন সাকিনে থেমে নিয়মটি মনে মনে বলো।", "en": "Read Surah al-Fil. At every meem and noon sakinah, name the rule in your head.", "lines": [
          "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
          "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ",
          "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ",
          "تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ",
          "فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ"
        ] },
        { "type": "quiz", "items": [
          { "q": { "bn": "মীম সাকিনের নিয়ম কয়টি?", "en": "How many rules does meem sakinah have?" }, "options": [ "2", "3", "4" ], "answer": 1 },
          { "q": { "bn": "এখানে কোন নিয়ম?", "en": "Which rule applies here?" }, "ar": "تَرْمِيهِمْ بِحِجَارَةٍ", "options": [ { "bn": "ইখফা শাফাবী", "en": "Ikhfa shafawi" }, { "bn": "ইযহার শাফাবী", "en": "Izhar shafawi" }, { "bn": "ইকলাব", "en": "Iqlab" } ], "answer": 0 },
          { "q": { "bn": "এখানে কোন নিয়ম?", "en": "Which rule applies here?" }, "ar": "فِي قُلُوبِهِمْ مَرَضٌ", "options": [ { "bn": "ইযহার শাফাবী", "en": "Izhar shafawi" }, { "bn": "ইদগাম শাফাবী", "en": "Idgham shafawi" }, { "bn": "ইখফা শাফাবী", "en": "Ikhfa shafawi" } ], "answer": 1 },
          { "q": { "bn": "{{هُمْ فِيهَا}}-তে মীম কীভাবে পড়বে?", "en": "How is the meem read in {{هُمْ فِيهَا}}?" }, "options": [ { "bn": "লুকিয়ে, গুন্নাহসহ", "en": "Hidden, with ghunnah" }, { "bn": "পরিষ্কার, গুন্নাহ ছাড়া", "en": "Clearly, without ghunnah" }, { "bn": "ফা-এর সাথে মিশিয়ে", "en": "Merged into the fa" } ], "answer": 1, "explain": { "bn": "{{ف}}-এর আগে ইযহার শাফাবী — বিশেষভাবে সাবধান!", "en": "Before {{ف}} it is izhar shafawi — take extra care!" } },
          { "q": { "bn": "ইখফা শাফাবীতে ঠোঁট কেমন থাকে?", "en": "In ikhfa shafawi, what do the lips do?" }, "options": [ { "bn": "আলতো করে মেলানো", "en": "Closed gently" }, { "bn": "শক্ত করে চাপা", "en": "Pressed hard" }, { "bn": "পুরো খোলা", "en": "Wide open" } ], "answer": 0 },
          { "q": { "bn": "‘শাফাবী’ শব্দের অর্থ কী?", "en": "What does ‘shafawi’ mean?" }, "options": [ { "bn": "গলার", "en": "Of the throat" }, { "bn": "ঠোঁটের", "en": "Of the lips" }, { "bn": "নাকের", "en": "Of the nose" } ], "answer": 1 }
        ] }
      ]
    },
    {
      "id": "tj-ghunnah",
      "icon": "نّ",
      "title": { "bn": "গুন্নাহ — নাকের মধুর সুর", "en": "Ghunnah — The Nasal Hum" },
      "subtitle": { "bn": "তাশদীদওয়ালা নূন ও মীম, দুই হরকত এবং নাক-চাপা পরীক্ষা", "en": "Noon and meem with shaddah, two counts, and the nose-pinch test" },
      "minutes": 10,
      "goals": [
        { "bn": "গুন্নাহ কী এবং কোথা থেকে বের হয় বুঝব", "en": "Understand what ghunnah is and where it comes from" },
        { "bn": "{{نّ}} ও {{مّ}}-এ দুই হরকত গুন্নাহ করব", "en": "Hold a 2-count ghunnah on {{نّ}} and {{مّ}}" },
        { "bn": "নিজের গুন্নাহ নিজে পরীক্ষা করতে শিখব", "en": "Learn to test your own ghunnah" }
      ],
      "blocks": [
        { "type": "text", "bn": "**গুন্নাহ** ({{غُنَّة}}) হলো নাকের বাঁশি (খাইশূম) থেকে আসা মিষ্টি গুনগুন সুর। নূন ও মীমের মধ্যে এই সুর সবসময় একটু থাকে, কিন্তু যখন নূন বা মীমে **তাশদীদ** থাকে, তখন গুন্নাহ হয় পূর্ণ — **দুই হরকত** পরিমাণ।", "en": "**Ghunnah** ({{غُنَّة}}) is the sweet humming sound from the nasal passage (khayshum). Noon and meem always carry a little of it, but when noon or meem has a **shaddah**, the ghunnah is full — **two counts** long." },
        { "type": "rule", "name": { "bn": "গুন্নাহ মুশাদ্দাদ — তাশদীদওয়ালা নূন ও মীম", "en": "Ghunnah Mushaddadah — Noon and Meem with Shaddah" }, "ar": "غُنَّة مُشَدَّدَة", "color": "green", "letters": "نّ مّ", "desc": { "bn": "যেখানেই {{نّ}} বা {{مّ}} দেখবে, সেখানে দুই হরকত গুন্নাহ — শব্দের মাঝে হোক বা শেষে, মিলিয়ে পড়ো বা থামো।", "en": "Wherever you see {{نّ}} or {{مّ}}, hold a 2-count ghunnah — in the middle or end of a word, when joining or stopping." },
          "how": { "bn": "নূনের জন্য জিহ্বার আগা মাড়িতে, মীমের জন্য দুই ঠোঁট মিলিয়ে রাখো; আওয়াজ নাক দিয়ে দুই হরকত চলবে, তারপর পরের হরকতে ছেড়ে দাও।", "en": "For noon keep the tongue tip on the gum, for meem keep the lips together; let the sound flow through the nose for 2 counts, then release into the next vowel." },
          "examples": [
            { "ar": "إِنَّ", "hl": "نَّ", "tr": { "bn": "ইন্‌ঁনা", "en": "inna" } },
            { "ar": "ثُمَّ", "hl": "مَّ", "tr": { "bn": "ছুম্‌ঁমা", "en": "thumma" } },
            { "ar": "النَّاسِ", "hl": "نَّ", "tr": { "bn": "আন্‌ঁনা-স", "en": "an-naas" } },
            { "ar": "عَمَّ يَتَسَاءَلُونَ", "hl": "مَّ", "tr": { "bn": "‘আম্‌ঁমা ইয়াতাসা-আলূন", "en": "'amma yatasaa'aloon" } },
            { "ar": "فَأُمُّهُ هَاوِيَةٌ", "hl": "مُّ", "tr": { "bn": "ফাউম্‌ঁমুহূ হা-ওইয়াহ", "en": "fa ummuhoo haawiyah" } },
            { "ar": "الْجَنَّةَ", "hl": "نَّ", "tr": { "bn": "আলজান্‌ঁনাহ", "en": "al-jannah" } }
          ] },
        { "type": "text", "title": { "bn": "দুই হরকত কতক্ষণ?", "en": "How long is 2 counts?" }, "bn": "এক **হরকত** = একটি ছোট হরকত (যেমন {{بَ}}) বলতে যতটুকু সময় লাগে। স্বাভাবিক গতিতে একটি আঙুল ভাঁজ করতে যে সময় লাগে, তা-ই এক হরকত। তাই গুন্নাহ = দুটি আঙুল ভাঁজ করার সময়। আমাদের দেশে অনেকে বলেন ‘এক আলিফ’ — এক আলিফ = দুই হরকত।", "en": "One **count** (harakah) = the time it takes to say one short vowel (like {{بَ}}). Folding one finger at a normal pace takes about one count. So a ghunnah = the time to fold two fingers. In our region many teachers say ‘one alif’ — one alif = two counts." },
        { "type": "tip", "kind": "tip", "title": { "bn": "নাক-চাপা পরীক্ষা", "en": "The nose-pinch test" }, "bn": "{{إِنَّ}} বলতে বলতে গুন্নাহর সময় আঙুল দিয়ে নাক চেপে ধরো। আওয়াজ যদি **আটকে যায়** — অভিনন্দন, গুন্নাহ ঠিক নাক দিয়ে আসছে! আর যদি আওয়াজ বদলায় না, তার মানে তুমি গুন্নাহ করছ না।", "en": "Say {{إِنَّ}} and pinch your nose during the hum. If the sound **gets blocked** — congratulations, your ghunnah really comes through the nose! If the sound does not change, you are not making a ghunnah." },
        { "type": "table", "title": { "bn": "গুন্নাহ কখন পূর্ণ, কখন সামান্য", "en": "When ghunnah is full and when it is slight" }, "head": [ { "bn": "অবস্থা", "en": "Situation" }, { "bn": "উদাহরণ", "en": "Example" }, { "bn": "গুন্নাহ", "en": "Ghunnah" } ], "rows": [
          [ { "bn": "তাশদীদওয়ালা নূন/মীম", "en": "Noon/meem with shaddah" }, "إِنَّ ثُمَّ", { "bn": "পূর্ণ — ২ হরকত", "en": "Full — 2 counts" } ],
          [ { "bn": "গুন্নাহসহ ইদগাম ও ইদগাম শাফাবী", "en": "Idgham with ghunnah & idgham shafawi" }, "مَنْ يَقُولُ", { "bn": "পূর্ণ — ২ হরকত", "en": "Full — 2 counts" } ],
          [ { "bn": "ইখফা, ইকলাব, ইখফা শাফাবী", "en": "Ikhfa, iqlab, ikhfa shafawi" }, "أَنْتَ مِنْ بَعْدِ", { "bn": "পূর্ণ — ২ হরকত", "en": "Full — 2 counts" } ],
          [ { "bn": "ইযহারের নূন/মীম সাকিন", "en": "Noon/meem sakinah with izhar" }, "مِنْ خَوْفٍ", { "bn": "সামান্য — টান নেই", "en": "Slight — no holding" } ],
          [ { "bn": "হরকতওয়ালা নূন/মীম", "en": "Noon/meem with a vowel" }, "نَ مَ", { "bn": "সামান্য — টান নেই", "en": "Slight — no holding" } ]
        ] },
        { "type": "compare", "title": { "bn": "তাশদীদ থাকলেই কি গুন্নাহ?", "en": "Does every shaddah get ghunnah?" }, "items": [
          { "ar": "إِنَّ", "label": { "bn": "হ্যাঁ — নূনে তাশদীদ", "en": "Yes — shaddah on noon" }, "desc": { "bn": "দ্বিগুণ নূন + দুই হরকত নাকি সুর", "en": "Doubled noon + 2-count nasal hum" } },
          { "ar": "الَّذِينَ", "label": { "bn": "না — লামে তাশদীদ", "en": "No — shaddah on lam" }, "desc": { "bn": "শুধু লাম দ্বিগুণ হবে, নাকে কোনো সুর নয়", "en": "Just a doubled lam, no nasal hum" } }
        ] },
        { "type": "tip", "kind": "memory", "bn": "**তাশদীদ + ন বা ম = নাকে দুই হরকতের গান।** অন্য হরফে তাশদীদ = শুধু দ্বিগুণ, গান নেই।", "en": "**Shaddah + noon or meem = a 2-count song in the nose.** Shaddah on any other letter = just doubled, no song." },
        { "type": "compare", "title": { "bn": "বাংলাভাষীদের সাধারণ ভুল", "en": "A common slip for Bangla speakers" }, "items": [
          { "ar": "ثُمَّ", "label": { "bn": "সঠিক", "en": "Correct" }, "desc": { "bn": "‘ছুম্‌ঁমা’ — মীম দ্বিগুণ, গুন্নাহসহ", "en": "‘thum-ma’ — doubled meem with ghunnah" } },
          { "ar": "ثُمَ", "label": { "bn": "ভুল", "en": "Wrong" }, "desc": { "bn": "‘সুমা’ — তাশদীদ ও গুন্নাহ দুটোই হারিয়ে গেছে", "en": "‘suma’ — both the shaddah and the ghunnah are lost" } }
        ] },
        { "type": "tip", "kind": "warn", "bn": "গুন্নাহ দুই হরকতের বেশি টানবে না, আর গুন্নাহর আগের-পরের হরকতকেও নাকি করবে না। ‘ইন্না’ বলতে গিয়ে ‘ইঁইঁন্না’ নয়!", "en": "Do not stretch the ghunnah beyond 2 counts, and do not nasalise the vowels around it. Not ‘iiin-na’!" },
        { "type": "practice", "bn": "সূরা নাস পড়ো — প্রতিটি {{نَّ}}-তে দুই আঙুল ভাঁজ করো।", "en": "Read Surah an-Nas — fold two fingers on every {{نَّ}}.", "lines": [
          "إِنَّ ثُمَّ عَمَّ لَمَّا جَنَّةٍ",
          "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
          "مَلِكِ النَّاسِ",
          "إِلٰهِ النَّاسِ",
          "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
          "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
          "مِنَ الْجِنَّةِ وَالنَّاسِ"
        ] },
        { "type": "quiz", "items": [
          { "q": { "bn": "গুন্নাহ কোথা থেকে বের হয়?", "en": "Where does ghunnah come from?" }, "options": [ { "bn": "গলা", "en": "The throat" }, { "bn": "নাকের বাঁশি (খাইশূম)", "en": "The nasal passage (khayshum)" }, { "bn": "ঠোঁট", "en": "The lips" } ], "answer": 1 },
          { "q": { "bn": "তাশদীদওয়ালা নূনে গুন্নাহ কতক্ষণ?", "en": "How long is the ghunnah on a noon with shaddah?" }, "options": [ { "bn": "১ হরকত", "en": "1 count" }, { "bn": "২ হরকত", "en": "2 counts" }, { "bn": "৬ হরকত", "en": "6 counts" } ], "answer": 1 },
          { "q": { "bn": "কোন শব্দে পূর্ণ গুন্নাহ আছে?", "en": "Which word has a full ghunnah?" }, "options": [ "الَّذِينَ", "ثُمَّ", "رَبِّ" ], "answer": 1, "explain": { "bn": "{{ثُمَّ}}-এ তাশদীদওয়ালা মীম।", "en": "{{ثُمَّ}} has a meem with shaddah." } },
          { "q": { "bn": "নাক চেপে ধরলে গুন্নাহর আওয়াজ কী হওয়া উচিত?", "en": "When you pinch your nose, what should happen to the ghunnah?" }, "options": [ { "bn": "আটকে যাবে", "en": "It gets blocked" }, { "bn": "কোনো পরিবর্তন হবে না", "en": "Nothing changes" }, { "bn": "আরও জোরে হবে", "en": "It gets louder" } ], "answer": 0 },
          { "q": { "bn": "এক আলিফ সমান কত হরকত?", "en": "One ‘alif’ equals how many counts?" }, "options": [ "1", "2", "4" ], "answer": 1 },
          { "q": { "bn": "{{مِنْ خَوْفٍ}}-এর নূনে গুন্নাহ কেমন?", "en": "How is the ghunnah on the noon in {{مِنْ خَوْفٍ}}?" }, "options": [ { "bn": "পূর্ণ, ২ হরকত", "en": "Full, 2 counts" }, { "bn": "সামান্য, টান নেই", "en": "Slight, not held" }, { "bn": "মীমে বদলে যায়", "en": "Turns into meem" } ], "answer": 1, "explain": { "bn": "{{خ}} গলার হরফ — ইযহার।", "en": "{{خ}} is a throat letter — izhar." } }
        ] }
      ]
    },
    {
      "id": "tj-qalqalah",
      "icon": "قْ",
      "title": { "bn": "কলকলা — প্রতিধ্বনির হরফ", "en": "Qalqalah — The Echoing Letters" },
      "subtitle": { "bn": "{{قُطْبُ جَدٍّ}}-এর পাঁচ হরফ, ছোট ও বড় কলকলা", "en": "The five letters of {{قُطْبُ جَدٍّ}}, minor and major qalqalah" },
      "minutes": 10,
      "goals": [
        { "bn": "কলকলার ৫টি হরফ মুখস্থ করব", "en": "Memorise the 5 qalqalah letters" },
        { "bn": "ছোট (সুগরা) ও বড় (কুবরা) কলকলার পার্থক্য বুঝব", "en": "Tell minor (sughra) from major (kubra) qalqalah" },
        { "bn": "হরকত যোগ না করে প্রতিধ্বনি দিতে শিখব", "en": "Make the echo without adding a vowel" }
      ],
      "blocks": [
        { "type": "text", "bn": "কিছু হরফ সাকিন হলে মুখে আটকে গিয়ে প্রায় হারিয়ে যায়। তাই এদের একটু **ঝাঁকুনি / প্রতিধ্বনি** দিয়ে পড়তে হয় — যেন বল মাটিতে পড়ে একটু লাফিয়ে ওঠে। একে বলে **কলকলা** ({{قَلْقَلَة}})।", "en": "Some letters, when they have sukun, get trapped in the mouth and almost disappear. So we give them a little **bounce / echo** — like a ball that hits the ground and springs up slightly. This is called **qalqalah** ({{قَلْقَلَة}})." },
        { "type": "letters", "title": { "bn": "কলকলার ৫টি হরফ", "en": "The 5 qalqalah letters" }, "items": [ "qaf", "tta", "ba", "jim", "dal" ] },
        { "type": "tip", "kind": "memory", "bn": "পাঁচটি হরফ এক শব্দজোড়ায়: {{قُطْبُ جَدٍّ}} (ক্বুত্বুবু জাদ্দিন)। বাংলায় মনে রাখো: **‘কলকলা = বল লাফানো’**।", "en": "All five in one phrase: {{قُطْبُ جَدٍّ}} (quṭbu jaddin). Picture it: **‘qalqalah = a bouncing ball’**." },
        { "type": "tip", "kind": "fun", "bn": "কেন এই পাঁচটি? এদের উচ্চারণে বাতাসও আটকে যায়, আওয়াজও আটকে যায়। সাকিন অবস্থায় প্রতিধ্বনি না দিলে এরা শোনাই যেত না!", "en": "Why these five? When you say them, both the air and the voice are blocked. With sukun and no echo, you would hardly hear them at all!" },
        { "type": "rule", "name": { "bn": "কলকলা সুগরা — ছোট কলকলা", "en": "Qalqalah Sughra — Minor Echo" }, "ar": "قَلْقَلَة صُغْرٰى", "color": "orange", "letters": "ق ط ب ج د", "desc": { "bn": "হরফটি শব্দের মাঝে সাকিন, অথবা শব্দের শেষে সাকিন কিন্তু তুমি থামছ না — তখন হালকা প্রতিধ্বনি।", "en": "The letter has sukun in the middle of a word, or at the end of a word while you keep reading — a light echo." },
          "how": { "bn": "হরফটি তার মাখরাজে আটকাও, তারপর হালকা ঝটকায় ছেড়ে দাও — ছোট্ট একটি প্রতিধ্বনি, সাথে সাথে পরের হরফ।", "en": "Close the letter at its makhraj, then release it with a light snap — a tiny echo, straight into the next letter." },
          "examples": [
            { "ar": "خَلَقْنَا", "hl": "قْ", "tr": { "bn": "খালাক্ব্‌না", "en": "khalaqnaa" } },
            { "ar": "يَجْعَلُونَ", "hl": "جْ", "tr": { "bn": "ইয়াজ্‌‘আলূন", "en": "yaj'aloon" } },
            { "ar": "قَدْ أَفْلَحَ", "hl": "دْ", "tr": { "bn": "ক্বাদ্‌ আফলাহা", "en": "qad aflaḥa" } },
            { "ar": "أَطْعَمَهُمْ", "hl": "طْ", "tr": { "bn": "আত্ব্‌‘আমাহুম", "en": "aṭ'amahum" } },
            { "ar": "سُبْحَانَ", "hl": "بْ", "tr": { "bn": "সুব্‌হা-না", "en": "subḥaana" } }
          ] },
        { "type": "rule", "name": { "bn": "কলকলা কুবরা — বড় কলকলা", "en": "Qalqalah Kubra — Major Echo" }, "ar": "قَلْقَلَة كُبْرٰى", "color": "orange", "letters": "ق ط ب ج د", "desc": { "bn": "শব্দের শেষে কলকলার হরফে **থামলে** হরফটি সাকিন হয়, আর প্রতিধ্বনি হয় আরও স্পষ্ট। হরফে তাশদীদ থাকলে (যেমন {{وَتَبَّ}}) প্রতিধ্বনি সবচেয়ে জোরালো।", "en": "When you **stop** on a qalqalah letter at the end of a word, it becomes sakin and the echo is stronger. If the letter has shaddah (like {{وَتَبَّ}}), the echo is the strongest of all." },
          "how": { "bn": "থামার সময় শেষ হরফটি স্পষ্ট লাফিয়ে ছাড়ো — কিন্তু কোনো যবর/যের/পেশ যোগ করবে না।", "en": "As you stop, release the last letter with a clear bounce — but add no fatha, kasra or damma." },
          "examples": [
            { "ar": "الْفَلَقِ", "hl": "قِ", "tr": { "bn": "আলফালাক্ব্‌", "en": "al-falaq" } },
            { "ar": "أَحَدٌ", "hl": "دٌ", "tr": { "bn": "আহাদ্‌", "en": "aḥad" } },
            { "ar": "مُحِيطٌ", "hl": "طٌ", "tr": { "bn": "মুহীত্ব্‌", "en": "muḥeeṭ" } },
            { "ar": "الْبُرُوجِ", "hl": "جِ", "tr": { "bn": "আলবুরূজ্‌", "en": "al-burooj" } },
            { "ar": "وَتَبَّ", "hl": "بَّ", "tr": { "bn": "ওয়াতাব্ব্‌", "en": "wa tabb" } }
          ] },
        { "type": "compare", "title": { "bn": "থামার সময় {{أَحَدٌ}} কীভাবে?", "en": "Stopping on {{أَحَدٌ}} — how?" }, "items": [
          { "ar": "أَحَدْ", "label": { "bn": "সঠিক", "en": "Correct" }, "desc": { "bn": "‘আহাদ্‌’ — দাল-এ ছোট্ট লাফ, কোনো স্বর নেই", "en": "‘aḥad’ — a small bounce on dal, no vowel" } },
          { "ar": "أَحَدَا", "label": { "bn": "ভুল — স্বর যোগ", "en": "Wrong — vowel added" }, "desc": { "bn": "‘আহাদা’ বা ‘আহাদে’ — প্রতিধ্বনিকে পুরো হরকত বানিয়ে ফেলা", "en": "‘aḥada’ or ‘aḥade’ — turning the echo into a full vowel" } },
          { "ar": "أَحَدْ", "label": { "bn": "ভুল — গিলে ফেলা", "en": "Wrong — swallowed" }, "desc": { "bn": "দাল আটকে রেখে ছাড়া হয়নি — শেষটা শোনাই যায় না", "en": "Dal is held and never released — the ending is lost" } }
        ] },
        { "type": "tip", "kind": "fun", "bn": "সূরা ফালাকের প্রতিটি আয়াতের শেষ হরফ কলকলার হরফ: {{الْفَلَقِ}}, {{خَلَقَ}}, {{وَقَبَ}}, {{الْعُقَدِ}}, {{حَسَدَ}}। আর সূরা ইখলাসের চারটি আয়াতই শেষ হয় {{د}} দিয়ে! থামার সময় প্রতিটিতে বড় কলকলা।", "en": "Every ayah of Surah al-Falaq ends in a qalqalah letter: {{الْفَلَقِ}}, {{خَلَقَ}}, {{وَقَبَ}}, {{الْعُقَدِ}}, {{حَسَدَ}}. And all four ayahs of Surah al-Ikhlas end in {{د}}! Each stop gets a major qalqalah." },
        { "type": "ayah", "ref": "113:1", "ar": "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", "words": [ { "ar": "قُلْ", "bn": "বলো", "en": "say" }, { "ar": "أَعُوذُ", "bn": "আমি আশ্রয় চাই", "en": "I seek refuge" }, { "ar": "بِرَبِّ", "bn": "রবের কাছে", "en": "in the Lord of" }, { "ar": "الْفَلَقِ", "bn": "প্রভাতের", "en": "the daybreak" } ], "tr": { "bn": "ক্বুল আ‘ঊযু বিরব্বিল ফালাক্ব্‌", "en": "qul a'oodhu birabbil-falaq" }, "mean": { "bn": "বলো, আমি আশ্রয় চাই প্রভাতের রবের কাছে।", "en": "Say: I seek refuge in the Lord of the daybreak." } },
        { "type": "practice", "bn": "সূরা ফালাক ও ইখলাস পড়ো। প্রতিটি আয়াতের শেষে থেমে বড় কলকলা দাও।", "en": "Read Surahs al-Falaq and al-Ikhlas. Stop at the end of each ayah with a major qalqalah.", "lines": [
          "أَقْ أَطْ أَبْ أَجْ أَدْ",
          "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
          "مِنْ شَرِّ مَا خَلَقَ",
          "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ",
          "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
          "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
          "قُلْ هُوَ اللّٰهُ أَحَدٌ اللّٰهُ الصَّمَدُ",
          "لَمْ يَلِدْ وَلَمْ يُولَدْ"
        ] },
        { "type": "quiz", "items": [
          { "q": { "bn": "কোনটি কলকলার হরফ নয়?", "en": "Which is NOT a qalqalah letter?" }, "options": [ "ق", "ط", "ك", "د" ], "answer": 2 },
          { "q": { "bn": "কলকলা কখন হয়?", "en": "When does qalqalah happen?" }, "options": [ { "bn": "হরফে যবর থাকলে", "en": "When the letter has fatha" }, { "bn": "হরফ সাকিন হলে (বা থামলে)", "en": "When the letter has sukun (or at a stop)" }, { "bn": "হরফে তানবীন থাকলে", "en": "When the letter has tanween" } ], "answer": 1 },
          { "q": { "bn": "{{قَدْ أَفْلَحَ}}-এ কোন কলকলা?", "en": "Which qalqalah is in {{قَدْ أَفْلَحَ}}?" }, "options": [ { "bn": "সুগরা (ছোট)", "en": "Sughra (minor)" }, { "bn": "কুবরা (বড়)", "en": "Kubra (major)" }, { "bn": "কলকলা নেই", "en": "No qalqalah" } ], "answer": 0, "explain": { "bn": "দাল সাকিন, কিন্তু আমরা থামছি না।", "en": "Dal has sukun, but we are not stopping." } },
          { "q": { "bn": "{{الْفَلَقِ}}-এ থামলে কী হবে?", "en": "What happens when you stop on {{الْفَلَقِ}}?" }, "options": [ { "bn": "বড় কলকলা", "en": "Major qalqalah" }, { "bn": "গুন্নাহ", "en": "Ghunnah" }, { "bn": "ছয় হরকত মাদ্দ", "en": "A 6-count madd" } ], "answer": 0 },
          { "q": { "bn": "কলকলার সবচেয়ে জোরালো রূপ কোনটিতে?", "en": "Where is qalqalah strongest?" }, "options": [ "يَجْعَلُونَ", "أَحَدٌ", "وَتَبَّ" ], "answer": 2, "explain": { "bn": "থামার সময় তাশদীদওয়ালা কলকলার হরফ।", "en": "A qalqalah letter with shaddah at a stop." } },
          { "q": { "bn": "কলকলা করার সময় কোন ভুলটি সবচেয়ে বেশি হয়?", "en": "What is the most common qalqalah mistake?" }, "options": [ { "bn": "শেষে যবর/যের যোগ করে ফেলা", "en": "Adding a fatha/kasra at the end" }, { "bn": "গুন্নাহ না করা", "en": "Skipping ghunnah" }, { "bn": "রা মোটা করা", "en": "Making ra heavy" } ], "answer": 0 }
        ] }
      ]
    },
    {
      "id": "tj-madd",
      "icon": "ـٓا",
      "title": { "bn": "মাদ্দ — টেনে পড়ার নিয়ম", "en": "Madd — The Rules of Stretching" },
      "subtitle": { "bn": "২, ৪–৫ নাকি ৬ হরকত? মাদ্দের প্রকারভেদ", "en": "2, 4–5 or 6 counts? The types of madd" },
      "minutes": 20,
      "goals": [
        { "bn": "মাদ্দের হরফ ও লীনের হরফ চিনব", "en": "Recognise the madd letters and the leen letters" },
        { "bn": "ছয় ধরনের মাদ্দ ও তাদের দৈর্ঘ্য জানব", "en": "Learn six types of madd and their lengths" },
        { "bn": "হরকত গুনে সমান মাপে টানতে শিখব", "en": "Stretch evenly by counting" }
      ],
      "blocks": [
        { "type": "text", "bn": "**মাদ্দ** ({{مَدّ}}) মানে টেনে লম্বা করা। আরবিতে তিনটি **মাদ্দের হরফ**: যবরের পর {{ا}}, পেশের পর সাকিন {{و}}, যেরের পর সাকিন {{ي}}। আর যবরের পর সাকিন {{و}} বা {{ي}}-কে বলে **লীনের হরফ** (নরম হরফ) — যেমন {{خَوْفٍ}}, {{بَيْتِ}}।", "en": "**Madd** ({{مَدّ}}) means stretching. Arabic has three **madd letters**: {{ا}} after fatha, sakin {{و}} after damma, and sakin {{ي}} after kasra. A sakin {{و}} or {{ي}} after fatha is called a **leen letter** (soft letter) — as in {{خَوْفٍ}}, {{بَيْتِ}}." },
        { "type": "text", "bn": "মাদ্দ কতটা লম্বা হবে তা ঠিক করে মাদ্দের হরফের **পরে কী আছে**: কিছু না থাকলে ২ হরকত; পরে **হামযা** থাকলে ৪–৫; পরে **সুকুন** থাকলে ৬ (স্থায়ী) বা ২/৪/৬ (থামার কারণে)।", "en": "The length of a madd depends on **what comes after** the madd letter: nothing special → 2 counts; a **hamza** → 4–5; a **sukun** → 6 (permanent) or 2/4/6 (caused by stopping)." },
        { "type": "table", "title": { "bn": "মাদ্দের মানচিত্র", "en": "The madd map" }, "head": [ { "bn": "মাদ্দ", "en": "Madd" }, { "bn": "কারণ", "en": "Cause" }, { "bn": "উদাহরণ", "en": "Example" }, { "bn": "হরকত", "en": "Counts" } ], "rows": [
          [ { "bn": "তবঈ (স্বাভাবিক)", "en": "Tabee'i (natural)" }, { "bn": "পরে হামযা বা সুকুন নেই", "en": "No hamza or sukun after" }, "قَالَ قِيلَ يَقُولُ", { "bn": "২ (১ আলিফ)", "en": "2 (1 alif)" } ],
          [ { "bn": "মুত্তাসিল (ওয়াজিব)", "en": "Muttasil (obligatory)" }, { "bn": "একই শব্দে পরে হামযা", "en": "Hamza after it in the same word" }, "جَاءَ السَّمَاءِ", { "bn": "৪–৫", "en": "4–5" } ],
          [ { "bn": "মুনফাসিল (জায়েয)", "en": "Munfasil (permissible)" }, { "bn": "শব্দের শেষে মাদ্দ, পরের শব্দের শুরুতে হামযা", "en": "Madd ends a word, hamza starts the next" }, "يَا أَيُّهَا", { "bn": "৪–৫", "en": "4–5" } ],
          [ { "bn": "লাযিম (আবশ্যিক)", "en": "Lazim (necessary)" }, { "bn": "পরে স্থায়ী সুকুন বা তাশদীদ", "en": "Permanent sukun or shaddah after" }, "الضَّالِّينَ الٓمٓ", { "bn": "৬ (৩ আলিফ)", "en": "6 (3 alif)" } ],
          [ { "bn": "আরিদ লিস-সুকুন", "en": "'Arid lis-sukun" }, { "bn": "থামার কারণে শেষ হরফ সাকিন", "en": "Last letter made sakin by stopping" }, "نَسْتَعِينُ", { "bn": "২, ৪ বা ৬", "en": "2, 4 or 6" } ],
          [ { "bn": "লীন", "en": "Leen" }, { "bn": "লীনের হরফের পর থামা", "en": "Stopping after a leen letter" }, "خَوْفٍ الْبَيْتِ", { "bn": "২, ৪ বা ৬ (শুধু থামলে)", "en": "2, 4 or 6 (only at a stop)" } ]
        ] },
        { "type": "tip", "kind": "memory", "bn": "সহজ মাপ: **কিছু নেই → ২, হামযা → ৪–৫, সুকুন → ৬।** আর এক আলিফ = দুই হরকত, তাই ৬ হরকত = ‘তিন আলিফ’।", "en": "Quick measure: **nothing → 2, hamza → 4–5, sukun → 6.** And one alif = two counts, so 6 counts = ‘three alifs’." },
        { "type": "rule", "name": { "bn": "মাদ্দ তবঈ — স্বাভাবিক মাদ্দ", "en": "Madd Tabee'i — Natural Madd" }, "ar": "مَدّ طَبِيعِي", "color": "red", "letters": "ا و ي", "desc": { "bn": "মাদ্দের হরফের পরে হামযা বা সুকুন নেই — শুধু ২ হরকত। খাড়া যবরও ({{ـٰ}}) এই মাদ্দ, যেমন {{الرَّحْمٰنِ}}।", "en": "No hamza or sukun after the madd letter — just 2 counts. A standing fatha ({{ـٰ}}) is also this madd, as in {{الرَّحْمٰنِ}}." },
          "how": { "bn": "ঠিক দুই হরকত — এর কম হলে হরফ হারিয়ে যায় (লাহনে জলী!), বেশি হলে টান অসুন্দর।", "en": "Exactly 2 counts — shorter and the letter disappears (a clear mistake!), longer and it sounds unnatural." },
          "examples": [
            { "ar": "قَالَ", "hl": "قَا", "tr": { "bn": "ক্বা-লা", "en": "qaala" } },
            { "ar": "قِيلَ", "hl": "قِي", "tr": { "bn": "ক্বী-লা", "en": "qeela" } },
            { "ar": "يَقُولُ", "hl": "قُو", "tr": { "bn": "ইয়াক্বূ-লু", "en": "yaqoolu" } },
            { "ar": "الرَّحْمٰنِ", "hl": "مٰ", "tr": { "bn": "আররহমা-নি", "en": "ar-raḥmaani" } }
          ] },
        { "type": "rule", "name": { "bn": "মাদ্দ মুত্তাসিল — যুক্ত মাদ্দ", "en": "Madd Muttasil — Connected Madd" }, "ar": "مَدّ مُتَّصِل", "color": "red", "desc": { "bn": "মাদ্দের হরফ আর হামযা **একই শব্দে**। সব কারীর মতেই এটা লম্বা করা ওয়াজিব — হাফসে ৪ বা ৫ হরকত।", "en": "The madd letter and hamza are in the **same word**. All reciters lengthen it, so it is called obligatory — 4 or 5 counts in Hafs." },
          "how": { "bn": "হামযার আগে মাদ্দ ৪–৫ হরকত টানো, তারপর হামযা পরিষ্কার উচ্চারণ করো।", "en": "Stretch 4–5 counts before the hamza, then pronounce the hamza cleanly." },
          "examples": [
            { "ar": "جَاءَ", "hl": "جَاء", "tr": { "bn": "জা----আ", "en": "jaaaa'a" } },
            { "ar": "السَّمَاءِ", "hl": "مَاء", "tr": { "bn": "আসসামা----ই", "en": "as-samaaaa'i" } },
            { "ar": "سُوءَ", "hl": "سُوء", "tr": { "bn": "সূ----আ", "en": "soooo'a" } },
            { "ar": "وَجِيءَ", "hl": "جِيء", "tr": { "bn": "ওয়াজী----আ", "en": "wa jeeee'a" } }
          ] },
        { "type": "rule", "name": { "bn": "মাদ্দ মুনফাসিল — বিচ্ছিন্ন মাদ্দ", "en": "Madd Munfasil — Separated Madd" }, "ar": "مَدّ مُنْفَصِل", "color": "red", "desc": { "bn": "মাদ্দের হরফ এক শব্দের **শেষে**, হামযা পরের শব্দের **শুরুতে**। আমাদের দেশে প্রচলিত হাফস তিলাওয়াতে ৪ বা ৫ হরকত।", "en": "The madd letter **ends** one word and the hamza **starts** the next. In the Hafs recitation common in our region: 4 or 5 counts." },
          "how": { "bn": "দুই শব্দ মিলিয়ে পড়ার সময় টানো; প্রথম শব্দে থামলে এটা সাধারণ ২ হরকত হয়ে যায়।", "en": "Stretch it when joining the two words; if you stop on the first word it becomes a normal 2-count madd." },
          "examples": [
            { "ar": "يَا أَيُّهَا", "hl": "يَا أَ", "tr": { "bn": "ইয়া----আইয়ুহা", "en": "yaaaa ayyuhaa" } },
            { "ar": "إِنَّا أَعْطَيْنَاكَ", "hl": "نَّا أَ", "tr": { "bn": "ইন্না----আ‘ত্বাইনা-কা", "en": "innaaaa a'ṭaynaaka" } },
            { "ar": "قُوا أَنْفُسَكُمْ", "hl": "قُوا أَ", "tr": { "bn": "ক্বূ----আনফুসাকুম", "en": "qoooo anfusakum" } },
            { "ar": "وَفِي أَنْفُسِكُمْ", "hl": "فِي أَ", "tr": { "bn": "ওয়াফী----আনফুসিকুম", "en": "wa feeee anfusikum" } }
          ] },
        { "type": "tip", "kind": "tip", "bn": "মুসহাফে মাদ্দের হরফের উপর ঢেউ-চিহ্ন ({{ـٓ}}) মানে ‘দুই হরকতের বেশি টানো’। যেমন {{جَآءَ}}, {{يٰٓأَيُّهَا}}। চিহ্ন দেখলেই সতর্ক হও!", "en": "In the mushaf, a wavy sign ({{ـٓ}}) over a madd letter means ‘stretch more than 2 counts’. For example {{جَآءَ}}, {{يٰٓأَيُّهَا}}. When you see it, get ready!" },
        { "type": "rule", "name": { "bn": "মাদ্দ লাযিম — আবশ্যিক মাদ্দ", "en": "Madd Lazim — Necessary Madd" }, "ar": "مَدّ لَازِم", "color": "red", "desc": { "bn": "মাদ্দের হরফের পরে **স্থায়ী** সুকুন বা তাশদীদ — মিলিয়ে পড়ো বা থামো, সবসময় থাকে। দৈর্ঘ্য পুরো ৬ হরকত। কিছু সূরার শুরুর বিচ্ছিন্ন হরফেও (যেমন {{الٓمٓ}}) এই মাদ্দ হয়।", "en": "A **permanent** sukun or shaddah follows the madd letter — it is there whether you join or stop. Length: a full 6 counts. It also occurs in the disjointed letters at the start of some surahs (like {{الٓمٓ}})." },
          "how": { "bn": "তিন আলিফ — ছয়টি আঙুল গুনে টানো, তারপর তাশদীদওয়ালা হরফে চাপ দাও।", "en": "Three alifs — count six fingers, then press into the doubled letter." },
          "examples": [
            { "ar": "الضَّالِّينَ", "hl": "ضَّا", "tr": { "bn": "আদ্দ্বা------ল্লীন", "en": "aḍ-ḍaaaaaal-leen" } },
            { "ar": "الطَّامَّةُ", "hl": "طَّا", "tr": { "bn": "আত্তা------ম্মাহ", "en": "aṭ-ṭaaaaaam-mah" } },
            { "ar": "الْحَاقَّةُ", "hl": "حَا", "tr": { "bn": "আলহা------ক্বক্বাহ", "en": "al-ḥaaaaaaq-qah" } },
            { "ar": "الٓمٓ", "hl": "لٓ", "tr": { "bn": "আলিফ লা------ম মী------ম", "en": "alif laaaaaam meeeeeem" } }
          ] },
        { "type": "rule", "name": { "bn": "মাদ্দ আরিদ লিস-সুকুন — থামার মাদ্দ", "en": "Madd 'Arid lis-Sukun — Madd at a Stop" }, "ar": "مَدّ عَارِض لِلسُّكُون", "color": "red", "desc": { "bn": "শেষ হরফের আগে মাদ্দের হরফ, আর তুমি সেই শব্দে **থামলে** শেষ হরফ সাকিন হয় — সুকুনটা ‘অস্থায়ী’। তখন ২, ৪ বা ৬ হরকত টানা যায়। মিলিয়ে পড়লে এটা সাধারণ ২ হরকত।", "en": "A madd letter comes before the last letter, and when you **stop** on that word the last letter becomes sakin — a ‘temporary’ sukun. You may stretch 2, 4 or 6 counts. When joining, it is just 2." },
          "how": { "bn": "যে দৈর্ঘ্যই বেছে নাও, পুরো তিলাওয়াতে সেটিই রাখো — এক আয়াতে ২, পরের আয়াতে ৬ নয়।", "en": "Whatever length you choose, keep it the same throughout — not 2 in one ayah and 6 in the next." },
          "examples": [
            { "ar": "الرَّحِيمِ", "hl": "حِيمِ", "tr": { "bn": "আররহী----ম্‌ (থামলে)", "en": "ar-raḥeeeem (stop)" } },
            { "ar": "نَسْتَعِينُ", "hl": "عِينُ", "tr": { "bn": "নাসতা‘ঈ----ন্‌ (থামলে)", "en": "nasta'eeeen (stop)" } },
            { "ar": "يَعْلَمُونَ", "hl": "مُونَ", "tr": { "bn": "ইয়া‘লামূ----ন্‌ (থামলে)", "en": "ya'lamoooon (stop)" } }
          ] },
        { "type": "rule", "name": { "bn": "মাদ্দ লীন — নরম মাদ্দ", "en": "Madd Leen — Soft Madd" }, "ar": "مَدّ لِين", "color": "red", "letters": "و ي", "desc": { "bn": "যবরের পর সাকিন {{و}} বা {{ي}}, আর তার পরের হরফে থামলে — ২, ৪ বা ৬ হরকত। মিলিয়ে পড়লে লীনে কোনো টান নেই।", "en": "A sakin {{و}} or {{ي}} after fatha, when you stop on the letter after it — 2, 4 or 6 counts. When joining, a leen letter is not stretched at all." },
          "how": { "bn": "ঠোঁট গোল করে ‘আও’ বা হালকা ‘আই’ — নরমভাবে টানো, তারপর শেষ হরফ সাকিন করে থামো।", "en": "A soft ‘aw’ or ‘ay’ — stretch it gently, then stop with the last letter sakin." },
          "examples": [
            { "ar": "قُرَيْشٍ", "hl": "رَيْ", "tr": { "bn": "ক্বুরাই---শ্‌ (থামলে)", "en": "qurayyysh (stop)" } },
            { "ar": "خَوْفٍ", "hl": "خَوْ", "tr": { "bn": "খাও---ফ্‌ (থামলে)", "en": "khawwwf (stop)" } },
            { "ar": "الْبَيْتِ", "hl": "بَيْ", "tr": { "bn": "আলবাই---ত্‌ (থামলে)", "en": "al-bayyyt (stop)" } }
          ] },
        { "type": "tip", "kind": "fun", "title": { "bn": "আরও দুটি ছোট মাদ্দ", "en": "Two more little madds" }, "bn": "**মাদ্দ বাদাল:** হামযার **পরে** মাদ্দের হরফ, যেমন {{آمَنُوا}}, {{إِيمَانًا}}, {{أُوتُوا}} — হাফসে মাত্র ২ হরকত। **মাদ্দ সিলা:** দুই হরকতওয়ালা হরফের মাঝে সর্বনামের {{ـهُ}}/{{ـهِ}} একটু টেনে পড়া হয় — {{إِنَّهُ كَانَ}} = ‘ইন্নাহূ কা-না’ (২ হরকত)। পরে হামযা থাকলে ৪–৫: {{مَالَهُ أَخْلَدَهُ}}।", "en": "**Madd badal:** a madd letter **after** a hamza, like {{آمَنُوا}}, {{إِيمَانًا}}, {{أُوتُوا}} — only 2 counts in Hafs. **Madd silah:** the pronoun {{ـهُ}}/{{ـهِ}} between two voweled letters is stretched a little — {{إِنَّهُ كَانَ}} = ‘innahoo kaana’ (2 counts). With a hamza after it, 4–5: {{مَالَهُ أَخْلَدَهُ}}." },
        { "type": "tip", "kind": "warn", "bn": "বাংলাভাষীদের বড় ভুল: লম্বা স্বরকে ছোট করা আর ছোট স্বরকে লম্বা করা। {{قَالَ}} (সে বলল) ‘কালা’ নয়, ‘ক্বা-লা’; আর {{قُلْ}} (বলো) ‘কূল’ নয়, ছোট ‘ক্বুল’। টান কমবেশি হলে অনেক সময় অর্থ বদলে যায়।", "en": "A big slip for Bangla speakers: shortening long vowels and lengthening short ones. {{قَالَ}} (he said) is ‘qaa-la’, and {{قُلْ}} (say!) is a short ‘qul’, not ‘qool’. Wrong lengths can change the meaning." },
        { "type": "practice", "bn": "সূরা ফাতিহা পড়ো। প্রতিটি মাদ্দে আঙুলে হরকত গুনে নাও: তবঈ ২, আয়াতের শেষে আরিদ ৪, {{الضَّالِّينَ}}-এ ৬।", "en": "Read Surah al-Fatiha. Count each madd on your fingers: natural 2, 'arid at ayah ends 4, and 6 on {{الضَّالِّينَ}}.", "lines": [
          "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
          "الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ",
          "الرَّحْمٰنِ الرَّحِيمِ",
          "مَالِكِ يَوْمِ الدِّينِ",
          "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
          "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
          "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ"
        ] },
        { "type": "quiz", "items": [
          { "q": { "bn": "স্বাভাবিক মাদ্দ কত হরকত?", "en": "How many counts is a natural madd?" }, "options": [ "1", "2", "4", "6" ], "answer": 1 },
          { "q": { "bn": "এখানে কোন মাদ্দ?", "en": "Which madd is this?" }, "ar": "السَّمَاءِ", "options": [ { "bn": "মুত্তাসিল", "en": "Muttasil" }, { "bn": "মুনফাসিল", "en": "Munfasil" }, { "bn": "লাযিম", "en": "Lazim" } ], "answer": 0, "explain": { "bn": "আলিফ আর হামযা একই শব্দে।", "en": "Alif and hamza are in the same word." } },
          { "q": { "bn": "এখানে কোন মাদ্দ?", "en": "Which madd is this?" }, "ar": "يَا أَيُّهَا", "options": [ { "bn": "মুত্তাসিল", "en": "Muttasil" }, { "bn": "মুনফাসিল", "en": "Munfasil" }, { "bn": "তবঈ", "en": "Tabee'i" } ], "answer": 1 },
          { "q": { "bn": "{{الضَّالِّينَ}}-এ মাদ্দ কত হরকত?", "en": "How long is the madd in {{الضَّالِّينَ}}?" }, "options": [ "2", "4", "6" ], "answer": 2, "explain": { "bn": "আলিফের পরে স্থায়ী তাশদীদ — মাদ্দ লাযিম।", "en": "A permanent shaddah after the alif — madd lazim." } },
          { "q": { "bn": "{{نَسْتَعِينُ}}-এ থামলে কত টানা যায়?", "en": "Stopping on {{نَسْتَعِينُ}}, how long may you stretch?" }, "options": [ { "bn": "শুধু ২", "en": "Only 2" }, { "bn": "২, ৪ বা ৬", "en": "2, 4 or 6" }, { "bn": "শুধু ৬", "en": "Only 6" } ], "answer": 1 },
          { "q": { "bn": "লীনের হরফ কোনটি?", "en": "Which is a leen letter?" }, "options": [ { "bn": "{{خَوْفٍ}}-এর ওয়াও", "en": "The waw in {{خَوْفٍ}}" }, { "bn": "{{يَقُولُ}}-এর ওয়াও", "en": "The waw in {{يَقُولُ}}" }, { "bn": "{{وَ}}-এর ওয়াও", "en": "The waw in {{وَ}}" } ], "answer": 0, "explain": { "bn": "যবরের পর সাকিন ওয়াও = লীন।", "en": "Sakin waw after fatha = leen." } },
          { "q": { "bn": "মাদ্দ লীনে কখন টান হয়?", "en": "When is a madd leen stretched?" }, "options": [ { "bn": "সবসময়", "en": "Always" }, { "bn": "শুধু থামলে", "en": "Only at a stop" }, { "bn": "কখনো না", "en": "Never" } ], "answer": 1 }
        ] }
      ]
    },
    {
      "id": "tj-waqf",
      "icon": "۝",
      "title": { "bn": "ওয়াকফ — থামা ও আবার শুরু করা", "en": "Waqf — Stopping & Starting" },
      "subtitle": { "bn": "শব্দের শেষে কীভাবে থামবে, কোথায় থামবে, মুসহাফের চিহ্ন", "en": "How to stop on a word, where to stop, and the mushaf stop signs" },
      "minutes": 15,
      "goals": [
        { "bn": "শব্দের শেষে সঠিকভাবে থামতে শিখব", "en": "Stop correctly at the end of a word" },
        { "bn": "অর্থ ঠিক রেখে কোথায় থামতে ও কোথা থেকে শুরু করতে হয় বুঝব", "en": "Choose where to stop and restart without spoiling the meaning" },
        { "bn": "মুসহাফের ওয়াকফের চিহ্নগুলো চিনব", "en": "Recognise the stop signs in the mushaf" }
      ],
      "blocks": [
        { "type": "text", "bn": "এক নিঃশ্বাসে পুরো সূরা পড়া যায় না — মাঝে মাঝে থামতেই হয়। থেমে শ্বাস নেওয়াকে বলে **ওয়াকফ** ({{وَقْف}}), আর আবার শুরু করাকে বলে **ইবতিদা** ({{اِبْتِدَاء}})। ভুল জায়গায় থামলে অর্থ উল্টে যেতে পারে, আর ভুলভাবে থামলে শব্দ বিকৃত হয়।", "en": "You cannot recite a whole surah in one breath — you must stop now and then. Stopping to take a breath is called **waqf** ({{وَقْف}}), and starting again is **ibtida** ({{اِبْتِدَاء}}). Stopping in the wrong place can flip the meaning, and stopping the wrong way distorts the word." },
        { "type": "steps", "title": { "bn": "শব্দের শেষে কীভাবে থামবে", "en": "How to stop on a word" }, "items": [
          { "title": { "bn": "শেষ হরকত বা তানবীন → সাকিন", "en": "Last vowel or tanween → sukun" }, "ar": "نَسْتَعِينُ ← نَسْتَعِينْ", "tr": { "bn": "নাসতা‘ঈন্‌", "en": "nasta'een" }, "desc": { "bn": "যবর, যের, পেশ, দুই যের বা দুই পেশ — সবই সাকিন হয়ে যায়। {{عَظِيمٌ}} → ‘আযীম্‌’।", "en": "Fatha, kasra, damma, double kasra or double damma — all become sukun. {{عَظِيمٌ}} → ‘'aẓeem’." } },
          { "title": { "bn": "দুই যবর ({{ـًا}}) → আলিফের টান", "en": "Double fatha ({{ـًا}}) → an alif sound" }, "ar": "تَرْتِيلًا ← تَرْتِيلَا", "tr": { "bn": "তারতীলা-", "en": "tarteelaa" }, "desc": { "bn": "তানবীনের নূন বাদ, যবরটি ২ হরকত আলিফ হয়ে যায় (মাদ্দ ইওয়াদ)। {{حَكِيمًا}} → ‘হাকীমা-’।", "en": "The tanween's noon drops and the fatha becomes a 2-count alif (madd 'iwad). {{حَكِيمًا}} → ‘ḥakeemaa’." } },
          { "title": { "bn": "গোল তা ({{ة}}) → হা সাকিন", "en": "Round ta ({{ة}}) → sakin ha" }, "ar": "الْقَارِعَةُ ← الْقَارِعَهْ", "tr": { "bn": "আলক্বা-রি‘আহ্‌", "en": "al-qaari'ah" }, "desc": { "bn": "দুই যবর থাকলেও আলিফ হয় না: {{رَحْمَةً}} → ‘রহমাহ্‌’, ‘রহমাতা’ নয়।", "en": "Even with double fatha there is no alif: {{رَحْمَةً}} → ‘raḥmah’, not ‘raḥmataa’." } },
          { "title": { "bn": "সর্বনামের {{ـهُ}} / {{ـهِ}} → হা সাকিন", "en": "Pronoun {{ـهُ}} / {{ـهِ}} → sakin ha" }, "ar": "يَرَهُ ← يَرَهْ", "tr": { "bn": "ইয়ারাহ্‌", "en": "yarah" }, "desc": { "bn": "মাদ্দ সিলার টানও থাকে না।", "en": "The silah stretch also disappears." } },
          { "title": { "bn": "আগে থেকেই সাকিন বা আলিফ → যেমন আছে", "en": "Already sakin or alif → no change" }, "ar": "لَمْ يُولَدْ", "tr": { "bn": "লাম ইউলাদ্‌", "en": "lam yoolad" }, "desc": { "bn": "কিছুই বদলাবে না (এখানে কলকলা মনে রাখো!)।", "en": "Nothing changes (remember the qalqalah here!)." } },
          { "title": { "bn": "শেষে তাশদীদ → দ্বিগুণ ভাবটা রাখো", "en": "Final shaddah → keep it doubled" }, "ar": "وَتَبَّ", "tr": { "bn": "ওয়াতাব্ব্‌", "en": "wa tabb" }, "desc": { "bn": "তাশদীদ হারাবে না, শেষ হরফে একটু চাপ থাকবে।", "en": "Do not lose the shaddah — keep a little pressure on the last letter." } }
        ] },
        { "type": "examples", "title": { "bn": "থেমে পড়ো", "en": "Read them with a stop" }, "items": [
          { "ar": "الرَّحِيمِ", "tr": { "bn": "আররহীম্‌", "en": "ar-raḥeem" }, "note": { "bn": "যের → সাকিন (আরিদ মাদ্দ ২/৪/৬)", "en": "Kasra → sukun ('arid madd 2/4/6)" } },
          { "ar": "عَلِيمًا حَكِيمًا", "tr": { "bn": "‘আলীমান হাকীমা-", "en": "'aleeman ḥakeemaa" }, "note": { "bn": "শেষের দুই যবর → আলিফ", "en": "Final double fatha → alif" } },
          { "ar": "جَنَّةٍ", "tr": { "bn": "জান্নাহ্‌", "en": "jannah" }, "note": { "bn": "গোল তা → হা সাকিন", "en": "Round ta → sakin ha" } },
          { "ar": "أَحَدٌ", "tr": { "bn": "আহাদ্‌", "en": "aḥad" }, "note": { "bn": "দুই পেশ → সাকিন + বড় কলকলা", "en": "Double damma → sukun + major qalqalah" } }
        ] },
        { "type": "text", "title": { "bn": "কোথায় থামবে?", "en": "Where to stop?" }, "bn": "সবচেয়ে ভালো জায়গা **আয়াতের শেষ** — রাসূলুল্লাহ ﷺ প্রতিটি আয়াতের শেষে থেমে থেমে পড়তেন। আয়াতের মাঝে থামতে হলে এমন জায়গায় থামো যেখানে **অর্থ পূর্ণ** হয়। এমন জায়গায় থামবে না যেখানে অর্থ ভুল দাঁড়ায়।", "en": "The best place is **the end of an ayah** — the Prophet ﷺ used to pause at the end of each ayah. If you must stop inside an ayah, choose a place where **the meaning is complete**. Never stop where the meaning comes out wrong." },
        { "type": "compare", "title": { "bn": "ভুল জায়গায় থামলে কী হয়?", "en": "What happens if you stop in the wrong place?" }, "items": [
          { "ar": "لَا تَقْرَبُوا الصَّلَاةَ", "label": { "bn": "এখানে থেমো না!", "en": "Do not stop here!" }, "desc": { "bn": "অর্থ দাঁড়ায় ‘সালাতের কাছেও যেয়ো না’ — সম্পূর্ণ ভুল বার্তা", "en": "It says ‘do not go near the prayer’ — a completely wrong message" } },
          { "ar": "لَا تَقْرَبُوا الصَّلَاةَ وَأَنْتُمْ سُكَارٰى", "label": { "bn": "পুরোটা পড়ো", "en": "Read it through" }, "desc": { "bn": "‘নেশাগ্রস্ত অবস্থায় সালাতের কাছে যেয়ো না’ (৪:৪৩) — সঠিক অর্থ", "en": "‘Do not approach prayer while intoxicated’ (4:43) — the true meaning" } }
        ] },
        { "type": "text", "title": { "bn": "আবার শুরু করা (ইবতিদা)", "en": "Starting again (ibtida)" }, "bn": "শ্বাসের অভাবে বাক্যের মাঝখানে থেমে গেলে, এক-দুই শব্দ **পেছন থেকে** আবার শুরু করো, যাতে অর্থ জুড়ে যায়। শুরুর শব্দটি যদি হামযাতুল ওয়াসল (জোড়া-হামযা {{ا}}) দিয়ে শুরু হয়, তাকে একটি হরকত দিয়ে পড়তে হয়:", "en": "If you run out of breath mid-sentence, go **back** a word or two and start again so the meaning connects. If the first word begins with a joining hamza (hamzat al-wasl, {{ا}}), give it a vowel like this:" },
        { "type": "table", "head": [ { "bn": "অবস্থা", "en": "Case" }, { "bn": "শুরু করো", "en": "Start with" }, { "bn": "উদাহরণ", "en": "Example" } ], "rows": [
          [ { "bn": "{{ال}} (আলিফ-লাম)", "en": "{{ال}} (the article)" }, { "bn": "যবর — ‘আ’", "en": "Fatha — ‘a’" }, "الْحَمْدُ" ],
          [ { "bn": "ক্রিয়ার তৃতীয় হরফে পেশ", "en": "Verb with damma on its 3rd letter" }, { "bn": "পেশ — ‘উ’", "en": "Damma — ‘u’" }, "انْظُرْ" ],
          [ { "bn": "ক্রিয়ার তৃতীয় হরফে যবর/যের", "en": "Verb with fatha/kasra on its 3rd letter" }, { "bn": "যের — ‘ই’", "en": "Kasra — ‘i’" }, "اهْدِنَا" ]
        ] },
        { "type": "table", "title": { "bn": "মুসহাফের ওয়াকফের চিহ্ন (আমাদের দেশের মুসহাফ)", "en": "Stop signs in the mushaf (as printed in our region)" }, "head": [ { "bn": "চিহ্ন", "en": "Sign" }, { "bn": "নাম", "en": "Name" }, { "bn": "কী করবে", "en": "What to do" } ], "rows": [
          [ "۝", { "bn": "আয়াতের শেষ", "en": "End of ayah" }, { "bn": "থামা সুন্নাত ও উত্তম", "en": "Stopping is sunnah and best" } ],
          [ "م", { "bn": "ওয়াকফে লাযিম", "en": "Waqf lazim" }, { "bn": "অবশ্যই থামো — না থামলে অর্থ বিকৃত হতে পারে", "en": "Must stop — joining may distort the meaning" } ],
          [ "ط", { "bn": "ওয়াকফে মুতলাক", "en": "Waqf mutlaq" }, { "bn": "থামো", "en": "Stop" } ],
          [ "ج", { "bn": "ওয়াকফে জায়েয", "en": "Waqf ja'iz" }, { "bn": "থামা-মেলানো দুটোই চলে, থামা ভালো", "en": "Both allowed; stopping is better" } ],
          [ "ز", { "bn": "মুজাওয়ায", "en": "Mujawwaz" }, { "bn": "থামা চলে, তবে মিলিয়ে পড়া ভালো", "en": "Stopping allowed, joining is better" } ],
          [ "ص", { "bn": "মুরাখখাস", "en": "Murakhkhas" }, { "bn": "মিলিয়ে পড়ো; শ্বাস না থাকলে থামতে পারো", "en": "Join; you may stop if out of breath" } ],
          [ "قلى", { "bn": "আল-ওয়াকফু আওলা", "en": "Al-waqfu awla" }, { "bn": "থামা উত্তম", "en": "Stopping is better" } ],
          [ "صلى", { "bn": "আল-ওয়াসলু আওলা", "en": "Al-waslu awla" }, { "bn": "মিলিয়ে পড়া উত্তম", "en": "Joining is better" } ],
          [ "ق", { "bn": "কীলা আলাইহিল ওয়াকফ", "en": "Qeela 'alayhil-waqf" }, { "bn": "মিলিয়ে পড়ো (কেউ কেউ থামতে বলেছেন)", "en": "Join (some scholars said stop)" } ],
          [ "قف", { "bn": "কিফ", "en": "Qif" }, { "bn": "থামো", "en": "Stop" } ],
          [ "لا", { "bn": "লা ওয়াকফা", "en": "La waqf" }, { "bn": "থেমো না; থেমে গেলে পেছন থেকে মিলিয়ে পড়ো", "en": "Do not stop; if you did, go back and rejoin" } ],
          [ { "bn": "∴ … ∴", "en": "∴ … ∴" }, { "bn": "মু‘আনাকা (জোড়া চিহ্ন)", "en": "Mu'anaqah (paired dots)" }, { "bn": "দুটির যেকোনো একটিতে থামো, দুটোতেই নয়", "en": "Stop at one of the two, not both" } ],
          [ "س", { "bn": "সাকতা", "en": "Saktah" }, { "bn": "শ্বাস না নিয়ে মুহূর্তের জন্য থামো", "en": "Pause briefly without taking a breath" } ],
          [ "وقفة", { "bn": "ওয়াকফা", "en": "Waqfah" }, { "bn": "শ্বাস না নিয়ে সাকতার চেয়ে একটু বেশি থামো", "en": "Pause a little longer than saktah, without breathing" } ]
        ] },
        { "type": "tip", "kind": "fun", "bn": "হাফস রিওয়ায়াতে চারটি জায়গায় সাকতা করতেই হয়: {{عِوَجًا}} (১৮:১), {{مَرْقَدِنَا}} (৩৬:৫২), {{مَنْ رَاقٍ}} (৭৫:২৭) ও {{بَلْ رَانَ}} (৮৩:১৪)। মজার ব্যাপার: শেষ দুটিতে সাকতার কারণে নূন/লাম রা-এর সাথে মিশে যায় না — ‘মান্‌ — রা-ক্ব’, ‘বাল্‌ — রা-না’।", "en": "In Hafs there are four places where a saktah is required: {{عِوَجًا}} (18:1), {{مَرْقَدِنَا}} (36:52), {{مَنْ رَاقٍ}} (75:27) and {{بَلْ رَانَ}} (83:14). Fun fact: in the last two, the pause stops the noon/lam from merging into the ra — ‘man — raaq’, ‘bal — raana’." },
        { "type": "tip", "kind": "warn", "bn": "থামার সময় দম ফুরিয়ে শব্দের শেষটা গিলে ফেলবে না। আর শ্বাস নিতে হলে শব্দের মাঝখানে কখনো নয় — শুধু শব্দের শেষে।", "en": "When stopping, do not swallow the end of the word because you ran out of breath. And never take a breath in the middle of a word — only at the end of one." },
        { "type": "practice", "bn": "প্রতিটি শব্দে আলাদা করে থামো এবং থামার নিয়মটি প্রয়োগ করো।", "en": "Stop on each word separately and apply the stopping rule.", "lines": [
          "نَسْتَعِينُ الرَّحِيمِ عَظِيمٌ",
          "تَرْتِيلًا حَكِيمًا أَبَدًا",
          "رَحْمَةً الْقَارِعَةُ جَنَّةٍ",
          "يَرَهُ أَحَدٌ وَتَبَّ",
          "الْحَمْدُ انْظُرْ اهْدِنَا"
        ] },
        { "type": "quiz", "items": [
          { "q": { "bn": "{{تَرْتِيلًا}}-এ থামলে কীভাবে পড়বে?", "en": "How do you stop on {{تَرْتِيلًا}}?" }, "options": [ { "bn": "তারতীলান", "en": "tarteelan" }, { "bn": "তারতীলা-", "en": "tarteelaa" }, { "bn": "তারতীল্‌", "en": "tarteel" } ], "answer": 1, "explain": { "bn": "দুই যবর থামার সময় আলিফ হয়।", "en": "Double fatha becomes an alif at a stop." } },
          { "q": { "bn": "{{رَحْمَةً}}-এ থামলে কীভাবে পড়বে?", "en": "How do you stop on {{رَحْمَةً}}?" }, "options": [ { "bn": "রহমাতা-", "en": "raḥmataa" }, { "bn": "রহমাহ্‌", "en": "raḥmah" }, { "bn": "রহমাতান", "en": "raḥmatan" } ], "answer": 1, "explain": { "bn": "গোল তা সবসময় হা সাকিন হয়।", "en": "Round ta always becomes a sakin ha." } },
          { "q": { "bn": "এই চিহ্নের অর্থ কী?", "en": "What does this sign mean?" }, "ar": "م", "options": [ { "bn": "অবশ্যই থামো", "en": "You must stop" }, { "bn": "থেমো না", "en": "Do not stop" }, { "bn": "মিলিয়ে পড়া উত্তম", "en": "Joining is better" } ], "answer": 0 },
          { "q": { "bn": "এই চিহ্নের অর্থ কী?", "en": "What does this sign mean?" }, "ar": "لا", "options": [ { "bn": "অবশ্যই থামো", "en": "You must stop" }, { "bn": "থেমো না", "en": "Do not stop" }, { "bn": "থামা উত্তম", "en": "Stopping is better" } ], "answer": 1 },
          { "q": { "bn": "{{قلى}} দেখলে কী করবে?", "en": "What do you do at {{قلى}}?" }, "options": [ { "bn": "থামা উত্তম", "en": "Stopping is better" }, { "bn": "মিলিয়ে পড়া উত্তম", "en": "Joining is better" }, { "bn": "সাকতা করো", "en": "Make a saktah" } ], "answer": 0 },
          { "q": { "bn": "{{اهْدِنَا}} দিয়ে শুরু করলে প্রথমে কী বলবে?", "en": "Starting with {{اهْدِنَا}}, how does it begin?" }, "options": [ { "bn": "আহদিনা", "en": "ahdinaa" }, { "bn": "ইহদিনা", "en": "ihdinaa" }, { "bn": "উহদিনা", "en": "uhdinaa" } ], "answer": 1, "explain": { "bn": "তৃতীয় হরফ {{د}}-তে যের, তাই শুরুতে ‘ই’।", "en": "The 3rd letter {{د}} has kasra, so start with ‘i’." } },
          { "q": { "bn": "সাকতা মানে কী?", "en": "What is a saktah?" }, "options": [ { "bn": "শ্বাস নিয়ে লম্বা বিরতি", "en": "A long pause with a breath" }, { "bn": "শ্বাস না নিয়ে মুহূর্তের বিরতি", "en": "A brief pause without a breath" }, { "bn": "ছয় হরকত টান", "en": "A 6-count stretch" } ], "answer": 1 }
        ] }
      ]
    },
    {
      "id": "tj-bangla-mistakes",
      "icon": "ض",
      "title": { "bn": "বাংলাভাষীদের সাধারণ ভুল", "en": "Common Mistakes of Bangla Speakers" },
      "subtitle": { "bn": "কাছাকাছি হরফ, স্বরের দৈর্ঘ্য আর হারানো গুন্নাহ — ভুল ধরো, ঠিক করো", "en": "Look-alike sounds, vowel length and lost ghunnah — spot them, fix them" },
      "minutes": 20,
      "goals": [
        { "bn": "বাংলায় নেই এমন আরবি আওয়াজগুলো আলাদা করতে শিখব", "en": "Separate Arabic sounds that Bangla does not have" },
        { "bn": "যে ভুলে অর্থ বদলে যায় সেগুলো চিনব", "en": "Recognise mistakes that change the meaning" },
        { "bn": "প্রতিদিন ৫ মিনিটের নিজে-যাচাই অভ্যাস গড়ব", "en": "Build a 5-minute daily self-check habit" }
      ],
      "blocks": [
        { "type": "text", "bn": "বাংলা সুন্দর ভাষা, কিন্তু এতে আরবির অনেক আওয়াজ নেই। তাই আমরা না বুঝেই কাছের বাংলা আওয়াজ বসিয়ে দিই — {{ث}}, {{س}}, {{ص}} তিনটিকেই ‘স/ছ’, আর {{ذ}}, {{ز}}, {{ظ}}, {{ض}} চারটিকেই ‘জ/য’। এই পাঠে আমরা সবচেয়ে বেশি হওয়া ভুলগুলো একটি একটি করে ধরব — সাথে ঠিক করার কৌশল।", "en": "Bangla is a beautiful language, but it lacks many Arabic sounds. So without noticing we substitute the nearest Bangla sound — saying {{ث}}, {{س}}, {{ص}} all as ‘s’, and {{ذ}}, {{ز}}, {{ظ}}, {{ض}} all as ‘j/z’. In this lesson we catch the most common mistakes one by one — with a fix for each." },
        { "type": "compare", "title": { "bn": "ভুল ১: তিনটি ‘স’ — {{ث}} {{س}} {{ص}}", "en": "Mistake 1: three ‘s’ sounds — {{ث}} {{س}} {{ص}}" }, "items": [
          { "ar": "ثَ", "label": { "bn": "ছা — জিহ্বা দাঁতের আগায়", "en": "tha — tongue at the teeth" }, "desc": { "bn": "জিহ্বার আগা উপরের দাঁতের কিনারায় লাগাও, বাতাস ছাড়ো — ইংরেজি ‘think’-এর th। যেমন {{ثُمَّ}}", "en": "Tongue tip on the edges of the upper teeth, let air out — the ‘th’ of ‘think’. E.g. {{ثُمَّ}}" } },
          { "ar": "سَ", "label": { "bn": "সা — হালকা শিস", "en": "sa — light whistle" }, "desc": { "bn": "জিহ্বা দাঁতের পেছনে, চিকন শিসের মতো আওয়াজ। যেমন {{سَمِيعٌ}}", "en": "Tongue behind the teeth, a thin whistling sound. E.g. {{سَمِيعٌ}}" } },
          { "ar": "صَ", "label": { "bn": "ছা — মোটা শিস", "en": "ṣa — heavy whistle" }, "desc": { "bn": "সীনের জায়গা, কিন্তু জিহ্বার গোড়া উপরে তুলে মুখ ভরে — ভারী আওয়াজ। যেমন {{الصِّرَاطَ}}", "en": "Same place as seen, but raise the back of the tongue to fill the mouth — a heavy sound. E.g. {{الصِّرَاطَ}}" } }
        ] },
        { "type": "compare", "title": { "bn": "অর্থ বদলে যায়: {{ص}} বনাম {{س}}", "en": "Meaning changes: {{ص}} vs {{س}}" }, "items": [
          { "ar": "عَصٰى", "label": { "bn": "‘আছা — অবাধ্য হলো", "en": "'aṣaa — disobeyed" }, "desc": { "bn": "মোটা {{ص}} — {{وَعَصٰى آدَمُ رَبَّهُ}} (২০:১২১)", "en": "Heavy {{ص}} — {{وَعَصٰى آدَمُ رَبَّهُ}} (20:121)" } },
          { "ar": "عَسٰى", "label": { "bn": "‘আসা — হয়তো / আশা করা যায়", "en": "'asaa — perhaps" }, "desc": { "bn": "চিকন {{س}} — সম্পূর্ণ ভিন্ন শব্দ!", "en": "Light {{س}} — a completely different word!" } }
        ] },
        { "type": "compare", "title": { "bn": "ভুল ২: চারটি ‘জ’ — {{ذ}} {{ز}} {{ظ}} {{ض}}", "en": "Mistake 2: four ‘j’ sounds — {{ذ}} {{ز}} {{ظ}} {{ض}}" }, "items": [
          { "ar": "ذَ", "label": { "bn": "যা — নরম, জিহ্বা দাঁতে", "en": "dha — soft, tongue at teeth" }, "desc": { "bn": "{{ث}}-এর জায়গা, কিন্তু গলায় আওয়াজ সহ — ইংরেজি ‘this’-এর th। যেমন {{ذٰلِكَ}}", "en": "Same place as {{ث}}, but voiced — the ‘th’ of ‘this’. E.g. {{ذٰلِكَ}}" } },
          { "ar": "زَ", "label": { "bn": "যা — ভোঁ ভোঁ শিস", "en": "za — buzzing" }, "desc": { "bn": "{{س}}-এর জায়গা, কিন্তু মৌমাছির মতো ভনভনে — ইংরেজি ‘zoo’-র z। ‘জাকাত’ নয়, {{زَكَاةَ}}", "en": "Same place as {{س}}, but buzzing like a bee — the ‘z’ of ‘zoo’. Not ‘jakat’ but {{زَكَاةَ}}" } },
          { "ar": "ظَ", "label": { "bn": "যা — মোটা, জিহ্বা দাঁতে", "en": "ẓa — heavy, tongue at teeth" }, "desc": { "bn": "{{ذ}}-এর মোটা রূপ: জিহ্বার আগা দাঁতে, গোড়া উপরে। যেমন {{ظَلَمُوا}}", "en": "The heavy form of {{ذ}}: tip at the teeth, back raised. E.g. {{ظَلَمُوا}}" } },
          { "ar": "ضَ", "label": { "bn": "দ্বা — জিহ্বার পাশ", "en": "ḍa — side of the tongue" }, "desc": { "bn": "জিহ্বার পাশ উপরের মাড়ির দাঁতে চেপে, মোটা করে। ‘দোয়াল্লীন’ বা ‘যোয়াল্লীন’ নয় — {{الضَّالِّينَ}}", "en": "Press the side of the tongue against the upper molars, heavy. Not ‘doalleen’ or ‘zoalleen’ — {{الضَّالِّينَ}}" } }
        ] },
        { "type": "compare", "title": { "bn": "একই সূরায় দুই শব্দ: {{ظ}} বনাম {{ذ}}", "en": "Two words in one surah: {{ظ}} vs {{ذ}}" }, "items": [
          { "ar": "مَحْظُورًا", "label": { "bn": "মাহযূরা — বাধাগ্রস্ত / সীমিত", "en": "maḥẓooraa — restricted" }, "desc": { "bn": "মোটা {{ظ}} — {{وَمَا كَانَ عَطَاءُ رَبِّكَ مَحْظُورًا}} (১৭:২০) ‘তোমার রবের দান সীমাবদ্ধ নয়’", "en": "Heavy {{ظ}} — (17:20) ‘the gift of your Lord is not restricted’" } },
          { "ar": "مَحْذُورًا", "label": { "bn": "মাহযূরা — ভয় করার মতো", "en": "maḥdhooraa — to be feared" }, "desc": { "bn": "চিকন {{ذ}} — {{إِنَّ عَذَابَ رَبِّكَ كَانَ مَحْذُورًا}} (১৭:৫৭) ‘তোমার রবের শাস্তি ভয়ংকর’", "en": "Light {{ذ}} — (17:57) ‘the punishment of your Lord is to be feared’" } }
        ] },
        { "type": "tip", "kind": "warn", "bn": "দেখলে তো? বাংলায় দুটোই ‘মাহযূরা’ লেখা হয়, কিন্তু একটি আল্লাহর **দান** সম্পর্কে, অন্যটি তাঁর **শাস্তি** সম্পর্কে! তাই বাংলা উচ্চারণ-লেখার ওপর ভরসা না করে হরফটির মাখরাজ শেখো।", "en": "See? In Bangla script both look like ‘maḥzoora’, yet one is about Allah's **gift** and the other about His **punishment**! So do not rely on Bangla transliteration — learn each letter's makhraj." },
        { "type": "compare", "title": { "bn": "ভুল ৩: দুই ‘হ’ — {{ح}} {{ه}}", "en": "Mistake 3: two ‘h’ sounds — {{ح}} {{ه}}" }, "items": [
          { "ar": "حَ", "label": { "bn": "হা — গলার মাঝখান চেপে", "en": "ḥa — squeeze mid-throat" }, "desc": { "bn": "গলার মাঝখান সরু করে গরম বাতাস ছাড়ো — যেন খুব ঝাল খাওয়ার পর ‘হাহ্‌’। যেমন {{الرَّحْمٰنِ}}", "en": "Narrow the middle of the throat and push out warm air — like the ‘haah’ after something very spicy. E.g. {{الرَّحْمٰنِ}}" } },
          { "ar": "هَ", "label": { "bn": "হা — বুকের গভীর থেকে হালকা", "en": "ha — light, from deep down" }, "desc": { "bn": "গলার একদম নিচ থেকে আলতো নিঃশ্বাস, কোনো চাপ নেই — বাংলা ‘হ’-এর কাছাকাছি। যেমন {{هُدًى}}", "en": "A gentle breath from the very bottom of the throat, no squeeze — close to the Bangla ‘h’. E.g. {{هُدًى}}" } }
        ] },
        { "type": "compare", "title": { "bn": "ভুল ৪: {{خ}} বাংলা ‘খ’ নয়, {{غ}} বাংলা ‘গ’ নয়", "en": "Mistake 4: {{خ}} is not Bangla ‘kh’, {{غ}} is not ‘g’" }, "items": [
          { "ar": "خَ", "label": { "bn": "খা — গলার উপরে ঘষা", "en": "kha — a scrape at the top of the throat" }, "desc": { "bn": "বাংলা ‘খ’ হলো ক+হ; আরবি {{خ}} হলো গলার উপরের দিকে খসখসে ঘষা, জিহ্বা কোথাও ঠেকে না। মোটা হরফ। যেমন {{خَلَقَ}}", "en": "Bangla ‘kh’ is k+h; Arabic {{خ}} is a raspy scrape at the top of the throat, the tongue touches nothing. A heavy letter. E.g. {{خَلَقَ}}" } },
          { "ar": "غَ", "label": { "bn": "গা — গড়গড়া করার মতো", "en": "gha — like gargling" }, "desc": { "bn": "{{خ}}-এর জায়গা, কিন্তু গলায় আওয়াজসহ — কুলি করার সময়ের গড়গড় শব্দ। যেমন {{غَيْرِ الْمَغْضُوبِ}}", "en": "Same place as {{خ}}, but voiced — the gurgle of gargling. E.g. {{غَيْرِ الْمَغْضُوبِ}}" } }
        ] },
        { "type": "compare", "title": { "bn": "ভুল ৫: {{ع}} বনাম {{ء}} — অর্থ বদলে যায়!", "en": "Mistake 5: {{ع}} vs {{ء}} — the meaning changes!" }, "items": [
          { "ar": "عَلِيمٌ", "label": { "bn": "‘আলীম — সর্বজ্ঞ", "en": "'aleem — All-Knowing" }, "desc": { "bn": "{{ع}}: গলার মাঝখান চেপে কণ্ঠস্বর — আল্লাহর গুণবাচক নাম", "en": "{{ع}}: a voiced squeeze in mid-throat — a name of Allah" } },
          { "ar": "أَلِيمٌ", "label": { "bn": "আলীম — যন্ত্রণাদায়ক", "en": "aleem — painful" }, "desc": { "bn": "{{ء}}: গলার নিচে পরিষ্কার এক ঝটকা — {{عَذَابٌ أَلِيمٌ}} ‘যন্ত্রণাদায়ক শাস্তি’", "en": "{{ء}}: a clean catch deep in the throat — {{عَذَابٌ أَلِيمٌ}} ‘a painful punishment’" } }
        ] },
        { "type": "compare", "title": { "bn": "ভুল ৬: {{ق}} বনাম {{ك}}", "en": "Mistake 6: {{ق}} vs {{ك}}" }, "items": [
          { "ar": "قَلْبٌ", "label": { "bn": "ক্বালব — হৃদয়", "en": "qalb — heart" }, "desc": { "bn": "জিহ্বার একদম গোড়া, মোটা ও গভীর — কাকের ডাকের মতো গলার পেছনে", "en": "The very back of the tongue, heavy and deep — far back like a crow's caw" } },
          { "ar": "كَلْبٌ", "label": { "bn": "কালব — কুকুর!", "en": "kalb — dog!" }, "desc": { "bn": "একটু সামনে, চিকন — ‘হৃদয়’ বলতে গিয়ে ‘কুকুর’ বলে ফেলো না!", "en": "A little forward, light — do not say ‘dog’ when you mean ‘heart’!" } }
        ] },
        { "type": "compare", "title": { "bn": "ভুল ৭: {{ط}} বনাম {{ت}}", "en": "Mistake 7: {{ط}} vs {{ت}}" }, "items": [
          { "ar": "طِينٍ", "label": { "bn": "ত্বীন — কাদামাটি", "en": "ṭeen — clay" }, "desc": { "bn": "মোটা {{ط}}: জিহ্বা তালুতে ঢাকনার মতো — {{خَلَقَكُمْ مِنْ طِينٍ}}", "en": "Heavy {{ط}}: the tongue covers the palate like a lid — {{خَلَقَكُمْ مِنْ طِينٍ}}" } },
          { "ar": "التِّينِ", "label": { "bn": "তীন — ডুমুর", "en": "teen — fig" }, "desc": { "bn": "চিকন {{ت}} — {{وَالتِّينِ وَالزَّيْتُونِ}}", "en": "Light {{ت}} — {{وَالتِّينِ وَالزَّيْتُونِ}}" } }
        ] },
        { "type": "compare", "title": { "bn": "ভুল ৮: যবরকে বাংলা ‘অ’ বানানো", "en": "Mistake 8: turning fatha into a Bangla ‘o’" }, "items": [
          { "ar": "رَحْمَةٌ", "label": { "bn": "ঠিক: ‘রাহমাহ’", "en": "Right: ‘raḥmah’" }, "desc": { "bn": "যবর মানে খোলা ‘আ’-এর মতো ছোট আওয়াজ — মুখ খোলা, ঠোঁট গোল নয়", "en": "Fatha is a short open ‘a’ — mouth open, lips not rounded" } },
          { "ar": "رَحْمَةٌ", "label": { "bn": "ভুল: ‘রোহমোত’", "en": "Wrong: ‘rohmot’" }, "desc": { "bn": "বাংলা ‘অ’ (ও-ঘেঁষা) — আরবিতে এমন স্বর নেই। পেশকেও ‘ও’ বানাবে না: {{يَقُولُ}} ‘ইয়াকোলো’ নয়", "en": "The Bangla ‘o’-like vowel does not exist in Arabic. Do not turn damma into ‘o’ either: {{يَقُولُ}} is not ‘yakolo’" } }
        ] },
        { "type": "compare", "title": { "bn": "ভুল ৯: ছোট-বড় স্বর গুলিয়ে ফেলা", "en": "Mistake 9: mixing short and long vowels" }, "items": [
          { "ar": "مَلِكِ النَّاسِ", "label": { "bn": "মালিকি — ছোট ‘মা’", "en": "maliki — short ‘ma’" }, "desc": { "bn": "‘মানুষের বাদশাহ’ (১১৪:২)", "en": "‘King of mankind’ (114:2)" } },
          { "ar": "مَالِكِ يَوْمِ الدِّينِ", "label": { "bn": "মা-লিকি — লম্বা ‘মা-’", "en": "maaliki — long ‘maa’" }, "desc": { "bn": "‘বিচার দিবসের মালিক’ (১:৪) — হাফসে এখানে আলিফসহ, তাই টান দিতেই হবে", "en": "‘Master of the Day of Judgement’ (1:4) — Hafs reads it with alif here, so it must be stretched" } }
        ] },
        { "type": "compare", "title": { "bn": "ভুল ১০: তাশদীদ ও গুন্নাহ হারিয়ে ফেলা", "en": "Mistake 10: dropping shaddah and ghunnah" }, "items": [
          { "ar": "رَبِّ", "label": { "bn": "ঠিক: ‘রব্‌বি’", "en": "Right: ‘rab-bi’" }, "desc": { "bn": "বা দুবার — প্রথমটি সাকিন, দ্বিতীয়টি যেরসহ", "en": "Ba twice — first sakin, then with kasra" } },
          { "ar": "رَبِ", "label": { "bn": "ভুল: ‘রবি’", "en": "Wrong: ‘rabi’" }, "desc": { "bn": "তাশদীদ হারালে শব্দ বিকৃত। একইভাবে {{إِنَّ}}, {{ثُمَّ}}-এ গুন্নাহ বাদ দিয়ো না", "en": "Losing the shaddah distorts the word. Likewise never skip the ghunnah in {{إِنَّ}}, {{ثُمَّ}}" } }
        ] },
        { "type": "tip", "kind": "warn", "title": { "bn": "আরও দুটি ছোট ফাঁদ", "en": "Two more little traps" }, "bn": "**{{و}} বাংলা ‘ভ’ নয়:** ঠোঁট গোল করো, দাঁত ঠোঁটে লাগবে না — {{وَ}} = ‘ওয়া’, ‘ভা’ নয়। **{{ر}} কাঁপাবে না:** জিহ্বার একটি মাত্র টোকা, বিশেষ করে তাশদীদে ({{الرَّحِيمِ}}) ‘ররর’ করে কাঁপানো ভুল।", "en": "**{{و}} is not a ‘v’:** round your lips and keep your teeth off them — {{وَ}} = ‘wa’, not ‘va’. **Do not roll {{ر}}:** just one tap of the tongue; trilling ‘rrr’, especially with shaddah ({{الرَّحِيمِ}}), is wrong." },
        { "type": "table", "title": { "bn": "এক নজরে: বাংলা ফাঁদ → সমাধান", "en": "At a glance: the Bangla trap → the fix" }, "head": [ { "bn": "হরফ", "en": "Letter" }, { "bn": "সাধারণ ভুল", "en": "Common slip" }, { "bn": "সমাধান", "en": "Fix" } ], "rows": [
          [ "ث", { "bn": "স/ছ", "en": "s" }, { "bn": "জিহ্বার আগা দাঁতের কিনারায়", "en": "Tongue tip on the teeth edges" } ],
          [ "ذ", { "bn": "জ/য", "en": "j/z" }, { "bn": "{{ث}}-এর জায়গা + কণ্ঠস্বর", "en": "{{ث}}'s place + voice" } ],
          [ "ز", { "bn": "জ", "en": "j" }, { "bn": "মৌমাছির ভনভনে শিস", "en": "A bee-like buzz" } ],
          [ "ظ", { "bn": "জ/য", "en": "j/z" }, { "bn": "{{ذ}} + মোটা", "en": "{{ذ}} + heavy" } ],
          [ "ض", { "bn": "দ/জ", "en": "d/z" }, { "bn": "জিহ্বার পাশ মাড়ির দাঁতে, মোটা", "en": "Side of tongue on molars, heavy" } ],
          [ "ص", { "bn": "স", "en": "s" }, { "bn": "{{س}} + মোটা", "en": "{{س}} + heavy" } ],
          [ "ح", { "bn": "হ", "en": "h" }, { "bn": "গলার মাঝখান চেপে", "en": "Squeeze mid-throat" } ],
          [ "ع", { "bn": "আ/অ", "en": "a" }, { "bn": "গলার মাঝখান, কণ্ঠস্বরসহ", "en": "Mid-throat, voiced" } ],
          [ "ق", { "bn": "ক", "en": "k" }, { "bn": "জিহ্বার একদম গোড়া, মোটা", "en": "Very back of tongue, heavy" } ],
          [ "ط", { "bn": "ত", "en": "t" }, { "bn": "{{ت}} + মোটা", "en": "{{ت}} + heavy" } ],
          [ "خ", { "bn": "খ (ক+হ)", "en": "k+h" }, { "bn": "গলার উপরে খসখসে ঘষা", "en": "A raspy scrape high in the throat" } ],
          [ "غ", { "bn": "গ", "en": "g" }, { "bn": "গড়গড়া করার আওয়াজ", "en": "A gargling sound" } ]
        ] },
        { "type": "steps", "title": { "bn": "প্রতিদিন ৫ মিনিট: নিজের কারী নিজে হও", "en": "5 minutes a day: be your own coach" }, "items": [
          { "title": { "bn": "শোনো", "en": "Listen" }, "desc": { "bn": "একজন ভালো কারীর তিলাওয়াতে একটি ছোট সূরা শোনো।", "en": "Listen to a short surah by a good reciter." } },
          { "title": { "bn": "রেকর্ড করো", "en": "Record" }, "desc": { "bn": "ফোনে নিজের তিলাওয়াত রেকর্ড করো।", "en": "Record yourself reciting it on your phone." } },
          { "title": { "bn": "মিলিয়ে দেখো", "en": "Compare" }, "desc": { "bn": "দুটো পাশাপাশি শোনো — কোথায় আলাদা? ভুলের তালিকা লেখো।", "en": "Play both side by side — where do they differ? Write down your slips." } },
          { "title": { "bn": "আয়না ও নাক পরীক্ষা", "en": "Mirror and nose tests" }, "desc": { "bn": "আয়নায় {{ث ذ ظ}}-এ জিহ্বা দেখো; নাক চেপে গুন্নাহ পরীক্ষা করো; আঙুলে মাদ্দ গোনো।", "en": "Watch your tongue on {{ث ذ ظ}} in a mirror; pinch your nose to test ghunnah; count madd on your fingers." } },
          { "title": { "bn": "একটি ভুল, একটি সপ্তাহ", "en": "One mistake, one week" }, "desc": { "bn": "সব একসাথে নয় — প্রতি সপ্তাহে একটি ভুল ঠিক করার লক্ষ্য নাও।", "en": "Not everything at once — aim to fix one mistake each week." } }
        ] },
        { "type": "practice", "bn": "জোড়ায় জোড়ায় পড়ো — প্রতিটি জোড়ার পার্থক্য যেন স্পষ্ট শোনা যায়।", "en": "Read in pairs — make sure the difference in each pair is clearly heard.", "lines": [
          "ثَ سَ صَ — ذَ زَ ظَ ضَ",
          "حَ هَ — خَ غَ — عَ أَ",
          "قَلْبٌ كَلْبٌ — طِينٍ التِّينِ",
          "عَلِيمٌ أَلِيمٌ — عَصٰى عَسٰى",
          "مَحْظُورًا مَحْذُورًا",
          "مَلِكِ مَالِكِ — رَبِّ إِنَّ ثُمَّ"
        ] },
        { "type": "quiz", "items": [
          { "q": { "bn": "{{قَلْبٌ}}-কে {{كَلْبٌ}} পড়লে অর্থ কী হয়?", "en": "If {{قَلْبٌ}} is read as {{كَلْبٌ}}, what does it mean?" }, "options": [ { "bn": "হৃদয়", "en": "Heart" }, { "bn": "কুকুর", "en": "Dog" }, { "bn": "অর্থ বদলায় না", "en": "No change" } ], "answer": 1 },
          { "q": { "bn": "কোন হরফ উচ্চারণে জিহ্বার আগা দাঁতের কিনারায় যায় এবং কণ্ঠস্বর থাকে?", "en": "Which letter puts the tongue tip on the teeth edges, with voice?" }, "options": [ "ز", "ذ", "ج" ], "answer": 1 },
          { "q": { "bn": "{{ض}} কোথা থেকে উচ্চারিত হয়?", "en": "Where is {{ض}} pronounced?" }, "options": [ { "bn": "জিহ্বার পাশ + উপরের মাড়ির দাঁত", "en": "Side of the tongue + upper molars" }, { "bn": "জিহ্বার আগা + দাঁতের কিনারা", "en": "Tongue tip + teeth edges" }, { "bn": "দুই ঠোঁট", "en": "Both lips" } ], "answer": 0 },
          { "q": { "bn": "{{عَلِيمٌ}} ও {{أَلِيمٌ}}-এর অর্থ কী?", "en": "What do {{عَلِيمٌ}} and {{أَلِيمٌ}} mean?" }, "options": [ { "bn": "দুটোই ‘সর্বজ্ঞ’", "en": "Both ‘All-Knowing’" }, { "bn": "সর্বজ্ঞ / যন্ত্রণাদায়ক", "en": "All-Knowing / painful" }, { "bn": "যন্ত্রণাদায়ক / সর্বজ্ঞ", "en": "Painful / All-Knowing" } ], "answer": 1 },
          { "q": { "bn": "যবরের সঠিক আওয়াজ কোনটি?", "en": "What is the correct sound of fatha?" }, "options": [ { "bn": "বাংলা ‘অ’ (ও-ঘেঁষা)", "en": "The Bangla ‘o’-like vowel" }, { "bn": "খোলা ছোট ‘আ’", "en": "A short open ‘a’" }, { "bn": "‘এ’", "en": "‘e’" } ], "answer": 1 },
          { "q": { "bn": "{{و}} উচ্চারণে কোনটি ঠিক?", "en": "Which is right for {{و}}?" }, "options": [ { "bn": "দাঁত নিচের ঠোঁটে (ভ)", "en": "Teeth on the lower lip (v)" }, { "bn": "ঠোঁট গোল, দাঁত লাগবে না (ওয়া)", "en": "Round lips, teeth off (wa)" }, { "bn": "জিহ্বা দাঁতে", "en": "Tongue at the teeth" } ], "answer": 1 },
          { "q": { "bn": "{{طِينٍ}} মানে কাদামাটি। {{التِّينِ}} মানে কী?", "en": "{{طِينٍ}} means clay. What does {{التِّينِ}} mean?" }, "options": [ { "bn": "ডুমুর", "en": "Fig" }, { "bn": "পানি", "en": "Water" }, { "bn": "একই — কাদামাটি", "en": "The same — clay" } ], "answer": 0 },
          { "q": { "bn": "{{خ}}-এর সঠিক বর্ণনা কোনটি?", "en": "Which best describes {{خ}}?" }, "options": [ { "bn": "বাংলা ‘খ’ (ক+হ)", "en": "Bangla ‘kh’ (k+h)" }, { "bn": "গলার উপরে খসখসে ঘষা, মোটা", "en": "A raspy scrape high in the throat, heavy" }, { "bn": "ঠোঁটের হরফ", "en": "A lip letter" } ], "answer": 1 }
        ] }
      ]
    },
    {
      "id": "tj-colour-map",
      "icon": "لون",
      "title": { "bn": "তাজবীদের রঙের মানচিত্র", "en": "The Tajweed Colour Map" },
      "subtitle": { "bn": "সব নিয়ম এক নজরে — রং দেখে নিয়ম চেনো, তারপর বড় পরীক্ষা", "en": "Every rule at a glance — know each rule by its colour, then the big quiz" },
      "minutes": 20,
      "goals": [
        { "bn": "প্রতিটি নিয়মকে তার রঙের সাথে মিলিয়ে মনে রাখব", "en": "Link every rule with its colour" },
        { "bn": "ছোট সূরায় একসাথে সব নিয়ম চিনব", "en": "Spot all the rules together in short surahs" },
        { "bn": "বড় মিশ্র পরীক্ষায় নিজেকে যাচাই করব", "en": "Test yourself with a big mixed quiz" }
      ],
      "blocks": [
        { "type": "text", "bn": "মাশাআল্লাহ! তুমি তাজবীদের মূল নিয়মগুলো শিখে ফেলেছ। এই কোর্সে প্রতিটি নিয়মের একটি নির্দিষ্ট **রং** আছে। রং দেখলেই যেন নিয়মটা মাথায় আসে — এটাই এই পাঠের লক্ষ্য।", "en": "MashaAllah! You have learned the core rules of tajweed. In this course every rule has its own **colour**. The goal of this lesson: see the colour, recall the rule." },
        { "type": "table", "title": { "bn": "রঙের মানচিত্র", "en": "The colour map" }, "head": [ { "bn": "রং", "en": "Colour" }, { "bn": "নিয়ম", "en": "Rule" }, { "bn": "কখন", "en": "When" }, { "bn": "উদাহরণ", "en": "Example" } ], "rows": [
          [ { "bn": "সবুজ", "en": "Green" }, { "bn": "গুন্নাহ", "en": "Ghunnah" }, { "bn": "{{نّ}} বা {{مّ}}", "en": "{{نّ}} or {{مّ}}" }, "إِنَّ ثُمَّ" ],
          [ { "bn": "সবুজ", "en": "Green" }, { "bn": "ইখফা", "en": "Ikhfa" }, { "bn": "নূন সাকিন/তানবীন + ১৫ হরফ", "en": "Noon sakinah/tanween + 15 letters" }, "أَنْتَ مِنْ قَبْلِ" ],
          [ { "bn": "সবুজ", "en": "Green" }, { "bn": "ইখফা শাফাবী", "en": "Ikhfa shafawi" }, { "bn": "মীম সাকিন + {{ب}}", "en": "Meem sakinah + {{ب}}" }, "تَرْمِيهِمْ بِحِجَارَةٍ" ],
          [ { "bn": "ধূসর", "en": "Gray" }, { "bn": "ইদগাম", "en": "Idgham" }, { "bn": "নূন সাকিন/তানবীন + {{يَرْمَلُونَ}}", "en": "Noon sakinah/tanween + {{يَرْمَلُونَ}}" }, "مَنْ يَقُولُ مِنْ رَبِّهِمْ" ],
          [ { "bn": "ধূসর", "en": "Gray" }, { "bn": "ইদগাম শাফাবী", "en": "Idgham shafawi" }, { "bn": "মীম সাকিন + {{م}}", "en": "Meem sakinah + {{م}}" }, "لَهُمْ مَا" ],
          [ { "bn": "নীল", "en": "Blue" }, { "bn": "ইকলাব", "en": "Iqlab" }, { "bn": "নূন সাকিন/তানবীন + {{ب}}", "en": "Noon sakinah/tanween + {{ب}}" }, "مِنْ بَعْدِ" ],
          [ { "bn": "বেগুনি", "en": "Purple" }, { "bn": "ইযহার", "en": "Izhar" }, { "bn": "নূন সাকিন/তানবীন + গলার ৬ হরফ", "en": "Noon sakinah/tanween + 6 throat letters" }, "مَنْ آمَنَ" ],
          [ { "bn": "বেগুনি", "en": "Purple" }, { "bn": "ইযহার শাফাবী", "en": "Izhar shafawi" }, { "bn": "মীম সাকিন + বাকি ২৬ হরফ", "en": "Meem sakinah + the other 26 letters" }, "هُمْ فِيهَا" ],
          [ { "bn": "কমলা", "en": "Orange" }, { "bn": "কলকলা", "en": "Qalqalah" }, { "bn": "{{قُطْبُ جَدٍّ}} সাকিন বা থামলে", "en": "{{قُطْبُ جَدٍّ}} with sukun or at a stop" }, "قَدْ أَفْلَحَ الْفَلَقِ" ],
          [ { "bn": "লাল", "en": "Red" }, { "bn": "মাদ্দ", "en": "Madd" }, { "bn": "মাদ্দের হরফ + হামযা/সুকুন (২–৬ হরকত)", "en": "Madd letter + hamza/sukun (2–6 counts)" }, "جَاءَ الضَّالِّينَ" ]
        ] },
        { "type": "tip", "kind": "memory", "bn": "রঙের গল্প: **সবুজ** — নাকে গুনগুন, যেন সবুজ পাতায় বাতাস। **ধূসর** — হরফটি মিশে ফিকে হয়ে যায়। **নীল** — নূন রূপ বদলে মীম। **বেগুনি** — স্পষ্ট, পরিষ্কার। **কমলা** — কমলা রঙের বলের মতো লাফ। **লাল** — রাবার ব্যান্ডের মতো টেনে লম্বা।", "en": "The colour story: **Green** — a hum in the nose, like wind in green leaves. **Gray** — the letter merges and fades. **Blue** — noon transforms into meem. **Purple** — clear and visible. **Orange** — bounces like an orange ball. **Red** — stretches like a red rubber band." },
        { "type": "rule", "name": { "bn": "সবুজ পরিবার — নাকের সুর", "en": "The Green Family — Nasal Hum" }, "ar": "غُنَّة • إِخْفَاء", "color": "green", "letters": "نّ مّ • ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك • مْ + ب", "desc": { "bn": "গুন্নাহ, ইখফা ও ইখফা শাফাবী — তিনটিতেই দুই হরকত নাকি সুর।", "en": "Ghunnah, ikhfa and ikhfa shafawi — all three carry a 2-count nasal hum." }, "how": { "bn": "নাক দিয়ে দুই হরকত গুনগুন; নাক চাপলে আওয়াজ আটকে যাবে।", "en": "Hum through the nose for 2 counts; pinching the nose should block it." },
          "examples": [
            { "ar": "إِنَّ", "hl": "نَّ", "tr": { "bn": "ইন্‌ঁনা", "en": "inna" } },
            { "ar": "يُنْفِقُونَ", "hl": "نْف", "tr": { "bn": "ইউঁনফিক্বূন", "en": "yunfiqoon" } },
            { "ar": "وَمَا هُمْ بِمُؤْمِنِينَ", "hl": "مْ ب", "tr": { "bn": "ওয়ামা হুমঁ বিমু'মিনীন", "en": "wa maa hum bimu'mineen" } }
          ] },
        { "type": "rule", "name": { "bn": "ধূসর পরিবার — মিশে যাওয়া", "en": "The Gray Family — Merging" }, "ar": "إِدْغَام", "color": "gray", "letters": "ي ر م ل و ن • مْ + م", "desc": { "bn": "নূন সাকিন/তানবীন বা মীম সাকিন পরের হরফে মিশে অদৃশ্য — {{ي ن م و}} ও {{م}}-এ গুন্নাহসহ, {{ل ر}}-এ গুন্নাহ ছাড়া।", "en": "Noon sakinah/tanween or meem sakinah vanishes into the next letter — with ghunnah before {{ي ن م و}} and {{م}}, without ghunnah before {{ل ر}}." }, "how": { "bn": "প্রথম হরফটি বলবে না; পরের হরফকে তাশদীদসহ পড়ো।", "en": "Skip the first letter; read the next one with shaddah." },
          "examples": [
            { "ar": "مِنْ وَالٍ", "hl": "نْ و", "tr": { "bn": "মিওঁ ওয়া-ল", "en": "miw-waal" } },
            { "ar": "غَفُورٌ رَحِيمٌ", "hl": "رٌ ر", "tr": { "bn": "গাফূরুর রহীম", "en": "ghafoorur-raḥeem" } },
            { "ar": "كَمْ مِنْ فِئَةٍ", "hl": "مْ م", "tr": { "bn": "কামঁ মিন ফিআতিন", "en": "kam-min fi'atin" } }
          ] },
        { "type": "rule", "name": { "bn": "নীল — রূপ বদল", "en": "Blue — Transformation" }, "ar": "إِقْلَاب", "color": "blue", "letters": "ب", "desc": { "bn": "নূন সাকিন/তানবীনের পর {{ب}} — নূন হয়ে যায় মীম, সাথে গুন্নাহ।", "en": "Noon sakinah/tanween before {{ب}} — the noon becomes a meem, with ghunnah." }, "how": { "bn": "ঠোঁট আলতো মিলিয়ে ‘ম্‌’ + দুই হরকত গুন্নাহ।", "en": "Close the lips gently for ‘m’ + a 2-count hum." },
          "examples": [
            { "ar": "سَمِيعٌ بَصِيرٌ", "hl": "عٌ ب", "tr": { "bn": "সামী‘উমঁ বাছীর", "en": "samee'um-baṣeer" } }
          ] },
        { "type": "rule", "name": { "bn": "বেগুনি — স্পষ্ট", "en": "Purple — Clarity" }, "ar": "إِظْهَار", "color": "purple", "letters": "ء ه ع ح غ خ", "desc": { "bn": "গলার হরফের আগে নূন সাকিন/তানবীন, আর {{ب}} ও {{م}} ছাড়া সব হরফের আগে মীম সাকিন — পরিষ্কার পড়ো, গুন্নাহ টানবে না।", "en": "Noon sakinah/tanween before a throat letter, and meem sakinah before any letter except {{ب}} and {{م}} — read clearly, no held ghunnah." }, "how": { "bn": "পরিষ্কার ‘ন্‌’ বা ‘ম্‌’, তারপর সোজা পরের হরফ।", "en": "A clean ‘n’ or ‘m’, then straight on." },
          "examples": [
            { "ar": "عَلِيمٌ حَكِيمٌ", "hl": "مٌ ح", "tr": { "bn": "‘আলীমুন হাকীম", "en": "'aleemun ḥakeem" } },
            { "ar": "عَلَيْهِمْ وَلَا", "hl": "مْ و", "tr": { "bn": "‘আলাইহিম ওয়ালা", "en": "'alayhim wa laa" } }
          ] },
        { "type": "rule", "name": { "bn": "কমলা — লাফ", "en": "Orange — Bounce" }, "ar": "قَلْقَلَة", "color": "orange", "letters": "ق ط ب ج د", "desc": { "bn": "{{قُطْبُ جَدٍّ}}-এর হরফ সাকিন হলে প্রতিধ্বনি — শব্দের মাঝে ছোট, থামলে বড়।", "en": "When a letter of {{قُطْبُ جَدٍّ}} has sukun it echoes — small mid-word, bigger at a stop." }, "how": { "bn": "হালকা লাফ, কিন্তু কোনো হরকত যোগ নয়।", "en": "A light bounce, but never add a vowel." },
          "examples": [
            { "ar": "يَدْخُلُونَ", "hl": "دْ", "tr": { "bn": "ইয়াদ্‌খুলূন", "en": "yadkhuloon" } },
            { "ar": "الْفَلَقِ", "hl": "قِ", "tr": { "bn": "আলফালাক্ব্‌", "en": "al-falaq" } }
          ] },
        { "type": "rule", "name": { "bn": "লাল — টান", "en": "Red — Stretch" }, "ar": "مَدّ", "color": "red", "letters": "ا و ي", "desc": { "bn": "তবঈ ২; মুত্তাসিল ও মুনফাসিল ৪–৫; লাযিম ৬; আরিদ ও লীন থামলে ২/৪/৬।", "en": "Natural 2; muttasil and munfasil 4–5; lazim 6; 'arid and leen at a stop 2/4/6." }, "how": { "bn": "আঙুলে হরকত গুনে সমান মাপে টানো, পুরো তিলাওয়াতে একই মাপ রাখো।", "en": "Count on your fingers, stretch evenly, and keep the same length throughout." },
          "examples": [
            { "ar": "قَالَ", "hl": "قَا", "tr": { "bn": "ক্বা-লা", "en": "qaala" } },
            { "ar": "السَّمَاءِ", "hl": "مَاء", "tr": { "bn": "আসসামা----ই", "en": "as-samaaaa'i" } },
            { "ar": "الضَّالِّينَ", "hl": "ضَّا", "tr": { "bn": "আদ্দ্বা------ল্লীন", "en": "aḍ-ḍaaaaaal-leen" } }
          ] },
        { "type": "tip", "kind": "tip", "bn": "যেসব নিয়মের রং নেই সেগুলোও ভুলবে না: **মোটা-চিকন হরফ**, **রা-এর নিয়ম**, **আল্লাহ শব্দের লাম** আর **থামার নিয়ম**। এগুলো চোখে নয়, কানে ধরা পড়ে — তাই ভালো কারীর তিলাওয়াত বেশি বেশি শোনো।", "en": "Don't forget the rules that have no colour: **heavy and light letters**, **the Ra rules**, **the Lam of Allah** and **the stopping rules**. You catch these with your ears, not your eyes — so listen to good reciters often." },
        { "type": "table", "title": { "bn": "রং খোঁজো: সূরা ইখলাস", "en": "Colour hunt: Surah al-Ikhlas" }, "head": [ { "bn": "অংশ", "en": "Phrase" }, { "bn": "রং ও নিয়ম", "en": "Colour and rule" } ], "rows": [
          [ "قُلْ هُوَ اللّٰهُ", { "bn": "রং নেই — আল্লাহ শব্দের লাম মোটা (আগে যবর)", "en": "No colour — heavy Lam of Allah (fatha before)" } ],
          [ "أَحَدٌ", { "bn": "কমলা — থামলে বড় কলকলা", "en": "Orange — major qalqalah at the stop" } ],
          [ "لَمْ يَلِدْ", { "bn": "বেগুনি (মীম + {{ي}}) ও কমলা ({{دْ}})", "en": "Purple (meem + {{ي}}) and orange ({{دْ}})" } ],
          [ "وَلَمْ يُولَدْ", { "bn": "বেগুনি, লাল ({{يُو}} — ২ হরকত) ও কমলা", "en": "Purple, red ({{يُو}} — 2 counts) and orange" } ],
          [ "وَلَمْ يَكُنْ لَهُ", { "bn": "বেগুনি (মীম + {{ي}}) ও ধূসর (নূন + {{ل}}, গুন্নাহ ছাড়া)", "en": "Purple (meem + {{ي}}) and gray (noon + {{ل}}, no ghunnah)" } ],
          [ "كُفُوًا أَحَدٌ", { "bn": "বেগুনি (তানবীন + হামযা) ও কমলা", "en": "Purple (tanween + hamza) and orange" } ]
        ] },
        { "type": "practice", "bn": "তিনটি ছোট সূরা পড়ো। প্রতিটি শব্দে থেমে ভাবো: কোন রং? তারপর সুন্দর করে মিলিয়ে পড়ো।", "en": "Read three short surahs. On each word ask: which colour? Then recite them smoothly.", "lines": [
          "قُلْ هُوَ اللّٰهُ أَحَدٌ",
          "اللّٰهُ الصَّمَدُ",
          "لَمْ يَلِدْ وَلَمْ يُولَدْ",
          "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
          "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
          "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
          "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
          "وَالْعَصْرِ",
          "إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ",
          "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ"
        ] },
        { "type": "quiz", "title": { "bn": "বড় মিশ্র পরীক্ষা", "en": "The big mixed quiz" }, "items": [
          { "q": { "bn": "এই কোর্সে ইখফার রং কী?", "en": "In this course, what colour is ikhfa?" }, "options": [ { "bn": "সবুজ", "en": "Green" }, { "bn": "নীল", "en": "Blue" }, { "bn": "লাল", "en": "Red" } ], "answer": 0 },
          { "q": { "bn": "নীল রং কোন নিয়মের?", "en": "Which rule is blue?" }, "options": [ { "bn": "ইদগাম", "en": "Idgham" }, { "bn": "ইকলাব", "en": "Iqlab" }, { "bn": "কলকলা", "en": "Qalqalah" } ], "answer": 1 },
          { "q": { "bn": "এখানে কোন নিয়ম?", "en": "Which rule is here?" }, "ar": "مِنْ نِعْمَةٍ", "options": [ { "bn": "গুন্নাহসহ ইদগাম", "en": "Idgham with ghunnah" }, { "bn": "ইযহার", "en": "Izhar" }, { "bn": "ইখফা", "en": "Ikhfa" } ], "answer": 0 },
          { "q": { "bn": "এখানে কোন নিয়ম?", "en": "Which rule is here?" }, "ar": "يَنْهَوْنَ", "options": [ { "bn": "ইখফা", "en": "Ikhfa" }, { "bn": "ইযহার", "en": "Izhar" }, { "bn": "ইদগাম", "en": "Idgham" } ], "answer": 1, "explain": { "bn": "নূন সাকিনের পর গলার হরফ {{ه}}।", "en": "Noon sakinah followed by the throat letter {{ه}}." } },
          { "q": { "bn": "এখানে কোন নিয়ম?", "en": "Which rule is here?" }, "ar": "كُنْتُمْ", "options": [ { "bn": "ইখফা", "en": "Ikhfa" }, { "bn": "ইকলাব", "en": "Iqlab" }, { "bn": "ইযহার", "en": "Izhar" } ], "answer": 0, "explain": { "bn": "নূন সাকিন + {{ت}} = ইখফা।", "en": "Noon sakinah + {{ت}} = ikhfa." } },
          { "q": { "bn": "এখানে কোন নিয়ম?", "en": "Which rule is here?" }, "ar": "أَنْبِئُونِي", "options": [ { "bn": "ইখফা শাফাবী", "en": "Ikhfa shafawi" }, { "bn": "ইকলাব", "en": "Iqlab" }, { "bn": "গুন্নাহসহ ইদগাম", "en": "Idgham with ghunnah" } ], "answer": 1 },
          { "q": { "bn": "{{عَلَيْهِمْ وَلَا}}-তে মীম কেমন?", "en": "How is the meem in {{عَلَيْهِمْ وَلَا}}?" }, "options": [ { "bn": "ইযহার শাফাবী — স্পষ্ট", "en": "Izhar shafawi — clear" }, { "bn": "ইদগাম শাফাবী", "en": "Idgham shafawi" }, { "bn": "ইখফা শাফাবী", "en": "Ikhfa shafawi" } ], "answer": 0 },
          { "q": { "bn": "{{يَا أَيُّهَا}}-তে মাদ্দ কত হরকত?", "en": "How long is the madd in {{يَا أَيُّهَا}}?" }, "options": [ "2", "4–5", "6" ], "answer": 1, "explain": { "bn": "মাদ্দ মুনফাসিল।", "en": "Madd munfasil." } },
          { "q": { "bn": "{{الْحَاقَّةُ}}-তে মাদ্দ কত হরকত?", "en": "How long is the madd in {{الْحَاقَّةُ}}?" }, "options": [ "2", "4", "6" ], "answer": 2, "explain": { "bn": "আলিফের পর স্থায়ী তাশদীদ — মাদ্দ লাযিম।", "en": "A permanent shaddah after the alif — madd lazim." } },
          { "q": { "bn": "কোন শব্দে কলকলা আছে?", "en": "Which word has qalqalah?" }, "options": [ "يَجْعَلُونَ", "يَعْلَمُونَ", "يَسْمَعُونَ" ], "answer": 0, "explain": { "bn": "{{جْ}} — সাকিন জীম।", "en": "{{جْ}} — a sakin jim." } },
          { "q": { "bn": "{{شَهِدَ اللّٰهُ}}-তে আল্লাহ শব্দের লাম কেমন?", "en": "In {{شَهِدَ اللّٰهُ}}, how is the Lam of Allah?" }, "options": [ { "bn": "মোটা", "en": "Heavy" }, { "bn": "চিকন", "en": "Light" } ], "answer": 0 },
          { "q": { "bn": "{{فِرْعَوْنَ}}-এ রা কেমন?", "en": "How is the Ra in {{فِرْعَوْنَ}}?" }, "options": [ { "bn": "মোটা", "en": "Heavy" }, { "bn": "চিকন", "en": "Light" } ], "answer": 1, "explain": { "bn": "রা সাকিন, আগে আসল যের, পরে মোটা হরফ নেই।", "en": "Sakin Ra after an original kasra, with no heavy letter after it." } },
          { "q": { "bn": "{{حَكِيمًا}}-তে থামলে কীভাবে পড়বে?", "en": "How do you stop on {{حَكِيمًا}}?" }, "options": [ { "bn": "হাকীমা-", "en": "ḥakeemaa" }, { "bn": "হাকীমান", "en": "ḥakeeman" }, { "bn": "হাকীমাহ", "en": "ḥakeemah" } ], "answer": 0 },
          { "q": { "bn": "কোন হরফটি সবসময় মোটা?", "en": "Which letter is always heavy?" }, "options": [ "ظ", "ذ", "ز" ], "answer": 0 },
          { "q": { "bn": "{{ثُمَّ}}-এ কী করতে হবে?", "en": "What must you do in {{ثُمَّ}}?" }, "options": [ { "bn": "দুই হরকত গুন্নাহ", "en": "A 2-count ghunnah" }, { "bn": "ছয় হরকত মাদ্দ", "en": "A 6-count madd" }, { "bn": "কলকলা", "en": "Qalqalah" } ], "answer": 0 },
          { "q": { "bn": "এই চিহ্ন দেখলে কী করবে?", "en": "What do you do at this sign?" }, "ar": "م", "options": [ { "bn": "অবশ্যই থামবে", "en": "Must stop" }, { "bn": "থামবে না", "en": "Do not stop" }, { "bn": "সাকতা করবে", "en": "Make a saktah" } ], "answer": 0 }
        ] }
      ]
    }
  ]
});
