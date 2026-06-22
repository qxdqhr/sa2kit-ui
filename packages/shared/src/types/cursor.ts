import type { CSSProperties, ReactNode } from 'react';

export interface CursorProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /**
   * 是否对所有后代元素强制覆盖光标。默认 `true`。
   */
  forceAll?: boolean;
}
