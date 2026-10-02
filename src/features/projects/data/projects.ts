/**
 * A cover image with its own pixel size. Carrying the size means every box can
 * be drawn to the artwork's shape: the covers run from 1.14 to 2.50 wide, and
 * a single fixed aspect cropped most of them.
 */
export type ProjectImage = { src: string; width: number; height: number };

/** A single headline metric in the results row on the detail page. */
export type ProjectStat = {
  value: string;
  label: string;
  description: string;
};

/** "The challenge" section. The side image differs per project. */
export type ProjectChallengeContent = {
  heading: string;
  body: string;
  /** Drawn at its own shape, so a cover box cannot crop it. */
  image: ProjectImage;
  imageAlt: string;
};

/** "The outcome" closing section — headline figures plus a summary. */
export type ProjectOutcomeContent = {
  heading: string;
  body: string;
  stats: { value: string; label: string }[];
};

export type Project = {
  slug: string;
  /** Client / project name shown on the card */
  name: string;
  /** Small label under the name, e.g. "Website Development" */
  service: string;
  /** Badge shown over the thumbnail in the featured grid */
  category: string;
  /** Id of the filter tab this project belongs to */
  filter: ProjectFilterId;
  /** Full title used on the detail page */
  title: string;
  excerpt: string;
  // TODO: swap these placeholders for the real project screenshots.
  image: ProjectImage;
  // TODO: replace with the real per-project figures.
  stats: ProjectStat[];
  challenge: ProjectChallengeContent;
  /** Four "How we did it" lines. The icons beside them are the same site-wide. */
  approach: string[];
  /** Device mockup for "A sample of what shipped" — differs per project. */
  sample: { image: ProjectImage; imageAlt: string };
  outcome: ProjectOutcomeContent;
  /** Four SWOT notes. Titles and artwork are the same across projects. */
  swot: string[];
};

/** Every cover, with the size read off the file. */
const COVERS = {
  KhazanyProject: { src: "/images/KhazanyProject.png", width: 368, height: 322 },
  webbeecartProject: { src: "/images/webbeecartProject.png", width: 369, height: 323 },
  whyblackProject: { src: "/images/whyblackProject.png", width: 368, height: 322 },
  regiveProject: { src: "/images/regiveProject.png", width: 368, height: 322 },
  briliantProject: { src: "/images/briliantProject.png", width: 368, height: 322 },
  skillsyncProject: {
    src: "/images/skillsyncProject.png",
    width: 1983,
    height: 793,
  },
  edsideraProject: {
    src: "/images/edsideraProject.png",
    width: 1184,
    height: 747,
  },
  hmsProject: { src: "/images/hmsProject.png", width: 1192, height: 752 },
  myPlacesProject: {
    src: "/images/myPlacesProject.png",
    width: 1192,
    height: 752,
  },
  purposeProject: {
    src: "/images/purposeProject.png",
    width: 1616,
    height: 973,
  },
  sizgroupProject: {
    src: "/images/sizgroupProject.png",
    width: 1193,
    height: 752,
  },
  projectSample: { src: "/images/projectSample.png", width: 1143, height: 762 },
} as const;

export const projectFilters = [
  { id: "website", label: "Website" },
  { id: "mobile-app", label: "Mobile App" },
  { id: "e-commerce", label: "E-Commerce" },
  { id: "seo", label: "SEO" },
  { id: "ai", label: "AI" },
] as const;

export type ProjectFilterId = (typeof projectFilters)[number]["id"];

// Empty on purpose. Every figure on a case study is a claim about a client's
// business, so it needs a number that client has confirmed. Until then the
// results row renders nothing rather than something invented.
const defaultStats = (): ProjectStat[] => [];

