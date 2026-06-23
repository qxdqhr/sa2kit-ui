import { cn } from '@sa2kit-ui/shared';
import type { TabsProps } from '@sa2kit-ui/shared';
import { Text, View } from '@tarojs/components';
import { useState } from 'react';

export function Tabs({
  items,
  defaultActiveKey,
  activeKey,
  onChange,
  className,
  style,
  leafAnimation = true,
  shadow = true,
}: TabsProps) {
  const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey ?? items[0]?.key);
  const currentActiveKey = activeKey !== undefined ? activeKey : internalActiveKey;

  const handleTabClick = (key: string) => {
    if (activeKey === undefined) setInternalActiveKey(key);
    onChange?.(key);
  };

  const activeItem = items.find((item) => item.key === currentActiveKey);

  return (
    <View className={cn('sa2-tabs', className)} style={style}>
      <View className="sa2-tabs-list">
        {items.map((item) => {
          const isActive = item.key === currentActiveKey;
          return (
            <View
              key={item.key}
              className={cn(
                'sa2-tabs-item',
                isActive && 'sa2-tabs-item-active',
                isActive && shadow && 'sa2-tabs-item-active-shadow',
              )}
              onClick={() => handleTabClick(item.key)}
            >
              <Text className="sa2-tabs-icon">{isActive ? '●' : '○'}</Text>
              <Text className="sa2-tabs-label">{item.label}</Text>
              {isActive ? (
                <Text className={cn('sa2-tabs-leaf', !leafAnimation && 'sa2-tabs-leaf-static')}>🍃</Text>
              ) : null}
            </View>
          );
        })}
      </View>
      <View className="sa2-tabs-content">
        <View className="sa2-tabs-content-inner">{activeItem?.children}</View>
      </View>
    </View>
  );
}

Tabs.displayName = 'Tabs';
