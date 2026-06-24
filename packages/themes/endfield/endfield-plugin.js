const plugin = require('tailwindcss/plugin');

/** 界园主题 — 扩展 Tailwind 工具类 */
module.exports = plugin(({ addUtilities }) => {
  addUtilities({
    '.ef-font-display': {
      fontFamily: 'var(--ef-font-display, "Noto Serif SC", serif)',
    },
    '.ef-font-body': {
      fontFamily: 'var(--ef-font-body, "Noto Sans SC", system-ui, sans-serif)',
    },
  });
});

module.exports.postcss = true;
