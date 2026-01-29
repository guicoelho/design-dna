# Pattern: Content Hierarchy

Every section on the site follows the same rhythm: heading, prose, code. This consistency makes the page scannable and predictable.

Hierarchy is expressed through color contrast, not size and weight. Headings are close to body size, medium weight (500). The color steps -- #fff, #999, #777 -- do the structural work.

---

## The Pattern

```
h2 (section heading)
p  (1-3 short paragraphs explaining the concept)
pre > code (demonstrating the command or output)
```

## Text Hierarchy

| Level | Element | Size | Weight | Color | Use |
|-------|---------|------|--------|-------|-----|
| 1 | h1 | 1.75rem | 500 | #fff | Page title only |
| 2 | h2 | 1.125rem | 500 | #fff | Section headings |
| 3 | h3 | 1rem | 500 | #fff | Step headings |
| 4 | .subtitle | 1.125rem | 400 | #999 | Hero subtitle |
| 5 | p | 1rem | 400 | #999 | Body text |
| 6 | .step p | 1rem | 400 | #777 | Step descriptions (dimmer) |
| 7 | code | 0.875rem | 400 | #e0e0e0 | Commands |
| 8 | .output code | 0.8rem | 400 | #777 | Output text |

## Rules

- Never skip heading levels (h1 -> h3)
- Body text is always #999 except in steps where it's #777
- Code blocks always follow prose, never precede it
- No bold text anywhere. Headings are weight 500, body is 400. Never use 600+ for headings.
- No italic text. The voice is direct, not emphatic.
- Hierarchy comes from color (#fff vs #999 vs #777), not size or weight.
