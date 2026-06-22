import { cn } from '@animal-island-components-sa2kit/shared';
import type { ButtonProps } from '@animal-island-components-sa2kit/shared';
import { Button as TaroButton, Text, View } from '@tarojs/components';
import type { ITouchEvent } from '@tarojs/components';

type TaroButtonProps = Omit<ButtonProps, 'onClick' | 'htmlType' | 'icon'> & {
  onClick?: (event: ITouchEvent) => void;
};

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
  onClick,
}: TaroButtonProps) {
  return (
    <View className={cn(block && 'w-full', className)}>
      <TaroButton
        disabled={disabled || loading}
        onClick={onClick}
        className={cn(
          'ai-btn',
          sizeClass[size],
          typeClass[type],
          danger && 'ai-btn-danger',
          block && 'ai-btn-block',
          loading && 'ai-btn-loading',
        )}
      >
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </TaroButton>
    </View>
  );
}

Button.displayName = 'Button';
