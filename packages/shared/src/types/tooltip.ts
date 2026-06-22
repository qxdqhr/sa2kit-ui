import type { CSSProperties, ReactElement, ReactNode } from 'react';

export type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export type TooltipTrigger = 'hover' | 'focus' | 'click';
export type TooltipVariant = 'default' | 'island';

export interface TooltipProps {
  title: ReactNode;
  placement?: TooltipPlacement;
  trigger?: TooltipTrigger;
  variant?: TooltipVariant;
  bordered?: boolean;
  children: ReactElement;
  className?: string;
  style?: CSSProperties;
}
