export const siteConfig = {
  name: "Yuni Tech Inc.",
  shortName: "Yuni",
  description:
    "Yuni Tech Inc. builds modern digital products — web, mobile, and cloud solutions engineered for growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yunitechs.com",
  locale: "en_US",
  keywords: [
    "Yuni Tech Inc.",
    "software development",
    "web development",
    "mobile app development",
    "digital solutions",
  ],
  links: {
    email: "info@yunitechs.com",
    supportEmail: "info@yunitechs.com",
    linkedin: "https://www.linkedin.com/company/yuni-techs/home/",
    instagram: "https://instagram.com/yunisolution",
    facebook: "https://www.facebook.com/people/Yuni-Tech-Inc/61594965892484/",
    youtube: "https://www.youtube.com/channel/UCuKQPjDa7--OGy8cbMyLDVw",
    phone: "+1 (415) 791 5224",
  },
  offices: [
    {
      city: "San Francisco",
      address: ["2261 Market St, Suite 2015", "San Francisco, CA 94114"],
    },
  ],
  tagline:
    "Empowering businesses through innovative technology, creative design, and scalable digital solutions.",
  ogImage: "/images/og-image.png",
} as const;

export type SiteConfig = typeof siteConfig;
