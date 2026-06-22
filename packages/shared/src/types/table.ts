import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export interface TableColumn<T = Record<string, unknown>> {
  title: ReactNode;
  dataIndex?: keyof T;
  render?: (value: unknown, record: T, index: number) => ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  fixed?: 'left' | 'right';
  style?: CSSProperties;
}

export interface TableProps<T = Record<string, unknown>> {
  columns?: TableColumn<T>[];
  dataSource?: T[];
  rowKey?: string | ((record: T) => string);
  striped?: boolean;
  showHeader?: boolean;
  rowClassName?: string | ((record: T, index: number) => string);
  onRow?: (record: T, index: number) => HTMLAttributes<HTMLTableRowElement>;
  loading?: boolean;
  emptyText?: ReactNode;
  scroll?: {
    x?: number | string;
    y?: number | string;
  };
  className?: string;
  style?: CSSProperties;
}
