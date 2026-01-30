---
allowed-tools: ""
---

# DESIGN DNA: Command Reference

Output this reference directly. Do not use any tools.

**DESIGN DNA** -- Design system enforcement for your codebase.

| Command | Description |
|---------|-------------|
| `/dna:init` | Scan your codebase, answer a few design questions, get your full design DNA generated -- primitives, scales, semantics, components, patterns, behaviors, and lookbook pages. |
| `/dna:check [file]` | Audit code against your DNA. Checks primitives, scales, semantics, components, patterns, and behaviors. Reports drift with explanations. |
| `/dna:update` | Change your DNA in plain language. Can also pull from Figma. Changes cascade across the taxonomy automatically. |
| `/dna:help` | Show this reference. |

### Taxonomy Files

Your `.design/` directory contains the full design system taxonomy:

| File | Contains |
|------|----------|
| `DNA.md` | Index and overview -- start here |
| `primitives.md` | Color, typography, spacing, sizing, shape, elevation, motion |
| `scales.md` | Responsive breakpoints, grid, density modes, color modes |
| `semantics.md` | How primitives map to meaning -- brand, feedback, neutral, interactive colors; heading levels; spacing rules; elevation levels |
| `behaviors.md` | Hover, click, keyboard, focus behavior; motion rules; loading, error, success, validation patterns |
| `principles.md` | Design principles with examples and counter-examples |
| `components/` | Per-component specs (variants, states, CSS) |
| `patterns/` | Layout and interaction patterns |
| `lookbook/` | Golden reference implementations |
