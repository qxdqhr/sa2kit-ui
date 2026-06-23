import { cn } from '@sa2kit-ui/shared';
import type { SwitchProps } from '@sa2kit-ui/shared';
import { Text, View } from '@tarojs/components';
import { useCallback, useState } from 'react';

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

  const handleClick = useCallback(() => {
    if (disabled || loading) return;
    const next = !isChecked;
    if (!isControlled) setInnerChecked(next);
    onChange?.(next);
  }, [disabled, loading, isChecked, isControlled, onChange]);

  return (
    <View
      className={cn(
        'sa2-switch',
        size === 'small' && 'sa2-switch-sm',
        isChecked && 'sa2-switch-checked',
        disabled && 'sa2-switch-disabled',
        className,
      )}
      onClick={handleClick}
    >
      <View className="sa2-switch-handle">
        {loading ? <View className="sa2-switch-loading" /> : null}
      </View>
      {(checkedChildren || unCheckedChildren) && (
        <Text className="px-2 text-[11px] font-bold text-white">
          {isChecked ? checkedChildren : unCheckedChildren}
        </Text>
      )}
    </View>
  );
}

Switch.displayName = 'Switch';
