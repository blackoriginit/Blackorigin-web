import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, findCaseStudy } from "@/lib/case-studies";
import { servicesData } from "@/data/services";
import ProjectCTA from "@/components/projectcta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = findCaseStudy(slug);
  if (!study) return { title: "Case study not found" };

  return {
    title: study.title,
    description: study.title,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = findCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const related = study.services
    .map(({ slug: serviceSlug }) => servicesData.find((s) => s.slug === serviceSlug))
    .filter((service): service is (typeof servicesData)[number] => Boolean(service));

  return (
    <main>
      <section className="bg-[#061A40] px-6 py-14 text-white md:py-16">
        <div className="mx-auto max-w-4xl">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/case-studies" className="transition-colors hover:text-white">
              Case Studies
            </Link>
          </nav>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#E85D04]">
            {study.tag}
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {study.title}
          </h1>
        </div>
      </section>

      <section className="bg-[#F5F9FF] px-6 py-14 md:py-16">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-lg leading-8 text-[#5A6B8C]">
              This write-up is still being prepared by our team. In the meantime,
              the service line that delivered this work is linked here, with the
              approach, deliverables and typical stack behind it.
            </p>

            <h2 className="mt-10 font-serif text-2xl font-bold text-[#061A40]">
              What this study covers
            </h2>
            <p className="mt-3 leading-7 text-[#5A6B8C]">
              The problem as the client described it, the constraints we worked
              inside, the system we built, and the measurable outcome after launch.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/case-studies`}
                className="rounded-lg border border-[#061A40]/20 px-5 py-3 text-sm font-semibold text-[#061A40] transition hover:border-[#061A40]/40"
              >
                All case studies
              </Link>
              <Link
                href="/contact"
                className="rounded-lg bg-[#E85D04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c94f03]"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <aside className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-[#061A40]">
              Delivered by
            </h2>
            {related.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block rounded-xl border border-[#061A40]/10 bg-white p-5 transition hover:border-[#E85D04]/40 hover:shadow-md"
              >
                <p className="font-serif text-base font-bold text-[#061A40]">
                  {service.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5A6B8C]">
                  {service.shortDesc}
                </p>
              </Link>
            ))}
          </aside>
        </div>
      </section>

      <ProjectCTA />
    </main>
  );
}
