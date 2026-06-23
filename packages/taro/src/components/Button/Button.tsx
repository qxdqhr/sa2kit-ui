import { cn } from '@sa2kit-ui/shared';
import type { ButtonProps } from '@sa2kit-ui/shared';
import { Button as TaroButton, Text, View } from '@tarojs/components';
import type { ITouchEvent } from '@tarojs/components';

type TaroButtonProps = Omit<ButtonProps, 'onClick' | 'htmlType' | 'icon'> & {
  onClick?: (event: ITouchEvent) => void;
};

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
  ghost = false,
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
          'sa2-btn',
          sizeClass[size],
          typeClass[type],
          danger && 'sa2-btn-danger',
          ghost && 'sa2-btn-ghost',
          block && 'sa2-btn-block',
          loading && 'sa2-btn-loading',
        )}
      >
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </TaroButton>
    </View>
  );
}

Button.displayName = 'Button';
