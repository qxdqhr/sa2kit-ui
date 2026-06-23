# sa2Kit-UI

《集合啦！动物森友会》风格 **sa2Kit-UI** 多平台组件库。样式从 [animal-island-ui](https://github.com/guokaigdg/animal-island-ui) 移植，采用 **方案 2：单仓多主题 + ThemeProvider + CSS 变量**。

## 架构

```
packages/
├── tokens/              # 语义 CSS 变量 + 无主题色的 Tailwind preset
├── themes/
│   └── animal-island/   # 动森主题 preset + plugin + theme.css
├── theme-runtime/       # ThemeProvider + useTheme
├── shared/ react/ rn/ taro/ electron/
```

| 包 | 说明 |
|----|------|
| `@sa2kit-ui/tokens` | 语义设计 token（`--sa2-*` CSS 变量） |
| `@sa2kit-ui/theme-animal-island` | 动森岛主题（Tailwind preset + 组件样式层） |
| `@sa2kit-ui/theme-runtime` | 运行时主题切换（`data-theme`） |
| `@sa2kit-ui/react` | Web 组件 |
| `@sa2kit-ui/electron` | Electron 桌面 |
| `@sa2kit-ui/rn` | React Native |
| `@sa2kit-ui/taro` | 微信 / 支付宝小程序 |

## 多主题用法

```tsx
import '@sa2kit-ui/theme-animal-island/theme.css';
import { ThemeProvider, useTheme } from '@sa2kit-ui/theme-runtime';
import { Button } from '@sa2kit-ui/react';

function App() {
  return (
    <ThemeProvider defaultTheme="animal-island">
      <Button type="primary">动森按钮</Button>
    </ThemeProvider>
  );
}
```

切换主题：`setTheme('animal-island' | 'tech')`，通过 `document.documentElement[data-theme]` 驱动 CSS 变量。

## 已实现组件（24/24）

**Tier 1 — 基础交互**
- `Button` / `Input` / `Switch` / `Card`
- `Modal` / `Title` / `Tabs` / `Collapse`
- `Checkbox` / `Radio` / `Typewriter`

**Tier 2 — 反馈与布局**
- `Tooltip` / `Select` / `Loading` / `Divider`

**Tier 3 — 展示与内容**
- `Time` / `CodeBlock` / `Table` / `Icon` / `Footer`
- `Phone` / `Cursor` / `Wallet` / `WeddingInvitation`

**平台覆盖**
- Web + Electron：**24 个组件**，支持运行时主题切换
- RN / Taro：**24 个组件**（API 对齐；移动端 `WeddingInvitation` 导出为截图提示）

## 组件文档（Ladle）

类 Storybook 的交互式组件文档，含样式预览、变体展示与 Props 速查表。

```bash
pnpm docs          # 开发：http://localhost:61000
pnpm docs:build    # 本地构建
pnpm docs:build:pages  # 模拟 GitHub Pages 子路径构建
```

**在线文档（GitHub Pages）**：https://qxdqhr.github.io/sa2kit-ui/

> 首次启用：仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。  
> 推送 `main` 分支后 workflow 自动构建并部署 `apps/docs` Ladle 站点。

- 入口：`apps/docs/`
- 组件索引：`src/overview.stories.tsx`
- 各组件 Story：`src/components/*.stories.tsx`（24 个）
- 重新生成 Story 模板：`node scripts/generate-ladle-stories.mjs`

## 开发

```bash
pnpm install
pnpm build
pnpm --filter demo-web dev
```

## 全组件 Showcase

| 平台 | 文件 | 启动 |
|------|------|------|
| Web | `apps/demo-web/src/Showcase.tsx` | `pnpm --filter demo-web dev` |
| Electron | 复用 Web Showcase | `pnpm --filter demo-electron dev` |
| RN | `apps/demo-rn/src/Showcase.tsx` | `pnpm --filter demo-rn dev` |
| Taro | `apps/demo-taro/src/pages/showcase/index.tsx` | `pnpm --filter demo-taro dev:weapp` |

## Agent

- Base：`~/.agents/skills/build-sa2kit-component-library/SKILL.md`
- 主题：`~/.agents/skills/animal-island-sa2kit-ui-library/SKILL.md`

参考源码库：`/home/qhr/Desktop/project/animal-island-ui`
