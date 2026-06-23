import type { ReactNode } from 'react';
import { Button, Title } from '@sa2kit-ui/react';
import { SA2_THEMES, useTheme } from '@sa2kit-ui/theme-runtime';
import { COMPONENT_DOCS, TIER_LABEL } from './_shared/componentMeta';

export default {
  title: 'Overview / 组件索引',
  meta: {
    description: 'sa2Kit-UI 全部 24 个 Web 组件文档入口。左侧导航可进入各组件 Story。',
  },
};

function ThemeToolbar() {
  const { theme, setTheme } = useTheme();
  return (
    <DocPanel title="主题切换" description="文档站已接入 ThemeProvider，切换后 CSS 变量即时生效。">
      <div className="flex flex-wrap gap-2">
        {SA2_THEMES.map((item) => (
          <Button
            key={item.id}
            type={theme === item.id ? 'primary' : 'default'}
            size="small"
            onClick={() => setTheme(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </DocPanel>
  );
}

function DocPanel({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-8">
      <h3 className="mb-2 text-lg font-bold text-sa2-text">{title}</h3>
      {description ? <p className="mb-4 text-sm text-sa2-text-secondary">{description}</p> : null}
      {children}
    </section>
  );
}

export const ComponentIndex = () => (
  <div className="max-w-5xl p-2">
    <Title size="large" color="app-teal">
      sa2Kit-UI 组件文档
    </Title>
    <p className="mt-3 text-sa2-text-secondary">
      基于 Ladle 构建 · 类 Storybook 交互预览 · 对齐 animal-island-ui API
    </p>

    <div className="mt-8">
      <ThemeToolbar />
    </div>

    {([1, 2, 3] as const).map((tier) => (
      <section key={tier} className="mt-10">
        <Title size="middle" className="mb-4">
          {TIER_LABEL[tier]}
        </Title>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPONENT_DOCS.filter((c) => c.tier === tier).map((item) => (
            <article
              key={item.slug}
              className="rounded-sa2-radius border-2 border-sa2-border bg-sa2-bg-content p-4 shadow-sa2-sm transition hover:border-sa2-primary"
            >
              <h4 className="font-bold text-sa2-text">{item.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-sa2-text-secondary">{item.summary}</p>
              <p className="mt-3 font-mono text-xs text-sa2-primary">
                左侧导航 → Components / {item.name}
              </p>
            </article>
          ))}
        </div>
      </section>
    ))}
  </div>
);

ComponentIndex.storyName = '组件索引';
