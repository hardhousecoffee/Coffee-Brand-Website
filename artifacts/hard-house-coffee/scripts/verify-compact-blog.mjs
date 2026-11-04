import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const app = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const root = resolve(app, "dist/public");
let active = 0, shared = 0, legacy = 0, short = 0;
for (const entry of readdirSync(resolve(root, "blog"), { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const file = resolve(root, "blog", entry.name, "index.html");
  if (!existsSync(file)) continue;
  const html = readFileSync(file, "utf8");
  if (!html.includes("<h1")) continue; // Retired article redirects are not articles.
  active++;
  if (html.includes("hhc-editorial-body")) {
    shared++;
    assert.ok(html.includes("height:280px") && html.includes("hhc-article-content"), entry.name);
    assert.ok(html.indexOf('id="article-research-notes"') > html.indexOf("hhc-article-content"), entry.name);
  } else {
    assert.ok(html.includes('class="hhc-legacy-article"'), `Older article missed: ${entry.name}`);
    assert.ok(html.includes("max-w-2xl"), `Older article selector no longer matches: ${entry.name}`);
    legacy++;
  }
  const intro = html.match(/<(p|div) data-article-introduction="true"[^>]*>([\s\S]*?)<\/\1>/);
  if (intro) {
    const words = intro[2].replace(/<[^>]+>/g, " ").trim().split(/\s+/);
    assert.ok(words.length <= 45, `Introduction too long: ${entry.name}`);
    short++;
  }
}
assert.equal(active, 39);
assert.equal(shared + legacy, active);
assert.equal(legacy, 17);
assert.ok(short >= 17);
for (const [slug, first, last, table] of [
  ["stepping-up-what-crossing-1000-mark-actually-buys-you", "breville-oracle-jet", "meraki-gen-2", "machine-comparison"],
  ["the-300-dollar-sweet-spot-real-espresso-at-home", "delonghi-em350bk", "zulay-magia-clasica", "five-machine-comparison"],
]) {
  const html = readFileSync(resolve(root, "blog", slug, "index.html"), "utf8");
  const opening = html.indexOf("data-article-introduction");
  const product = html.indexOf(`id="${first}"`);
  assert.ok(opening < product && !html.slice(opening, product).includes("<table"), slug);
  assert.ok(html.indexOf(`id="${last}"`) < html.indexOf(`id="${table}"`), slug);
  assert.ok(html.includes(`href="#${table}"`), slug);
  assert.ok(html.slice(product, html.indexOf("</figure>", product)).includes('loading="eager"'), slug);
}
const listing = readFileSync(resolve(root, "blog/index.html"), "utf8");
assert.ok(listing.includes("pt-24 pb-8") && listing.includes("grid-cols-3 gap-4"));
const stylesheet = readFileSync(resolve(app, "src/components/article-spacing.css"), "utf8");
assert.ok(stylesheet.includes(".hhc-legacy-article > .max-w-2xl"));
console.log(`PASS: all ${active} articles covered (${shared} shared, ${legacy} legacy); ${short} compact openings at most45words`);
console.log("PASS: products before tables, eager first photos, retained comparison jumps, compact all-category listing");
