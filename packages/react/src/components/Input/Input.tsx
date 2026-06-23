import { cn } from '@sa2kit-ui/shared';
import type { InputProps } from '@sa2kit-ui/shared';
import { useCallback, useState, type ChangeEvent, type ChangeEventHandler } from 'react';

const sizeClass = {
  small: 'sa2-input-wrap-sm',
  middle: 'sa2-input-wrap-md',
  large: 'sa2-input-wrap-lg',
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
        'sa2-input-wrap',
        sizeClass[size],
        status === 'error' && 'sa2-input-error',
        status === 'warning' && 'sa2-input-warning',
        disabled && 'sa2-input-disabled',
        !shadow && 'sa2-input-no-shadow',
        className,
      )}
    >
      {prefix ? <span className="sa2-input-affix mr-1.5">{prefix}</span> : null}
      <input
        className="sa2-input-field"
        disabled={disabled}
        value={currentValue}
        onChange={handleChange}
        {...rest}
      />
      {allowClear && currentValue && !disabled ? (
        <span
          className="sa2-input-clear"
          onClick={handleClear}
          role="button"
          tabIndex={-1}
          aria-label="clear"
        >
          ×
        </span>
      ) : null}
      {suffix ? <span className="sa2-input-affix ml-1.5">{suffix}</span> : null}
    </span>
  );
}

Input.displayName = 'Input';
