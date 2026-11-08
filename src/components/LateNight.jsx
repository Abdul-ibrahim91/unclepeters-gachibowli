import { site, whatsappUrl } from '../site.js'
import { useOpenStatus } from '../hooks/useOpenStatus.js'
import BatterEdge from './BatterEdge.jsx'
import { ClockIcon, MoonIcon, PhoneIcon } from './Icons.jsx'

// 9 AM to 1 AM, written on a single 16-hour shift line
const TICKS = [
  { hour: 9, label: '9 AM' },
  { hour: 13, label: '1 PM' },
  { hour: 17, label: '5 PM' },
  { hour: 21, label: '9 PM', keepOnMobile: true },
  { hour: 25, label: '1 AM' },
]

export default function LateNight() {
  const { isOpen, progress, note } = useOpenStatus()
  const span = site.closesHour - site.opensHour

  return (
    <section id="late-night" className="relative bg-gold-400 text-choc-900">
      <BatterEdge color="var(--color-choc-900)" />
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 md:pb-20 md:pt-14">
        <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-end md:gap-14">
          <div>
            <h2 data-reveal className="text-section max-w-[16ch]">
              The lights stay on till 1 AM
            </h2>
            <p
              data-reveal
              style={{ '--reveal-delay': '90ms' }}
              className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-choc-800"
            >
              Seven nights a week. Walk in from a late shift in the Financial District, a film
              that ran long, or a hostel kitchen that has nothing in it — the iron is hot and the
              batter is fresh.
            </p>
          </div>

          <dl data-reveal="right" className="grid grid-cols-2 gap-x-6 gap-y-5 sm:gap-x-10">
            <div>
              <dt className="flex items-center gap-1.5 text-sm font-bold text-choc-700">
                <ClockIcon className="text-[1.1em]" />
                Every day
              </dt>
              <dd className="mt-1 font-display text-2xl leading-tight">9 AM &ndash; 1 AM</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-sm font-bold text-choc-700">
                <MoonIcon className="text-[1.1em]" />
                Last orders
              </dt>
              <dd className="mt-1 font-display text-2xl leading-tight">12:45 AM</dd>
            </div>
          </dl>
        </div>

        {/* live shift line */}
        <div data-reveal style={{ '--reveal-delay': '140ms' }} className="mt-12">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="flex items-center gap-2 font-display text-lg">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  isOpen ? 'bg-open ring-3 ring-open/30' : 'bg-choc-700'
                }`}
                aria-hidden="true"
              />
              {isOpen ? 'Open right now' : 'Closed right now'}
            </p>
            <p className="text-sm font-semibold text-choc-700">{note}</p>
          </div>

          <div
            className="relative mt-4 h-4 rounded-full bg-choc-900/15"
            role="img"
            aria-label={`Today's service runs from 9 AM to 1 AM. ${note}.`}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-choc-900/75"
              style={{ width: `${(isOpen ? progress : 0) * 100}%` }}
            />
            {isOpen && (
              <span
                className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-choc-900 bg-cream-50"
                style={{ left: `${progress * 100}%` }}
                aria-hidden="true"
              />
            )}
          </div>

          <div className="relative mt-2 h-5 text-xs font-bold text-choc-700" aria-hidden="true">
            {TICKS.map((tick) => {
              const pct = ((tick.hour - site.opensHour) / span) * 100
              const isEdge = pct === 0 || pct === 100
              const style = isEdge
                ? pct === 0
                  ? { left: 0 }
                  : { right: 0 }
                : { left: `${pct}%`, transform: 'translateX(-50%)' }
              return (
                <span
                  key={tick.hour}
                  className={`absolute ${isEdge || tick.keepOnMobile ? '' : 'hidden sm:block'}`}
                  style={style}
                >
                  {tick.label}
                </span>
              )
            })}
          </div>
        </div>

        <div
          data-reveal
          className="mt-10 flex flex-wrap gap-3 border-t border-choc-900/20 pt-8"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-choc-900 px-6 py-3.5 font-display text-lg text-cream-50 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-choc-800"
          >
            Order a midnight stack
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-choc-900/35 px-6 py-3.5 font-display text-lg transition-colors duration-200 hover:border-choc-900 hover:bg-choc-900/5"
          >
            <PhoneIcon className="text-[1.1em]" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
