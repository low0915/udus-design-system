/**
 * Equal-width segmented tabs for switching panel content (Tools / Memory / Params).
 */
export interface TabBarTab { id: string; label: string }
export interface TabBarProps {
  /** Tabs, left to right. Accepts plain strings (id === label). */
  tabs?: (string | TabBarTab)[];
  /** Currently selected tab id. */
  value?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}
export function TabBar(props: TabBarProps): JSX.Element;
