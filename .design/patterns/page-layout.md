# Pattern: Page Layout

The Design DNA site uses a three-column CSS grid on wide screens: section nav, centered content, empty right column. On narrow screens (<960px), it collapses to a single centered column with the section nav hidden.

---

## Structure

```
body
  nav (fixed, top-right — GitHub button)
  div.page-layout (CSS grid)
    aside.section-nav (column 1, sticky)
    main (column 2, centered content)
      section (hero)
      section (problem)
      section (how it works)
      section (what gets generated)
      section (CTA)
```

## Specs

```css
.page-layout {
  display: grid;
  grid-template-columns: 1fr minmax(0, 640px) 1fr;
  padding: 80px 24px 120px;
}

main {
  grid-column: 2;
}

section {
  margin-bottom: 72px;
}

/* Below 960px: collapse to single column */
@media (max-width: 960px) {
  .page-layout {
    display: block;
    padding: 80px 24px 120px;
  }

  .section-nav {
    display: none;
  }

  main {
    max-width: 640px;
    margin: 0 auto;
  }
}
```

## Rules

- Content column is always max 640px, centered via grid
- Section nav occupies grid column 1, right-aligned toward content
- 80px top padding gives the hero room below the fixed nav
- 120px bottom padding ensures the CTA doesn't hug the viewport bottom
- Below 960px, the grid collapses to block layout and section nav hides
- No hero banners, no full-width sections, no edge-to-edge backgrounds
