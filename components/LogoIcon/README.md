The alien head alone, cut from the primary logo — for favicons, avatars, the collapsed rail, watermarks and any square or space-constrained slot.

```jsx
<LogoIcon height={32} color="var(--primary-container)" />
<LogoIcon height={32} color="var(--brand-obsidian)" />   // knocked out of a neon field
```

**You provide:** `height` in px (width follows the 76.05 : 50.79 artwork ratio), and a `color` from the palette — `on-surface` in neutral chrome (default), `primary-container` where the mark is the accent, `brand-obsidian` on neon.

Use `Logo` whenever there is room for the full lockup (18px tall or more); drop to `LogoIcon` below that. Never pair `LogoIcon` with live "SuDu AI" text to fake the lockup — the wordmark is artwork. Never outline, rotate, skew or add effects.
