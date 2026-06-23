/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    '../../packages/taro/src/**/*.{ts,tsx}',
  ],
  presets: [require('@sa2kit-ui/theme-animal-island/tailwind.preset')],
};
