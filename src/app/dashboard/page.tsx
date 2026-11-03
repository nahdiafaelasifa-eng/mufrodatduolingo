import Link from "next/link";
import { BookOpen, Flame, Star, Search } from "lucide-react";
import { sampleVocabulary } from "@/lib/data";

export default function Dashboard() {
  const categories = [...new Set(sampleVocabulary.map((v) => v.category))];

  const stats = [
    { Icon: Flame, value: "0 hari", label: "Streak belajar" },
    { Icon: Star, value: "0 XP", label: "Total pengalaman" },
    {
      Icon: BookOpen,
      value: `${sampleVocabulary.length} kata`,
      label: "Kosakata tersedia",
    },
  ];

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-8">
      <header className="flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold text-[#315c48]">
          مَرْحَبًا MARHABAN
        </Link>
        <Link href="/login" className="text-sm font-semibold text-[#315c48]">
          Masuk akun
        </Link>
      </header>

      <section className="mt-12">
        <p className="font-semibold text-[#78907e]">أَهْلًا وَسَهْلًا</p>
        <h1 className="mt-2 text-3xl font-extrabold">
          Selamat datang di ruang belajarmu!
        </h1>
        <p className="mt-2 text-[#7b897e]">
          Pilih materi dan mulai tambah kosakata hari ini.
        </p>
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map(({ Icon, value, label }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-2xl border border-[#e2e9df] bg-white p-5"
          >
            <Icon className="text-[#719779]" size={25} />
            <div>
              <div className="text-xl font-extrabold">{value}</div>
              <div className="text-sm text-[#829084]">{label}</div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-extrabold">Mulai belajar</h2>
          <Link
            href="/dictionary"
            className="flex items-center gap-1 text-sm font-bold text-[#52795a]"
          >
            Kamus <Search size={15} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category}
              href="/learn"
              className="rounded-2xl border border-[#e2e9df] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf4eb] text-[#52795a]">
                <BookOpen />
              </div>
              <h3 className="text-lg font-bold">{category}</h3>
              <p className="mt-1 text-sm text-[#829084]">
                {
                  sampleVocabulary.filter((v) => v.category === category)
                    .length
                }{" "}
                kosakata
              </p>
              <div className="mt-5 h-2 rounded-full bg-[#edf1e9]">
                <div className="h-2 w-1/4 rounded-full bg-[#8eaf91]" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Link
        href="/practice"
        className="mt-8 flex items-center justify-center rounded-2xl bg-[#315c48] p-4 font-bold text-white"
      >
        Mulai latihan kuis →
      </Link>
    </main>
  );
}
