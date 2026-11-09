export type Category = "technology" | "company" | "process" | "ai" | "design";

export type Section = {
  heading: string;
  text: string;
};

export type Article = {
  category: Category;
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: number;
  sections: Section[];
};

export const categoryLabels: Record<Category, string> = {
  technology: "Technology",
  company: "Company",
  process: "Process",
  ai: "AI",
  design: "Design",
};

export const categoryList = Object.keys(categoryLabels) as Category[];

export const isCategory = (v: string): v is Category => v in categoryLabels;

// images live in /public/insights/<slug>.webp
export const imageUrl = (a: Article) => `/insights/${a.slug}.webp`;

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

const D = "2026-11-02";

export const insights: Article[] = [
  {
    category: "technology",
    slug: "cloud-portability-avoiding-lock-in-without-fighting-it",
    title: "Cloud Portability: Avoiding Lock-In Without Fighting It",
    excerpt:
      "Portability is a spectrum, not a religion. Where managed services are worth the dependency, and where to keep your options open.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "Lock-in is a trade-off, not a sin",
        text: "Every managed service creates some dependency, and that is often a fair price for not running the infrastructure yourself. The goal is not zero lock-in. The goal is knowing what you depend on and what it would cost to leave.",
      },
      {
        heading: "Keep the valuable parts portable",
        text: "Your data, your business logic and your deployment process are the assets worth protecting. Use standard databases, containers and open formats for these, so that moving providers means reconfiguring, not rewriting.",
      },
      {
        heading: "Accept dependency where it pays off",
        text: "Managed queues, authentication or email delivery rarely differentiate your product. Wrap them behind a thin interface in your code, use them freely, and you keep a realistic exit path without building everything twice.",
      },
    ],
  },
  {
    category: "company",
    slug: "why-direct-technical-leadership-matters-on-a-software-projec",
    title: "Why Direct Technical Leadership Matters on a Software Project",
    excerpt:
      "When the people explaining the trade-offs are the people making them, decisions get faster and fewer things are lost in translation.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "The cost of the middle layer",
        text: "On many projects the client talks to a coordinator, who talks to a lead, who talks to the developers. Each hand-off loses context, and small misunderstandings turn into rework weeks later.",
      },
      {
        heading: "Decisions with the facts in the room",
        text: "When an engineer who understands the system joins the conversation, trade-offs are explained honestly: what is cheap, what is risky, what can wait. Clients make better choices because they see the real options.",
      },
      {
        heading: "Accountability stays clear",
        text: "Direct leadership means the person who estimates the work is the person who answers for it. That tends to produce more realistic estimates and earlier warnings when something is slipping.",
      },
    ],
  },
  {
    category: "technology",
    slug: "monitoring-how-you-know-something-is-broken-before-your-cust",
    title: "Monitoring: How You Know Something Is Broken Before Your Customers Do",
    excerpt:
      "Logs, errors, uptime checks and the small set of signals that turn an outage into an incident you can actually solve.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "Start with the basics",
        text: "An uptime check that hits a real page, an error tracker that groups exceptions, and structured logs you can search are enough for most products. These three answer the first questions in any incident: is it down, what failed, and when did it start.",
      },
      {
        heading: "Alert on symptoms, not noise",
        text: "Alerts should fire when users are affected, such as failed sign-ins, slow responses or a spike in errors. If an alert wakes someone up and needs no action, it should be tuned or removed, because ignored alerts hide real ones.",
      },
      {
        heading: "Make incidents learnable",
        text: "After each incident, write down what happened, how it was found and what would have caught it sooner. Over time this small habit adds exactly the monitoring your system needs.",
      },
    ],
  },
  {
    category: "process",
    slug: "writing-a-project-brief-a-developer-can-estimate",
    title: "Writing a Project Brief a Developer Can Estimate",
    excerpt:
      "What to put in a first message so the reply is a useful estimate instead of a list of follow-up questions.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "Describe the problem before the solution",
        text: "Start with who the users are and what they are trying to do. A developer can propose a better approach when they understand the goal, rather than only the screens you have imagined.",
      },
      {
        heading: "Include the facts that drive cost",
        text: "List the platforms (web, iOS, Android), integrations with other systems, user roles, and any data you already have. These details change an estimate far more than visual style does.",
      },
      {
        heading: "Share constraints honestly",
        text: "A rough budget range, a target date and anything that is fixed, such as a launch event or a required technology, lets the reply focus on what is realistic. Unknowns are fine; say they are unknown.",
      },
    ],
  },
  {
    category: "technology",
    slug: "page-speed-is-a-product-decision",
    title: "Page Speed Is a Product Decision",
    excerpt:
      "Speed affects conversion, accessibility and how the product is perceived. Where performance actually comes from.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "Speed is part of the experience",
        text: "Users do not separate how a product looks from how fast it responds. Slow pages feel unreliable, and on mobile networks they lose visitors before the content ever appears.",
      },
      {
        heading: "Where the time actually goes",
        text: "Most slowness comes from oversized images, too much JavaScript, and requests that wait on each other. Fixing these three usually matters more than any low-level tuning.",
      },
      {
        heading: "Set a budget early",
        text: "Decide on limits for page weight and load time at the start, and check them on every release. A budget turns performance from a vague wish into a requirement the team can protect.",
      },
    ],
  },
  {
    category: "process",
    slug: "requirements-gathering-turning-a-wish-list-into-a-scope",
    title: "Requirements Gathering: Turning a Wish List into a Scope",
    excerpt:
      "How raw requests become a scope that can be built, estimated and checked, without losing what the business actually needs.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "Ask what each feature is for",
        text: "A wish list mixes goals with solutions. For every item, ask what outcome it should produce. Often two or three requests turn out to serve the same need and can be built as one.",
      },
      {
        heading: "Separate must-have from later",
        text: "Group the work into what the first release cannot launch without and what can follow. A smaller first release reaches real users sooner and gives you feedback that shapes the rest.",
      },
      {
        heading: "Write it so it can be checked",
        text: "Each requirement should be specific enough that anyone can say whether it was delivered. Clear acceptance criteria prevent the arguments that appear when everyone remembers the scope differently.",
      },
    ],
  },
  {
    category: "process",
    slug: "estimates-milestones-and-change-requests-keeping-a-build-pre",
    title: "Estimates, Milestones and Change Requests: Keeping a Build Predictable",
    excerpt:
      "Three lightweight mechanics that keep a software project legible: how the work is estimated, sliced and changed.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "Estimates are ranges with reasons",
        text: "A good estimate states its assumptions and shows where the uncertainty is. When an assumption proves wrong, everyone knows why the number moved instead of feeling surprised.",
      },
      {
        heading: "Milestones that produce something usable",
        text: "Slice the build so each milestone ends with working software you can click through. This exposes problems early and makes progress visible without relying on status reports.",
      },
      {
        heading: "Change is normal, so handle it openly",
        text: "New ideas will appear mid-build. A simple change request, with its effect on time and cost written down, lets you say yes with eyes open or defer the idea without friction.",
      },
    ],
  },
  {
    category: "company",
    slug: "questions-to-ask-before-hiring-a-software-development-partne",
    title: "Questions to Ask Before Hiring a Software Development Partner",
    excerpt:
      "A practical interview for development teams: process, communication, ownership and what happens after launch.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "Ask about process, not just portfolio",
        text: "Ask how they move from idea to release, how often you will see working software, and how they handle changes. A clear answer matters more than an impressive list of past logos.",
      },
      {
        heading: "Clarify ownership and access",
        text: "Confirm that you will own the source code, the hosting accounts and the data. You should be able to hire another team later without negotiating for your own product.",
      },
      {
        heading: "Plan for after launch",
        text: "Ask who fixes bugs, how security updates are handled, and what support costs. Software needs care after release, and a partner who has a plan for it is thinking long term.",
      },
    ],
  },
  {
    category: "process",
    slug: "from-idea-to-launch-how-web-and-mobile-products-get-built",
    title: "From Idea to Launch: How Web and Mobile Products Get Built",
    excerpt:
      "Discovery, planning, design, development, testing, deployment, support: what each stage of a build actually produces, and why the order matters.",
    date: D,
    readTime: 3,
    sections: [
      {
        heading: "Discovery and planning",
        text: "Discovery turns an idea into a shared understanding: who the users are, what problem is being solved, and what success looks like. Planning then converts that into a scope, a rough architecture and a schedule, so the build starts with agreed direction.",
      },
      {
        heading: "Design and development",
        text: "Design makes the product tangible through flows and screens that can be tested before code is written. Development then builds in short cycles, delivering working pieces regularly so feedback arrives while changes are still cheap.",
      },
      {
        heading: "Testing, deployment and support",
        text: "Testing checks that the product works across devices and under realistic use. Deployment puts it in front of users in a controlled way, and support keeps it healthy afterwards with fixes, updates and monitoring.",
      },
      {
        heading: "Why the order matters",
        text: "Skipping early stages does not save time; it moves the cost to later, where mistakes are more expensive to fix. Each stage produces something the next one depends on.",
      },
    ],
  },
  {
    category: "company",
    slug: "working-with-black-origin-it-from-first-message-to-launch",
    title: "Working with Black Origin IT: From First Message to Launch",
    excerpt:
      "What happens after you send the project description: how a first message becomes a scope, a build, and a supported launch.",
    date: D,
    readTime: 3,
    sections: [
      {
        heading: "Your first message",
        text: "Send us what you have, whether that is a full brief or a rough idea. An engineer reads it directly and replies with questions or a first view of what the project involves.",
      },
      {
        heading: "From conversation to scope",
        text: "We work with you to define what the first release includes, what can wait, and how the work will be estimated and split into milestones. You receive a clear scope before the build begins.",
      },
      {
        heading: "Build and launch",
        text: "During development you see working software at regular points and can steer as you learn. We handle testing and deployment, and we stay available after launch for fixes, updates and further development.",
      },
      {
        heading: "Ready to talk?",
        text: "If you have a project in mind, use the button below to send us a message. Every inquiry goes straight to our team.",
      },
    ],
  },
  {
    category: "technology",
    slug: "technical-debt-what-it-is-and-when-to-pay-it-down",
    title: "Technical Debt: What It Is and When to Pay It Down",
    excerpt:
      "Debt is not a moral failing; it is a borrowing decision. How to tell which shortcuts to keep and which to repay first.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "Debt is a deliberate loan",
        text: "Taking a shortcut to ship sooner can be the right call, just as borrowing money can be. The problem begins when the shortcut is forgotten and its interest, in the form of slower changes and more bugs, keeps growing.",
      },
      {
        heading: "Repay what slows you down",
        text: "Not all debt matters equally. Prioritise code you change often or that causes repeated bugs. Messy code in a corner nobody touches can safely wait.",
      },
      {
        heading: "Pay in small, steady amounts",
        text: "Rather than a large rewrite, reserve a modest share of each cycle for cleanup. Small, continuous repayment keeps the product easy to change without stopping feature work.",
      },
    ],
  },
  {
    category: "ai",
    slug: "prompt-context-output-using-language-models-in-production",
    title: "Prompt, Context, Output: Using Language Models in Production",
    excerpt:
      "What actually determines the quality of a language-model feature: the information you give it and the checks around what comes back.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "The prompt sets the task",
        text: "Clear instructions, a defined role and examples of good output make results far more consistent. Treat prompts like code: keep them versioned, reviewed and tested against real cases.",
      },
      {
        heading: "Context is what the model knows",
        text: "A model can only use the information it is given. Supplying the right documents or data at the right moment usually improves answers more than switching to a larger model.",
      },
      {
        heading: "Check what comes back",
        text: "Validate the output before it reaches users: confirm the format, check facts against your data, and decide what happens when the answer is uncertain. A fallback or human review step protects trust when the model is wrong.",
      },
    ],
  },
  {
    category: "design",
    slug: "design-systems-why-consistent-components-save-time",
    title: "Design Systems: Why Consistent Components Save Time",
    excerpt:
      "A small, documented set of components outperforms a large collection of one-off screens, for both speed and quality.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "Reuse beats reinvention",
        text: "When buttons, forms and layouts come from one shared set, designers and developers stop solving the same problem repeatedly. New screens are assembled rather than drawn from scratch.",
      },
      {
        heading: "Consistency builds trust",
        text: "Users learn a product by pattern. When the same action looks and behaves the same everywhere, the product feels dependable and needs less explanation.",
      },
      {
        heading: "Start small and document it",
        text: "You do not need a huge library. Begin with colours, type, spacing and a handful of core components, write down when to use each, and grow the system as real needs appear.",
      },
    ],
  },
  {
    category: "ai",
    slug: "data-preparation-the-work-that-decides-your-model-s-quality",
    title: "Data Preparation: The Work That Decides Your Model’s Quality",
    excerpt:
      "Labelling, cleaning, splitting and balancing: why the least glamorous part of an AI project drives the results.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "Garbage in, garbage out",
        text: "A model learns whatever patterns the data contains, including its mistakes. Duplicates, wrong labels and missing values quietly cap how good the results can be, whatever the algorithm.",
      },
      {
        heading: "Labelling and cleaning",
        text: "Consistent labels need clear guidelines and a check that different people agree. Cleaning removes noise and errors, and it is worth documenting each decision so the process can be repeated.",
      },
      {
        heading: "Split and balance honestly",
        text: "Keep a test set the model never sees, and make sure it reflects real usage. If some cases are rare in your data, balance or weight them deliberately, or the model will simply ignore them.",
      },
    ],
  },
  {
    category: "design",
    slug: "accessibility-is-a-design-requirement-not-a-checkbox",
    title: "Accessibility Is a Design Requirement, Not a Checkbox",
    excerpt:
      "Why accessibility decisions made during design cost almost nothing, and the ones made during an audit cost everything.",
    date: D,
    readTime: 2,
    sections: [
      {
        heading: "Decide early, pay little",
        text: "Colour contrast, text size, focus states and clear labels cost almost nothing when chosen during design. Retrofitting them after launch means reworking screens that are already built.",
      },
      {
        heading: "It helps everyone",
        text: "Captions, keyboard navigation and readable text support people with disabilities, and also people on a bright screen, a slow connection or with a broken mouse. Good accessibility is good usability.",
      },
      {
        heading: "Test with real tools",
        text: "Automated checks catch only part of the problems. Try the product with a keyboard and a screen reader, and include accessibility in your definition of done for every feature.",
      },
    ],
  },
];
// for article detail pages
export const articles = insights;

export const getArticle = (category: string, slug: string) => {
  return insights.find(
    (article) =>
      article.category === category &&
      article.slug === slug
  );
};