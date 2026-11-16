import Image from "next/image";
import Link from "next/link";
import JobList, { ProfileCta } from "./JobList";
import { jobs } from "../lib/jobs";

export default function Careers() {
  return (
    <>
      {/* Hero: flat bottom edge */}
      <section className="w-full bg-[#061a40] px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#e85d04]">
              CAREERS AT BLACK ORIGIN
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
              Join our <span className="text-[#e85d04]">team.</span>
            </h2>
            <p className="mt-4 max-w-md leading-7 text-slate-300">
              We are building a team of thoughtful designers, engineers, and
              problem solvers who care about useful products and meaningful
              work.
            </p>

            <a
              href="#open-roles"
              className="group/btn relative mt-6 inline-flex items-center justify-center overflow-hidden rounded-full bg-[#e85d04] px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:text-[#061a40] active:text-[#061a40]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0 bg-white transition-all duration-300 ease-out group-hover/btn:h-full group-active/btn:h-full"
              />
              <span className="relative z-10">View open roles</span>
            </a>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-white">
              <div>
                <p className="text-[10px] tracking-widest text-slate-400">CULTURE</p>
                <p className="mt-1 text-sm font-semibold">Collaborative</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-slate-400">MINDSET</p>
                <p className="mt-1 text-sm font-semibold">Curious</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-slate-400">FOCUS</p>
                <p className="mt-1 text-sm font-semibold">Meaningful work</p>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="relative h-56 w-full overflow-hidden sm:h-64">
              <Image
                src="/team.jpg"
                alt="Team collaborating around a laptop"
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
                  WORK WITH US
                </p>
                <p className="mt-1 text-sm font-medium text-[#061a40]">
                  Create. Learn. Grow together.
                </p>
              </div>
              <Link
                href="/careers"
                aria-label="See all jobs"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e85d04] text-white transition duration-300 hover:scale-110"
              >
                {"\u2192"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Open opportunities */}
      <section
        id="open-roles"
        className="w-full scroll-mt-20 bg-[#f6f8fd] px-4 py-14 sm:px-6 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
                OPEN OPPORTUNITIES
              </p>
              <h3 className="mt-2 font-serif text-3xl font-bold text-[#061a40] sm:text-4xl">
                Find your place on the team.
              </h3>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#061a40] ring-1 ring-slate-200">
                <span className="h-2 w-2 rounded-full bg-[#e85d04]" />
                {jobs.length} open roles
              </span>
              <p className="max-w-sm text-sm leading-6 text-slate-500 md:text-right">
                We look for people who care about their craft, communicate
                clearly, and want to create work that makes an impact.
              </p>
            </div>
          </div>

          <JobList />
          <ProfileCta />
        </div>
      </section>
    </>
  );
}
