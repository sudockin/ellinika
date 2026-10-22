// One little note a day on the home screen. Greek is addressed to a woman (feminine forms).
// [Greek, transliteration, English, French]
const rows = [
  ['Είμαι περήφανος για σένα.', 'Íme perífanos ya séna.', 'I’m proud of you.', 'Je suis fier de toi.'],
  ['Σιγά σιγά. Τα πας πολύ καλά.', 'Sighá sighá. Ta pas polí kalá.', 'Step by step. You’re doing really well.', 'Petit à petit. Tu te débrouilles très bien.'],
  ['Τα ελληνικά σου γίνονται κάθε μέρα καλύτερα.', 'Ta elliniká sou yínonde káthe méra kalítera.', 'Your Greek gets better every day.', 'Ton grec s’améliore chaque jour.'],
  ['Σήμερα δέκα λεπτά, αύριο άλλα δέκα.', 'Símera dhéka leptá, ávrio ála dhéka.', 'Ten minutes today, ten more tomorrow.', 'Dix minutes aujourd’hui, dix de plus demain.'],
  ['Η γραμματική δεν είναι τόσο τρομακτική.', 'I ghramatikí dhen íne tóso tromaktikí.', 'Grammar isn’t that scary.', 'La grammaire n’est pas si effrayante.'],
  ['Ο, η, το. Εύκολο!', 'O, i, to. Éfkolo!', 'O, i, to (the three articles). Easy!', 'O, i, to (les trois articles). Facile !'],
  ['Θα περάσεις τις εξετάσεις. Είμαι σίγουρος.', 'Tha perásis tis exetásis. Íme sígouros.', 'You’ll pass the exams. I’m sure of it.', 'Tu vas réussir les examens. J’en suis sûr.'],
  ['Μου αρέσει να σε ακούω να μιλάς ελληνικά.', 'Mou arési na se akoúo na milás elliniká.', 'I like hearing you speak Greek.', 'J’aime t’entendre parler grec.'],
  ['Μετά το μάθημα, παγωτό;', 'Metá to máthima, paghotó?', 'Ice cream after the lesson?', 'Une glace après la leçon ?'],
  ['Σ’ αγαπώ, πριγκίπισσα.', 'S’ aghapó, pringípissa.', 'I love you, princess.', 'Je t’aime, princesse.'],
  ['Κουράστηκες; Ένα φρέντο και συνεχίζουμε!', 'Kourástikes? Éna frédo ke sinehízoume!', 'Tired? One freddo and we carry on!', 'Fatiguée ? Un freddo et on continue !']
];

export const notes = rows.map(([el, tr, en, fr]) => ({ el, tr, en, fr }));
