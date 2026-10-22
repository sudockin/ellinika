import { lessonsA1 } from './data/lessons-a1.mjs';
import { lessonsA2 } from './data/lessons-a2.mjs';
export { phrases } from './data/phrases.mjs';
export { scenarios } from './data/scenarios.mjs';
export { alphabet, combinations, pronunciation } from './data/alphabet.mjs';
export { exam, officialLinks } from './data/exam.mjs';
export { notes } from './data/notes.mjs';

export const lessons = [...lessonsA1, ...lessonsA2];
export const LEVELS = ['A1', 'A2'];
export const PAPERS = ['reading', 'listening', 'writing', 'speaking'];

export const phases = [
  { when: 'Step 1', title: 'Read and greet', focus: 'Alphabet, sounds, greetings and introductions. Read every word aloud.' },
  { when: 'Step 2', title: 'A1 everyday Greek', focus: 'Numbers, time, family, food, shopping, directions and forms. Review phrases daily.' },
  { when: 'Step 3', title: 'A1 exam practice', focus: 'All four papers at A1 under time. Write by hand and speak aloud with a partner.' },
  { when: 'Step 4', title: 'A2 skills and exam', focus: 'Past and future, health, home, work, letters and public services. Finish with timed A2 papers.' }
];
