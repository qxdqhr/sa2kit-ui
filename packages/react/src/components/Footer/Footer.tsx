import { cn } from '@sa2kit-ui/shared';
import type { FooterProps } from '@sa2kit-ui/shared';

import footerSea from '../../assets/footer/footer-sea.svg';

export function Footer({ type = 'tree', className, style }: FooterProps) {
  const isSea = type === 'sea';

  return (
    <div
      className={cn('sa2-footer', isSea ? 'sa2-footer-sea' : 'sa2-footer-tree', className)}
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
