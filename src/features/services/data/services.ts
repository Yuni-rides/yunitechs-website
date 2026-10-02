import type {
  Service,
  ServiceBanner,
  ServiceOfferContent,
  ServiceOfferItem,
  ServiceOverviewContent,
  ServiceOverviewStat,
  ServiceProcessContent,
  ServiceProcessStep,
  ServiceStackContent,
  ServiceStackItem,
} from "@/types";

const serviceImage = (fileName: string, alt: string) => ({
  src: `/images/${fileName}.png`,
  width: 504,
  height: 355,
  alt,
});

/** Each banner artwork's own pixel size, so its box is drawn to that shape. */
const BANNER_SIZES: Record<string, { width: number; height: number }> = {
  webBanner: { width: 1282, height: 558 },
  designBanner: { width: 1226, height: 635 },
  crmBanner: { width: 1343, height: 552 },
  ecommerceBanner: { width: 1265, height: 664 },
  aiBanner: { width: 1282, height: 757 },
  appBanner: { width: 720, height: 704 },
  marketingBanner: { width: 1261, height: 550 },
};

/** `fileName` is required: each service ships its own banner artwork. */
const banner = (
  eyebrow: string,
  heading: string,
  body: string,
  fileName: string,
): ServiceBanner => ({
  eyebrow,
  heading,
  body,
  image: {
    src: `/images/${fileName}.png`,
    alt: `${eyebrow} work by Yuni Tech`,
    ...BANNER_SIZES[fileName],
  },
});

// TODO: swap overviewBanner for each service's own artwork as it arrives.
// TODO: confirm each service's figures with marketing before launch.
const overview = (
  heading: string,
  body: string,
  stats: ServiceOverviewStat[],
  fileName = "overviewBanner",
): ServiceOverviewContent => ({
  eyebrow: "Overview",
  heading,
  body,
  image: {
    src: `/images/${fileName}.png`,
    alt: "Highlights from Yuni Tech projects",
  },
  stats,
});

const offer = (
  heading: string,
  body: string,
  items: ServiceOfferItem[],
): ServiceOfferContent => ({
  eyebrow: "What we offer",
  heading,
  body,
  items,
});

/**
 * The five process cards. The artwork is fixed — process1 through process5, in
 * that order, on every service — so a service supplies only its own wording,
 * and the images can never drift out of step with the design.
 */
const PROCESS_IMAGES = [
  "/images/process1.png",
  "/images/process2.png",
  "/images/process3.png",
  "/images/process4.png",
  "/images/process5.png",
] as const;

type StepCopy = { title: string; body: string };

/** A fixed-length tuple, so a service cannot supply four steps or six. */
const steps = (
  copy: readonly [StepCopy, StepCopy, StepCopy, StepCopy, StepCopy],
): ServiceProcessStep[] =>
  copy.map((step, i) => ({ ...step, image: PROCESS_IMAGES[i] }));

const buildProcess = (
  heading: string,
  body: string,
  ctaHeading: string,
  steps: ServiceProcessStep[],
): ServiceProcessContent => ({
  eyebrow: "Our process",
  heading,
  body,
  steps,
  cta: { heading: ctaHeading, label: "Let's talk", href: "/contact" },
});

/**
 * Logo tiles.
 */
const buildStack = (
  heading: string,
  body: string,
  items: ServiceStackItem[] = [],
): ServiceStackContent => ({
  eyebrow: "Tech stack",
  heading,
  body,
  items,
});

const CRM_ICONS = {
  "Insightly CRM": "/images/crmIcon1.png",
  "Microsoft Dynamics 365": "/images/crmIcon2.png",
  "Monday CRM": "/images/crmIcon3.png",
  Freshsales: "/images/crmIcon4.png",
  "Zoho CRM": "/images/crmIcon5.png",
  HubSpot: "/images/crmIcon6.png",
} as const;

