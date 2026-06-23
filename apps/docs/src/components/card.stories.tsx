import { DocPanel } from '../_shared/DocPanel';
import { Card, Title } from '@sa2kit-ui/react';

export default {
  title: 'Components / Card',
  meta: {
    description: '内容卡片容器，支持 type 与 NookPhone 色板 color。',
  },
};

const colors = [
  'app-pink',
  'app-blue',
  'app-yellow',
  'app-teal',
  'app-orange',
  'app-green',
] as const;

export const Default = () => (
  <DocPanel title="默认卡片">
    <Card>
      <Title size="small">欢迎来到无人岛</Title>
      <p className="mt-2 text-sa2-text-secondary">今天也要收集素材～</p>
    </Card>
  </DocPanel>
);
Default.storyName = '默认';

export const Colors = () => (
  <DocPanel title="色板" description="color 属性对应动森 App 配色">
    <div className="grid gap-3 sm:grid-cols-2">
      {colors.map((color) => (
        <Card key={color} color={color}>
          <span className="font-semibold">{color}</span>
        </Card>
      ))}
    </div>
  </DocPanel>
);
Colors.storyName = '色板';
