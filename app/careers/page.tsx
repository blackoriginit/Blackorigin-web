import type { Metadata } from "next";
import Link from "next/link";
import { jobs } from "../../lib/jobs";

export const metadata: Metadata = {
  title: "Careers | Black Origin",
  description: "Join the Black Origin team. See our open positions.",
};

const highlights = [
  { label: "CULTURE", value: "Collaborative" },
  { label: "MINDSET", value: "Curious" },
  { label: "FOCUS", value: "Meaningful work" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fd]">
      {/* Hero */}
      <section className="rounded-b-[2.5rem] bg-[#061a40] px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#e85d04]">
              CAREERS AT BLACK ORIGIN
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
              Join our{" "}
              <span className="text-[#e85d04]">team.</span>
            </h1>
            <p className="mt-4 max-w-md leading-7 text-slate-300">
              We are building a team of thoughtful designers, engineers, and
              problem solvers who care about useful products and meaningful
              work.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-white">
              {highlights.map((h) => (
                <div key={h.label}>
                  <p className="text-[10px] tracking-widest text-slate-400">
                    {h.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{h.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="h-56 w-full overflow-hidden sm:h-64">
              <div
                role="img"
                aria-label="Team collaborating around a laptop"
                className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('/team.avif'), linear-gradient(135deg, #0b2a63, #061a40)",
                }}
              />
            </div>
            <div className="p-4">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
                WORK WITH US
              </p>
              <p className="mt-1 text-sm font-medium text-[#061a40]">
                Create. Learn. Grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section
        id="open-roles"
        className="mx-auto max-w-5xl scroll-mt-24 px-4 py-12 sm:px-6 md:py-16"
      >
        <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
          OPEN OPPORTUNITIES
        </p>
        <h2 className="mt-1 font-serif text-2xl font-bold text-[#061a40] sm:text-3xl">
          Find your place on the team.
        </h2>

        <div className="mt-6 divide-y divide-slate-200 rounded-2xl bg-white px-5 shadow-sm ring-1 ring-slate-200 sm:px-8">
          {jobs.map((j) => (
            <div
              key={j.slug}
              className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-8"
            >
              <p className="w-32 shrink-0 text-sm font-bold text-[#061a40]">
                {j.department}
              </p>
              <div className="flex-1">
                <Link
                  href={"/careers/" + j.slug}
                  className="font-serif text-xl font-bold text-[#061a40] transition hover:text-[#e85d04] sm:text-2xl"
                >
                  {j.title}
                </Link>
                <p className="mt-1 text-sm text-slate-500">
                  {j.mode} / {j.type} / {j.level}
                </p>
              </div>
              <Link
                href={"/careers/" + j.slug}
                className="w-full rounded-full border border-slate-300 px-6 py-2.5 text-center text-sm font-semibold text-[#061a40] transition duration-300 hover:border-[#e85d04] hover:bg-[#e85d04] hover:text-white sm:w-auto"
              >
                View details
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[#061a40] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
              DON&apos;T SEE YOUR ROLE?
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              Good people are always worth meeting.
            </p>
          </div>
          <Link
            href="/careers/general/apply"
            className="rounded-full bg-[#e85d04] px-5 py-2 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a1f] hover:shadow-lg"
          >
            Send your profile
          </Link>
        </div>
      </section>
    </main>
  );
}

