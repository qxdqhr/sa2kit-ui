import type { CSSProperties } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

/** 将 Web CSSProperties 转为 RN ViewStyle（NativeWind 运行时解析 className） */
export function rnStyle(style?: CSSProperties): StyleProp<ViewStyle> {
  return style as StyleProp<ViewStyle>;
}

export function rnStyleArray(
  ...styles: Array<StyleProp<ViewStyle> | CSSProperties | undefined>
): StyleProp<ViewStyle> {
  return styles as StyleProp<ViewStyle>;
}
