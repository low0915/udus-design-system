/**
 * 18px circular radio with an 8px neon inner dot when selected.
 */
export interface RadioProps {
  checked?: boolean;
  onChange?: (value: string | undefined, e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  name?: string;
  value?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
