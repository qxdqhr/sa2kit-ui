export interface SelectOption {
  key: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (key: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}
