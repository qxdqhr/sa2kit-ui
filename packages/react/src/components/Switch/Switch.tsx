import { cn } from '@animal-island-components-sa2kit/shared';
import type { SwitchProps } from '@animal-island-components-sa2kit/shared';
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
        'ai-switch',
        size === 'small' && 'ai-switch-sm',
        isChecked && 'ai-switch-checked',
        disabled && 'ai-switch-disabled',
        className,
      )}
    >
      <span className="ai-switch-handle">
        {loading ? (
          <span
            className="block h-2.5 w-2.5 animate-ai-spin rounded-full border-2 border-animal-success border-r-transparent"
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
