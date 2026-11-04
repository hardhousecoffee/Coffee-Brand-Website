import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";

const app = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const workspace = resolve(app, "../..");
const root = resolve(app, "dist/public");
const route = "/blog/stepping-up-what-crossing-1000-mark-actually-buys-you";
const retired = "/blog/the-icon-la-marzocco-linea-micra-worth-the-obsession";
const html = readFileSync(resolve(root, `.${route}/index.html`), "utf8");
const zip = resolve(workspace, "attached_assets/hard_house_espresso_selected_for_replit_1793819120589.zip");
const files = [
  ["breville-oracle-jet", "01_Breville_Oracle_Jet/IMG_2426.jpeg", "$1,999.95"],
  ["terra-kaffe-tk-02", "02_Terra_Kaffe_TK-02/IMG_2427.jpeg", "$1,795"],
  ["gaggia-accademia", "03_Gaggia_Accademia/IMG_2432.jpeg", "$1,599"],
  ["bosch-800-verocafe", "04_Bosch_800_Series_VeroCafe/IMG_2437.webp", "$2,499"],
  ["delonghi-primadonna-aromatic", "05_DeLonghi_PrimaDonna_Aromatic/IMG_2444.jpeg", "$2,499.95"],
  ["delonghi-eletta-explore", "06_DeLonghi_Eletta_Explore/IMG_2446.jpeg", "$1,999.99"],
  ["jura-e8", "07_Jura_E8/IMG_2449.jpeg", "$2,599"],
  ["meraki-gen-2", "08_Meraki_Gen_2/IMG_2454.jpeg", "$1,799"],
];
const hash = (data) => createHash("sha256").update(data).digest("hex");
let previous = -1;
for (const [id, image, price] of files) {
  const index = html.indexOf(`id="${id}"`);
  assert.ok(index > previous, `Profile absent or out of order: ${id}`);
  previous = index;
  const section = html.slice(index, html.indexOf("</section>", index));
  assert.ok(section.includes(price), `Reference price wrong: ${id}`);
  assert.ok(section.includes(`/images/premium-espresso/${image}`), `Wrong photograph: ${id}`);
  assert.ok(section.includes("height:auto") && section.includes("width:100%"), `Distorted image: ${id}`);
  const supplied = execFileSync("unzip", ["-p", zip, `images/${image}`]);
  assert.equal(hash(readFileSync(resolve(root, `images/premium-espresso/${image}`))), hash(supplied), `Supplied photo changed: ${image}`);
}
const bodyArticle = html.slice(html.indexOf('<article aria-label="Eight espresso'));
assert.ok(bodyArticle.indexOf("01_Breville_Oracle_Jet/IMG_2426.jpeg") < bodyArticle.indexOf("Eight machines at a glance"), "Lead photograph must precede comparison and lengthy copy");
assert.ok(bodyArticle.indexOf("Eight espresso machines from $1,000") < bodyArticle.indexOf("01_Breville_Oracle_Jet/IMG_2426.jpeg"), "First product must follow brief opening");
assert.ok(bodyArticle.indexOf('id="meraki-gen-2"') < bodyArticle.indexOf("Eight machines at a glance"), "Profiles must precede the comparison");
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
assert.ok(html.includes(`href="https://hardhousecoffee.com${route}"`));
assert.ok(html.includes("not a hands-on test") && html.includes("not live offers"));
assert.ok(html.includes("min-width:940px") && html.includes('aria-label="Eight-machine comparison; scroll horizontally on a narrow screen"'));
const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1]));
assert.ok(schemas.some((s) => s["@type"] === "Article" && s.url === `https://hardhousecoffee.com${route}`));
assert.ok(!schemas.some((s) => ["Review", "AggregateRating", "Offer"].includes(s["@type"])));
const sitemap = readFileSync(resolve(root, "sitemap.xml"), "utf8");
assert.ok(sitemap.includes(route) && !sitemap.includes(retired));
const redirect = readFileSync(resolve(root, `.${retired}/index.html`), "utf8");
assert.ok(redirect.includes(`window.location.replace("${route}")`) && redirect.includes("noindex,follow"));
const listing = readFileSync(resolve(root, "blog/index.html"), "utf8");
assert.ok(!listing.includes(retired) && listing.includes("8 Worth Buying Under $3,000"));
for (const [file, text] of [[route, html], ["/blog", listing]]) {
  for (const [, url] of text.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (!url.startsWith("/") || url.startsWith("//")) continue;
    const path = url.split(/[?#]/)[0];
    assert.ok(existsSync(resolve(root, `.${path}`)) || existsSync(resolve(root, `.${path}/index.html`)), `${file}: broken local link ${url}`);
  }
}
console.log("PASS: eight exact mapped photographs byte-for-byte, model order, reference prices and natural-proportion markup");
console.log("PASS: lead photo immediately follows opening, accessible comparison, metadata/schema, local links and retained URL");
console.log("PASS: retired Micra listing/sitemap exclusion and static GitHub Pages-compatible redirect");
