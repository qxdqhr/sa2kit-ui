import { cn } from '@sa2kit-ui/shared';
import type { SwitchProps } from '@sa2kit-ui/shared';
import { useCallback, useState } from 'react';

export function Switch({
  checked,
  defaultChecked = false,
  size = 'default',
  disabled = false,
  loading = false,
  checkedChildren,
  unCheckedChildren,
  onChange,
  className,
}: SwitchProps) {
  const [innerChecked, setInnerChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : innerChecked;

  const handleClick = useCallback(() => {
    if (disabled || loading) return;
    const next = !isChecked;
    if (!isControlled) setInnerChecked(next);
    onChange?.(next);
  }, [disabled, loading, isChecked, isControlled, onChange]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        'sa2-switch',
        size === 'small' && 'sa2-switch-sm',
        isChecked && 'sa2-switch-checked',
        disabled && 'sa2-switch-disabled',
        className,
      )}
    >
      <span className="sa2-switch-handle">
        {loading ? (
          <span
            className="block h-2.5 w-2.5 animate-sa2-spin rounded-full border-2 border-sa2-success border-r-transparent"
            aria-hidden
          />
        ) : null}
      </span>
      {(checkedChildren || unCheckedChildren) && (
        <span className="pointer-events-none px-2 text-[11px] font-bold text-white">
          {isChecked ? checkedChildren : unCheckedChildren}
        </span>
      )}
    </button>
  );
}

Switch.displayName = 'Switch';
