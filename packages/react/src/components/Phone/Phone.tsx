import { cn } from '@sa2kit-ui/shared';
import type { IconName, PhoneProps } from '@sa2kit-ui/shared';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

import { Icon } from '../Icon';
import { PHONE_STATUS_ICONS } from './phoneAssets';

interface App {
  id: string;
  iconName: IconName;
  color: string;
  offset?: boolean;
  hasNewMessage?: boolean;
  iconStyle?: CSSProperties;
}

const apps: App[] = [
  { id: 'camera', iconName: 'icon-camera', color: '#B77DEE', hasNewMessage: true },
  { id: 'app', iconName: 'icon-miles', color: '#889DF0', offset: true },
  { id: 'critterpedia', iconName: 'icon-critterpedia', color: '#F7CD67', iconStyle: { width: '105px' } },
  { id: 'diy', iconName: 'icon-diy', color: '#E59266' },
  { id: 'shopping', iconName: 'icon-design', color: '#F8A6B2' },
  { id: 'variant', iconName: 'icon-map', color: '#82D5BB', hasNewMessage: true, iconStyle: { width: '90px' } },
  { id: 'design', iconName: 'icon-variant', color: '#8AC68A', iconStyle: { width: '80px' } },
  { id: 'map', iconName: 'icon-helicopter', color: '#FC736D' },
  { id: 'chat', iconName: 'icon-chat', color: '#D1DA49' },
];

export function Phone({ className }: PhoneProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const displayMinutes = minutes.toString().padStart(2, '0');

  return (
    <div className={cn('sa2-phone-container', className)}>
      <div className="sa2-phone">
        <div className="sa2-phone-screen-content">
          <div className="sa2-phone-home-screen">
            <div className="sa2-phone-date-display">
              <div className="sa2-phone-date-header">
                <span
                  className="sa2-phone-icon-wifi"
                  style={{ backgroundImage: `url(${PHONE_STATUS_ICONS.wifi})` }}
                />
                <div>
                  {displayHours}
                  <span className="sa2-phone-blink">:</span>
                  {displayMinutes}
                  {ampm}
                </div>
                <span
                  className="sa2-phone-icon-location"
                  style={{ backgroundImage: `url(${PHONE_STATUS_ICONS.location})` }}
                />
              </div>
              <div className="sa2-phone-day-text">Welcome!</div>
            </div>
            <div className="sa2-phone-apps-grid">
              {apps.map((app) => (
                <div
                  key={app.id}
                  className={cn('sa2-phone-app-item', app.offset && 'sa2-phone-app-item-offset')}
                  style={{ backgroundColor: app.color }}
                >
                  {app.hasNewMessage ? <span className="sa2-phone-badge" /> : null}
                  <Icon
                    name={app.iconName}
                    size="100%"
                    className={cn(
                      'sa2-phone-app-icon',
                      app.offset && 'sa2-phone-app-icon-offset',
                    )}
                    style={{ backgroundSize: '70% auto', ...app.iconStyle }}
                  />
                </div>
              ))}
            </div>
            <div className="sa2-phone-page-indicator">
              <span
                className="sa2-phone-icon-page"
                style={{ backgroundImage: `url(${PHONE_STATUS_ICONS.page})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Phone.displayName = 'Phone';
