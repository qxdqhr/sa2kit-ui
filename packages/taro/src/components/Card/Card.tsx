import { cn } from '@animal-island-components-sa2kit/shared';
import type { MobileCardProps } from '@animal-island-components-sa2kit/shared';
import { View } from '@tarojs/components';

const colorClass: Record<NonNullable<MobileCardProps['color']>, string> = {
  default: '',
  'app-pink': 'ai-card-app-pink',
  purple: 'ai-card-purple',
  'app-blue': 'ai-card-app-blue',
  'app-yellow': 'ai-card-app-yellow',
  'app-orange': 'ai-card-app-orange',
  'app-teal': 'ai-card-app-teal',
  'app-green': 'ai-card-app-green',
  'app-red': 'ai-card-app-red',
  'lime-green': 'ai-card-lime-green',
  'yellow-green': 'ai-card-yellow-green',
  brown: 'ai-card-brown',
  'warm-peach-pink': 'ai-card-warm-peach-pink',
};

export function Card({
  type = 'default',
  color = 'default',
  children,
  className,
  style,
  onPress,
}: MobileCardProps) {
  return (
    <View
      className={cn(
        'ai-card ai-font',
        type === 'dashed' && 'ai-card-dashed',
        color !== 'default' && colorClass[color],
        className,
      )}
      style={style}
      onClick={onPress}
    >
      {children}
    </View>
  );
}

Card.displayName = 'Card';
