import type { MetadataRoute } from "next";
import { seoPages } from "@/config/seo-pages";
import { siteConfig } from "@/config/site";

/**
 * Every indexable URL, taken from src/config/seo-pages.ts — so a page cannot
 * ship with metadata but no sitemap entry, or the other way round.
 *
 * Two things left out on purpose:
 *  - `changefreq` and `priority`. Google has said for years that it ignores
 *    both.
 *  - `new Date()`. Generating lastmod at build time told Google that every
 *    page changed on every deploy, which teaches it to disregard the field.
 *    The date now comes from each page's `lastModified`.
 *
 * Never list a URL here that 404s, redirects, or is marked noindex.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(seoPages).map(([path, page]) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date(page.lastModified),
  }));
}
