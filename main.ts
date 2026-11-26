import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Twelve yoghurts, no spoon, no plan. Please place your breakfast identity crisis in the bagging area.";

// The entry must be a single line, 1–200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE + "\n", "utf8");

console.log(`Wrote ${LINE.length} characters to ${outFile}`);
