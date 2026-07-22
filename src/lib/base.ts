// Prefix an absolute site path with Astro's configured `base` so links and
// asset URLs work both locally and under the GitHub Pages subpath (/Portfolio).
// Usage: withBase("/projects/foo") or withBase("/resume.pdf")
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. "/Portfolio/" or "/"
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const trimmedPath = path.startsWith("/") ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}`;
}
