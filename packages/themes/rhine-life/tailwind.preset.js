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
            600: 'var(--rl-pink-600)',
            500: 'var(--rl-pink-500)',
            400: 'var(--rl-pink-400)',
            200: 'var(--rl-pink-200)',
          },
          mist: { 100: 'var(--rl-mist-100)' },
          rose: { 500: 'var(--rl-rose-500)', 400: 'var(--rl-rose-400)' },
          mint: { 400: 'var(--rl-mint-400)', 300: 'var(--rl-mint-300)' },
          pine: { 700: 'var(--rl-pine-700)', 600: 'var(--rl-pine-600)' },
          teal: { deep: 'var(--rl-teal-deep)', mid: 'var(--rl-teal-mid)' },
          gold: { DEFAULT: 'var(--rl-gold)', light: 'var(--rl-gold-light)' },
          danger: 'var(--rl-danger)',
          bg: 'var(--rl-bg)',
          surface: 'var(--rl-surface)',
          text: 'var(--rl-text)',
        },
      },
      borderRadius: {
        jy: 'var(--rl-radius-md)',
        'rl-sm': 'var(--rl-radius-sm)',
        'rl-lg': 'var(--rl-radius-lg)',
      },
      boxShadow: {
        'rl-sm': 'var(--rl-shadow-sm)',
        'rl-md': 'var(--rl-shadow-md)',
        'rl-pink': 'var(--rl-shadow-pink)',
        'rl-focus': 'var(--rl-shadow-focus)',
      },
      fontFamily: {
        'rl-display': ['var(--rl-font-display)'],
        'rl-body': ['var(--rl-font-body)'],
      },
    },
  },
  plugins: [require('./rhine-plugin')],
};
