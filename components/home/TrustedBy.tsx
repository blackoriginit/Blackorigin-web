/**
 * "Trusted by" static name strip.
 *
 * A single, non-moving row of client names on the same navy panel used by the
 * Working Stack marquee. The motion is intentionally removed for a calmer,
 * more stable feel.
 */
const clients = [
  'Nexora',
  'Fieldstone',
  'Kanso',
  'Vantage',
  'Orbit Labs',
  'Meridian',
  'Carnival City',
  'Kings Decorators Marchent Ltd',
]

export default function TrustedBy() {
  return (
    <section className="border-y border-[#DCE6F3] bg-[#F5F9FF]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:pb-16 md:pt-16">
        <div className="mb-7">
          <div className="mb-5">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#E85D04]">
              Trusted by teams at
            </p>
          </div>

          <h2
            id="trusted-by-heading"
            className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[#061A40] sm:text-4xl md:text-5xl"
          >
            Partners Who Trust Our Work.
          </h2>

          <p className="mt-2 max-w-none text-sm leading-5 text-[#5A6B8C]">
            From growing startups to established teams, we build software that
            people rely on every day.
          </p>
        </div>

        <div className="theme-ash-panel overflow-x-auto overscroll-x-contain rounded-xl bg-[#061A40] px-4 py-4 shadow-[0_8px_25px_rgba(6,26,64,0.12)] sm:px-6 lg:overflow-hidden [scrollbar-color:rgba(255,255,255,0.28)_transparent] [scrollbar-width:thin]">
          <div className="flex w-max items-center gap-3 sm:gap-5 lg:mx-auto lg:w-auto lg:justify-center">
            {clients.map((client, index) => (
              <span
                key={client}
                className="flex shrink-0 items-center gap-3 sm:gap-5"
              >
                <span className="whitespace-nowrap text-[12px] font-semibold tracking-tight text-white/90 transition-colors duration-300 hover:text-[#E85D04] sm:text-[13px]">
                  {client}
                </span>
                {index < clients.length - 1 && (
                  <span aria-hidden="true" className="h-3 w-px bg-white/20" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
