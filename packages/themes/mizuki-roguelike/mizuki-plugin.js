const plugin = require('tailwindcss/plugin');

/** 界园主题 — 扩展 Tailwind 工具类 */
module.exports = plugin(({ addUtilities }) => {
  addUtilities({
    '.mr-font-display': {
      fontFamily: 'var(--mr-font-display, "Noto Serif SC", serif)',
    },
    '.mr-font-body': {
      fontFamily: 'var(--mr-font-body, "Noto Sans SC", system-ui, sans-serif)',
    },
  });
});

module.exports.postcss = true;
