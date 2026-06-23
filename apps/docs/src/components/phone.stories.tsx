import { DocPanel } from '../_shared/DocPanel';
import { Phone } from '@sa2kit-ui/react';

export default {
  title: 'Components / Phone',
  meta: {
    description: 'NookPhone 手机框装饰组件。',
  },
};

export const Basic = () => (
  <DocPanel title="手机框">
    <div className="overflow-x-auto">
      <Phone />
    </div>
  </DocPanel>
);
Basic.storyName = '基础';
