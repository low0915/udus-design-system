The product's primary input surface — one per workspace view, docked to the bottom over a protection gradient.

```jsx
<PromptConsole
  value={draft} onChange={e => setDraft(e.target.value)} onSubmit={send}
  capabilities={[{ id: 'research', label: 'Deep Research', icon: 'auto_awesome', active: true }]}
  onToggleCapability={toggle}
/>
```

Put it inside a `linear-gradient(to top, var(--surface), transparent)` wrapper so the message stream fades behind it.
