#!/usr/bin/env node
/**
 * 从 animal-island-ui 编译 Less → sa2Kit-UI 全局 CSS
 * 运行: node scripts/sync-animal-island-styles.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import less from 'less';
import { COMPONENT_SPECS, CURSOR_RENAMES } from './animal-island-class-maps.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ANIMAL_UI = process.env.ANIMAL_ISLAND_UI ?? '/home/qhr/Desktop/project/animal-island-ui';
const THEME_DIR = path.join(ROOT, 'packages/themes/animal-island');
const ASSETS_OUT = path.join(THEME_DIR, 'assets/img');

function applyRenames(source, renames) {
  let result = source;
  const sorted = [...renames].sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of sorted) {
    result = result.split(from).join(to);
  }
  return result;
}

async function compileLess(relativePath, renames = []) {
  const filePath = path.join(ANIMAL_UI, relativePath);
  let source = fs.readFileSync(filePath, 'utf8');
  if (!source.includes('variables.less')) {
    source = `@import "${path.join(ANIMAL_UI, 'src/styles/variables.less')}";\n${source}`;
  }
  source = applyRenames(source, renames);
  const { css } = await less.render(source, {
    filename: filePath,
    paths: [path.dirname(filePath), path.join(ANIMAL_UI, 'src/styles')],
  });
  return css;
}

function copyAssets() {
  const assetDirs = ['dividers', 'footer', 'cursor', 'phone', 'home', 'icons'];
  for (const dir of assetDirs) {
    const srcDir = path.join(ANIMAL_UI, 'src/assets/img', dir);
    if (!fs.existsSync(srcDir)) continue;
    const destDir = path.join(ASSETS_OUT, dir);
    fs.mkdirSync(destDir, { recursive: true });
    for (const file of fs.readdirSync(srcDir, { withFileTypes: true })) {
      if (!file.isFile()) continue;
      fs.copyFileSync(path.join(srcDir, file.name), path.join(destDir, file.name));
    }
  }
  // wedding bg
  const weddingBg = path.join(ANIMAL_UI, 'src/assets/img/animalisland_1440_2560.JPG');
  if (fs.existsSync(weddingBg)) {
    fs.mkdirSync(ASSETS_OUT, { recursive: true });
    fs.copyFileSync(weddingBg, path.join(ASSETS_OUT, 'animalisland_1440_2560.JPG'));
  }
}

function fixAssetUrls(css) {
  return css
    .replace(/url\(['"]?\.\.\/\.\.\/assets\/img\//g, "url('./assets/img/")
    .replace(/url\(['"]?\.\.\/assets\/img\//g, "url('./assets/img/");
}

async function compileThemeVars() {
  const source = `@import "${path.join(ANIMAL_UI, 'src/styles/variables.less')}";\n@import "${path.join(ANIMAL_UI, 'src/styles/themes/default.less')}";`;
  const { css } = await less.render(source, {
    paths: [path.join(ANIMAL_UI, 'src/styles')],
  });
  return css.replace(
    ':root {',
    ":root,\n[data-theme='animal-island'] {",
  );
}

async function compileReset() {
  const source = fs.readFileSync(path.join(ANIMAL_UI, 'src/styles/reset.less'), 'utf8');
  const { css } = await less.render(source, {
    paths: [path.join(ANIMAL_UI, 'src/styles')],
  });
  return css.replace(/\[class\^='animal-'\]/g, "[class^='sa2-']");
}

async function compileCursor() {
  const source = fs.readFileSync(path.join(ANIMAL_UI, 'src/components/Cursor/cursor.css'), 'utf8');
  return fixAssetUrls(applyRenames(source, CURSOR_RENAMES));
}

async function main() {
  if (!fs.existsSync(ANIMAL_UI)) {
    console.error(`animal-island-ui not found: ${ANIMAL_UI}`);
    process.exit(1);
  }

  copyAssets();

  const parts = [
    '/* Auto-generated from animal-island-ui — run: node scripts/sync-animal-island-styles.mjs */',
    await compileThemeVars(),
    await compileReset(),
  ];

  for (const spec of COMPONENT_SPECS) {
    try {
      const css = await compileLess(spec.file, spec.renames);
      parts.push(`/* --- ${spec.file} --- */`);
      parts.push(css);
      console.log('compiled', spec.file);
    } catch (error) {
      console.error('FAILED', spec.file, error.message);
      process.exitCode = 1;
    }
  }

  parts.push('/* --- Cursor --- */');
  parts.push(await compileCursor());

  let combined = parts.join('\n\n');
  combined = fixAssetUrls(combined);

  const wrapped = `@layer components {\n${combined}\n}\n`;
  fs.writeFileSync(path.join(THEME_DIR, 'animal-components.css'), wrapped);

  // sa2 语义 token 与 --animal-* 对齐（供 Tailwind sa2.* 使用）
  fs.writeFileSync(
    path.join(THEME_DIR, 'animal-sa2-bridge.css'),
    `:root,
[data-theme='animal-island'] {
  --sa2-primary: var(--animal-primary-color);
  --sa2-primary-hover: var(--animal-primary-color-hover);
  --sa2-primary-active: var(--animal-primary-color-active);
  --sa2-primary-bg: var(--animal-primary-color-bg);
  --sa2-success: var(--animal-success-color);
  --sa2-success-active: var(--animal-success-color-active);
  --sa2-warning: var(--animal-warning-color);
  --sa2-warning-active: var(--animal-warning-color-active);
  --sa2-error: var(--animal-error-color);
  --sa2-error-hover: var(--animal-error-color-hover);
  --sa2-error-active: var(--animal-error-color-active);
  --sa2-text: var(--animal-text-color);
  --sa2-text-secondary: var(--animal-text-color-secondary);
  --sa2-text-disabled: var(--animal-text-color-disabled);
  --sa2-border: var(--animal-border-color);
  --sa2-border-light: var(--animal-border-color-light);
  --sa2-border-hover: var(--animal-border-color-hover);
  --sa2-bg: var(--animal-bg-color);
  --sa2-bg-secondary: var(--animal-bg-color-secondary);
  --sa2-bg-disabled: var(--animal-bg-color-disabled);
  --sa2-shadow-sm: var(--animal-shadow-sm);
  --sa2-shadow-base: var(--animal-shadow-base);
  --sa2-shadow-lg: var(--animal-shadow-lg);
  --sa2-radius-sm: var(--animal-border-radius-sm);
  --sa2-radius: var(--animal-border-radius-base);
  --sa2-radius-lg: var(--animal-border-radius-lg);
  --sa2-font: var(--animal-font-family);
}
`,
  );

  console.log('Wrote packages/themes/animal-island/animal-components.css');
}

main();
