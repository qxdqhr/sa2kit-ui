import { cn } from '@sa2kit-ui/shared';
import type { CheckboxProps } from '@sa2kit-ui/shared';
import { Text, View } from '@tarojs/components';
import { useCallback, useState } from 'react';

const sizeClass = { small: 'sa2-checkbox-sm', middle: 'sa2-checkbox-md', large: 'sa2-checkbox-lg' } as const;

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
        'sa2-checkbox-group',
        direction === 'vertical' ? 'sa2-checkbox-vertical' : 'sa2-checkbox-horizontal',
        disabled && 'sa2-checkbox-group-disabled',
        className,
      )}
      style={style}
    >
      {options.map((opt) => {
        const isChecked = checkedValues.includes(opt.value);
        const isDisabled = disabled || opt.disabled;
        return (
          <View
            key={String(opt.value)}
            className={cn(
              'sa2-checkbox-item',
              sizeClass[size],
              isChecked && 'sa2-checkbox-checked',
              isDisabled && 'sa2-checkbox-disabled',
            )}
            onClick={() => !isDisabled && handleChange(opt.value, opt.disabled)}
          >
            <View className="sa2-checkbox-box">
              {isChecked ? (
                <View className="sa2-checkbox-mark">
                  <Text className="text-xs font-bold">✓</Text>
                </View>
              ) : null}
            </View>
            <Text className="sa2-checkbox-label">{opt.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

Checkbox.displayName = 'Checkbox';
