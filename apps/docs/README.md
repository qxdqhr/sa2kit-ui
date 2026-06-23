# sa2Kit-UI 组件文档

基于 [Ladle](https://ladle.dev) 的类 Storybook 文档站。

## GitHub Pages 部署

在线地址：https://qxdqhr.github.io/sa2kit-ui/

Workflow：`.github/workflows/deploy-docs.yml`  
触发：`main` 分支 push（docs / packages 变更）或手动 `workflow_dispatch`。

本地模拟 Pages 构建：

```bash
pnpm docs:build:pages
pnpm --filter docs preview
```

## 目录结构

```
apps/docs/
├── .ladle/
│   ├── config.mjs       # Story 扫描与 Vite 配置
│   └── components.tsx   # 全局 ThemeProvider + 主题 CSS
├── src/
│   ├── overview.stories.tsx      # 组件索引（24 个入口）
│   ├── components/*.stories.tsx  # 各组件文档
│   └── _shared/
│       ├── DocPanel.tsx          # 样式预览面板 + Props 表格
│       └── componentMeta.ts      # 组件元数据
└── build/                        # 静态站点产物
```

## 编写 Story

每个组件一个文件，例如 `src/components/button.stories.tsx`：

```tsx
import { DocPanel, VariantGrid } from '../_shared/DocPanel';
import { Button } from '@sa2kit-ui/react';

/** Ladle 要求 export default 为静态对象 */
export default {
  title: 'Components / Button',
  meta: {
    description: '按钮说明文字',
  },
};

export const Types = () => (
  <DocPanel title="类型" description="样式变体说明">
    <VariantGrid>
      <Button type="primary">Primary</Button>
    </VariantGrid>
  </DocPanel>
);
Types.storyName = '类型一览';
```

## 批量生成

```bash
node scripts/generate-ladle-stories.mjs   # 从模板生成 24 个 story
node scripts/fix-ladle-story-meta.mjs     # 修复 meta 为静态 export
```

生成后请对照 `@sa2kit-ui/shared` 类型检查 props 是否正确。

## 组件列表

左侧导航按 **Overview** 与 **Components / 组件名** 分组，共 24 个 Web 组件 + 1 个索引页。
