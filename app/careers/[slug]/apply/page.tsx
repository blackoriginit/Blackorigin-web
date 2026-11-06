import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ApplicationForm from "../../../../components/ApplicationForm";
import { findApplyTarget, jobs } from "../../../../lib/jobs";

export const instant = false;

// Change this URL to any image you like
const PAGE_BG_URL =
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1800&q=60";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...jobs.map((j) => ({ slug: j.slug })), { slug: "general" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = findApplyTarget(slug);
  return {
    title: job ? "Apply: " + job.title + " | Black Origin" : "Apply | Black Origin",
  };
}

export default async function ApplyPage({ params }: Props) {
  const { slug } = await params;
  const job = findApplyTarget(slug);
  if (!job) notFound();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#061a40] px-4 py-10 sm:px-6 sm:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('" + PAGE_BG_URL + "')" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#061a40]/95 via-[#061a40]/85 to-[#0b2a63]/80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-[#e85d04]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl"
      />

      <div className="relative">
        <ApplicationForm job={job} />
      </div>
    </main>
  );
}


