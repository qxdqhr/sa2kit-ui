import { cn } from '@animal-island-components-sa2kit/shared';
import type { TooltipPlacement, TooltipProps } from '@animal-island-components-sa2kit/shared';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const placementClass: Record<TooltipPlacement, string> = {
  top: 'ai-tooltip-top',
  'top-start': 'ai-tooltip-top-start',
  'top-end': 'ai-tooltip-top-end',
  bottom: 'ai-tooltip-bottom',
  'bottom-start': 'ai-tooltip-bottom-start',
  'bottom-end': 'ai-tooltip-bottom-end',
  left: 'ai-tooltip-left',
  'left-start': 'ai-tooltip-left-start',
  'left-end': 'ai-tooltip-left-end',
  right: 'ai-tooltip-right',
  'right-start': 'ai-tooltip-right-start',
  'right-end': 'ai-tooltip-right-end',
};

export function Tooltip({
  title,
  placement = 'top',
  trigger = 'hover',
  variant = 'default',
  bordered = true,
  children,
  className,
  style,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const show = useCallback(() => {
    clearTimeout(timerRef.current);
    setVisible(true);
  }, []);

  const hide = useCallback(() => {
    timerRef.current = setTimeout(() => setVisible(false), 100);
  }, []);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const child = React.Children.only(children);
  const triggerProps: Record<string, unknown> = {};

  if (trigger === 'hover') {
    triggerProps.onMouseEnter = (event: React.MouseEvent) => {
      show();
      (child.props as { onMouseEnter?: (e: React.MouseEvent) => void }).onMouseEnter?.(event);
    };
    triggerProps.onMouseLeave = (event: React.MouseEvent) => {
      hide();
      (child.props as { onMouseLeave?: (e: React.MouseEvent) => void }).onMouseLeave?.(event);
    };
  } else if (trigger === 'focus') {
    triggerProps.onFocus = (event: React.FocusEvent) => {
      show();
      (child.props as { onFocus?: (e: React.FocusEvent) => void }).onFocus?.(event);
    };
    triggerProps.onBlur = (event: React.FocusEvent) => {
      hide();
      (child.props as { onBlur?: (e: React.FocusEvent) => void }).onBlur?.(event);
    };
  } else if (trigger === 'click') {
    triggerProps.onClick = (event: React.MouseEvent) => {
      setVisible((value) => !value);
      (child.props as { onClick?: (e: React.MouseEvent) => void }).onClick?.(event);
    };
  }

  return (
    <span className={cn('ai-tooltip-wrap', className)} style={style}>
      {React.cloneElement(child, triggerProps)}
      <span
        role="tooltip"
        aria-hidden={!visible}
        className={cn(
          'ai-tooltip',
          placementClass[placement],
          variant === 'island' && 'ai-tooltip-island',
          bordered ? 'ai-tooltip-bordered' : 'ai-tooltip-borderless',
          visible && 'ai-tooltip-visible',
        )}
        onMouseEnter={trigger === 'hover' ? show : undefined}
        onMouseLeave={trigger === 'hover' ? hide : undefined}
      >
        <span className="ai-tooltip-content">{title}</span>
      </span>
    </span>
  );
}

Tooltip.displayName = 'Tooltip';
