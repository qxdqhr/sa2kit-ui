# SakaiUI 新主题五阶段工作流

> 参考实现：**界园主题** `jieyuan-garden`  
> 仓库路径：`/home/qhr/project/sa2kit-ui`（SakaiUI）

当用户提供新主题（游戏 UI、品牌视觉、设计稿等）时，**严格按 Phase 1→5 顺序执行**。  
Phase 3 之前 **禁止** 修改 `packages/themes/` 或发布 npm。

---

## 总览

```
Phase 1 资料调研 ──► Phase 1.5 点缀资源 ──► Phase 2 HTML 预览 ──► 【用户确认】──► Phase 3 接入主题包
                                                                              │
Phase 5 npm 发布 ◄── Phase 4 全组件覆盖 ◄─────────────────────────────────────┘
```

| Phase | 名称 | 产出 | 门禁 |
|-------|------|------|------|
| 1 | 资料调研 | `docs/themes/{id}/ui-research.md` | 无 |
| **1.5** | **点缀资源** | `assets-catalog.md` + `assets/icons/*.svg` + `{prefix}-decorations.css` | 无 |
| 2 | HTML 预览 | `docs/themes/{id}/preview.html`（迭代 v2/v3） | 无 |
| 3 | 接入 sa2kit-ui | `packages/themes/{id}/` + runtime 注册 | **必须用户同意** |
| 4 | 全组件覆盖 | 24 组件 CSS override + Ladle Story | Phase 3 完成 |
| 5 | 构建发布 | `pnpm publish:react` + 消费侧升级 | Phase 4 + build 全绿 |

---

## Phase 1 — 资料调研

### 目标

建立可执行的视觉规范与资源索引，**禁止**直接抄版权素材。

### 执行步骤

1. **WebSearch / 官方文档**：游戏官网、Wiki、社区设计分析、开源参考（如 ak-ui）
2. **提取维度**（写入调研文档）：
   - 主题概述（中英文名、文化内核、情感基调、关键词）
   - 官方/权威 URL 索引表
   - 配色系统（Hex + Token 命名 + 用途）
   - 字体建议（可商用：Google Fonts / 思源）
   - 形状语言（圆角、阴影、边框、装饰 motif）
   - 与 base 主题（动森岛）的差异对照
   - **版权警示**：仅参考结构与配色，素材自研
3. **可选**：ui-ux-pro-max 或设计系统工具生成 palette 建议
4. **产出路径**：`docs/themes/{theme-id}/ui-research.md`

### 调研文档模板（节标题）

```markdown
# {主题中文名} UI 样式与资源调研
> 调研目标 / 方法论 / 日期

## 1. 主题概述
## 2. 官方与权威资源索引
## 3. 配色系统
## 4. 字体与排版
## 5. 组件视觉要点（Button/Card/Modal…）
## 6. 与 animal-island 的差异
## 7. 版权与实现约束
## 8. 点缀资源（图标选型表，链到 assets-catalog.md）
```

### 完成标准

- [ ] 至少 5 条可追溯 URL
- [ ] 主色 ≥ 5 个 Hex + Token 名
- [ ] 字体方案明确且可商用
- [ ] 用户可仅凭文档理解主题气质

---

## Phase 1.5 — 点缀资源（图标 / 纹理）

> **新主题必做**。细则见仓库 `docs/themes/DECORATION-WORKFLOW.md` 与 `ASSET-SOURCES.md`。

### 目标

除配色外，从**可商用白名单**（默认 Lucide ISC）选取 3～6 个 SVG，挂载到 Card / Modal / 页面 ornament，避免主题「只有色板」。

### 执行步骤

