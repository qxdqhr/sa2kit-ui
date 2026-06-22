import { cn } from '@animal-island-components-sa2kit/shared';
import type { CheckboxProps } from '@animal-island-components-sa2kit/shared';
import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const sizeClass = { small: 'ai-checkbox-sm', middle: 'ai-checkbox-md', large: 'ai-checkbox-lg' } as const;

const CheckMark = () => <Text className="text-xs font-bold text-animal-success">✓</Text>;

export function Checkbox({
  value,
  defaultValue = [],
  options,
  size = 'middle',
  disabled = false,
  direction = 'horizontal',
  onChange,
  className,
  style,
}: CheckboxProps) {
  const [innerValue, setInnerValue] = useState<Array<string | number>>(defaultValue);
  const isControlled = value !== undefined;
  const checkedValues = isControlled ? value : innerValue;

  const handleChange = useCallback(
    (optValue: string | number, optDisabled?: boolean) => {
      if (disabled || optDisabled) return;
      const next = checkedValues.includes(optValue)
        ? checkedValues.filter((item) => item !== optValue)
        : [...checkedValues, optValue];
      if (!isControlled) setInnerValue(next);
      onChange?.(next);
    },
    [disabled, checkedValues, isControlled, onChange],
  );

  return (
    <View
      className={cn(
        'ai-checkbox-group',
        direction === 'vertical' ? 'ai-checkbox-vertical' : 'ai-checkbox-horizontal',
        disabled && 'ai-checkbox-group-disabled',
        className,
      )}
      style={style as object}
    >
      {options.map((opt) => {
        const isChecked = checkedValues.includes(opt.value);
        const isDisabled = disabled || opt.disabled;
        return (
          <Pressable
            key={String(opt.value)}
            className={cn(
              'ai-checkbox-item',
              sizeClass[size],
              isChecked && 'ai-checkbox-checked',
              isDisabled && 'ai-checkbox-disabled',
            )}
            onPress={() => handleChange(opt.value, opt.disabled)}
            disabled={isDisabled}
          >
            <View className="ai-checkbox-box" accessibilityRole="checkbox" accessibilityState={{ checked: isChecked, disabled: isDisabled }}>
              {isChecked ? <View className="ai-checkbox-mark"><CheckMark /></View> : null}
            </View>
            <Text className="ai-checkbox-label">{opt.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

Checkbox.displayName = 'Checkbox';
