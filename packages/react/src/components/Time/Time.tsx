import { cn } from '@sa2kit-ui/shared';
import type { TimeProps } from '@sa2kit-ui/shared';
import { useEffect, useState } from 'react';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function Time({ className }: TimeProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={cn('sa2-time', className)}>
      <div className="sa2-time-date">
        <span className="sa2-time-weekday">{weekdays[currentTime.getDay()]}</span>
        <span className="sa2-time-monthday">
          {months[currentTime.getMonth()]} {currentTime.getDate()}
        </span>
      </div>
      <div className="sa2-time-clock">
        {currentTime.getHours().toString().padStart(2, '0')}
        <span className="sa2-time-colon">:</span>
        {currentTime.getMinutes().toString().padStart(2, '0')}
      </div>
    </div>
  );
}

Time.displayName = 'Time';
