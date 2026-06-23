import { cn } from '@sa2kit-ui/shared';
import type { IconProps } from '@sa2kit-ui/shared';

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
      className={cn('sa2-icon', bounce && 'sa2-icon-bounce', className)}
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
