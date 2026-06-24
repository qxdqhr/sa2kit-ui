# 明日方舟「探索者的银凇止境」萨米肉鸽 UI 样式与资源调研

> 调研目标：为 `@sa2kit-ui` 新增 **萨米肉鸽主题（sami-roguelike）** 提供视觉规范与资源索引。  
> 调研日期：2026-06-24

---

## 1. 主题概述

| 项 | 内容 |
|---|---|
| 中文名 | 探索者的银凇止境 / 萨米肉鸽 |
| 英文名 | Expeditioner's Joklum Calenture |
| 类型 | 《明日方舟》集成战略第四期（IS4） |
| 文化内核 | 萨米冰原、密文板宣告、坍缩范式、冬夜展览馆 |
| 情感基调 | 凛冽、静谧、神秘；冰雪冷色中点缀密文四色 |
| 视觉关键词 | 银凇、冰蓝、雪雾、密文板红绿蓝灰、坍缩、冷冽 HUD |

**主题 ID**：`sami-roguelike`

**一句话定位**：舟味工业骨架 + **萨米冰原集成战略终端**——深蓝雪雾底、霜白可读字、冰青高亮，辅以密文板四色分类点缀。

---

## 2. 官方与权威资源索引

| 资源 | URL | 说明 |
|---|---|---|
| 官方集成战略 | https://ak.hypergryph.com/is/sami | 银凇止境主视觉 |
| PRTS Wiki | https://prts.wiki/w/探索者的银凇止境 | 机制与名词 |
| 密文板研究 | https://prts.wiki/w/探索者的银凇止境/密文板研究 | 四色分类体系 |
| 17173 上手攻略 | https://news.17173.com/z/arknights/content/09132023/202559105.shtml | 密文板、远见、坍缩 |
| TapTap 冰原手册 | https://www.taptap.cn/moment/432546006400241437 | 密文板颜色与协语 |
| ak-ui 社区规范 | https://ak-ui.yunyoujun.cn/components/ | 舟风组件参考 |

---

## 3. 配色系统（定稿 v1）

| Token | Hex | 用途 |
|---|---|---|
| `--sr-frost-950` | `#0f1a24` | 最深夜雪 |
| `--sr-frost-900` | `#1a2838` | 页面深渊底 |
| `--sr-frost-800` | `#243648` | 面板深底 |
| `--sr-frost-cyan` | `#7ec8e8` | 主色、冰青高亮 |
| `--sr-frost-cyan-bright` | `#a8dff5` | hover |
| `--sr-snow-100` | `#eaf4fc` | 主文字 |
| `--sr-snow-200` | `#c8dce8` | 次级文字 |
| `--sr-board-red` | `#c45a5a` | 族群密文 |
| `--sr-board-green` | `#5ab878` | 灵魂密文 |
| `--sr-board-blue` | `#5a8ec8` | 自然密文 |
| `--sr-board-gray` | `#8a9aa8` | 世相密文 |

渐变：`--sr-gradient-frost`: `#7ec8e8 → #4a9ec4`

---

## 4. 字体与排版

Noto Sans SC + JetBrains Mono；圆角 8–12px；细边框 + 霜雾外发光。

---

## 5. 版权与实现约束

不打包官方素材；仅 CSS token 与自研纹理。
