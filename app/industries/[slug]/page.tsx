import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Industry = {
  slug: string
  name: string
  description: string
  heroSubtitle: string
  heroAccent: string
  overviewTitle: string
  overview: string[]
  features: { title: string; description: string }[]
  ctaTitle: string
  ctaSubtitle: string
}

const industries: Industry[] = [
  {
    slug: 'education',
    name: 'Education',
    description:
      'Learning platforms, training systems and administrative tools for schools and training organisations.',
    heroSubtitle:
      'Empowering institutions with intelligent platforms that make learning more accessible, engaging and effective.',
    heroAccent: 'from-[#061A40] via-[#0a1f4d] to-[#061A40]',
    overviewTitle: 'Building the future of learning',
    overview: [
      'We partner with schools, universities and training providers to create digital learning ecosystems that scale with your needs.',
      'Our solutions bridge the gap between traditional education and modern technology, creating experiences that work for both educators and learners.',
    ],
    features: [
      {
        title: 'Learning Management',
        description:
          'Custom LMS platforms with course creation, assessments, and progress tracking.',
      },
      {
        title: 'Student Portals',
        description:
          'Unified dashboards for students, parents, and educators with real-time insights.',
      },
      {
        title: 'Smart Assessments',
        description:
          'Automated grading, proctoring capabilities, and detailed performance analytics.',
      },
      {
        title: 'System Integration',
        description:
          'Seamless connection with existing SIS, ERP, and administrative systems.',
      },
    ],
    ctaTitle: 'Transform your educational platform',
    ctaSubtitle: 'Let us help you build a learning experience that drives results.',
  },
  {
    slug: 'e-commerce',
    name: 'E-commerce',
    description:
      'Storefronts, marketplaces and the integrations that keep orders, stock and payments in step.',
    heroSubtitle:
      'High-converting commerce platforms engineered for scale, speed and seamless operations.',
    heroAccent: 'from-[#061A40] via-[#1a0f00] to-[#061A40]',
    overviewTitle: 'Commerce without limits',
    overview: [
      'We build headless and traditional e-commerce solutions that deliver exceptional shopping experiences across every touchpoint.',
      'From single-brand storefronts to complex multi-vendor marketplaces, we engineer for performance and growth.',
    ],
    features: [
      {
        title: 'Headless Commerce',
        description:
          'Lightning-fast storefronts with flexible frontends powered by modern APIs.',
      },
      {
        title: 'Marketplace Platforms',
        description:
          'Multi-vendor systems with vendor dashboards, commissions, and order management.',
      },
      {
        title: 'Payment & Logistics',
        description:
          'Seamless integrations with payment gateways, shipping providers, and tax systems.',
      },
      {
        title: 'Smart Inventory',
        description:
          'Real-time stock sync across channels with automated reordering and forecasting.',
      },
    ],
    ctaTitle: 'Scale your online business',
    ctaSubtitle: 'Build a commerce platform that grows with your ambitions.',
  },
  {
    slug: 'saas',
    name: 'SaaS',
    description:
      'Multi-tenant products, billing integrations and the operational tooling behind them.',
    heroSubtitle:
      'Product-first engineering for SaaS companies ready to scale from MVP to market leader.',
    heroAccent: 'from-[#061A40] via-[#001122] to-[#061A40]',
    overviewTitle: 'Built to scale, designed to convert',
    overview: [
      'We help SaaS founders and teams build robust, multi-tenant platforms with the architecture to scale.',
      'Every product we build is engineered for reliability, security, and the metrics that matter to your business.',
    ],
    features: [
      {
        title: 'Multi-Tenant Architecture',
        description:
          'Secure, scalable foundations built for thousands of users from day one.',
      },
      {
        title: 'Billing & Subscriptions',
        description:
          'Flexible pricing models with Stripe, usage-based billing, and automated invoicing.',
      },
      {
        title: 'Analytics & Insights',
        description:
          'Built-in dashboards to track usage, retention, and key business metrics.',
      },
      {
        title: 'DevOps & Infrastructure',
        description:
          'CI/CD pipelines, monitoring, and cost-optimized cloud infrastructure.',
      },
    ],
    ctaTitle: 'Launch your SaaS faster',
    ctaSubtitle: 'From concept to customers with a solid technical foundation.',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    description:
      'Client portals, scheduling and internal systems that reduce administrative work.',
    heroSubtitle:
      'Streamline operations and elevate client experiences with purpose-built business systems.',
    heroAccent: 'from-[#061A40] via-[#0f1419] to-[#061A40]',
    overviewTitle: 'Efficiency that drives profitability',
    overview: [
      'We build custom tools for consultancies, agencies, and professional service firms to eliminate bottlenecks.',
      'Our solutions bring together project management, billing, and client communication in one seamless system.',
    ],
    features: [
      {
        title: 'Client Portals',
        description:
          'Secure, branded portals for document sharing, approvals, and collaboration.',
      },
      {
        title: 'Time & Billing',
        description:
          'Accurate tracking with automated invoicing and project profitability insights.',
      },
      {
        title: 'Project Management',
        description:
          'Kanban boards, resource planning, and deadline tracking tailored to your workflow.',
      },
      {
        title: 'CRM & Automation',
        description:
          'Streamlined pipelines with automated follow-ups and proposal generation.',
      },
    ],
    ctaTitle: 'Optimize your service delivery',
    ctaSubtitle: 'Spend less time on admin, more time on what you do best.',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    description:
      'Patient-facing and operational software built with privacy and reliability first.',
    heroSubtitle:
      'Privacy-first healthcare technology that improves care delivery and operational efficiency.',
    heroAccent: 'from-[#061A40] via-[#0a1a2f] to-[#061A40]',
    overviewTitle: 'Technology that cares',
    overview: [
      'We build secure, compliant healthcare solutions designed with patient privacy and provider workflows in mind.',
      'Our systems integrate seamlessly with existing processes while meeting the highest standards of security.',
    ],
    features: [
      {
        title: 'Patient Portals',
        description:
          'Secure access to appointments, records, and communication with care teams.',
      },
      {
        title: 'Practice Management',
        description:
          'Streamlined scheduling, billing, and administrative workflows.',
      },
      {
        title: 'Telehealth Solutions',
        description:
          'Video consultations with secure messaging and prescription management.',
      },
      {
        title: 'Compliance & Security',
        description:
          'Built with privacy controls, audit trails, and compliance-ready architecture.',
      },
    ],
    ctaTitle: 'Modernize healthcare delivery',
    ctaSubtitle: 'Build secure solutions that put patients and providers first.',
  },
  {
    slug: 'fintech',
    name: 'FinTech',
    description:
      'Secure transaction flows, reporting and compliance-minded engineering.',
    heroSubtitle:
      'Fortress-grade financial technology built for trust, compliance and scale.',
    heroAccent: 'from-[#061A40] via-[#000814] to-[#061A40]',
    overviewTitle: 'Finance reimagined securely',
    overview: [
      'We engineer secure, auditable financial systems that handle sensitive transactions with confidence.',
      'From payments to lending platforms, security and compliance are foundational to everything we build.',
    ],
    features: [
      {
        title: 'Payment Solutions',
        description:
          'Secure payment processing with multi-gateway support and fraud prevention.',
      },
      {
        title: 'Digital Banking',
        description:
          'Modern banking interfaces with account management and transaction history.',
      },
      {
        title: 'Lending Platforms',
        description:
          'Loan origination, underwriting, and portfolio management systems.',
      },
      {
        title: 'Compliance Automation',
        description:
          'KYC, AML, and regulatory reporting built into your workflows.',
      },
    ],
    ctaTitle: 'Build trusted financial products',
    ctaSubtitle: 'Secure, compliant technology that your users can rely on.',
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    description:
      'Tracking, routing and warehouse systems that connect operations end to end.',
    heroSubtitle:
      'Intelligent logistics platforms that optimize routes, track shipments, and streamline operations.',
    heroAccent: 'from-[#061A40] via-[#0f1419] to-[#061A40]',
    overviewTitle: 'Logistics in motion',
    overview: [
      'We build connected logistics systems that give you complete visibility across your supply chain.',
      'From fleet management to warehouse operations, our solutions drive efficiency at every step.',
    ],
    features: [
      {
        title: 'Fleet Management',
        description:
          'Real-time tracking, driver management, and vehicle maintenance scheduling.',
      },
      {
        title: 'Route Optimization',
        description:
          'AI-powered routing to reduce fuel costs and delivery times.',
      },
      {
        title: 'Warehouse Systems',
        description:
          'Inventory tracking, picking optimization, and order fulfillment automation.',
      },
      {
        title: 'Customer Portals',
        description:
          'Real-time shipment tracking and delivery notifications for end customers.',
      },
    ],
    ctaTitle: 'Optimize your supply chain',
    ctaSubtitle: 'Smarter logistics for faster, more reliable deliveries.',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    description:
      'Listings, enquiry handling and management platforms for property businesses.',
    heroSubtitle:
      'Modern property platforms that connect buyers, sellers, and managers seamlessly.',
    heroAccent: 'from-[#061A40] via-[#1a1400] to-[#061A40]',
    overviewTitle: 'Property tech that sells',
    overview: [
      'We build powerful real estate platforms for agencies, developers, and property management companies.',
      'From virtual tours to automated workflows, we help you close deals faster and manage properties better.',
    ],
    features: [
      {
        title: 'Listing Platforms',
        description:
          'Beautiful, searchable property listings with advanced filters and maps.',
      },
      {
        title: 'CRM & Leads',
        description:
          'Automated lead capture, nurturing, and commission tracking.',
      },
      {
        title: 'Property Management',
        description:
          'Tenant portals, maintenance requests, and lease management tools.',
      },
      {
        title: 'Virtual Experiences',
        description:
          '3D tours, floor plans, and immersive property showcases.',
      },
    ],
    ctaTitle: 'Elevate your real estate business',
    ctaSubtitle: 'Digital tools that help you sell more and manage better.',
  },
  {
    slug: 'startups-smes',
    name: 'Startups & SMEs',
    description:
      'MVPs and growth-stage products delivered with a small, senior engineering team.',
    heroSubtitle:
      'From idea to market - build, validate, and scale with a senior engineering team.',
    heroAccent: 'from-[#061A40] via-[#0a0a1a] to-[#061A40]',
    overviewTitle: 'Launch faster, scale smarter',
    overview: [
      'We help startups and SMEs turn ideas into production-ready products without the overhead of a full engineering team.',
      'Our focused approach gets you to market quickly while building on a foundation ready for growth.',
    ],
    features: [
      {
        title: 'Rapid MVP',
        description:
          'Launch in weeks with a focused product that validates your core assumptions.',
      },
      {
        title: 'Product Strategy',
        description:
          'Technical architecture and roadmap planning aligned with your goals.',
      },
      {
        title: 'Scalable Foundation',
        description:
          'Clean, extensible code built to grow as your business evolves.',
      },
      {
        title: 'Ongoing Support',
        description:
          'Post-launch iteration and scaling as you gain traction.',
      },
    ],
    ctaTitle: 'Ready to build your product?',
    ctaSubtitle: 'Get a senior team working on your idea from day one.',
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

  // Different layouts per industry
  const isEducation = slug === 'education'
  const isEcommerce = slug === 'e-commerce'
  const isSaas = slug === 'saas'
  const isProfessional = slug === 'professional-services'
  const isHealthcare = slug === 'healthcare'
  const isFintech = slug === 'fintech'
  const isLogistics = slug === 'logistics'
  const isRealEstate = slug === 'real-estate'
  const isStartups = slug === 'startups-smes'

  return (
    <div className="flex-1 bg-[#F5F9FF]">
      {/* Hero - brand blue with orange radial glow */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundColor: '#061A40',
          backgroundImage:
            'radial-gradient(circle at 88% 0%, rgba(232, 93, 4, 0.55), rgba(232, 93, 4, 0) 55%)',
        }}
      >
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <nav className="mb-8 flex items-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/industries" className="hover:text-white transition-colors">
                Industries
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">{industry.name}</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-[#E85D04]/50 bg-[#E85D04]/10 px-4 py-1.5 text-sm font-medium text-[#E85D04]">
              {industry.name}
            </div>

            <h1 className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {industry.heroSubtitle}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              {industry.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className={primaryButton}>
                Start Your Project
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-2.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Explore Other Industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview - Different layouts */}
      {isEducation && (
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-[#E85D04]/10 px-4 py-1.5 text-sm font-semibold text-[#E85D04]">
                  Overview
                </div>
                <h2 className="font-serif text-4xl font-bold tracking-tight text-[#061A40] md:text-5xl">
                  {industry.overviewTitle}
                </h2>
                <div className="mt-6 space-y-4">
                  {industry.overview.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-8 text-[#5A6B8C]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl bg-gradient-to-br from-[#061A40] to-[#0a1f4d] p-10 text-white shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E85D04]">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Engaging Experiences</h3>
                        <p className="mt-2 text-white/80">
                          Interactive content that keeps learners motivated
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E85D04]">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 3v18h18" />
                          <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Measurable Outcomes</h3>
                        <p className="mt-2 text-white/80">
                          Track progress with detailed analytics and insights
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E85D04]">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Secure & Scalable</h3>
                        <p className="mt-2 text-white/80">
                          Enterprise-grade security for institutions of any size
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {isFintech && (
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-[#E85D04]/10 px-4 py-1.5 text-sm font-semibold text-[#E85D04]">
                Overview
              </div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-[#061A40] md:text-5xl">
                {industry.overviewTitle}
              </h2>
              <div className="mx-auto mt-6 max-w-3xl space-y-4">
                {industry.overview.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-8 text-[#5A6B8C]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: '💳', title: 'Secure Payments', desc: 'Encrypted transactions' },
                { icon: '🛡️', title: 'Fraud Prevention', desc: 'AI-powered detection' },
                { icon: '📊', title: 'Real-time Analytics', desc: 'Instant insights' },
                { icon: '✅', title: 'Compliance Ready', desc: 'Regulatory standards' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl border border-[#061A40]/10 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#E85D04]/20 to-[#E85D04]/10 text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#061A40]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#5A6B8C]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isSaas && (
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-[#E85D04]/10 px-4 py-1.5 text-sm font-semibold text-[#E85D04]">
                  Overview
                </div>
                <h2 className="font-serif text-4xl font-bold tracking-tight text-[#061A40] md:text-5xl">
                  {industry.overviewTitle}
                </h2>
                <div className="mt-6 space-y-4">
                  {industry.overview.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-8 text-[#5A6B8C]">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Multi-tenant', 'Subscription Ready', 'API-First', 'Cloud Native'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#061A40]/20 px-4 py-2 text-sm font-medium text-[#061A40]"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E85D04]/20 to-transparent blur-3xl" />
                <div className="relative rounded-2xl border border-[#061A40]/10 bg-white p-8 shadow-xl">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 w-3/4 rounded bg-[#061A40]/10" />
                    <div className="h-4 w-full rounded bg-[#061A40]/5" />
                    <div className="h-4 w-5/6 rounded bg-[#061A40]/5" />
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <div className="h-20 rounded bg-[#E85D04]/10" />
                      <div className="h-20 rounded bg-[#061A40]/10" />
                      <div className="h-20 rounded bg-[#E85D04]/10" />
                    </div>
                    <div className="h-32 rounded bg-gradient-to-r from-[#061A40]/5 to-[#E85D04]/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Default layout for others */}
      {!isEducation && !isFintech && !isSaas && (
        <section className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-[#E85D04]/10 px-4 py-1.5 text-sm font-semibold text-[#E85D04]">
                Overview
              </div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-[#061A40] md:text-5xl">
                {industry.overviewTitle}
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
      )}

      {/* Features - Different grid layouts */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#061A40] md:text-4xl">
              What We Deliver
            </h2>
            <p className="mt-4 text-lg text-[#5A6B8C]">
              Tailored solutions for {industry.name.toLowerCase()}
            </p>
          </div>

          {isEcommerce || isLogistics ? (
            <div className="grid gap-6 md:grid-cols-2">
              {industry.features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-[#061A40]/10 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-[#E85D04]/5 transition-transform group-hover:scale-150" />
                  <div className="relative">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#E85D04] to-[#c94f03] text-white">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#061A40]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#5A6B8C]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : isHealthcare || isRealEstate || isProfessional ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {industry.features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#061A40]/10 bg-white p-6 shadow-sm transition-all hover:border-[#E85D04]/50 hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E85D04]/10">
                    <div className="h-2 w-2 rounded-full bg-[#E85D04]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#061A40]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#5A6B8C]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          ) : isStartups ? (
            <div className="grid gap-8 md:grid-cols-2">
              {industry.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-6 rounded-2xl border border-[#061A40]/10 bg-gradient-to-br from-white to-[#F5F9FF] p-8 shadow-sm"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#061A40] text-white">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#061A40]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 leading-7 text-[#5A6B8C]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {industry.features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#061A40]/10 bg-white p-6 shadow-sm"
                >
                  {/* removed accent line */}
                  <h3 className="text-lg font-semibold text-[#061A40]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#5A6B8C]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA - Different styles */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          {isFintech || isHealthcare ? (
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#061A40] to-[#0a1f4d] p-12 text-center text-white">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E85D04]/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#E85D04]/10 blur-3xl" />
              <div className="relative">
                <h2 className="font-serif text-3xl font-bold md:text-4xl">
                  {industry.ctaTitle}
                </h2>
                <p className="mt-4 text-lg text-white/80">
                  {industry.ctaSubtitle}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className={primaryButton}>
                    Get Started Today
                  </Link>
                  <Link
                    href="/industries"
                    className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Back to Industries
                  </Link>
                </div>
              </div>
            </div>
          ) : isStartups ? (
            <div className="rounded-2xl border-2 border-[#E85D04] bg-white p-12 text-center shadow-lg">
              <h2 className="font-serif text-3xl font-bold text-[#061A40] md:text-4xl">
                {industry.ctaTitle}
              </h2>
              <p className="mt-4 text-lg text-[#5A6B8C]">
                {industry.ctaSubtitle}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className={primaryButton}>
                  Let&apos;s Build Together
                </Link>
                <Link href="/industries" className={secondaryButton}>
                  View All Industries
                </Link>
              </div>
            </div>
          ) : (
            <div className="rounded-xl bg-[#061A40] p-10 text-center text-white">
              <h2 className="font-serif text-2xl font-bold md:text-3xl">
                {industry.ctaTitle}
              </h2>
              <p className="mt-3 text-white/80">{industry.ctaSubtitle}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className={primaryButton}>
                  Start a Project
                </Link>
                <Link href="/industries" className={secondaryButton}>
                  View All Industries
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
