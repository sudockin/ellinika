// Original practice papers that follow the official task formats of the Greek
// Language Certificate (Centre for the Greek Language). These are not official exam papers.
const TF = ['Σωστό (true)', 'Λάθος (false)'];
const tf = (prompt, isTrue, why) => ({ prompt, options: TF, answer: isTrue ? 0 : 1, why });
const pick = (prompt, options, answer, why) => ({ prompt, options, answer, why });

export const officialLinks = {
  info: 'https://www.greek-language.gr/certification/',
  samples: 'https://www.greek-language.gr/certification/node/12.html',
  structure: 'https://www.greek-language.gr/certification/node/119.html'
};

export const exam = {
  A1: {
    name: 'A1 · Elementary',
    writtenTotal: '1 hour 35 minutes',
    papers: {
      reading: {
        title: 'Reading', marks: 25, minutes: 30,
        official: ['True / false: 7 statements on a 120-word text', 'Matching: 6 answers with 2 extra options', 'Multiple choice (3 options): 4 questions', 'Fill the gaps: 4 gaps with 2 extra options'],
        tasks: [
          {
            id: 'a1r1', title: 'Task 1 · True or false', instructions: 'Read Maria’s email. Is each sentence true or false?',
            text: 'Γεια σου Άννα! Με λένε Μαρία και είμαι είκοσι οκτώ χρονών. Είμαι από τη Θεσσαλονίκη, αλλά τώρα μένω στην Αθήνα. Δουλεύω σε ένα μικρό βιβλιοπωλείο στο κέντρο. Η δουλειά μου αρχίζει στις εννιά το πρωί και τελειώνει στις πέντε το απόγευμα. Έχω έναν αδερφό. Ο αδερφός μου μένει στο Λονδίνο και είναι φοιτητής. Το Σάββατο πηγαίνω στη θάλασσα με τις φίλες μου. Την Κυριακή μένω σπίτι και μαγειρεύω. Μου αρέσει πολύ η μουσική. Εσύ τι κάνεις; Γράψε μου σύντομα! Φιλιά, Μαρία',
            textEn: 'Hi Anna! My name is Maria and I am twenty-eight. I am from Thessaloniki, but now I live in Athens. I work in a small bookshop in the centre. My work starts at nine in the morning and finishes at five in the afternoon. I have a brother. My brother lives in London and is a student. On Saturday I go to the sea with my friends. On Sunday I stay home and cook. I really like music. How are you? Write to me soon! Love, Maria',
            items: [
              tf('Η Μαρία είναι είκοσι οκτώ χρονών.', true, '“είμαι είκοσι οκτώ χρονών”'),
              tf('Η Μαρία μένει στη Θεσσαλονίκη.', false, 'She is from Thessaloniki but lives in Athens.'),
              tf('Η Μαρία δουλεύει σε βιβλιοπωλείο.', true, '“Δουλεύω σε ένα μικρό βιβλιοπωλείο”'),
              tf('Η δουλειά της τελειώνει στις πέντε.', true, '“τελειώνει στις πέντε το απόγευμα”'),
              tf('Ο αδερφός της μένει στην Αθήνα.', false, 'He lives in London.'),
              tf('Το Σάββατο η Μαρία μένει σπίτι.', false, 'On Saturday she goes to the sea.'),
              tf('Την Κυριακή η Μαρία μαγειρεύει.', true, '“Την Κυριακή μένω σπίτι και μαγειρεύω.”')
            ]
          },
          {
            id: 'a1r2', title: 'Task 2 · Matching', instructions: 'Which sign (A–H) matches each situation? Two signs are not used.',
            items: [
              ['Θέλεις να μάθεις πότε είναι ανοιχτό το μαγαζί.', 3, 'Open every day 9:00–21:00.'],
              ['Θέλεις να καπνίσεις. Πρέπει να βγεις έξω.', 4, 'Please do not smoke.'],
              ['Ψάχνεις δωμάτιο για να μείνεις.', 5, 'Room for rent.'],
              ['Είναι Δευτέρα και θέλεις να πας στο μαγαζί.', 0, 'Closed on Mondays.'],
              ['Θέλεις γλυκό και καφέ.', 1, 'Free coffee with every dessert.'],
              ['Θέλεις να βγεις από το κτίριο.', 6, 'Exit.']
            ].map(([prompt, answer, why]) => pick(prompt, ['Α. Κλειστά τη Δευτέρα', 'Β. Καφές δώρο με κάθε γλυκό', 'Γ. Προσοχή! Βρεγμένο πάτωμα', 'Δ. Ανοιχτά κάθε μέρα 9:00–21:00', 'Ε. Παρακαλούμε μην καπνίζετε', 'Ζ. Ενοικιάζεται δωμάτιο', 'Η. Έξοδος', 'Θ. Εισιτήρια στο περίπτερο'], answer, why))
          },
          {
            id: 'a1r3', title: 'Task 3 · Multiple choice', instructions: 'Read the notice and choose the right answer.',
            text: 'Μαθήματα ελληνικών για αρχάριους! Τα μαθήματα αρχίζουν τον Νοέμβριο. Είναι δύο φορές την εβδομάδα, τη Δευτέρα και την Τετάρτη, από τις έξι ως τις οκτώ το απόγευμα. Η τάξη είναι στην οδό Ερμού 12, στον δεύτερο όροφο. Το μάθημα κοστίζει εκατό ευρώ τον μήνα. Στην τάξη είναι μόνο δέκα μαθητές. Για πληροφορίες, τηλεφωνήστε στη γραμματεία.',
            textEn: 'Greek lessons for beginners! Lessons start in November. They are twice a week, on Monday and Wednesday, from six to eight in the evening. The classroom is at 12 Ermou Street, on the second floor. The course costs one hundred euros a month. There are only ten students in the class. For information, call the office.',
            items: [
              pick('Πόσες φορές την εβδομάδα είναι το μάθημα;', ['μία', 'δύο', 'τρεις'], 1, 'Monday and Wednesday: twice.'),
              pick('Τι ώρα είναι το μάθημα;', ['6:00–8:00 το απόγευμα', '9:00–11:00 το πρωί', '8:00–10:00 το βράδυ'], 0, '“από τις έξι ως τις οκτώ”'),
              pick('Πόσο κοστίζει;', ['δέκα ευρώ τον μήνα', 'εκατό ευρώ τον μήνα', 'διακόσια ευρώ τον μήνα'], 1, '“εκατό ευρώ τον μήνα”'),
              pick('Πόσοι μαθητές είναι στην τάξη;', ['δέκα', 'δώδεκα', 'είκοσι'], 0, '“μόνο δέκα μαθητές”')
            ]
          },
          {
            id: 'a1r4', title: 'Task 4 · Fill the gaps', instructions: 'Choose the right word for each gap. Two words are not used.',
            text: 'Ο Γιάννης (1) ___ στην Πάτρα. Κάθε πρωί (2) ___ στη δουλειά με το λεωφορείο. Στο διάλειμμα (3) ___ καφέ με τους συναδέλφους του. Το βράδυ (4) ___ σπίτι και βλέπει τηλεόραση.',
            textEn: 'Giannis lives in Patras. Every morning he goes to work by bus. On his break he drinks coffee with his colleagues. In the evening he comes back home and watches TV.',
            items: ['Κενό 1', 'Κενό 2', 'Κενό 3', 'Κενό 4'].map((prompt, i) => pick(prompt, ['μένει', 'πηγαίνει', 'πίνει', 'γυρίζει', 'είσαι', 'έχουμε'], i, ['μένει = lives', 'πηγαίνει = goes', 'πίνει = drinks', 'γυρίζει = comes back'][i]))
          }
        ]
      },
      listening: {
        title: 'Listening', marks: 25, minutes: 25,
        official: ['Choose the right picture: 7 answers', 'Comparison table: 6 answers', 'Multiple choice (3 options): 4 questions', 'Notes: fill 6 gaps'],
        tasks: [
          {
            id: 'a1l1', title: 'Task 1 · A phone message', instructions: 'Listen to Eleni’s message. True or false?',
            script: [{ speaker: 'Ελένη', el: 'Γεια σου Νίκο, είμαι η Ελένη. Σήμερα δεν μπορώ να έρθω στο μάθημα, γιατί είμαι άρρωστη. Έχω πυρετό και με πονάει το κεφάλι. Θα μείνω στο σπίτι δύο μέρες. Την Πέμπτη θα έρθω πάλι. Μπορείς να μου στείλεις τις σημειώσεις; Ευχαριστώ πολύ! Φιλιά.' }],
            scriptEn: 'Hi Nikos, it’s Eleni. Today I can’t come to class because I’m ill. I have a fever and a headache. I’ll stay at home for two days. I’ll come again on Thursday. Can you send me the notes? Thanks a lot! Love.',
            items: [
              tf('Η Ελένη είναι άρρωστη.', true, '“είμαι άρρωστη”'),
              tf('Η Ελένη έχει πυρετό.', true, '“Έχω πυρετό”'),
              tf('Θα μείνει στο σπίτι τρεις μέρες.', false, 'Two days: “δύο μέρες”.'),
              tf('Θα έρθει στο μάθημα την Πέμπτη.', true, '“Την Πέμπτη θα έρθω πάλι.”'),
              tf('Θέλει τις σημειώσεις από τον Νίκο.', true, '“Μπορείς να μου στείλεις τις σημειώσεις;”'),
              tf('Ο Νίκος είναι άρρωστος.', false, 'Eleni is the one who is ill.')
            ]
          },
          {
            id: 'a1l2', title: 'Task 2 · At the station', instructions: 'Listen to the announcement and choose the right answer.',
            script: [{ speaker: 'Ανακοίνωση', el: 'Προσοχή, παρακαλώ. Το τρένο για τη Θεσσαλονίκη φεύγει στις οκτώ και μισή από την πλατφόρμα τρία. Το εισιτήριο κοστίζει είκοσι πέντε ευρώ. Καλό ταξίδι!' }],
            scriptEn: 'Attention, please. The train to Thessaloniki leaves at half past eight from platform three. The ticket costs twenty-five euros. Have a good trip!',
            items: [
              pick('Πού πηγαίνει το τρένο;', ['Θεσσαλονίκη', 'Πάτρα', 'Βόλο'], 0, '“για τη Θεσσαλονίκη”'),
              pick('Τι ώρα φεύγει;', ['8:00', '8:30', '9:30'], 1, '“στις οκτώ και μισή”'),
              pick('Από ποια πλατφόρμα;', ['δύο', 'τρία', 'τέσσερα'], 1, '“πλατφόρμα τρία”'),
              pick('Πόσο κοστίζει το εισιτήριο;', ['15 ευρώ', '20 ευρώ', '25 ευρώ'], 2, '“είκοσι πέντε ευρώ”')
            ]
          },
          {
            id: 'a1l3', title: 'Task 3 · Notes', instructions: 'Listen to the phone call to a restaurant and complete the booking notes.',
            script: [
              { speaker: 'Υπάλληλος', el: 'Εστιατόριο Ελιά, καλησπέρα σας.' },
              { speaker: 'Πελάτισσα', el: 'Καλησπέρα. Θέλω να κλείσω ένα τραπέζι για αύριο.' },
              { speaker: 'Υπάλληλος', el: 'Για πόσα άτομα;' },
              { speaker: 'Πελάτισσα', el: 'Για τέσσερα άτομα.' },
              { speaker: 'Υπάλληλος', el: 'Τι ώρα;' },
              { speaker: 'Πελάτισσα', el: 'Στις εννιά το βράδυ.' },
              { speaker: 'Υπάλληλος', el: 'Το όνομά σας;' },
              { speaker: 'Πελάτισσα', el: 'Ελένη Παπά.' },
              { speaker: 'Υπάλληλος', el: 'Εντάξει. Σας περιμένουμε αύριο!' }
            ],
            scriptEn: '“Elia restaurant, good evening.” “Good evening. I want to book a table for tomorrow.” “For how many people?” “For four people.” “What time?” “At nine in the evening.” “Your name?” “Eleni Papa.” “Fine. We look forward to seeing you tomorrow!”',
            items: [
              pick('Ημέρα', ['σήμερα', 'αύριο', 'το Σάββατο'], 1, '“για αύριο”'),
              pick('Άτομα', ['δύο', 'τέσσερα', 'έξι'], 1, '“Για τέσσερα άτομα.”'),
              pick('Ώρα', ['7:00', '8:00', '9:00'], 2, '“Στις εννιά το βράδυ.”'),
              pick('Όνομα', ['Ελένη Παπά', 'Ελένη Πέτρου', 'Μαρία Παπά'], 0, '“Ελένη Παπά”')
            ]
          }
        ]
      },
      writing: {
        title: 'Writing', marks: 25, minutes: 40,
        official: ['Part A: short notes or a picture description, about 50 words (12 marks)', 'Part B: a short note, letter, card or text, about 60 words (13 marks)'],
        tasks: [
          {
            id: 'a1w1', part: 'Part A', words: 50,
            promptEl: 'Η φίλη σου η Άννα θα έρθει στην πόλη σου. Γράψε της ένα σημείωμα (περίπου 50 λέξεις).',
            prompt: 'Your friend Anna is coming to your town. Write her a note of about 50 words. Say where you live, what time you finish work, and invite her for a coffee on Saturday.',
            checklist: ['A greeting (Γεια σου Άννα,)', 'Where you live (Μένω…)', 'When you finish (Τελειώνω στις…)', 'An invitation (Θέλεις να…;)', 'A sign-off with an invented name'],
            model: { el: 'Γεια σου Άννα! Μένω στην οδό Σόλωνος 10, στον δεύτερο όροφο. Είναι κοντά στο μετρό. Τελειώνω τη δουλειά στις πέντε το απόγευμα. Θέλεις να πιούμε έναν καφέ το Σάββατο στις έντεκα; Υπάρχει ένα ωραίο καφέ δίπλα στο σπίτι μου. Τα λέμε! Φιλιά, Ελένη', en: 'Hi Anna! I live at 10 Solonos Street, on the second floor. It’s near the metro. I finish work at five in the afternoon. Do you want to have a coffee on Saturday at eleven? There is a nice café next to my house. See you! Love, Eleni' }
          },
          {
            id: 'a1w2', part: 'Part B', words: 60,
            promptEl: 'Είσαι διακοπές στην Κρήτη. Γράψε μια κάρτα σε έναν φίλο (περίπου 60 λέξεις).',
            prompt: 'You are on holiday in Crete. Write a postcard to a friend of about 60 words. Say where you are staying, what the weather is like, what you do every day, and when you are coming back.',
            checklist: ['A greeting', 'Where you are staying', 'The weather (Ο καιρός είναι…)', 'What you do (Κάθε μέρα…)', 'When you come back (Γυρίζω…)', 'A sign-off with an invented name'],
            model: { el: 'Γεια σου Κώστα! Είμαι στα Χανιά, στην Κρήτη. Μένω σε ένα μικρό ξενοδοχείο κοντά στη θάλασσα. Ο καιρός είναι πολύ ωραίος και κάνει ζέστη. Κάθε μέρα κολυμπάω το πρωί και το βράδυ τρώω σε μια ταβέρνα. Το φαγητό είναι πολύ νόστιμο! Γυρίζω στην Αθήνα την Κυριακή. Τα λέμε σύντομα! Φιλιά, Λίνα', en: 'Hi Kostas! I’m in Chania, in Crete. I’m staying in a small hotel near the sea. The weather is lovely and it’s hot. Every day I swim in the morning and in the evening I eat at a taverna. The food is delicious! I’m coming back to Athens on Sunday. See you soon! Love, Lina' }
          }
        ]
      },
      speaking: {
        title: 'Speaking', marks: 25, minutes: 12, timeLabel: '10–12', perPair: true,
        official: ['Part A: simple questions (name, home, work or school, family)', 'Part B: a short monologue', 'Part C: a role play between two candidates (about 2 minutes to read the role)'],
        partA: [
          { el: 'Πώς σε λένε;', tr: 'Pos se léne?', en: 'What’s your name?', model: 'Με λένε Σάνα.' },
          { el: 'Από πού είσαι;', tr: 'Apó pou íse?', en: 'Where are you from?', model: 'Είμαι από την Τυνησία, από την Τύνιδα.' },
          { el: 'Πού μένεις τώρα;', tr: 'Pou ménis tóra?', en: 'Where do you live now?', model: 'Τώρα μένω στην Αθήνα, σε ένα μικρό διαμέρισμα.' },
          { el: 'Τι δουλειά κάνεις;', tr: 'Ti dhouliá kánis?', en: 'What do you do for work?', model: 'Δουλεύω σε ένα κατάστημα. / Είμαι φοιτήτρια.' },
          { el: 'Έχεις αδέρφια;', tr: 'Éhis adhérfia?', en: 'Do you have brothers or sisters?', model: 'Ναι, έχω μία αδερφή και δύο αδερφούς.' },
          { el: 'Τι σου αρέσει να κάνεις;', tr: 'Ti sou arési na kánis?', en: 'What do you like doing?', model: 'Μου αρέσει να μαγειρεύω και να περπατάω στη θάλασσα.' }
        ],
        partB: [
          { title: 'Η οικογένειά μου', en: 'My family', prompts: ['How many people are in your family?', 'Where do they live?', 'What do they do?'], model: 'Η οικογένειά μου είναι μεγάλη. Έχω μητέρα, πατέρα, μία αδερφή και δύο αδερφούς. Οι γονείς μου μένουν στην Τύνιδα. Ο πατέρας μου είναι δάσκαλος και η μητέρα μου δουλεύει σε μια τράπεζα. Η αδερφή μου είναι φοιτήτρια. Τους αγαπάω πολύ και μιλάμε στο τηλέφωνο κάθε μέρα.' },
          { title: 'Μια μέρα μου', en: 'A day in my life', prompts: ['When do you wake up?', 'What do you do in the morning and afternoon?', 'What do you do in the evening?'], model: 'Ξυπνάω στις επτά και πίνω καφέ. Μετά πηγαίνω στη δουλειά με το λεωφορείο. Δουλεύω από τις εννιά ως τις τέσσερις. Το απόγευμα πηγαίνω στο μάθημα ελληνικών. Το βράδυ μαγειρεύω, βλέπω τηλεόραση και κοιμάμαι στις έντεκα.' },
          { title: 'Το σπίτι μου', en: 'My home', prompts: ['Where is it?', 'How many rooms does it have?', 'What do you like about it?'], model: 'Μένω σε ένα διαμέρισμα στην Αθήνα. Είναι στον τρίτο όροφο. Έχει ένα υπνοδωμάτιο, ένα σαλόνι, μια μικρή κουζίνα και ένα μπάνιο. Μου αρέσει γιατί έχει μπαλκόνι και είναι κοντά στο μετρό.' }
        ],
        partC: ['meeting', 'cafe', 'market', 'directions']
      }
    }
  },
  A2: {
    name: 'A2 · Basic',
    writtenTotal: '1 hour 40 minutes',
    papers: {
      reading: {
        title: 'Reading', marks: 25, minutes: 30,
        official: ['True / false: 7 statements on a 140-word text', 'Matching: 6 answers with 2 extra options', 'Multiple choice (4 options): 6 questions', 'Fill the gaps: 6 words or phrases with 3 extra options'],
        tasks: [
          {
            id: 'a2r1', title: 'Task 1 · True or false', instructions: 'Read Kostas’s email. Is each sentence true or false?',
            text: 'Γεια σου Δάφνη! Σου γράφω από το καινούργιο μου διαμέρισμα στη Θεσσαλονίκη! Μετακόμισα πριν από δύο εβδομάδες, γιατί βρήκα δουλειά σε μια εταιρεία πληροφορικής. Το διαμέρισμα είναι μικρό αλλά φωτεινό και έχει μπαλκόνι με θέα στη θάλασσα. Είναι στον τέταρτο όροφο και δεν έχει ασανσέρ, γι’ αυτό ανεβαίνω τις σκάλες κάθε μέρα! Η δουλειά μου είναι ενδιαφέρουσα, αλλά ξυπνάω πολύ νωρίς, στις έξι και μισή. Τα Σαββατοκύριακα περπατάω στην παραλία ή πηγαίνω για καφέ με φίλους. Θέλεις να έρθεις να με επισκεφτείς τον Μάιο; Έχω έναν καναπέ που γίνεται κρεβάτι. Πες μου αν μπορείς! Φιλιά, Κώστας',
            textEn: 'Hi Dafni! I’m writing from my new flat in Thessaloniki! I moved two weeks ago because I found a job at an IT company. The flat is small but bright and has a balcony with a sea view. It’s on the fourth floor and has no lift, so I climb the stairs every day! My job is interesting, but I wake up very early, at half past six. At weekends I walk on the beach or go for coffee with friends. Do you want to come and visit me in May? I have a sofa that turns into a bed. Tell me if you can! Love, Kostas',
            items: [
              tf('Ο Κώστας μετακόμισε πριν από δύο εβδομάδες.', true, '“Μετακόμισα πριν από δύο εβδομάδες”'),
              tf('Ο Κώστας βρήκε δουλειά σε μια τράπεζα.', false, 'An IT company: “εταιρεία πληροφορικής”.'),
              tf('Από το μπαλκόνι βλέπει τη θάλασσα.', true, '“μπαλκόνι με θέα στη θάλασσα”'),
              tf('Το κτίριο έχει ασανσέρ.', false, '“δεν έχει ασανσέρ”'),
              tf('Ο Κώστας ξυπνάει στις επτά.', false, 'At half past six.'),
              tf('Τα Σαββατοκύριακα περπατάει στην παραλία.', true, '“περπατάω στην παραλία”'),
              tf('Ο Κώστας καλεί τη Δάφνη να τον επισκεφτεί.', true, '“Θέλεις να έρθεις να με επισκεφτείς τον Μάιο;”')
            ]
          },
          {
            id: 'a2r2', title: 'Task 2 · Matching', instructions: 'Which advert (A–H) is right for each person? Two adverts are not used.',
            items: [
              ['Ο Πέτρος ψάχνει δουλειά και δεν έχει εμπειρία.', 1, 'Waiter wanted, no experience needed.'],
              ['Η Ελένη θέλει να κλείσει ραντεβού με γιατρό.', 3, 'Surgery: appointments Monday to Friday.'],
              ['Ο Αλέξης θέλει να αγοράσει ποδήλατο.', 2, 'Bicycle for sale.'],
              ['Η Σοφία ψάχνει μικρό διαμέρισμα για να νοικιάσει.', 4, 'Two-room flat for rent.'],
              ['Η οικογένεια Νικολάου θέλει να κάνει κάτι δωρεάν την Κυριακή το βράδυ.', 5, 'Free concert on Sunday evening.'],
              ['Η Μαρίνα θέλει να μάθει κολύμπι στον εξάχρονο γιο της.', 0, 'Swimming lessons for children.']
            ].map(([prompt, answer, why]) => pick(prompt, ['Α. Μαθήματα κολύμβησης για παιδιά, Σάββατο πρωί', 'Β. Ζητείται σερβιτόρος/σερβιτόρα. Δεν χρειάζεται εμπειρία.', 'Γ. Πωλείται ποδήλατο, σχεδόν καινούργιο, 150 €', 'Δ. Ιατρείο: ραντεβού Δευτέρα–Παρασκευή 9:00–14:00', 'Ε. Ενοικιάζεται δυάρι στην Κυψέλη, 400 € τον μήνα', 'Ζ. Δωρεάν συναυλία στην πλατεία, Κυριακή 8 μ.μ.', 'Η. Μαθήματα αγγλικών για ενήλικες, βραδινά τμήματα', 'Θ. Χάθηκε γάτα, γκρι με άσπρα πόδια'], answer, why))
          },
          {
            id: 'a2r3', title: 'Task 3 · Multiple choice', instructions: 'Read the announcement and choose the right answer.',
            text: 'Ανακοίνωση του Δήμου: Η δημοτική βιβλιοθήκη ανοίγει νέο τμήμα για παιδιά. Το τμήμα θα είναι ανοιχτό από Δευτέρα έως Παρασκευή, από τις δέκα το πρωί έως τις έξι το απόγευμα. Κάθε Σάββατο στις έντεκα θα γίνεται «Ώρα παραμυθιού» για παιδιά από τεσσάρων έως οκτώ χρονών. Η συμμετοχή είναι δωρεάν, αλλά πρέπει να κλείσετε θέση στο τηλέφωνο, γιατί οι θέσεις είναι λίγες. Για να γίνετε μέλος της βιβλιοθήκης, χρειάζεστε ταυτότητα ή διαβατήριο και μια πρόσφατη φωτογραφία. Η συνδρομή κοστίζει δέκα ευρώ τον χρόνο.',
            textEn: 'Announcement from the Municipality: The municipal library is opening a new section for children. It will be open Monday to Friday, from ten in the morning to six in the evening. Every Saturday at eleven there will be “Story time” for children aged four to eight. Participation is free, but you must book a place by phone because places are limited. To become a library member you need an ID card or passport and a recent photo. Membership costs ten euros a year.',
            items: [
              pick('Το νέο τμήμα είναι για…', ['ενήλικες', 'παιδιά', 'φοιτητές', 'ηλικιωμένους'], 1, '“νέο τμήμα για παιδιά”'),
              pick('Τι ώρα κλείνει τις καθημερινές;', ['στις τέσσερις', 'στις πέντε', 'στις έξι', 'στις οκτώ'], 2, '“έως τις έξι το απόγευμα”'),
              pick('Πότε είναι η «Ώρα παραμυθιού»;', ['Παρασκευή στις δέκα', 'Σάββατο στις έντεκα', 'Κυριακή στις έντεκα', 'Σάββατο στις έξι'], 1, '“Κάθε Σάββατο στις έντεκα”'),
              pick('Γιατί πρέπει να τηλεφωνήσετε;', ['για να πληρώσετε', 'γιατί οι θέσεις είναι λίγες', 'για να φέρετε φωτογραφία', 'γιατί η βιβλιοθήκη είναι κλειστή'], 1, '“γιατί οι θέσεις είναι λίγες”'),
              pick('Τι χρειάζεστε για να γίνετε μέλος;', ['μόνο φωτογραφία', 'ταυτότητα ή διαβατήριο και φωτογραφία', 'δίπλωμα οδήγησης', 'ένα παιδί'], 1, '“ταυτότητα ή διαβατήριο και μια πρόσφατη φωτογραφία”'),
              pick('Πόσο κοστίζει η συνδρομή;', ['είναι δωρεάν', 'δέκα ευρώ τον μήνα', 'δέκα ευρώ τον χρόνο', 'είκοσι ευρώ τον χρόνο'], 2, '“δέκα ευρώ τον χρόνο”')
            ]
          },
          {
            id: 'a2r4', title: 'Task 4 · Fill the gaps', instructions: 'Choose the right word or phrase for each gap. Three options are not used.',
            text: 'Αξιότιμη κυρία Παπά, Σας γράφω (1) ___ ρωτήσω για τα μαθήματα ελληνικών. Θα (2) ___ να μάθω αν υπάρχουν ακόμα θέσεις. Δουλεύω το πρωί, (3) ___ προτιμώ ένα βραδινό τμήμα. (4) ___ να μου στείλετε το πρόγραμμα; Σας ευχαριστώ (5) ___ των προτέρων. Με (6) ___, Λίνα Αχμέτ',
            textEn: 'Dear Mrs Papa, I am writing to ask about the Greek lessons. I would like to know if there are still places. I work in the mornings, so I prefer an evening class. Could you send me the timetable? Thank you in advance. Kind regards, Lina Ahmet',
            items: ['Κενό 1', 'Κενό 2', 'Κενό 3', 'Κενό 4', 'Κενό 5', 'Κενό 6'].map((prompt, i) => pick(prompt, ['για να', 'ήθελα', 'γι’ αυτό', 'Μπορείτε', 'εκ', 'εκτίμηση', 'αλλά', 'πάνω', 'φιλιά'], i, ['για να = in order to', 'Θα ήθελα = I would like', 'γι’ αυτό = so, that’s why', 'Μπορείτε να…; = Could you…?', 'εκ των προτέρων = in advance', 'Με εκτίμηση = kind regards'][i]))
          }
        ]
      },
      listening: {
        title: 'Listening', marks: 25, minutes: 25,
        official: ['Match descriptions to pictures: 6 answers with 2 extra options', 'Multiple choice (3 options) on a dialogue: 6 questions', 'True / false on a monologue: 6 statements', 'Notes on a formal dialogue: 7 notes'],
        tasks: [
          {
            id: 'a2l1', title: 'Task 1 · Where are they?', instructions: 'Listen to six short sentences. Where is each person? Two places are not used.',
            script: [
              { speaker: '1', el: 'Ένα: Θέλω να αγοράσω κάτι για τον βήχα.' },
              { speaker: '2', el: 'Δύο: Θα ήθελα ένα τραπέζι για δύο άτομα, παρακαλώ.' },
              { speaker: '3', el: 'Τρία: Ένα εισιτήριο για την Πάτρα, παρακαλώ.' },
              { speaker: '4', el: 'Τέσσερα: Θέλω να στείλω αυτό το δέμα στη Γαλλία.' },
              { speaker: '5', el: 'Πέντε: Θα ήθελα να ανοίξω έναν λογαριασμό.' },
              { speaker: '6', el: 'Έξι: Θέλω να δανειστώ ένα βιβλίο για την ιστορία της Ελλάδας.' }
            ],
            scriptEn: '1: I want to buy something for a cough. 2: I’d like a table for two, please. 3: A ticket to Patras, please. 4: I want to send this parcel to France. 5: I’d like to open an account. 6: I want to borrow a book about the history of Greece.',
            items: [[1, 'pharmacy'], [5, 'restaurant'], [3, 'train station'], [7, 'post office'], [2, 'bank'], [4, 'library']].map(([answer, why], i) => pick(`Πρόσωπο ${i + 1}`, ['Α. σούπερ μάρκετ', 'Β. φαρμακείο', 'Γ. τράπεζα', 'Δ. σταθμός τρένων', 'Ε. βιβλιοθήκη', 'Ζ. εστιατόριο', 'Η. γυμναστήριο', 'Θ. ταχυδρομείο'], answer, `This is the ${why}.`))
          },
          {
            id: 'a2l2', title: 'Task 2 · Weekend plans', instructions: 'Listen to Nikos and Maria and choose the right answer.',
            script: [
              { speaker: 'Νίκος', el: 'Μαρία, τι θα κάνεις το Σαββατοκύριακο;' },
              { speaker: 'Μαρία', el: 'Δεν ξέρω ακόμα. Ο καιρός θα είναι καλός, ίσως πάω στην παραλία.' },
              { speaker: 'Νίκος', el: 'Θέλεις να έρθω κι εγώ;' },
              { speaker: 'Μαρία', el: 'Ευχαρίστως! Αλλά δεν έχω αυτοκίνητο.' },
              { speaker: 'Νίκος', el: 'Δεν πειράζει, έχω εγώ. Θα περάσω να σε πάρω στις εννιά.' },
              { speaker: 'Μαρία', el: 'Τέλεια. Να φέρω κάτι να φάμε;' },
              { speaker: 'Νίκος', el: 'Ναι, φέρε φρούτα και νερό. Εγώ θα φτιάξω σάντουιτς.' }
            ],
            scriptEn: 'Nikos: Maria, what are you doing at the weekend? Maria: I don’t know yet. The weather will be good, maybe I’ll go to the beach. Nikos: Do you want me to come too? Maria: With pleasure! But I don’t have a car. Nikos: No problem, I do. I’ll pick you up at nine. Maria: Perfect. Shall I bring something to eat? Nikos: Yes, bring fruit and water. I’ll make sandwiches.',
            items: [
              pick('Πού θέλει να πάει η Μαρία;', ['στην παραλία', 'στο βουνό', 'στο σινεμά'], 0, '“ίσως πάω στην παραλία”'),
              pick('Πώς θα είναι ο καιρός;', ['κακός', 'καλός', 'κρύος'], 1, '“Ο καιρός θα είναι καλός”'),
              pick('Ποιος έχει αυτοκίνητο;', ['η Μαρία', 'ο Νίκος', 'κανένας'], 1, '“έχω εγώ”, says Nikos.'),
              pick('Τι ώρα θα περάσει ο Νίκος;', ['στις οκτώ', 'στις εννιά', 'στις δέκα'], 1, '“στις εννιά”'),
              pick('Τι θα φέρει η Μαρία;', ['σάντουιτς', 'φρούτα και νερό', 'καφέ'], 1, '“φέρε φρούτα και νερό”'),
              pick('Τι θα φτιάξει ο Νίκος;', ['σαλάτα', 'γλυκό', 'σάντουιτς'], 2, '“Εγώ θα φτιάξω σάντουιτς.”')
            ]
          },
          {
            id: 'a2l3', title: 'Task 3 · A voicemail', instructions: 'Listen to the message from the dentist. True or false?',
            script: [{ speaker: 'Γραμματεία', el: 'Καλημέρα σας, σας καλούμε από το οδοντιατρείο του κυρίου Αλεξίου. Το ραντεβού σας για αύριο στις τρεις το απόγευμα δεν μπορεί να γίνει, γιατί ο γιατρός έχει μια έκτακτη υποχρέωση. Σας προτείνουμε να έρθετε την Πέμπτη στις δέκα το πρωί. Αν δεν μπορείτε, τηλεφωνήστε μας και θα βρούμε άλλη μέρα. Το οδοντιατρείο είναι ανοιχτό από Δευτέρα έως Παρασκευή. Ευχαριστούμε πολύ.' }],
            scriptEn: 'Good morning, we are calling from Mr Alexiou’s dental surgery. Your appointment tomorrow at three in the afternoon cannot go ahead, because the dentist has an urgent commitment. We suggest you come on Thursday at ten in the morning. If you can’t, call us and we will find another day. The surgery is open Monday to Friday. Thank you very much.',
            items: [
              tf('Το ραντεβού ήταν για αύριο.', true, '“Το ραντεβού σας για αύριο”'),
              tf('Το ραντεβού ήταν το πρωί.', false, 'At three in the afternoon.'),
              tf('Ο γιατρός έχει μια έκτακτη υποχρέωση.', true, '“ο γιατρός έχει μια έκτακτη υποχρέωση”'),
              tf('Το νέο ραντεβού που προτείνουν είναι την Πέμπτη.', true, '“την Πέμπτη στις δέκα το πρωί”'),
              tf('Αν δεν μπορείτε την Πέμπτη, πρέπει να έρθετε το Σάββατο.', false, 'You should call them to find another day.'),
              tf('Το οδοντιατρείο είναι ανοιχτό και το Σάββατο.', false, 'Monday to Friday only.')
            ]
          },
          {
            id: 'a2l4', title: 'Task 4 · Notes', instructions: 'Listen to the conversation at the ferry ticket office and complete the notes.',
            script: [
              { speaker: 'Πελάτισσα', el: 'Καλημέρα. Θα ήθελα δύο εισιτήρια για την Κρήτη.' },
              { speaker: 'Υπάλληλος', el: 'Για ποια μέρα;' },
              { speaker: 'Πελάτισσα', el: 'Για την Παρασκευή.' },
              { speaker: 'Υπάλληλος', el: 'Απλά ή με επιστροφή;' },
              { speaker: 'Πελάτισσα', el: 'Με επιστροφή, την Κυριακή.' },
              { speaker: 'Υπάλληλος', el: 'Εντάξει. Το πλοίο φεύγει στις έξι το απόγευμα από τον Πειραιά. Η τιμή είναι εβδομήντα ευρώ το άτομο.' },
              { speaker: 'Πελάτισσα', el: 'Μπορώ να πληρώσω με κάρτα;' },
              { speaker: 'Υπάλληλος', el: 'Βεβαίως.' }
            ],
            scriptEn: '“Good morning. I’d like two tickets to Crete.” “For which day?” “For Friday.” “One-way or return?” “Return, on Sunday.” “Fine. The ship leaves at six in the evening from Piraeus. The price is seventy euros per person.” “Can I pay by card?” “Of course.”',
            items: [
              pick('Προορισμός', ['Κρήτη', 'Ρόδος', 'Κέρκυρα'], 0, '“για την Κρήτη”'),
              pick('Εισιτήρια', ['ένα', 'δύο', 'τέσσερα'], 1, '“δύο εισιτήρια”'),
              pick('Ημέρα αναχώρησης', ['Πέμπτη', 'Παρασκευή', 'Σάββατο'], 1, '“Για την Παρασκευή.”'),
              pick('Επιστροφή', ['Σάββατο', 'Κυριακή', 'χωρίς επιστροφή'], 1, '“Με επιστροφή, την Κυριακή.”'),
              pick('Ώρα αναχώρησης', ['6 το πρωί', '6 το απόγευμα', '8 το βράδυ'], 1, '“στις έξι το απόγευμα”'),
              pick('Τιμή ανά άτομο', ['50 €', '70 €', '140 €'], 1, '“εβδομήντα ευρώ το άτομο”'),
              pick('Πληρωμή', ['μετρητά μόνο', 'με κάρτα', 'μέσω ίντερνετ'], 1, '“Μπορώ να πληρώσω με κάρτα; — Βεβαίως.”')
            ]
          }
        ]
      },
      writing: {
        title: 'Writing', marks: 25, minutes: 45,
        official: ['Part A: a friendly text or a description, about 80–100 words (12 marks)', 'Part B: a less friendly, more formal text, about 80–100 words (13 marks)'],
        tasks: [
          {
            id: 'a2w1', part: 'Part A · Friendly', words: 90,
            promptEl: 'Ο φίλος σου ο Γιάννης σε καλεί στο πάρτι γενεθλίων του το Σάββατο, αλλά δεν μπορείς να πας. Γράψε του ένα email (80–100 λέξεις).',
            prompt: 'Your friend Giannis invites you to his birthday party on Saturday, but you can’t go. Write him an email of 80–100 words. Thank him, explain why you can’t come, suggest another time to meet, and send your wishes.',
            checklist: ['Friendly greeting and a question about him', 'Thanks for the invitation', 'Why you can’t come (γιατί…)', 'A new plan (Μπορούμε να…)', 'Birthday wishes (Χρόνια πολλά!)', 'Friendly sign-off with an invented name', '80–100 words'],
            model: { el: 'Γεια σου Γιάννη! Τι κάνεις; Σ’ ευχαριστώ πολύ για την πρόσκληση στο πάρτι σου. Δυστυχώς δεν μπορώ να έρθω το Σάββατο, γιατί η αδερφή μου έρχεται από την Τύνιδα και πρέπει να πάω στο αεροδρόμιο το βράδυ. Λυπάμαι πολύ! Μπορούμε να βρεθούμε την Κυριακή το απόγευμα; Θέλω να σε κεράσω έναν καφέ και να σου δώσω το δώρο σου. Υπάρχει ένα ωραίο καφέ στην πλατεία, κοντά στο σπίτι σου. Χρόνια πολλά και να περάσεις υπέροχα στο πάρτι! Φιλιά, Λίνα', en: 'Hi Giannis! How are you? Thank you very much for the invitation to your party. Unfortunately I can’t come on Saturday, because my sister is coming from Tunis and I have to go to the airport in the evening. I’m very sorry! Can we meet on Sunday afternoon? I want to buy you a coffee and give you your present. There’s a nice café in the square, near your house. Happy birthday and have a wonderful time at the party! Love, Lina' }
          },
          {
            id: 'a2w2', part: 'Part B · Formal', words: 90,
            promptEl: 'Θέλεις να γραφτείς σε ένα βραδινό τμήμα ελληνικών. Γράψε ένα email στη σχολή (80–100 λέξεις).',
            prompt: 'You want to join an evening Greek class. Write an email of 80–100 words to the language school. Introduce yourself and your level, ask about the days and times, the price and the start date, and ask which documents you need.',
            checklist: ['Formal greeting (Αξιότιμη κυρία / Αξιότιμε κύριε)', 'Why you are writing (Σας γράφω για να…)', 'Your level and situation', 'At least three questions (days, price, start, documents)', 'Polite close (Σας ευχαριστώ εκ των προτέρων.)', 'Με εκτίμηση, with an invented name', '80–100 words, formal “you” throughout'],
            model: { el: 'Αξιότιμη κυρία, σας γράφω για να ζητήσω πληροφορίες για τα βραδινά μαθήματα ελληνικών. Μένω στην Αθήνα εδώ και ένα χρόνο και μιλάω λίγα ελληνικά. Έχω το επίπεδο Α1 και θέλω να δώσω εξετάσεις για το Α2. Δουλεύω το πρωί, γι’ αυτό μπορώ να έρθω μόνο το απόγευμα ή το βράδυ. Θα ήθελα να μάθω ποιες μέρες και ώρες γίνονται τα μαθήματα, πόσο κοστίζουν και πότε αρχίζουν. Επίσης, ποια δικαιολογητικά χρειάζομαι για την εγγραφή; Σας ευχαριστώ εκ των προτέρων. Με εκτίμηση, Λίνα Αχμέτ', en: 'Dear Madam, I am writing to ask for information about the evening Greek classes. I have lived in Athens for a year and I speak a little Greek. I have level A1 and want to take the A2 exam. I work in the mornings, so I can only come in the afternoon or evening. I would like to know which days and times the lessons take place, how much they cost and when they start. Also, which documents do I need to enrol? Thank you in advance. Kind regards, Lina Ahmet' }
          }
        ]
      },
      speaking: {
        title: 'Speaking', marks: 25, minutes: 12, perPair: true,
        official: ['Part A: simple questions (name, home, school, family)', 'Part B: a short monologue', 'Part C: a role play between two candidates (about 2 minutes to read the role)'],
        partA: [
          { el: 'Πώς σε λένε και από πού είσαι;', tr: 'Pos se léne ke apó pou íse?', en: 'What’s your name and where are you from?', model: 'Με λένε Σάνα και είμαι από την Τυνησία.' },
          { el: 'Πόσο καιρό μένεις στην Ελλάδα;', tr: 'Póso keró ménis stin Elládha?', en: 'How long have you lived in Greece?', model: 'Μένω στην Ελλάδα δύο χρόνια.' },
          { el: 'Τι κάνεις στον ελεύθερο χρόνο σου;', tr: 'Ti kánis ston eléfthero hróno sou?', en: 'What do you do in your free time?', model: 'Στον ελεύθερο χρόνο μου διαβάζω, μαγειρεύω και βγαίνω με φίλους.' },
          { el: 'Τι έκανες το περασμένο Σαββατοκύριακο;', tr: 'Ti ékanes to peraméno Savatokíriako?', en: 'What did you do last weekend?', model: 'Το Σάββατο πήγα στη λαϊκή και την Κυριακή επισκέφτηκα μια φίλη μου.' },
          { el: 'Γιατί μαθαίνεις ελληνικά;', tr: 'Yiatí mathénis elliniká?', en: 'Why are you learning Greek?', model: 'Μαθαίνω ελληνικά γιατί μένω στην Ελλάδα και θέλω να μιλάω με τους ανθρώπους εδώ.' },
          { el: 'Τι θα κάνεις το επόμενο καλοκαίρι;', tr: 'Ti tha kánis to epómeno kalokéri?', en: 'What will you do next summer?', model: 'Το επόμενο καλοκαίρι θα πάω στην Τυνησία να δω την οικογένειά μου.' }
        ],
        partB: [
          { title: 'Ένα ταξίδι που έκανα', en: 'A trip I took', prompts: ['Where and when did you go?', 'Who did you go with?', 'What did you do and see?', 'Did you like it? Why?'], model: 'Πέρσι το καλοκαίρι πήγα στη Νάξο με δύο φίλες μου. Πήγαμε με το πλοίο από τον Πειραιά και το ταξίδι ήταν πέντε ώρες. Μείναμε σε ένα μικρό ξενοδοχείο κοντά στη θάλασσα. Κάθε μέρα κολυμπούσαμε και το βράδυ τρώγαμε ψάρι στις ταβέρνες. Μου άρεσε πολύ, γιατί το νησί είναι ήσυχο και οι άνθρωποι είναι πολύ φιλικοί.' },
          { title: 'Η ζωή μου στην Ελλάδα', en: 'My life in Greece', prompts: ['Where do you live and work?', 'What do you like?', 'What is difficult for you?'], model: 'Μένω στην Αθήνα εδώ και δύο χρόνια. Δουλεύω σε ένα κατάστημα στο κέντρο. Μου αρέσει ο καιρός, η θάλασσα και το φαγητό. Οι Έλληνες είναι φιλικοί. Δύσκολη για μένα είναι η γλώσσα, γιατί η γραμματική είναι δύσκολη, αλλά κάθε μέρα μαθαίνω κάτι καινούργιο.' },
          { title: 'Το αγαπημένο μου φαγητό', en: 'My favourite food', prompts: ['What is it?', 'How is it made?', 'When do you eat it?', 'Do you prefer Greek or Tunisian food? Why?'], model: 'Το αγαπημένο μου φαγητό είναι το κουσκούς με ψάρι. Το μαγειρεύει η μητέρα μου κάθε Παρασκευή. Μου αρέσει και η ελληνική κουζίνα, κυρίως ο μουσακάς και η χωριάτικη σαλάτα. Νομίζω ότι η τυνησιακή κουζίνα είναι πιο πικάντικη από την ελληνική, αλλά και οι δύο χρησιμοποιούν πολύ ελαιόλαδο.' }
        ],
        partC: ['doctor', 'services', 'flat', 'invitation']
      }
    }
  }
};
