import { cn } from '@sa2kit-ui/shared';
import type { ButtonProps } from '@sa2kit-ui/shared';
import { Pressable, Text, View } from 'react-native';

const sizeClass = {
  small: 'sa2-btn-sm',
  middle: 'sa2-btn-md',
  large: 'sa2-btn-lg',
} as const;

const typeClass = {
  primary: 'sa2-btn-primary',
  default: 'sa2-btn-default',
  dashed: 'sa2-btn-dashed',
  text: 'sa2-btn-text',
  link: 'sa2-btn-link',
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
          'sa2-btn',
          sizeClass[size],
          typeClass[type],
          danger && 'sa2-btn-danger',
          block && 'sa2-btn-block',
          loading && 'sa2-btn-loading',
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
