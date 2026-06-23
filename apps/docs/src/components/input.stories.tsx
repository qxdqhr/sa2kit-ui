import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Input } from '@sa2kit-ui/react';
export default {
  title: 'Components / Input',
  meta: {
    description: '文本输入框。Focus 时黄色描边（--sa2-focus）。',
  },
};

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
