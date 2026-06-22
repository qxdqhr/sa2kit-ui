import { cn } from '@animal-island-components-sa2kit/shared';
import type { IconProps } from '@animal-island-components-sa2kit/shared';
import { Image, View } from '@tarojs/components';

import defaultBag from '../../assets/wallet/bag-default.png';
import { ICON_SOURCES, ITEM_URL_MAP } from './iconAssets';

export { ICON_LIST, ITEM_LIST, ITEM_URL_MAP } from './iconAssets';
export { ITEM_COUNT } from './iconAssets';

const resolveSize = (size: IconProps['size']) => {
  if (typeof size === 'number') return { width: `${size}px`, height: `${size}px` };
  if (typeof size === 'string') return { width: size, height: size };
  return { width: '24px', height: '24px' };
};

export function Icon({ name, item, size = 24, className, style, bounce = false }: IconProps) {
  const itemSource = typeof item === 'number' ? ITEM_URL_MAP[item] : undefined;
  const namedSource = name ? ICON_SOURCES[name] : undefined;
  const src = itemSource ?? namedSource ?? (item === 22 ? defaultBag : undefined);
  const dimension = resolveSize(size);

  return (
    <View
      className={cn('ai-icon overflow-hidden', bounce && 'ai-icon-bounce', className)}
      style={{ ...dimension, ...style }}
    >
      {src ? <Image src={src} mode="aspectFit" className="h-full w-full" /> : null}
    </View>
  );
}

Icon.displayName = 'Icon';
