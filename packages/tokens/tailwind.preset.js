/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        animal: {
          primary: {
            DEFAULT: '#19c8b9',
            hover: '#3dd4c6',
            active: '#11a89b',
            bg: '#e6f9f6',
          },
          text: {
            DEFAULT: '#794f27',
            body: '#725d42',
            secondary: '#9f927d',
            muted: '#8a7b66',
            disabled: '#c4b89e',
          },
          bg: {
            DEFAULT: '#f8f8f0',
            content: 'rgb(247, 243, 223)',
            secondary: '#f0e8d8',
            disabled: '#f0ece2',
          },
          border: {
            DEFAULT: '#9f927d',
            light: '#c4b89e',
            hover: '#a89878',
          },
          success: { DEFAULT: '#6fba2c', active: '#5a9e1e' },
          warning: { DEFAULT: '#f5c31c', active: '#dba90e' },
          error: { DEFAULT: '#e05a5a', active: '#c94444' },
          focus: { DEFAULT: '#ffcc00', dark: '#e0b800' },
        },
      },
      borderRadius: {
        animal: '18px',
        'animal-sm': '12px',
        'animal-lg': '24px',
        pill: '50px',
      },
      boxShadow: {
        'animal-sm': '0 2px 4px 0 rgba(61, 52, 40, 0.06)',
        'animal-base': '0 3px 10px 0 rgba(61, 52, 40, 0.10)',
        'animal-lg': '0 8px 24px 0 rgba(61, 52, 40, 0.14)',
        'animal-btn': '0 5px 0 0 #bdaea0',
        'animal-input': '0 3px 0 0 #d4c9b4',
      },
      fontFamily: {
        animal: [
          'Nunito',
          'Noto Sans SC',
          '-apple-system',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif',
        ],
      },
      keyframes: {
        'ai-btn-loading': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-28.28px 0' },
        },
        'ai-spin': {
          to: { transform: 'rotate(360deg)' },
        },
        'ai-fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'ai-zoom-in': {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'ai-leaf-wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
        'ai-tab-fade-in': {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'ai-checkbox-pop': {
          '0%': { transform: 'scale(0.4)', opacity: '0' },
          '60%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'ai-radio-pop': {
          '0%': { transform: 'scale(0.4)', opacity: '0' },
          '60%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'ai-loading-dash': {
          '0%': { strokeDasharray: '1, 150', strokeDashoffset: '0' },
          '50%': { strokeDasharray: '90, 150', strokeDashoffset: '-35' },
          '100%': { strokeDasharray: '90, 150', strokeDashoffset: '-124' },
        },
        'ai-time-blink': {
          '50%': { opacity: '0' },
        },
        'ai-time-fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'ai-icon-bounce': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.2) rotate(-5deg)' },
          '100%': { transform: 'scale(1.1) rotate(-4deg)' },
        },
        'ai-grasswave': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '0% 100%' },
        },
        'ai-phone-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'ai-phone-icon-bounce': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.2) rotate(-5deg)' },
          '100%': { transform: 'scale(1.1) rotate(-4deg)' },
        },
        'ai-phone-icon-bounce-offset': {
          '0%': { transform: 'scale(1) rotate(0deg) translateY(15px)' },
          '50%': { transform: 'scale(1.2) rotate(-5deg) translateY(15px)' },
          '100%': { transform: 'scale(1.1) rotate(-4deg) translateY(15px)' },
        },
        'ai-wallet-bag-bounce': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0) rotate(0deg)' },
          '35%': { transform: 'translateX(-50%) translateY(-8px) rotate(-6deg)' },
          '70%': { transform: 'translateX(-50%) translateY(-2px) rotate(3deg)' },
        },
      },
      animation: {
        'ai-btn-loading': 'ai-btn-loading 1s linear infinite',
        'ai-spin': 'ai-spin 0.6s linear infinite',
      },
      transitionTimingFunction: {
        animal: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require('./animal-plugin')],
};
