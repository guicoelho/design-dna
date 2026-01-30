# Design System

This project uses DESIGN DNA for design system enforcement.

<!-- dna:begin -->
## Design DNA Reference

> Dark, minimal, technically precise marketing site for a developer tool. Monochrome + single orange accent. Geist type. Zero decoration. Static HTML/CSS/JS.

### Principles
1. Nothing decorative -- every element serves a function
2. Monochrome palette, orange is the signal -- grayscale default, orange marks one key moment only
3. Density through restraint -- dense because nothing is unnecessary, not packed tight
4. Code is the product -- code blocks are hero images, not screenshots
5. Craft in the details -- 0.15s transitions, antialiased text, consistent borders compound into trust

### Colors

Accent: `#ff670d` (primary CTA, active nav marker) | hover: `#ff7a2e`

| Step | Hex | Role |
|------|-----|------|
| black-1 | `#0a0a0a` | Page bg |
| black-2 | `#0d0d0d` | Recessed surfaces (output code blocks) |
| black-3 | `#141414` | Raised surfaces (code blocks, cards) |
| black-4 | `#1a1a1a` | Dim borders, dividers |
| black-5 | `#222` | Default borders, interactive bg |
| black-6 | `#2a2a2a` | Button gradient dark end |
| black-7 | `#333` | Interactive borders, button gradient light (hover) |
| black-8 | `#3a3a3a` | Button inset highlight |
| gray-1 | `#444` | Inactive nav links |
| gray-2 | `#555` | Disabled text |
| gray-3 | `#666` | Muted text, default link color |
| gray-4 | `#777` | Dim text, step descriptions, output code |
| gray-5 | `#888` | Copy button text |
| gray-6 | `#999` | Body text, secondary text |
| light-1 | `#e0e0e0` | Code text, button text |
| white | `#fff` | Primary text, headings, hover states |

### Semantic Colors
Bg: page=`#0a0a0a` | surface=`#141414` | recessed=`#0d0d0d` | interactive=`#222`
Borders: default=`#222` | dim=`#1a1a1a` | interactive=`#333`
Text: primary=`#fff` | body=`#999` | dim=`#777` | muted=`#666` | code=`#e0e0e0` | disabled=`#555`
Links: `#666` -> `#fff` on hover. No underline. No visited. No blue.
Nav links: `#444` -> `#999` on hover. Active: `#999` text + `#ff670d` marker.
Elevation (via bg, not shadow): recessed=`#0d0d0d` | page=`#0a0a0a` | surface=`#141414` | interactive=`#222` | highlight=`#333`

### Typography
Body: `Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
Mono: `"Geist Mono", "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace`
Weights: 400=body/code/labels | 500=headings | 600=button labels only. Never 300 or 700.
Base: 1rem (16px). No viewport scaling.

| Name | Size | Use |
|------|------|-----|
| display | 1.75rem (28px) | h1 only |
| section | 1.125rem (18px) | h2, subtitle |
| body | 1rem (16px) | body text, h3 |
| code | 0.875rem (14px) | commands, buttons, links |
| output | 0.8rem (12.8px) | output code |
| small | 0.75rem (12px) | copy button label |

Line-height: body=1.6 | headings=1.2. No letter-spacing. No bold. No italic.
Hierarchy by color, not size: `#fff` > `#999` > `#777`.

### Headings
h1: 1.75rem / 500 / `#fff` (one per page) | h2: 1.125rem / 500 / `#fff` (mb 16px) | h3: 1rem / 500 / `#fff` (mb 8px)
CTA h2 exception: `#999` / 500 (deliberately muted). No h4-h6. Never skip levels.

### Spacing
Base unit: 4px

| Value | Usage |
|-------|-------|
| 4px | Micro spacing |
| 8px | Button v-pad, step h3 mb, copy btn pad |
| 12px | Nav gap, paragraph mb, marker width |
| 16px | Section h2 mb, code block mb, code v-pad |
| 20px | Code h-pad |
| 24px | Page h-pad, CTA h2 mb, link row gap |
| 32px | Subtitle mb, top nav pad |
| 40px | Step mb, CTA pad-top, nav pad-right |
| 72px | Section mb |
| 80px | Page top pad, nav top offset |
| 120px | Page bottom pad |

