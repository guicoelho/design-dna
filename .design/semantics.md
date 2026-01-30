# Semantics

How primitives map to meaning. The bridge between raw values and usage.

---

## Color Semantics

### Brand Colors

| Role | Variable | Value | Usage |
|------|-------|-------|-------|
| Accent | `--accent` | #ff670d | Single accent moment -- primary CTA, active section marker |
| Accent hover | `--accent-hover` | #ff7a2e | Hover state for accent elements |

No primary/secondary brand color distinction. The brand is monochrome; orange is a signal, not a brand color.

### Feedback Colors

Not applicable for this product (static marketing site with no forms, no user actions beyond copy-to-clipboard). If feedback colors are needed in the future:

| Role | Variable | Value |
|------|-------|-------|
| Success | -- | (undefined -- define when needed) |
| Warning | -- | (undefined -- define when needed) |
| Error | -- | (undefined -- define when needed) |
| Info | -- | (undefined -- define when needed) |

### Neutral Assignments

#### Backgrounds
| Role | Variable | Value |
|------|-------|-------|
| Page | `--bg-page` | #12100e |
| Surface (raised) | `--bg-surface` | #191513 |
| Surface (recessed) | `--bg-surface-dim` | #151210 |
| Interactive | `--bg-interactive` | #272320 |

#### Borders
| Role | Variable | Value |
|------|-------|-------|
| Default | `--border-default` | #272320 |
| Dim | `--border-dim` | #1e1a18 |
| Interactive | `--border-interactive` | #38332f |

#### Text
| Role | Variable | Value | Usage |
|------|-------|-------|-------|
| Primary | `--text-primary` | #fff | Headings, important labels, hover states |
| Body | `--text-body` | #a09b96 | Body text, descriptions |
| Dim | `--text-dim` | #7e7974 | Secondary text, step descriptions, output code |
| Muted | `--text-muted` | #6d6863 | Links (default), tertiary text |
| Code | `--text-code` | #e7e4e1 | Code text, button text |
| Disabled | -- | #5c5752 | Disabled elements |

### Interactive Colors

| Role | Variable | Value |
|------|-------|-------|
| Link default | -- | #6d6863 |
| Link hover | -- | #fff |
| Focus | -- | No visible focus ring (color-shift only) |
| Selection | -- | Browser default |
| Active (nav marker) | `--accent` | #ff670d |

### Cross-Mode Mapping

Not applicable -- dark mode only.

---

## Typography Semantics

### Heading Levels

| Level | Element | Size | Weight | Color | Usage |
|-------|---------|------|--------|-------|-------|
| 1 | h1 | 1.75rem | 500 | #fff | Page title (one per page) |
| 2 | h2 | 1.125rem | 500 | #fff | Section headings |
| 3 | h3 | 0.9375rem | 500 | #fff | Sub-section headings (steps) |

Only 3 levels used. h4-h6 are not part of the system. If content requires deeper nesting, restructure instead of adding heading levels.

CTA exception: the CTA section's h2 uses `color: #a09b96` and `font-weight: 500` -- deliberately quieter than standard h2.

### Body Variants

| Variant | Size | Weight | Color | Line Height | Usage |
|---------|------|--------|-------|-------------|-------|
| Default | 0.9375rem | 400 | #a09b96 | 1.6 | Body paragraphs |
| Subtitle | 1.125rem | 400 | #a09b96 | 1.6 | Hero subtitle |
| Dim | 0.9375rem | 400 | #7e7974 | 1.6 | Step descriptions, secondary prose |

### UI Text

| Type | Size | Weight | Color | Usage |
|------|------|--------|-------|-------|
| Button label | 0.875rem | 600 | #e7e4e1 | Button text |
| Link | 0.875rem | 400 | #6d6863 | Navigation links, CTA links |
| Copy button | 0.75rem | 400 | #8f8a85 | Copy/Copied label |
| Nav label | 0.9375rem | 400 | #4a4541 | Section nav entries |

### Code Usage

| Context | Font | Size | Color | Usage |
|---------|------|------|-------|-------|
| Command code | Geist Mono | 0.875rem | #e7e4e1 | Commands the user types |
| Output code | Geist Mono | 0.8rem | #7e7974 | What the user sees after a command |
| Inline code | Not used | -- | -- | This site does not use inline `<code>` in prose |

---

## Spacing Semantics

### Component Internal Padding

| Component | Padding | Notes |
|-----------|---------|-------|
| Code block | 16px 20px | Vertical / horizontal |
| Button | 8px 16px | Vertical / horizontal |
| Copy button | 2px 8px | Minimal, secondary |
| CTA section | 40px 0 0 0 | Top padding only (below border) |

### Component External Margins

Components do not set their own external margins except:

| Component | Margin | Direction |
|-----------|--------|-----------|
| Section | 72px | Bottom |
| Step | 40px | Bottom |
| Code block | 16px | Bottom |
| Paragraph | 12px | Bottom |
| Section heading | 16px | Bottom |
| Step heading | 8px | Bottom |
| Subtitle | 32px | Bottom |
| CTA heading | 24px | Bottom |

### Section Spacing

| Between | Spacing |
|---------|---------|
| Sections | 72px (margin-bottom on each section) |
| Page top edge to content | 80px |
| Content to page bottom edge | 120px |
| CTA border to CTA content | 40px |

### Layout Gaps

| Context | Gap |
|---------|-----|
| Section nav items | 12px |
| CTA link row | 24px |
| Section nav to content | 40px (padding-right on nav) |

---

## Elevation Semantics

### Level Meanings

Elevation is expressed through background color, not shadow.

| Level | Name | Background | Meaning |
|-------|------|------------|---------|
| -1 | Recessed | #151210 | Content that is subordinate (output blocks) |
| 0 | Page | #12100e | The base layer -- the page itself |
| 1 | Surface | #191513 | Content containers (code blocks) |
| 2 | Interactive | #272320 | Interactive elements (buttons, copy button) |
| 3 | Highlight | #38332f | Interactive element borders, hover states |

### Component-to-Elevation Mapping

| Component | Elevation Level | Background |
|-----------|----------------|------------|
| Page | 0 | #12100e |
| Output code block | -1 | #151210 |
| Command code block | 1 | #191513 |
| Button | 2 (gradient) | #2e2a27 -> #272320 |
| Copy button | 2 | #272320 |
| Button border | 1 | #1e1a18 |
| Code block border | 2 | #272320 |
| Section nav | 0 (transparent) | inherits page |
| Dividers | between 0 and 1 | #1e1a18 |
