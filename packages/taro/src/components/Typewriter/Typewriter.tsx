import { useTypewriterEffect } from '@animal-island-components-sa2kit/shared';
import type { TypewriterProps } from '@animal-island-components-sa2kit/shared';

export function Typewriter({ children, speed = 90, trigger, autoPlay = true, onDone }: TypewriterProps) {
  return <>{useTypewriterEffect(children, speed, trigger, autoPlay, onDone)}</>;
}
Typewriter.displayName = 'Typewriter';
