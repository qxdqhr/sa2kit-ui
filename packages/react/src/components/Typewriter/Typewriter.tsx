import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { TypewriterProps } from '@sa2kit-ui/shared';

const countText = (node: React.ReactNode): number => {
  if (node == null || typeof node === 'boolean') return 0;
  if (typeof node === 'string' || typeof node === 'number') return String(node).length;
  if (Array.isArray(node)) return node.reduce<number>((sum, child) => sum + countText(child), 0);
  if (React.isValidElement(node)) {
    return countText((node.props as { children?: React.ReactNode }).children);
  }
  return 0;
};

interface RenderState {
  remaining: number;
  stopped: boolean;
}

const renderTruncated = (
  node: React.ReactNode,
  state: RenderState,
  keyPrefix = 'tw',
): React.ReactNode => {
  if (state.stopped) return null;
  if (node == null || typeof node === 'boolean') return null;

  if (typeof node === 'string' || typeof node === 'number') {
    const text = String(node);
    if (state.remaining >= text.length) {
      state.remaining -= text.length;
      return text;
    }
    const shown = text.slice(0, state.remaining);
    state.remaining = 0;
    state.stopped = true;
    return shown;
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => (
      <React.Fragment key={`${keyPrefix}-${index}`}>
        {renderTruncated(child, state, `${keyPrefix}-${index}`)}
      </React.Fragment>
    ));
  }

  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode };
    const childContent = renderTruncated(props.children, state, keyPrefix);
    return React.cloneElement(node, undefined, childContent);
  }

  return null;
};

export function Typewriter({
  children,
  speed = 90,
  trigger,
  autoPlay = true,
  onDone,
}: TypewriterProps) {
  const total = useMemo(() => countText(children), [children]);
  const [count, setCount] = useState(autoPlay ? 0 : total);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    if (!autoPlay) {
      setCount(total);
      return;
    }
    setCount(0);
    if (total === 0) return;
    timerRef.current = window.setInterval(() => {
      setCount((current) => {
        if (current >= total) {
          if (timerRef.current) window.clearInterval(timerRef.current);
          return current;
        }
        return current + 1;
      });
    }, speed);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [total, speed, trigger, autoPlay]);

  useEffect(() => {
    if (total > 0 && count >= total) onDone?.();
  }, [count, total, onDone]);

  const state: RenderState = { remaining: count, stopped: false };
  return <>{renderTruncated(children, state)}</>;
}

Typewriter.displayName = 'Typewriter';
