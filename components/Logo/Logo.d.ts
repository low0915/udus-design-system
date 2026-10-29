/**
 * The primary SuDu AI logo — the supplied alien-head + wordmark lockup. Use this wherever the brand signs a surface.
 */
export interface LogoProps {
  /** Rendered height in px; width follows the artwork's 205.68:50.79 ratio. Default 28. */
  height?: number;
  /** Fill color. Default --on-surface. Use --primary-container on dark accent grounds, --brand-obsidian knocked out of neon. */
  color?: string;
  /** Accessible label. Default "SuDu AI". */
  title?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
