import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Tabs } from '@sa2kit-ui/react';
export default {
  title: 'Components / Tabs',
  meta: {
    description: '选项卡，切换不同内容面板。',
  },
};

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
