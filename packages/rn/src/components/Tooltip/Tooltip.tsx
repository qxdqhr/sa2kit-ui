import { cn } from '@animal-island-components-sa2kit/shared';
import type { TooltipPlacement, TooltipProps } from '@animal-island-components-sa2kit/shared';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const placementClass: Record<TooltipPlacement, string> = {
  top: 'ai-tooltip-top',
  'top-start': 'ai-tooltip-top-start',
  'top-end': 'ai-tooltip-top-end',
  bottom: 'ai-tooltip-bottom',
  'bottom-start': 'ai-tooltip-bottom-start',
  'bottom-end': 'ai-tooltip-bottom-end',
  left: 'ai-tooltip-left',
  'left-start': 'ai-tooltip-left-start',
  'left-end': 'ai-tooltip-left-end',
  right: 'ai-tooltip-right',
  'right-start': 'ai-tooltip-right-start',
  'right-end': 'ai-tooltip-right-end',
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
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(true);
  }, []);

  const hide = useCallback(() => {
    timerRef.current = setTimeout(() => setVisible(false), 100);
  }, []);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const mobileTrigger = trigger === 'click' ? 'click' : 'press';

  return (
    <View className={cn('ai-tooltip-wrap', className)} style={style as object}>
      <Pressable
        onPress={mobileTrigger === 'click' ? () => setVisible((value) => !value) : undefined}
        onPressIn={mobileTrigger === 'press' ? show : undefined}
        onPressOut={mobileTrigger === 'press' ? hide : undefined}
      >
        {children}
      </Pressable>
      <View
        className={cn(
          'ai-tooltip',
          placementClass[placement],
          variant === 'island' && 'ai-tooltip-island',
          bordered ? 'ai-tooltip-bordered' : 'ai-tooltip-borderless',
          visible && 'ai-tooltip-visible',
        )}
      >
        <Text className="ai-tooltip-content">{title}</Text>
      </View>
    </View>
  );
}

Tooltip.displayName = 'Tooltip';
