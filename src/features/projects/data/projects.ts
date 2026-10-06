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
  KhazanyProject: {
    src: "/images/KhazanyProject.png",
    width: 368,
    height: 322,
  },
  webbeecartProject: {
    src: "/images/webbeecartProject.png",
    width: 369,
    height: 323,
  },
  whyblackProject: {
    src: "/images/whyblackProject.png",
    width: 368,
    height: 322,
  },
  regiveProject: { src: "/images/regiveProject.png", width: 368, height: 322 },
  briliantProject: {
    src: "/images/briliantProject.png",
    width: 368,
    height: 322,
  },
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

/**
 * Every project now carries its own stats, challenge, approach, SWOT and
 * outcome, written from the live product and what the client told us. The
 * placeholder helpers that used to fill those in — and which put the same
 * invented figures on all eleven case studies — are gone; a new project adds
 * its own copy rather than inheriting someone else's.
 *
 * The mockup is still shared, because the designer has not supplied one per
 * project yet.
 */
const defaultSample = (
  client: string,
): { image: ProjectImage; imageAlt: string } => ({
  image: COVERS.projectSample,
  imageAlt: `Screens from the ${client} project shown on desktop and tablet`,
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
      "A website, a children's app and a school portal on one platform with online enrolment and payments for award programmes running across multiple countries.",
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
      "A website that sells app development work twelve service pages, a portfolio that proves the craft, and a booked consultation at the end of every scroll.",
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
    service: "Payments App & Merchant Platform",
    category: "Mobile App Development",
    filter: "mobile-app",
    title: "Purpose Payment — Payments App & Merchant Platform",
    excerpt:
      "A pay-by-bank app, a merchant portal and a super-admin console on one platform undercutting card fees and routing 1% of every sale to a local cause.",
    image: COVERS.purposeProject,
    stats: [
      {
        value: "3",
        label: "Products on one platform",
        description:
          "A consumer app, a merchant portal and a super-admin console.",
      },
      {
        value: "1.5%",
        label: "All-in fee vs card rails",
        description:
          "20¢ + 1.5%, where cards cost about 3.1% once every markup is counted.",
      },
      {
        value: "12K+",
        label: "US banks and credit unions",
        description:
          "Account linking through Plaid, so signing up takes about 30 seconds.",
      },
      {
        value: "1%",
        label: "Of every sale to a local cause",
        description:
          "Routed automatically on each payment, at no extra cost to the shopper.",
      },
    ],
    challenge: {
      heading: "Where things stood.",
      body: "Purpose Payment set out to undercut the card networks and hand the saving back to shoppers and local causes — but that takes three products running in step, not one. Shoppers needed an app that pays straight from a bank account, merchants needed a till that runs on a phone they already own, and the business needed a console to approve merchants, set rates and watch every batch settle.",
      image: COVERS.purposeProject,
      imageAlt: "The Purpose Payment app and merchant portal",
    },
    approach: [
      "Built the consumer app: link a bank, scan a QR code, pay by face.",
      "Shipped a merchant portal with live alerts, staff PINs and refunds.",
      "Built a super-admin console to onboard merchants and set rates.",
      "Wired Plaid and biometric approval so no card number is ever stored.",
    ],
    sample: defaultSample("Purpose Payment"),
    outcome: {
      heading: "What changed.",
      body: "Purpose Payment now runs end to end on a platform built by Yuni Tech Inc. Shoppers pay from their bank in one scan, merchants take payments on a phone with no hardware and watch each batch settle, and the team onboards new merchants itself from the console.",
      stats: [
        { value: "3", label: "Products on one platform" },
        { value: "20¢", label: "Plus 0.5% per payment" },
        { value: "0", label: "Hardware for merchants" },
        { value: "1", label: "Console runs the network" },
      ],
    },
    swot: [
      "A fee that undercuts card rails, rewards for the shopper and funding for a local cause — one payment serving three parties at once.",
      "Three products — app, merchant portal, admin console — all had to launch together before a single payment could be taken.",
      "The model travels: any town with a university, a cause and local merchants is the same build with different partners.",
      "Card networks and wallets own the habit, and changing a shopper's default way to pay is slow work.",
    ],
  },
  {
    slug: "myplaces",
    name: "myPlaces",
    service: "Social Location App & Portal",
    category: "Mobile App Development",
    filter: "mobile-app",
    title: "myPlaces — Social Location App & Portal",
    excerpt:
      "A social app on iOS and Android with a portal behind it live location, events and messaging that turn a group chat into a meetup.",
    image: COVERS.myPlacesProject,
    stats: [
      {
        value: "2",
        label: "Apps live: iOS, Android",
        description:
          "Shipped to the Apple App Store and Google Play, both live today.",
      },
      {
        value: "1",
        label: "Portal behind the app",
        description:
          "Where the team reviews reports, manages accounts and keeps it safe.",
      },
      {
        value: "5",
        label: "Features in the app",
        description:
          "Live location, friend requests, events, posts with a place, privacy.",
      },
      {
        value: "0",
        label: "Data shared with others",
        description:
          "Declared on both stores: nothing sold on, everything encrypted in transit.",
      },
    ],
    challenge: {
      heading: "Where things stood.",
      body: "myPlaces had a clear idea — get friends off their phones and into the same room — but an app that shares where someone is standing cannot ship on its own. People needed live location, events and messaging in one place, with real control over who sees what, and the team needed somewhere behind it to review reports, manage accounts and meet the safety rules both app stores enforce.",
      image: COVERS.myPlacesProject,
      imageAlt: "The myPlaces app shown on two phones",
    },
    approach: [
      "Built live location sharing people can turn on and off per friend.",
      "Added events, meetups and posts pinned to the place they happened.",
      "Built messaging so a plan becomes a meetup without leaving the app.",
      "Built the portal behind it: reports, accounts and safety review.",
    ],
    sample: defaultSample("myPlaces"),
    outcome: {
      heading: "What changed.",
      body: "myPlaces now runs as an app on both stores with a portal behind it, built by Yuni Tech Inc. Friends share where they are, turn a chat into a meetup, and keep control of who sees what — while the team reviews reports and manages accounts itself.",
      stats: [
        { value: "2", label: "Stores the app is on" },
        { value: "1", label: "Portal runs the network" },
        { value: "0", label: "Dev tickets to moderate" },
        { value: "12+", label: "Age rating on Play" },
      ],
    },
    swot: [
      "A clear stance in a crowded category — the app's job is to end the scrolling and get people to the same place.",
      "Live location is the feature people are most wary of, so privacy had to be settled before anything else could ship.",
      "Creators and groups can treat a place as a venue, which turns a social app into a tool for organising a following.",
      "The big social platforms already own location features, and can give theirs away inside apps people open daily.",
    ],
  },
  {
    slug: "skillsync",
    name: "SkillSync",
    service: "Service Marketplace App & Admin Portal",
    category: "Mobile App Development",
    filter: "mobile-app",
    title: "SkillSync — Service Marketplace App & Admin Portal",
    excerpt:
      "One app for clients and service providers, with the admin portal behind it search, availability, booking, messaging and payment in a few taps.",
    image: COVERS.skillsyncProject,
    stats: [
      {
        value: "2",
        label: "Roles sharing one app",
        description:
          "A client and a provider sign in to the same build, not two apps.",
      },
      {
        value: "100+",
        label: "Professions on the app",
        description:
          "Trainers, tutors, coaches, musicians and specialists, searchable by area.",
      },
      {
        value: "1",
        label: "Admin portal behind it",
        description:
          "Where the team verifies providers, handles disputes and runs promotions.",
      },
      {
        value: "Pay",
        label: "Booked and paid in the app",
        description:
          "Availability, booking, messaging and payment without leaving the app.",
      },
    ],
    challenge: {
      heading: "Where things stood.",
      body: "SkillSync had to serve two opposite jobs from one app. A client wants to search, compare and book in a few taps; a provider wants a listing, a calendar, a reputation and to get paid. Build those as separate apps and you split a young marketplace in half. Behind both, the team needed a way to verify providers, settle disputes and run promotions without going through a developer.",
      image: COVERS.skillsyncProject,
      imageAlt: "The SkillSync app shown on two phones",
    },
    approach: [
      "Built one app where sign-up decides whether you book or get booked.",
      "Added search and filters across 100+ professions and service types.",
      "Wired real-time availability, booking, messaging and payment together.",
      "Built the admin portal: provider checks, disputes and promotions.",
    ],
    sample: defaultSample("SkillSync"),
    outcome: {
      heading: "What changed.",
      body: "SkillSync now runs as one app for both sides with an admin portal behind it, built by Yuni Tech Inc. A client searches, compares and books in a few taps; a provider lists, sets availability and gets paid; and the team verifies providers and settles disputes itself.",
      stats: [
        { value: "1", label: "App for both sides" },
        { value: "4", label: "Steps to first booking" },
        { value: "0", label: "Dev tickets to verify" },
        { value: "3+", label: "Age rating on Play" },
      ],
    },
    swot: [
      "One app serving both sides keeps a young marketplace together — every new provider is also a shop window for clients.",
      "Two opposite jobs in one build: a client wants to book in taps, a provider wants a calendar, a reputation and payouts.",
      "Featured placements and in-app promotion give the platform a revenue line that grows with the provider base.",
      "Established marketplaces and local directories are chasing the same trainers and the same clients.",
    ],
  },
  {
    slug: "khazanay",
    name: "Khazanay",
    service: "Online Thrift & Footwear Store",
    category: "E-Commerce Development",
    filter: "e-commerce",
    title: "Khazanay — Online Thrift & Footwear Store",
    excerpt:
      "A Shopify storefront for pre-loved, brand-new and factory-leftover footwear — 109 brands, four condition tiers and every size, each with its own way in.",
    image: COVERS.KhazanyProject,
    stats: [
      {
        value: "109",
        label: "Brands, indexed A to Z",
        description:
          "Each with its own page, so a shopper can start from the brand they trust.",
      },
      {
        value: "4",
        label: "Condition tiers per shoe",
        description:
          "Premium+, Premium, Excellent and Very Good, defined on their own page.",
      },
      {
        value: "11",
        label: "Men's sizes, each a page",
        description:
          "EUR 39 to 49, so a browse shows only what fits, not the whole catalogue.",
      },
      {
        value: "5",
        label: "Outlets in three cities",
        description:
          "Karachi, Lahore and Islamabad, each with its own hours and directions.",
      },
    ],
    challenge: {
      heading: "Where things stood.",
      body: "Second-hand shoes are a trust problem before they are a shopping problem. A buyer in Pakistan, ordering footwear imported from the US, cannot pick a pair up and check it — so condition, size and authenticity all have to be settled on screen. On top of that the catalogue runs to over a hundred brands and every size, which is unbrowsable without a way in.",
      image: COVERS.KhazanyProject,
      imageAlt: "The Khazanay store shown on a phone and a desktop",
    },
    approach: [
      "Built the store on Shopify so the team can list stock themselves.",
      "Gave all 109 brands a page, indexed A to Z for a shopper who knows.",
      "Defined four condition tiers and put the guide where it is needed.",
      "Made each size its own collection, so a browse shows only what fits.",
    ],
    sample: defaultSample("Khazanay"),
    outcome: {
      heading: "What changed.",
      body: "Khazanay now runs a storefront that answers the second-hand buyer's questions before they ask, built by Yuni Tech Inc. Brand, condition and size each have their own way in, the condition guide is a page shoppers can check, and the team lists new stock itself.",
      stats: [
        { value: "109", label: "Brand pages, A to Z" },
        { value: "4", label: "Condition tiers live" },
        { value: "11", label: "Sizes with their own page" },
        { value: "0", label: "Dev tickets to list stock" },
      ],
    },
    swot: [
      "Authenticated, USA-imported stock and five physical outlets give a resale brand the credibility the category usually lacks.",
      "A buyer cannot inspect a used shoe online, so condition, size and authenticity all had to be answered before the add to cart.",
      "Demand for affordable, sustainable fashion in Pakistan is growing, and the same storefront pattern extends past footwear.",
      "Counterfeit and low-trust resale sellers can sour buyer confidence in the whole second-hand category, not just one store.",
    ],
  },
  {
    slug: "webbeecart",
    name: "WebBeeCart",
    service: "E-Commerce Platform",
    category: "E-Commerce Development",
    filter: "e-commerce",
    title: "WebBeeCart — E-Commerce Platform",
    excerpt:
      "A commerce platform that launches either a single store or a multi-vendor marketplace — web storefront, apps on both stores, shopper tools wired in.",
    image: COVERS.webbeecartProject,
    stats: [
      {
        value: "2",
        label: "Vendor models, one build",
        description:
          "A single store or a multi-vendor marketplace, chosen at onboarding.",
      },
      {
        value: "3",
        label: "Places a store runs",
        description:
          "The web storefront plus native apps on the App Store and Google Play.",
      },
      {
        value: "QR",
        label: "Scan to install the app",
        description:
          "The builder page hands a shopper the right store link in one scan.",
      },
      {
        value: "4",
        label: "Shopper tools built in",
        description:
          "Wishlist, compare, order tracking and a locator for physical stores.",
      },
    ],
    challenge: {
      heading: "Where things stood.",
      body: "WebBeeCart had to be two products at once. A single merchant wants a store of their own; a marketplace operator wants many sellers under one roof — and a platform that only does one of those halves its market. Both then need the same thing on day one: a storefront on the web, native apps on both stores, and the shopper tools people now expect, without a vendor wiring any of it up.",
      image: COVERS.webbeecartProject,
      imageAlt: "The WebBeeCart storefront shown on a phone and a desktop",
    },
    approach: [
      "Built one platform where onboarding picks store or marketplace.",
      "Shipped the storefront on web plus native apps on both stores.",
      "Built the shopper side in: wishlist, compare, tracking, locator.",
      "Put a QR on the builder page so a shopper installs in one scan.",
    ],
    sample: defaultSample("WebBeeCart"),
    outcome: {
      heading: "What changed.",
      body: "WebBeeCart now runs as one platform that can launch either a single store or a full marketplace, built by Yuni Tech Inc. A vendor picks their model at onboarding and gets a web storefront, apps on both stores, and the shopper tools already wired in.",
      stats: [
        { value: "2", label: "Vendor models live" },
        { value: "3", label: "Web, iOS and Android" },
        { value: "4", label: "Shopper tools shipped" },
        { value: "0", label: "Plugins a vendor adds" },
      ],
    },
    swot: [
      "One codebase serving both a single store and a multi-vendor marketplace doubles the market a new platform can sell into.",
      "Two vendor models means every feature has to be designed twice over, for one seller and for many under one roof.",
      "A white-label commerce engine can be deployed for a new vendor quickly, which turns build work into repeatable revenue.",
      "Shopify and the established builders own vendor mindshare and arrive with app ecosystems a new platform cannot match.",
    ],
  },
  {
    slug: "why-black",
    name: "WHY BLACK",
    service: "Mobile Accessories Store",
    category: "E-Commerce Development",
    filter: "e-commerce",
    title: "WHY BLACK — Mobile Accessories Store",
    excerpt:
      "A WooCommerce storefront for chargers, cables, power banks and audio gear — fifty products in seven categories, dark from landing page to checkout.",
    image: COVERS.whyblackProject,
    stats: [
      {
        value: "50",
        label: "Products live in store",
        description:
          "Across cables, power banks, chargers, earphones and accessories.",
      },
      {
        value: "7",
        label: "Product categories",
        description:
          "Cables through to bags and docks, each with its own browsable page.",
      },
      {
        value: "3",
        label: "Shopper tools built in",
        description:
          "A wishlist, an account area and a newsletter for new product drops.",
      },
      {
        value: "10%",
        label: "Standing offer site-wide",
        description:
          "Carried in the header bar, on every page and every product.",
      },
    ],
    challenge: {
      heading: "Where things stood.",
      body: "WHY BLACK sells the things nobody gets excited about — chargers, cables, power banks — in a category where the buyer's only question is whether it will work and how fast it arrives. The brand wanted a storefront dark and deliberate enough to look like a name worth paying for, while keeping the trip from landing page to checkout short enough that nobody reconsiders a $20 cable.",
      image: COVERS.whyblackProject,
      imageAlt: "The WHY BLACK storefront shown on a phone and a desktop",
    },
    approach: [
      "Built the store on WooCommerce so the team lists stock themselves.",
      "Set the catalogue into seven categories, led by cables and charging.",
      "Gave the brand a dark storefront built around the product shots.",
      "Added a wishlist, accounts and a newsletter for new product drops.",
    ],
    sample: defaultSample("WHY BLACK"),
    outcome: {
      heading: "What changed.",
      body: "WHY BLACK now runs a storefront that looks like a brand and sells like a shop, built by Yuni Tech Inc. Fifty products sit in seven categories a shopper can browse in a tap, the dark treatment carries from the landing page to the cart, and the team adds stock itself.",
      stats: [
        { value: "50", label: "Products on the store" },
        { value: "7", label: "Categories to browse" },
        { value: "3", label: "Shopper tools live" },
        { value: "0", label: "Dev tickets to list" },
      ],
    },
    swot: [
      "A dark, deliberate storefront gives a commodity accessories range the feel of a brand rather than a parts bin.",
      "Chargers and cables are bought on price and speed, so the brand has little room to slow the buyer down.",
      "A wishlist and a newsletter build a list the store can sell each new product drop to, instead of buying attention again.",
      "Marketplace sellers list near-identical accessories at lower prices, which keeps constant pressure on margin.",
    ],
  },
  {
    slug: "regive-hub",
    name: "ReGive Hub",
    service: "Community App, Portal & SEO",
    category: "SEO & Digital Growth",
    filter: "seo",
    title: "ReGive Hub — Community App, Portal & SEO",
    excerpt:
      "A free community app for giving things away, the admin portal behind it, and the search work that brings people to both.",
    image: COVERS.regiveProject,
    stats: [
      {
        value: "Free",
        label: "Every listing on the app",
        description:
          "Nothing is sold: people post what they no longer need and others claim it.",
      },
      {
        value: "1",
        label: "Admin portal behind it",
        description:
          "Where the team reviews listings, handles reports and manages accounts.",
      },
      {
        value: "ASO",
        label: "Store listing rewritten",
        description:
          "Title, description and keywords set around how people search.",
      },
      {
        value: "SEO",
        label: "On and off-site content",
        description:
          "Written to reach people searching to give things away, not to buy.",
      },
    ],
    challenge: {
      heading: "Where things stood.",
      body: "ReGive Hub's whole idea runs on people finding it: a community app where you post what you no longer need and someone nearby claims it, free. But an app that charges nothing has no budget to buy its way in front of anyone, and nothing was bringing people to it — not the store listing, not the site. A platform where strangers hand things to strangers also needs someone watching it.",
      image: COVERS.regiveProject,
      imageAlt: "The ReGive Hub app shown on two phones",
    },
    approach: [
      "Built the app: post what you don't need, claim what you do.",
      "Built the admin portal for listings, reports and accounts.",
      "Rewrote the store listing around how people search to give away.",
      "Wrote on-site and off-site content to pull in organic installs.",
    ],
    sample: defaultSample("ReGive Hub"),
    outcome: {
      heading: "What changed.",
      body: "ReGive Hub now has all three pieces built by Yuni Tech Inc: an app where a listing takes a photo and a tap, an admin portal the team runs the community from, and a store listing and site written to be found by people searching to give something away.",
      stats: [
        { value: "50+", label: "Downloads on Play" },
        { value: "1", label: "Admin portal live" },
        { value: "2", label: "SEO fronts covered" },
        { value: "0", label: "Dev tickets to moderate" },
      ],
    },
    swot: [
      "A mission anyone understands in a sentence — give away what you no longer need — which makes the app easy to write about and share.",
      "A free app earns nothing per listing, so it cannot buy its way to an audience the way a marketplace can.",
      "Interest in reuse and waste reduction keeps growing, and search traffic for it is cheap next to retail terms.",
      "Marketplace and classifieds apps already run free sections, and they arrive with the users ReGive Hub needs.",
    ],
  },
  {
    slug: "brilliant-teaching",
    name: "Brilliant Teaching",
    service: "AI Lesson Planning App & Portal",
    category: "AI / EdTech",
    filter: "ai",
    title: "Brilliant Teaching — AI Lesson Planning App & Portal",
    excerpt:
      "An AI planning app for teachers with the portal behind it — units, courses and each week's assignments drafted instead of started from a blank page.",
    image: COVERS.briliantProject,
    stats: [
      {
        value: "AI",
        label: "Drafts the week's work",
        description:
          "Manuals, course material and assignments start written, not blank.",
      },
      {
        value: "2",
        label: "Products on one platform",
        description:
          "The teacher's app and the portal the team runs the courses from.",
      },
      {
        value: "4+",
        label: "Age rating on the App Store",
        description:
          "An education app cleared for every classroom, with no data collected.",
      },
      {
        value: "3.0",
        label: "Version live on iOS",
        description:
          "Three major releases in, and built for iPhone on iOS 15.6 or later.",
      },
    ],
    challenge: {
      heading: "Where things stood.",
      body: "The work that eats a teacher's week is not the teaching. It is writing the unit, shaping it into a course, and producing the assignments that go with it — every week, from a blank page, in notes and documents scattered across folders. Brilliant Teaching wanted that first draft to already exist when the teacher sat down, and the team behind it needed somewhere to manage the courses being built.",
      image: COVERS.briliantProject,
      imageAlt: "The Brilliant Teaching app shown on two phones",
    },
    approach: [
      "Built the app around teaching units a teacher creates from a phone.",
      "Grouped units into courses so a whole term stays in one structure.",
      "Put AI behind it to draft manuals, course work and assignments.",
      "Built the portal the team manages courses and content from.",
    ],
    sample: defaultSample("Brilliant Teaching"),
    outcome: {
      heading: "What changed.",
      body: "Brilliant Teaching now runs as an app with a portal behind it, built by Yuni Tech Inc. A teacher opens the week to a draft rather than a blank page — units, course material and assignments already shaped — and edits from there instead of starting over.",
      stats: [
        { value: "2", label: "Products on one platform" },
        { value: "AI", label: "Drafts each week" },
        { value: "4+", label: "Age rating on iOS" },
        { value: "0", label: "User data collected" },
      ],
    },
    swot: [
      "The app targets the part of teaching everyone resents — the paperwork — which is exactly where AI earns its place rather than being a feature.",
      "Anything AI writes for a classroom has to be checked by the teacher, so the draft has to be good enough to be worth editing.",
      "A planner that already knows a teacher's units and courses can keep drafting further ahead: a term, not a week.",
      "Established lesson-planning tools are adding AI to products schools already pay for and already trust.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3) {
  return projects.filter((project) => project.slug !== slug).slice(0, limit);
}
