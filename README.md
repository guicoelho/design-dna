# Design DNA (For Claude Code)

[![npm version](https://img.shields.io/npm/v/design-dna.svg)](https://www.npmjs.com/package/design-dna)
[![license](https://img.shields.io/npm/l/design-dna.svg)](https://github.com/guicoelho/design-dna/blob/main/LICENSE)

**Encode your design taste & principles into "design DNA". Every piece of AI-generated UI looks like your product and vision**

---

```
npx design-dna
```

---

## The Problem

AI builds UI fast. But it doesn't know your taste and design vision.

You get a settings page that works. It's "clean." And it looks nothing like the rest of your product. Wrong spacing, wrong hierarchy, wrong component patterns, wrong vibe.

So you spend your time explaining what's off. Fixing it. Explaining again. Watching the same mistakes return next feature. You become a full-time design cop.

Design DNA lets you encode your taste once -- your preferences, your principles, your opinion about how things should look and feel -- into design DNA. From that point on, every line of AI-generated UI code comes out looking like it was built by someone who gets it.

---

## How It Works

### 1. Init

```
/dna:init
```

Design DNA scans your codebase, asks you a few high-level design questions and generates your DNA: a structured spec of your product's taste, principles, and visual language.

It also generates lookbook pages -- golden reference implementations that show the DNA in action -- and embeds a compressed design system reference directly into your `CLAUDE.md` so Claude has passive context for every UI task.

**Output:** `.design/` taxonomy, lookbook pages, compressed reference in `CLAUDE.md`.

### 2. Check

```
/dna:check
```

Audits code against your DNA. Reports exactly what drifted, where, and why it matters.

```
DRIFT DETECTED in Settings.tsx

Mechanical:
  Line 34: Button uses px-4 py-2 -- DNA specifies px-3 py-1.5 for secondary actions
  Line 67: Card radius is rounded-lg (8px) -- DNA specifies rounded-xl (12px)

Judgment:
  Line 89: Empty state uses illustration -- DNA principle: "icons functional, not decorative"

3 issues · 2 auto-fixable · 1 needs review
```

### 3. Update

```
/dna:update the buttons feel too chunky
```

Describe what's off in your own words. Design DNA translates that into precise DNA changes.

Works with plain language, Figma files, URLs, screenshots -- whatever you have.

### 4. Help

```
/dna:help
```

That's it. Four commands.

---

## What Gets Generated

```
.design/
  DNA.md              # Product context and mental model -- the index
  principles.md       # Design principles with examples
  primitives.md       # Raw design values (colors, type, spacing, shape, motion)
  scales.md           # Graduated value systems
  semantics.md        # Meaning-mapped values (roles, states, contexts)
  behaviors.md        # Interaction and motion specs
  components/         # Per-component specs (variants, states, values)
  patterns/           # Layout and content patterns
  lookbook/           # Golden reference implementations
```

Design DNA also embeds a compressed design system reference directly into your `CLAUDE.md` -- Claude has passive context for every UI task without reading files. The embedded reference stays in sync: `/dna:check` detects staleness, `/dna:update` regenerates it automatically.

---

## Setup

```
npx design-dna
```

The installer copies slash commands into your project. Then run `/dna:init` to encode your taste.

---

**You have taste. Now your AI does too.**
