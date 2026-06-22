import { cn } from '@animal-island-components-sa2kit/shared';
import type { TabsProps } from '@animal-island-components-sa2kit/shared';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

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
    <View className={cn('ai-tabs', className)} style={style as object}>
      <View className="ai-tabs-list">
        {items.map((item) => {
          const isActive = item.key === currentActiveKey;
          return (
            <Pressable
              key={item.key}
              className={cn(
                'ai-tabs-item',
                isActive && 'ai-tabs-item-active',
                isActive && shadow && 'ai-tabs-item-active-shadow',
              )}
              onPress={() => handleTabClick(item.key)}
            >
              <Text className="ai-tabs-icon">{isActive ? '●' : '○'}</Text>
              <Text className="ai-tabs-label">{item.label}</Text>
              {isActive ? (
                <Text className={cn('ai-tabs-leaf', !leafAnimation && 'ai-tabs-leaf-static')}>🍃</Text>
              ) : null}
            </Pressable>
          );
        })}
      </View>
      <View className="ai-tabs-content">
        <View className="ai-tabs-content-inner">{activeItem?.children}</View>
      </View>
    </View>
  );
}

Tabs.displayName = 'Tabs';
