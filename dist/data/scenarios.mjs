// Turns alternate: the other person speaks, then you reply.
const them = (el, tr, en) => ({ speaker: 'them', el, tr, en });
const you = (el, tr, en, alternatives = []) => ({ speaker: 'you', el, tr, en, alternatives });

export const scenarios = [
  {
    id: 'meeting', icon: '👋', level: 'A1', title: 'Meeting someone new', subtitle: 'Introduce yourself at a language class.',
    turns: [
      them('Γεια σου! Πώς σε λένε;', 'Yia sou! Pos se léne?', 'Hi! What’s your name?'),
      you('Με λένε Σάνα. Εσένα;', 'Me léne Sána. Eséna?', 'My name is Sana. And you?', ['Με λένε Σάνα. Κι εσένα;']),
      them('Με λένε Νίκο. Από πού είσαι;', 'Me léne Níko. Apó pou íse?', 'I’m Nikos. Where are you from?'),
      you('Είμαι από την Τυνησία.', 'Íme apó tin Tinisía.', 'I’m from Tunisia.'),
      them('Μιλάς ελληνικά;', 'Milás elliniká?', 'Do you speak Greek?'),
      you('Μιλάω λίγα ελληνικά.', 'Miláo lígha elliniká.', 'I speak a little Greek.', ['Λίγα ελληνικά.']),
      them('Μπράβο! Μιλάς πολύ καλά.', 'Brávo! Milás polí kalá.', 'Well done! You speak very well.'),
      you('Ευχαριστώ! Χάρηκα.', 'Efharistó! Hárika.', 'Thank you! Nice to meet you.')
    ]
  },
  {
    id: 'family', icon: '🫶', level: 'A1', title: 'Sunday lunch with the family', subtitle: 'Chat with his mother at the table.',
    turns: [
      them('Καλώς την! Τι κάνεις, κορίτσι μου;', 'Kalós tin! Ti kánis, korítsi mou?', 'Welcome! How are you, my girl?'),
      you('Καλά, ευχαριστώ. Εσείς τι κάνετε;', 'Kalá, efharistó. Esís ti kánete?', 'Fine, thank you. How are you?', ['Καλά, ευχαριστώ. Εσείς;']),
      them('Μια χαρά! Τα ελληνικά σου είναι όλο και καλύτερα!', 'Mia hará! Ta elliniká sou íne ólo ke kalítera!', 'Very well! Your Greek keeps getting better!'),
      you('Ευχαριστώ! Διαβάζω για τις εξετάσεις.', 'Efharistó! Dhiavázo ya tis exetásis.', 'Thanks! I’m studying for the exams.', ['Ευχαριστώ! Μαθαίνω ελληνικά κάθε μέρα.']),
      them('Κάθισε. Θέλεις λίγο μουσακά;', 'Káthise. Thélis lígho mousaká?', 'Sit down. Would you like some moussaka?'),
      you('Ναι, ευχαριστώ. Μυρίζει υπέροχα!', 'Ne, efharistó. Mirízi ipéroha!', 'Yes, thank you. It smells wonderful!', ['Ναι, ευχαριστώ.']),
      them('Σου αρέσει η ελληνική κουζίνα;', 'Sou arési i ellinikí kouzína?', 'Do you like Greek cooking?'),
      you('Πολύ! Είναι νόστιμο. Μοιάζει με την τυνησιακή κουζίνα.', 'Polí! Íne nóstimo. Miázi me tin tinisiakí kouzína.', 'Very much! It’s delicious. It’s like Tunisian cooking.', ['Πολύ! Είναι πολύ νόστιμο.'])
    ]
  },
  {
    id: 'cafe', icon: '☕', level: 'A1', title: 'At the café', subtitle: 'Order a coffee and something to eat.',
    turns: [
      them('Καλημέρα! Τι θα πάρετε;', 'Kaliméra! Ti tha párete?', 'Good morning! What will you have?'),
      you('Θα ήθελα έναν καφέ, παρακαλώ.', 'Tha íthela énan kafé, parakaló.', 'I’d like a coffee, please.', ['Έναν καφέ, παρακαλώ.']),
      them('Ελληνικό ή φρέντο;', 'Ellinikó i frédo?', 'Greek or freddo?'),
      you('Έναν ελληνικό, μέτριο.', 'Énan ellinikó, métrio.', 'A Greek coffee, medium sweet.'),
      them('Θέλετε κάτι να φάτε;', 'Thélete káti na fáte?', 'Would you like something to eat?'),
      you('Ναι, μία τυρόπιτα, παρακαλώ.', 'Ne, mía tirópita, parakaló.', 'Yes, a cheese pie, please.'),
      them('Αμέσως. Κάτι άλλο;', 'Amésos. Káti állo?', 'Right away. Anything else?'),
      you('Όχι, ευχαριστώ. Τον λογαριασμό, παρακαλώ.', 'Óhi, efharistó. Ton loghariazmó, parakaló.', 'No, thank you. The bill, please.')
    ]
  },
  {
    id: 'market', icon: '🍎', level: 'A1', title: 'At the market', subtitle: 'Buy fruit and pay.',
    turns: [
      them('Καλησπέρα. Τι θα θέλατε;', 'Kalispéra. Ti tha thélate?', 'Good afternoon. What would you like?'),
      you('Ένα κιλό μήλα, παρακαλώ.', 'Éna kiló míla, parakaló.', 'A kilo of apples, please.', ['Θέλω ένα κιλό μήλα.']),
      them('Ορίστε. Κάτι άλλο;', 'Oríste. Káti állo?', 'Here you are. Anything else?'),
      you('Όχι, ευχαριστώ. Πόσο κάνει;', 'Óhi, efharistó. Póso káni?', 'No, thanks. How much is it?'),
      them('Δύο ευρώ.', 'Dhío evró.', 'Two euros.'),
      you('Ορίστε. Ευχαριστώ πολύ.', 'Oríste. Efharistó polí.', 'Here you are. Thank you very much.')
    ]
  },
  {
    id: 'directions', icon: '🧭', level: 'A1', title: 'Asking the way', subtitle: 'Find the pharmacy in a new neighbourhood.',
    turns: [
      them('Μπορώ να σας βοηθήσω;', 'Boró na sas voithíso?', 'Can I help you?'),
      you('Ναι, πού είναι το φαρμακείο;', 'Ne, pou íne to farmakío?', 'Yes, where is the pharmacy?', ['Συγγνώμη, πού είναι το φαρμακείο;']),
      them('Πηγαίνετε ευθεία και μετά αριστερά.', 'Piyénete efthía ke metá aristerá.', 'Go straight on and then left.'),
      you('Είναι μακριά;', 'Íne makriá?', 'Is it far?'),
      them('Όχι, είναι πέντε λεπτά με τα πόδια.', 'Óhi, íne pénde leptá me ta pódhia.', 'No, it’s five minutes on foot.'),
      you('Ευχαριστώ πολύ!', 'Efharistó polí!', 'Thank you very much!')
    ]
  },
  {
    id: 'doctor', icon: '🩺', level: 'A2', title: 'At the doctor', subtitle: 'Explain your symptoms.',
    turns: [
      them('Καλησπέρα. Τι έχετε;', 'Kalispéra. Ti éhete?', 'Good afternoon. What’s wrong?'),
      you('Έχω πυρετό και με πονάει ο λαιμός.', 'Ého piretó ke me ponái o laimós.', 'I have a fever and my throat hurts.'),
      them('Από πότε;', 'Apó póte?', 'Since when?'),
      you('Από χθες.', 'Apó hthes.', 'Since yesterday.'),
      them('Έχετε αλλεργίες;', 'Éhete aleryíes?', 'Do you have any allergies?'),
      you('Όχι, δεν έχω.', 'Óhi, dhen ého.', 'No, I don’t.'),
      them('Θα σας γράψω ένα φάρμακο. Θα το παίρνετε τρεις φορές την ημέρα.', 'Tha sas ghrápso éna fármako. Tha to pérnete tris forés tin iméra.', 'I’ll prescribe a medicine. Take it three times a day.'),
      you('Ευχαριστώ, γιατρέ.', 'Efharistó, yiatré.', 'Thank you, doctor.')
    ]
  },
  {
    id: 'services', icon: '🏛️', level: 'A2', title: 'At a public office', subtitle: 'Submit an application with your documents.',
    turns: [
      them('Καλημέρα σας. Πώς μπορώ να σας εξυπηρετήσω;', 'Kaliméra sas. Pos boró na sas eksipiretíso?', 'Good morning. How can I help you?'),
      you('Καλημέρα. Θα ήθελα να κάνω μια αίτηση.', 'Kaliméra. Tha íthela na káno mia étisi.', 'Good morning. I’d like to make an application.'),
      them('Έχετε κλείσει ραντεβού;', 'Éhete klísi randevoú?', 'Have you booked an appointment?'),
      you('Ναι, έχω ραντεβού στις δέκα.', 'Ne, ého randevoú stis dhéka.', 'Yes, I have an appointment at ten.'),
      them('Έχετε μαζί σας το διαβατήριο και τα δικαιολογητικά;', 'Éhete mazí sas to dhiavatírio ke ta dhikeoloyitiká?', 'Do you have your passport and the documents with you?'),
      you('Ναι, ορίστε.', 'Ne, oríste.', 'Yes, here you are.'),
      them('Ευχαριστώ. Συμπληρώστε αυτό το έντυπο, παρακαλώ.', 'Efharistó. Simbliróste aftó to éndipo, parakaló.', 'Thank you. Please fill in this form.'),
      you('Μπορείτε να με βοηθήσετε με το έντυπο;', 'Boríte na me voithísete me to éndipo?', 'Could you help me with the form?')
    ]
  },
  {
    id: 'flat', icon: '🏠', level: 'A2', title: 'Calling about a flat', subtitle: 'Ask about rent and arrange a viewing.',
    turns: [
      them('Εμπρός;', 'Embrós?', 'Hello?'),
      you('Καλημέρα, σας παίρνω για την αγγελία του διαμερίσματος.', 'Kaliméra, sas pérno ya tin angelía tou dhiamerízmatos.', 'Good morning, I’m calling about the flat advert.', ['Καλημέρα, τηλεφωνώ για το διαμέρισμα.']),
      them('Ναι, βέβαια. Έχει δύο υπνοδωμάτια και μεγάλο μπαλκόνι.', 'Ne, vévea. Éhi dhío ipnodhomátia ke meghálo balkóni.', 'Yes, of course. It has two bedrooms and a big balcony.'),
      you('Πόσο είναι το ενοίκιο;', 'Póso íne to eníkio?', 'How much is the rent?'),
      them('Πεντακόσια ευρώ τον μήνα.', 'Pendakósia evró ton mína.', 'Five hundred euros a month.'),
      you('Μπορώ να το δω αύριο;', 'Boró na to dho ávrio?', 'Can I see it tomorrow?'),
      them('Βεβαίως. Αύριο στις έξι;', 'Vevéos. Ávrio stis éksi?', 'Certainly. Tomorrow at six?'),
      you('Ναι, μια χαρά. Ευχαριστώ.', 'Ne, mia hará. Efharistó.', 'Yes, that’s fine. Thank you.')
    ]
  },
  {
    id: 'invitation', icon: '📞', level: 'A2', title: 'Making plans', subtitle: 'Invite a friend out on the phone.',
    turns: [
      them('Εμπρός;', 'Embrós?', 'Hello?'),
      you('Γεια σου, Μαρία! Θέλεις να βγούμε το Σάββατο;', 'Yia sou, María! Thélis na vghoúme to Sávato?', 'Hi Maria! Do you want to go out on Saturday?'),
      them('Ευχαρίστως! Πού θα πάμε;', 'Efharístos! Pou tha páme?', 'With pleasure! Where shall we go?'),
      you('Πάμε σινεμά;', 'Páme sinemá?', 'Shall we go to the cinema?'),
      them('Καλή ιδέα. Τι ώρα θα βρεθούμε;', 'Kalí idhéa. Ti óra tha vrethoúme?', 'Good idea. What time shall we meet?'),
      you('Στις επτά, μπροστά στο σινεμά.', 'Stis eptá, brostá sto sinemá.', 'At seven, in front of the cinema.'),
      them('Εντάξει. Τα λέμε το Σάββατο!', 'Endáksi. Ta léme to Sávato!', 'OK. See you on Saturday!'),
      you('Τα λέμε! Γεια σου!', 'Ta léme! Yia sou!', 'See you! Bye!')
    ]
  }
];
