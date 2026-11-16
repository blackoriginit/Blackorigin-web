import InsightsGrid from "./insights-client";
import type { Article, Category } from "@/lib/insights-data";

// Filter chips and search box removed to match the new design.
// `active` is kept in the props so existing category pages that pass it don't break.
export default function InsightsBrowser({
  articles,
}: {
  articles: Article[];
  active?: Category;
}) {
  return <InsightsGrid articles={articles} />;
}
