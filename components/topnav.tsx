'use client'

import Image from 'next/image'
import Link from 'next/link'
import StartProjectButton from '@/components/startprojectmodal'
import ThemeToggle from '@/components/ThemeToggle'
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

const navCtaClass = 'bo-btn bo-btn-primary shrink-0'

export default function TopNav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href ||
    (href !== '/' && pathname.startsWith(href + '/'))

  return (
    <header className="sticky top-0 z-50 border-b border-text/10 bg-background/85 text-text backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-none items-center gap-2 px-4 lg:gap-4 lg:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 font-bold tracking-tight text-2xl "
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Black Origin"
            width={640}
            height={150}
            className="h-8 w-auto sm:h-9 lg:h-11 xl:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex lg:flex-1 lg:justify-center xl:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`whitespace-nowrap rounded-full px-2 py-1.5 text-sm font-medium transition xl:px-3 ${
                isActive(link.href)
                  ? 'bg-text/10 font-semibold'
                  : 'opacity-80 hover:opacity-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <ThemeToggle className="hidden lg:block" />

        <StartProjectButton className={`${navCtaClass} hidden lg:inline-flex`}>
          Start a Project
        </StartProjectButton>

        {/* Mobile menu */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 cursor-pointer select-none list-none items-center justify-center rounded-full hover:bg-text/10 [&::-webkit-details-marker]:hidden lg:hidden"
        >
          <span className="text-2xl leading-none">{menuOpen ? '×' : '☰'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full z-50 flex max-h-[80vh] flex-col gap-1 overflow-y-auto border-b px-6 py-4 shadow-lg bg-background text-text border-text/10 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium transition py-2 ${
                isActive(link.href)
                  ? 'rounded-lg bg-text/10 px-3 font-semibold'
                  : 'opacity-80 hover:opacity-100'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <ThemeToggle variant="menu" className="mt-2" />

          <StartProjectButton className={`${navCtaClass} mt-2 w-full`}>
            Start a Project
          </StartProjectButton>
        </div>
      )}
    </header>
  )
}
