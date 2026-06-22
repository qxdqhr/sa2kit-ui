import type { CSSProperties, ReactNode, RefObject } from 'react';

export interface WeddingInvitationProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  weekday?: string;
  time?: string;
  venue?: string;
  address?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  message?: ReactNode;
  showLotteryNumber?: boolean;
  lotteryNumber?: string;
  lotteryLabel?: ReactNode;
  lotteryHint?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface WeddingInvitationRef {
  exportAsImage: (filename?: string) => Promise<void>;
  getElement: () => HTMLDivElement | null;
}

export interface WeddingInvitationExportButtonProps {
  targetRef: RefObject<WeddingInvitationRef>;
  filename?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}
