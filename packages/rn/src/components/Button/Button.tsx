import { cn } from '@animal-island-components-sa2kit/shared';
import type { ButtonProps } from '@animal-island-components-sa2kit/shared';
import { Pressable, Text, View } from 'react-native';

const sizeClass = {
  small: 'ai-btn-sm',
  middle: 'ai-btn-md',
  large: 'ai-btn-lg',
} as const;

const typeClass = {
  primary: 'ai-btn-primary',
  default: 'ai-btn-default',
  dashed: 'ai-btn-dashed',
  text: 'ai-btn-text',
  link: 'ai-btn-link',
} as const;

export function Button({
  type = 'default',
  size = 'middle',
  danger = false,
  block = false,
  loading = false,
  disabled = false,
  children,
  className,
  onPress,
}: ButtonProps & { onPress?: () => void }) {
  return (
    <Pressable disabled={disabled || loading} onPress={onPress} className={block ? 'w-full' : undefined}>
      <View
        className={cn(
          'ai-btn',
          sizeClass[size],
          typeClass[type],
          danger && 'ai-btn-danger',
          block && 'ai-btn-block',
          loading && 'ai-btn-loading',
          className,
        )}
      >
        {typeof children === 'string' ? (
          <Text className="font-semibold text-inherit">{children}</Text>
        ) : (
          children
        )}
      </View>
    </Pressable>
  );
}

Button.displayName = 'Button';
