# SuDu AI Design and Marketing System

Design and marketing system for SuDu AI. This repository contains the design guidance, tokens, components, artwork, and approved visual references used to create consistent SuDu experiences.

## Get started

For design or development work, read this guide first, followed by the relevant component README and type declarations in `components/`. Use `tokens.css` for actual runtime values if older documentation or JSON disagrees. `AGENTS.md` and `CLAUDE.md` provide entry points for Codex and Claude Code.

To use the system in another project, place a copy of this repository somewhere the agent can access and specify its path in your request. For example: “Read `design-system/README.md` and the relevant component documentation, then use the SuDu design system for this screen.” The component bundle is a browser global requiring React 18 and ReactDOM 18; it is not an npm package. Adapt it to the target project's framework when necessary.

## Interactive preview

Install Node.js, open a terminal in the repository root, and run:

```sh
node preview-app/server.js
```

Open **http://127.0.0.1:4173/preview-app/**. Use the navigation and search to browse the original examples, and switch the gallery between dark and light themes. Stop the server with Ctrl+C. React 18 and the preview's fonts are included locally. The Workspace demonstrates simulated interactions, not a connected ERP.

The gallery is a static site and can also be served from a host that publishes the entire repository, for example GitHub Pages. A shared repository and a hosted preview are separate: publishing the repository does not automatically enable Pages. Share a versioned release or commit so others know which design guidance they are using.

## Approved slide styling — v0.3.0

For SuDu presentations, start with [the approved slide guide](references/slides/approved-style.md) and [eight visual references](assets/slide-references/approved-overview.jpg). These supersede older slide-only typography, spacing and logo-placement recommendations below. Product UI and social/ad scope remain distinct. Use [white/dark SVG or transparent PNG logos](assets/Logos/README.md) and the [module icons](assets/ModuleIcons/README.md).

Original source sync version and file inventory: [local-sync.json](local-sync.json). It records the v0.3.0 snapshot before the sharing guide and preview app were added. Open [the approved slide gallery](components/Slides/preview.html) to inspect the preferred compositions. Older editable recipes remain available separately.

SuDu AI is an **AI-native ERP**. Instead of navigating modules, forms and batch jobs, the user talks to an agent: close the month, reconcile the ledger, chase an invoice, reorder stock. The agent plans, shows its reasoning, calls the systems it is bound to, and hands back an auditable artifact the user signs off on.

The interface is a **conversation workspace wrapped in operational instrumentation**: a chat stream down the middle, the agent's identity and reasoning state above it, and a live inspector of what the agent is connected to on the right. Every screen answers three questions at a glance — what is the agent doing, what is it touching, and how confident should I be.

Brand posture: **innovative, fast, reinventing** — a dark computing terminal with enterprise rigor: deep obsidian-teal ground, one high-luminance neon emerald accent, hairline chromatic borders, no decoration that isn't load-bearing.

Build for **both themes**. `dark` is the default and the source of truth; `light` is the derived counterpart. Components live on `window.SuDuAI`; the `Workspace` page shows them composed into the real product screen.

## Content fundamentals

Write as a senior operator reporting in — **precise, declarative, unhurried, never chatty**.

