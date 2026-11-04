import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Industry = {
  slug: string
  name: string
  description: string
  heroSubtitle: string
  overview: string[]
  challenges: string[]
  solutions: string[]
  outcomes: string[]
}

const industries: Industry[] = [
  {
    slug: 'education',
    name: 'Education',
    description:
      'Learning platforms, training systems and administrative tools for schools and training organisations.',
    heroSubtitle:
      'Digital platforms that make learning more accessible, engaging and easier to manage.',
    overview: [
      'We help educational institutions and training providers build secure, scalable platforms that support modern learning approaches.',
      'From student portals to learning management systems, we focus on intuitive experiences that work for learners and administrators alike.',
    ],
    challenges: [
      'Fragmented systems across admissions, fees and academics',
      'Low engagement with existing digital tools',
      'Data privacy and compliance requirements',
      'Limited resources for ongoing maintenance',
    ],
    solutions: [
      'Custom learning management systems',
      'Student and parent portals',
      'Exam and assessment platforms',
      'Integration with existing SIS/ERP systems',
    ],
    outcomes: [
      'Streamlined administrative workflows',
      'Improved learner engagement',
      'Centralised data and reporting',
      'Better accessibility across devices',
    ],
  },
  {
    slug: 'e-commerce',
    name: 'E-commerce',
    description:
      'Storefronts, marketplaces and the integrations that keep orders, stock and payments in step.',
    heroSubtitle:
      'Scalable commerce experiences built for conversion, reliability and growth.',
    overview: [
      'We build custom e-commerce solutions and marketplaces tailored to your business model.',
      'Our focus is on performance, seamless integrations, and operations that scale as you grow.',
    ],
    challenges: [
      'Complex inventory across channels',
      'Cart abandonment and conversion issues',
      'Payment gateway integrations',
      'Order fulfilment and logistics complexity',
    ],
    solutions: [
      'Custom storefronts and headless commerce',
      'Multi-vendor marketplaces',
      'Payment and shipping integrations',
      'Inventory and order management systems',
    ],
    outcomes: [
      'Higher conversion rates',
      'Unified inventory across channels',
      'Streamlined fulfilment workflows',
      'Actionable sales analytics',
    ],
  },
  {
    slug: 'saas',
    name: 'SaaS',
    description:
      'Multi-tenant products, billing integrations and the operational tooling behind them.',
    heroSubtitle:
      'From MVP to scale - we build multi-tenant SaaS products with solid foundations.',
    overview: [
      'We partner with founders and product teams to build secure, multi-tenant SaaS platforms.',
      'We focus on architecture that scales, clean billing flows, and the tooling you need to operate efficiently.',
    ],
    challenges: [
      'Building for multi-tenancy from day one',
      'Complex subscription and billing logic',
      'Scaling infrastructure costs',
      'Balancing speed to market with long-term maintainability',
    ],
    solutions: [
      'Multi-tenant architecture and auth',
      'Subscription billing (Stripe, etc.)',
      'Admin dashboards and analytics',
      'CI/CD and observability setup',
    ],
    outcomes: [
      'Faster time to market',
      'Reliable billing and metering',
      'Scalable architecture',
      'Reduced operational overhead',
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    description:
      'Client portals, scheduling and internal systems that reduce administrative work.',
    heroSubtitle:
      'Tools that help professional service firms save time and deliver better client experiences.',
    overview: [
      'We build custom systems for consultancies, agencies, and service businesses to streamline operations.',
      'From client portals to project tracking, we eliminate manual work so your team can focus on delivery.',
    ],
    challenges: [
      'Time tracking and billing complexity',
      'Scattered client communication',
      'Project profitability visibility',
      'Manual proposal and contract workflows',
    ],
    solutions: [
      'Client portals and document sharing',
      'Project and time tracking systems',
      'Invoicing and billing automation',
      'CRM and pipeline management',
    ],
    outcomes: [
      'Improved billing accuracy',
      'Better client collaboration',
      'Clear project profitability',
      'Less administrative overhead',
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    description:
      'Patient-facing and operational software built with privacy and reliability first.',
    heroSubtitle:
      'Secure, compliant healthcare solutions that put patients and providers first.',
    overview: [
      'We build healthcare software with privacy and reliability as core requirements.',
      'Our approach focuses on secure data handling, intuitive UX, and systems that integrate well with existing workflows.',
    ],
    challenges: [
      'Strict privacy and compliance requirements',
      'Legacy system integrations',
      'Complex user roles and permissions',
      'Need for reliability and uptime',
    ],
    solutions: [
      'Patient portals and booking systems',
      'Practice management tools',
      'Secure data capture and reporting',
      'Role-based access control systems',
    ],
    outcomes: [
      'Improved patient experience',
      'Streamlined clinical workflows',
      'Stronger data security',
      'Better operational efficiency',
    ],
  },
  {
    slug: 'fintech',
    name: 'FinTech',
    description:
      'Secure transaction flows, reporting and compliance-minded engineering.',
    heroSubtitle:
      'Trust-first financial software built with security and compliance at its core.',
    overview: [
      'We engineer secure, reliable fintech solutions for payments, lending, and financial operations.',
      'Security, auditability, and compliance are built into every layer of what we deliver.',
    ],
    challenges: [
      'High security and compliance requirements',
      'Complex transaction flows',
      'Fraud prevention needs',
      'Integration with banking APIs',
    ],
    solutions: [
      'Payment processing integrations',
      'Digital wallet and transaction systems',
      'KYC/AML workflow automation',
      'Financial reporting and dashboards',
    ],
    outcomes: [
      'Secure, auditable transactions',
      'Faster onboarding flows',
      'Real-time financial insights',
      'Reduced compliance risk',
    ],
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    description:
      'Tracking, routing and warehouse systems that connect operations end to end.',
    heroSubtitle:
      'Connected logistics systems that improve visibility, efficiency and delivery performance.',
    overview: [
      'We build logistics and supply chain software that gives you real-time visibility across operations.',
      'From tracking to warehouse management, we connect systems to eliminate bottlenecks.',
    ],
    challenges: [
      'Lack of real-time visibility',
      'Inefficient routing and dispatch',
      'Warehouse management complexity',
      'Disconnected systems across partners',
    ],
    solutions: [
      'Fleet tracking and dispatch systems',
      'Route optimization tools',
      'Warehouse management systems',
      'Shipment tracking portals',
    ],
    outcomes: [
      'Improved delivery efficiency',
      'Real-time operational visibility',
      'Reduced costs through optimization',
      'Better customer experience',
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    description:
      'Listings, enquiry handling and management platforms for property businesses.',
    heroSubtitle:
      'Property platforms that streamline listings, enquiries and management workflows.',
    overview: [
      'We build custom real estate platforms for agencies, developers, and property managers.',
      'Our solutions make it easier to manage listings, handle enquiries, and keep operations organized.',
    ],
    challenges: [
      'Managing large property portfolios',
      'Slow enquiry response times',
      'Complex commission calculations',
      'Disjointed CRM and listing systems',
    ],
    solutions: [
      'Property listing platforms',
      'CRM for real estate sales',
      'Tenant and lease management',
      'Virtual tour and enquiry systems',
    ],
    outcomes: [
      'Faster enquiry response',
      'Better lead management',
      'Streamlined property operations',
      'Improved agent productivity',
    ],
  },
  {
    slug: 'startups-smes',
    name: 'Startups & SMEs',
    description:
      'MVPs and growth-stage products delivered with a small, senior engineering team.',
    heroSubtitle:
      'Turn your idea into a working product - fast, focused and built to scale.',
    overview: [
      'We help startups and SMEs build MVPs and grow them into production-ready products.',
      'With a senior engineering team, we focus on what matters most to get you to market quickly.',
    ],
    challenges: [
      'Limited budget and timeline',
      'Need to validate ideas quickly',
      'Unclear technical requirements',
      'Planning for scale from the start',
    ],
    solutions: [
      'Rapid MVP development',
      'Product strategy and architecture',
      'Scalable backend and APIs',
      'Launch support and iteration',
    ],
    outcomes: [
      'Faster validation of ideas',
      'Production-ready from day one',
      'Flexible architecture for growth',
      'Senior expertise without full-time hires',
    ],
  },
]

function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug)
}

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)

  if (!industry) {
    return {
      title: 'Industry Not Found | Black Origin',
    }
  }

  return {
    title: `${industry.name} | Industries | Black Origin`,
    description: industry.description,
  }
}

