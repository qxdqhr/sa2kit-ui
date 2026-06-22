import { cn } from '@animal-island-components-sa2kit/shared';
import type { CollapseProps } from '@animal-island-components-sa2kit/shared';
import { Text, View } from '@tarojs/components';
import { useState } from 'react';

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
      style={style}
    >
      <View
        className="ai-collapse-header"
        onClick={() => !disabled && setExpanded((value) => !value)}
      >
        <Text className="ai-collapse-icon">{expanded ? '−' : '+'}</Text>
        <Text className="ai-collapse-question">{question}</Text>
        <Text className="ai-collapse-leaf">🍃</Text>
      </View>
      <View className="ai-collapse-body">
        <View className="ai-collapse-answer">{answer}</View>
      </View>
    </View>
  );
}

Collapse.displayName = 'Collapse';
