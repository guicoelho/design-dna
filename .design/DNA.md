# Design DNA: Design DNA

> A dark, minimal, technically precise marketing site for a developer tool -- monochrome with orange accent, crafted details, zero decoration.

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

1. **Nothing decorative**: Every visual element serves a function. No gradients for aesthetics, no icons used as decoration. If it doesn't convey information or afford interaction, it doesn't exist. Exception: gradients and inset shadows on buttons communicate physicality -- these are functional depth cues, not decoration. Example: the copy button appears only on hover because it's secondary to reading. Never: hero images, decorative dividers, floating shapes.

2. **Monochrome is the palette, orange is the signal**: The default state of everything is grayscale. Orange appears only to mark the most important interactive element or to draw attention to a key moment. Example: a single orange accent on the primary CTA. Never: orange backgrounds, orange text blocks, multiple accent colors.

3. **Density through restraint**: The site feels dense not because elements are packed tight, but because there's nothing unnecessary. Every word earns its place. Whitespace is generous but purposeful. Example: 72px between sections, 640px max-width -- breathing room, not emptiness. Never: cramped layouts, walls of text, decorative spacing.

4. **The code is the product**: Code blocks are first-class citizens. They get more visual treatment than prose. They're the hero images of this site. Example: styled pre/code blocks with copy buttons, terminal-style presentation. Never: screenshots of code, low-contrast code, code as an afterthought.

5. **Craft in the details**: The site should feel like it was built by someone who cares about the 1% details -- hover states, transition timing, font rendering. These details compound into trust. Example: 0.15s color transitions, copy button fade-in, antialiased text rendering. Never: default browser styles, instant state changes, janky interactions.

---

## 3. Visual Language

### Density & Spacing
- **Base unit**: 4px
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 72, 80, 120
- **Section spacing**: 72px between major sections
- **Page padding**: 80px top, 120px bottom, 24px horizontal
- **Content max-width**: 640px, centered
- **Component internal padding**: code blocks 16px 20px, steps 40px bottom margin
- **Paragraph spacing**: 12px

### Colors

**Backgrounds**:
- `--bg-page`: #0a0a0a (page background)
- `--bg-surface`: #141414 (code blocks, cards)
- `--bg-surface-dim`: #0d0d0d (output/secondary code blocks)
- `--bg-interactive`: #222 (buttons, interactive elements)

**Borders**:
- `--border-default`: #222 (code blocks, dividers)
- `--border-dim`: #1a1a1a (subtle dividers, output blocks)
- `--border-interactive`: #333 (interactive element borders)

**Text**:
- `--text-primary`: #fff (headings, important labels)
- `--text-body`: #999 (body text, descriptions)
- `--text-dim`: #777 (secondary text, step descriptions, output)
- `--text-muted`: #666 (links in default state, tertiary text)
- `--text-code`: #e0e0e0 (code text)

**Accent**:
- `--accent`: #ff670d (orange -- used sparingly, only for primary CTA or key moments)
- `--accent-hover`: #ff7a2e (orange hover state)

**Interactive states**:
- Default link text: #666, hover: #fff
- Button text: #e0e0e0 default, #fff hover
- Button background: gradient shift on hover, invert on active
- No focus ring -- interactions are color-shift and gradient-shift only

### Typography

**Font families**:
- `--font-body`: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
- `--font-mono`: "Geist Mono", "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace

**Philosophy**: Hierarchy is expressed through color contrast, not size and weight. Headings are close to body size, medium weight. The #fff / #999 / #777 color steps do the structural work. Never use bold (700) for headings.

**Scale**:
- Display/h1: 1.75rem (28px), weight 500
- Section heading/h2: 1.125rem (18px), weight 500
- Step heading/h3: 1rem (16px), weight 500
- Subtitle: 1.125rem (18px), weight 400
- Body: 1rem (16px), weight 400
- Code: 0.875rem (14px), weight 400
- Small/labels: 0.75rem (12px), weight 400
- Output code: 0.8rem (12.8px), weight 400

