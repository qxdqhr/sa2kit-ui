import { cn } from '@sa2kit-ui/shared';
import type { LoadingProps } from '@sa2kit-ui/shared';

export function Loading({ className, style, active = true }: LoadingProps) {
  if (!active) return null;

  return (
    <div className={cn('sa2-loading', className)} style={style} aria-live="polite" aria-busy="true">
      <svg className="sa2-loading-spinner" viewBox="0 0 50 50" aria-hidden>
        <circle className="sa2-loading-track" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
        <circle className="sa2-loading-dash" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
      </svg>
    </div>
  );
}

Loading.displayName = 'Loading';
