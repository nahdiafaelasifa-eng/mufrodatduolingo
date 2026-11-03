'use client';
import { useMemo, useState } from "react";
import { Volume2, CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { sampleVocabulary } from "@/lib/data";
export default function Lesson(){
 const [index,setIndex]=useState(0); const [choice,setChoice]=useState<string|null>(null); const [score,setScore]=useState(0);
 const word=sampleVocabulary[index%sampleVocabulary.length];
 const options=useMemo(()=>[word.meaning,...sampleVocabulary.filter(x=>x.id!==word.id).slice(index%4,index%4+3).map(x=>x.meaning)].sort((a,b)=>a.localeCompare(b)),[index,word]);
 function next(){if(choice===word.meaning)setScore(s=>s+1);setChoice(null);setIndex(i=>i+1)}
 function speak(){if(typeof window!=="undefined"&&"speechSynthesis"in window){const u=new SpeechSynthesisUtterance(word.arabic);u.lang="ar-SA";window.speechSynthesis.speak(u)}}
 return <section className="rounded-3xl border border-[#e2e9df] bg-white p-6 shadow-sm md:p-8">
  <div className="mb-6 flex items-center justify-between text-sm text-[#66806e]"><span>Latihan mufrodat</span><span>Skor: {score}</span></div>
  <div className="mb-7 h-2 overflow-hidden rounded-full bg-[#edf1e9]"><div className="h-full rounded-full bg-[#7ba681] transition-all" style={{width:`${((index%8)+1)/8*100}%`}}/></div>
  <p className="text-center text-sm font-semibold text-[#78907e]">Apa arti kosakata berikut?</p>
  <div className="my-6 flex flex-col items-center gap-3">
   <div className="arabic text-6xl font-bold text-[#315c48]" dir="rtl">{word.arabic}</div>
   <span className="text-sm text-[#87958a]">{word.transliteration}</span>
   <button onClick={speak} className="flex items-center gap-2 rounded-full bg-[#eef4ed] px-4 py-2 text-sm font-semibold text-[#315c48]"><Volume2 size={17}/> Dengarkan</button>
  </div>
  <div className="grid gap-3 sm:grid-cols-2">{options.map(option=><button key={option} disabled={!!choice} onClick={()=>setChoice(option)} className={`rounded-2xl border p-4 text-left font-semibold transition ${choice===option?(option===word.meaning?"border-[#4b9563] bg-[#edf7ee] text-[#315c48]":"border-[#d58b79] bg-[#fff1ed] text-[#9a4937]"):"border-[#e2e9df] hover:border-[#8eaf91] hover:bg-[#f8faf6]"}`}>{option}</button>)}</div>
  {choice&&<div className={`mt-5 flex items-center gap-2 rounded-xl p-3 text-sm font-semibold ${choice===word.meaning?"bg-[#edf7ee] text-[#315c48]":"bg-[#fff1ed] text-[#9a4937]"}`}>{choice===word.meaning?<CheckCircle2 size={18}/>:<XCircle size={18}/>} {choice===word.meaning?"Tepat sekali!":"Belum tepat. Jawaban: "+word.meaning}</div>}
  <button onClick={choice?next:()=>{setChoice(null);setIndex(i=>i+1)}} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#315c48] p-3 font-bold text-white">{choice?"Lanjutkan":"Lewati"} <RotateCcw size={16}/></button>
 </section>
}
