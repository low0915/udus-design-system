/**
 * Read-only metric capsule — latency, temperature, token counts.
 */
export interface MetricCapsuleProps {
  /** Material Symbols glyph, 16px. */
  icon?: string;
  /** Muted descriptor, e.g. "Latency". */
  label?: React.ReactNode;
  /** Emphasized value, e.g. "18ms". */
  value?: React.ReactNode;
  /** Glyph color. Default --tertiary-fixed-dim. */
  iconColor?: string;
  style?: React.CSSProperties;
}
export function MetricCapsule(props: MetricCapsuleProps): JSX.Element;
