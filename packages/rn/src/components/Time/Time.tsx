import { cn } from '@sa2kit-ui/shared';
import type { TimeProps } from '@sa2kit-ui/shared';
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
    <View className={cn('sa2-time', className)}>
      <View className="sa2-time-date">
        <Text className="sa2-time-weekday">{weekdays[currentTime.getDay()]}</Text>
        <Text className="sa2-time-monthday">{months[currentTime.getMonth()]} {currentTime.getDate()}</Text>
      </View>
      <View className="sa2-time-clock">
        <Text>{currentTime.getHours().toString().padStart(2, '0')}</Text>
        <Text className="sa2-time-colon">:</Text>
        <Text>{currentTime.getMinutes().toString().padStart(2, '0')}</Text>
      </View>
    </View>
  );
}
Time.displayName = 'Time';
