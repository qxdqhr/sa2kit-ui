import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron/simple';

export default defineConfig({
  plugins: [
    react(),
    electron({
      main: {
        entry: path.resolve(__dirname, 'electron/main.ts'),
      },
    }),
  ],
  resolve: {
    alias: {
      '@showcase': path.resolve(__dirname, '../demo-web/src/Showcase.tsx'),
    },
  },
  base: './',
});
