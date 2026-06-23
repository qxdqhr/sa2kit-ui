import { cn } from '@sa2kit-ui/shared';
import type { MobileInputProps } from '@sa2kit-ui/shared';
import { Input as TaroInput, Text, View } from '@tarojs/components';
import { useCallback, useState } from 'react';

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

  const handleInput = useCallback(
    (event: { detail: { value: string } }) => {
      const text = event.detail.value;
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
        'sa2-input-wrap',
        sizeClass[size],
        status === 'error' && 'sa2-input-error',
        status === 'warning' && 'sa2-input-warning',
        disabled && 'sa2-input-disabled',
        !shadow && 'sa2-input-no-shadow',
        className,
      )}
    >
      {prefix ? <View className="sa2-input-affix mr-1.5">{prefix}</View> : null}
      <TaroInput
        className="sa2-input-field flex-1"
        disabled={disabled}
        value={currentValue}
        placeholder={placeholder}
        placeholderClass="text-sa2-text-disabled"
        onInput={handleInput}
      />
      {allowClear && currentValue && !disabled ? (
        <Text className="sa2-input-clear" onClick={handleClear}>
          ×
        </Text>
      ) : null}
      {suffix ? <View className="sa2-input-affix ml-1.5">{suffix}</View> : null}
    </View>
  );
}

Input.displayName = 'Input';
