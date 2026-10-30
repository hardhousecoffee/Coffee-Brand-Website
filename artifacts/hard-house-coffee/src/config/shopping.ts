// Restore only after Associates approval and verification of the tracking links.
export const AMAZON_SHOPPING_ENABLED: boolean = false;

export function isAmazonShoppingUrl(href: string): boolean {
  try {
    const url = new URL(href, "https://hardhousecoffee.com");
    const host = url.hostname.toLowerCase();
    return (
      ((host === "hardhousecoffee.com" || host === "www.hardhousecoffee.com") &&
        /^\/products(?:\/|$)/i.test(url.pathname)) ||
      /(^|\.)amzn\.(to|eu)$/.test(host) ||
      /(^|\.)amazon\.[a-z.]+$/.test(host) ||
      /(^|\.)a\.co$/.test(host)
    );
  } catch {
    return false;
  }
}

export function isShoppingSuspended(href: string): boolean {
  return !AMAZON_SHOPPING_ENABLED && isAmazonShoppingUrl(href);
}
