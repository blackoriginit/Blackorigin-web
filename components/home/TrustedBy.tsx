/**
 * "Trusted by" logo strip.
 *
 * The live site does not have this section yet, so it is built in the same
 * visual language as the rest of the home page.
 *
 * To use real client logos:
 *   1. Drop the files in `public/images/clients/` (SVG preferred, otherwise a
 *      transparent-background PNG that is ~2x the display height).
 *   2. Set `src` below, e.g. { name: 'Acme', src: '/images/clients/acme.svg' }.
 *
 * Logos are shown greyscale at 60% opacity so mixed-colour logos still look
 * uniform; they return to full colour on hover.
 */
const clients: { name: string; src?: string }[] = [
  { name: 'Nexora' },
  { name: 'Fieldstone' },
  { name: 'Kanso' },
  { name: 'Vantage' },
  { name: 'Orbit Labs' },
  { name: 'Meridian' },
]

export default function TrustedBy() {
  return (
    <section
      aria-labelledby="trusted-by-heading"
      className="border-y border-[#DCE6F3] bg-white"
    >
      <div className="mx-auto max-w-[1448px] px-6 py-10 md:px-10 md:py-12">
        <p
          id="trusted-by-heading"
          className="text-center text-[11px] font-semibold uppercase tracking-[2.5px] text-[#5A6B8C]"
        >
          Trusted by teams at
        </p>

        <ul className="mt-8 grid grid-cols-3 items-center justify-items-center gap-x-6 gap-y-8 lg:grid-cols-6">
          {clients.map((client) => (
            <li
              key={client.name}
              className="opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            >
              {client.src ? (
                <img
                  src={client.src}
                  alt={client.name}
                  loading="lazy"
                  className="h-7 w-auto max-w-[120px] object-contain md:h-8"
                />
              ) : (
                <span className="text-[15px] font-semibold tracking-tight text-[#061A40] md:text-[17px]">
                  {client.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
