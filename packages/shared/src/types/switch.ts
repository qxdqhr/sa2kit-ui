import type { ReactNode } from 'react';

export type SwitchSize = 'small' | 'default';

export interface SwitchProps {
  /** 是否选中（受控） */
  checked?: boolean;
  /** 默认是否选中 */
  defaultChecked?: boolean;
  /** 尺寸 */
  size?: SwitchSize;
  /** 禁用 */
  disabled?: boolean;
  /** 加载状态 */
  loading?: boolean;
  /** 选中时文案 */
  checkedChildren?: ReactNode;
  /** 未选中时文案 */
  unCheckedChildren?: ReactNode;
  /** 变化回调 */
  onChange?: (checked: boolean) => void;
  className?: string;
}
