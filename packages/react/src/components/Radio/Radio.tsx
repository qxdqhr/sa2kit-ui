import { cn } from '@sa2kit-ui/shared';
import type { RadioProps } from '@sa2kit-ui/shared';
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';

const sizeClass = {
  small: 'sa2-radio-sm',
  middle: 'sa2-radio-md',
  large: 'sa2-radio-lg',
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

export function Radio({
  value,
  defaultValue,
  options,
  size = 'middle',
  disabled = false,
  direction = 'horizontal',
  onChange,
  className,
  style,
}: RadioProps) {
  const [innerValue, setInnerValue] = useState<string | number | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const checkedValue = isControlled ? value : innerValue;
  const groupRef = useRef<HTMLDivElement>(null);

  const [focusedIndex, setFocusedIndex] = useState<number>(() => {
    const index = options.findIndex((option) => option.value === checkedValue);
    return index >= 0 ? index : 0;
  });

  useEffect(() => {
    const index = options.findIndex((option) => option.value === checkedValue);
    if (index >= 0) setFocusedIndex(index);
  }, [checkedValue, options]);

  const enabledIndices = useMemo(
    () =>
      options
        .map((option, index) => ({ option, index }))
        .filter(({ option }) => !disabled && !option.disabled)
        .map(({ index }) => index),
    [options, disabled],
  );

  const currentEnabledPos = useMemo(
    () => enabledIndices.indexOf(focusedIndex),
    [enabledIndices, focusedIndex],
  );

  const handleChange = useCallback(
    (optValue: string | number, optDisabled?: boolean) => {
      if (disabled || optDisabled) return;
      if (!isControlled) setInnerValue(optValue);
      onChange?.(optValue);
    },
    [disabled, isControlled, onChange],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (enabledIndices.length === 0) return;

      let nextPos = -1;
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault();
          nextPos = (currentEnabledPos + 1) % enabledIndices.length;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          event.preventDefault();
          nextPos = (currentEnabledPos - 1 + enabledIndices.length) % enabledIndices.length;
          break;
        case 'Home':
          event.preventDefault();
          nextPos = 0;
          break;
        case 'End':
          event.preventDefault();
          nextPos = enabledIndices.length - 1;
          break;
        default:
          return;
      }

      if (nextPos >= 0) {
        const nextIndex = enabledIndices[nextPos];
        setFocusedIndex(nextIndex);
        handleChange(options[nextIndex].value, options[nextIndex].disabled);
        const circles = groupRef.current?.querySelectorAll('[data-radio-circle]');
        (circles?.[nextIndex] as HTMLElement | undefined)?.focus();
      }
    },
    [enabledIndices, currentEnabledPos, options, handleChange],
  );

  return (
    <div
      ref={groupRef}
      className={cn(
        'sa2-radio-group',
        direction === 'vertical' ? 'sa2-radio-vertical' : 'sa2-radio-horizontal',
        disabled && 'sa2-radio-group-disabled',
        className,
      )}
      style={style}
      role="radiogroup"
      onKeyDown={handleKeyDown}
    >
      {options.map((option, index) => {
        const isChecked = checkedValue === option.value;
        const isDisabled = disabled || option.disabled;
        const isFocusable = index === focusedIndex && !isDisabled;

        return (
          <label
            key={String(option.value)}
            className={cn(
              'sa2-radio-item',
              sizeClass[size],
              isChecked && 'sa2-radio-checked',
              isDisabled && 'sa2-radio-disabled',
            )}
            onClick={() => {
              if (!isDisabled) {
                setFocusedIndex(index);
                handleChange(option.value, option.disabled);
              }
            }}
          >
            <span
              className="sa2-radio-circle"
              data-radio-circle
              role="radio"
              aria-checked={isChecked}
              aria-disabled={isDisabled || undefined}
              tabIndex={isFocusable ? 0 : -1}
              onFocus={() => {
                if (!isDisabled) setFocusedIndex(index);
              }}
              onKeyDown={(event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                  event.preventDefault();
                  handleChange(option.value, option.disabled);
                }
              }}
            >
              {isChecked ? (
                <span className="sa2-radio-mark">
                  <CheckIcon />
                </span>
              ) : null}
            </span>
            <span className="sa2-radio-label">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}

Radio.displayName = 'Radio';
