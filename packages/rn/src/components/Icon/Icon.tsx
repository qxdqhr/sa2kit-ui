import { cn } from '@animal-island-components-sa2kit/shared';
import type { IconProps } from '@animal-island-components-sa2kit/shared';
import { Image, View } from 'react-native';

import defaultBag from '../../assets/wallet/bag-default.png';
import { ICON_SOURCES, ITEM_URL_MAP } from './iconAssets';

export { ICON_LIST, ITEM_LIST, ITEM_URL_MAP } from './iconAssets';
export { ITEM_COUNT } from './iconAssets';

const resolveSize = (size: IconProps['size']) => {
  if (typeof size === 'number') return { width: size, height: size };
  if (typeof size === 'string' && size.endsWith('%')) return { width: size, height: size };
  const numeric = Number(size);
  return Number.isFinite(numeric) ? { width: numeric, height: numeric } : { width: 24, height: 24 };
};

export function Icon({ name, item, size = 24, className, style, bounce = false }: IconProps) {
  const itemSource = typeof item === 'number' ? ITEM_URL_MAP[item] : undefined;
  const namedSource = name ? ICON_SOURCES[name] : undefined;
  const source = itemSource ?? namedSource ?? (item === 22 ? defaultBag : undefined);
  const dimension = resolveSize(size);

  return (
    <View
      className={cn('ai-icon items-center justify-center overflow-hidden', bounce && 'ai-icon-bounce', className)}
      style={[dimension as object, style as object]}
    >
      {source ? <Image source={source} style={{ width: '100%', height: '100%' }} resizeMode="contain" /> : null}
    </View>
  );
}

Icon.displayName = 'Icon';
