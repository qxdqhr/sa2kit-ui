import { defineConfig } from 'vite';

/** GitHub Pages 项目站需带子路径，如 /sa2kit-ui/ */
const base = process.env.LADLE_BASE ?? '/';

export default defineConfig({
  base,
  server: {
    port: 61000,
  },
});
