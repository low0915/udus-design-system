/**
 * One of six supporting geometric marks supplied alongside the logo. Not a substitute for `Logo` — see BrandMark.prompt.md.
 */
export interface BrandMarkProps {
  /** Which mark, keyed by the supplied asset number. The client gave no names for these shapes. Default "07". An unknown key warns and renders nothing. */
  mark?: '07' | '08' | '09' | '10' | '11' | '12';
  /** Rendered square size in px. Default 28. */
  size?: number;
  /** Fill color. Default --primary-container (#00F5A9). */
  color?: string;
  /** Accessible label. Default "SuDu AI". */
  title?: string;
  style?: React.CSSProperties;
}
export function BrandMark(props: BrandMarkProps): JSX.Element;
