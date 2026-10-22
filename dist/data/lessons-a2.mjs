const ex = (el, tr, en, note) => ({ el, tr, en, ...(note ? { note } : {}) });
const q = (prompt, options, answer, explanation) => ({ prompt, options, answer, explanation });

export const lessonsA2 = [
  {
    id: 'a2-past', level: 'A2', title: 'Talking about the past', subtitle: 'The simple past (aorist).', unit: 'A2 · Unit 1 · Past', duration: 9,
    explanation: [
      'The simple past uses the endings -α, -ες, -ε, -αμε, -ατε, -αν, and the stress moves towards the front of the word. Many regular verbs add σ or ψ: μιλάω → μίλησα (I spoke), δουλεύω → δούλεψα (I worked), γράφω → έγραψα (I wrote).',
      'Learn the common irregular ones by heart: πηγαίνω → πήγα, τρώω → έφαγα, πίνω → ήπια, κάνω → έκανα, βλέπω → είδα, έρχομαι → ήρθα, μένω → έμεινα, είμαι → ήμουν, έχω → είχα.',
      'Past time words: χθες (yesterday), προχθές (the day before yesterday), την περασμένη εβδομάδα (last week), πριν από δύο μέρες (two days ago), πέρσι (last year).'
    ],
    examples: [
      ex('Χθες πήγα στο σούπερ μάρκετ.', 'Hthes pígha sto soúper márket.', 'Yesterday I went to the supermarket.'),
      ex('Το Σάββατο μίλησα με τη φίλη μου.', 'To Sávato mílisa me ti fíli mou.', 'On Saturday I spoke with my friend.'),
      ex('Τι έκανες το Σαββατοκύριακο;', 'Ti ékanes to Savatokíriako?', 'What did you do at the weekend?'),
      ex('Πέρσι ήμουν στην Τύνιδα.', 'Pérsi ímoun stin Tínidha.', 'Last year I was in Tunis.')
    ],
    questions: [
      q('What is the past of πηγαίνω (I go)?', ['πήγα', 'πηγαίνα', 'θα πάω'], 0, 'πηγαίνω → πήγα is irregular.'),
      q('Which word means “yesterday”?', ['χθες', 'αύριο', 'σήμερα'], 0, 'χθες = yesterday, αύριο = tomorrow.'),
      q('Complete: Χθες ___ με τη μητέρα μου. (μιλάω)', ['μιλάω', 'μίλησα', 'θα μιλήσω'], 1, 'Past: μίλησα.'),
      q('What is the past of τρώω (I eat)?', ['έφαγα', 'τρώω', 'θα φάω'], 0, 'τρώω → έφαγα is irregular.')
    ]
  },
  {
    id: 'a2-future', level: 'A2', title: 'Plans and the future', subtitle: 'Use θα to say what will happen.', unit: 'A2 · Unit 2 · Future', duration: 7,
    explanation: [
      'Put θα before the verb. For one event use the “completed” form, which usually looks like the past without the augment: θα πάω (I’ll go), θα φάω (I’ll eat), θα δω (I’ll see), θα μιλήσω (I’ll speak), θα μείνω (I’ll stay).',
      'For something ongoing or repeated, use θα + present: Θα μένω στην Αθήνα (I’ll be living in Athens). At A2 the first pattern covers most plans.',
      'Future time words: αύριο (tomorrow), μεθαύριο (the day after tomorrow), την επόμενη εβδομάδα (next week), του χρόνου (next year), σύντομα (soon).'
    ],
    examples: [
      ex('Αύριο θα πάω στον γιατρό.', 'Ávrio tha páo ston yiatró.', 'Tomorrow I’ll go to the doctor.'),
      ex('Την επόμενη εβδομάδα θα δώσω εξετάσεις.', 'Tin epómeni evdhomádha tha dhóso eksetásis.', 'Next week I’ll take exams.'),
      ex('Θα σου τηλεφωνήσω το βράδυ.', 'Tha sou tilefoníso to vrádhi.', 'I’ll call you in the evening.'),
      ex('Του χρόνου θα μείνω στην Ελλάδα.', 'Tou hrónou tha míno stin Elládha.', 'Next year I’ll stay in Greece.')
    ],
    questions: [
      q('Which word makes the future?', ['θα', 'να', 'δεν'], 0, 'θα + verb = future.'),
      q('Complete: Αύριο ___ στη δουλειά. (I will go)', ['θα πάω', 'πήγα', 'πήγαινα'], 0, 'θα πάω = I will go.'),
      q('What does “την επόμενη εβδομάδα” mean?', ['next week', 'last week', 'this week'], 0, 'επόμενη = next, περασμένη = last.'),
      q('What does “Θα σου τηλεφωνήσω” mean?', ['I’ll call you', 'I called you', 'I’m calling you'], 0, 'θα + τηλεφωνήσω = will call.')
    ]
  },
  {
    id: 'a2-health', level: 'A2', title: 'At the doctor and pharmacy', subtitle: 'Say what hurts and ask for help.', unit: 'A2 · Unit 3 · Health', duration: 7,
    explanation: [
      'Body: το κεφάλι (head), ο λαιμός (throat, neck), το στομάχι (stomach), η πλάτη (back), το χέρι (hand, arm), το πόδι (leg, foot), το δόντι (tooth).',
      'Say what hurts with Με πονάει + the body part: Με πονάει το κεφάλι. For plural parts: Με πονάνε τα πόδια. Or say what you have: Έχω πονοκέφαλο (headache), πυρετό (fever), βήχα (cough). Είμαι άρρωστος / άρρωστη = I’m ill.',
      'At the pharmacy: Θα ήθελα κάτι για τον βήχα. The doctor may ask Από πότε; (Since when?) and tell you Παίρνετε ένα χάπι τρεις φορές την ημέρα (Take one pill three times a day).'
    ],
    examples: [
      ex('Με πονάει το στομάχι μου.', 'Me ponái to stomáhi mou.', 'My stomach hurts.'),
      ex('Έχω πυρετό από χθες.', 'Ého piretó apó hthes.', 'I’ve had a fever since yesterday.'),
      ex('Θα ήθελα κάτι για τον βήχα.', 'Tha íthela káti ya ton víha.', 'I’d like something for a cough.'),
      ex('Είμαι αλλεργική στην πενικιλίνη.', 'Íme aleryikí stin penikilíni.', 'I’m allergic to penicillin.', 'A man says αλλεργικός.')
    ],
    questions: [
      q('How do you say “I have a fever”?', ['Έχω πυρετό.', 'Είμαι πυρετό.', 'Πονάω πυρετό.'], 0, 'έχω + illness.'),
      q('Which part of the body is το στομάχι?', ['stomach', 'back', 'tooth'], 0, 'το στομάχι = stomach.'),
      q('What does “Με πονάει το κεφάλι” mean?', ['My head hurts', 'My head is big', 'I have a hat'], 0, 'Literally “the head hurts me”.'),
      q('The doctor says “τρεις φορές την ημέρα”. What does it mean?', ['three times a day', 'for three days', 'every third day'], 0, 'φορές = times, την ημέρα = per day.')
    ]
  },
  {
    id: 'a2-transport', level: 'A2', title: 'Transport and travel', subtitle: 'Buy tickets and check times.', unit: 'A2 · Unit 4 · Getting around', duration: 7,
    explanation: [
      'Transport: το λεωφορείο (bus), το μετρό, το τρένο, το ταξί, το αεροπλάνο, το πλοίο / το καράβι (ship), το ποδήλατο (bicycle). “By” is με: με το λεωφορείο, με τα πόδια (on foot).',
      'At the ticket office: Ένα εισιτήριο για τη Θεσσαλονίκη, παρακαλώ. — Απλό ή με επιστροφή; (one-way or return?). Ask Πόσο κοστίζει; Τι ώρα φεύγει; (When does it leave?) Τι ώρα φτάνει; (When does it arrive?)',
      'Verbs: φεύγω (leave), φτάνω (arrive), αλλάζω (change), ανεβαίνω (get on), κατεβαίνω (get off). ο σταθμός = station, η στάση = stop, η πλατφόρμα = platform.'
    ],
    examples: [
      ex('Με ποιο λεωφορείο πάω στο κέντρο;', 'Me pio leoforío páo sto kéndro?', 'Which bus do I take to the centre?'),
      ex('Το τρένο φεύγει στις οκτώ και είκοσι.', 'To tréno févyi stis októ ke íkosi.', 'The train leaves at 8:20.'),
      ex('Ένα εισιτήριο με επιστροφή, παρακαλώ.', 'Éna isitírio me epistrofí, parakaló.', 'A return ticket, please.'),
      ex('Πού πρέπει να κατεβώ;', 'Pou prépi na katevó?', 'Where should I get off?')
    ],
    questions: [
      q('What does “με επιστροφή” mean?', ['return', 'one-way', 'first class'], 0, 'επιστροφή = return.'),
      q('How do you ask “What time does it leave?”', ['Τι ώρα φεύγει;', 'Πού φεύγει;', 'Τι ώρα φτάνει;'], 0, 'φεύγω = leave, φτάνω = arrive.'),
      q('Which word means “station”?', ['σταθμός', 'στάση', 'εισιτήριο'], 0, 'ο σταθμός = station; η στάση = stop.'),
      q('How do you say “by bus”?', ['με το λεωφορείο', 'στο λεωφορείο', 'από λεωφορείο'], 0, 'με = by, with.')
    ]
  },
  {
    id: 'a2-housing', level: 'A2', title: 'Finding a home', subtitle: 'Rent a flat and describe it.', unit: 'A2 · Unit 5 · Home', duration: 7,
    explanation: [
      'Rooms: το υπνοδωμάτιο (bedroom), το σαλόνι (living room), η κουζίνα, το μπάνιο, το μπαλκόνι. A flat is το διαμέρισμα. Ads say δυάρι (two-room flat) or τριάρι (three-room flat).',
      'Ask: Πόσο είναι το ενοίκιο; (How much is the rent?) Είναι επιπλωμένο; (Is it furnished?) Τα κοινόχρηστα περιλαμβάνονται; (Are the building charges included?)',
      'Floors: το ισόγειο (ground floor), ο πρώτος όροφος, ο δεύτερος όροφος, ο τρίτος όροφος. Έχει ασανσέρ; (Is there a lift?)'
    ],
    examples: [
      ex('Ψάχνω διαμέρισμα με δύο υπνοδωμάτια.', 'Psáhno dhiamérizma me dhío ipnodhomátia.', 'I’m looking for a flat with two bedrooms.'),
      ex('Πόσο είναι το ενοίκιο; Τα κοινόχρηστα περιλαμβάνονται;', 'Póso íne to eníkio? Ta kinóhrista perilamvánonde?', 'How much is the rent? Are the building charges included?'),
      ex('Το διαμέρισμα είναι στον τρίτο όροφο και έχει ασανσέρ.', 'To dhiamérizma íne ston tríto órofo ke éhi asansér.', 'The flat is on the third floor and has a lift.'),
      ex('Είναι επιπλωμένο;', 'Íne epiploméno?', 'Is it furnished?')
    ],
    questions: [
      q('What is το υπνοδωμάτιο?', ['bedroom', 'kitchen', 'balcony'], 0, 'ύπνος = sleep, δωμάτιο = room.'),
      q('How do you ask about the rent?', ['Πόσο είναι το ενοίκιο;', 'Πού είναι το σπίτι;', 'Τι ώρα είναι;'], 0, 'το ενοίκιο = the rent.'),
      q('What does “επιπλωμένο” mean?', ['furnished', 'expensive', 'large'], 0, 'τα έπιπλα = furniture.'),
      q('Which phrase means “second floor”?', ['δεύτερος όροφος', 'δεύτερο δωμάτιο', 'πρώτο ισόγειο'], 0, 'ο όροφος = floor, storey.')
    ]
  },
  {
    id: 'a2-work', level: 'A2', title: 'Work and study', subtitle: 'Jobs, experience and plans.', unit: 'A2 · Unit 6 · Work', duration: 7,
    explanation: [
      'Job words often change with gender: ο δάσκαλος / η δασκάλα, ο φοιτητής / η φοιτήτρια, ο σερβιτόρος / η σερβιτόρα, ο γιατρός / η γιατρός, ο υπάλληλος / η υπάλληλος.',
      'Say your job with Είμαι + job (Είμαι φοιτήτρια) or Δουλεύω ως… / σε… (I work as… / in…). Study: Σπουδάζω ιατρική (I study medicine), Σπούδασα πληροφορική (I studied IT).',
      'Job-search phrases: Ψάχνω δουλειά. Έχω εμπειρία δύο χρόνια. Μπορώ να ξεκινήσω αμέσως. Ποιες είναι οι ώρες εργασίας; Full-time is πλήρης απασχόληση and part-time is μερική απασχόληση.'
    ],
    examples: [
      ex('Δουλεύω ως σερβιτόρα σε ένα εστιατόριο.', 'Dhoulévo os servitóra se éna estiatório.', 'I work as a waitress in a restaurant.'),
      ex('Σπούδασα πληροφορική στην Τύνιδα.', 'Spoúdhasa pliroforikí stin Tínidha.', 'I studied IT in Tunis.'),
      ex('Έχω εμπειρία δύο χρόνια.', 'Ého embiría dhío hrónia.', 'I have two years of experience.'),
      ex('Μπορώ να ξεκινήσω αμέσως.', 'Boró na ksekiníso amésos.', 'I can start immediately.')
    ],
    questions: [
      q('How do you say “I’m looking for work”?', ['Ψάχνω δουλειά.', 'Έχω δουλειά.', 'Δουλεύω αμέσως.'], 0, 'ψάχνω = I look for.'),
      q('What does “Σπούδασα” mean?', ['I studied', 'I am studying', 'I will study'], 0, 'Past of σπουδάζω.'),
      q('What does “μερική απασχόληση” mean?', ['part-time work', 'full-time work', 'a day off'], 0, 'μερική = partial.'),
      q('How do you say “I have two years of experience”?', ['Έχω εμπειρία δύο χρόνια.', 'Είμαι εμπειρία δύο.', 'Δουλεύω δύο εμπειρία.'], 0, 'έχω εμπειρία = I have experience.')
    ]
  },
  {
    id: 'a2-informal', level: 'A2', title: 'A friendly message', subtitle: 'Writing part A: write to a friend.', unit: 'A2 · Unit 7 · Writing', duration: 8,
    explanation: [
      'A friendly message has a greeting (Γεια σου Μαρία,), a question about them (Τι κάνεις; Ελπίζω να είσαι καλά.), your reason for writing (Σου γράφω για να…), a closing line (Τα λέμε σύντομα!) and a sign-off (Φιλιά, or Σε φιλώ,).',
      'Useful phrases: Σ’ ευχαριστώ για την πρόσκληση (thanks for the invitation). Δυστυχώς δεν μπορώ να έρθω γιατί… (unfortunately I can’t come because…). Μπορούμε να βρεθούμε… (we can meet…). Χρόνια πολλά! (happy birthday / best wishes).',
      'Link ideas with και (and), αλλά (but), γιατί (because) and γι’ αυτό (so). In the exam write about 80 to 100 words, answer every point in the task, and don’t use your real name.'
    ],
    examples: [
      ex('Γεια σου Μαρία, τι κάνεις; Ελπίζω να είσαι καλά.', 'Yia sou María, ti kánis? Elpízo na íse kalá.', 'Hi Maria, how are you? I hope you’re well.'),
      ex('Δυστυχώς δεν μπορώ να έρθω, γιατί δουλεύω το Σάββατο.', 'Dhistihós dhen boró na értho, yiatí dhoulévo to Sávato.', 'Unfortunately I can’t come, because I work on Saturday.'),
      ex('Μπορούμε να βρεθούμε την Κυριακή για καφέ;', 'Boroúme na vrethoúme tin Kiriakí ya kafé?', 'Can we meet on Sunday for coffee?'),
      ex('Χρόνια πολλά και φιλιά!', 'Hrónia pollá ke filiá!', 'Happy birthday, and love!')
    ],
    questions: [
      q('Which opening is friendly?', ['Γεια σου Μαρία,', 'Αξιότιμη κυρία,', 'Προς τη Γραμματεία,'], 0, 'Γεια σου + first name is informal.'),
      q('Which word means “because”?', ['γιατί', 'αλλά', 'μετά'], 0, 'γιατί = because (and “why?” in questions).'),
      q('Which sign-off is informal?', ['Φιλιά,', 'Με εκτίμηση,', 'Με σεβασμό,'], 0, 'Φιλιά = kisses, used with friends.'),
      q('What does “Δυστυχώς δεν μπορώ να έρθω” mean?', ['Unfortunately I can’t come', 'I can come soon', 'I would like to come'], 0, 'δυστυχώς = unfortunately.')
    ]
  },
  {
    id: 'a2-formal', level: 'A2', title: 'A formal email', subtitle: 'Writing part B: write to a school or office.', unit: 'A2 · Unit 8 · Writing', duration: 8,
    explanation: [
      'With people you don’t know, use the formal “you” (εσείς, σας). Open with Αξιότιμε κύριε… / Αξιότιμη κυρία… and close with Με εκτίμηση, (kind regards).',
      'Give your reason: Σας γράφω για να ρωτήσω… (I’m writing to ask…). Θα ήθελα να μάθω… (I would like to know…). Θα ήθελα πληροφορίες για… (I would like information about…).',
      'Ask politely with Μπορείτε να…; (Could you…?) and finish with Σας ευχαριστώ εκ των προτέρων (thank you in advance) or Περιμένω την απάντησή σας (I look forward to your reply).'
    ],
    examples: [
      ex('Αξιότιμη κυρία, σας γράφω για να ρωτήσω για τα μαθήματα ελληνικών.', 'Aksiótimi kiría, sas ghráfo ya na rotíso ya ta mathímata ellinikón.', 'Dear Madam, I am writing to ask about the Greek lessons.'),
      ex('Θα ήθελα να μάθω την τιμή και το πρόγραμμα.', 'Tha íthela na mátho tin timí ke to próghrama.', 'I would like to know the price and the timetable.'),
      ex('Μπορείτε να μου στείλετε περισσότερες πληροφορίες;', 'Boríte na mou stílete perisóteres pliroforíes?', 'Could you send me more information?'),
      ex('Σας ευχαριστώ εκ των προτέρων. Με εκτίμηση, Ελένη', 'Sas efharistó ek ton protéron. Me ektímisi, Eléni', 'Thank you in advance. Kind regards, Eleni')
    ],
    questions: [
      q('Which closing is formal?', ['Με εκτίμηση,', 'Φιλιά,', 'Τα λέμε,'], 0, 'Με εκτίμηση = with esteem.'),
      q('Which opening is formal?', ['Αξιότιμη κυρία,', 'Γεια σου,', 'Έλα,'], 0, 'Αξιότιμος / αξιότιμη = esteemed.'),
      q('Which one is a polite request?', ['Μπορείτε να μου στείλετε το πρόγραμμα;', 'Στείλε το πρόγραμμα.', 'Πρόγραμμα;'], 0, 'Μπορείτε να…; is polite and formal.'),
      q('What does “εκ των προτέρων” mean?', ['in advance', 'after that', 'because'], 0, 'Σας ευχαριστώ εκ των προτέρων = thank you in advance.')
    ]
  },
  {
    id: 'a2-invitations', level: 'A2', title: 'Invitations and plans', subtitle: 'Suggest, accept and refuse.', unit: 'A2 · Unit 9 · Social life', duration: 7,
    explanation: [
      'Invite with Θέλεις να…; (Do you want to…?) or Πάμε…; (Shall we go…?). After να use the “completed” verb form: να πάμε, να φάμε, να βγούμε.',
      'Accept: Ευχαρίστως! Καλή ιδέα! Εντάξει. Refuse politely: Λυπάμαι, αλλά δεν μπορώ. Έχω… (I’m sorry, but I can’t. I have…). Suggest another time: Μπορούμε να βρεθούμε αύριο;',
      'Fix the details: Πού και πότε θα βρεθούμε; (Where and when shall we meet?) Ας βρεθούμε στις επτά στην πλατεία. Ας means “let’s”.'
    ],
    examples: [
      ex('Θέλεις να βγούμε το Σάββατο;', 'Thélis na vghoúme to Sávato?', 'Do you want to go out on Saturday?'),
      ex('Ευχαρίστως! Τι ώρα;', 'Efharístos! Ti óra?', 'With pleasure! What time?'),
      ex('Λυπάμαι, δεν μπορώ. Έχω μάθημα.', 'Lipáme, dhen boró. Ého máthima.', 'Sorry, I can’t. I have a lesson.'),
      ex('Ας βρεθούμε στις επτά στην πλατεία.', 'As vrethoúme stis eptá stin platía.', 'Let’s meet at seven in the square.')
    ],
    questions: [
      q('Which phrase accepts an invitation?', ['Ευχαρίστως!', 'Λυπάμαι, δεν μπορώ.', 'Συγγνώμη.'], 0, 'Ευχαρίστως = with pleasure.'),
      q('Which phrase refuses politely?', ['Λυπάμαι, αλλά δεν μπορώ.', 'Εντάξει, πάμε.', 'Καλή ιδέα!'], 0, 'λυπάμαι = I’m sorry.'),
      q('What does “Ας βρεθούμε” mean?', ['Let’s meet', 'I will wait', 'We met'], 0, 'ας = let’s.'),
      q('Complete: Θέλεις να ___ σινεμά;', ['πάμε', 'πήγαμε', 'πηγαίναμε'], 0, 'After να use the completed form: να πάμε.')
    ]
  },
  {
    id: 'a2-opinions', level: 'A2', title: 'Likes, opinions and comparing', subtitle: 'Say what you prefer and why.', unit: 'A2 · Unit 10 · Opinions', duration: 7,
    explanation: [
      'Μου αρέσει (I like) agrees with the thing you like: Μου αρέσει ο καφές, but Μου αρέσουν τα ταξίδια (plural). Σου αρέσει; = Do you like it? Προτιμώ = I prefer: Προτιμώ το τσάι από τον καφέ.',
      'Compare with πιο + adjective + από: Η Αθήνα είναι πιο μεγάλη από τη Θεσσαλονίκη. Irregular forms: καλύτερος (better), χειρότερος (worse).',
      'Give opinions with Νομίζω ότι… (I think that…), Πιστεύω ότι… (I believe that…), Συμφωνώ (I agree), Διαφωνώ (I disagree), and give reasons with γιατί or επειδή (because).'
    ],
    examples: [
      ex('Μου αρέσουν τα ελληνικά νησιά.', 'Mou arésoun ta elliniká nisiá.', 'I like the Greek islands.'),
      ex('Προτιμώ το τσάι από τον καφέ.', 'Protimó to tsái apó ton kafé.', 'I prefer tea to coffee.'),
      ex('Η Αθήνα είναι πιο μεγάλη από τη Θεσσαλονίκη.', 'I Athína íne pio megháli apó ti Thesaloníki.', 'Athens is bigger than Thessaloniki.'),
      ex('Νομίζω ότι η ζωή στην πόλη είναι πιο ακριβή.', 'Nomízo óti i zoí stin póli íne pio akriví.', 'I think life in the city is more expensive.')
    ],
    questions: [
      q('How do you say “I like coffee”?', ['Μου αρέσει ο καφές.', 'Μου αρέσω καφέ.', 'Θέλω αρέσει καφές.'], 0, 'The liked thing is the subject: ο καφές.'),
      q('What does “πιο μεγάλο” mean?', ['bigger', 'smaller', 'very small'], 0, 'πιο = more.'),
      q('Which word means “I prefer”?', ['Προτιμώ', 'Πιστεύω', 'Διαφωνώ'], 0, 'προτιμώ = I prefer.'),
      q('What does “Συμφωνώ” mean?', ['I agree', 'I disagree', 'I think'], 0, 'συμφωνώ = I agree; διαφωνώ = I disagree.')
    ]
  },
  {
    id: 'a2-services', level: 'A2', title: 'Public services and offices', subtitle: 'Appointments, forms and documents.', unit: 'A2 · Unit 11 · Services', duration: 8,
    explanation: [
      'Offices: το ΚΕΠ (Κέντρο Εξυπηρέτησης Πολιτών, a citizens’ service centre), ο δήμος / το δημαρχείο (municipality, town hall), η τράπεζα, το ταχυδρομείο (post office), η αστυνομία (police). Start with Θα ήθελα να κλείσω ραντεβού.',
      'Paperwork: η αίτηση (application), το έντυπο (form), η βεβαίωση (certificate, confirmation), τα δικαιολογητικά (supporting documents), το πρωτότυπο (original), το φωτοαντίγραφο (photocopy), το διαβατήριο (passport), η υπογραφή (signature).',
      'Questions: Ποια δικαιολογητικά χρειάζονται; Πού μπορώ να καταθέσω την αίτηση; (Where can I submit the application?) Πότε θα είναι έτοιμο; Μπορείτε να με βοηθήσετε με το έντυπο;'
    ],
    examples: [
      ex('Θα ήθελα να κλείσω ραντεβού για την Τρίτη.', 'Tha íthela na klíso randevoú ya tin Tríti.', 'I’d like to book an appointment for Tuesday.'),
      ex('Ποια δικαιολογητικά χρειάζονται;', 'Pia dhikeoloyitiká hriázonde?', 'Which documents are needed?'),
      ex('Έχετε το πρωτότυπο και ένα φωτοαντίγραφο;', 'Éhete to protótipo ke éna fotoandíghrafo?', 'Do you have the original and a photocopy?'),
      ex('Πότε θα είναι έτοιμη η βεβαίωση;', 'Póte tha íne étimi i vevéosi?', 'When will the certificate be ready?')
    ],
    questions: [
      q('What is η αίτηση?', ['application', 'appointment', 'address'], 0, 'η αίτηση = application; το ραντεβού = appointment.'),
      q('Which question asks which documents you need?', ['Ποια δικαιολογητικά χρειάζονται;', 'Πού είναι το ΚΕΠ;', 'Τι ώρα είναι;'], 0, 'τα δικαιολογητικά = supporting documents.'),
      q('What is το φωτοαντίγραφο?', ['photocopy', 'passport', 'signature'], 0, 'φωτο + αντίγραφο = photo copy.'),
      q('How do you ask to book an appointment?', ['Θα ήθελα να κλείσω ραντεβού.', 'Θα ήθελα να πάω ραντεβού.', 'Έχω ραντεβού κλείσω.'], 0, 'κλείνω ραντεβού = book an appointment.')
    ]
  }
];
