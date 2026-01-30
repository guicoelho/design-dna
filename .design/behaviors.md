# Behaviors

How the UI responds to interaction and communicates state.

---

## Interaction Feedback

### Hover

All hover effects are immediate (no delay). Every interactive element has a hover state. All transitions are `0.15s ease`.

| Element | Default | Hover | What Changes |
|---------|---------|-------|-------------|
| Links | #6d6863 | #fff | Color |
| Section nav links | #4a4541 | #a09b96 | Color |
| Buttons | gradient(#2e2a27, #272320), text #e7e4e1 | gradient(#38332f, #2e2a27), text #fff | Background gradient + color |
| Copy button | opacity 0 | opacity 1 | Opacity (parent hover reveals) |
| Copy button text | #8f8a85 | #fff | Color (button's own hover) |

Non-interactive elements never have hover effects. No cursor changes beyond the default `pointer` on links and buttons.

### Click / Tap

| Element | Feedback |
|---------|----------|
| Button | Active state: gradient inverts (#211e1b -> #292623), inner highlight dims (#2e2a27). Simulates physical press-down. |
| Copy button | Text swaps "Copy" -> "Copied" for 1500ms. No visual animation beyond the text change. |
| Links | No click feedback. Browser default. |
| Section nav links | Smooth scroll to target section. No visual feedback beyond the scroll and active marker update. |

### Keyboard Navigation

Minimal explicit keyboard support -- relies on browser defaults:
- Tab navigates through focusable elements (links, buttons)
- Enter/Space activates focused element
- No custom keyboard shortcuts
- No skip-to-content link (single-page site with minimal nav)

### Focus Management

No custom focus management:
- No focus traps (no modals or drawers)
- No return-focus patterns
- No visible focus ring -- interactions use color-shift only
- No `outline` override except `outline: none` where the embossed button style provides sufficient visual feedback through active state

---

## Motion

### Enter / Exit Animations

None. Content is present immediately on page load. No fade-ins, no slide-ins, no scroll-triggered reveals. The page renders and is done.

### State Transitions

| Transition | Duration | Easing | Properties |
|------------|----------|--------|-----------|
| Link hover | 0.15s | ease | color |
| Button hover | 0.15s | ease | background, color |
| Copy button reveal | 0.15s | ease | opacity, color |
| Section nav marker | 0.15s | ease | color (transparent -> #ff670d) |

All state transitions are color/opacity based. No size, position, or layout transitions.

### Scroll-Linked Behaviors

| Behavior | Mechanism | Effect |
|----------|-----------|--------|
| Active section tracking | IntersectionObserver | Toggles `.active` CSS class on nav links. No animation -- class toggle triggers the `color 0.15s` transition already on the marker. |
| Smooth scroll on nav click | `scroll-behavior: smooth` on `html` | Anchor links scroll smoothly to their target section. |
| Click-scroll suppression | 1-second timeout | During programmatic scroll (nav click), the observer is suppressed to prevent intermediate sections from flickering to active. |

IntersectionObserver config: `rootMargin: '-40% 0px -40% 0px'` -- the middle 20% of the viewport determines the active section.

### Micro-Interactions

| Interaction | Feedback |
|-------------|----------|
| Copy to clipboard | Text label change: "Copy" -> "Copied" -> "Copy" (1500ms). No animation, icon, or color change. |
| Button press | Active state gradient inversion. Immediate (no transition on active). |

### Reduced Motion

No explicit `prefers-reduced-motion` handling. The site's motion is already minimal:
- No entrance animations to disable
- No spatial movement to disable
- The only transitions are 0.15s color/opacity shifts, which are non-disruptive

If reduced motion support is added: set all `transition-duration: 0.01s` to make state changes instant without removing visual state feedback entirely.

---

## State Communication

### Loading

Not applicable. This is a static site. All content is present on initial render. No async data loading, no API calls, no progressive loading.

If loading patterns are needed in the future: prefer skeleton screens over spinners, matching the dark surface color (#191513) with subtle pulse animation.

### Errors

Not applicable. No forms, no user input, no API calls. The only possible error is clipboard API failure (copy button), which fails silently -- the button stays "Copy" instead of changing to "Copied".

If error patterns are needed in the future: inline text below the source, #ff670d (accent) color, terse and factual tone.

### Success

Copy-to-clipboard success: button text changes to "Copied" for 1500ms. No toast, no animation, no icon. Text swap is the entire feedback.

### Validation Timing

Not applicable. No forms or user input fields.

If validation is needed in the future: validate on blur for individual fields, validate on submit for the full form. Show errors inline below the field, not in a summary banner.
