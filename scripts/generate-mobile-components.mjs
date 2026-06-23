#!/usr/bin/env node
/**
 * Generates RN/Taro mobile component stubs from templates.
 * Run: node scripts/generate-mobile-components.mjs
 */
import fs from 'fs';
import path from 'path';

const root = path.resolve(import.meta.dirname, '..');
const platforms = [
  { id: 'rn', primitives: { container: 'View', text: 'Text', pressable: 'Pressable', image: 'Image', modal: 'Modal as RNModal', modalImport: ', Modal as RNModal', scroll: 'ScrollView', from: 'react-native' } },
  { id: 'taro', primitives: { container: 'View', text: 'Text', pressable: 'View', image: 'Image', modal: 'View', modalImport: '', scroll: 'ScrollView', from: '@tarojs/components' } },
];

function writeFile(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  console.log('wrote', rel);
}

for (const pkg of platforms) {
  const isRn = pkg.id === 'rn';
  const p = `packages/${pkg.id}/src/components`;

  // Title
  writeFile(`${p}/Title/Title.tsx`, `import { cn } from '@sa2kit-ui/shared';
import type { TitleColor, TitleProps, TitleSize } from '@sa2kit-ui/shared';
import type { ReactNode } from 'react';
import { ${pkg.primitives.text}, ${pkg.primitives.container} } from '${pkg.primitives.from}';

const SIZE_MAP: Record<TitleSize, number> = { small: 14, middle: 20, large: 28 };
const colorClass: Partial<Record<TitleColor, string>> = {
  'app-pink': 'sa2-title-color-app-pink', purple: 'sa2-title-color-purple', 'app-blue': 'sa2-title-color-app-blue',
  'app-yellow': 'sa2-title-color-app-yellow', 'app-orange': 'sa2-title-color-app-orange', 'app-teal': 'sa2-title-color-app-teal',
  'app-green': 'sa2-title-color-app-green', 'app-red': 'sa2-title-color-app-red', 'lime-green': 'sa2-title-color-lime-green',
  'yellow-green': 'sa2-title-color-yellow-green', brown: 'sa2-title-color-brown', 'warm-peach-pink': 'sa2-title-color-warm-peach-pink',
};

function Ribbon({ children, fontSize, color = 'default' }: { children: ReactNode; fontSize: number; color?: TitleColor }) {
  return (
    <${pkg.primitives.container} className={cn('sa2-title-ribbon', color !== 'default' && colorClass[color])} style={{ fontSize }}>
      <${pkg.primitives.container} className="sa2-title-ribbon-back sa2-title-ribbon-back-left" />
      <${pkg.primitives.container} className="sa2-title-ribbon-back sa2-title-ribbon-back-right" />
      <${pkg.primitives.container} className="sa2-title-ribbon-fold sa2-title-ribbon-fold-left" />
      <${pkg.primitives.container} className="sa2-title-ribbon-fold sa2-title-ribbon-fold-right" />
      <${pkg.primitives.container} className="sa2-title-ribbon-front" />
      <${pkg.primitives.text} className="sa2-title-ribbon-text">{children}</${pkg.primitives.text}>
    </${pkg.primitives.container}>
  );
}

export function Title({ children, size = 'middle', color = 'default', className, style }: TitleProps) {
  return (
    <${pkg.primitives.container} className={cn('sa2-title', className)} style={style}>
      <Ribbon fontSize={SIZE_MAP[size]} color={color}>{children}</Ribbon>
    </${pkg.primitives.container}>
  );
}
Title.displayName = 'Title';
`);
  writeFile(`${p}/Title/index.ts`, `export { Title } from './Title';\n`);

  // Divider
  writeFile(`${p}/Divider/Divider.tsx`, `import { cn } from '@sa2kit-ui/shared';
import type { DividerProps } from '@sa2kit-ui/shared';
import { ${pkg.primitives.container} } from '${pkg.primitives.from}';

const typeClass = {
  'line-brown': 'sa2-divider-line-brown', 'line-teal': 'sa2-divider-line-teal', 'line-white': 'sa2-divider-line-white',
  'line-yellow': 'sa2-divider-line-yellow', 'wave-yellow': 'sa2-divider-wave-yellow', 'dashed-brown': 'sa2-divider-dashed-brown',
  'dashed-teal': 'sa2-divider-dashed-teal', 'dashed-white': 'sa2-divider-dashed-white', 'dashed-yellow': 'sa2-divider-dashed-yellow',
} as const;

export function Divider({ type = 'line-brown', className, style }: DividerProps) {
  return <${pkg.primitives.container} className={cn('sa2-divider', typeClass[type], className)} style={style} accessibilityRole="none" />;
}
Divider.displayName = 'Divider';
`);
  writeFile(`${p}/Divider/index.ts`, `export { Divider } from './Divider';\n`);

  // Loading
  const loadingBody = isRn
    ? `import { ActivityIndicator, ${pkg.primitives.container} } from 'react-native';`
    : `import { ${pkg.primitives.container} } from '@tarojs/components';`;
  const loadingRender = isRn
    ? `<${pkg.primitives.container} className={cn('sa2-loading', className)} style={style} accessibilityLiveRegion="polite">
      <ActivityIndicator size="large" color="#19c8b9" />
    </${pkg.primitives.container}>`
    : `<${pkg.primitives.container} className={cn('sa2-loading', className)} style={style}>
      <${pkg.primitives.container} className="sa2-loading-spinner" />
    </${pkg.primitives.container}>`;

  writeFile(`${p}/Loading/Loading.tsx`, `import { cn } from '@sa2kit-ui/shared';
import type { LoadingProps } from '@sa2kit-ui/shared';
${loadingBody}

export function Loading({ className, style, active = true }: LoadingProps) {
  if (!active) return null;
  return ${loadingRender};
}
Loading.displayName = 'Loading';
`);
  writeFile(`${p}/Loading/index.ts`, `export { Loading } from './Loading';\n`);

  // Time
  writeFile(`${p}/Time/Time.tsx`, `import { cn } from '@sa2kit-ui/shared';
import type { TimeProps } from '@sa2kit-ui/shared';
import { useEffect, useState } from 'react';
import { ${pkg.primitives.text}, ${pkg.primitives.container} } from '${pkg.primitives.from}';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function Time({ className }: TimeProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <${pkg.primitives.container} className={cn('sa2-time', className)}>
      <${pkg.primitives.container} className="sa2-time-date">
        <${pkg.primitives.text} className="sa2-time-weekday">{weekdays[currentTime.getDay()]}</${pkg.primitives.text}>
        <${pkg.primitives.text} className="sa2-time-monthday">{months[currentTime.getMonth()]} {currentTime.getDate()}</${pkg.primitives.text}>
      </${pkg.primitives.container}>
      <${pkg.primitives.container} className="sa2-time-clock">
        <${pkg.primitives.text}>{currentTime.getHours().toString().padStart(2, '0')}</${pkg.primitives.text}>
        <${pkg.primitives.text} className="sa2-time-colon">:</${pkg.primitives.text}>
        <${pkg.primitives.text}>{currentTime.getMinutes().toString().padStart(2, '0')}</${pkg.primitives.text}>
      </${pkg.primitives.container}>
    </${pkg.primitives.container}>
  );
}
Time.displayName = 'Time';
`);
  writeFile(`${p}/Time/index.ts`, `export { Time } from './Time';\n`);

  // Typewriter
  writeFile(`${p}/Typewriter/Typewriter.tsx`, `import { useTypewriterEffect } from '@sa2kit-ui/shared';
import type { TypewriterProps } from '@sa2kit-ui/shared';

export function Typewriter({ children, speed = 90, trigger, autoPlay = true, onDone }: TypewriterProps) {
  return <>{useTypewriterEffect(children, speed, trigger, autoPlay, onDone)}</>;
}
Typewriter.displayName = 'Typewriter';
`);
  writeFile(`${p}/Typewriter/index.ts`, `export { Typewriter } from './Typewriter';\n`);

  // Cursor
  writeFile(`${p}/Cursor/Cursor.tsx`, `import { cn } from '@sa2kit-ui/shared';
import type { CursorProps } from '@sa2kit-ui/shared';
import { ${pkg.primitives.container} } from '${pkg.primitives.from}';

export function Cursor({ children, className, style }: CursorProps) {
  return (
    <${pkg.primitives.container} className={cn('sa2-cursor', className)} style={style}>
      {children}
    </${pkg.primitives.container}>
  );
}
Cursor.displayName = 'Cursor';
`);
  writeFile(`${p}/Cursor/index.ts`, `export { Cursor } from './Cursor';\n`);
}

console.log('Generated base components for rn/taro');
