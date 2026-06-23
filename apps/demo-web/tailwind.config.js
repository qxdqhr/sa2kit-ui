/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    '../../packages/react/src/**/*.{ts,tsx}',
  ],
  presets: [require('@sa2kit-ui/theme-animal-island/tailwind.preset')],
};
