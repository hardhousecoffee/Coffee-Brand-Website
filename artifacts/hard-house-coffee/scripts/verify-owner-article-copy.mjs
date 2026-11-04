import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const app = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const workspace = resolve(app, "../..");
const supplied = readFileSync(resolve(workspace, "attached_assets/Pasted-Paco-here-it-is-One-complete-copy-and-paste-prompt-It-i_1793613646375.txt"), "utf8");
const article = supplied.split("ARTICLE CONTENT BEGINS")[1].split("ARTICLE CONTENT ENDS")[0];
const profilesAndAdvice = article.slice(article.indexOf("De’Longhi Classic EM350BK\n\nA Great Place"));
const expected = [
  ...profilesAndAdvice.trim().split(/\n\n+/),
].filter((block) => !/^\[|^IMPORTANT:|^Approximate (?:price|listed price|promotional price):|^=+$/.test(block));

const html = readFileSync(resolve(app, "dist/public/blog/the-300-dollar-sweet-spot-real-espresso-at-home/index.html"), "utf8");
const decode = (text) => text
  .replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<[^>]+>/g, "")
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const normalized = (text) => text.replace(/\s+/g, "");
const rendered = normalized(decode(html.slice(html.indexOf("<body"))));
// The owner subsequently authorized a one-sentence opening and products first.
// Keep the strict verbatim check on all supplied profiles and buying advice.
assert.ok(html.includes("Five espresso machines for different budgets and coffee routines."));
assert.ok(html.includes("Five Espresso Machines at a Glance"));
assert.ok(html.indexOf('id="zulay-magia-clasica"') < html.indexOf("Five Espresso Machines at a Glance"));
let position = 0;
for (const block of expected) {
  const text = normalized(block);
  const next = rendered.indexOf(text, position);
  assert.ok(next >= position, `Supplied wording missing, changed or out of order: ${block}`);
  position = next + text.length;
}
for (const directive of ["[INSERT", "[KEEP", "ARTICLE CONTENT BEGINS", "ARTICLE CONTENT ENDS", "IMPORTANT: This is the G3006", "Do not substitute", "REPLIT: FINAL", "Keep the existing chart design"]) {
  assert.ok(!html.includes(directive), `Implementation instruction leaked into article: ${directive}`);
}
for (const destination of [
  "why-every-coffee-lover-needs-a-grinder-first-2026-guide",
  "turin-df54-vs-baratza-encore-esp",
  "top-5-dark-roast-beans-for-espresso-in-2026",
  "espresso-sour-bitter-channeling-troubleshooting",
  "espresso-water-hardness-alkalinity-guide",
  "espresso-machine-cleaning-vs-descaling",
  "steam-wand-vs-electric-milk-frother",
]) assert.ok(html.includes(`href="/blog/${destination}"`), `Useful internal link lost: ${destination}`);
console.log(`PASS: all ${expected.length} supplied profile/advice blocks remain verbatim and in order; authorized short introduction and products-first layout`);
console.log("PASS: implementation instructions excluded; useful internal links retained without rewriting supplied text");
