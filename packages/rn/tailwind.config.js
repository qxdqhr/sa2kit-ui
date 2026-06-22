/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [
    require('@animal-island-components-sa2kit/tokens/tailwind.preset'),
    require('nativewind/preset'),
  ],
};
