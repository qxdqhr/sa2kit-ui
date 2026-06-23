import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Button, Tooltip } from '@sa2kit-ui/react';
export default {
  title: 'Components / Tooltip',
  meta: {
    description: '文字提示气泡。',
  },
};

export const Placements = () => (
  <DocPanel title="方位" description="top / bottom / left / right">
    <VariantGrid>
      {(['top', 'bottom', 'left', 'right'] as const).map((p) => (
        <Tooltip key={p} title={`placement=${p}`} placement={p}>
          <Button type="default">{p}</Button>
        </Tooltip>
      ))}
    </VariantGrid>
  </DocPanel>
);
Placements.storyName = '方位';
