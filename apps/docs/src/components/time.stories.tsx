import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Time } from '@sa2kit-ui/react';
export default {
  title: 'Components / Time',
  meta: {
    description: '实时时钟（Nook 风格）。',
  },
};

export const Basic = () => (
  <DocPanel title="当前时间">
    <Time />
  </DocPanel>
);
Basic.storyName = '基础';
