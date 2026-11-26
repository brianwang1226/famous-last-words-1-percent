// Famous Last Words at 1 Percent — a make.fun one-liner entry.
// The phone dies at 1% mid-text; autocorrect turns a love note into
// a yogurt confession to the boss. The phone is gone, the yogurt remains.
// Winner-study rules applied: one specific scene (1% battery), named
// details (wife, boss, yogurt), escalation across four short beats,
// and a 4-word kicker that reframes the whole thing — no explaining.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Phone at 1%. I typed 'I love you' to my wife. Autocorrect sent 'I love yogurt' to my boss. The phone died. The yogurt lives on.";

const MAX_CHARS = 199;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