**Line height**: 1.6 for body text. Headings use tighter line-height (1.2).

**Rendering**: `-webkit-font-smoothing: antialiased` always.

### Radius
- Buttons: 4px (small, sharp, technical)
- Copy button: 4px
- Code blocks: 8px
- No radius on sections or the page itself
- Philosophy: sharp and technical. Radius is functional (softening edges), never decorative.

### Shadows & Elevation
- No box-shadows on layout elements. Elevation is communicated through background color steps (#0a0a0a -> #141414 -> #222).
- Border is the primary separation mechanism, not shadow.
- **Exception**: Buttons use `inset 0 1px 0 #3a3a3a` as part of the embossed double-border technique. This is structural, not decorative.

### Motion & Animation
- **Smooth scrolling**: `html { scroll-behavior: smooth }` -- anchor navigation scrolls smoothly, never jumps.
- **Default transition**: 0.15s on color and opacity
- **Easing**: ease (CSS default) for simple transitions
- **What animates**: link/button color on hover, copy button opacity on hover
- **What doesn't animate**: layout, position, size. Nothing moves spatially.
- **No entrance animations**: content is present immediately. No fade-ins, no scroll-triggered reveals.

### Iconography
- No icons. The site uses zero icons. Text and code do all the work.
- If icons are ever needed: Lucide, 16px, stroke only, #666 default / #fff on hover.

### Copy & Tone
- **Voice**: Direct, confident, slightly provocative. Speaks to practitioners who have taste and know it.
- **Sentence structure**: Short. Declarative. Occasional fragment for rhythm.
- **Button labels**: Verb-first, lowercase ("copy", not "Copy to Clipboard")
- **Case**: Sentence case for headings. No title case except the product name "Design DNA".
- **Forbidden**: emojis, exclamation marks, "we're excited", "powerful", "seamless", "leverage", corporate speak of any kind.
- **Error messages**: Terse, factual. State what happened, not how sorry you are.
- **Example**: "You have taste. Now your AI does too." -- this is the voice.

---

## 4. Component Specs

### Buttons
- **Background**: linear-gradient(to bottom, #2a2a2a, #222) -- subtle gradient for depth
- **Border**: 1px solid #1a1a1a (dark outer edge)
- **Box-shadow**: inset 0 1px 0 #3a3a3a (light inner highlight -- embossed effect)
- **Radius**: 4px
- **Padding**: 8px 16px
- **Font**: inherit, 0.875rem, weight 600 (heavier than body)
- **Color**: #e0e0e0 default, #fff on hover
- **Hover**: gradient lightens to (#333, #2a2a2a)
- **Active**: gradient inverts (#1e1e1e, #252525), shadow dims to #2a2a2a
- **Transition**: background 0.15s, color 0.15s
- **Never**: outline/ghost buttons, icon-only buttons, multiple primary buttons per section

### Links
- **Default**: #666, no underline, font-size 0.875rem
- **Hover**: #fff, no underline
- **Transition**: color 0.15s
- **Never**: underline on hover, color other than gray->white

### Code Blocks (pre > code)
- **Background**: #141414
- **Border**: 1px solid #222
- **Radius**: 8px
- **Padding**: 16px 20px
- **Font**: var(--font-mono), 0.875rem, #e0e0e0
- **Overflow**: overflow-x: auto
- **Position**: relative (for copy button positioning)
- **Margin**: 0 0 16px

### Output Blocks (pre.output)
- **Background**: #0d0d0d
- **Border**: 1px solid #1a1a1a
- **Font size**: 0.8rem
- **Text color**: #777
- Everything else inherits from code blocks

### Copy Button
- **Position**: absolute, top 8px, right 8px
- **Background**: #222
- **Border**: 1px solid #333
- **Color**: #888, font-size 0.75rem
- **Padding**: 2px 8px
- **Radius**: 4px
- **Default state**: opacity 0
- **Hover on parent pre**: opacity 1
- **Hover on button**: color #fff
- **Transition**: opacity 0.15s, color 0.15s
- **Label**: "Copy" -> "Copied" (1.5s timeout)

### Section Dividers
- 1px solid #1a1a1a
- Used sparingly (only before CTA section)
- No decorative dividers

### Navigation (Top)
- Fixed position, top-right
- Padding: 24px 32px
- Contains an embossed button (`.btn` spec) linking to GitHub
- z-index: 10

### Section Nav (Left Sidebar)
- Sticky, left side, aligned to content grid column 1
- Top offset: 80px (aligns with page padding-top)
- Padding-right: 40px (gap from content)
- **Links**: #444 default, #999 on hover and active. No underline. 1rem. 0.15s color transition.
- **Marker** (`*`): Monospace asterisk, 12px wide, transparent by default. On active section: #ff670d (orange accent).
- **Active tracking**: Scroll listener checks each section's position against 40% of viewport height. The last section whose top has crossed above that point is active. During click-navigation, tracking is suppressed for 1s to prevent scroll-through interference.
- **Gap**: 12px between nav items
- **Responsive**: Hidden below 960px via `display: none`. Page falls back to single-column block layout.
- **Labels**: Short, lowercase section names ("The problem", "How it works", "Output", "Get started"). The hero section has no nav entry -- the nav begins at the first content section.

---

## 5. Patterns

### Page Layout
- Single column, centered
- max-width: 640px
- margin: 0 auto
- padding: 80px 24px 120px
- Sections stacked vertically with 72px gap

### Content Hierarchy
- Section heading (h2) introduces the concept
- Body text (p) explains in 1-3 short paragraphs
- Code block demonstrates the command or output
- This pattern repeats: heading -> prose -> code

### Call to Action
- Centered text alignment
- Separated from content by 1px border-top with 40px padding-top
- Heading in lighter weight (500) and muted color (#999) -- the CTA heading is deliberately quieter than section headings
- Code block as the CTA (the install command)
- Supporting links below in a flex row with 24px gap

### Code as Demonstration
- Every feature is demonstrated with a code block, not a screenshot or illustration
- Commands shown as single-line: `npx design-dna`
- Output shown as multi-line blocks with the `.output` variant
- The code block IS the visual -- it replaces what would be a hero image or product screenshot in other sites

### Interaction: Copy to Clipboard
- Copy button hidden by default (opacity 0)
- Revealed on parent hover (opacity 1)
- Click copies code content to clipboard via navigator.clipboard API
- Button text changes to "Copied" for 1.5s, then reverts
- Applied to all pre elements via a single script block

### Responsive
- Content max-width handles large screens
- 24px horizontal padding handles small screens
- No breakpoint-specific layout changes -- the single-column, narrow layout works at all sizes
- Code blocks use overflow-x: auto for horizontal scroll on narrow screens

---

## 6. Signature Components

### Terminal-Style Code Blocks
The code blocks are the signature element of this site. They serve as both documentation and visual identity. Unlike typical marketing sites that use screenshots or illustrations, Design DNA uses styled code blocks as its primary visual content. The dark surface (#141414) against the darker page (#0a0a0a) creates subtle depth. The copy button reveal on hover signals craft. The output variant (#0d0d0d, #777 text) distinguishes between "what you type" and "what you see" -- a terminal metaphor that resonates with the developer audience.

---

## 7. Tech Stack & Libraries

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

## 8. References

- **Devouring Details (devouringdetails.com)**: Dark monochrome palette, orange accent color, Radix gray scale, meticulous hover states, code-block-forward presentation, 0.15s default transitions, `ease-swift` motion curve
- **Uncommon (unc.mn)**: Dark editorial confidence, generous spacing, large body text, card surfaces on gray2, clean responsive scaling, waitlist-style inputs
- **Linear**: Technical density without clutter, developer-tool aesthetic, dark theme craft, keyboard-first sensibility
- **Vercel**: Dark marketing page execution, monochrome + single accent, code-as-hero pattern, Geist typography, terminal aesthetic
