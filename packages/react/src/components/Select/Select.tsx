import { cn } from '@sa2kit-ui/shared';
import type { SelectProps } from '@sa2kit-ui/shared';
import { useEffect, useRef, useState } from 'react';

export function Select({
  options,
  value,
  onChange,
  placeholder = '请选择',
  disabled = false,
  className,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentLabel = options.find((option) => option.key === value)?.label ?? placeholder;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const handleSelect = (key: string) => {
    onChange(key);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className={cn('sa2-select', disabled && 'sa2-select-disabled', className)}>
      <button
        type="button"
        className={cn('sa2-select-trigger', open && 'sa2-select-trigger-open')}
        disabled={disabled}
        onClick={() => !disabled && setOpen((prev) => !prev)}
      >
        <span className={value ? 'sa2-select-value' : 'sa2-select-placeholder'}>{currentLabel}</span>
        <span className="sa2-select-arrow" aria-hidden>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {open ? (
        <div className="sa2-select-dropdown">
          {options.map((option) => {
            const isActive = value === option.key;
            const isHovered = hoveredKey === option.key;
            return (
              <button
                key={option.key}
                type="button"
                className={cn(
                  'sa2-select-option',
                  isActive && 'sa2-select-option-active',
                  isHovered && 'sa2-select-option-hovered',
                )}
                onClick={() => handleSelect(option.key)}
                onMouseEnter={() => setHoveredKey(option.key)}
                onMouseLeave={() => setHoveredKey(null)}
              >
                <span className="sa2-select-option-dot" />
                {option.label}
                {isActive ? <span className="sa2-select-pill-bar" aria-hidden /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

Select.displayName = 'Select';
