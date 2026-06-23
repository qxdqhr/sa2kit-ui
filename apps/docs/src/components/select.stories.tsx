import { useState } from 'react';
import { DocPanel } from '../_shared/DocPanel';
import { Select } from '@sa2kit-ui/react';

export default {
  title: 'Components / Select',
  meta: {
    description: '下拉选择器，options 使用 key / label。',
  },
};

const options = [
  { key: 'apple', label: '苹果' },
  { key: 'pear', label: '梨子' },
  { key: 'peach', label: '桃子' },
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
