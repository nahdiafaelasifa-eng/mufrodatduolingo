import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Trophy,
  Sparkles,
} from "lucide-react";

const features = [
  {
    Icon: BookOpen,
    title: "Mufrodat tematik",
    description:
      "Pelajari kosakata berdasarkan kategori kehidupan sehari-hari.",
  },
  {
    Icon: Brain,
    title: "Latihan interaktif",
    description: "Uji pemahaman melalui kuis pilihan ganda.",
  },
  {
    Icon: Trophy,
    title: "Pantau perkembangan",
    description: "Bangun kebiasaan belajar dan tingkatkan kemampuan.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-2xl font-extrabold text-[#315c48]">
          مَرْحَبًا
          <span className="ml-2 text-sm font-bold text-[#829584]">
            MARHABAN
          </span>
        </Link>
        <div className="flex gap-3">
          <Link
            href="/login"
            className="rounded-xl px-4 py-2 font-semibold text-[#315c48]"
          >
            Masuk
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl bg-[#315c48] px-4 py-2 font-semibold text-white"
          >
            Mulai belajar
          </Link>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-2 md:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f0e7] px-4 py-2 text-sm font-bold text-[#456c50]">
            <Sparkles size={16} />
            Belajar sedikit, berkembang setiap hari
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-[#20382b] md:text-6xl">
            Bahasa Arab jadi lebih{" "}
            <span className="text-[#719779]">mudah</span> dan menyenangkan.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#718076]">
            Kenali mufrodat, dengarkan pelafalannya, dan uji kemampuanmu melalui
            latihan interaktif.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-2xl bg-[#315c48] px-6 py-4 font-bold text-white"
            >
              Mulai belajar <ArrowRight size={18} />
            </Link>
            <Link
              href="/dictionary"
              className="rounded-2xl border border-[#cbd9ca] px-6 py-4 font-bold text-[#315c48]"
            >
              Jelajahi kamus
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e1e9df] bg-white p-7 shadow-xl shadow-[#315c48]/5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#315c48]">Kosakata hari ini</span>
            <span className="rounded-full bg-[#f4f0df] px-3 py-1 text-xs font-bold text-[#987d3c]">
              Pemula
            </span>
          </div>
          <div
            className="arabic py-10 text-center text-7xl font-bold text-[#315c48]"
            dir="rtl"
          >
            مَرْحَبًا
          </div>
          <p className="text-center text-sm text-[#839187]">marhaban</p>
          <p className="mt-2 text-center text-2xl font-bold">
            Halo / Selamat datang
          </p>
          <div className="mt-8 grid grid-cols-3 gap-2 text-center">
            {[
              { number: "8+", label: "Kosakata" },
              { number: "3", label: "Kategori" },
              { number: "1", label: "Pelajaran" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-[#f5f8f2] p-3">
                <div className="text-xl font-extrabold text-[#315c48]">
                  {item.number}
                </div>
                <div className="text-xs text-[#839187]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-extrabold">
          Belajar dengan cara yang terarah
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {features.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#e2e9df] bg-white p-6"
            >
              <Icon className="mb-4 text-[#719779]" size={27} />
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#7a887d]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#e1e9df] py-7 text-center text-sm text-[#839187]">
        مَرْحَبًا · Belajar bahasa Arab, satu kata setiap hari.
      </footer>
    </main>
  );
}
