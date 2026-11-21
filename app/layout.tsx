import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'

import TopNav from '@/components/topnav'
import BottomNav from '@/components/bottomnav'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Black Origin',
  description: 'Software Engineering & AI Automation',
}

const themeInitScript = `
(function () {
  try {
    var preference = localStorage.getItem('blackorigin-theme') || 'system';
    var dark =
      preference === 'dark' ||
      (preference === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    var root = document.documentElement;
    root.dataset.theme = dark ? 'dark' : 'light';
    root.dataset.themePreference = preference;
  } catch (error) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <TopNav />

        <div className="flex-1">{children}</div>

        <BottomNav />
      </body>
    </html>
  )
}