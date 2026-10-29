/**
 * 18px square checkbox with a 4px radius; neon fill and obsidian checkmark when on.
 */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Body-md label rendered to the right of the box. */
  label?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