- **Tone.** State findings; don't frame them. "Analysis complete. The anomalous latency in the payment checkout pipeline originates from synchronous read-locks on stale token records." No preamble, no "I'd be happy to", no hedging adjectives.
- **Person.** The agent drops the pronoun when reporting an action ("Assembled automated script to…"). Address the user as "you" only in guardrail and instruction copy ("Press Shift + Enter for newline"). System directives are second-person imperative: *"You are an SRE tier-3 Autonomous Operator. Prioritize high-availability, always evaluate blast radius."*
- **Casing.** Titles and nav labels in Title Case ("Chat Workspace", "New Synthesis", "Configure Agent Swarm"). Section labels and metric headers in UPPERCASE with wide tracking — set them in `label-sm` ("ACTIVE INTEGRATED CONNECTORS", "P99 LATENCY PROFILE (LAST 60 MINUTES)"). Body and agent output in sentence case. Never all-caps for emphasis inside a sentence.
- **Numbers are specific and unit-bearing.** "Latency 24ms", "Context: 128k / 200k tokens", "99.9%", "128,420 of 200,000", "Ping: 1.2ms". Comma-separate thousands. No approximations — if the number isn't known, don't show the field.
- **Name the mechanism, not the metaphor.** "Context Saturation", not "Memory usage". "Zero-shot Sandbox: Bound", not "Safe mode on". "Branch Context", not "Try again differently".
- **Status copy is a state, then a qualifier:** "Autonomous Mode: Active", "Agent Idle", "Anomaly Index: 98.4%", "SuDu Safety Mesh: Enterprise Sandbox Active".
- **Buttons are verb-first and specific:** "Run Auto-Remediation", "New Synthesis", "Copy Code", "Fork Session". Never "Submit", "OK" or "Learn more".
- **Reasoning bullets** take a bold lead-in and a factual tail: "**P99 Variance Isolated:** Found anomalous spike at 2,480ms in cluster `eu-west-1` during DB connection pool saturation." Use `ReasoningStep`.
- **Separators.** A middle dot with spaces between facts (`Cluster eu-west-1 • Payment Microservice Fleet`); `/` for ranges and paths (`128k / 200k`).
- **No emoji, anywhere.** Icons carry all glyph meaning.
- Write the name **"SuDu AI"** in running text. The logo's lettering ("SuDu Ai") is artwork; don't copy its casing.

## Visual foundations

### Colour
One accent, one ground, a six-step surface ladder.

- **Accent.** `primary-container` (`#00F5A9`, the same value as `brand-neon`) is the only high-impact colour. Spend it at most two or three times per view: the primary CTA, the active nav label (`text-accent`), live status dots, the data line in a chart. `brand-teal` is its diffuse form — hover edges and hairlines at 8–25% alpha, never a fill.
- **Ground.** Pages sit on `surface`, over `brand-canvas` in the dark shell. Containers step up `surface-container-lowest → surface → surface-container-low → surface-container → surface-container-high → surface-container-highest`. Show no more than three ladder steps in one region. Prefer the semantic aliases in product code: `surface-canvas`, `surface-sunken`, `surface-card`, `surface-raised`, `surface-float`.
- **Text.** `on-surface` (`text-primary`) for body; `on-surface-variant` (`text-muted`) for subtitles and metadata; `outline` for inactive glyphs. `brand-ivory` (`field-ink`) only for typed input text and inverse badges on dark. Label text on the neon fill is `on-primary-container` (`text-on-accent`).
- **Error is the only non-green hue** (`error`, `error-container`). There is no blue, purple or orange.
- **Light mode** flips the ladder to near-white greens with `on-surface` ink and keeps `primary-container` as the accent *fill*. On light grounds the neon is never text or a lone signal: status dots (`status-ok`, `status-warn`) always travel with their word.

### Type
**Figtree** (`font-core`) is the single family for display, headline, body and label — no serif, no second sans. Display and headline carry negative tracking (`display-lg` −0.03em easing to 0 at `headline-sm`) to compress visual mass; body sits at 0; labels go positive (+0.04 to +0.08em) and `label-sm` is always uppercase, reading as instrumentation. Body leading is generous (`body-md` 15/24, `body-lg` 18/28) because the primary content is streamed generated text. Use `mono` (`font-mono`, JetBrains Mono) only for identifiers, scripts, filenames and keyboard hints. Below 600px swap to the `*-mobile` display and headline styles. The components read the scale as variables (`--label-lg-size`, `--body-md-line`, …) from the stylesheet; `.type-*` helper classes exist for plain markup.

### Spacing and layout
A 4px-rooted scale: `space-xs` 4 · `space-sm` 8 · `space-md` 16 · `space-lg` 24 · `space-xl` 40. The shell is **docked regions at fixed widths** — `rail-width` 288px sidebar, `topbar-height` 64px, `inspector-width` 320px — with the conversation column fluid between them, capped at `container-reading` (840px) for reading and `container-dashboard` (1440px) for dashboards. Desktop: 12 columns, `gutter`, `margin` minimum. Tablet: 8 columns, condensed rail. Mobile: 4 columns, `gutter-mobile`, `margin-mobile`, side panels become sheets.

