Lists what the agent is actually wired into — the trust surface of the product.

```jsx
<ConnectorRow icon="database" name="Postgres Ledger DB" detail="pool: gl-master-eu"
              meta={['Ping: 1.2ms', 'SSL/mTLS Valid']} state="Connected" />
```

Rotate `iconColor` between `--primary`, `--tertiary` and `--secondary` so stacked rows stay distinguishable.
