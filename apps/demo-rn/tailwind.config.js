/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    '../../packages/rn/src/**/*.{ts,tsx}',
  ],
  presets: [
    require('@animal-island-components-sa2kit/tokens/tailwind.preset'),
    require('nativewind/preset'),
  ],
};