const ECOMMERCE_ICONS = {
  WooCommerce: "/images/ecomIcon1.png",
  Magento: "/images/ecomIcon2.png",
  PrestaShop: "/images/ecomIcon3.png",
  Shopify: "/images/ecomIcon4.png",
  BigCommerce: "/images/ecomIcon5.png",
  OpenCart: "/images/ecomIcon6.png",
  Wix: "/images/ecomIcon7.png",
} as const;

const MARKETING_ICONS = {
  Sendible: "/images/marketingIcon1.png",
  Loomly: "/images/marketingIcon2.png",
  Buffer: "/images/marketingIcon3.png",
  Later: "/images/marketingIcon4.png",
  SocialPilot: "/images/marketingIcon5.png",
  Canva: "/images/marketingIcon7.png",
  Hootsuite: "/images/marketingIcon6.png",
} as const;

const AI_ICONS = {
  "Google Gemini": "/images/aiIcon1.png",
  Vicuna: "/images/aiIcon2.png",
  Perplexity: "/images/aiIcon3.png",
  "DALL·E 2": "/images/aiIcon4.png",
  Meta: "/images/aiIcon5.png",
  Qwen: "/images/aiIcon6.png",
  "GPT-5": "/images/aiIcon7.png",
} as const;

const DESIGN_ICONS = {
  "Adobe InDesign": "/images/designIcon1.png",
  "Adobe XD": "/images/designIcon2.png",
  "Adobe Illustrator": "/images/designIcon3.png",
  Figma: "/images/designIcon4.png",
  Sketch: "/images/designIcon5.png",
  Canva: "/images/designIcon6.png",
  Photoshop: "/images/designIcon7.png",
} as const;

const WEB_ICONS = {
  HTML: "/images/webIcon1.png",
  Bootstrap: "/images/webIcon2.png",
  JavaScript: "/images/webIcon3.png",
  "React JS": "/images/webIcon4.png",
  WordPress: "/images/webIcon5.png",
  "Node.js": "/images/webIcon6.png",
  CSS: "/images/webIcon7.png",
} as const;

const APP_ICONS = {
  iOS: "/images/appIcon1.png",
  MySQL: "/images/appIcon7.png",
  Firebase: "/images/appIcon6.png",
  Flutter: "/images/appIcon5.png",
  Python: "/images/appIcon4.png",
  "React Native": "/images/appIcon3.png",
  Android: "/images/appIcon2.png",
} as const;

