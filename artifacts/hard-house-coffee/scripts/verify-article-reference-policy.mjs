// Run after the normal build. This check does not publish or request external sites.
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../dist/public");
const inventory = {
  "breville-oracle-jet-bes985-researched-guide": 3,
  "coffee-labels-organic-fairtrade-direct-trade": 3,
  "decaf-coffee-methods-caffeine-buying-guide": 3,
  "espresso-accessory-fit-54mm-58mm": 2,
  "espresso-machine-cleaning-vs-descaling": 3,
  "espresso-sour-bitter-channeling-troubleshooting": 2,
  "espresso-water-hardness-alkalinity-guide": 2,
  "global-excellence-onyx-coffee-lab-bentonville-arkansas": 1,
  "living-the-dream-mind-blowing-world-of-20000-espresso-gear": 9,
  "moccamaster-kb-vs-oxo-9-cup": 3,
  "ninja-luxe-cafe-pro-es701-guide": 3,
  "philips-5500-lattego-ownership-guide": 2,
  "steam-wand-vs-electric-milk-frother": 3,
  "stepping-up-what-crossing-1000-mark-actually-buys-you": 8,
  "the-300-dollar-sweet-spot-real-espresso-at-home": 5,
  "turin-df54-vs-baratza-encore-esp": 2,
};
let count = 0;
const destinations = new Set();
for (const entry of readdirSync(resolve(root, "blog"), { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const html = readFileSync(resolve(root, "blog", entry.name, "index.html"), "utf8");
  const references = [...html.matchAll(/<span\b([^>]*\bdata-article-reference="([^"]+)"[^>]*)>([\s\S]*?)<\/span>/g)];
  assert.equal(references.length, inventory[entry.name] ?? 0, entry.name);
  for (const [, attrs, destination, label] of references) {
    assert.ok(!/\b(?:href|onclick|role|tabindex)=/i.test(attrs), entry.name);
    assert.ok(label.replace(/<[^>]*>/g, "").trim(), `Missing source label: ${entry.name}`);
    destinations.add(destination);
    count++;
  }
}
assert.equal(count, 54);
assert.equal(destinations.size, 50);
const titles = {
  "top-5-dark-roast-beans-for-espresso-in-2026": "Best Dark Roast Coffee Beans for Espresso: What to Look For",
  "why-every-coffee-lover-needs-a-grinder-first-2026-guide": "Why Every Coffee Lover Needs a Grinder First",
  "best-espresso-machines-for-beginners-2026-guide": "Best Espresso Machines for Beginners: Your Guide to Choosing the Right One",
};
for (const [slug, title] of Object.entries(titles)) {
  const html = readFileSync(resolve(root, "blog", slug, "index.html"), "utf8");
  assert.ok(html.includes(`<title>${title} | Hard House Coffee</title>`), slug);
  assert.ok(html.includes(`"headline":"${title}"`), slug);
  assert.ok(html.includes(`rel="canonical" href="https://hardhousecoffee.com/blog/${slug}"`), slug);
}
console.log("PASS: exactly 54 non-interactive references across 16 approved articles; 50 source destinations retained");
console.log("PASS: dark-roast, grinder and beginner-guide SEO headlines; original canonical URLs retained");
