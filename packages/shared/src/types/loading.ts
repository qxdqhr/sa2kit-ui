import type { CSSProperties } from 'react';

export interface LoadingProps {
  className?: string;
  style?: CSSProperties;
  /** 是否显示遮罩，默认 true */
  active?: boolean;
}
