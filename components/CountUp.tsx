'use client'

import { useEffect, useRef } from 'react'

type CountUpProps = {
  /** Final number to count up to */
  value: number
  /** Rendered right after the number, e.g. "+" or "%" */
  suffix?: string
  /** Additional classes for the outer wrapper (size, colour, spacing) */
  className?: string
}

/**
 * Count-up animation identical to the live CMS.
 *
 * The animated digits are produced with a CSS custom property registered via
 * `@property` and a CSS counter (see `.ec-cu` in globals.css). The final value
 * is always present in an `sr-only` span for screen readers and crawlers.
 * The animation only starts once the number scrolls into view.
 */
export default function CountUp({
  value,
  suffix = '',
  className = '',
}: CountUpProps) {
  const numberRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = numberRef.current
    if (!el) return

    // If IntersectionObserver is unavailable, just let the CSS animation run.
    if (!('IntersectionObserver' in window)) {
      el.style.animationPlayState = 'running'
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return
        el.style.animationPlayState = 'running'
        observer.disconnect()
      },
      { threshold: 0.3 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <span className={`inline-block tabular-nums ${className}`}>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
      <span
        ref={numberRef}
        className="ec-cu"
        aria-hidden="true"
        style={{ '--ec-c': value } as React.CSSProperties}
      />
      {suffix}
    </span>
  )
}
