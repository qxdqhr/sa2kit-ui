import { cn } from '@animal-island-components-sa2kit/shared';
import type { InputProps } from '@animal-island-components-sa2kit/shared';
import { useCallback, useState, type ChangeEvent, type ChangeEventHandler } from 'react';

const sizeClass = {
  small: 'ai-input-wrap-sm',
  middle: 'ai-input-wrap-md',
  large: 'ai-input-wrap-lg',
} as const;

export function Input({
  size = 'middle',
  prefix,
  suffix,
  allowClear = false,
  status,
  shadow = false,
  disabled = false,
  className,
  value,
  defaultValue,
  onChange,
  onClear,
  ...rest
}: InputProps) {
  const [innerValue, setInnerValue] = useState(String(defaultValue ?? ''));
  const isControlled = value !== undefined;
  const currentValue = isControlled ? String(value ?? '') : innerValue;

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (!isControlled) setInnerValue(e.target.value);
      onChange?.(e);
    },
    [isControlled, onChange],
  );

  const handleClear = useCallback(() => {
    if (!isControlled) setInnerValue('');
    onClear?.();
    const fakeTarget = { value: '' } as HTMLInputElement;
    onChange?.({
      target: fakeTarget,
      currentTarget: fakeTarget,
    } as ChangeEvent<HTMLInputElement>);
  }, [isControlled, onChange, onClear]);

  return (
    <span
      className={cn(
        'ai-input-wrap',
        sizeClass[size],
        status === 'error' && 'ai-input-error',
        status === 'warning' && 'ai-input-warning',
        disabled && 'ai-input-disabled',
        !shadow && 'ai-input-no-shadow',
        className,
      )}
    >
      {prefix ? <span className="ai-input-affix mr-1.5">{prefix}</span> : null}
      <input
        className="ai-input-field"
        disabled={disabled}
        value={currentValue}
        onChange={handleChange}
        {...rest}
      />
      {allowClear && currentValue && !disabled ? (
        <span
          className="ai-input-clear"
          onClick={handleClear}
          role="button"
          tabIndex={-1}
          aria-label="clear"
        >
          ×
        </span>
      ) : null}
      {suffix ? <span className="ai-input-affix ml-1.5">{suffix}</span> : null}
    </span>
  );
}

Input.displayName = 'Input';
