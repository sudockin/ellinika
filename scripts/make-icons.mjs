// Draws the PNG app icons (the SVG icon is the source design) without extra dependencies.
import {writeFileSync} from 'node:fs';
import {deflateSync} from 'node:zlib';
const hex=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
const crcTable=Array.from({length:256},(_,n)=>{let c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;return c>>>0;});
const crc=buf=>{let c=0xffffffff;for(const b of buf)c=crcTable[(c^b)&255]^(c>>>8);return (c^0xffffffff)>>>0;};
function chunk(type,data){const len=Buffer.alloc(4);len.writeUInt32BE(data.length);const td=Buffer.concat([Buffer.from(type),data]);const c=Buffer.alloc(4);c.writeUInt32BE(crc(td));return Buffer.concat([len,td,c]);}
function png(size,maskable){
 const s=size/512,rows=[];
 for(let y=0;y<size;y++){const row=[0];for(let x=0;x<size;x++){const X=x/s,Y=y/s;let col=null,a=255;
  const r=maskable?0:110,inside=(()=>{const cx=Math.min(Math.max(X,r),512-r),cy=Math.min(Math.max(Y,r),512-r);return (X-cx)**2+(Y-cy)**2<=r*r;})();
  if(!inside){row.push(0,0,0,0);continue;}
  col=hex('#c03a74');
  if(Y>360+30*Math.sin(X/512*Math.PI*2))col=hex('#e07aa5');
  if(Y>410+24*Math.sin(X/512*Math.PI*2))col=hex('#8f2456');
  if((X-378)**2+(Y-138)**2<=40*40)col=hex('#f4d47e');
  // Capital epsilon: a stem and three bars.
  const inE=(X>=176&&X<=222&&Y>=110&&Y<=300)||(Y>=110&&Y<=146&&X>=176&&X<=336)||(Y>=188&&Y<=222&&X>=176&&X<=306)||(Y>=264&&Y<=300&&X>=176&&X<=336);
  if(inE)col=hex('#fffefa');
  row.push(...col,a);}
  rows.push(Buffer.from(row));}
 const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(size,0);ihdr.writeUInt32BE(size,4);ihdr[8]=8;ihdr[9]=6;
 return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ihdr),chunk('IDAT',deflateSync(Buffer.concat(rows))),chunk('IEND',Buffer.alloc(0))]);
}
const out=new URL('../dist/',import.meta.url);
writeFileSync(new URL('icon-192.png',out),png(192,false));
writeFileSync(new URL('icon-512.png',out),png(512,false));
writeFileSync(new URL('icon-maskable.png',out),png(512,true));
console.log('Icons written.');
