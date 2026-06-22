import { cn } from '@animal-island-components-sa2kit/shared';
import type { RadioProps } from '@animal-island-components-sa2kit/shared';
import { Text, View } from '@tarojs/components';
import { useCallback, useState } from 'react';

const sizeClass = { small: 'ai-radio-sm', middle: 'ai-radio-md', large: 'ai-radio-lg' } as const;

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
        'ai-radio-group',
        direction === 'vertical' ? 'ai-radio-vertical' : 'ai-radio-horizontal',
        disabled && 'ai-radio-group-disabled',
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
              'ai-radio-item',
              sizeClass[size],
              isChecked && 'ai-radio-checked',
              isDisabled && 'ai-radio-disabled',
            )}
            onClick={() => !isDisabled && handleChange(option.value, option.disabled)}
          >
            <View className="ai-radio-circle">
              {isChecked ? (
                <View className="ai-radio-mark">
                  <Text className="text-xs font-bold">✓</Text>
                </View>
              ) : null}
            </View>
            <Text className="ai-radio-label">{option.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

Radio.displayName = 'Radio';
