# sa2kit-ui · AI Usage (v0.1.0)

> API 对齐 animal-island-ui。禁止臆造 props。

## Setup

```bash
pnpm add @sa2kit-ui/react
```

```tsx
import '@sa2kit-ui/react/style';
```

## Exports

```ts
import {
  Button, Input, Switch, Card,
  Modal, Title, Tabs, Collapse, Checkbox, Radio, Typewriter,
  Tooltip, Select, Loading, Divider,
  Time, CodeBlock, Table, Icon, ICON_LIST, Footer,
  Phone, Cursor,
  Wallet,
  WeddingInvitation, WeddingInvitationExportButton,
} from '@sa2kit-ui/react';
import type {
  ButtonProps, ButtonType, ButtonSize,
  InputProps, InputSize,
  SwitchProps, SwitchSize,
  CardProps, CardType, CardColor,
  ModalProps,
  TitleProps, TitleSize, TitleColor,
  TabsProps, TabItem,
  CollapseProps,
  CheckboxProps, CheckboxOption, CheckboxSize,
  RadioProps, RadioOption, RadioSize,
  TypewriterProps,
  TooltipProps, TooltipPlacement, TooltipTrigger, TooltipVariant,
  SelectProps, SelectOption,
  LoadingProps,
  DividerProps, DividerType,
  TimeProps,
  CodeBlockProps,
  TableProps, TableColumn,
  IconProps, IconName,
  FooterProps, FooterType,
  PhoneProps,
  CursorProps,
  WalletProps, WalletSize,
  WeddingInvitationProps, WeddingInvitationRef,
  WeddingInvitationExportButtonProps,
} from '@sa2kit-ui/react';
```

Electron：`@sa2kit-ui/electron`（Web 同源 API + 样式仍从 react/style 引入）

## Button

```ts
type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';
type ButtonSize = 'small' | 'middle' | 'large';

interface ButtonProps {
  type?: ButtonType;       // default 'default'
  size?: ButtonSize;       // default 'middle'
  danger?: boolean;        // default false
  ghost?: boolean;
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  htmlType?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
}
```

## Input

```ts
type InputSize = 'small' | 'middle' | 'large';

interface InputProps {
  size?: InputSize;        // default 'middle'
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;    // default false
  status?: 'error' | 'warning';
  shadow?: boolean;        // default false
  disabled?: boolean;
}
```

## Switch

```ts
type SwitchSize = 'small' | 'default';

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;  // default false
  size?: SwitchSize;         // default 'default'
  disabled?: boolean;
  loading?: boolean;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  onChange?: (checked: boolean) => void;
}
```

## Card

```ts
type CardType = 'default' | 'dashed';
type CardColor = 'default' | 'app-pink' | 'purple' | 'app-blue' | 'app-yellow' | ...;

interface CardProps {
  type?: CardType;   // default 'default'
  color?: CardColor; // default 'default'
  children?: React.ReactNode;
}
```

## Modal

```ts
interface ModalProps {
  open: boolean;
  title?: React.ReactNode;
  width?: number | string;      // default 520
  maskClosable?: boolean;       // default true
  footer?: React.ReactNode | null;
  onClose?: () => void;
  onOk?: () => void;
  children?: React.ReactNode;
  typeSpeed?: number;           // default 80
  typewriter?: boolean;         // default true
}
```

## Title

```ts
type TitleSize = 'small' | 'middle' | 'large';
type TitleColor = CardColor;

interface TitleProps {
  children: React.ReactNode;
  size?: TitleSize;    // default 'middle'
  color?: TitleColor;  // default 'default'
}
```

## Tabs

```ts
interface TabItem {
  key: string;
  label: React.ReactNode;
  children: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  leafAnimation?: boolean;  // default true
  shadow?: boolean;         // default true
}
```

## Collapse

```ts
interface CollapseProps {
  question: React.ReactNode;
  answer: React.ReactNode;
  defaultExpanded?: boolean;
  disabled?: boolean;
}
```

## Checkbox

```ts
interface CheckboxOption { label: React.ReactNode; value: string | number; disabled?: boolean; }

interface CheckboxProps {
  options: CheckboxOption[];
  value?: Array<string | number>;
  defaultValue?: Array<string | number>;
  size?: 'small' | 'middle' | 'large';
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  onChange?: (values: Array<string | number>) => void;
}
```

## Radio

```ts
interface RadioOption { label: React.ReactNode; value: string | number; disabled?: boolean; }

interface RadioProps {
  options: RadioOption[];
  value?: string | number;
  defaultValue?: string | number;
  size?: 'small' | 'middle' | 'large';
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  onChange?: (value: string | number) => void;
}
```

## Typewriter

```ts
interface TypewriterProps {
  children?: React.ReactNode;
  speed?: number;       // default 90
  trigger?: unknown;
  autoPlay?: boolean;   // default true
  onDone?: () => void;
}
```

## Tooltip

