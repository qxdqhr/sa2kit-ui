import { cn } from '@animal-island-components-sa2kit/shared';
import type { FooterProps } from '@animal-island-components-sa2kit/shared';
import { Image, View } from '@tarojs/components';

import footerSea from '../../assets/footer/footer-sea.png';

export function Footer({ type = 'tree', className, style }: FooterProps) {
  const isSea = type === 'sea';

  if (isSea) {
    return (
      <View className={cn('ai-footer ai-footer-sea', className)} style={style}>
        <Image src={footerSea} mode="aspectFill" className="h-full w-full" />
      </View>
    );
  }

  return <View className={cn('ai-footer ai-footer-tree', className)} style={style} />;
}

Footer.displayName = 'Footer';
