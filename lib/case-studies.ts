import { servicesData } from "@/data/services";

export type CaseStudy = {
  /** URL segment, e.g. "offline-first-design-for-field-work" */
  slug: string;
  title: string;
  tag: string;
  /** Service pages that reference this case study */
  services: { slug: string; title: string }[];
};

/**
 * The case studies are authored inside `data/services.ts` as the "related case
 * studies" of each service line, so that file stays the single source of truth.
 * This module collects those references into one de-duplicated list for the
 * /case-studies index and detail routes.
 */
export const caseStudies: CaseStudy[] = (() => {
  const bySlug = new Map<string, CaseStudy>();

  for (const service of servicesData) {
    for (const item of service.relatedCaseStudies) {
      const slug = item.link.replace(/^\/case-studies\//, "");
      const existing = bySlug.get(slug);

      if (existing) {
        existing.services.push({ slug: service.slug, title: service.title });
      } else {
        bySlug.set(slug, {
          slug,
          title: item.title,
          tag: item.tag,
          services: [{ slug: service.slug, title: service.title }],
        });
      }
    }
  }

  return [...bySlug.values()];
})();

export function findCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
