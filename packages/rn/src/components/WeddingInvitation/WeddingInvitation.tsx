import type {
  WeddingInvitationExportButtonProps,
  WeddingInvitationProps,
  WeddingInvitationRef,
} from '@animal-island-components-sa2kit/shared';
import { cn } from '@animal-island-components-sa2kit/shared';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

import { Icon } from '../Icon';

export const WeddingInvitation = forwardRef<WeddingInvitationRef, WeddingInvitationProps>(
  (
    {
      groomName = '小狸',
      brideName = '小兔',
      date = '2026.06.15',
      weekday = '星期六',
      time = '10:00 AM',
      venue = '彩虹岛 · 樱花广场',
      address = '动物之森 · 无人岛 · K.K. 演奏台前',
      title = 'Wedding Invitation',
      subtitle = '集合啦 婚礼森友会',
      message = '哎呀，恭喜恭喜！我们要在小岛上举办婚礼啦~ 诚挚邀请您一同前来见证这个被花瓣和音符包围的日子！',
      showLotteryNumber = true,
      lotteryNumber = '0001',
      lotteryLabel = 'LUCKY NUMBER',
      lotteryHint = '凭此号码参与现场抽奖 · Keep this stub for the lucky draw',
      className,
      style,
    },
    ref,
  ) => {
    const rootRef = useRef<View>(null);

    const exportAsImage = useCallback(async () => {
      Alert.alert('导出提示', '移动端请使用系统截图保存请柬；完整 PNG 导出请使用 Web 端。');
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        exportAsImage,
        getElement: () => null,
      }),
      [exportAsImage],
    );

    return (
      <View
        ref={rootRef}
        className={cn('ai-wedding-envelope', !showLotteryNumber && 'ai-wedding-no-lottery', className)}
        style={style as object}
      >
        <Text className={cn('ai-wedding-corner-leaf', 'ai-wedding-tl')}>🍃</Text>
        <Text className={cn('ai-wedding-corner-leaf', 'ai-wedding-tr')}>🍃</Text>
        <Text className={cn('ai-wedding-corner-leaf', 'ai-wedding-bl')}>🍃</Text>
        <Text className={cn('ai-wedding-corner-leaf', 'ai-wedding-br')}>🍃</Text>

        <Text className={cn('ai-wedding-float-item', 'ai-wedding-f1')}>🌸</Text>
        <Text className={cn('ai-wedding-float-item', 'ai-wedding-f2')}>🌼</Text>
        <Text className={cn('ai-wedding-float-item', 'ai-wedding-f3')}>💜</Text>
        <Text className={cn('ai-wedding-float-item', 'ai-wedding-s1')}>⭐</Text>
        <Text className={cn('ai-wedding-float-item', 'ai-wedding-s2')}>✨</Text>

        <View className="ai-wedding-banner">
          <View className="ai-wedding-banner-line" />
          <Text>⭐</Text>
          <View className="ai-wedding-banner-line" />
        </View>

        <Text className="ai-wedding-title-en">{title}</Text>
        <Text className="ai-wedding-title-zh">{subtitle}</Text>

        <View className="ai-wedding-couple-img">
          <Text className="text-4xl">👰 🤵</Text>
        </View>

        <View className="ai-wedding-couple-row">
          <View className="ai-wedding-mascot">
            <Text className="ai-wedding-name">{brideName}</Text>
          </View>
          <View className="ai-wedding-heart-col">
            <Text>❤️</Text>
          </View>
          <View className="ai-wedding-mascot">
            <Text className="ai-wedding-name">{groomName}</Text>
          </View>
        </View>

        <View className="ai-wedding-date-card">
          <Text className="ai-wedding-date-label">婚礼时间</Text>
          <Text className="ai-wedding-date-value">{date}</Text>
          <View className="ai-wedding-date-meta">
            <Text>{weekday}</Text>
            <Text className="ai-wedding-dot">·</Text>
            <Text>{time}</Text>
          </View>
        </View>

        <View className="ai-wedding-venue-card">
          <View className="ai-wedding-venue-icon">
            <Icon name="icon-map" size={26} />
          </View>
          <View className="ai-wedding-venue-text">
            <Text className="ai-wedding-venue-name">{venue}</Text>
            <Text className="ai-wedding-venue-addr">{address}</Text>
          </View>
        </View>

        <Text className="ai-wedding-message">{message}</Text>

        {showLotteryNumber ? (
          <View className="ai-wedding-signature-lottery">
            <Text>抽奖码</Text>
            <Text className="ai-wedding-signature-lottery-no">
              <Text className="ai-wedding-lottery-hash">NO.</Text>
              {lotteryNumber}
            </Text>
          </View>
        ) : null}

        {showLotteryNumber ? (
          <View className="ai-wedding-lottery">
            <Text className="ai-wedding-tear-hint">✂ 沿虚线剪开 ✂</Text>
            <Text className="ai-wedding-lottery-title">婚礼抽奖券</Text>
            <Text className="ai-wedding-lottery-label">⭐ {lotteryLabel} ⭐</Text>
            <Text className="ai-wedding-lottery-number">
              <Text className="ai-wedding-lottery-hash">NO.</Text>
              {lotteryNumber}
            </Text>
            {lotteryHint ? <Text className="ai-wedding-lottery-hint">{lotteryHint}</Text> : null}
          </View>
        ) : null}
      </View>
    );
  },
);

WeddingInvitation.displayName = 'WeddingInvitation';

export function WeddingInvitationExportButton({
  targetRef,
  filename = 'wedding-invitation',
  children = '保存为图片',
  className,
  style,
}: WeddingInvitationExportButtonProps) {
  const [exporting, setExporting] = useState(false);

  const handlePress = async () => {
    if (exporting) return;
    setExporting(true);
    try {
      await targetRef.current?.exportAsImage(filename);
    } finally {
      setExporting(false);
    }
  };

  return (
    <Pressable className={cn('ai-wedding-export-btn', className)} style={style as object} onPress={handlePress} disabled={exporting}>
      <Text>{exporting ? '生成中…' : children}</Text>
    </Pressable>
  );
}

WeddingInvitationExportButton.displayName = 'WeddingInvitationExportButton';
