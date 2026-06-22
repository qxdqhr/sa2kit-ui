# animal-island-components-sa2kit

《集合啦！动物森友会》风格 sa2kit 多平台 UI 组件库。样式从 [animal-island-ui](https://github.com/guokaigdg/animal-island-ui) 移植，技术栈为 **Tailwind CSS + sa2kit 五端 Monorepo**。

## 平台

| 包 | 平台 |
|----|------|
| `@animal-island-components-sa2kit/react` | Web |
| `@animal-island-components-sa2kit/electron` | Electron 桌面 |
| `@animal-island-components-sa2kit/rn` | React Native |
| `@animal-island-components-sa2kit/taro` | 微信 / 支付宝小程序 |
| `@animal-island-components-sa2kit/tokens` | 设计 token + 组件样式层 |

## 已实现组件（v0.1.0）

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
- Web + Electron：**24 个组件已全部对齐 animal-island-ui**
- RN / Taro：**24 个组件已全部实现**（与 Web API 对齐；`WeddingInvitation` 移动端导出为截图提示，完整 PNG 导出请用 Web）

## 安装与使用

```bash
pnpm add @animal-island-components-sa2kit/react
```

```tsx
import '@animal-island-components-sa2kit/react/style';
import { Button, Card, Input, Switch } from '@animal-island-components-sa2kit/react';
```

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
