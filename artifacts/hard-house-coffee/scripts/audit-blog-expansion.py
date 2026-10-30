"""Read-only regression audit. Run after the regular production build.

python3 artifacts/hard-house-coffee/scripts/audit-blog-expansion.py
The baseline is the approved, published shop suspension, before blog expansion.
No network requests, package installations or publishing operations are performed.
"""
from pathlib import Path
from html.parser import HTMLParser
from html import unescape
from urllib.parse import urlparse, unquote
from collections import Counter
from difflib import SequenceMatcher
import subprocess
import re
import json
import xml.etree.ElementTree as ET

APP = Path(__file__).resolve().parents[1]
ROOT = APP.parents[1]
PUBLIC = APP / "dist/public"
BASELINE = "9da2fe3"


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.links, self.images, self.meta, self.h1 = [], [], {}, 0
        self.canonical = None
        self.in_main = False
        self.main_text = []
        self.all_text = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "a" and "href" in attrs:
            self.links.append(attrs["href"])
        if tag == "img":
            self.images.append(attrs)
        if tag == "meta":
            self.meta[attrs.get("name", attrs.get("property", ""))] = attrs.get("content")
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonical = attrs.get("href")
        if tag == "h1":
            self.h1 += 1
        if tag == "main":
            self.in_main = True

    def handle_endtag(self, tag):
        if tag == "main":
            self.in_main = False

    def handle_data(self, data):
        self.all_text.append(data)
        if self.in_main:
            self.main_text.append(data)


def original(path):
    return subprocess.check_output(["git", "show", f"{BASELINE}:{path}"], cwd=ROOT, text=True)


old_routes = set(re.findall(r'path:\s*"(/blog/[^"]+)"', original("artifacts/hard-house-coffee/src/routes.config.ts")))
assert len(old_routes) == 28
pages = {}
for file in (PUBLIC / "blog").glob("*/index.html"):
    route = "/blog/" + file.parent.name
    pages[route] = (Page(file.read_text()), file.read_text())
assert len(pages) == 40, f"Expected 40 article pages, got {len(pages)}"
assert old_routes.issubset(pages), "An original article URL is missing"
new_routes = set(pages) - old_routes
assert len(new_routes) == 12
titles, descriptions = [], []
images, internal_links = set(), 0
for route, (page, html) in pages.items():
    assert page.h1 == 1, (route, page.h1)
    assert page.canonical == "https://hardhousecoffee.com" + route, route
    title = unescape(re.search(r"<title>(.*?)</title>", html, re.S)[1])
    titles.append(title)
    description = page.meta.get("description")
    assert description and len(description) > 40, route
    descriptions.append(description)
    # Legacy articles use a content div rather than a main element.
    assert len(" ".join(page.main_text or page.all_text).split()) > 150, f"Missing rendered content: {route}"
    if route in new_routes:
        assert page.meta.get("og:image") and page.meta.get("twitter:card"), route
        schemas = [json.loads(s) for s in re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)]
        assert any(s.get("@type") == "Article" and s.get("url") == page.canonical for s in schemas), route
    for image in page.images:
        src = image.get("src", "")
        if src.startswith("/"):
            assert (APP / "public" / src.lstrip("/")).is_file(), (route, src)
            images.add(src)
    for href in page.links:
        parsed = urlparse(href)
        if not parsed.netloc or parsed.netloc in {"hardhousecoffee.com", "www.hardhousecoffee.com"}:
            path = unquote(parsed.path).rstrip("/") or "/"
            if not path.startswith("/"):
                continue
            assert path != "/products" and not path.startswith("/products/"), (route, href)
            target = PUBLIC / path.lstrip("/")
            assert target.is_file() or (target / "index.html").is_file(), (route, href)
            internal_links += 1
        assert not re.search(r"(^|\.)amazon\.[a-z.]+$|(^|\.)amzn\.(to|eu)$|(^|\.)a\.co$", parsed.netloc), (route, href)
assert len(set(titles)) == 40, "Duplicate titles"
assert len(set(descriptions)) == 40, "Duplicate meta descriptions"

