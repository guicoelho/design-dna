# Component: Button

Discrete, embossed buttons with physical depth. The double-border technique and subtle gradient give buttons a tactile, beveled quality -- like a real key you could press. Heavier font weight than the rest of the site makes them stand out as interactive affordances.

---

## Default Button

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-family: "Geist Mono", "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace;
  font-size: 0.875rem;
  font-weight: 600; /* Heavier than body (400) -- buttons have presence */
  color: #e7e4e1;
  background: linear-gradient(to bottom, #2e2a27, #272320);
  border: 1px solid #1e1a18; /* Outer border -- dark shadow edge */
  box-shadow: inset 0 1px 0 #3f3a36; /* Inner highlight -- creates embossed/beveled feel */
  border-radius: 4px; /* Small, sharp, technical */
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  -webkit-font-smoothing: antialiased;
}
```

## States

### Hover
Gradient lightens. Text goes full white.

```css
.btn:hover {
  background: linear-gradient(to bottom, #38332f, #2e2a27);
  color: #fff;
}
```

### Active / Pressed
Gradient inverts slightly to simulate press-down. Inner highlight dims.

```css
.btn:active {
  background: linear-gradient(to bottom, #211e1b, #292623);
  box-shadow: inset 0 1px 0 #2e2a27;
}
```

### Disabled
Flattened -- no gradient, no emboss. Ghost of a button.

```css
.btn:disabled {
  background: #1e1a18;
  border-color: #1e1a18;
  box-shadow: none;
  color: #5c5752;
  cursor: not-allowed;
}
```

---

## The Embossed Effect

The "embossed" feel comes from two layers:

1. **Outer border** (`border: 1px solid #1e1a18`): Darker than the button background, acts as the shadow edge at the bottom/sides.
2. **Inner highlight** (`box-shadow: inset 0 1px 0 #3f3a36`): A 1px light line at the top of the button, simulating light hitting the top edge of a raised surface.

Together with the top-to-bottom gradient (lighter top, darker bottom), this creates the illusion of a physical, pressable element.

---

## Usage Rules

- Buttons are for primary actions: "Install", "Get started", "Copy"
- Use `<button>` for actions, `<a class="btn">` for navigation that looks like a button
- Labels: verb-first, sentence case ("Get started", not "GET STARTED")
- One primary button per section maximum
- The copy button inside code blocks is NOT this component -- it uses its own minimal styling
- No icon-only buttons. Always include text.
- No outline/ghost variant. Buttons are always filled and embossed.
