import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distPublic = join(root, "dist/public");
const distServer = join(root, "dist/server");

console.log("Loading SSR bundle...");

// ROUTES comes from src/routes.config.ts via the compiled server bundle.
// This script does NOT maintain its own route list.
// To add a new blog post, edit only src/routes.config.ts.
const { render, ROUTES } = await import(join(distServer, "entry-server.js"));

const template = readFileSync(join(distPublic, "index.html"), "utf-8");
let successCount = 0;
let failCount = 0;

// ─────────────────────────────────────────────────────────────────────────────
// react-helmet-async with renderToString emits ALL head-managed tags
// (title, meta, link, etc.) into the rendered HTML string before the first
// structural element, rather than populating helmetContext.
//
// Strategy:
//   1. Split rendered HTML at the first structural element.
//      Everything before it = Helmet head tags.
//      Everything from it onwards = real page body content.
//   2. Strip generic placeholder tags (title, description, og) from the
//      template so nothing generic leaks through.
//   3. Inject the Helmet head tags + a fallback canonical (when the component
//      doesn't set one) just before </head>.
//   4. Inject the body content where the SSR markers were.
// ─────────────────────────────────────────────────────────────────────────────
function processPage(tmpl, html, url) {
  // Split: Helmet head tags appear before the first structural element
  const firstStructural = html.search(
    /<(?:div|header|main|nav|section|article|footer|figure|picture|h[1-6]|ul|ol|table|form)[^>a-zA-Z]/
  );

  let helmetHead = "";
  let bodyContent = html;
  if (firstStructural > 0) {
    helmetHead = html.slice(0, firstStructural).trim();
    bodyContent = html.slice(firstStructural);
  }

  // Remove generic placeholder tags from template — the page-specific ones
  // from Helmet will replace them during injection below.
  let out = tmpl
    .replace(/<title>[^<]*<\/title>/, "")
    .replace(/<meta\s+name="description"[^>]*\/?>/, "")
    .replace(/<meta\s+property="og:title"[^>]*\/?>/, "")
    .replace(/<meta\s+property="og:description"[^>]*\/?>/, "");

  // Inject body content (replaces static fallback between SSR markers)
  out = out.replace(/<!--SSR-START-->[\s\S]*?<!--SSR-END-->/, bodyContent);

  // Add a fallback canonical when the component's Helmet doesn't provide one.
  // The canonical URL matches the route exactly as defined in routes.config.ts.
  const hasCanonical = helmetHead.includes('rel="canonical"');
  if (!hasCanonical) {
    const href = url === "/" ? "https://hardhousecoffee.com/" : `https://hardhousecoffee.com${url}`;
    helmetHead += `\n    <link rel="canonical" href="${href}"/>`;
  }

  // Inject all Helmet head tags (plus canonical) just before </head>
  if (helmetHead.trim()) {
    out = out.replace("</head>", `    ${helmetHead.trim()}\n  </head>`);
  }

  return out;
}

console.log(`\nPre-rendering ${ROUTES.length} pages...\n`);

for (const route of ROUTES) {
  const { path: url } = route;
  try {
    const { html } = render(url);
    const output = processPage(template, html, url);

    const outDir = url === "/" ? distPublic : join(distPublic, url.slice(1));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), output);

    console.log(`  ✓ ${url}`);
    successCount++;
  } catch (err) {
    console.error(`  ✗ ${url}: ${err.message}`);
    failCount++;
  }
}

// Auto-generate sitemap.xml — derived from the same ROUTES list.
// <lastmod> is intentionally omitted: using the build date for all pages
// is misleading. Accurate per-page modification dates are not tracked.
const BASE = "https://hardhousecoffee.com";
const sitemapEntries = ROUTES.map(
  ({ path, changefreq, priority }) => `
  <url>
    <loc>${BASE}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
).join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapEntries}
</urlset>
`;

writeFileSync(join(distPublic, "sitemap.xml"), sitemap);
console.log("\n  ✓ sitemap.xml generated (no lastmod — build date omitted)");

console.log(`\nPre-render complete: ${successCount} succeeded, ${failCount} failed`);
if (failCount > 0) process.exit(1);
