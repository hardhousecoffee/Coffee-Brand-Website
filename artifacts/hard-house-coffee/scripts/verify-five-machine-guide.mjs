import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const app = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const workspace = resolve(app, "../..");
const route = "/blog/the-300-dollar-sweet-spot-real-espresso-at-home";
const html = readFileSync(resolve(app, `dist/public${route}/index.html`), "utf8");
const canonical = `https://hardhousecoffee.com${route}`;
const profiles = [
  ["delonghi-em350bk", "delonghi-classic-black-espresso-machine.png", "De’Longhi", "EM350BK"],
  ["gemilai-owl-g3006", "gemilai-owl-g3006-espresso-machine.jpeg", "Gemilai Owl G3006", "G3006"],
  ["cafe-bellissimo", "cafe-bellissimo-espresso-machine.jpeg", "CAFÉ Bellissimo", "C7CESAS3RD3"],
  ["philips-2300-lattego", "philips-2300-lattego-espresso-machine.png", "Philips 2300", "EP2330/14"],
  ["zulay-magia-clasica", "zulay-magia-clasica-espresso-machine.jpeg", "Zulay Magia Clásica", "Clásica"],
];
const hash = (path) => createHash("sha256").update(readFileSync(path)).digest("hex");

assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, "One H1 required");
assert.equal((html.match(/<title>/g) || []).length, 1, "Duplicate title");
assert.equal((html.match(/name="description"/g) || []).length, 1, "Duplicate description");
assert.equal((html.match(/rel="canonical"/g) || []).length, 1, "Duplicate canonical");
assert.ok(html.includes(`href="${canonical}"`), "Canonical changed");
assert.ok(html.includes("<title>5 Espresso Machines Worth Buying | Hard House Coffee</title>"));
assert.ok(html.includes("Five Espresso Machines Worth Buying: From Budget-Friendly to Midrange"));
assert.ok(html.includes('property="og:image"') && html.includes('name="twitter:card"'));
assert.match(html, /<time datetime="2026-11-02">/i);

let previous = -1;
for (const [id, filename, altName, model] of profiles) {
  const start = html.indexOf(`id="${id}"`);
  assert.ok(start > previous, `Incorrect product order: ${id}`);
  previous = start;
  const next = html.indexOf('<div id="', start + 1);
  const section = html.slice(start, next < 0 ? html.indexOf("Which Espresso Machine Is Right for You?", start) : next);
  assert.ok(section.includes(model), `Missing exact model: ${id}`);
  assert.ok(section.includes("Color and Appearance"), `Missing finishes: ${id}`);
  assert.ok(section.includes("What We Like") && section.includes("What Could Be Better"), `Missing pros/cons: ${id}`);
  assert.ok(section.includes("Our Verdict") && section.includes("Who Is It Best For?"), `Missing buyer/verdict: ${id}`);
  assert.ok(section.includes("Approximate U.S. price:"), `Missing price: ${id}`);
  const image = section.match(new RegExp(`<img[^>]*src="/images/five-espresso-machines/${filename.replaceAll(".", "\\.")}"[^>]*>`))?.[0];
  assert.ok(image, `Missing assigned photograph: ${id}`);
  assert.ok(image.includes(altName) && image.includes('loading="lazy"'), `Incorrect image alt/loading: ${id}`);
  assert.match(image, /width="\d+"/);
  assert.match(image, /height="\d+"/);
  assert.ok(image.includes("width:100%") && image.includes("height:auto"), `Image distorted: ${id}`);
  const installed = resolve(app, `public/images/five-espresso-machines/${filename}`);
  const supplied = resolve(workspace, `attached_assets/hard-house-coffee-five-machine-package/images/${filename}`);
  assert.equal(hash(installed), hash(supplied), `Supplied photo replaced or altered: ${id}`);
  const stem = filename.replace(/\.[^.]+$/, "");
  for (const file of [filename, `${stem}.webp`, `${stem}-640.webp`]) {
    assert.ok(existsSync(resolve(app, `dist/public/images/five-espresso-machines/${file}`)), `Missing production asset: ${file}`);
  }
}

const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1]));
const article = schemas.find((s) => s["@type"] === "Article" && s.url === canonical);
assert.ok(article && article.headline.startsWith("5 Espresso Machines"), "Missing accurate Article schema");
assert.equal(article.dateModified, "2026-11-02");
assert.ok(!article.datePublished, "An unknown original publication date must not be invented");
assert.ok(!schemas.some((s) => ["FAQPage", "AggregateRating", "Review", "Offer"].includes(s["@type"])), "Unsupported rich-result claims");
assert.ok(html.includes("min-width:1060px") && html.includes("overflow-x:auto"), "Comparison scroll containment missing");
assert.ok(html.includes('aria-label="Five espresso machines comparison; scroll horizontally to see all columns" tabindex="0"'));
for (const text of ["MULTIFUNCTIONAL", "pictured grinder", "EP2330/14", "manual steam", "Do You Need a Coffee Grinder?", "What About Coffee Beans?", "How Do You Keep an Espresso Machine Clean?"]) {
  assert.ok(html.toLowerCase().includes(text.toLowerCase()), `Required topic missing: ${text}`);
}
for (const oldSection of ["The machine price is not the setup price", "Grinders, fresh beans and a few useful extras", "Milk, water and maintenance: keep it simple", "Research notes and source checks", "1:2"]) {
  assert.ok(!html.includes(oldSection), `Superseded technical copy remains: ${oldSection}`);
}
assert.ok(!/GEVI|CASABREWS|Gaggia|Breville Bambino/.test(html), "Unapproved substitute introduced");
assert.ok(!/discontinued|no longer manufactured/i.test(html), "Unverified hidden manufacturer availability text must not become a factual claim");
assert.ok(readFileSync(resolve(app, "dist/public/sitemap.xml"), "utf8").includes(canonical));
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const value = match[1];
  if (!value.startsWith("/") || value.startsWith("//")) continue;
  const path = value.split(/[?#]/)[0];
  const target = resolve(app, `dist/public${path}`);
  assert.ok(existsSync(target) || existsSync(resolve(target, "index.html")), `Broken local URL: ${value}`);
}
console.log("PASS: five exact models/images in order; supplied originals preserved byte-for-byte");
console.log("PASS: prices, finishes, pros/cons, buyer guidance, education and responsive-image production files");
console.log("PASS: canonical, one H1/title/description, social tags, accurate modification date, Article schema and sitemap");
console.log("PASS: existing comparison component retained with contained horizontal overflow and keyboard-focusable region");
console.log("PASS: all local image and internal-link targets exist in the production build");
