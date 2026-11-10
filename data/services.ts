export interface DeliverableItem {
  title: string;
  description: string;
}

export interface CaseStudyItem {
  tag: string;
  title: string;
  link: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  atAGlance: {
    bestFor: string;
    engagement: string;
    typicalStack: string;
  };
  overview: string[];
  whatWeDeliver: DeliverableItem[];
  technologies: string[];
  industries: string[];
  faqs: FAQItem[];
  relatedCaseStudies: CaseStudyItem[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "1",
    slug: "custom-software-development",
    number: "01",
    title: "Custom Software Development",
    shortDesc:
      "Purpose-built software for your specific workflows, from internal tools to customer-facing platforms.",
    atAGlance: {
      bestFor: "Internal tools, management systems and customer-facing platforms",
      engagement: "Project delivery, team extension or managed service",
      typicalStack: "React, Next.js, Laravel, Node.js, PostgreSQL",
    },
    overview: [
      "Custom software is built around how your business actually works, not the other way round. We start with the problem and the people who live with it every day, then design a system that fits the workflow instead of forcing the workflow to fit a tool.",
      "That covers internal tools and management systems as much as customer-facing platforms: a system of record with clear roles, an operational dashboard, or a product your customers use directly. We work in increments, so you see progress early and the scope stays honest.",
    ],
    whatWeDeliver: [
      {
        title: "Discovery and scoping",
        description:
          "We map the problem, the users and the constraints before any code is written.",
      },
      {
        title: "Internal tools",
        description:
          "Systems of record that follow the workflows your team already uses.",
      },
      {
        title: "Customer-facing platforms",
        description:
          "Products your customers use directly, built to be maintained, not just launched.",
      },
      {
        title: "Integrations",
        description:
          "Connecting the new system to the tools and data you already rely on.",
      },
      {
        title: "Roles and permissions",
        description:
          "Access control, approvals and a clear history of who changed what.",
      },
      {
        title: "Reporting and dashboards",
        description:
          "The numbers you need, defined once and agreed by everyone who uses them.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PHP",
      "Python",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    industries: [
      "Education",
      "E-commerce",
      "Professional Services",
      "Healthcare",
      "Logistics",
    ],
    faqs: [
      {
        question: "How long does a custom software project take?",
        answer:
          "It depends on scope. We start with a short discovery so we can give you a realistic plan rather than a guess, and you see working software in increments rather than only at the end.",
      },
      {
        question: "Can you improve a system we already have?",
        answer:
          "Yes. We can extend, modernise or integrate an existing system, and we will tell you honestly when rebuilding is the better option.",
      },
      {
        question: "How are changes handled during a project?",
        answer:
          "Scope changes are normal. We agree how a change affects time and cost before it is built, so there are no surprises later.",
      },
    ],
    relatedCaseStudies: [
      {
        tag: "CASE STUDY",
        title: "Management Systems: Turning Spreadsheets into an EMS",
        link: "/case-studies/management-systems-turning-spreadsheets-into-an-ems"
      },
      {
        tag: "CASE STUDY",
        title: "Dashboards and Reporting in a Management System",
        link: "/case-studies/dashboards-and-reporting-in-a-management-system"
      },
      {
        tag: "CASE STUDY",
        title: "Connecting a New Front End to a Legacy System",
        link: "/case-studies/connecting-a-new-front-end-to-a-legacy-system"
      }
    ]
  },
  {
    id: "2",
    slug: "web-application-development",
    number: "02",
    title: "Web Application Development",
    shortDesc:
      "Fast, reliable web applications built on modern frameworks and designed to scale with usage.",
    atAGlance: {
      bestFor: "Customer portals, dashboards and web products",
      engagement: "Project delivery, team extension or managed service",
      typicalStack: "React, Next.js, TypeScript, Node.js, PostgreSQL",
    },
    overview: [
      "A web application is more than a set of pages. It has accounts, permissions, data that has to stay consistent, and a release process you can trust. We build the whole application, not just the visible part.",
      "We use modern frameworks on the front end with a clear backend underneath, so the application stays fast as it grows and remains maintainable for the team that owns it after launch.",
    ],
    whatWeDeliver: [
      {
        title: "Application architecture",
        description:
          "Structure that keeps features independent and the codebase understandable.",
      },
      {
        title: "Responsive interfaces",
        description:
          "Layouts that work from a phone to a large monitor.",
      },
      {
        title: "Accounts and permissions",
        description:
          "Sign-in, roles and access that match how your organisation works.",
      },
      {
        title: "APIs and data modelling",
        description:
          "A data model and API the rest of the product can build on.",
      },
      {
        title: "Performance and SEO",
        description:
          "Pages that load quickly and are found, with sensible caching.",
      },
      {
        title: "Deployment and monitoring",
        description:
          "A repeatable release path and visibility after launch.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PHP",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Cloudflare",
      "AWS",
      "Sentry",
    ],
    industries: [
      "E-commerce",
      "SaaS",
      "Professional Services",
      "Real Estate",
    ],
    faqs: [
      {
        question: "Can you work with our existing design?",
        answer:
          "Yes. If you have designs or a design system we build against them; if not, interface design is part of the work.",
      },
      {
        question: "How do you keep a web application fast?",
        answer:
          "Performance is designed in, with sensible caching and asset handling, and monitored after launch so regressions are caught early.",
      },
      {
        question: "Do we own the code?",
        answer:
          "Yes. You own the code and the data, and we hand over documentation and a working deployment.",
      },
    ],
    relatedCaseStudies: [
      {
        tag: "CASE STUDY",
        title: "An E-commerce Build: From Catalogue to Checkout",
        link: "/case-studies/an-ecommerce-build-from-catalogue-to-checkout",
      },
      {
        tag: "CASE STUDY",
        title: "Portfolio and Blogging Platforms: Structure, Content and Speed",
        link: "/case-studies/portfolio-and-blogging-platforms-structure-content-and-speed",
      },
      {
        tag: "CASE STUDY",
        title: "Multi-Vendor Marketplaces: Listings, Orders and Payouts",
        link: "/case-studies/multi-vendor-marketplaces-listings-orders-and-payouts",
      },
    ],
  },
  {
    id: "3",
    slug: "mobile-application-development",
    number: "03",
    title: "Mobile Application Development",
    shortDesc:
      "Cross-platform mobile apps for iOS and Android built from a single, maintainable codebase.",
    atAGlance: {
      bestFor: "Apps for customers, field teams and internal operations",
      engagement: "Project delivery or team extension",
      typicalStack: "Flutter, Dart, Node.js, PostgreSQL",
    },
    overview: [
      "We build mobile apps from a single codebase for both iOS and Android using Flutter, so you reach both stores without maintaining two separate products.",
      "The work goes beyond the screens: offline behaviour, permissions, store requirements and the backend the app talks to are all part of planning a release that actually ships.",
    ],
    whatWeDeliver: [
      {
        title: "Cross-platform builds",
        description:
          "One codebase for iOS and Android, released to both stores.",
      },
      {
        title: "Native-quality experience",
        description:
          "Interfaces that feel at home on each platform.",
      },
      {
        title: "Offline and sync",
        description:
          "Apps that keep working when the connection does not, and reconcile when it returns.",
      },
      {
        title: "Notifications",
        description:
          "Push messages that reach the right people at the right time.",
      },
      {
        title: "Store release",
        description:
          "Preparing and submitting the build, with the store requirements handled.",
      },
      {
        title: "Maintenance",
        description:
          "Fixes and updates for new operating system versions after launch.",
      },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
      "Sentry",
    ],
    industries: [
      "E-commerce",
      "Logistics",
      "Healthcare",
      "Real Estate",
    ],
    faqs: [
      {
        question: "Should we build native or cross-platform?",
        answer:
          "It depends on the app. Cross-platform suits most business applications because it reaches both stores from one codebase; we will say so when a native build is genuinely the better choice.",
      },
      {
        question: "Can the app work offline?",
        answer:
          "Yes. For field and on-site work we design local storage, sync and conflict handling from the start.",
      },
      {
        question: "Do you handle app store submission?",
        answer:
          "Yes. Preparing the build, the listing requirements and the submission are part of the work.",
      },
    ],
    relatedCaseStudies: [
      {
        tag: "CASE STUDY",
        title: "Offline-First Design for Field Work",
        link: "/case-studies/offline-first-design-for-field-work",
      },
      {
        tag: "CASE STUDY",
        title: "Multi-Vendor Marketplaces: Listings, Orders and Payouts",
        link: "/case-studies/multi-vendor-marketplaces-listings-orders-and-payouts",
      },
      {
        tag: "CASE STUDY",
        title: "An E-commerce Build: From Catalogue to Checkout",
        link: "/case-studies/an-ecommerce-build-from-catalogue-to-checkout",
      },
    ],
  },
  {
    id: "4",
    slug: "ai-machine-learning",
    number: "04",
    title: "AI & Machine Learning",
    shortDesc:
      "Practical AI features: prediction, classification and assistants, built on your own data.",
    atAGlance: {
      bestFor:
        "Prediction, classification and assistant features on your own data",
      engagement: "Discovery, delivery or research-led engagement",
      typicalStack: "Python, PostgreSQL, Docker, AWS",
    },
    overview: [
      "We build AI features around a specific problem, not around the label. That starts with framing the question: what decision or task should improve, and what data do we actually have to work with?",
      "From there the work is disciplined engineering: preparing and evaluating data, training and testing a model, then deploying it where it is used and monitoring it so quality stays visible over time.",
    ],
    whatWeDeliver: [
      {
        title: "Problem framing",
        description:
          "Turning a business question into something measurable.",
      },
      {
        title: "Data preparation",
        description:
          "Collecting, cleaning and labelling the data the model depends on.",
      },
      {
        title: "Training and evaluation",
        description:
          "Building and testing models against agreed measures.",
      },
      {
        title: "Deployment and serving",
        description:
          "Putting the model behind an API your product can use.",
      },
      {
        title: "Monitoring",
        description:
          "Watching accuracy and drift once the feature is live.",
      },
      {
        title: "Human review",
        description:
          "Keeping people in control where the stakes require it.",
      },
    ],
    technologies: [
      "Python",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
      "Node.js",
      "REST APIs",
    ],
    industries: [
      "E-commerce",
      "FinTech",
      "Healthcare",
      "SaaS",
    ],
    faqs: [
      {
        question: "How much data do we need?",
        answer:
          "It depends on the problem. We look at what you have during discovery and tell you honestly whether there is enough to build something useful.",
      },
      {
        question: "Will this replace our staff?",
        answer:
          "Our aim is to assist people, not replace judgement. Features are designed with review and escalation where decisions matter.",
      },
      {
        question: "How do you know the model works?",
        answer:
          "We agree the measures before building, evaluate against them, and keep monitoring after deployment.",
      },
    ],
    relatedCaseStudies: [
      {
        tag: "CASE STUDY",
        title:
          "AI and Deep Learning Projects: From Experiment to Application",
        link: "/case-studies/ai-and-deep-learning-projects-from-experiment-to-application",
      },
      {
        tag: "CASE STUDY",
        title:
          "Search, Recommendations and Ranking with Machine Learning",
        link: "/case-studies/search-recommendations-and-ranking-with-machine-learning",
      },
    ],
  },
  {
    id: "5",
    slug: "ai-automation",
    number: "05",
    title: "AI Automation",
    shortDesc:
      "Turn repetitive business processes into intelligent, automated workflows that save hours every week.",
    atAGlance: {
      bestFor:
        "Repetitive, rules-based work that consumes staff time",
      engagement:
        "Discovery and delivery, then ongoing improvement",
      typicalStack: "Python, Node.js, PostgreSQL, Redis",
    },
    overview: [
      "Automation pays off when it is aimed at the right task. We map the process first, work out where time is actually lost, and automate the parts that are repetitive and predictable.",
      "Where a task needs judgement, we keep a person in the loop: the system drafts, sorts or extracts, and someone confirms. That is how automation stays useful and safe.",
    ],
    whatWeDeliver: [
      {
        title: "Process mapping",
        description:
          "Finding the steps worth automating and the ones to leave alone.",
      },
      {
        title: "Workflow automation",
        description:
          "Connecting the tools you already use so work moves by itself.",
      },
      {
        title: "Document and data extraction",
        description:
          "Pulling structured information out of documents and messages.",
      },
      {
        title: "Assistants",
        description:
          "Assistants that draft and summarise, with a person in control.",
      },
      {
        title: "Integrations",
        description:
          "Working through the systems you already rely on rather than replacing them.",
      },
      {
        title: "Monitoring",
        description:
          "Visibility into what the automation did and where it failed.",
      },
    ],
    technologies: [
      "Python",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    industries: [
      "Professional Services",
      "FinTech",
      "Logistics",
      "Education",
    ],
    faqs: [
      {
        question: "Which tasks should we automate?",
        answer:
          "Start with work that is repetitive, predictable and time consuming. We map the process during discovery and recommend where automation genuinely pays off.",
      },
      {
        question: "Will it work with our current tools?",
        answer:
          "In most cases yes. We automate through the tools you already use rather than forcing a replacement.",
      },
      {
        question: "How is it kept safe?",
        answer:
          "Automated steps are monitored, and steps that carry risk keep a human in the loop for confirmation.",
      },
    ],
    relatedCaseStudies: [
      {
        tag: "CASE STUDY",
        title:
          "AI and Deep Learning Projects: From Experiment to Application",
        link: "/case-studies/ai-and-deep-learning-projects-from-experiment-to-application",
      },
      {
        tag: "CASE STUDY",
        title: "Connecting a New Front End to a Legacy System",
        link: "/case-studies/connecting-a-new-front-end-to-a-legacy-system",
      },
      {
        tag: "CASE STUDY",
        title: "Dashboards and Reporting in a Management System",
        link: "/case-studies/dashboards-and-reporting-in-a-management-system",
      },
    ],
  },
  {
    id: "6",
    slug: "saas-development",
    number: "06",
    title: "SaaS Development",
    shortDesc:
      "Multi-tenant SaaS products with billing, onboarding and the operational tooling behind them.",
    atAGlance: {
      bestFor: "B2B and B2C software startups and corporate venture spin-outs",
      engagement: "End-to-end MVP build or scaling existing architecture",
      typicalStack: "Next.js, TypeScript, Stripe, Prisma, PostgreSQL, Docker",
    },
    overview: [
      "Turning an idea into a scalable subscription business requires bulletproof multi-tenancy, self-serve billing, customer onboarding, and administrative control panels.",
      "We design SaaS systems engineered from day one to handle tiered subscriptions, tenant data isolation, and low operational overhead.",
    ],
    whatWeDeliver: [
      {
        title: "Multi-tenant Architecture",
        description: "Isolated database schemas or row-level tenant security.",
      },
      {
        title: "Subscription & Invoicing",
        description: "Tiered pricing, recurring payments, and automated billing via Stripe.",
      },
      {
        title: "User Management & RBAC",
        description: "Role-based permissions, invitations, and secure team management.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Docker", "Tailwind CSS"],
    industries: ["B2B SaaS", "EdTech", "Productivity"],
    faqs: [
      {
        question: "How do you handle data privacy across different tenants?",
        answer:
          "We use strict tenant-isolation patterns at the database layer ensuring organizations can only query their own records.",
      },
    ],
    relatedCaseStudies: [],
  },
  {
    id: "7",
    slug: "api-backend-development",
    number: "07",
    title: "API & Backend Development",
    shortDesc:
      "Secure APIs and backend systems that connect your products, teams and third-party services.",
    atAGlance: {
      bestFor: "High-throughput APIs, microservices, database design, and legacy modernization",
      engagement: "Backend squad or infrastructure modernization sprint",
      typicalStack: "Node.js, Express, NestJS, PostgreSQL, Redis, Docker",
    },
    overview: [
      "A fast frontend is only as reliable as the backend beneath it. We build robust, scalable APIs engineered for data integrity, security, and low latency.",
      "From database indexing to caching layers, we ensure your backend scales smoothly under peak traffic.",
    ],
    whatWeDeliver: [
      {
        title: "REST & GraphQL APIs",
        description: "Cleanly versioned, documented APIs adhering to OpenAPI standards.",
      },
      {
        title: "Database Modeling",
        description: "Optimized schemas, query efficiency, indexing, and transactional safety.",
      },
      {
        title: "Caching & Queues",
        description: "Background processing and Redis caching for high availability.",
      },
    ],
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Docker", "AWS"],
    industries: ["Fintech", "Telecom", "HealthTech"],
    faqs: [
      {
        question: "Do you supply interactive API documentation?",
        answer:
          "Yes, all APIs include interactive Swagger/OpenAPI documentation and automated contract tests.",
      },
    ],
    relatedCaseStudies: [],
  },
  {
    id: "8",
    slug: "ui-ux-design",
    number: "08",
    title: "UI/UX Design",
    shortDesc:
      "Research-driven interface design that makes complex software clear and pleasant to use.",
    atAGlance: {
      bestFor: "Enterprise dashboards, SaaS UX revamps, and mobile interface design",
      engagement: "Design sprint, full design system, or usability audit",
      typicalStack: "Figma, Design Tokens, FigJam, Prototyping",
    },
    overview: [
      "We design intuitive digital products that make complex business workflows feel effortless. Our design process is rooted in user research and engineering feasibility.",
      "Every prototype we craft uses clean design systems and auto-layout ready for direct developer handoff.",
    ],
    whatWeDeliver: [
      {
        title: "Design Systems",
        description: "Reusable component libraries aligned with Tailwind CSS design tokens.",
      },
      {
        title: "Clickable Prototypes",
        description: "High-fidelity Figma prototypes for usability testing and stakeholder sign-off.",
      },
      {
        title: "User Journey Audits",
        description: "Mapping friction points to improve task completion and retention.",
      },
    ],
    technologies: ["Figma", "Design Tokens", "Wireframing", "WCAG Accessibility"],
    industries: ["Enterprise", "SaaS", "Healthcare"],
    faqs: [
      {
        question: "Can your designs be directly implemented in Tailwind CSS?",
        answer:
          "Yes, our design components are structured around standard Tailwind spacing, typography, and color tokens.",
      },
    ],
    relatedCaseStudies: [],
  },
  {
    id: "9",
    slug: "software-maintenance",
    number: "09",
    title: "Software Maintenance",
    shortDesc:
      "Monitoring, fixes and continuous improvement so your software keeps performing after launch.",
    atAGlance: {
      bestFor: "Production applications requiring continuous uptime, security updates, and SLAs",
      engagement: "Monthly retainer or managed support SLA",
      typicalStack: "Sentry, Datadog, GitHub Actions, AWS CloudWatch, Docker",
    },
    overview: [
      "Launching software is only step one. We provide proactive monitoring, bug fixes, dependency upgrades, and performance tuning so your systems stay reliable 24/7.",
      "With agreed response times and uptime SLAs, your internal team can stay focused on core business priorities.",
    ],
    whatWeDeliver: [
      {
        title: "Proactive Monitoring",
        description: "Real-time error tracking, logging, and health alerts before users notice.",
      },
      {
        title: "Security Patches",
        description: "Regular package audits, CVE vulnerability updates, and framework upgrades.",
      },
      {
        title: "Performance Tuning",
        description: "Database maintenance, server scaling, and continuous code improvements.",
      },
    ],
    technologies: ["Sentry", "AWS CloudWatch", "Docker", "GitHub Actions", "PostgreSQL"],
    industries: ["All Industries", "Enterprise", "Startups"],
    faqs: [
      {
        question: "What SLAs do you provide for urgent bug fixes?",
        answer:
          "We offer tiered SLAs covering critical response times ranging from 1 to 4 hours.",
      },
    ],
    relatedCaseStudies: [],
  },
];