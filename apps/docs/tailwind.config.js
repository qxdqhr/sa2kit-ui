/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './.ladle/**/*.{ts,tsx}',
    '../../packages/react/src/**/*.{ts,tsx}',
  ],
  presets: [require('@sa2kit-ui/theme-animal-island/tailwind.preset')],
};
