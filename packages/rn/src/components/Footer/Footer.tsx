import { cn } from '@animal-island-components-sa2kit/shared';
import type { FooterProps } from '@animal-island-components-sa2kit/shared';
import { ImageBackground, View } from 'react-native';

import footerSea from '../../assets/footer/footer-sea.png';

export function Footer({ type = 'tree', className, style }: FooterProps) {
  const isSea = type === 'sea';

  if (isSea) {
    return (
      <ImageBackground
        source={footerSea}
        className={cn('ai-footer ai-footer-sea', className)}
        style={style as object}
        resizeMode="cover"
      />
    );
  }

  return <View className={cn('ai-footer ai-footer-tree', className)} style={style as object} />;
}

Footer.displayName = 'Footer';
