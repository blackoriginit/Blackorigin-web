"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import InsightsGrid from "./insights-client";
import {
  type Article,
  type Category,
  categoryLabels,
  categoryList,
} from "@/lib/insights-data";

export default function InsightsBrowser({
  articles,
  active,
}: {
  articles: Article[];
  active?: Category;
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return articles;
    return articles.filter((a) =>
      `${a.title} ${a.excerpt} ${categoryLabels[a.category]}`
        .toLowerCase()
        .includes(term)
    );
  }, [q, articles]);

  const tab = (isActive: boolean) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-orange-500 text-white"
        : "border border-slate-200 bg-white text-slate-700 hover:border-orange-500 hover:text-orange-600"
    }`;

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <nav aria-label="Categories" className="flex flex-wrap gap-2">
          <Link href="/insights" className={tab(!active)}>
            All
          </Link>
          {categoryList.map((c) => (
            <Link key={c} href={`/insights/${c}`} className={tab(active === c)}>
              {categoryLabels[c]}
            </Link>
          ))}
        </nav>

        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search articles..."
          aria-label="Search articles"
          className="w-full rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 md:w-72"
        />
      </div>

      {filtered.length > 0 ? (
        <InsightsGrid articles={filtered} />
      ) : (
        <p className="py-16 text-center text-slate-500">
          No articles found{q ? ` for “${q}”` : ""}.
        </p>
      )}
    </div>
  );
}