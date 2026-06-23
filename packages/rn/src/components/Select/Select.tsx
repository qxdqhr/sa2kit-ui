import { cn } from '@sa2kit-ui/shared';
import type { SelectProps } from '@sa2kit-ui/shared';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

export function Select({
  options,
  value,
  onChange,
  placeholder = '请选择',
  disabled = false,
  className,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const currentLabel = options.find((option) => option.key === value)?.label ?? placeholder;

  const handleSelect = (key: string) => {
    onChange(key);
    setOpen(false);
  };

  return (
    <View className={cn('sa2-select', disabled && 'sa2-select-disabled', className)}>
      <Pressable
        className={cn('sa2-select-trigger', open && 'sa2-select-trigger-open')}
        disabled={disabled}
        onPress={() => !disabled && setOpen((prev) => !prev)}
      >
        <Text className={value ? 'sa2-select-value' : 'sa2-select-placeholder'}>{currentLabel}</Text>
        <Text className="sa2-select-arrow">▼</Text>
      </Pressable>
      {open ? (
        <View className="sa2-select-dropdown">
          {options.map((option) => {
            const isActive = value === option.key;
            return (
              <Pressable
                key={option.key}
                className={cn('sa2-select-option', isActive && 'sa2-select-option-active')}
                onPress={() => handleSelect(option.key)}
              >
                <Text className="sa2-select-option-dot">●</Text>
                <Text>{option.label}</Text>
                {isActive ? <View className="sa2-select-pill-bar" /> : null}
              </Pressable>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

Select.displayName = 'Select';
