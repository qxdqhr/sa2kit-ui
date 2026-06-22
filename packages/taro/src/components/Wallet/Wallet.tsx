import { cn } from '@animal-island-components-sa2kit/shared';
import type { WalletProps, WalletSize } from '@animal-island-components-sa2kit/shared';
import type { ReactNode } from 'react';
import { Text, View } from '@tarojs/components';

import { Icon } from '../Icon';

const formatValue = (value: WalletProps['value'], sep: string): string => {
  if (value === undefined || value === null) return '00,000';
  if (typeof value !== 'number') return String(value);
  if (!sep) return String(value);
  const sign = value < 0 ? '-' : '';
  const [int, frac] = Math.abs(value).toString().split('.');
  const intWithSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  return frac ? `${sign}${intWithSep}.${frac}` : `${sign}${intWithSep}`;
};

const SIZE_CLASS: Record<WalletSize, string> = {
  small: 'ai-wallet-sm',
  medium: '',
  large: 'ai-wallet-lg',
};

function DefaultBagIcon() {
  return <Icon item={22} size="80%" />;
}

export function Wallet({
  value = '00,000',
  icon,
  size = 'medium',
  thousandSeparator = ',',
  className,
  style,
}: WalletProps) {
  const bagContent: ReactNode = icon ?? <DefaultBagIcon />;

  return (
    <View className={cn('ai-wallet', SIZE_CLASS[size], className)} style={style}>
      <View className="ai-wallet-bag-slot">{bagContent}</View>
      <View className="ai-wallet-pill">
        <Text className="ai-wallet-value">{formatValue(value, thousandSeparator)}</Text>
      </View>
    </View>
  );
}

Wallet.displayName = 'Wallet';