```ts
type TooltipPlacement =
  | 'top' | 'top-start' | 'top-end'
  | 'bottom' | 'bottom-start' | 'bottom-end'
  | 'left' | 'left-start' | 'left-end'
  | 'right' | 'right-start' | 'right-end';
type TooltipTrigger = 'hover' | 'focus' | 'click';
type TooltipVariant = 'default' | 'island';

interface TooltipProps {
  title: React.ReactNode;
  placement?: TooltipPlacement;  // default 'top'
  trigger?: TooltipTrigger;    // default 'hover'
  variant?: TooltipVariant;    // default 'default'
  bordered?: boolean;          // default true
  children: React.ReactElement;
}
```

## Select

```ts
interface SelectOption { key: string; label: string; }

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (key: string) => void;
  placeholder?: string;   // default '请选择'
  disabled?: boolean;
}
```

## Loading

```ts
interface LoadingProps {
  active?: boolean;  // default true
}
```

> Loading 使用 CSS SVG `stroke-dasharray` 动画，不使用 GSAP。

## Divider

```ts
type DividerType =
  | 'line-brown' | 'line-teal' | 'line-white' | 'line-yellow'
  | 'wave-yellow'
  | 'dashed-brown' | 'dashed-teal' | 'dashed-white' | 'dashed-yellow';

interface DividerProps {
  type?: DividerType;  // default 'line-brown'
}
```

## RN / Taro 移动端差异

```ts
// Input：onChange 为字符串回调，无 DOM 事件
interface MobileInputProps extends Omit<InputProps, 'onChange'> {
  onChange?: (value: string) => void;
}

// Card：可点击时用 onPress
interface MobileCardProps extends CardProps {
  onPress?: () => void;
}
```

```tsx
import { Button, Input, Switch, Card } from '@sa2kit-ui/rn';
// 或 @sa2kit-ui/taro
```

## Time

```ts
interface TimeProps {
  className?: string;
}
```

> 自包含 HUD 时钟，每秒刷新，无 format/value/timezone 配置。

## CodeBlock

```ts
interface CodeBlockProps {
  code: string;
  style?: React.CSSProperties;
  className?: string;
}
```

## Table

```ts
interface TableColumn<T = Record<string, unknown>> {
  title: React.ReactNode;
  dataIndex?: keyof T;
  render?: (value: unknown, record: T, index: number) => React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

interface TableProps<T = Record<string, unknown>> {
  columns?: TableColumn<T>[];
  dataSource?: T[];
  rowKey?: string | ((record: T) => string);
  striped?: boolean;
  showHeader?: boolean;
  loading?: boolean;
  emptyText?: React.ReactNode;
  scroll?: { x?: number | string; y?: number | string };
}
```

## Icon

```ts
type IconName =
  | 'icon-miles' | 'icon-camera' | 'icon-chat' | 'icon-critterpedia'
  | 'icon-design' | 'icon-diy' | 'icon-helicopter'
  | 'icon-map' | 'icon-shopping' | 'icon-variant';

interface IconProps {
  name?: IconName;
  item?: number;
  size?: number | string;
  bounce?: boolean;
}

declare const ICON_LIST: { name: IconName; label: string }[];
```

## Footer

```ts
type FooterType = 'sea' | 'tree';

interface FooterProps {
  type?: FooterType;  // default 'tree'
}
```

> `type="tree"` 使用 CSS 森林剪影（原库 `footer-tree.webp` 未随源码分发）；`type="sea"` 使用 bundled SVG。

## Phone

```ts
interface PhoneProps {
  className?: string;
}
```

> 固定 527×788px 装饰性 NookPhone：3×3 应用格 + 实时 AM/PM 时钟 + 冒号闪烁 + hover 图标弹跳。

## Cursor

```ts
interface CursorProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  forceAll?: boolean;  // default true
}
```

```tsx
<Cursor><App /></Cursor>
<Cursor forceAll={false}><FormSection /></Cursor>
```

> 使用 bundled SVG 光标（热点 `4 0`）。不要嵌套多个 `<Cursor>`。

## Wallet

```ts
type WalletSize = 'small' | 'medium' | 'large';

interface WalletProps {
  value?: number | string;
  icon?: React.ReactNode;
  size?: WalletSize;
  thousandSeparator?: string;
}
```

## WeddingInvitation

```ts
interface WeddingInvitationRef {
  exportAsImage: (filename?: string) => Promise<void>;
  getElement: () => HTMLDivElement | null;
}

interface WeddingInvitationProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  weekday?: string;
  time?: string;
  venue?: string;
  address?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  message?: React.ReactNode;
  showLotteryNumber?: boolean;
  lotteryNumber?: string;
  lotteryLabel?: React.ReactNode;
  lotteryHint?: React.ReactNode;
}

interface WeddingInvitationExportButtonProps {
  targetRef: React.RefObject<WeddingInvitationRef>;
  filename?: string;
  children?: React.ReactNode;
}
```

> PNG 导出依赖 `modern-screenshot`（已 bundled）。原库 PNG/JPG 背景资源未随源码分发，默认使用 CSS 渐变 + SVG 插图。
