# 明日方舟「莱茵生命」UI 样式与资源调研

> 调研目标：为 `@sa2kit-ui` 新增 **莱茵生命主题（rhine-life）** 提供视觉规范与资源索引。  
> 方法论：官方/社区资料检索 + 「舟味」UI 分析 + 二创设计参考。  
> 调研日期：2026-06-23

---

## 1. 主题概述

| 项 | 内容 |
|---|---|
| 中文名 | 莱茵生命 / 莱茵生命科工 |
| 英文名 | Rhine Lab / Rhine Life |
| 类型 | 泰拉世界生命科学、源石技艺与工业研发巨头 |
| 文化内核 | 生命科学与科技融合、实验室秩序、企业级 PRTS 终端感 |
| 情感基调 | 洁净、理性、高效；偶有警示色点缀的「临床科幻」 |
| 视觉关键词 | 绿白主调、全息悬浮块、卡片层级、毛玻璃、高灰度底、黄橙警示、六边形/网格 motif |

**一句话定位**：在舟味工业 UI 骨架上，叠加 **莱茵生命企业实验室** 的视觉层——白绿洁净、数据可读、边框清晰，像 PRTS 终端里的科研管理界面。

---

## 2. 官方与权威资源索引

| 资源 | URL | 说明 |
|---|---|---|
| PRTS Wiki（组织） | https://prts.wiki/w/莱茵生命 | 背景、部门、人物与设定 |
| 萌娘百科 | https://zh.moegirl.org.cn/明日方舟/莱茵生命 | 中文名词对照 |
| 「舟味」UI/UX 分析 PDF | https://janniewang.net/wp-content/uploads/2023/09/UIUX-analysis-for-Arknights.pdf | 卡片层级、毛玻璃、交互范式 |
| 腾讯游戏学堂 UI 分析 | http://gameinstitute.qq.com/knowledge/100122 | 阵营色调与符号延伸 |
| 社区 ak-ui 规范 | https://ak-ui.yunyoujun.cn/components/ | 舟风组件色彩参考 |
| Behance 莱茵 UI 练习 | https://www.behance.net/gallery/135431879/-UI-Arknights-Game-UI | 二创界面结构参考 |
| 站酷 莱茵主题练习 | https://www.zcool.com.cn/work/ZNTc1NzY1ODg=.html | 布局与模块参考 |
| Rhine Lab 网页 Demo | https://ely2112.github.io/Rhine_Lab/ | 开源 landing 结构参考 |

> ⚠️ **版权**：游戏美术、Logo、字体文件属 Hypergryph 版权。实现使用 **自研 CSS/SVG 纹理** 与 **Google Fonts**，仅参考配色与信息架构。

---

## 3. 配色系统（定稿 v1）

| Token | Hex | 用途 |
|---|---|---|
| `--rl-green-700` | `#007a52` | 主色深、pressed |
| `--rl-green-600` | `#009663` | 主色、Primary 按钮 |
| `--rl-green-500` | `#00b37a` | hover、强调条 |
| `--rl-green-200` | `#b8e8d4` | 浅绿底、标签 |
| `--rl-lab-100` | `#eef3f1` | 页面雾面底 |
| `--rl-lab-white` | `#f8fbfb` | 卡片/面板 |
| `--rl-slate-900` | `#15201c` | 主文字 |
| `--rl-slate-600` | `#4a5f58` | 次级文字 |
| `--rl-cyan-500` | `#2eb8c9` | 科技 accent、链接 |
| `--rl-amber-500` | `#f5a623` | 警告、焦点环 |
| `--rl-orange-500` | `#e8873a` | 能量/次级强调 |
| `--rl-danger` | `#d94040` | 错误、危险操作 |

渐变：
- `--rl-gradient-green`: `#00b37a → #007a52`
- `--rl-gradient-lab`: `#f8fbfb → #eef3f1`

---

## 4. 字体与排版

| 用途 | 字体 | 来源 |
|---|---|---|
| 正文/界面 | Noto Sans SC | Google Fonts |
| 数据/编号 | JetBrains Mono | Google Fonts |
| 标题 | Noto Sans SC 600–700 | 无衬线、偏工业 |

字号与动森 base 对齐（14px body）；标题 letter-spacing 略增（0.02–0.06em）。

---

## 5. 组件视觉要点

| 组件 | 莱茵特征 |
|---|---|
| Button | 圆角 6–8px；Primary 绿渐变+细描边；Default 白底灰边；hover 微 glow |
| Input | 白底、1px 实线边框；focus 琥珀色环 |
| Card | 白/浅绿面板 + 轻阴影；可选左侧绿色 accent 条 |
| Modal | 毛玻璃感 overlay；面板直角略圆 |
| Tabs | 下划线/胶囊底；active 绿色 |
| Tag | 绿/青/琥珀三色分类（实验/数据/警示） |

---

## 6. 与 animal-island 的差异

| 维度 | 动森岛 | 莱茵生命 |
|---|---|---|
| 气质 | 温馨圆润、手作感 | 临床、企业、实验室 |
| 主色 | 青绿/teal 动森色 | 莱茵绿 + 白灰 |
| 圆角 | 大（14–20px） | 中小（6–10px） |
| 阴影 | 厚底 3D 按钮 | 扁平 + 轻投影 |
| 装饰 | 波浪线、叶子 | 网格线、hex 点阵 |

---

## 7. 版权与实现约束

1. 不打包官方 Logo、角色立绘、游戏字体文件  
2. `--animal-*` / `--sa2-*` 映射到莱茵 token，复用 `.sa2-*` 结构  
3. overlay 主题，不修改 `packages/react` 组件 TSX
