# Primitives

The foundational design values. Every component and pattern references these.

---

## Color

### Palette

Single accent hue. Everything else is grayscale.

| Name | Value | Usage |
|------|-------|-------|
| Orange | #ff670d | Primary accent -- reserved for one key moment |
| Orange hover | #ff7a2e | Accent hover state |

### Neutral Scale

Hand-picked warm grayscale. Not algorithmically generated -- each step is chosen for a specific role.

| Step | Value | Role |
|------|-------|------|
| black-1 | #12100e | Page background |
| black-2 | #151210 | Recessed surfaces (output code blocks) |
| black-3 | #191513 | Raised surfaces (code blocks, cards) |
| black-4 | #1e1a18 | Subtle borders, dim dividers |
| black-5 | #272320 | Default borders, interactive backgrounds |
| black-6 | #2e2a27 | Button gradient dark end |
| black-7 | #38332f | Interactive borders, button gradient light end (hover) |
| black-8 | #3f3a36 | Button inner highlight (inset shadow) |
| gray-1 | #4a4541 | Inactive nav links |
| gray-2 | #5c5752 | Disabled text |
| gray-3 | #6d6863 | Muted text, default link color |
| gray-4 | #7e7974 | Dim text, step descriptions, output text |
| gray-5 | #8f8a85 | Copy button text |
| gray-6 | #a09b96 | Body text, secondary text |
| light-1 | #e7e4e1 | Code text, button text |
| white | #fff | Primary text, headings, hover text |

### Generation Method

Hand-picked warm tones. Each value is chosen for a specific use case in the warm dark palette. Not derived from a mathematical scale.

---

## Typography

### Font Families

| Role | Family | Fallback Stack |
|------|--------|----------------|
| All text | Geist Mono | "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace |

Single font family. Everything is monospace.

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, subtitles, code, labels |
| Medium | 500 | Headings (h1, h2, h3) |
| Semi-bold | 600 | Button labels only |

Never use bold (700) or light (300).

### Base Size

`1rem` (16px) root. Body text uses `0.9375rem` (15px). No scaling via viewport units.

### Type Scale

Custom steps, not ratio-based.

| Name | Size | px equivalent |
|------|------|---------------|
| display | 1.75rem | 28px |
| section | 1.125rem | 18px |
| body | 0.9375rem | 15px |
| code | 0.875rem | 14px |
| output | 0.8rem | 12.8px |
| small | 0.75rem | 12px |

### Line Heights

| Context | Value |
|---------|-------|
| Body text | 1.6 |
| Headings | 1.2 |
| Code | inherited (1.6) |

### Letter Spacing

No letter-spacing adjustments. All text uses default tracking.

### Paragraph Spacing

`12px` (margin-bottom) between paragraphs.

---

## Spacing

### Base Unit

`4px`

### Scale

Custom -- not strictly linear or geometric. Built for the specific layout needs of a single-page marketing site.

| Step | Value | Common Usage |
|------|-------|-------------|
| 1 | 4px | Micro spacing |
| 2 | 8px | Copy button padding, step heading margin-bottom, icon offset |
| 3 | 12px | Nav item gap, paragraph margin, marker width |
| 4 | 16px | Section heading margin-bottom, code block margin-bottom, code block vertical padding |
| 5 | 20px | Code block horizontal padding |
| 6 | 24px | Page horizontal padding, CTA heading margin-bottom, link row gap |
| 8 | 32px | Subtitle margin-bottom, top nav padding |
| 10 | 40px | Step margin-bottom, CTA padding-top, section nav padding-right |
| 12 | 48px | (available, unused currently) |
| 18 | 72px | Section spacing |
| 20 | 80px | Page top padding, section nav top offset |
| 30 | 120px | Page bottom padding |

---

## Sizing

### Component Size Scale

Single size. No sm/md/lg variants. Components have one size, chosen for the specific context.

| Component | Dimensions |
|-----------|-----------|
| Button | 8px 16px padding (height determined by content + padding) |
| Copy button | 2px 8px padding |
| Code block | Full-width, height by content |
| Section nav marker | 12px width |

### Icon Sizes

No icons. The site uses zero icons. If icons are ever needed: 16px, stroke-only style.

### Touch Targets

Not explicitly defined -- this is a desktop-first marketing site. Buttons and links have sufficient padding for mouse targets. Minimum interactive area is the copy button at ~24px height.

---

## Shape

### Border Radius Scale

| Context | Value | Rationale |
|---------|-------|-----------|
| Buttons | 4px | Small, sharp, technical |
| Copy button | 4px | Matches button radius |
| Code blocks | 8px | Slightly softer -- these are content containers |
| Sections / page | 0px | No radius on structural elements |

### Border Width Scale

| Name | Value | Usage |
|------|-------|-------|
| default | 1px | All borders -- code blocks, buttons, dividers, section nav |

Single border width. No hairline, thick, or double borders (the button "double border" effect is achieved via `border` + `box-shadow: inset`, not actual border width).

### Philosophy

Sharp and technical. Radius is functional (softening code block edges), never decorative. The 4px button radius says "tool"; a 12px radius would say "friendly app" -- wrong signal.

---

## Elevation

### Shadow Definitions

| Name | Value | Usage |
|------|-------|-------|
| button-highlight | inset 0 1px 0 #3f3a36 | Button inner highlight (embossed effect) |
| button-highlight-pressed | inset 0 1px 0 #2e2a27 | Button pressed state (dimmed highlight) |

### Number of Levels

No traditional elevation levels. There are no drop shadows on any element.

### Usage Philosophy

Elevation is communicated through **background color steps**, not shadows:
- Level 0 (page): #12100e
- Level 1 (recessed): #151210
- Level 2 (raised surface): #191513
- Level 3 (interactive): #272320

Borders (`1px solid #272320` or `#1e1a18`) are the primary separation mechanism, not shadow. The only `box-shadow` usage is the button emboss -- a structural depth cue, not an elevation indicator.

---

## Motion

### Duration Scale

| Name | Value | Usage |
|------|-------|-------|
| default | 0.15s | All transitions -- hover, opacity, color |

Single duration. No fast/slow variants. Everything transitions at 0.15s.

### Easing Functions

| Name | Value | Usage |
|------|-------|-------|
| default | ease | All transitions |

Single easing. CSS default `ease` for all.

### Motion Philosophy

Motion is minimal and functional:
- **What animates**: color, opacity, background (on hover/active)
- **What does not animate**: position, size, layout. Nothing moves spatially.
- **No entrance animations**: content is present immediately. No fade-ins, no scroll-triggered reveals.
- **Smooth scrolling**: `html { scroll-behavior: smooth }` for anchor navigation only.
- Motion exists to signal interactivity, not to entertain.
