/**
 * Glass data container with an optional icon/title/subtitle header and action slot.
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Bold label-lg header title. */
  title?: React.ReactNode;
  /** Muted body-sm line under the title. */
  subtitle?: React.ReactNode;
  /** Material Symbols glyph shown in a raised 8px tile before the title. */
  icon?: string;
  /** Right-aligned header content — badges, status pills, icon buttons. */
  actions?: React.ReactNode;
  /** Elevation layer: 1 = module shell, 2 = floating overlay, 3 = active focus / command hub. */
  level?: 1 | 2 | 3;
  /** Enables the hover lift and neon border shift. */
  interactive?: boolean;
  /** Override the default --space-lg padding. */
  padding?: string;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
