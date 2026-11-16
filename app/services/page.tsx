import Image from "next/image";
import Link from "next/link";

// Collaboration models data
const collaborationModels = [
  {
    title: "Team Extension",
    description:
      "Add skilled engineers to your team within days and scale up or down as your roadmap changes.",
    link: "/contact",
  },
  {
    title: "Managed Services",
    description:
      "We run and maintain your applications and infrastructure so your team can focus on new work.",
    link: "/contact",
  },
  {
    title: "Project Delivery",
    description:
      "Hand us the outcome - we plan, design, build and launch it with a defined scope and timeline.",
    link: "/contact",
  },
];

// 9 Services data
const servicesList = [
  {
    number: "01",
    title: "Custom Software Development",
    slug: "custom-software-development",
    description:
      "Purpose-built software for your specific workflows, from internal tools to customer-facing platforms.",
  },
  {
    number: "02",
    title: "Web Application Development",
    slug: "web-application-development",
    description:
      "Fast, reliable web applications built on modern frameworks and designed to scale with usage.",
  },
  {
    number: "03",
    title: "Mobile Application Development",
    slug: "mobile-application-development",
    description:
      "Cross-platform mobile apps for iOS and Android built from a single, maintainable codebase.",
  },
  {
    number: "04",
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    description:
      "Practical AI features - prediction, classification and assistants - built on your own data.",
  },
  {
    number: "05",
    title: "AI Automation",
    slug: "ai-automation",
    description:
      "Turn repetitive business processes into intelligent, automated workflows that save hours every week.",
  },
  {
    number: "06",
    title: "SaaS Development",
    slug: "saas-development",
    description:
      "Multi-tenant SaaS products with billing, onboarding and the operational tooling behind them.",
  },
  {
    number: "07",
    title: "API & Backend Development",
    slug: "api-backend-development",
    description:
      "Secure APIs and backend systems that connect your products, teams and third-party services.",
  },
  {
    number: "08",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Research-driven interface design that makes complex software clear and pleasant to use.",
  },
  {
    number: "09",
    title: "Software Maintenance",
    slug: "software-maintenance",
    description:
      "Monitoring, fixes and continuous improvement so your software keeps performing after launch.",
  },
];

// Related articles data
const articles = [
  {
    title: "What a Web Application Needs Before It Goes Live",
    excerpt:
      "Accounts, errors, backups, monitoring and a release plan: the unglamorous checklist that separates a demo from a product.",
    date: "2 Nov 2026",
    readTime: "2 min read",
    link: "/insights",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Native or Cross-Platform: Choosing a Mobile Approach",
    excerpt:
      "Two approaches, different trade-offs in performance, reach and cost. A practical framework for choosing before development...",
    date: "2 Nov 2026",
    readTime: "2 min read",
    link: "/insights",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "From Data to Model: How an AI Project Actually Runs",
    excerpt:
      "The lifecycle of a machine learning project, from problem definition and data collection to evaluation, deployment and monitoring.",
    date: "2 Nov 2026",
    readTime: "2 min read",
    link: "/insights",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* =========================================
          1. HERO SECTION (Dark Navy)
         ========================================= */}
      <section className="relative bg-[#06182C] text-white pt-16 pb-28 md:pb-36 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-[#E8590C] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Our Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] tracking-tight text-white">
              Technology services built around your business
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-xl font-light leading-relaxed">
              From first idea to long-term support, our engineers help you plan,
              build, and run the software your business depends on.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block bg-[#E8590C] hover:bg-[#d04f0a] transition-colors text-white font-medium text-sm md:text-base px-7 py-3 rounded-md shadow-md"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          {/* Right Column: Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-72 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Technology services built around your business"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Curved Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
          <svg
            className="relative block w-full h-8 md:h-16 text-[#F8FAFC]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* =========================================
          2. COLLABORATION MODELS
         ========================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-3xl font-serif font-bold text-[#06182C] mb-10">
          Collaboration Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborationModels.map((item, idx) => (
            <div
              key={idx}
              className="border-t border-slate-300 pt-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-serif font-bold text-[#06182C] mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <div>
                <Link
                  href={item.link}
                  className="text-sm font-semibold text-[#E8590C] hover:underline inline-flex items-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          3. OUR SERVICES GRID (9 Services)
         ========================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#06182C] mb-3">
            Our Services
          </h2>
          <p className="text-slate-600 text-base max-w-2xl">
            Nine service lines, delivered by senior engineers - engage one of
            them or combine several into a single project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {servicesList.map((service) => (
            <div
              key={service.number}
              className="flex flex-col justify-between group"
            >
              <div>
                <span className="text-4xl font-serif font-bold text-slate-300 group-hover:text-[#E8590C]/70 transition-colors block mb-2">
                  {service.number}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#06182C] mb-3 group-hover:text-[#E8590C] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <div>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-semibold text-[#06182C] group-hover:text-[#E8590C] transition-colors inline-flex items-center"
                >
                  View service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          4. CTA BANNER (Not sure where to start?)
         ========================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="bg-[#06182C] text-white rounded-2xl p-8 md:p-14 shadow-lg">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold">
              Not sure where to start?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Tell us what is slowing your business down. We will help you find
              the right technology approach - no obligation.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block bg-[#E8590C] hover:bg-[#d04f0a] transition-colors text-white font-medium px-6 py-3 rounded-md text-sm"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. RELATED ARTICLES SECTION
         ========================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 pb-24">
        <div className="mb-8">
          <span className="text-xs uppercase font-bold text-[#E8590C] tracking-wider block mb-1">
            Articles
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#06182C]">
            Related articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif font-bold text-lg text-[#06182C] leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100">
                <span>
                  {art.date} &bull; {art.readTime}
                </span>
                <Link
                  href={art.link}
                  className="font-semibold text-[#E8590C] hover:underline"
                >
                  Read article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}