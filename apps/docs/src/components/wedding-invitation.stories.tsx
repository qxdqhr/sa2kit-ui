import { useRef } from 'react';
import { DocPanel, VariantStack } from '../_shared/DocPanel';
import {
  WeddingInvitation,
  WeddingInvitationExportButton,
} from '@sa2kit-ui/react';
import type { WeddingInvitationRef } from '@sa2kit-ui/react';

export default {
  title: 'Components / WeddingInvitation',
  meta: {
    description: '婚礼请柬，Web 端支持 PNG 导出。',
  },
};

export const Basic = () => {
  const ref = useRef<WeddingInvitationRef>(null);
  return (
    <DocPanel title="请柬预览">
      <VariantStack>
        <WeddingInvitation ref={ref} groomName="太郎" brideName="花子" />
        <WeddingInvitationExportButton targetRef={ref} />
      </VariantStack>
    </DocPanel>
  );
};
Basic.storyName = '基础';
