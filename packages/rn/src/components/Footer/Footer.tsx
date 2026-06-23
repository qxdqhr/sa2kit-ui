import { cn } from '@sa2kit-ui/shared';
import type { FooterProps } from '@sa2kit-ui/shared';
import { ImageBackground, View } from 'react-native';

import footerSea from '../../assets/footer/footer-sea.png';

export function Footer({ type = 'tree', className, style }: FooterProps) {
  const isSea = type === 'sea';

  if (isSea) {
    return (
      <ImageBackground
        source={footerSea}
        className={cn('sa2-footer sa2-footer-sea', className)}
        style={style as object}
        resizeMode="cover"
      />
    );
  }

  return <View className={cn('sa2-footer sa2-footer-tree', className)} style={style as object} />;
}

Footer.displayName = 'Footer';
