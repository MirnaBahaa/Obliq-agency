/* Prefixes site-relative paths with the deploy base path.
   Empty locally; "/Obliq-agency" in the GitHub Pages build (set in next.config.mjs).
   Absolute URLs, mailto:, tel: and #anchors pass through unchanged. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBase(path) {
  if (typeof path !== "string" || !path.startsWith("/") || path.startsWith("//")) return path;
  return BASE_PATH + path;
}
