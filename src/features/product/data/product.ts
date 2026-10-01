export type ProductCapability = string;

export type ProductStatementLine = { text: string; accent?: boolean };

export type ProductOverview = {
  eyebrow: string;
  heading: string[];
  body: string[];
  statement: ProductStatementLine[];
};

export type ProductChallenge = {
  eyebrow: string;
  heading: string[];
  body: string[];
  note: string;
  map: { src: string; alt: string };
  inset: { src: string; alt: string };
};

export type ProductFlowStep = { icon: string; label: string };

export type ProductFlow = {
  heading: string[];
  body: string;
  steps: ProductFlowStep[];
  cta: { label: string; href: string };
};

export type ProductEcosystem = {
  eyebrow: string;
  heading: string[];
  body: string[];
  tagline: string;
  image: { src: string; alt: string };
};

export type ProductDigital = {
  eyebrow: string;
  heading: string[];
  body: string;
  statement: { text: string; accent?: boolean }[];
  image: { src: string; alt: string };
};

export type ProductScalability = {
  eyebrow: string;
  heading: string[];
  body: string;
  /**
   * `iconWidth` is the mask box as a share of the card's content box. It is
   * per-card because each PNG carries a different amount of its own padding,
   * so one shared size would render the three glyphs at different sizes.
   */
  cards: { icon: string; label: string; iconWidth: string }[];
  map: { src: string; alt: string };
};

export type Product = {
  name: string;
  eyebrow: string;
  headingLines: string[];
  summaryLines: string[];
  capabilities: ProductCapability[];
  image: { src: string; alt: string };
  visit: { label: string; href: string };
  overview: ProductOverview;
  challenge: ProductChallenge;
  flow: ProductFlow;
  ecosystem: ProductEcosystem;
  digital: ProductDigital;
  scalability: ProductScalability;
};

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
  flow: {
    heading: ["One Ride. Seven Moving", "Parts. Zero Confusion."],
    // TODO: confirm this copy — transcribed from a screenshot.
    body: "The platform was designed around the actual movement of a ride. Information needed to flow between dispatchers, drivers, operations teams, and families without requiring each group to understand the complexity happening behind the scenes. This became the foundation of the entire product experience.",
    // TODO: the design labels all seven tiles "Trip Created"; these are the
    // seven stages the section's heading promises — confirm the wording.
    steps: [
      { icon: "FileText", label: "Trip Created" },
      { icon: "Radio", label: "Dispatched" },
      { icon: "LifeBuoy", label: "Driver Assigned" },
      { icon: "MapPin", label: "Live Tracking" },
      { icon: "Users", label: "Family Notified" },
      { icon: "CircleCheckBig", label: "Trip Completed" },
      { icon: "Columns3", label: "Reported" },
    ],
    cta: { label: "Let's build yours", href: "/contact#get-in-touch-heading" },
  },
  ecosystem: {
    eyebrow: "Beyond the Interface",
    heading: ["What Users See Is Only", "One Part of the Product."],
    // TODO: confirm this copy — transcribed from a screenshot.
    body: [
      "The strongest transportation platforms aren't simply mobile apps. Behind every successful ride is an operational system coordinating people, vehicles, information, communication, and decisions.",
      "Yuni Rides gave us the opportunity to solve technology problems from the perspective of people who actually operate transportation every day.",
    ],
    tagline: "Different workflows. One ecosystem.",
    image: {
      src: "/images/operationsBanner.png",
      alt: "Operations at the centre of drivers, dispatch, routes, communication, compliance and trips",
    },
  },
  digital: {
    eyebrow: "The Digital Experience",
    heading: [
      "Turning Transportation Technology",
      "Into a Brand People Can Trust.",
    ],
    // TODO: confirm this copy — transcribed from a screenshot.
    body: "We designed a digital experience that clearly communicates the mission, builds trust with families and school districts, and makes it easy for drivers to get started bringing the full Yuni Rides ecosystem to life online.",
    statement: [
      { text: "Safe.", accent: true },
      { text: "Connected." },
      { text: "Human.", accent: true },
    ],
    image: {
      src: "/images/productDigital.png",
      alt: "The Yuni Rides website shown on a tablet",
    },
  },
  scalability: {
    eyebrow: "Scalability",
    heading: [
      "One Product.",
      "Different Markets.",
      "Changing",
      "Transportation",
      "Needs.",
    ],
    // TODO: confirm this copy — transcribed from a screenshot.
    body: "Built to support multi-state operations, our platform adapts to different regulations, school district requirements, and regional needs — so we can grow with the communities we serve and continue delivering safe, reliable transportation at scale.",
    // TODO: the design labels all three cards "Flexible Configuration"; these
    // read off the icons it pairs them with — confirm the wording.
    cards: [
      {
        icon: "/images/scalabilityIcon1.png",
        label: "Flexible Configuration",
        iconWidth: "65.6%",
      },
      {
        icon: "/images/scalabilityIcon2.png",
        label: "Multi-State Coverage",
        iconWidth: "70.8%",
      },
      {
        icon: "/images/scalabilityIcon3.png",
        label: "Scales With Demand",
        iconWidth: "81.6%",
      },
    ],
    map: {
      src: "/images/productMaps.png",
      alt: "Yuni Rides coverage across US states",
    },
  },
};
