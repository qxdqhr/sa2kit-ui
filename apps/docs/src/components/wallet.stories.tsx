import { DocPanel, VariantGrid } from '../_shared/DocPanel';
import { Wallet } from '@sa2kit-ui/react';

export default {
  title: 'Components / Wallet',
  meta: {
    description: '钱包 / 余额展示，value 支持数字千分位或字符串。',
  },
};

export const Sizes = () => (
  <DocPanel title="尺寸">
    <VariantGrid>
      <Wallet value={1200} size="small" />
      <Wallet value={99999} />
      <Wallet value={1234567} size="large" />
    </VariantGrid>
  </DocPanel>
);
Sizes.storyName = '尺寸';
