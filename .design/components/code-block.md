# Component: Code Block

The signature component of the Design DNA site. Code blocks serve as both documentation and visual identity -- they replace what would be hero images or product screenshots on other marketing sites.

---

## Variants

### Command Block (default `pre > code`)
For showing commands the user types.

```css
pre {
  background: #141414;
  border: 1px solid #222;
  border-radius: 8px;
  padding: 16px 20px;
  overflow-x: auto;
  margin-bottom: 16px;
  position: relative;
}

code {
  font-family: "Geist Mono", "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace;
  font-size: 0.875rem;
  color: #e0e0e0;
}
```

### Output Block (`pre.output`)
For showing what the user sees after running a command. Visually recessed -- darker, dimmer.

```css
pre.output {
  background: #0d0d0d;
  border-color: #1a1a1a;
  font-size: 0.8rem;
}

pre.output code {
  color: #777;
}
```

---

## Copy Button

Every code block has a copy-to-clipboard button. It's hidden by default and revealed on hover -- secondary to reading, but always available.

```css
.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #222;
  border: 1px solid #333;
  color: #888;
  font-size: 0.75rem;
  font-family: inherit; /* Uses body font, not mono */
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s, color 0.15s;
}

pre:hover .copy-btn {
  opacity: 1;
}

.copy-btn:hover {
  color: #fff;
}
```

### Behavior
1. Click copies `code` text content via `navigator.clipboard.writeText()`
2. Button label changes from "Copy" to "Copied"
3. Reverts after 1500ms
4. No visual feedback beyond text change (no checkmark icon, no color change)

---

## Usage Rules

- Every feature explanation includes at least one code block
- Command blocks show what the user types: single-line commands
- Output blocks show what the user sees: multi-line results
- Never use screenshots of terminal output -- always use styled code blocks
- Code blocks are never syntax-highlighted. Monochrome only.
- No line numbers in marketing code blocks
- No language labels (no "bash", "shell" indicators)
