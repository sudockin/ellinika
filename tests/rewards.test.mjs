import test from 'node:test';
import assert from 'node:assert/strict';
import {ranks,rankFor,badges,unlockBadges} from '../dist/rewards.mjs';
import {initialState,validateState,dayKey} from '../dist/core.mjs';
import {notes} from '../dist/content.mjs';

test('ranks climb in order and the top rank is complete',()=>{
 for(let i=1;i<ranks.length;i++)assert.ok(ranks[i].min>ranks[i-1].min);
 assert.equal(rankFor(0).index,0);
 assert.equal(rankFor(150).title,'Alpha princess');
 assert.equal(rankFor(99999).next,null);
 assert.equal(rankFor(99999).progress,1);
 assert.ok(Math.abs(rankFor(200).progress-.5)<1e-9);
});

test('badges unlock once and are kept through validation',()=>{
 const s=initialState();s.completed['a1-letters']={score:4,total:4,date:dayKey()};
 const fresh=unlockBadges(s,'2026-10-22').map(b=>b.id);
 assert.deepEqual(fresh.sort(),['alphabet','first-lesson']);
 assert.equal(unlockBadges(s,'2026-10-23').length,0);
 const kept=validateState(JSON.parse(JSON.stringify(s)));
 assert.equal(kept.badges.alphabet,'2026-10-22');
 assert.equal(new Set(badges.map(b=>b.id)).size,badges.length);
});

test('progress saved before rewards existed still loads, with the default name',()=>{
 const old={version:1,settings:{level:'A1',goal:15},completed:{greetings:{score:4,total:4,date:'2026-10-22'}},cards:{},activity:{'2026-10-22':{points:30,minutes:6}}};
 const s=validateState(old);
 assert.equal(s.settings.name,'Sana');
 assert.deepEqual(s.badges,{});
 assert.ok(s.completed.greetings);
 assert.equal(validateState({...old,settings:{name:'  Σάνα  '}}).settings.name,'Σάνα');
});

test('daily notes have Greek, transliteration, English and French',()=>{
 for(const n of notes)for(const k of ['el','tr','en','fr'])assert.ok(n[k]?.trim(),k);
});
