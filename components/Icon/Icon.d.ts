/**
 * Material Symbols Outlined glyph, the icon system used throughout SuDu AI.
 */
export interface IconProps {
  /** Material Symbols ligature name, e.g. "smart_toy", "bolt", "database". */
  name: string;
  /** Pixel size; also drives the optical-size axis. Default 20. */
  size?: number;
  /** FILL axis, 0 (outlined) or 1 (filled). Default 0. */
  fill?: 0 | 1;
  /** Weight axis 100–700. Default 400. */
  weight?: number;
  /** Glyph color. Default currentColor. */
  color?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
