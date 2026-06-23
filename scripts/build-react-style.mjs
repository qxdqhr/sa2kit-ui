import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const reactDist = path.join(root, 'packages/react/dist');
const jieyuanTheme = path.join(root, 'packages/themes/jieyuan-garden');

const baseCss = path.join(reactDist, 'index.css');
const styleCss = path.join(reactDist, 'style.css');

if (!fs.existsSync(baseCss)) {
  console.error('Missing packages/react/dist/index.css — run vite build first.');
  process.exit(1);
}

function readThemeCss(file) {
  return fs.readFileSync(path.join(jieyuanTheme, file), 'utf8');
}

function stripCssImports(source) {
  return source.replace(/^@import\s+[^;]+;\s*/gm, '').trim();
}

const jieyuanParts = [
  readThemeCss('jieyuan-tokens.css'),
  readThemeCss('jieyuan-overrides-ext.css'),
  stripCssImports(readThemeCss('jieyuan-overrides.css')),
  readThemeCss('jieyuan-utilities.css'),
];

fs.writeFileSync(
  styleCss,
  [fs.readFileSync(baseCss, 'utf8'), ...jieyuanParts].join('\n\n'),
);

console.log(`Wrote ${styleCss} (${(fs.statSync(styleCss).size / 1024).toFixed(1)} KB)`);