# Verify that every authored introduction and paragraph is present in static HTML.
paragraphs = 0
for file in (APP / "src/data/articles").glob("*.ts"):
    text = file.read_text()
    starts = list(re.finditer(r'\n    slug: "([^"]+)"', text))
    for i, match in enumerate(starts):
        block = text[match.start():starts[i + 1].start() if i + 1 < len(starts) else len(text)]
        route = "/blog/" + match[1]
        rendered = " ".join(" ".join(pages[route][0].main_text).split())
        expected = re.findall(r'intro: ("(?:\\.|[^"\\])*")', block)
        for group in re.findall(r"paragraphs:\s*\[(.*?)\]", block, re.S):
            expected.extend(re.findall(r'"(?:\\.|[^"\\])*"', group))
        assert expected, route
        for encoded in expected:
            paragraph = " ".join(json.loads(encoded).split())
            assert paragraph in rendered, f"Missing substantive paragraph: {route}: {paragraph[:70]}"
            paragraphs += 1

sitemap = ET.parse(PUBLIC / "sitemap.xml")
locations = {node.text for node in sitemap.iter() if node.tag.endswith("}loc")}
assert {f"https://hardhousecoffee.com{r}" for r in pages}.issubset(locations)
assert "https://hardhousecoffee.com/products" not in locations
listing = Page((PUBLIC / "blog/index.html").read_text())
assert set(pages).issubset(set(listing.links)), "An article is not discoverable from Blog"

restored = {
    "top-5-dark-roast-beans-for-espresso-in-2026",
    "the-art-of-the-perfect-pour-over",
    "cold-brew-mastery-a-complete-home-guide",
    "why-every-coffee-lover-needs-a-grinder-first-2026-guide",
    "ethiopia-vs-colombia-a-complete-coffee-origin-guide",
}
for slug in restored:
    page, html = pages["/blog/" + slug]
    assert "Recommended Coffee Beans" in html
    assert len([i for i in page.images if "/products/coffee-beans/" in i.get("src", "")]) == 3, slug
    assert "View on Amazon" not in html

# Byte preservation and strict scope: original shell, catalog, assets and deployment.
protected = [
    "src/pages/Home.tsx", "src/components/Navbar.tsx", "src/components/PageNav.tsx", "src/components/Footer.tsx",
    "src/pages/Products.tsx", "src/config/shopping.ts", "src/App.tsx",
    "src/index.css", "public", "vite.config.ts", "serve-static.mjs",
]
subprocess.run(["git", "diff", "--exit-code", BASELINE, "--",
                *[str((APP / p).relative_to(ROOT)) for p in protected],
                ".github/workflows", ".replit"], cwd=ROOT, check=True, capture_output=True)

# Mechanical overlap screen complements the human purpose/product review matrix.
max_overlap = (0.0, "", "")
new = sorted(new_routes)
for i, left in enumerate(new):
    a = " ".join(pages[left][0].main_text).lower()
    for right in new[i + 1:]:
        b = " ".join(pages[right][0].main_text).lower()
        score = SequenceMatcher(None, a.split(), b.split(), autojunk=False).ratio()
        max_overlap = max(max_overlap, (score, left, right))
assert max_overlap[0] < 0.55, f"Investigate excessive text overlap: {max_overlap}"
print(f"PASS: {len(old_routes)} original + {len(new_routes)} new articles; unique titles and descriptions")
print(f"PASS: {paragraphs} authored paragraphs/intros appear in complete static article HTML")
print(f"PASS: {internal_links} internal article-page links; {len(images)} unique local image paths")
print("PASS: all 40 articles discoverable in Blog and sitemap, correct canonical URLs")
print("PASS: 15 restored recommendation images; no purchase links")
print("PASS: catalog, original assets, homepage, navigation, footer, CSS, hosting and shop flag unchanged")
print(f"PASS: mechanical overlap screen; highest new/new token similarity {max_overlap[0]:.1%}")
print("NOTE: a similarity score is not proof of distinct search intent; consult the editorial inventory.")
