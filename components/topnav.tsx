'use client'

import Image from 'next/image'
import Link from 'next/link'
import StartProjectButton from '@/components/startprojectmodal'
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

const navCtaClass =
  'inline-flex items-center justify-center transition bg-primary text-text border border-text rounded-full px-5 py-2.5 text-base font-bold shadow-sm hover:bg-text hover:text-primary hover:bg-[#061A40] hover:text-white hover:transition-colors hover:duration-1000 hover:ease-in-out'

export default function TopNav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href ||
    (href !== '/' && pathname.startsWith(href + '/'))

  return (
    <header className="relative bg-background/80 backdrop-blur-md text-text">
      <div className="mx-auto max-w-none px-6 flex w-full items-center gap-4 h-20">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 font-bold tracking-tight text-2xl "
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Black Origin"
            width={430}
            height={512}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 md:flex md:flex-1 md:justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`text-sm font-medium transition rounded-full px-3 py-1.5 ${
                isActive(link.href)
                  ? 'bg-text/10 font-semibold'
                  : 'opacity-80 hover:opacity-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <StartProjectButton className={`${navCtaClass} hidden md:inline-flex`}>
          Start a Project
        </StartProjectButton>

        {/* Mobile menu */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 cursor-pointer select-none list-none items-center justify-center rounded-full hover:bg-text/10 [&::-webkit-details-marker]:hidden md:hidden"
        >
          <span className="text-2xl leading-none">{menuOpen ? '×' : '☰'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full z-50 flex max-h-[80vh] flex-col gap-1 overflow-y-auto border-b px-6 py-4 shadow-lg bg-background text-text border-text/10 md:hidden">
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

          <StartProjectButton className={`${navCtaClass} mt-2 w-full`}>
            Start a Project
          </StartProjectButton>
        </div>
      )}
    </header>
  )
}
