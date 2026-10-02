import type { Metadata } from "next";
import { getSeoPage } from "@/config/seo-pages";
import { siteConfig } from "@/config/site";

type PageMetadataOptions = {
  /** The page's own path, e.g. "/services/crm-system". Looked up in seo-pages. */
  path?: string;
  /** Only for pages not listed in seo-pages, or to override one field. */
  title?: string;
  description?: string;
  image?: string;
  /** Describe the image, not the page. Falls back to the OG title. */
  imageAlt?: string;
  /** Article pages only. ISO date. */
  publishedTime?: string;
  noIndex?: boolean;
};

/**
 * Builds a page's metadata from `src/config/seo-pages.ts`.
 *
 * Two things here are deliberate:
 *
 *  - The title is always set, and always as `{ absolute }`. Passing
 *    `title: undefined` does not fall back to the layout's default — it
 *    overrides it with nothing, which is how the homepage shipped with an
 *    empty `<title>`. `absolute` also stops the layout template appending a
 *    second "| Yuni Tech" to titles that already end with one.
 *  - `canonical` and `og:url` are built from `siteConfig.url`, so they must
 *    name the host the site is actually served on. A canonical pointing at a
 *    URL that redirects is a canonical Google has to resolve before it can
 *    index anything.
 */
export function buildMetadata({
  path = "/",
  title,
  description,
  image = siteConfig.ogImage,
  imageAlt,
  publishedTime,
  noIndex = false,
}: PageMetadataOptions = {}): Metadata {
  const seo = getSeoPage(path);

  const resolvedTitle = title ?? seo?.title ?? siteConfig.name;
  const resolvedDescription =
    description ?? seo?.description ?? siteConfig.description;
  const ogTitle = seo?.ogTitle ?? resolvedTitle;
  const ogType = seo?.ogType ?? "website";
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: { absolute: resolvedTitle },
    description: resolvedDescription,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      ...(ogType === "article"
        ? {
            type: "article" as const,
            publishedTime,
            modifiedTime: seo?.lastModified,
          }
        : { type: "website" as const }),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt ?? ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: resolvedDescription,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
