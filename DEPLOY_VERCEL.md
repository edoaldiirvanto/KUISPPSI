# Panduan Deploy ke Vercel — Jatimulyo Revenue Intelligence (JRI)

Proyek ini telah dikonfigurasi penuh dengan [`vercel.json`](file:///d:/KUISPPSI-24311148-EDOALDIIRVANTO/vercel.json) di root repository maupun di dalam folder aplikasi [`jri-app/vercel.json`](file:///d:/KUISPPSI-24311148-EDOALDIIRVANTO/jri-app/vercel.json).

Anda dapat memilih salah satu dari 2 cara termudah di bawah ini:

---

## Cara 1: Deploy Otomatis via Dashboard Vercel (Rekomendasi)

1. **Push Proyek ke GitHub / GitLab / Bitbucket**:
   ```bash
   git init
   git add .
   git commit -m "feat: jri app siap deploy ke vercel"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```

2. **Buka Dashboard Vercel**:
   - Kunjungi [https://vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
   - Klik tombol **"Add New..."** > **"Project"**.
   - Pilih repository GitHub Anda, lalu klik **"Import"**.

3. **Pengaturan Project (Otomatis Terdeteksi)**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: Biarkan `./` (karena sudah ada `vercel.json` dan `package.json` di root) ATAU pilih `./jri-app`.
   - **Build Command**: `cd jri-app && npm run build` (atau otomatis `npm run build` jika root dipilih `jri-app`).
   - **Output Directory**: `jri-app/dist` (atau `dist` jika root dipilih `jri-app`).

4. **Klik "Deploy"**:
   - Tunggu sekitar 30 detik.
   - Aplikasi Anda langsung tayang dengan domain publik gratis dan sertifikat SSL/HTTPS aktif (contoh: `https://kuisppsi-jri-app.vercel.app`).

---

## Cara 2: Deploy Cepat via Terminal (Vercel CLI)

Vercel CLI sudah tersedia di sistem. Anda cukup menjalankan:

```powershell
cd d:\KUISPPSI-24311148-EDOALDIIRVANTO\jri-app
npx vercel
```

- Ikuti instruksi login sekali di browser.
- Tekan `Enter` pada setiap pertanyaan konfigurasi default.
- Untuk publish ke versi **Production**:
  ```powershell
  npx vercel --prod
  ```
- Terminal akan langsung memberikan tautan live situs Anda!
