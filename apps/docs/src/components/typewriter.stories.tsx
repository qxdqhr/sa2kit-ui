import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Typewriter } from '@sa2kit-ui/react';
export default {
  title: 'Components / Typewriter',
  meta: {
    description: '打字机逐字显示动画。',
  },
};

export const Basic = () => (
  <DocPanel title="打字效果" description="speed 控制每字间隔（ms）">
    <p className="text-sa2-text">
      <Typewriter speed={60}>今天也要在岛上度过美好的一天～</Typewriter>
    </p>
  </DocPanel>
);
Basic.storyName = '基础';
