/**
 * Live-status pill: a 6px glowing indicator dot plus a short label.
 */
export interface StatusPillProps {
  children?: React.ReactNode;
  /** ok = neon, warn = teal-dim, error = error, idle = outline. */
  status?: 'ok' | 'warn' | 'error' | 'idle';
  /** Adds the expanding ping ring used for active/executing states. */
  pulse?: boolean;
  style?: React.CSSProperties;
}
export function StatusPill(props: StatusPillProps): JSX.Element;