### Backgrounds
**No photography, illustration, pattern, texture or grain.** The only background treatment is `--mesh-ambient`: one 600px neon radial at 4% anchored to the top of the canvas. Two other gradients are allowed in the product: the **protection gradient** — `linear-gradient(to top, var(--surface), transparent)` behind the pinned `PromptConsole` so the stream fades beneath it — and the **speed lines** (`sudu-speed`), bars that fade in from the left to say *speed* (see Logo and marks). The large background elbow (`sudu-elbow`) is the only other graphic allowed on a ground. Slides and marketing surfaces add two more, the **aurora** and the **glass grid** (see Slides and presentations); neither ever appears in the product UI.

### Depth, transparency, blur
Depth is **luminous glass, not shadow**.
- **Layer 1** (module shells, sidebar, top bar): `layer-1-bg`, `blur-layer-1`, `--layer-1-border`, `layer-1-shadow`.
- **Layer 2** (flyouts, prompt console, modals): `layer-2-bg`, `blur-layer-2`, `--layer-2-border`, `layer-2-shadow` (adds a faint neon glow).
- **Layer 3** (the active command hub only): `--layer-3-border`, `layer-3-shadow`.

Blur only surfaces that overlay scrolling content — sidebar, top bar, agent bar, inspector, prompt console. Static cards inside the scroll area stay opaque.

### Borders and dividers
Borders are **always 1px and always chromatic** — `edge-hairline` by default, `edge-hairline-strong` for secondary buttons and flyouts — never grey. Card headers divide with a rule masked to taper at the container edges, not a full-width line. Vertical toolbar separators are a 1px `surface-variant` bar 16–24px tall. `outline-variant` is decorative only.

### Corner radii
`radius-control` (8px) for buttons, inputs, icon buttons, nav rows and other controls. `radius-card` (12px) for cards. `radius-panel` (24px) for panels and the prompt console. Message bubbles use `radius-lg` (16px) — the operator bubble squares its top-right corner to 0, which is what distinguishes an operator turn from agent output. `radius-pill` for badges, chips and status pills, deliberately, so informational chips never read as containers. `radius-sm` (4px) for inline code tags and small square badges; `radius-default` (8px) for the icon tile in card headers. Keep corners tight: a control is never rounder than the card that holds it.

### Cards
A card is `surface-card` + a 1px `edge-hairline` + a soft dark shadow — no heavy elevation, no coloured left border, no gradient fill. Header: an 8px-radius `surface-raised` tile holding a 20px accent glyph, a bold `label-lg` title with a muted `body-sm` subtitle beneath, then right-aligned `Badge` or `StatusPill`. Use `Card`.

### States
- **Hover on the accent:** `brightness(1.05)` and the glow spreads from `glow-sm` to `glow-md`. It gets brighter, never darker.
- **Hover on glass:** fill to `rgba(95,255,213,.1)`, border resolves to solid `brand-teal`.
- **Hover on muted chrome:** step up one ladder rung; text goes `on-surface-variant` → `on-surface`.
- **Hover on an interactive card:** `--lift-hover` (translateY −2px), border to `rgba(0,245,169,.4)`.
- **Press:** `scale(var(--press-scale))` (0.98). No colour change, no ripple.
- **Focus:** a 1px `edge-focus` border plus the `focus-ring` glow. Never a browser outline.
- **Disabled:** 38% opacity, nothing else.

### Motion
Fast and tactile: `--dur-instant` 100ms (press), `--dur-fast` 150ms (hover, colour), `--dur-base` 200ms (buttons, cards), `--dur-slow` 300ms (panel collapse), all on `--ease-standard` `cubic-bezier(.2,0,0,1)`. **No bounce, spring, stagger, long fades or entrance animations.** The only loops signal liveness: a pulse on engine-health dots and the expanding ping ring on active or executing states (`StatusPill pulse`). Everything collapses to 0ms under `prefers-reduced-motion`.

### Data visualisation
One chart form (`Sparkline`): a 2.5px neon line over an 8% area fill of the same colour, on two dashed 8% gridlines, with an optional dashed `error` threshold rule and a 4.5px neon dot on the peak. Radial gauges (`ProgressRing`) are a 3px stroke on a `surface-variant` track with the percentage centred.

### Imagery
There is none, and that is the rule. The brand's weight comes from neon-on-obsidian contrast and the density of real numbers. If imagery is ever unavoidable, keep it cool-toned, near-monochrome and low-luminance so the neon stays the brightest thing on screen.

## Iconography

