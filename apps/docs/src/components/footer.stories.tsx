import { DocPanel, VariantStack } from '../_shared/DocPanel';
import { Footer } from '@sa2kit-ui/react';

export default {
  title: 'Components / Footer',
  meta: {
    description: '页脚装饰条，type 为 sea 或 tree。',
  },
};

export const Types = () => (
  <DocPanel title="类型">
    <VariantStack>
      <Footer type="tree" />
      <Footer type="sea" />
    </VariantStack>
  </DocPanel>
);
Types.storyName = '类型';
