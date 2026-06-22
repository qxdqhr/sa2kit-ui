import type { ReactNode } from 'react';
import type { InputSize } from './input';
import type { CardColor, CardType } from './card';

/** RN / Taro 输入框（字符串回调，无 DOM 事件） */
export interface MobileInputProps {
  size?: InputSize;
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
  status?: 'error' | 'warning';
  shadow?: boolean;
  disabled?: boolean;
  className?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
}

/** RN / Taro 卡片（Pressable 回调） */
export interface MobileCardProps {
  type?: CardType;
  color?: CardColor;
  children?: ReactNode;
  className?: string;
  style?: object;
  onPress?: () => void;
}
