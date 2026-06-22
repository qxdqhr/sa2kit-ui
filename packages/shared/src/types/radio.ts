import type { CSSProperties, ReactNode } from 'react';

export type RadioSize = 'small' | 'middle' | 'large';

export interface RadioOption {
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface RadioProps {
  value?: string | number;
  defaultValue?: string | number;
  options: RadioOption[];
  size?: RadioSize;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  onChange?: (value: string | number) => void;
  className?: string;
  style?: CSSProperties;
}
