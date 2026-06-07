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

**One line — drop into any HTML page:**

```html
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>
```

The widget activates automatically on `localhost`, `127.0.0.1`, `*.local`, `*.test` domains.

**Or use the bookmarklet on any page:**

```javascript
javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js?v='+Date.now();window.UiCaptureConfig={enabled:true};document.body.appendChild(s);})();\n
```

Create a browser bookmark and paste the above as the URL.

---

## Installation

### CDN (Recommended)

```html
<!-- Latest version -->
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>

<!-- Pinned to v1.1.1 (recommended for production) -->
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js"></script>
```

### NPM / Package Manager

> **Note:** The package uses GitHub as its registry. Due to common SSH key restrictions, use the **HTTPS tarball URL** which requires no SSH setup:

```bash
# npm (recommended — no SSH required)
npm install --save-dev https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz

# yarn
yarn add --dev https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz

# pnpm
pnpm add -D https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz

# bun
bun add --dev https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz
```

> **Troubleshooting SSH Error:** If you see `git@github.com: Permission denied (publickey)`, always use the tarball URL above — it uses HTTPS and does not require SSH keys.

### Manual Download

Download the compiled file from [GitHub Releases](https://github.com/tukang-prompt-ai/ui-capture-tool/releases) and include it locally:

```html
<script src="/path/to/ui-ux-capture-tool.min.js"></script>
```

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
  <!-- content -->
  <script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>
</body>
```

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

</details>

<details>
<summary><strong>Laravel Blade</strong></summary>

```blade
{{-- layouts/app.blade.php --}}
@if(app()->isLocal())
  <script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>
@endif
```

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

</details>

### Mobile Frameworks

<details>
<summary><strong>Flutter / Dart (WebView)</strong></summary>

```dart
import 'package:webview_flutter/webview_flutter.dart';

final controller = WebViewController()
  ..setJavaScriptMode(JavaScriptMode.unrestricted)
  ..setNavigationDelegate(NavigationDelegate(
    onPageFinished: (_) {
      controller.runJavaScript('''
        window.UiCaptureConfig = { enabled: true };
        var s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js';
        document.body.appendChild(s);
      ''');
    },
  ))
  ..loadRequest(Uri.parse('https://your-app.com'));

// Trigger capture from Dart
await controller.runJavaScript('''
  document.getElementById('frameworkTargetSelect').value = 'flutter';
  document.getElementById('exportFormatSelect').value = 'prompt';
  doCapture('my-flutter-page');
''');

// Receive data back in Dart via JavaScriptChannel
controller.addJavaScriptChannel('FlutterBridge',
  onMessageReceived: (msg) => print(msg.message));

await controller.runJavaScript('''
  if (typeof generateDynamicAIPrompt === 'function') {
    FlutterBridge.postMessage(generateDynamicAIPrompt());
  }
''');
```

</details>

<details>
<summary><strong>React Native</strong></summary>

```tsx
import { WebView } from 'react-native-webview';

const INJECT = `
  (function() {
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
      onMessage={e => console.log(JSON.parse(e.nativeEvent.data))}
      javaScriptEnabled={true}
    />
  );
}
```

</details>

<details>
<summary><strong>Ionic (Angular / React)</strong></summary>

```typescript
// Angular
import { Platform } from '@ionic/angular';
export class AppComponent {
  constructor(private platform: Platform) {}
  ngOnInit() {
    if (!this.platform.is('capacitor')) {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js';
      document.body.appendChild(s);
    }
  }
}
```

</details>

<details>
<summary><strong>Capacitor.js / Tauri / Electron</strong></summary>

```js
// Capacitor — works on localhost in dev mode (auto-activates)
// For production builds, add before loading:
window.UiCaptureConfig = { enabled: true };

// Tauri — auto-activates in dev mode (served from localhost)

// Electron — add to preload.js:
if (process.env.NODE_ENV === 'development') {
  window.UiCaptureConfig = { enabled: true };
}
```

</details>

---

## Configuration API

Set `window.UiCaptureConfig` **before** loading the script to configure behavior:

```html
<script>
  window.UiCaptureConfig = {
    enabled: true   // Force-enable on any domain (not just localhost)
  };
</script>
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js"></script>
```

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
