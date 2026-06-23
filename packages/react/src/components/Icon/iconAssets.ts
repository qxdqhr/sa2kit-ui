import type { IconName } from '@sa2kit-ui/shared';

import iconCamera from '../../assets/icons/icon-camera.svg';
import iconChat from '../../assets/icons/icon-chat.svg';
import iconCritterpedia from '../../assets/icons/icon-critterpedia.svg';
import iconDesign from '../../assets/icons/icon-design.svg';
import iconDiy from '../../assets/icons/icon-diy.svg';
import iconHelicopter from '../../assets/icons/icon-helicopter.svg';
import iconMap from '../../assets/icons/icon-map.svg';
import iconMiles from '../../assets/icons/icon-miles.svg';
import iconShopping from '../../assets/icons/icon-shopping.svg';
import iconVariant from '../../assets/icons/icon-variant.svg';

export const ICON_URLS: Record<IconName, string> = {
  'icon-miles': iconMiles,
  'icon-camera': iconCamera,
  'icon-chat': iconChat,
  'icon-critterpedia': iconCritterpedia,
  'icon-design': iconDesign,
  'icon-diy': iconDiy,
  'icon-helicopter': iconHelicopter,
  'icon-map': iconMap,
  'icon-shopping': iconShopping,
  'icon-variant': iconVariant,
};

const itemModules = import.meta.glob<string>('../../assets/icons/items/item-*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const ITEM_URL_MAP: Record<number, string> = (() => {
  const map: Record<number, string> = {};
  for (const path in itemModules) {
    const match = /item-(\d+)\.png$/.exec(path);
    if (match) {
      map[Number(match[1])] = itemModules[path];
    }
  }
  return map;
})();

export const ITEM_COUNT = Object.keys(ITEM_URL_MAP).length;

export const ITEM_LIST: number[] = Object.keys(ITEM_URL_MAP)
  .map(Number)
  .sort((a, b) => a - b);

export const ICON_LIST: { name: IconName; label: string }[] = [
  { name: 'icon-miles', label: 'NookMiles' },
  { name: 'icon-camera', label: 'Camera' },
  { name: 'icon-chat', label: 'Chat' },
  { name: 'icon-critterpedia', label: 'Critterpedia' },
  { name: 'icon-design', label: 'Design' },
  { name: 'icon-diy', label: 'DIY' },
  { name: 'icon-helicopter', label: 'Helicopter' },
  { name: 'icon-map', label: 'Map' },
  { name: 'icon-shopping', label: 'Shopping' },
  { name: 'icon-variant', label: 'Variant' },
];
