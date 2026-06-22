import type { CSSProperties } from 'react';

export type FooterType = 'sea' | 'tree';

export interface FooterProps {
  type?: FooterType;
  className?: string;
  style?: CSSProperties;
}