**Material Symbols Outlined** is the icon system, loaded as a variable font from Google Fonts with `FILL 0, wght 400, GRAD 0` and `opsz` tracking the size. Render glyphs with `Icon`.

- Always outlined and unfilled — no filled glyphs, duotone or mixed sets.
- Sizes: 14px inline meta rows · 15–16px chips, dense rails, message action bars · 18px buttons and connector tiles · 20px nav rows and header utilities · 24px agent identity.
- Colour follows role: `primary` for the active or accented glyph, `on-surface-variant` for neutral chrome, `tertiary-fixed-dim` for metric glyphs, `secondary` for the operator/person glyph, `error` for destructive hover.
- Never hand-draw SVG icons. If a glyph is missing from Material Symbols, pick the nearest one.
- No emoji and no unicode glyphs as icons; the `•` separator is typography, not an icon.
- Product vocabulary: `chat_bubble`, `smart_toy`, `neurology`, `database`, `terminal`, `psychology`, `psychology_alt`, `hub`, `code_blocks`, `analytics`, `memory`, `timer`, `layers`, `thermostat`, `verified`, `speed`, `bolt`, `check_circle`, `attach_file`, `mic`, `arrow_upward`, `content_copy`, `replay`, `thumb_up`, `thumb_down`, `share`, `alt_route`, `fork_right`, `download`, `restart_alt`, `view_sidebar`, `dock_to_left`, `tune`, `settings`, `notifications`, `person`, `edit`, `expand_more`, `chevron_right`, `add`, `auto_awesome`, `code`, `language`.

## Logo and marks

The primary logo is a lockup of an **alien head** and the **SuDu AI wordmark** (Logos: `logo.svg`, `logo-icon.svg`). In React use `Logo` and `LogoIcon`; they inline the supplied paths and take a `color`.

- Colour it `on-surface` in neutral chrome, `primary-container` where the logo is the accent, `brand-obsidian` knocked out of a neon field.
- Clear space on every side equals the height of the head. Minimum lockup height 18px; below that use `LogoIcon`.
- Never rebuild the lockup by setting "SuDu AI" in Figtree beside the icon. Never outline, rotate, skew, add effects, recolour outside the palette, or place it on a busy ground.
- The SVG files carry C2PA metadata and fail as a CSS `mask-image` source — use `<img>`, inline markup, or the components.

The six **geometric marks** (Marks: `mark-07` … `mark-12`, component `BrandMark`) are built from one **elbow** — a thick bar bent 90° on a rounded bend, with square-cut ends — repeated, mirrored or rotated. Never use one to sign a surface in place of the logo. The brand uses the elbow as a type ornament and a background graphic (Marks: `mark-usage-reference.png`), each with a `sudu-*` class in the stylesheet:

- **Corner accent** (`sudu-accent`) — `mark-07` off the top-left of a heading.
- **Frame** (`sudu-frame`) — the accent plus its 180° mirror off the bottom-right of a short phrase.
- **Highlight** (`sudu-highlight`) — a flat bar behind key words, text in `brand-obsidian`. One per view.
- **Title icon** — the cross (`BrandMark mark="10"`) before a heading (`sudu-title`).
- **Bullets** (`sudu-list`) — short bars; `sudu-list--branch` hangs a thin elbow from the title icon to the first item.
- **Speed lines** (`sudu-speed`) — bars fading in from the left. SuDu (速度) means *speed*; the gradient carries it.
- **Background element** (`sudu-elbow`) — the elbow stretched to any size, bleeding off an edge, text set at its foot. One per view.

Colour all of them with `--mark-color` (default `primary-container`), or `brand-obsidian` on neon, or `on-surface` where the accent is spent. Rotate in 90° steps or mirror; never other angles, skew or outline. They are decoration — never the only carrier of meaning.

## Slides and presentations

Slides lead **light**, unlike the product: calm ivory pages with lots of space, and one dramatic material — the **aurora** glow — used in pieces. Set decks 16:9.

