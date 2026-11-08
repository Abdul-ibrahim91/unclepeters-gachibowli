import { useEffect, useState } from 'react'
import { site, whatsappUrl } from '../site.js'
import { useOpenStatus } from '../hooks/useOpenStatus.js'
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx'

/**
 * Bottom action bar. It stays out of the way until the hero has scrolled past,
 * then holds the two things a hungry visitor actually wants.
 */
export default function StickyActions() {
  const [shown, setShown] = useState(false)
  const { isOpen, note } = useOpenStatus()

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-gold-400/25 bg-choc-950/95 backdrop-blur-md transition-transform duration-300 ease-out ${
        shown ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-auto flex max-w-3xl items-center gap-2.5 px-3 py-2.5 sm:gap-4 sm:px-6">
        <p className="hidden min-w-0 flex-1 text-sm leading-tight sm:block">
          <span className="flex items-center gap-2 font-display text-base text-cream-50">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${isOpen ? 'bg-open' : 'bg-gold-500'}`}
              aria-hidden="true"
            />
            {isOpen ? 'Open now' : 'Closed'}
          </span>
          <span className="block truncate text-cream-200/70">{note}</span>
        </p>

        <a
          href={site.phoneHref}
          className="flex flex-none items-center justify-center gap-1.5 whitespace-nowrap rounded-full border-2 border-cream-100/25 px-3.5 py-3 font-display text-[0.9rem] text-cream-50 transition-colors duration-200 hover:border-gold-300 hover:text-gold-300 sm:flex-none sm:px-5 sm:text-base"
        >
          <PhoneIcon className="text-[1.2em]" />
          Call now
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold-400 px-3 py-3 font-display text-[0.9rem] text-choc-900 transition-colors duration-200 hover:bg-gold-300 sm:flex-none sm:px-5 sm:text-base"
        >
          <WhatsAppIcon className="text-[1.25em]" />
          Order via WhatsApp
        </a>
      </div>
    </div>
  )
}
