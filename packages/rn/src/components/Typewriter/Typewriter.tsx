import { useTypewriterEffect } from '@sa2kit-ui/shared';
import type { TypewriterProps } from '@sa2kit-ui/shared';

export function Typewriter({ children, speed = 90, trigger, autoPlay = true, onDone }: TypewriterProps) {
  return <>{useTypewriterEffect(children, speed, trigger, autoPlay, onDone)}</>;
}
Typewriter.displayName = 'Typewriter';
