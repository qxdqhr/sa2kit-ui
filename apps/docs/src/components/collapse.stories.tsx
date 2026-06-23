import { useState } from 'react';
import { DocPanel } from '../_shared/DocPanel';
import { Collapse } from '@sa2kit-ui/react';

export default {
  title: 'Components / Collapse',
  meta: {
    description: '折叠面板，question + answer 单组问答。',
  },
};

export const Basic = () => (
  <DocPanel title="折叠问答">
    <Collapse
      question="什么是 sa2Kit-UI？"
      answer="一套受《集合啦！动物森友会》启发的 sa2kit 多平台 UI 组件库。"
      defaultExpanded
    />
  </DocPanel>
);
Basic.storyName = '基础';
