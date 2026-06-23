# 明日方舟「岁的界园志异」UI 样式与资源调研

> 调研目标：为 `@sa2kit-ui` 组件库新增 **界园主题（jieyuan-garden）** 提供视觉规范与资源索引。  
> 方法论：官方/社区资料检索 + 《明日方舟》通用 UI 规范 + **ui-ux-pro-max** 设计系统建议。  
> 调研日期：2026-06-22

---

## 1. 主题概述

| 项 | 内容 |
|---|---|
| 中文名 | 岁的界园志异 / 界园志异 |
| 英文名 | Sui's Garden of Grotesqueries / The Garden of Grotesqueries |
| 类型 | 集成战略（Integrated Strategies）#6 常驻主题 |
| 国服开启 | 2025-07-15（PRTS / 官方通讯） |
| 文化内核 | 大炎园林、岁兽、志怪、规则怪谈、聊斋/述异记气质 |
| 情感基调 | 梦幻、空灵、神秘、宁静；**艳丽下藏怪诞与不安**（非纯治愈向） |
| 视觉关键词 | 新国风、粉青渐变、剪纸层叠、宋代山水、水墨晕染、亭台楼阁、祥云、虬松、莲花灯、日晷/烛火 |

**一句话定位**：在「舟味」工业 UI 骨架上，叠加 **东方志怪园林** 的装饰层——明亮像游园，细节却透出 **中式噩梦** 的错位感。

---

## 2. 官方与权威资源索引

### 2.1 官方页面

| 资源 | URL | 说明 |
|---|---|---|
| 集成战略主题官网 | https://ak.hypergryph.com/is/gardenofgrotesqueries | 主入口；含「进入」与各子模块导航 |
| 听运亭 TINGYUNTING | 同上站内 | 投钱算运、气运/境缘（曾限时网页活动） |
| 录籍塔 LUJITA | 同上 | 敌方单位图鉴 |
| 迎客楼 YINGKELOU | 同上 | 特勤干员「电弧」养成 |
| 藏宝阁 CANGBAOGE | 同上 | 收藏品 / 珍玩展柜 |
| 回望门 HUIWANGMEN | 同上 | 全服/个人数据统计（需登录） |
| 留影祠 LIUYINGCI | 同上 | 主题影像信息 |
| 宣传 PV | 官方 B 站 / 游戏内 | 水墨开场、锁链日晷、陨星碎片、昼夜光影 |
| 前置故事集 | 「镜中集」 | 聊斋式怪谈前置；代币「界园残简」 |

### 2.2 Wiki / 社区资料

| 资源 | URL | 用途 |
|---|---|---|
| PRTS 主题总览 | https://prts.wiki/w/岁的界园志异 | 机制、区域、难度、拓展时间表 |
| 见字图册 | https://prts.wiki/w/岁的界园志异/见字图册 | **67 张插画**（3 主界面 + 56 事件 + 8 结局） |
| 萌娘百科 | https://zh.moegirl.org.cn/明日方舟/集成战略/岁的界园志异 | 玩法与名词对照 |
| 配色提取（主视觉） | https://www.color5.com/upload/color-scheme/39353.html | 7 主色 + 2 点缀色（见 §3） |

### 2.3 设计分析 / 二创参考

| 资源 | URL | 用途 |
|---|---|---|
| 腾讯游戏学堂 UI/UX 分析 | http://gameinstitute.qq.com/knowledge/100122 | **舟味**通用规范：层级、毛玻璃、噪点、卡片 |
| 「舟味」设计美学 PDF | https://janniewang.net/wp-content/uploads/2023/09/UIUX-analysis-for-Arknights.pdf | 字体字重、卡片深度、动效节奏 |
| 社区 ak-ui 设计规范 | https://ak-ui.yunyoujun.cn/components/ | 开源舟风组件色彩/字体参考 |
| 界园 UI 图标 PS 教程 | https://www.zcool.com.cn/work/ZNzIzOTY4ODQ=.html | 图标绘制思路（站酷） |
| 官方站美术（Instagram） | krusierweasley 帖文 | 官网插画 + hover 动效说明 |
| 线下沉浸展报道 | https://news.qq.com/rain/a/20250716A09XCO00 | 剪纸+水彩+怪诞配色论述 |

