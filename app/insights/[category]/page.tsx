import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InsightsBrowser from "@/components/insights/insights-browser";
import {
  insights,
  categoryLabels,
  categoryList,
  isCategory,
} from "@/lib/insights-data";

type Props = { params: Promise<{ category: string }> };

export const instant = false;

export function generateStaticParams() {
  return categoryList.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!isCategory(category)) return {};
  return {
    title: `${categoryLabels[category]} Insights`,
    description: `Articles on ${categoryLabels[category]} from Black Origin IT.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!isCategory(category)) notFound();

  const articles = insights.filter((a) => a.category === category);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Link
          href="/insights"
          className="text-sm font-semibold text-orange-600 hover:underline"
        >
          ← All insights
        </Link>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
          {categoryLabels[category]}
        </h1>
        <p className="mb-12 mt-3 text-slate-500">
          {articles.length} {articles.length === 1 ? "article" : "articles"}
        </p>
        <InsightsBrowser articles={articles} active={category} />
      </section>
    </main>
  );
}