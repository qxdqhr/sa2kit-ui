import { cn } from '@animal-island-components-sa2kit/shared';
import type { FooterProps } from '@animal-island-components-sa2kit/shared';

import footerSea from '../../assets/footer/footer-sea.svg';

export function Footer({ type = 'tree', className, style }: FooterProps) {
  const isSea = type === 'sea';

  return (
    <div
      className={cn('ai-footer', isSea ? 'ai-footer-sea' : 'ai-footer-tree', className)}
      style={
        isSea
          ? {
              backgroundImage: `url(${footerSea})`,
              ...style,
            }
          : style
      }
    />
  );
}

Footer.displayName = 'Footer';