> ⚠️ **版权**：游戏美术、图标、字体文件属 Hypergryph 版权。主题实现应使用 **自研 SVG/CSS 纹理** 与 **可商用字体**，仅参考配色与结构，不直接搬运官方素材。

---

## 3. 配色系统（界园主视觉提取）

来源：界园志异主视觉界面色板分析（color5.com，置信度 98%）。

### 3.1 主色（按占比）

| Token 建议名 | Hex | 占比 | 用途建议 |
|---|---|---|---|
| `--jy-pink-500` | `#F37992` | 25.8% | 主强调、标题装饰、渐变起点 |
| `--jy-pink-400` | `#F59CB0` | 20.7% | 卡片高光、hover 光晕 |
| `--jy-pink-200` | `#F3C0D0` | 20.1% | 浅底、标签背景 |
| `--jy-mist-100` | `#F0EBEC` | 16.0% | 页面背景、雾面底 |
| `--jy-rose-400` | `#C97B7E` | 11.7% | 次级强调、边框、分隔 |
| `--jy-mint-300` | `#B7D7C9` | 3.9% | 粉青过渡、成功/ calm 态 |
| `--jy-pine-600` | `#5C8578` | 1.8% | 深青绿、正文辅助 |

### 3.2 点缀色

| Token 建议名 | Hex | 用途建议 |
|---|---|---|
| `--jy-teal-deep` | `#214E4D` | CTA、链接、选中态、深色描边 |
| `--jy-gold` | `#E0AF62` | 稀有/警告/「通宝」高光、focus ring |

### 3.3 渐变建议

```css
/* 主背景：粉 → 雾 → 浅青 */
--jy-gradient-sky: linear-gradient(
  165deg,
  #F3C0D0 0%,
  #F0EBEC 45%,
  #B7D7C9 100%
);

/* 卡片表面：纸面感 */
--jy-gradient-paper: linear-gradient(
  180deg,
  rgba(255, 255, 255, 0.92) 0%,
  rgba(240, 235, 236, 0.88) 100%
);
```

### 3.4 语义色映射（组件库）

| 语义 | 界园映射 | 备注 |
|---|---|---|
| primary | `#214E4D` → hover `#5C8578` | 深青为主按钮，非动森薄荷青 |
| secondary | `#C97B7E` | 偏玫瑰灰 |
| accent / highlight | `#E0AF62` | 通宝/烛火感 |
| success | `#5C8578` | 松青 |
| danger | `#C94444` 或偏 `#C97B7E` 加深 | 保持 WCAG 4.5:1 |
| background | `#F0EBEC` | 雾粉纸色 |
| surface / card | `#FFFFFF` @ 88–96% opacity | 半透纸卡 |
| foreground | `#214E4D` | 正文优先深青，非纯黑 |
| muted | `#6e6e73` ~ `#8a7b66` 混合 | 说明文字 |
| border | `rgba(33, 78, 77, 0.12)` | 淡墨线 |
| ring / focus | `#E0AF62` + 外发光 | 替代动森 `#ffcc00` |

### 3.5 ui-ux-pro-max 校色建议

- **Product 类型**：Portfolio/Personal → Motion-Driven；Gaming → Vibrant + immersive  
- **Pink-Teal 参考系**：背景 `#F0FDFA` 类思路可映射到 `#F0EBEC` + `#B7D7C9`  
- **对比度**：浅粉底 `#F3C0D0` 上正文必须用 `#214E4D` 或更深，避免 `#F37992` 上浅字  
- **Anti-pattern**：避免 generic 国潮大红大金；界园是 **粉青病态华丽**，不是春节红

### 3.6 v2 加深色板（预览页采用）

> 反馈：v1 预览「有颜色区域偏少且偏浅」。v2 提高饱和度、扩大着色面（导航/卡片变体/Tab/表头/通宝槽）。

