import { cn } from '@sa2kit-ui/shared';
import type { ButtonProps } from '@sa2kit-ui/shared';

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
        'sa2-btn',
        sizeClass[size],
        typeClass[type],
        danger && 'sa2-btn-danger',
        ghost && 'sa2-btn-ghost',
        block && 'sa2-btn-block',
        loading && 'sa2-btn-loading',
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
