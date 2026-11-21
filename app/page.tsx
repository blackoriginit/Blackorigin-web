import Hero from '@/components/home/Hero'
import Testimonials from '@/components/home/Testimonials'
import TrustedBy from '@/components/home/TrustedBy'
import AboutUs from '@/components/home/AboutUs'
import WorkingStack from '@/components/home/WorkingStack'
import OurProcess from '@/components/OurProcess'
import Services from '@/components/Service/service'
import ProjectCTA from '@/components/projectcta'

/**
 * Home page assembly.
 *
 * Section order follows the live site:
 *   1. Hero                    - components/home/Hero.tsx
 *   2. Trusted by              - components/home/TrustedBy.tsx
 *   3. Services "What We Do"   - components/Service/service.tsx   (branch: nadia)
 *   4. About us                - components/home/AboutUs.tsx       (branch: kashpia)
 *   5. Our process             - components/OurProcess.tsx         (branch: sunaina)
 *   6. Working stack           - components/home/WorkingStack.tsx  (branch: kashpia)
 *   7. Case studies            - no home section yet; /case-studies (branch: tasfia)
 *   8. Testimonials            - components/home/Testimonials.tsx  (branch: tani)
 *   9. Final CTA               - components/projectcta.tsx         (branch: aziza)
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />

      {/* 3. Services — "What We Do" */}
      <Services />
      <AboutUs />
      <OurProcess />
      <WorkingStack />
      {/* 7. Case studies — full index at /case-studies (branch: tasfia) */}
      <Testimonials />
      <ProjectCTA />
    </>
  )
}
