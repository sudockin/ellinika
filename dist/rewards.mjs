import {lessons,phrases,LEVELS,PAPERS} from './content.mjs';
import {streak} from './core.mjs';

// Points move through six titles, each marked with a Greek numeral letter.
export const ranks = [
  { min: 0, mark: 'Α', title: 'Alpha', el: 'Άλφα' },
  { min: 100, mark: 'Β', title: 'Olive branch', el: 'Κλαδί ελιάς' },
  { min: 300, mark: 'Γ', title: 'Cyclades', el: 'Κυκλάδες' },
  { min: 700, mark: 'Δ', title: 'Acropolis', el: 'Ακρόπολη' },
  { min: 1200, mark: 'Ε', title: 'Aegean', el: 'Αιγαίο' },
  { min: 2000, mark: 'ΣΤ', title: 'Laurel wreath', el: 'Δάφνινο στεφάνι' }
];

export function points(state) { return Object.values(state.activity).reduce((sum, a) => sum + a.points, 0); }

export function rankFor(total) {
  const index = ranks.findLastIndex(r => total >= r.min), rank = ranks[index], next = ranks[index + 1] || null;
  return { ...rank, index, next, progress: next ? (total - rank.min) / (next.min - rank.min) : 1 };
}

const done = (state, list) => list.length > 0 && list.every(l => state.completed[l.id]);
const home = phrases.filter(p => p.category === 'At home');

export const badges = [
  { id: 'first-lesson', icon: 'book', title: 'First lesson', desc: 'Finish your first lesson', test: s => Object.keys(s.completed).length >= 1 },
  { id: 'alphabet', icon: 'alpha', title: 'The alphabet', desc: 'Finish the letters lesson', test: s => !!s.completed['a1-letters'] },
  { id: 'streak-3', icon: 'flame', title: '3-day streak', desc: 'Practise 3 days in a row', test: s => streak(s.activity) >= 3 },
  { id: 'streak-7', icon: 'flame', title: '7-day streak', desc: 'Practise 7 days in a row', test: s => streak(s.activity) >= 7 },
  { id: 'streak-30', icon: 'flame', title: '30-day streak', desc: 'Practise 30 days in a row', test: s => streak(s.activity) >= 30 },
  { id: 'cards-25', icon: 'cards', title: '25 phrases', desc: 'Review 25 different phrases', test: s => Object.keys(s.cards).length >= 25 },
  { id: 'voice-5', icon: 'mic', title: 'Out loud', desc: 'Speak Greek aloud 5 times', test: s => s.speaking >= 5 },
  { id: 'chat-3', icon: 'chat', title: '3 conversations', desc: 'Finish 3 conversations', test: s => s.scenarios.length >= 3 },
  { id: 'family', icon: 'home', title: 'Sunday lunch', desc: 'Finish the family lunch conversation', test: s => s.scenarios.includes('family') },
  { id: 'home-words', icon: 'cards', title: 'At home', desc: 'Review every “At home” phrase', test: s => home.every(p => s.cards[p.id]) },
  { id: 'first-paper', icon: 'pen', title: 'First paper', desc: 'Try your first practice paper', test: s => Object.keys(s.exam).length >= 1 },
  { id: 'goal-day', icon: 'clock', title: 'Daily goal', desc: 'Reach your daily goal', test: s => !!s.goalDay },
  ...LEVELS.flatMap(lv => [
    { id: `lessons-${lv}`, icon: 'check', title: `${lv} lessons`, desc: `Finish every ${lv} lesson`, test: s => done(s, lessons.filter(l => l.level === lv)) },
    { id: `papers-${lv}`, icon: 'award', title: `${lv} papers`, desc: `Try all four ${lv} papers`, test: s => PAPERS.every(p => s.exam[`${lv}-${p}`]) }
  ])
];

export function earnedCount(state) { return badges.filter(b => state.badges[b.id]).length; }

// Records newly earned badges in the state and returns them so the app can celebrate.
export function unlockBadges(state, today) {
  const fresh = badges.filter(b => !state.badges[b.id] && b.test(state));
  for (const b of fresh) state.badges[b.id] = today;
  return fresh;
}
