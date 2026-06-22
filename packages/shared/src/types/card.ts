import type { CSSProperties, ReactNode } from 'react';

export type CardType = 'default' | 'dashed';
export type CardColor =
  | 'default'
  | 'app-pink'
  | 'purple'
  | 'app-blue'
  | 'app-yellow'
  | 'app-orange'
  | 'app-teal'
  | 'app-green'
  | 'app-red'
  | 'lime-green'
  | 'yellow-green'
  | 'brown'
  | 'warm-peach-pink';

export interface CardProps {
  /** 卡片类型 */
  type?: CardType;
  /** NookPhone 配色 */
  color?: CardColor;
  /** 子内容 */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}
