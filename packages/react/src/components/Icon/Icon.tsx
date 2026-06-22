import { cn } from '@animal-island-components-sa2kit/shared';
import type { IconProps } from '@animal-island-components-sa2kit/shared';

import { ICON_LIST, ICON_URLS, ITEM_LIST, ITEM_URL_MAP } from './iconAssets';

export { ICON_LIST, ITEM_LIST, ITEM_URL_MAP };
export const ITEM_COUNT = Object.keys(ITEM_URL_MAP).length;

export function Icon({
  name,
  item,
  size = 24,
  className,
  style,
  bounce = false,
  ...rest
}: IconProps) {
  const itemUrl = typeof item === 'number' ? ITEM_URL_MAP[item] : undefined;
  const namedUrl = name ? ICON_URLS[name] : undefined;

  return (
    <span
      className={cn('ai-icon', bounce && 'ai-icon-bounce', className)}
      style={{
        width: size,
        height: size,
        backgroundImage: itemUrl
          ? `url(${itemUrl})`
          : namedUrl
            ? `url(${namedUrl})`
            : undefined,
        ...style,
      }}
      {...rest}
    />
  );
}

Icon.displayName = 'Icon';
