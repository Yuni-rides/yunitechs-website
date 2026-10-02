/**
 * Title, description and Open Graph copy for every URL on the site, in one
 * place. `buildMetadata({ path })` reads from here, and the sitemap takes its
 * `lastmod` from here too.
 *
 * Rules when you add or edit a page (see the SEO handbook, section 7):
 *  - `title` is 60 characters or fewer and ends with "| Yuni Tech".
 *  - `description` is 120-160 characters.
 *  - `primaryKeyword` must not already be used by another page. Two pages
 *    chasing one search compete with each other.
 *  - `ogTitle` is written for a person scrolling LinkedIn, not for a crawler,
 *    so it can be longer and less keyword-heavy than the title.
 *  - Update `lastModified` in the same commit that changes the page's content.
 *    Never generate it from `new Date()` — that tells Google every page on the
 *    site changed today, every day.
 *
 * `keywords` are deliberately NOT emitted as a meta tag; Google has ignored
 * that tag for years. They are recorded so whoever writes the page knows which
 * term belongs in the H1, the first paragraph and one subheading.
 */
export type SeoPage = {
  title: string;
  description: string;
  ogTitle: string;
  ogType: "website" | "article";
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** ISO date. Drives <lastmod> in the sitemap. */
  lastModified: string;
};

const LAST_MODIFIED = "2026-10-02";

const page = (
  title: string,
  description: string,
  ogTitle: string,
  primaryKeyword: string,
  secondaryKeywords: string[],
  ogType: SeoPage["ogType"] = "website",
  lastModified: string = LAST_MODIFIED,
): SeoPage => ({
  title,
  description,
  ogTitle,
  ogType,
  primaryKeyword,
  secondaryKeywords,
  lastModified,
});

