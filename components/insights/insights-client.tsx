import Link from "next/link";
import {
  type Article,
  categoryLabels,
  formatDate,
  imageUrl,
} from "@/lib/insights-data";

export default function InsightsGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => {
        const href = `/insights/${a.category}/${a.slug}`;
        return (
          <article
            key={a.slug}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Link href={href} className="block overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(a)}
                alt={a.title}
                loading="lazy"
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-orange-600">
                {categoryLabels[a.category]}
              </span>
              <h3 className="mb-3 text-xl font-bold leading-snug text-slate-950">
                <Link href={href}>{a.title}</Link>
              </h3>
              <p className="mb-5 flex-1 text-sm leading-6 text-slate-500">
                {a.excerpt}
              </p>
              <p className="text-xs text-slate-400">
                Black Origin IT Team · {formatDate(a.date)} · {a.readTime} min read
              </p>
              <Link
                href={href}
                className="mt-4 text-sm font-semibold text-orange-600 hover:underline"
              >
                View →
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}