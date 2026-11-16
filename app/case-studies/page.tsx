import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import ProjectCTA from "@/components/projectcta";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How Black Origin IT builds software: case studies from our engineering, AI and product work.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="bg-[#061A40] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E85D04]">
            Case Studies
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Work we have done, described honestly.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Each study follows one problem from first conversation to launch: what
            the client needed, what we built, and what changed afterwards.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F9FF] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col rounded-2xl border border-[#061A40]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#E85D04]/40 hover:shadow-lg"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#E85D04]">
                  {study.tag}
                </span>
                <h2 className="mt-3 font-serif text-xl font-bold leading-snug text-[#061A40] transition-colors group-hover:text-[#E85D04]">
                  {study.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#5A6B8C]">
                  {study.services[0]?.title}
                </p>
                <span className="mt-5 text-sm font-semibold text-[#061A40]">
                  Read the case study &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProjectCTA
        title="Want this kind of work?"
        description="Tell us what you are trying to build. We will reply with a clear next step."
      />
    </main>
  );
}
