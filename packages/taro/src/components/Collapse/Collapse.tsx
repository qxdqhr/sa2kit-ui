import { cn } from '@sa2kit-ui/shared';
import type { CollapseProps } from '@sa2kit-ui/shared';
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
      className={cn('sa2-collapse', expanded && 'sa2-collapse-expanded', disabled && 'sa2-collapse-disabled', className)}
      style={style}
    >
      <View
        className="sa2-collapse-header"
        onClick={() => !disabled && setExpanded((value) => !value)}
      >
        <Text className="sa2-collapse-icon">{expanded ? '−' : '+'}</Text>
        <Text className="sa2-collapse-question">{question}</Text>
        <Text className="sa2-collapse-leaf">🍃</Text>
      </View>
      <View className="sa2-collapse-body">
        <View className="sa2-collapse-answer">{answer}</View>
      </View>
    </View>
  );
}

Collapse.displayName = 'Collapse';
