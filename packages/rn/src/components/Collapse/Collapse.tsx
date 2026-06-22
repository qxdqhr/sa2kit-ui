import { cn } from '@animal-island-components-sa2kit/shared';
import type { CollapseProps } from '@animal-island-components-sa2kit/shared';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

export function Collapse({
  question,
  answer,
  defaultExpanded = false,
  disabled = false,
  className,
  style,
}: CollapseProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <View
      className={cn('ai-collapse', expanded && 'ai-collapse-expanded', disabled && 'ai-collapse-disabled', className)}
      style={style as object}
    >
      <Pressable
        className="ai-collapse-header"
        onPress={() => !disabled && setExpanded((value) => !value)}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityState={{ expanded }}
      >
        <Text className="ai-collapse-icon">{expanded ? '−' : '+'}</Text>
        <Text className="ai-collapse-question">{question}</Text>
        <Text className="ai-collapse-leaf">🍃</Text>
      </Pressable>
      <View className="ai-collapse-body">
        <View className="ai-collapse-answer">{answer}</View>
      </View>
    </View>
  );
}

Collapse.displayName = 'Collapse';
