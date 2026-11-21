import Image from "next/image";
import Link from "next/link";
import StartProjectButton from "@/components/startprojectmodal";

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* =========================================
          1. HERO SECTION (Dark Navy)
         ========================================= */}
      <section className="relative bg-[#061A40] text-white pt-16 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-[#E85D04] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Our Services
            </span>

            <h1 className="text-[32px] font-medium leading-[1.25] tracking-[-0.5px] text-white sm:text-[40px] lg:text-[48px]">
              Technology services built around your business
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-xl font-light leading-relaxed">
              From first idea to long-term support, our engineers help you plan,
              build, and run the software your business depends on.
            </p>

            <div className="pt-2">
              <StartProjectButton className="inline-block bg-[#E85D04] hover:bg-[#c94f03] transition-colors text-white font-medium text-sm md:text-base px-7 py-3 rounded-md shadow-md">
                Talk to our team
              </StartProjectButton>
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

      </section>

      {/* =========================================
          2. COLLABORATION MODELS
         ========================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl text-[#061A40] mb-10">
          Collaboration Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborationModels.map((item, idx) => (
            <div
              key={idx}
              className="border-t border-slate-300 pt-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#061A40] mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <div>
                <Link
                  href={item.link}
                  className="text-sm font-semibold text-[#E85D04] hover:underline inline-flex items-center"
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
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl text-[#061A40] mb-3">
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
                <span className="text-4xl font-semibold text-slate-300 group-hover:text-[#E85D04]/70 transition-colors block mb-2">
                  {service.number}
                </span>
                <h3 className="text-xl font-semibold text-[#061A40] mb-3 group-hover:text-[#E85D04] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <div>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-semibold text-[#061A40] group-hover:text-[#E85D04] transition-colors inline-flex items-center"
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
        <div className="theme-ash-panel bg-[#061A40] text-white rounded-2xl p-8 md:p-14 shadow-lg">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl text-white">
              Not sure where to start?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Tell us what is slowing your business down. We will help you find
              the right technology approach - no obligation.
            </p>
            <div className="pt-2">
              <StartProjectButton className="bo-btn bo-btn-primary">
                Start a Project
              </StartProjectButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}