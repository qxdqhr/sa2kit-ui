export type ComponentTier = 1 | 2 | 3;

export interface ComponentDocMeta {
  /** Ladle story 文件名（不含 .stories.tsx） */
  slug: string;
  name: string;
  tier: ComponentTier;
  summary: string;
  /** 主要 props 速查 */
  props: Array<{ prop: string; type: string; desc: string }>;
}

export const COMPONENT_DOCS: ComponentDocMeta[] = [
  {
    slug: 'button',
    name: 'Button',
    tier: 1,
    summary: '触发即时操作。支持 primary / default / dashed / text / link，含 3D 厚阴影主按钮。',
    props: [
      { prop: 'type', type: "'primary' | 'default' | ...", desc: '按钮类型' },
      { prop: 'size', type: "'small' | 'middle' | 'large'", desc: '尺寸' },
      { prop: 'loading', type: 'boolean', desc: '加载态条纹动画' },
      { prop: 'danger', type: 'boolean', desc: '危险按钮' },
    ],
  },
  {
    slug: 'input',
    name: 'Input',
    tier: 1,
    summary: '文本输入框。Focus 时黄色描边，支持 prefix/suffix。',
    props: [
      { prop: 'size', type: "'small' | 'middle' | 'large'", desc: '尺寸' },
      { prop: 'disabled', type: 'boolean', desc: '禁用' },
      { prop: 'prefix / suffix', type: 'ReactNode', desc: '前后缀' },
    ],
  },
  {
    slug: 'switch',
    name: 'Switch',
    tier: 1,
    summary: '开关切换。圆角滑块 + 内阴影轨道。',
    props: [
      { prop: 'checked', type: 'boolean', desc: '受控选中' },
      { prop: 'size', type: "'small' | 'default'", desc: '尺寸' },
    ],
  },
  {
    slug: 'card',
    name: 'Card',
    tier: 1,
    summary: '内容容器。支持 type / color 色板，圆角卡片阴影。',
    props: [
      { prop: 'type', type: "'default' | 'inner'", desc: '卡片类型' },
      { prop: 'color', type: 'CardColor', desc: '主题色板' },
    ],
  },
  {
    slug: 'modal',
    name: 'Modal',
    tier: 1,
    summary: '模态对话框。遮罩 + 圆角内容区。',
    props: [
      { prop: 'open', type: 'boolean', desc: '是否显示' },
      { prop: 'title', type: 'ReactNode', desc: '标题' },
      { prop: 'onClose', type: '() => void', desc: '关闭回调' },
    ],
  },
  {
    slug: 'title',
    name: 'Title',
    tier: 1,
    summary: '标题文字。多尺寸与 app 色板。',
    props: [
      { prop: 'size', type: "'small' | 'middle' | 'large'", desc: '字号' },
      { prop: 'color', type: 'TitleColor', desc: '颜色' },
    ],
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    tier: 1,
    summary: '选项卡切换内容面板。',
    props: [{ prop: 'items', type: 'TabItem[]', desc: '标签与内容' }],
  },
  {
    slug: 'collapse',
    name: 'Collapse',
    tier: 1,
    summary: '折叠面板，可展开/收起内容区。',
    props: [{ prop: 'items', type: 'CollapseItem[]', desc: '面板项' }],
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    tier: 1,
    summary: '多选框组。圆角勾选样式。',
    props: [
      { prop: 'options', type: 'CheckboxOption[]', desc: '选项' },
      { prop: 'value', type: 'Array<string|number>', desc: '选中值' },
    ],
  },
  {
    slug: 'radio',
    name: 'Radio',
    tier: 1,
    summary: '单选框组。',
    props: [
      { prop: 'options', type: 'RadioOption[]', desc: '选项' },
      { prop: 'value', type: 'string | number', desc: '选中值' },
    ],
  },
  {
    slug: 'typewriter',
    name: 'Typewriter',
    tier: 1,
    summary: '打字机逐字显示动画。',
    props: [{ prop: 'speed', type: 'number', desc: '每字间隔 ms' }],
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    tier: 2,
    summary: '文字提示气泡。支持 placement / variant。',
    props: [
      { prop: 'title', type: 'ReactNode', desc: '提示内容' },
      { prop: 'placement', type: 'TooltipPlacement', desc: '方位' },
    ],
  },
  {
    slug: 'select',
    name: 'Select',
    tier: 2,
    summary: '下拉选择器。',
    props: [
      { prop: 'options', type: 'SelectOption[]', desc: '选项' },
      { prop: 'value', type: 'string', desc: '当前值' },
    ],
  },
  {
    slug: 'loading',
    name: 'Loading',
    tier: 2,
    summary: '加载指示器。旋转圆环动画。',
    props: [{ prop: 'size', type: "'small' | 'default' | 'large'", desc: '尺寸' }],
  },
  {
    slug: 'divider',
    name: 'Divider',
    tier: 2,
    summary: '分割线。实线 / 虚线。',
    props: [{ prop: 'type', type: "'horizontal' | 'vertical'", desc: '方向' }],
  },
  {
    slug: 'time',
    name: 'Time',
    tier: 3,
    summary: '实时时钟显示（动森 Nook 风格）。',
    props: [{ prop: 'format', type: 'string', desc: '时间格式' }],
  },
  {
    slug: 'code-block',
    name: 'CodeBlock',
    tier: 3,
    summary: '代码块，带语法高亮。',
    props: [
      { prop: 'code', type: 'string', desc: '源码' },
      { prop: 'language', type: 'string', desc: '语言' },
    ],
  },
  {
    slug: 'table',
    name: 'Table',
    tier: 3,
    summary: '数据表格。圆角表头 + 斑马纹行。',
    props: [
      { prop: 'columns', type: 'TableColumn[]', desc: '列定义' },
      { prop: 'dataSource', type: 'Record[]', desc: '数据' },
    ],
  },
  {
    slug: 'icon',
    name: 'Icon',
    tier: 3,
    summary: '动森图标集。支持 bounce 动画。',
    props: [
      { prop: 'name', type: 'IconName', desc: '图标名' },
      { prop: 'size', type: 'number', desc: '像素尺寸' },
    ],
  },
  {
    slug: 'footer',
    name: 'Footer',
    tier: 3,
    summary: '页脚信息条。',
    props: [{ prop: 'type', type: 'FooterType', desc: '样式类型' }],
  },
  {
    slug: 'phone',
    name: 'Phone',
    tier: 3,
    summary: 'NookPhone 手机框装饰容器。',
    props: [{ prop: 'children', type: 'ReactNode', desc: '屏幕内容' }],
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    tier: 3,
    summary: '自定义鼠标指针容器（Web）。',
    props: [{ prop: 'children', type: 'ReactNode', desc: '子内容' }],
  },
  {
    slug: 'wallet',
    name: 'Wallet',
    tier: 3,
    summary: '钱包 / 余额展示组件。',
    props: [{ prop: 'size', type: 'WalletSize', desc: '尺寸' }],
  },
  {
    slug: 'wedding-invitation',
    name: 'WeddingInvitation',
    tier: 3,
    summary: '婚礼请柬编辑器，支持 PNG 导出（Web）。',
    props: [
      { prop: 'bride / groom', type: 'string', desc: '新人姓名' },
      { prop: 'exportAsImage', type: '() => Promise<void>', desc: '导出 PNG' },
    ],
  },
];

export const TIER_LABEL: Record<ComponentTier, string> = {
  1: 'Tier 1 · 基础交互',
  2: 'Tier 2 · 反馈与布局',
  3: 'Tier 3 · 展示与内容',
};
