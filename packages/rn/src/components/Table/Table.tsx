import { cn } from '@animal-island-components-sa2kit/shared';
import type { TableColumn, TableProps } from '@animal-island-components-sa2kit/shared';
import type { ReactNode } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Loading } from '../Loading';

export function Table<T extends Record<string, unknown> = Record<string, unknown>>({
  columns = [],
  dataSource = [],
  rowKey = 'key',
  striped = true,
  showHeader = true,
  rowClassName,
  onRow: _onRow,
  loading = false,
  emptyText = '暂无数据',
  scroll,
  className,
  style,
}: TableProps<T>) {
  const getRowKey = (record: T, index: number): string => {
    if (typeof rowKey === 'function') return rowKey(record);
    return (record[rowKey as keyof T] as string) || String(index);
  };

  const getRowClassName = (record: T, index: number): string =>
    cn(
      'ai-table-row',
      striped && index % 2 === 1 && 'ai-table-row-striped',
      typeof rowClassName === 'function' ? rowClassName(record, index) : rowClassName,
    );

  const renderCell = (column: TableColumn<T>, record: T, index: number) => {
    const value = column.dataIndex ? record[column.dataIndex] : undefined;
    if (column.render) return column.render(value, record, index);
    return value as ReactNode;
  };

  const wrapperStyle = (scroll
    ? { ...style, maxWidth: scroll.x, maxHeight: scroll.y }
    : style) as object;

  const body = (
    <View className={cn('ai-table', loading && 'ai-table-loading')}>
      {showHeader ? (
        <View className="ai-table-thead">
          <View className="ai-table-header-row flex-row">
            {columns.map((column, index) => (
              <View
                key={index}
                className="ai-table-header-cell flex-1"
                style={({
                  width: column.width,
                  alignItems: column.align === 'center' ? 'center' : column.align === 'right' ? 'flex-end' : 'flex-start',
                  ...(column.style as object),
                }) as object}
              >
                <Text>{column.title}</Text>
              </View>
            ))}
          </View>
        </View>
      ) : null}
      <View className="ai-table-tbody">
        {dataSource.length === 0 ? (
          <View className="ai-table-empty-cell items-center py-6">
            <Text className="ai-table-empty-icon">📊</Text>
            <Text>{emptyText}</Text>
          </View>
        ) : (
          dataSource.map((record, index) => (
              <View key={getRowKey(record, index)} className={cn(getRowClassName(record, index), 'flex-row')}>
                {columns.map((column, colIndex) => {
                  const cell = renderCell(column, record, index);
                  return (
                  <View
                    key={colIndex}
                    className="ai-table-cell flex-1"
                    style={({
                      alignItems: column.align === 'center' ? 'center' : column.align === 'right' ? 'flex-end' : 'flex-start',
                      ...(column.style as object),
                    }) as object}
                  >
                    {typeof cell === 'string' || typeof cell === 'number' ? (
                      <Text>{String(cell)}</Text>
                    ) : (
                      cell
                    )}
                  </View>
                  );
                })}
              </View>
            ))
        )}
      </View>
    </View>
  );

  return (
    <View className={cn('ai-table-wrap', scroll && 'ai-table-scrollable', className)} style={wrapperStyle}>
      {scroll ? <ScrollView horizontal={Boolean(scroll.x)}>{body}</ScrollView> : body}
      {loading ? (
        <View className="ai-table-loading-overlay">
          <Loading />
        </View>
      ) : null}
    </View>
  );
}

Table.displayName = 'Table';
