import type { CSSProperties } from 'react';

export type IconName =
  | 'icon-miles'
  | 'icon-camera'
  | 'icon-chat'
  | 'icon-critterpedia'
  | 'icon-design'
  | 'icon-diy'
  | 'icon-helicopter'
  | 'icon-map'
  | 'icon-shopping'
  | 'icon-variant';

export interface IconProps {
  /** 内置具名图标。与 item 二选一 */
  name?: IconName;
  /** 物品图标编号，来自 item PNG 资源。与 name 二选一 */
  item?: number;
  size?: number | string;
  className?: string;
  style?: CSSProperties;
  bounce?: boolean;
}
