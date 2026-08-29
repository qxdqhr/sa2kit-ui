---
name: sakai-ui-create-theme
description: >
  在 SakaiUI（sa2kit-ui）仓库中新增 overlay 主题：资料调研 → 点缀资源 → HTML 预览 → 用户确认后接入 → 24 组件覆盖 → npm 发布。
  当用户在 SakaiUI/sa2kit-ui 仓库中说「新主题」「theme workflow」「加一个 XX 主题」「像界园一样做一套主题」时使用。
---

# SakaiUI 新主题工作流

## 仓库

- 路径：`/home/qhr/project/sa2kit-ui`（SakaiUI）
- Scope：`@sa2kit-ui/*`（npm：`@qhr123/sa2kit-ui-react`）
- 样式参考：`/home/qhr/Desktop/project/animal-island-ui`

**必须在 SakaiUI 仓库根目录执行本技能**，所有产出写入本仓库。

## 执行入口

用户提供新主题时，**必须先读并执行**：[THEME-WORKFLOW.md](./THEME-WORKFLOW.md)  
点缀细则：`docs/themes/DECORATION-WORKFLOW.md`

| Phase | 内容 | 关键产出 |
|-------|------|----------|
| 1 | 资料调研 | `docs/themes/{id}/ui-research.md` |
| **1.5** | **点缀资源** | `assets-catalog.md` + `assets/icons/*.svg` + `{prefix}-decorations.css` |
| 2 | HTML 预览 | `docs/themes/{id}/preview.html`（含 icon 点缀示例） |
| 3 | 接入 SakaiUI | `packages/themes/{id}/` + runtime 注册 |
| 4 | 全组件覆盖 | 24 组件 CSS override + Ladle Story |
| 5 | npm 单包发布 | `pnpm publish:react` + 消费侧 1 行依赖 |

**硬门禁**：Phase 2 完成后须 **用户明确同意** 再进入 Phase 3。  
**硬要求**：Phase 1.5 不可跳过；icon 仅从 `docs/themes/ASSET-SOURCES.md` 白名单选取。  
**参考实现**：界园 `jieyuan-garden`（`docs/themes/jieyuan-garden/`）

## 多主题架构（overlay）

```
packages/
├── tokens/                    # 语义 CSS 变量 --sa2-*
├── themes/
│   ├── animal-island/         # 基础 .sa2-* 组件样式（默认 data-theme）
│   └── {theme-id}/            # overlay：tokens + overrides + utilities
├── react/                     # 组件 + ThemeProvider + dist/style.css（全主题）
└── theme-runtime/             # ThemeProvider + useTheme
```

类名规范：`.sa2-*`；overlay 主题用 `[data-theme='{id}'] .sa2-*` 覆盖，**不改组件 TSX**。

## Checklist（摘要，详见 THEME-WORKFLOW.md）

- [ ] Phase 1：`docs/themes/{id}/ui-research.md`
- [ ] Phase 1.5：`assets-catalog.md` + `assets/icons/` + `{prefix}-decorations.css` + ATTRIBUTION
- [ ] Phase 2：`docs/themes/{id}/preview.html` + `.preview-ornament` + 用户确认
- [ ] Phase 3：`packages/themes/{id}/` + `Sa2ThemeId` + Ladle Story
- [ ] Phase 4：24/24 组件 `[data-theme]` override
- [ ] Phase 5：`pnpm publish:react` + 消费侧 `@sa2kit-ui/react` 升版本

## 设计铁律

见 `docs/THEME.md` 与 animal-island-ui SKILL §6 七条铁律。
