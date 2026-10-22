import test from 'node:test';
import assert from 'node:assert/strict';
import {normalize,compareSpeech,bestMatch,wordCount,scoreAnswers,validateState,initialState,schedule,upToLevel,daysUntil} from '../dist/core.mjs';

test('normalize folds Greek accents, capitals and final sigma',()=>{
 assert.equal(normalize('Καλημέρα!'),'καλημερα');
 assert.equal(normalize('ΕΥΧΑΡΙΣΤΏ'),normalize('ευχαριστώ'));
 assert.equal(normalize('Πώς σε λένε;'),'πωσ σε λενε');
 assert.equal(normalize('Efharistó polí.'),'efharisto poli');
});

test('speech comparison works for Greek transcripts',()=>{
 assert.equal(compareSpeech('Θα ήθελα έναν καφέ, παρακαλώ.','θα ηθελα εναν καφε παρακαλω'),100);
 assert.ok(compareSpeech('Θα ήθελα έναν καφέ, παρακαλώ.','θέλω καφέ')<60);
 assert.equal(compareSpeech('Γεια σου.',''),0);
});

test('typed answers may use the transliteration',()=>{
 assert.equal(bestMatch(['Τι κάνεις;','Ti kánis?'],'ti kanis'),100);
 assert.equal(bestMatch(['Τι κάνεις;','Ti kánis?'],'Τι κάνεις'),100);
});

test('word count ignores punctuation',()=>{
 assert.equal(wordCount('Γεια σου, Άννα! Τι κάνεις;'),5);
 assert.equal(wordCount('   '),0);
});

test('objective papers score exact answers only',()=>{
 const items=[{answer:0},{answer:2},{answer:1}];
 assert.equal(scoreAnswers(items,[0,2,undefined]),2);
});

test('backups are validated and keep Greek-specific settings',()=>{
 const raw={...initialState(),settings:{level:'A2',examDate:'2027-05-15',goal:20,translit:false},exam:{'A1-reading':{score:18,total:21,date:'2026-10-01'},'bad':{score:'x'}},writing:{a1w1:{text:'Γεια σου',date:'2026-10-02'}}};
 const s=validateState(raw);
 assert.equal(s.settings.level,'A2');assert.equal(s.settings.examDate,'2027-05-15');assert.equal(s.settings.translit,false);
 assert.deepEqual(Object.keys(s.exam),['A1-reading']);
 assert.equal(s.writing.a1w1.text,'Γεια σου');
 assert.throws(()=>validateState({version:2}));
 assert.equal(validateState({version:1,settings:{level:'C2',examDate:'soon'}}).settings.level,'A1');
});

test('review scheduling grows intervals',()=>{
 const first=schedule(null,'good',0);assert.equal(first.interval,1);
 const second=schedule(first,'good',0);assert.equal(second.interval,3);
 assert.equal(schedule(second,'again',0).interval,0);
});

test('level filter and exam countdown',()=>{
 const items=[{level:'A1'},{level:'A2'}];
 assert.equal(upToLevel(items,'A1').length,1);assert.equal(upToLevel(items,'A2').length,2);
 assert.equal(daysUntil('',new Date(2026,9,22)),null);
 assert.equal(daysUntil('2026-10-25',new Date(2026,9,22)),3);
});