| Token | v1 | v2（推荐） | 变化 |
|---|---|---|---|
| pink-600 | — | `#D44A6A` | 新增深粉强调 |
| pink-500 | `#F37992` | `#E85A7A` | 饱和度 ↑ |
| pink-200 | `#F3C0D0` | `#E8A0B8` | 底色更粉 |
| mist/bg | `#F0EBEC` | `#E6D8DC` / `#E8D4DA` | 页面底更染色 |
| teal-deep | `#214E4D` | `#163A39` | 主文字/按钮更深 |
| pine | `#5C8578` | `#4A7366` | 辅助色加深 |
| mint | `#B7D7C9` | `#8FC4AD` | 粉青过渡更明显 |
| gold | `#E0AF62` | `#D49A3A` | 通宝/Focus 更暖 |
| border | `0.12` α | `0.22–0.38` α | 描边更清晰 |

**着色策略**：组件不再仅用白底 + 淡边框，而是 `jy-card--pink / --mint / --teal` 三色卡片变体 + 渐变按钮 + 图片门楼 tile。

---

## 4. 字体与排版

### 4.1 方舟通用规范（全主题继承）

| 场景 | 字体 | 字重 | 字间距 |
|---|---|---|---|
| 干员代号 / 大标题 | 思源黑体 Source Han Sans | Heavy | -100 |
| 档案正文 | 思源黑体 | Normal | -100 |
| 技能说明 | 思源黑体 | Normal | 0 |

来源：janniewang UI/UX 分析 PDF。

### 4.2 界园主题推荐（ui-ux-pro-max + 文化贴合）

| 角色 | 推荐字体 | 理由 |
|---|---|---|
| Display / 章节名 | **Noto Serif SC** | ui-ux-pro-max「Chinese Traditional」；契合见字、匾额、志怪 |
| UI / 正文 | **Noto Sans SC** | 与方舟习惯一致，可读性高 |
| 装饰/手书点缀 | **ZCOOL XiaoWei** 或 **Ma Shan Zheng**（ sparingly ） | 模拟题字/签文，仅用于 Badge/装饰 |

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&family=Noto+Serif+SC:wght@500;600;700&display=swap');

--jy-font-display: 'Noto Serif SC', 'Source Han Serif SC', serif;
--jy-font-body: 'Noto Sans SC', 'Source Han Sans SC', system-ui, sans-serif;
```

### 4.3 字号阶梯（建议）

| Token | 桌面 | 移动 | 用途 |
|---|---|---|---|
| display | 40–56px | 32–40px | 「界园志异」级标题 |
| h1 | 28–36px | 24–28px | 区块标题 |
| h2 | 20–24px | 18–20px | 卡片标题 |
| body | 16px | 16px | 正文（禁止 <14px 主文） |
| caption | 12–13px | 12px | 编号、副标（NO.xxxxx） |
| label | 14px / 600 | 14px | 按钮、Tab |

---

## 5. UI 样式语言（舟味 × 界园）

### 5.1 方舟通用 UI 模式（所有 IS 主题共享骨架）

来源：腾讯游戏学堂、《舟味》PDF、ak-ui。

| 模式 | 描述 | 组件库落地 |
|---|---|---|
| **高对比层级** | 前景 UI 与背景插画对比强 | z-index 分层 + 半透明遮罩 |
| **毛玻璃 / Acrylic** | 弹窗、浮层 blur 透视下层 | `backdrop-filter: blur(12–20px)` |
| **卡片 + 轻阴影** | Material 式卡片抬升 | `box-shadow` 软阴影，非动森 5px 硬阴影 |
| **噪点 Grain** | 散点网点，防留白单薄 | CSS `background-image` 噪点 SVG / `filter: noise` |
| **警示条纹** | 粗条纹底纹，工业感 | 分隔线、稀有条、通宝栏 |
| **Vignette 暗角** | 中心亮、四周暗 | 全屏背景 `radial-gradient` |
| **堆叠浮窗** | 减少路由跳转 | Modal/Drawer 覆盖而非整页跳 |
| **局部位移** | 同 canvas 内信息展开 | 面板 slide / 数字展开 |
| **动效** | 150–400ms；入场 ease-out | framer-motion / CSS transition |
| **编号系统** | NO.xxxxx 风格编号 | Badge、版本号、列表序号 |

### 5.2 界园特有装饰层

| 元素 | 视觉描述 | 实现建议 |
|---|---|---|
| 剪纸层叠 | 山峦/建筑/松枝分层，硬边剪影 | 多层 SVG `clip-path`，parallax 2–3 层 |
| 水墨晕染 | PV 开场、背景过渡 | 大号 blur 色块 + 低 opacity |
| 园林符号 | 亭台、祥云、莲花灯、锁链日晷 | 装饰性 SVG（线性图标） |
| 纸笺/见字 | 竖排文字、签文卡片 | 竖排 CSS `writing-mode: vertical-rl` |
| 通宝/钱盒 | 三币制：花钱/衡钱/厉钱 | Tag 三色 + 圆角矩形「铜钱」图标 |
| 烛火 | 进度/残识节点 | 细线进度 + 暖金 `#E0AF62` 光点 |
| 镇陵木/匾额 | 横批、对联消失感 | 边框装饰 + serif 大标题 |

