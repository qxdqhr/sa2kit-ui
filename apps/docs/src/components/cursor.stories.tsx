import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Button, Cursor } from '@sa2kit-ui/react';
export default {
  title: 'Components / Cursor',
  meta: {
    description: '自定义鼠标指针容器（Web）。',
  },
};

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
