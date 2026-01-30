# Component: Section Nav

A sticky left-sidebar navigation that shows the user's position on the page. Each section is represented by a short label with an asterisk marker. The active section's asterisk turns orange -- the only use of accent color in the navigation layer.

---

## Structure

```html
<aside class="section-nav" aria-label="Section navigation">
  <ul>
    <li><a href="#problem" data-section="problem"><span class="marker">*</span>The problem</a></li>
    <li><a href="#how-it-works" data-section="how-it-works"><span class="marker">*</span>How it works</a></li>
    <li><a href="#output" data-section="output"><span class="marker">*</span>Output</a></li>
    <li><a href="#cta" data-section="cta"><span class="marker">*</span>Get started</a></li>
  </ul>
</aside>
```

The hero section has no nav entry -- navigation begins at the first content section.

## Specs

```css
.section-nav {
  grid-column: 1;
  justify-self: end;
  position: sticky;
  top: 80px;
  align-self: start;
  padding-top: 38px;
  padding-right: 40px;
}

.section-nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-nav a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #4a4541;
  font-family: "Geist Mono", "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace;
  font-size: 0.9375rem;
  white-space: nowrap;
  transition: color 0.15s;
}

.section-nav a:hover {
  color: #a09b96;
}

.section-nav a.active {
  color: #a09b96;
}

.section-nav .marker {
  display: inline-block;
  width: 12px;
  color: transparent;
  font-family: var(--font-mono);
  transition: color 0.15s;
}

.section-nav a.active .marker {
  color: #ff670d; /* Orange accent -- signals current position */
}
```

## States

| State | Link color | Marker color |
|-------|-----------|-------------|
| Default | #4a4541 | transparent |
| Hover | #a09b96 | transparent |
| Active | #a09b96 | #ff670d |

## Active Tracking

Active section is determined by IntersectionObserver (see Patterns > Interaction > Scroll-Based Active Section Tracking). The `.active` class is toggled via JavaScript -- no scroll event listeners.

## Responsive

Hidden below 960px. The page falls back to a single-column block layout without the section nav.

```css
@media (max-width: 960px) {
  .section-nav {
    display: none;
  }
}
```

## Usage Rules

- One nav item per content `<section>` in `<main>` (hero excluded)
- Labels are short, lowercase: section name or a concise descriptor
- Marker is always `*` (asterisk) in monospace font
- Orange accent on the marker is the only non-grayscale color in the nav
- Never add icons, counters, or nested sub-items
- `aria-label="Section navigation"` for accessibility
