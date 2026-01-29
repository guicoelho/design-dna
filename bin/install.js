#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const COMMANDS_DIR = path.join(__dirname, "..", "commands", "dna");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return 0;
  fs.mkdirSync(dest, { recursive: true });
  let count = 0;
  for (const entry of fs.readdirSync(src)) {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);
    if (fs.statSync(srcPath).isDirectory()) {
      count += copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      count++;
    }
  }
  return count;
}

async function main() {
  console.log();
  console.log("  DESIGN DNA");
  console.log("  Design system enforcement for AI-assisted development");
  console.log();

  const scopeAnswer = await ask(
    "  Install scope:\n\n  1) Local (this project only — ./.claude/commands/)\n  2) Global (all projects — ~/.claude/commands/)\n\n  > "
  );

  const scope = scopeAnswer === "2" ? "global" : "local";
  const base =
    scope === "global"
      ? path.join(require("os").homedir(), ".claude")
      : path.join(process.cwd(), ".claude");

  const commandsTarget = path.join(base, "commands");

  // Copy commands
  const commandsDest = path.join(commandsTarget, "dna");
  const commandCount = copyDir(COMMANDS_DIR, commandsDest);

  console.log();
  console.log(`  Installed ${commandCount} commands to ${commandsDest}`);
  console.log();
  console.log("  Next steps:");
  console.log("  1. Restart Claude Code to load the new commands");
  console.log("  2. Run /dna:init to capture your design DNA");
  console.log();

  rl.close();
}

main().catch((err) => {
  console.error("  Error:", err.message);
  rl.close();
  process.exit(1);
});
