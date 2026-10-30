// Run with Node 22.18+ (native TypeScript stripping):
// node scripts/verify-shopping-suspension.mjs
// Run the normal build first; this check never publishes or makes HTTP requests.
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";
import {
  AMAZON_SHOPPING_ENABLED,
  isShoppingSuspended,
} from "../src/config/shopping.ts";

const root = fileURLToPath(new URL("../dist/public/", import.meta.url));
assert.equal(AMAZON_SHOPPING_ENABLED, false, "This audit is for the suspended state");

const blocked = [
  "/products", "/products/", "/products#coffee-beans",
  "/products?category=espresso", "/products/index.html",
  "https://hardhousecoffee.com/products", "https://www.hardhousecoffee.com/products/",
  "https://amzn.to/example", "https://amzn.eu/example", "https://a.co/example",
  "https://www.amazon.com/dp/example", "https://amazon.co.uk/dp/example",
  "https://smile.amazon.com/example",
];
const allowed = [
  "/", "/blog", "/about", "/images/products/coffee.jpg",
  "/blog/best-espresso-machines-for-beginners-2026-guide",
  "https://hard-house-coffee.printify.me",
  "https://hard-house-coffee.printify.me/product/33134044",
  "https://example.com/products", "https://notamazon.com",
];
for (const url of blocked) assert.equal(isShoppingSuspended(url), true, url);
for (const url of allowed) assert.equal(isShoppingSuspended(url), false, url);

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? htmlFiles(join(dir, entry.name)) :
      entry.name.endsWith(".html") ? [join(dir, entry.name)] : [],
  );
}

let articles = 0;
let checkedLinks = 0;
const files = htmlFiles(root);
for (const file of files) {
  const html = readFileSync(file, "utf8");
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
    checkedLinks++;
    assert.equal(isShoppingSuspended(href.replaceAll("&amp;", "&")), false, `${file}: ${href}`);
  }
  if (file.includes(`${resolve(root, "blog")}/`) && file !== join(root, "blog/index.html")) {
    articles++;
    assert.match(html, /<title>[^<]+<\/title>/, `Missing article title: ${file}`);
    assert.match(html, /<meta name="description" content="[^"]+"/, `Missing description: ${file}`);
    assert.match(html, /<link rel="canonical" href="https:\/\/hardhousecoffee.com\/blog\//, file);
    assert.match(html, /<meta property="og:title"/, `Missing OG title: ${file}`);
    assert.match(html, /<h1\b/, `Missing article heading: ${file}`);
  }
}
assert.ok(articles > 0);
const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
assert.ok(!sitemap.includes("https://hardhousecoffee.com/products"));
const redirect = readFileSync(join(root, "products/index.html"), "utf8");
assert.match(redirect, /window\.location\.replace\("\/"\)/);
assert.match(redirect, /http-equiv="refresh" content="0;url=\/"/);
assert.ok(!redirect.includes("Shop Products"));
const earlyRedirect = readFileSync(join(root, "index.html"), "utf8")
  .match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(earlyRedirect, "Missing early redirect guard");
for (const pathname of ["/products", "/products/", "/products/index.html", "/", "/blog"]) {
  const destinations = [];
  runInNewContext(earlyRedirect, {
    window: { location: { pathname, replace: (url) => destinations.push(url) } },
  });
  assert.deepEqual(destinations, pathname.startsWith("/products") ? ["/"] : [], pathname);
}
console.log(`PASS: ${blocked.length} blocked and ${allowed.length} preserved URL cases`);
console.log(`PASS: ${files.length} HTML documents, ${checkedLinks} anchors, ${articles} articles with SEO metadata`);
console.log("PASS: products redirect and sitemap exclusion; Printify URLs remain allowed");
console.log("PASS: early redirect guard redirects only suspended shop paths");
