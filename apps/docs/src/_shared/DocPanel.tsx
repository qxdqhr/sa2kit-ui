import type { ReactNode } from 'react';

export interface DocPanelProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

/** 文档预览面板：标题 + 说明 + 带边框的样式展示区 */
export function DocPanel({ title, description, children }: DocPanelProps) {
  return (
    <section className="mb-8 max-w-4xl">
      {title ? (
        <h3 className="mb-2 text-lg font-bold text-sa2-text">{title}</h3>
      ) : null}
      {description ? (
        <p className="mb-4 text-sm leading-relaxed text-sa2-text-secondary">{description}</p>
      ) : null}
      <div className="rounded-sa2-radius border-2 border-sa2-border bg-sa2-bg-content p-6 shadow-sa2-sm">
        {children}
      </div>
    </section>
  );
}

export function VariantGrid({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-3">{children}</div>;
}

export function VariantStack({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

export function SpecTable({ rows }: { rows: Array<{ prop: string; type: string; desc: string }> }) {
  return (
    <div className="overflow-x-auto rounded-sa2-radius-sm border border-sa2-border-light">
      <table className="w-full min-w-[480px] border-collapse text-sm">
        <thead>
          <tr className="bg-sa2-bg-secondary text-left text-sa2-text">
            <th className="border-b border-sa2-border-light px-4 py-2 font-semibold">属性</th>
            <th className="border-b border-sa2-border-light px-4 py-2 font-semibold">类型</th>
            <th className="border-b border-sa2-border-light px-4 py-2 font-semibold">说明</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.prop} className="text-sa2-text-body">
              <td className="border-b border-sa2-border-dashed px-4 py-2 font-mono text-xs text-sa2-primary">
                {row.prop}
              </td>
              <td className="border-b border-sa2-border-dashed px-4 py-2 font-mono text-xs">
                {row.type}
              </td>
              <td className="border-b border-sa2-border-dashed px-4 py-2">{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
