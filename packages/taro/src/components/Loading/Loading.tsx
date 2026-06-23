import { cn } from '@sa2kit-ui/shared';
import type { LoadingProps } from '@sa2kit-ui/shared';
import { View } from '@tarojs/components';

export function Loading({ className, style, active = true }: LoadingProps) {
  if (!active) return null;
  return <View className={cn('sa2-loading', className)} style={style}>
      <View className="sa2-loading-spinner" />
    </View>;
}
Loading.displayName = 'Loading';