### Ground and colour
- **Default ground: `brand-ivory` (`#FFFBF5`).** Titles and body in `brand-obsidian` (16.3:1); secondary text in light `on-surface-variant` (9.1:1); accent text in light `primary` (`#006C48`, 6.3:1).
- **Neon on ivory is a fill, never text** (1.4:1): brand elements, chart fills, the aurora's glow end. Text on a neon fill is `brand-obsidian`.
- **The aurora** (`--aurora`, class `sudu-aurora`) runs `aurora-0` obsidian → `aurora-1` deep teal → `aurora-2` green → `aurora-3` neon, every stop on the brand's own green-teal hue and blended in OKLCH, so it stays clean beside the saturated neon. Never blend the neon through grey, black-to-neon in plain sRGB, or blue-grey teals — they read dirty. It is the only gradient on slides besides the speed lines, and it never appears in the product UI.
- **Text on the aurora** sits on the dark first ~40% only, in `brand-ivory` (11.9:1 on `aurora-1`); the glow end carries no text.
- **Data colours:** `data-2` (`#00806A`, deep brand teal) is the working series on ivory, `data-1` (neon) the highlight fill and the line on dark, `data-muted` for context — see Charts.

### Layout and type
- **Margins** about 7% of the width on every side. Eyebrow label + title top-left; content in the lower half. Leave roughly half of each slide empty. One idea per slide.
- **Eyebrow:** tiny `label-sm`-style, uppercase, `on-surface-variant` (e.g. "MARKET SIZE").
- **Title:** two lines max, Figtree Bold by default for approved presentations (about42px on a1280×720 content slide; scale for other sizes), `brand-obsidian` or light `on-surface-variant` — never paler than that. Lead it with a corner accent or the cross title icon.
- **Hero numbers:** Figtree Bold, very large (15–20% of slide height), in `brand-obsidian`, `data-2`, or neon on the aurora. Pair with a tiny label and unit.
- **Body and captions** small and quiet; at most three to five short points.
- **Logo:** use the approved composition: full logo top-left on cover/closing; a small footer logo can sit bottom-right on content slides. Use dark artwork on ivory and pure white on dark/aurora. Preserve aspect ratio and clear space; see the approved guide for placement examples.
- Casing, numbers and voice follow Content fundamentals.

### Slide recipes
- **Light** (most slides): ivory, eyebrow + title, content below; cards and tables are white (light `surface-container-lowest`) with a 1px `edge-hairline` and `radius-card`, or hairline-ruled tables with no fill.
- **Band:** light top, an aurora band across the bottom 25–35% (`sudu-aurora--right`) for timelines, three-up points or key figures, ivory text on its dark left side.
- **Column:** an aurora column on the right 15–40% (`sudu-aurora--up`) beside a table, list or statement.
- **Hero** (about one in four or five, never two in a row): aurora over two-thirds or more with one giant number or statement — this replaces a plain dark slide. Section dividers and the closing slide use it too.
- **Comparison:** three columns — neutral (white, hairline), **ours** (aurora), **theirs** (obsidian).

### Charts
See the **Charts** page for each recipe on a slide. Colours by role, never by decoration:
- **`data-2` (`#00806A`) is the working series on ivory** — bars, lines (2px), dots (8px with a 2px ivory ring). It holds 4.7:1 on ivory, so thin marks read.
- **`data-1` (neon) is a highlight fill on ivory** (always direct-labelled in `brand-obsidian`) and **the line on dark** obsidian charts. Never a thin line or dot on ivory (1.4:1).
- **`data-muted`** for context: the "before", the rest of the bars, sparklines.
- **Bars are change bars** (`sudu-bar`): square-cornered neon columns 8px apart, height = size of the change, and the fade says the direction — `sudu-bar--up` is solid at the baseline and fades upward (increase), `sudu-bar--down` is solid at the top and fades toward the baseline (decrease). Always print the signed value above each bar (`sudu-bar-value`, "+30%", "−80%") in `brand-obsidian`; the sign is what makes direction readable without the gradient.
- **The aurora** for hero panels and the "ours" column in comparisons.
- At most two series per chart; more becomes small multiples or a table. `error` only for a real threshold; status deltas say the direction in words or ▲▼ as well as colour.
- Forms: a hero number with stat tiles first; change bars for increases and decreases; paired horizontal bars for before/after; a line for a rate over time (no area wash when the axis does not start at zero); a two-part 100% bar for part-to-whole; a hairline table with inline bars for ranked lists. No pies, no dual axes, no 3D.
- Marks: thin bars elsewhere (before/after, table bars) at most 24px thick with a 4px rounded end; a 2px ivory gap between touching segments; hairline solid gridlines in `edge-hairline` (ivory at 12% on dark); value labels only on the endpoint, the extreme or the bar the story is about. Text is always in ink tokens, never in a data colour. Live charts show a tooltip on hover.

