/**
 * Standard SuDu AI text input — translucent obsidian fill, hairline teal border, neon focus ring.
 */
export interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  /** Leading Material Symbols glyph, 18px. */
  icon?: string;
  type?: string;
  disabled?: boolean;
  /** Error state — error-colored border, no focus glow. */
  invalid?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
