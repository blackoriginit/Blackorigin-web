import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes for all services at build time
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate dynamic browser tab titles and SEO metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | Black Origin" };

  return {
    title: `${service.title} | Black Origin`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  // If someone enters an invalid URL, show Next.js 404 page
  if (!service) {
    notFound();
  }

  const steps = [
    { num: "01", title: "Discovery" },
    { num: "02", title: "Planning" },
    { num: "03", title: "Design" },
    { num: "04", title: "Development" },
    { num: "05", title: "Testing" },
    { num: "06", title: "Deployment" },
    { num: "07", title: "Support & Evolution" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-8 pb-4 text-xs text-slate-500">
        <nav className="flex items-center gap-2">
          <Link href="/" className="hover:text-slate-800 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-slate-800 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-[#06182C] font-semibold">{service.title}</span>
        </nav>
      </div>

      {/* 2. TOP HERO WITH "AT A GLANCE" CARD */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-[#E8590C] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Service
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#06182C] leading-tight tracking-tight">
              {service.title}
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl font-light">
              {service.shortDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-[#E8590C] hover:bg-[#d04f0a] transition-colors text-white text-sm font-medium px-6 py-3 rounded-md shadow-sm"
              >
                Start a Project
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-slate-300 text-[#06182C] hover:bg-slate-50 transition-colors text-sm font-medium px-6 py-3 rounded-md"
              >
                Contact Black Origin
              </Link>
            </div>
          </div>

          {/* Right Navy "At a glance" Card */}
          <div className="lg:col-span-5 bg-[#06182C] text-white rounded-2xl p-7 md:p-8 space-y-6 shadow-xl border border-white/10">
            <h2 className="text-xl font-serif font-bold border-b border-white/10 pb-3">
              At a glance
            </h2>

            <div className="space-y-4 text-xs md:text-sm">
              <div>
                <p className="text-slate-400 font-semibold tracking-wider text-[11px] uppercase mb-1">
                  BEST FOR
                </p>
                <p className="text-slate-200 leading-relaxed">{service.atAGlance.bestFor}</p>
              </div>

              <div>
                <p className="text-slate-400 font-semibold tracking-wider text-[11px] uppercase mb-1">
                  ENGAGEMENT
                </p>
                <p className="text-slate-200 leading-relaxed">{service.atAGlance.engagement}</p>
              </div>

              <div>
                <p className="text-slate-400 font-semibold tracking-wider text-[11px] uppercase mb-1">
                  TYPICAL STACK
                </p>
                <p className="text-slate-200 leading-relaxed">{service.atAGlance.typicalStack}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#06182C] mb-6">
          Overview
        </h2>
        <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed max-w-4xl">
          {service.overview.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* 4. WHAT WE DELIVER */}
      {service.whatWeDeliver && service.whatWeDeliver.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#06182C] mb-8">
            What we deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.whatWeDeliver.map((item, idx) => (
              <div key={idx} className="border-t border-slate-300 pt-4">
                <h3 className="font-serif font-bold text-lg text-[#06182C] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. TECHNOLOGIES & INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 space-y-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#06182C] mb-2">
            Technologies
          </h2>
          <p className="text-slate-600 text-xs md:text-sm mb-4">
            We choose tools that are well supported and that your team can keep running, per project rather than by fashion.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {service.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-white border border-slate-300 text-[#06182C] text-xs font-medium px-4 py-1.5 rounded-lg shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#06182C] mb-2">
            Industries
          </h2>
          <p className="text-slate-600 text-xs md:text-sm mb-4">
            Where this service is used most often.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {service.industries.map((ind, idx) => (
              <span
                key={idx}
                className="bg-white border border-slate-300 text-[#06182C] text-xs font-medium px-4 py-1.5 rounded-lg shadow-2xs"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK (7 Steps Navy Card) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="bg-[#06182C] text-white rounded-2xl p-8 md:p-12 space-y-8 shadow-xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
              How we work
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Every engagement follows the same seven steps, from understanding the problem to supporting the work after launch.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 border-t border-white/10 pt-8">
            {steps.map((st) => (
              <div key={st.num}>
                <span className="text-xs font-bold text-[#E8590C] block mb-1">
                  {st.num}
                </span>
                <span className="text-sm font-serif font-bold block text-white">
                  {st.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RELATED CASE STUDIES */}
      {service.relatedCaseStudies && service.relatedCaseStudies.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#06182C] mb-8">
            Related case studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.relatedCaseStudies.map((cs, idx) => (
              <div key={idx} className="border-t border-slate-300 pt-4 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#E8590C] uppercase tracking-wider block mb-2">
                    {cs.tag}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#06182C] mb-4">
                    {cs.title}
                  </h3>
                </div>
                <Link
                  href={cs.link}
                  className="text-xs font-semibold text-[#E8590C] hover:underline"
                >
                  Read the case study &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#06182C] mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-4 max-w-4xl">
            {service.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-300 rounded-xl bg-white p-5 open:shadow-sm cursor-pointer transition-all"
              >
                <summary className="font-medium text-sm md:text-base text-[#06182C] flex items-center justify-between list-none">
                  <span className="flex items-center gap-3">
                    <span className="text-[#E8590C] transition-transform group-open:rotate-90">
                      &#9654;
                    </span>
                    {faq.question}
                  </span>
                </summary>
                <div className="pt-4 pl-6 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* 9. BOTTOM BANNER */}
      <section className="bg-[#06182C] text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Have a project in mind?
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Tell us what you are trying to build. We will reply with a clear next step.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="bg-[#E8590C] hover:bg-[#d04f0a] transition-colors text-white font-medium text-sm px-6 py-3 rounded-md"
            >
              Start a Project
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white/30 hover:bg-white/10 transition-colors text-white font-medium text-sm px-6 py-3 rounded-md"
            >
              Contact Black Origin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}