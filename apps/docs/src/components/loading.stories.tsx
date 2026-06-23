import { DocPanel } from '../_shared/DocPanel';
import { Loading } from '@sa2kit-ui/react';

export default {
  title: 'Components / Loading',
  meta: {
    description: '全屏加载遮罩，旋转圆环动画。',
  },
};

export const Basic = () => (
  <DocPanel title="加载指示" description="active 控制显示，此处固定为 true 便于预览">
    <div className="relative min-h-[120px]">
      <Loading active />
    </div>
  </DocPanel>
);
Basic.storyName = '基础';
