const plugin = require('tailwindcss/plugin');
const extras = require('./animal-plugin-extras');

/** 动森主题 — 组件样式见 animal-components.css（由 animal-island-ui Less 同步） */
module.exports = plugin(({ addUtilities, addComponents }) => {
  addUtilities({
    '.sa2-font': {
      fontFamily: 'var(--animal-font-family, var(--sa2-font))',
    },
  });
  addComponents(extras);
});

module.exports.postcss = true;
