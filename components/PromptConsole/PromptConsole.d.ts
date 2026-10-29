/**
 * The pinned multi-modal prompt console: capability chips, multiline textarea, attach/voice/send, guardrail bar.
 */
export interface PromptCapability {
  id: string;
  label: string;
  /** Material Symbols glyph name. */
  icon?: string;
  active?: boolean;
}
export interface PromptConsoleProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Fired on send-button click or bare Enter. */
  onSubmit?: () => void;
  placeholder?: string;
  /** Capability chips rendered above the textarea. */
  capabilities?: PromptCapability[];
  onToggleCapability?: (id: string) => void;
  /** Left-hand safety string in the footer. */
  guardrail?: string;
  /** Right-hand mono hint in the footer. */
  hint?: string;
  style?: React.CSSProperties;
}
export function PromptConsole(props: PromptConsoleProps): JSX.Element;