/** Turns one of the maps above into tiles, keeping its written order. */
const iconTiles = (set: Record<string, string>): ServiceStackItem[] =>
  Object.entries(set).map(([name, image]) => ({ name, image }));

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    items: [
      "Angular Website Development",
      "React Website Development",
      "Laravel Website Development",
      "Vue.js Website Development",
      "Node.js Website Development",
      "WordPress Website Development",
    ],
    image: serviceImage(
      "webService",
      "Collage of website designs built by Yuni Tech.",
    ),
    banner: banner(
      "Web Development",
      "Websites built to win trust and convert",
      "We design and build fast, accessible websites that hold up under real traffic and turn visitors into customers.",
      "webBanner",
    ),
    overview: overview(
      "From first sketch to a site that sells",
      "We design and build fast, accessible websites that hold up under real traffic. From information architecture and design through build, testing, and launch, we handle the whole process so you can focus on growing your business.",
      [
        {
          icon: "Globe",
          value: "200+",
          label: "Websites Launched",
          body: "Built for speed and search.",
        },
        {
          icon: "BarChart3",
          value: "12+",
          label: "Industries Served",
          body: "Experience across many sectors.",
        },
        {
          icon: "Users",
          value: "40+",
          label: "Specialists",
          body: "Designers, engineers and strategists.",
        },
      ],
    ),
    offer: offer(
      "Services we offer",
      "End-to-end website development services that turn your ideas into fast, accessible, and conversion-ready experiences.",
      [
        {
          icon: "Code2",
          title: "Custom Web Development",
          body: "Hand-built front ends tuned for speed, accessibility, and search.",
        },
        {
          icon: "Layers",
          title: "CMS & Headless Builds",
          body: "Editable sites your team can update without waiting on a developer.",
        },
        {
          icon: "Gauge",
          title: "Performance Engineering",
          body: "Core Web Vitals work that makes pages load and respond fast.",
        },
        {
          icon: "PenTool",
          title: "UI/UX Design",
          body: "Interfaces designed around how your visitors actually browse and buy.",
        },
        {
          icon: "Plug",
          title: "Integrations",
          body: "Payments, CRM, analytics, and third-party services wired in cleanly.",
        },
        {
          icon: "Wrench",
          title: "Maintenance & Support",
          body: "Ongoing updates, monitoring, and fixes so the site keeps performing.",
        },
      ],
    ),
    process: buildProcess(
      "How we build your website",
      "A clear, proven process to turn your idea into a fast, search-ready site.",
      "Let's Turn your Ideas into a Website That Converts!",
      steps([
        {
          title: "Discovery & Planning",
          body: "We map your goals, audience, and site structure before any design work starts.",
        },
        {
          title: "Design & Prototyping",
          body: "We design the pages and flows, and you sign them off before we build.",
        },
        {
          title: "Development",
          body: "We build in short, reviewable increments so progress is visible from week one.",
        },
        {
          title: "Testing & QA",
          body: "Every page is tested across browsers, devices, and edge cases before launch.",
        },
        {
          title: "Launch & Support",
          body: "We deploy it, watch it in production, and keep improving it after go-live.",
        },
      ]),
    ),
    stack: buildStack(
      "The technology behind your website",
      "We use modern, reliable, and scalable technologies to build fast, accessible sites tailored to your business needs.",
      iconTiles(WEB_ICONS),
    ),
    work: {
      projectFilter: "website",
      heading: "Websites we've built",
      body: "A look at some of the websites we've designed and built for startups and enterprises across different industries.",
    },
    cta: {
      heading: ["Have a site in mind?", "Let's build it."],
      body: "Share your idea with our team and get a free consultation. We'll help you turn it into a fast, search-ready website that converts.",
      label: "Start Your Project",
    },
    href: "/services/website-development",
  },
  {
    slug: "branding-design",
    title: "Branding & Design",
    items: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "UI/UX Design",
      "Design Systems",
      "Marketing Collateral",
      "Social Media Creatives",
    ],
    image: serviceImage(
      "brandService",
      "Branding and design work by Yuni Tech.",
    ),
    banner: banner(
      "Branding & Design",
      "Brand identities people remember",
      "From logo to design system, we craft a visual language that stays consistent everywhere your brand shows up.",
      "designBanner",
    ),
    overview: overview(
      "A brand people recognise at a glance",
      "We build visual identities that stay consistent everywhere your brand appears. From logo and type through a full design system, we give your team the assets and rules to apply it confidently.",
      [
        {
          icon: "Palette",
          value: "120+",
          label: "Brands Shaped",
          body: "Identities built to last.",
        },
        {
          icon: "Package",
          value: "500+",
          label: "Assets Delivered",
          body: "Logos, systems and collateral.",
        },
        {
          icon: "BarChart3",
          value: "15+",
          label: "Industries Served",
          body: "A visual language for any market.",
        },
      ],
    ),
    offer: offer(
      "Services we offer",
      "Identity and design services that give your brand one coherent voice across every surface.",
      [
        {
          icon: "Sparkles",
          title: "Logo & Identity",
          body: "A distinctive mark and the type, colour, and tone around it.",
        },
        {
          icon: "Layers",
          title: "Design Systems",
          body: "Reusable components and rules that keep every screen on-brand.",
        },
        {
          icon: "PenTool",
          title: "UI/UX Design",
          body: "Product interfaces designed for clarity and real user tasks.",
        },
        {
          icon: "Brush",
          title: "Marketing Collateral",
          body: "Decks, one-pagers, and print assets built from the same system.",
        },
        {
          icon: "MonitorSmartphone",
          title: "Social & Campaign Creative",
          body: "Templates and assets sized for every channel you publish to.",
        },
        {
          icon: "ShieldCheck",
          title: "Brand Guidelines",
          body: "Documentation so anyone can apply the brand without guesswork.",
        },
      ],
    ),
    process: buildProcess(
      "How we build your brand",
      "A clear, proven process to turn your positioning into a brand people recognise.",
      "Let's Turn your Ideas into a Brand People Remember!",
      steps([
        {
          title: "Discovery & Positioning",
          body: "We study your audience, market, and competitors before drawing a single mark.",
        },
        {
          title: "Concept & Direction",
          body: "We explore routes and you choose the direction we take into refinement.",
        },
        {
          title: "Identity Design",
          body: "Logo, type, colour, and imagery are refined into one finished identity.",
        },
        {
          title: "System & Assets",
          body: "We build the components, templates, and collateral your team will actually use.",
        },
        {
          title: "Guidelines & Handover",
          body: "You get documented rules so anyone can apply the brand without guesswork.",
        },
      ]),
    ),
    stack: buildStack(
      "The tools behind your brand",
      "We use industry-standard design tools to build identities and systems your team can apply anywhere.",
      iconTiles(DESIGN_ICONS),
    ),
    cta: {
      heading: ["Have a brand to build?", "Let's shape it."],
      body: "Share your idea with our team and get a free consultation. We'll help you turn it into an identity people recognise and remember.",
      label: "Start Your Project",
    },
    href: "/services/branding-design",
  },
  {
    slug: "crm-system",
    title: "CRM System",
    items: [
      "Custom CRM Development",
      "Salesforce Integration",
      "HubSpot Setup",
      "Sales Pipeline Automation",
      "Customer Data Management",
      "Reporting Dashboards",
    ],
    image: serviceImage("crmService", "CRM dashboards built by Yuni Tech."),
    banner: banner(
      "CRM Systems",
      "CRM systems that fit how you actually work",
      "We build and integrate CRM platforms that bring your pipeline, customers, and reporting into one reliable place.",
      "crmBanner",
    ),
    overview: overview(
      "A CRM that matches how your team sells",
      "We build and integrate CRM platforms that bring your pipeline, customers, and reporting into one reliable place, then connect them to the tools your team already uses every day.",
      [
        {
          icon: "Database",
          value: "60+",
          label: "CRM Builds",
          body: "Pipelines matched to real processes.",
        },
        {
          icon: "Plug",
          value: "30+",
          label: "Integrations",
          body: "Connected to the tools teams use.",
        },
        {
          icon: "TrendingUp",
          value: "45%",
          label: "Less Manual Work",
          body: "Measured after rollout.",
        },
      ],
    ),
    offer: offer(
      "Services we offer",
      "CRM services that replace scattered spreadsheets with one system your team actually keeps up to date.",
      [
        {
          icon: "Layers",
          title: "Custom CRM Builds",
          body: "Pipelines, fields, and workflows shaped around your sales process.",
        },
        {
          icon: "Plug",
          title: "Platform Integration",
          body: "Email, billing, support, and marketing tools connected end to end.",
        },
        {
          icon: "LineChart",
          title: "Reporting & Dashboards",
          body: "Live views of pipeline, activity, and revenue for every team.",
        },
        {
          icon: "Bot",
          title: "Workflow Automation",
          body: "Routine follow-ups and hand-offs that run without being chased.",
        },
        {
          icon: "ShieldCheck",
          title: "Data Migration",
          body: "Existing records moved across cleanly, deduped, and verified.",
        },
        {
          icon: "Wrench",
          title: "Support & Training",
          body: "Onboarding and ongoing help so the system gets used properly.",
        },
      ],
    ),
    process: buildProcess(
      "How we build your CRM",
      "A clear, proven process to turn your sales workflow into a system that fits it.",
      "Let's Turn your Ideas into a CRM Your Team Will Use!",
      steps([
        {
          title: "Process Mapping",
          body: "We map how your team sells today, stage by stage, before changing anything.",
        },
        {
          title: "System Design",
          body: "Pipelines, fields, and permissions are modelled around that real process.",
        },
        {
          title: "Build & Integration",
          body: "We configure or build the CRM and connect it to email, billing, and support.",
        },
        {
          title: "Data Migration & Testing",
          body: "Existing records are moved, deduped, and verified, then every workflow is tested.",
        },
        {
          title: "Training & Support",
          body: "We onboard your team and keep the system tuned as your pipeline grows.",
        },
      ]),
    ),
    stack: buildStack(
      "The technology behind your CRM",
      "We use proven, scalable platforms to build CRM systems that stay reliable as your pipeline grows.",
      iconTiles(CRM_ICONS),
    ),
    cta: {
      heading: ["Outgrown your spreadsheets?", "Let's fix that."],
      body: "Share your sales process with our team and get a free consultation. We'll help you turn it into a CRM your team will actually use.",
      label: "Start Your Project",
    },
    href: "/services/crm-system",
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    items: [
      "Shopify Development",
      "WooCommerce Development",
      "Custom Storefronts",
      "Payment Gateway Integration",
      "Inventory Management",
      "Conversion Optimisation",
    ],
    image: serviceImage(
      "ecommerceService",
      "E-commerce storefronts built by Yuni Tech.",
    ),
    banner: banner(
      "E-Commerce",
      "Storefronts built to sell at scale",
      "Fast, secure, conversion-focused commerce, from product pages and checkout through payments and fulfilment.",
      "ecommerceBanner",
    ),
    overview: overview(
      "Storefronts built to sell at scale",
      "We build commerce experiences that stay fast as the catalogue grows. Product pages, checkout, payments, and fulfilment are designed together so the path to purchase never breaks.",
      [
        {
          icon: "ShoppingCart",
          value: "80+",
          label: "Stores Launched",
          body: "Built to trade at scale.",
        },
        {
          icon: "Package",
          value: "1M+",
          label: "Orders Processed",
          body: "Across client storefronts.",
        },
        {
          icon: "Plug",
          value: "25+",
          label: "Payment Gateways",
          body: "Integrated and battle-tested.",
        },
      ],
    ),
    offer: offer(
      "Services we offer",
      "Commerce services covering everything between a product listing and a completed order.",
      [
        {
          icon: "ShoppingCart",
          title: "Storefront Development",
          body: "Fast, responsive catalogue and product pages that convert.",
        },
        {
          icon: "Plug",
          title: "Payments & Checkout",
          body: "Secure, low-friction checkout with the gateways you need.",
        },
        {
          icon: "Layers",
          title: "Catalogue & Inventory",
          body: "Product data, variants, and stock kept accurate across channels.",
        },
        {
          icon: "Gauge",
          title: "Performance & Scale",
          body: "Storefronts that stay quick through launches and peak traffic.",
        },
        {
          icon: "Search",
          title: "Commerce SEO",
          body: "Structured data and content work that wins product searches.",
        },
        {
          icon: "Wrench",
          title: "Maintenance & Support",
          body: "Monitoring and updates that keep the store trading.",
        },
      ],
    ),
    process: buildProcess(
      "How we build your store",
      "A clear, proven process to turn your catalogue into a storefront that sells.",
      "Let's Turn your Ideas into a Store Built to Scale!",
      steps([
        {
          title: "Discovery & Planning",
          body: "We map your catalogue, margins, and fulfilment before the build begins.",
        },
        {
          title: "Storefront Design",
          body: "Product pages and checkout are designed around the real path to purchase.",
        },
        {
          title: "Build & Integration",
          body: "We build the storefront and wire in payments, shipping, and inventory.",
        },
        {
          title: "Testing & QA",
          body: "Checkout, payments, and stock are tested across devices before you trade.",
        },
        {
          title: "Launch & Optimisation",
          body: "We go live, monitor orders, and tune the store on real sales data.",
        },
      ]),
    ),
    stack: buildStack(
      "The technology behind your store",
      "We use modern, secure commerce technology built to stay fast through launches and peak traffic.",
      iconTiles(ECOMMERCE_ICONS),
    ),
    work: {
      projectFilter: "e-commerce",
      heading: "Stores we've built",
      body: "A look at some of the online stores we've built for brands selling across different categories and markets.",
    },
    cta: {
      heading: ["Ready to start selling?", "Let's build it."],
      body: "Share your catalogue with our team and get a free consultation. We'll help you turn it into a storefront built to scale.",
      label: "Start Your Project",
    },
    href: "/services/e-commerce",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    items: [
      "AI Chatbots & Assistants",
      "Workflow Automation",
      "Custom AI Agents",
      "Process Automation (RPA)",
      "LLM & API Integration",
      "AI Data Analysis & Reporting",
    ],
    image: serviceImage(
      "aiService",
      "AI automation solutions built by Yuni Tech.",
    ),
    banner: banner(
      "AI & Automation",
      "Automation that gives your team its time back",
      "We wire AI and automation into your existing tools so the repetitive work runs itself, accurately and on schedule.",
      "aiBanner",
    ),
    overview: overview(
      "Automation that gives your team its time back",
      "We wire AI and automation into the tools you already run, so the repetitive work happens on its own, accurately and on schedule, while your team stays on the decisions that matter.",
      [
        {
          icon: "Zap",
          value: "90+",
          label: "Automations Live",
          body: "Running quietly every day.",
        },
        {
          icon: "TrendingUp",
          value: "70%",
          label: "Manual Work Removed",
          body: "Measured across engagements.",
        },
        {
          icon: "Plug",
          value: "20+",
          label: "Tools Connected",
          body: "Wired into existing stacks.",
        },
      ],
    ),
    offer: offer(
      "Services we offer",
      "AI and automation services that remove manual steps without disrupting how your team works.",
      [
        {
          icon: "Bot",
          title: "Workflow Automation",
          body: "Multi-step processes that run themselves across your tools.",
        },
        {
          icon: "Sparkles",
          title: "AI Integrations",
          body: "Language models applied to real tasks, with sensible guardrails.",
        },
        {
          icon: "Plug",
          title: "Systems Integration",
          body: "Your existing platforms connected so data moves once, cleanly.",
        },
        {
          icon: "LineChart",
          title: "Data Pipelines",
          body: "Reliable ingestion and reporting you can build decisions on.",
        },
        {
          icon: "ShieldCheck",
          title: "Governance & Review",
          body: "Human checkpoints where automated output needs a decision.",
        },
        {
          icon: "Wrench",
          title: "Monitoring & Support",
          body: "Alerting and upkeep so automations keep running correctly.",
        },
      ],
    ),
    process: buildProcess(
      "How we build your automation",
      "A clear, proven process to turn your manual work into something that runs itself.",
      "Let's Turn your Ideas into Automation That Works!",
      steps([
        {
          title: "Process Audit",
          body: "We find and measure the repetitive work that is costing your team time.",
        },
        {
          title: "Automation Design",
          body: "We define each step, its guardrails, and where a human still decides.",
        },
        {
          title: "Build & Integration",
          body: "We build the automations and wire them into the tools you already run.",
        },
        {
          title: "Testing & Review",
          body: "Each one runs against real cases and is checked before it is handed over.",
        },
        {
          title: "Monitoring & Support",
          body: "Alerting and upkeep keep them running correctly long after launch.",
        },
      ]),
    ),
    stack: buildStack(
      "The technology behind your automation",
      "We use dependable AI and integration platforms so your automations run accurately, every day.",
      iconTiles(AI_ICONS),
    ),
    work: {
      projectFilter: "ai",
      heading: "AI work we've shipped",
      body: "A look at some of the AI and automation work we've delivered for teams across different industries.",
    },
    cta: {
      heading: ["Tired of manual work?", "Let's automate it."],
      body: "Share your workflow with our team and get a free consultation. We'll help you turn it into automation that runs accurately, every day.",
      label: "Start Your Project",
    },
    href: "/services/ai-automation",
  },
  {
    slug: "application-development",
    title: "Application Development",
    items: [
      "iOS App Development",
      "Android App Development",
      "React Native Apps",
      "Flutter Apps",
      "Progressive Web Apps",
      "API Development",
    ],
    image: serviceImage(
      "appService",
      "Mobile apps developed by Yuni Tech.",
    ),
    banner: banner(
      "App Development",
      "Custom mobile apps built to grow your business",
      "We design and develop high-performing iOS, Android, and cross-platform apps that turn your idea into a scalable, revenue-ready product.",
      "appBanner",
    ),
    overview: overview(
      "From idea to app store we handle every step",
      "We turn your ideas into powerful, user-friendly mobile apps. From strategy and design to development, testing, and launch, our team handles the entire process so you can focus on growing your business.",
      [
        {
          icon: "Smartphone",
          value: "150+",
          label: "Apps Delivered",
          body: "Turning ideas into successful products.",
        },
        {
          icon: "BarChart3",
          value: "10+",
          label: "Industries Served",
          body: "Diverse experience across multiple domains.",
        },
        {
          icon: "Users",
          value: "50+",
          label: "Expert Developers",
          body: "A skilled team that builds, scales and supports.",
        },
      ],
    ),
    offer: offer(
      "Services we offer",
      "End-to-end mobile app development services to turn your ideas into high-performance, scalable, and user-friendly applications.",
      [
        {
          icon: "Apple",
          title: "iOS App Development",
          body: "Build high-quality, secure, and performance-driven iOS apps for iPhone and iPad.",
        },
        {
          icon: "Bot",
          title: "Android App Development",
          body: "Develop scalable and feature-rich Android apps for a wider audience across all devices.",
        },
        {
          icon: "Layers",
          title: "Cross-Platform Development",
          body: "Build cost-effective apps using modern frameworks for iOS and Android.",
        },
        {
          icon: "PenTool",
          title: "UI/UX Design",
          body: "Create intuitive and engaging user experiences that drive higher user adoption.",
        },
        {
          icon: "Plug",
          title: "API Integration",
          body: "Seamlessly integrate third-party services, APIs, and custom backend systems.",
        },
        {
          icon: "Wrench",
          title: "App Maintenance & Support",
          body: "Ensure your app stays secure, up-to-date, and performs at its best.",
        },
      ],
    ),
    process: buildProcess(
      "How we build your app",
      "A clear, proven process to turn your idea into a successful, high-quality mobile app.",
      "Let's Turn your Ideas into a Robust Mobile App Together!",
      steps([
        {
          title: "Discovery & Planning",
          body: "We understand your goals, requirements, and target users to create a clear roadmap.",
        },
        {
          title: "UI/UX Design",
          body: "We design the screens and flows around how people will actually use the product.",
        },
        {
          title: "Development",
          body: "We build in short, reviewable increments so progress is visible from week one.",
        },
        {
          title: "Testing & QA",
          body: "Every release is tested across devices and edge cases before it reaches your users.",
        },
        {
          title: "Launch & Support",
          body: "We ship it, watch it in production, and keep improving it after go-live.",
        },
      ]),
    ),
    stack: buildStack(
      "The technology behind your app",
      "We use modern, reliable, and scalable technologies to build high-performing mobile apps tailored to your business needs.",
      iconTiles(APP_ICONS),
    ),
    work: {
      projectFilter: "mobile-app",
      heading: "Apps we've built",
      body: "A look at some of the mobile applications we've developed for startups and enterprises across different industries.",
    },
    cta: {
      heading: ["Have an app idea?", "Let's build it."],
      body: "Share your idea with our team and get a free consultation. We'll help you turn it into a scalable, high-performing mobile app.",
      label: "Start Your Project",
    },
    href: "/services/application-development",
  },
  {
    slug: "marketing",
    title: "Marketing",
    items: [
      "Search Engine Optimisation",
      "Paid Search & Social Ads",
      "Social Media Marketing",
      "Content Marketing",
      "Email & Lifecycle Marketing",
      "Analytics & Reporting",
    ],
    // TODO: swap seoService for the designer's marketing artwork when it lands.
    image: serviceImage(
      "seoService",
      "Marketing campaign reporting by Yuni Tech",
    ),
    banner: banner(
      "Marketing",
      "Marketing that brings the right people to you",
      "Search, paid, social, and content working together, measured on the enquiries and sales they produce rather than on impressions.",
      "marketingBanner",
    ),
    overview: overview(
      "Marketing measured on what it actually returns",
      "We plan and run campaigns across search, paid, social, and email, then report on what each channel returns. Every pound is traced to a result, so the budget keeps moving toward the work that earns it.",
      [
        {
          icon: "TrendingUp",
          value: "3X",
          label: "Average Growth",
          body: "Typical lift within a year.",
        },
        {
          icon: "Search",
          value: "250+",
          label: "Campaigns Run",
          body: "Across search, social and email.",
        },
        {
          icon: "BarChart3",
          value: "10+",
          label: "Industries Served",
          body: "Marketing in competitive markets.",
        },
      ],
    ),
    offer: offer(
      "Services we offer",
      "Marketing services that put your business in front of buyers already looking, and keep them moving toward a decision.",
      [
        {
          icon: "Search",
          title: "Search Engine Optimisation",
          body: "Technical, content, and authority work that wins organic positions.",
        },
        {
          icon: "LineChart",
          title: "Paid Search & Social Ads",
          body: "Campaigns judged on cost per enquiry, not on impressions served.",
        },
        {
          icon: "MonitorSmartphone",
          title: "Social Media Marketing",
          body: "Channel plans and creative sized for where your audience already is.",
        },
        {
          icon: "Sparkles",
          title: "Content Marketing",
          body: "Topic plans built around the questions your buyers actually ask.",
        },
        {
          icon: "Bot",
          title: "Email & Lifecycle",
          body: "Sequences that nurture new leads and bring lapsed customers back.",
        },
        {
          icon: "Gauge",
          title: "Conversion Optimisation",
          body: "Pages and funnels tuned so the traffic you pay for converts.",
        },
      ],
    ),
    process: buildProcess(
      "How we run your marketing",
      "A clear, proven process to turn your goals into campaigns that bring in enquiries.",
      "Let's Turn your Ideas into Marketing That Pays for Itself!",
      steps([
        {
          title: "Research & Audit",
          body: "We measure your current performance, your competitors, and real search demand.",
        },
        {
          title: "Strategy & Planning",
          body: "Channels, budget, and targets are set against the result you need.",
        },
        {
          title: "Creative & Content",
          body: "We produce the copy, creative, and pages each channel needs to perform.",
        },
        {
          title: "Launch & Testing",
          body: "Campaigns go live and variants are tested against cost per enquiry.",
        },
        {
          title: "Reporting & Optimisation",
          body: "We report on what each channel returned and move budget to what works.",
        },
      ]),
    ),
    stack: buildStack(
      "The technology behind your marketing",
      "We use established marketing and analytics tooling to find, prioritise, and measure the work that moves the numbers.",
      iconTiles(MARKETING_ICONS),
    ),
    work: {
      projectFilter: "seo",
      heading: "Growth we've driven",
      body: "A look at some of the search and growth work we've delivered for brands across different industries.",
    },
    cta: {
      heading: ["Ready to be found?", "Let's market it."],
      body: "Share your goals with our team and get a free consultation. We'll help you turn them into campaigns measured on the enquiries they bring in.",
      label: "Start Your Project",
    },
    href: "/services/marketing",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
