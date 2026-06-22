/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    '../../packages/taro/src/**/*.{ts,tsx}',
  ],
  presets: [require('@animal-island-components-sa2kit/tokens/tailwind.preset')],
};
