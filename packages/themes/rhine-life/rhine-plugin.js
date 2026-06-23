const plugin = require('tailwindcss/plugin');

/** 界园主题 — 扩展 Tailwind 工具类 */
module.exports = plugin(({ addUtilities }) => {
  addUtilities({
    '.rl-font-display': {
      fontFamily: 'var(--rl-font-display, "Noto Serif SC", serif)',
    },
    '.rl-font-body': {
      fontFamily: 'var(--rl-font-body, "Noto Sans SC", system-ui, sans-serif)',
    },
  });
});

module.exports.postcss = true;
