import type { CSSProperties, ReactNode } from 'react';

export interface TabItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  className?: string;
  style?: CSSProperties;
  /** 激活标签叶子摆动动画，默认 true */
  leafAnimation?: boolean;
  /** 激活标签 3D 阴影，默认 true */
  shadow?: boolean;
}
