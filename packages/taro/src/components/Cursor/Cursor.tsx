import { cn } from '@animal-island-components-sa2kit/shared';
import type { CursorProps } from '@animal-island-components-sa2kit/shared';
import { View } from '@tarojs/components';

export function Cursor({ children, className, style }: CursorProps) {
  return (
    <View className={cn('animal-cursor', className)} style={style}>
      {children}
    </View>
  );
}
Cursor.displayName = 'Cursor';
