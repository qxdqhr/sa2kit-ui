# 明日方舟「终末地」UI 样式与资源调研

> 调研目标：为 `@sa2kit-ui` 新增 **终末地主题（endfield）** 提供视觉规范与资源索引。  
> 方法论：官方/社区资料检索 + 工业机能风 UI 分析 + 舟味延续性对照。  
> 调研日期：2026-06-24

---

## 1. 主题概述

| 项 | 内容 |
|---|---|
| 中文名 | 明日方舟：终末地 |
| 英文名 | Arknights: Endfield |
| 类型 | 鹰角网络 3D 工业拓荒 RPG |
| 文化内核 | 终末地工业实体、管理员终端、画内 HUD、基建与拓荒 |
| 情感基调 | 冷峻、克制、警示；低饱和环境中以明黄高亮引导操作 |
| 视觉关键词 | 黑白灰基底、警戒黄、CMYK 色带、三角/徽章 motif、拟物控制面板、CAD 网格 |

**一句话定位**：在舟味工业 UI 骨架上，叠加 **终末地工业控制终端** 层——灰白冷底、黑字可读、明黄警示高亮，像管理员全息 HUD 投影到页面。

---

## 2. 官方与权威资源索引

| 资源 | URL | 说明 |
|---|---|---|
| 终末地官网 | https://endfield.hypergryph.com/ | 官方品牌与视觉 |
| 17173 UI/UX 分析 | https://news.17173.com/z/arknights2026/content/01132026/164645051.shtml | 工业标识、信息架构 |
| 17173 叙事与 UI | https://news.17173.com/z/arknights2026/content/01162026/114808355.shtml | Logo 渗透、配装站界面 |
| B站色彩运用笔记 | https://www.bilibili.com/opus/1012354732615794692 | 黄黑白工业配色解析 |
| TapTap 工业美学 | https://www.taptap.cn/moment/770521483913988376 | CMYK 色条、低饱和与明黄对比 |
| 微信设计美学长文 | https://mp.weixin.qq.com/s/qyt4lCEBNZr1M4gbRK4XMA | 画内界面、拟物控制面板 |
| 「舟味」UI/UX PDF | https://janniewang.net/wp-content/uploads/2023/09/UIUX-analysis-for-Arknights.pdf | 卡片层级与交互范式 |
| ak-ui 社区规范 | https://ak-ui.yunyoujun.cn/components/ | 舟风组件色彩参考 |

> ⚠️ **版权**：游戏美术、Logo、字体文件属 Hypergryph 版权。实现使用 **自研 CSS/SVG 纹理** 与 **Google Fonts**，仅参考配色与信息架构。

---

## 3. 配色系统（定稿 v1）

| Token | Hex | 用途 |
|---|---|---|
| `--ef-yellow-500` | `#ffd000` | 主色、Primary 按钮、选中高亮 |
| `--ef-yellow-600` | `#e6bc00` | hover、pressed |
| `--ef-yellow-700` | `#c9a300` | 深黄、阴影 |
| `--ef-gray-950` | `#1a1a1e` | 主文字、深色面板 |
| `--ef-gray-900` | `#2a2a30` | 次级深底 |
| `--ef-gray-600` | `#5c5c66` | 次级文字 |
| `--ef-gray-200` | `#d4d4da` | 边框、分隔 |
| `--ef-gray-100` | `#e8e8ec` | 页面雾面底 |
| `--ef-white` | `#f4f4f6` | 卡片/面板 |
| `--ef-cyan-500` | `#00d4e8` | CMYK 青、链接 accent |
| `--ef-magenta-500` | `#e840a0` | CMYK 品红点缀 |
| `--ef-danger` | `#e03c3c` | 错误、危险操作 |

渐变：
- `--ef-gradient-yellow`: `#ffd000 → #e6bc00`
- `--ef-gradient-panel`: `#f4f4f6 → #e8e8ec`

---

## 4. 字体与排版

| 用途 | 字体 | 来源 |
|---|---|---|
| 正文/界面 | Noto Sans SC | Google Fonts |
| 数据/编号 | JetBrains Mono | Google Fonts |
| 标题 | Noto Sans SC 600–700 | 工业无衬线 |

圆角偏小（4–8px）；字间距略增；按钮与标签偏扁平、少 3D 厚底。

---

## 5. 组件视觉要点

| 组件 | 终末地特征 |
|---|---|
| Button | 直角偏小圆角；Primary 明黄底黑字；Default 白底灰边 |
| Input | 白底实线框；focus 黄色环 |
| Card | 浅灰面板 + 细边框；可选左侧黄色 accent |
| Modal | 深色半透明遮罩；面板带 CMYK 色条装饰 |
| Tabs | 下划线 active 黄色 |
| Tag | 黄/青/品红分类（任务/数据/警示） |

---

## 6. 与 animal-island 的差异

| 维度 | 动森岛 | 终末地 |
|---|---|---|
| 气质 | 温馨圆润 | 冷峻工业、警示感 |
| 主色 | 青绿 teal | 明黄 + 黑白灰 |
| 圆角 | 大（14–20px） | 小（4–8px） |
| 阴影 | 厚底 3D | 扁平 + 轻投影 |
| 装饰 | 波浪、叶子 | 网格、CMYK 色带、三角 |

---

## 7. 版权与实现约束

1. 不打包官方 Logo、角色立绘、游戏字体文件  
2. `--animal-*` / `--sa2-*` 映射到终末地 token，复用 `.sa2-*` 结构  
3. overlay 主题，不修改 `packages/react` 组件 TSX
