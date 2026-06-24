# 明日方舟「水月与深蓝之树」肉鸽 UI 样式与资源调研

> 调研目标：为 `@sa2kit-ui` 新增 **水月肉鸽主题（mizuki-roguelike）** 提供视觉规范与资源索引。  
> 方法论：官方/社区资料检索 + 集成战略 UI 分析 + 阿戈尔深海线气质提炼。  
> 调研日期：2026-06-24

---

## 1. 主题概述

| 项 | 内容 |
|---|---|
| 中文名 | 水月与深蓝之树 / 水月肉鸽 |
| 英文名 | Mizuki and Caerula Arbor |
| 类型 | 《明日方舟》集成战略第三期（IS3） |
| 文化内核 | 阿戈尔深海、大群、溟痕、骰子随机、神秘与美丽并存 |
| 情感基调 | 空灵、幽深、静谧；生物荧光与星空色交织 |
| 视觉关键词 | 深蓝海底、荧光青、水月紫、星点、有机曲线、骰子 motif、溟痕纹理 |

**主题 ID**：`mizuki-roguelike`（英文 roguelike 为肉鸽标准拼写，无需改为 rouge-like）

**一句话定位**：在舟味 UI 骨架上叠加 **深海集成战略终端**——幽蓝深渊底、珍珠白可读字、荧光青紫高亮，像水月肉鸽地图界面的星空深海 HUD。

---

## 2. 官方与权威资源索引

| 资源 | URL | 说明 |
|---|---|---|
| 官方集成战略页 | https://ak.hypergryph.com/is/caerulaarbor | 水月与深蓝之树主视觉 |
| PRTS Wiki | https://prts.wiki/w/水月与深蓝之树 | 机制、叙事、名词 |
| tomimi.dev 小帮手 | https://tomimi.dev/zh/mizuki | UI 布局参考 |
| 腾讯策划专访 | https://news.qq.com/rain/a/20250715A07RRC00 | 「深海神秘又美丽」设计目标 |
| TapTap 攻略/赏析 | https://www.taptap.cn/moment/323947151098904680 | 星空色、空灵音乐与界面 |
| ak-ui 社区规范 | https://ak-ui.yunyoujun.cn/components/ | 舟风组件色彩参考 |
| 「舟味」UI/UX PDF | https://janniewang.net/wp-content/uploads/2023/09/UIUX-analysis-for-Arknights.pdf | 卡片层级与交互范式 |

> ⚠️ **版权**：游戏美术、Logo、角色立绘属 Hypergryph 版权。实现仅用自研 CSS 纹理与 Google Fonts。

---

## 3. 配色系统（定稿 v1）

| Token | Hex | 用途 |
|---|---|---|
| `--mr-abyss-950` | `#070d1a` | 最深海底、遮罩 |
| `--mr-abyss-900` | `#0c1830` | 页面深渊底 |
| `--mr-abyss-800` | `#122548` | 面板深底 |
| `--mr-deep-700` | `#1a3560` | 次级深块 |
| `--mr-glow-cyan` | `#3de8d0` | 主色、荧光青、Primary |
| `--mr-glow-cyan-bright` | `#5cefff` | hover、高亮 |
| `--mr-glow-purple` | `#9d7aff` | 水月紫、accent |
| `--mr-glow-purple-deep` | `#6b4fd4` | pressed、深紫 |
| `--mr-pearl-100` | `#e8f4ff` | 主文字 |
| `--mr-pearl-200` | `#b8d4f0` | 次级文字 |
| `--mr-mist-400` | `#7a9cb8` | muted |
| `--mr-surface` | `rgba(18, 36, 64, 0.88)` | 卡片/面板 |
| `--mr-danger` | `#ff5c7a` | 危险、溟痕警示 |

渐变：
- `--mr-gradient-abyss`: `#122548 → #0c1830`
- `--mr-gradient-glow`: `#3de8d0 → #6b4fd4`（青紫生物光）

---

## 4. 字体与排版

| 用途 | 字体 | 来源 |
|---|---|---|
| 正文/界面 | Noto Sans SC | Google Fonts |
| 数据/骰点 | JetBrains Mono | Google Fonts |
| 标题 | Noto Sans SC 600–700 | 略带字间距，空灵克制 |

圆角中等（8–14px）；边框细、带外发光；按钮偏扁平荧光描边。

---

## 5. 组件视觉要点

| 组件 | 水月肉鸽特征 |
|---|---|
| Button | 深底 + 荧光青描边；Primary 青紫渐变发光 |
| Input | 深海面板底；focus 青色光晕 |
| Card | 半透明深蓝玻璃；星点或溟痕纹理 |
| Modal | 深渊遮罩；面板顶缘荧光条 |
| Tabs | active 荧光青下划线 |
| Tag | 青/紫/珍珠白分类（大群/骰子/事件） |

---

## 6. 与 animal-island 的差异

| 维度 | 动森岛 | 水月肉鸽 |
|---|---|---|
| 气质 | 温馨圆润 | 幽深空灵、生物荧光 |
| 主色 | 青绿 teal | 荧光青 + 水月紫 |
| 背景 | 暖白/米色 | 深蓝深渊 + 星点 |
| 圆角 | 大（14–20px） | 中（8–14px） |
| 装饰 | 波浪、叶子 | 星点、溟痕曲线、骰子 |

---

## 7. 版权与实现约束

1. 不打包官方 Logo、水月立绘、游戏字体  
2. `--animal-*` / `--sa2-*` 映射到 `--mr-*` token  
3. overlay 主题，不修改组件 TSX
