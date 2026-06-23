/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    '../../packages/rn/src/**/*.{ts,tsx}',
  ],
  presets: [
    require('@sa2kit-ui/theme-animal-island/tailwind.preset'),
    require('nativewind/preset'),
  ],
};
