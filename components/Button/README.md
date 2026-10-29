The standard SuDu AI button; `primary` is the single neon accent on a view, everything else is secondary or ghost.

```jsx
<Button variant="primary" icon="bolt" onClick={run}>Run Auto-Remediation</Button>
<Button variant="secondary" size="sm">Memory</Button>
<Button variant="primary" trailingIcon="add" fullWidth>New Synthesis</Button>
```

Radius is always `--radius-control` (8px). Hover brightens and spreads the glow; press scales to 0.98. Never place two primary buttons in one region.
