import { cn } from '@sa2kit-ui/shared';
import type { CollapseProps } from '@sa2kit-ui/shared';
import { useState } from 'react';

export function Collapse({
  question,
  answer,
  defaultExpanded = false,
  disabled = false,
  className,
  style,
}: CollapseProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleClick = () => {
    if (!disabled) setExpanded((value) => !value);
  };

  return (
    <div
      className={cn('sa2-collapse', expanded && 'sa2-collapse-expanded', disabled && 'sa2-collapse-disabled', className)}
      style={style}
    >
      <button
        type="button"
        className="sa2-collapse-header"
        onClick={handleClick}
        disabled={disabled}
        aria-expanded={expanded}
      >
        <span className="sa2-collapse-icon">{expanded ? '−' : '+'}</span>
        <span className="sa2-collapse-question">{question}</span>
        <span className="sa2-collapse-leaf" aria-hidden>
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              fill="currentColor"
              d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"
            />
          </svg>
        </span>
      </button>
      <div className="sa2-collapse-body">
        <div className="sa2-collapse-answer">{answer}</div>
      </div>
    </div>
  );
}

Collapse.displayName = 'Collapse';