### 5.3 与 animal-island 主题差异

| 维度 | animal-island | jieyuan-garden |
|---|---|---|
| 圆角 | pill 50px | 中等 12–20px + 偶发切角/窗棂感 |
| 阴影 | 3D 5px 厚阴影按钮 | 软阴影 + 纸面浮雕 |
| 主色 | 薄荷 `#19c8b9` | 粉青 + 深青 `#214E4D` |
| 字体 | Nunito 圆润 | Noto Serif/Sans 偏正式 |
| 气质 | 动森温馨 | 志怪园林、艳丽不安 |
| Cursor | 自定义 cursor | 可选「烛火/毛笔」指针 |

---

## 6. 游戏内 UI 模块对照（命名即组件灵感）

| 游戏模块 | 功能 | 组件库可抽象 |
|---|---|---|
| 听运亭 | 运势/推荐 | `OraclePanel` / 占卜卡片 |
| 古今学识 | 技能树 | `TechTree` / 节点图 |
| 钱盒 | 通宝管理 | `TokenSlot` ×7 网格 |
| 见字图册 | 图鉴/插画 | `GalleryCard` / 竖排题字 |
| 藏宝阁 | 收藏品 | `CollectibleGrid` |
| 留影祠 | 媒体库 | `MediaTile` |
| 游览者列表 | 角色 roster | `AvatarList` |
| 底栏 | 投钱/层进度 | `BottomBar` / `StepIndicator` |

---

## 7. ui-ux-pro-max 落地清单

### 7.1 必须遵守（Priority 1–5）

- [ ] 正文对比度 ≥ 4.5:1（浅粉底用深青字）
- [ ] 触控目标 ≥ 44×44px
- [ ] Focus ring 可见（建议 `#E0AF62` 2px）
- [ ] `prefers-reduced-motion` 关闭 parallax/长动画
- [ ] 移动优先：375 / 768 / 1024 / 1440 断点
- [ ] 图标用 SVG，**禁止 emoji 当图标**
- [ ] 可点击元素 `cursor: pointer`

### 7.2 风格选择（Priority 4）

- **Primary style**：Motion-Driven（scroll reveal、hover 300ms）
- **Layout**：Bento Grid（录籍塔/藏宝阁式卡片墙）
- **Secondary**：Soft UI Evolution（半透明卡片 + 软阴影）
- **Avoid**：Corporate 模板、纯 Flat 无层次、春节国潮红金

### 7.3 动效参数

| 场景 | 时长 | 曲线 |
|---|---|---|
| Hover 卡片 | 200–280ms | ease-out |
| Modal 入场 | 280–320ms | ease-out |
| Modal 退出 | 180–220ms | ease-in |
| 列表 stagger | 30–50ms/项 | — |
| Parallax 背景 | 随 scroll | reduced-motion 时禁用 |

---

## 8. 建议主题 Token 草案（供 `packages/themes/jieyuan-garden/`）

