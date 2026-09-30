export type ProductCapability = string;

/** One line of the large statement beside the overview copy. */
export type ProductStatementLine = { text: string; accent?: boolean };

export type ProductOverview = {
  eyebrow: string;
  /** One entry per line, as the design breaks it. */
  heading: string[];
  body: string[];
  statement: ProductStatementLine[];
};

export type ProductChallenge = {
  eyebrow: string;
  /** One entry per line, as the design breaks it. */
  heading: string[];
  body: string[];
  /** The bordered card at the foot of the panel. */
  note: string;
  map: { src: string; alt: string };
  inset: { src: string; alt: string };
};

export type Product = {
  name: string;
  eyebrow: string;
  /** One entry per line, as the design breaks it. */
  headingLines: string[];
  /** The stacked words beside the capability tags. */
  summaryLines: string[];
  capabilities: ProductCapability[];
  image: { src: string; alt: string };
  visit: { label: string; href: string };
  overview: ProductOverview;
  challenge: ProductChallenge;
};

/**
 * Yuni Tech's flagship product. A single object rather than a list with slug
 * routing: there is one product today, and `/product` can become
 * `/products/[slug]` the day a second one exists.
 */
export const product: Product = {
  name: "Yuni Rides",
  eyebrow: "Yuni Rides: Case Study",
  headingLines: [
    "We built more",
    "than a website.",
    "We built the",
    "system behind",
    "the ride.",
  ],
  summaryLines: ["Web +", "Mobile +", "Operations"],
  capabilities: [
    "Product Strategy",
    "UX/UI",
    "Web Development",
    "Mobile Platform",
    "Dispatch Technology",
    "Operational Systems",
  ],
  image: {
    src: "/images/productMainImage.png",
    alt: "The Yuni Rides platform shown on a laptop and a phone",
  },
  visit: { label: "Visit Yuni Rides", href: "https://yunirides.com" },
  overview: {
    eyebrow: "The Product",
    heading: [
      "Transportation is Complex.",
      "The Technology Behind It Shouldn't Be.",
    ],
    // TODO: confirm this copy against the source — it was transcribed from a
    // screenshot, and the final sentence was cut off in every crop supplied.
    body: [
      "Student transportation involves far more than assigning a driver to a passenger. Every ride depends on multiple moving parts — scheduling, driver availability, route coordination, communication, live ride visibility, safety requirements, documentation, and operational oversight.",
      "Yuni Rides needed a digital ecosystem capable of connecting those moving parts while keeping the experience simple for the people using it. We designed and developed a connected transportation platform where technology supports the entire journey, from trip assignment and dispatch to live tracking and reporting.",
    ],
    statement: [
      { text: "One platform." },
      { text: "Multiple users.", accent: true },
      { text: "One connected" },
      { text: "transportation", accent: true },
      { text: "operation.", accent: true },
    ],
  },
  challenge: {
    eyebrow: "The Challenge",
    heading: [
      "The Real Problem Wasn't Transportation.",
      "It Was Coordination.",
    ],
    // TODO: confirm this copy — transcribed from a screenshot.
    body: [
      "Transportation businesses operate in real time. Routes change. Drivers become unavailable. Pickup information must remain accurate. Families need confidence. Dispatchers need visibility. Operations teams need control.",
      "Managing these workflows through disconnected spreadsheets, phone calls, messages, and manual processes creates unnecessary complexity as an operation grows. Yuni Rides needed technology that could help bring the transportation lifecycle into one connected environment.",
    ],
    note: "The challenge was to turn a highly operational business into a scalable digital system without making the system difficult to use.",
    map: {
      src: "/images/productChallangeBanner.png",
      alt: "A Yuni Rides route plotted across a city map",
    },
    inset: {
      src: "/images/tripTracking.png",
      alt: "Trip tracking shown on a device",
    },
  },
};
