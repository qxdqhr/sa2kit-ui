import { cn } from '@animal-island-components-sa2kit/shared';
import type { LoadingProps } from '@animal-island-components-sa2kit/shared';

export function Loading({ className, style, active = true }: LoadingProps) {
  if (!active) return null;

  return (
    <div className={cn('ai-loading', className)} style={style} aria-live="polite" aria-busy="true">
      <svg className="ai-loading-spinner" viewBox="0 0 50 50" aria-hidden>
        <circle className="ai-loading-track" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
        <circle className="ai-loading-dash" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
      </svg>
    </div>
  );
}

Loading.displayName = 'Loading';
