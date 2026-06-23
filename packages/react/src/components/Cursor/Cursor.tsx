import { cn } from '@sa2kit-ui/shared';
import type { CursorProps } from '@sa2kit-ui/shared';

export function Cursor({ children, className, style, forceAll = true }: CursorProps) {
  return (
    <div
      className={cn(
        'sa2-cursor',
        forceAll ? 'sa2-cursor--force' : 'sa2-cursor--scoped',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

Cursor.displayName = 'Cursor';
