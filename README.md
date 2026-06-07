<div align="center">

# UI/UX Capture Suite

**Enterprise Visual Intelligence Platform — V7**

[![Version](https://img.shields.io/badge/version-1.1.1-6366f1.svg?style=for-the-badge)](https://github.com/tukang-prompt-ai/ui-capture-tool/releases)
[![License](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg?style=for-the-badge)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![Platform](https://img.shields.io/badge/platform-browser%20native-22c55e.svg?style=for-the-badge)]()
[![Framework](https://img.shields.io/badge/zero--dependency-standalone-f59e0b.svg?style=for-the-badge)]()
[![HXRE](https://img.shields.io/badge/engine-HXRE%20v7-8b5cf6.svg?style=for-the-badge)]()

A **self-contained, zero-dependency browser widget** that captures, analyzes, and reconstructs any web page into structured design artifacts — screenshots, UX schemas, AI-ready prompts, and HTML wireframes — all without leaving the browser.

[**📖 Full Documentation**](./DOCS.md) · [**🐛 Report Issue**](https://github.com/tukang-prompt-ai/ui-capture-tool/issues) · [**📦 Releases**](https://github.com/tukang-prompt-ai/ui-capture-tool/releases)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Wireframe Engine Comparison](#wireframe-engine-comparison)
- [Export Formats](#export-formats)
- [Framework Integration](#framework-integration)
- [Configuration API](#configuration-api)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Version History](#version-history)
- [License](#license)

---

## Overview

`ui-capture-tool` is a production-grade visual intelligence widget for web developers and UI/UX designers. It injects a floating panel into any web page and provides four core capabilities:

| Capability | Description |
|---|---|
| **📸 Screenshot Capture** | Four fidelity levels: Lo-Fi wireframe, Mid-Fi grayscale, Hi-Fi optimized, Raw |
| **🧠 DOM Intelligence** | Detects 24+ component types, design tokens, framework, accessibility tree, state machine |
| **🤖 AI Prompt Generation** | 12-section HXRE-format Markdown prompt with Mermaid flowchart — paste into any AI |
| **📐 HTML Wireframe Export** | Self-contained skeleton wireframe HTML file with component inventory |

**100% client-side** — no data is sent to any server. Works on any domain.

---

## Features

### 🎨 Four Fidelity Capture Modes

| Mode | Visual Output | File Format | Best For |
|---|---|---|---|
| **Lo-Fi** — Wireframe | Pure grayscale block skeleton wireframe | PNG | Layout documentation, design reviews |
| **Mid-Fi** — Grayscale | Full-page desaturated screenshot | PNG | Contrast checks, monochrome presentations |
| **Hi-Fi** — Optimized | Full-color screenshot (~60–80% smaller) | JPEG 85% | Archive, developer handoff |
| **Raw** — Native | Full pixel-perfect screenshot, no processing | PNG | Highest fidelity reference |

### 📦 Four Export Formats

| Format | File | Contents |
|---|---|---|
| **Screenshot** | `{mode}__{slug}__{ts}.png / .jpg` | Full-page image at selected fidelity |
| **UX Graph Schema** | `ux-graph__{slug}__{ts}.json` | Complete DOM analysis in JSON |
| **AI Prompt** | `ai-prompt__{slug}__{ts}.md` | 12-section HXRE blueprint with Mermaid |
| **HTML Wireframe** | `wireframe__{slug}__{ts}.html` | Browser-openable skeleton wireframe |

### 🔧 Two Wireframe Engines

| Engine | Style | Notes |
|---|---|---|
| **HXRE Wireframe** | Block wireframe + component labels | Default. No external dependencies. |
| **Volkside Wirify** | Classic Wirify box wireframe | Legacy. Loads jQuery from CDN. |

### 🚀 Auto Tour

Automatically visits multiple pages and captures each one sequentially. Finds all nav links via auto-discover.

### 📱 Mobile Framework Support

Generates framework-specific AI reconstruction instructions for: **Flutter (Dart), React Native (JSX), Ionic, Capacitor.js** alongside all web frameworks.

---

## Quick Start

**Satu baris kode — langsung sematkan ke halaman HTML Anda:**

```html
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>
```

- **Letakan di mana**: Di dalam file HTML utama Anda, letakkan tag `<script>` ini di bagian paling bawah tepat sebelum tag penutup `</body>`.
- **Untuk apa**: Memuat widget UI/UX Capture secara otomatis. Secara default, widget ini mendeteksi dan aktif secara otomatis di domain lokal seperti `localhost`, `127.0.0.1`, `*.local`, atau `*.test`.

**Atau gunakan Bookmarklet di halaman web mana saja:**

```javascript
javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js?v='+Date.now();window.UiCaptureConfig={enabled:true};document.body.appendChild(s);})();
```

- **Letakan di mana**: Buat bookmark baru di browser Anda (Chrome, Safari, Firefox, Edge), beri nama (misalnya "UI UX Capture"), dan tempel (paste) seluruh baris kode JavaScript di atas ke dalam kolom URL/Address bookmark tersebut.
- **Untuk apa**: Mengaktifkan widget secara paksa di situs web apa pun di internet yang sedang Anda buka. Cukup klik bookmark tersebut saat berada di halaman web target untuk memunculkan tombol capture mengambang.

---

## Installation

### CDN (Direkomendasikan)

```html
<!-- Versi Terbaru (Selalu Mengikuti Branch Utama) -->
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>

<!-- Versi Tersemat v1.1.1 (Sangat direkomendasikan untuk stabilitas) -->
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js"></script>
```

- **Letakan di mana**: Di dalam berkas tata letak (layout) HTML atau file template utama sebelum tag penutup `</body>`.
- **Untuk apa**: Mengimpor pustaka langsung dari jaringan pengiriman konten (CDN) jsDelivr tanpa perlu mengunduh file secara lokal. Versi tersemat (`@v1.1.1`) memastikan kode yang dimuat konsisten dan tidak berubah ketika ada pembaruan di repositori utama.

### NPM / Package Manager

> **Catatan:** Paket ini di-host di repositori GitHub. Guna menghindari masalah otentikasi kunci SSH (`Permission denied (publickey)`), disarankan untuk menggunakan **URL tarball HTTPS** berikut yang tidak memerlukan kunci SSH:

```bash
# npm (direkomendasikan — tanpa perlu autentikasi SSH)
npm install --save-dev https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz

# yarn
yarn add --dev https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz

# pnpm
pnpm add -D https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz

# bun
bun add --dev https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz
```

- **Letakan di mana**: Jalankan perintah ini di dalam aplikasi terminal pada direktori utama (root directory) proyek Anda.
- **Untuk apa**: Mengunduh dan mendaftarkan paket UI/UX Capture Suite sebagai dependensi pengembangan (`devDependencies`) proyek Anda agar dapat dikelola oleh pengelola paket.

### Unduh Manual (Manual Download)

Unduh file hasil kompilasi langsung dari halaman [GitHub Releases](https://github.com/tukang-prompt-ai/ui-capture-tool/releases) dan tempatkan pada server lokal Anda:

```html
<script src="/path/to/ui-ux-capture-tool.min.js"></script>
```

- **Letakan di mana**: Pindahkan file `.min.js` yang telah diunduh ke folder aset statis proyek Anda (misalnya `public/`, `static/`, atau `dist/`), lalu rujuk file tersebut menggunakan tag `<script>` dengan path relatif yang sesuai.
- **Untuk apa**: Digunakan jika proyek Anda berjalan di lingkungan intranet tanpa akses internet (offline) atau ketika kebijakan keamanan perusahaan melarang pemuatan script dari CDN eksternal.

---

## Usage Guide

### Step 1 — Open the Panel

Click the floating **purple camera button** `📷` in the bottom-right corner to open the widget panel.

### Step 2 — Choose a Fidelity Mode (Capture Tab)

Click one of the four mode buttons: **Lo-Fi**, **Mid-Fi**, **Hi-Fi**, or **Get Capture** (Raw).

### Step 3 — Choose an Export Format

Select from the **Export Format** dropdown:
- `PNG Screenshot Image`
- `UX Graph Schema (JSON)`
- `AI Prompt File (Markdown)`
- `HTML Wireframe File`

### Step 4 — Choose a Wireframe Engine (Optional)

The **Wireframe Engine** selector is always visible. Select:
- `HXRE Wireframe (Modern)` — default, block wireframe with component intelligence labels
- `Volkside Wirify (Legacy)` — classic Wirify-style wireframe

### Step 5 — Click "Capture Page"

The file downloads automatically. For PNG/JPEG captures, a step-by-step loading overlay shows progress.

### Step 6 — Use the AI Prompt

Click **"Copy AI Prompt"** to copy the Markdown blueprint to clipboard. Paste directly into:

- **ChatGPT** / **Claude** / **Gemini** — for UI code generation
- **GitHub Copilot Chat** — for inline code reconstruction
- **v0.dev** / **Bolt.new** / **Lovable** — for component generation

---

## Wireframe Engine Comparison

Both engines are available for **all four fidelity modes** (Lo-Fi, Mid-Fi, Hi-Fi, Raw). The engine controls the wireframe visual output only.

| Feature | 🟣 HXRE Wireframe (Modern) | 🔵 Volkside Wirify (Legacy) |
|---|---|---|
| **Visual style** | Block-skeleton overlay drawn on a clean white canvas | Transforms existing DOM elements in-place |
| **Lo-Fi compliance** | ✅ True grayscale — zero color bleed guaranteed | ✅ Grayscale transform via CSS filter |
| **Component labels** | ✅ Inline labels (NAVBAR, CARD, BUTTON, TABLE…) | ❌ No component labels |
| **Component detection** | ✅ 24+ types (Navbar, Sidebar, Table, Form, Card, Modal, Chart, Alert, Tabs, Accordion, Pagination, Breadcrumb, Badge, Toast, Dropdown, Progress, Chat, Kanban, Wizard, Image/Media, Button, Input, Footer, Link) | ❌ Generic box detection only |
| **Text rendering** | Gray bars replacing all text — true wireframe | Text visible (unstyled) |
| **Image handling** | ✅ X-box placeholder (`╳`) at exact image position | ❌ Image still visible (dimmed) |
| **External dependencies** | ✅ None — fully self-contained | ⚠️ Loads jQuery from CDN |
| **CSP compatibility** | ✅ Works with strict Content-Security-Policy | ⚠️ May be blocked (CDN script fetch) |
| **Page compatibility** | ✅ All pages | ⚠️ May conflict with jQuery-based pages |
| **Render method** | Overlay div appended to `<body>`, captured by html2canvas | In-place DOM class injection |
| **Inline style handling** | ✅ Strips all inline styles before capture, restores after | ✅ CSS filter overrides |
| **Color variable leakage** | ✅ Zero (inline styles stripped + `lofi-wireframe` class) | ✅ Filter-based, no leakage |
| **Performance** | Fast (DOM scan + overlay build ~50–200ms) | Moderate (jQuery init + DOM rewrite) |
| **Recommended for** | All use cases | Legacy compatibility or preference |

### When to use HXRE

- You need **component-labeled** wireframes for AI prompt generation or design review
- You want **no external dependencies** (strict CSP, offline, intranet)
- You need **guaranteed Lo-Fi compliance** (pure grayscale, no color bleed)
- You are capturing **complex pages** with many component types

### When to use Volkside

- You prefer the **classic Wirify look** (familiar to teams already using Wirify)
- You need a quick wireframe without component intelligence
- The page already loads jQuery (no CDN overhead)

---

## Export Formats

### Screenshot (PNG / JPEG)

**Filename:** `{mode}__{slug}__{timestamp}.{ext}`

```
lofi__checkout__2026-06-07T11-00-00.png
midfi__dashboard__2026-06-07T11-00-00.png
hifi__admin__2026-06-07T10-30-00.jpg
raw__landing__2026-06-07T10-00-00.png
```

| Mode | Format | Quality |
|---|---|---|
| Lo-Fi | PNG | Lossless (grayscale, flat — PNG is optimal) |
| Mid-Fi | PNG | Lossless (grayscale) |
| Hi-Fi | JPEG | 85% quality (~60–80% smaller than PNG for rich UI) |
| Raw | PNG | Lossless (full pixel-perfect fidelity) |

Adaptive resolution scaling is applied automatically for very tall pages (> 4000px) to keep files manageable.

### UX Graph Schema (JSON)

**Filename:** `ux-graph__{slug}__{timestamp}.json`

Complete DOM intelligence snapshot. See [DOCS.md](./DOCS.md) for the full JSON schema.

### AI Prompt File (Markdown)

**Filename:** `ai-prompt__{slug}__{timestamp}.md`

12-section HXRE-format Markdown prompt:

| Section | Content |
|---|---|
| 1 | Page Identification (title, intent, framework, complexity) |
| 2 | Visual Segmentation (header/sidebar/footer regions, layout graph) |
| 3 | Component Inventory (all detected components with coordinates) |
| 4 | Shadow DOM & IFrame Scanners |
| 5 | Accessibility Tree (headings, ARIA roles, alt texts) |
| 6 | Design Tokens (fonts, colors, radius, shadow) |
| 7 | Relationship Graph |
| 8 | User Journey Flow |
| 9 | State Machine (loading/empty/error/success/active) |
| 10 | Reconstruction Settings (framework-specific code guidelines) |
| **11** | **Mermaid User Flow Diagram** (`flowchart TD`) |
| **12** | **HTML Wireframe Skeleton Reference** |

### HTML Wireframe File

**Filename:** `wireframe__{slug}__{timestamp}.html`

A self-contained, browser-openable `.html` file with:
- Semantic skeleton layout (navbar, sidebar, content, footer)
- Component placeholders auto-generated from DOM analysis
- Responsive CSS (hides sidebar on mobile, adapts grid)
- Component inventory legend (fixed panel, bottom-right)
- Metadata comment header (page name, framework, timestamp)

---

## Framework Integration

### Web Frameworks

<details>
<summary><strong>Vanilla HTML</strong></summary>

```html
<body>
  <!-- Konten halaman Anda -->
  <script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>
</body>
```

#### Panduan Penggunaan:
1. **Letakan di mana**: Di dalam file `.html` statis Anda, letakkan di bagian bawah sebelum penutupan tag `</body>`.
2. **Untuk apa**: Menyisipkan widget secara langsung untuk halaman HTML tradisional/sederhana. Skrip CDN akan dimuat setelah seluruh elemen DOM selesai di-render.

</details>

<details>
<summary><strong>React / Next.js (App Router)</strong></summary>

```tsx
// components/DevCapture.tsx
'use client';
import { useEffect } from 'react';

export default function DevCapture() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js';
    document.body.appendChild(s);
  }, []);
  return null;
}

// app/layout.tsx
import DevCapture from '@/components/DevCapture';
export default function RootLayout({ children }) {
  return (
    <html><body>
      {children}
      {process.env.NODE_ENV === 'development' && <DevCapture />}
    </body></html>
  );
}
```

#### Panduan Penggunaan:
1. **Letakan di mana**:
   - Kode bagian pertama (`DevCapture.tsx`) diletakkan pada folder komponen Anda, misalnya di `components/DevCapture.tsx`.
   - Kode bagian kedua diletakkan pada file layout root utama Next.js Anda di `app/layout.tsx`.
2. **Untuk apa**:
   - **`DevCapture.tsx`**: Menggunakan komponen client (`'use client'`) dengan React hook `useEffect` untuk membuat tag `<script>` secara dinamis dan menyuntikkannya ke halaman hanya di lingkungan pengembangan (`development`).
   - **`layout.tsx`**: Memuat komponen `DevCapture` secara kondisional di dalam root layout agar widget ini tersedia di setiap rute halaman Next.js selama proses development tanpa memengaruhi bundle production.

</details>

<details>
<summary><strong>Vue 3 / Nuxt</strong></summary>

```ts
// plugins/devCapture.client.ts
export default defineNuxtPlugin(() => {
  if (process.dev) {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js';
    document.body.appendChild(s);
  }
});
```

#### Panduan Penggunaan:
1. **Letakan di mana**: Buat file baru bernama `devCapture.client.ts` di dalam direktori `plugins/` proyek Nuxt Anda.
2. **Untuk apa**: Sufiks `.client.ts` memastikan plugin ini hanya dijalankan di sisi browser (client-side). Blok `if (process.dev)` memastikan widget hanya akan dimuat dan disuntikkan secara dinamis ke dokumen saat aplikasi Vue/Nuxt dijalankan dalam mode pengembangan (development mode).

</details>

<details>
<summary><strong>Laravel Blade</strong></summary>

```blade
{{-- layouts/app.blade.php --}}
@if(app()->isLocal())
  <script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>
@endif
```

#### Panduan Penggunaan:
1. **Letakan di mana**: Di dalam template layout utama Blade Anda (biasanya `resources/views/layouts/app.blade.php`), letakkan di bagian bawah sebelum tag penutup `</body>`.
2. **Untuk apa**: Menggunakan fungsi bawaan Laravel `app()->isLocal()` untuk mendeteksi apakah aplikasi Laravel sedang berjalan di lingkungan lokal. Jika bernilai true, tag script CDN akan dirender secara dinamis untuk memudahkan pengambilan sampel UI dari browser lokal.

</details>

<details>
<summary><strong>WordPress</strong></summary>

```php
// functions.php
function enqueue_ui_capture() {
  if (defined('WP_DEBUG') && WP_DEBUG) {
    wp_enqueue_script('ui-capture', 
      'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js',
      [], null, true);
  }
}
add_action('wp_enqueue_scripts', 'enqueue_ui_capture');
```

#### Panduan Penggunaan:
1. **Letakan di mana**: Di dalam file `functions.php` dari tema WordPress aktif Anda.
2. **Untuk apa**: Menggunakan kait aksi `wp_enqueue_scripts` bawaan WordPress untuk mendaftarkan dan memuat script CDN secara aman. Pemeriksaan konstanta `WP_DEBUG` memastikan widget ini tidak akan pernah dimuat atau terlihat oleh pengguna saat situs web WordPress berada dalam mode production.

</details>

<details>
<summary><strong>Django / Flask / Ruby on Rails</strong></summary>

```html
<!-- Django -->
{% if debug %}
  <script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>
{% endif %}

<!-- Rails ERB -->
<% if Rails.env.development? %>
  <%= javascript_include_tag "https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js" %>
<% end %>
```

#### Panduan Penggunaan:
1. **Letakan di mana**:
   - **Django/Flask**: Di berkas template dasar (seperti `base.html`), letakkan di bagian akhir body.
   - **Ruby on Rails**: Di berkas tata letak aplikasi Rails (`app/views/layouts/application.html.erb`).
2. **Untuk apa**: Menyuntikkan script secara kondisional berdasarkan variabel lingkungan lokal framework web backend masing-masing agar aman dari pemuatan di production server.

</details>

### Mobile Frameworks

<details>
<summary><strong>Flutter / Dart (WebView)</strong></summary>

```dart
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class FlutterWebCapturePage extends StatefulWidget {
  const FlutterWebCapturePage({super.key});

  @override
  State<FlutterWebCapturePage> createState() => _FlutterWebCapturePageState();
}

class _FlutterWebCapturePageState extends State<FlutterWebCapturePage> {
  late final WebViewController _controller;

  @override
  void initState() {
    super.initState();
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(
        NavigationDelegate(
          onPageFinished: (url) async {
            await _injectCaptureTool();
          },
        ),
      )
      ..addJavaScriptChannel(
        'FlutterBridge',
        onMessageReceived: (JavaScriptMessage message) {
          _handleCaptureResult(message.message);
        },
      )
      ..loadRequest(Uri.parse('https://your-flutter-web-url.com'));
  }

  Future<void> _injectCaptureTool() async {
    final script = '''
      (function() {
        if (window.__uiCaptureInjected) return;
        window.__uiCaptureInjected = true;
        window.UiCaptureConfig = { enabled: true };
        var s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js';
        s.defer = true;
        document.body.appendChild(s);
      })();
    ''';
    await _controller.runJavaScript(script);
  }

  void _handleCaptureResult(String data) {
    // Contains JSON UX Graph, AI Prompt Markdown, or capture status
    debugPrint('Capture result received: $data');
  }

  Future<void> captureFlutterPage() async {
    final script = '''
      (function() {
        if (typeof document.getElementById('frameworkTargetSelect') !== 'undefined') {
          var target = document.getElementById('frameworkTargetSelect');
          if (target) target.value = 'flutter';
        }
        if (typeof doCapture === 'function') {
          window._captureMode = 'hifi';
          doCapture('flutter-page');
        }
        if (typeof generateDynamicAIPrompt === 'function') {
          var prompt = generateDynamicAIPrompt();
          FlutterBridge.postMessage(prompt);
        }
      })();
    ''';
    await _controller.runJavaScript(script);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Flutter Web Capture'),
        actions: [
          IconButton(
            icon: const Icon(Icons.camera_alt),
            onPressed: captureFlutterPage,
          ),
        ],
      ),
      body: WebViewWidget(controller: _controller),
    );
  }
}
```

#### Panduan Penggunaan & Peletakan Kode (Usage & Placement Guide):
1. **Prasyarat Dependensi**:
   - Tambahkan paket `webview_flutter` di dalam berkas `pubspec.yaml` proyek Flutter Anda:
     ```yaml
     dependencies:
       webview_flutter: ^4.10.0
     ```
2. **Peletakan Berkas Kode**:
   - Buat berkas Dart baru bernama `flutter_web_capture_page.dart` di dalam direktori `lib/` proyek Flutter Anda (misalnya: `lib/flutter_web_capture_page.dart`).
   - Tempelkan (paste) seluruh kode `StatefulWidget` di atas ke dalam berkas tersebut.
3. **Penjelasan Alur & Logika Kode**:
   - **`initState()` (Inisialisasi WebView)**: Dipanggil saat halaman pertama kali dimuat. Di sini kita membuat `WebViewController` dan menyetel `setJavaScriptMode(JavaScriptMode.unrestricted)` agar WebView dapat mengeksekusi JavaScript yang kita injeksikan.
   - **`_injectCaptureTool()` (Suntikkan Pustaka)**: Dipanggil secara otomatis di dalam delegasi `onPageFinished` ketika WebView selesai memuat situs target. Fungsi ini menambahkan tag `<script>` yang menunjuk ke berkas CDN `ui-ux-capture-tool.min.js`. Skrip ini dilindungi oleh bendera `window.__uiCaptureInjected` agar tidak mengalami duplikasi pemuatan.
   - **`FlutterBridge` (JavaScript Channel)**: Berfungsi sebagai jembatan komunikasi dua arah. Ketika tombol capture ditekan di web, Javascript akan mengirimkan hasil capture (teks AI Prompt, JSON, atau status gambar) ke native Flutter menggunakan perintah `FlutterBridge.postMessage(data)`.
   - **`_handleCaptureResult()`**: Method penampung hasil di sisi Dart. Tempatkan logika untuk menyimpan hasil capture ke penyimpanan lokal perangkat atau mengirimkannya ke API server Anda di dalam method ini.
   - **`captureFlutterPage()` (Pemicu dari Native)**: Dipanggil saat tombol ikon kamera di AppBar ditekan. Method ini menjalankan kode JavaScript di dalam WebView untuk memaksa konfigurasi target ke framework `flutter`, menyetel mode ke `hifi`, memicu capture, dan memposting hasilnya kembali ke Dart.

</details>

<details>
<summary><strong>React Native</strong></summary>

```tsx
import { useRef } from 'react';
import { WebView } from 'react-native-webview';

const INJECT = `
  (function() {
    if (window.__uiCaptureInjected) return;
    window.__uiCaptureInjected = true;
    window.UiCaptureConfig = { enabled: true };
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js';
    document.body.appendChild(s);
  })(); true;
`;

export default function CaptureWebView() {
  const ref = useRef(null);
  return (
    <WebView
      ref={ref}
      source={{ uri: 'https://your-app.com' }}
      injectedJavaScriptBeforeContentLoaded={INJECT}
      onMessage={e => {
        try {
          const data = JSON.parse(e.nativeEvent.data);
          console.log('Capture result received:', data);
        } catch (err) {
          console.log('Message received:', e.nativeEvent.data);
        }
      }}
      javaScriptEnabled={true}
    />
  );
}
```

#### Panduan Penggunaan & Peletakan Kode:
1. **Prasyarat Dependensi**:
   - Pastikan Anda sudah menginstal paket `react-native-webview` di proyek React Native Anda:
     ```bash
     npm install react-native-webview
     # atau
     yarn add react-native-webview
     ```
2. **Letakan di mana**: Buat file komponen baru seperti `CaptureWebView.tsx` di folder screen atau komponen Anda (misalnya `components/CaptureWebView.tsx`), lalu impor komponen ini di mana Anda ingin merender situs web target.
3. **Penjelasan Logika Kode**:
   - **`WebView`**: Komponen native React Native untuk merender halaman web target. Properti `javaScriptEnabled={true}` harus disetel agar skrip JavaScript dapat berjalan.
   - **`INJECT`**: String berisi fungsi JavaScript IIFE yang disuntikkan secara dinamis sebelum konten dimuat menggunakan `injectedJavaScriptBeforeContentLoaded`. Skrip ini memuat widget capture langsung dari CDN dan melindunginya agar tidak diinjeksi berulang kali dengan flag `window.__uiCaptureInjected`.
   - **`onMessage`**: Callback native yang menangkap data yang dikirimkan oleh WebView (melalui `window.ReactNativeWebView.postMessage(data)`). Digunakan untuk menerima hasil capture UI/UX atau log status lainnya di sisi native React Native.

</details>

<details>
<summary><strong>Ionic (Angular / React)</strong></summary>

```typescript
// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit() {
    // Hanya muat script jika aplikasi berjalan di web browser (bukan aplikasi native Capacitor)
    if (!this.platform.is('capacitor')) {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js';
      document.body.appendChild(s);
    }
  }
}
```

#### Panduan Penggunaan & Peletakan Kode:
1. **Letakan di mana**: Diletakkan di file inisialisasi komponen utama aplikasi Angular Anda, yaitu `app.component.ts` (atau di berkas entri React `App.tsx` jika Anda menggunakan Ionic React).
2. **Untuk apa**: Menggunakan layanan `Platform` dari `@ionic/angular` untuk memeriksa platform aktif. Jika dijalankan di browser web biasa (bukan dibungkus oleh Capacitor native), widget capture disuntikkan secara dinamis ke dokumen saat aplikasi pertama kali dimuat (`ngOnInit`).

</details>

<details>
<summary><strong>Capacitor.js / Tauri / Electron</strong></summary>

```js
// 1. Capacitor — Letakkan pada file index.html atau entri utama JavaScript Anda
// Secara default aktif otomatis di localhost dalam mode dev. Untuk mode production, paksa aktifkan:
window.UiCaptureConfig = { enabled: true };

// 2. Tauri — Letakkan pada file entri JavaScript utama aplikasi web Anda
// Aktif otomatis di mode dev (karena Tauri menyajikan aplikasi lewat localhost)

// 3. Electron — Letakkan pada file preload.js sebelum BrowserWindow diinisialisasi
if (process.env.NODE_ENV === 'development') {
  window.UiCaptureConfig = { enabled: true };
}
```

#### Panduan Penggunaan & Peletakan Kode:
1. **Letakan di mana**:
   - **Capacitor**: Letakkan pada file root index aplikasi web Anda (`public/index.html` atau `index.js`).
   - **Tauri**: Letakkan pada file inisialisasi frontend JavaScript utama Anda (misalnya `src/main.js` atau `index.html`).
   - **Electron**: Letakkan pada berkas skrip jembatan preload (`preload.js`) proyek Anda.
2. **Untuk apa**: Mendeteksi jika aplikasi berjalan di dalam sandbox pembungkus desktop/mobile (Capacitor/Tauri/Electron) dan mengaktifkan bendera `window.UiCaptureConfig = { enabled: true }` agar widget capture mengetahui bahwa ia memiliki izin penuh untuk aktif dan memuat di lingkungan runtime hibrida tersebut.

</details>

---

## Configuration API

Setel objek konfigurasi global `window.UiCaptureConfig` **sebelum** memuat tag `<script>` utama untuk mengubah perilaku default widget:

```html
<script>
  window.UiCaptureConfig = {
    enabled: true   // Memaksa widget aktif di domain mana saja (bukan hanya localhost)
  };
</script>
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js"></script>
```

- **Letakan di mana**: Di dalam tag `<head>` atau bagian teratas dari `<body>` pada dokumen HTML Anda, **sebelum** tag pemanggil file `ui-ux-capture-tool.min.js`.
- **Untuk apa**: Mengatur konfigurasi awal (seperti memaksakan widget tetap aktif dengan properti `enabled: true`) agar widget langsung dikonfigurasi saat script utama dimuat oleh browser.

### Activation Methods

| Method | Example |
|---|---|
| **Automatic** | Active on `localhost`, `127.0.0.1`, `*.local`, `*.test` |
| **URL Parameter** | `?dev_capture=true` to enable / `?dev_capture=false` to disable |
| **localStorage** | `localStorage.setItem('ui_capture_enabled', '1')` |
| **Global config** | `window.UiCaptureConfig = { enabled: true }` |

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + Shift + C` | Capture page with current mode and format |

---

## Version History

### v1.1.1 — June 2026

**New Features:**
- ✨ **HTML Wireframe File** — 4th export format: `wireframe__{slug}.html`, self-contained skeleton with component legend
- ✨ **Mermaid Flowchart** — Auto-generated `flowchart TD` diagram in AI Prompt (Section 11)
- ✨ **HTML Skeleton Reference** — Section 12 in AI Prompt: structural HTML scaffold
- ✨ **Mobile Framework Targets** — React Native (JSX), Ionic (Angular/React), Capacitor.js added to Config tab
- ✨ **Plugin Theme Options** — Material UI, Mantine UI added to theme selector
- ✨ **Wireframe Engine always visible** — Engine selector available for all fidelity modes (not only Lo-Fi)
- ✨ **HXRE Lo-Fi visual upgrade** — Volkside-quality block wireframe output while preserving HXRE intelligence
- ✨ **12 new component types** — Tabs, Accordion, Pagination, Breadcrumb, Badge/Tag, Toast, Dropdown, Progress Bar, Chat, Kanban, Wizard, Image/Media
- ✨ **AI Prompt HXRE format** — Standardized 12-section output with metadata table, component inventory table, state machine table
- ✨ **DOCS.md** — Full English documentation with framework-specific code examples

**Fixes:**
- 🔧 HXRE Lo-Fi: Zero color bleed — inline styles stripped, overlay anchored to `document.body` (was appended to `<html>`, invisible to html2canvas)
- 🔧 Hi-Fi export now uses JPEG 85% — 60–80% smaller vs PNG with minimal visible difference
- 🔧 Loading overlay excluded from wireframe element tracing — no longer appears as boxes in HXRE render
- 🔧 Alert Box wireframe color changed from yellow to grayscale (Lo-Fi compliance)
- 🔧 AI Prompt sections standardized to English headers
- 🔧 Fixed `oklab`/`oklch` detection — more cases handled in CSS color monkeypatch
- 🔧 Chart/Canvas detection improved — excludes tiny inline SVG icons
- 🔧 UTF-8 BOM on all text exports (JSON, Markdown, HTML) for Notepad/Excel compatibility

---

### v1.0.0 — May 2026 (Initial Release)

- Lo-Fi (HXRE + Wirify), Mid-Fi, Hi-Fi, Raw capture modes
- UX Graph Schema (JSON) export
- AI Prompt (Markdown) export — 9-section format
- Auto Tour with auto-discover
- Design token extraction (font, color, radius, shadow)
- Framework detection (Bootstrap, Tailwind, ShadCN, AdminLTE, Ant Design)
- Accessibility tree scanner
- Shadow DOM + iframe traversal
- Progressive auto-scroll asset loader
- Stats & Analytics tab
- `Ctrl+Shift+C` keyboard shortcut
- Flutter/Dart WebView integration
- localhost auto-activation

---

## License

This project is licensed under **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)**.

[![CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

**You are free to:**
- ✅ Use this tool for personal and non-commercial development projects
- ✅ Share the original, unmodified tool with attribution

**You may NOT:**
- ❌ Modify and redistribute the source code
- ❌ Use this tool or any derivative for commercial purposes without written permission
- ❌ Sublicense, sell, or package this tool as part of a commercial product

For commercial licensing inquiries, contact the author.

**Full license text:** [https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode)

---

## Support

| Channel | Link |
|---|---|
| **Full Documentation** | [DOCS.md](./DOCS.md) |
| **Bug Reports** | [GitHub Issues](https://github.com/tukang-prompt-ai/ui-capture-tool/issues) |
| **Releases & Downloads** | [GitHub Releases](https://github.com/tukang-prompt-ai/ui-capture-tool/releases) |
| **CDN** | [cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool](https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js) |

---

<div align="center">

Made with ❤️ by [perawitayasa](https://github.com/perawitayasa) · Powered by HXRE Engine v7

</div>
