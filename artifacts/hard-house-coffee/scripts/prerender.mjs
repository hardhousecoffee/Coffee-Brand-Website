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
// react-helmet-async with renderToString emits head tags (title, meta, link)
// into the rendered body HTML rather than filling helmetContext.  We must:
//   1. Extract those tags from the body string.
//   2. Remove them from the body so they do not appear in <div id="root">.
//   3. Replace/inject them in the correct <head> section of the template,
//      overriding the generic placeholder values.
// ─────────────────────────────────────────────────────────────────────────────
function extractAndClean(html) {
  let cleanHtml = html;
  const extracted = {};

  const patterns = {
    title:     /<title>(?!Hard House Coffee<)([^<]*)<\/title>/,
    titleFull: /<title>[^<]*<\/title>/g,
    metaDesc:  /<meta\s+(?:name="description"\s+content|content="[^"]*"\s+name="description")[^>]*\/?>/,
    ogTitle:   /<meta\s+property="og:title"[^>]*\/?>/,
    ogDesc:    /<meta\s+property="og:description"[^>]*\/?>/,
    canonical: /<link\s+rel="canonical"[^>]*\/?>/,
    preloads:  /<link\s+rel="preload"[^>]*\/?>/g,
  };

  // Extract the page-specific title (not the generic fallback)
  const titleMatch = html.match(/<title>([^<]+)<\/title>/g);
  if (titleMatch && titleMatch.length > 0) {
    // Use the last title tag found (page-specific Helmet title)
    extracted.title = titleMatch[titleMatch.length - 1];
    // Remove ALL title tags from body so none appear in <div id="root">
    cleanHtml = cleanHtml.replace(/<title>[^<]*<\/title>/g, "");
  }

  const metaDescMatch = html.match(/<meta\s+name="description"[^>]*\/?>/);
  if (metaDescMatch) {
    extracted.metaDesc = metaDescMatch[0];
    cleanHtml = cleanHtml.replace(metaDescMatch[0], "");
  }

  const ogTitleMatch = html.match(/<meta\s+property="og:title"[^>]*\/?>/);
  if (ogTitleMatch) {
    extracted.ogTitle = ogTitleMatch[0];
    cleanHtml = cleanHtml.replace(ogTitleMatch[0], "");
  }

  const ogDescMatch = html.match(/<meta\s+property="og:description"[^>]*\/?>/);
  if (ogDescMatch) {
    extracted.ogDesc = ogDescMatch[0];
    cleanHtml = cleanHtml.replace(ogDescMatch[0], "");
  }

  const canonicalMatch = html.match(/<link\s+rel="canonical"[^>]*\/?>/);
  if (canonicalMatch) {
    extracted.canonical = canonicalMatch[0];
    cleanHtml = cleanHtml.replace(canonicalMatch[0], "");
  }

  // Move preload links out of body (they are valid in head too)
  const preloadMatches = [...html.matchAll(/<link\s+rel="preload"[^>]*\/?>/g)];
  if (preloadMatches.length > 0) {
    extracted.preloads = preloadMatches.map((m) => m[0]).join("\n    ");
    for (const m of preloadMatches) {
      cleanHtml = cleanHtml.replace(m[0], "");
    }
  }

  return { cleanHtml, extracted };
}

function injectIntoTemplate(tmpl, cleanHtml, extracted) {
  let out = tmpl.replace(/<!--SSR-START-->[\s\S]*?<!--SSR-END-->/, cleanHtml);

  // Replace generic title with page-specific title
  if (extracted.title) {
    out = out.replace(/<title>[^<]*<\/title>/, extracted.title);
  }

  // Replace generic meta description with page-specific one
  if (extracted.metaDesc) {
    out = out.replace(/<meta\s+name="description"[^>]*\/?>/, extracted.metaDesc);
  }

  // Replace or inject og:title
  if (extracted.ogTitle) {
    if (out.includes('property="og:title"')) {
      out = out.replace(/<meta\s+property="og:title"[^>]*\/?>/, extracted.ogTitle);
    } else {
      out = out.replace("</head>", `    ${extracted.ogTitle}\n  </head>`);
    }
  }

  // Replace or inject og:description
  if (extracted.ogDesc) {
    if (out.includes('property="og:description"')) {
      out = out.replace(/<meta\s+property="og:description"[^>]*\/?>/, extracted.ogDesc);
    } else {
      out = out.replace("</head>", `    ${extracted.ogDesc}\n  </head>`);
    }
  }

  // Inject canonical before </head>
  if (extracted.canonical) {
    out = out.replace("</head>", `    ${extracted.canonical}\n  </head>`);
  }

  // Inject preload hints before </head>
  if (extracted.preloads) {
    out = out.replace("</head>", `    ${extracted.preloads}\n  </head>`);
  }

  return out;
}

console.log(`\nPre-rendering ${ROUTES.length} pages...\n`);

for (const route of ROUTES) {
  const { path: url, changefreq, priority } = route;
  try {
    const { html } = render(url);
    const { cleanHtml, extracted } = extractAndClean(html);
    const output = injectIntoTemplate(template, cleanHtml, extracted);

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
