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
            600: 'var(--mr-pink-600)',
            500: 'var(--mr-pink-500)',
            400: 'var(--mr-pink-400)',
            200: 'var(--mr-pink-200)',
          },
          mist: { 100: 'var(--mr-mist-100)' },
          rose: { 500: 'var(--mr-rose-500)', 400: 'var(--mr-rose-400)' },
          mint: { 400: 'var(--mr-mint-400)', 300: 'var(--mr-mint-300)' },
          pine: { 700: 'var(--mr-pine-700)', 600: 'var(--mr-pine-600)' },
          teal: { deep: 'var(--mr-teal-deep)', mid: 'var(--mr-teal-mid)' },
          gold: { DEFAULT: 'var(--mr-gold)', light: 'var(--mr-gold-light)' },
          danger: 'var(--mr-danger)',
          bg: 'var(--mr-bg)',
          surface: 'var(--mr-surface)',
          text: 'var(--mr-text)',
        },
      },
      borderRadius: {
        jy: 'var(--mr-radius-md)',
        'rl-sm': 'var(--mr-radius-sm)',
        'rl-lg': 'var(--mr-radius-lg)',
      },
      boxShadow: {
        'rl-sm': 'var(--mr-shadow-sm)',
        'rl-md': 'var(--mr-shadow-md)',
        'rl-pink': 'var(--mr-shadow-pink)',
        'rl-focus': 'var(--mr-shadow-focus)',
      },
      fontFamily: {
        'rl-display': ['var(--mr-font-display)'],
        'rl-body': ['var(--mr-font-body)'],
      },
    },
  },
  plugins: [require('./mizuki-roguelike-plugin')],
};
