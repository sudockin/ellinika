import test from 'node:test';
import assert from 'node:assert/strict';
import {isGreekVoice,chooseVoice,rankedVoices,recordingFor} from '../dist/voice.mjs';

const voices=[{name:'Samantha',lang:'en-US',voiceURI:'sam'},{name:'Melina',lang:'el-GR',voiceURI:'mel'},{name:'Melina (Enhanced)',lang:'el-GR',voiceURI:'mel-e'},{name:'Google Ελληνικά',lang:'el_GR',voiceURI:'g'}];

test('only Greek voices are offered',()=>{
 assert.ok(isGreekVoice({lang:'el-GR'}));assert.ok(isGreekVoice({lang:'el_GR'}));assert.ok(!isGreekVoice({lang:'en-GB'}));
 assert.equal(rankedVoices(voices).length,3);
});

test('enhanced voices are preferred, saved choices respected',()=>{
 assert.equal(chooseVoice(voices).voiceURI,'mel-e');
 assert.equal(chooseVoice(voices,'g').voiceURI,'g');
 assert.equal(chooseVoice([{name:'Samantha',lang:'en-US'}]),null);
});

test('recordings are used only from a Greek pack',()=>{
 const pack={version:1,locale:'el-GR',clips:{'Γεια σου.':'clips/0123456789abcdef01234567.mp3'}};
 assert.equal(recordingFor(pack,'Γεια σου.'),'./audio/clips/0123456789abcdef01234567.mp3');
 assert.equal(recordingFor({...pack,locale:'es-MX'},'Γεια σου.'),null);
});
