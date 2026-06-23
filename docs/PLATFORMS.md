# 五端平台差异

详见全局 Skill：`~/.agents/skills/build-sa2kit-component-library/PLATFORMS.md`

本仓库 **sa2Kit-UI** 已启用：React Web、Electron 桌面、RN (NativeWind)、Taro (weapp + alipay)。

## 多主题架构（方案 2）

| 包 | 职责 |
|----|------|
| `@sa2kit-ui/tokens` | 语义 CSS 变量 `--sa2-*` + 无主题色 Tailwind preset |
| `@sa2kit-ui/theme-animal-island` | 动森主题 plugin + preset + theme.css |
| `@sa2kit-ui/theme-runtime` | `ThemeProvider` / `useTheme`，通过 `data-theme` 切换 |

Web/Electron 使用 `ThemeProvider` 可在 `animal-island` 与 `tech` 主题间运行时切换。

## 组件覆盖（24/24）

| 组件 | Web/Electron | RN | Taro |
|------|:------------:|:--:|:----:|
| Button / Input / Switch / Card | ✅ | ✅ | ✅ |
| Modal / Title / Tabs / Collapse | ✅ | ✅ | ✅ |
| Checkbox / Radio / Typewriter | ✅ | ✅ | ✅ |
| Tooltip / Select / Loading / Divider | ✅ | ✅ | ✅ |
| Time / CodeBlock / Table / Icon | ✅ | ✅ | ✅ |
| Footer / Phone / Cursor / Wallet | ✅ | ✅ | ✅ |
| WeddingInvitation (+ ExportButton) | ✅ | ✅ | ✅ |

## 移动端主题接入

RN / Taro 与 Web 共用 `@sa2kit-ui/theme-animal-island` 的组件样式（`animal-components.css`），Tailwind 使用同一 preset。

```tsx
// App 入口（先于 global.css / app.css）
import '@sa2kit-ui/theme-animal-island/theme.mobile.css';
import './global.css'; // 仅含 @tailwind 指令
```

```js
// tailwind.config.js（RN 额外加 nativewind/preset）
presets: [
  require('@sa2kit-ui/theme-animal-island/tailwind.preset'),
  require('nativewind/preset'), // 仅 RN
],
```

也可 `import '@sa2kit-ui/rn/style.css'`（仅主题，仍需单独 `@tailwind` 的 global.css）。

### 移动端 CSS 限制

| 能力 | Web | RN (NativeWind) | Taro 小程序 |
|------|-----|-----------------|-------------|
| `:hover` / 伪类 | ✅ | ❌ 忽略 | ⚠️ 部分支持 |
| `background: url()` | ✅ | ⚠️ 有限 | ✅ weapp-tailwindcss |
| Google Fonts 外链 | ✅ | ❌ | ❌ |
| 自定义 cursor | ✅ | ❌ | ❌ |

- **Footer**：RN 仍用 `ImageBackground` 渲染 sea 背景（CSS url 在 RN 不可靠）。
- **Phone 状态栏图标**：RN/Taro 用 `Image` 组件，类名与 Web 对齐（`sa2-phone-icon-*`）。
- **Cursor**：移动端为透传容器，无自定义鼠标样式。
- **Divider / Footer tree**：Taro 走 CSS 背景图；RN tree 依赖 theme CSS，sea 走组件内 PNG。

## 移动端实现说明

- **Icon / Phone / Footer / Wallet**：SVG 资源经 `@resvg/resvg-js` 转为 PNG，RN 用 `Image` + `require`，Taro 用 `Image` + dataurl 打包。
- **Loading**：RN 使用 `ActivityIndicator`；Taro 保留 CSS 旋转动画 class。
- **Tooltip**：移动端将 hover/focus 映射为 press 展示。
- **Table**：无原生 `<table>`，使用 Flex 行布局。
- **Cursor**：移动端为透传容器（无自定义鼠标样式）。
- **WeddingInvitation**：UI 完整；`exportAsImage` 在 RN/Taro 提示系统截图，Web 端支持 `modern-screenshot` PNG 导出。

## 共享逻辑

- `@sa2kit-ui/shared` 提供 `useTypewriterEffect`、`getHighlightSegments` 等跨端工具。