// TODO: supply the real mockup per project; falls back to the cover image.
const defaultChallenge = (
  client: string,
  image: ProjectImage,
): ProjectChallengeContent => ({
  heading: "Where things stood.",
  body: `${client}'s booking process was manual, relying on phone calls, spreadsheets, and back-and-forth coordination. This made it time-consuming for users, increased the risk of errors, and created operational inefficiencies for their team. As demand grew, it became clear they needed a modern, mobile-first solution to streamline the entire experience.`,
  image,
  imageAlt: `The ${client} app shown on two phones`,
});

// TODO: replace with each project's real delivery notes.
const defaultApproach = (): string[] => [
  "Designed a streamlined booking flow that reduced the process to three taps",
  "Built native iOS and Android apps for consistent performance across devices",
  "Integrated real-time availability and push notifications to cut missed appointments",
  "Ran continuous usability testing to refine the flow before and after launch",
];

// TODO: the designer will supply a mockup per project; shared for now.
const defaultSample = (
  client: string,
): { image: ProjectImage; imageAlt: string } => ({
  image: COVERS.projectSample,
  imageAlt: `Screens from the ${client} project shown on desktop and tablet`,
});

// TODO: replace with each project's real measured outcome.
// TODO: replace with each project's real SWOT notes.
const defaultSwot = (): string[] => [
  "A clear customer need, an engaged stakeholder team, and a strong foundation of domain knowledge gave us a solid starting point for a successful build.",
  "The existing process was highly manual, with fragmented systems and limited real-time visibility, which created inefficiencies and a higher risk of errors.",
  "Growing demand and a shift towards digital adoption created an opportunity to deliver a modern, mobile-first solution that could scale across regions.",
  "Increasing competition, evolving customer expectations, and changing regulations posed external challenges that required a flexible and future-ready approach.",
];

const defaultOutcome = (): ProjectOutcomeContent => ({
  heading: "What changed.",
  body: "The new platform streamlined the entire experience, making it faster, easier, and more reliable for both users and the operations team. Bookings are now completed in minutes, real-time visibility has improved coordination, and manual work has been significantly reduced — allowing the team to focus on what matters most: delivering a better, more dependable service.",
  // See defaultStats: no invented figures.
  stats: [],
});

