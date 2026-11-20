'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'

type Theme = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'blackorigin-theme'
const THEME_EVENT = 'blackorigin-theme-change'

const options = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'system', label: 'System', Icon: Monitor },
] as const

function subscribe(callback: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener('change', callback)
  window.addEventListener(THEME_EVENT, callback)
  window.addEventListener('storage', callback)
  return () => {
    media.removeEventListener('change', callback)
    window.removeEventListener(THEME_EVENT, callback)
    window.removeEventListener('storage', callback)
  }
}

function getSnapshot(): Theme {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
}

function getServerSnapshot(): Theme {
  return 'system'
}

export default function ThemeToggle({
  variant = 'button',
  className = '',
}: {
  variant?: 'button' | 'menu'
  className?: string
}) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      const isDark = theme === 'dark' || (theme === 'system' && media.matches)
      document.documentElement.classList.toggle('dark', isDark)
      document.documentElement.dataset.theme = theme
    }

    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [theme])

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  function choose(next: Theme) {
    window.localStorage.setItem(STORAGE_KEY, next)
    window.dispatchEvent(new Event(THEME_EVENT))
    setOpen(false)
  }

  const current = options.find((option) => option.value === theme) ?? options[2]
  const CurrentIcon = current.Icon

  if (variant === 'menu') {
    return (
      <div ref={wrapRef} className={`grid grid-cols-3 gap-2 ${className}`}>
        {options.map(({ value, label, Icon }) => (
          <button
            key={value}
            type="button"
            onClick={() => choose(value)}
            aria-pressed={theme === value}
            className={`flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-medium transition ${
              theme === value
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-text/15 text-text hover:bg-text/5'
            }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={`Theme: ${current.label}. Change theme`}
        aria-expanded={open}
        title={`Theme: ${current.label}`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-text/15 bg-surface/60 text-text transition hover:bg-text/10"
      >
        <CurrentIcon size={16} strokeWidth={2} />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[60] mt-2 w-40 overflow-hidden rounded-xl border border-text/10 bg-surface p-1 shadow-lg">
          {options.map(({ value, label, Icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => choose(value)}
              aria-pressed={theme === value}
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                theme === value
                  ? 'bg-primary/10 font-semibold text-primary'
                  : 'text-text hover:bg-text/5'
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
