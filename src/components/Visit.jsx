import { site, whatsappUrl } from '../site.js'
import BatterEdge from './BatterEdge.jsx'
import LocationCard from './LocationCard.jsx'
import { PhoneIcon, PinIcon, WhatsAppIcon } from './Icons.jsx'

const NEARBY = [
  'Two minutes from the Gachibowli flyover',
  'Walkable from IIIT-H and the University of Hyderabad gate',
  'Ten minutes from the Financial District',
]

export default function Visit() {
  return (
    <section id="visit" className="band-choc relative">
      <BatterEdge color="var(--color-cream-100)" />
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 md:pb-20 md:pt-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2 data-reveal className="text-section max-w-[14ch] text-cream-50">
              Find the stack
            </h2>

            <address
              data-reveal
              style={{ '--reveal-delay': '80ms' }}
              className="mt-6 not-italic text-lg text-cream-200/90"
            >
              <span className="flex gap-3">
                <PinIcon className="mt-1 shrink-0 text-[1.4rem] text-gold-400" />
                <span>
                  {site.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </span>
            </address>

            <ul
              data-reveal
              style={{ '--reveal-delay': '140ms' }}
              className="mt-6 space-y-2 border-l-2 border-gold-400/35 pl-5 text-[0.975rem] text-cream-200/75"
            >
              {NEARBY.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <div
              data-reveal
              style={{ '--reveal-delay': '200ms' }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-6 py-3.5 font-display text-lg text-choc-900 shadow-plate transition duration-300 ease-out hover:bg-gold-300 motion-safe:hover:scale-[1.045] motion-safe:active:scale-[0.985]"
              >
                <WhatsAppIcon className="text-[1.25em]" />
                Order via WhatsApp
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2.5 rounded-full border border-cream-100/30 px-6 py-3.5 font-display text-lg text-cream-50 transition duration-300 ease-out hover:border-gold-300 hover:text-gold-300 motion-safe:hover:scale-[1.045] motion-safe:active:scale-[0.985]"
              >
                <PhoneIcon className="text-[1.15em]" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div data-reveal="right" className="md:pt-4">
            <LocationCard />
          </div>
        </div>
      </div>
    </section>
  )
}
