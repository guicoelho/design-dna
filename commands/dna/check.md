---
allowed-tools: "Read, Glob, Grep, Bash, Task"
---

# DESIGN DNA: Check

Audit code against the design DNA. Reports drift with explanations -- not just what's wrong, but why it matters and what the DNA intended.

## Parse Arguments

Check `$ARGUMENTS` for:
- A file path (e.g., `src/components/Button.tsx`) -- check only that file
- `--against-figma` flag -- also compare against Figma source via MCP
- No arguments -- check all staged and recently changed files

## Monorepo Awareness

If `.design/` is not found in the project root, look for it in parent directories or check if the current directory is inside a monorepo app that has its own `.design/`. Use the nearest `.design/` directory.

## Procedure

### Step 1: Load the Design DNA

1. Read `.design/DNA.md` -- the single source of truth
2. Glob for `.design/components/*.md` and read each
3. Glob for `.design/patterns/*.md` and read each
4. Read `.design/principles.md` if it exists

If `.design/DNA.md` does not exist, inform the user: "No design DNA found. Run /dna:init to capture your design system first." Then stop.

Build a mental model of the design system. Understand not just the values but the intent behind them -- the visual direction, the principles, the signature details. You need this context to evaluate judgment calls.

### Step 2: Identify Target Files

**If a file path was provided:** Read that file directly.

**If no file path:** Run:
```
git diff --name-only
git diff --cached --name-only
```
Combine and deduplicate. Filter to UI-related files (`.tsx`, `.jsx`, `.vue`, `.svelte`, `.html`, `.css`, `.scss`, `.module.css`, `.astro`). If none found: "No staged or changed UI files found. Specify a file: /dna:check path/to/file" Then stop.

Read each target file.

### Step 3: Compare Against DNA

For each target file, systematically check against every relevant DNA specification. Use Grep with `-n` for precise line numbers.

**Mechanical checks** (concrete values -- auto-fixable):

1. **Spacing**: Padding, margin, gap values vs DNA spacing scale. Tailwind classes, CSS values, style objects.
2. **Radius**: Border-radius values vs DNA specs per component type.
3. **Colors**: Color references vs DNA token assignments. Semantic usage violations.
4. **Typography**: Font size, weight, line-height vs DNA specs.
5. **Components**: Import statements and usage vs DNA component rules (e.g., "use `ui/button` not `<button>`").
6. **Libraries**: Verify the correct libraries are being used per DNA tech stack rules.

**Pattern and judgment checks** (need human review):

1. What UI pattern does this file implement? Compare against DNA pattern specs.
2. Does the overall approach align with DNA principles and visual direction?
3. Are there signature details that should be present but aren't?

### Step 4: Report

For each file, provide a report that combines precision with explanation:

```
DRIFT DETECTED in <file path>

Mechanical:
  Line <N>: <what's wrong> -- DNA specifies <correct value>
  Line <N>: <what's wrong> -- DNA specifies <correct value>

Judgment:
  Line <N>: <what's happening> -- <why this conflicts with DNA>
    DNA principle: "<relevant principle>"
    The DNA intends <explanation of intent>. Consider <suggestion>.

<total> issues · <auto-fixable> auto-fixable · <review> need review
```

If no violations:
```
<file path>: No drift detected. Implementation matches DNA.
```

Summary after all files:
```
---
Summary: <files> files checked · <issues> issues · <fixable> auto-fixable · <review> need review
```

For every violation, always:
- Quote the specific DNA rule
- Explain why the DNA specifies this (reference the principle or visual direction)
- For judgment calls, suggest what a compliant implementation would look like

### Step 5: Figma Comparison (only if --against-figma)

If `$ARGUMENTS` contains `--against-figma`:

1. Use Figma MCP to fetch the corresponding component.
2. Compare against both DNA and Figma values.
3. Report Figma drift separately.
4. If DNA and Figma disagree, flag the conflict -- do not attempt to fix when sources of truth conflict.

## Rules

- Only enforce what is documented in the DNA. Never invent specs.
- Always quote the specific rule and explain the intent.
- Report exact line numbers.
- Be thorough -- a partial audit creates false confidence.
- Non-UI files: report as not applicable and move on.
