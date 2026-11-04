import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industries | Black Origin',
  description:
    'Industries Black Origin IT serves: education, e-commerce, SaaS, professional services, healthcare, fintech, logistics, real estate, startups and SMEs.',
}

const industries = [
  {
    slug: 'education',
    name: 'Education',
    description:
      'Learning platforms, training systems and administrative tools for schools and training organisations.',
  },
  {
    slug: 'e-commerce',
    name: 'E-commerce',
    description:
      'Storefronts, marketplaces and the integrations that keep orders, stock and payments in step.',
  },
  {
    slug: 'saas',
    name: 'SaaS',
    description:
      'Multi-tenant products, billing integrations and the operational tooling behind them.',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    description:
      'Client portals, scheduling and internal systems that reduce administrative work.',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    description:
      'Patient-facing and operational software built with privacy and reliability first.',
  },
  {
    slug: 'fintech',
    name: 'FinTech',
    description:
      'Secure transaction flows, reporting and compliance-minded engineering.',
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    description:
      'Tracking, routing and warehouse systems that connect operations end to end.',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    description:
      'Listings, enquiry handling and management platforms for property businesses.',
  },
  {
    slug: 'startups-smes',
    name: 'Startups & SMEs',
    description:
      'MVPs and growth-stage products delivered with a small, senior engineering team.',
  },
]

const primaryButton =
  'inline-flex items-center justify-center rounded-md bg-[#E85D04] px-5 py-2.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#c94f03]'

const secondaryButton =
  'inline-flex items-center justify-center rounded-md border-2 border-[#E85D04] bg-transparent px-5 py-2.5 text-base font-semibold text-[#E85D04] transition-colors hover:bg-[#E85D04] hover:text-white'

export default function IndustriesPage() {
  return (
    <div className="flex-1 bg-[#F5F9FF]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#061A40] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/industries-hero.jpg"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </div>

        <div className="absolute inset-0 bg-[#061A40]/50" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-20 pb-28 md:py-28 md:pb-36">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-5xl font-bold tracking-tight text-white md:text-6xl">
              Industries
            </h1>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg">
              <p className="text-lg leading-8 text-white/90">
                We build software for the sectors where reliability, security
                and clear business outcomes matter most.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-12 rounded-t-[50%_3rem] bg-[#F5F9FF]" />
      </section>

      {/* Industries list */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#061A40]">
                Industries we serve
              </h2>

              <p className="mt-4 text-[#5A6B8C]">
                Each engagement starts with the realities of your sector: its
                regulations, its workflows and the expectations of the people
                who use the software.
              </p>

              <div className="mt-8">
                <Link href="/contact" className={primaryButton}>
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="border-t border-[#061A40]/15">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group block border-b border-[#061A40]/15 py-7 transition-colors"
                >
                  <h3 className="font-serif text-2xl font-semibold tracking-tight text-[#061A40] transition-colors duration-300 group-hover:text-[#E85D04]">
                    {industry.name}
                  </h3>

                  <p className="mt-2 max-w-xl text-[#5A6B8C]">
                    {industry.description}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#E85D04] opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <span aria-hidden="true">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 rounded-xl bg-[#061A40] p-10 text-center text-white">
            <h2 className="font-serif text-2xl font-bold">
              Have a project in mind?
            </h2>

            <p className="mt-3 text-white/80">
              Tell us about your sector and the problem you want to solve.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={primaryButton}>
                Start a Project
              </Link>

              <Link href="/services" className={secondaryButton}>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
