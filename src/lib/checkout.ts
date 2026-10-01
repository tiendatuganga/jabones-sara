const TRACKING_KEYS = [
  "src",
  "sck",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

/** Copies Hotmart/UTM tracking params from the page's query string onto the checkout URL. */
export function withTracking(href: string, search: string): string {
  try {
    const target = new URL(href);
    const source = new URLSearchParams(search);
    for (const key of TRACKING_KEYS) {
      const value = source.get(key);
      if (value) target.searchParams.set(key, value);
    }
    return target.toString();
  } catch {
    return href;
  }
}
