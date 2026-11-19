// main.ts — copies POST.json from the repository to the output directory.
// That is all this program does: the house reads the X post itself, and
// nothing this program writes about the post is judged. The file is checked
// before it is copied, so a malformed post record fails loudly here instead
// of failing the gate later.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const bytes = readFileSync(source);
const record: unknown = JSON.parse(bytes.toString("utf8"));
if (
  typeof record !== "object" ||
  record === null ||
  typeof (record as { url?: unknown }).url !== "string"
) {
  throw new Error("POST.json must be a JSON object with a string url field");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "POST.json"), bytes);
