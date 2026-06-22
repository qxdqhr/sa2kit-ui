import { cn } from '@animal-island-components-sa2kit/shared';
import type { MobileInputProps } from '@animal-island-components-sa2kit/shared';
import { Input as TaroInput, Text, View } from '@tarojs/components';
import { useCallback, useState } from 'react';

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
        'ai-input-wrap',
        sizeClass[size],
        status === 'error' && 'ai-input-error',
        status === 'warning' && 'ai-input-warning',
        disabled && 'ai-input-disabled',
        !shadow && 'ai-input-no-shadow',
        className,
      )}
    >
      {prefix ? <View className="ai-input-affix mr-1.5">{prefix}</View> : null}
      <TaroInput
        className="ai-input-field flex-1"
        disabled={disabled}
        value={currentValue}
        placeholder={placeholder}
        placeholderClass="text-animal-text-disabled"
        onInput={handleInput}
      />
      {allowClear && currentValue && !disabled ? (
        <Text className="ai-input-clear" onClick={handleClear}>
          ×
        </Text>
      ) : null}
      {suffix ? <View className="ai-input-affix ml-1.5">{suffix}</View> : null}
    </View>
  );
}

Input.displayName = 'Input';
