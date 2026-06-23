import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Icon, ICON_LIST } from '@sa2kit-ui/react';
export default {
  title: 'Components / Icon',
  meta: {
    description: '动森图标集。',
  },
};

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
