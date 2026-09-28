import type { CtaBandContent } from "@/types";

export type ArticleSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  filter: FilterId;
  author: string;
  readingMinutes: number;
  excerpt: string;
  image: string;
  publishedAt: string;
  sections: ArticleSection[];
  cta: CtaBandContent;
};

export const filters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "web", label: "Web" },
  { id: "apps", label: "Mobile Apps" },
  { id: "software", label: "Software" },
  { id: "design", label: "Design" },
  { id: "crm", label: "CRM" },
  { id: "marketing", label: "Marketing" },
] as const;

export type FilterId = (typeof filters)[number]["id"];

export const articles: Article[] = [
  {
    slug: "what-affects-the-cost-of-building-an-uber-like-app",
    title: "What Affects the Cost of Building an Uber-Like App?",
    category: "Mobile Apps",
    filter: "apps",
    author: "Yuni Tech Inc. Team",
    readingMinutes: 4,
    excerpt:
      "Learn what affects an Uber-like app development quote, including features, MVP scope, ongoing costs, and questions to ask developers.",
    image: "/images/uber-clone.png",
    publishedAt: "2026-09-29",
    sections: [
      {
        heading: "There is no single price for an Uber-like app",
        body: [
          "There is no single price for an Uber-like app. The cost depends on how your business handles rides, which features you need, and whether you use existing software or build a custom platform.",
          "Before requesting quotes, describe how customers book, how drivers receive trips, and how staff manages changes. Developers can then estimate the same work, making their proposals easier to compare.",
        ],
      },
      {
        heading: "What does an Uber-like app include?",
        body: ["A ride-booking platform usually needs three connected parts:"],
        bullets: [
          "Passenger app: lets customers book rides and view trip details",
          "Driver app: gives drivers trip information and lets them update trip status",
          "Dispatch dashboard: helps staff manage bookings, drivers, pricing, and customer issues",
        ],
      },
      {
        heading: "The work behind the screens",
        body: [
          "The work behind these screens matters too. If a driver declines a trip, what happens next? Should the system offer it to another driver or alert a dispatcher? Your answer affects what the development team must design, build, and test.",
        ],
      },
      {
        heading: "Why do development quotes vary?",
        body: [
          "A ready-made or white-label platform starts with existing software that a provider configures for your business. A custom platform is built around agreed requirements. Their quotes may cover very different work.",
          "One proposal might include branding and access to existing software. Another might include new apps, a dispatch dashboard, payment features, testing, and launch support. Ask each developer for a written list of what is included and excluded.",
          "Also confirm who owns any custom work, whether you can export your data, and which fees continue after launch.",
        ],
      },
      {
        heading: "Which features affect the cost?",
        body: [
          "The scope grows when a platform must handle more than basic bookings. Examples include:",
        ],
        bullets: [
          "Live driver tracking",
          "Automatic trip assignment",
          "Scheduled or recurring rides",
          "Multiple vehicle types",
          "Online payments and driver payouts",
          "Different prices or service areas",
          "Bookings made by dispatch staff",
        ],
      },
      {
        heading: "Choose features based on the trips you provide",
        body: [
          "A taxi service may prioritize immediate ride requests, while a medical transportation business may need recurring bookings and accessible vehicle details. Staff must also be able to manage the trips behind the passenger-facing app.",
        ],
      },
      {
        heading: "What should the first version include?",
        body: [
          "A minimum viable product (MVP) is a first version with the functions needed to deliver your service reliably. It could include booking, driver trip updates, notifications, and a dispatch dashboard. Payments may also be essential, depending on how your business collects fares.",
          "Features such as promotions and detailed analytics might wait. A function your team needs to complete a trip should stay in the plan, even if it makes the first version more complex.",
          "Before a wider launch, test realistic situations with a limited group of users. Include a declined trip, a changed pickup time, and a booking made by staff. Use the results to identify problems that need fixing.",
        ],
      },
      {
        heading: "What will it cost to run after launch?",
        body: [
          "The development quote may not include every operating expense. Ask about hosting, maps, payment processing, text messages, maintenance, and technical support. Find out which services the developer pays for, which your business pays for directly, and how the charges are calculated.",
          "The initial build price is only one part of the decision.",
        ],
      },
      {
        heading: "What should you ask before choosing a developer?",
        body: [
          "Give each company the same description of your service, then ask:",
        ],
        bullets: [
          "What apps, dashboard functions, and features are included?",
          "Is the software existing or custom-built?",
          "What is excluded from the price?",
          "Which third-party and recurring charges will we pay?",
          "What testing and launch support are included?",
          "Who owns the custom work, and can we export our data?",
          "Can another team maintain the platform later?",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Is a white-label app cheaper than a custom app? It may cost less to set up initially, but the total depends on customization, recurring fees, and whether the software supports your operations. Compare the proposed features and ongoing costs.",
          "How long does an Uber-like app take to build? That depends on the scope and development approach. Request a timeline that includes planning, design, development, testing, your approvals, and launch preparation.",
          "Will I own the source code? Your contract determines that. Ask exactly what you will receive and what rights you have to modify or maintain it.",
          "Can a standard ride-booking app support medical transportation? Possibly, but check whether it can handle your booking and dispatch needs. These may include recurring trips, vehicle details, and assistance instructions.",
        ],
      },
      {
        heading: "Final thoughts",
        body: [
          "To get a useful estimate, document how a ride moves through your business, from booking and assignment to pickup, payment, and staff follow-up. Give that same outline to each developer so you can compare proposals on a consistent basis.",
          "Planning a transportation app? Share your goals and essential workflows with Yuni Tech Inc. to discuss what your first version needs to do.",
        ],
      },
    ],
    cta: {
      heading: ["Have an app idea?", "Let's build it."],
      body: "Planning a transportation app? Share your goals and essential workflows with Yuni Tech Inc. to discuss what your first version needs to do.",
      label: "Discuss Your Project",
    },
  },
  {
    slug: "flutter-vs-react-native-in-2026-how-to-choose-for-your-mobile-app",
    title: "Flutter vs React Native in 2026: How to Choose for Your Mobile App",
    category: "Mobile Apps",
    filter: "apps",
    author: "Yuni Tech Inc. Team",
    readingMinutes: 4,
    excerpt:
      "Compare Flutter and React Native for your mobile app. Learn what to assess in design, team skills, device features, maintenance, and MVP planning.",
    image: "/images/flutter-vs-react-native.png",
    publishedAt: "2026-09-27",
    sections: [
      {
        heading: "Neither framework wins for every project",
        body: [
          "Flutter and React Native both let teams build iOS and Android apps using a shared codebase. Neither is automatically faster, cheaper, or better for every project.",
          "The right choice depends on your app's design, device features, developers' skills, and maintenance plans.",
        ],
      },
      {
        heading: "What is the difference?",
        body: [
          "Flutter uses Dart and its own widget system to build app interfaces. It gives developers detailed control over how screens are composed and displayed.",
          "React Native uses React with JavaScript or TypeScript. Its interface elements render through native platform components, and its tools may feel familiar to developers who already use React.",
          "Both approaches can produce useful mobile apps. What matters is how well each supports your requirements.",
        ],
      },
      {
        heading: "When might Flutter be a good fit?",
        body: [
          "Consider Flutter if a consistent, highly customized interface is central to your product. Its widgets give a team control over the appearance and behavior of screens.",
          "Also consider who will build and maintain the app. Developers new to Dart and Flutter need time to learn the tools. The team must still test on real iOS and Android devices and plan for any platform-specific integrations.",
        ],
      },
      {
        heading: "When might React Native be a good fit?",
        body: [
          "React Native may suit a team already experienced with React and JavaScript or TypeScript. Familiar skills can help that team get started.",
          "Before choosing it, check the libraries and native features your app requires. A camera, Bluetooth connection, or background-location workflow may need additional integration or platform-specific work. Evaluate support for the versions you intend to use.",
        ],
      },
      {
        heading: "What should you compare?",
        body: ["Use these questions to assess both options against your app:"],
        bullets: [
          "Design: does the app need a highly customized interface or familiar iOS and Android patterns?",
          "Team skills: which framework can your developers build and maintain confidently?",
          "Device features: are the required integrations supported and practical to test?",
          "Offline use: how will the app store information and synchronize it later?",
          "Maintenance: who will update libraries, test operating-system changes, and manage releases?",
        ],
      },
      {
        heading: "Start with a proof of concept",
        body: [
          "For an app with a difficult requirement, build a small proof of concept before committing to a framework. Test the hardest feature, such as an animation, offline process, or device connection, on representative devices.",
        ],
      },
      {
        heading: "Is one faster or cheaper?",
        body: [
          "There is no reliable winner for every app. Schedule and cost depend on the features, design, integrations, team experience, and testing required.",
          "A shared codebase does not mean identical work on both platforms. Your team still needs to test iOS and Android and handle platform-specific behavior. Ask developers to estimate the same feature list so you can compare proposals fairly.",
        ],
      },
      {
        heading: "Does Firebase determine the choice?",
        body: [
          "No. Flutter and React Native are frameworks for building the mobile app. Firebase offers services that can support an app, such as authentication and data storage. Review those backend needs separately.",
          "If you plan to use Firebase, identify the specific services and estimate how charges could change with usage. Firebase pricing depends on the products and plan selected.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Is Flutter better for performance? Not for every app. Test the interactions that matter most to your users on the devices they are likely to use.",
          "Is React Native easier to learn? It may be easier for developers who know React and JavaScript. A team familiar with Dart and Flutter may prefer Flutter.",
          "Can one codebase serve iOS and Android? Yes, both frameworks support shared code. Expect platform-specific testing and, for some features, additional native work.",
          "Which should I choose for an MVP? Choose based on the MVP's essential features and your team's skills. If one requirement could determine the choice, test it with a proof of concept first.",
        ],
      },
      {
        heading: "Make the decision around your app",
        body: [
          "Define what the app must do, who will maintain it, and which feature carries the most technical uncertainty. Then assess both frameworks against those requirements.",
        ],
      },
    ],
    cta: {
      heading: ["Have an app idea?", "Let's build it."],
      body: "Planning a mobile app? Share your goals and essential features with Yuni Tech Inc. to discuss the approach you want to evaluate.",
      label: "Discuss Your App",
    },
  },
  {
    slug: "ai-agents-for-customer-support-what-they-can-do-and-how-to-start",
    title: "AI Agents for Customer Support: What They Can Do and How to Start",
    category: "AI & Automation",
    filter: "ai",
    author: "Yuni Tech Inc. Team",
    readingMinutes: 5,
    excerpt:
      "AI agents can answer common customer support questions and pass harder ones to a person. Here is what they handle well and how to set one up.",
    image: "/images/ai-agents-customer-support.png",
    publishedAt: "2026-09-26",
    sections: [
      {
        heading: "Start with the tasks it can handle accurately",
        body: [
          "An AI customer support agent can answer questions using approved business information. When connected to other systems, it may also check an order, collect details for a support ticket, or help direct a request to the right team.",
          "The useful question for a business is not how many tasks the agent could perform, but which tasks it can handle accurately, with appropriate access and a clear path to a person.",
        ],
      },
      {
        heading: "What is an AI customer support agent?",
        body: [
          "An AI support agent is software that interprets a customer's request and uses available information or tools to respond. A scripted chatbot generally follows predefined questions and answers. An AI agent may understand more varied wording and, if given permission, take steps within a workflow.",
          'Capabilities differ between products. Calling a tool an "AI agent" does not mean it can access your business systems or resolve every customer issue.',
        ],
      },
      {
        heading: "What can it do?",
        body: [
          "The tasks depend on the information and permissions a business provides. An agent might:",
        ],
        bullets: [
          "Answer a policy question using current help articles",
          "Check an authenticated customer's order or booking status",
          "Collect the details needed to create a support ticket",
          "Summarize a conversation for a human representative",
          "Route a request to the appropriate team",
        ],
      },
      {
        heading: "Checking is not the same as changing",
        body: [
          "There is a difference between checking a refund's status and issuing a refund. The second changes a payment record and needs stricter controls. A business may decide that a person must approve it.",
        ],
      },
      {
        heading: "How would a support workflow operate?",
        body: [
          "Consider this hypothetical example. A customer asks whether a scheduled booking is confirmed. The agent follows the required identity-check process, looks up the booking, and reports the status shown in the system. If the booking is missing, the information conflicts, or an urgent change is needed, it transfers the request to a person.",
          "A useful handoff includes the customer's question, the information already checked, and the reason for the transfer. The customer should not have to explain everything again.",
        ],
      },
      {
        heading: "What does a business need before using one?",
        body: [
          "Start with accurate help articles, policies, and support procedures. Decide which systems the agent may access and which actions it may take. Customer-specific information should only be shared after appropriate identity checks.",
          "Set clear handoff rules. A person should take over when a customer asks for one, the answer is uncertain, information conflicts, a complaint is sensitive, or a request falls outside the agent's permissions.",
          "Testing should include difficult questions and misleading instructions in customer messages or other content the agent may read. A confident-sounding answer is not proof that the answer is correct.",
        ],
      },
      {
        heading: "How can you tell whether it helps?",
        body: [
          "Choose one frequent, lower-risk support request for a small pilot. Prepare the information needed to answer it, then test ordinary questions alongside incomplete details, changed policies, and situations requiring handoff.",
          "Measure whether answers are correct and issues are actually resolved. Also review repeat contacts, customer feedback, handoffs, and corrections made by staff. A high number of automated conversations is not useful if customers still need to contact support to fix the answer.",
          "Use the results to improve the source information and the workflow before expanding to more requests.",
        ],
      },
      {
        heading: "Ready-made platform or custom solution?",
        body: [
          "A ready-made platform may fit if its features work with your helpdesk and support processes. A custom solution may be worth evaluating if your business relies on unusual systems or specific approval steps.",
          "Compare a complete support task, not just a demo conversation. Ask how each option connects to your systems, controls access, transfers cases to people, records actions, and is maintained over time. These requirements also affect cost, along with the number of channels, expected usage, testing, and support.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Can an AI agent replace a support team? It may handle some defined requests or assist representatives. People remain necessary for exceptions, sensitive concerns, and requests the agent cannot resolve.",
          "Can it check an order or booking? It may be able to if it has a suitable connection to the relevant system. The business must also decide how to verify the customer's identity before sharing account details.",
          "Can it work across chat, email, and phone? Some products support multiple channels. Check the specific product and test how it passes conversation details to a person on each channel you plan to use.",
          "How much does an AI support agent cost? There is no universal price. Cost depends on the platform or development approach, system connections, channels, usage, testing, and ongoing maintenance. Define the first support task before requesting estimates.",
        ],
      },
      {
        heading: "A practical first step",
        body: [
          "List the questions your support team receives most often and where it finds the correct answers. Pick one request with clear information, limited permissions, and an obvious point for human handoff. That gives you a practical way to evaluate available solutions.",
        ],
      },
    ],
    cta: {
      heading: ["Have an AI idea?", "Let's build it."],
      body: "Exploring AI for customer support? Share the workflow you want to improve with Yuni Tech Inc. to discuss your requirements.",
      label: "Contact Yuni Tech Inc.",
    },
  },
  {
    slug: "website-audit-checklist",
    title:
      "How to Audit Your Website: A Checklist You Can Finish in an Afternoon",
    category: "Website",
    filter: "web",
    author: "Yuni Tech Inc. Team",
    readingMinutes: 4,
    excerpt:
      "A step-by-step website audit checklist covering speed, mobile, technical SEO, content and conversions, plus when to hire help.",
    image: "/images/website-audit-checklist.png",
    publishedAt: "2026-09-25",
    sections: [
      {
        heading: "Audit before you redesign",
        body: [
          "Most redesigns get ordered before anyone knows what's wrong. The site feels dated, so it gets rebuilt, and six months later the same forms still don't convert. A redesign fixes how a site looks. It rarely fixes a broken tracking tag, a slow hosting plan or a homepage that doesn't say what you do.",
          "Audit first. A basic audit takes an afternoon and costs nothing but attention.",
        ],
      },
      {
        heading: "Pick one number",
        body: [
          "Decide what the site is for. A lead site and a store need different things. Choose one figure to improve, such as form submissions or completed checkouts, and write down today's value. Without it you can't tell whether any fix worked.",
          "Then open three free tools: Google Search Console, PageSpeed Insights and Google Analytics.",
        ],
      },
      {
        heading: "Speed",
        body: [
          "Slow pages lose visitors. Run your main pages through PageSpeed Insights and read the Core Web Vitals. Google's targets for a good rating are a largest contentful paint under 2.5 seconds, an interaction to next paint under 200 milliseconds and a layout shift under 0.1.",
          "Test mobile first. Oversized images cause plenty of slow pages, and compressing them is a ten-minute job. Don't chase a perfect 100. Get the three metrics into the good range and move on.",
        ],
      },
      {
        heading: "Mobile",
        body: [
          "Pick up a phone. Read the homepage without zooming. Tap every button. Submit every form. You'll find overlapping text, tiny tap targets and forms that fight the keyboard. Your analytics show what share of visits come from phones, and that share of visitors is who these problems hit.",
        ],
      },
      {
        heading: "Technical SEO",
        body: [
          "Search engines have to find your pages before they can rank them. Check that:",
        ],
        bullets: [
          "Every page has its own title tag and meta description",
          "Each page has one H1 and a sensible heading order",
          "Your XML sitemap is submitted in Search Console",
          "robots.txt and noindex tags aren't blocking pages you want indexed",
          "Broken links and long redirect chains are fixed",
          "The indexing report has no errors you can't explain",
        ],
      },
      {
        heading: "Why technical problems go unnoticed",
        body: [
          "None of this shows on the page, so problems can sit for months while the site looks fine.",
        ],
      },
      {
        heading: "Content",
        body: [
          'Ask someone who has never seen the site to look at the homepage for five seconds. Then ask what you do. If they can\'t say, the headline needs work. Cut the buzzwords. "Innovative solutions" tells nobody anything.',
          "Check that each main page answers one question, that old pages are updated or removed, and that two pages aren't fighting over the same search term.",
        ],
      },
      {
        heading: "The path to conversion",
        body: [
          "Pick your main goal and click through the route a visitor takes to reach it. Count the steps. Each page needs one clear next action. Forms should ask only for what you need. Contact details should be easy to find. Named clients and reviews help, with permission.",
          "Picture a contact form that emails an address nobody reads. Traffic looks healthy, leads are zero, and the fix is a single setting. Submit your own form and see who gets it.",
        ],
      },
      {
        heading: "Security and tracking",
        body: [
          "Confirm the SSL certificate is valid and pages load over HTTPS. Update your CMS, themes and plugins, and check that backups run.",
          "Tracking breaks quietly during updates, so fire a test conversion and confirm it shows up in your reports. Check this twice.",
        ],
      },
      {
        heading: "Score it and start small",
        body: [
          "Count what passes in each section and start with the lowest score. Split the fixes into quick ones, under an hour each, and larger projects. Do the quick ones first. They show results soonest, and they'll tell you whether the big project is needed at all.",
        ],
      },
      {
        heading: "When to pay for an audit",
        body: [
          "A checklist finds the obvious problems. Pay for an audit when you can't tell which problems matter most, when traffic dropped and you don't know why, or when you're deciding between repairing the site and rebuilding it.",
          "A rebuild is the most expensive option, so make sure the audit says you need one. Ask for a sample report first, and check that it refers to a real site and isn't a list of generic best practices.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "How often should I audit my website? Once or twice a year, and after any major change such as a redesign, a platform move or a sudden traffic drop. Check speed and tracking monthly.",
          "How long does an audit take? A small site takes a few hours. A large one can take days because pages need individual review.",
          "What's the difference between a website audit and a technical SEO audit? A technical SEO audit covers what search engines read: crawling, indexing, structure and speed. A website audit adds content, design, usability and conversion.",
          "Are free audit tools enough? They catch many technical faults. They can't judge whether your message is clear or the conversion path makes sense, so pair them with a human review.",
          "Does an audit always lead to a redesign? No. Many problems can be fixed without a rebuild. A redesign makes sense when the platform limits what you can fix or the structure no longer matches the business.",
        ],
      },
    ],
    cta: {
      heading: ["Want a second opinion?", "Let's take a look."],
      body: "Want a second opinion on your site? You can request an audit from Yuni Tech Inc..",
      label: "Request an Audit",
    },
  },
  {
    slug: "how-to-build-saas-product-idea-to-launch",
    title: "How to Build a SaaS Product",
    category: "SaaS",
    filter: "marketing",
    author: "Yuni Tech Inc. Team",
    readingMinutes: 4,
    excerpt:
      "Forget the hype. Here's how to build a SaaS product that actually ships: talk to users, pick boring tech, and charge money before you're ready.",
    image: "/images/how-to-build-saas-product.png",
    publishedAt: "2026-09-24",
    sections: [
      {
        heading: "The idea is worth almost nothing",
        body: [
          "Everyone has a SaaS idea. Your Uber driver probably has one. Your dentist definitely has one. But here's the thing nobody tells you: the idea is worth almost nothing. The execution is everything. And most founders screw up the execution before they write a single line of code.",
          "We've watched this cycle repeat for years. Someone gets excited about a problem, hires a SaaS development company, burns through thirty grand, and launches to crickets. Then they blame the market. The market was fine. They just built something nobody asked for.",
          "So let's talk about how to do this properly. No fluff. Just the hard lessons.",
        ],
      },
      {
        heading: "Talk to humans before you touch a keyboard",
        body: [
          "You think you know the problem. You don't. Not until you've spoken to at least fifteen people who feel the pain directly. Not your mom. Not your LinkedIn network. Actual humans in the role you're targeting.",
          "Ask them how they handle the problem today. If they start describing a messy spreadsheet and a prayer, pay attention. If they shrug and say \"it's annoying but we manage,\" back away. Annoying doesn't pay the bills. Painful does.",
          "A SaaS development for startups team can build anything you describe. They can't make people care. That's your job. Do it first. Record the calls. Take notes. Look for the moment when their voice changes and they lean in. That's your signal.",
        ],
      },
      {
        heading: "Pick a boring SaaS tech stack",
        body: [
          "Founders love obsessing over their SaaS tech stack. Should we use Rust? Is GraphQL dead? What about that new framework everyone is tweeting about?",
          "Stop. Your stack doesn't matter if nobody uses your product. Pick boring tools your team actually knows. React on the frontend. Node or Python on the backend. PostgreSQL for the database. Host it on AWS or Google Cloud. Done.",
          "Boring technology is reliable. It has Stack Overflow answers. It has developers who know how to fix it at 2 AM when a customer is screaming. Save the experimental stuff for your side projects. Your SaaS needs to stay standing when things break.",
        ],
      },
      {
        heading: "Build an MVP that embarrasses you",
        body: [
          "If you're not slightly ashamed of your first release, you built too much. Strip it down. Way down. Your Minimum Viable Product needs exactly three things: user signup, the core workflow that solves the problem, and a way to charge money.",
          "No dashboards. No reporting. No integrations with tools your users haven't asked for yet. Just the one thing you promised, working well enough that someone would pay for it.",
          "We once saw a founder spend six months building an analytics suite before launching. Zero customers. Another founder shipped a basic form tool in three weeks. Hit ten thousand MRR in two months. The difference? One shipped. The other polished a monument to nothing.",
        ],
      },
      {
        heading: "Charge money immediately",
        body: [
          "Free users lie. They say they love your product. They say they'd pay eventually. Then they ghost you when you add a price tag. You need paying customers to know if your SaaS is real.",
          "Set a price. Any price. Put up a Stripe checkout. If nobody buys, you have two options: the problem isn't painful enough, or your solution doesn't solve it well. Both are good things to know before you burn another six months.",
        ],
      },
      {
        heading: "Launch to a whisper, not a crowd",
        body: [
          "You don't need a TechCrunch feature. You don't need a Product Hunt campaign with animated GIFs. You need ten people who actually use your product and give you honest feedback.",
          "Email the people you interviewed during validation. Tell them you built the thing. Ask them to try it. Watch where they get stuck. Fix those spots. Repeat.",
          "A quiet launch with real users beats a viral launch with tourists every single time. Tourists clap and leave. Real users tell you why your onboarding is broken.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "How long does it take to build a SaaS MVP? Three to six months with a focused team. The timeline stretches when you add features nobody asked for.",
          "Do I need a technical co-founder? Not if you have budget and a good SaaS development company. But you need someone technical enough to evaluate code quality and avoid getting locked into bad architecture.",
          "What's the most important part of the stack? The database and hosting. Everything else can be rebuilt. Losing customer data or going down for a day will kill your reputation permanently.",
          "Should I build for scale from day one? No. Build for your first hundred users. Worry about millions when you actually have thousands.",
          "How do I know if my idea is good? People offer to pay before you build. That's the only signal that matters.",
        ],
      },
      {
        heading: "Final thoughts",
        body: [
          "Building a SaaS product isn't magic. It's discipline. Talk to users. Pick boring tools. Ship less than you want to. Charge money. Then iterate based on what real people do, not what they say.",
          "If you're sitting on an idea right now, stop reading and go book five customer calls this week. Everything else is just procrastination with extra steps.",
        ],
      },
    ],
    cta: {
      heading: ["Have a SaaS idea?", "Let's build it."],
      body: "Sitting on a SaaS idea? Share it with Yuni Tech Inc. and we'll help you work out what your first version needs to do.",
      label: "Discuss Your Idea",
    },
  },
  {
    slug: "what-is-mvp-development",
    title: "What Is MVP Development and When Do You Need One",
    category: "MVP",
    filter: "marketing",
    author: "Yuni Tech Inc. Team",
    readingMinutes: 5,
    excerpt:
      "What an MVP is, three real examples, when you need one, what to put in it and what to ask an MVP development company.",
    image: "/images/what-is-mvp-development.png",
    publishedAt: "2026-09-29",
    sections: [
      {
        heading: "Most MVPs are too big",
        body: [
          "Most MVPs are too big. A founder writes twenty features, trims the list to fifteen and calls it minimal. The build takes six months, and the first users ask for something nobody listed. Here is what an MVP is supposed to be, and how to tell whether you need one.",
        ],
      },
      {
        heading: "What an MVP is",
        body: [
          "An MVP, or minimum viable product, is the smallest version of your product that lets you test one assumption with real people. Two words matter. Minimum means you cut everything that doesn't help you learn. Viable means a person can finish the task, so a broken demo doesn't count.",
          "It's a test. The product is a side effect.",
        ],
      },
      {
        heading: "Three MVPs that weren't finished products",
        body: [
          "Zappos began, as the story goes, with a founder photographing shoes in local stores and posting them online. When someone ordered, he bought the pair and shipped it. No warehouse, no inventory system. Dropbox's founder made a short video showing how the software would work before it fully existed, and used it to gauge interest. Airbnb's founders rented out air mattresses in their own apartment during a design conference.",
          "Each one tested whether people wanted the idea before anyone built the expensive part.",
        ],
      },
      {
        heading: "When you need an MVP",
        body: ["You probably need one if:"],
        bullets: [
          "You have an idea but no evidence that people want it",
          "You don't know exactly who your first users are",
          "Your budget can't survive a failed full build",
          "You need something real to show investors or early customers",
        ],
      },
      {
        heading: "The common thread is uncertainty",
        body: ["The less you know about demand, the more an MVP is worth."],
      },
      {
        heading: "When you might not",
        body: [
          "If you're replacing a spreadsheet process your team already uses daily, you know the requirements. You still want a small first release, but you aren't testing demand. Regulated products, such as payments or healthcare, have a floor too. A version that breaks the rules can't launch, however minimal.",
        ],
      },
      {
        heading: "Try a test before you write code",
        body: [
          "Some ideas can be tested for a fraction of the price. A landing page with a sign-up form shows whether anyone is interested. A manual service, where you do by hand what the software would do, shows whether the problem is worth solving. A clickable prototype shows whether people understand the design. If a test like that answers your question, skip the build.",
        ],
      },
      {
        heading: "What goes into an MVP",
        body: [
          "One user type, one problem, one core action. That's the scope. For every feature on your list, ask whether the test still works without it. If yes, cut it.",
          "Two things do belong in the first version. Analytics, so you can see what people do and not just what they say. And a way to ask users questions, whether that's a feedback form or a phone number.",
        ],
      },
      {
        heading: "Mistakes to avoid",
        body: [
          "Picture a founder who adds a referral system before the app has fifty users. That's building for growth that doesn't exist yet. Others are adding one more feature before launch, launching without deciding what success means, and treating the launch as the end.",
          "Write a number down before you release. Ten paying users. Thirty booked demos. Whatever would convince you the idea works.",
        ],
      },
      {
        heading: "What to do after launch",
        body: [
          "Watch what people do, then talk to ten of them. Then pick one: keep building, change direction or stop. Stopping counts as a result, and it costs far less than a full build.",
        ],
      },
      {
        heading: "Choosing an MVP development company",
        body: [
          "The best sign is pushback. A good MVP development company asks what you're trying to learn and questions your feature list. A weak one agrees to build everything and quotes a long timeline. Ask who owns the code, what the first release will contain and how the price changes if the scope grows.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "What does MVP stand for? Minimum viable product. It's the smallest version of a product that can test one assumption with real users.",
          "How long does it take to build an MVP? Often weeks to a few months, depending on scope. A narrow scope is what keeps it short, so agree what's in and out before work starts.",
          "How much does MVP development cost? It depends on scope, platforms and integrations. Ask for a fixed scope and an estimate, and check whether design and testing are included.",
          "What is the difference between an MVP, a prototype and a proof of concept? A prototype shows how something might look or work and usually isn't real software. A proof of concept checks that something is technically possible. An MVP is a working product that real people can use.",
          "Can I build an MVP with no-code tools? Sometimes. For simple workflows, no-code tools can test an idea cheaply. If you need custom logic, heavy traffic or strict security, you'll likely need custom development.",
        ],
      },
    ],
    cta: {
      heading: ["Have an idea to test?", "Let's scope it."],
      body: "If you have an idea and want to work out the smallest test for it, get in touch and we'll go through it with you.",
      label: "Get in Touch",
    },
  },
  {
    slug: "dedicated-team-vs-in-house-developers",
    title: "Dedicated Team vs In-House Developers: How to Choose",
    category: "Software",
    filter: "software",
    author: "Yuni Tech Inc. Team",
    readingMinutes: 5,
    excerpt:
      "Dedicated team vs. in-house developers: what each costs, where each fits, and three questions that settle the choice for your project.",
    image: "/images/dedicated-team-vs-in-house-developers.png",
    publishedAt: "2026-09-23",
    sections: [
      {
        heading: "Most founders ask this question too late",
        body: [
          "Most founders ask this question too late. They've already posted a job ad, waited two months and interviewed nine people who weren't right. Then someone mentions a dedicated team and the plan changes. Here's where we land on dedicated team vs in-house developers.",
          "One disclosure first: Yuni Tech Inc. sells dedicated teams, so weigh what follows with that in mind.",
        ],
      },
      {
        heading: "What a dedicated development team is",
        body: [
          "A dedicated development team is a group of developers, usually with a tech lead or project manager, who work only on your product. You don't employ them. A vendor does, and you pay a monthly fee for their time. They join your standups, use your tools and take direction from you.",
          "That separates it from a fixed-price project, where the vendor decides how to deliver, and from freelancers, where you manage each person yourself.",
        ],
      },
      {
        heading: "What each option costs",
        body: [
          "Remote development team cost depends on where the team is based, how senior the people are and how many you need. Compare quotes for the same seniority, not the same headcount. Ask whether the monthly rate includes the project manager, QA and design. Some vendors bill those separately.",
          "In-house looks cheaper because you only see the salary. Add recruiting, benefits, payroll taxes, equipment, software licenses, management time and the months a seat sits empty. Salary is only part of what an employee costs.",
        ],
      },
      {
        heading: "Where in-house wins",
        body: [
          "If software is your business, hire your own people. A company whose product is the app needs developers who'll still be around in five years and who know why the payment code looks strange. They can also fix a Friday-night outage without a contract clause getting in the way. Some knowledge stays with employees, and a vendor can't fully replace it. The same goes for anything involving intellectual property you'd rather keep inside the company.",
        ],
      },
      {
        heading: "Where a dedicated team wins",
        body: [
          "You have a project, a deadline and no time to recruit. A dedicated team can usually start in weeks, since the vendor already has people. You can add a mobile developer for three months and release them when the app ships. You avoid a permanent salary for a need that may not last.",
          "Startups without a technical leader gain the most. A good vendor brings a tech lead who makes the early architecture decisions you'd otherwise get wrong.",
        ],
      },
      {
        heading: "What goes wrong with each",
        body: [
          "Dedicated teams fail in predictable ways. Knowledge sits with the vendor, so if the contract ends and the code, documentation and access sit with them, you're stuck. Time zones add a day to some questions. And if a developer leaves the vendor, you re-explain your product to someone new.",
          "In-house teams fail differently. A bad hire costs months before anyone admits it. One senior developer leaving takes years of context along. Engineers hired for one project get restless on the next.",
          "Neither model fixes a vague brief. Whichever you pick, write down what done looks like.",
        ],
      },
      {
        heading: "A quick way to decide",
        body: [
          "Ask three questions. Is engineering your core business? Do you have a technical leader who can direct the work every day? Will you need the same team size for more than two years?",
          "Three yeses point to hiring. Two or more noes point to a dedicated team. Plenty of companies do both: a vendor team builds the first version while the company hires a lead, then the lead takes over and the vendor team shrinks.",
        ],
      },
      {
        heading: "Ask this before you hire a dedicated development team",
        body: [
          "Who owns the code, and when does ownership transfer? Can you talk to the developers before they start? What happens if someone leaves? How much notice do you need to shrink the team? Which hours will the team overlap with yours? A vendor that answers vaguely will run your project the same way.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "What is a dedicated development team? A group of developers employed by a vendor who work only on your product. You direct the work and pay a monthly fee, and you don't handle payroll, equipment or recruiting.",
          "Is a dedicated team cheaper than hiring in-house? Often for short or changing needs, because you avoid recruiting and permanent salaries. For a stable team you'll need for years, in-house can cost less over time. Compare the full cost of an employee, not just the salary.",
          "How fast can a dedicated team start? Usually faster than recruiting, often within weeks. Ask the vendor for a start date and who will be on the team.",
          "Who owns the code? It should be you, and the contract should say so. Ask when ownership transfers and where the code and documentation are stored during the project.",
          "Can I hire the developers later? Some vendors allow it and some restrict it in the contract. Ask before you sign.",
        ],
      },
    ],
    cta: {
      heading: ["Weighing your options?", "Let's talk it through."],
      body: "If you're weighing the two options for a project, get in touch and we'll go through it with you.",
      label: "Get in Touch",
    },
  },
  {
    slug: "healthcare-app-development-planning",
    title:
      "Healthcare App Development: Settle These Things Before Anyone Writes Code",
    category: "Software",
    filter: "software",
    author: "Yuni Tech Inc. Team",
    readingMinutes: 5,
    excerpt:
      "What to settle before building a healthcare app: HIPAA scope, data mapping, security basics, FDA rules and EHR integration.",
    image: "/images/healthcare-app-development-planning.png",
    publishedAt: "2026-09-22",
    sections: [
      {
        heading: "The code is the easy part",
        body: [
          "The code is the easy part. Healthcare apps stall on questions that have nothing to do with code. Who's allowed to see a patient's data? Which law applies to you? Which vendor will sign the paperwork? Answer those first and everything after gets cheaper.",
        ],
      },
      {
        heading: "Find out if HIPAA covers you",
        body: [
          "HIPAA applies to two groups. Covered entities are providers, health plans and clearinghouses. Business associates are the vendors that handle protected health information (PHI) for them. Build an app for a clinic and store patient data, and you're a business associate. So is your hosting company.",
          "A wellness app that collects data straight from consumers often sits outside HIPAA, though FTC rules and state privacy laws can still apply.",
          "Pay a healthcare attorney for an hour before you pay a developer for anything. The answer changes your architecture and your budget. Retrofitting compliance is where projects lose months.",
        ],
      },
      {
        heading: "Map the data before you draw screens",
        body: [
          "Write down every piece of patient information the app touches. Where it's stored, who sees it, how long it stays. Then cut whatever you don't need, because data you never collect can't leak. A booking app doesn't need a full diagnosis history. If your design asks for one, ask why.",
          "That list becomes your permissions model. A nurse, a billing clerk and a patient should each see something different. HIPAA also gives patients a right to their records, so decide now how the app handles that request.",
        ],
      },
      {
        heading: "Security is a short list",
        body: [
          "Encryption in transit and at rest. Individual logins with roles. Audit logs that show who opened or changed a record. A business associate agreement (BAA) with every vendor that touches PHI. A breach plan, written before you need it.",
          "Check BAA availability before you pick hosting, because not every cloud service will sign one. A signed BAA covers the vendor's side. Your app still has to meet its own obligations. Test with dummy data, never real records, and don't put \"HIPAA compliant\" on your landing page until someone qualified confirms it's true.",
        ],
      },
      {
        heading: "Ask what the FDA thinks",
        body: [
          "Software that diagnoses, treats or monitors a condition can count as a medical device. A scheduling tool won't. An app that suggests a drug dose might. The FDA publishes guidance on where the line falls. If your app makes clinical claims, get regulatory advice before building features around them. Reworking a feature after a regulator objects costs far more than an early consultation.",
        ],
      },
      {
        heading: "Integration will eat your schedule",
        body: [
          "Patient records usually live in an electronic health record (EHR) system. Reading from one or writing to it means working with standards like HL7 and FHIR, and passing the EHR vendor's approval process. That approval often takes longer than building the app. Ask for the timeline early, since this is a common place for schedules to slip. If your first version can work without an EHR connection, launch without it.",
        ],
      },
      {
        heading: "Design for tired, anxious, older users",
        body: [
          "Patients may be older, on aging phones, or frightened by a diagnosis. Clinicians have minutes between appointments. Test with both groups before launch. Use large text and keep flows short. Support screen readers. If a task takes six taps, people will quit halfway.",
        ],
      },
      {
        heading: "Start with one job",
        body: [
          "Picture a small clinic that wants booking, messaging, prescription refills and payments in one app. That's four projects. Pick the one patients complain about most, say appointment booking, and build only that. One workflow is easier to secure, get approved and test than a platform.",
          "Budget separately for a security review, legal advice and penetration testing. They don't come out of the development line.",
        ],
      },
      {
        heading: "Questions for whoever you hire",
        body: [
          "Has the team built software that handled PHI before? Who on their side will see your data? How do they test without real patient records? Will they sign a BAA? If they say they'll figure out compliance later, walk away. Five minutes on those questions tells you more than a portfolio page.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Does HIPAA apply to every health app? No. It covers covered entities and their business associates. A wellness app collecting data directly from consumers may fall outside it, though the FTC and state laws can still apply.",
          "What is a business associate agreement? A contract in which a vendor agrees to protect PHI under HIPAA rules. You need one with any provider that stores or handles PHI for you, including your cloud host.",
          "Is there an official HIPAA certification for apps? No. The federal government doesn't certify software as HIPAA compliant. Compliance depends on how the app is built and run, and an independent security assessment can support your case.",
          "How long does a healthcare app take to build? It depends on scope and integrations. EHR integration and compliance reviews often take more time than the app itself, so ask for a timeline that separates development from approvals.",
          "Can we use a standard cloud provider? Often yes, if the provider signs a BAA and you configure its services correctly. Ask before you commit.",
          "This is general information and not legal advice.",
        ],
      },
    ],
    cta: {
      heading: ["Planning a healthcare app?", "Let's scope it."],
      body: "If you're planning a healthcare app, tell Yuni Tech Inc. what you want to build and we'll go through scope and timeline with you.",
      label: "Get in Touch",
    },
  },
    {
    slug: "transportation-software-vs-generic-business-software",
    title: "What Makes Transportation Software Different from Generic Business Software",
    category: "CRM",
    filter: "crm",
    author: "Yuni Tech Inc. Team",
    readingMinutes: 4,
    excerpt:
      "Transportation software isn't just CRUD with a map view. Here's what separates transportation-specific software from generic business tools.",
    image: "/images/transportation-software-vs-generic-business-software.png",
    publishedAt: "2026-09-21",
    sections: [
      {
        heading: "Why generic tools break down",
        body: [
          "A lot of businesses start the same way: \"We just need software to manage our operations.\" For a retail shop or a consulting firm, that might genuinely mean a CRM, an inventory tool, and a scheduling app bolted together. For a transportation or logistics business, that approach usually breaks within the first few months of real use.",
          "Transportation software isn't generic business software with a map view added on top. It's a different category of problem entirely, and understanding why matters before you start scoping a build.",
        ],
      },
      {
        heading: "Real-time isn't optional",
        body: [
          "Most business software can tolerate a little lag. A CRM updating a contact record five seconds late doesn't break anything. But this can't be applied to transportation software, as a vehicle's location, route status, and a driver's availability need to be reflected in real time within seconds because decisions depend on it. Dispatch needs to know if a vehicle broke down before a customer calls asking where their delivery is. A parent needs to know if a school route is delayed before they're standing at an empty curb.",
          "Generic business software is built around eventual consistency; data catches up soon enough. Transportation software must be built around near-real-time state, because the physical world it's tracking doesn't wait.",
        ],
      },
      {
        heading: "Geography is a first-class problem, not a feature bolt-on",
        body: [
          "A lot of software takes location as an information field on the record or maybe a pin on a map for reference. Transportation software has to treat geography as core logic: route optimization, geofencing, ETA calculation based on live traffic conditions, and handling the genuinely messy reality of real-world addresses, road closures, and service boundaries that don't line up neatly with zip codes.",
          "This is why transportation platforms need genuine mapping and routing infrastructure, not just an embedded map widget. The routing engine must understand distance, time, and constraints together, not just draw a line between two points.",
        ],
      },
      {
        heading: "Compliance isn't a feature, it's the foundation",
        body: [
          "Generic business software might have a compliance checkbox somewhere for GDPR or basic data privacy. Transportation software, especially in regulated categories like student transportation, medical transportation (NEMT), or commercial freight, is built around compliance from the ground up. Driver hour limits, vehicle inspection records, insurance documentation, incident reporting formats: these aren't optional add-ons, they're structural requirements the software has to enforce, not just store.",
          "A generic CRM doesn't need to know that a driver's certification expired yesterday and block them from being assigned a route. Transportation software does, because getting that wrong has real consequences beyond a bad customer experience.",
        ],
      },
      {
        heading: "Multiple stakeholders, each needing a different view of the same data",
        body: [
          "A retail inventory system usually has one primary user type: staff managing stock. Transportation software routinely needs to serve several audiences simultaneously off the same underlying data: dispatchers coordinating routes in real time, drivers needing simple, low-distraction mobile interfaces while operating a vehicle, and customers or parents wanting a simplified, reassuring view of where their ride or delivery actually is.",
          "Designing three genuinely different interfaces on top of one real-time data layer is a harder design and architecture problem than most generic business software ever has to solve, because a single-purpose CRM usually only needs one coherent user experience, not three simultaneous ones with very different needs and stakes.",
        ],
      },
      {
        heading: "Failure has a different cost",
        body: [
          "If a generic project-management tool goes down for twenty minutes, that's an inconvenience. If a transportation platform's real-time tracking goes down for twenty minutes during active routes, dispatchers lose visibility into vehicles carrying actual people or time-sensitive medical supplies. The uptime and reliability bar for transportation software is closer to what critical infrastructure software requires than what typical SaaS tools require, because the software isn't just managing information, it's directly supporting something happening in the physical world right now.",
        ],
      },
      {
        heading: "What this means when you're building or buying",
        body: [
          "If you're a transportation, logistics, or fleet-based business evaluating software, generic business tools stretched to cover routing, real-time tracking, and compliance usually reveal their limits fast, once real volume and real-world messiness hit. The right approach is usually purpose-built software, or a generic platform's infrastructure combined with a transportation-specific layer designed around the problems above: real-time state, genuine routing logic, compliance built into the data model, and interfaces designed for each stakeholder separately.",
          "Generic software asks, \"how do we track this business generally.\" Transportation software has to ask, \"how do we track something moving through physical space, right now, with real stakes if we get it wrong.\"",
        ],
      },
      {
        heading: "The bottom line",
        body: [
          "Transportation software isn't a CRM with extra fields. It's built around real-time state, genuine geographic logic, compliance as a structural requirement rather than an afterthought, multiple simultaneous stakeholder views, and a reliability bar closer to critical infrastructure than typical business tools. Understanding that distinction upfront is what separates a platform that scales with a transportation business from one that quietly becomes the bottleneck it was supposed to solve.",
        ],
      },
    ],
    cta: {
      heading: ["Building transportation software?", "Let's talk it through."],
      body: "Planning a transportation or fleet platform? Share your workflows with Yuni Tech Inc. and we'll help you work out what it needs to do.",
      label: "Get in Touch",
    },
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3) {
  const current = getArticleBySlug(slug);
  if (!current) return articles.slice(0, limit);

  const sameFilter = articles.filter(
    (a) => a.slug !== slug && a.filter === current.filter,
  );
  const rest = articles.filter(
    (a) => a.slug !== slug && a.filter !== current.filter,
  );
  return [...sameFilter, ...rest].slice(0, limit);
}

/** Label of the filter tab an article belongs to — shown as its "Topic". */
export function getFilterLabel(id: FilterId) {
  return filters.find((filter) => filter.id === id)?.label ?? id;
}
