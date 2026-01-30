# Design DNA (For Claude Code)

[![npm version](https://img.shields.io/npm/v/design-dna.svg)](https://www.npmjs.com/package/design-dna)
[![license](https://img.shields.io/npm/l/design-dna.svg)](https://github.com/guicoelho/design-dna/blob/main/LICENSE)

**Build your project's Design DNA, one feedback at a time.**

```
npx design-dna
```

---

## Before

You do the same tweaks every time. AI doesn't remember what it ate for lunch.

## Now

Every piece of feedback gets encoded into the design DNA, and will naturally be part of anything you build next.

---

## Usage

### Init

```
/dna:init
```

Start your DNA.

### Update

```
/dna:update the buttons feel too chunky
```

Improve it as you go.

---

## Reference

### Check

```
/dna:check
```

Audits code against your DNA. Reports what drifted, where, and why.

```
DRIFT DETECTED in Settings.tsx

Mechanical:
  Line 34: Button uses px-4 py-2 -- DNA specifies px-3 py-1.5 for secondary actions
  Line 67: Card radius is rounded-lg (8px) -- DNA specifies rounded-xl (12px)

Judgment:
  Line 89: Empty state uses illustration -- DNA principle: "icons functional, not decorative"

3 issues · 2 auto-fixable · 1 needs review
```

### Help

```
/dna:help
```

Command reference.

### What Gets Generated

```
.design/
  DNA.md              # Product context and mental model
  principles.md       # Design principles with examples
  primitives.md       # Raw design values (colors, type, spacing, shape, motion)
  scales.md           # Graduated value systems
  semantics.md        # Meaning-mapped values (roles, states, contexts)
  behaviors.md        # Interaction and motion specs
  components/         # Per-component specs (variants, states, values)
  patterns/           # Layout and content patterns
```

Your `CLAUDE.md` gets an embedded compressed reference -- passive context without reading files. Stays in sync automatically.

---

**You have taste. Now your AI does too.**
