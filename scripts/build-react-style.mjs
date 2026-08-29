import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const reactDist = path.join(root, 'packages/react/dist');
const themesRoot = path.join(root, 'packages/themes');

const baseCss = path.join(reactDist, 'index.css');
const styleCss = path.join(reactDist, 'style.css');

if (!fs.existsSync(baseCss)) {
  console.error('Missing packages/react/dist/index.css — run vite build first.');
  process.exit(1);
}

function stripCssImports(source) {
  return source.replace(/^@import\s+[^;]+;\s*/gm, '').trim();
}

function readIfExists(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

/** 将 decorations.css 中的相对 SVG url 内联为 data URI，避免消费侧路径失效 */
function inlineThemeSvgUrls(css, themeDir) {
  if (!css) return css;
  return css.replace(
    /url\(\s*['"]?\.\/assets\/icons\/([^'")\s]+)['"]?\s*\)/g,
    (_, fileName) => {
      const iconPath = path.join(themeDir, 'assets/icons', fileName);
      if (!fs.existsSync(iconPath)) {
        console.warn(`  ! missing icon for inline: ${iconPath}`);
        return 'url("")';
      }
      const svg = fs.readFileSync(iconPath, 'utf8').trim().replace(/\s+/g, ' ');
      const encoded = encodeURIComponent(svg)
        .replace(/'/g, '%27')
        .replace(/"/g, '%22');
      return `url("data:image/svg+xml,${encoded}")`;
    },
  );
}

function overlayThemeCss(themeDir, themeId) {
  const prefix = themeId.split('-')[0];
  const candidates = {
    tokens: [`${prefix}-tokens.css`, 'tokens.css'],
    overridesExt: [`${prefix}-overrides-ext.css`, 'overrides-ext.css'],
    overrides: [`${prefix}-overrides.css`, 'overrides.css'],
    utilities: [`${prefix}-utilities.css`, 'utilities.css'],
    decorations: [`${prefix}-decorations.css`, 'decorations.css'],
  };

  function pick(key) {
    for (const name of candidates[key]) {
      const content = readIfExists(path.join(themeDir, name));
      if (content) return content;
    }
    return null;
  }

  const tokens = pick('tokens');
  const overridesExt = pick('overridesExt');
  const overrides = pick('overrides');
  const utilities = pick('utilities');
  const decorations = pick('decorations');

  if (!tokens && !overrides && !overridesExt && !utilities && !decorations) {
    return [];
  }

  const parts = [];
  if (tokens) parts.push(tokens);
  if (overridesExt) parts.push(overridesExt);
  if (overrides) parts.push(stripCssImports(overrides));
  if (utilities) parts.push(utilities);
  if (decorations) parts.push(inlineThemeSvgUrls(decorations, themeDir));
  return parts;
}

const themeDirs = fs
  .readdirSync(themesRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== 'animal-island')
  .map((entry) => entry.name)
  .sort();

const overlayParts = themeDirs.flatMap((themeId) => {
  const parts = overlayThemeCss(path.join(themesRoot, themeId), themeId);
  if (parts.length > 0) {
    console.log(`  + theme overlay: ${themeId} (${parts.length} css parts)`);
  }
  return parts;
});

fs.writeFileSync(
  styleCss,
  [fs.readFileSync(baseCss, 'utf8'), ...overlayParts].join('\n\n'),
);

console.log(`Wrote ${styleCss} (${(fs.statSync(styleCss).size / 1024).toFixed(1)} KB)`);
