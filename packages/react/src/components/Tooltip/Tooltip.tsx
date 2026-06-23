import { cn } from '@sa2kit-ui/shared';
import type { TooltipPlacement, TooltipProps } from '@sa2kit-ui/shared';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const placementClass: Record<TooltipPlacement, string> = {
  top: 'sa2-tooltip-top',
  'top-start': 'sa2-tooltip-top-start',
  'top-end': 'sa2-tooltip-top-end',
  bottom: 'sa2-tooltip-bottom',
  'bottom-start': 'sa2-tooltip-bottom-start',
  'bottom-end': 'sa2-tooltip-bottom-end',
  left: 'sa2-tooltip-left',
  'left-start': 'sa2-tooltip-left-start',
  'left-end': 'sa2-tooltip-left-end',
  right: 'sa2-tooltip-right',
  'right-start': 'sa2-tooltip-right-start',
  'right-end': 'sa2-tooltip-right-end',
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
    <span className={cn('sa2-tooltip-wrap', className)} style={style}>
      {React.cloneElement(child, triggerProps)}
      <span
        role="tooltip"
        aria-hidden={!visible}
        className={cn(
          'sa2-tooltip',
          placementClass[placement],
          variant === 'island' && 'sa2-tooltip-island',
          bordered ? 'sa2-tooltip-bordered' : 'sa2-tooltip-borderless',
          visible && 'sa2-tooltip-visible',
        )}
        onMouseEnter={trigger === 'hover' ? show : undefined}
        onMouseLeave={trigger === 'hover' ? hide : undefined}
      >
        <span className="sa2-tooltip-content">{title}</span>
      </span>
    </span>
  );
}

Tooltip.displayName = 'Tooltip';
