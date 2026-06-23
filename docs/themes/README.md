# sa2Kit-UI 新主题工作流

Agent 执行细则见：`~/.agents/skills/animal-island-sa2kit-ui-library/THEME-WORKFLOW.md`

## 五阶段

1. **资料调研** → `docs/themes/{id}-ui-research.md`
2. **HTML 预览** → `docs/themes/{id}-preview.html`（用户确认后进入下一步）
3. **接入主题包** → `packages/themes/{id}/`
4. **24 组件 CSS 覆盖** → `{id}-overrides.css` + `{id}-overrides-ext.css`
5. **npm 发布** → `pnpm publish:react`

## 参考

- 界园调研：`jieyuan-garden-ui-research.md`
- 界园预览定稿：`jieyuan-garden-preview-v3.html`
- 界园主题包：`packages/themes/jieyuan-garden/`
- 莱茵调研：`rhine-life-ui-research.md`
- 莱茵预览：`rhine-life-preview.html`
- 莱茵主题包：`packages/themes/rhine-life/`
