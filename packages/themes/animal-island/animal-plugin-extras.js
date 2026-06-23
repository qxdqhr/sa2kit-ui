/** Loading 旋转圈 + CodeBlock — sa2Kit 组件结构与 animal-island-ui 略有不同，保留手写样式 */
const batch3 = require('./animal-plugin-batch3');
const batch4 = require('./animal-plugin-batch4');

module.exports = {
  '.sa2-loading': batch3['.sa2-loading'],
  '.sa2-loading-spinner': batch3['.sa2-loading-spinner'],
  '.sa2-loading-track': batch3['.sa2-loading-track'],
  '.sa2-loading-dash': batch3['.sa2-loading-dash'],
  '.sa2-codeblock': batch4['.sa2-codeblock'],
  /* Footer sea 与 default 共用底栏尺寸 */
  '.sa2-footer-sea': {
    width: '100%',
    height: '80px',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
};