### Brand elements on slides
At most one background elbow per slide (on ivory, not on the aurora); a corner accent or title icon on headings; bars or the branch elbow for bullets; speed lines for anything about time saved or throughput.

### Glass grid
The second hero material, beside the aurora: a wall of square frosted-glass tiles with the brand neon glowing through from behind. Where the aurora says *energy*, the glass grid says *clarity*: the data is there, seen through glass. The reference renders are in the **Backgrounds** asset group (`glass-grid-cover-light.png`, `glass-grid-social-dark.png`).

**Use it for** moments, not content: deck covers and closing slides, section dividers, a single hero number or statement, website hero headers, event visuals (stage screen, registration page, badges, photo wall), video opening and closing frames, and social posts with no photo (product announcements, a tip or quote card, festive greetings). A phone or chat screenshot can float over the dark version as the hero.

**Never** behind tables, pricing, feature lists or any text-heavy slide; never in the product UI; never on the same slide as the aurora or the background elbow; never two glass-grid slides in a row (at most one in four or five); never over a photo.

**Construction**
- **Tiles:** square, `radius-glass-tile` (28px at 1080px; scale with the canvas), **no gaps**: tiles touch, and the small four-point openings where corners meet are part of the look. 5 × 5 on a 1:1 canvas, 9 × 5 on 16:9, with a margin of about 1.5% of the short side.
- **Glass (Figma):** effect **Glass** with Light −45° at 80%, Refraction 100, Depth 70, Dispersion 0, Frost 100, Splay 0. Tile fill `glass-tile-light` on light grounds, `glass-tile-dark` on dark. Build the tile once as a component and place instances.
- **Glow:** one `glass-glow` circle (neon, about 1.5–2 tiles across, blur about 40% of its size, 75–80% opacity) centred where four tiles meet, plus a wide soft halo (`glass-halo-light` on light, `glass-halo-dark` on dark) about twice its size. Put it **off-centre**, on the side away from the text (bottom-right when the title is top-left). One glow per surface, brand mint and teal only.
- **Ground:** `brand-ivory` (light) or `brand-obsidian` (dark).
- **On the web:** `.sudu-glass-grid` (and `--dark`) in the stylesheet approximates it with `backdrop-filter` blur and an inset highlight: it frosts and lights the tiles but cannot refract. Set `--glass-cols`, `--glow-x`, `--glow-y` and `--glow-size`; put tiles as child `<i>` elements and text in a `.sudu-glass-content` layer. Figma is the reference for anything printed or posted.

**Text** sits on the pale (or dark) outer tiles only, never over the glow: `brand-obsidian` on light, `brand-ivory` on dark, an eyebrow in light `primary` on light or neon on dark. Same type rules as other slides: Figtree, Noto Sans SC for Chinese, two-line titles, logo top-left or top-right.

## Component families

**Brand** `Logo`, `LogoIcon`, `BrandMark` · **Core** `Icon`, `Button`, `IconButton` · **Status** `Chip`, `Badge`, `StatusPill` · **Forms** `Input`, `Checkbox`, `Radio`, `PromptConsole` · **Surfaces** `Card`, `Disclosure`, `CodeBlock` · **Navigation** `NavItem`, `Breadcrumb`, `TabBar` · **Data** `MetricCapsule`, `ProgressRing`, `Sparkline` · **AI** `UserMessage`, `AgentMessage`, `ReasoningStep`, `ConnectorRow`.

One primary `Button` per region. One `PromptConsole` per workspace view, docked over the protection gradient. An agent turn is `AgentMessage` holding a `Disclosure` of `ReasoningStep`s, then the answer; an operator turn is `UserMessage`.


---

## Consuming this system (generated — do not edit)

Every path named below is under `project/` in this design system: read `project/api/tokens.md`, not `api/tokens.md`.

If the text above differs on what to load or read, follow this section.

`components/bundle.js` defines `window.SuDuAI` (26 components); `components/bundle.css` is its stylesheet; `tokens.css` is every token as a CSS variable plus `@font-face` for the fonts. The bundle needs react 18 (not packed in this system: bring your own copy) (`window.React`), react-dom 18 (not packed in this system: bring your own copy) (`window.ReactDOM`), loaded before it. Build any UI by mounting these components; never hand-build a control or draw an icon the system provides.

