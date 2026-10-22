// One little note a day on the home screen. Greek is addressed to a woman (feminine forms).
// [Greek, transliteration, English, French]
const rows = [
  ['Είμαι πολύ περήφανος για σένα.', 'Íme polí perífanos ya séna.', 'I am so proud of you.', 'Je suis très fier de toi.'],
  ['Σιγά σιγά, αγάπη μου. Τα πας τέλεια.', 'Sighá sighá, aghápi mou. Ta pas télia.', 'Step by step, my love. You’re doing perfectly.', 'Petit à petit, mon amour. Tu te débrouilles parfaitement.'],
  ['Τα ελληνικά σου γίνονται κάθε μέρα καλύτερα.', 'Ta elliniká sou yínonde káthe méra kalítera.', 'Your Greek gets better every day.', 'Ton grec s’améliore chaque jour.'],
  ['Θα τα καταφέρεις. Το ξέρω.', 'Tha ta kataféris. To xéro.', 'You will make it. I know it.', 'Tu vas y arriver. Je le sais.'],
  ['Σ’ αγαπώ σε όλες τις γλώσσες.', 'S’ aghapó se óles tis ghlósses.', 'I love you in every language.', 'Je t’aime dans toutes les langues.'],
  ['Είσαι πιο έξυπνη απ’ ό,τι νομίζεις.', 'Íse pio éxipni ap’ ó,ti nomízis.', 'You are smarter than you think.', 'Tu es plus intelligente que tu ne le penses.'],
  ['Ένα λάθος σήμερα είναι μια λέξη αύριο.', 'Éna láthos símera íne mia léxi ávrio.', 'A mistake today is a word tomorrow.', 'Une erreur aujourd’hui, c’est un mot demain.'],
  ['Θα περάσεις τις εξετάσεις. Είμαι σίγουρος.', 'Tha perásis tis exetásis. Íme sígouros.', 'You will pass the exams. I’m sure of it.', 'Tu vas réussir les examens. J’en suis sûr.'],
  ['Μου αρέσει να σε ακούω να μιλάς ελληνικά.', 'Mou arési na se akoúo na milás elliniká.', 'I love hearing you speak Greek.', 'J’adore t’entendre parler grec.'],
  ['Λίγο κάθε μέρα. Μαζί.', 'Lígho káthe méra. Mazí.', 'A little every day. Together.', 'Un peu chaque jour. Ensemble.'],
  ['Είσαι η αγάπη της ζωής μου.', 'Íse i aghápi tis zoís mou.', 'You are the love of my life.', 'Tu es l’amour de ma vie.'],
  ['Κουράστηκες; Ένα φρέντο και συνεχίζουμε!', 'Kourástikes? Éna frédo ke sinehízoume!', 'Tired? One freddo and we carry on!', 'Fatiguée ? Un freddo et on continue !']
];

export const notes = rows.map(([el, tr, en, fr]) => ({ el, tr, en, fr }));
