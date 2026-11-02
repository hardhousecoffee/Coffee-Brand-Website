import assert from "node:assert/strict";
import { blogCategories, blogCategoryUrl, blogNavigationTarget, readBlogFilters } from "../src/lib/blogNavigation";

const article = "/blog/the-300-dollar-sweet-spot-real-espresso-at-home";
for (const category of blogCategories) {
  const url = blogCategoryUrl(category);
  const query = url.slice("/blog".length);
  assert.equal(readBlogFilters(query).category, category, `URL round trip: ${category}`);
  const opened = blogNavigationTarget(article, "/blog", query, null);
  assert.equal(opened.target, article, "Article URL must stay canonical");
  assert.deepEqual(opened.state, { hhcBlogReturn: url });
  const returned = blogNavigationTarget("/blog", article, "", opened.state);
  assert.equal(returned.target, url, `Back to Blog destination: ${category}`);
  const related = blogNavigationTarget("/blog/another-article", article, "", opened.state);
  assert.deepEqual(related.state, opened.state, "Related article must retain its blog origin");
  const explicit = blogNavigationTarget("/blog?cat=Bean+Picks", article, "", opened.state);
  assert.equal(explicit.target, "/blog?cat=Bean+Picks", "An explicit destination must not be overridden");
}
assert.equal(blogNavigationTarget("/blog", article, "", null).target, "/blog", "Direct article defaults to All");
assert.equal(blogNavigationTarget("/blog", "/", "", { hhcBlogReturn: "/blog?cat=Gear+Reviews" }).target, "/blog", "No stale category on homepage");
assert.equal(readBlogFilters("?cat=unknown").category, "All");
assert.equal(readBlogFilters("?collection=unknown&cat=Bean+Picks").category, "Bean Picks");
assert.equal(blogNavigationTarget("/blog", article, "", { hhcBlogReturn: "https://example.com" }).target, "/blog", "External origin rejected");
assert.equal(blogCategoryUrl("Espresso Machines", "?collection=gear-reviews&utm_source=test"), "/blog?utm_source=test&cat=Espresso+Machines");
assert.equal(blogCategoryUrl("All", "?cat=Bean+Picks&collection=gear-reviews"), "/blog");
assert.equal(blogNavigationTarget("/about", article, "", { hhcBlogReturn: "/blog?cat=Gear+Reviews" }).target, "/about", "Unrelated navigation untouched");
assert.deepEqual(blogNavigationTarget(article, "/blog", "?cat=Gear+Reviews", null, { example: true }).state, { example: true, hhcBlogReturn: "/blog?cat=Gear+Reviews" });
console.log(`PASS: all ${blogCategories.length} categories, canonical article links, scoped return state, related links, direct/default visits, invalid filters, explicit destinations and unrelated navigation`);
