export const instant = false;
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articles,
  getArticle,
  categoryLabels,
  imageUrl,
  formatDate,
} from "@/lib/insights-data";

type ArticlePageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);

  if (!article) {
    return { title: "Article Not Found | Black Origin IT" };
  }

  return {
    title: `${article.title} | Black Origin IT`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: ArticlePageProps) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);

  if (!article) notFound();

  const isCloudArticle =
    article.slug ===
    "cloud-portability-avoiding-lock-in-without-fighting-it";

  return (
    <main className="article-detail-page">
      <div className="article-detail-container">
        <div className="article-detail-column">

          <nav className="article-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/insights">Insights</Link>
            <span>/</span>
            <Link href="/insights">
              {categoryLabels[article.category]}
            </Link>
            <span>/</span>
            <span className="breadcrumb-current">
              {article.title}
            </span>
          </nav>

          <header className="article-detail-header">
            <h1>{article.title}</h1>

            <div className="article-detail-meta">
              <span>{formatDate(article.date)}</span>
              <span>{article.readTime} min read</span>
            </div>

            <p className="article-detail-excerpt">
              {article.excerpt}
            </p>
          </header>

          <img
            className="article-detail-cover"
            src={
              isCloudArticle
                ? "https://blackorigin.cms.mercance.com/media/6/insights/technology/cloud-portability-avoiding-lock-in-without-fighting-it/vnwi4tymgqoez2xpxcffhkc-yxsq9vljjmt90aqd-e8611e4ac93c891c.webp"
                : imageUrl(article)
            }
            alt={article.title}
          />

          <article className="article-detail-body">
            <h2>{article.title}</h2>

            {isCloudArticle ? (
              <>
                <p>
                  The advice to avoid lock-in is often repeated in a
                  tone that suggests any use of a managed service is a
                  mistake. In reality portability is a spectrum, and
                  the useful skill is knowing which dependencies are
                  worth taking and which would be painful to leave.
                </p>

                <section>
                  <h3>The costs of leaving</h3>
                  <p>
                    Ask of any service: how long would migration take,
                    who would have to do it, and what would break? For a
                    database with a standard interface, the answer may
                    be weeks. For a service with proprietary semantics
                    woven through the application, it may be a rewrite.
                    The second kind deserves caution; the first rarely does.
                  </p>
                </section>

                <section>
                  <h3>Managed services worth taking</h3>
                  <p>
                    Queues, object storage, email delivery, managed
                    databases and monitoring are areas where a
                    provider's reliability and operations are usually
                    better than a small team's. The dependency is real,
                    but the alternative is running it yourself, which
                    is also a dependency, just one you own.
                  </p>
                </section>

                <section>
                  <h3>Where portability pays</h3>
                  <p>
                    Keep your own hands off nothing so thoroughly
                    that the system cannot be understood without the
                    console: infrastructure described as code,
                    configuration outside the repository, standard
                    protocols for the parts that connect to everything
                    else, and data stored in formats you can read with
                    ordinary tools. The cheapest insurance is a system
                    a new engineer can still follow.
                  </p>
                </section>

                <section>
                  <h3>The middle path</h3>
                  <p>
                    Containers and orchestration buy portability at
                    the cost of operational complexity. For teams
                    without that capability, a simpler deployment on
                    a single provider is the better engineering
                    decision, provided the description in code makes
                    moving possible later.
                  </p>
                </section>

                <section>
                  <h3>Decide deliberately</h3>
                  <p>
                    Write down the services chosen, what they would
                    cost to leave, and what would trigger a move.
                    Lock-in is only a problem when it happens by
                    accident, one convenience at a time.
                  </p>
                </section>

                <section>
                  <h3>How we approach it</h3>
                  <p>
                    Architecture decisions at Black Origin IT are
                    made during planning, with the maintenance
                    burden and the exit cost both written next
                    to the choice.
                  </p>
                </section>

                <p className="article-inline-cta">
                  <strong>Evaluating infrastructure options?</strong>{" "}
                  Tell us about your project and we will weigh the
                  dependencies with you.
                </p>
              </>
            ) : (
              <>
                <p>{article.excerpt}</p>

                {article.sections.map((section, index) => (
                  <section key={`${section.heading}-${index}`}>
                    <h3>{section.heading}</h3>
                    <p>{section.text}</p>
                  </section>
                ))}
              </>
            )}
          </article>

        </div>
      </div>
    </main>
  );
}
