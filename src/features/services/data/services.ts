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

// TODO: swap appBanner for each service's own artwork as the designer
// delivers it — only the `image` line below changes.
const banner = (
  eyebrow: string,
  heading: string,
  body: string,
  fileName = "appBanner",
): ServiceBanner => ({
  eyebrow,
  heading,
  body,
  image: {
    src: `/images/${fileName}.png`,
    alt: `${eyebrow} work by Yuni Tech`,
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
 * The five stages are the same methodology whatever the service, so they are
 * shared; buildProcess() takes the per-service heading, intro and CTA around
 * them, and a service can pass its own steps when the wording needs to differ.
 */
const defaultProcessSteps = (): ServiceProcessStep[] => [
  {
    title: "Discovery & Planning",
    body: "We understand your goals, requirements, and target users to create a clear roadmap.",
    image: "/images/process1.png",
  },
  {
    title: "UI/UX Design",
    body: "We design the screens and flows around how people will actually use the product.",
    image: "/images/process2.png",
  },
  {
    title: "Development",
    body: "We build in short, reviewable increments so progress is visible from week one.",
    image: "/images/process3.png",
  },
  {
    title: "Testing & QA",
    body: "Every release is tested across devices and edge cases before it reaches your users.",
    image: "/images/process4.png",
  },
  {
    title: "Launch & Support",
    body: "We ship it, watch it in production, and keep improving it after go-live.",
    image: "/images/process5.png",
  },
];

const buildProcess = (
  heading: string,
  body: string,
  ctaHeading: string,
  steps: ServiceProcessStep[] = defaultProcessSteps(),
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

/**
 * The seven tiles the designer has delivered, each paired with the technology
 * its artwork actually depicts. Labels are read off the icons rather than
 * chosen per service: a tile that reads "Next.js" under the React logo is
 * wrong, and the hover enlarges the artwork, so the pairing has to hold.
 *
 * TODO: when per-service logos land, this becomes one map per service and the
 * service entries below can name their own technologies again.
 */
const TECH_ICONS = {
  iOS: "/images/appIcon1.png",
  MySQL: "/images/appIcon7.png",
  Firebase: "/images/appIcon6.png",
  Flutter: "/images/appIcon5.png",
  Python: "/images/appIcon4.png",
  "React Native": "/images/appIcon3.png",
  Android: "/images/appIcon2.png",
} as const;

/** The order the design prints them in, left to right. */
const SHARED_STACK = [
  "iOS",
  "MySQL",
  "Firebase",
  "Flutter",
  "Python",
  "React Native",
  "Android",
] as const satisfies readonly (keyof typeof TECH_ICONS)[];

/** Every service draws from the same pool, so every label matches its icon. */
const stackItems = (
  names: readonly (keyof typeof TECH_ICONS)[] = SHARED_STACK,
): ServiceStackItem[] =>
  names.map((name) => ({ name, image: TECH_ICONS[name] }));

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
      "Collage of website designs built by Yuni Solution",
    ),
    banner: banner(
      "Web Development",
      "Websites built to win trust and convert",
      "We design and build fast, accessible websites that hold up under real traffic and turn visitors into customers.",
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
    ),
    stack: buildStack(
      "The technology behind your website",
      "We use modern, reliable, and scalable technologies to build fast, accessible sites tailored to your business needs.",
      stackItems(),
    ),
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
      "Branding and design work by Yuni Solution",
    ),
    banner: banner(
      "Branding & Design",
      "Brand identities people remember",
      "From logo to design system, we craft a visual language that stays consistent everywhere your brand shows up.",
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
    ),
    stack: buildStack(
      "The tools behind your brand",
      "We use industry-standard design tools to build identities and systems your team can apply anywhere.",
      stackItems(),
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
    image: serviceImage("crmService", "CRM dashboards built by Yuni Solution"),
    banner: banner(
      "CRM Systems",
      "CRM systems that fit how you actually work",
      "We build and integrate CRM platforms that bring your pipeline, customers, and reporting into one reliable place.",
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
    ),
    stack: buildStack(
      "The technology behind your CRM",
      "We use proven, scalable platforms to build CRM systems that stay reliable as your pipeline grows.",
      stackItems(),
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
      "E-commerce storefronts built by Yuni Solution",
    ),
    banner: banner(
      "E-Commerce",
      "Storefronts built to sell at scale",
      "Fast, secure, conversion-focused commerce, from product pages and checkout through payments and fulfilment.",
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
    ),
    stack: buildStack(
      "The technology behind your store",
      "We use modern, secure commerce technology built to stay fast through launches and peak traffic.",
      stackItems(),
    ),
    cta: {
      heading: ["Ready to start selling?", "Let's build it."],
      body: "Share your catalogue with our team and get a free consultation. We'll help you turn it into a storefront built to scale.",
      label: "Start Your Project",
    },
    href: "/services/e-commerce",
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    items: [
      "High-Converting Landing Pages",
      "A/B Testing",
      "Campaign Pages",
      "Lead Capture Forms",
      "Performance Optimisation",
      "Analytics Integration",
    ],
    image: serviceImage(
      "landingPageService",
      "Landing pages designed by Yuni Solution",
    ),
    banner: banner(
      "Landing Pages",
      "Landing pages that earn the click",
      "Campaign pages engineered around a single goal, tested and tuned until the numbers move.",
    ),
    overview: overview(
      "Pages built around a single decision",
      "We design campaign pages with one job: getting the click. Message, layout, and proof are tested and tuned together until the numbers move in the right direction.",
      [
        {
          icon: "Rocket",
          value: "300+",
          label: "Pages Shipped",
          body: "Built around one clear action.",
        },
        {
          icon: "TrendingUp",
          value: "2X",
          label: "Average Lift",
          body: "Measured against previous pages.",
        },
        {
          icon: "Clock",
          value: "48h",
          label: "Typical Turnaround",
          body: "From brief to live page.",
        },
      ],
    ),
    offer: offer(
      "Services we offer",
      "Landing page services that turn campaign traffic into measurable action.",
      [
        {
          icon: "PenTool",
          title: "Landing Page Design",
          body: "Focused layouts that lead visitors to one clear action.",
        },
        {
          icon: "Code2",
          title: "Rapid Build & Launch",
          body: "Production-ready pages shipped in step with your campaign.",
        },
        {
          icon: "Gauge",
          title: "Speed Optimisation",
          body: "Pages that load fast enough to keep paid traffic on them.",
        },
        {
          icon: "LineChart",
          title: "A/B Testing",
          body: "Structured tests on headline, layout, and offer.",
        },
        {
          icon: "Plug",
          title: "Tracking & Analytics",
          body: "Events and conversions wired to your ad and analytics stack.",
        },
        {
          icon: "Sparkles",
          title: "Copy & Creative",
          body: "Messaging and visuals written around the offer, not the product.",
        },
      ],
    ),
    process: buildProcess(
      "How we build your landing page",
      "A clear, proven process to turn your campaign into a page that converts.",
      "Let's Turn your Ideas into Pages That Convert!",
    ),
    stack: buildStack(
      "The technology behind your pages",
      "We use lightweight, fast-loading technology so campaign traffic never waits on a page to render.",
      stackItems(),
    ),
    cta: {
      heading: ["Have a campaign to launch?", "Let's build it."],
      body: "Share your offer with our team and get a free consultation. We'll help you turn it into a page that loads fast and converts.",
      label: "Start Your Project",
    },
    href: "/services/landing-page",
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
      "AI automation solutions built by Yuni Solution",
    ),
    banner: banner(
      "AI & Automation",
      "Automation that gives your team its time back",
      "We wire AI and automation into your existing tools so the repetitive work runs itself, accurately and on schedule.",
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
    ),
    stack: buildStack(
      "The technology behind your automation",
      "We use dependable AI and integration platforms so your automations run accurately, every day.",
      stackItems(),
    ),
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
    image: serviceImage("appService", "Mobile apps developed by Yuni Solution"),
    banner: banner(
      "App Development",
      "Custom mobile apps built to grow your business",
      "We design and develop high-performing iOS, Android, and cross-platform apps that turn your idea into a scalable, revenue-ready product.",
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
    ),
    stack: buildStack(
      "The technology behind your app",
      "We use modern, reliable, and scalable technologies to build high-performing mobile apps tailored to your business needs.",
      stackItems(),
    ),
    cta: {
      heading: ["Have an app idea?", "Let's build it."],
      body: "Share your idea with our team and get a free consultation. We'll help you turn it into a scalable, high-performing mobile app.",
      label: "Start Your Project",
    },
    href: "/services/application-development",
  },
  {
    slug: "search-engine-optimisation",
    title: "Search Engine Optimisation",
    items: [
      "Technical SEO",
      "On-Page SEO",
      "Keyword Research",
      "Link Building",
      "Local SEO",
      "SEO Audits & Reporting",
    ],
    image: serviceImage(
      "seoService",
      "SEO performance reports by Yuni Solution",
    ),
    banner: banner(
      "SEO",
      "Search visibility that compounds",
      "Technical SEO, content, and authority work that lifts you into the results your buyers are already searching.",
    ),
    overview: overview(
      "Search visibility that keeps compounding",
      "We combine technical fixes, content, and authority work to lift you into the results your buyers already search for, then keep measuring so the gains hold rather than fade.",
      [
        {
          icon: "Search",
          value: "250+",
          label: "Campaigns Run",
          body: "Search work that compounds.",
        },
        {
          icon: "TrendingUp",
          value: "3X",
          label: "Organic Growth",
          body: "Typical lift within a year.",
        },
        {
          icon: "BarChart3",
          value: "10+",
          label: "Industries Served",
          body: "Ranking in competitive markets.",
        },
      ],
    ),
    offer: offer(
      "Services we offer",
      "Search services that move you up the results page and keep you there.",
      [
        {
          icon: "Search",
          title: "Technical SEO",
          body: "Crawlability, indexing, and structured data put right at the source.",
        },
        {
          icon: "Gauge",
          title: "Core Web Vitals",
          body: "Speed and stability work that search engines reward.",
        },
        {
          icon: "Sparkles",
          title: "Content Strategy",
          body: "Topic and keyword plans built around real search demand.",
        },
        {
          icon: "LineChart",
          title: "Rank & Traffic Reporting",
          body: "Clear reporting on positions, clicks, and what changed.",
        },
        {
          icon: "Layers",
          title: "On-Page Optimisation",
          body: "Titles, structure, and internal links tuned page by page.",
        },
        {
          icon: "ShieldCheck",
          title: "Authority Building",
          body: "Earned links and mentions from sources worth having.",
        },
      ],
    ),
    process: buildProcess(
      "How we build your search presence",
      "A clear, proven process to turn your site into one search engines rank.",
      "Let's Turn your Ideas into Search Visibility That Lasts!",
    ),
    stack: buildStack(
      "The technology behind your search presence",
      "We use established SEO and analytics tooling to find, prioritise, and measure the work that moves rankings.",
      stackItems(),
    ),
    cta: {
      heading: ["Want to be found?", "Let's rank you."],
      body: "Share your site with our team and get a free consultation. We'll help you turn it into one search engines and AI answers cite.",
      label: "Start Your Project",
    },
    href: "/services/search-engine-optimisation",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
