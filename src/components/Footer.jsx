import { site, whatsappUrl } from '../site.js'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="sticky-pad bg-choc-950 text-cream-200/75">
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-8 border-b border-cream-100/10 pb-10">
          <div>
            <p className="font-display text-2xl text-cream-50">
              Uncle Peter&apos;s Pancakes
              <span className="block text-base text-gold-300">
                {site.area}, {site.city}
              </span>
            </p>
            <p className="mt-4 max-w-[34ch] text-[0.95rem]">
              Pancakes, waffles and cold brew from 9 AM to 1 AM, every day of the week.
            </p>
          </div>

          <nav aria-label="Footer" className="grid gap-2 text-[0.95rem] font-semibold">
            <a className="hover:text-gold-300" href="#griddle-board">
              Griddle board
            </a>
            <a className="hover:text-gold-300" href="#late-night">
              Late nights
            </a>
            <a className="hover:text-gold-300" href="#reviews">
              Reviews
            </a>
            <a className="hover:text-gold-300" href="#visit">
              Visit
            </a>
          </nav>

          <div className="grid gap-2 text-[0.95rem] font-semibold">
            <a className="hover:text-gold-300" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <a
              className="hover:text-gold-300"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp orders
            </a>
            <a
              className="hover:text-gold-300"
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
            </a>
          </div>
        </div>

        <p className="py-6 text-xs">
          &copy; {YEAR} Uncle Peter&apos;s Pancakes, {site.area}. Rating and review count shown as
          listed on Google.
        </p>
      </div>
    </footer>
  )
}
