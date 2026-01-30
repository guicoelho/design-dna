# Design System

This project uses DESIGN DNA for design system enforcement.

<!-- dna:begin -->
## Design DNA Reference

> Dark, minimal, technically precise marketing site for a developer tool. Warm monochrome + single orange accent. Geist Mono for everything. Terminal UI vibe. Zero decoration. Static HTML/CSS/JS.

### Principles
1. Nothing decorative -- every element serves a function
2. Warm monochrome palette, orange is the signal -- warm grayscale default, orange marks one key moment only
3. Density through restraint -- dense because nothing is unnecessary, not packed tight
4. Code is the product -- code blocks are hero images, not screenshots
5. Craft in the details -- 0.15s transitions, antialiased text, consistent borders compound into trust

### Colors

Accent: `#ff670d` (primary CTA, active nav marker) | hover: `#ff7a2e`

| Step | Hex | Role |
|------|-----|------|
| black-1 | `#12100e` | Page bg |
| black-2 | `#151210` | Recessed surfaces (output code blocks) |
| black-3 | `#191513` | Raised surfaces (code blocks, cards) |
| black-4 | `#1e1a18` | Dim borders, dividers |
| black-5 | `#272320` | Default borders, interactive bg |
| black-6 | `#2e2a27` | Button gradient dark end |
| black-7 | `#38332f` | Interactive borders, button gradient light (hover) |
| black-8 | `#3f3a36` | Button inset highlight |
| gray-1 | `#4a4541` | Inactive nav links |
| gray-2 | `#5c5752` | Disabled text |
| gray-3 | `#6d6863` | Muted text, default link color |
| gray-4 | `#7e7974` | Dim text, step descriptions, output code |
| gray-5 | `#8f8a85` | Copy button text |
| gray-6 | `#a09b96` | Body text, secondary text |
| light-1 | `#e7e4e1` | Code text, button text |
| white | `#fff` | Primary text, headings, hover states |

### Semantic Colors
Bg: page=`#12100e` | surface=`#191513` | recessed=`#151210` | interactive=`#272320`
Borders: default=`#272320` | dim=`#1e1a18` | interactive=`#38332f`
Text: primary=`#fff` | body=`#a09b96` | dim=`#7e7974` | muted=`#6d6863` | code=`#e7e4e1` | disabled=`#5c5752`
Links: `#6d6863` -> `#fff` on hover. No underline. No visited. No blue.
Nav links: `#4a4541` -> `#a09b96` on hover. Active: `#a09b96` text + `#ff670d` marker.
Elevation (via bg, not shadow): recessed=`#151210` | page=`#12100e` | surface=`#191513` | interactive=`#272320` | highlight=`#38332f`

### Typography
All text: `"Geist Mono", "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace`
Weights: 400=body/code/labels | 500=headings | 600=button labels only. Never 300 or 700.
Base: 1rem (16px) root, body text 0.9375rem (15px). No viewport scaling.

| Name | Size | Use |
|------|------|-----|
| display | 1.75rem (28px) | h1 only |
| section | 1.125rem (18px) | h2, subtitle |
| body | 0.9375rem (15px) | body text, h3 |
| code | 0.875rem (14px) | commands, buttons, links |
| output | 0.8rem (12.8px) | output code |
| small | 0.75rem (12px) | copy button label |

Line-height: body=1.6 | headings=1.2. No letter-spacing. No bold. No italic.
Hierarchy by color, not size: `#fff` > `#a09b96` > `#7e7974`.

### Headings
h1: 1.75rem / 500 / `#fff` (one per page) | h2: 1.125rem / 500 / `#fff` (mb 16px) | h3: 0.9375rem / 500 / `#fff` (mb 8px)
CTA h2 exception: `#a09b96` / 500 (deliberately muted). No h4-h6. Never skip levels.

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
Button emboss: `border: 1px solid #1e1a18` + `box-shadow: inset 0 1px 0 #3f3a36` + `background: linear-gradient(to bottom, #2e2a27, #272320)`. No drop shadows anywhere.

### Motion
All transitions: `0.15s ease`. No exceptions. No entrance animations. No spatial movement (no position/size/layout changes).
Animates: color, opacity, background on hover/active only.
Smooth scroll: `html { scroll-behavior: smooth }` for anchors only.

### Layout
Grid: `grid-template-columns: 1fr minmax(0, 640px) 1fr` | padding: `80px 24px 120px`
Breakpoint: `max-width: 960px` -> `display: block`, hide section-nav, `main { max-width: 640px; margin: 0 auto }`
Dark mode only. Single density. No color mode switching. No hero banners or full-width sections.

### Components
**Button**: `padding: 8px 16px` | 0.875rem/600 `#e7e4e1` | `linear-gradient(to bottom, #2e2a27, #272320)` | `border: 1px solid #1e1a18` | `box-shadow: inset 0 1px 0 #3f3a36` | `border-radius: 4px`. Hover: gradient `#38332f,#2e2a27` text `#fff`. Active: gradient `#211e1b,#292623` inset `#2e2a27`. Disabled: flat `#1e1a18` bg, `#5c5752` text. No outline/ghost variant. Labels: verb-first sentence case.

**Code block**: Command: `bg: #191513` | `border: 1px solid #272320` | `border-radius: 8px` | `padding: 16px 20px` | 0.875rem `#e7e4e1`. Output (`.output`): `bg: #151210` | `border-color: #1e1a18` | 0.8rem `#7e7974`. Copy btn: `position: absolute; top: 8px; right: 8px` | `bg: #272320; border: 1px solid #38332f` | 0.75rem `#8f8a85` | `opacity: 0` -> `1` on `pre:hover`. No syntax highlighting. No line numbers. No language labels.

**Links**: `#6d6863` -> `#fff` on hover. 0.875rem / 400. `text-decoration: none`. No underline ever. No visited. No blue. CTA links: `display: flex; gap: 24px; justify-content: center`.

**Section**: `margin-bottom: 72px`. Hero: h1 + subtitle (mb 32px) + code block. Step (`.step`): mb 40px, paragraphs `#7e7974`. CTA: `text-align: center; padding-top: 40px; border-top: 1px solid #1e1a18`, h2 `#a09b96`.

**Section nav**: `position: sticky; top: 80px; grid-column: 1`. Links `#4a4541` -> `#a09b96` hover. Active: `#a09b96` + marker `#ff670d`. Gap: 12px. Marker: `*` in monospace, `width: 12px`, `color: transparent` -> `#ff670d` on `.active`. Hidden `<960px`. IntersectionObserver: `rootMargin: '-40% 0px -40% 0px'`.

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
For detailed principles with examples: `.design/principles.md`
For detailed behavior specs: `.design/behaviors.md`
For product context and mental model: `.design/DNA.md`
<!-- dna:end -->

Run `/dna:check` after making UI changes to verify compliance.
