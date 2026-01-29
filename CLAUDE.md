# Design System

This project uses DESIGN DNA for design system enforcement.

## Before Writing Any UI Code

ALWAYS read `.design/DNA.md` before generating, modifying, or reviewing any UI code. This is not optional.

- For component specs: `.design/components/`
- For interaction patterns: `.design/patterns/`
- For design principles: `.design/principles.md`
- For reference implementations: `.design/lookbook/`

Every UI decision must align with the DNA. If a decision isn't covered by the DNA, flag it and ask rather than guessing.

Run `/dc:check` after making UI changes to verify compliance.
