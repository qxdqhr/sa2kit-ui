import { cn, getHighlightSegments } from '@animal-island-components-sa2kit/shared';
import type { CodeBlockProps } from '@animal-island-components-sa2kit/shared';
import { Text, View } from '@tarojs/components';

export function CodeBlock({ code, style, className }: CodeBlockProps) {
  const segments = getHighlightSegments(code);
  return (
    <View className={cn('ai-codeblock', className)} style={style}>
      <Text>
        {segments.map((segment, index) => (
          <Text key={index} style={{ color: segment.color }}>
            {segment.text}
          </Text>
        ))}
      </Text>
    </View>
  );
}

CodeBlock.displayName = 'CodeBlock';
