import {lessons,phrases,LEVELS,PAPERS} from './content.mjs';
import {streak} from './core.mjs';

// Points climb through princess ranks; the last one is the crown.
export const ranks = [
  { min: 0, emoji: '✨', title: 'Little sparkle', el: 'Μικρή σπίθα' },
  { min: 100, emoji: '🌸', title: 'Alpha princess', el: 'Πριγκίπισσα του άλφα' },
  { min: 300, emoji: '🐚', title: 'Island princess', el: 'Πριγκίπισσα των νησιών' },
  { min: 700, emoji: '🏛️', title: 'Princess of Athens', el: 'Πριγκίπισσα της Αθήνας' },
  { min: 1200, emoji: '🌊', title: 'Aegean princess', el: 'Πριγκίπισσα του Αιγαίου' },
  { min: 2000, emoji: '👑', title: 'Queen of Greek', el: 'Βασίλισσα των ελληνικών' }
];

export function points(state) { return Object.values(state.activity).reduce((sum, a) => sum + a.points, 0); }

export function rankFor(total) {
  const index = ranks.findLastIndex(r => total >= r.min), rank = ranks[index], next = ranks[index + 1] || null;
  return { ...rank, index, next, progress: next ? (total - rank.min) / (next.min - rank.min) : 1 };
}

const done = (state, list) => list.length > 0 && list.every(l => state.completed[l.id]);
const love = phrases.filter(p => p.category === 'Love & us');

export const badges = [
  { id: 'first-lesson', emoji: '🌸', title: 'First petal', desc: 'Finish your first lesson', test: s => Object.keys(s.completed).length >= 1 },
  { id: 'alphabet', emoji: '🔤', title: 'Alpha to omega', desc: 'Finish the letters lesson', test: s => !!s.completed['a1-letters'] },
  { id: 'streak-3', emoji: '🔥', title: 'Three-day sparkle', desc: 'Practise 3 days in a row', test: s => streak(s.activity) >= 3 },
  { id: 'streak-7', emoji: '💖', title: 'Week streak', desc: 'Practise 7 days in a row', test: s => streak(s.activity) >= 7 },
  { id: 'streak-30', emoji: '💎', title: 'Diamond habit', desc: 'Practise 30 days in a row', test: s => streak(s.activity) >= 30 },
  { id: 'cards-25', emoji: '🃏', title: 'Card queen', desc: 'Review 25 different phrases', test: s => Object.keys(s.cards).length >= 25 },
  { id: 'voice-5', emoji: '🎤', title: 'Brave voice', desc: 'Speak Greek aloud 5 times', test: s => s.speaking >= 5 },
  { id: 'chat-3', emoji: '💬', title: 'Chatterbox', desc: 'Finish 3 conversations', test: s => s.scenarios.length >= 3 },
  { id: 'family', emoji: '🫶', title: 'Family favourite', desc: 'Have Sunday lunch with the family', test: s => s.scenarios.includes('family') },
  { id: 'love-words', emoji: '💌', title: 'Sweet talk', desc: 'Review every “Love & us” phrase', test: s => love.every(p => s.cards[p.id]) },
  { id: 'first-paper', emoji: '📝', title: 'Exam brave', desc: 'Try your first practice paper', test: s => Object.keys(s.exam).length >= 1 },
  { id: 'goal-day', emoji: '🎯', title: 'Goal getter', desc: 'Reach your daily goal', test: s => !!s.goalDay },
  ...LEVELS.flatMap(lv => [
    { id: `lessons-${lv}`, emoji: lv === 'A1' ? '🏝️' : '🏰', title: `${lv} princess`, desc: `Finish every ${lv} lesson`, test: s => done(s, lessons.filter(l => l.level === lv)) },
    { id: `papers-${lv}`, emoji: '🎓', title: `${lv} exam ready`, desc: `Try all four ${lv} papers`, test: s => PAPERS.every(p => s.exam[`${lv}-${p}`]) }
  ])
];

// Records newly earned badges in the state and returns them so the app can celebrate.
export function unlockBadges(state, today) {
  const fresh = badges.filter(b => !state.badges[b.id] && b.test(state));
  for (const b of fresh) state.badges[b.id] = today;
  return fresh;
}
