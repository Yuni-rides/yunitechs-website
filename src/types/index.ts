export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

/** Hero of a service detail page. Copy and artwork differ per service. */
export type ServiceBanner = {
  /** Sits after the company name in the eyebrow, e.g. "App Development". */
  eyebrow: string;
  heading: string;
  body: string;
  image: { src: string; alt: string };
};

/** "Overview" block on a service detail page. */
export type ServiceOverviewContent = {
  eyebrow: string;
  heading: string;
  body: string;
  image: { src: string; alt: string };
};

/** One cell of the "what we offer" grid. `icon` names a lucide icon. */
export type ServiceOfferItem = {
  icon: string;
  title: string;
  body: string;
};

export type ServiceOfferContent = {
  eyebrow: string;
  heading: string;
  body: string;
  items: ServiceOfferItem[];
};

export type Service = {
  slug: string;
  title: string;
  /** Sub-services listed inside the expanded panel */
  items: string[];
  image: { src: string; width: number; height: number; alt: string };
  banner: ServiceBanner;
  overview: ServiceOverviewContent;
  offer: ServiceOfferContent;
  href: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
};
