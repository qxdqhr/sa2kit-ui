const plugin = require('tailwindcss/plugin');
const batch2Components = require('./animal-plugin-batch2');
const batch3Components = require('./animal-plugin-batch3');
const batch4Components = require('./animal-plugin-batch4');
const batch5Components = require('./animal-plugin-batch5');
const batch6Components = require('./animal-plugin-batch6');

/** Animal Island UI — 从 animal-island-ui Less 模块移植的 @layer components */
module.exports = plugin(({ addComponents, addUtilities, theme }) => {
  const fontStack = () => {
    const family = theme('fontFamily.sa2');
    return Array.isArray(family) ? family.join(', ') : family;
  };

  addUtilities({
    '.sa2-font': {
      fontFamily: fontStack(),
    },
  });

  addComponents({
    /* ========== Button ========== */
    '.sa2-btn': {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontFamily: fontStack(),
      fontWeight: '600',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRadius: '50px',
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      userSelect: 'none',
      outline: 'none',
      lineHeight: '1',
      letterSpacing: '0.02em',
      boxShadow: theme('boxShadow.sa2-sm'),
      '&:focus-visible': {
        outline: '2px solid var(--sa2-primary)',
        outlineOffset: '2px',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: '0.5',
        boxShadow: 'none',
      },
    },
    '.sa2-btn-sm': {
      height: '32px',
      padding: '0 16px',
      fontSize: '12px',
      borderRadius: '12px',
    },
    '.sa2-btn-md': {
      height: '45px',
      padding: '0 20px',
      fontSize: '14px',
    },
    '.sa2-btn-lg': {
      height: '48px',
      padding: '0 32px',
      fontSize: '16px',
      borderRadius: '24px',
    },
    '.sa2-btn-default': {
      color: 'var(--sa2-text)',
      backgroundColor: 'var(--sa2-bg)',
      borderColor: 'var(--sa2-text-secondary)',
      '&:hover:not(:disabled)': {
        color: 'var(--sa2-primary)',
        borderColor: 'var(--sa2-primary)',
        boxShadow: theme('boxShadow.sa2-base'),
        transform: 'translateY(-1px)',
      },
      '&:active:not(:disabled)': {
        color: 'var(--sa2-primary-active)',
        borderColor: 'var(--sa2-primary-active)',
        transform: 'translateY(0)',
        boxShadow: theme('boxShadow.sa2-sm'),
      },
    },
    '.sa2-btn-primary': {
      color: 'var(--sa2-text)',
      backgroundColor: 'var(--sa2-bg)',
      borderColor: 'var(--sa2-bg)',
      boxShadow: '0 5px 0 0 var(--sa2-border-handle)',
      '&:hover:not(:disabled)': {
        transform: 'translateY(-1px)',
        boxShadow: '0 6px 0 0 var(--sa2-border-handle)',
      },
      '&:active:not(:disabled)': {
        transform: 'translateY(2px)',
        boxShadow: '0 1px 0 0 var(--sa2-border-handle)',
      },
    },
    '.sa2-btn-dashed': {
      color: 'var(--sa2-text)',
      backgroundColor: 'var(--sa2-bg)',
      borderColor: 'var(--sa2-text-secondary)',
      borderStyle: 'dashed',
      '&:hover:not(:disabled)': {
        color: 'var(--sa2-primary)',
        borderColor: 'var(--sa2-primary)',
        transform: 'translateY(-1px)',
      },
      '&:active:not(:disabled)': {
        color: 'var(--sa2-primary-active)',
        borderColor: 'var(--sa2-primary-active)',
        transform: 'translateY(0)',
      },
    },
    '.sa2-btn-text': {
      color: 'var(--sa2-text)',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
      '&:hover:not(:disabled)': { backgroundColor: 'var(--sa2-bg-secondary)' },
    },
    '.sa2-btn-link': {
      color: 'var(--sa2-primary)',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
      '&:hover:not(:disabled)': { color: 'var(--sa2-primary-hover)', opacity: '0.85' },
      '&:active:not(:disabled)': { color: 'var(--sa2-primary-active)' },
    },
    '.sa2-btn-danger.sa2-btn-primary': {
      color: '#fff',
      backgroundColor: 'var(--sa2-error)',
      borderColor: 'var(--sa2-error)',
      boxShadow: '0 5px 0 0 var(--sa2-error-active)',
      '&:hover:not(:disabled)': {
        backgroundColor: 'var(--sa2-error-hover)',
        borderColor: 'var(--sa2-error-hover)',
        boxShadow: '0 6px 0 0 var(--sa2-error-active)',
      },
      '&:active:not(:disabled)': {
        backgroundColor: 'var(--sa2-error-active)',
        borderColor: 'var(--sa2-error-active)',
        boxShadow: '0 1px 0 0 var(--sa2-error-active)',
      },
    },
    '.sa2-btn-block': { display: 'flex', width: '100%' },
    '.sa2-btn-loading': {
      cursor: 'default',
      pointerEvents: 'none',
      boxShadow: 'none',
      backgroundColor: 'var(--sa2-btn-loading-bg)',
      border: '4px solid var(--sa2-btn-loading-border)',
      color: '#fff',
      backgroundImage:
        'repeating-linear-gradient(-45deg, var(--sa2-btn-loading-bg), var(--sa2-btn-loading-bg) 10px, var(--sa2-btn-loading-stripe) 10px, var(--sa2-btn-loading-stripe) 20px)',
      backgroundSize: '28.28px 28.28px',
      animation: 'sa2-btn-loading 1s linear infinite',
    },

    /* ========== Input wrapper ========== */
    '.sa2-input-wrap': {
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'var(--sa2-bg-content)',
      border: '2px solid var(--sa2-border-light)',
      borderRadius: '50px',
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 3px 0 0 var(--sa2-shadow-input)',
      '&:hover:not(.sa2-input-disabled)': {
        borderColor: 'var(--sa2-border-hover)',
        boxShadow: '0 3px 0 0 var(--sa2-border-light)',
      },
      '&:focus-within:not(.sa2-input-disabled)': {
        borderColor: 'var(--sa2-focus)',
        boxShadow: '0 3px 0 0 var(--sa2-focus-dark), 0 0 0 3px rgba(255, 204, 0, 0.15)',
      },
    },
    '.sa2-input-wrap-sm': {
      height: '32px',
      padding: '0 14px',
      fontSize: '12px',
      borderRadius: '40px',
      boxShadow: '0 2px 0 0 var(--sa2-shadow-input)',
    },
    '.sa2-input-wrap-md': { height: '40px', padding: '0 18px', fontSize: '14px' },
    '.sa2-input-wrap-lg': {
      height: '48px',
      padding: '0 22px',
      fontSize: '16px',
      borderWidth: '3px',
      boxShadow: '0 4px 0 0 var(--sa2-shadow-input)',
    },
    '.sa2-input-no-shadow': {
      boxShadow: 'none',
      '&:hover:not(.sa2-input-disabled)': { boxShadow: 'none' },
    },
    '.sa2-input-disabled': {
      backgroundColor: 'var(--sa2-bg-disabled)',
      borderColor: 'var(--sa2-shadow-input)',
      boxShadow: 'none',
      opacity: '0.6',
      cursor: 'not-allowed',
    },
    '.sa2-input-error': {
      borderColor: 'var(--sa2-error)',
      boxShadow: '0 3px 0 0 var(--sa2-error-active)',
    },
    '.sa2-input-warning': {
      borderColor: 'var(--sa2-warning)',
      boxShadow: '0 3px 0 0 var(--sa2-warning-active)',
    },
    '.sa2-input-field': {
      flex: '1',
      width: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--sa2-text-body)',
      fontSize: 'inherit',
      fontFamily: fontStack(),
      fontWeight: '500',
      letterSpacing: '0.01em',
      '&::placeholder': { color: 'var(--sa2-border-light)', fontWeight: '400' },
    },
    '.sa2-input-affix': {
      display: 'inline-flex',
      alignItems: 'center',
      color: 'var(--sa2-text-affix)',
      flexShrink: '0',
    },
    '.sa2-input-clear': {
      marginLeft: '4px',
      width: '20px',
      height: '20px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sa2-border-light)',
      fontSize: '13px',
      fontWeight: '700',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.15s',
      '&:hover': { color: 'var(--sa2-text-body)', backgroundColor: 'rgba(114, 93, 66, 0.1)' },
    },

    /* ========== Switch ========== */
    '.sa2-switch': {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      minWidth: '52px',
      height: '28px',
      padding: '0',
      backgroundColor: 'var(--sa2-shadow-input)',
      border: '2.5px solid var(--sa2-border-light)',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      outline: 'none',
      boxShadow: 'inset 0 2px 4px rgba(114, 93, 66, 0.15)',
      '&:focus-visible': { outline: '2px solid var(--sa2-focus)', outlineOffset: '2px' },
    },
    '.sa2-switch-checked': {
      backgroundColor: 'var(--sa2-success-bg)',
      borderColor: 'var(--sa2-success)',
      boxShadow: 'inset 0 2px 4px rgba(90, 158, 30, 0.2)',
    },
    '.sa2-switch-sm': {
      minWidth: '38px',
      height: '20px',
    },
    '.sa2-switch-disabled': { cursor: 'not-allowed', opacity: '0.5' },
    '.sa2-switch-handle': {
      position: 'absolute',
      top: '50%',
      left: '2px',
      width: '21px',
      height: '21px',
      transform: 'translateY(-50%)',
      backgroundColor: 'var(--sa2-bg-content)',
      border: '2.5px solid var(--sa2-border-handle)',
      borderRadius: '50%',
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.sa2-switch-checked .sa2-switch-handle': {
      left: 'calc(100% - 24px)',
      borderColor: 'var(--sa2-success-active)',
    },
    '.sa2-switch-sm .sa2-switch-handle': {
      width: '14px',
      height: '14px',
      left: '1px',
    },
    '.sa2-switch-sm.sa2-switch-checked .sa2-switch-handle': {
      left: 'calc(100% - 16px)',
    },
    '.sa2-switch-loading': {
      width: '11px',
      height: '11px',
      border: '2px solid var(--sa2-success)',
      borderRightColor: 'transparent',
      borderRadius: '50%',
      animation: 'sa2-spin 0.6s linear infinite',
    },

    /* ========== Card ========== */
    '.sa2-card': {
      borderRadius: '20px',
      backgroundColor: 'var(--sa2-bg-content)',
      padding: '16px 24px',
      color: 'var(--sa2-text-body)',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      '&:hover': { transform: 'translateY(-2px)' },
    },
    '.sa2-card-dashed': {
      backgroundColor: 'var(--sa2-bg-card-alt)',
      border: '2px dashed var(--sa2-border-dashed)',
      boxShadow: 'none',
      '&:hover': { transform: 'none', borderColor: 'var(--sa2-border-dashed-hover)' },
    },
    '.sa2-card-app-pink': { backgroundColor: 'var(--sa2-card-pink)', color: '#fff' },
    '.sa2-card-purple': { backgroundColor: 'var(--sa2-card-purple)', color: '#fff' },
    '.sa2-card-app-blue': { backgroundColor: 'var(--sa2-card-blue)', color: '#fff' },
    '.sa2-card-app-yellow': { backgroundColor: 'var(--sa2-card-yellow)', color: 'var(--sa2-text-body)' },
    '.sa2-card-app-orange': { backgroundColor: 'var(--sa2-card-orange)', color: '#fff' },
    '.sa2-card-app-teal': { backgroundColor: 'var(--sa2-card-teal)', color: '#fff' },
    '.sa2-card-app-green': { backgroundColor: 'var(--sa2-card-green)', color: '#fff' },
    '.sa2-card-app-red': { backgroundColor: 'var(--sa2-card-red)', color: '#fff' },
    '.sa2-card-lime-green': { backgroundColor: 'var(--sa2-card-lime)', color: '#3d5a1a' },
    '.sa2-card-yellow-green': { backgroundColor: 'var(--sa2-card-yellow-green)', color: 'var(--sa2-text-body)' },
    '.sa2-card-brown': { backgroundColor: 'var(--sa2-card-brown)', color: '#fff' },
    '.sa2-card-warm-peach-pink': { backgroundColor: 'var(--sa2-card-peach)', color: '#fff' },

    ...batch2Components,
    ...batch3Components,
    ...batch4Components,
    ...batch5Components,
    ...batch6Components,
  });
});

module.exports.postcss = true;
