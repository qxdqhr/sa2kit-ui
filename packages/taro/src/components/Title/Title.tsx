import { cn } from '@animal-island-components-sa2kit/shared';
import type { TitleColor, TitleProps, TitleSize } from '@animal-island-components-sa2kit/shared';
import type { ReactNode } from 'react';
import { Text, View } from '@tarojs/components';

const SIZE_MAP: Record<TitleSize, number> = { small: 14, middle: 20, large: 28 };
const colorClass: Partial<Record<TitleColor, string>> = {
  'app-pink': 'ai-title-color-app-pink', purple: 'ai-title-color-purple', 'app-blue': 'ai-title-color-app-blue',
  'app-yellow': 'ai-title-color-app-yellow', 'app-orange': 'ai-title-color-app-orange', 'app-teal': 'ai-title-color-app-teal',
  'app-green': 'ai-title-color-app-green', 'app-red': 'ai-title-color-app-red', 'lime-green': 'ai-title-color-lime-green',
  'yellow-green': 'ai-title-color-yellow-green', brown: 'ai-title-color-brown', 'warm-peach-pink': 'ai-title-color-warm-peach-pink',
};

function Ribbon({ children, fontSize, color = 'default' }: { children: ReactNode; fontSize: number; color?: TitleColor }) {
  return (
    <View className={cn('ai-title-ribbon', color !== 'default' && colorClass[color])} style={{ fontSize }}>
      <View className="ai-title-ribbon-back ai-title-ribbon-back-left" />
      <View className="ai-title-ribbon-back ai-title-ribbon-back-right" />
      <View className="ai-title-ribbon-fold ai-title-ribbon-fold-left" />
      <View className="ai-title-ribbon-fold ai-title-ribbon-fold-right" />
      <View className="ai-title-ribbon-front" />
      <Text className="ai-title-ribbon-text">{children}</Text>
    </View>
  );
}

export function Title({ children, size = 'middle', color = 'default', className, style }: TitleProps) {
  return (
    <View className={cn('ai-title', className)} style={style}>
      <Ribbon fontSize={SIZE_MAP[size]} color={color}>{children}</Ribbon>
    </View>
  );
}
Title.displayName = 'Title';
