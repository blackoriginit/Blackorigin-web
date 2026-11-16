"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import type { Job } from "../lib/jobs";
import { formatDate, getCircular } from "../lib/circular";
import type { CircularState } from "../lib/circular";

type CircularJob = Pick<Job, "postedOn" | "deadline" | "vacancies">;

function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
  }, []);
  return now;
}

const BADGE: Record<CircularState, string> = {
  open: "bg-emerald-500 text-white",
  closing: "bg-[#e85d04] text-white shadow-[0_0_14px_rgba(232,93,4,0.6)]",
  closed: "bg-slate-500 text-white",
  upcoming: "bg-sky-500 text-white",
};

function label(state: CircularState, daysLeft: number) {
  if (state === "open") return "Open";
  if (state === "closed") return "Closed";
  if (state === "upcoming") return "Opening soon";
  if (daysLeft === 0) return "Last day";
  return daysLeft + (daysLeft === 1 ? " day left" : " days left");
}

function Badge({ state, daysLeft }: { state: CircularState; daysLeft: number }) {
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide " +
        BADGE[state]
      }
    >
      <span
        className={
          "h-1.5 w-1.5 rounded-full bg-white " +
          (state === "open" || state === "closing" ? "animate-pulse" : "")
        }
      />
      {label(state, daysLeft)}
    </span>
  );
}

function plural(n: number) {
  return n === 1 ? "vacancy" : "vacancies";
}

/* Compact chips for the job list (light background) */
export function CircularMeta({ job }: { job: CircularJob }) {
  const now = useNow();
  if (!job.deadline) return null;
  const c = now ? getCircular(job, now) : null;
  const urgent = c?.state === "closing";
  const closed = c?.state === "closed";

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      {c && <Badge state={c.state} daysLeft={c.daysLeft} />}

      {job.vacancies != null && (
        <span
          className={
            "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-semibold text-white " +
            (closed ? "bg-slate-400" : "bg-[#061a40]")
          }
        >
          <span className="text-sm font-bold text-[#ffb067]">{job.vacancies}</span>
          {plural(job.vacancies)}
        </span>
      )}

      <span
        className={
          "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 " +
          (urgent
            ? "border-[#e85d04]/50 bg-orange-50 text-[#c2410c]"
            : "border-slate-200 bg-white text-slate-500")
        }
      >
        Deadline
        <b className={urgent ? "text-[#c2410c]" : "text-[#061a40]"}>
          {formatDate(job.deadline)}
        </b>
      </span>
    </div>
  );
}

/* Circular card for the job hero (dark background) */
export function CircularPanel({ job }: { job: CircularJob }) {
  const now = useNow();
  if (!job.deadline) return null;
  const c = now ? getCircular(job, now) : null;
  const urgent = c?.state === "closing";
  const closed = c?.state === "closed";
  const hasVac = job.vacancies != null;

  let message: ReactNode = null;
  if (c) {
    if (c.state === "closed") message = "The application deadline has passed.";
    else if (c.state === "upcoming" && job.postedOn)
      message = <>Published on <b className="text-white">{formatDate(job.postedOn)}</b>.</>;
    else if (c.daysLeft === 0)
      message = <b className="text-[#ffb067]">Last day to apply. Submit today.</b>;
    else
      message = (
        <>
          <b className="text-[#ffb067]">
            {c.daysLeft} {c.daysLeft === 1 ? "day" : "days"}
          </b>{" "}
          left to apply{urgent ? ". Closing soon." : "."}
        </>
      );
  }

  return (
    <div
      className={
        "mt-8 overflow-hidden rounded-2xl border bg-white/[0.07] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 " +
        (urgent
          ? "border-[#e85d04]/60 shadow-[0_0_40px_rgba(232,93,4,0.25)]"
          : "border-white/15 shadow-xl")
      }
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3 sm:px-6">
        <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
          RECRUITMENT CIRCULAR
        </p>
        {c && <Badge state={c.state} daysLeft={c.daysLeft} />}
      </div>

      <div className={"grid " + (hasVac ? "sm:grid-cols-[190px_1fr]" : "")}>
        {hasVac && (
          <div className="flex items-center gap-4 border-b border-white/10 px-5 py-5 sm:flex-col sm:items-start sm:justify-center sm:gap-1 sm:border-b-0 sm:border-r sm:px-6">
            <p
              className={
                "font-serif text-5xl font-bold leading-none " +
                (closed ? "text-slate-400" : "text-[#ff8a3d]")
              }
            >
              {String(job.vacancies).padStart(2, "0")}
            </p>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-300">
              {plural(job.vacancies!).toUpperCase()}
            </p>
          </div>
        )}

        <div className="px-5 py-5 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            {job.postedOn && (
              <div>
                <p className="text-[10px] tracking-widest text-slate-400">PUBLISHED</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-200">
                  {formatDate(job.postedOn)}
                </p>
              </div>
            )}
            <div className="text-right">
              <p className="text-[10px] tracking-widest text-slate-400">APPLY BY</p>
              <p className="mt-0.5 text-base font-bold text-white sm:text-lg">
                {formatDate(job.deadline)}
              </p>
            </div>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/15">
            <div
              className={
                "h-full rounded-full transition-all duration-700 " +
                (closed
                  ? "bg-slate-400"
                  : "bg-gradient-to-r from-[#e85d04] to-[#ffb067]")
              }
              style={{ width: (c ? c.progress : 0) + "%" }}
            />
          </div>

          {message && <p className="mt-3 text-sm text-slate-300">{message}</p>}
        </div>
      </div>
    </div>
  );
}

/* Pop-up shown when someone submits after the deadline */
export function DeadlineModal({
  open,
  onClose,
  job,
}: {
  open: boolean;
  onClose: () => void;
  job: Job;
}) {
  const primary = useRef<HTMLAnchorElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRef.current();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    primary.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#061a40]/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="deadline-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="h-1.5 bg-gradient-to-r from-[#e85d04] via-[#ff7a1f] to-[#0b2a63]" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-5 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-[#061a40]"
        >
          {"\u2715"}
        </button>

        <div className="p-7 text-center sm:p-9">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e85d04]/10 text-3xl text-[#e85d04] ring-8 ring-[#e85d04]/5">
            {"\u23F0"}
          </div>
          <p className="mt-5 text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
            NOTICE
          </p>
          <h2
            id="deadline-title"
            className="mt-1 font-serif text-2xl font-bold text-[#061a40]"
          >
            Application deadline has passed
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            The circular for{" "}
            <strong className="text-[#061a40]">{job.title}</strong> closed on{" "}
            <strong className="text-[#061a40]">
              {job.deadline ? formatDate(job.deadline) : ""}
            </strong>
            . We are no longer accepting applications for this position, so your
            application was not submitted.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <Link
              ref={primary}
              href="/careers/general/apply"
              className="rounded-full bg-[#e85d04] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a1f] hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#e85d04]/30"
            >
              Send your profile instead
            </Link>
            <Link
              href="/careers"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#061a40] transition duration-300 hover:-translate-y-0.5 hover:border-[#e85d04] hover:text-[#e85d04]"
            >
              View other openings
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="text-sm font-semibold text-slate-500 transition hover:text-[#061a40]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
