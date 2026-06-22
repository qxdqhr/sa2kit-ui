import { cn } from '@animal-island-components-sa2kit/shared';
import type { LoadingProps } from '@animal-island-components-sa2kit/shared';
import { View } from '@tarojs/components';

export function Loading({ className, style, active = true }: LoadingProps) {
  if (!active) return null;
  return <View className={cn('ai-loading', className)} style={style}>
      <View className="ai-loading-spinner" />
    </View>;
}
Loading.displayName = 'Loading';
