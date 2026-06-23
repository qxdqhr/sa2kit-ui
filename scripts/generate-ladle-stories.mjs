#!/usr/bin/env node
/**
 * 生成 Ladle story 文件（24 组件）
 * 运行: node scripts/generate-ladle-stories.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const outDir = new URL('../apps/docs/src/components/', import.meta.url).pathname;
fs.mkdirSync(outDir, { recursive: true });

const header = `import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';
`;

function storyDefault(name, description) {
  return `export default {
  title: 'Components / ${name}',
  meta: {
    description: '${description.replace(/'/g, "\\'")}',
  },
};`;
}
  fs.writeFileSync(path.join(outDir, `${name}.stories.tsx`), content);
function write(name, content) {
  'button',
  `${header}
import { Button } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Button', '按钮用于触发即时操作。Primary 带 3D 厚阴影，Focus 描边为青绿色。');

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
`,
);

write(
  'input',
  `${header}
import { Input } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Input', '文本输入框。Focus 时黄色描边（--sa2-focus）。');

export const Basic = () => (
  <>
    <DocPanel title="基础用法" description="placeholder / disabled / 前后缀">
      <VariantStack>
        <Input placeholder="请输入岛民名字" />
        <Input placeholder="禁用" disabled />
        <Input prefix="🔍" placeholder="搜索物品" />
        <Input suffix="铃钱" placeholder="金额" />
      </VariantStack>
    </DocPanel>
    <SpecTable rows={[
      { prop: 'size', type: "'small' | 'middle' | 'large'", desc: '输入框尺寸' },
      { prop: 'prefix / suffix', type: 'ReactNode', desc: '前后缀装饰' },
    ]} />
  </>
);
Basic.storyName = '基础';

export const Sizes = () => (
  <DocPanel title="尺寸">
    <VariantStack>
      <Input size="small" placeholder="small" />
      <Input size="middle" placeholder="middle" />
      <Input size="large" placeholder="large" />
    </VariantStack>
  </DocPanel>
);
Sizes.storyName = '尺寸';
`,
);

write(
  'switch',
  `${header}
import { Switch } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Switch', '开关组件，圆角滑块 + 内阴影轨道。');

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
`,
);

write(
  'card',
  `${header}
import { Card, Title } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Card', '内容卡片容器，支持多种动森色板。');

const colors = ['pink', 'purple', 'blue', 'yellow', 'orange', 'teal', 'green'] as const;

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
  <DocPanel title="色板" description="type=inner + color 组合">
    <div className="grid gap-3 sm:grid-cols-2">
      {colors.map((color) => (
        <Card key={color} type="inner" color={color}>
          <span className="font-semibold capitalize">{color}</span>
        </Card>
      ))}
    </div>
  </DocPanel>
);
Colors.storyName = '色板';
`,
);

write(
  'modal',
  `${header}
import { Button, Modal, Title } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Modal', '模态对话框，遮罩 + 圆角内容区。');

export const Basic = () => {
  const [open, setOpen] = useState(false);
  return (
    <DocPanel title="打开/关闭" description="open + onClose">
      <Button type="primary" onClick={() => setOpen(true)}>打开 Modal</Button>
      <Modal open={open} title="Nook 购物" onClose={() => setOpen(false)}>
        <p>今日特价：大头菜 90 铃钱/个</p>
      </Modal>
    </DocPanel>
  );
};
Basic.storyName = '基础';
`,
);

write(
  'title',
  `${header}
import { Title } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Title', '标题组件，多尺寸与 app 色板。');

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
`,
);

write(
  'tabs',
  `${header}
import { Tabs } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Tabs', '选项卡，切换不同内容面板。');

const items = [
  { key: '1', label: '岛屿', children: <p>欢迎来到无人岛！</p> },
  { key: '2', label: '商店', children: <p>Nook 购物中…</p> },
  { key: '3', label: '博物馆', children: <p>捐赠化石与鱼类</p> },
];

export const Basic = () => (
  <DocPanel title="基础选项卡">
    <Tabs items={items} />
  </DocPanel>
);
Basic.storyName = '基础';
`,
);

write(
  'collapse',
  `${header}
import { Collapse } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Collapse', '折叠面板，可展开/收起。');

export const Basic = () => (
  <DocPanel title="折叠项">
    <Collapse
      items={[
        { key: '1', label: '今日任务', children: <p>收集 5 个木材</p> },
        { key: '2', label: '好友来访', children: <p>西施惠带来了信件</p> },
      ]}
    />
  </DocPanel>
);
Basic.storyName = '基础';
`,
);

write(
  'checkbox',
  `${header}
import { Checkbox } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Checkbox', '多选框组。');

const options = [
  { label: '鲈鱼', value: 'a' },
  { label: '鲷鱼', value: 'b' },
  { label: '金鱼', value: 'c' },
];

export const Basic = () => {
  const [value, setValue] = useState<Array<string | number>>(['a']);
  return (
    <DocPanel title="多选">
      <Checkbox options={options} value={value} onChange={setValue} />
    </DocPanel>
  );
};
Basic.storyName = '基础';
`,
);

write(
  'radio',
  `${header}
import { Radio } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Radio', '单选框组。');

const options = [
  { label: '北半球', value: '1' },
  { label: '南半球', value: '2' },
];

export const Basic = () => {
  const [value, setValue] = useState<string | number>('1');
  return (
    <DocPanel title="单选">
      <Radio options={options} value={value} onChange={setValue} />
    </DocPanel>
  );
};
Basic.storyName = '基础';
`,
);

write(
  'typewriter',
  `${header}
import { Typewriter } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Typewriter', '打字机逐字显示动画。');

export const Basic = () => (
  <DocPanel title="打字效果" description="speed 控制每字间隔（ms）">
    <p className="text-sa2-text">
      <Typewriter speed={60}>今天也要在岛上度过美好的一天～</Typewriter>
    </p>
  </DocPanel>
);
Basic.storyName = '基础';
`,
);

write(
  'tooltip',
  `${header}
import { Button, Tooltip } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Tooltip', '文字提示气泡。');

export const Placements = () => (
  <DocPanel title="方位" description="top / bottom / left / right">
    <VariantGrid>
      {(['top', 'bottom', 'left', 'right'] as const).map((p) => (
        <Tooltip key={p} title={\`placement=\${p}\`} placement={p}>
          <Button type="default">{p}</Button>
        </Tooltip>
      ))}
    </VariantGrid>
  </DocPanel>
);
Placements.storyName = '方位';
`,
);

write(
  'select',
  `${header}
import { Select } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Select', '下拉选择器。');

const options = [
  { label: '苹果', value: 'apple' },
  { label: '梨子', value: 'pear' },
  { label: '桃子', value: 'peach' },
];

export const Basic = () => {
  const [value, setValue] = useState('apple');
  return (
    <DocPanel title="选择水果">
      <Select options={options} value={value} onChange={setValue} placeholder="请选择" />
    </DocPanel>
  );
};
Basic.storyName = '基础';
`,
);

write(
  'loading',
  `${header}
import { Loading } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Loading', '加载指示器。');

export const Sizes = () => (
  <DocPanel title="尺寸">
    <VariantGrid>
      <Loading size="small" />
      <Loading size="default" />
      <Loading size="large" />
    </VariantGrid>
  </DocPanel>
);
Sizes.storyName = '尺寸';
`,
);

write(
  'divider',
  `${header}
import { Divider } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Divider', '分割线，实线 / 虚线。');

export const Horizontal = () => (
  <DocPanel title="水平分割">
    <p>上方内容</p>
    <Divider />
    <p>下方内容</p>
  </DocPanel>
);
Horizontal.storyName = '水平';

export const Dashed = () => (
  <DocPanel title="虚线">
    <Divider type="dashed" />
  </DocPanel>
);
Dashed.storyName = '虚线';
`,
);

write(
  'time',
  `${header}
import { Time } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Time', '实时时钟（Nook 风格）。');

export const Basic = () => (
  <DocPanel title="当前时间">
    <Time />
  </DocPanel>
);
Basic.storyName = '基础';
`,
);

write(
  'code-block',
  `${header}
import { CodeBlock } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('CodeBlock', '代码块，带语法高亮。');

const sample = \`import { Button } from '@sa2kit-ui/react';

export function App() {
  return <Button type="primary">Hello Island</Button>;
}\`;

export const Basic = () => (
  <DocPanel title="TSX 高亮">
    <CodeBlock code={sample} language="tsx" />
  </DocPanel>
);
Basic.storyName = '基础';
`,
);

write(
  'table',
  `${header}
import { Table } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Table', '数据表格。');

const data = [
  { id: '1', name: '鲈鱼', price: 400 },
  { id: '2', name: '鲷鱼', price: 3000 },
  { id: '3', name: '金鱼', price: 1300 },
];

export const Basic = () => (
  <DocPanel title="鱼类价格表">
    <Table
      columns={[
        { title: '名称', dataIndex: 'name', key: 'name' },
        { title: '价格', dataIndex: 'price', key: 'price' },
      ]}
      dataSource={data}
      rowKey="id"
    />
  </DocPanel>
);
Basic.storyName = '基础';
`,
);

write(
  'icon',
  `${header}
import { Icon, ICON_LIST } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Icon', '动森图标集。');

export const Gallery = () => (
  <DocPanel title="全部图标" description="bounce 弹跳动画">
    <div className="flex flex-wrap gap-4">
      {ICON_LIST.map(({ name }) => (
        <div key={name} className="flex flex-col items-center gap-1">
          <Icon name={name} size={32} bounce />
          <span className="text-xs text-sa2-text-muted">{name}</span>
        </div>
      ))}
    </div>
  </DocPanel>
);
Gallery.storyName = '图标一览';
`,
);

write(
  'footer',
  `${header}
import { Footer } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Footer', '页脚信息条。');

export const Types = () => (
  <DocPanel title="类型">
    <VariantStack>
      <Footer type="default">© sa2Kit-UI</Footer>
      <Footer type="light">Light Footer</Footer>
    </VariantStack>
  </DocPanel>
);
Types.storyName = '类型';
`,
);

write(
  'phone',
  `${header}
import { Phone, Title } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Phone', 'NookPhone 手机框装饰容器。');

export const Basic = () => (
  <DocPanel title="手机框">
    <Phone>
      <Title size="small" color="app-teal">NookPhone</Title>
      <p className="mt-2 text-sm text-sa2-text-secondary">打开地图查看素材位置</p>
    </Phone>
  </DocPanel>
);
Basic.storyName = '基础';
`,
);

write(
  'cursor',
  `${header}
import { Button, Cursor } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Cursor', '自定义鼠标指针容器（Web）。');

export const Basic = () => (
  <DocPanel title="指针区域" description="在区域内移动鼠标查看自定义指针">
    <Cursor>
      <div className="rounded-sa2-radius-sm bg-sa2-bg-secondary p-8 text-center">
        <Button type="primary">悬停我</Button>
      </div>
    </Cursor>
  </DocPanel>
);
Basic.storyName = '基础';
`,
);

write(
  'wallet',
  `${header}
import { Wallet } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('Wallet', '钱包 / 余额展示。');

export const Sizes = () => (
  <DocPanel title="尺寸">
    <VariantGrid>
      <Wallet size="small" amount={1200} />
      <Wallet size="medium" amount={99999} />
      <Wallet size="large" amount={1234567} />
    </VariantGrid>
  </DocPanel>
);
Sizes.storyName = '尺寸';
`,
);

write(
  'wedding-invitation',
  `${header}
import { WeddingInvitation, WeddingInvitationExportButton } from '@sa2kit-ui/react';
import { meta } from '../_shared/storyMeta';

export default meta('WeddingInvitation', '婚礼请柬，Web 端支持 PNG 导出。');

export const Basic = () => (
  <DocPanel title="请柬预览">
    <VariantStack>
      <WeddingInvitation bride="花子" groom="太郎" date="2026-06-22" venue="无人岛海滩" />
      <WeddingInvitationExportButton />
    </VariantStack>
  </DocPanel>
);
Basic.storyName = '基础';
`,
);

console.log('Generated 24 component story files in apps/docs/src/components/');
