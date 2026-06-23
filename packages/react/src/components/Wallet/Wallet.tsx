import { cn } from '@sa2kit-ui/shared';
import type { WalletProps, WalletSize } from '@sa2kit-ui/shared';
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
  small: 'sa2-wallet-sm',
  medium: '',
  large: 'sa2-wallet-lg',
};

function DefaultBagIcon() {
  if (ITEM_URL_MAP[22]) {
    return <Icon item={22} size="80%" />;
  }
  return (
    <span
      className="sa2-wallet-bag-fallback"
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
    <div className={cn('sa2-wallet', SIZE_CLASS[size], className)} style={style}>
      <div className="sa2-wallet-bag-slot" aria-hidden="true">
        {bagContent}
      </div>
      <div className="sa2-wallet-pill">
        <span className="sa2-wallet-value">{formatValue(value, thousandSeparator)}</span>
      </div>
    </div>
  );
}

Wallet.displayName = 'Wallet';
