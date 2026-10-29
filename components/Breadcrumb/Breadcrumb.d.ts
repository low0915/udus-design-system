/**
 * Workspace path trail in the top bar; the trailing crumb is accent-colored.
 */
export interface BreadcrumbItem { label: string }
export interface BreadcrumbProps {
  /** Crumbs, root first. Accepts plain strings. */
  items?: (string | BreadcrumbItem)[];
  style?: React.CSSProperties;
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
