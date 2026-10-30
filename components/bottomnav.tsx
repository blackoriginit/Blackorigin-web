import Link from 'next/link'

const companyLinks = [
  { name: 'About', href: '/about-us' },
  { name: 'Industries', href: '/industries' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/insights' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

const serviceLinks = [
  'Custom Software Development',
  'Web Application Development',
  'Mobile Application Development',
  'AI & Automation',
  'SaaS Development',
  'API & Backend Engineering',
  'UI/UX Engineering',
  'Software Maintenance & Support',
]

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']

export default function BottomNav() {
  return (
    <footer className="bg-[#061A40] text-white">
      <div className="mx-auto max-w-none px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Black Origin<span className="text-[#E85D04]">.</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-white/65">
              Software Engineering & AI Automation
            </p>

            <div className="mt-6 flex gap-4 text-sm">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-[#E85D04]"
              >
                LinkedIn
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-[#E85D04]"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-semibold">Company</h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-[#E85D04]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-semibold">Services</h3>

            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service} className="text-sm text-white/65">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-semibold">Contact</h3>

            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <a
                  href="mailto:hr@blackoriginit.com"
                  className="transition-colors hover:text-[#E85D04]"
                >
                  hr@blackoriginit.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.blackoriginit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#E85D04]"
                >
                  www.blackoriginit.com
                </a>
              </li>

              <li>Bangladesh</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-5 font-semibold">Legal</h3>

            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link} className="text-sm text-white/65">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/15 pt-6">
          <p className="text-center text-sm text-white/55">
            © 2026 Black Origin IT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
