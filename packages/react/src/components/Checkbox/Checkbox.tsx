import { cn } from '@sa2kit-ui/shared';
import type { CheckboxProps } from '@sa2kit-ui/shared';
import { useCallback, useState } from 'react';

const sizeClass = {
  small: 'sa2-checkbox-sm',
  middle: 'sa2-checkbox-md',
  large: 'sa2-checkbox-lg',
} as const;

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M2 8L6 12L14 4"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Checkbox({
  value,
  defaultValue = [],
  options,
  size = 'middle',
  disabled = false,
  direction = 'horizontal',
  onChange,
  className,
  style,
}: CheckboxProps) {
  const [innerValue, setInnerValue] = useState<Array<string | number>>(defaultValue);
  const isControlled = value !== undefined;
  const checkedValues = isControlled ? value : innerValue;

  const handleChange = useCallback(
    (optValue: string | number, optDisabled?: boolean) => {
      if (disabled || optDisabled) return;
      const next = checkedValues.includes(optValue)
        ? checkedValues.filter((item) => item !== optValue)
        : [...checkedValues, optValue];
      if (!isControlled) setInnerValue(next);
      onChange?.(next);
    },
    [disabled, checkedValues, isControlled, onChange],
  );

  return (
    <div
      className={cn(
        'sa2-checkbox-group',
        direction === 'vertical' ? 'sa2-checkbox-vertical' : 'sa2-checkbox-horizontal',
        disabled && 'sa2-checkbox-group-disabled',
        className,
      )}
      style={style}
    >
      {options.map((opt) => {
        const isChecked = checkedValues.includes(opt.value);
        const isDisabled = disabled || opt.disabled;
        return (
          <label
            key={String(opt.value)}
            className={cn(
              'sa2-checkbox-item',
              sizeClass[size],
              isChecked && 'sa2-checkbox-checked',
              isDisabled && 'sa2-checkbox-disabled',
            )}
            onClick={() => handleChange(opt.value, opt.disabled)}
          >
            <span
              className="sa2-checkbox-box"
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={isDisabled ? -1 : 0}
              onKeyDown={(event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                  event.preventDefault();
                  handleChange(opt.value, opt.disabled);
                }
              }}
            >
              {isChecked ? (
                <span className="sa2-checkbox-mark">
                  <CheckIcon />
                </span>
              ) : null}
            </span>
            <span className="sa2-checkbox-label">{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
}

Checkbox.displayName = 'Checkbox';
