# Netlify Deployment Guide / Panduan Deployment Netlify

Complete guide for deploying the Sentosa landing page application to Netlify.

---

## Table of Contents / Daftar Isi

1. [Prerequisites](#prerequisites)
2. [Environment Variables](#environment-variables)
3. [Manual Deployment (via Dashboard)](#manual-deployment)
4. [CLI Deployment](#cli-deployment)
5. [Git-Based Deployment](#git-based-deployment)
6. [Post-Deployment Verification](#post-deployment-verification)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites / Prasyarat

### Required / Diperlukan:

- **Netlify Account** - Sign up at [netlify.com](https://www.netlify.com)
  - Free tier available for personal projects
  - Tier gratis tersedia untuk proyek pribadi

- **Node.js Version 20** - Required for build process
  - Download: [nodejs.org](https://nodejs.org)
  - Verify: `node --version`

- **Git Repository** - For Git-based deployment (optional)
  - GitHub, GitLab, or Bitbucket account

- **Git installed** - For CLI deployment (optional)
  - Download: [git-scm.com](https://git-scm.com)

### Optional / Opsional:

- **Netlify CLI** - For command-line deployment
  ```bash
  npm install -g netlify-cli
  ```
  - Verify: `netlify --version`

---

## Environment Variables / Variabel Lingkungan

### Required Variables / Variabel Wajib:

Set these in Netlify Dashboard: Site Settings → Environment variables

| Variable | Description | Example | Deskripsi |
|----------|-------------|---------|-----------|
| `NEXT_PUBLIC_API_BASE_URL` | Backend API endpoint | `https://dashboard.sentosakutech.com/api/v1` | Titik akhir API backend |
| `NODE_ENV` | Environment mode | `production` | Mode lingkungan |
| `NODE_VERSION` | Node.js version | `20` | Versi Node.js |

### Optional Variables / Variabel Opsional:

| Variable | Description | Example | Deskripsi |
|----------|-------------|---------|-----------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID | `G-XXXXXXXXXX` | ID Google Analytics 4 |
| `API_TIMEOUT` | API request timeout (ms) | `10000` | Batas waktu permintaan API |
| `API_CACHE_DURATION` | Cache duration (seconds) | `3600` | Durasi cache |
| `SENTRY_ORG` | Sentry organization slug | `your-org` | Slug organisasi Sentry |
| `SENTRY_PROJECT` | Sentry project name | `sentosa-app` | Nama proyek Sentry |

### Setting Environment Variables in Netlify:

**Via Dashboard:**

1. Go to your site dashboard
   - Buka dashboard situs Anda
2. Navigate to **Site Settings** → **Environment variables**
   - Masuk ke **Site Settings** → **Environment variables**
3. Click **Add a variable**
   - Klik **Add a variable**
4. Enter key and value, then save
   - Masukkan key dan value, lalu simpan
5. Repeat for all variables
   - Ulangi untuk semua variabel
6. Trigger a redeploy if the site is already deployed
   - Picu deploy ulang jika situs sudah di-deploy

**Via CLI:**

```bash
netlify env:set NEXT_PUBLIC_API_BASE_URL "https://dashboard.sentosakutech.com/api/v1"
netlify env:set NODE_ENV "production"
netlify env:set NEXT_PUBLIC_GA_ID "G-XXXXXXXXXX"
```

---

## Manual Deployment (via Dashboard)

Follow these steps to deploy through the Netlify web interface:

**Step 1: Create a New Site / Buat Situs Baru**

1. Log in to [Netlify](https://app.netlify.com)
   - Masuk ke [Netlify](https://app.netlify.com)
2. Click **Add new site** → **Import an existing project**
   - Klik **Add new site** → **Import an existing project**

**Step 2: Connect Git Repository**

If using Git-based deployment:

1. Select your Git provider (GitHub/GitLab/Bitbucket)
   - Pilih penyedia Git Anda (GitHub/GitLab/Bitbucket)
2. Authorize Netlify to access your repositories
   - Beri otorisasi Netlify untuk mengakses repositori Anda
3. Select the `sentosa-app` repository
   - Pilih repositori `sentosa-app`
4. Click **Import site**
   - Klik **Import site**

**Step 3: Configure Build Settings**

Netlify will auto-detect Next.js, but verify these settings:

| Setting | Value | Nilai |
|---------|-------|-------|
| **Build command** | `npm run build` | `npm run build` |
| **Publish directory** | `.next` | `.next` |
| **Branch to deploy** | `main` or `master` | `main` atau `master` |

**Step 4: Configure Environment Variables**

1. Scroll to **Environment variables** section
   - Gulir ke bagian **Environment variables**
2. Add all variables from the [Environment Variables](#environment-variables) section
   - Tambahkan semua variabel dari bagian [Environment Variables](#environment-variables)
3. Click **Show advanced** → **New variable** for each one
   - Klik **Show advanced** → **New variable** untuk setiap variabel

**Step 5: Deploy**

1. Click **Deploy site**
   - Klik **Deploy site**
2. Wait for the build to complete (usually 2-5 minutes)
   - Tunggu hingga build selesai (biasanya 2-5 menit)
3. You'll see a success message with your site URL
   - Anda akan melihat pesan sukses dengan URL situs Anda

---

## CLI Deployment

Install Netlify CLI and deploy from your terminal:

### Installation / Instalasi

```bash
npm install -g netlify-cli
```

### Login to Netlify

```bash
netlify login
```

This opens a browser window to authenticate.
Ini akan membuka jendela browser untuk autentikasi.

### Initialize Site

From the project root:

```bash
cd E:\KERJAAN HARIS\SentosakuTechDev\Development\LandingPageSentosa\sentosa-app
netlify init
```

Follow the prompts:
Ikuti petunjuk:

1. **Create & configure a new site** / **Buat & konfigurasikan situs baru**
2. Enter team name or leave blank for personal account
   - Masukkan nama tim atau biarkan kosong untuk akun pribadi
3. Enter site name (optional, Netlify will generate one)
   - Masukkan nama situs (opsional, Netlify akan membuatnya otomatis)

### Deploy / Deploy

**Option 1: Build and Deploy in One Command / Opsi 1: Build dan Deploy dalam Satu Perintah**

```bash
netlify deploy --prod
```

This will:
Ini akan:
1. Prompt for build settings if not configured
   - Meminta pengaturan build jika belum dikonfigurasi
2. Run `npm run build`
   - Menjalankan `npm run build`
3. Deploy to production
   - Deploy ke produksi

**Option 2: Build First, Then Deploy / Opsi 2: Build Terlebih Dahulu, Lalu Deploy**

```bash
npm run build
netlify deploy --prod --dir=.next
```

### Set Environment Variables via CLI

```bash
netlify env:set NEXT_PUBLIC_API_BASE_URL "https://dashboard.sentosakutech.com/api/v1"
netlify env:set NODE_ENV "production"
netlify env:set NEXT_PUBLIC_GA_ID "G-XXXXXXXXXX"
```

### View Site

```bash
netlify open
```

Opens your deployed site in a browser.
Membuka situs yang di-deploy di browser.

---

## Git-Based Deployment

Automatically deploy when pushing to your Git repository.

### GitHub Integration

**Step 1: Connect GitHub to Netlify / Sambungkan GitHub ke Netlify**

1. Go to [Netlify Dashboard](https://app.netlify.com)
   - Buka [Netlify Dashboard](https://app.netlify.com)
2. Click **User settings** → **Applications** → **GitHub**
   - Klik **User settings** → **Applications** → **GitHub**
3. Click **Install Netlify on GitHub**
   - Klik **Install Netlify on GitHub**
4. Grant access to desired repositories
   - Berikan akses ke repositori yang diinginkan

**Step 2: Create Site from Repository / Buat Situs dari Repositori**

1. Go to **Sites** → **Add new site** → **Import an existing project**
   - Buka **Sites** → **Add new site** → **Import an existing project**
2. Select **GitHub** as provider
   - Pilih **GitHub** sebagai penyedia
3. Select `sentosa-app` repository
   - Pilih repositori `sentosa-app`
4. Configure build settings (see [Manual Deployment](#manual-deployment))
   - Konfigurasikan pengaturan build (lihat [Manual Deployment](#manual-deployment))

**Step 3: Deploy on Push / Deploy saat Push**

Every push to the configured branch will trigger a deployment:
Setiap push ke branch yang dikonfigurasi akan memicu deployment:

```bash
git add .
git commit -m "Update landing page"
git push origin main
```

### GitLab Integration

Follow similar steps for GitLab:

1. **GitLab Settings** → **Applications** → **Install Netlify**
   - **GitLab Settings** → **Applications** → **Install Netlify**
2. Connect to GitLab from Netlify dashboard
   - Sambungkan ke GitLab dari dashboard Netlify
3. Import GitLab project
   - Impor proyek GitLab

### Bitbucket Integration

1. **Bitbucket Settings** → **OAuth consumers** → **Add consumer**
   - **Bitbucket Settings** → **OAuth consumers** → **Add consumer**
2. Configure callback URL: `https://app.netlify.com/auth`
   - Konfigurasikan URL callback: `https://app.netlify.com/auth`
3. Connect from Netlify dashboard
   - Sambungkan dari dashboard Netlify

### Deployment Branches

Configure multiple deployment branches:

- **Production**: `main` or `master`
- **Preview**: `dev`, `staging`, or any feature branch

Go to **Site settings** → **Build & deploy** → **Continuous Deployment** → **Branches** to configure.
Buka **Site settings** → **Build & deploy** → **Continuous Deployment** → **Branches** untuk mengonfigurasi.

---

## Post-Deployment Verification / Verifikasi Pasca-Deployment

After deployment, verify everything is working correctly:

### 1. Check Site Access / Cek Akses Situs

- Open your Netlify site URL
  - Buka URL situs Netlify Anda
- Verify the page loads without errors
  - Verifikasi halaman dimuat tanpa error
- Check browser console for any errors
  - Periksa console browser untuk error

### 2. Verify API Connections / Verifikasi Koneksi API

- Open browser DevTools → Network tab
  - Buka DevTools browser → tab Network
- Refresh the page and check API calls
  - Refresh halaman dan cek panggilan API
- Verify `NEXT_PUBLIC_API_BASE_URL` is being used
  - Verifikasi `NEXT_PUBLIC_API_BASE_URL` digunakan
- Check for 404 or 500 errors
  - Cek error 404 atau 500

### 3. Test Navigation / Uji Navigasi

- Navigate through different pages/sections
  - Navigasi ke berbagai halaman/bagian
- Verify all links work correctly
  - Verifikasi semua link berfungsi dengan benar
- Check for broken images
  - Cek gambar yang rusak

### 4. Verify Static Assets / Verifikasi Aset Statis

Check that images, fonts, and other static files are loading:

```bash
# Check image optimization
curl -I https://your-site.netlify.app/_next/image?url=/path/to/image.jpg

# Should see Cache-Control headers
# Harus melihat header Cache-Control
```

### 5. Verify Environment Variables / Verifikasi Variabel Lingkungan

Use browser console to verify:

```javascript
console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
console.log(process.env.NEXT_PUBLIC_GA_ID)
```

### 6. Check Performance / Cek Performa

- Use Lighthouse in Chrome DevTools
  - Gunakan Lighthouse di Chrome DevTools
- Target scores:
  - Skor target:
  - Performance: >90
  - Accessibility: >90
  - Best Practices: >90
  - SEO: >90

### 7. Verify Mobile Responsiveness / Verifikasi Responsivitas Mobile

- Test on various screen sizes
  - Uji di berbagai ukuran layar
- Use Chrome DevTools device emulation
  - Gunakan emulasi perangkat Chrome DevTools
- Test on actual mobile devices if possible
  - Uji di perangkat mobile asli jika memungkinkan

### 8. Check Analytics / Cek Analytics

If Google Analytics is configured:

1. Go to [Google Analytics](https://analytics.google.com)
   - Buka [Google Analytics](https://analytics.google.com)
2. Verify real-time users are being tracked
   - Verifikasi pengguna real-time dilacak
3. Check page views and events
   - Cek tampilan halaman dan peristiwa

### 9. Verify Sentry Integration / Verifikasi Integrasi Sentry

If Sentry is configured:

1. Visit [Sentry Dashboard](https://sentry.io)
   - Buka [Sentry Dashboard](https://sentry.io)
2. Verify project is receiving data
   - Verifikasi proyek menerima data
3. Check error reporting is working
   - Cek pelaporan error berfungsi

### 10. Test Form Submission (if applicable) / Uji Pengiriman Formulir (jika ada)

If your site has contact forms or other user inputs:

- Test form submissions
  - Uji pengiriman formulir
- Verify data is sent correctly
  - Verifikasi data dikirim dengan benar
- Check for validation errors
  - Cek error validasi

---

## Troubleshooting / Pemecahan Masalah

### Common Issues and Solutions / Masalah Umum dan Solusi

#### Issue 1: Build Fails / Build Gagal

**Symptoms / Gejala:**
- Deployment shows "Build failed"
  - Deployment menampilkan "Build failed"
- Build log shows errors
  - Log build menampilkan error

**Solutions / Solusi:**

1. **Check Node.js Version / Cek Versi Node.js**

   Verify `NODE_VERSION` is set to `20` in `netlify.toml`:
   Verifikasi `NODE_VERSION` diset ke `20` di `netlify.toml`:

   ```toml
   [build.environment]
     NODE_VERSION = "20"
   ```

2. **Clear Build Cache / Hapus Cache Build**

   - Go to **Site settings** → **Build & deploy** → **Continuous Deployment**
     - Buka **Site settings** → **Build & deploy** → **Continuous Deployment**
   - Click **Clear build cache and retry build**
     - Klik **Clear build cache and retry build**

3. **Check Build Logs / Periksa Log Build**

   - Click on the failed deployment
     - Klik pada deployment yang gagal
   - Review the build log for specific errors
     - Tinjau log build untuk error spesifik
   - Common issues:
     - Masalah umum:
     - Missing dependencies → Run `npm install`
       - Dependensi hilang → Jalankan `npm install`
     - TypeScript errors → Fix type errors locally
       - Error TypeScript → Perbaiki error tipe secara lokal
     - ESLint errors → Fix linting issues
       - Error ESLint → Perbaiki masalah linting

4. **Local Build Test / Uji Build Lokal**

   Test build locally before pushing:
   Uji build secara lokal sebelum push:

   ```bash
   npm run build
   ```

#### Issue 2: API Calls Failing / Panggilan API Gagal

**Symptoms / Gejala:**
- Data not loading on the site
  - Data tidak dimuat di situs
- 404 or CORS errors in console
  - Error 404 atau CORS di console

**Solutions / Solusi:**

1. **Verify Environment Variable / Verifikasi Variabel Lingkungan**

   ```bash
   # Check in Netlify Dashboard
   # Cek di Dashboard Netlify
   Site Settings → Environment variables
   ```

   Ensure `NEXT_PUBLIC_API_BASE_URL` is set correctly:
   Pastikan `NEXT_PUBLIC_API_BASE_URL` diset dengan benar:
   - Must start with `https://` for production
     - Harus dimulai dengan `https://` untuk produksi
   - Must include `/api/v1` path
     - Harus menyertakan path `/api/v1`

2. **Check CORS Settings / Cek Pengaturan CORS**

   Verify your backend allows requests from your Netlify domain:
   Verifikasi backend Anda mengizinkan permintaan dari domain Netlify:

   ```javascript
   // Backend CORS configuration
   // Konfigurasi CORS backend
   res.header('Access-Control-Allow-Origin', 'https://your-site.netlify.app')
   ```

3. **Test API Directly / Uji API Langsung**

   ```bash
   curl https://dashboard.sentosakutech.com/api/v1/your-endpoint
   ```

4. **Check Netlify Functions / Cek Fungsi Netlify**

   If using server-side features, verify Netlify Functions are configured:
   Jika menggunakan fitur server-side, verifikasi Fungsi Netlify dikonfigurasi:

   ```bash
   # In netlify.toml
   [functions]
     node_bundler = "esbuild"
   ```

#### Issue 3: Images Not Loading / Gambar Tidak Dimuat

**Symptoms / Gejala:**
- Broken image icons
  - Ikon gambar rusak
- 404 errors for image assets
  - Error 404 untuk aset gambar

**Solutions / Solusi:**

1. **Check Image Optimization / Cek Optimasi Gambar**

   Verify `next.config.ts` image configuration:
   Verifikasi konfigurasi gambar `next.config.ts`:

   ```typescript
   images: {
     unoptimized: false,
     formats: ['image/avif', 'image/webp'],
   }
   ```

2. **Check Remote Patterns / Cek Pola Remote**

   Ensure domains are in `remotePatterns`:
   Pastikan domain ada di `remotePatterns`:

   ```typescript
   remotePatterns: [
     {
       protocol: 'https',
       hostname: 'dashboard.sentosakutech.com',
     },
   ]
   ```

3. **Verify Netlify Image Plugin / Verifikasi Plugin Gambar Netlify**

   Ensure `@netlify/plugin-nextjs` is in `netlify.toml`:
   Pastikan `@netlify/plugin-nextjs` ada di `netlify.toml`:

   ```toml
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

4. **Check Public Folder / Cek Folder Public**

   Ensure static images are in the `public/` folder:
   Pastikan gambar statis ada di folder `public/`:

   ```bash
   public/
     images/
       logo.png
       hero.jpg
   ```

#### Issue 4: 404 Errors on Navigation / Error 404 saat Navigasi

**Symptoms / Gejala:**
- Pages show 404 after navigation
  - Halaman menampilkan 404 setelah navigasi
- Direct links work, but internal links don't
  - Link langsung berfungsi, tapi link internal tidak

**Solutions / Solusi:**

1. **Verify Next.js Router / Verifikasi Router Next.js**

   Ensure you're using Next.js Link component:
   Pastikan Anda menggunakan komponen Link Next.js:

   ```typescript
   import Link from 'next/link'

   <Link href="/about">About</Link>
   ```

2. **Check Netlify Redirects / Cek Redirect Netlify**

   Verify redirects in `netlify.toml`:
   Verifikasi redirect di `netlify.toml`:

   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Verify Page Structure / Verifikasi Struktur Halaman**

   Ensure pages follow Next.js file structure:
   Pastikan halaman mengikuti struktur file Next.js:

   ```
   src/
     app/
       page.tsx       # /
       about/
         page.tsx     # /about
   ```

#### Issue 5: Environment Variables Not Working / Variabel Lingkungan Tidak Berfungsi

**Symptoms / Gejala:**
- `process.env` returns undefined
  - `process.env` mengembalikan undefined
- API calls using wrong URL
  - Panggilan API menggunakan URL yang salah

**Solutions / Solusi:**

1. **Variable Prefix / Prefix Variabel**

   Ensure client-side variables have `NEXT_PUBLIC_` prefix:
   Pastikan variabel client-side memiliki prefix `NEXT_PUBLIC_`:

   ```bash
   # Correct / Benar
   NEXT_PUBLIC_API_BASE_URL=https://api.example.com

   # Wrong (won't work in browser) / Salah (tidak akan berfungsi di browser)
   API_BASE_URL=https://api.example.com
   ```

2. **Restart Build / Mulai Ulang Build**

   After adding environment variables, trigger a new deployment:
   Setelah menambahkan variabel lingkungan, picu deployment baru:

   - Go to **Deploys** → **Trigger deploy** → **Deploy site**
     - Buka **Deploys** → **Trigger deploy** → **Deploy site**

3. **Check Variable Scope / Cek Lingkup Variabel**

   Ensure variables are set in the correct scope:
   Pastikan variabel diset dalam lingkup yang benar:

   - **All environments**: Production, Preview, Development
     - **Semua lingkungan**: Produksi, Preview, Pengembangan
   - **Specific environment**: Only for production
     - **Lingkungan spesifik**: Hanya untuk produksi

#### Issue 6: Slow Performance / Performa Lambat

**Symptoms / Gejala:**
- Site takes long to load
  - Situs membutuhkan waktu lama untuk dimuat
- Low Lighthouse scores
  - Skor Lighthouse rendah

**Solutions / Solusi:**

1. **Enable Caching / Aktifkan Cache**

   Verify cache headers in `netlify.toml`:
   Verifikasi header cache di `netlify.toml`:

   ```toml
   [[headers]]
     for = "/_next/static/*"
     [headers.values]
       Cache-Control = "public, max-age=31536000, immutable"
   ```

2. **Optimize Images / Optimasi Gambar**

   - Use Next.js Image component
     - Gunakan komponen Image Next.js
   - Enable WebP/AVIF formats
     - Aktifkan format WebP/AVIF
   - Compress images before upload
     - Kompresi gambar sebelum upload

3. **Minify CSS and JS / Minifikasi CSS dan JS**

   Next.js does this automatically, but verify:
   Next.js melakukan ini otomatis, tapi verifikasi:

   ```bash
   npm run build
   # Check output size
   # Cek ukuran output
   ```

4. **Enable CDN / Aktifkan CDN**

   Netlify provides automatic CDN. Verify:
   Netlify menyediakan CDN otomatis. Verifikasi:

   - Go to **Site settings** → **Domain management**
     - Buka **Site settings** → **Domain management**
   - Check that Netlify CDN is enabled
     - Cek bahwa CDN Netlify diaktifkan

#### Issue 7: Sentry Not Reporting / Sentry Tidak Melaporkan

**Symptoms / Gejala:**
- Errors not appearing in Sentry
  - Error tidak muncul di Sentry
- No error tracking data
  - Tidak ada data pelacakan error

**Solutions / Solusi:**

1. **Verify Sentry Configuration / Verifikasi Konfigurasi Sentry**

   Check environment variables:
   Cek variabel lingkungan:

   ```bash
   SENTRY_ORG=your-org-slug
   SENTRY_PROJECT=sentosa-app
   SENTRY_AUTH_TOKEN=your-auth-token
   ```

2. **Check next.config.ts / Periksa next.config.ts**

   Verify Sentry wrapper is applied:
   Verifikasi wrapper Sentry diterapkan:

   ```typescript
   export default withSentryConfig(nextConfig, {
     silent: true,
     org: process.env.SENTRY_ORG,
     project: process.env.SENTRY_PROJECT,
   })
   ```

3. **Test Error Reporting / Uji Pelaporan Error**

   Create a test error to verify tracking:
   Buat error tes untuk verifikasi pelacakan:

   ```typescript
   throw new Error('Sentry test error')
   ```

#### Issue 8: Custom Domain Not Working / Domain Kustom Tidak Berfungsi

**Symptoms / Gejala:**
- Custom domain shows error
  - Domain kustom menampilkan error
- SSL certificate not generated
  - Sertifikat SSL tidak dibuat

**Solutions / Solusi:**

1. **Add Custom Domain / Tambah Domain Kustom**

   - Go to **Domain settings** → **Add custom domain**
     - Buka **Domain settings** → **Add custom domain**
   - Enter your domain name
     - Masukkan nama domain Anda
   - Follow DNS setup instructions
     - Ikuti instruksi pengaturan DNS

2. **Verify DNS Records / Verifikasi Record DNS**

   Add these records to your DNS provider:
   Tambahkan record ini ke penyedia DNS Anda:

   ```
   Type: A
   Name: @ (or your subdomain)
   Value: 75.2.70.75, 99.83.190.102 (Netlify IPs)

   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

3. **Wait for DNS Propagation / Tunggu Propagasi DNS**

   DNS changes can take up to 48 hours to propagate:
   Perubahan DNS bisa memakan waktu hingga 48 jam untuk propagasi:

   ```bash
   # Check DNS propagation
   # Cek propagasi DNS
   nslookup your-domain.com
   ```

4. **Force SSL Renewal / Paksa Perpanjangan SSL**

   - Go to **Domain settings** → **HTTPS**
     - Buka **Domain settings** → **HTTPS**
   - Click **Regenerate certificate**
     - Klik **Regenerate certificate**

---

## Additional Resources / Sumber Daya Tambahan

### Netlify Documentation / Dokumentasi Netlify

- [Netlify Docs](https://docs.netlify.com)
- [Next.js on Netlify](https://docs.netlify.com/frameworks/next-js/)
- [Environment Variables](https://docs.netlify.com/site-settings/deploys/overview/#environment-variables)
- [Netlify CLI](https://cli.netlify.com/)

### Next.js Documentation / Dokumentasi Next.js

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)

### Useful Commands / Perintah Berguna

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize new site
netlify init

# Deploy to production
netlify deploy --prod

# Deploy to preview
netlify deploy

# Set environment variable
netlify env:set KEY VALUE

# List environment variables
netlify env:list

# View site logs
netlify logs

# Open site in browser
netlify open

# Open site dashboard
netlify open:admin
```

---

## Getting Help / Mendapatkan Bantuan

If you encounter issues not covered in this guide:

Jika Anda mengalami masalah yang tidak tercakup dalam panduan ini:

1. **Netlify Support**:
   - [Netlify Support](https://www.netlify.com/support/)
   - [Netlify Forums](https://answers.netlify.com/)

2. **Next.js Support**:
   - [Next.js GitHub](https://github.com/vercel/next.js)
   - [Next.js Discord](https://nextjs.org/discord)

3. **Internal Resources / Sumber Daya Internal**:
   - Check with development team
     - Cek dengan tim pengembangan
   - Review project documentation
     - Tinjau dokumentasi proyek
   - Contact technical lead
     - Hubungi pemimpin teknis

---

## Quick Reference / Referensi Cepat

### Essential Commands / Perintah Penting

| Action | Command | Aksi | Perintah |
|--------|---------|------|----------|
| Install CLI | `npm install -g netlify-cli` | Instal CLI | `npm install -g netlify-cli` |
| Login | `netlify login` | Masuk | `netlify login` |
| Deploy | `netlify deploy --prod` | Deploy | `netlify deploy --prod` |
| Set Env Var | `netlify env:set KEY VALUE` | Set Var Lingkungan | `netlify env:set KEY VALUE` |
| Open Site | `netlify open` | Buka Situs | `netlify open` |

### Environment Variables Checklist / Daftar Periksa Variabel Lingkungan

- [ ] `NEXT_PUBLIC_API_BASE_URL`
- [ ] `NODE_ENV`
- [ ] `NEXT_PUBLIC_GA_ID` (optional / opsional)
- [ ] `SENTRY_ORG` (optional / opsional)
- [ ] `SENTRY_PROJECT` (optional / opsional)

---

**Last Updated: April 2026 / Terakhir Diperbarui: April 2026**

For questions or updates to this guide, contact the development team.
Untuk pertanyaan atau pembaruan panduan ini, hubungi tim pengembangan.
