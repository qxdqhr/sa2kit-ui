import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Title } from '@sa2kit-ui/react';
export default {
  title: 'Components / Title',
  meta: {
    description: '标题组件，多尺寸与 app 色板。',
  },
};

export const Sizes = () => (
  <DocPanel title="尺寸">
    <VariantStack>
      <Title size="small">Small Title</Title>
      <Title size="middle">Middle Title</Title>
      <Title size="large">Large Title</Title>
    </VariantStack>
  </DocPanel>
);
Sizes.storyName = '尺寸';

export const Colors = () => (
  <DocPanel title="颜色">
    <VariantStack>
      <Title color="app-teal">App Teal</Title>
      <Title color="app-orange">App Orange</Title>
      <Title color="app-pink">App Pink</Title>
    </VariantStack>
  </DocPanel>
);
Colors.storyName = '颜色';
