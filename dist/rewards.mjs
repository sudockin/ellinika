import {lessons,phrases,LEVELS,PAPERS} from './content.mjs';
import {streak} from './core.mjs';

// Points climb through princess ranks; the last one is the crown.
// Profiles without princess mode see the plain titles.
export const ranks = [
  { min: 0, mark: '✨', title: 'Little sparkle', el: 'Μικρή σπίθα', plain: { title: 'Little sparkle', el: 'Μικρή σπίθα' } },
  { min: 100, mark: '🌸', title: 'Alpha princess', el: 'Πριγκίπισσα του άλφα', plain: { title: 'Alpha reader', el: 'Το άλφα' } },
  { min: 300, mark: '🐚', title: 'Island princess', el: 'Πριγκίπισσα των νησιών', plain: { title: 'Island hopper', el: 'Τα νησιά' } },
  { min: 700, mark: '🏛️', title: 'Princess of Athens', el: 'Πριγκίπισσα της Αθήνας', plain: { title: 'Athens local', el: 'Η Αθήνα' } },
  { min: 1200, mark: '🌊', title: 'Aegean princess', el: 'Πριγκίπισσα του Αιγαίου', plain: { title: 'Aegean sailor', el: 'Το Αιγαίο' } },
  { min: 2000, mark: '👑', title: 'Queen of Greek', el: 'Βασίλισσα των ελληνικών', plain: { title: 'Master of Greek', el: 'Τα ελληνικά, άριστα' } }
];

export function points(state) { return Object.values(state.activity).reduce((sum, a) => sum + a.points, 0); }

export function rankFor(total) {
  const index = ranks.findLastIndex(r => total >= r.min), rank = ranks[index], next = ranks[index + 1] || null;
  return { ...rank, index, next, progress: next ? (total - rank.min) / (next.min - rank.min) : 1 };
}

const done = (state, list) => list.length > 0 && list.every(l => state.completed[l.id]);
const home = phrases.filter(p => p.category === 'At home');

export const badges = [
  { id: 'first-lesson', emoji: '🌸', icon: 'book', title: 'First petal', desc: 'Finish your first lesson', test: s => Object.keys(s.completed).length >= 1 },
  { id: 'alphabet', emoji: '🔤', icon: 'alpha', title: 'Alpha to omega', desc: 'Finish the letters lesson', test: s => !!s.completed['a1-letters'] },
  { id: 'streak-3', emoji: '🔥', icon: 'flame', title: 'Three-day sparkle', desc: 'Practise 3 days in a row', test: s => streak(s.activity) >= 3 },
  { id: 'streak-7', emoji: '💫', icon: 'flame', title: 'Week streak', desc: 'Practise 7 days in a row', test: s => streak(s.activity) >= 7 },
  { id: 'streak-30', emoji: '💎', icon: 'flame', title: 'Diamond habit', desc: 'Practise 30 days in a row', test: s => streak(s.activity) >= 30 },
  { id: 'cards-25', emoji: '🃏', icon: 'cards', title: 'Card queen', desc: 'Review 25 different phrases', test: s => Object.keys(s.cards).length >= 25 },
  { id: 'voice-5', emoji: '🎤', icon: 'mic', title: 'Brave voice', desc: 'Speak Greek aloud 5 times', test: s => s.speaking >= 5 },
  { id: 'chat-3', emoji: '💬', icon: 'chat', title: 'Chatterbox', desc: 'Finish 3 conversations', test: s => s.scenarios.length >= 3 },
  { id: 'family', emoji: '🫶', icon: 'home', title: 'Family favourite', desc: 'Finish the family lunch conversation', test: s => s.scenarios.includes('family') },
  { id: 'home-words', emoji: '🏡', icon: 'cards', title: 'At home', desc: 'Review every “At home” phrase', test: s => home.every(p => s.cards[p.id]) },
  { id: 'first-paper', emoji: '📝', icon: 'pen', title: 'Exam brave', desc: 'Try your first practice paper', test: s => Object.keys(s.exam).length >= 1 },
  { id: 'goal-day', emoji: '🎯', icon: 'clock', title: 'Goal getter', desc: 'Reach your daily goal', test: s => !!s.goalDay },
  ...LEVELS.flatMap(lv => [
    { id: `lessons-${lv}`, emoji: lv === 'A1' ? '🏝️' : '🏰', icon: 'check', title: `${lv} princess`, plainTitle: `${lv} complete`, desc: `Finish every ${lv} lesson`, test: s => done(s, lessons.filter(l => l.level === lv)) },
    { id: `papers-${lv}`, emoji: '🎓', icon: 'award', title: `${lv} exam ready`, desc: `Try all four ${lv} papers`, test: s => PAPERS.every(p => s.exam[`${lv}-${p}`]) }
  ])
];

export function earnedCount(state) { return badges.filter(b => state.badges[b.id]).length; }

// Records newly earned badges in the state and returns them so the app can celebrate.
export function unlockBadges(state, today) {
  const fresh = badges.filter(b => !state.badges[b.id] && b.test(state));
  for (const b of fresh) state.badges[b.id] = today;
  return fresh;
}
