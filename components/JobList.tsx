import { CircularMeta } from "./CircularInfo";
import Link from "next/link";
import { jobs } from "../lib/jobs";

export default function JobList() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      {jobs.map((j, i) => (
        <Link
          key={j.slug}
          href={"/careers/" + j.slug}
          aria-label={"View details: " + j.title}
          className="group relative flex flex-col gap-5 border-b border-slate-200 px-6 py-7 outline-none transition duration-300 last:border-b-0 hover:bg-[#f6f8fd] focus-visible:bg-[#f6f8fd] active:bg-[#eef3fc] sm:flex-row sm:items-center sm:gap-8 sm:px-8"
        >
          {/* Accent bar: grows from bottom to top */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-[#e85d04] transition-transform duration-300 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100 group-active:scale-y-100"
          />

          {/* Department */}
          <div className="flex items-center gap-3 sm:w-44 sm:shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf1ff] text-xs font-bold text-[#061a40] transition-colors duration-300 group-hover:bg-[#061a40] group-hover:text-white">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-bold text-[#061a40]">
              {j.department}
            </span>
          </div>

          {/* Title, tags, summary */}
          <div className="min-w-0 flex-1">
            <h4 className="text-xl font-semibold text-[#061a40] transition-colors duration-300 group-hover:text-[#E85D04]">
              {j.title}
            </h4>
            <div className="mt-3"><CircularMeta job={j} /></div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[j.mode, j.type, j.level].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition duration-300 group-hover:bg-white group-hover:ring-1 group-hover:ring-slate-200"
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="mt-3 line-clamp-2 hidden max-w-xl text-sm leading-6 text-slate-500 md:block">
              {j.summary}
            </p>
          </div>

          {/* View details: color fills from bottom to top */}
          <span className="bo-btn bo-btn-secondary">View details</span>
        </Link>
      ))}
    </div>
  );
}

export function ProfileCta() {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[#061a40] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
      <div>
        <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
          DON&apos;T SEE YOUR ROLE?
        </p>
        <p className="mt-1 text-sm font-medium text-white sm:text-base">
          Good people are always worth meeting.
        </p>
      </div>
      <Link href="/careers/general/apply" className="bo-btn bo-btn-primary">
        Send your profile
      </Link>
    </div>
  );
}

