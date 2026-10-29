# Mobile module icons

25 approved 64×64 module icon families exported from SuDu Figma page 11 on 2026-10-28. These are vector SVGs with outlined text. Use `catalog.json` to locate files and the Figma component IDs.

Each family has two design variants: With background and Without background. Three files cover web asset use:

- `with-background.svg`: original gradient tile and white foreground; works in either theme.
- `without-background-dark.svg`: transparent canvas with dark-theme on-surface foreground.
- `without-background-light.svg`: transparent canvas with light-theme on-surface foreground.

Keep the 64×64 viewBox and internal placement; do not crop individual paths to their visible bounds. Preserve category colors, internal geometry and outlined letterforms. Select the transparent file for the actual surface color, which may differ from the page theme. A plain HTML image does not inherit CSS currentColor because the SVG files are separate documents.

Copy the asset directories into the destination project's public assets and choose the relative/URL base for that project. For example, use `/sudu/modules/picking/without-background-light.svg` after copying the catalog's icon directories under `public/sudu/modules`.

Optional React adapter: `../../components/module-icon.js` exposes `window.SuDuModuleIcons.ModuleIcon` and `names`. It is separate from the preserved `window.SuDuAI` bundle. Load React 18 first, then this adapter. Props: `name` (catalog display name or slug), `background` (`with` default or `without`), `theme` (`dark` default or `light`), `assetBase` (default `/sudu/modules`), `size` (default64), `alt` (default module name), and standard image props. Pass `alt=""` for decorative use when adjacent text already names the module. Theme must be supplied explicitly; the adapter does not detect CSS theme changes. An unknown name or enum throws, so fix it rather than silently rendering another module.

```js
React.createElement(window.SuDuModuleIcons.ModuleIcon, {
  name: 'Picking', background: 'without', theme: 'light',
  assetBase: '/sudu/modules', size: 64, alt: ''
})
```

The Figma components retain live variable aliases and shared glyph masters; these exported files contain resolved color values. Editing an SVG does not update Figma, and editing Figma does not update this versioned plugin automatically.
