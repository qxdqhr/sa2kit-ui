import { cn } from '@sa2kit-ui/shared';
import type { IconName, PhoneProps } from '@sa2kit-ui/shared';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { Icon } from '../Icon';
import { PHONE_STATUS_ICONS } from './phoneAssets';

interface App {
  id: string;
  iconName: IconName;
  color: string;
  offset?: boolean;
  hasNewMessage?: boolean;
}

const apps: App[] = [
  { id: 'camera', iconName: 'icon-camera', color: '#B77DEE', hasNewMessage: true },
  { id: 'app', iconName: 'icon-miles', color: '#889DF0', offset: true },
  { id: 'critterpedia', iconName: 'icon-critterpedia', color: '#F7CD67' },
  { id: 'diy', iconName: 'icon-diy', color: '#E59266' },
  { id: 'shopping', iconName: 'icon-design', color: '#F8A6B2' },
  { id: 'variant', iconName: 'icon-map', color: '#82D5BB', hasNewMessage: true },
  { id: 'design', iconName: 'icon-variant', color: '#8AC68A' },
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
    <View className={cn('sa2-phone-container', className)}>
      <View className="sa2-phone">
        <View className="sa2-phone-screen">
          <View className="sa2-phone-home">
            <View className="sa2-phone-date">
              <View className="sa2-phone-date-header">
                <Image source={PHONE_STATUS_ICONS.wifi} className="sa2-phone-wifi" resizeMode="contain" />
                <Text>
                  {displayHours}
                  <Text className="sa2-phone-blink">:</Text>
                  {displayMinutes}
                  {ampm}
                </Text>
                <Image source={PHONE_STATUS_ICONS.location} className="sa2-phone-location" resizeMode="contain" />
              </View>
              <Text className="sa2-phone-day">Welcome!</Text>
            </View>
            <View className="sa2-phone-apps">
              {apps.map((app) => (
                <View
                  key={app.id}
                  className={cn('sa2-phone-app', app.offset && 'sa2-phone-app-offset')}
                  style={{ backgroundColor: app.color }}
                >
                  {app.hasNewMessage ? <View className="sa2-phone-badge" /> : null}
                  <Icon name={app.iconName} size="70%" className={cn('sa2-phone-app-icon', app.offset && 'sa2-phone-app-icon-offset')} />
                </View>
              ))}
            </View>
            <View className="sa2-phone-page-indicator">
              <Image source={PHONE_STATUS_ICONS.page} className="sa2-phone-page" resizeMode="contain" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

Phone.displayName = 'Phone';
