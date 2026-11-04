import Hero from '@/components/home/Hero'
import TrustedBy from '@/components/home/TrustedBy'

/**
 * Home page assembly.
 *
 * Section order follows the live site:
 *   1. Hero                    → components/home/Hero.tsx
 *   2. Trusted by              → components/home/TrustedBy.tsx
 *   3. Services "What We Do"
 *   4. About us                → components/home/AboutUs.tsx   (branch: kashpia)
 *   5. Our process             → components/OurProcess.tsx      (branch: sunaina)
 *   6. Working stack
 *   7. Case studies
 *   8. Testimonials
 *   9. Final CTA
 *
 * Sections 3 and 6-9 are owned by other teammates. Import and place them here
 * as their branches land — the file is intentionally a thin assembly layer.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />

      {/* 3. Services — "What We Do" */}
      {/* 4. <AboutUs /> */}
      {/* 5. <OurProcess /> */}
      {/* 6. Working stack */}
      {/* 7. Case studies */}
      {/* 8. Testimonials */}
      {/* 9. Final CTA */}
    </>
  )
}
