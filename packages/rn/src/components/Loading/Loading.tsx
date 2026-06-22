import { cn } from '@animal-island-components-sa2kit/shared';
import type { LoadingProps } from '@animal-island-components-sa2kit/shared';
import { ActivityIndicator, View } from 'react-native';

export function Loading({ className, style, active = true }: LoadingProps) {
  if (!active) return null;
  return <View className={cn('ai-loading', className)} style={style as object} accessibilityLiveRegion="polite">
      <ActivityIndicator size="large" color="#19c8b9" />
    </View>;
}
Loading.displayName = 'Loading';
