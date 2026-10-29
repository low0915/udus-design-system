/**
 * Trend chart for latency/throughput profiles inside a diagnostic card.
 */
export interface SparklineProps {
  /** Series values, oldest first. */
  points?: number[];
  /** Draws a dashed threshold rule at this value. */
  threshold?: number;
  /** Rendered height in px. Default 96. */
  height?: number;
  /** Line and area color. Default --primary-container. */
  color?: string;
  /** Threshold rule color. Default --error. */
  thresholdColor?: string;
  /** Marks the series maximum with a neon dot. Default true. */
  markPeak?: boolean;
  style?: React.CSSProperties;
}
export function Sparkline(props: SparklineProps): JSX.Element;
