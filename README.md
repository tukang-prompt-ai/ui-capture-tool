# UI/UX Capture Tool: Enterprise Visual Intelligence Platform (V7)

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![Version](https://img.shields.io/badge/version-1.1.1-blue.svg)]()
[![Platform](https://img.shields.io/badge/platform-browser-green.svg)]()

`ui-capture-tool` adalah platform visual intelligence dan dokumentasi UI/UX mandiri (*standalone*) berbentuk widget JavaScript satu file. Tool ini berjalan sepenuhnya di sisi klien (*client-side*) tanpa dependensi server atau SaaS. 

Fungsi utama dari tool ini adalah melakukan analisis mendalam terhadap struktur halaman web, mengekstraksi metadata visual, merender halaman menjadi wireframe interaktif (*Lo-Fi*), dan menghasilkan blueprint UX Graph serta prompt instruksi AI untuk merekonstruksi kode halaman web ke berbagai framework modern.

---

## 📖 Daftar Isi
- [Fungsi Utama & Konsep Kerja](#-fungsi-utama--konsep-kerja)
- [Penjelasan Detail 24 Engine & Sub-Tools](#-penjelasan-detail-24-engine--sub-tools)
- [Langkah-Langkah Instalasi (Step-by-Step)](#-langkah-langkah-instalasi-step-by-step)
- [Panduan Penggunaan Step-by-Step](#-panduan-penggunaan-step-by-step)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Format Output & File Ekspor](#-format-output--file-ekspor)
- [Kontribusi & Lisensi](#-kontribusi--lisensi)

---

## 🎯 Fungsi Utama & Konsep Kerja

Tool ini dipasang pada halaman web target (baik di localhost maupun website publik) dan menyediakan floating widget. Saat dipicu, pipeline pemrosesan bekerja secara berurutan:

```text
Halaman Web
   │
   ▼
[DOM & Visual Analysis] ──► Ekstraksi Token Desain, Spacing, & Komponen
   │
   ├─► Ekspor PNG (Optimized via Color Quantization)
   ├─► Ekspor JSON (UX Graph & Bounding Box)
   └─► Ekspor Markdown (Prompt AI terstruktur untuk rekonstruksi kode)
```

Sistem ini berjalan 100% lokal di browser pengguna, menjamin keamanan kode dan kerahasiaan data yang dianalisis.

---

## ⚙️ Penjelasan Detail 24 Engine & Sub-Tools

Platform ini terdiri dari 24 modul engine yang saling terintegrasi untuk menyusun visual intelligence secara utuh:

### 1. Core & Analysis Pipeline (Analisis Awal)
*   **Tool 1: Page Loader**: Engine yang memantau proses render halaman. Menunggu semua aset (HTML, CSS, JS, font, gambar lazy-loaded) termuat sempurna sebelum capture dimulai.
*   **Tool 2: DOM Collector**: Mengumpulkan seluruh node DOM mentah, membaca properti teks, peran aksesibilitas (*aria-role*), atribut elemen, serta memetakan koordinat fisik visual (`getBoundingClientRect`).
*   **Tool 3: Visual Tree Engine**: Menyaring DOM Collector untuk menyusun visual tree yang logis. Mengabaikan div kosong atau pembungkus murni dan fokus pada hirarki visual yang bermakna bagi pengguna.
*   **Tool 4: Region Detector**: Membagi halaman secara makro menjadi area-area layout struktural utama seperti `Header/Navbar`, `Sidebar Navigasi`, `Main Content Zone`, `Footer`, dan `Floating Panels`.

### 2. UX Intelligence Engines (Pemahaman Layout & Alur)
*   **Tool 5: Component Knowledge Engine**: Memindai elemen spasial untuk mendeteksi komponen antarmuka yang kompleks, meliputi: `Navbar`, `Card Panel`, `Table`, `Form`, `Modal`, `Tabs Control`, `Accordion`, `Kanban Board`, `Calendar`, `Timeline`, `Wizard Steps`, `Chat Widget`, dan `Dashboard Summary Cards`.
*   **Tool 6: Relationship Engine**: Menganalisis keterkaitan fungsional antar komponen. (Contoh: Mengetahui bahwa form input di atas tabel berfungsi sebagai filter data, dan daftar tombol di bawah tabel merupakan kontrol pagination).
*   **Tool 7: Interaction Engine**: Mendeteksi titik-titik interaktif halaman web yang dapat memicu aksi pengguna, seperti navigasi tautan, submit form, pemicu modal, tombol unggah/unduh, serta area seret-tarik (*drag & drop*).
*   **Tool 8: State Engine**: Mengidentifikasi status visual sistem saat ini, seperti mendeteksi pemuat data (*loading spinner*), area data kosong (*empty state*), notifikasi error, banner sukses, elemen aktif/terpilih, serta tombol nonaktif (*disabled*).
*   **Tool 9: Flow Engine**: Menyusun skenario *User Journey* interaktif secara otomatis berdasarkan tipe halaman (Contoh: Mengisi formulir -> Klik tombol simpan -> Muncul notifikasi sukses -> Data tabel diperbarui).
*   **Tool 10: Semantic Engine**: Menentukan kategori intensi fungsional dari halaman web yang sedang dibuka, misalnya mengklasifikasikan halaman ke jenis `CRUD Page`, `Analytics Dashboard`, `Auth Portal (Login/Register)`, `Ecommerce Page`, `CMS Portal`, atau `HRIS Interface`.

### 3. Visual & Tokenization Layers (Ekstraksi Desain)
*   **Tool 11: UX Graph Builder**: Jantung analisis yang menggabungkan output dari modul Component, Region, Relationship, Interaction, State, dan Flow ke dalam satu schema terintegrasi tunggal (UX Graph).
*   **Tool 12: Visual Graph Builder**: Memetakan hubungan spasial mikro dari halaman, mencakup pola perataan (*alignment*), susunan kolom grid, ukuran margin dan padding dasar, serta hirarki tipografi.
*   **Tool 13: Design Token Extractor**: Mengekstrak nilai desain murni dari CSS yang aktif, meliputi palet warna utama (background, teks, border), rumpun font (*font-family*), border-radius kelengkungan sudut, dan efek bayangan (*box-shadow*).
*   **Tool 14: Responsive Engine**: Menganalisis ketahanan responsivitas halaman dengan mendeteksi perubahan struktur grid dan visibilitas komponen pada berbagai resolusi viewport (Desktop, Tablet, Mobile).

### 4. Generation & Wireframe Output (Pembuatan Hasil)
*   **Tool 15: AI Reconstruction Engine**: Memformulasikan UX Graph, Visual Graph, dan Design Tokens ke dalam susunan instruksi prompt AI yang terstruktur tinggi untuk digunakan pada generator AI (seperti Claude, GPT-4, v0, Bolt.new).
*   **Tool 16: Wireframe Engine**: Mengubah visual halaman asli menjadi mockup rancangan kasar (wireframe) interaktif skala abu-abu (*grayscale*) secara langsung di browser tanpa merusak DOM asli.
*   **Tool 17: Code Reconstruction Engine**: Mempersiapkan prompt instruksi agar output kode yang dihasilkan AI langsung terarah ke framework pilihan pengguna, seperti Tailwind CSS, Bootstrap 5, React (TSX), Vue 3, atau Laravel Blade.

### 5. Optimization & Infrastructure (Infrastruktur Lokal)
*   **Tool 18: PNG Optimization Engine**: Melakukan kompresi screenshot PNG sisi klien menggunakan metode *color quantization* (pembulatan warna RGB) dan *adaptive scaling* untuk memangkas ukuran gambar hingga 80% (menjadi ukuran KB) namun visual tetap tajam.
*   **Tool 19: Knowledge Engine**: Basis pengetahuan pola desain web global untuk mengkoreksi hasil klasifikasi komponen agar prompt AI yang dihasilkan lebih akurat dan profesional.
*   **Tool 20: Dataset Engine**: Memaketkan screenshot PNG, skema JSON UX Graph, dan Prompt Markdown menjadi satu kesatuan bundel data lokal untuk pengarsipan.
*   **Tool 21: Training Engine**: Antarmuka ekspor data yang disiapkan jika pengguna ingin menggunakan hasil klasifikasi lokal untuk melatih model ML/AI deteksi layout kustom sendiri.
*   **Tool 22: Plugin Engine**: Pustaka klasifikasi khusus yang secara instan mengenali class framework populer seperti Bootstrap, AdminLTE, Shadcn UI, atau Ant Design.
*   **Tool 23: Export Engine**: Modul yang mengatur proses penulisan dan pengunduhan file (PNG, JSON, Markdown) langsung dari browser.
*   **Tool 24: Analytics Engine**: Dashboard visual yang memonitor durasi capture, jumlah node teranalisis, ukuran file kompresi, serta estimasi akurasi klasifikasi modul.

---

## 📥 Langkah-Langkah Instalasi (Step-by-Step)

Anda dapat memasang tool ini menggunakan salah satu dari metode berikut sesuai kebutuhan development proyek Anda:

### Metode 1: Instalasi Bookmarklet (Instan, Tanpa Modifikasi Kode)
Sangat direkomendasikan jika Anda ingin menggunakan tool ini di situs web eksternal yang sudah online atau aplikasi pihak ketiga (*third-party*) tanpa mengubah source code.

1.  Aktifkan bilah bookmark browser Anda (Tekan `Ctrl+Shift+B` atau `Cmd+Shift+B` pada Mac).
2.  Buat bookmark baru secara acak di bilah tersebut, lalu klik kanan dan pilih **Edit**.
3.  Ubah namanya menjadi: `📷 UI/UX Capture Suite`.
4.  Tempelkan kode bookmarklet berikut ke dalam kolom **URL** atau **Location**:
    ```javascript
    javascript:(function(){if(document.getElementById('uiCaptureTool')){document.getElementById('uiCaptureTool').remove();return;}var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@latest/ui-ux-capture-tool.min.js?v='+Date.now();document.body.appendChild(s);})();
    ```
5.  Simpan bookmark tersebut. Anda kini siap menggunakannya di halaman manapun dengan sekali klik.

---

### Metode 2: Integrasi CDN (Untuk File HTML Statis)
Cocok untuk proyek web prototype cepat, file HTML lokal, atau website statis sederhana.

Cukup tempelkan baris tag `<script>` berikut di file HTML Anda tepat sebelum tag penutup `</body>`. Anda dapat menggunakan tag `@latest` atau menentukan versi spesifik seperti `@v1.1.1` untuk menghindari masalah cache CDN:

```html
<!-- Menggunakan versi spesifik (Direkomendasikan agar terhindar dari cache) -->
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js" defer></script>

<!-- Atau menggunakan versi terbaru (mengikuti HEAD branch main) -->
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@latest/ui-ux-capture-tool.min.js" defer></script>
```

---

### Metode 3: Integrasi dengan Package Manager (NPM, Yarn, PNPM, Bun)
Karena paket `ui-capture-tool` belum dipublikasikan ke registry npm publik, Anda dapat memasangnya langsung dari repositori GitHub. Anda juga dapat menentukan versi rilis spesifik (seperti tag `v1.1.1`) menggunakan penunjuk hash `#v[version]`.

#### 1. Cara Menginstal Dependensi (Mengarah ke Versi Spesifik)

Pilih perintah sesuai dengan package manager yang Anda gunakan:

*   **NPM**:
    ```bash
    # Menginstal versi terbaru dari branch default (main)
    npm install --save-dev git+https://github.com/tukang-prompt-ai/ui-capture-tool.git

    # Menginstal versi spesifik (Direkomendasikan: v1.1.1)
    npm install --save-dev git+https://github.com/tukang-prompt-ai/ui-capture-tool.git#v1.1.1
    ```
*   **Yarn**:
    ```bash
    # Menginstal versi terbaru
    yarn add --dev https://github.com/tukang-prompt-ai/ui-capture-tool.git

    # Menginstal versi spesifik (v1.1.1)
    yarn add --dev https://github.com/tukang-prompt-ai/ui-capture-tool.git#v1.1.1
    ```
*   **PNPM**:
    ```bash
    # Menginstal versi terbaru
    pnpm add -D git+https://github.com/tukang-prompt-ai/ui-capture-tool.git

    # Menginstal versi spesifik (v1.1.1)
    pnpm add -D git+https://github.com/tukang-prompt-ai/ui-capture-tool.git#v1.1.1
    ```
*   **Bun**:
    ```bash
    # Menginstal versi terbaru
    bun add --dev https://github.com/tukang-prompt-ai/ui-capture-tool.git

    # Menginstal versi spesifik (v1.1.1)
    bun add --dev https://github.com/tukang-prompt-ai/ui-capture-tool.git#v1.1.1
    ```

> [!TIP]
> **Mengatasi Error `Permission denied (publickey)` saat instalasi:**
>
> Jika terminal Anda menampilkan error Git SSH (`git@github.com: Permission denied`) karena konfigurasi lokal git memaksakan protokol SSH, Anda dapat melompati Git resolver dan menginstal file rilis secara langsung menggunakan URL HTTPS tarball resmi dari GitHub:
>
> *   **NPM**:
>     ```bash
>     npm install --save-dev https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz
>     ```
> *   **Yarn**:
>     ```bash
>     yarn add --dev https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz
>     ```
> *   **PNPM**:
>     ```bash
>     pnpm add -D https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz
>     ```
> *   **Bun**:
>     ```bash
>     bun add --dev https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz
>     ```

*Alternatif: Jika Anda ingin menggunakan berkas kloningan lokal:*
```bash
npm install --save-dev ../path/ke/ui-capture-tool
```

---

#### 2. Cara Integrasi ke Framework Modern

Karena tool ini mengakses API DOM browser secara langsung (`window`, `document`), ikuti petunjuk integrasi berikut agar tidak merusak proses Server-Side Rendering (SSR) pada framework modern:

##### A. React (Vite / Create React App)
Impor pustaka secara kondisional pada entry point aplikasi Anda (seperti `src/main.jsx` atau `src/index.jsx`). Ini akan membatasi pemuatan hanya pada lingkungan *development*:

```javascript
// src/main.jsx atau src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Jalankan widget hanya saat development lokal
if (import.meta.env.DEV || process.env.NODE_ENV === 'development') {
  import('ui-capture-tool');
}
```

##### B. Next.js (App Router & Pages Router)
Next.js menggunakan SSR, sehingga modul browser-only seperti `ui-capture-tool` harus diimpor secara dinamis di sisi klien saja (*client-side*).

*   **App Router (`app/layout.tsx`)**
    Buat komponen pembantu klien baru, misalnya `components/UiCaptureInit.tsx`:
    ```tsx
    'use client';
    import { useEffect } from 'react';

    export default function UiCaptureInit() {
      useEffect(() => {
        // Hanya dimuat pada env development
        if (process.env.NODE_ENV === 'development') {
          import('ui-capture-tool');
        }
      }, []);

      return null;
    }
    ```
    Kemudian masukkan komponen tersebut di dalam root layout utama Anda (`app/layout.tsx`):
    ```tsx
    import UiCaptureInit from '@/components/UiCaptureInit';

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en">
          <body>
            {children}
            <UiCaptureInit />
          </body>
        </html>
      );
    }
    ```

*   **Pages Router (`pages/_app.tsx`)**
    Gunakan `useEffect` di file root wrapper `_app.tsx` Anda:
    ```tsx
    import { useEffect } from 'react';
    import type { AppProps } from 'next/app';

    export default function App({ Component, pageProps }: AppProps) {
      useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
          import('ui-capture-tool');
        }
      }, []);

      return <Component {...pageProps} />;
    }
    ```

##### C. Vue 3 (Vite)
Tambahkan impor di akhir file entrypoint `src/main.js` atau `src/main.ts`:

```javascript
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');

if (import.meta.env.DEV) {
  import('ui-capture-tool');
}
```

##### D. Nuxt 3 (SSR)
Buat file plugin khusus client-only di folder `plugins/ui-capture.client.js` atau `plugins/ui-capture.client.ts`:

```javascript
// plugins/ui-capture.client.js
export default defineNuxtPlugin(() => {
  if (process.dev) {
    import('ui-capture-tool');
  }
});
```
Nuxt 3 akan memuat plugin ini secara otomatis hanya pada sisi klien ketika aplikasi dalam mode *development*.

##### E. Svelte / SvelteKit
Untuk SvelteKit (yang menggunakan SSR secara bawaan), muat modul di dalam hooks siklus hidup `onMount` di file root layout Anda (`src/routes/+layout.svelte`):

```svelte
<script>
  import { onMount } from 'svelte';
  import { dev } from '$app/environment';

  onMount(() => {
    if (dev) {
      import('ui-capture-tool');
    }
  });
</script>

<slot />
```

##### F. Angular
Untuk aplikasi Angular, Anda dapat memasukkan file skrip langsung ke dalam aset konfigurasi `angular.json` di bawah opsi `scripts` target build proyek Anda:

```json
"options": {
  "scripts": [
    "node_modules/ui-capture-tool/ui-ux-capture-tool.main.js"
  ]
}
```
*Atau* muat secara kondisional di `src/main.ts` sebelum bootstrap aplikasi:

```typescript
import { isDevMode } from '@angular/core';

// ... kode bootstrap Angular Anda ...

if (isDevMode()) {
  import('ui-capture-tool');
}
```

---

### Metode 4: Integrasi Framework Backend / CMS (Template Engines)
Sangat cocok untuk proyek yang menggunakan server-side template engine tradisional seperti PHP, Python, Ruby, atau Node.js.

##### A. Laravel (Blade Template)
Menyediakan tool capture khusus bagi tim internal developer selama fase development lokal.

1.  Unduh berkas ter-obfuscate `ui-ux-capture-tool.min.js` dari repositori ini.
2.  Pindahkan berkas ke folder publik Laravel Anda di: `public/vendor/ui-capture-tool/ui-ux-capture-tool.min.js`.
3.  Buat sebuah file blade baru di `resources/views/components/ui-capture-tool.blade.php` dengan isi:
    ```html
    @if(config('app.env') === 'local')
        <script src="{{ asset('vendor/ui-capture-tool/ui-ux-capture-tool.min.js') }}" defer></script>
    @endif
    ```
4.  Panggil komponen ini di bagian bawah layout Blade utama Anda (`layouts/app.blade.php`) tepat sebelum penutup `</body>`:
    ```html
        ...
        <x-ui-capture-tool />
    </body>
    ```

##### B. WordPress (PHP Theme)
Tambahkan fungsi ke file theme `functions.php` Anda untuk memuat widget hanya jika situs dalam keadaan debug atau jika user yang masuk adalah administrator:

```php
function enqueue_ui_capture_tool() {
    // Hanya render widget pada mode debug/local development
    if (defined('WP_DEBUG') && WP_DEBUG) {
        wp_enqueue_script(
            'ui-capture-tool',
            'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@latest/ui-ux-capture-tool.min.js',
            array(),
            null,
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'enqueue_ui_capture_tool');
```

##### C. Django (Python Templates)
Masukkan skrip di template HTML dasar Anda (biasanya `base.html`) dengan membungkusnya di dalam pengecekan variabel debug:

```html
{% if debug %}
  <script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@latest/ui-ux-capture-tool.min.js" defer></script>
{% endif %}
```

##### D. Ruby on Rails (ERB Layouts)
Masukkan baris tag skrip berikut pada layout utama `app/views/layouts/application.html.erb` sebelum penutup body:

```html
<% if Rails.env.development? %>
  <%= javascript_include_tag "https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@latest/ui-ux-capture-tool.min.js", defer: true %>
<% end %>
```

##### E. Node.js Express (EJS / Pug Templates)
*   Menggunakan **EJS**:
    ```html
    <% if (process.env.NODE_ENV === 'development') { %>
      <script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@latest/ui-ux-capture-tool.min.js" defer></script>
    <% } %>
    ```
*   Menggunakan **Pug**:
    ```pug
    if process.env.NODE_ENV === 'development'
      script(src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@latest/ui-ux-capture-tool.min.js", defer)
    ```

##### F. Flutter Web (Dart)
Untuk memuat widget capture langsung di proyek Flutter Web Anda (baik selama development lokal maupun ketika dideploy):
Pindahkan berkas `ui-ux-capture-tool.min.js` ke folder `web/` proyek Flutter Anda, kemudian panggil berkas ini di dalam `web/index.html` tepat sebelum tag penutup `</body>`:
```html
  <script src="ui-ux-capture-tool.min.js" defer></script>
</body>
```
*Catatan:* Tool akan otomatis mendeteksi elemen bawaan Flutter Web (`<flt-glass-pane>`, `<flt-semantics>`, dll.) dan menyusun layout spasialnya secara akurat.

---

## 🚀 Panduan Penggunaan Step-by-Step

Setelah terpasang, ikuti langkah-langkah di bawah ini untuk menggunakannya secara optimal:

### Langkah 1: Membuka Panel Widget
1.  Buka halaman web yang ingin Anda tangkap.
2.  *(Jika menggunakan bookmarklet)* Klik bookmark `📷 UI/UX Capture Suite` pada bilah browser Anda.
3.  Klik tombol bundar berwarna ungu dengan ikon kamera di pojok kanan bawah layar untuk membuka panel dashboard berdesain glassmorphism.

### Langkah 2: Mengatur Parameter Ekspor & Framework (Tab Engine)
1.  Klik tab **Engine** (ikon slider gigi ketiga) pada menu bar panel.
2.  Pilih **Export Format** sesuai kebutuhan Anda:
    *   `PNG Screenshot Image`: Mengambil gambar tangkapan layar visual.
    *   `UX Graph Schema (JSON)`: Menghasilkan ekstraksi data struktur DOM dan token dalam file JSON.
    *   `AI Prompt File (Markdown)`: Menghasilkan berkas instruksi teks lengkap untuk model AI.
3.  Pilih **Framework Target** (misal: `Tailwind CSS`, `React Component (TSX)`, `Laravel Blade`, atau `Flutter Widget (Dart)`) untuk menentukan gaya kode yang akan dicetak di dalam prompt AI.
4.  Pilih **Active Plugin Theme** (misal: `Shadcn UI` atau `Bootstrap 5 Admin`) jika Anda ingin mengunci style visual prompt agar sesuai desain library tersebut, atau biarkan di `Auto-Detect Theme`.

### Langkah 3: Melakukan Pengambilan Data (Tab Capture)
1.  Kembali ke tab **Capture** (ikon kamera pertama).
2.  Pilih **Fidelity Mode**:
    *   `Lo-Fi`: Mengubah layout web menjadi bentuk wireframe abu-abu menggunakan CSS murni (posisi komponen dijamin presisi tanpa pergeseran).
    *   `Mid-Fi`: Mengambil tangkapan layar orisinal yang dikonversi menjadi abu-abu (*grayscale*).
    *   `Hi-Fi`: Mengambil tangkapan layar berwarna orisinal yang dikompresi secara cerdas (resolusi teroptimasi).
    *   `Get Capture`: Mengambil tangkapan layar berwarna orisinal pada resolusi penuh (mentah/tanpa kompresi).
3.  Ketik nama file khusus di kolom `File Name` (opsional, jika dikosongkan nama file akan mengikuti path URL otomatis).
4.  Klik tombol **Capture Page**. File hasil capture akan otomatis terunduh ke direktori Downloads komputer Anda.
5.  *(Opsional)* Klik tombol **Copy AI Prompt** untuk menyalin instruksi AI ke clipboard Anda secara instan untuk ditempel langsung di ChatGPT, Claude, atau Gemini.

### Langkah 4: Menjalankan Auto Tour Halaman (Tab Tour)
1.  Buka tab **Tour** (ikon rute kedua).
2.  Masukkan daftar path URL di website Anda (Contoh: `/dashboard`, `/profile`, `/settings`), pisahkan setiap baris dengan tombol Enter.
    *   *Tips*: Klik tautan **Auto-Discover** untuk meminta engine memindai seluruh link menu di halaman aktif Anda saat ini secara otomatis.
3.  Klik tombol **Run Auto Tour**.
4.  *Penting*: Jika browser memblokir popup tab baru, ikuti panduan visual dialog modal di layar untuk memberikan izin popup pada browser Anda, kemudian jalankan kembali tour. Sistem akan membuka tab baru secara beruntun, melakukan screenshot, mengunduh file, dan menutup tab secara otomatis.

### Langkah 5: Membaca Performa Capture (Tab Stats)
1.  Buka tab **Stats** (ikon grafik keempat).
2.  Setelah capture berhasil, baca data statistik performa riil yang ditampilkan, mencakup jumlah element DOM (*Nodes*) terproses, durasi render, ukuran file terkompresi, estimasi akurasi visual, dan plugin tema yang terdeteksi aktif pada halaman tersebut.

---

## 🛠️ Tips & Panduan Penggunaan Maksimal (Best Practices)

Untuk mendapatkan hasil rekonstruksi kode dan analisis tata letak yang maksimal dari AI (seperti Claude 3.5 Sonnet, GPT-4o, v0.dev, atau Bolt.new), ikuti panduan praktis berikut:

### 1. Memanfaatkan Mode Fidelity dengan Benar
*   **Gunakan Lo-Fi (Wireframe)** jika Anda ingin berfokus penuh pada struktur tata letak (*layout grid*), alur interaksi (*UX Flow*), dan posisi spasial komponen (misal untuk perancangan ulang/redesign halaman dashboard) tanpa terdistraksi warna atau gambar asli.
*   **Gunakan Mid-Fi (Grayscale)** jika Anda ingin mendesain ulang struktur visual halaman tetapi tetap ingin mempertahankan bentuk asli gambar dan tipografi tanpa warna asli.
*   **Gunakan Hi-Fi (Optimized Color)** jika Anda ingin AI merekonstruksi halaman dengan warna orisinal serta ukuran file gambar yang efisien untuk pengarsipan.
*   **Gunakan Get Capture (Raw Color)** jika Anda memerlukan screenshot pixel-perfect berskala 100% tanpa adanya kompresi warna maupun kompresi resolusi.

### 2. Memilih Framework Target & Plugin Secara Tepat
*   Sebelum menekan tombol capture, atur **Framework Target** pada tab *Engine* sesuai dengan ekosistem development Anda (misal: React TSX, Tailwind CSS, Laravel Blade).
*   Jika website Anda menggunakan library UI tertentu, pilih **Active Plugin Theme** (seperti *Shadcn UI* atau *Bootstrap 5*) untuk mengunci gaya penulisan class agar AI menggunakan pustaka komponen yang sama, sehingga kode hasil generate langsung bersih dan kompatibel.

### 3. Menggunakan Fitur Debugging & Pemantauan Proses
*   **Loading Overlay**: Saat proses capture dimulai, layar Anda akan menampilkan status loading real-time berdesain glassmorphism premium. Status ini memberi tahu Anda tahap prapemrosesan yang sedang berjalan (seperti pemuatan aset, inisialisasi canvas, kompresi kuantisasi warna, dll.).
*   **Console Logs**: Anda dapat memantau detail prapemrosesan teknis dengan membuka menu Developer Tools browser (Klik kanan -> **Inspect** -> tab **Console**). Cari log dengan prefix `[UI/UX Capture Tool]` berwarna ungu untuk melihat jumlah node yang terproses, resolusi canvas, skala adaptif, dan log kuantisasi warna secara real-time.

### 4. Penanganan Gambar Lambat (*Lazy-Loaded Images*)
*   Engine secara otomatis memindai dan memaksa pemuatan semua gambar lazy-loaded yang ada di halaman web sebelum melakukan rendering canvas. Namun, jika Anda memiliki animasi kompleks atau transisi lambat, disarankan untuk melakukan scroll halaman secara manual ke bawah sekali terlebih dahulu sebelum melakukan capture untuk memastikan semua aset ter-render sempurna di DOM.

### 5. Mengatasi Popup Terblokir pada Auto Tour
*   Saat menggunakan fitur **Auto Tour** untuk menangkap banyak halaman sekaligus secara asinkron, browser mungkin akan memblokir tab baru yang dibuka otomatis. 
*   **Solusi**: Klik ikon gembok/popup di bilah alamat browser Anda (address bar) dan pilih **"Allow popups and redirects from localhost / [domain Anda]"**, kemudian jalankan kembali tour.

---

## ⌨️ Keyboard Shortcuts

Anda dapat melakukan capture instan tanpa membuka panel kontrol menggunakan tombol pintas keyboard berikut:
*   `Ctrl + Shift + C` : Mengambil screenshot PNG Hi-Fi/Lo-Fi saat ini secara otomatis (mengikuti mode fidelity aktif).

---

## 💾 Format Output & File Ekspor

Semua file hasil capture akan diunduh dengan penamaan standar terstruktur untuk menghindari file terdistorsi atau menimpa satu sama lain:

*   **PNG Screenshot Image**:
    `hifi__[slug]__[timestamp].png` atau `lofi__[slug]__[timestamp].png` (Ukuran berkisar ~100-400 KB berkat modul *Color Quantization*).
*   **UX Graph Schema (JSON)**:
    `ux-graph__[slug]__[timestamp].json` (Berisi hirarki wilayah, daftar komponen dengan koordinat spasial, token desain, state halaman, dan responsive data).
*   **AI Prompt Blueprint (Markdown)**:
    `ai-prompt__[slug]__[timestamp].md` (Berisi instruksi prompt terstruktur siap pakai untuk generator kode AI).

---

## 🚀 Panduan Integrasi & Penggunaan Produksi (Production Guide)

Alat ini dirancang khusus untuk siap produksi (*production-ready*) dengan arsitektur yang aman, ringan, dan kompatibel untuk diintegrasikan ke berbagai jenis proyek web.

### 1. Metode Instalasi & Integrasi Proyek

#### A. Integrasi Script Tag (HTML / Laravel / PHP)
Tempatkan tag script berikut di akhir elemen `<body>` sebelum tag penutup `</body>`:

```html
<!-- Load UI/UX Capture Tool via GitHub jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js" defer></script>
```

#### B. Integrasi pada Aplikasi Single Page App (SPA - Next.js / React / Vue)
Gunakan inisialisasi dinamis agar skrip hanya dimuat pada lingkungan pengembangan (*development*) atau saat dibutuhkan saja:

*React / Next.js*:
```javascript
import { useEffect } from 'react';

export default function DevTools() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js';
      script.defer = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return null;
}
```

### 2. Konfigurasi Global & Keamanan (Configuration API)
Secara default, skrip widget ini hanya akan aktif jika dijalankan di `localhost`, `127.0.0.1`, atau domain `.test` / `.local`. Untuk mengaktifkannya di lingkungan staging atau produksi dengan kendali penuh, Anda dapat mendefinisikan objek `UiCaptureConfig` secara global sebelum skrip dimuat:

```html
<script>
  window.UiCaptureConfig = {
    // Aktifkan alat di luar localhost
    enabled: true,
    // Format ekspor bawaan: 'png' | 'json' | 'prompt'
    defaultFormat: 'png',
    // Target Framework default untuk prompt AI
    defaultFramework: 'tailwind', // 'tailwind' | 'bootstrap' | 'react' | 'vue'
    // Theme plugin default
    defaultTheme: 'auto'
  };
</script>
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js" defer></script>
```

### 3. Keunggulan Standardisasi Produksi (Enterprise Standards)
Untuk memastikan kelayakan rilis di sistem produksi, alat ini memenuhi kriteria standar berikut:

- **100% Client-Side Processing**: Analisis DOM, parsing struktur, dan kompresi screenshot berjalan sepenuhnya lokal di browser pengguna. Tidak ada data kode sumber, token desain, atau gambar yang dikirim ke server luar, menjaga kerahasiaan kekayaan intelektual proyek Anda.
- **Shadow DOM & Iframe Traversal**: Mampu memindai dan merekonstruksi elemen-elemen di dalam open Shadow Roots (Web Components) dan same-origin `<iframes>`, menghasilkan graph visual yang lengkap.
- **State & Accessibilty Mapping**: Secara aktif mendeteksi status elemen interaktif yang sedang terbuka (seperti `aria-expanded="true"`) dan memetakan struktur semantik aksesibilitas (ARIA roles, heading outline).
- **Optimized Footprint**: Menggunakan modul kompresi *color quantization* dan resolusi adaptif untuk memotong ukuran file keluaran PNG hingga 80% dari file mentah tanpa kehilangan detail spasial penting.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah ketentuan lisensi kustom non-komersial (**Proprietary / Creative Commons BY-NC-ND 4.0**):
*   **Dilarang Memodifikasi (No Derivatives)**: Anda tidak diperbolehkan mendistribusikan ulang kode atau alat ini jika telah mengalami perubahan atau modifikasi.
*   **Hanya Penggunaan Non-Komersial (Non-Commercial)**: Anda tidak diperbolehkan menggunakan alat ini atau turunannya untuk kepentingan komersial, bisnis, atau monetisasi tanpa persetujuan tertulis terlebih dahulu.
