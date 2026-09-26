import type {
  Service,
  ServiceBanner,
  ServiceOfferContent,
  ServiceOfferItem,
  ServiceOverviewContent,
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
const overview = (
  heading: string,
  body: string,
  fileName = "overviewBanner",
): ServiceOverviewContent => ({
  eyebrow: "Overview",
  heading,
  body,
  image: {
    src: `/images/${fileName}.png`,
    alt: "Highlights from Yuni Tech projects",
  },
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
    href: "/services/search-engine-optimisation",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
