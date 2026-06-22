import type { ReactNode } from 'react';

export interface TypewriterProps {
  children?: ReactNode;
  /** 每字间隔 (ms)，默认 90 */
  speed?: number;
  /** 值变化时重新播放 */
  trigger?: unknown;
  /** 默认 true；false 直接全量显示 */
  autoPlay?: boolean;
  onDone?: () => void;
}
