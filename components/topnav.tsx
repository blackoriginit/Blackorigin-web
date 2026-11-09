'use client'

import Image from 'next/image'
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
        {/* Brand: put your red "B" emblem at /public/logo.png */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 text-2xl font-bold tracking-tight text-[#061A40]"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Black Origin logo"
            width={56}
            height={56}
            className="h-14 w-auto"
            priority
          />
          <span>Black Origin</span>
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
                className={`rounded-full px-4 py-2 text-sm font-medium text-[#061A40] transition-colors ${
                  isActive ? 'bg-[#061A40]/10' : 'hover:bg-[#061A40]/5'
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
          className="hidden rounded-lg bg-[#E85D04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c94f03] lg:inline-flex"
        >
          Start a Project
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
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href + '/'))

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium text-[#061A40] ${
                    isActive ? 'bg-[#061A40]/10' : 'hover:bg-[#061A40]/5'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-[#E85D04] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#c94f03]"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
