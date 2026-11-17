import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const study = caseStudies.find(
    (item) => item.slug === slug
  );

  if (!study) {
    return { title: "Case Study Not Found | Black Origin" };
  }

  return {
    title: `${study.title} | Black Origin`,
    description: study.description,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const study = caseStudies.find(
    (item) => item.slug === slug
  );

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter(
      (item) =>
        item.slug !== study.slug &&
        item.category === study.category
    )
    .slice(0, 3);

  return (
    <div className="case-detail-page">

      {/* DETAIL HERO */}
      <section
        className="detail-hero"
        style={{ backgroundImage: `url("${study.image}")` }}
      >
        <div className="detail-hero-overlay" />

        <div className="detail-hero-content">

          <Link
            href="/case-studies"
            className="detail-back-link"
          >
            ← Back to Case Studies
          </Link>

          <span className="detail-category">
            {study.type}
          </span>

          <h1>{study.title}</h1>

          <p>{study.description}</p>

          <div className="detail-tags">
            {study.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="detail-overview">
        <div className="detail-overview-main">
          <span className="case-orange-label">
            PROJECT OVERVIEW
          </span>

          <h2>Understanding the project</h2>

          <p>{study.description}</p>

          <p>
            This project-type write-up explains the challenges,
            technical considerations and solution approach
            involved in this kind of engagement.
          </p>
        </div>

        <aside className="detail-info-card">
          <div>
            <span>PROJECT TYPE</span>
            <strong>{study.category}</strong>
          </div>

          <div>
            <span>CLIENT / PROJECT</span>
            <strong>{study.client}</strong>
          </div>

          <div>
            <span>OUR SERVICES</span>
            <strong>{study.services.join(", ")}</strong>
          </div>

          <div>
            <span>TECHNOLOGIES</span>
            <strong>{study.technologies.join(", ")}</strong>
          </div>
        </aside>
      </section>

      {/* CHALLENGE */}
      <section className="detail-content-section">
        <div className="detail-number">01</div>

        <div>
          <span className="case-orange-label">
            THE CHALLENGE
          </span>

          <h2>The problem to solve</h2>

          <p>{study.challenge}</p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="detail-content-section detail-light">
        <div className="detail-number">02</div>

        <div>
          <span className="case-orange-label">
            OUR APPROACH
          </span>

          <h2>How we approached it</h2>

          <p>{study.approach}</p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="detail-content-section">
        <div className="detail-number">03</div>

        <div>
          <span className="case-orange-label">
            THE SOLUTION
          </span>

          <h2>Building the right solution</h2>

          <p>{study.solution}</p>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="detail-outcome">
        <span className="case-orange-label">
          THE OUTCOME
        </span>

        <h2>What the solution delivers</h2>

        <p>{study.outcome}</p>
      </section>

      {/* RELATED CASE STUDIES */}
      {relatedStudies.length > 0 && (
        <section className="related-section">

          <div className="case-section-heading">
            <span className="case-orange-label">
              EXPLORE MORE
            </span>

            <h2>Related case studies</h2>

            <p>
              Explore more projects from this category.
            </p>
          </div>

          <div className="case-grid">
            {relatedStudies.map((item) => (
              <Link
                key={item.slug}
                href={`/case-studies/${item.slug}`}
                className="related-card"
              >
                <div
                  className="related-card-image"
                  style={{
                    backgroundImage: `url("${item.image}")`,
                  }}
                />

                <div className="related-card-content">
                  <span>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>Read case study →</p>
                </div>
              </Link>
            ))}
          </div>

        </section>
      )}

      {/* FINAL CTA */}
      <section className="case-cta">
        <div>
          <span className="case-orange-label">
            LET&apos;S WORK TOGETHER
          </span>

          <h2>Have a similar project in mind?</h2>

          <p>
            Let&apos;s discuss your idea and explore how we can
            build the right solution for your business.
          </p>

          <div className="case-cta-buttons">
            <Link href="/contact" className="case-btn-primary">
              Start a Project →
            </Link>

            <Link href="/case-studies" className="case-btn-secondary">
              Explore All Case Studies
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}