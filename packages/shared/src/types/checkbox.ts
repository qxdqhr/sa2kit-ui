import type { CSSProperties, ReactNode } from 'react';

export type CheckboxSize = 'small' | 'middle' | 'large';

export interface CheckboxOption {
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface CheckboxProps {
  value?: Array<string | number>;
  defaultValue?: Array<string | number>;
  options: CheckboxOption[];
  size?: CheckboxSize;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  onChange?: (values: Array<string | number>) => void;
  className?: string;
  style?: CSSProperties;
}
