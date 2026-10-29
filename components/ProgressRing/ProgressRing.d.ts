/**
 * Radial gauge for saturation-style metrics (context window, quota).
 */
export interface ProgressRingProps {
  /** Percentage 0–100. */
  value?: number;
  /** Outer box size in px. Default 48. */
  size?: number;
  /** Stroke width in the 36-unit viewBox. Default 3. */
  stroke?: number;
  /** Arc color. Default neon #00F5A9. */
  color?: string;
  /** Renders the centered percentage. Default true. */
  showLabel?: boolean;
  style?: React.CSSProperties;
}
export function ProgressRing(props: ProgressRingProps): JSX.Element;