export const seoPages: Record<string, SeoPage> = {
  // ---------------------------------------------------------------- core ---
  "/": page(
    "Software, App & AI Development Company | Yuni Tech",
    "Yuni Tech builds custom websites, mobile apps, CRMs and AI automation for startups and growing companies, from our office in San Francisco.",
    "Yuni Tech: Software, App & AI Development",
    "software development company",
    [
      "custom software development",
      "mobile app development company",
      "AI automation agency",
    ],
  ),
  "/about": page(
    "About Yuni Tech: Software Development Team in the US",
    "Meet the Yuni Tech team behind our web, mobile and AI projects. We work from San Francisco with startups and growing businesses across the US.",
    "About Yuni Tech",
    "Yuni Tech",
    [
      "software development team San Francisco",
      "US software development company",
    ],
  ),
  "/services": page(
    "Software Development Services: Web, Mobile & AI | Yuni Tech",
    "Website development, mobile apps, custom CRM, e-commerce, AI automation, branding and marketing. See how Yuni Tech scopes, builds and supports each project.",
    "Yuni Tech Services: Web, Mobile, CRM & AI",
    "software development services",
    ["web and mobile development services", "AI development services"],
  ),
  "/projects": page(
    "Software & App Development Portfolio | Yuni Tech",
    "Websites, mobile apps, e-commerce stores and AI tools Yuni Tech has designed and built for clients in healthcare, education, retail and transportation.",
    "Yuni Tech Portfolio and Case Studies",
    "software development portfolio",
    ["app development case studies", "web development portfolio"],
  ),
  "/articles": page(
    "Software, App & AI Development Guides | Yuni Tech Blog",
    "Practical guides on app costs, MVPs, AI agents, CRMs, e-commerce and website planning, written for founders and teams deciding what to build next.",
    "Yuni Tech Blog: Software, App & AI Guides",
    "software development blog",
    ["app development guides", "AI automation articles"],
  ),
  "/contact": page(
    "Contact Yuni Tech | Get a Software Project Estimate",
    "Tell us what you want to build and get a project estimate from Yuni Tech. Call +1 (415) 791-5224 or visit 2261 Market St, Suite 2015, San Francisco.",
    "Contact Yuni Tech",
    "contact Yuni Tech",
    ["software project estimate", "hire software developers"],
  ),
  "/product": page(
    "Yuni Rides: Student Transportation Software | Yuni Tech",
    "Yuni Rides is the student transportation platform Yuni Tech designed, built and runs: a parent app, driver app, live tracking and dispatch for school rides.",
    "Yuni Rides: The Student Transportation Platform We Built",
    "student transportation software",
    ["school transportation app", "ride booking platform development"],
  ),

  // ------------------------------------------------------------ services ---
  "/services/website-development": page(
    "Custom Website Development Company | Yuni Tech",
    "Custom websites built with React, Next.js, Laravel and WordPress: fast, SEO-ready and designed to convert. Discovery, design, build and support in one team.",
    "Custom Website Development by Yuni Tech",
    "custom website development company",
    [
      "web development services",
      "Next.js development agency",
      "WordPress development",
    ],
  ),
  "/services/application-development": page(
    "Mobile App Development Company: iOS & Android | Yuni Tech",
    "Native iOS and Android apps built with Swift and Kotlin, from first MVP to scale. Product design, backend, testing and App Store launch handled by one team.",
    "Mobile App Development by Yuni Tech",
    "mobile app development company",
    [
      "iOS app development",
      "Android app development",
      "native app development",
    ],
  ),
  "/services/ai-automation": page(
    "AI Automation & AI Agent Development Services | Yuni Tech",
    "We connect AI and automation to the tools you already use so repetitive work runs on its own: workflow automation, AI agents, integrations and data pipelines.",
    "AI Automation Services by Yuni Tech",
    "AI automation services",
    [
      "AI agent development",
      "workflow automation agency",
      "AI integration services",
    ],
  ),
  "/services/crm-system": page(
    "Custom CRM Development Services | Yuni Tech",
    "Custom CRM systems built around how your team sells and supports customers, with the integrations, dashboards and automations that off-the-shelf tools miss.",
    "Custom CRM Development by Yuni Tech",
    "custom CRM development",
    ["CRM software development", "custom CRM for small business"],
  ),
  "/services/e-commerce": page(
    "E-commerce Website Development Services | Yuni Tech",
    "Custom e-commerce stores built to sell: fast product pages, a smooth checkout, payment and inventory integrations, and SEO set up from the first day.",
    "E-commerce Development by Yuni Tech",
    "ecommerce website development",
    ["custom ecommerce development", "online store development"],
  ),
  "/services/branding-design": page(
    "Branding & UI/UX Design Agency | Yuni Tech",
    "Brand identity, logos and UI/UX design for startups and tech companies, delivered as design files your developers can build from directly.",
    "Branding and UI/UX Design by Yuni Tech",
    "branding and UI/UX design agency",
    [
      "UI UX design services",
      "brand identity design",
      "logo design for startups",
    ],
  ),
  "/services/marketing": page(
    "Digital Marketing & SEO Services | Yuni Tech",
    "SEO, content, paid ads and social campaigns that bring qualified leads to your website, planned and measured by the same team that builds it.",
    "Digital Marketing and SEO by Yuni Tech",
    "digital marketing and SEO services",
    ["SEO services for tech companies", "B2B digital marketing agency"],
  ),

  // ------------------------------------------------------------ projects ---
  "/projects/fmc-dubai": page(
    "FMC Dubai Healthcare Website Case Study | Yuni Tech",
    "How Yuni Tech designed and built the FMC Dubai website, helping patients find sports medicine, physiotherapy and orthopaedic care and book appointments.",
    "Case Study: FMC Dubai Healthcare Website",
    "healthcare website development case study",
    ["medical website design", "clinic website development"],
    "article",
  ),
  "/projects/edsidera": page(
    "Edsidera Education Platform Case Study | Yuni Tech",
    "How Yuni Tech built the Edsidera platform: a marketing site, a children's award app and a school portal, with online enrolment and payments.",
    "Case Study: Edsidera Education Platform",
    "education platform development case study",
    ["edtech website development", "school platform design"],
    "article",
  ),
  "/projects/sizgroup": page(
    "Sizgroup App Studio Website Case Study | Yuni Tech",
    "How Yuni Tech rebuilt the Sizgroup website: a page for each of twelve app development services, a portfolio that proves the work, and one path to booking.",
    "Case Study: Sizgroup App Studio Website",
    "agency website design case study",
    ["app studio website", "B2B tech website design"],
    "article",
  ),
  "/projects/purpose-payment": page(
    "Purpose Payment Rewards App Case Study | Yuni Tech",
    "How Yuni Tech built Purpose Payment, a mobile payment app that combines everyday purchases with rewards and charitable giving.",
    "Case Study: Purpose Payment Mobile App",
    "payment app development case study",
    ["fintech app development", "rewards app development"],
    "article",
  ),
  "/projects/myplaces": page(
    "myPlaces Social Location App Case Study | Yuni Tech",
    "How Yuni Tech designed and built myPlaces, a social discovery app that connects people with nearby places, events and each other.",
    "Case Study: myPlaces Social Location App",
    "social app development case study",
    ["location based app development", "social discovery app"],
    "article",
  ),
  "/projects/skillsync": page(
    "SkillSync Service Marketplace App Case Study | Yuni Tech",
    "How Yuni Tech built SkillSync, a marketplace app that connects clients with nearby trainers, tutors and skilled professionals.",
    "Case Study: SkillSync Marketplace App",
    "marketplace app development case study",
    ["service marketplace app", "booking app development"],
    "article",
  ),
  "/projects/khazanay": page(
    "Khazanay Footwear E-commerce Store Case Study | Yuni Tech",
    "How Yuni Tech built Khazanay, an online store selling pre-loved, new and factory-leftover footwear, from catalogue to checkout.",
    "Case Study: Khazanay Online Footwear Store",
    "ecommerce store development case study",
    ["footwear ecommerce website", "thrift store website"],
    "article",
  ),
  "/projects/webbeecart": page(
    "WebBeeCart Multi-Vendor Marketplace Case Study | Yuni Tech",
    "How Yuni Tech built WebBeeCart, a multi-vendor e-commerce builder that lets businesses launch their own stores and marketplaces.",
    "Case Study: WebBeeCart E-commerce Platform",
    "multi vendor marketplace development",
    ["ecommerce platform development", "marketplace builder"],
    "article",
  ),
  "/projects/why-black": page(
    "WHY BLACK Accessories Store Case Study | Yuni Tech",
    "How Yuni Tech designed the WHY BLACK online store for chargers, cables, power banks and audio gear, with fast product pages and a simple checkout.",
    "Case Study: WHY BLACK Mobile Accessories Store",
    "electronics ecommerce website case study",
    ["mobile accessories online store", "ecommerce UI design"],
    "article",
  ),
  "/projects/regive-hub": page(
    "ReGive Hub SEO & Digital Growth Case Study | Yuni Tech",
    "How Yuni Tech improved search visibility and digital growth for ReGive Hub, a community app for reusing and giving away items.",
    "Case Study: ReGive Hub SEO and Growth",
    "SEO case study",
    ["app marketing case study", "nonprofit SEO"],
    "article",
  ),
  "/projects/brilliant-teaching": page(
    "Brilliant Teaching Lesson Planner Case Study | Yuni Tech",
    "How Yuni Tech built Brilliant Teaching, an AI-ready app that helps teachers build units, organise courses and structure lessons.",
    "Case Study: Brilliant Teaching Lesson Planning App",
    "edtech app development case study",
    ["lesson planning app", "AI education app development"],
    "article",
  ),

  // ------------------------------------------------------------ articles ---
  "/articles/what-affects-the-cost-of-building-an-uber-like-app": page(
    "Uber-Like App Development Cost: What Drives the Price",
    "Learn what affects an Uber-like app development quote, including features, MVP scope, ongoing costs, and questions to ask developers.",
    "What Affects the Cost of Building an Uber-Like App?",
    "uber like app development cost",
    ["cost to build a ride sharing app", "taxi app development cost"],
    "article",
  ),
  "/articles/flutter-vs-react-native-in-2026-how-to-choose-for-your-mobile-app":
    page(
      "Flutter vs React Native in 2026: Which to Choose",
      "Compare Flutter and React Native for your mobile app. Learn what to assess in design, team skills, device features, maintenance, and MVP planning.",
      "Flutter vs React Native in 2026: How to Choose for Your Mobile App",
      "flutter vs react native",
      ["flutter vs react native 2026", "cross platform app framework"],
      "article",
    ),
  "/articles/ai-agents-for-customer-support-what-they-can-do-and-how-to-start":
    page(
      "AI Agents for Customer Support: Uses and How to Start",
      "AI agents can answer common customer support questions and pass harder ones to a person. Here is what they handle well and how to set one up.",
      "AI Agents for Customer Support: What They Can Do and How to Start",
      "AI agents for customer support",
      ["AI customer service agent", "support automation"],
      "article",
    ),
  "/articles/website-audit-checklist": page(
    "Website Audit Checklist: Finish It in an Afternoon",
    "A step-by-step website audit checklist covering speed, mobile, technical SEO, content and conversions, plus when to hire help.",
    "How to Audit Your Website: A Checklist You Can Finish in an Afternoon",
    "website audit checklist",
    ["how to audit a website", "technical SEO checklist"],
    "article",
  ),
  "/articles/how-to-build-saas-product-idea-to-launch": page(
    "How to Build a SaaS Product: From Idea to Launch",
    "Forget the hype. Here's how to build a SaaS product that actually ships: talk to users, pick boring tech, and charge money before you're ready.",
    "How to Build a SaaS Product",
    "how to build a SaaS product",
    ["SaaS development", "SaaS MVP"],
    "article",
  ),
  "/articles/what-is-mvp-development": page(
    "What Is MVP Development and When Do You Need One?",
    "What an MVP is, three real examples, when you need one, what to put in it, and what to ask an MVP development company before you hire them.",
    "What Is MVP Development and When Do You Need One",
    "MVP development",
    ["what is an MVP", "MVP development company"],
    "article",
  ),
  "/articles/dedicated-team-vs-in-house-developers": page(
    "Dedicated Team vs In-House Developers: How to Choose",
    "Dedicated team vs. in-house developers: what each costs, where each fits, and three questions that settle the choice for your project.",
    "Dedicated Team vs In-House Developers: How to Choose",
    "dedicated development team",
    ["dedicated team vs in-house", "hire dedicated developers"],
    "article",
  ),
  "/articles/healthcare-app-development-planning": page(
    "Healthcare App Development: What to Settle First",
    "What to settle before building a healthcare app: HIPAA scope, data mapping, security basics, FDA rules and EHR integration, explained step by step.",
    "Healthcare App Development: Settle These Things Before Anyone Writes Code",
    "healthcare app development",
    ["HIPAA compliant app development", "medical app planning"],
    "article",
  ),
  "/articles/transportation-software-vs-generic-business-software": page(
    "Transportation Software vs Generic Business Software",
    "Transportation software isn't just CRUD with a map view. Here's what separates transportation-specific software from generic business tools.",
    "What Makes Transportation Software Different from Generic Business Software",
    "transportation software development",
    ["transportation management software", "dispatch software"],
    "article",
  ),
  "/articles/ai-agents-vs-chatbots-what-is-the-difference": page(
    "AI Agents vs Chatbots: What Is the Difference?",
    "Learn how AI agents and chatbots differ, where each fits in customer support and lead qualification, and how to choose a first use case.",
    "AI Agents vs Chatbots: What Is the Difference?",
    "AI agents vs chatbots",
    ["AI agent vs chatbot difference"],
    "article",
  ),
  "/articles/custom-ecommerce-vs-shopify": page(
    "Custom E-commerce vs Shopify: Which Fits Your Store?",
    "Custom e-commerce development vs Shopify or WooCommerce: what each costs, where each breaks down, and how to know which one you need.",
    "Custom E-commerce vs Shopify: Which One Actually Fits Your Store",
    "custom ecommerce vs Shopify",
    ["Shopify vs custom website", "custom ecommerce development cost"],
    "article",
  ),
  "/articles/cart-abandonment-fixes": page(
    "Why Shoppers Abandon Carts and What Fixes It",
    "The real reasons shoppers abandon their carts, which fixes matter most, and how to find the specific reason your own customers are leaving.",
    "Why Online Shoppers Abandon Their Cart, and What Actually Fixes It",
    "cart abandonment",
    ["how to reduce cart abandonment", "checkout optimization"],
    "article",
  ),
  "/articles/website-redesign-signs-and-planning": page(
    "Signs You Need a Website Redesign and How to Plan It",
    "How to tell whether your site needs a redesign, what to fix first, and how to plan a redesign that doesn't reset your SEO.",
    "Signs It's Time to Redesign Your Website, and How to Plan One",
    "website redesign",
    ["signs you need a website redesign", "website redesign SEO"],
    "article",
  ),
  "/articles/when-custom-crm-is-worth-building": page(
    "When Is a Custom CRM Worth Building?",
    "Custom vs off-the-shelf CRM: when a template is enough, when it isn't, and what to check before you pay someone to build one.",
    "When a Custom CRM Is Worth Building",
    "custom CRM vs off the shelf",
    ["build a custom CRM", "when to build a CRM"],
    "article",
  ),
};

export function getSeoPage(path: string): SeoPage | undefined {
  return seoPages[path];
}
