import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const LIBRARY_VERSION = '0.1.0';

export { useTypewriterEffect, countText, renderTruncated } from './utils/typewriterCore';
export { highlightJSX, getHighlightSegments } from './utils/codeHighlight';
export type { CodeSegment } from './utils/codeHighlight';

export type { ButtonProps, ButtonType, ButtonSize, ButtonHTMLType } from './types/button';
export type { InputProps, InputSize } from './types/input';
export type { SwitchProps, SwitchSize } from './types/switch';
export type { CardProps, CardType, CardColor } from './types/card';
export type { ModalProps } from './types/modal';
export type { TitleProps, TitleSize, TitleColor } from './types/title';
export type { TabsProps, TabItem } from './types/tabs';
export type { CollapseProps } from './types/collapse';
export type { CheckboxProps, CheckboxOption, CheckboxSize } from './types/checkbox';
export type { RadioProps, RadioOption, RadioSize } from './types/radio';
export type { TypewriterProps } from './types/typewriter';
export type { MobileInputProps, MobileCardProps } from './types/mobile';
export type {
  TooltipProps,
  TooltipPlacement,
  TooltipTrigger,
  TooltipVariant,
} from './types/tooltip';
export type { SelectProps, SelectOption } from './types/select';
export type { LoadingProps } from './types/loading';
export type { DividerProps, DividerType } from './types/divider';
export type { TimeProps } from './types/time';
export type { CodeBlockProps } from './types/codeblock';
export type { TableProps, TableColumn } from './types/table';
export type { IconProps, IconName } from './types/icon';
export type { FooterProps, FooterType } from './types/footer';
export type { PhoneProps } from './types/phone';
export type { CursorProps } from './types/cursor';
export type { WalletProps, WalletSize } from './types/wallet';
export type {
  WeddingInvitationProps,
  WeddingInvitationRef,
  WeddingInvitationExportButtonProps,
} from './types/weddingInvitation';
