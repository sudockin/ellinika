// A word with a story, one a day on the home screen. Many link Greek to French or Arabic.
// [Greek, transliteration, English, story]
const rows = [
  ['τηλέφωνο', 'tiléfono', 'telephone', 'τήλε (far) + φωνή (voice). French kept it whole: téléphone.'],
  ['σχολείο', 'sholío', 'school', 'From σχολή, which first meant free time: learning was what you did with your leisure. French: école.'],
  ['καφές', 'kafés', 'coffee', 'Came through Turkish kahve from Arabic qahwa (قهوة), the same route the drink took.'],
  ['ζάχαρη', 'záhari', 'sugar', 'Related to Arabic sukkar (سكر), like French sucre.'],
  ['μαγαζί', 'maghazí', 'shop', 'From Italian magazzino, from Arabic makhāzin (مخازن), storehouses. French: magasin.'],
  ['λεμόνι', 'lemóni', 'lemon', 'Through Italian limone, from Arabic laymūn (ليمون).'],
  ['θέατρο', 'théatro', 'theatre', 'From θεάομαι, to watch: a place for watching. French: théâtre.'],
  ['μουσική', 'mousikí', 'music', 'The art of the Μούσες, the Muses. French: musique.'],
  ['δημοκρατία', 'dhimokratía', 'democracy', 'δήμος (the people) + κράτος (power). French: démocratie.'],
  ['αλφάβητο', 'alfávito', 'alphabet', 'Simply the first two letters, άλφα + βήτα. Arabic names its old letter order the same way: أبجد (abjad).'],
  ['κέντρο', 'kéndro', 'centre', 'κέντρον was a sharp point, like the fixed point of a compass. French: centre.'],
  ['ωκεανός', 'okeanós', 'ocean', 'Ὠκεανός was the great river the ancient Greeks believed circled the world. French: océan.'],
  ['ψυχή', 'psihí', 'soul, mind', 'Behind French psychologie. Greeks still say με όλη μου την ψυχή: with all my heart.']
];

export const notes = rows.map(([el, tr, en, story]) => ({ el, tr, en, story }));
