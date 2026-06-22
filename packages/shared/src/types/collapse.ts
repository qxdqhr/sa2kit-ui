import type { CSSProperties, ReactNode } from 'react';

export interface CollapseProps {
  /** 问题标题 */
  question: ReactNode;
  /** 答案内容 */
  answer: ReactNode;
  /** 是否默认展开 */
  defaultExpanded?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}
