# SuDu approved slide styling

User-approved preference, saved 29 October 2026 after review and refinement of the eight-slide SuDu introduction deck. This is the default slide style when the user asks for SuDu slides, unless they choose another reference. It refines the older slide recipes: use the bolder hierarchy, purposeful grouping, spacing and chart treatment documented here over conflicting older Regular-title or universal top-right-logo recommendations. Product UI and social/ad rules retain their own scope.

## Visual reference

Inspect [the overview](../../assets/slide-references/approved-overview.jpg) before designing, then the relevant full-size slide linked in the layout table below. These are examples to adapt to the message, not eight slides that every deck must reproduce. The [MES PDF](../../assets/slide-references/mes-design-reference.pdf) supplied the original design inspiration; its product claims are not automatically verified. The refined eight-slide examples are the closer default.

| Composition | Approved example | Use |
| --- | --- | --- |
| Cover with aurora column | [Slide 1](../../assets/slide-references/approved-slide-01.png) | Logo top-left, large bold product name, short promise; aurora occupies the right quarter |
| Grouped business messages | [Slide 2](../../assets/slide-references/approved-slide-02.png) | Purposeful white panels, clear headings, short supporting text and one takeaway band |
| Approval-aware process | [Slide 3](../../assets/slide-references/approved-slide-03.png) | Connected steps with required confirmation before execution; highlight the control gate |
| System integration | [Slide 4](../../assets/slide-references/approved-slide-04.png) | SuDu between the chosen accounting options; labelled content and bidirectional handoffs |
| Dark operational flow | [Slide 5](../../assets/slide-references/approved-slide-05.png) | Compact numbered stages, clear connectors, readable light text and a white footer logo |
| Horizontal comparison chart | [Slide 6](../../assets/slide-references/approved-slide-06.png) | Stock statuses with direct value labels and an adjacent total; muted comparison colors |
| Trend chart | [Slide 7](../../assets/slide-references/approved-slide-07.png) | Two labelled lines, restrained grids, visible units and a concise takeaway |
| Aurora closing | [Slide 8](../../assets/slide-references/approved-slide-08.png) | White logo top-left, large bold closing promise, supporting line and clear next action |

## Type and color

Figtree is the primary Latin font throughout: titles, body, numbers, captions, chart axes, labels and legends. Use bold headings like the approved examples rather than the older blanket Regular-title instruction. Chinese needs HarmonyOS Sans SC or an appropriate available Chinese font; code/identifiers can use JetBrains Mono. The supplied font binaries are not bundled. Verify the target runtime can render the requested fonts and disclose a material substitution.

Default content background is ivory #FFFBF5, primary ink #02221F, secondary text #4B5B55, green accent ink #006C48 and light-mint emphasis #E9F5EF. Data teal #00806A carries the main series on ivory, with muted green comparisons such as #91B5A3. Neon #00F5A9 is a fill/accent on light slides, never low-contrast text. Dark slides use obsidian, light text and restrained neon. Aurora stays within the existing obsidian–teal–emerald palette. Do not import the MES sample's amber branch as a universal palette expansion.

## Spacing and hierarchy

At 1280×720, start with left/right margins of about85px. On normal content slides: eyebrow y73, title y114 in42px Figtree Bold with an approximately58px-high single-line frame; subtitle y192 in23px with a34px frame. With a subtitle, primary content starts around y280, leaving about54px after the subtitle frame. Without one, content can start around y210. Footer baseline is around y665. Scale proportionally for other dimensions.

These are starting measurements, not fixed rules that permit clipping: expand a two-line title's frame and move following content down. Use actual text bounds and rendered appearance. Keep the title/subtitle relationship consistent across comparable slides, and inspect gaps inside cards as well as outside them. Separate panel content and takeaway bands by roughly28–60px as content permits. Closing/cover hierarchy can be larger: about60–80px bold hero text, shorter copy, and deliberate whitespace. Do not confuse empty oversized text frames with intentional spacing.

Choose composition from meaning: process → connected steps; options → table or comparison; capabilities/problems → grouped panels; quantities → appropriate chart. Cards are valid when they communicate a real group, and should not become the same repeated layout for every slide. Use a mix of light, dark and aurora compositions to give the deck rhythm. The closing should have a meaningful next step rather than ending on another explanatory column.

## Logos and image compatibility

Use the original supplied artwork. On dark backgrounds use pure white #FFFFFF. The approved dark process uses a small bottom-right logo; the closing uses a larger top-left logo. Cover logo is top-left. These are layout-specific examples, not a global rule that every slide must have both placements. Preserve clear space and aspect ratio.

White assets: [SVG](../../assets/Logos/logo-white.svg), [transparent PNG](../../assets/Logos/logo-white-transparent.png). Dark assets: [SVG](../../assets/Logos/logo-dark.svg), [transparent PNG](../../assets/Logos/logo-dark-transparent.png). Both PNGs are1600px wide with transparency and use the same vector geometry. Use the transparent PNGs for native Spaces slide image placements: SVG appeared in exported renders but showed a broken/empty placeholder in the live viewer during this session. Keep SVG for downloadable/vector workflows that support it. An exported preview alone does not prove that the live viewer displays an image.

## Charts and data

Prefer native editable charts. Use horizontal bars for category comparisons and line charts for time series. Both approved examples use ivory, Figtree, teal and muted greens, quiet gridlines, clear units and labels. Use a zero baseline for bars and for the illustrated count trend; choose scales honestly for other data. Keep no more than two series in a single chart unless the brief warrants more. Avoid pies, dual axes, 3D or neon thin marks on ivory under the existing chart rules.

The approved bar example totals500units:320available,110reserved,50quality-inspection and20blocked. The line example uses separate daily received and fulfilled event counts. All are illustrative, not live ERP balances, customer results or proven product gains. Label demo data visibly. Never reuse these numbers as claims or infer a backlog/completion rate from unmatched daily cohorts. See [slide data rules](data-and-claims.md).

## Implementation and checking

For the current native Artifact Session presentation API, set `shape.text.typeface = 'Figtree'` or use `typeface` inside `shape.text.style`. The earlier code incorrectly used `fontFamily` in that style object; it did not persist a typeface. For charts, set `presentation.theme.defaultFont = 'Figtree'` and verify chart typography separately. Other authoring APIs may use different fields; inspect their supported schema rather than copying the wrong property name.

Before delivery, inspect saved typefaces, render every new or changed slide, and review actual text bounds, spacing, label legibility, clipping, panel padding, chart legends/axes, numbers and logo contrast. Verify image source type/attachment and, when possible, the live preview after SVG/PNG changes. If only the export was checked, do not claim live-viewer verification. Keep all user-provided content and unrelated edits; this style guide does not authorize publishing or changing this plugin by itself.
