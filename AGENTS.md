# SuDu AI design system

When working with this system, read `README.md` and the relevant component documentation before designing or implementing. Use the supplied assets and semantic tokens; preserve the existing framework when adapting components.

- Product UI: support dark and light themes, with dark as the default. Use `tokens.css` as the authority for runtime token values when older prose or JSON disagrees. The Workspace is a simulated showcase, not a production backend.
- Presentations: start with `references/slides/approved-style.md` and its visual references. These approved slide rules supersede older slide-specific recipes. Label illustrative data.
- Read component `.d.ts`, README, and preview before choosing props. `components/bundle.js` is a React 18 browser global, not an npm package; some folders contain HTML/CSS recipes rather than React exports.
- Preserve the supplied logo and module icon artwork. Product, slide, and marketing rules have different scopes; avoid applying product-only restrictions to every channel.
- The gallery in `preview-app/` is a viewer of source files, not the authority for design rules. Do not alter canonical assets or tokens solely to make the preview work.
