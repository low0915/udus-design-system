A secondary geometric mark family — **not** the logo. Use `Logo` / `LogoIcon` to sign a surface; use the marks, and the elbow they are built from, as type ornaments and background graphics.

```jsx
<BrandMark mark="10" size={24} />                       // title icon
<BrandMark mark="07" size={120} style={{ transform: 'rotate(90deg)' }} />
```

Six marks ship, keyed by their supplied asset number: `07`–`12`. `07` is the base **elbow** — a thick bar bent 90° on a rounded bend, with square-cut ends; `08`–`12` combine two or four elbows. **You provide** `mark`, `size` in px and a `color` from the palette (default `primary-container`).

## Ways to use the elbow

Each pattern has a class in `bundle.css`; all of them take their colour from `--mark-color` (default `primary-container`). The marks are decorative: never let one be the only carrier of meaning.

| Use | How | Notes |
| --- | --- | --- |
| **Corner accent** on a title | `<span class="sudu-accent">Title</span>` | `mark-07` sits off the top-left of the first letter. |
| **Frame** | `<span class="sudu-frame">Text</span>` | The accent plus its mirror (turned 180°) off the bottom-right. Short phrases only. |
| **Highlight** | `<span class="sudu-highlight">word</span>` | A flat bar behind the words — the lower half on light grounds, the full height on dark. Text on it is always `brand-obsidian`. One highlight per view. |
| **Title icon** | `<h3 class="sudu-title"><BrandMark mark="10" size={24}/>Title</h3>` | The cross (`10`, or `08`) as the glyph before a heading, about 1em. |
| **Bullets** | `<ul class="sudu-list">` | A short bar per item. Add `sudu-list--branch` under a title icon: the first item's marker becomes a thin elbow hanging from the icon. |
| **Speed lines** | `<span class="sudu-speed" style="width:60%">` | Bars that fade in from the left. SuDu (速度) means *speed*; the gradient carries that sense of motion. Stack 2–3 of unequal length; `sudu-speed--soft` for a pale, thicker line. |
| **Background element** | `<div class="sudu-elbow" style="--t:48px;width:160px;height:320px">` | The elbow stretched to any size, keeping its bar thickness (`--t`) and bend. Let it bleed off an edge; set text beside its foot. Rotate in 90° steps. |

## Rules

- Rotate elbows in 90° steps and mirror them freely — that is how the family is built. Never skew, outline, add effects, or set them at other angles.
- Colour: `primary-container` on either theme, `brand-obsidian` knocked out of a neon field, or `on-surface` where the accent is already spent. Nothing outside the palette.
- Per view: one background elbow, one highlight, and accents on headings only — not on body copy. Corner accents, the title icon and bullets may appear together, as in the usage reference (Marks: `mark-usage-reference.png`).
- Keep ornaments on plain grounds; never over a busy area or a chart.
