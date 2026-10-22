import test from 'node:test';
import assert from 'node:assert/strict';
import {lessons,phrases,scenarios,alphabet,exam,LEVELS,PAPERS} from '../dist/content.mjs';

const greek=/[Ͱ-Ͽἀ-῿]/;

test('ids are unique',()=>{
 for(const list of [lessons,phrases,scenarios]){const ids=list.map(x=>x.id);assert.equal(new Set(ids).size,ids.length);}
 const taskIds=LEVELS.flatMap(l=>PAPERS.flatMap(p=>(exam[l].papers[p].tasks||[]).map(t=>t.id)));
 assert.equal(new Set(taskIds).size,taskIds.length);
});

test('every Greek line has a transliteration and an English meaning',()=>{
 const lines=[...phrases,...lessons.flatMap(l=>l.examples),...scenarios.flatMap(s=>s.turns),...alphabet];
 for(const x of lines){assert.match(x.el,greek,x.el);assert.ok(x.tr&&!greek.test(x.tr),`Transliteration for ${x.el}`);assert.ok(x.en,`English for ${x.el}`);}
});

test('lesson questions have a valid answer',()=>{
 for(const l of lessons){assert.ok(['A1','A2'].includes(l.level));assert.ok(l.questions.length>=4);for(const q of l.questions){assert.ok(q.answer>=0&&q.answer<q.options.length,`${l.id}: ${q.prompt}`);assert.equal(new Set(q.options).size,q.options.length);}}
});

test('scenarios alternate between the other person and you',()=>{
 for(const s of scenarios){assert.equal(s.turns.length%2,0,s.id);s.turns.forEach((t,i)=>assert.equal(t.speaker,i%2?'you':'them',`${s.id} turn ${i}`));}
});

test('exam papers follow the official structure and answer keys are valid',()=>{
 for(const l of LEVELS){
  const p=exam[l].papers;
  for(const paper of PAPERS)assert.equal(p[paper].marks,25,`${l} ${paper}`);
  assert.equal(p.reading.minutes,30);assert.equal(p.listening.minutes,25);
  assert.equal(p.writing.minutes,l==='A1'?40:45);
  for(const paper of ['reading','listening'])for(const t of p[paper].tasks){
   assert.ok(t.items.length>0);
   for(const item of t.items){assert.ok(item.answer>=0&&item.answer<item.options.length,`${t.id}: ${item.prompt}`);assert.match(item.prompt,greek);}
   if(paper==='listening')assert.ok(t.script.every(line=>greek.test(line.el))&&t.scriptEn,t.id);
  }
  // Matching and gap-fill tasks use every option once, with distractors left over.
  for(const t of p.reading.tasks.filter(t=>t.items[0].options.length>4)){const used=t.items.map(i=>i.answer);assert.equal(new Set(used).size,used.length,t.id);assert.ok(t.items[0].options.length>used.length,t.id);}
  for(const w of p.writing.tasks){assert.match(w.model.el,greek);assert.ok(w.checklist.length>=4);}
  for(const id of p.speaking.partC)assert.ok(scenarios.some(s=>s.id===id),id);
 }
 assert.equal(exam.A1.papers.reading.tasks[0].items.length,7);
 assert.equal(exam.A2.papers.reading.tasks[0].items.length,7);
});
