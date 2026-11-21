import type { Metadata } from "next";
import Link from "next/link";
import StartProjectButton from "@/components/startprojectmodal";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | Black Origin",
  description:
    "Explore software engineering, AI, e-commerce and business system project case studies from Black Origin.",
};

export default function CaseStudiesPage() {
  return (
    <div className="case-studies-page">

      {/* HERO SECTION */}
      <section className="case-hero">
        <div className="case-hero-overlay" />

        <div className="case-hero-content">
          <span className="case-eyebrow">
            BLACK ORIGIN / OUR WORK
          </span>

          <h1>Selected Work</h1>

          <p>
            Case studies from real engagements: the problem,
            the approach, the technology and the outcome.
          </p>
        </div>
      </section>

      {/* PROJECT WRITE-UPS */}
      <section className="case-list-section">

        <div className="case-section-heading">
          <span className="case-orange-label">
            SELECTED PROJECTS
          </span>

          <h2>Project write-ups</h2>

          <p>
            The kinds of projects we deliver, described generally:
            the challenge, the approach, the solution and the
            technology behind it. Client names, verified results
            and references are published only with the client&apos;s approval.
          </p>
        </div>

        <div className="case-grid">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              study={study}
            />
          ))}
        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="case-cta">
        <div>
          <span className="case-orange-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>Looking for a verified case study?</h2>

          <p>
            References and verified results are shared once the
            client has approved disclosure. Tell us about your
            project and we will walk you through the most relevant work.
          </p>

          <div className="case-cta-buttons">
            <StartProjectButton className="case-btn-primary">
              Start a Project
            </StartProjectButton>

            <Link href="/services" className="case-btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}