# Design System

This project uses DESIGN DNA for design system enforcement.

## Before Writing Any UI Code

ALWAYS read `.design/DNA.md` before generating, modifying, or reviewing any UI code. This is not optional.

- For primitive values: `.design/primitives.md`
- For responsive/grid/density rules: `.design/scales.md`
- For semantic mappings: `.design/semantics.md`
- For component specs: `.design/components/`
- For interaction patterns: `.design/patterns/`
- For behavior rules: `.design/behaviors.md`
- For design principles: `.design/principles.md`
- For reference implementations: `.design/lookbook/`

Every UI decision must align with the DNA. If a decision isn't covered by the DNA, flag it and ask rather than guessing.

Run `/dna:check` after making UI changes to verify compliance.
