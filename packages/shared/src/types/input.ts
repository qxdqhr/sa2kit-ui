import type { InputHTMLAttributes, ReactNode, ChangeEventHandler } from 'react';

export type InputSize = 'small' | 'middle' | 'large';

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'prefix'
> {
  /** 输入框尺寸 */
  size?: InputSize;
  /** 前缀 */
  prefix?: ReactNode;
  /** 后缀 */
  suffix?: ReactNode;
  /** 允许清除 */
  allowClear?: boolean;
  /** 错误/警告状态 */
  status?: 'error' | 'warning';
  /** 是否显示 3D 阴影 */
  shadow?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClear?: () => void;
}
