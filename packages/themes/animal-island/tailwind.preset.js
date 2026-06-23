/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@sa2kit-ui/tokens/tailwind.preset')],
  plugins: [require('./animal-plugin')],
};
