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
            600: 'var(--sr-pink-600)',
            500: 'var(--sr-pink-500)',
            400: 'var(--sr-pink-400)',
            200: 'var(--sr-pink-200)',
          },
          mist: { 100: 'var(--sr-mist-100)' },
          rose: { 500: 'var(--sr-rose-500)', 400: 'var(--sr-rose-400)' },
          mint: { 400: 'var(--sr-mint-400)', 300: 'var(--sr-mint-300)' },
          pine: { 700: 'var(--sr-pine-700)', 600: 'var(--sr-pine-600)' },
          teal: { deep: 'var(--sr-teal-deep)', mid: 'var(--sr-teal-mid)' },
          gold: { DEFAULT: 'var(--sr-gold)', light: 'var(--sr-gold-light)' },
          danger: 'var(--sr-danger)',
          bg: 'var(--sr-bg)',
          surface: 'var(--sr-surface)',
          text: 'var(--sr-text)',
        },
      },
      borderRadius: {
        jy: 'var(--sr-radius-md)',
        'rl-sm': 'var(--sr-radius-sm)',
        'rl-lg': 'var(--sr-radius-lg)',
      },
      boxShadow: {
        'rl-sm': 'var(--sr-shadow-sm)',
        'rl-md': 'var(--sr-shadow-md)',
        'rl-pink': 'var(--sr-shadow-pink)',
        'rl-focus': 'var(--sr-shadow-focus)',
      },
      fontFamily: {
        'rl-display': ['var(--sr-font-display)'],
        'rl-body': ['var(--sr-font-body)'],
      },
    },
  },
  plugins: [require('./sami-roguelike-plugin')],
};
