import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Button } from '@sa2kit-ui/react';
export default {
  title: 'Components / Button',
  meta: {
    description: '按钮用于触发即时操作。Primary 带 3D 厚阴影，Focus 描边为青绿色。',
  },
};

export const Types = () => (
  <>
    <DocPanel title="按钮类型" description="primary / default / dashed / text / link">
      <VariantGrid>
        <Button type="primary">Primary</Button>
        <Button type="default">Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
      </VariantGrid>
    </DocPanel>
    <SpecTable rows={[
      { prop: 'type', type: "'primary' | 'default' | 'dashed' | 'text' | 'link'", desc: '按钮类型' },
      { prop: 'size', type: "'small' | 'middle' | 'large'", desc: '尺寸' },
      { prop: 'danger', type: 'boolean', desc: '危险样式' },
      { prop: 'loading', type: 'boolean', desc: '加载条纹动画' },
    ]} />
  </>
);
Types.storyName = '类型一览';

export const Sizes = () => (
  <DocPanel title="尺寸" description="small / middle / large">
    <VariantGrid>
      <Button type="primary" size="small">Small</Button>
      <Button type="primary" size="middle">Middle</Button>
      <Button type="primary" size="large">Large</Button>
    </VariantGrid>
  </DocPanel>
);
Sizes.storyName = '尺寸';

export const States = () => (
  <DocPanel title="状态" description="disabled / loading / danger / ghost / block">
    <VariantStack>
      <VariantGrid>
        <Button type="primary" disabled>Disabled</Button>
        <Button type="primary" loading>Loading</Button>
        <Button type="primary" danger>Danger</Button>
        <Button type="primary" ghost>Ghost</Button>
      </VariantGrid>
      <Button type="primary" block>Block Button</Button>
    </VariantStack>
  </DocPanel>
);
States.storyName = '状态';
