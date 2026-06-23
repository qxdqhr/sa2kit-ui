#!/usr/bin/env node
/** 将 story 文件中的 meta() 调用替换为 Ladle 可解析的静态 export default */
import fs from 'node:fs';
import path from 'node:path';

const dir = new URL('../apps/docs/src/components/', import.meta.url).pathname;
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.stories.tsx'));

for (const file of files) {
  const fp = path.join(dir, file);
  let src = fs.readFileSync(fp, 'utf8');
  src = src.replace(
    /import \{ meta \} from '\.\.\/_shared\/storyMeta';\n\nexport default meta\('([^']+)', '([^']*)'\);/,
    "export default {\n  title: 'Components / $1',\n  meta: {\n    description: '$2',\n  },\n};",
  );
  fs.writeFileSync(fp, src);
  console.log('fixed', file);
}
