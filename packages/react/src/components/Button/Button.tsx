import { cn } from '@animal-island-components-sa2kit/shared';
import type { ButtonProps } from '@animal-island-components-sa2kit/shared';

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
  ghost = false,
  block = false,
  loading = false,
  disabled = false,
  icon,
  htmlType = 'button',
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={htmlType}
      disabled={disabled || loading}
      className={cn(
        'ai-btn',
        sizeClass[size],
        typeClass[type],
        danger && 'ai-btn-danger',
        ghost && 'ai-btn-ghost',
        block && 'ai-btn-block',
        loading && 'ai-btn-loading',
        className,
      )}
      {...rest}
    >
      {icon && !loading ? <span className="inline-flex items-center">{icon}</span> : null}
      {children ? <span>{children}</span> : null}
    </button>
  );
}

Button.displayName = 'Button';
