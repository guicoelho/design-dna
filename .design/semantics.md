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
| Page | `--bg-page` | #0a0a0a |
| Surface (raised) | `--bg-surface` | #141414 |
| Surface (recessed) | `--bg-surface-dim` | #0d0d0d |
| Interactive | `--bg-interactive` | #222 |

#### Borders
| Role | Variable | Value |
|------|-------|-------|
| Default | `--border-default` | #222 |
| Dim | `--border-dim` | #1a1a1a |
| Interactive | `--border-interactive` | #333 |

#### Text
| Role | Variable | Value | Usage |
|------|-------|-------|-------|
| Primary | `--text-primary` | #fff | Headings, important labels, hover states |
| Body | `--text-body` | #999 | Body text, descriptions |
| Dim | `--text-dim` | #777 | Secondary text, step descriptions, output code |
| Muted | `--text-muted` | #666 | Links (default), tertiary text |
| Code | `--text-code` | #e0e0e0 | Code text, button text |
| Disabled | -- | #555 | Disabled elements |

### Interactive Colors

| Role | Variable | Value |
|------|-------|-------|
| Link default | -- | #666 |
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
| 3 | h3 | 1rem | 500 | #fff | Sub-section headings (steps) |

Only 3 levels used. h4-h6 are not part of the system. If content requires deeper nesting, restructure instead of adding heading levels.

CTA exception: the CTA section's h2 uses `color: #999` and `font-weight: 500` -- deliberately quieter than standard h2.

### Body Variants

| Variant | Size | Weight | Color | Line Height | Usage |
|---------|------|--------|-------|-------------|-------|
| Default | 1rem | 400 | #999 | 1.6 | Body paragraphs |
| Subtitle | 1.125rem | 400 | #999 | 1.6 | Hero subtitle |
| Dim | 1rem | 400 | #777 | 1.6 | Step descriptions, secondary prose |

### UI Text

| Type | Size | Weight | Color | Usage |
|------|------|--------|-------|-------|
| Button label | 0.875rem | 600 | #e0e0e0 | Button text |
| Link | 0.875rem | 400 | #666 | Navigation links, CTA links |
| Copy button | 0.75rem | 400 | #888 | Copy/Copied label |
| Nav label | 1rem | 400 | #444 | Section nav entries |

### Code Usage

| Context | Font | Size | Color | Usage |
|---------|------|------|-------|-------|
| Command code | Geist Mono | 0.875rem | #e0e0e0 | Commands the user types |
| Output code | Geist Mono | 0.8rem | #777 | What the user sees after a command |
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
| -1 | Recessed | #0d0d0d | Content that is subordinate (output blocks) |
| 0 | Page | #0a0a0a | The base layer -- the page itself |
| 1 | Surface | #141414 | Content containers (code blocks) |
| 2 | Interactive | #222 | Interactive elements (buttons, copy button) |
| 3 | Highlight | #333 | Interactive element borders, hover states |

### Component-to-Elevation Mapping

| Component | Elevation Level | Background |
|-----------|----------------|------------|
| Page | 0 | #0a0a0a |
| Output code block | -1 | #0d0d0d |
| Command code block | 1 | #141414 |
| Button | 2 (gradient) | #2a2a2a -> #222 |
| Copy button | 2 | #222 |
| Button border | 1 | #1a1a1a |
| Code block border | 2 | #222 |
| Section nav | 0 (transparent) | inherits page |
| Dividers | between 0 and 1 | #1a1a1a |
