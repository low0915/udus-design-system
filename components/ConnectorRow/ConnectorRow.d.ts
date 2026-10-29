/**
 * One integrated data source or tool bound to the current agent session.
 */
export interface ConnectorRowProps {
  /** Material Symbols glyph, 18px, in a raised tile. */
  icon: string;
  name: string;
  /** Single muted line, e.g. "pool: payment-master-eu". */
  detail?: string;
  /** Bullet-separated label-sm facts, e.g. ["Ping: 1.2ms", "SSL/mTLS Valid"]. */
  meta?: string[];
  /** Badge text, e.g. "Connected", "Active", "Ready". */
  state?: string;
  /** Badge tone. Default "accent". */
  stateTone?: 'neutral' | 'accent' | 'tertiary' | 'error';
  /** Glyph color — vary per connector class. */
  iconColor?: string;
  style?: React.CSSProperties;
}
export function ConnectorRow(props: ConnectorRowProps): JSX.Element;
