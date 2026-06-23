import { cn } from '@sa2kit-ui/shared';
import type { RadioProps } from '@sa2kit-ui/shared';
import { Text, View } from '@tarojs/components';
import { useCallback, useState } from 'react';

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
      style={style}
    >
      {options.map((option) => {
        const isChecked = checkedValue === option.value;
        const isDisabled = disabled || option.disabled;
        return (
          <View
            key={String(option.value)}
            className={cn(
              'sa2-radio-item',
              sizeClass[size],
              isChecked && 'sa2-radio-checked',
              isDisabled && 'sa2-radio-disabled',
            )}
            onClick={() => !isDisabled && handleChange(option.value, option.disabled)}
          >
            <View className="sa2-radio-circle">
              {isChecked ? (
                <View className="sa2-radio-mark">
                  <Text className="text-xs font-bold">✓</Text>
                </View>
              ) : null}
            </View>
            <Text className="sa2-radio-label">{option.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

Radio.displayName = 'Radio';
