import { cn } from '@animal-island-components-sa2kit/shared';
import type { MobileInputProps } from '@animal-island-components-sa2kit/shared';
import { useCallback, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

const sizeClass = {
  small: 'ai-input-wrap-sm',
  middle: 'ai-input-wrap-md',
  large: 'ai-input-wrap-lg',
} as const;

export function Input({
  size = 'middle',
  prefix,
  suffix,
  allowClear = false,
  status,
  shadow = false,
  disabled = false,
  className,
  value,
  defaultValue,
  placeholder,
  onChange,
  onClear,
}: MobileInputProps) {
  const [innerValue, setInnerValue] = useState(String(defaultValue ?? ''));
  const isControlled = value !== undefined;
  const currentValue = isControlled ? String(value ?? '') : innerValue;

  const handleChangeText = useCallback(
    (text: string) => {
      if (!isControlled) setInnerValue(text);
      onChange?.(text);
    },
    [isControlled, onChange],
  );

  const handleClear = useCallback(() => {
    if (!isControlled) setInnerValue('');
    onClear?.();
    onChange?.('');
  }, [isControlled, onChange, onClear]);

  return (
    <View
      className={cn(
        'ai-input-wrap flex-row items-center',
        sizeClass[size],
        status === 'error' && 'ai-input-error',
        status === 'warning' && 'ai-input-warning',
        disabled && 'ai-input-disabled',
        !shadow && 'ai-input-no-shadow',
        className,
      )}
    >
      {prefix ? <View className="ai-input-affix mr-1.5">{prefix}</View> : null}
      <TextInput
        className="ai-input-field flex-1 bg-transparent p-0"
        editable={!disabled}
        value={currentValue}
        placeholder={placeholder}
        placeholderTextColor="#c4b89e"
        onChangeText={handleChangeText}
      />
      {allowClear && currentValue && !disabled ? (
        <Pressable onPress={handleClear} accessibilityLabel="clear" hitSlop={8}>
          <Text className="ai-input-clear">×</Text>
        </Pressable>
      ) : null}
      {suffix ? <View className="ai-input-affix ml-1.5">{suffix}</View> : null}
    </View>
  );
}

Input.displayName = 'Input';
