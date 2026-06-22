import { cn } from '@animal-island-components-sa2kit/shared';
import type { ModalProps } from '@animal-island-components-sa2kit/shared';
import { Text, View } from '@tarojs/components';
import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Typewriter } from '../Typewriter';

export function Modal({
  open,
  title,
  width = 520,
  maskClosable = true,
  footer,
  onClose,
  onOk,
  children,
  className,
  typeSpeed = 80,
  typewriter = true,
}: ModalProps) {
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    if (open) setPlayKey((key) => key + 1);
  }, [open]);

  if (!open) return null;

  const defaultFooter = (
    <View className="flex flex-row gap-2">
      <Button type="primary" onClick={onClose}>取消</Button>
      <Button type="primary" onClick={onOk}>确定</Button>
    </View>
  );

  return (
    <View className="ai-modal-mask fixed inset-0 z-50" onClick={() => maskClosable && onClose?.()}>
      <View
        className={cn('ai-modal', className)}
        style={{ width: typeof width === 'number' ? `${width}px` : width }}
        onClick={(event) => event.stopPropagation()}
      >
        <View className="ai-modal-clipped">
          {title ? (
            <View className="ai-modal-header">
              {typeof title === 'string' ? <Text className="ai-modal-title">{title}</Text> : title}
            </View>
          ) : null}
          <View className="ai-modal-body">
            {typewriter ? (
              <Typewriter speed={typeSpeed} trigger={playKey}>{children}</Typewriter>
            ) : (
              children
            )}
          </View>
          {footer !== null ? (
            <View className="ai-modal-footer">{footer === undefined ? defaultFooter : footer}</View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

Modal.displayName = 'Modal';
