import { cn } from '@animal-island-components-sa2kit/shared';
import type { TimeProps } from '@animal-island-components-sa2kit/shared';
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
    <div className={cn('ai-time', className)}>
      <div className="ai-time-date">
        <span className="ai-time-weekday">{weekdays[currentTime.getDay()]}</span>
        <span className="ai-time-monthday">
          {months[currentTime.getMonth()]} {currentTime.getDate()}
        </span>
      </div>
      <div className="ai-time-clock">
        {currentTime.getHours().toString().padStart(2, '0')}
        <span className="ai-time-colon">:</span>
        {currentTime.getMinutes().toString().padStart(2, '0')}
      </div>
    </div>
  );
}

Time.displayName = 'Time';
