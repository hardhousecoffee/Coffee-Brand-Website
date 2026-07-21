import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distPublic = join(root, "dist/public");
const distServer = join(root, "dist/server");

// Single master list — add one entry here when you write a new blog post.
// Everything else (static HTML file, sitemap entry) is automatic.
export const ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.6" },
  { path: "/blog", changefreq: "weekly", priority: "0.9" },
  { path: "/blog/best-espresso-machines-for-beginners-2026-guide", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/the-art-of-the-perfect-pour-over", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/why-every-coffee-lover-needs-a-grinder-first-2026-guide", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/best-espresso-machines-2026-guide-tested-and-ranked", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/top-5-dark-roast-beans-for-espresso-in-2026", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/the-rise-of-specialty-coffee-bars", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/cold-brew-mastery-a-complete-home-guide", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/ethiopia-vs-colombia-a-complete-coffee-origin-guide", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/the-300-dollar-sweet-spot-real-espresso-at-home", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/stepping-up-what-crossing-1000-mark-actually-buys-you", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/the-icon-la-marzocco-linea-micra-worth-the-obsession", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/living-the-dream-mind-blowing-world-of-20000-espresso-gear", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/seattle-deep-roots-emerald-city-coffee-scene", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/los-angeles-old-hollywood-glamour-meets-new-wave", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/san-francisco-birthplace-of-specialty-revolution", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/new-york-city-italian-espresso-bars-to-fast-paced-cafes", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/seed-to-sprout-secret-lives-of-coffee-farmers", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/the-magic-of-processing-washing-and-drying-shapes-flavor", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/the-art-of-the-roast-finding-perfect-profile-in-the-drum", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/logistics-and-freshness-journey-to-your-local-shelf", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/inside-world-barista-championship-olympics-of-caffeine", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/meet-the-masters-what-makes-top-tier-barista-truly-elite", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/beyond-the-supermarket-navigating-notable-specialty-coffee-brands", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/three-most-expensive-coffee-brands-on-earth-luxury-in-a-mug", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/global-excellence-onyx-coffee-lab-bentonville-arkansas", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/old-world-perfection-ditta-artigianale-florence-italy", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/master-of-precision-glitch-coffee-roasters-tokyo-japan", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/parisian-elegance-cafe-lomi-paris-france", changefreq: "monthly", priority: "0.8" },
  { path: "/products", changefreq: "weekly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.5" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
  { path: "/terms-of-use", changefreq: "yearly", priority: "0.3" },
];

console.log("Loading SSR bundle...");
const { render } = await import(join(distServer, "entry-server.js"));

const template = readFileSync(join(distPublic, "index.html"), "utf-8");

let successCount = 0;
let failCount = 0;

console.log(`\nPre-rendering ${ROUTES.length} pages...\n`);

for (const route of ROUTES) {
  const { path: url } = route;
  try {
    const { html, helmetContext } = render(url);
    const { helmet } = helmetContext;

    const helmetHead = helmet
      ? [
          helmet.title?.toString() || "",
          helmet.meta?.toString() || "",
          helmet.link?.toString() || "",
        ]
          .filter((s) => s.trim())
          .join("\n    ")
      : "";

    let output = template
      .replace(/<!--SSR-START-->[\s\S]*?<!--SSR-END-->/, html)
      .replace("</head>", `    ${helmetHead}\n  </head>`);

    const outDir =
      url === "/" ? distPublic : join(distPublic, url.slice(1));

    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), output);

    console.log(`  ✓ ${url}`);
    successCount++;
  } catch (err) {
    console.error(`  ✗ ${url}: ${err.message}`);
    failCount++;
  }
}

// Auto-generate sitemap.xml from the same ROUTES list
const BASE = "https://hardhousecoffee.com";
const today = new Date().toISOString().slice(0, 10);
const sitemapEntries = ROUTES.map(
  ({ path, changefreq, priority }) => `
  <url>
    <loc>${BASE}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
).join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapEntries}
</urlset>
`;

writeFileSync(join(distPublic, "sitemap.xml"), sitemap);
console.log("\n  ✓ sitemap.xml generated");

console.log(`\nPre-render complete: ${successCount} succeeded, ${failCount} failed`);
if (failCount > 0) process.exit(1);
