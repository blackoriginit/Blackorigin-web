'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  /** Final number to count up to */
  value: number
  /** Rendered right after the number, e.g. "+" or "%" */
  suffix?: string
  /** Animation length in ms */
  duration?: number
  className?: string
}

/**
 * Counts from 0 to `value` once the element scrolls into view.
 * Screen readers get the final value immediately, the visual number is
 * aria-hidden so it is never announced mid-animation.
 */
export default function CountUp({
  value,
  suffix = '',
  duration = 2400,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setCurrent(value)
      return
    }

    let frame = 0
    let startedAt: number | null = null

    const step = (now: number) => {
      if (startedAt === null) startedAt = now

      const progress = Math.min((now - startedAt) / duration, 1)
      // ease-out cubic, same feel as the live site
      const eased = 1 - Math.pow(1 - progress, 3)

      setCurrent(Math.round(eased * value))

      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return
        frame = requestAnimationFrame(step)
        observer.disconnect()
      },
      { threshold: 0.3 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration])

  return (
    <span className={className}>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
      <span aria-hidden="true" className="tabular-nums">
        {current}
        {suffix}
      </span>
    </span>
  )
}
