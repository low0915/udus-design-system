/** The alien-head icon alone — square-ish (76.05:50.79), for favicons, avatars, collapsed rails and small chrome. */
export interface LogoIconProps {
  /** Rendered height in px. Default 28. */
  height?: number;
  /** Fill color. Default --on-surface. */
  color?: string;
  title?: string;
  style?: React.CSSProperties;
}
export function LogoIcon(props: LogoIconProps): JSX.Element;
