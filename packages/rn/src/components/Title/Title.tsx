import { cn } from '@sa2kit-ui/shared';
import type { TitleColor, TitleProps, TitleSize } from '@sa2kit-ui/shared';
import type { ReactNode } from 'react';
import { Text, View } from 'react-native';

const SIZE_MAP: Record<TitleSize, number> = { small: 14, middle: 20, large: 28 };
const colorClass: Partial<Record<TitleColor, string>> = {
  'app-pink': 'sa2-title-color-app-pink', purple: 'sa2-title-color-purple', 'app-blue': 'sa2-title-color-app-blue',
  'app-yellow': 'sa2-title-color-app-yellow', 'app-orange': 'sa2-title-color-app-orange', 'app-teal': 'sa2-title-color-app-teal',
  'app-green': 'sa2-title-color-app-green', 'app-red': 'sa2-title-color-app-red', 'lime-green': 'sa2-title-color-lime-green',
  'yellow-green': 'sa2-title-color-yellow-green', brown: 'sa2-title-color-brown', 'warm-peach-pink': 'sa2-title-color-warm-peach-pink',
};

function Ribbon({ children, fontSize, color = 'default' }: { children: ReactNode; fontSize: number; color?: TitleColor }) {
  return (
    <View className={cn('sa2-title-ribbon', color !== 'default' && colorClass[color])}>
      <View className="sa2-title-ribbon-back sa2-title-ribbon-back-left" />
      <View className="sa2-title-ribbon-back sa2-title-ribbon-back-right" />
      <View className="sa2-title-ribbon-fold sa2-title-ribbon-fold-left" />
      <View className="sa2-title-ribbon-fold sa2-title-ribbon-fold-right" />
      <View className="sa2-title-ribbon-front" />
      <Text className="sa2-title-ribbon-text" style={{ fontSize }}>{children}</Text>
    </View>
  );
}

export function Title({ children, size = 'middle', color = 'default', className, style }: TitleProps) {
  return (
    <View className={cn('sa2-title', className)} style={style as object}>
      <Ribbon fontSize={SIZE_MAP[size]} color={color}>{children}</Ribbon>
    </View>
  );
}
Title.displayName = 'Title';
