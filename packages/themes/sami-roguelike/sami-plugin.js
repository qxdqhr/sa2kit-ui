const plugin = require('tailwindcss/plugin');

/** 界园主题 — 扩展 Tailwind 工具类 */
module.exports = plugin(({ addUtilities }) => {
  addUtilities({
    '.sr-font-display': {
      fontFamily: 'var(--sr-font-display, "Noto Serif SC", serif)',
    },
    '.sr-font-body': {
      fontFamily: 'var(--sr-font-body, "Noto Sans SC", system-ui, sans-serif)',
    },
  });
});

module.exports.postcss = true;
