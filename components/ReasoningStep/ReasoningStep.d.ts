/**
 * A single audited stage of agent reasoning, used inside Disclosure.
 */
export interface ReasoningStepProps {
  /** Bold lead-in, e.g. "P99 Variance Isolated:". */
  label?: React.ReactNode;
  /** The rest of the sentence, muted. */
  children?: React.ReactNode;
  /** State glyph. Default "check_circle"; use "pending" or "error" mid-run. */
  icon?: string;
  style?: React.CSSProperties;
}
export function ReasoningStep(props: ReasoningStepProps): JSX.Element;
