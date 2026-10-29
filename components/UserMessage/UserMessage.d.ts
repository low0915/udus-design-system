/**
 * Operator turn in the conversation stream — right-aligned, notched top-right bubble.
 */
export interface UserMessageProps {
  children?: React.ReactNode;
  /** Role label, e.g. "Chief Systems Architect". */
  author?: string;
  /** Timestamp string, e.g. "14:32:08 UTC". */
  timestamp?: string;
  style?: React.CSSProperties;
}
export function UserMessage(props: UserMessageProps): JSX.Element;
