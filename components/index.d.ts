// SuDu AI component types — window.SuDuAI.<Component>

/**
 * The primary SuDu AI logo — the supplied alien-head + wordmark lockup. Use this wherever the brand signs a surface.
 */
export interface LogoProps {
  /** Rendered height in px; width follows the artwork's 205.68:50.79 ratio. Default 28. */
  height?: number;
  /** Fill color. Default --on-surface. Use --primary-container on dark accent grounds, --brand-obsidian knocked out of neon. */
  color?: string;
  /** Accessible label. Default "SuDu AI". */
  title?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;

/** The alien-head icon alone — square-ish (76.05:50.79), for favicons, avatars, collapsed rails and small chrome. */
export interface LogoIconProps {
  /** Rendered height in px. Default 28. */
  height?: number;
  /** Fill color. Default --on-surface. */
  color?: string;
  title?: string;
  style?: React.CSSProperties;
}
export function LogoIcon(props: LogoIconProps): JSX.Element;

/**
 * One of six supporting geometric marks supplied alongside the logo. Not a substitute for `Logo` — see BrandMark.prompt.md.
 */
export interface BrandMarkProps {
  /** Which mark, keyed by the supplied asset number. The client gave no names for these shapes. Default "07". An unknown key warns and renders nothing. */
  mark?: '07' | '08' | '09' | '10' | '11' | '12';
  /** Rendered square size in px. Default 28. */
  size?: number;
  /** Fill color. Default --primary-container (#00F5A9). */
  color?: string;
  /** Accessible label. Default "SuDu AI". */
  title?: string;
  style?: React.CSSProperties;
}
export function BrandMark(props: BrandMarkProps): JSX.Element;

/**
 * Material Symbols Outlined glyph, the icon system used throughout SuDu AI.
 */
export interface IconProps {
  /** Material Symbols ligature name, e.g. "smart_toy", "bolt", "database". */
  name: string;
  /** Pixel size; also drives the optical-size axis. Default 20. */
  size?: number;
  /** FILL axis, 0 (outlined) or 1 (filled). Default 0. */
  fill?: 0 | 1;
  /** Weight axis 100–700. Default 400. */
  weight?: number;
  /** Glyph color. Default currentColor. */
  color?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;

/**
 * The SuDu AI action button — primary neon CTA, hairline secondary, teal ghost, error danger.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = neon #00F5A9 fill with glow; secondary = glass + hairline; ghost = teal text; danger = error container. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** sm uses label-sm, md/lg use label-lg. Default md. */
  size?: 'sm' | 'md' | 'lg';
  /** Material Symbols name rendered before the label. */
  icon?: string;
  /** Material Symbols name pushed to the far edge (used by "New Synthesis"). */
  trailingIcon?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;

/**
 * Glyph-only 8px-padded control: header utilities, message action rail, sidebar collapse.
 */
export interface IconButtonProps {
  /** Material Symbols ligature name. */
  icon: string;
  /** Glyph size in px. Default 18. */
  size?: number;
  /** surface = filled container chip; bare = transparent until hover. */
  variant?: 'surface' | 'bare';
  /** Active/selected state — raised container and accent glyph. */
  active?: boolean;
  /** Tooltip and accessible label. */
  title?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;

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

/**
 * Static metadata badge — version tags, connector states, inline counts.
 */
export interface BadgeProps {
  children?: React.ReactNode;
  /** neutral = surface-variant/secondary; accent = neon wash; tertiary = ivory-green; error. */
  tone?: 'neutral' | 'accent' | 'tertiary' | 'error';
  /** pill for informational chips, square for inline code-adjacent tags. */
  shape?: 'pill' | 'square';
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;

/**
 * Live-status pill: a 6px glowing indicator dot plus a short label.
 */
export interface StatusPillProps {
  children?: React.ReactNode;
  /** ok = neon, warn = teal-dim, error = error, idle = outline. */
  status?: 'ok' | 'warn' | 'error' | 'idle';
  /** Adds the expanding ping ring used for active/executing states. */
  pulse?: boolean;
  style?: React.CSSProperties;
}
export function StatusPill(props: StatusPillProps): JSX.Element;

/**
 * Standard SuDu AI text input — translucent obsidian fill, hairline teal border, neon focus ring.
 */
export interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  /** Leading Material Symbols glyph, 18px. */
  icon?: string;
  type?: string;
  disabled?: boolean;
  /** Error state — error-colored border, no focus glow. */
  invalid?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;

/**
 * 18px square checkbox with a 4px radius; neon fill and obsidian checkmark when on.
 */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Body-md label rendered to the right of the box. */
  label?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;

/**
 * 18px circular radio with an 8px neon inner dot when selected.
 */
export interface RadioProps {
  checked?: boolean;
  onChange?: (value: string | undefined, e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  name?: string;
  value?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;

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

/**
 * Collapsible panel for agent reasoning traces and secondary detail.
 */
export interface DisclosureProps {
  /** label-md semibold header. */
  title: React.ReactNode;
  /** Parenthetical label-sm meta, e.g. "(Resolved in 4 stages • 1,420 ms)". */
  meta?: React.ReactNode;
  /** Leading Material Symbols glyph. Default "psychology_alt". */
  icon?: string;
  children?: React.ReactNode;
  /** Open on mount. Default true — reasoning is shown, not hidden. */
  defaultOpen?: boolean;
  style?: React.CSSProperties;
}
export function Disclosure(props: DisclosureProps): JSX.Element;

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

/**
 * Read-only metric capsule — latency, temperature, token counts.
 */
export interface MetricCapsuleProps {
  /** Material Symbols glyph, 16px. */
  icon?: string;
  /** Muted descriptor, e.g. "Latency". */
  label?: React.ReactNode;
  /** Emphasized value, e.g. "18ms". */
  value?: React.ReactNode;
  /** Glyph color. Default --tertiary-fixed-dim. */
  iconColor?: string;
  style?: React.CSSProperties;
}
export function MetricCapsule(props: MetricCapsuleProps): JSX.Element;

/**
 * Radial gauge for saturation-style metrics (context window, quota).
 */
export interface ProgressRingProps {
  /** Percentage 0–100. */
  value?: number;
  /** Outer box size in px. Default 48. */
  size?: number;
  /** Stroke width in the 36-unit viewBox. Default 3. */
  stroke?: number;
  /** Arc color. Default neon #00F5A9. */
  color?: string;
  /** Renders the centered percentage. Default true. */
  showLabel?: boolean;
  style?: React.CSSProperties;
}
export function ProgressRing(props: ProgressRingProps): JSX.Element;

/**
 * Trend chart for latency/throughput profiles inside a diagnostic card.
 */
export interface SparklineProps {
  /** Series values, oldest first. */
  points?: number[];
  /** Draws a dashed threshold rule at this value. */
  threshold?: number;
  /** Rendered height in px. Default 96. */
  height?: number;
  /** Line and area color. Default --primary-container. */
  color?: string;
  /** Threshold rule color. Default --error. */
  thresholdColor?: string;
  /** Marks the series maximum with a neon dot. Default true. */
  markPeak?: boolean;
  style?: React.CSSProperties;
}
export function Sparkline(props: SparklineProps): JSX.Element;

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

/**
 * One integrated data source or tool bound to the current agent session.
 */
export interface ConnectorRowProps {
  /** Material Symbols glyph, 18px, in a raised tile. */
  icon: string;
  name: string;
  /** Single muted line, e.g. "pool: payment-master-eu". */
  detail?: string;
  /** Bullet-separated label-sm facts, e.g. ["Ping: 1.2ms", "SSL/mTLS Valid"]. */
  meta?: string[];
  /** Badge text, e.g. "Connected", "Active", "Ready". */
  state?: string;
  /** Badge tone. Default "accent". */
  stateTone?: 'neutral' | 'accent' | 'tertiary' | 'error';
  /** Glyph color — vary per connector class. */
  iconColor?: string;
  style?: React.CSSProperties;
}
export function ConnectorRow(props: ConnectorRowProps): JSX.Element;
