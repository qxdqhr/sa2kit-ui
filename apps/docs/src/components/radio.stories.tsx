import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Radio } from '@sa2kit-ui/react';
export default {
  title: 'Components / Radio',
  meta: {
    description: '单选框组。',
  },
};

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
