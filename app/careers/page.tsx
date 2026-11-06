import type { Metadata } from "next";
import JobList, { ProfileCta } from "../../components/JobList";

export const metadata: Metadata = {
  title: "Careers | Black Origin",
  description: "Join the Black Origin team. See our open positions.",
};

// Change this URL to any image you like (office / code / team themed)
const HERO_BG_URL =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=60";

// Built-in grid pattern, still shows if the image URL fails
const GRID =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M48 0H0v48' fill='none' stroke='%23ffffff' stroke-opacity='0.05'/%3E%3C/svg%3E\")";

const highlights = [
  { label: "CULTURE", value: "Collaborative" },
  { label: "MINDSET", value: "Curious" },
  { label: "FOCUS", value: "Meaningful work" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fd]">
      {/* Hero: bottom edge curves downwards */}
      <section
        className="relative overflow-hidden bg-[#061a40] px-4 py-14 sm:px-6 md:py-20"
      >
        {/* Soft background image */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
          style={{ backgroundImage: "url('" + HERO_BG_URL + "')" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#061a40]/95 via-[#061a40]/85 to-[#0b2a63]/80"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundImage: GRID }}
        />
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#e85d04]/15 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#e85d04]">
              CAREERS AT BLACK ORIGIN
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
              Join our <span className="text-[#e85d04]">team.</span>
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
        <h2 className="mb-6 mt-1 font-serif text-2xl font-bold text-[#061a40] sm:text-3xl">
          Find your place on the team.
        </h2>

        <JobList />
        <ProfileCta />
      </section>
    </main>
  );
}