- **Standalone page:** inline `tokens.css` and `components/bundle.css` in a `<style>`, then the library files and `components/bundle.js` as classic scripts (refuse any file containing `</style`, `</script` or `<!--`).
- **Design canvas:** bring `components/bundle.js`, `components/bundle.css` and `components/index.d.ts` (for the editor’s props panel) onto the canvas unread, as the canvas type’s design-system components reference says (a server-side copy first where it offers one); skip the library files (the artboard supplies React); mount with `<x-import component-from-global-scope="SuDuAI.<Comp>" …>`.
- **Slides deck, or any surface that cannot run the bundle:** tokens only — the values are on `api/tokens.md`; the deck takes `tokens.json` by file path for its colour pickers.

**Read, per thing:** a component’s props, parts and examples: `api/components/<Comp>.md`; token values: `api/tokens.md`; stored assets and their paths: `api/assets/<Group>.md`. After this README, fetch the cards and fonts you need in ONE message as parallel calls — none depends on another.

**Two rules.** Before you use a thing — a component, a token group, an icon, an asset — read its card from the index below; a value you did not read from a card is a guess. `tokens.json`, `manifest.json`, `components/index.d.ts` and `design-system.json` are sources for tools: hand them over unread. `components/<Comp>/README.md` and `assets/<Group>/README.md` are the long-form second read a card links to; `SKILL.md` and `artifact-type/` beside them are authoring guidance, not needed to consume the system.

## Index (generated — do not edit)

**Tokens**

- `api/tokens.md` — Every token: surface, text, fill, border, palette, type, spacing, radius, shadow, blur, grid. (16.2k)

**Icons and assets**

- `api/assets/Logos.md` — 2 files, by asset id. (1.9k)
- `api/assets/Marks.md` — 6 files, by asset id. (2.0k)

**Components** (`api/components/<Comp>.md`, 27; 1 of them showcase pages)

- **Brand**: `Logo` — The SuDu AI logo · `LogoIcon` — The alien head alone, cut from the primary logo — for favicons, avatars, the collapsed rail, watermarks and any square or space-constrained slot · `BrandMark` — A secondary geometric mark family — not the logo
- **Core**: `Icon` — Renders one Material Symbols Outlined glyph — use it anywhere SuDu AI shows an icon; never hand-roll an SVG · `Button` — The standard SuDu AI button; primary is the single neon accent on a view, everything else is secondary or ghost · `IconButton` — Glyph-only control for utility actions where a label would add noise
- **Status**: `Chip` — Capability switcher chip — the row above the prompt textarea · `Badge` — Non-interactive metadata badge; use Chip when it is clickable · `StatusPill` — Signals live system state — agent mode, engine health, anomaly alerts
- **Forms**: `Input` — Single-line field for settings, search and naming · `Checkbox` — Multi-select control for agent permissions, connector scopes and export options · `Radio` — Single-choice control — reasoning mode, model tier, sandbox class · `PromptConsole` — The product's primary input surface — one per workspace view, docked to the bottom over a protection gradient
- **Surfaces**: `Card` — The workspace's structural module — diagnostic artifacts, connector rows, metric panels · `Disclosure` — Wraps the agent's visible reasoning so users can audit each stage · `CodeBlock` — Shows generated scripts and tool output inside an agent message
- **Navigation**: `NavItem` — Sidebar destination row · `Breadcrumb` — Locates the user inside a workspace → swarm → stream hierarchy · `TabBar` — Switches the inspector between tool, memory and parameter views
- **Data**: `MetricCapsule` — Surfaces one operational number in a header or toolbar · `ProgressRing` — Shows how full a bounded resource is · `Sparkline` — The product's only chart form — a neon line over an 8%-opacity area fill
- **AI**: `UserMessage` — The human turn in a chat stream · `AgentMessage` — The agent turn · `ReasoningStep` — One line of the agent's audit trail: what it did, and to what · `ConnectorRow` — Lists what the agent is actually wired into — the trust surface of the product
- **Workspace**: `Workspace` (showcase page) — Showcase page: a click-through recreation of the SuDu AI agent workspace, composed entirely from this system's components — use it as the reference for how the…
