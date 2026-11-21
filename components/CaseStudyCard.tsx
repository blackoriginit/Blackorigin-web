import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

type Props = {
  study: CaseStudy;
};

export default function CaseStudyCard({ study }: Props) {
  return (
    <article className="case-card group">
      <Link
        href={`/case-studies/${study.slug}`}
        className="case-card-link"
        aria-label={`Read case study: ${study.title}`}
      >
        <div
          className="case-card-image"
          style={{ backgroundImage: `url("${study.image}")` }}
        />

        <div className="case-card-overlay" />

        <div className="case-card-content">
          <span className="case-card-category">
            {study.type}
          </span>

          <h2>{study.title}</h2>

          <p>{study.description}</p>

          <div className="case-card-meta">
            {study.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <span className="case-card-link-text">
            Read case study
          </span>
        </div>
      </Link>
    </article>
  );
}