# Logos

The SuDu AI logo, supplied as single-colour artwork. **Original master SVGs (`logo.svg`, `logo-icon.svg`):** each is authored with `fill="currentColor"`, which renders black through `<img>`. For any other colourway inline the `<svg>` markup or use the `Logo` / `LogoIcon` components, which take a `color`.

| File | Use | Ratio |
| --- | --- | --- |
| `logo.svg` | Primary logo — alien head + wordmark lockup. The default way the brand signs a surface. | 205.68 : 50.79 |
| `logo-icon.svg` | Logo icon — the head alone, for favicons, avatars, collapsed rails, watermarks. | 76.05 : 50.79 |

- Colourways: `on-surface` in neutral chrome, `primary-container` where the logo is the accent, `brand-obsidian` knocked out of a neon field.
- Clear space on every side equals the height of the head. Minimum lockup height 18px; below that use the icon.
- The lettering reads "SuDu Ai" — it is artwork. Running text always writes "SuDu AI". Never rebuild the lockup in live Figtree.
- These files carry C2PA provenance metadata, so they fail as a CSS `mask-image` source (renders a solid block). Use `<img>` or inline the markup.

## Approved explicit colorways (v0.3.0)

| File | Use |
| --- | --- |
| [logo-white.svg](logo-white.svg) | Pure-white #FFFFFF vector artwork on dark backgrounds |
| [logo-dark.svg](logo-dark.svg) | Obsidian #02221F vector artwork on ivory/light backgrounds |
| [logo-white-transparent.png](logo-white-transparent.png) |1600px-wide transparent white logo for native slide image placement |
| [logo-dark-transparent.png](logo-dark-transparent.png) |1600px-wide transparent dark logo for native slide image placement |

Use the PNG files in native Spaces slide image placements: SVG rendered in export but appeared as a broken placeholder in the live viewer during the approved deck work. SVG remains appropriate for supported vector/download workflows. Do not judge live-viewer compatibility from an exported preview alone. Original master artwork is preserved.
