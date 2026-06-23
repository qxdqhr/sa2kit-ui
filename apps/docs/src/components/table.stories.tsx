import { useState } from 'react';
import { DocPanel, SpecTable, VariantGrid, VariantStack } from '../_shared/DocPanel';

import { Table } from '@sa2kit-ui/react';
export default {
  title: 'Components / Table',
  meta: {
    description: '数据表格。',
  },
};

const data = [
  { id: '1', name: '鲈鱼', price: 400 },
  { id: '2', name: '鲷鱼', price: 3000 },
  { id: '3', name: '金鱼', price: 1300 },
];

export const Basic = () => (
  <DocPanel title="鱼类价格表">
    <Table
      columns={[
        { title: '名称', dataIndex: 'name', key: 'name' },
        { title: '价格', dataIndex: 'price', key: 'price' },
      ]}
      dataSource={data}
      rowKey="id"
    />
  </DocPanel>
);
Basic.storyName = '基础';
