/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@sa2kit-ui/tokens/tailwind.preset'),
    require('@sa2kit-ui/theme-animal-island/tailwind.preset'),
  ],
  theme: {
    extend: {
      colors: {
        jy: {
          pink: {
            600: 'var(--ef-pink-600)',
            500: 'var(--ef-pink-500)',
            400: 'var(--ef-pink-400)',
            200: 'var(--ef-pink-200)',
          },
          mist: { 100: 'var(--ef-mist-100)' },
          rose: { 500: 'var(--ef-rose-500)', 400: 'var(--ef-rose-400)' },
          mint: { 400: 'var(--ef-mint-400)', 300: 'var(--ef-mint-300)' },
          pine: { 700: 'var(--ef-pine-700)', 600: 'var(--ef-pine-600)' },
          teal: { deep: 'var(--ef-teal-deep)', mid: 'var(--ef-teal-mid)' },
          gold: { DEFAULT: 'var(--ef-gold)', light: 'var(--ef-gold-light)' },
          danger: 'var(--ef-danger)',
          bg: 'var(--ef-bg)',
          surface: 'var(--ef-surface)',
          text: 'var(--ef-text)',
        },
      },
      borderRadius: {
        jy: 'var(--ef-radius-md)',
        'rl-sm': 'var(--ef-radius-sm)',
        'rl-lg': 'var(--ef-radius-lg)',
      },
      boxShadow: {
        'rl-sm': 'var(--ef-shadow-sm)',
        'rl-md': 'var(--ef-shadow-md)',
        'rl-pink': 'var(--ef-shadow-pink)',
        'rl-focus': 'var(--ef-shadow-focus)',
      },
      fontFamily: {
        'rl-display': ['var(--ef-font-display)'],
        'rl-body': ['var(--ef-font-body)'],
      },
    },
  },
  plugins: [require('./endfield-plugin')],
};
