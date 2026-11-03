import Link from "next/link";
import Lesson from "@/components/Lesson";
export default function Practice(){return <main className="mx-auto min-h-screen max-w-2xl px-6 py-10"><Link href="/dashboard" className="text-sm font-bold text-[#52795a]">← Dashboard</Link><h1 className="mt-6 text-3xl font-extrabold">Latihan mufrodat</h1><p className="mb-7 mt-2 text-[#7b897e]">Pilih arti yang paling tepat dari kosakata Arab.</p><Lesson/></main>}
