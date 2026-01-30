# Component: Section

Sections are the primary structural unit of the page. Each section contains one concept: the hero, the problem, how it works, what gets generated, or the CTA.

---

## Default Section

```css
section {
  margin-bottom: 72px;
}
```

No background, no border, no padding of its own. Sections are defined by their content and the vertical space between them.

---

## Variants

### Hero Section
First section. Contains h1, subtitle, and the install command code block.
- h1: 1.75rem, weight 500, #fff
- Subtitle: 1.125rem, #a09b96, margin-bottom 32px (extra space before the code block)

### Step Section
Used within "How It Works." Each step is a `.step` div inside the section.
```css
.step {
  margin-bottom: 40px;
}

.step p {
  color: #7e7974; /* Dimmer than default body text */
}
```
- Step heading (h3): 0.9375rem, weight 500, #fff, margin-bottom 8px
- Step content: code block + paragraph, #7e7974 text

### CTA Section
Final section. Centered, separated by a top border.
```css
.cta {
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid #1e1a18;
}

.cta h2 {
  font-size: 1.125rem;
  font-weight: 500; /* Lighter than standard h2 */
  color: #a09b96; /* Muted -- deliberately quieter */
  margin-bottom: 24px;
}
```

---

## Usage Rules

- Sections flow vertically with 72px spacing. No other layout.
- No section backgrounds or cards wrapping sections
- No decorative borders between sections (only CTA gets a border-top)
- Section headings are always h2, 1.125rem, weight 500, #fff, margin-bottom 16px
- The CTA section is the only exception: its h2 is lighter weight and muted
