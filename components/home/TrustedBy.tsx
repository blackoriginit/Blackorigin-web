/**
 * "Trusted by" name marquee.
 *
 * A single slow-moving row that follows the same marquee system as the
 * Working Stack section, but keeps the client list clean and text-only.
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

function ClientItems() {
  return (
    <div className="technology-group">
      {clients.map((client) => (
        <div
          key={client}
          className="flex shrink-0 items-center gap-5 px-4"
        >
          <span className="whitespace-nowrap text-[13px] font-semibold text-white/90 transition-colors duration-300 hover:text-[#E85D04]">
            {client}
          </span>
          <span aria-hidden="true" className="h-3 w-px bg-white/20" />
        </div>
      ))}
    </div>
  )
}

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
            className="font-heading text-4xl font-semibold leading-tight tracking-tight text-[#061A40] md:text-5xl"
          >
            Partners Who Trust Our Work.
          </h2>

          <p className="mt-2 max-w-none text-sm leading-5 text-[#5A6B8C]">
            From growing startups to established teams, we build software that
            people rely on every day.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl bg-[#061A40] py-4 shadow-[0_8px_25px_rgba(6,26,64,0.12)]">
          <div className="technology-marquee">
            <div className="technology-track">
              <ClientItems />

              <div aria-hidden="true">
                <ClientItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
