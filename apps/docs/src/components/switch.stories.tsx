import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Switch } from '@sa2kit-ui/react';
export default {
  title: 'Components / Switch',
  meta: {
    description: '开关组件，圆角滑块 + 内阴影轨道。',
  },
};

export const Basic = () => {
  const [on, setOn] = useState(true);
  return (
    <DocPanel title="受控开关" description="checked + onChange">
      <Switch checked={on} onChange={setOn} />
    </DocPanel>
  );
};
Basic.storyName = '基础';

export const Sizes = () => (
  <DocPanel title="尺寸">
    <VariantGrid>
      <Switch defaultChecked size="small" />
      <Switch defaultChecked size="default" />
    </VariantGrid>
  </DocPanel>
);
Sizes.storyName = '尺寸';
