import { cn } from '@sa2kit-ui/shared';
import type { DividerProps } from '@sa2kit-ui/shared';

const typeClass = {
  'line-brown': 'sa2-divider-line-brown',
  'line-teal': 'sa2-divider-line-teal',
  'line-white': 'sa2-divider-line-white',
  'line-yellow': 'sa2-divider-line-yellow',
  'wave-yellow': 'sa2-divider-wave-yellow',
  'dashed-brown': 'sa2-divider-dashed-brown',
  'dashed-teal': 'sa2-divider-dashed-teal',
  'dashed-white': 'sa2-divider-dashed-white',
  'dashed-yellow': 'sa2-divider-dashed-yellow',
} as const;

export function Divider({ type = 'line-brown', className, style }: DividerProps) {
  return <div className={cn('sa2-divider', typeClass[type], className)} style={style} role="separator" />;
}

Divider.displayName = 'Divider';
