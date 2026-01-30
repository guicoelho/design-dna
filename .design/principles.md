# Design Principles

These are the unwritten rules that govern every decision on the Design DNA marketing site. When in doubt, these are the tiebreaker. Ordered by priority.

---

## 1. Nothing decorative

Every visual element serves a function. If it doesn't convey information or afford interaction, it doesn't exist.

**In practice:**
- The copy button appears only on hover because it's secondary to reading the code
- Section dividers are 1px borders, not decorative lines or gradients
- No hero images -- the install command IS the hero

**Exception:**
- Button gradients and inset shadows communicate physicality -- they are functional depth cues that signal "this is pressable," not decoration.

**What this rules out:**
- Illustrations, decorative SVGs, background patterns
- Gradients used for visual interest on non-interactive elements
- Icons used as decoration (bullet points, section markers)
- Animated backgrounds, particle effects, floating elements
- Decorative dividers, ornamental spacing elements

---

## 2. Warm monochrome is the palette, orange is the signal

The default state of everything is warm grayscale. Orange appears only to mark the single most important interactive element or to draw attention to a critical moment.

**In practice:**
- All text is white, #a09b96, #7e7974, or #6d6863
- All backgrounds are #12100e, #191513, or #151210
- All borders are #272320 or #1e1a18
- Orange (#ff670d) is reserved for the primary CTA or a single key moment

**What this rules out:**
- Multiple accent colors
- Colored text for emphasis (use white instead)
- Orange used on backgrounds, borders, or large surfaces
- Colored badges, tags, or status indicators in marketing context
- Blue links -- links are gray (#6d6863) and go white on hover

---

## 3. Density through restraint

The site feels dense because there's nothing unnecessary. Every word, every pixel of spacing, every line of code earns its place.

**In practice:**
- Copy is short and declarative: "Audits code against your DNA. Reports exactly what drifted, where, and why it matters."
- 640px max-width -- content doesn't sprawl
- 72px section gaps give breathing room without feeling empty
- No "learn more" links, no feature grids, no comparison tables

**What this rules out:**
- Long-form marketing copy
- Feature comparison tables
- Testimonial carousels
- "Trusted by" logo bars
- Redundant CTAs
- Filler content to make sections feel "complete"

---

## 4. The code is the product

Code blocks are first-class visual elements. They receive more design attention than prose. They ARE the product screenshots.

**In practice:**
- Every feature is demonstrated with a code block
- Code blocks have dedicated styling: dark surface, subtle border, copy button
- The output variant distinguishes "what you type" from "what you see"
- The install command (`npx design-dna`) is the hero, not a tagline graphic

**What this rules out:**
- Screenshots of terminal output (use styled code blocks instead)
- Product mockups or UI previews
- Video demos in the hero section
- "See it in action" sections with embedded videos

---

## 5. Craft in the details

The 1% details -- transition timing, hover states, font rendering -- compound into trust. A developer tool marketed with sloppy UI undermines its own premise.

**In practice:**
- 0.15s transitions on all color changes -- fast enough to feel instant, slow enough to feel smooth
- Copy button fades in on hover, not snaps
- `-webkit-font-smoothing: antialiased` for crisp text rendering
- "Copied" feedback with 1.5s timeout -- long enough to register, short enough to not linger
- Consistent border colors across all elevated surfaces

**What this rules out:**
- Default browser focus rings without custom styling
- Instant state changes (no transition)
- Inconsistent transition durations across elements
- Mismatched border colors between similar elements
- Aliased text rendering on macOS
