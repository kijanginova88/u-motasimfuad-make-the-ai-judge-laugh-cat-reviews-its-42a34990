// Make the AI Judge Laugh: Cat Reviews Its Human
// One funny single-line one-star review, written by a house cat about its human.
// The grader runs `node main.ts` (node22, no network). The program writes the
// review to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt) and prints
// exactly the review text — and nothing else — to stdout.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate accepts 1 to 200 characters of UTF-8 text; this review is 176.
// It stays a single line with no trailing newline in entry.txt.
const review =
  "One star. The food bowl sat empty for four whole minutes while he stared at a glowing rectangle, so I walked across his keyboard and filed my complaint in his unsaved document.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), review, "utf8");
} catch {
  // The entry text still goes to stdout below.
}

console.log(review);
