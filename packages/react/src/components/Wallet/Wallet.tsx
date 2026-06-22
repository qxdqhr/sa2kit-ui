import { cn } from '@animal-island-components-sa2kit/shared';
import type { WalletProps, WalletSize } from '@animal-island-components-sa2kit/shared';
import type { ReactNode } from 'react';

import defaultBagSvg from '../../assets/wallet/bag-default.svg';
import { Icon, ITEM_URL_MAP } from '../Icon';

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
  if (ITEM_URL_MAP[22]) {
    return <Icon item={22} size="80%" />;
  }
  return (
    <span
      className="ai-wallet-bag-fallback"
      style={{ backgroundImage: `url(${defaultBagSvg})` }}
    />
  );
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
    <div className={cn('ai-wallet', SIZE_CLASS[size], className)} style={style}>
      <div className="ai-wallet-bag-slot" aria-hidden="true">
        {bagContent}
      </div>
      <div className="ai-wallet-pill">
        <span className="ai-wallet-value">{formatValue(value, thousandSeparator)}</span>
      </div>
    </div>
  );
}

Wallet.displayName = 'Wallet';