```css
/* 前缀建议：--jy-* 或 --sa2-jy-* */
:root[data-theme="jieyuan-garden"] {
  /* Color — v2 加深 */
  --sa2-color-primary: #163A39;
  --sa2-color-primary-hover: #4A7366;
  --sa2-color-accent: #D49A3A;
  --sa2-color-accent-soft: #E8A0B8;
  --sa2-color-pink: #E85A7A;
  --sa2-color-mint: #8FC4AD;
  --sa2-color-bg: #E8D4DA;
  --sa2-color-surface: rgba(255, 252, 253, 0.96);
  --sa2-color-text: #163A39;
  --sa2-color-text-muted: #4A7366;
  --sa2-color-border: rgba(22, 58, 57, 0.22);

  /* Radius */
  --sa2-radius-sm: 8px;
  --sa2-radius-md: 14px;
  --sa2-radius-lg: 20px;
  --sa2-radius-pill: 999px;

  /* Shadow */
  --sa2-shadow-sm: 0 2px 12px rgba(33, 78, 77, 0.08);
  --sa2-shadow-md: 0 8px 28px rgba(33, 78, 77, 0.12);
  --sa2-shadow-focus: 0 0 0 3px rgba(224, 175, 98, 0.35);

  /* Effect */
  --sa2-backdrop: blur(16px) saturate(1.1);
  --sa2-grain-opacity: 0.04;

  /* Typography */
  --sa2-font-display: 'Noto Serif SC', serif;
  --sa2-font-body: 'Noto Sans SC', sans-serif;
}
```

---

## 9. 素材清单（实现阶段）

### 9.1 已落地（预览 v2）

| 文件 | 路径 | 用途 |
|---|---|---|
| 7 张园林摄影 | `docs/themes/jieyuan-garden/assets/*.jpg` | Hero、六门楼、表单配图、Modal 横幅 |
| 归属说明 | `docs/themes/jieyuan-garden/assets/ATTRIBUTION.md` | Unsplash/Pexels 许可与链接 |
| HTML 预览 | `docs/themes/jieyuan-garden-preview.html` | 独立验收页 **v3**（粉青滤镜） |

### 9.2 仍待自研

| 类型 | 数量建议 | 说明 |
|---|---|---|
| 噪点纹理 PNG/SVG | 1–2 | 4–8% opacity 平铺（预览已用 CSS noise） |
| 警示斜纹 SVG | 1 | 分隔/稀有条（预览已用 CSS 斜纹） |
| 祥云/松枝/窗棂 SVG | 6–10 | 线性单色，可着色 |
| 通宝图标 SVG | 3 | 花钱/衡钱/厉钱（预览为 CSS 圆环占位） |
| 烛火/进度 SVG | 2 | 线性 + 填充 |
| 剪纸山峦 silhouette | 3 层 | parallax 背景 |

---

## 10. 参考截图采集建议

实现前建议自行截图归档（避免侵权传播）：

1. 官方站 https://ak.hypergryph.com/is/gardenofgrotesqueries 首页 + 各子模块
2. 游戏内集成战略主界面、古今学识树、钱盒底栏
3. 见字图册任意 3 张事件插画（色彩参考）
4. 与普通「舟味」主界面对比 1 张

---

## 11. 下一步（主题包实现）

1. 在 `packages/themes/jieyuan-garden/` 建立与 `animal-island` 平行结构  
2. `theme.css` + `tailwind.preset.js` + `jieyuan-plugin.js`（采用 **§3.6 v2 色板**）  
3. 将 `docs/themes/jieyuan-garden/assets/` 迁入主题包或 CDN  
4. docs Ladle 增加 `Theme: Jieyuan Garden` 故事页  
5. 与 profile-v1 / sa2kit demo 各挂一个预览路由  

---

## 12. 图片资源库（可商用 · 预览已用）

> ⚠️ 非 Hypergryph 官方素材。主题包发布时需保留许可说明；生产环境可换自研插画。

### 12.1 本地缓存（离线预览）

