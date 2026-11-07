import Link from 'next/link'

import CountUp from '@/components/CountUp'

const PHOTO_A = '/images/hero-team-1.webp'
const PHOTO_B = '/images/hero-team-2.webp'

const statLabel = 'text-[13px] font-medium leading-tight text-[#5A6B8C]'
const statValue = 'mt-1 text-[34px] font-medium leading-none text-[#061A40]'

const collageLabel = '[font-size:1.15cqw] font-medium leading-tight text-[#5A6B8C]'
const collageValue =
  'mt-[0.6cqw] [font-size:3.6cqw] font-medium leading-none text-[#061A40]'

function Photo({
  className,
  src,
  alt,
}: {
  className: string
  src: string
  alt: string
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}

function Stat({
  className,
  label,
  value,
  suffix,
  labelClassName,
  valueClassName,
}: {
  className: string
  label: string
  value: number
  suffix?: string
  labelClassName: string
  valueClassName: string
}) {
  return (
    <div className={`flex flex-col justify-end ${className}`}>
      <span className={labelClassName}>{label}</span>
      <CountUp
        value={value}
        suffix={suffix}
        className={`inline-block ${valueClassName}`}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-[#F5F9FF] to-[#E85D04]/10 pb-24">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute -left-20 top-0 -z-10 h-[360px] w-[360px] rounded-full bg-[#E85D04]/[0.14] blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-1/2 -z-10 h-[380px] w-[380px] rounded-full bg-[#5A6B8C]/[0.14] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 -z-10 h-[320px] w-[320px] rounded-full bg-[#061A40]/[0.13] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#E85D04]/[0.15] blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-[#5A6B8C]/10 blur-3xl" />

      {/* Headline */}
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-0 pt-8 md:px-10 md:pt-10 lg:px-12 lg:pt-12">
        <div className="relative z-10 mx-auto flex max-w-[620px] flex-col items-center text-center">
          <span className="rounded-full bg-[#E85D04]/15 px-4 py-1.5 text-[11px] font-medium text-[#E85D04]">
            Software Engineering &amp; AI Automation
          </span>

          <h1 className="mt-6 text-[32px] font-medium leading-[1.25] tracking-[-0.5px] text-[#061A40] sm:text-[40px] lg:text-[48px]">
            We Engineer Software That
            <span className="block">Moves Businesses Forward.</span>
          </h1>

          <p className="mt-5 max-w-md text-[13px] leading-6 text-[#5A6B8C]">
            We build scalable digital products, AI systems, automation and
            digital platforms for organizations that want to turn ideas and
            business challenges into reliable software.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center gap-3 rounded-[8px] bg-[#E85D04] px-6 py-3 text-[13px] font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#061A40] hover:shadow-lg"
            >
              Start a Project<span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex cursor-pointer items-center gap-3 rounded-[8px] border border-[#E85D04] px-6 py-3 text-[13px] font-semibold text-[#E85D04] transition duration-300 hover:-translate-y-1 hover:bg-[#E85D04] hover:text-white"
            >
              Explore Our Work<span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile / tablet collage */}
      <div className="relative z-0 mt-10 px-4 pb-0 sm:px-6 lg:hidden">
        <div className="mx-auto grid max-w-[760px] grid-flow-dense grid-cols-2 gap-3 md:grid-cols-3">
          <Photo
            className="aspect-square rounded-tl-[48px]"
            src={PHOTO_A}
            alt="Team member working on a laptop"
          />
          <Stat
            className="aspect-square rounded-tr-[48px] bg-[#5A6B8C]/20 p-4"
            label="Projects delivered"
            value={120}
            suffix="+"
            labelClassName={statLabel}
            valueClassName={statValue}
          />
          <Photo
            className="col-span-2 aspect-[2/1] rounded-tr-[56px]"
            src={PHOTO_B}
            alt="Team meeting in the office"
          />
          <Photo
            className="aspect-square rounded-tr-[48px]"
            src={PHOTO_A}
            alt="Smiling team member"
          />
          <Stat
            className="aspect-square rounded-tr-[48px] bg-[#E85D04]/20 p-4"
            label="Clients served"
            value={40}
            suffix="+"
            labelClassName={statLabel}
            valueClassName={statValue}
          />
          <Photo
            className="aspect-square rounded-tr-[56px]"
            src={PHOTO_B}
            alt="Two colleagues working together"
          />
          <Stat
            className="aspect-square rounded-tl-[48px] bg-[#061A40]/10 p-4"
            label="Industries"
            value={12}
            labelClassName={statLabel}
            valueClassName={statValue}
          />
          <Photo
            className="aspect-square rounded-tr-[48px]"
            src={PHOTO_A}
            alt="Team discussion in the office"
          />
          <Stat
            className="aspect-square rounded-tl-[48px] bg-[#E85D04]/10 p-4"
            label="Client retention"
            value={98}
            suffix="%"
            labelClassName={statLabel}
            valueClassName={statValue}
          />
          <Photo
            className="col-span-2 aspect-[2/1] rounded-tr-[56px]"
            src={PHOTO_A}
            alt="Developers collaborating at a desk"
          />
          <Photo
            className="aspect-square rounded-tl-[48px]"
            src={PHOTO_B}
            alt="Designer portrait"
          />
          <Photo
            className="aspect-square rounded-tl-[48px]"
            src={PHOTO_B}
            alt="Senior engineer at work"
          />
          <Photo
            className="aspect-square rounded-tr-[48px]"
            src={PHOTO_A}
            alt="Developer with a laptop"
          />
        </div>
      </div>

      {/* Desktop collage — percentage positioned, sized with container query units */}
      <div className="relative z-0 hidden px-6 lg:-mt-12 lg:block">
        <div className="mx-auto max-w-[1900px] [container-type:inline-size]">
          <div className="relative aspect-[1848/587] w-full">
            <Photo
              className="absolute left-0 top-0 h-[59.28%] w-[12.12%] rounded-tl-[47%_30%]"
              src={PHOTO_A}
              alt="Team member working on a laptop"
            />
            <Stat
              className="absolute left-[13.42%] top-[13.63%] h-[45.66%] w-[10.61%] rounded-tl-[10%_7%] rounded-tr-[64%_47%] bg-[#5A6B8C]/20 pb-[1.4cqw] pl-[1cqw] pr-[0.6cqw]"
              label="Projects delivered"
              value={120}
              suffix="+"
              labelClassName={collageLabel}
              valueClassName={collageValue}
            />
            <Photo
              className="absolute left-0 top-[63.54%] h-[36.46%] w-[24.19%] rounded-tr-[28%_58%]"
              src={PHOTO_B}
              alt="Team meeting in the office"
            />
            <Photo
              className="absolute left-[25.81%] top-[25.04%] h-[28.62%] w-[10.88%] rounded-tr-[41%_49%]"
              src={PHOTO_A}
              alt="Smiling team member"
            />
            <Stat
              className="absolute left-[25.81%] top-[57.75%] h-[42.25%] w-[10.88%] rounded-tl-[10%_8%] rounded-tr-[65%_52%] bg-[#E85D04]/20 pb-[2cqw] pl-[1.7cqw] pr-[0.6cqw]"
              label="Clients served"
              value={40}
              suffix="+"
              labelClassName={collageLabel}
              valueClassName={collageValue}
            />
            <Photo
              className="absolute left-[38.31%] top-[25.89%] h-[74.11%] w-[12.55%] rounded-tr-[73%_39%]"
              src={PHOTO_B}
              alt="Two colleagues working together"
            />
            <Stat
              className="absolute left-[52.49%] top-[32.54%] h-[43.1%] w-[10.88%] rounded-tl-[50%_40%] bg-[#061A40]/10 pb-[2.4cqw] pl-[1cqw] pr-[0.6cqw]"
              label="Industries"
              value={12}
              labelClassName={collageLabel}
              valueClassName={collageValue}
            />
            <Photo
              className="absolute left-[52.49%] top-[79.73%] h-[20.27%] w-[10.88%] rounded-tr-[45%_76%]"
              src={PHOTO_A}
              alt="Team discussion in the office"
            />
            <Photo
              className="absolute left-[64.99%] top-[23.51%] h-[30.66%] w-[11.63%] rounded-tl-[40%_47%]"
              src={PHOTO_B}
              alt="Designer portrait"
            />
            <Stat
              className="absolute left-[77.92%] top-[8.18%] h-[46%] w-[9.42%] rounded-tl-[60%_39%] bg-[#E85D04]/10 pb-[1.5cqw] pl-[0.8cqw] pr-[0.4cqw]"
              label="Client retention"
              value={98}
              suffix="%"
              labelClassName={collageLabel}
              valueClassName={collageValue}
            />
            <Photo
              className="absolute left-[64.99%] top-[58.26%] h-[41.74%] w-[22.35%] rounded-tr-[31%_53%]"
              src={PHOTO_A}
              alt="Developers collaborating at a desk"
            />
            <Photo
              className="absolute left-[88.96%] top-[3.92%] h-[57.41%] w-[11.04%] rounded-tl-[49%_30%]"
              src={PHOTO_B}
              alt="Senior engineer at work"
            />
            <Photo
              className="absolute left-[88.96%] top-[65.42%] h-[34.58%] w-[11.04%] rounded-tr-[53%_53%]"
              src={PHOTO_A}
              alt="Developer with a laptop"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
