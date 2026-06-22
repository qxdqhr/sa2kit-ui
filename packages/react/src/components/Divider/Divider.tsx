import { cn } from '@animal-island-components-sa2kit/shared';
import type { DividerProps } from '@animal-island-components-sa2kit/shared';

const typeClass = {
  'line-brown': 'ai-divider-line-brown',
  'line-teal': 'ai-divider-line-teal',
  'line-white': 'ai-divider-line-white',
  'line-yellow': 'ai-divider-line-yellow',
  'wave-yellow': 'ai-divider-wave-yellow',
  'dashed-brown': 'ai-divider-dashed-brown',
  'dashed-teal': 'ai-divider-dashed-teal',
  'dashed-white': 'ai-divider-dashed-white',
  'dashed-yellow': 'ai-divider-dashed-yellow',
} as const;

export function Divider({ type = 'line-brown', className, style }: DividerProps) {
  return <div className={cn('ai-divider', typeClass[type], className)} style={style} role="separator" />;
}

Divider.displayName = 'Divider';
