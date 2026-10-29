/**
 * Collapsible panel for agent reasoning traces and secondary detail.
 */
export interface DisclosureProps {
  /** label-md semibold header. */
  title: React.ReactNode;
  /** Parenthetical label-sm meta, e.g. "(Resolved in 4 stages • 1,420 ms)". */
  meta?: React.ReactNode;
  /** Leading Material Symbols glyph. Default "psychology_alt". */
  icon?: string;
  children?: React.ReactNode;
  /** Open on mount. Default true — reasoning is shown, not hidden. */
  defaultOpen?: boolean;
  style?: React.CSSProperties;
}
export function Disclosure(props: DisclosureProps): JSX.Element;
