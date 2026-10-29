The workspace's structural module — diagnostic artifacts, connector rows, metric panels.

```jsx
<Card icon="analytics" title="Telemetry Diagnostic Report #849"
      subtitle="Cluster eu-west-1 • Payment Microservice Fleet"
      actions={<StatusPill status="error" pulse>Anomaly Index: 98.4%</StatusPill>}>
  …
</Card>
```

`level={2}` for flyouts and modals, `level={3}` only for the focused command hub. Add `interactive` when the whole card is clickable.

Corners are `radius-card` (12px); the header icon tile is `radius-default` (8px).
