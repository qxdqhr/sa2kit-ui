import { cn } from '@sa2kit-ui/shared';
import type { TabsProps } from '@sa2kit-ui/shared';
import { useState } from 'react';

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" className="text-sa2-success" aria-hidden>
    <path
      fill="currentColor"
      d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"
    />
  </svg>
);

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
  const [internalActiveKey, setInternalActiveKey] = useState(
    defaultActiveKey ?? items[0]?.key,
  );
  const currentActiveKey = activeKey !== undefined ? activeKey : internalActiveKey;

  const handleTabClick = (key: string) => {
    if (activeKey === undefined) setInternalActiveKey(key);
    onChange?.(key);
  };

  const activeItem = items.find((item) => item.key === currentActiveKey);

  return (
    <div className={cn('sa2-tabs', className)} style={style}>
      <div className="sa2-tabs-list">
        {items.map((item) => {
          const isActive = item.key === currentActiveKey;
          return (
            <button
              key={item.key}
              type="button"
              className={cn(
                'sa2-tabs-item',
                isActive && 'sa2-tabs-item-active',
                isActive && shadow && 'sa2-tabs-item-active-shadow',
              )}
              onClick={() => handleTabClick(item.key)}
            >
              <span className="sa2-tabs-icon">{isActive ? '●' : '○'}</span>
              <span className="sa2-tabs-label">{item.label}</span>
              {isActive ? (
                <span className={cn('sa2-tabs-leaf', !leafAnimation && 'sa2-tabs-leaf-static')}>
                  <LeafIcon />
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
      <div className="sa2-tabs-content">
        <div className="sa2-tabs-content-inner">{activeItem?.children}</div>
      </div>
    </div>
  );
}

Tabs.displayName = 'Tabs';
