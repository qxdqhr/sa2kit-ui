import { cn } from '@animal-island-components-sa2kit/shared';
import type { CursorProps } from '@animal-island-components-sa2kit/shared';
import './cursor.css';

export function Cursor({ children, className, style, forceAll = true }: CursorProps) {
  return (
    <div
      className={cn(
        'animal-cursor',
        forceAll ? 'animal-cursor--force' : 'animal-cursor--scoped',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

Cursor.displayName = 'Cursor';
