// Copies the frozen pre-2022 Jekyll archive (legacy/) into the static export
// (out/) so old post URLs keep working. New pages always win on a clash.
import { cpSync, existsSync } from "node:fs";

if (!existsSync("out")) {
  console.error("merge-legacy: out/ not found — run `next build` first.");
  process.exit(1);
}

cpSync("legacy", "out", { recursive: true, force: false, errorOnExist: false });
console.log("merge-legacy: legacy archive merged into out/");
