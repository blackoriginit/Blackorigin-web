export type CaseStudy = {
  slug: string;
  category: string;
  type: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  client: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  services: string[];
  technologies: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "instructor-content-control",
    category: "Training Platforms",
    type: "CONTENT MANAGEMENT",
    title: "Giving Instructors Control of Their Content",
    description:
      "A project-type walkthrough of authoring tools: structured content, previews, permissions and publishing workflows.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200",
    tags: ["Content", "Permissions", "Publishing"],
    client: "Training Platform",
    challenge:
      "Instructors needed a simple way to create, organize and manage learning materials without depending on technical teams.",
    approach:
      "We focused on structured content creation, clear permission levels and a smooth authoring experience.",
    solution:
      "A centralized content management experience with previews, publishing controls and instructor-friendly workflows.",
    outcome:
      "The platform provides a more organized way to manage educational content and gives instructors greater control over their materials.",
    services: ["Web Application Development", "UI/UX Engineering"],
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    slug: "machine-learning-search",
    category: "AI & Deep Learning",
    type: "MACHINE LEARNING",
    title: "Search, Recommendations and Ranking with Machine Learning",
    description:
      "A project-type walkthrough of a discovery project: queries, relevance, ranking models and recommendation logic.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    tags: ["Search", "Recommendations", "Ranking"],
    client: "Digital Discovery Platform",
    challenge:
      "Users needed more relevant search results and recommendations from a large collection of information.",
    approach:
      "We explored search relevance, ranking signals and recommendation logic to improve content discovery.",
    solution:
      "A machine-learning-oriented discovery workflow combining search, ranking and recommendation components.",
    outcome:
      "The solution creates a structured foundation for more relevant search and personalized discovery.",
    services: ["AI & Automation", "Custom Software Development"],
    technologies: ["Python", "Machine Learning", "API"],
  },
  {
    slug: "ai-deep-learning-projects",
    category: "AI & Deep Learning",
    type: "MACHINE LEARNING",
    title: "AI and Deep Learning Projects: From Experiment to Application",
    description:
      "A project-type walkthrough of an applied AI project: framing the question, preparing data, evaluating models and serving predictions.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200",
    tags: ["Data & Evaluation", "Serving", "Monitoring"],
    client: "AI Research Project",
    challenge:
      "Moving an experimental machine learning model into a usable application requires reliable data preparation, evaluation and deployment.",
    approach:
      "We structured the work around problem definition, dataset preparation, model evaluation and application integration.",
    solution:
      "An end-to-end AI workflow designed to connect model experiments with practical application requirements.",
    outcome:
      "A clear path from experimentation to an application-ready machine learning solution.",
    services: ["AI & Automation", "API & Backend Engineering"],
    technologies: ["Python", "Deep Learning", "REST API"],
  },
  {
    slug: "multi-vendor-marketplace",
    category: "E-commerce",
    type: "WEB APPLICATION",
    title: "Multi-Vendor Marketplaces: Listings, Orders and Payouts",
    description:
      "A project-type walkthrough of a marketplace build: onboarding sellers, listings, order routing and payout workflows.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
    tags: ["Marketplace", "Orders", "Payments"],
    client: "Online Marketplace",
    challenge:
      "A multi-vendor platform needs to coordinate sellers, product listings, orders and payment distribution.",
    approach:
      "We organized the platform around seller onboarding, product management and clearly defined order workflows.",
    solution:
      "A marketplace architecture connecting vendor accounts, product listings, order management and payout processes.",
    outcome:
      "A structured foundation for managing multiple sellers and their transactions in one platform.",
    services: ["E-commerce Development", "Backend Engineering"],
    technologies: ["Next.js", "Node.js", "MySQL"],
  },
  {
    slug: "portfolio-blogging-platforms",
    category: "Web Development",
    type: "CONTENT PLATFORM",
    title: "Portfolio and Blogging Platforms: Structure, Content and Speed",
    description:
      "A project-type walkthrough of content platforms: content models, authoring, publishing workflows and performance.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    tags: ["Portfolio", "Blogging", "Performance"],
    client: "Digital Content Platform",
    challenge:
      "Content creators need a professional online presence where their work and articles are easy to manage and discover.",
    approach:
      "We focused on content structure, responsive layouts, simple publishing and performance.",
    solution:
      "A content-focused platform with organized pages, blogging capabilities and a responsive user experience.",
    outcome:
      "A flexible digital platform that makes publishing and presenting content easier.",
    services: ["Web Application Development", "UI/UX Engineering"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "offline-first-field-work",
    category: "Mobile Applications",
    type: "MOBILE APPLICATION",
    title: "Offline-First Design for Field Work",
    description:
      "A project-type walkthrough of applications used where the connection is not reliable: local storage, sync and recovery.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    tags: ["Offline", "Synchronization", "Mobile"],
    client: "Field Operations Team",
    challenge:
      "Field workers often operate in locations where internet connectivity is weak or unavailable.",
    approach:
      "We considered offline data access, local storage, synchronization and recovery workflows.",
    solution:
      "An offline-first application concept that allows users to continue working and synchronize data when connectivity returns.",
    outcome:
      "A more dependable workflow for teams working in areas with unreliable internet access.",
    services: ["Mobile Application Development", "Backend Engineering"],
    technologies: ["React Native", "SQLite", "API"],
  },
  {
    slug: "web-mobile-one-product",
    category: "Mobile Applications",
    type: "APPLICATION DEVELOPMENT",
    title: "Web and Mobile Applications: One Product, Two Surfaces",
    description:
      "A project-type walkthrough of delivering the same capability on web and mobile without duplicating business logic.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?w=1200",
    tags: ["Web", "Mobile", "Integration"],
    client: "Digital Product",
    challenge:
      "Users expect a consistent experience across desktop browsers and mobile devices.",
    approach:
      "We planned shared backend services, consistent data models and platform-specific interfaces.",
    solution:
      "A connected web and mobile application experience supported by common business logic and APIs.",
    outcome:
      "A consistent product experience across multiple devices.",
    services: ["Web Development", "Mobile Development"],
    technologies: ["Next.js", "React Native", "Node.js"],
  },
  {
    slug: "legacy-system-integration",
    category: "Business Systems",
    type: "SYSTEM INTEGRATION",
    title: "Connecting a New Front End to a Legacy System",
    description:
      "A project-type walkthrough of integration work: adapters, synchronization, idempotency and shipping data between systems.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    tags: ["Integration", "APIs", "Legacy Systems"],
    client: "Enterprise Business",
    challenge:
      "Businesses may need a modern user interface while keeping their existing backend systems operational.",
    approach:
      "We examined API integration, data mapping, synchronization and error handling.",
    solution:
      "An integration layer designed to connect a modern front end with existing business systems.",
    outcome:
      "A practical modernization approach that preserves existing business processes.",
    services: ["API & Backend Engineering", "Custom Software Development"],
    technologies: ["REST API", "Node.js", "SQL"],
  },
  {
    slug: "management-dashboards-reporting",
    category: "Business Systems",
    type: "BUSINESS SYSTEM",
    title: "Dashboards and Reporting in a Management System",
    description:
      "A project-type walkthrough of reporting work: definitions everyone agrees on, live views and operational summaries.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    tags: ["Dashboards", "Reports", "Analytics"],
    client: "Business Management Team",
    challenge:
      "Decision-makers need accurate and understandable information from different business activities.",
    approach:
      "We focused on data organization, reporting definitions and clear dashboard layouts.",
    solution:
      "A management dashboard concept presenting key operational information through reports and visual summaries.",
    outcome:
      "A clearer overview of business activities to support informed decisions.",
    services: ["Custom Software Development", "UI/UX Engineering"],
    technologies: ["React", "Charts", "SQL"],
  },
  {
    slug: "management-spreadsheets-ems",
    category: "Business Systems",
    type: "BUSINESS SYSTEM",
    title: "Management Systems: Turning Spreadsheets into an EMS",
    description:
      "How ad-hoc spreadsheets and message threads become a managed system with roles, workflows and an audit trail.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
    tags: ["Management", "Workflows", "Audit Trail"],
    client: "Operations Management Team",
    challenge:
      "Managing important operational information through disconnected spreadsheets and messages can lead to confusion.",
    approach:
      "We mapped the existing workflows and identified the information, user roles and approval steps required.",
    solution:
      "A centralized management system concept with structured records, role-based access and workflow tracking.",
    outcome:
      "A more organized approach to managing operational information and daily activities.",
    services: ["Custom Software Development", "Backend Engineering"],
    technologies: ["Next.js", "PHP", "MySQL"],
  },
  {
    slug: "role-based-access-control",
    category: "Business Systems",
    type: "BUSINESS SYSTEM",
    title: "Role-Based Access Control: Who Sees What in a Business System",
    description:
      "A project-type walkthrough of permission design for users, teams and sensitive business information.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
    tags: ["Security", "Roles", "Access Control"],
    client: "Business Application",
    challenge:
      "Different users need different levels of access to business information and system functionality.",
    approach:
      "We considered user roles, permissions and access boundaries for different responsibilities.",
    solution:
      "A role-based access control structure that organizes what users can view and manage.",
    outcome:
      "A more controlled and organized approach to user permissions.",
    services: ["Backend Engineering", "Custom Software Development"],
    technologies: ["Authentication", "RBAC", "Database"],
  },
  {
    slug: "payments-inventory-ecommerce",
    category: "E-commerce",
    type: "E-COMMERCE",
    title: "Payments and Inventory: The Engine Room of E-commerce",
    description:
      "A project-type walkthrough of the hard half of a store: stock truth, order lifecycle and payment state.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200",
    tags: ["Inventory", "Payments", "Orders"],
    client: "Online Retail Business",
    challenge:
      "An online store needs reliable coordination between inventory, orders and payment status.",
    approach:
      "We mapped the order lifecycle and considered stock updates, payment verification and transaction states.",
    solution:
      "An e-commerce backend workflow connecting inventory management, order processing and payment operations.",
    outcome:
      "A structured foundation for managing the operational side of online retail.",
    services: ["E-commerce Development", "API & Backend Engineering"],
    technologies: ["Node.js", "MySQL", "Payment APIs"],
  },
  {
    slug: "checkout-reliability",
    category: "E-commerce",
    type: "WEB APPLICATION",
    title: "Checkout Reliability: Designing for the Moment of Payment",
    description:
      "A project-type walkthrough of payment work: states, retries, idempotency and making the checkout experience reliable.",
    image:
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200",
    tags: ["Checkout", "Payments", "Reliability"],
    client: "E-commerce Business",
    challenge:
      "A confusing or unreliable checkout process can interrupt purchases and create transaction problems.",
    approach:
      "We focused on clear payment states, validation, error handling and safe retry mechanisms.",
    solution:
      "A checkout workflow designed to handle payment steps and transaction status consistently.",
    outcome:
      "A more structured and dependable checkout experience.",
    services: ["E-commerce Development", "Backend Engineering"],
    technologies: ["JavaScript", "REST API", "Payment Gateway"],
  },
  {
    slug: "ecommerce-catalogue-checkout",
    category: "E-commerce",
    type: "WEB APPLICATION",
    title: "An E-commerce Build: From Catalogue to Checkout",
    description:
      "A project-type walkthrough of an e-commerce build: catalogue structure, search, cart and checkout, with inventory and payment integrations underneath.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
    tags: ["Catalogue", "Checkout", "Payments"],
    client: "Online Retail Store",
    challenge:
      "A business needs an online store where customers can browse products, search, add items to a cart and complete purchases.",
    approach:
      "We organized the shopping journey from product discovery to checkout and considered the supporting inventory and payment workflows.",
    solution:
      "An e-commerce application structure with catalogue browsing, search, cart management and checkout.",
    outcome:
      "A connected shopping experience that supports the main stages of an online purchase.",
    services: ["E-commerce Development", "Web Application Development"],
    technologies: ["Next.js", "TypeScript", "MySQL"],
  },
  {
    slug: "training-platforms-assessment",
    category: "Education Technology",
    type: "LEARNING PLATFORM",
    title: "Training Platforms: Courses, Progress and Assessment",
    description:
      "A project-type walkthrough of a training platform: content structure, enrollment, progress tracking and assessment.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    tags: ["Courses", "Progress", "Assessment"],
    client: "Online Learning Platform",
    challenge:
      "Learning providers need a system to organize courses, enroll learners and track learning progress.",
    approach:
      "We considered course structures, learner enrollment, assessment workflows and progress tracking.",
    solution:
      "A learning platform concept connecting course content, learner activities and assessment features.",
    outcome:
      "A more organized digital learning experience for both learners and instructors.",
    services: ["Web Application Development", "UI/UX Engineering"],
    technologies: ["React", "TypeScript", "Database"],
  },
];