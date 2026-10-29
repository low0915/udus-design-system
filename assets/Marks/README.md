# Marks

Six geometric marks — a supporting graphic device, **not** the logo. **Ink: black** through `<img>` (`fill="currentColor"`); use the `BrandMark` component or inline the markup to colour them.

Every shape is built from one **elbow**: a thick bar bent 90° on a rounded bend, with square-cut ends — repeated, mirrored or rotated. `mark-07` is the bare elbow; the rest combine two or four. They are keyed by their supplied asset number (no names were given). All 50 × 50 except `mark-10` (57.99 × 58.39).

- `mark-usage-reference.png` — the brand's own sheet of how the elbow is used: corner accent on a title, a frame, a highlight bar, the cross as a title icon, elbow-and-bar bullets, gradient speed lines, and a stretched elbow as a background element. `BrandMark`'s guidelines turn each into a class.
- Never sign a surface with a mark in place of the logo.
- Colour: `primary-container`, `brand-obsidian` knocked out of neon, or flat `on-surface` where the accent is already spent.
- Rotate in 90° steps or mirror; never other angles, skew or outline.
- Not usable as `mask-image` (C2PA metadata) — `<img>`, inline, `BrandMark`, or the `sudu-*` classes (which carry a clean copy of the elbow path).
