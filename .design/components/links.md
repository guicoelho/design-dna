# Component: Links

Links on the Design DNA site follow a single pattern: gray default, white hover, no underline. This applies universally -- navigation, inline, CTA support links.

---

## Default Link

```css
a {
  color: #6d6863;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.15s;
}

a:hover {
  color: #fff;
}
```

---

## Variants

### Navigation Link
Same as default. Used in the fixed top-right nav.

### Footer/CTA Links
Displayed in a horizontal row. Same color behavior, arranged with flex + gap.

```css
.links {
  display: flex;
  gap: 24px;
  justify-content: center;
}

.links a {
  color: #6d6863;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.15s;
}

.links a:hover {
  color: #fff;
}
```

---

## Usage Rules

- Links never underline, not on default, not on hover
- Links are always #6d6863 -> #fff. No other color transitions.
- No visited state styling
- No blue links, ever
- If a link needs more prominence, it becomes a code block CTA (`pre > code` with the command), not a styled button
- No "arrow" icons or external-link icons on links
