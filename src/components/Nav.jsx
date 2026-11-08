import { useEffect, useState } from 'react'
import { site } from '../site.js'
import { useOpenStatus } from '../hooks/useOpenStatus.js'

const LINKS = [
  { href: '#griddle-board', label: 'Griddle board' },
  { href: '#late-night', label: 'Late nights' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Visit' },
]

export default function Nav() {
  const [settled, setSettled] = useState(false)
  const { isOpen } = useOpenStatus()

  useEffect(() => {
    const onScroll = () => setSettled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        settled ? 'bg-choc-950/92 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <a
        href="#griddle-board"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-gold-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-choc-900"
      >
        Skip to the menu
      </a>

      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <a href="#top" className="flex items-center gap-2.5 text-cream-100">
          <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0" aria-hidden="true">
            <ellipse cx="32" cy="46" rx="22" ry="7" fill="#C97E22" />
            <ellipse cx="32" cy="38" rx="23" ry="7.5" fill="#E9A33A" />
            <ellipse cx="32" cy="30" rx="24" ry="8" fill="#F2BC55" />
            <circle cx="32" cy="20" r="5" fill="#FFD66B" />
          </svg>
          <span className="font-display text-base leading-[0.9] tracking-tight sm:text-lg">
            Uncle Peter&apos;s
            <span className="block text-[0.68em] font-semibold text-gold-300">
              Pancakes, {site.area}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-semibold md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-cream-200 transition-colors hover:text-gold-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="flex items-center gap-2 rounded-full border border-cream-100/20 bg-choc-800/70 px-3 py-1.5 text-xs font-semibold">
          <span
            className={`h-2 w-2 shrink-0 rounded-full ${
              isOpen ? 'bg-open' : 'bg-gold-500'
            }`}
            aria-hidden="true"
          />
          {isOpen ? 'Open now' : 'Closed'}
          <span className="hidden sm:inline">&nbsp;&middot; till 1 AM</span>
        </p>
      </nav>
    </header>
  )
}
