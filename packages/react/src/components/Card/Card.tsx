import { cn } from '@sa2kit-ui/shared';
import type { CardProps } from '@sa2kit-ui/shared';
import { forwardRef } from 'react';

const colorClass: Record<NonNullable<CardProps['color']>, string> = {
  default: '',
  'app-pink': 'sa2-card-app-pink',
  purple: 'sa2-card-purple',
  'app-blue': 'sa2-card-app-blue',
  'app-yellow': 'sa2-card-app-yellow',
  'app-orange': 'sa2-card-app-orange',
  'app-teal': 'sa2-card-app-teal',
  'app-green': 'sa2-card-app-green',
  'app-red': 'sa2-card-app-red',
  'lime-green': 'sa2-card-lime-green',
  'yellow-green': 'sa2-card-yellow-green',
  brown: 'sa2-card-brown',
  'warm-peach-pink': 'sa2-card-warm-peach-pink',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    type = 'default',
    color = 'default',
    children,
    className,
    style,
    onClick,
  },
  ref,
) {
  return (
    <div
      ref={ref}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') onClick();
            }
          : undefined
      }
      className={cn(
        'sa2-card sa2-font',
        type === 'dashed' && 'sa2-card-dashed',
        color !== 'default' && colorClass[color],
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';
