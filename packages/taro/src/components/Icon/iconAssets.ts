import type { IconName } from '@sa2kit-ui/shared';

import iconCamera from '../../assets/icons/icon-camera.png';
import iconChat from '../../assets/icons/icon-chat.png';
import iconCritterpedia from '../../assets/icons/icon-critterpedia.png';
import iconDesign from '../../assets/icons/icon-design.png';
import iconDiy from '../../assets/icons/icon-diy.png';
import iconHelicopter from '../../assets/icons/icon-helicopter.png';
import iconMap from '../../assets/icons/icon-map.png';
import iconMiles from '../../assets/icons/icon-miles.png';
import iconShopping from '../../assets/icons/icon-shopping.png';
import iconVariant from '../../assets/icons/icon-variant.png';

export const ICON_SOURCES: Record<IconName, string> = {
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

export const ITEM_URL_MAP: Record<number, string> = {};
export const ITEM_COUNT = 0;
export const ITEM_LIST: number[] = [];

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
