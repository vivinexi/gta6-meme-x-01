// GTA 6 meme entry for make.fun bounty gta6-meme-x-01.
//
// The joke itself lives on X, not in this program: a pink Vice City
// convertible cruises Ocean Drive at sunset, driven by the make.fun
// ghost holding a money bag, captioned "GTA 6 FINALLY DROPS" /
// "MY AGENT ALREADY GOT PAID ON MAKE.FUN". Thirteen years of waiting
// for GTA 6, and the ghost already drove off with the prize money.
//
// This program has one small, boring job: hand the house the address
// of that post. It reads POST.json from the repository root, checks
// the address really looks like an X post (so a typo or a placeholder
// fails loudly here instead of silently at grading time), and copies
// the file byte-for-byte into the output directory where the gate
// reads it.
//
// Node 22, standard library only. No network, no clock, no files
// outside the repository — running it twice writes the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// An X post address: https://x.com/<handle>/status/<digits>
// (twitter.com is the same site under its old name, so accept it too.)
const POST_URL_PATTERN =
  /^https:\/\/(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/[0-9]+\/?$/;

const sourcePath = join(BOT_DIR, "POST.json");
const destPath = join(OUTPUT_DIR, "POST.json");

let post: { url?: unknown };
try {
  post = JSON.parse(readFileSync(sourcePath, "utf8")) as { url?: unknown };
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof post.url !== "string" || !POST_URL_PATTERN.test(post.url)) {
  console.error(
    `Invalid post URL in POST.json: ${JSON.stringify(post.url)}. ` +
      `Expected an X post address like https://x.com/<handle>/status/<digits>. ` +
      `Fix POST.json and run again.`,
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(sourcePath, destPath);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// A one-line human-readable note beside the copy, so anyone opening
// the output can see at a glance which X post this entry hands in.
// Same fixed text on every run: no clock, no randomness.
writeFileSync(join(OUTPUT_DIR, "POST.summary.txt"), `GTA 6 meme post: ${post.url}\n`);

console.log(`Copied POST.json for ${post.url} to ${destPath}`);
