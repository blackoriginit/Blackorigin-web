import type { Metadata } from "next";
import InsightsBrowser from "@/components/insights/insights-browser";
import StartProjectModal from "@/components/insights/start-project-modal";
import { insights } from "@/lib/insights-data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights from Black Origin IT: articles on software engineering, artificial intelligence, product engineering and technology.",
};

const heroCards = [
  { label: "Software Engineering", file: "software-engineering" },
  { label: "Artificial Intelligence", file: "artificial-intelligence" },
  { label: "Product Engineering", file: "product-engineering" },
  { label: "Technology", file: "technology" },
];

export default function InsightsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-full w-full object-cover opacity-40"
            src="/insights/hero/bg.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/50" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
                Insights
              </h1>
              <div className="mt-8 cursor-pointer rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/30 active:bg-orange-500">
                <p className="max-w-xl text-lg leading-8 text-white/90">
                  Articles from Black Origin IT on software engineering, artificial
                  intelligence, product engineering and technology - practical notes
                  from the work of building software.
                </p>
              </div>
              <div className="mt-9">
                <a
                  href="#start-project"
                  className="inline-block rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Start a Project
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl md:p-7">
              <div className="grid grid-cols-2 gap-4">
                {heroCards.map((c) => (
                  <div
                    key={c.label}
                    className="cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/10 transition-all duration-300 hover:border-blue-400 hover:bg-blue-950 active:bg-blue-900"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-36 w-full object-cover"
                      src={`/insights/hero/${c.file}.jpg`}
                      alt={c.label}
                    />
                    <div className="p-4">
                      <p className="text-sm font-semibold">{c.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-12 rounded-t-[50%_3rem] bg-white" />
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Latest articles
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-500">
              Practical notes on technology, process, AI, design and how we work,
              from the people who build the software.
            </p>
          </div>
          <div className="mx-auto max-w-7xl">
            <InsightsBrowser articles={insights} />
          </div>
        </div>
      </section>

      <StartProjectModal />
    </main>
  );
}