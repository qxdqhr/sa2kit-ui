import { cn } from '@animal-island-components-sa2kit/shared';
import type { SelectProps } from '@animal-island-components-sa2kit/shared';
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
    <View className={cn('ai-select', disabled && 'ai-select-disabled', className)}>
      <Pressable
        className={cn('ai-select-trigger', open && 'ai-select-trigger-open')}
        disabled={disabled}
        onPress={() => !disabled && setOpen((prev) => !prev)}
      >
        <Text className={value ? 'ai-select-value' : 'ai-select-placeholder'}>{currentLabel}</Text>
        <Text className="ai-select-arrow">▼</Text>
      </Pressable>
      {open ? (
        <View className="ai-select-dropdown">
          {options.map((option) => {
            const isActive = value === option.key;
            return (
              <Pressable
                key={option.key}
                className={cn('ai-select-option', isActive && 'ai-select-option-active')}
                onPress={() => handleSelect(option.key)}
              >
                <Text className="ai-select-option-dot">●</Text>
                <Text>{option.label}</Text>
                {isActive ? <View className="ai-select-pill-bar" /> : null}
              </Pressable>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

Select.displayName = 'Select';
