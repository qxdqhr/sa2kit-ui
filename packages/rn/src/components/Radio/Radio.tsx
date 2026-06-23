import { cn } from '@sa2kit-ui/shared';
import type { RadioProps } from '@sa2kit-ui/shared';
import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const sizeClass = { small: 'sa2-radio-sm', middle: 'sa2-radio-md', large: 'sa2-radio-lg' } as const;

export function Radio({
  value,
  defaultValue,
  options,
  size = 'middle',
  disabled = false,
  direction = 'horizontal',
  onChange,
  className,
  style,
}: RadioProps) {
  const [innerValue, setInnerValue] = useState<string | number | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const checkedValue = isControlled ? value : innerValue;

  const handleChange = useCallback(
    (optValue: string | number, optDisabled?: boolean) => {
      if (disabled || optDisabled) return;
      if (!isControlled) setInnerValue(optValue);
      onChange?.(optValue);
    },
    [disabled, isControlled, onChange],
  );

  return (
    <View
      className={cn(
        'sa2-radio-group',
        direction === 'vertical' ? 'sa2-radio-vertical' : 'sa2-radio-horizontal',
        disabled && 'sa2-radio-group-disabled',
        className,
      )}
      style={style as object}
      accessibilityRole="radiogroup"
    >
      {options.map((option) => {
        const isChecked = checkedValue === option.value;
        const isDisabled = disabled || option.disabled;
        return (
          <Pressable
            key={String(option.value)}
            className={cn(
              'sa2-radio-item',
              sizeClass[size],
              isChecked && 'sa2-radio-checked',
              isDisabled && 'sa2-radio-disabled',
            )}
            onPress={() => handleChange(option.value, option.disabled)}
            disabled={isDisabled}
          >
            <View className="sa2-radio-circle" accessibilityRole="radio" accessibilityState={{ checked: isChecked, disabled: isDisabled }}>
              {isChecked ? (
                <View className="sa2-radio-mark">
                  <Text className="text-xs font-bold text-sa2-success">✓</Text>
                </View>
              ) : null}
            </View>
            <Text className="sa2-radio-label">{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

Radio.displayName = 'Radio';
