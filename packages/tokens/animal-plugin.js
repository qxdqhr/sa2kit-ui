const plugin = require('tailwindcss/plugin');
const batch2Components = require('./animal-plugin-batch2');
const batch3Components = require('./animal-plugin-batch3');
const batch4Components = require('./animal-plugin-batch4');
const batch5Components = require('./animal-plugin-batch5');
const batch6Components = require('./animal-plugin-batch6');

/** Animal Island UI — 从 animal-island-ui Less 模块移植的 @layer components */
module.exports = plugin(({ addComponents, addUtilities, theme }) => {
  const fontStack = () => {
    const family = theme('fontFamily.animal');
    return Array.isArray(family) ? family.join(', ') : family;
  };

  addUtilities({
    '.ai-font': {
      fontFamily: fontStack(),
    },
  });

  addComponents({
    /* ========== Button ========== */
    '.ai-btn': {
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
      boxShadow: theme('boxShadow.animal-sm'),
      '&:focus-visible': {
        outline: '2px solid #19c8b9',
        outlineOffset: '2px',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: '0.5',
        boxShadow: 'none',
      },
    },
    '.ai-btn-sm': {
      height: '32px',
      padding: '0 16px',
      fontSize: '12px',
      borderRadius: '12px',
    },
    '.ai-btn-md': {
      height: '45px',
      padding: '0 20px',
      fontSize: '14px',
    },
    '.ai-btn-lg': {
      height: '48px',
      padding: '0 32px',
      fontSize: '16px',
      borderRadius: '24px',
    },
    '.ai-btn-default': {
      color: '#794f27',
      backgroundColor: '#f8f8f0',
      borderColor: '#9f927d',
      '&:hover:not(:disabled)': {
        color: '#19c8b9',
        borderColor: '#19c8b9',
        boxShadow: theme('boxShadow.animal-base'),
        transform: 'translateY(-1px)',
      },
      '&:active:not(:disabled)': {
        color: '#11a89b',
        borderColor: '#11a89b',
        transform: 'translateY(0)',
        boxShadow: theme('boxShadow.animal-sm'),
      },
    },
    '.ai-btn-primary': {
      color: '#794f27',
      backgroundColor: '#f8f8f0',
      borderColor: '#f8f8f0',
      boxShadow: '0 5px 0 0 #bdaea0',
      '&:hover:not(:disabled)': {
        transform: 'translateY(-1px)',
        boxShadow: '0 6px 0 0 #bdaea0',
      },
      '&:active:not(:disabled)': {
        transform: 'translateY(2px)',
        boxShadow: '0 1px 0 0 #bdaea0',
      },
    },
    '.ai-btn-dashed': {
      color: '#794f27',
      backgroundColor: '#f8f8f0',
      borderColor: '#9f927d',
      borderStyle: 'dashed',
      '&:hover:not(:disabled)': {
        color: '#19c8b9',
        borderColor: '#19c8b9',
        transform: 'translateY(-1px)',
      },
      '&:active:not(:disabled)': {
        color: '#11a89b',
        borderColor: '#11a89b',
        transform: 'translateY(0)',
      },
    },
    '.ai-btn-text': {
      color: '#794f27',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
      '&:hover:not(:disabled)': { backgroundColor: '#f0e8d8' },
    },
    '.ai-btn-link': {
      color: '#19c8b9',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
      '&:hover:not(:disabled)': { color: '#3dd4c6', opacity: '0.85' },
      '&:active:not(:disabled)': { color: '#11a89b' },
    },
    '.ai-btn-danger.ai-btn-primary': {
      color: '#fff',
      backgroundColor: '#e05a5a',
      borderColor: '#e05a5a',
      boxShadow: '0 5px 0 0 #c94444',
      '&:hover:not(:disabled)': {
        backgroundColor: '#e87878',
        borderColor: '#e87878',
        boxShadow: '0 6px 0 0 #c94444',
      },
      '&:active:not(:disabled)': {
        backgroundColor: '#c94444',
        borderColor: '#c94444',
        boxShadow: '0 1px 0 0 #c94444',
      },
    },
    '.ai-btn-block': { display: 'flex', width: '100%' },
    '.ai-btn-loading': {
      cursor: 'default',
      pointerEvents: 'none',
      boxShadow: 'none',
      backgroundColor: '#0ec4b6',
      border: '4px solid #4de2da',
      color: '#fff',
      backgroundImage:
        'repeating-linear-gradient(-45deg, #0ec4b6, #0ec4b6 10px, #01b0a7 10px, #01b0a7 20px)',
      backgroundSize: '28.28px 28.28px',
      animation: 'ai-btn-loading 1s linear infinite',
    },

    /* ========== Input wrapper ========== */
    '.ai-input-wrap': {
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'rgb(247, 243, 223)',
      border: '2px solid #c4b89e',
      borderRadius: '50px',
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 3px 0 0 #d4c9b4',
      '&:hover:not(.ai-input-disabled)': {
        borderColor: '#a89878',
        boxShadow: '0 3px 0 0 #c4b89e',
      },
      '&:focus-within:not(.ai-input-disabled)': {
        borderColor: '#ffcc00',
        boxShadow: '0 3px 0 0 #e0b800, 0 0 0 3px rgba(255, 204, 0, 0.15)',
      },
    },
    '.ai-input-wrap-sm': {
      height: '32px',
      padding: '0 14px',
      fontSize: '12px',
      borderRadius: '40px',
      boxShadow: '0 2px 0 0 #d4c9b4',
    },
    '.ai-input-wrap-md': { height: '40px', padding: '0 18px', fontSize: '14px' },
    '.ai-input-wrap-lg': {
      height: '48px',
      padding: '0 22px',
      fontSize: '16px',
      borderWidth: '3px',
      boxShadow: '0 4px 0 0 #d4c9b4',
    },
    '.ai-input-no-shadow': {
      boxShadow: 'none',
      '&:hover:not(.ai-input-disabled)': { boxShadow: 'none' },
    },
    '.ai-input-disabled': {
      backgroundColor: '#ece8dc',
      borderColor: '#d4c9b4',
      boxShadow: 'none',
      opacity: '0.6',
      cursor: 'not-allowed',
    },
    '.ai-input-error': {
      borderColor: '#e05a5a',
      boxShadow: '0 3px 0 0 #c94444',
    },
    '.ai-input-warning': {
      borderColor: '#f5c31c',
      boxShadow: '0 3px 0 0 #dba90e',
    },
    '.ai-input-field': {
      flex: '1',
      width: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: '#725d42',
      fontSize: 'inherit',
      fontFamily: fontStack(),
      fontWeight: '500',
      letterSpacing: '0.01em',
      '&::placeholder': { color: '#c4b89e', fontWeight: '400' },
    },
    '.ai-input-affix': {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#a0936e',
      flexShrink: '0',
    },
    '.ai-input-clear': {
      marginLeft: '4px',
      width: '20px',
      height: '20px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#c4b89e',
      fontSize: '13px',
      fontWeight: '700',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.15s',
      '&:hover': { color: '#725d42', backgroundColor: 'rgba(114, 93, 66, 0.1)' },
    },

    /* ========== Switch ========== */
    '.ai-switch': {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      minWidth: '52px',
      height: '28px',
      padding: '0',
      backgroundColor: '#d4c9b4',
      border: '2.5px solid #c4b89e',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      outline: 'none',
      boxShadow: 'inset 0 2px 4px rgba(114, 93, 66, 0.15)',
      '&:focus-visible': { outline: '2px solid #ffcc00', outlineOffset: '2px' },
    },
    '.ai-switch-checked': {
      backgroundColor: '#86d67a',
      borderColor: '#6fba2c',
      boxShadow: 'inset 0 2px 4px rgba(90, 158, 30, 0.2)',
    },
    '.ai-switch-sm': {
      minWidth: '38px',
      height: '20px',
    },
    '.ai-switch-disabled': { cursor: 'not-allowed', opacity: '0.5' },
    '.ai-switch-handle': {
      position: 'absolute',
      top: '50%',
      left: '2px',
      width: '21px',
      height: '21px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgb(247, 243, 223)',
      border: '2.5px solid #bdaea0',
      borderRadius: '50%',
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.ai-switch-checked .ai-switch-handle': {
      left: 'calc(100% - 24px)',
      borderColor: '#5a9e1e',
    },
    '.ai-switch-sm .ai-switch-handle': {
      width: '14px',
      height: '14px',
      left: '1px',
    },
    '.ai-switch-sm.ai-switch-checked .ai-switch-handle': {
      left: 'calc(100% - 16px)',
    },
    '.ai-switch-loading': {
      width: '11px',
      height: '11px',
      border: '2px solid #6fba2c',
      borderRightColor: 'transparent',
      borderRadius: '50%',
      animation: 'ai-spin 0.6s linear infinite',
    },

    /* ========== Card ========== */
    '.ai-card': {
      borderRadius: '20px',
      backgroundColor: 'rgb(247, 243, 223)',
      padding: '16px 24px',
      color: '#725d42',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      '&:hover': { transform: 'translateY(-2px)' },
    },
    '.ai-card-dashed': {
      backgroundColor: 'rgb(250, 248, 242)',
      border: '2px dashed #e8dcc8',
      boxShadow: 'none',
      '&:hover': { transform: 'none', borderColor: '#d4c4a8' },
    },
    '.ai-card-app-pink': { backgroundColor: '#f8a6b2', color: '#fff' },
    '.ai-card-purple': { backgroundColor: '#b77dee', color: '#fff' },
    '.ai-card-app-blue': { backgroundColor: '#889df0', color: '#fff' },
    '.ai-card-app-yellow': { backgroundColor: '#f7cd67', color: '#725d42' },
    '.ai-card-app-orange': { backgroundColor: '#e59266', color: '#fff' },
    '.ai-card-app-teal': { backgroundColor: '#82d5bb', color: '#fff' },
    '.ai-card-app-green': { backgroundColor: '#8ac68a', color: '#fff' },
    '.ai-card-app-red': { backgroundColor: '#fc736d', color: '#fff' },
    '.ai-card-lime-green': { backgroundColor: '#d1da49', color: '#3d5a1a' },
    '.ai-card-yellow-green': { backgroundColor: '#ecdf52', color: '#725d42' },
    '.ai-card-brown': { backgroundColor: '#9a835a', color: '#fff' },
    '.ai-card-warm-peach-pink': { backgroundColor: '#e18c6f', color: '#fff' },

    ...batch2Components,
    ...batch3Components,
    ...batch4Components,
    ...batch5Components,
    ...batch6Components,
  });
});

module.exports.postcss = true;
