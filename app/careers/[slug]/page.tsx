import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findJob, jobs } from "../../../lib/jobs";

export const instant = false;

// Change these two URLs to any image you like (code / laptop / tech themed)
const BG_URL =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=70";
const SOFT_BG_URL =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=60";

// Built-in code-grid pattern, so the page still looks good if an image URL fails
const GRID =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M48 0H0v48' fill='none' stroke='%23ffffff' stroke-opacity='0.06'/%3E%3C/svg%3E\")";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = findJob(slug);
  return {
    title: job ? job.title + " | Careers at Black Origin" : "Careers | Black Origin",
  };
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = findJob(slug);
  if (!job) notFound();

  const meta = [
    { label: "Location", value: job.location },
    { label: "Job type", value: job.type },
    { label: "Level", value: job.level },
    { label: "Work mode", value: job.mode },
    { label: "Compensation", value: job.compensation },
  ];

  const applyHref = "/careers/" + job.slug + "/apply";
  const others = jobs.filter((j) => j.slug !== job.slug);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f8fd]">
      {/* Soft transparent background for the whole page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07]"
        style={{ backgroundImage: "url('" + SOFT_BG_URL + "')" }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-b-[2.5rem] bg-[#061a40] px-4 py-12 sm:px-6 md:py-16">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-25 transition duration-700"
          style={{ backgroundImage: "url('" + BG_URL + "')" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#061a40]/95 via-[#061a40]/80 to-[#0b2a63]/70"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundImage: GRID }}
        />
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#e85d04]/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl">
          <nav className="flex items-center gap-2 text-sm text-slate-300">
            <Link href="/careers" className="transition hover:text-white">
              Careers
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#e85d04]">{job.department}</span>
          </nav>

          <h1 className="mt-5 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            {job.title}
          </h1>

          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {meta.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#e85d04]/60 hover:bg-white/10 hover:shadow-lg"
              >
                <dt className="text-[10px] tracking-widest text-slate-300">
                  {m.label.toUpperCase()}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-white sm:text-base">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={applyHref}
              className="group inline-flex items-center gap-2 rounded-full bg-[#e85d04] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a1f] hover:shadow-[0_10px_30px_rgba(232,93,4,0.45)]"
            >
              Apply now
              <span className="transition duration-300 group-hover:translate-x-1">
                {"\u2192"}
              </span>
            </Link>
            <Link
              href="/careers"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              All openings
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-300">
            By applying for this job, you agree to our data privacy policy for
            recruitment and job applications.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="relative mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1fr_300px]">
        <article className="min-w-0">
          <p className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-lg leading-8 text-slate-600 shadow-sm backdrop-blur transition duration-300 hover:shadow-md">
            {job.summary}
          </p>

          <h2 className="mt-12 font-serif text-2xl font-bold text-[#061a40]">
            What you will do
          </h2>
          <ul className="mt-5 grid gap-3">
            {job.responsibilities.map((item, i) => (
              <li
                key={item}
                className="group flex gap-4 rounded-xl border border-slate-200 bg-white/80 p-4 leading-7 text-slate-600 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[#e85d04] hover:shadow-lg"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e85d04]/10 text-xs font-bold text-[#e85d04] transition duration-300 group-hover:bg-[#e85d04] group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="transition group-hover:text-[#061a40]">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-serif text-2xl font-bold text-[#061a40]">
            What we are looking for
          </h2>
          <ul className="mt-5 grid gap-3">
            {job.requirements.map((item) => (
              <li
                key={item}
                className="group flex gap-4 rounded-xl border border-slate-200 bg-white/80 p-4 leading-7 text-slate-600 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[#061a40] hover:shadow-lg"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#061a40]/10 text-sm text-[#061a40] transition duration-300 group-hover:bg-[#061a40] group-hover:text-white">
                  {"\u2713"}
                </span>
                <span className="transition group-hover:text-[#061a40]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-col gap-4 rounded-2xl bg-[#061a40] p-6 sm:flex-row sm:items-center sm:justify-between lg:hidden">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
                READY TO JOIN US?
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Send your application for {job.title}.
              </p>
            </div>
            <Link
              href={applyHref}
              className="rounded-full bg-[#e85d04] px-6 py-2.5 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a1f] hover:shadow-lg"
            >
              Apply now
            </Link>
          </div>
        </article>

        {/* Sticky side card (desktop) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-[#061a40] p-6 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('" + BG_URL + "')" }}
              />
              <div className="relative">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
                  READY TO JOIN US?
                </p>
                <p className="mt-2 font-serif text-xl font-bold">{job.title}</p>
                <p className="mt-1 text-xs text-slate-300">
                  {job.level} {"\u00b7"} {job.type} {"\u00b7"} {job.mode}
                </p>
                <Link
                  href={applyHref}
                  className="mt-5 block rounded-full bg-[#e85d04] px-5 py-2.5 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a1f] hover:shadow-lg"
                >
                  Apply now
                </Link>
              </div>
            </div>

            {others.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
                  OTHER OPENINGS
                </p>
                <ul className="mt-3 space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={"/careers/" + o.slug}
                        className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-[#061a40] transition duration-300 hover:bg-[#f6f8fd] hover:text-[#e85d04]"
                      >
                        {o.title}
                        <span className="transition duration-300 group-hover:translate-x-1">
                          {"\u2192"}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
