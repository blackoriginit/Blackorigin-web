import type { Metadata } from "next";
import InsightsBrowser from "@/components/insights/insights-browser";
import StartProjectButton from "@/components/startprojectmodal";
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
      <section className="relative overflow-hidden bg-[#061A40] text-white">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-full w-full object-cover opacity-50"
            src="/insights/hero/bg.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-[#061A40]/30" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <h1 className="font-heading text-[32px] font-medium leading-[1.25] tracking-[-0.5px] text-white sm:text-[40px] lg:text-[48px]">
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
                <StartProjectButton className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 font-semibold text-white">
                  Start a Project
                </StartProjectButton>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl md:p-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {heroCards.map((c) => (
                  <div
                    key={c.label}
                    className="cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/10 transition-all duration-300 hover:border-blue-400 hover:bg-blue-950 active:bg-blue-900"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-28 w-full object-cover sm:h-36"
                      src={`/insights/hero/${c.file}.jpg`}
                      alt={c.label}
                    />
                    <div className="p-4">
                      <p className="break-words text-sm font-semibold">{c.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="bg-[#F5F9FF] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="font-heading mb-5 text-3xl font-semibold leading-tight tracking-tight text-[#061A40] sm:text-4xl md:text-5xl">
              Latest articles
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-[#5A6B8C]">
              Three threads run through our writing: how we plan and deliver
              software, the technology behind it, and project stories from the
              field.
            </p>
          </div>
          <InsightsBrowser articles={insights} />
        </div>
      </section>
    </main>
  );
}
