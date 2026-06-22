import { cn } from '@animal-island-components-sa2kit/shared';
import type { SwitchProps } from '@animal-island-components-sa2kit/shared';
import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

export function Switch({
  checked,
  defaultChecked = false,
  size = 'default',
  disabled = false,
  loading = false,
  checkedChildren,
  unCheckedChildren,
  onChange,
  className,
}: SwitchProps) {
  const [innerChecked, setInnerChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : innerChecked;

  const handlePress = useCallback(() => {
    if (disabled || loading) return;
    const next = !isChecked;
    if (!isControlled) setInnerChecked(next);
    onChange?.(next);
  }, [disabled, loading, isChecked, isControlled, onChange]);

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ checked: isChecked, disabled }}
      disabled={disabled}
      onPress={handlePress}
      className={cn(
        'ai-switch',
        size === 'small' && 'ai-switch-sm',
        isChecked && 'ai-switch-checked',
        disabled && 'ai-switch-disabled',
        className,
      )}
    >
      <View className="ai-switch-handle">
        {loading ? (
          <View className="h-2.5 w-2.5 animate-ai-spin rounded-full border-2 border-animal-success border-r-transparent" />
        ) : null}
      </View>
      {(checkedChildren || unCheckedChildren) && (
        <Text className="px-2 text-[11px] font-bold text-white">
          {isChecked ? checkedChildren : unCheckedChildren}
        </Text>
      )}
    </Pressable>
  );
}

Switch.displayName = 'Switch';
