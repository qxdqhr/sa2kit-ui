import { cn } from '@sa2kit-ui/shared';
import type { MobileInputProps } from '@sa2kit-ui/shared';
import { useCallback, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

const sizeClass = {
  small: 'sa2-input-wrap-sm',
  middle: 'sa2-input-wrap-md',
  large: 'sa2-input-wrap-lg',
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
        'sa2-input-wrap flex-row items-center',
        sizeClass[size],
        status === 'error' && 'sa2-input-error',
        status === 'warning' && 'sa2-input-warning',
        disabled && 'sa2-input-disabled',
        !shadow && 'sa2-input-no-shadow',
        className,
      )}
    >
      {prefix ? <View className="sa2-input-affix mr-1.5">{prefix}</View> : null}
      <TextInput
        className="sa2-input-field flex-1 bg-transparent p-0"
        editable={!disabled}
        value={currentValue}
        placeholder={placeholder}
        placeholderTextColor="#c4b89e"
        onChangeText={handleChangeText}
      />
      {allowClear && currentValue && !disabled ? (
        <Pressable onPress={handleClear} accessibilityLabel="clear" hitSlop={8}>
          <Text className="sa2-input-clear">×</Text>
        </Pressable>
      ) : null}
      {suffix ? <View className="sa2-input-affix ml-1.5">{suffix}</View> : null}
    </View>
  );
}

Input.displayName = 'Input';
