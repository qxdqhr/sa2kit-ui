import { cn } from '@sa2kit-ui/shared';
import type { CursorProps } from '@sa2kit-ui/shared';
import { View } from 'react-native';

export function Cursor({ children, className, style }: CursorProps) {
  return (
    <View className={cn('sa2-cursor', className)} style={style as object}>
      {children}
    </View>
  );
}
Cursor.displayName = 'Cursor';