| 文件 | 映射模块 | 场景关键词 |
|---|---|---|
| `hero-pavilion.jpg` | Hero / Modal | 亭台倒影、水景 |
| `module-lantern.jpg` | 听运亭 | 粉灯、园林夜感 |
| `module-garden.jpg` | 录籍塔 | 豫园式庭院 |
| `module-cherry.jpg` | 藏宝阁 | 樱花、珍玩氛围 |
| `module-pavilion.jpg` | 迎客楼 | 翠绿亭台 |
| `module-bridge.jpg` | 回望门 | 曲桥、统计回顾 |
| `module-lanterns-night.jpg` | 留影祠 | 夜间灯笼、影像 |

### 12.2 在线图库（可继续扩展）

| 平台 | 搜索关键词 | 示例链接 |
|---|---|---|
| Unsplash | `chinese garden pavilion pond` | https://unsplash.com/photos/VEDMOmy9lTQ |
| Unsplash | `chinese pavilion lush greenery` | https://unsplash.com/photos/Jwz9BIslsDo |
| Unsplash | `lantern garden pink` | https://unsplash.com/photos/FZGBIb3zQqo |
| Unsplash | `chinese lanterns night` | https://unsplash.com/photos/fjJHGgeBBz8 |
| Unsplash | `chinese garden bridge` | https://unsplash.com/photos/Cn_k-LFIops |
| Pexels | `zen garden cherry blossoms` | https://www.pexels.com/photo/tranquil-japanese-zen-garden-with-cherry-blossoms-37236541/ |

**许可**：Unsplash License / Pexels License — 可免费用于商业项目；详见各站条款。

### 12.3 组件 ↔ 图片用法

| 组件 | 建议图位 |
|---|---|
| Hero | 左/背景全宽摄影 + 粉青渐变遮罩 |
| 门楼 Tile | 底图 cover + 底部 teal→pink 渐变字层 |
| Form Card | 左侧 4:3 配图 |
| Modal | 顶栏 banner 8rem |
| 钱盒/表格 | 可选角标缩略图或行内 icon |
| 见字卡片 | 竖排字 + 浅金左边框（可无图） |

### 12.4 v3 统一粉青滤镜（`.jy-img-tone`）

预览 v3 起，所有摄影组件共用同一套 CSS 滤镜，主题包实现时可直接复用：

```css
--jy-img-filter: saturate(1.18) contrast(1.06) brightness(0.94) hue-rotate(2deg);
--jy-img-overlay: linear-gradient(
  128deg,
  rgba(232, 90, 122, 0.5) 0%,
  rgba(232, 160, 184, 0.28) 52%,
  rgba(22, 58, 57, 0.22) 100%
);
--jy-img-glow: linear-gradient(
  165deg,
  rgba(239, 109, 143, 0.26) 0%,
  rgba(240, 235, 236, 0.18) 100%
);
```

**结构**：容器加 class `jy-img-tone`，内嵌 `<img>`；`::before` soft-light 粉青光、`::after` multiply 粉青渐变叠层。  
**应用范围**：Hero、六门楼 Tile、Form 配图、Media 缩略条、Modal 横幅。

---

## 附录 A：名词对照

| 中文 | 英文/拼音 | UI 关联 |
|---|---|---|
| 界园志异 | Garden of Grotesqueries | 主题名 |
| 听运亭 | Tingyun Pavilion | 运势页 |
| 古今学识 | — | 科技树 UI |
| 通宝 | Tongbao | 代币 Tag |
| 钱盒 | Coin Box | 7 格槽位 |
| 见字图册 | — | 图鉴 Gallery |
| 岁兽残识 | — | 特殊地图层 |
| 伺烛客 | — | 角色状态 Badge |
| 界园残简 | — | 活动代币 |

---

## 附录 B：来源链接汇总

- https://ak.hypergryph.com/is/gardenofgrotesqueries  
- https://prts.wiki/w/岁的界园志异  
- https://prts.wiki/w/岁的界园志异/见字图册  
- https://www.color5.com/upload/color-scheme/39353.html  
- http://gameinstitute.qq.com/knowledge/100122  
- https://janniewang.net/wp-content/uploads/2023/09/UIUX-analysis-for-Arknights.pdf  
- https://ak-ui.yunyoujun.cn/components/  
- https://news.qq.com/rain/a/20250716A09XCO00  
