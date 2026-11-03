# Marhaban — Arabic Vocabulary Learning

Starter full-stack untuk aplikasi belajar mufrodat bahasa Arab.

## Fitur yang tersedia
- Landing page dan dashboard
- Daftar kosakata dengan harakat, transliterasi, arti, dan contoh kalimat
- Kamus Arab–Indonesia dengan pencarian
- Kuis pilihan ganda interaktif dengan skor sesi
- Login email/password melalui Supabase (setelah konfigurasi)
- SQL schema untuk profil, kategori, kosakata, progres, dan riwayat kuis
- Desain responsif bernuansa sage green dan cream

## 1. Persiapan
- Node.js versi 20 atau lebih baru
- Akun Supabase
- VS Code

## 2. Instalasi
```bash
npm install
cp .env.example .env.local
npm run dev
```
Buka http://localhost:3000.

## 3. Hubungkan Supabase
1. Buat project baru di https://supabase.com.
2. Buka SQL Editor dan jalankan isi `supabase/schema.sql`.
3. Buka Project Settings > API, salin Project URL dan anon/public key.
4. Isi `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```
5. Restart server `npm run dev`.

Catatan: fitur login yang disediakan adalah login. Untuk membuat akun, aktifkan halaman registrasi dan alur signUp pada pengembangan berikutnya. Jangan pernah memasukkan `service_role` key ke browser atau repository.

## 4. Upload ke GitHub
```bash
git init
git add .
git commit -m "Initial Marhaban app"
git branch -M main
git remote add origin https://github.com/USERNAME/marhaban.git
git push -u origin main
```

## 5. Deploy ke Vercel
1. Import repository GitHub di https://vercel.com.
2. Tambahkan `NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY` pada Environment Variables.
3. Deploy.
4. Setelah deploy, masukkan URL Vercel ke Supabase Authentication > URL Configuration jika memakai auth redirect.

## Catatan pengembangan
Data mufrodat contoh saat ini berada di `src/lib/data.ts` agar demo langsung berjalan tanpa database. Langkah berikutnya adalah mengganti sumber data contoh dengan query Supabase, menambah registrasi, menyimpan jawaban kuis, dan menghubungkan progress per pengguna. Tabel dan kebijakan RLS dasar sudah disiapkan dalam `supabase/schema.sql`.
