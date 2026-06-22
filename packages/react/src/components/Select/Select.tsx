import { cn } from '@animal-island-components-sa2kit/shared';
import type { SelectProps } from '@animal-island-components-sa2kit/shared';
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
    <div ref={wrapperRef} className={cn('ai-select', disabled && 'ai-select-disabled', className)}>
      <button
        type="button"
        className={cn('ai-select-trigger', open && 'ai-select-trigger-open')}
        disabled={disabled}
        onClick={() => !disabled && setOpen((prev) => !prev)}
      >
        <span className={value ? 'ai-select-value' : 'ai-select-placeholder'}>{currentLabel}</span>
        <span className="ai-select-arrow" aria-hidden>
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
        <div className="ai-select-dropdown">
          {options.map((option) => {
            const isActive = value === option.key;
            const isHovered = hoveredKey === option.key;
            return (
              <button
                key={option.key}
                type="button"
                className={cn(
                  'ai-select-option',
                  isActive && 'ai-select-option-active',
                  isHovered && 'ai-select-option-hovered',
                )}
                onClick={() => handleSelect(option.key)}
                onMouseEnter={() => setHoveredKey(option.key)}
                onMouseLeave={() => setHoveredKey(null)}
              >
                <span className="ai-select-option-dot" />
                {option.label}
                {isActive ? <span className="ai-select-pill-bar" aria-hidden /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

Select.displayName = 'Select';
