'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about-us' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/insights' },
  { name: 'Industries', href: '/industries' },
  { name: 'Careers', href: '/careers' },
]

export default function TopNav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#061A40]/10 bg-[#F5F9FF]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-none items-center justify-between px-6">
        {/* Brand */}
        <Link
          href="/"
          className="shrink-0 text-2xl font-bold tracking-tight text-[#061A40]"
          onClick={() => setMenuOpen(false)}
        >
          Black Origin<span className="text-[#E85D04]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href + '/'))

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#061A40] text-white'
                    : 'text-[#061A40] hover:bg-[#061A40]/10'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-[#E85D04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c94f03] lg:inline-flex"
        >
          Start a Project <span className="ml-2">→</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-[#061A40] hover:bg-[#061A40]/10 lg:hidden"
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[#061A40]/10 bg-[#F5F9FF] px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive
                      ? 'bg-[#061A40] text-white'
                      : 'text-[#061A40] hover:bg-[#061A40]/10'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[#E85D04] px-5 py-3 text-center font-semibold text-white hover:bg-[#c94f03]"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
