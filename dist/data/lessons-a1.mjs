const ex = (el, tr, en, note) => ({ el, tr, en, ...(note ? { note } : {}) });
const q = (prompt, options, answer, explanation) => ({ prompt, options, answer, explanation });

export const lessonsA1 = [
  {
    id: 'a1-letters', level: 'A1', title: 'Letters, sounds and stress', subtitle: 'Read your first Greek words.', unit: 'Unit 1 · Reading Greek', duration: 8,
    explanation: [
      'Greek has 24 letters. Many look familiar but sound different: Η is “ee”, Ρ is a lightly rolled “r”, Β is “v”, and Χ is a breathy “h” from the throat. Open the Alphabet page to hear every letter with an example word.',
      'Some letter pairs make a single sound: ου = “oo”, ει and οι = “ee”, αι = “e” as in bed, μπ = “b”, ντ = “d”. Δ and θ are the two “th” sounds: δ as in “this”, θ as in “thin”.',
      'Every word of two or more syllables has an accent on the stressed vowel: καφές, θάλασσα. Stress can change meaning: πότε means “when”, ποτέ means “never”.'
    ],
    examples: [
      ex('Ελλάδα', 'Elládha', 'Greece', 'ΛΛ is pronounced as one “l”.'),
      ex('ευχαριστώ', 'efharistó', 'thank you', 'ευ before χ sounds like “ef”.'),
      ex('παιδί', 'pedhí', 'child', 'αι sounds like “e”, and δ is the “th” of “this”.'),
      ex('μπανάνα', 'banána', 'banana', 'μπ at the start of a word sounds like “b”.'),
      ex('ντομάτα', 'domáta', 'tomato'),
      ex('ουρανός', 'ouranós', 'sky')
    ],
    questions: [
      q('Which letter makes the “th” sound in “thin”?', ['Δ', 'Θ', 'Τ'], 1, 'Θ (θήτα) is the “th” of thin. Δ is the softer “th” of this.'),
      q('How is ου pronounced?', ['like “oo” in food', 'like “ow” in cow', 'like “o” in off'], 0, 'ου always sounds like “oo”.'),
      q('The word παιδί sounds like…', ['pai-dee', 'pe-dhee', 'pa-ee-dee'], 1, 'αι is pronounced “e”, and δ is a soft “th”.'),
      q('What does the accent in καφές show?', ['The stressed syllable', 'A question', 'A long vowel'], 0, 'The accent marks where the word is stressed: ka-FES.')
    ]
  },
  {
    id: 'a1-greetings', level: 'A1', title: 'Hello, thanks, sorry', subtitle: 'Polite Greek for every day.', unit: 'Unit 2 · First words', duration: 6,
    explanation: [
      'Use Γεια σου with friends, family and people your age, and Γεια σας with strangers, older people, officials or a group. σου is the informal “you”; σας is the formal or plural “you”.',
      'Say Καλημέρα in the morning, Καλησπέρα from the afternoon into the evening, and Καληνύχτα only when someone is going to bed or you leave late at night.',
      'Ευχαριστώ means “thank you”, and the answer is Παρακαλώ (“you’re welcome”). Παρακαλώ also means “please” and “pardon?”. Συγγνώμη means both “sorry” and “excuse me”.'
    ],
    examples: [
      ex('Γεια σου! Τι κάνεις;', 'Yia sou! Ti kánis?', 'Hi! How are you?'),
      ex('Καλημέρα σας.', 'Kaliméra sas.', 'Good morning. (formal)'),
      ex('Ευχαριστώ πολύ! — Παρακαλώ.', 'Efharistó polí! — Parakaló.', 'Thank you very much! — You’re welcome.'),
      ex('Συγγνώμη, δεν καταλαβαίνω.', 'Sighnómi, dhen katalavéno.', 'Sorry, I don’t understand.')
    ],
    questions: [
      q('You greet your teacher politely. Which is best?', ['Γεια σου.', 'Γεια σας.', 'Τα λέμε.'], 1, 'Γεια σας is the polite form for one person, or for a group.'),
      q('Which greeting do you use at 8 in the evening?', ['Καλημέρα.', 'Καλησπέρα.', 'Καλά.'], 1, 'Καλησπέρα is used from the afternoon into the evening.'),
      q('What does Παρακαλώ mean as a reply to Ευχαριστώ?', ['You’re welcome', 'Goodbye', 'I’m sorry'], 0, 'Ευχαριστώ — Παρακαλώ: thank you — you’re welcome.'),
      q('How do you say “excuse me” to get past someone?', ['Συγγνώμη.', 'Ευχαριστώ.', 'Καλησπέρα.'], 0, 'Συγγνώμη works for both “sorry” and “excuse me”.')
    ]
  },
  {
    id: 'a1-introductions', level: 'A1', title: 'Who are you?', subtitle: 'Name, country and languages.', unit: 'Unit 3 · Introductions', duration: 7,
    explanation: [
      'To give your name say Με λένε… (literally “they call me”). Ask a friend Πώς σε λένε; and ask formally Πώς σας λένε;',
      'The verb είμαι (“to be”) is irregular: εγώ είμαι, εσύ είσαι, αυτός / αυτή είναι, εμείς είμαστε, εσείς είστε, αυτοί είναι. The pronoun is usually dropped: Είμαι από την Τυνησία.',
      'Countries take an article: από την Τυνησία, από την Ελλάδα, από τη Γαλλία. Languages end in -ά: ελληνικά, αραβικά, γαλλικά, αγγλικά. Use μιλάω (I speak): Μιλάω αραβικά και γαλλικά.'
    ],
    examples: [
      ex('Με λένε Σάνα. Εσένα;', 'Me léne Sána. Eséna?', 'My name is Sana. And you?', 'Use your own name.'),
      ex('Είμαι από την Τυνησία.', 'Íme apó tin Tinisía.', 'I’m from Tunisia.'),
      ex('Μιλάω αραβικά, γαλλικά και λίγα ελληνικά.', 'Miláo araviká, ghalliká ke lígha elliniká.', 'I speak Arabic, French and a little Greek.'),
      ex('Χάρηκα για τη γνωριμία.', 'Hárika ya ti ghnorimía.', 'Nice to meet you.')
    ],
    questions: [
      q('Complete: Εγώ ___ από την Τυνησία.', ['είσαι', 'είμαι', 'είναι'], 1, 'εγώ είμαι = I am.'),
      q('How do you ask a friend their name?', ['Πώς σε λένε;', 'Από πού είσαι;', 'Τι κάνεις;'], 0, 'Πώς σε λένε; = What are you called?'),
      q('Which means “I speak a little Greek”?', ['Μιλάω λίγα ελληνικά.', 'Μένω στην Ελλάδα.', 'Μαθαίνω αγγλικά.'], 0, 'μιλάω = I speak, λίγα = a little.'),
      q('Choose the correct form: Εσύ ___ από τη Γαλλία;', ['είμαι', 'είσαι', 'είμαστε'], 1, 'εσύ είσαι = you are.')
    ]
  },
  {
    id: 'a1-articles', level: 'A1', title: 'The, a, and gender', subtitle: 'Every noun is masculine, feminine or neuter.', unit: 'Unit 4 · Nouns', duration: 8,
    explanation: [
      'Greek nouns have three genders, and the word for “the” changes with them: ο (masculine), η (feminine), το (neuter). ο καφές, η θάλασσα, το σπίτι.',
      'Endings help you guess: -ος and -ης are usually masculine, -α and -η feminine, -ο, -ι and -μα neuter. In the plural, masculine and feminine use οι and neuter uses τα: οι καφέδες, οι θάλασσες, τα σπίτια.',
      '“A” is ένας, μία, ένα. When a noun is the object of a verb it changes to the accusative: ο καφές → τον καφέ, ένας → έναν, η πόλη → την πόλη. Neuter nouns do not change: Θέλω ένα νερό.'
    ],
    examples: [
      ex('ο καφές — οι καφέδες', 'o kafés — i kafédhes', 'the coffee — the coffees'),
      ex('η θάλασσα — οι θάλασσες', 'i thálasa — i thálases', 'the sea — the seas'),
      ex('το σπίτι — τα σπίτια', 'to spíti — ta spítia', 'the house — the houses'),
      ex('Θέλω έναν καφέ και μία πορτοκαλάδα.', 'Thélo énan kafé ke mía portokaládha.', 'I want a coffee and an orangeade.')
    ],
    questions: [
      q('Which article goes with σπίτι?', ['ο', 'η', 'το'], 2, 'Words ending in -ι are usually neuter: το σπίτι.'),
      q('What is the plural of η θάλασσα?', ['οι θάλασσες', 'τα θάλασσα', 'οι θάλασσοι'], 0, 'Feminine -α becomes -ες in the plural, with οι.'),
      q('Choose the correct word: Θέλω ___ καφέ.', ['ένας', 'έναν', 'μία'], 1, 'The object of a verb takes the accusative: ένας becomes έναν.'),
      q('Which is the neuter plural article?', ['οι', 'τα', 'την'], 1, 'τα is used with neuter plurals: τα σπίτια, τα παιδιά.')
    ]
  },
  {
    id: 'a1-numbers', level: 'A1', title: 'Numbers and prices', subtitle: 'Count, pay and give your age.', unit: 'Unit 5 · Numbers', duration: 7,
    explanation: [
      '1 to 10: ένα, δύο, τρία, τέσσερα, πέντε, έξι, επτά (or εφτά), οκτώ (or οχτώ), εννέα (or εννιά), δέκα. Then έντεκα (11), δώδεκα (12) and είκοσι (20).',
      'Tens: τριάντα (30), σαράντα (40), πενήντα (50), εξήντα (60), εβδομήντα (70), ογδόντα (80), ενενήντα (90), εκατό (100). Build numbers with a space: είκοσι πέντε (25), σαράντα δύο (42).',
      '1, 3 and 4 change with gender: ένας / μία / ένα, τρεις / τρία, τέσσερις / τέσσερα. Prices use the neuter: Κάνει δύο ευρώ. Age: Είμαι είκοσι πέντε χρονών.'
    ],
    examples: [
      ex('Πόσο κάνει; — Κάνει δώδεκα ευρώ.', 'Póso káni? — Káni dhódheka evró.', 'How much is it? — It’s twelve euros.'),
      ex('Είμαι είκοσι πέντε χρονών.', 'Íme íkosi pénde hronón.', 'I’m twenty-five years old.', 'Use your own age.'),
      ex('Έχω τρία βιβλία και τέσσερα τετράδια.', 'Ého tría vivlía ke tésera tetrádhia.', 'I have three books and four notebooks.'),
      ex('Η τιμή είναι εκατό ευρώ.', 'I timí íne ekató evró.', 'The price is one hundred euros.')
    ],
    questions: [
      q('Which number is πέντε?', ['4', '5', '6'], 1, 'πέντε = 5.'),
      q('How do you say 20?', ['δέκα', 'είκοσι', 'τριάντα'], 1, 'είκοσι = 20.'),
      q('“Είναι σαράντα ευρώ.” How much?', ['14', '40', '60'], 1, 'σαράντα = 40.'),
      q('What is δώδεκα?', ['11', '12', '20'], 1, 'έντεκα = 11, δώδεκα = 12.')
    ]
  },
  {
    id: 'a1-time', level: 'A1', title: 'Days and time', subtitle: 'Plan your week and tell the time.', unit: 'Unit 6 · Time', duration: 7,
    explanation: [
      'The days: Δευτέρα, Τρίτη, Τετάρτη, Πέμπτη, Παρασκευή, Σάββατο, Κυριακή. To say “on” a day use the article: τη Δευτέρα, την Κυριακή, το Σάββατο.',
      'Ask Τι ώρα είναι; and answer with Είναι + hour: Είναι μία (one o’clock), Είναι δύο και μισή (half past two), Είναι τρεις και τέταρτο (quarter past three), Είναι πέντε παρά τέταρτο (quarter to five).',
      'For “at” a time say στη μία (at one) and στις + other hours: στις οκτώ. Parts of the day: το πρωί (morning), το μεσημέρι (midday), το απόγευμα (afternoon), το βράδυ (evening).'
    ],
    examples: [
      ex('Τι ώρα είναι; — Είναι δέκα και μισή.', 'Ti óra íne? — Íne dhéka ke misí.', 'What time is it? — It’s half past ten.'),
      ex('Το μάθημα αρχίζει στις έξι το απόγευμα.', 'To máthima arhízi stis éksi to apóyevma.', 'The lesson starts at six in the afternoon.'),
      ex('Την Πέμπτη έχω ραντεβού στη μία.', 'Tin Pémpti ého randevoú sti mía.', 'On Thursday I have an appointment at one.'),
      ex('Σήμερα είναι Τρίτη.', 'Símera íne Tríti.', 'Today is Tuesday.')
    ],
    questions: [
      q('Which day is Κυριακή?', ['Saturday', 'Sunday', 'Monday'], 1, 'Κυριακή = Sunday, Σάββατο = Saturday.'),
      q('“Είναι τρεις και μισή.” What time is it?', ['3:30', '2:30', '3:15'], 0, 'και μισή = half past.'),
      q('How do you say “at eight”?', ['στις οκτώ', 'στη οκτώ', 'οκτώ ώρα'], 0, 'Use στις with every hour except one: στη μία.'),
      q('Which question asks the time?', ['Τι ώρα είναι;', 'Τι μέρα είναι;', 'Πόσο κάνει;'], 0, 'ώρα = hour, time.')
    ]
  },
  {
    id: 'a1-family', level: 'A1', title: 'Family and “to have”', subtitle: 'Talk about the people in your life.', unit: 'Unit 7 · Family', duration: 7,
    explanation: [
      'Family words: η μητέρα / η μαμά, ο πατέρας / ο μπαμπάς, ο αδερφός (brother), η αδερφή (sister), ο γιος (son), η κόρη (daughter), ο άντρας / ο σύζυγος (husband), η γυναίκα / η σύζυγος (wife).',
      'Possessives come after the noun, and the article stays: η αδερφή μου (my sister), ο φίλος σου (your friend), η μητέρα του / της (his / her mother), η οικογένειά μας (our family).',
      'έχω (I have): έχω, έχεις, έχει, έχουμε, έχετε, έχουν. For “not”, put δεν before the verb: Δεν έχω αδέρφια (I have no siblings).'
    ],
    examples: [
      ex('Έχω μία αδερφή και έναν αδερφό.', 'Ého mía adherfí ke énan adherfó.', 'I have one sister and one brother.'),
      ex('Η μητέρα μου μένει στην Τύνιδα.', 'I mitéra mou méni stin Tínidha.', 'My mother lives in Tunis.'),
      ex('Ο φίλος μου λέγεται Νίκος.', 'O fílos mou léyete Níkos.', 'My friend is called Nikos.'),
      ex('Έχεις παιδιά; — Όχι, δεν έχω.', 'Éhis pedhiá? — Óhi, dhen ého.', 'Do you have children? — No, I don’t.')
    ],
    questions: [
      q('How do you say “my sister”?', ['η αδερφή μου', 'η μου αδερφή', 'μου η αδερφή'], 0, 'The possessive goes after the noun: η αδερφή μου.'),
      q('Complete: Εμείς ___ δύο παιδιά.', ['έχω', 'έχουμε', 'έχουν'], 1, 'εμείς έχουμε = we have.'),
      q('What does “ο φίλος σου” mean?', ['my friend', 'your friend', 'his friend'], 1, 'σου = your (informal).'),
      q('How do you say “I don’t have”?', ['Δεν έχω.', 'Δεν είμαι.', 'Όχι έχω.'], 0, 'δεν goes before the verb.')
    ]
  },
  {
    id: 'a1-verbs', level: 'A1', title: 'Everyday verbs', subtitle: 'The present tense in two patterns.', unit: 'Unit 8 · Verbs', duration: 8,
    explanation: [
      'Pattern 1 (γράφω, μένω, δουλεύω, θέλω): -ω, -εις, -ει, -ουμε, -ετε, -ουν. For example μένω, μένεις, μένει, μένουμε, μένετε, μένουν.',
      'Pattern 2 (μιλάω, αγαπάω, ξυπνάω): -άω, -άς, -άει, -άμε, -άτε, -άνε. For example μιλάω, μιλάς, μιλάει, μιλάμε, μιλάτε, μιλάνε. You will also see μιλώ.',
      'Questions are the same as statements with a question mark, and the Greek question mark looks like an English semicolon (;). For “not” add δεν: Δεν μιλάω γαλλικά στη δουλειά.'
    ],
    examples: [
      ex('Μένω στην Αθήνα και δουλεύω σε ένα εστιατόριο.', 'Méno stin Athína ke dhoulévo se éna estiatório.', 'I live in Athens and work in a restaurant.'),
      ex('Μιλάς αγγλικά;', 'Milás angliká?', 'Do you speak English?'),
      ex('Τι θέλετε;', 'Ti thélete?', 'What would you like? (formal)'),
      ex('Δεν μιλάμε ελληνικά στο σπίτι.', 'Dhen miláme elliniká sto spíti.', 'We don’t speak Greek at home.')
    ],
    questions: [
      q('Complete: Εσύ ___ στην Αθήνα. (μένω)', ['μένω', 'μένεις', 'μένουν'], 1, 'εσύ μένεις = you live.'),
      q('Which form means “we speak”?', ['μιλάμε', 'μιλάς', 'μιλάνε'], 0, 'Pattern 2: εμείς μιλάμε.'),
      q('How do you make a sentence negative?', ['Put δεν before the verb', 'Add ναι', 'Put όχι at the end'], 0, 'Δεν μιλάω = I don’t speak.'),
      q('Which one is a question?', ['Μιλάς ελληνικά;', 'Μιλάς ελληνικά.', 'Δεν μιλάς ελληνικά.'], 0, 'The Greek question mark is ;')
    ]
  },
  {
    id: 'a1-food', level: 'A1', title: 'Café and food', subtitle: 'Order a coffee and ask for the bill.', unit: 'Unit 9 · Eating out', duration: 6,
    explanation: [
      'Order politely with Θα ήθελα (I would like): Θα ήθελα έναν καφέ, παρακαλώ. You can also just name the item: Ένα τσάι, παρακαλώ.',
      'Useful words: ο καφές, το τσάι, το νερό, το ψωμί, το τυρί, η σαλάτα, το κρέας, το ψάρι, τα φρούτα, το γλυκό. A Greek coffee comes σκέτος (no sugar), μέτριος (medium) or γλυκός (sweet).',
      'Ask for the bill: Τον λογαριασμό, παρακαλώ. Say Καλή όρεξη! before eating and Είναι πολύ νόστιμο! (It’s delicious!) to compliment the food.'
    ],
    examples: [
      ex('Θα ήθελα έναν ελληνικό καφέ, μέτριο.', 'Tha íthela énan ellinikó kafé, métrio.', 'I’d like a Greek coffee, medium sweet.'),
      ex('Μία σαλάτα και ένα νερό, παρακαλώ.', 'Mía saláta ke éna neró, parakaló.', 'A salad and a water, please.'),
      ex('Είναι πολύ νόστιμο!', 'Íne polí nóstimo!', 'It’s delicious!'),
      ex('Τον λογαριασμό, παρακαλώ.', 'Ton loghariazmó, parakaló.', 'The bill, please.')
    ],
    questions: [
      q('How do you politely order a tea?', ['Θα ήθελα ένα τσάι, παρακαλώ.', 'Έχω ένα τσάι.', 'Είμαι ένα τσάι.'], 0, 'Θα ήθελα = I would like.'),
      q('What does μέτριος mean for a Greek coffee?', ['No sugar', 'Medium sweet', 'Very sweet'], 1, 'σκέτος, μέτριος, γλυκός: none, medium, sweet.'),
      q('Which phrase asks for the bill?', ['Τον λογαριασμό, παρακαλώ.', 'Καλή όρεξη!', 'Τι ώρα είναι;'], 0, 'ο λογαριασμός = the bill.'),
      q('What do you say before eating?', ['Καλή όρεξη!', 'Καληνύχτα!', 'Συγγνώμη!'], 0, 'Καλή όρεξη = good appetite.')
    ]
  },
  {
    id: 'a1-shopping', level: 'A1', title: 'Shopping', subtitle: 'Ask for things, prices and sizes.', unit: 'Unit 10 · Shopping', duration: 6,
    explanation: [
      'Ask a price with Πόσο κάνει; for one thing and Πόσο κάνουν; for several. The answer uses κάνει or είναι: Κάνει τρία ευρώ.',
      'Ask whether a shop has something with Έχετε…; and say what you want with Θέλω… or Ψάχνω… (I’m looking for…). Point and say αυτό (this) or εκείνο (that).',
      'Adjectives: μικρό (small), μεγάλο (big), φθηνό (cheap), ακριβό (expensive). Decide with Θα το πάρω (I’ll take it). Pay με κάρτα (by card) or μετρητά (in cash).'
    ],
    examples: [
      ex('Πόσο κάνει αυτό το φουλάρι;', 'Póso káni aftó to foulári?', 'How much is this scarf?'),
      ex('Έχετε αυτό σε μικρό μέγεθος;', 'Éhete aftó se mikró méyethos?', 'Do you have this in a small size?'),
      ex('Είναι φθηνό. Θα το πάρω.', 'Íne fthinó. Tha to páro.', 'It’s cheap. I’ll take it.'),
      ex('Μπορώ να πληρώσω με κάρτα;', 'Boró na pliróso me kárta?', 'Can I pay by card?')
    ],
    questions: [
      q('How do you ask “How much is it?”', ['Πόσο κάνει;', 'Τι ώρα είναι;', 'Πού είναι;'], 0, 'Πόσο = how much.'),
      q('Which word means “expensive”?', ['φθηνό', 'ακριβό', 'μικρό'], 1, 'ακριβό = expensive, φθηνό = cheap.'),
      q('What does “Θα το πάρω” mean?', ['I’ll take it', 'I’ll pay later', 'I’m just looking'], 0, 'Literally “I will take it”.'),
      q('How do you ask whether a shop has something?', ['Έχετε…;', 'Είστε…;', 'Μένετε…;'], 0, 'Έχετε; = Do you have?')
    ]
  },
  {
    id: 'a1-directions', level: 'A1', title: 'Places and directions', subtitle: 'Find your way around town.', unit: 'Unit 11 · Around town', duration: 7,
    explanation: [
      'Ask with Πού είναι…; (Where is…?). Answers use ευθεία (straight on), αριστερά (left), δεξιά (right), κοντά (near), μακριά (far), δίπλα σε (next to) and απέναντι από (opposite).',
      'σε (in / at / to) joins the article: σε + το = στο, σε + τη(ν) = στη(ν), σε + τον = στον. Στο σπίτι (at home), στην Αθήνα (in Athens), στον σταθμό (at the station).',
      'Places: το φαρμακείο (pharmacy), η τράπεζα (bank), η στάση (stop), ο σταθμός (station), το σούπερ μάρκετ, το νοσοκομείο (hospital), η πλατεία (square).'
    ],
    examples: [
      ex('Πού είναι η στάση του λεωφορείου;', 'Pou íne i stási tou leoforíou?', 'Where is the bus stop?'),
      ex('Πηγαίνετε ευθεία και μετά στρίψτε δεξιά.', 'Piyénete efthía ke metá strípste dheksiá.', 'Go straight on and then turn right.'),
      ex('Το σούπερ μάρκετ είναι δίπλα στην τράπεζα.', 'To soúper márket íne dhípla stin trápeza.', 'The supermarket is next to the bank.'),
      ex('Είναι μακριά; — Όχι, είναι πέντε λεπτά με τα πόδια.', 'Íne makriá? — Óhi, íne pénde leptá me ta pódhia.', 'Is it far? — No, it’s five minutes on foot.')
    ],
    questions: [
      q('Which word means “left”?', ['δεξιά', 'αριστερά', 'ευθεία'], 1, 'αριστερά = left, δεξιά = right.'),
      q('σε + το σπίτι =', ['στο σπίτι', 'στη σπίτι', 'στον σπίτι'], 0, 'σε + το = στο.'),
      q('How do you ask where the pharmacy is?', ['Πού είναι το φαρμακείο;', 'Τι είναι το φαρμακείο;', 'Πότε είναι το φαρμακείο;'], 0, 'Πού = where.'),
      q('What does “μακριά” mean?', ['far', 'near', 'next to'], 0, 'μακριά = far, κοντά = near.')
    ]
  },
  {
    id: 'a1-routine', level: 'A1', title: 'My day', subtitle: 'Describe a normal day.', unit: 'Unit 12 · Daily life', duration: 7,
    explanation: [
      'Daily verbs: ξυπνάω (wake up), τρώω (eat), πίνω (drink), πηγαίνω (go), δουλεύω (work), διαβάζω (study, read), γυρίζω (come back), κοιμάμαι (sleep). Learn κοιμάμαι as a set phrase for now.',
      'Put events in order with πρώτα (first), μετά (then) and τέλος (finally).',
      'Frequency: κάθε μέρα (every day), συχνά (often), μερικές φορές (sometimes). Never: δεν… ποτέ — Δεν πίνω ποτέ καφέ το βράδυ.'
    ],
    examples: [
      ex('Ξυπνάω στις επτά και πίνω καφέ.', 'Ksipnáo stis eptá ke píno kafé.', 'I wake up at seven and drink coffee.'),
      ex('Πρώτα πηγαίνω στη δουλειά και μετά στο μάθημα.', 'Próta piyéno sti dhouliá ke metá sto máthima.', 'First I go to work, then to class.'),
      ex('Το βράδυ διαβάζω ελληνικά.', 'To vrádhi dhiavázo elliniká.', 'In the evening I study Greek.'),
      ex('Κοιμάμαι στις έντεκα.', 'Kimáme stis éndeka.', 'I go to sleep at eleven.')
    ],
    questions: [
      q('Which phrase means “every day”?', ['κάθε μέρα', 'κάθε βράδυ', 'ποτέ'], 0, 'κάθε = every, μέρα = day.'),
      q('How do you say “at seven”?', ['στις επτά', 'στη επτά', 'στο επτά'], 0, 'στις + hour.'),
      q('What does ξυπνάω mean?', ['I wake up', 'I eat', 'I sleep'], 0, 'ξυπνάω = I wake up.'),
      q('Complete: ___ δουλεύω και μετά διαβάζω. (first)', ['Τέλος', 'Πρώτα', 'Ποτέ'], 1, 'πρώτα = first.')
    ]
  },
  {
    id: 'a1-forms', level: 'A1', title: 'Forms and personal details', subtitle: 'Fill in a form correctly.', unit: 'Unit 13 · Writing', duration: 6,
    explanation: [
      'Form labels: Όνομα (first name), Επώνυμο (surname), Πατρώνυμο (father’s name), Ημερομηνία γέννησης (date of birth), Τόπος γέννησης (place of birth), Υπηκοότητα (nationality), Διεύθυνση (address), Τηλέφωνο, Υπογραφή (signature), Ημερομηνία (date).',
      'Dates are written day / month / year: 05/03/1998. Months: Ιανουάριος, Φεβρουάριος, Μάρτιος, Απρίλιος, Μάιος, Ιούνιος, Ιούλιος, Αύγουστος, Σεπτέμβριος, Οκτώβριος, Νοέμβριος, Δεκέμβριος.',
      'Exam rule: in the official writing paper you must not write your real name anywhere. Use an invented name.'
    ],
    examples: [
      ex('Επώνυμο: Παπαδοπούλου', 'Epónimo: Papadhopoúlou', 'Surname: Papadopoulou'),
      ex('Υπηκοότητα: Τυνησιακή', 'Ipikoótita: Tinisiakí', 'Nationality: Tunisian'),
      ex('Ημερομηνία γέννησης: 12/04/1999', 'Imerominía yénisis: 12/04/1999', 'Date of birth: 12 April 1999'),
      ex('Διεύθυνση: Ερμού 15, Αθήνα', 'Dhiéfthinsi: Ermoú 15, Athína', 'Address: 15 Ermou Street, Athens')
    ],
    questions: [
      q('What goes under “Επώνυμο”?', ['First name', 'Surname', 'Date'], 1, 'Επώνυμο = surname, Όνομα = first name.'),
      q('Which label asks for your nationality?', ['Υπηκοότητα', 'Υπογραφή', 'Διεύθυνση'], 0, 'Υπηκοότητα = nationality.'),
      q('What does “Ημερομηνία γέννησης” ask for?', ['Date of birth', 'Phone number', 'Place of birth'], 0, 'γέννηση = birth.'),
      q('In the official writing paper, which name should you use?', ['Your real name', 'An invented name', 'Your teacher’s name'], 1, 'The official instructions say candidates must not write their real name.')
    ]
  }
];
