import { CircularPanel } from "../../../components/CircularInfo";
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

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
        {eyebrow}
      </p>
      <h2 className="mt-1 font-serif text-xl font-bold text-[#061a40] sm:text-2xl">
        {title}
      </h2>
    </div>
  );
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
      <section className="relative overflow-hidden bg-[#061a40] px-4 py-12 sm:px-6 md:py-16">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-25"
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

        <div className="relative mx-auto max-w-6xl">
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

          <CircularPanel job={job} />

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href={applyHref} className="group inline-flex items-center gap-2 rounded-full bg-[#e85d04] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a1f] hover:shadow-[0_10px_30px_rgba(232,93,4,0.45)]">
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
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:py-14 lg:grid-cols-[1fr_280px]">
        <article className="min-w-0">
          {/* About the role */}
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
            ABOUT THE ROLE
          </p>
          <p className="mt-2 rounded-2xl border border-slate-200 bg-white/80 p-5 text-base leading-7 text-slate-600 shadow-sm backdrop-blur transition duration-300 hover:shadow-md sm:p-6 sm:text-lg sm:leading-8">
            {job.summary}
          </p>

          {/* Row 1: What you will do | What we are looking for */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-6">
            {job.responsibilities.length > 0 && (
              <section>
                <SectionTitle eyebrow="WHAT YOU WILL DO" title="Your day-to-day" />
                <ul className="mt-4 grid gap-3">
                  {job.responsibilities.map((item, i) => (
                    <li
                      key={item}
                      className="group flex gap-3 rounded-xl border border-slate-200 bg-white/80 p-3.5 text-sm leading-6 text-slate-600 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[#e85d04] hover:shadow-lg"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e85d04]/10 text-[11px] font-bold text-[#e85d04] transition duration-300 group-hover:bg-[#e85d04] group-hover:text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="transition group-hover:text-[#061a40]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {job.requirements.length > 0 && (
              <section>
                <SectionTitle
                  eyebrow="WHAT WE ARE LOOKING FOR"
                  title="Skills and mindset"
                />
                <ul className="mt-4 grid gap-3">
                  {job.requirements.map((item) => (
                    <li
                      key={item}
                      className="group flex gap-3 rounded-xl border border-slate-200 bg-white/80 p-3.5 text-sm leading-6 text-slate-600 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[#061a40] hover:shadow-lg"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#061a40]/10 text-xs text-[#061a40] transition duration-300 group-hover:bg-[#061a40] group-hover:text-white">
                        {"\u2713"}
                      </span>
                      <span className="transition group-hover:text-[#061a40]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Row 2: Nice to have | What we offer */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-6">
            {job.niceToHave.length > 0 && (
              <section>
                <SectionTitle eyebrow="NICE TO HAVE" title="Bonus points" />
                <ul className="mt-4 grid gap-3">
                  {job.niceToHave.map((item) => (
                    <li
                      key={item}
                      className="group flex gap-3 rounded-xl border border-dashed border-slate-300 bg-white/60 p-3.5 text-sm leading-6 text-slate-600 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[#e85d04] hover:bg-white hover:shadow-md"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf1ff] text-sm font-bold text-[#061a40] transition duration-300 group-hover:bg-[#e85d04] group-hover:text-white">
                        +
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {job.offer.length > 0 && (
              <section className="flex flex-col">
                <SectionTitle eyebrow="WHAT WE OFFER" title="Why join Black Origin" />
                <div className="relative mt-4 flex-1 overflow-hidden rounded-2xl bg-[#061a40] p-4 shadow-xl sm:p-5">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-15"
                    style={{ backgroundImage: "url('" + BG_URL + "')" }}
                  />
                  <div
                    aria-hidden
                    className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#e85d04]/25 blur-3xl"
                  />
                  <ul className="relative grid gap-3">
                    {job.offer.map((item) => (
                      <li
                        key={item}
                        className="group flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 text-sm leading-6 text-slate-100 backdrop-blur transition duration-300 hover:translate-x-1 hover:border-[#e85d04]/60 hover:bg-white/10"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e85d04] text-[11px] text-white shadow-[0_0_0_4px_rgba(232,93,4,0.2)]">
                          {"\u2713"}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-2xl bg-[#061a40] p-6 sm:flex-row sm:items-center sm:justify-between lg:hidden">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
                READY TO JOIN US?
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Send your application for {job.title}.
              </p>
            </div>
            <Link href={applyHref} className="rounded-full bg-[#e85d04] px-6 py-2.5 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a1f] hover:shadow-lg">
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
                <Link href={applyHref} className="mt-5 block rounded-full bg-[#e85d04] px-5 py-2.5 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a1f] hover:shadow-lg">
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


