# 五端平台差异

详见全局 Skill：`~/.agents/skills/build-sa2kit-component-library/PLATFORMS.md`

本仓库已启用：React Web、Electron 桌面、RN (NativeWind)、Taro (weapp + alipay)。

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

## 移动端实现说明

- **Icon / Phone / Footer / Wallet**：SVG 资源经 `@resvg/resvg-js` 转为 PNG，RN 用 `Image` + `require`，Taro 用 `Image` + dataurl 打包。
- **Loading**：RN 使用 `ActivityIndicator`；Taro 保留 CSS 旋转动画 class。
- **Tooltip**：移动端将 hover/focus 映射为 press 展示。
- **Table**：无原生 `<table>`，使用 Flex 行布局。
- **Cursor**：移动端为透传容器（无自定义鼠标样式）。
- **WeddingInvitation**：UI 完整；`exportAsImage` 在 RN/Taro 提示系统截图，Web 端支持 `modern-screenshot` PNG 导出。

## 共享逻辑

- `@animal-island-components-sa2kit/shared` 提供 `useTypewriterEffect`、`getHighlightSegments` 等跨端工具。
