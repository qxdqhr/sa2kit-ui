import { cn } from '@animal-island-components-sa2kit/shared';
import type { IconName, PhoneProps } from '@animal-island-components-sa2kit/shared';
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
    <div className={cn('ai-phone-container', className)}>
      <div className="ai-phone">
        <div className="ai-phone-screen">
          <div className="ai-phone-home">
            <div className="ai-phone-date">
              <div className="ai-phone-date-header">
                <span
                  className="ai-phone-wifi"
                  style={{ backgroundImage: `url(${PHONE_STATUS_ICONS.wifi})` }}
                />
                <div>
                  {displayHours}
                  <span className="ai-phone-blink">:</span>
                  {displayMinutes}
                  {ampm}
                </div>
                <span
                  className="ai-phone-location"
                  style={{ backgroundImage: `url(${PHONE_STATUS_ICONS.location})` }}
                />
              </div>
              <div className="ai-phone-day">Welcome!</div>
            </div>
            <div className="ai-phone-apps">
              {apps.map((app) => (
                <div
                  key={app.id}
                  className={cn('ai-phone-app', app.offset && 'ai-phone-app-offset')}
                  style={{ backgroundColor: app.color }}
                >
                  {app.hasNewMessage ? <span className="ai-phone-badge" /> : null}
                  <Icon
                    name={app.iconName}
                    size="100%"
                    className={cn(
                      'ai-phone-app-icon',
                      app.offset && 'ai-phone-app-icon-offset',
                    )}
                    style={{ backgroundSize: '70% auto', ...app.iconStyle }}
                  />
                </div>
              ))}
            </div>
            <div className="ai-phone-page-indicator">
              <span
                className="ai-phone-page"
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
