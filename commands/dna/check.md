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

1. Read `.design/DNA.md` -- the index and overview
2. Read `.design/primitives.md` -- primitive values
3. Read `.design/scales.md` -- responsive, grid, density, color modes
4. Read `.design/semantics.md` -- primitive-to-meaning mappings
5. Read `.design/behaviors.md` -- interaction and state communication rules
6. Glob for `.design/components/*.md` and read each
7. Glob for `.design/patterns/*.md` and read each
8. Read `.design/principles.md` if it exists

If `.design/DNA.md` does not exist, inform the user: "No design DNA found. Run /dna:init to capture your design system first." Then stop.

If taxonomy files are missing (primitives.md, scales.md, semantics.md, behaviors.md), warn: "Your DNA uses an older structure and is missing taxonomy files ([list missing]). Run /dna:update to upgrade. Checking against available specs only." Proceed with whatever files exist.

Build a mental model of the design system. Understand not just the values but the intent behind them -- the visual direction, the principles, the signature details. You need this context to evaluate judgment calls.

#### Compressed Reference Staleness Check

After loading the DNA files, read `CLAUDE.md` and check for `<!-- dna:begin -->` / `<!-- dna:end -->` markers. If the markers exist, spot-check these values in the compressed block against the loaded `.design/` files:
- Accent color (from primitives.md)
- Page background color (from primitives.md)
- Breakpoint value (from scales.md)
- Font family (from primitives.md)
- Base spacing unit (from primitives.md)
- Body text color (from semantics.md)
- Button border-radius (from components/button.md)

If any values differ, add this note at the end of the final report:
```
Note: Compressed DNA reference in CLAUDE.md appears stale. Run /dna:update to regenerate.
```

If `CLAUDE.md` has no `<!-- dna:begin -->` marker, add:
```
Note: CLAUDE.md is missing the compressed DNA reference. Run /dna:init to set it up.
```

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

**Primitive checks** (from `primitives.md`):

1. **Spacing**: Padding, margin, gap values vs DNA spacing scale. Tailwind classes, CSS values, style objects. Flag any value not in the defined scale.
2. **Colors**: Color references vs DNA palette and neutral scale. Flag hex values, RGB, or color names not in the primitive system.
3. **Typography**: Font size, weight, line-height vs DNA type scale and weight rules. Flag weights or sizes not in the defined set.
4. **Shape**: Border-radius values vs DNA radius scale per component type. Border-width vs defined scale.
5. **Elevation**: Shadow values vs DNA shadow definitions. Flag shadows not matching defined levels.
6. **Motion**: Transition durations and easing vs DNA duration/easing scale. Flag non-standard values.

**Scale checks** (from `scales.md`):

7. **Responsive**: Media queries use defined breakpoints. Flag breakpoints not in the DNA.
8. **Grid**: Grid usage matches defined column/gutter/margin specs.
9. **Density**: If density modes exist, components respect density primitives.
10. **Color modes**: If multiple modes exist, values use the defined mapping strategy (CSS variables, class swap, etc.).

**Semantic checks** (from `semantics.md`):

11. **Color usage**: Colors match their semantic role (e.g., error color not used for success, accent color used sparingly per rules).
12. **Typography hierarchy**: Heading levels follow defined sizes/weights/colors. Body text matches defined variants.
13. **Spacing semantics**: Component padding and section spacing match defined semantic values.
14. **Elevation**: Components sit at the correct elevation level per the mapping.

**Behavior checks** (from `behaviors.md`):

15. **Hover states**: Interactive elements have hover states matching defined behavior.
16. **Focus indicators**: Focusable elements have the defined focus style.
17. **Loading states**: Loading patterns use the defined approach (skeleton vs spinner).
18. **Error states**: Error display matches the defined pattern (toast vs inline).
19. **Motion**: Animations respect the defined enter/exit/transition rules. Check for prefers-reduced-motion handling if defined.

**Component checks** (from `components/*.md`):

20. **Import rules**: Import statements and usage vs DNA component rules (e.g., "use `ui/button` not `<button>`").
21. **Libraries**: Verify correct libraries per DNA tech stack rules.
22. **Component structure**: Anatomy matches spec (correct elements, correct nesting).
23. **State coverage**: All defined states are handled (hover, focus, active, disabled, loading, error).

**Pattern and judgment checks** (from `patterns/*.md` and `principles.md`):

24. What UI pattern does this file implement? Compare against DNA pattern specs.
25. Does the overall approach align with DNA principles and visual direction?
26. Are there signature details that should be present but aren't?

**Taxonomy health check** (meta):

27. If any `.design/` files contain `<!-- default:` markers, note this in the summary: "N default markers remain in the DNA -- these are unreviewed assumptions. Run /dna:update to review them."

### Step 4: Report

For each file, provide a report that combines precision with explanation:

```
DRIFT DETECTED in <file path>

Mechanical:
  Line <N>: <what's wrong> -- DNA specifies <correct value>
    Source: <file>.md > <section>
  Line <N>: <what's wrong> -- DNA specifies <correct value>
    Source: <file>.md > <section>

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
[If default markers exist]: <N> default markers remain in taxonomy files -- review with /dna:update
```

For every violation, always:
- Quote the specific DNA rule and **cite the source file and section** (e.g., "primitives.md > Shape > Border Radius Scale")
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
- Always quote the specific rule, cite the source file and section, and explain the intent.
- Report exact line numbers.
- Be thorough -- a partial audit creates false confidence.
- Non-UI files: report as not applicable and move on.
- If taxonomy files are missing, check against what exists and note the gaps.