1. 读 Phase 1 关键词与 motif（工业 HUD、密文板、园林窗棂等）
2. 在 [Lucide](https://lucide.dev) / Tabler / 自研几何中选 icon，**禁止**游戏官方 Logo/立绘
3. 写入 `docs/themes/{id}/assets-catalog.md`（文件名、来源、许可、用途）
4. 落地 SVG：`packages/themes/{id}/assets/icons/`
5. 登记 `packages/themes/{id}/assets/ATTRIBUTION.md`
6. 编写 `{prefix}-decorations.css`：
   - `.sa2-card::after` — 右上角 mask 水印
   - `.sa2-modal-clipped::before` — Modal 角标
   - `.{prefix}-ornament` — 消费侧 Hero / 区块点缀
7. 在 `ui-research.md` §8（或等价节）摘要并链到 catalog
8. Phase 2 预览 HTML 须含 `.preview-ornament` 示例区块

### 构建

`scripts/build-react-style.mjs` 自动合并 `{prefix}-decorations.css`，并将 `url(./assets/icons/*.svg)` 内联为 data URI。

### 完成标准

- [ ] ≥3 个 SVG + ATTRIBUTION
- [ ] Card + Modal 有可见点缀（opacity 0.12～0.28）
- [ ] `theme.css` 含 `@import './{prefix}-decorations.css'`
- [ ] `package.json` `files` 含 decorations + `assets/**`

### 参考

| 主题 | decorations | icons |
|------|-------------|-------|
| jieyuan-garden | `jieyuan-decorations.css` | flower, lantern, bridge |
| rhine-life | `rhine-decorations.css` | flask, dna, microchip |
| endfield | `endfield-decorations.css` | triangle-alert, factory, cog |
| mizuki-roguelike | `mizuki-decorations.css` | waves, sparkles, shell |
| sami-roguelike | `sami-decorations.css` | snowflake, mountain, scroll |

---

## Phase 2 — HTML 预览页

### 目标

在 **零组件库依赖** 的独立 HTML 中验证色板、排版、代表性模块，供用户肉眼确认。

### 执行步骤

1. 创建 `docs/themes/{theme-id}/preview.html`（单文件，内联 CSS）
2. `html` 根节点设 `data-theme="{theme-id}"` 便于对照
3. **必须包含的预览模块**：
   - 导航栏 + 主题切换占位
   - Hero（标题、副标题、CTA 按钮）
   - 卡片网格（2～3 种色板）
   - 表单区（Input / 按钮态）
   - Modal 静态 mock
   - 标签 / Tabs / 分隔线
   - **点缀示例**：`.preview-ornament` 展示 Phase 1.5 选中的 icon mask
4. 使用 Phase 1 的 CSS 变量（`--{prefix}-*`），不引用 sa2kit 类名
5. 根据用户反馈在同目录迭代 `preview-v2.html` / `preview-v3.html`，**定稿后进入 Phase 3**

### 界园参考

- `docs/themes/jieyuan-garden/preview.html` → `preview-v3.html`（定稿色板）

### 完成标准

- [ ] 浏览器直接打开 HTML 可预览
- [ ] 主色/字重/圆角与调研文档一致
- [ ] 用户口头或明确消息确认「可以按此实现」

---

## Phase 3 — 接入 sa2kit-ui（需用户同意）

### 门禁

```
⛔ 未收到用户明确同意（「可以」「按这个做」「开始接入」等）→ 停止，不得创建 packages/themes/
```

### theme-id 命名

- kebab-case 英文：`jieyuan-garden`、`tech`
- `Sa2ThemeId` 与目录名一致
- CSS 变量前缀建议 2～4 字母：`--jy-*`（界园）、`--ai-*` 已用于动森 bridge

### 主题包脚手架

在 `packages/themes/{theme-id}/` 创建：

| 文件 | 用途 |
|------|------|
| `package.json` | `@sa2kit-ui/theme-{theme-id}` |
| `{id}-tokens.css` | 映射到 `--sa2-*` 语义变量 + 主题私有 `--{prefix}-*` |
| `{id}-overrides.css` | Tier1 组件 `[data-theme='{id}'] .sa2-*` 覆盖 |
| `{id}-overrides-ext.css` | Tier2/3 与剩余组件 |
| `{id}-utilities.css` | 工具类（如 `.jy-img-tone`） |
| `{id}-decorations.css` | 组件点缀（Card/Modal mask + `.{prefix}-ornament`） |
| `assets/icons/*.svg` | Lucide/自研 SVG（构建内联） |
| `assets/ATTRIBUTION.md` | 许可登记 |
| `{id}-plugin.js` | Tailwind plugin（可选） |
| `tailwind.preset.js` | 扩展 preset（可选） |
| `theme.css` | 完整入口（开发用） |
| `theme.overlay.css` | 叠加层（文档站/demo） |
| `theme.mobile.css` | 移动端（可选） |

**架构要点**：新主题为 **overlay**，依赖 `theme-animal-island` 的 `.sa2-*` 基础结构，用 `[data-theme='…']` 差异化，**不重写组件 TSX**。

### runtime 注册

1. `packages/react/src/theme/index.tsx`（或 `packages/theme-runtime` re-export 源）：
   - `Sa2ThemeId` 联合类型追加新 id
   - `SA2_THEMES` 追加 `{ id, label }`
2. `ThemeProvider` 通过 `document.documentElement[data-theme]` 切换

### 文档与 Demo

- [ ] `apps/docs/src/{theme-id}.stories.tsx` — Ladle 预览
- [ ] `apps/demo-web` / `apps/docs` 引入 `theme.overlay.css`（若尚未全局加载）
- [ ] `docs/themes/` 保留 Phase 1/2 产物

### 界园参考

- `packages/themes/jieyuan-garden/`
- `apps/docs/src/jieyuan-garden.stories.tsx`

### 完成标准

- [ ] `pnpm build` 通过
- [ ] demo-web / docs 可切换至新主题
- [ ] Git 提交：`feat(theme): add {theme-id} theme`

---

## Phase 4 — 全组件覆盖（24/24）

### 目标

新主题对 **全部 24 个 Web 组件** 有可见差异化或合理继承。

### 组件清单

Button, Input, Switch, Card, Modal, Title, Tabs, Collapse, Checkbox, Radio, Typewriter, Tooltip, Select, Loading, Divider, Time, CodeBlock, Table, Icon, Footer, Phone, Cursor, Wallet, WeddingInvitation

### 实施策略

1. **Phase 3** 先覆盖 Tier1（Button/Input/Modal/Card/Tabs）在 `{id}-overrides.css`
2. **Phase 4** 在 `{id}-overrides-ext.css` 按组件分节补齐：

```css
/* ── {ComponentName} ── */
[data-theme='{theme-id}'] .sa2-{component} { ... }
```

3. 无独立类的组件（如 Typewriter）在 Modal/body 或父级上下文中覆盖
4. 对照 `apps/demo-web/src/Showcase.tsx` 逐块目视验收
5. 更新 Ladle Story 展示主要变体

### 界园参考

- `jieyuan-overrides.css` — 核心组件
- `jieyuan-overrides-ext.css` — 全量 24 组件分节（搜索 `/* ──`）

### 完成标准

- [ ] overrides-ext 中 24 组件均有对应节或明确 inherit 注释
- [ ] Showcase + Ladle 无「动森岛样式泄漏」的明显违和
- [ ] `pnpm build` 全绿

---

## Phase 5 — 构建、发布 npm、更新消费侧

### 单包发布模型（当前标准）

对外 **仅发布一个 npm 包**：`@qhr123/sa2kit-ui-react`（pnpm alias 为 `@sa2kit-ui/react`）。

内含：组件 + ThemeProvider + **全部已注册主题 CSS**（`dist/style.css`）。

### 执行步骤

1. **合并 CSS**：`scripts/build-react-style.mjs` 自动扫描 `packages/themes/*`（除 animal-island），内联 tokens / overrides-ext / overrides / utilities / **decorations（含 SVG data URI）**，**去掉 `@import` 避免 Next.js 构建失败**
2. **版本号**：`packages/react/package.json` patch/minor bump
3. **构建**：`pnpm --filter @sa2kit-ui/react build`
4. **发布**：
   ```bash
   cd /home/qhr/project/sa2kit-ui
   pnpm publish:react
   npm access set status=public @qhr123/sa2kit-ui-react
   ```
5. **验证**：`npm view @qhr123/sa2kit-ui-react version`
6. **消费侧**（如 profile-v1）单行依赖：
   ```json
   "@sa2kit-ui/react": "npm:@qhr123/sa2kit-ui-react@{version}"
   ```
7. **消费侧样式**：
   ```css
   @import '@sa2kit-ui/react/style';
   ```
8. `pnpm install && pnpm build` 验证 → Git 提交推送

### npm 注意

- `@sa2kit-ui` org 未创建时，发布到 `@qhr123/sa2kit-ui-react` + pnpm alias
- 首次 scoped 发布可能为 private，需 `npm access set status=public`

### 完成标准

- [ ] npm 可安装新版本
- [ ] 消费侧 build 通过
- [ ] sa2kit-ui + 消费侧均已 push main

---

## Agent 执行纪律

1. **Phase 顺序不可跳步**（除非用户明确要求「跳过预览直接实现」）
2. **Phase 1.5 点缀资源为新主题必做**（可与 Phase 1 同批，须在 Phase 2 前完成 catalog + SVG）
3. **Phase 2 结束必须等待用户确认** 再进入 Phase 3
4. **No Stubs**：overrides 须完整 selectors，禁止 `/* TODO */`
5. **Docs First**：未知 IP/设计术语先检索官方/Wiki；icon 仅从 `ASSET-SOURCES.md` 白名单选取
6. **Self-Verify**：每 Phase 结束运行 `pnpm build`（Phase 1/1.5/2 除外）
7. **汇报格式**：每 Phase 结束向用户汇报产出路径 + 待确认项

---

## 快速触发话术

用户说以下任一即启动本工作流：

- 「加一个 XX 主题」
- 「新主题工作流 / theme workflow」
- 「像界园一样做一套主题」
- 「调研 XX 游戏 UI 并接到 sa2kit-ui」

Agent 回复应包含：

```
主题工作流 Phase 1/5：资料调研
- 主题 id 候选：{theme-id}
- 下一步：检索 … 并写入 docs/themes/{theme-id}/ui-research.md
```
