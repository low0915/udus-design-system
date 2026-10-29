/**
 * Static metadata badge — version tags, connector states, inline counts.
 */
export interface BadgeProps {
  children?: React.ReactNode;
  /** neutral = surface-variant/secondary; accent = neon wash; tertiary = ivory-green; error. */
  tone?: 'neutral' | 'accent' | 'tertiary' | 'error';
  /** pill for informational chips, square for inline code-adjacent tags. */
  shape?: 'pill' | 'square';
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
