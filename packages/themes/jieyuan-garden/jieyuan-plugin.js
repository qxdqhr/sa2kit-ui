const plugin = require('tailwindcss/plugin');

/** 界园主题 — 扩展 Tailwind 工具类 */
module.exports = plugin(({ addUtilities }) => {
  addUtilities({
    '.jy-font-display': {
      fontFamily: 'var(--jy-font-display, "Noto Serif SC", serif)',
    },
    '.jy-font-body': {
      fontFamily: 'var(--jy-font-body, "Noto Sans SC", system-ui, sans-serif)',
    },
  });
});

module.exports.postcss = true;
