# Phase 1.5 — 主题点缀资源（图标 / 纹理）

> 插入在 **Phase 1 资料调研** 与 **Phase 2 HTML 预览** 之间，或与 Phase 1 同批完成。  
> 目标：除配色外，为组件提供 **可商用 SVG 点缀**，避免主题「只有色板」。

## 流程

```
Phase 1 配色调研
    ↓
Phase 1.5 点缀选型 → assets-catalog.md + icons/*.svg + ATTRIBUTION.md
    ↓
Phase 2 预览 HTML（须含 1 处 icon 点缀示例）
    ↓
Phase 3 主题包内 {prefix}-decorations.css + 构建内联 SVG
```

## 执行步骤

1. **读 Phase 1** 的 `ui-research.md` 关键词与 motif（如密文板、CMYK、银凇）
2. **从 [ASSET-SOURCES.md](./ASSET-SOURCES.md) 白名单选型**（默认 Lucide ISC）
3. **写入** `docs/themes/{id}/assets-catalog.md`：

| 列 | 说明 |
|----|------|
| 文件名 | `icons/xxx.svg` |
| 来源库 | Lucide / Tabler / 自研 |
| 原始名称 | 如 `snowflake` |
| 许可 | ISC / MIT |
| 用途 | Card 水印 / Modal 角标 / 预览 Hero |

4. **落地 SVG**：`packages/themes/{id}/assets/icons/`（3～6 个，24×24 或 32×32 viewBox）
5. **登记** `packages/themes/{id}/assets/ATTRIBUTION.md`
6. **编写** `{prefix}-decorations.css`：
   - `[data-theme='{id}'] .sa2-card::after` — 右上角水印 mask
   - `[data-theme='{id}'] .sa2-modal-clipped::before` — 标题区角标
   - `[data-theme='{id}'] .sa2-btn-primary::before` — 可选微 icon（opacity 低）
   - 工具类 `.{prefix}-ornament` — 页面级点缀容器
7. **预览 HTML** 增加 `.preview-ornament` 区块展示 icon
8. **构建**：`scripts/build-react-style.mjs` 自动内联 `url(./assets/icons/...)` 为 data URI

## 完成标准

- [ ] ≥3 个 SVG，均有 ATTRIBUTION
- [ ] `assets-catalog.md` 与 `ui-research.md` §8 点缀资源 一致
- [ ] Card + Modal 至少有可见点缀（opacity 0.12～0.28）
- [ ] `pnpm --filter @sa2kit-ui/react build` 通过

## 参考实现

| 主题 | decorations | icons |
|------|-------------|-------|
| jieyuan-garden | `jieyuan-decorations.css` | flower, bridge, lantern |
| rhine-life | `rhine-decorations.css` | flask, dna, microchip |
| endfield | `endfield-decorations.css` | triangle-alert, factory, cog |
| mizuki-roguelike | `mizuki-decorations.css` | waves, sparkles, shell |
| sami-roguelike | `sami-decorations.css` | snowflake, mountain, scroll |
