# Pattern: Interaction

Interactions on the Design DNA site are minimal, fast, and functional. Nothing moves for the sake of moving.

---

## Hover States

All hover transitions use `transition: color 0.15s` or `transition: opacity 0.15s, color 0.15s`.

| Element | Default | Hover | Transition |
|---------|---------|-------|------------|
| Links | color #666 | color #fff | color 0.15s |
| Section nav links | color #444 | color #999 | color 0.15s |
| Buttons | gradient #2a2a2a->#222 | gradient #333->#2a2a2a | background 0.15s |
| Copy button | opacity 0 | opacity 1 | opacity 0.15s |
| Copy button text | color #888 | color #fff | color 0.15s |

## Copy to Clipboard

1. All `pre` elements get a copy button via JavaScript
2. Button is invisible until parent `pre` is hovered
3. Click -> `navigator.clipboard.writeText(code.textContent)`
4. Button text: "Copy" -> "Copied" for 1500ms -> "Copy"
5. No toast, no animation, no icon change. Text swap only.

## Scroll-Based Active Section Tracking

The section nav tracks the user's scroll position to highlight the current section.

1. IntersectionObserver watches all `main > section` elements
2. `rootMargin: '-40% 0px -40% 0px'` -- the middle 20% of the viewport determines the active section
3. When a section enters the observation zone, its corresponding nav link gets `.active`
4. All other nav links lose `.active`
5. The active marker (orange asterisk) transitions via `color 0.15s` -- no spatial movement

This is the only scroll-triggered behavior on the site, and it updates state (CSS class), not layout or animation.

## Rules

- No scroll-triggered animations (active state tracking is a class toggle, not animation)
- No entrance animations (no fade-in on load)
- No parallax
- No hover effects on non-interactive elements
- No cursor changes beyond default pointer on links/buttons
- No tooltips
- Transitions are always 0.15s. No variation.
