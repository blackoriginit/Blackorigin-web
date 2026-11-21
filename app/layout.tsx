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

  // Some browser extensions (notably Urban VPN Proxy) stamp marker
  // attributes onto every element before React hydrates. React then reports
  // a false hydration mismatch because those attributes are in the DOM but
  // were never rendered by us. Remove them before hydration begins.
  (function () {
    var known = ['bis_skin_checked', 'bis_register', 'bis_label', 'bis_size'];
    function injected(name) {
      return known.indexOf(name) !== -1 || name.indexOf('__processed_') === 0;
    }
    function clean(el) {
      if (!el || !el.attributes) return;
      for (var i = el.attributes.length - 1; i >= 0; i--) {
        var name = el.attributes[i].name;
        if (injected(name)) el.removeAttribute(name);
      }
    }
    function sweep(root) {
      clean(root);
      var nodes = root.getElementsByTagName('*');
      for (var i = 0; i < nodes.length; i++) clean(nodes[i]);
    }
    function onReady() {
      sweep(document.documentElement);
      setTimeout(function () {
        sweep(document.documentElement);
      }, 0);
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onReady, { once: true });
    } else {
      onReady();
    }
    // Extensions also stamp nodes added later (route changes, menus, etc.).
    var observer = new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        if (record.type === 'attributes') {
          if (injected(record.attributeName)) clean(record.target);
          continue;
        }
        var added = record.addedNodes;
        if (!added) continue;
        for (var j = 0; j < added.length; j++) {
          if (added[j].nodeType === 1) sweep(added[j]);
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  })();
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