Showcase page: a click-through recreation of the SuDu AI agent workspace, composed entirely from this system's components — use it as the reference for how the pieces sit together.

**Screens.** Chat Workspace and the app shell (sidebar rail, engine-health block, top bar) are the faithful recreation of the product screen. Agent Directory, Knowledge Vault and Workspace Settings are extrapolated from the sidebar's destinations and carry an on-screen disclaimer. Model Orchestrator and Prompt Studio are intentionally blank.

**What works.** Sidebar navigation between all six destinations; the light/dark toggle in the top bar (sets `data-theme="light"` on `<html>`); inspector show/hide and its Tools / Memory / Params tabs; the thought-process disclosure; "Run Auto-Remediation" → executing → healthy on a 1.8s timer; capability chips; typing in the prompt console and pressing Enter appends a turn with a simulated agent reply.

**Layout.** 288px rail (`rail-width`), 64px top bar (`topbar-height`), 320px inspector (`inspector-width`), the conversation column fluid between them and capped at `container-reading`. The prompt console is pinned over a protection gradient. Designed at 1440px wide.
