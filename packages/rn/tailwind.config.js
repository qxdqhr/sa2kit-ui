/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [
    require('@sa2kit-ui/tokens/tailwind.preset'),
    require('nativewind/preset'),
  ],
};
