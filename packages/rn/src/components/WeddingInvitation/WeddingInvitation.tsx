import type {
  WeddingInvitationExportButtonProps,
  WeddingInvitationProps,
  WeddingInvitationRef,
} from '@sa2kit-ui/shared';
import { cn } from '@sa2kit-ui/shared';
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
        className={cn('sa2-wedding-envelope', !showLotteryNumber && 'sa2-wedding-no-lottery', className)}
        style={style as object}
      >
        <Text className={cn('sa2-wedding-corner-leaf', 'sa2-wedding-tl')}>🍃</Text>
        <Text className={cn('sa2-wedding-corner-leaf', 'sa2-wedding-tr')}>🍃</Text>
        <Text className={cn('sa2-wedding-corner-leaf', 'sa2-wedding-bl')}>🍃</Text>
        <Text className={cn('sa2-wedding-corner-leaf', 'sa2-wedding-br')}>🍃</Text>

        <Text className={cn('sa2-wedding-float-item', 'sa2-wedding-f1')}>🌸</Text>
        <Text className={cn('sa2-wedding-float-item', 'sa2-wedding-f2')}>🌼</Text>
        <Text className={cn('sa2-wedding-float-item', 'sa2-wedding-f3')}>💜</Text>
        <Text className={cn('sa2-wedding-float-item', 'sa2-wedding-s1')}>⭐</Text>
        <Text className={cn('sa2-wedding-float-item', 'sa2-wedding-s2')}>✨</Text>

        <View className="sa2-wedding-banner">
          <View className="sa2-wedding-banner-line" />
          <Text>⭐</Text>
          <View className="sa2-wedding-banner-line" />
        </View>

        <Text className="sa2-wedding-title-en">{title}</Text>
        <Text className="sa2-wedding-title-zh">{subtitle}</Text>

        <View className="sa2-wedding-couple-img">
          <Text className="text-4xl">👰 🤵</Text>
        </View>

        <View className="sa2-wedding-couple-row">
          <View className="sa2-wedding-mascot">
            <Text className="sa2-wedding-name">{brideName}</Text>
          </View>
          <View className="sa2-wedding-heart-col">
            <Text>❤️</Text>
          </View>
          <View className="sa2-wedding-mascot">
            <Text className="sa2-wedding-name">{groomName}</Text>
          </View>
        </View>

        <View className="sa2-wedding-date-card">
          <Text className="sa2-wedding-date-label">婚礼时间</Text>
          <Text className="sa2-wedding-date-value">{date}</Text>
          <View className="sa2-wedding-date-meta">
            <Text>{weekday}</Text>
            <Text className="sa2-wedding-dot">·</Text>
            <Text>{time}</Text>
          </View>
        </View>

        <View className="sa2-wedding-venue-card">
          <View className="sa2-wedding-venue-icon">
            <Icon name="icon-map" size={26} />
          </View>
          <View className="sa2-wedding-venue-text">
            <Text className="sa2-wedding-venue-name">{venue}</Text>
            <Text className="sa2-wedding-venue-addr">{address}</Text>
          </View>
        </View>

        <Text className="sa2-wedding-message">{message}</Text>

        {showLotteryNumber ? (
          <View className="sa2-wedding-signature-lottery">
            <Text>抽奖码</Text>
            <Text className="sa2-wedding-signature-lottery-no">
              <Text className="sa2-wedding-lottery-hash">NO.</Text>
              {lotteryNumber}
            </Text>
          </View>
        ) : null}

        {showLotteryNumber ? (
          <View className="sa2-wedding-lottery">
            <Text className="sa2-wedding-tear-hint">✂ 沿虚线剪开 ✂</Text>
            <Text className="sa2-wedding-lottery-title">婚礼抽奖券</Text>
            <Text className="sa2-wedding-lottery-label">⭐ {lotteryLabel} ⭐</Text>
            <Text className="sa2-wedding-lottery-number">
              <Text className="sa2-wedding-lottery-hash">NO.</Text>
              {lotteryNumber}
            </Text>
            {lotteryHint ? <Text className="sa2-wedding-lottery-hint">{lotteryHint}</Text> : null}
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
    <Pressable className={cn('sa2-wedding-export-btn', className)} style={style as object} onPress={handlePress} disabled={exporting}>
      <Text>{exporting ? '生成中…' : children}</Text>
    </Pressable>
  );
}

WeddingInvitationExportButton.displayName = 'WeddingInvitationExportButton';
