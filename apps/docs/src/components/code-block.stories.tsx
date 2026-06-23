import { DocPanel } from '../_shared/DocPanel';
import { CodeBlock } from '@sa2kit-ui/react';

export default {
  title: 'Components / CodeBlock',
  meta: {
    description: '代码块，内置 JSX 语法高亮。',
  },
};

const sample = `import { Button } from '@sa2kit-ui/react';

export function App() {
  return <Button type="primary">Hello Island</Button>;
}`;

export const Basic = () => (
  <DocPanel title="TSX 高亮">
    <CodeBlock code={sample} />
  </DocPanel>
);
Basic.storyName = '基础';
