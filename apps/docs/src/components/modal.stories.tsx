import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Button, Modal, Title } from '@sa2kit-ui/react';
export default {
  title: 'Components / Modal',
  meta: {
    description: '模态对话框，遮罩 + 圆角内容区。',
  },
};

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
