import { cn } from '@sa2kit-ui/shared';
import type { TooltipPlacement, TooltipProps } from '@sa2kit-ui/shared';
import { Text, View } from '@tarojs/components';
import { useCallback, useEffect, useRef, useState } from 'react';

const placementClass: Record<TooltipPlacement, string> = {
  top: 'sa2-tooltip-top',
  'top-start': 'sa2-tooltip-top-start',
  'top-end': 'sa2-tooltip-top-end',
  bottom: 'sa2-tooltip-bottom',
  'bottom-start': 'sa2-tooltip-bottom-start',
  'bottom-end': 'sa2-tooltip-bottom-end',
  left: 'sa2-tooltip-left',
  'left-start': 'sa2-tooltip-left-start',
  'left-end': 'sa2-tooltip-left-end',
  right: 'sa2-tooltip-right',
  'right-start': 'sa2-tooltip-right-start',
  'right-end': 'sa2-tooltip-right-end',
};

export function Tooltip({
  title,
  placement = 'top',
  trigger = 'hover',
  variant = 'default',
  bordered = true,
  children,
  className,
  style,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const show = useCallback(() => {
    clearTimeout(timerRef.current);
    setVisible(true);
  }, []);

  const hide = useCallback(() => {
    timerRef.current = setTimeout(() => setVisible(false), 100);
  }, []);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const mobileTrigger = trigger === 'click' ? 'click' : 'press';

  return (
    <View className={cn('sa2-tooltip-wrap', className)} style={style}>
      <View
        onClick={mobileTrigger === 'click' ? () => setVisible((value) => !value) : undefined}
        onTouchStart={mobileTrigger === 'press' ? show : undefined}
        onTouchEnd={mobileTrigger === 'press' ? hide : undefined}
      >
        {children}
      </View>
      <View
        className={cn(
          'sa2-tooltip',
          placementClass[placement],
          variant === 'island' && 'sa2-tooltip-island',
          bordered ? 'sa2-tooltip-bordered' : 'sa2-tooltip-borderless',
          visible && 'sa2-tooltip-visible',
        )}
      >
        <Text className="sa2-tooltip-content">{title}</Text>
      </View>
    </View>
  );
}

Tooltip.displayName = 'Tooltip';
