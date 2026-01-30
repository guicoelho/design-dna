# Design DNA: Design DNA

> A dark, minimal, technically precise marketing site for a developer tool -- warm monochrome with orange accent, terminal UI vibe, crafted details, zero decoration.

This file is the index for the `.design/` directory. It frames the design DNA at a high level and points to detailed specs elsewhere. **Read the linked files for implementation details.**

### Directory structure

```
.design/
  DNA.md              <- You are here. Overview and index.
  principles.md       <- Design principles with examples and counter-examples
  primitives.md       <- Color, typography, spacing, sizing, shape, elevation, motion
  scales.md           <- Responsive, grid, density, color modes
  semantics.md        <- Semantic mappings and usage rules
  behaviors.md        <- Interaction feedback, motion patterns, state communication
  components/         <- Per-component specs with CSS
    button.md
    code-block.md
    links.md
    section.md
    section-nav.md
  patterns/           <- Recurring layout and interaction patterns
    page-layout.md
    content-hierarchy.md
    interaction.md
```

---

## 1. Product Mental Model

### What is this product?
Design DNA is an npm package that installs slash commands into Claude Code projects. It lets designers and developers encode their design taste -- principles, visual language, component specs -- into structured files that Claude reads before generating any UI. The marketing site at design-dna.dev is the public face: it explains the tool, demonstrates its value, and drives installs.

### Information Architecture
Single-page marketing site. Linear scroll: hero, problem statement, how it works (4 steps), what gets generated, CTA. No sub-pages, no routing. The entire story is told in one vertical flow.

### Core Objects
- **Commands**: The four slash commands (`/dna:init`, `/dna:check`, `/dna:update`, `/dna:help`) are the product's core concept
- **DNA**: The `.design/` directory output -- the encoded taste
- **Drift**: The concept of code diverging from DNA -- what `/dna:check` detects

### Navigation Model
Two navigation elements:
- **Top nav**: Fixed top-right. Contains a single embossed button linking to GitHub.
- **Section nav**: Sticky left sidebar showing section labels with an asterisk (`*`) marker. The active section (tracked via IntersectionObserver) shows an orange asterisk. Hidden on screens under 960px.

The primary model is linear scroll. The section nav provides orientation without disrupting the flow.

---

## 2. Design Principles

5 principles govern every decision. Ordered by priority. When in doubt, these are the tiebreaker.

1. **Nothing decorative** -- Every visual element serves a function. No gradients for aesthetics, no icons as decoration.
2. **Warm monochrome is the palette, orange is the signal** -- Default state is warm grayscale. Orange marks the single most important moment.
3. **Density through restraint** -- Dense because nothing is unnecessary, not because things are packed tight.
4. **The code is the product** -- Code blocks are first-class citizens, the hero images of this site.
5. **Craft in the details** -- Hover states, transition timing, font rendering compound into trust.

-> Full principles with examples, exceptions, and counter-examples: **[principles.md](principles.md)**

---

## 3. Primitives

The foundational design values that everything else references. Hand-picked warm dark grayscale with a single orange accent. Geist Mono for everything. 4px base spacing unit. Sharp, technical radii. Elevation through background color, not shadow. 0.15s universal transition.

-> Full primitive definitions: **[primitives.md](primitives.md)**

---

## 4. Scales & Systems

Single breakpoint at 960px (desktop-first). 3-column CSS grid with 640px content column. Dark mode only, no color mode switching. Single density -- dense through restraint, not variants.

-> Full scale definitions: **[scales.md](scales.md)**

---

## 5. Semantics

Hierarchy through color contrast (#fff / #a09b96 / #7e7974), not size or weight. Orange reserved for a single accent moment. Elevation expressed via background color steps (#12100e -> #191513 -> #272320). Text, border, and surface assignments map to specific functional roles.

-> Full semantic mappings: **[semantics.md](semantics.md)**

---

## 6. Components

Detailed specs with CSS for each component. **Read the linked files for full specs -- do not rely on this summary.**

- **[Button](components/button.md)** -- Embossed gradient with double-border technique, 4px radius, 0.15s transitions
- **[Code Block](components/code-block.md)** -- Terminal-style with copy button, command and output variants
- **[Links](components/links.md)** -- Gray (#6d6863) to white (#fff) on hover, no underline, ever
- **[Section](components/section.md)** -- Structural unit with 72px spacing, hero/step/CTA variants
- **[Section Nav](components/section-nav.md)** -- Sticky left sidebar with orange asterisk active marker

---

## 7. Patterns

Recurring layout and interaction patterns. **Read the linked files for full specs.**

- **[Page Layout](patterns/page-layout.md)** -- 3-column CSS grid, 640px content, collapses to single column at 960px
- **[Content Hierarchy](patterns/content-hierarchy.md)** -- Heading -> prose -> code block rhythm, hierarchy through color
- **[Interaction](patterns/interaction.md)** -- Hover states, copy-to-clipboard, scroll-based active tracking

---

## 8. Behaviors

All transitions 0.15s. No entrance animations. No spatial movement. Hover = color/opacity change only. Copy feedback via text swap ("Copied"), not animation. Scroll tracking via IntersectionObserver, not scroll events. Static site -- no loading, error, or validation patterns needed currently.

-> Full behavior specs: **[behaviors.md](behaviors.md)**

---

## 9. Signature Components

### Terminal-Style Code Blocks
The code blocks are the signature element of this site. They serve as both documentation and visual identity. Unlike typical marketing sites that use screenshots or illustrations, Design DNA uses styled code blocks as its primary visual content. The dark surface (#191513) against the darker page (#12100e) creates subtle depth. The copy button reveal on hover signals craft. The output variant (#151210, #7e7974 text) distinguishes between "what you type" and "what you see" -- a terminal metaphor that resonates with the developer audience.

---

## 10. Tech Stack & Libraries

### Required Libraries
- **Font**: Geist and Geist Mono (loaded via `<link>` from CDN or self-hosted)
- **No framework**: Static HTML + vanilla CSS + vanilla JS
- **No build system**: Files served directly
- **Deployment**: Vercel (static, output directory: `site/`)

### Import Conventions
- CSS loaded via `<link rel="stylesheet" href="/styles.css">`
- No CSS preprocessor, no PostCSS, no Tailwind
- JavaScript inline in `<script>` tags at bottom of body
- No modules, no bundler

### Forbidden
- No JavaScript frameworks (React, Vue, Svelte)
- No CSS frameworks (Tailwind, Bootstrap)
- No icon libraries
- No analytics scripts (unless explicitly added later)
- No web fonts beyond Geist
- No CSS-in-JS
- No decorative images or SVGs

---

## 11. References

Products or interfaces that inform this product's direction, and what to take from each.

- **Devouring Details (devouringdetails.com)**: Dark monochrome palette, orange accent color, Radix gray scale, meticulous hover states, code-block-forward presentation, 0.15s default transitions, `ease-swift` motion curve
- **Uncommon (unc.mn)**: Dark editorial confidence, generous spacing, large body text, card surfaces on gray2, clean responsive scaling, waitlist-style inputs
- **Linear**: Technical density without clutter, developer-tool aesthetic, dark theme craft, keyboard-first sensibility
- **Vercel**: Dark marketing page execution, monochrome + single accent, code-as-hero pattern, Geist typography, terminal aesthetic
