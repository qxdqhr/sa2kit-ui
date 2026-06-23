import { cn, getHighlightSegments } from '@sa2kit-ui/shared';
import type { CodeBlockProps } from '@sa2kit-ui/shared';
import { Text, View } from 'react-native';

export function CodeBlock({ code, style, className }: CodeBlockProps) {
  const segments = getHighlightSegments(code);
  return (
    <View className={cn('sa2-codeblock', className)} style={style as object}>
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
