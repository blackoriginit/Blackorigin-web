type Testimonial = {
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'We arrived with a rough idea and a hard deadline. They scoped it properly, showed working software every week, and we were onboarding our first users before the quarter ended.',
    name: 'Daniel Reyes',
    role: 'Founder, B2B SaaS platform',
  },
  {
    quote:
      'Our team was losing hours every day to manual entry and follow-ups. They mapped how the work actually happens, automated the repetitive parts, and gave that time back to us.',
    name: 'Priya Raman',
    role: 'Operations Director, Logistics',
  },
  {
    quote:
      'The backend could not keep up with the product anymore. They rebuilt the API and the data model, and releases that used to take a week now ship in a day.',
    name: 'Marcus Feld',
    role: 'Head of Product, E-commerce',
  },
]

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#F5F9FF] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#E85D04]">
              Testimonials
            </p>
          </div>

          <h2
            id="testimonials-heading"
            className="text-4xl font-semibold leading-none tracking-tight text-[#061A40] md:text-5xl"
          >
            What our partners say.
          </h2>

          <p className="mt-4 text-base leading-7 text-[#526583]">
            A few words from the teams we build with.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-[16px] border border-[#DCE6F3] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
            >
              <p
                aria-hidden="true"
                className="text-3xl leading-none text-[#E85D04]"
              >
                &ldquo;
              </p>

              <blockquote className="mt-3 flex-1 text-sm leading-6 text-[#526583]">
                {testimonial.quote}
              </blockquote>

              <footer className="mt-6 border-t border-[#DCE6F3] pt-4">
                <p className="text-sm font-semibold text-[#071d49]">
                  {testimonial.name}
                </p>
                <p className="text-xs text-[#8296b3]">{testimonial.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
