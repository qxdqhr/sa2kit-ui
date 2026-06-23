import { cn } from '@sa2kit-ui/shared';
import type { LoadingProps } from '@sa2kit-ui/shared';
import { ActivityIndicator, View } from 'react-native';

export function Loading({ className, style, active = true }: LoadingProps) {
  if (!active) return null;
  return <View className={cn('sa2-loading', className)} style={style as object} accessibilityLiveRegion="polite">
      <ActivityIndicator size="large" color="#19c8b9" />
    </View>;
}
Loading.displayName = 'Loading';
