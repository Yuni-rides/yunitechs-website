import { sameAs, siteConfig } from "@/config/site";

/**
 * JSON-LD builders.
 *
 * These exist so Google (and the AI assistants that read the same markup) can
 * tell what this site is, who runs it, and how one page relates to another —
 * none of which is guessable from the page copy alone.
 *
 * Validate anything added here with Google's Rich Results Test before shipping.
 */

const abs = (path: string) => new URL(path, siteConfig.url).toString();

const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

/** The company. Every other block points back at this one by @id. */
export function organizationSchema() {
  const office = siteConfig.offices[0];

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.legalName,
    alternateName: "Yuni Tech",
    url: siteConfig.url,
    logo: abs("/images/logo.png"),
    description: siteConfig.description,
    email: siteConfig.links.email,
    telephone: siteConfig.links.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.postal.street,
      addressLocality: office.postal.locality,
      addressRegion: office.postal.region,
      postalCode: office.postal.postalCode,
      addressCountry: office.postal.country,
    },
    sameAs: [...sameAs],
  };
}

/** The site itself, so Google can attribute pages to one publication. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US",
  };
}

/** The San Francisco office, as a place a local search can return. */
export function professionalServiceSchema() {
  const office = siteConfig.offices[0];

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#san-francisco`,
    name: siteConfig.legalName,
    parentOrganization: { "@id": ORGANIZATION_ID },
    url: siteConfig.url,
    image: abs(siteConfig.ogImage),
    telephone: siteConfig.links.phoneE164,
    email: siteConfig.links.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: office.postal.street,
      addressLocality: office.postal.locality,
      addressRegion: office.postal.region,
      postalCode: office.postal.postalCode,
      addressCountry: office.postal.country,
    },
    areaServed: { "@type": "Country", name: "United States" },
  };
}

/**
 * The trail from the homepage down to this page. `items` excludes the home
 * crumb, which is added here, and excludes nothing else — the last entry is
 * the current page.
 */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: abs(item.path),
      }),
    ),
  };
}

/** One service we sell, on its own service page. */
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: abs(path),
    serviceType: name,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "United States" },
  };
}

/** A case study. It is work we made, so CreativeWork rather than Article. */
export function caseStudySchema({
  name,
  description,
  path,
  image,
  dateModified,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: abs(path),
    image: abs(image),
    creator: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    ...(dateModified ? { dateModified } : {}),
  };
}
