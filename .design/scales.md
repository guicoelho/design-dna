# Scales & Systems

System-level rules that govern how primitives adapt across contexts.

---

## Responsive

### Breakpoints

| Name | Value | Behavior |
|------|-------|----------|
| narrow | max-width: 960px | Collapse to single-column, hide section nav |

Single breakpoint. The narrow content column (640px max) and generous padding handle most screen sizes without media queries.

### Strategy

Desktop-first. The default layout is a 3-column CSS grid. Below 960px, it falls back to `display: block` with centered content.

### What Changes at the Breakpoint

| Property | Wide (>960px) | Narrow (<=960px) |
|----------|---------------|-------------------|
| Layout | CSS grid, 3 columns | Block, single column |
| Section nav | Visible, sticky left sidebar | Hidden (`display: none`) |
| Content | Grid column 2, auto-centered | `max-width: 640px; margin: 0 auto` |
| Typography | No change | No change |
| Spacing | No change | No change |
| Code blocks | `overflow-x: auto` | Same -- horizontal scroll on narrow screens |

Typography and spacing do not change between breakpoints. The narrow layout simply removes the side columns.

---

## Grid

### Columns

| Breakpoint | Columns | Definition |
|-----------|---------|------------|
| Wide (>960px) | 3 | `grid-template-columns: 1fr minmax(0, 640px) 1fr` |
| Narrow (<=960px) | 1 | Block layout, no grid |

### Gutters

No explicit gutter. The `1fr` side columns create natural spacing. The section nav uses `padding-right: 40px` as its gap from content.

### Margins

| Direction | Value |
|-----------|-------|
| Horizontal | 24px (page padding) |
| Top | 80px |
| Bottom | 120px |

### Max Width

`640px` for the content column. No max-width on the overall page -- the grid handles centering.

### Usage

Loose. The grid serves the specific page layout (nav + content + empty). Components inside the content column use their own spacing, not grid alignment.

---

## Density

### Default Mode

Single mode -- neither compact nor spacious. Dense because nothing is unnecessary, not because elements are packed tight (Principle 3: "Density through restraint").

### Modes Available

None. No compact/comfortable/spacious toggle. One density for all contexts.

### What Density Affects

Not applicable -- single density mode.

---

## Color Modes

### Supported Modes

Dark only. No light mode, no high-contrast mode, no system-preference detection.

### Mapping Strategy

Not applicable -- single mode. All color values are absolute, not semantic aliases that swap between modes.
