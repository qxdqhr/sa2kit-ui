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
            600: 'var(--jy-pink-600)',
            500: 'var(--jy-pink-500)',
            400: 'var(--jy-pink-400)',
            200: 'var(--jy-pink-200)',
          },
          mist: { 100: 'var(--jy-mist-100)' },
          rose: { 500: 'var(--jy-rose-500)', 400: 'var(--jy-rose-400)' },
          mint: { 400: 'var(--jy-mint-400)', 300: 'var(--jy-mint-300)' },
          pine: { 700: 'var(--jy-pine-700)', 600: 'var(--jy-pine-600)' },
          teal: { deep: 'var(--jy-teal-deep)', mid: 'var(--jy-teal-mid)' },
          gold: { DEFAULT: 'var(--jy-gold)', light: 'var(--jy-gold-light)' },
          danger: 'var(--jy-danger)',
          bg: 'var(--jy-bg)',
          surface: 'var(--jy-surface)',
          text: 'var(--jy-text)',
        },
      },
      borderRadius: {
        jy: 'var(--jy-radius-md)',
        'jy-sm': 'var(--jy-radius-sm)',
        'jy-lg': 'var(--jy-radius-lg)',
      },
      boxShadow: {
        'jy-sm': 'var(--jy-shadow-sm)',
        'jy-md': 'var(--jy-shadow-md)',
        'jy-pink': 'var(--jy-shadow-pink)',
        'jy-focus': 'var(--jy-shadow-focus)',
      },
      fontFamily: {
        'jy-display': ['var(--jy-font-display)'],
        'jy-body': ['var(--jy-font-body)'],
      },
    },
  },
  plugins: [require('./jieyuan-plugin')],
};
