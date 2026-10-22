import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
import {lessons,phrases,scenarios,pronunciation,alphabet,combinations} from '../dist/content.mjs';
import {speechText} from '../dist/voice.mjs';

// Every short Greek text the app can speak with one tap. Exam scripts are read sentence by sentence by the device voice.
export function speechCorpus(){return [...new Set([
 ...phrases.map(p=>p.el),...lessons.flatMap(l=>l.examples.map(e=>e.el)),...scenarios.flatMap(s=>s.turns.map(t=>t.el)),...pronunciation.map(p=>p.el),...alphabet.map(a=>a.el),...combinations.map(c=>c.el)
].map(speechText))];}

if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
 const texts=speechCorpus();
 console.log(JSON.stringify(process.argv.includes('--plan')?{clips:texts.length,words:texts.join(' ').split(/\s+/).length,locale:'el-GR'}:texts,null,2));
}
