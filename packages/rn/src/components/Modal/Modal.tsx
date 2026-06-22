import { cn } from '@animal-island-components-sa2kit/shared';
import type { ModalProps } from '@animal-island-components-sa2kit/shared';
import { useEffect, useState } from 'react';
import { Modal as RNModal, Pressable, Text, View } from 'react-native';
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

  const defaultFooter = (
    <View className="flex-row gap-2">
      <Button type="primary" onPress={onClose}>取消</Button>
      <Button type="primary" onPress={onOk}>确定</Button>
    </View>
  );

  return (
    <RNModal visible={open} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable className="ai-modal-mask flex-1" onPress={() => maskClosable && onClose?.()}>
        <Pressable
          className={cn('ai-modal', className)}
          style={{ width: typeof width === 'number' ? width : undefined }}
          onPress={(event) => event.stopPropagation()}
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
        </Pressable>
      </Pressable>
    </RNModal>
  );
}

Modal.displayName = 'Modal';
