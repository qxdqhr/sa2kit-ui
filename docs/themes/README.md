# sa2Kit-UI 新主题工作流

Agent 执行细则见：`.cursor/skills/sakai-ui-create-theme/THEME-WORKFLOW.md`（项目技能 `sakai-ui-create-theme`）

点缀资源（Phase 1.5）：

- [DECORATION-WORKFLOW.md](./DECORATION-WORKFLOW.md) — 执行步骤
- [ASSET-SOURCES.md](./ASSET-SOURCES.md) — 可商用 icon 白名单

## 目录结构

每个主题在 `docs/themes/` 下独占一个子目录，与 `packages/themes/{id}/` 一一对应：

```
docs/themes/
├── README.md
├── DECORATION-WORKFLOW.md
├── ASSET-SOURCES.md
├── jieyuan-garden/
│   ├── ui-research.md      # Phase 1 资料调研
│   ├── assets-catalog.md   # Phase 1.5 图标选型
│   ├── preview.html        # Phase 2 预览（迭代版）
│   ├── preview-v3.html     # Phase 2 定稿预览
│   └── assets/             # 预览用摄影素材（可选）
├── rhine-life/
│   ├── ui-research.md
│   ├── assets-catalog.md
│   └── preview.html
└── endfield/
    ├── ui-research.md
    ├── assets-catalog.md
    └── preview.html
```

## 六阶段（含 Phase 1.5）

1. **资料调研** → `docs/themes/{id}/ui-research.md`
2. **点缀资源** → `assets-catalog.md` + `packages/themes/{id}/assets/icons/` + `{prefix}-decorations.css`
3. **HTML 预览** → `docs/themes/{id}/preview.html`（须含 icon 点缀示例）
4. **接入主题包** → `packages/themes/{id}/`
5. **24 组件 CSS 覆盖** → `{id}-overrides.css` + `{id}-overrides-ext.css`
6. **npm 发布** → `pnpm publish:react`

## 本地预览 HTML

在主题子目录下启动静态服务，以便相对路径 `assets/` 正常加载：

```bash
cd docs/themes/jieyuan-garden && python3 -m http.server 8765
# 打开 http://localhost:8765/preview-v3.html
```

## 参考

| 主题 | 调研 | 点缀 | 预览定稿 | 主题包 |
|------|------|------|----------|--------|
| 界园 | `jieyuan-garden/ui-research.md` | `assets-catalog.md` | `jieyuan-garden/preview-v3.html` | `packages/themes/jieyuan-garden/` |
| 莱茵生命 | `rhine-life/ui-research.md` | `assets-catalog.md` | `rhine-life/preview.html` | `packages/themes/rhine-life/` |
| 终末地 | `endfield/ui-research.md` | `assets-catalog.md` | `endfield/preview.html` | `packages/themes/endfield/` |
| 水月肉鸽 | `mizuki-roguelike/ui-research.md` | `assets-catalog.md` | `mizuki-roguelike/preview.html` | `packages/themes/mizuki-roguelike/` |
| 萨米肉鸽 | `sami-roguelike/ui-research.md` | `assets-catalog.md` | `sami-roguelike/preview.html` | `packages/themes/sami-roguelike/` |
