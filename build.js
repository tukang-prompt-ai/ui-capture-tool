const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const JavaScriptObfuscator = require('javascript-obfuscator');

const HEADER_COMMENT = `/**
 * UI/UX Capture Tool — Standalone Version
 * 
 * A self-contained developer tool to capture web page screenshots in:
 * 1. UI Mode (Full color screenshot)
 * 2. UX Mode (Grayscale wireframe rendering)
 * 
 * Features an Auto Tour runner, AI Prompt copy utility, and link auto-discovery.
 * Works on any framework (Laravel, Next.js, React, Vue, pure HTML).
 * 
 * Setup:
 * Include this script at the end of the <body>.
 * <script src="ui-ux-capture-tool.main.js" defer></script>
 */
`;

async function bundle(srcDir, outputMainPath, outputMinPath) {
    console.log(`Bundling ${srcDir} -> ${outputMainPath}...`);

    // Helper to read files in directory
    const read = (filename) => fs.readFileSync(path.join(srcDir, filename), 'utf8');

    // 1. styles.css and lofi.css
    const cssContent = read('styles.css') + '\n' + read('lofi.css');

    // 2. main.js (Split parts)
    const mainJsContent = read('main.js');
    // Extract Environment Activation Check (starts at beginning, ends at return / initialization check)
    // We search for '// --- Widget UI Panel & Layout ---'
    const widgetLayoutMarker = '// --- Widget UI Panel & Layout ---';
    const markerIndex = mainJsContent.indexOf(widgetLayoutMarker);

    if (markerIndex === -1) {
        throw new Error(`Could not find marker "${widgetLayoutMarker}" in main.js`);
    }

    const envCheckPart = mainJsContent.substring(0, markerIndex);
    const mainPanelPart = mainJsContent.substring(markerIndex);

    // 3. Other modules
    const modes = read('modes.js');
    const wirifyEngine = read('wirify-engine.js');
    const lofi = read('lofi.js');
    const domAnalyzer = read('dom-analyzer.js');
    const aiPrompts = read('ai-prompts.js');
    const autoTour = read('auto-tour.js');
    const captureEngine = read('capture-engine.js');

    // Construct unified IIFE
    const iifeContent = `${HEADER_COMMENT}
(function () {
${envCheckPart}

    // --- Inlined Stylesheets ---
    const WIDGET_CSS = \`
${cssContent}
\`;

${modes}

${wirifyEngine}

${lofi}

${domAnalyzer}

${aiPrompts}

${autoTour}

${captureEngine}

${mainPanelPart}
})();
`;

    // Write unminified main file
    fs.writeFileSync(outputMainPath, iifeContent, 'utf8');
    console.log(`Successfully wrote unminified bundle: ${outputMainPath}`);

    if (outputMinPath) {
        console.log(`Minifying and obfuscating ${outputMainPath} -> ${outputMinPath}...`);
        try {
            const minified = await minify(iifeContent, {
                compress: {
                    dead_code: true,
                    drop_debugger: true,
                    conditionals: true,
                    evaluate: true,
                    booleans: true,
                    loops: true,
                    unused: true,
                    hoist_funs: true,
                    keep_fargs: false,
                    join_vars: true
                },
                mangle: {
                    toplevel: false
                }
            });

            console.log(`Obfuscating bundle with javascript-obfuscator...`);
            const obfuscated = JavaScriptObfuscator.obfuscate(minified.code, {
                compact: true,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 0.75,
                numbersToExpressions: true,
                simplify: true,
                stringArray: true,
                stringArrayEncoding: ['base64'],
                stringArrayThreshold: 0.75,
                splitStrings: true,
                splitStringsChunkLength: 10,
                unicodeEscapeSequence: false
            });

            const obfuscatedCode = obfuscated.getObfuscatedCode();
            fs.writeFileSync(outputMinPath, obfuscatedCode, 'utf8');
            console.log(`Successfully wrote obfuscated bundle: ${outputMinPath} (${Math.round(obfuscatedCode.length / 1024)} KB)`);
        } catch (e) {
            console.error(`Error processing ${outputMainPath}:`, e);
        }
    }
}

async function main() {
    try {
        // Build root version
        const rootSrcDir = path.resolve(__dirname, 'src');
        const rootMain = path.resolve(__dirname, 'ui-ux-capture-tool.main.js');
        const rootMin = path.resolve(__dirname, 'ui-ux-capture-tool.min.js');
        await bundle(rootSrcDir, rootMain, rootMin);

        // Build v1 version
        const v1SrcDir = path.resolve(__dirname, 'v1/src');
        const v1Main = path.resolve(__dirname, 'v1/ui-ux-capture-tool.main.js');
        // V1 does not have a minified file tracking in root repo, but let's bundle it too
        await bundle(v1SrcDir, v1Main, null);

        console.log('Build completed successfully!');
    } catch (e) {
        console.error('Build failed:', e);
        process.exit(1);
    }
}

main();
