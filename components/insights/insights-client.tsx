import Link from "next/link";
import { type Article, formatDate, imageUrl } from "@/lib/insights-data";

export default function InsightsGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => {
        const href = `/insights/${a.category}/${a.slug}`;
        return (
          <article
            key={a.slug}
            className="group overflow-hidden rounded-[14px] border border-[#061A40]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Link href={href} className="block overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(a)}
                alt={a.title}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <div className="p-5">
              <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#E85D04]">
                Insights
              </span>

              <h3 className="font-heading mb-2 text-xl font-bold leading-snug text-[#061A40]">
                <Link href={href}>{a.title}</Link>
              </h3>

              <p className="mb-2 line-clamp-2 text-sm leading-6 text-[#5A6B8C]">
                {a.excerpt}
              </p>

              <div className="flex flex-wrap gap-x-3 text-xs text-[#5A6B8C]">
                <span>Black Origin IT Team</span>
                <span>{formatDate(a.date)}</span>
                <span>{a.readTime} min read</span>
              </div>

              <Link
                href={href}
                className="mt-3 inline-block text-sm font-semibold text-[#E85D04] hover:underline"
              >
                View
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
