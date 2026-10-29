/**
 * Pill-shaped chip for toggling agent capabilities in the prompt console.
 */
export interface ChipProps {
  children?: React.ReactNode;
  /** Leading Material Symbols glyph, 15px. */
  icon?: string;
  /** On state — accent wash background, hairline border, accent text. */
  selected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export function Chip(props: ChipProps): JSX.Element;
