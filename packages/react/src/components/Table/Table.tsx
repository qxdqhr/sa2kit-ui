import { cn } from '@sa2kit-ui/shared';
import type { TableColumn, TableProps } from '@sa2kit-ui/shared';
import type { HTMLAttributes, ReactNode } from 'react';

export function Table<T extends Record<string, unknown> = Record<string, unknown>>({
  columns = [],
  dataSource = [],
  rowKey = 'key',
  striped = true,
  showHeader = true,
  rowClassName,
  onRow,
  loading = false,
  emptyText = '暂无数据',
  scroll,
  className,
  style,
}: TableProps<T>) {
  const getRowKey = (record: T, index: number): string => {
    if (typeof rowKey === 'function') {
      return rowKey(record);
    }
    return (record[rowKey as keyof T] as string) || String(index);
  };

  const getRowClassName = (record: T, index: number): string => {
    return cn(
      'sa2-table-row',
      striped && index % 2 === 1 && 'sa2-table-row-striped',
      typeof rowClassName === 'function' ? rowClassName(record, index) : rowClassName,
    );
  };

  const renderCell = (column: TableColumn<T>, record: T, index: number) => {
    const value = column.dataIndex ? record[column.dataIndex] : undefined;
    if (column.render) {
      return column.render(value, record, index);
    }
    return value as ReactNode;
  };

  const wrapperStyle = scroll
    ? {
        ...style,
        maxWidth: scroll.x,
        maxHeight: scroll.y,
      }
    : style;

  return (
    <div
      className={cn('sa2-table-wrap', scroll && 'sa2-table-scrollable', className)}
      style={wrapperStyle}
    >
      <table className={cn('sa2-table', loading && 'sa2-table-loading')}>
        {showHeader ? (
          <thead className="sa2-table-thead">
            <tr className="sa2-table-header-row">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="sa2-table-header-cell"
                  style={{
                    width: column.width,
                    textAlign: column.align || 'left',
                    ...column.style,
                  }}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody className="sa2-table-tbody">
          {dataSource.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="sa2-table-empty-cell">
                <div className="sa2-table-empty-content">
                  <svg className="sa2-table-empty-icon" viewBox="0 0 24 24" width="48" height="48">
                    <path
                      fill="currentColor"
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"
                    />
                  </svg>
                  <span>{emptyText}</span>
                </div>
              </td>
            </tr>
          ) : (
            dataSource.map((record, index) => {
              const rowProps = onRow?.(record, index) as HTMLAttributes<HTMLTableRowElement> | undefined;
              return (
                <tr key={getRowKey(record, index)} className={getRowClassName(record, index)} {...rowProps}>
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className="sa2-table-cell"
                      style={{
                        textAlign: column.align || 'left',
                        ...column.style,
                      }}
                    >
                      {renderCell(column, record, index)}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {loading ? (
        <div className="sa2-table-loading-overlay">
          <div className="sa2-table-loading-spinner">
            <svg viewBox="0 0 50 50" width="40" height="40">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      ) : null}
    </div>
  );
}

Table.displayName = 'Table';
