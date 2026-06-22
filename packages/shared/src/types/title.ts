import type { CSSProperties, ReactNode } from 'react';
import type { CardColor } from './card';

export type TitleSize = 'small' | 'middle' | 'large';
export type TitleColor = CardColor;

export interface TitleProps {
  /** 标题内容 */
  children: ReactNode;
  /** 尺寸 */
  size?: TitleSize;
  /** 配色，与 Card 同名色板 */
  color?: TitleColor;
  className?: string;
  style?: CSSProperties;
}
