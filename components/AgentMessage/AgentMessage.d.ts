/**
 * Agent turn in the conversation stream — transparent surface, identity line, action rail.
 */
export interface AgentMessageProps {
  /** Message body: prose, Disclosure, Card artifacts, CodeBlock. */
  children?: React.ReactNode;
  /** Engine name. Default "SuDu Autonomous Engine". */
  name?: string;
  /** Reasoning-mode badge, e.g. "Deep Reasoning". */
  mode?: string;
  /** Execution time string, e.g. "1.4s Execution". */
  duration?: string;
  /** Show the copy/retry/vote/branch rail. Default true. */
  actions?: boolean;
  style?: React.CSSProperties;
}
export function AgentMessage(props: AgentMessageProps): JSX.Element;
