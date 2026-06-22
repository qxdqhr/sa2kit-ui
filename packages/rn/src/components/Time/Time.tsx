import { cn } from '@animal-island-components-sa2kit/shared';
import type { TimeProps } from '@animal-island-components-sa2kit/shared';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function Time({ className }: TimeProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <View className={cn('ai-time', className)}>
      <View className="ai-time-date">
        <Text className="ai-time-weekday">{weekdays[currentTime.getDay()]}</Text>
        <Text className="ai-time-monthday">{months[currentTime.getMonth()]} {currentTime.getDate()}</Text>
      </View>
      <View className="ai-time-clock">
        <Text>{currentTime.getHours().toString().padStart(2, '0')}</Text>
        <Text className="ai-time-colon">:</Text>
        <Text>{currentTime.getMinutes().toString().padStart(2, '0')}</Text>
      </View>
    </View>
  );
}
Time.displayName = 'Time';
