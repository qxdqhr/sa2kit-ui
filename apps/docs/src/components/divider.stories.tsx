import { DocPanel } from '../_shared/DocPanel';
import { Divider } from '@sa2kit-ui/react';

export default {
  title: 'Components / Divider',
  meta: {
    description: '装饰分割线，多种 line / wave / dashed 样式。',
  },
};

export const Wave = () => (
  <DocPanel title="波浪分割">
    <Divider type="wave-yellow" />
  </DocPanel>
);
Wave.storyName = '波浪';

export const Dashed = () => (
  <DocPanel title="虚线分割">
    <Divider type="dashed-teal" />
  </DocPanel>
);
Dashed.storyName = '虚线';
