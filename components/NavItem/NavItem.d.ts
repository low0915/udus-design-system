/**
 * Row in the primary 288px sidebar rail.
 */
export interface NavItemProps {
  /** Material Symbols glyph, 20px. */
  icon: string;
  label: React.ReactNode;
  /** Selected state — container fill and accent text. */
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
  /** Optional right-aligned slot, e.g. a count badge. */
  trailing?: React.ReactNode;
  style?: React.CSSProperties;
}
export function NavItem(props: NavItemProps): JSX.Element;
