"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    tag: "DISCOVERY",
    title: "Understand the problem",
    text: "We define the goals, audience, requirements and priorities before any design or development decision is made.",
    outputs: ["Goals brief", "User & stakeholder map", "Requirements list"],
  },
  {
    tag: "PLANNING",
    title: "Scope the work",
    text: "We turn requirements into a clear scope, milestones and a realistic estimate, agreed before the build starts.",
    outputs: ["Scope document", "Milestone plan", "Timeline & estimate"],
  },
  {
    tag: "DESIGN",
    title: "Shape the experience",
    text: "Information architecture, interface design and reusable components, reviewed with you before a line of code is written.",
    outputs: ["Sitemap & flows", "Wireframes", "UI design system"],
  },
  {
    tag: "DEVELOPMENT",
    title: "Build in working increments",
    text: "Senior engineers implement the product in reviewable increments, with demos along the way so there are no surprises.",
    outputs: ["Weekly demos", "Code reviews", "Staging builds"],
  },
  {
    tag: "TESTING",
    title: "Prove it works",
    text: "Automated and manual testing, performance checks and security review before anything reaches your users.",
    outputs: ["Test reports", "Performance audit", "Security review"],
  },
  {
    tag: "DEPLOYMENT",
    title: "Ship with confidence",
    text: "Controlled releases, monitoring and rollback plans so launch day is uneventful.",
    outputs: ["Release checklist", "Monitoring setup", "Rollback plan"],
  },
  {
    tag: "SUPPORT & EVOLUTION",
    title: "Improve after launch",
    text: "Maintenance, fixes and new features as your business grows \u2014 we stay involved long after go-live.",
    outputs: ["Maintenance", "Bug fixes", "Feature roadmap"],
  },
];

const principles = [
  "Clear scope before build",
  "Regular demos, no surprises",
  "Tested before every release",
  "Support after go-live",
];



export default function OurProcess() {
  const [selected, setSelected] = useState<string[]>([]);

  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    const t = timers.current;
    return () => Object.values(t).forEach(clearTimeout);
  }, []);

  function toggle(key: string) {
    setSelected((prev) => (prev.includes(key) ? prev : [...prev, key]));
    clearTimeout(timers.current[key]);
    timers.current[key] = setTimeout(() => {
      setSelected((prev) => prev.filter((k) => k !== key));
      delete timers.current[key];
    }, 10000);
  }

  return (
    <section className="w-full bg-[#f6f8fd] px-4 py-12 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-xl md:grid-cols-[0.8fr_1.4fr]">
        {/* Left panel */}
        <div className="bg-[#061a40] p-6 text-white sm:p-8 md:p-9">
          <div className="md:sticky md:top-24">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
              OUR PROCESS
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              A clearer way to move from idea to launch.
            </h2>
            <p className="mt-5 text-xs leading-6 text-slate-300 sm:text-sm">
              A defined seven-step delivery process keeps every decision clear,
              every deliverable aligned, and every project moving forward.
            </p>

            <div className="mt-7 border-t border-white/15 pt-6">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
                BUILT WITH CLARITY
              </p>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                Less friction. Better decisions. Stronger outcomes.
              </p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                {principles.map((p) => (
                  <li
                    key={p}
                    className="group/p flex items-center gap-3 text-xs text-slate-200 transition duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e85d04]/20 text-[10px] text-[#e85d04] transition duration-300 group-hover/p:bg-[#e85d04] group-hover/p:text-white">
                      {"\u2713"}
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="p-4 sm:p-8">

          <ol>
            {steps.map((s, i) => {
              const last = i === steps.length - 1;
              const stepActive = s.outputs.some((o) =>
                selected.includes(i + "-" + o)
              );
              return (
                <li key={s.tag} className="group relative flex gap-3 sm:gap-4">
                  {!last && (
                    <span
                      className={
                        "absolute left-[15px] top-10 bottom-0 w-px transition duration-300 sm:left-[17px] sm:top-11 " +
                        (stepActive
                          ? "bg-[#e85d04]/60"
                          : "bg-slate-200 group-hover:bg-[#e85d04]/50")
                      }
                    />
                  )}

                  <span
                    className={
                      "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ring-4 ring-white transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(232,93,4,0.15)] sm:h-9 sm:w-9 sm:text-[11px] " +
                      (stepActive
                        ? "bg-[#061a40] text-white"
                        : "bg-[#e85d04] text-white")
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={
                      "min-w-0 flex-1 rounded-xl border border-transparent px-3 py-2 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-slate-200 group-hover:bg-[#f6f8fd] group-hover:shadow-sm " +
                      (last ? "" : "mb-4")
                    }
                  >
                    <p className="text-[9px] font-bold tracking-[0.2em] text-[#e85d04]">
                      {s.tag}
                    </p>
                    <h3 className="mt-1 font-serif text-base font-bold text-[#061a40] sm:text-lg">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-6 text-slate-500 sm:text-[13px]">
                      {s.text}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.outputs.map((o) => {
                        const key = i + "-" + o;
                        const on = selected.includes(key);
                        return (
                          <button
                            key={key}
                            type="button"
                            aria-pressed={on}
                            onClick={() => toggle(key)}
                            className={
                              "rounded-full border px-3 py-1.5 text-[11px] font-semibold transition duration-200 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#e85d04]/30 " +
                              (on
                                ? "border-[#e85d04] bg-[#e85d04] text-white shadow-md"
                                : "border-slate-200 bg-white text-[#061a40] hover:border-[#e85d04] hover:text-[#e85d04]")
                            }
                          >
                            
                            {o}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}


