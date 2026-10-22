// Approximate sounds for English speakers. Each letter has one common example word.
export const alphabet = [
  { upper: 'Α', lower: 'α', name: 'άλφα', sound: 'a as in “father”', el: 'αγάπη', tr: 'aghápi', en: 'love' },
  { upper: 'Β', lower: 'β', name: 'βήτα', sound: 'v as in “van”', el: 'βιβλίο', tr: 'vivlío', en: 'book' },
  { upper: 'Γ', lower: 'γ', name: 'γάμμα', sound: 'soft “gh”; “y” before e and i sounds', el: 'γάτα', tr: 'gháta', en: 'cat' },
  { upper: 'Δ', lower: 'δ', name: 'δέλτα', sound: 'th as in “this” (written dh)', el: 'δέντρο', tr: 'dhéndro', en: 'tree' },
  { upper: 'Ε', lower: 'ε', name: 'έψιλον', sound: 'e as in “bed”', el: 'ελιά', tr: 'eliá', en: 'olive' },
  { upper: 'Ζ', lower: 'ζ', name: 'ζήτα', sound: 'z as in “zoo”', el: 'ζάχαρη', tr: 'záhari', en: 'sugar' },
  { upper: 'Η', lower: 'η', name: 'ήτα', sound: 'ee as in “see”', el: 'ήλιος', tr: 'ílios', en: 'sun' },
  { upper: 'Θ', lower: 'θ', name: 'θήτα', sound: 'th as in “thin”', el: 'θάλασσα', tr: 'thálasa', en: 'sea' },
  { upper: 'Ι', lower: 'ι', name: 'γιώτα', sound: 'ee as in “see”', el: 'ιστορία', tr: 'istoría', en: 'history, story' },
  { upper: 'Κ', lower: 'κ', name: 'κάππα', sound: 'k as in “kite”', el: 'καφές', tr: 'kafés', en: 'coffee' },
  { upper: 'Λ', lower: 'λ', name: 'λάμδα', sound: 'l as in “lemon”', el: 'λεμόνι', tr: 'lemóni', en: 'lemon' },
  { upper: 'Μ', lower: 'μ', name: 'μι', sound: 'm as in “mother”', el: 'μήλο', tr: 'mílo', en: 'apple' },
  { upper: 'Ν', lower: 'ν', name: 'νι', sound: 'n as in “no”', el: 'νερό', tr: 'neró', en: 'water' },
  { upper: 'Ξ', lower: 'ξ', name: 'ξι', sound: 'ks as in “box”', el: 'ξενοδοχείο', tr: 'ksenodhohío', en: 'hotel' },
  { upper: 'Ο', lower: 'ο', name: 'όμικρον', sound: 'o as in “off”', el: 'όνομα', tr: 'ónoma', en: 'name' },
  { upper: 'Π', lower: 'π', name: 'πι', sound: 'p as in “spot”', el: 'παιδί', tr: 'pedhí', en: 'child' },
  { upper: 'Ρ', lower: 'ρ', name: 'ρο', sound: 'a lightly rolled r', el: 'ρολόι', tr: 'rolói', en: 'clock, watch' },
  { upper: 'Σ', lower: 'σ / ς', name: 'σίγμα', sound: 's as in “sun”; ς is used at the end of a word', el: 'σπίτι', tr: 'spíti', en: 'house, home' },
  { upper: 'Τ', lower: 'τ', name: 'ταυ', sound: 't as in “stop”', el: 'τραπέζι', tr: 'trapézi', en: 'table' },
  { upper: 'Υ', lower: 'υ', name: 'ύψιλον', sound: 'ee as in “see”', el: 'ύπνος', tr: 'ípnos', en: 'sleep' },
  { upper: 'Φ', lower: 'φ', name: 'φι', sound: 'f as in “fish”', el: 'φέτα', tr: 'féta', en: 'feta cheese' },
  { upper: 'Χ', lower: 'χ', name: 'χι', sound: 'h from the throat, as in Scottish “loch”', el: 'χέρι', tr: 'héri', en: 'hand' },
  { upper: 'Ψ', lower: 'ψ', name: 'ψι', sound: 'ps as in “lips”', el: 'ψωμί', tr: 'psomí', en: 'bread' },
  { upper: 'Ω', lower: 'ω', name: 'ωμέγα', sound: 'o as in “off” (same as ο)', el: 'ώρα', tr: 'óra', en: 'hour, time' }
];

export const combinations = [
  { letters: 'ου', sound: 'oo as in “food”', el: 'ουρανός', tr: 'ouranós', en: 'sky' },
  { letters: 'ει · οι · υι', sound: 'ee as in “see”', el: 'είμαι', tr: 'íme', en: 'I am' },
  { letters: 'αι', sound: 'e as in “bed”', el: 'και', tr: 'ke', en: 'and' },
  { letters: 'αυ · ευ', sound: 'av / ev, or af / ef before p, t, k, f, th, s, h sounds', el: 'αύριο', tr: 'ávrio', en: 'tomorrow' },
  { letters: 'μπ', sound: 'b at the start of a word, mb in the middle', el: 'μπανάνα', tr: 'banána', en: 'banana' },
  { letters: 'ντ', sound: 'd at the start of a word, nd in the middle', el: 'ντομάτα', tr: 'domáta', en: 'tomato' },
  { letters: 'γκ · γγ', sound: 'g at the start of a word, ng in the middle', el: 'αγγλικά', tr: 'angliká', en: 'English (language)' },
  { letters: 'τσ · τζ', sound: 'ts as in “cats”, dz as in “adze”', el: 'τσάι', tr: 'tsái', en: 'tea' }
];

export const pronunciation = [
  { title: 'Two kinds of “th”', tip: 'Δ is the soft “th” of “this” (written dh). Θ is the hard “th” of “thin”. Keep them apart: δέκα (ten) and θέλω (I want).', el: 'δέκα, θέλω', tr: 'dhéka, thélo' },
  { title: 'Five ways to write “ee”', tip: 'Ι, Η, Υ, ΕΙ and ΟΙ all sound the same: “ee”. The spelling matters for writing, not for speaking.', el: 'είμαι πολύ καλά', tr: 'íme polí kalá' },
  { title: 'Stress is marked', tip: 'Every word of two or more syllables carries an accent on the stressed vowel. It can change meaning: πότε means “when”, ποτέ means “never”.', el: 'πότε; ποτέ!', tr: 'póte? poté!' },
  { title: 'A soft γ', tip: 'Γ is not a hard “g”. Before α, ο, ου it is a soft breathy “gh”; before ε and ι it is close to English “y”.', el: 'γάλα, γεια', tr: 'ghála, yia' },
  { title: 'The throaty χ', tip: 'Χ is a breathy “h” from the back of the throat. It is the same sound as the Arabic خ, only a little lighter.', el: 'χαρά, όχι', tr: 'hará, óhi' },
  { title: 'Pairs that make one sound', tip: 'ΜΠ sounds like “b”, ΝΤ like “d” and ΓΚ like “g”. ΟΥ is “oo” and ΑΙ is “e”.', el: 'μπύρα, ντομάτα, παιδί', tr: 'bíra, domáta, pedhí' }
];
