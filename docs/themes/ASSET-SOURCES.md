# 主题点缀资源 · 可商用来源白名单

> 新主题 **Phase 1.5 点缀调研** 仅允许从此表选取图标/纹理，并在 `assets/ATTRIBUTION.md` 逐条登记。

| 来源 | 许可 | URL | 用途 |
|------|------|-----|------|
| **Lucide** | ISC（可商用） | https://lucide.dev | 线性 icon，首选 |
| **Tabler Icons** | MIT | https://tabler.io/icons | 线性 icon 备选 |
| **Phosphor Icons** | MIT | https://phosphoricons.com | 多风格 icon |
| **Heroicons** | MIT | https://heroicons.com | 轮廓/实心 icon |
| **Google Fonts** | OFL | https://fonts.google.com | 字体（非图标） |
| **Unsplash / Pexels** | 免费许可（需逐条核对） | https://unsplash.com · https://pexels.com | 预览页摄影图 only |
| **自研 SVG** | 项目 MIT | 仓库内 `assets/icons/` | 几何纹理、简化 motif |

## 禁止

- 游戏官方 Logo、角色立绘、UI 截图切片
- 无明确许可的 Fanart / 站酷未授权素材
- 带商标的第三方 icon 包（未核对许可）

## 文件约定

```
docs/themes/{id}/
  assets-catalog.md          # Phase 1.5 产出：图标选型表
packages/themes/{id}/
  assets/
    ATTRIBUTION.md           # 许可与来源链接
    icons/*.svg              # 原始 SVG（构建时内联进 CSS）
  {prefix}-decorations.css     # 组件点缀（mask / 水印）
```
