# Panduan Deploy — Jatimulyo Revenue Intelligence (JRI)

Aplikasi **JRI (Jatimulyo Revenue Intelligence)** telah dikonfigurasi dan dipersiapkan agar **langsung siap di-deploy ke platform mana saja**:

---

## 1. Opsi A: Deploy ke Vercel (Paling Cepat & Gratis)
1. Buka [vercel.com](https://vercel.com) dan login.
2. Klik **Add New Project** lalu hubungkan repository Git Anda (atau install `npm i -g vercel` di terminal).
3. Pilih direktori root: `./jri-app`.
4. Vercel akan otomatis mengenali konfigurasi [`vercel.json`](file:///d:/KUISPPSI-24311148-EDOALDIIRVANTO/jri-app/vercel.json).
5. Klik **Deploy**. Aplikasi langsung online dengan domain HTTPS otomatis.

---

## 2. Opsi B: Deploy ke Netlify (Paling Mudah)
1. Buka [netlify.com](https://netlify.com).
2. Seret dan jatuhkan (*drag-and-drop*) folder `jri-app/dist` ke dashboard Netlify.
3. Atau sambungkan GitHub; Netlify akan otomatis menggunakan file [`netlify.toml`](file:///d:/KUISPPSI-24311148-EDOALDIIRVANTO/jri-app/netlify.toml).
4. Klik **Deploy Site**.

---

## 3. Opsi C: Deploy ke GitHub Pages (Gratis Selamanya)
Telah disediakan workflow otomatis di [`.github/workflows/deploy.yml`](file:///d:/KUISPPSI-24311148-EDOALDIIRVANTO/.github/workflows/deploy.yml):
1. Push repository Anda ke GitHub.
2. Masuk ke **Settings** > **Pages** di repository GitHub Anda.
3. Pada bagian **Build and deployment > Source**, pilih **GitHub Actions**.
4. Aplikasi akan otomatis ter-build dan tayang di `https://<username>.github.io/<repo>/`.

---

## 4. Opsi D: Deploy menggunakan Docker / VPS / Cloud Run / Kubernetes
Telah disediakan [`Dockerfile`](file:///d:/KUISPPSI-24311148-EDOALDIIRVANTO/jri-app/Dockerfile) multi-stage (Node.js build + Nginx Alpine ultra-ringan) dan [`docker-compose.yml`](file:///d:/KUISPPSI-24311148-EDOALDIIRVANTO/jri-app/docker-compose.yml):

```bash
cd jri-app

# Menggunakan Docker Compose (Port 8080)
docker-compose up -d --build

# Atau build Docker image manual:
docker build -t jri-app:latest .
docker run -d -p 80:80 --name jri-container jri-app:latest
```
Akses di browser: `http://IP_SERVER_ANDA:8080` atau `http://IP_SERVER_ANDA`.

---

## 5. Opsi E: Deploy ke Hosting Biasa / cPanel / Shared Hosting (Apache / Nginx)
1. Jalankan `npm run build` di dalam folder `jri-app`.
2. Folder [`jri-app/dist`](file:///d:/KUISPPSI-24311148-EDOALDIIRVANTO/jri-app/dist) berisi file statis (`index.html`, folder `assets/`).
3. Upload seluruh isi folder `dist/` ke direktori `public_html` di cPanel atau server web Anda.
4. Karena `vite.config.js` sudah diatur dengan `base: './'`, aplikasi dapat berjalan baik di root domain maupun sub-direktori (misalnya: `https://domaindesa.id/jri/`).
