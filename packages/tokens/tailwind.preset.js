/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        sa2: {
          primary: {
            DEFAULT: 'var(--sa2-primary)',
            hover: 'var(--sa2-primary-hover)',
            active: 'var(--sa2-primary-active)',
            bg: 'var(--sa2-primary-bg)',
          },
          text: {
            DEFAULT: 'var(--sa2-text)',
            body: 'var(--sa2-text-body)',
            secondary: 'var(--sa2-text-secondary)',
            muted: 'var(--sa2-text-muted)',
            disabled: 'var(--sa2-text-disabled)',
          },
          bg: {
            DEFAULT: 'var(--sa2-bg)',
            content: 'var(--sa2-bg-content)',
            secondary: 'var(--sa2-bg-secondary)',
            disabled: 'var(--sa2-bg-disabled)',
          },
          border: {
            DEFAULT: 'var(--sa2-border)',
            light: 'var(--sa2-border-light)',
            hover: 'var(--sa2-border-hover)',
          },
          success: { DEFAULT: 'var(--sa2-success)', active: 'var(--sa2-success-active)' },
          warning: { DEFAULT: 'var(--sa2-warning)', active: 'var(--sa2-warning-active)' },
          error: { DEFAULT: 'var(--sa2-error)', active: 'var(--sa2-error-active)' },
          focus: { DEFAULT: 'var(--sa2-focus)', dark: 'var(--sa2-focus-dark)' },
        },
      },
      borderRadius: {
        sa2: 'var(--sa2-radius)',
        'sa2-sm': 'var(--sa2-radius-sm)',
        'sa2-lg': 'var(--sa2-radius-lg)',
        pill: 'var(--sa2-radius-pill)',
      },
      boxShadow: {
        'sa2-sm': 'var(--sa2-shadow-sm)',
        'sa2-base': 'var(--sa2-shadow-base)',
        'sa2-lg': 'var(--sa2-shadow-lg)',
        'sa2-btn': '0 5px 0 0 var(--sa2-shadow-btn)',
        'sa2-input': '0 3px 0 0 var(--sa2-shadow-input)',
      },
      fontFamily: {
        sa2: ['var(--sa2-font)'],
      },
      keyframes: {
        'sa2-btn-loading': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-28.28px 0' },
        },
        'sa2-spin': {
          to: { transform: 'rotate(360deg)' },
        },
        'sa2-fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'sa2-zoom-in': {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'sa2-leaf-wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
        'sa2-tab-fade-in': {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'sa2-checkbox-pop': {
          '0%': { transform: 'scale(0.4)', opacity: '0' },
          '60%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'sa2-radio-pop': {
          '0%': { transform: 'scale(0.4)', opacity: '0' },
          '60%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'sa2-loading-dash': {
          '0%': { strokeDasharray: '1, 150', strokeDashoffset: '0' },
          '50%': { strokeDasharray: '90, 150', strokeDashoffset: '-35' },
          '100%': { strokeDasharray: '90, 150', strokeDashoffset: '-124' },
        },
        'sa2-time-blink': {
          '50%': { opacity: '0' },
        },
        'sa2-time-fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'sa2-icon-bounce': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.2) rotate(-5deg)' },
          '100%': { transform: 'scale(1.1) rotate(-4deg)' },
        },
        'sa2-grasswave': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '0% 100%' },
        },
        'sa2-phone-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'sa2-phone-icon-bounce': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.2) rotate(-5deg)' },
          '100%': { transform: 'scale(1.1) rotate(-4deg)' },
        },
        'sa2-phone-icon-bounce-offset': {
          '0%': { transform: 'scale(1) rotate(0deg) translateY(15px)' },
          '50%': { transform: 'scale(1.2) rotate(-5deg) translateY(15px)' },
          '100%': { transform: 'scale(1.1) rotate(-4deg) translateY(15px)' },
        },
        'sa2-wallet-bag-bounce': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0) rotate(0deg)' },
          '35%': { transform: 'translateX(-50%) translateY(-8px) rotate(-6deg)' },
          '70%': { transform: 'translateX(-50%) translateY(-2px) rotate(3deg)' },
        },
        /* 兼容旧动画名 */
        'sa2-btn-loading': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-28.28px 0' },
        },
        'sa2-spin': { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        'sa2-btn-loading': 'sa2-btn-loading 1s linear infinite',
        'sa2-spin': 'sa2-spin 0.6s linear infinite',
        'sa2-btn-loading': 'sa2-btn-loading 1s linear infinite',
        'sa2-spin': 'sa2-spin 0.6s linear infinite',
      },
      transitionTimingFunction: {
        sa2: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
