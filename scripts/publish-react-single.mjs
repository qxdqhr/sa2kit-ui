import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const reactDir = path.join(root, 'packages/react');
const publishName = '@qhr123/sa2kit-ui-react';

execSync('pnpm --filter @sa2kit-ui/react build', { cwd: root, stdio: 'inherit' });

const tmp = fs.mkdtempSync(path.join('/tmp', 'sa2kit-react-publish-'));
execSync(`cp -a ${JSON.stringify(reactDir + '/dist')} ${JSON.stringify(tmp + '/dist')}`);

const pkg = JSON.parse(fs.readFileSync(path.join(reactDir, 'package.json'), 'utf8'));
const published = {
  name: publishName,
  version: pkg.version,
  description: pkg.description,
  license: pkg.license,
  type: pkg.type,
  main: pkg.main,
  module: pkg.module,
  types: pkg.types,
  exports: pkg.exports,
  files: pkg.files,
  sideEffects: pkg.sideEffects,
  peerDependencies: pkg.peerDependencies,
  dependencies: {
    clsx: '^2.1.1',
    'tailwind-merge': '^2.6.0',
    '@fontsource/noto-sans-sc': '^5.2.9',
    '@fontsource/nunito': '^5.2.7',
    'modern-screenshot': '^4.7.0',
  },
};

fs.writeFileSync(path.join(tmp, 'package.json'), JSON.stringify(published, null, 2) + '\n');

console.log(`\n=== Publishing ${publishName}@${published.version} ===`);
execSync('npm publish --access public', { cwd: tmp, stdio: 'inherit' });
fs.rmSync(tmp, { recursive: true, force: true });
console.log('\nDone.');
