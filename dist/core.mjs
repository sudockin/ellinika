import {NATURAL_RATE,SPEECH_VERSION} from './voice.mjs';
export const STORAGE_KEY = 'ellinika-progress-v1';
export function dayKey(date = new Date()) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
export function initialState(){return {version:1,settings:{level:'A1',examDate:'',goal:15,rate:NATURAL_RATE,speechVersion:SPEECH_VERSION,audioSource:'recorded',voice:'',translit:true,name:'Sana',princess:true},completed:{},cards:{},activity:{},speaking:0,scenarios:[],exam:{},writing:{},badges:{},goalDay:'',updatedAt:Date.now()};}
export function validDay(value){if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;const d=new Date(value+'T12:00:00');return !isNaN(d)&&dayKey(d)===value;}
const score=v=>v&&Number.isFinite(v.score)&&Number.isFinite(v.total)&&v.total>0;
export function validateState(raw){
 if(!raw||raw.version!==1||typeof raw!=='object')throw new Error('This is not an Ellinika backup.');
 const s=initialState(); const settings=raw.settings||{};
 s.settings.level=settings.level==='A2'?'A2':'A1';
 if(validDay(settings.examDate))s.settings.examDate=settings.examDate;
 s.settings.goal=[5,10,15,20,30].includes(Number(settings.goal))?Number(settings.goal):15;
 s.settings.rate=Number.isFinite(Number(settings.rate))?Math.min(1.1,Math.max(0.6,Number(settings.rate))):NATURAL_RATE;
 s.settings.voice=typeof settings.voice==='string'?settings.voice.slice(0,200):'';
 s.settings.audioSource=settings.audioSource==='device'?'device':'recorded';
 s.settings.translit=settings.translit!==false;
 s.settings.princess=settings.princess!==false;
 if(typeof settings.name==='string'&&settings.name.trim())s.settings.name=settings.name.trim().slice(0,40);
 for(const [id,v] of Object.entries(raw.completed||{}))if(id.length<100&&score(v))s.completed[id]={score:Math.max(0,Math.min(v.total,v.score)),total:v.total,date:validDay(v.date)?v.date:dayKey()};
 for(const [id,v] of Object.entries(raw.exam||{}))if(id.length<100&&score(v))s.exam[id]={score:Math.max(0,Math.min(v.total,v.score)),total:v.total,date:validDay(v.date)?v.date:dayKey()};
 for(const [id,v] of Object.entries(raw.writing||{}))if(id.length<100&&typeof v?.text==='string')s.writing[id]={text:v.text.slice(0,5000),date:validDay(v.date)?v.date:dayKey()};
 for(const [id,v] of Object.entries(raw.cards||{}))if(id.length<100&&v&&Number.isFinite(v.due)&&Number.isFinite(v.interval)&&Number.isFinite(v.reps))s.cards[id]={due:Math.max(0,v.due),interval:Math.max(0,Math.min(3650,v.interval)),reps:Math.max(0,Math.min(10000,v.reps)),ease:Number.isFinite(v.ease)?Math.max(1.3,Math.min(3,v.ease)):2.5};
 for(const [date,v] of Object.entries(raw.activity||{}))if(validDay(date)&&v&&Number.isFinite(v.points)&&Number.isFinite(v.minutes))s.activity[date]={points:Math.max(0,Math.min(100000,v.points)),minutes:Math.max(0,Math.min(1440,v.minutes)),reviews:Number.isFinite(v.reviews)?Math.max(0,Math.min(10000,v.reviews)):0};
 s.speaking=Number.isFinite(raw.speaking)?Math.max(0,Math.min(100000,raw.speaking)):0;
 s.scenarios=Array.isArray(raw.scenarios)?[...new Set(raw.scenarios.filter(v=>typeof v==='string'&&v.length<100))]:[];
 for(const [id,date] of Object.entries(raw.badges||{}))if(id.length<60&&validDay(date))s.badges[id]=date;
 if(validDay(raw.goalDay))s.goalDay=raw.goalDay;
 return s;
}
export function schedule(previous, grade, now=Date.now()){
 if(!['again','hard','good','easy'].includes(grade))throw new Error('Unknown review rating');
 const c=previous||{interval:0,reps:0,ease:2.5};
 let {interval,reps,ease}=c; ease=ease||2.5;
 if(grade==='again')return {interval:0,reps:0,ease:Math.max(1.3,ease-.2),due:now+60000};
 if(grade==='hard'){interval=interval?Math.max(1,Math.round(interval*1.2)):1;ease=Math.max(1.3,ease-.15);}
 if(grade==='good')interval=reps===0?1:reps===1?3:Math.max(1,Math.round(interval*ease));
 if(grade==='easy'){interval=interval?Math.max(3,Math.round(interval*ease*1.3)):3;ease=Math.min(3,ease+.15);}
 return {interval,reps:reps+1,ease,due:now+interval*86400000};
}
export function dueCards(phrases,state,now=Date.now()){return phrases.filter(p=>!state.cards[p.id]||state.cards[p.id].due<=now).sort((a,b)=>{const x=state.cards[a.id],y=state.cards[b.id];return x&&y?x.due-y.due:x?-1:y?1:0;});}
export function upToLevel(items,level){return items.filter(i=>level==='A2'||i.level==='A1');}
export function streak(activity,date=new Date()){
 let d=new Date(date.getFullYear(),date.getMonth(),date.getDate(),12); let count=0;
 if(!activity[dayKey(d)]?.points)d.setDate(d.getDate()-1);
 while(activity[dayKey(d)]?.points){count++;d.setDate(d.getDate()-1);}
 return count;
}
export function daysUntil(day,date=new Date()){
 if(!validDay(day))return null;
 const [y,m,d]=day.split('-').map(Number);return Math.max(0,Math.ceil((Date.UTC(y,m-1,d)-Date.UTC(date.getFullYear(),date.getMonth(),date.getDate()))/86400000));
}
// Greek and transliterated Latin both reduce to bare lowercase letters: accents,
// diaeresis and final sigma are folded so “Καλημέρα” matches “καλημερα”.
export function normalize(text){return String(text).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/ς/g,'σ').replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim();}
export function compareSpeech(expected,actual){
 const a=normalize(expected).split(' ').filter(Boolean),b=normalize(actual).split(' ').filter(Boolean);
 const grid=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0));
 for(let i=0;i<=a.length;i++)grid[i][0]=i;for(let j=0;j<=b.length;j++)grid[0][j]=j;
 for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)grid[i][j]=Math.min(grid[i-1][j]+1,grid[i][j-1]+1,grid[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
 return Math.max(0,Math.round((1-grid[a.length][b.length]/Math.max(1,a.length,b.length))*100));
}
// Typed answers may be in Greek or in the transliteration, so take the better match.
export function bestMatch(targets,actual){return Math.max(0,...targets.filter(Boolean).map(t=>compareSpeech(t,actual)));}
export function wordCount(text){return normalize(text).split(' ').filter(Boolean).length;}
export function scoreAnswers(items,answers){return items.reduce((sum,item,i)=>sum+(answers[i]===item.answer?1:0),0);}
export function logActivity(state,points,minutes,review=false){const key=dayKey();const a=state.activity[key]||{points:0,minutes:0,reviews:0};a.points+=points;a.minutes+=minutes;if(review)a.reviews++;state.activity[key]=a;state.updatedAt=Date.now();}

// Profiles: several people can learn on one device, each with their own progress.
// The first profile ("main") keeps the original storage key, so progress saved
// before profiles existed is never moved.
export const PROFILES_KEY=STORAGE_KEY.replace('-progress-','-profiles-');
export function profileKey(id){return id==='main'?STORAGE_KEY:`${STORAGE_KEY}:${id}`;}
export function nameKey(name){return String(name).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/\s+/g,' ').trim();}
export function readProfiles(storage){
 let index=null;try{index=JSON.parse(storage.getItem(PROFILES_KEY)||'null');}catch{}
 const list=(Array.isArray(index?.list)?index.list:[]).filter(p=>p&&/^[a-z0-9]{1,24}$/.test(p.id)&&typeof p.name==='string'&&p.name.trim()).map(p=>({id:p.id,name:p.name.trim().slice(0,40)}));
 if(!list.some(p=>p.id==='main')&&storage.getItem(STORAGE_KEY)){let name=initialState().settings.name;try{name=validateState(JSON.parse(storage.getItem(STORAGE_KEY))).settings.name;}catch{}list.unshift({id:'main',name});}
 return {list,active:list.some(p=>p.id===index?.active)?index.active:null};
}
export function writeProfiles(storage,profiles){storage.setItem(PROFILES_KEY,JSON.stringify({list:profiles.list,active:profiles.active}));}
export function findProfile(profiles,name){const key=nameKey(name);return key?profiles.list.find(p=>nameKey(p.name)===key)||null:null;}
export function addProfile(profiles,name,storage,setup=()=>{}){
 const clean=String(name).trim().replace(/\s+/g,' ').slice(0,40);if(!clean)throw new Error('Type your name first.');
 if(findProfile(profiles,clean))throw new Error('That name already has a profile.');
 const id=profiles.list.some(p=>p.id==='main')||storage.getItem(STORAGE_KEY)?Date.now().toString(36)+Math.random().toString(36).slice(2,6):'main';
 const state=initialState();state.settings.name=clean;setup(state);
 storage.setItem(profileKey(id),JSON.stringify(state));profiles.list.push({id,name:clean});return id;
}
export function removeProfile(profiles,id,storage){storage.removeItem(profileKey(id));profiles.list=profiles.list.filter(p=>p.id!==id);if(profiles.active===id)profiles.active=null;}
