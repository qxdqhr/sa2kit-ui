# Animal Island 设计规范

> 源自 `animal-island-ui` v0.9.5。Tailwind 实现见 `packages/tokens/`。

## 世界观

温暖大地色系 + 大圆角 pill + 游戏按键 3D 立体感 + 柔和动效。

## 设计铁律

1. 大地棕文字 + 薄荷青 `#19c8b9` 主色 + 奶油米 `#f8f8f0` 背景
2. 按钮/输入框 pill 圆角 50px；最小圆角 12px
3. **仅 primary / danger-primary** 使用 `0 5px 0 0` 厚阴影
4. 字体 Nunito + Noto Sans SC，按钮 weight 600+
5. 输入 focus 黄色 `#ffcc00`，按钮 focus 青绿 `#19c8b9`
6. 禁止纯黑 `#000`、冷蓝 focus、直角交互元素

## Token 来源

`packages/tokens/tailwind.preset.js` + `animal-plugin.js`（`.ai-btn` 等组件类）
