import { editorialCollections, type EditorialCollectionId } from "@/data/editorialCollections";

export const blogCategories = ["All", "Gear Reviews", "Brewing Guides", "Bean Picks", "Espresso Machines", "Coffee Culture"];
const returnKey = "hhcBlogReturn";

export function readBlogFilters(search: string) {
  const params = new URLSearchParams(search);
  const collection = params.get("collection");
  const category = params.get("cat") ?? "All";
  return {
    category: blogCategories.includes(category) ? category : "All",
    collection: collection && Object.prototype.hasOwnProperty.call(editorialCollections, collection)
      ? collection as EditorialCollectionId
      : null,
  };
}

export function blogCategoryUrl(category: string, search = "") {
  const params = new URLSearchParams(search);
  params.delete("collection");
  if (category === "All" || !blogCategories.includes(category)) params.delete("cat");
  else params.set("cat", category);
  return `/blog${params.size ? `?${params.toString()}` : ""}`;
}

function normalizedBlogOrigin(search: string) {
  const { category, collection } = readBlogFilters(search);
  return collection ? `/blog?collection=${encodeURIComponent(collection)}` : blogCategoryUrl(category);
}

function stateObject(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : {};
}

// Keep the origin on the article's own history entry, not in a global "last
// category" store. A fresh direct article visit must not inherit stale filters.
export function blogNavigationTarget(
  destination: string,
  currentPath: string,
  currentSearch: string,
  currentState: unknown,
  requestedState?: unknown,
) {
  let origin: string | undefined;
  if (currentPath === "/blog") origin = normalizedBlogOrigin(currentSearch);
  else if (currentPath.startsWith("/blog/")) {
    const stored = stateObject(currentState)[returnKey];
    if (typeof stored === "string" && (stored === "/blog" || stored.startsWith("/blog?"))) {
      origin = normalizedBlogOrigin(stored.slice("/blog".length));
    }
  }
  const target = destination === "/blog" && currentPath.startsWith("/blog/") && origin ? origin : destination;
  return {
    target,
    state: target.startsWith("/blog/") && origin
      ? { ...stateObject(requestedState), [returnKey]: origin }
      : requestedState,
  };
}
