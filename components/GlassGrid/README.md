# GlassGrid

A hero background of touching frosted-glass tiles with the brand neon glowing through from behind, for covers, dividers, hero statements, website heroes, event visuals and photo-free social posts.

Not a bundle export: it is the `.sudu-glass-grid` class in the stylesheet plus the Figma recipe in the brand book (Slides and presentations → Glass grid).

- The consumer provides the tiles (`cols × rows` empty `<i>` children, 5 × 5 for 1:1, 9 × 5 for 16:9) and any text inside a `.sudu-glass-content` layer.
- Light by default on `brand-ivory`; add `.sudu-glass-grid--dark` for `brand-obsidian`.
- Place the glow with `--glow-x`, `--glow-y` (centre, % of the canvas) and `--glow-size` (% of the width), on the side away from the text.
- The CSS frosts and lights the tiles but cannot refract like Figma's Glass effect. For anything printed or posted, build it in Figma (reference renders in the Backgrounds asset group).
- Never in the product UI, never behind dense content, never on the same slide as the aurora.
