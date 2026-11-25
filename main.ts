// The Robot Vacuum's Best Excuse — batch3 entry (vacuumexcuse)
// The spot was not missed. The spot is sacred, and visited
// emotionally, nightly, at furniture-bumping hour.
// Writes the excuse to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VACUUM_EXCUSE =
  "I didn't miss the spot. The spot is where I keep my dignity — I visit it emotionally every day at 3 a.m.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), VACUUM_EXCUSE, "utf8");
}

main();
