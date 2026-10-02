export const siteConfig = {
  name: "Yuni Tech.",
  /** The company's registered name, used in structured data. */
  legalName: "Yuni Tech Inc.",
  shortName: "Yuni",
  description:
    "Yuni Tech builds custom websites, mobile apps, CRMs and AI automation for startups and growing companies, from our office in San Francisco.",
  /**
   * Must be the host the site is actually served on. yunitechs.com currently
   * 308-redirects to www.yunitechs.com in Vercel, so every canonical, OG url
   * and sitemap entry names www. If the Vercel domain setting is ever flipped
   * to redirect www to the apex instead, change this one line to match — do
   * not add a redirect in next.config.ts while Vercel redirects the other way,
   * or the two will loop.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yunitechs.com",
  locale: "en_US",
  links: {
    email: "info@yunitechs.com",
    supportEmail: "info@yunitechs.com",
    linkedin: "https://www.linkedin.com/company/yuni-techs/",
    // TODO: the handle is still @yunisolution. Rename the account, then update
    // this and the sameAs list below.
    instagram: "https://instagram.com/yunisolution",
    facebook: "https://www.facebook.com/people/Yuni-Tech-Inc/61594965892484/",
    youtube: "https://www.youtube.com/channel/UCuKQPjDa7--OGy8cbMyLDVw",
    phone: "+1 (415) 791 5224",
    /** E.164, for tel: links and structured data. */
    phoneE164: "+14157915224",
  },
  offices: [
    {
      city: "San Francisco",
      address: ["2261 Market St, Suite 2015", "San Francisco, CA 94114"],
      /** Broken out for the LocalBusiness JSON-LD. */
      postal: {
        street: "2261 Market St, Suite 2015",
        locality: "San Francisco",
        region: "CA",
        postalCode: "94114",
        country: "US",
      },
    },
  ],
  tagline:
    "Empowering businesses through innovative technology, creative design, and scalable digital solutions.",
  ogImage: "/images/og-image.png",
} as const;

/**
 * The profiles Google can use to confirm this site and the company behind it
 * are the same entity. Only list profiles that are public and actually ours.
 */
export const sameAs = [
  siteConfig.links.linkedin,
  siteConfig.links.facebook,
  siteConfig.links.youtube,
] as const;

export type SiteConfig = typeof siteConfig;
