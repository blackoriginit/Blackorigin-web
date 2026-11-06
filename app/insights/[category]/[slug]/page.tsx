import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  insights,
  categoryLabels,
  formatDate,
  imageUrl,
} from "@/lib/insights-data";

type Props = { params: Promise<{ category: string; slug: string }> };

export const instant = false;

export function generateStaticParams() {
  return insights.map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const a = insights.find((x) => x.category === category && x.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    openGraph: {
      title: a.title,
      description: a.excerpt,
      type: "article",
      images: [imageUrl(a)],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const article = insights.find(
    (x) => x.category === category && x.slug === slug
  );
  if (!article) notFound();

  const related = insights
    .filter((x) => x.category === article.category && x.slug !== article.slug)
    .slice(0, 3);

  const index = insights.findIndex((x) => x.slug === article.slug);
  const prev = index > 0 ? insights[index - 1] : null;
  const next = index < insights.length - 1 ? insights[index + 1] : null;

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/insights" className="font-semibold text-orange-600 hover:underline">
            Insights
          </Link>
          <span>/</span>
          <Link
            href={`/insights/${article.category}`}
            className="font-semibold text-orange-600 hover:underline"
          >
            {categoryLabels[article.category]}
          </Link>
        </nav>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-sm text-slate-400">
          Black Origin IT Team · {formatDate(article.date)} · {article.readTime} min read
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl(article)}
          alt={article.title}
          className="my-10 w-full rounded-2xl object-cover"
        />

        <p className="text-xl leading-8 text-slate-700">{article.excerpt}</p>

        <div className="mt-10 space-y-10">
          {article.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-3 text-2xl font-bold text-slate-950">{s.heading}</h2>
              <p className="text-lg leading-8 text-slate-600">{s.text}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-bold">Have a project in mind?</h2>
          <p className="mt-2 text-white/80">
            Tell us what you want to build. An engineer from our team will reply.
          </p>
          <Link
            href="/insights#start-project"
            className="mt-6 inline-block rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Start a Project
          </Link>
        </div>

        <div className="mt-12 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/insights/${prev.category}/${prev.slug}`}
              className="rounded-xl border border-slate-200 p-4 transition hover:border-orange-500"
            >
              <span className="text-xs font-semibold uppercase text-slate-400">← Previous</span>
              <p className="mt-1 font-semibold text-slate-950">{prev.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/insights/${next.category}/${next.slug}`}
              className="rounded-xl border border-slate-200 p-4 text-right transition hover:border-orange-500"
            >
              <span className="text-xs font-semibold uppercase text-slate-400">Next →</span>
              <p className="mt-1 font-semibold text-slate-950">{next.title}</p>
            </Link>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-2xl font-bold text-slate-950">Related articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/insights/${r.category}/${r.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-orange-500 hover:shadow-lg"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.slug ? imageUrl(r) : ""}
                    alt={r.title}
                    loading="lazy"
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-slate-950">{r.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-500">{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}