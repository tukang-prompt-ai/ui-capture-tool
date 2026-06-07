# UI/UX Capture Suite — Complete Documentation

> **Version:** v7 | **License:** MIT | **Author:** perawitayasa
> **Blueprint:** HXRE (Hybrid UX Reconstruction Engine) aligned

A self-contained, browser-native **UI/UX intelligence widget** that captures, analyzes, and reconstructs any web page into structured design artifacts — screenshots, UX graph schemas, AI-ready prompts, and HTML wireframes — all without leaving the browser.

---

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Installation](#installation)
   - [CDN (Recommended)](#cdn-recommended)
   - [NPM / Package Manager](#npm--package-manager)
   - [Manual Script Tag](#manual-script-tag)
4. [Activation & Environment Control](#activation--environment-control)
5. [Widget UI — Panel Guide](#widget-ui--panel-guide)
6. [Feature Reference](#feature-reference)
   - [Fidelity Modes](#fidelity-modes)
   - [Export Formats](#export-formats)
   - [Wireframe Engine Selector](#wireframe-engine-selector)
   - [Asset Loading Pipeline](#asset-loading-pipeline)
   - [Auto Tour](#auto-tour)
   - [Engine Config Tab](#engine-config-tab)
   - [Stats & Analytics Tab](#stats--analytics-tab)
   - [AI Prompt Generator](#ai-prompt-generator)
   - [DOM Analyzer (HXRE Core)](#dom-analyzer-hxre-core)
7. [Output File Formats](#output-file-formats)
   - [PNG Screenshot](#png-screenshot)
   - [UX Graph Schema (JSON)](#ux-graph-schema-json)
   - [AI Prompt File (Markdown)](#ai-prompt-file-markdown)
   - [HTML Wireframe File](#html-wireframe-file)
8. [Keyboard Shortcuts](#keyboard-shortcuts)
9. [Framework Integration](#framework-integration)
   - [Vanilla HTML](#vanilla-html)
   - [React / Next.js](#react--nextjs)
   - [Vue 3](#vue-3)
   - [Laravel Blade](#laravel-blade)
   - [Flutter / Dart (WebView)](#flutter--dart-webview)
   - [React Native](#react-native)
   - [Ionic (Angular / React)](#ionic-angular--react)
   - [Capacitor.js](#capacitorjs)
   - [Other Mobile Frameworks](#other-mobile-frameworks)
10. [Configuration API](#configuration-api)
11. [How the Loading Pipeline Works](#how-the-loading-pipeline-works)
12. [Troubleshooting](#troubleshooting)
13. [Roadmap & Blueprint Alignment](#roadmap--blueprint-alignment)

---

## Overview

The **UI/UX Capture Suite** is a floating developer widget injected into any web page. Once activated, it provides:

- **Full-page screenshots** in four fidelity levels (Lo-Fi wireframe, Mid-Fi grayscale, Hi-Fi optimized, Raw)
- **UX Graph Schema** (JSON) — structured DOM analysis for AI pipelines and design systems
- **AI Prompt File** (Markdown) — 12-section HXRE blueprint prompt with Mermaid flowchart, ready for any AI model
- **HTML Wireframe File** — a generated skeletal wireframe HTML document with component inventory
- **Auto Tour** — automatic multi-page sequential capture
- **Framework detection** — identifies Bootstrap, Tailwind, ShadCN, AdminLTE, Ant Design, Material UI, and more

The tool runs **100% client-side** in the browser. No data is sent to any server.

---

## Quick Start

The fastest way to get started is a single script tag:

```html
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>
```

The widget appears automatically on `localhost`, `127.0.0.1`, `.local`, and `.test` domains.

---

## Installation

### CDN (Recommended)

Add the script to the bottom of your HTML `<body>`:

```html
<!-- Always get the latest version -->
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>

<!-- Pin to a specific version -->
<script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js"></script>
```

### NPM / Package Manager

Install via HTTPS (no SSH key required):

```bash
# npm
npm install --save-dev https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz

# yarn
yarn add --dev https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz
```

Then reference the compiled file:

```js
// ES module import
import 'ui-capture-tool';

// Or HTML script tag
// <script src="node_modules/ui-capture-tool/ui-ux-capture-tool.min.js"></script>
```

### Manual Script Tag

Download `ui-ux-capture-tool.min.js` from [GitHub Releases](https://github.com/tukang-prompt-ai/ui-capture-tool/releases) and host it locally:

```html
<script src="/assets/js/ui-ux-capture-tool.min.js"></script>
```

---

## Activation & Environment Control

The widget **only activates** under one of these conditions:

| Condition | How it works |
|---|---|
| **Localhost** | Automatically active on `localhost`, `127.0.0.1`, `*.local`, `*.test` |
| **URL Parameter** | Add `?dev_capture=true` to enable. Use `?dev_capture=false` to disable. |
| **localStorage** | Run `localStorage.setItem('ui_capture_enabled', '1')` in the browser console |
| **Global Config** | Set `window.UiCaptureConfig = { enabled: true }` before loading the script |

### Enable on any page (browser console):
```js
localStorage.setItem('ui_capture_enabled', '1');
location.reload();
```

### Disable:
```js
localStorage.setItem('ui_capture_enabled', '0');
location.reload();
```

---

## Widget UI — Panel Guide

The widget appears as a **floating camera button** (📷) in the bottom-right corner. Click it to toggle the panel.

```
┌─────────────────────────────┐
│  📦 UI/UX CAPTURE SUITE  V7 │
├──────┬──────┬────────┬──────┤
│Capture│ Tour │ Engine │ Stats│
└──────┴──────┴────────┴──────┘
```

---

## Feature Reference

### Fidelity Modes

Located in the **Capture tab** — select before taking a screenshot.

| Mode | Description |
|---|---|
| **Lo-Fi** — Wireframe | Converts the page to a skeleton wireframe. All colors stripped, layout boxes preserved. Best for early-stage design docs. When selected, the **Wireframe Engine** selector appears below the file name. |
| **Mid-Fi** — Grayscale | Full grayscale render. Layout and text preserved, all color removed. Good for contrast and accessibility checks. |
| **Hi-Fi** — Optimized | Full-color screenshot with PNG color quantization (~40% smaller file). **Default mode.** |
| **Get Capture** — Raw | Pure full-page screenshot at device pixel ratio. No post-processing — highest quality. |

### Export Formats

Located below the fidelity mode selector in the **Capture tab**.

| Format | File Name Pattern | Description |
|---|---|---|
| **PNG Screenshot Image** | `{mode}__{slug}__{ts}.png` | Full-page image. Works with all fidelity modes. |
| **UX Graph Schema (JSON)** | `ux-graph__{slug}__{ts}.json` | Structured JSON with the full DOM analysis: components, layout graph, design tokens, accessibility tree, framework detection, responsive data, and user journey. |
| **AI Prompt File (Markdown)** | `ai-prompt__{slug}__{ts}.md` | Complete 12-section HXRE-format Markdown prompt including Mermaid flowchart and HTML wireframe skeleton reference. Paste directly into any AI model. |
| **HTML Wireframe File** | `wireframe__{slug}__{ts}.html` | A self-contained, openable HTML file with a CSS-wireframe skeleton of the page. Includes component inventory legend, responsive layout, and metadata comments. |

> **UTF-8 BOM:** All text exports (JSON, Markdown, HTML) include a UTF-8 BOM (`\ufeff`) so they open correctly in Notepad, Excel, and code editors.

### Wireframe Engine Selector

Appears **only when Lo-Fi mode is selected**, below the File Name input in the Capture tab.

| Engine | Description |
|---|---|
| **HXRE Wireframe (Modern)** | Built-in engine. Applies CSS overrides to strip colors and replace content with visual skeleton placeholders. No external dependencies. |
| **Volkside Wirify (Legacy)** | Classic Wirify bookmarklet engine (loads jQuery from CDN). Traditional "box wireframe" style. |

### Asset Loading Pipeline

When you click **Capture Page** in PNG mode, a 5-step pipeline runs automatically with a loading overlay:

| Step | What happens |
|---|---|
| 1. DOM Analysis | Scans all visible nodes, Shadow DOM, and same-origin iframes |
| 2. Asset Loading | Resolves lazy images (`data-src`, `data-original`), preloads CSS background images, waits for fonts. Performs **progressive auto-scroll** to trigger lazy-load observers. |
| 3. Canvas Render | Uses `html2canvas` with adaptive scale based on page height. Patches modern CSS color functions (`oklab`, `oklch`). |
| 4. Compress | Applies grayscale (Lo-Fi/Mid-Fi) or PNG color quantization (Hi-Fi). |
| 5. Save | Triggers automatic file download. |

**Skip Button:** If assets take too long, a **"Skip Asset Loading"** button appears. Clicking it immediately proceeds to rendering.

**Global timeout:** 7 seconds max — the pipeline auto-continues even if some assets haven't loaded.

### Auto Tour

Located in the **Tour tab**. Visits multiple pages sequentially and captures each one automatically.

**How to use:**
1. Click **Auto-Discover** to find all navigation links on the current page.
2. Review/edit the URL list (one per line, relative or absolute paths).
3. Select a fidelity mode in the Capture tab.
4. Click **Run Auto Tour** to start.

**How it works:**
- Opens each URL in a new tab with `?dev_capture=1` appended.
- Waits for `readyState === 'complete'`, then sends a `postMessage` to trigger capture.
- Closes the tab and moves to the next after download.
- Shows a progress bar with current/total count.

> ⚠️ **Requires browser popup permissions** for your domain. An in-app modal guides you if blocked.

**Auto-Discover logic:**
- Finds all `<a>` tags, normalizes to pathname.
- Excludes: external URLs, static assets (`.png`, `.pdf`, `.js`, etc.), `/login`, `/logout`.
- Deduplicates and sorts alphabetically.

### Engine Config Tab

| Setting | Options | Description |
|---|---|---|
| **Framework Target** — Web | Tailwind CSS, Bootstrap 5, React (TSX), Vue 3, Laravel Blade | Sets the target for the AI Prompt's code generation section. |
| **Framework Target** — Mobile | Flutter (Dart), React Native (JSX), Ionic (Angular/React), Capacitor.js | Mobile-specific code generation instructions are added to the AI Prompt. |
| **Active Plugin Theme** | Auto-Detect, Shadcn UI, Bootstrap 5, AdminLTE, Ant Design Pro, Material UI, Mantine UI | Overrides the auto-detected theme label. Use "Auto-Detect" to let the DOM Analyzer determine it. |

### Stats & Analytics Tab

Populated automatically after each capture.

| Stat | Description |
|---|---|
| **Analyzed Nodes** | Total DOM elements (`document.querySelectorAll('*').length`) |
| **Render Time** | Total time from capture start to download, in seconds |
| **Optimized Size** | Approximate exported file size in KB |
| **Est. Accuracy** | Engine's estimated layout reconstruction accuracy |
| **Detected Framework** | CSS framework/UI library detected (e.g., `Bootstrap`, `Tailwind CSS`, `ShadCN`) |

### AI Prompt Generator

Two ways to generate:
1. **Export:** Select "AI Prompt File (Markdown)" → **Capture Page** → downloads `.md`
2. **Clipboard:** Click **Copy AI Prompt** → copies Markdown to clipboard

**The AI Prompt contains 12 sections (HXRE format):**

| # | Section | Content |
|---|---|---|
| 1 | Page Identification | Intent, title, framework, layout complexity, visual symmetry |
| 2 | Visual Segmentation | Header/Sidebar/Footer status, nav items, Layout Graph tree |
| 3 | Component Inventory | All detected components with type, tag, and pixel position |
| 4 | Shadow DOM & IFrame | Nodes inside Shadow DOM roots and same-origin iframes |
| 5 | Accessibility Tree | Heading hierarchy, ARIA roles, image alt text count |
| 6 | Design Tokens | Top fonts, top 5 colors (hex), border-radius, box-shadow |
| 7 | Relationship Graph | Structural component relationships |
| 8 | User Journey Flow | Auto-generated journey steps based on page type |
| 9 | State Machine | Loading/Empty/Error/Success states and expanded elements |
| 10 | Reconstruction Settings | Framework-specific code guidelines + general rules |
| 11 | **Mermaid Flowchart** | Auto-generated `flowchart TD` diagram of page structure and user journey |
| 12 | **HTML Wireframe Skeleton** | Structural skeleton in HTML comments as a reference |

### DOM Analyzer (HXRE Core)

Runs automatically during every capture. Detects:

**20+ Component Types:**
Navbar, Sidebar, Footer, Modal/Dialog, Table, Form, Card Panel, Button, IconButton, Input Box, Chart/Canvas, Alert Box, **Tabs, Accordion, Pagination, Breadcrumb, Badge/Tag, Toast/Notification, Dropdown Menu, Progress Bar, Chat/Message, Kanban Board, Wizard/Steps, Image/Media**

**Engines running in parallel:**
- Full recursive DOM traversal (Shadow DOM + same-origin iframes)
- Design Token Extraction (fonts, colors, border-radius, box-shadow)
- Framework Detection (10 CSS frameworks fingerprinted)
- Layout Graph Builder (hierarchical bounding-box tree)
- Accessibility Audit (headings, ARIA roles, alt texts)
- State Detection (loading, empty, error, success, expanded)
- Vision Analysis (page intent scoring, visual density, complexity)
- User Journey Generation (per page type)
- Responsive Data (viewport + device category)

---

## Output File Formats

### PNG Screenshot

```
hifi__dashboard__2026-06-07T10-30-00.png
lofi__checkout__2026-06-07T11-00-00.png
midfi__profile__2026-06-07T11-15-00.png
raw__home__2026-06-07T11-30-00.png
```

**Naming:** `{mode}__{slug}__{timestamp}.png`

### UX Graph Schema (JSON)

```json
{
  "title": "Admin Dashboard",
  "pageType": "dashboard",
  "heading": "Sales Overview",
  "detectedTheme": "AdminLTE Dashboard",
  "designTokens": {
    "fonts": ["Source Sans Pro", "FontAwesome"],
    "colors": ["#343a40", "#ffffff", "#007bff", "#6c757d", "#28a745"],
    "radius": "4px",
    "shadow": "0 1px 3px rgba(0,0,0,0.12)"
  },
  "regions": {
    "hasHeader": true,
    "hasSidebar": true,
    "hasFooter": true,
    "sidebarPosition": "left"
  },
  "components": [
    { "type": "Navbar", "tag": "nav", "rect": { "top": 0, "left": 0, "width": 1440, "height": 57 } },
    { "type": "Table", "tag": "table", "rect": { "top": 200, "left": 260, "width": 1140, "height": 400 } }
  ],
  "accessibilityTree": {
    "headings": [{ "level": 1, "text": "Sales Overview" }],
    "ariaRoles": { "navigation": 2, "button": 8 },
    "altTexts": 5
  },
  "shadowDomNodes": [],
  "iframeNodes": [],
  "states": { "loading": false, "empty": false, "error": false, "success": false },
  "responsive": { "viewportWidth": 1440, "viewportHeight": 900, "deviceCategory": "Desktop" },
  "userJourney": ["Navigate to page", "Review dashboard widgets", "Interact with sidebar menu"],
  "visionAnalysis": { "pageIntent": "dashboard", "layoutComplexity": "High", "visualDensity": 0.42 }
}
```

### AI Prompt File (Markdown)

A structured `.md` file following the HXRE system blueprint format. Contains:
- Metadata table (framework, theme, URL, viewport)
- 12 numbered sections (see [AI Prompt Generator](#ai-prompt-generator))
- Mermaid flowchart (sections 11)
- HTML skeleton reference (section 12)
- Framework-specific code generation guidelines

Paste directly into **ChatGPT**, **Claude**, **Gemini**, **GitHub Copilot Chat**, or any AI assistant to generate reconstructed UI code.

### HTML Wireframe File

A self-contained, browser-openable `.html` file that renders a CSS skeleton wireframe of the detected page structure. Features:

- **Navbar** skeleton with logo and nav item placeholders
- **Sidebar** with menu item skeletons (left/right based on detection)
- **Content area** with auto-rendered components:
  - Stat card grid (for dashboard pages)
  - Chart placeholder
  - Form skeleton with input groups
  - Data table skeleton
  - Alert, Modal, Card skeletons
- **Footer** skeleton
- **Component legend** panel (fixed, bottom-right) listing all detected component types and counts
- **Fully responsive** — sidebar hides on mobile, grid adapts
- **Metadata comments** at top of file (page name, framework, timestamp)

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + Shift + C` | Trigger a capture with the currently selected mode and format |

---

## Framework Integration

### Vanilla HTML

```html
<!DOCTYPE html>
<html lang="en">
<body>
  <!-- Your page content -->
  <script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>
</body>
</html>
```

### React / Next.js

**Option A — Dynamic import (App Router):**

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
```

```tsx
// app/layout.tsx
import DevCapture from '@/components/DevCapture';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <DevCapture />}
      </body>
    </html>
  );
}
```

**Option B — Pages Router (`_document.tsx`):**

```tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {process.env.NODE_ENV === 'development' && (
          <script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js" />
        )}
      </body>
    </Html>
  );
}
```

### Vue 3

```ts
// src/plugins/devCapture.ts
export default {
  install() {
    if (!import.meta.env.DEV) return;
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js';
    document.body.appendChild(s);
  }
};

// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import DevCapture from './plugins/devCapture';

const app = createApp(App);
if (import.meta.env.DEV) app.use(DevCapture);
app.mount('#app');
```

### Laravel Blade

```blade
{{-- resources/views/layouts/app.blade.php --}}
<body>
    @yield('content')
    @if(app()->isLocal())
        <script src="https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js"></script>
    @endif
</body>
```

### Flutter / Dart (WebView)

The tool injects into a **WebView** via the `webview_flutter` package.

**Step 1 — `pubspec.yaml`:**

```yaml
dependencies:
  webview_flutter: ^4.10.0
```

**Step 2 — Implement WebView Capture Page (`FlutterWebCapturePage`):**

Below is the complete stateful widget implementation to inject the capture tool, trigger captures, and handle results in Dart:

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

> ✅ Works with any Flutter WebView package (`webview_flutter`, `flutter_inappwebview`). Requires `JavaScriptMode.unrestricted` enabled so the script can inject and execute properly.

### React Native

Inject the tool into a React Native **WebView** from `react-native-webview`:

```tsx
import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';

const INJECT_SCRIPT = `
  (function() {
    window.UiCaptureConfig = { enabled: true };
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@v1.1.1/ui-ux-capture-tool.min.js';
    document.body.appendChild(s);
  })();
  true;
`;

export default function CaptureWebView() {
  const webViewRef = useRef(null);

  const triggerCapture = () => {
    webViewRef.current?.injectJavaScript(`
      if (typeof doCapture === 'function') {
        window._captureMode = 'hifi';
        doCapture('rn-capture');
      }
      true;
    `);
  };

  const getAiPrompt = () => {
    webViewRef.current?.injectJavaScript(`
      if (typeof generateDynamicAIPrompt === 'function') {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({ type: 'ai_prompt', data: generateDynamicAIPrompt() })
        );
      }
      true;
    `);
  };

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: 'https://your-app.com' }}
      injectedJavaScriptBeforeContentLoaded={INJECT_SCRIPT}
      onMessage={(event) => {
        const msg = JSON.parse(event.nativeEvent.data);
        if (msg.type === 'ai_prompt') {
          console.log('AI Prompt received:', msg.data);
          // Save to clipboard, share sheet, or API
        }
      }}
      javaScriptEnabled={true}
    />
  );
}
```

> ⚠️ Set the Engine Config **Framework Target** to `React Native (JSX)` before exporting an AI Prompt to get React Native-specific code generation instructions.

### Ionic (Angular / React)

**Angular Ionic — `app.component.ts`:**

```typescript
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit() {
    if (!this.platform.is('capacitor')) {
      // Only inject in browser/dev mode, not on native device
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js';
      document.body.appendChild(s);
    }
  }
}
```

**React Ionic — `App.tsx`:**

```tsx
import { useEffect } from 'react';
import { isPlatform } from '@ionic/react';

function App() {
  useEffect(() => {
    if (!isPlatform('capacitor') && process.env.NODE_ENV === 'development') {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/gh/tukang-prompt-ai/ui-capture-tool@main/ui-ux-capture-tool.min.js';
      document.body.appendChild(s);
    }
  }, []);

  return (/* your Ionic routing */);
}
```

### Capacitor.js

Capacitor apps are standard web apps wrapped for native deployment. Inject the tool as you would for any web framework (React, Vue, Angular), but restrict it to development only:

```js
// capacitor.config.ts — add custom server config for dev
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourapp.id',
  appName: 'YourApp',
  webDir: 'dist',
  server: {
    // Enable live reload in dev — tool auto-activates on localhost
    url: 'http://localhost:3000',
    cleartext: true
  }
};

export default config;
```

For production Capacitor builds, the tool will not activate (not on localhost). To enable explicitly:

```js
// In your app's initialization (before Capacitor loads)
if (process.env.NODE_ENV === 'development') {
  window.UiCaptureConfig = { enabled: true };
}
```

### Other Mobile Frameworks

| Framework | Approach |
|---|---|
| **Xamarin / MAUI** | Use `HybridWebView` or `BlazorWebView`. Inject the script via `EvaluateJavaScriptAsync()`. |
| **Cordova / PhoneGap** | Add the CDN script to `www/index.html` inside an `if (location.hostname === 'localhost')` check in your `deviceready` handler. |
| **NativeScript** | Use `WebView` component, set `src` to your web app, and inject via `evaluateJavaScript()`. |
| **Tauri** | Works natively — the web content runs on localhost in dev mode. The tool auto-activates. |
| **Electron** | Works natively on `localhost` in dev mode. For production, add `window.UiCaptureConfig = { enabled: true }` to your preload script. |

---

## Configuration API

Set `window.UiCaptureConfig` **before** loading the script:

```html
<script>
  window.UiCaptureConfig = {
    enabled: true  // Force-enable on any domain
  };
</script>
<script src="...ui-ux-capture-tool.min.js"></script>
```

**URL Parameter control:**
```
# Enable
https://example.com/page?dev_capture=true

# Disable
http://localhost:3000?dev_capture=false
```

**localStorage (browser console):**
```js
// Enable
localStorage.setItem('ui_capture_enabled', '1');

// Disable  
localStorage.setItem('ui_capture_enabled', '0');

// Remove setting (fall back to hostname check)
localStorage.removeItem('ui_capture_enabled');
```

---

## How the Loading Pipeline Works

```
[Click "Capture Page"]
         │
1. Show Loading Overlay ─────────────────────────────────────────────────────────
         │
2. DOM Analysis (analyzeDOM)
   └─ Traverses all elements, Shadow DOM, iframes
   └─ Detects 24+ component types
   └─ Extracts design tokens, framework, states, layout
         │
3. Fast-path exits (no asset loading needed):
   ├─ exportFormat === 'json'      → download .json → ✅ done
   ├─ exportFormat === 'prompt'    → download .md   → ✅ done
   └─ exportFormat === 'wireframe' → download .html → ✅ done
         │
4. PNG Pipeline continues:
         │
5. Progressive Auto-Scroll
   └─ Scrolls in 800px steps (max 32,000px / 40 iterations)
   └─ Waits 60ms per step to trigger lazy-load observers
   └─ Resets scroll to top after completion
         │
6. Asset Preloading (ensureAllAssetsLoaded)
   ├─ Resolves data-src / data-original / lazy-src images
   ├─ Resolves data-srcset on <picture> sources
   ├─ Preloads CSS background-image URLs
   ├─ Verifies all <link rel="stylesheet"> loaded
   ├─ Waits for document.fonts.ready
   ├─ Polls every 100ms until all complete
   ├─ Skip button available (7s max global timeout)
         │
7. Scroll Reset → window.scrollTo(0, 0)
         │
8. CSS Patch (oklab/oklch monkey-patch for html2canvas)
         │
9. Apply Fidelity Transform
   ├─ lofi  → enableHxreWireframe() OR enableWirify()
   ├─ midfi → body.classList.add('midfi-grayscale')
   └─ hifi/raw → no transform
         │
10. html2canvas Render
    └─ Adaptive scale: 1.0 (normal) → 0.4 (pages > 15,000px tall)
         │
11. Post-Process Canvas
    ├─ lofi/midfi → canvasToGrayscale()
    └─ hifi       → quantizeCanvasColors(factor=32)
         │
12. Download PNG + Restore UI
         │
13. Update Stats Tab
```

---

## Troubleshooting

| Problem | Solution |
|---|---|
| **Widget not appearing** | You're probably not on localhost. Run `localStorage.setItem('ui_capture_enabled', '1')` then reload, or add `?dev_capture=true` to the URL. |
| **Screenshot is blank/white** | The page may use `position: fixed` overflow. Try **Hi-Fi** mode. If on **Lo-Fi**, try switching the wireframe engine. |
| **Images missing in screenshot** | Some CDN images timeout. Click **Capture Page** again — the tool retries automatically (3s timeout per image). |
| **Slow capture on large pages** | Use the **"Skip Asset Loading"** button that appears during step 2 to force-proceed. |
| **Auto Tour popups blocked** | The browser must allow popups for your domain. Follow the in-app modal instructions. |
| **npm install via SSH fails** | Use the HTTPS tarball: `npm install --save-dev https://github.com/tukang-prompt-ai/ui-capture-tool/archive/refs/tags/v1.1.1.tar.gz` |
| **Widget appears in production** | Remove `window.UiCaptureConfig.enabled = true` from production builds and clear `localStorage` key `ui_capture_enabled`. |
| **Flutter WebView not showing widget** | Ensure `setJavaScriptMode(JavaScriptMode.unrestricted)` is set on your `WebViewController`. |
| **React Native WebView not responding** | Make sure `javaScriptEnabled={true}` and always append `true;` at the end of injected JavaScript strings. |
| **Ionic Capacitor app showing widget on device** | Wrap the injection in `if (!isPlatform('capacitor'))` to skip injection on native builds. |
| **Colors look wrong in screenshot** | The oklab/oklch monkeypatch is active. If you see rendering issues with specific colors, file a bug at the GitHub repo. |
| **HTML Wireframe is mostly empty** | The page may have very few detectable components. Check the **Stats tab** after capture — if "Analyzed Nodes" is low, the page may use Shadow DOM or a custom framework not fingerprinted yet. |

---

## Roadmap & Blueprint Alignment

This tool is built toward the **UXRE V7 — Universal UX Reconstruction Engine** vision in `BLUEPRINT/V3.md` and `BLUEPRINT/ENGINE/HXRE.md`.

### Currently Implemented ✅

| HXRE Module | Status | Notes |
|---|---|---|
| Page Loader (browser-native) | ✅ Complete | Auto-scroll + asset preloading |
| DOM Collector (recursive + Shadow DOM + iframe) | ✅ Complete | Full recursive traversal |
| Visual Tree Engine (layout graph) | ✅ Complete | Bounding-box tree builder |
| Region Detector (Header, Sidebar, Content, Footer) | ✅ Complete | |
| Component Detector (24+ types) | ✅ Complete | Tabs, Accordion, Kanban, Chat, etc. |
| Design Token Extractor (Font, Color, Radius, Shadow) | ✅ Complete | oklab/oklch resolved to hex |
| Responsive Engine (Desktop/Tablet/Mobile) | ✅ Complete | |
| Framework / Design System Detector (10 frameworks) | ✅ Complete | Bootstrap, Tailwind, ShadCN, MUI, etc. |
| State Engine (Loading, Empty, Error, Success, Active) | ✅ Complete | |
| Flow Engine (user journey generation) | ✅ Complete | Per page type |
| UX Graph Builder (JSON export) | ✅ Complete | `ux-graph__{slug}.json` |
| PNG Optimization Engine (quantization + grayscale) | ✅ Complete | TOOL 18 from V3 blueprint |
| Lo-Fi Wireframe Engine (HXRE + Wirify) | ✅ Complete | Selectable engine |
| Mid-Fi Engine (grayscale) | ✅ Complete | |
| Hi-Fi Engine (optimized screenshot) | ✅ Complete | |
| AI Prompt Generator (12-section HXRE format) | ✅ Complete | Includes Mermaid + skeleton |
| **Mermaid Flowchart Output** | ✅ Complete | Embedded in AI Prompt (Section 11) |
| **HTML Wireframe Export** | ✅ Complete | `wireframe__{slug}.html` |
| Auto Tour (multi-page sequential capture) | ✅ Complete | |
| Auto-Discover Links | ✅ Complete | |
| Accessibility Tree Scanner | ✅ Complete | |
| Flutter/Dart Integration | ✅ Complete | WebView injection + JavaScriptChannel |
| React Native Integration | ✅ Complete | WebView injection + postMessage |
| Ionic Integration | ✅ Complete | Angular + React patterns |
| Capacitor.js Integration | ✅ Complete | |
| Asset Loading Pipeline (lazy images, fonts, bg) | ✅ Complete | |
| Framework Code Generation (10 targets) | ✅ Complete | Web + Mobile frameworks |

### Planned 🚧

| HXRE Module | Status |
|---|---|
| Vision AI Understanding (LLM-based page analysis) | 🚧 Planned |
| Computer Vision Component Detector (CV/ML) | 🚧 Planned |
| Figma-Ready JSON Structure Export | 🚧 Planned |
| State Simulation (click, hover, form interactions) | 🚧 Planned |
| SPA Navigation Support (React Router, Vue Router) | 🚧 Planned |
| Knowledge Engine (1000+ pattern templates) | 🚧 Planned |
| Code Reconstruction Engine (generate actual code output) | 🚧 Planned |
| Dataset Engine (screenshot + UXGraph + Wireframe sets) | 🚧 Planned |
| Training Engine (fine-tuning from captured datasets) | 🚧 Planned |

---

*Documentation for UI/UX Capture Suite v7 — Last updated: June 2026*
*Blueprint: HXRE (Hybrid UX Reconstruction Engine) + UXRE V7*
