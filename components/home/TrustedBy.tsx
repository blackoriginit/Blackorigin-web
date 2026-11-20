/**
 * "Trusted by" logo marquee.
 *
 * Uses the same two-row marquee system as the Working Stack section so the
 * home page has one consistent motion language. Each client gets a monogram
 * with a small theme-matched accent dot; replace the monogram with an image
 * later if real client logos become available.
 */
const clients: { name: string; accent: string }[] = [
  { name: 'Nexora', accent: '#E85D04' },
  { name: 'Fieldstone', accent: '#38BDF8' },
  { name: 'Kanso', accent: '#34D399' },
  { name: 'Vantage', accent: '#A78BFA' },
  { name: 'Orbit Labs', accent: '#FBBF24' },
  { name: 'Meridian', accent: '#F472B6' },
  { name: 'Carnival City', accent: '#22D3EE' },
  { name: 'Kings Decorators Marchent Ltd', accent: '#818CF8' },
]

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

function ClientItems({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...clients].reverse() : clients

  return (
    <div className="technology-group">
      {items.map((client) => (
        <div
          key={client.name}
          className="flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition duration-300 hover:border-[#E85D04]/50 hover:bg-white/[0.08]"
        >
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-bold tracking-wide text-white">
            {initials(client.name)}
            <span
              aria-hidden="true"
              className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-[#061A40]"
              style={{ backgroundColor: client.accent }}
            />
          </span>

          <span className="whitespace-nowrap text-[13px] font-semibold text-white">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  )
}

function ClientMarquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="technology-marquee">
      <div
        className={`technology-track ${reverse ? 'technology-track-reverse' : ''}`}
      >
        <ClientItems reverse={reverse} />

        <div aria-hidden="true">
          <ClientItems reverse={reverse} />
        </div>
      </div>
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="border-y border-[#DCE6F3] bg-[#F5F9FF]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:pb-16 md:pt-16">
        <div className="mb-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#E85D04]" />
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

        <div className="overflow-hidden rounded-xl bg-[#061A40] py-5 shadow-[0_8px_25px_rgba(6,26,64,0.12)]">
          <div className="flex flex-col gap-4">
            <ClientMarquee />
            <ClientMarquee reverse />
          </div>
        </div>
      </div>
    </section>
  )
}
