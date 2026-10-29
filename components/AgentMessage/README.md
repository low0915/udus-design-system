The agent turn. Unlike the user bubble it has no fill — output sits directly on the canvas so artifacts inside it read as first-class.

```jsx
<AgentMessage mode="Deep Reasoning" duration="1.4s Execution">
  <Disclosure title="Thought process" meta="(4 stages • 1,420 ms)">…</Disclosure>
  <p>Month-end close complete.</p>
  <CodeBlock filename="reconcile.py" code={src} />
</AgentMessage>
```

Max width 1024px, left-aligned.
