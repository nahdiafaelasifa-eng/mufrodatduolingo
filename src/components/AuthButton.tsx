'use client';
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
export default function AuthButton(){
 const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
 const [message,setMessage]=useState("");
 async function signIn(e:React.FormEvent){
  e.preventDefault(); const supabase=createClient();
  if(!supabase){setMessage("Tambahkan konfigurasi Supabase di .env.local terlebih dahulu.");return;}
  const {error}=await supabase.auth.signInWithPassword({email,password});
  setMessage(error?.message ?? "Berhasil masuk. Muat ulang halaman dashboard.");
 }
 return <form onSubmit={signIn} className="space-y-3">
  <input className="w-full rounded-xl border border-[#d9e2d8] bg-white p-3 outline-none focus:border-[#315c48]" type="email" required placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
  <input className="w-full rounded-xl border border-[#d9e2d8] bg-white p-3 outline-none focus:border-[#315c48]" type="password" required placeholder="Kata sandi" value={password} onChange={e=>setPassword(e.target.value)}/>
  <button className="w-full rounded-xl bg-[#315c48] p-3 font-bold text-white hover:bg-[#244735]">Masuk</button>
  {message&&<p className="text-sm text-[#315c48]">{message}</p>}
 </form>
}
