import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Checkbox } from '@sa2kit-ui/react';
export default {
  title: 'Components / Checkbox',
  meta: {
    description: '多选框组。',
  },
};

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