export const projects: Project[] = [
  {
    slug: "fmc-dubai",
    name: "FMC Dubai",
    service: "Sports Medicine & Healthcare Website",
    category: "Website Development",
    filter: "website",
    title: "FMC Dubai — Sports Medicine & Healthcare Website",
    excerpt:
      "A modern healthcare platform connecting patients with expert sports medicine, physiotherapy, rehabilitation, and orthopaedic care for pain, injuries, and performance recovery.",
    image: COVERS.hmsProject,
    stats: [
      {
        value: "5",
        label: "Departments online",
        description:
          "Each one — from physio to orthopaedics — gets its own browsable section.",
      },
      {
        value: "8",
        label: "Performance-lab technologies",
        description:
          "Every machine in the lab gets its own explainer, so patients know what to expect.",
      },
      {
        value: "Fast",
        label: "Built for mobile speed",
        description:
          "Images, fonts and scripts are tuned so pages open quickly on a phone.",
      },
      {
        value: "CMS",
        label: "Marketing edits every page",
        description:
          "Content and assets are updated in-house, with no developer in the loop.",
      },
    ],
    challenge: {
      heading: "Where things stood.",
      body: "The clinic's reputation was never the problem — its website was. Treatments, specialist profiles, lab equipment and news sat on separate pages with no route between them, pages were slow to open on a phone, and every change had to go through a developer. Patients gave up before they reached the right specialist, and the marketing team could not keep anything current.",
      image: COVERS.hmsProject,
      imageAlt: "The FMC Dubai website shown on desktop and mobile",
    },
    approach: [
      "Rebuilt around care pathways — symptom, to department, to specialist.",
      "Gave every specialist a profile with credentials and direct booking.",
      "Tuned images, fonts and scripts so pages open fast on a phone.",
      "Integrated a CMS so the team edits pages and assets without a developer.",
    ],
    sample: defaultSample("FMC Dubai"),
    outcome: {
      heading: "What changed.",
      body: "FMC Dubai now runs on one fast, organised platform built by Yuni Tech. Patients reach the right specialist in a few clicks, pages open quickly on a phone, and the marketing team publishes news, events and new imagery itself — so the site stays as current as the clinic it represents.",
      stats: [
        { value: "12", label: "Content types in the CMS" },
        { value: "0", label: "Dev tickets to publish" },
        { value: "1", label: "Hub for news and events" },
        { value: "9", label: "Partner clubs featured" },
      ],
    },
    swot: [
      "FIFA, AFC and FIMS accreditation, a performance lab few clinics in the region can match, and specialists who work with national teams.",
      "All of it sat on scattered, slow-loading pages that only a developer could change, so the site aged between releases.",
      "A clear structure and a CMS the team owns means new research, events and treatments go live the week they happen.",
      "Other Dubai sports-medicine providers are investing in their own booking and content experiences, raising the bar.",
    ],
  },
  {
    slug: "edsidera",
    name: "Edsidera",
    service: "Educational Platform",
    category: "Website Development",
    filter: "website",
    title: "Edsidera — Educational Platform",
    excerpt:
      "A website, a children's app and a school portal on one platform — with online enrolment and payments for award programmes running across multiple countries.",
    image: COVERS.edsideraProject,
    stats: [
      {
        value: "3",
        label: "Connected products",
        description:
          "A marketing site, a children's app and a staff portal on one system.",
      },
      {
        value: "4",
        label: "Award programmes live",
        description:
          "Little Star, Rising Star, Karam and Sunshine Squad, for ages 3 to 13.",
      },
      {
        value: "2",
        label: "Live on both app stores",
        description:
          "The children's app ships on both the Apple App Store and Google Play.",
      },
      {
        value: "Pay",
        label: "Checkout built in",
        description:
          "Parents enrol and pay online, or the school enrols a year group in bulk.",
      },
    ],
    challenge: {
      heading: "Where things stood.",
      body: "Edsidera had four award programmes and schools signing up across several countries, with nothing joining it together. Children needed somewhere to complete challenges and upload evidence, teachers needed to review and approve that work, schools needed to enrol whole year groups, and parents needed a way to pay — all of it ran on email, spreadsheets and paper.",
      image: COVERS.edsideraProject,
      imageAlt: "The Edsidera platform shown on desktop and mobile",
    },
    approach: [
      "Built the public site so each award explains itself and converts schools.",
      "Shipped a children's app on iOS and Android for challenges and evidence.",
      "Built a portal where teachers review, approve and feed back on work.",
      "Integrated Ziina so parents pay online, or schools enrol in bulk.",
    ],
    sample: defaultSample("Edsidera"),
    outcome: {
      heading: "What changed.",
      body: "Edsidera now runs on one platform built by Yuni Tech. Children complete challenges in the app, teachers review and approve them in the portal, schools enrol year groups in bulk, and parents pay online — so bringing on a new school is setup, not paperwork.",
      stats: [
        { value: "4", label: "Award programmes" },
        { value: "2", label: "Apps: iOS and Android" },
        { value: "1", label: "Portal for every school" },
        { value: "0", label: "Spreadsheets in the loop" },
      ],
    },
    swot: [
      "Four established award programmes, a printed and digital delivery model, and schools already signed up across multiple countries.",
      "Children, teachers, schools and parents each needed something different, and all of it was being handled by email and spreadsheets.",
      "One platform means Edsidera can onboard a new school in days and sell into new countries without adding admin staff.",
      "Other edtech and CPD platforms are chasing the same international schools, nurseries and educators.",
    ],
  },
  {
    slug: "sizgroup",
    name: "Sizgroup",
    service: "App Studio Website",
    category: "Website Development",
    filter: "website",
    title: "Sizgroup — App Studio Website",
    excerpt:
      "A website that sells app development work: twelve service pages, a portfolio that proves the craft, and a booked consultation at the end of every scroll.",
    image: COVERS.sizgroupProject,
    stats: [
      {
        value: "12",
        label: "Service pages, each its own",
        description:
          "iOS, Android, Flutter, React Native, game, NFT, wearable and more.",
      },
      {
        value: "9",
        label: "Portfolio apps on show",
        description:
          "Real builds, each with the problem it solved and the screens that shipped.",
      },
      {
        value: "6",
        label: "Step process, made visible",
        description:
          "Kickoff to launch, so a first-time founder knows what happens next.",
      },
      {
        value: "30m",
        label: "Free consultation call",
        description:
          "Bookable in one click from the header, mid-page or the footer.",
      },
    ],
    challenge: {
      heading: "Where things stood.",
      body: "Sizgroup had been building apps since 2015 and had the numbers to prove it — but a visitor could not tell that in ten seconds. Twelve services sat behind one generic page, the portfolio work was hard to find, and someone arriving with an app idea had no obvious next step. A studio that sells software was being judged on a site that did not show the craft.",
      image: COVERS.sizgroupProject,
      imageAlt: "The Sizgroup website shown on desktop and mobile",
    },
    approach: [
      "Gave each of the twelve services its own page, written for how clients search.",
      "Built a portfolio section where each app shows the problem it solved.",
      "Laid out the six-step process so a first-time founder knows what to expect.",
      "Put booking, call and enquiry routes on every screen of the journey.",
    ],
    sample: defaultSample("Sizgroup"),
    outcome: {
      heading: "What changed.",
      body: "Sizgroup now has a site that does the first sales call for it, built by Yuni Tech. Each service has a page worth ranking, the portfolio and client numbers carry the credibility, and anyone convinced along the way can book a free consultation without hunting for a form.",
      stats: [
        { value: "12", label: "Service pages live" },
        { value: "9", label: "Apps in the portfolio" },
        { value: "3", label: "Ways to get in touch" },
        { value: "1", label: "Clear path to booking" },
      ],
    },
    swot: [
      "A decade of delivery, 465+ clients and over 10 million downloads across client apps — the proof was already there to lead with.",
      "All of it sat behind one generic services page, so visitors could not see the range or find the work that matched their idea.",
      "A page per service gives Sizgroup something to rank for on every search a founder makes, from Flutter to NFT development.",
      "App studios compete on exactly these searches, and most of them are investing in the same content and booking experience.",
    ],
  },
  {
    slug: "purpose-payment",
    name: "Purpose Payment",
    service: "Payment & Rewards App",
    category: "Mobile App Development",
    filter: "mobile-app",
    title: "Purpose Payment — Payment & Rewards App",
    excerpt:
      "A mobile payment app blending everyday transactions with rewards and charitable giving — turning routine purchases into visible social impact.",
    image: COVERS.purposeProject,
    stats: defaultStats(),
    challenge: defaultChallenge("Purpose Payment", COVERS.purposeProject),
    approach: defaultApproach(),
    sample: defaultSample("Purpose Payment"),
    outcome: defaultOutcome(),
    swot: defaultSwot(),
  },
  {
    slug: "myplaces",
    name: "myPlaces",
    service: "Social Location App",
    category: "Mobile App Development",
    filter: "mobile-app",
    title: "myPlaces — Social Location App",
    excerpt:
      "A social discovery app connecting people to places, people and moments nearby.",
    image: COVERS.myPlacesProject,
    stats: defaultStats(),
    challenge: defaultChallenge("myPlaces", COVERS.myPlacesProject),
    approach: defaultApproach(),
    sample: defaultSample("myPlaces"),
    outcome: defaultOutcome(),
    swot: defaultSwot(),
  },
  {
    slug: "skillsync",
    name: "SkillSync",
    service: "Service Marketplace App",
    category: "Mobile App Development",
    filter: "mobile-app",
    title: "SkillSync — Service Marketplace App",
    excerpt:
      "A marketplace connecting clients with trainers, tutors and skilled professionals nearby.",
    image: COVERS.skillsyncProject,
    stats: defaultStats(),
    challenge: defaultChallenge("SkillSync", COVERS.skillsyncProject),
    approach: defaultApproach(),
    sample: defaultSample("SkillSync"),
    outcome: defaultOutcome(),
    swot: defaultSwot(),
  },
  {
    slug: "khazanay",
    name: "Khazanay",
    service: "Online Thrift & Footwear Store",
    category: "E-Commerce Development",
    filter: "e-commerce",
    title: "Khazanay — Online Thrift & Footwear Store",
    excerpt:
      "An e-commerce store for pre-loved, brand-new and factory-leftover footwear.",
    image: COVERS.KhazanyProject,
    stats: defaultStats(),
    challenge: defaultChallenge("Khazanay", COVERS.KhazanyProject),
    approach: defaultApproach(),
    sample: defaultSample("Khazanay"),
    outcome: defaultOutcome(),
    swot: defaultSwot(),
  },
  {
    slug: "webbeecart",
    name: "WebBeeCart",
    service: "E-Commerce Platform",
    category: "E-Commerce Development",
    filter: "e-commerce",
    title: "WebBeeCart — E-Commerce Platform",
    excerpt:
      "A scalable multi-vendor e-commerce builder for stores and marketplaces.",
    image: COVERS.webbeecartProject,
    stats: defaultStats(),
    challenge: defaultChallenge("WebBeeCart", COVERS.webbeecartProject),
    approach: defaultApproach(),
    sample: defaultSample("WebBeeCart"),
    outcome: defaultOutcome(),
    swot: defaultSwot(),
  },
  {
    slug: "why-black",
    name: "WHY BLACK",
    service: "Mobile Accessories Store",
    category: "E-Commerce Development",
    filter: "e-commerce",
    title: "WHY BLACK — Mobile Accessories Store",
    excerpt:
      "A sleek e-commerce experience for chargers, cables, power banks and audio gear.",
    image: COVERS.whyblackProject,
    stats: defaultStats(),
    challenge: defaultChallenge("WHY BLACK", COVERS.whyblackProject),
    approach: defaultApproach(),
    sample: defaultSample("WHY BLACK"),
    outcome: defaultOutcome(),
    swot: defaultSwot(),
  },
  {
    slug: "regive-hub",
    name: "ReGive Hub",
    service: "SEO & Digital Growth",
    category: "SEO & Digital Growth",
    filter: "seo",
    title: "ReGive Hub — SEO & Digital Growth",
    excerpt: "Improving discoverability for a community reuse and giving app.",
    image: COVERS.regiveProject,
    stats: defaultStats(),
    challenge: defaultChallenge("ReGive Hub", COVERS.regiveProject),
    approach: defaultApproach(),
    sample: defaultSample("ReGive Hub"),
    outcome: defaultOutcome(),
    swot: defaultSwot(),
  },
  {
    slug: "brilliant-teaching",
    name: "Brilliant Teaching",
    service: "AI-Ready Lesson Planning App",
    category: "AI / EdTech",
    filter: "ai",
    title: "Brilliant Teaching — AI-Ready Lesson Planning App",
    excerpt:
      "A teacher-first app for building teaching units, organising courses and structuring lessons that connect with students.",
    image: COVERS.briliantProject,
    stats: defaultStats(),
    challenge: defaultChallenge("Brilliant Teaching", COVERS.briliantProject),
    approach: defaultApproach(),
    sample: defaultSample("Brilliant Teaching"),
    outcome: defaultOutcome(),
    swot: defaultSwot(),
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3) {
  return projects.filter((project) => project.slug !== slug).slice(0, limit);
}
