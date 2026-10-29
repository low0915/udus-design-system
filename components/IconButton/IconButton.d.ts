/**
 * Glyph-only 8px-padded control: header utilities, message action rail, sidebar collapse.
 */
export interface IconButtonProps {
  /** Material Symbols ligature name. */
  icon: string;
  /** Glyph size in px. Default 18. */
  size?: number;
  /** surface = filled container chip; bare = transparent until hover. */
  variant?: 'surface' | 'bare';
  /** Active/selected state — raised container and accent glyph. */
  active?: boolean;
  /** Tooltip and accessible label. */
  title?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
