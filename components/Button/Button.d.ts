/**
 * The SuDu AI action button — primary neon CTA, hairline secondary, teal ghost, error danger.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = neon #00F5A9 fill with glow; secondary = glass + hairline; ghost = teal text; danger = error container. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** sm uses label-sm, md/lg use label-lg. Default md. */
  size?: 'sm' | 'md' | 'lg';
  /** Material Symbols name rendered before the label. */
  icon?: string;
  /** Material Symbols name pushed to the far edge (used by "New Synthesis"). */
  trailingIcon?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