### Shape
Radius: buttons=4px | code blocks=8px | structural=0px. Border: always 1px.
Button emboss: `border: 1px solid #1a1a1a` + `box-shadow: inset 0 1px 0 #3a3a3a` + `background: linear-gradient(to bottom, #2a2a2a, #222)`. No drop shadows anywhere.

### Motion
All transitions: `0.15s ease`. No exceptions. No entrance animations. No spatial movement (no position/size/layout changes).
Animates: color, opacity, background on hover/active only.
Smooth scroll: `html { scroll-behavior: smooth }` for anchors only.

### Layout
Grid: `grid-template-columns: 1fr minmax(0, 640px) 1fr` | padding: `80px 24px 120px`
Breakpoint: `max-width: 960px` -> `display: block`, hide section-nav, `main { max-width: 640px; margin: 0 auto }`
Dark mode only. Single density. No color mode switching. No hero banners or full-width sections.

### Components
**Button**: `padding: 8px 16px` | 0.875rem/600 `#e0e0e0` | `linear-gradient(to bottom, #2a2a2a, #222)` | `border: 1px solid #1a1a1a` | `box-shadow: inset 0 1px 0 #3a3a3a` | `border-radius: 4px`. Hover: gradient `#333,#2a2a2a` text `#fff`. Active: gradient `#1e1e1e,#252525` inset `#2a2a2a`. Disabled: flat `#1a1a1a` bg, `#555` text. No outline/ghost variant. Labels: verb-first sentence case.

**Code block**: Command: `bg: #141414` | `border: 1px solid #222` | `border-radius: 8px` | `padding: 16px 20px` | 0.875rem `#e0e0e0`. Output (`.output`): `bg: #0d0d0d` | `border-color: #1a1a1a` | 0.8rem `#777`. Copy btn: `position: absolute; top: 8px; right: 8px` | `bg: #222; border: 1px solid #333` | 0.75rem `#888` | `opacity: 0` -> `1` on `pre:hover`. No syntax highlighting. No line numbers. No language labels.

**Links**: `#666` -> `#fff` on hover. 0.875rem / 400. `text-decoration: none`. No underline ever. No visited. No blue. CTA links: `display: flex; gap: 24px; justify-content: center`.

**Section**: `margin-bottom: 72px`. Hero: h1 + subtitle (mb 32px) + code block. Step (`.step`): mb 40px, paragraphs `#777`. CTA: `text-align: center; padding-top: 40px; border-top: 1px solid #1a1a1a`, h2 `#999`.

**Section nav**: `position: sticky; top: 80px; grid-column: 1`. Links `#444` -> `#999` hover. Active: `#999` + marker `#ff670d`. Gap: 12px. Marker: `*` in monospace, `width: 12px`, `color: transparent` -> `#ff670d` on `.active`. Hidden `<960px`. IntersectionObserver: `rootMargin: '-40% 0px -40% 0px'`.

### Patterns
**Content rhythm**: h2 -> prose -> code block. Always this order. Code follows prose, never precedes.
**Copy to clipboard**: "Copy" -> "Copied" 1500ms text swap. No toast, no icon, no animation. `navigator.clipboard.writeText()`.
**Scroll tracking**: IntersectionObserver on `main > section`, middle 20% viewport, `.active` class toggle on nav links. No scroll event listeners. 1s suppression timeout during programmatic scroll.

### Forbidden
No frameworks (React/Vue/Svelte) | No CSS frameworks (Tailwind/Bootstrap) | No icons | No decorative SVGs/images | No gradients on non-interactive elements | No entrance/exit animations | No parallax | No bold (700) / light (300) | No italic | No underlines on links | No blue links | No multiple accent colors | No tooltips | No h4-h6 | No outline/ghost buttons | No syntax highlighting | No line numbers in code | No screenshots | No analytics | No fonts beyond Geist | No CSS-in-JS | No build system | No modules/bundler

### Tech Stack
Static HTML + vanilla CSS + vanilla JS. No build. No modules. Geist via CDN `<link>`. Deploy: Vercel, output dir: `site/`

### Deep Reference
For full component CSS with all states: `.design/components/*.md`
For full pattern specs with CSS: `.design/patterns/*.md`
For lookbook reference implementations: `.design/lookbook/`
For detailed principles with examples: `.design/principles.md`
For detailed behavior specs: `.design/behaviors.md`
For product context and mental model: `.design/DNA.md`
<!-- dna:end -->

Run `/dna:check` after making UI changes to verify compliance.
