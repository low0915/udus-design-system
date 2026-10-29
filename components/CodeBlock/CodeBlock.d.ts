/**
 * Code / script output block with a filename ribbon and copy trigger.
 */
export interface CodeBlockProps {
  /** Mono filename shown in the ribbon, e.g. "remediate_pool_contention.py". */
  filename?: string;
  /** Raw source text. Rendered as-is in a <pre>. */
  code?: string;
  onCopy?: () => void;
  style?: React.CSSProperties;
}
export function CodeBlock(props: CodeBlockProps): JSX.Element;