const primaryButton =
  'inline-flex items-center justify-center rounded-md bg-[#E85D04] px-5 py-2.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#c94f03]'

const secondaryButton =
  'inline-flex items-center justify-center rounded-md border-2 border-[#E85D04] bg-transparent px-5 py-2.5 text-base font-semibold text-[#E85D04] transition-colors hover:bg-[#E85D04] hover:text-white'

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = getIndustry(slug)

  if (!industry) {
    notFound()
  }

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
          <div className="mx-auto max-w-4xl text-center">
            <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/industries" className="hover:text-white">
                Industries
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">{industry.name}</span>
            </nav>

            <h1 className="font-serif text-5xl font-bold tracking-tight text-white md:text-6xl">
              {industry.name}
            </h1>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg">
              <p className="text-lg leading-8 text-white/90">
                {industry.heroSubtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-12 rounded-t-[50%_3rem] bg-[#F5F9FF]" />
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#061A40] md:text-4xl">
              Overview
            </h2>
            <div className="mt-6 space-y-4">
              {industry.overview.map((paragraph, index) => (
                <p key={index} className="text-lg leading-8 text-[#5A6B8C]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges, Solutions, Outcomes */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-[#061A40]/10 bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#061A40]">
                Challenges
              </h3>
              <ul className="mt-4 space-y-3">
                {industry.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#5A6B8C]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E85D04]" />
                    <span className="leading-7">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#061A40]/10 bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#061A40]">
                Our Solutions
              </h3>
              <ul className="mt-4 space-y-3">
                {industry.solutions.map((solution, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#5A6B8C]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E85D04]" />
                    <span className="leading-7">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#061A40]/10 bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#061A40]">
                Outcomes
              </h3>
              <ul className="mt-4 space-y-3">
                {industry.outcomes.map((outcome, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#5A6B8C]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E85D04]" />
                    <span className="leading-7">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-xl bg-[#061A40] p-10 text-center text-white">
            <h2 className="font-serif text-2xl font-bold md:text-3xl">
              Ready to build for {industry.name.toLowerCase()}?
            </h2>

            <p className="mt-3 text-white/80">
              Let&apos;s discuss how we can help solve your specific challenges.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={primaryButton}>
                Start a Project
              </Link>

              <Link href="/industries" className={secondaryButton}>
                View All Industries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
