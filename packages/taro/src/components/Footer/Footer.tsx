import { cn } from '@sa2kit-ui/shared';
import type { FooterProps } from '@sa2kit-ui/shared';
import { Image, View } from '@tarojs/components';

import footerSea from '../../assets/footer/footer-sea.png';

export function Footer({ type = 'tree', className, style }: FooterProps) {
  const isSea = type === 'sea';

  if (isSea) {
    return (
      <View className={cn('sa2-footer sa2-footer-sea', className)} style={style}>
        <Image src={footerSea} mode="aspectFill" className="h-full w-full" />
      </View>
    );
  }

  return <View className={cn('sa2-footer sa2-footer-tree', className)} style={style} />;
}

Footer.displayName = 'Footer';
