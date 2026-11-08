import { site } from '../site.js'
import { StarIcon, HalfStarIcon, WheatFreeIcon, LeafIcon, MoonIcon, FlameIcon } from './Icons.jsx'
import BatterEdge from './BatterEdge.jsx'

const FACTS = [
  {
    icon: FlameIcon,
    title: 'Ladled when you order',
    body: 'Buttermilk batter rests twenty minutes, then hits the griddle only once your table is seated. Nothing is poured ahead of the rush.',
  },
  {
    icon: WheatFreeIcon,
    title: 'Gluten-free, kept separate',
    body: 'Oat, almond and buckwheat batters cook on their own plate with their own spatula, so a coeliac order never shares a surface.',
  },
  {
    icon: LeafIcon,
    title: 'Eggless on request',
    body: 'Every pancake and waffle on the board has an eggless version. Tell us at the counter and it takes two minutes longer, nothing else changes.',
  },
  {
    icon: MoonIcon,
    title: 'Still serving at midnight',
    body: 'Last orders at 12:45 AM, seven days a week. The late shift from the Financial District is half our dinner crowd.',
  },
]

export default function Proof() {
  return (
    <section id="why" className="band-cream relative">
      <BatterEdge color="var(--color-choc-900)" />
      <div className="grain">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14">
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-start md:gap-14">
            {/* Google rating, stamped */}
            <div data-reveal="left" className="flex justify-center md:justify-start">
              <div className="grid h-44 w-44 -rotate-6 place-items-center rounded-full border-[3px] border-dashed border-syrup/45 bg-cream-50 text-center shadow-plate sm:h-52 sm:w-52">
                <div>
                  <span className="block font-display text-5xl leading-none text-choc-900 sm:text-6xl">
                    {site.rating.toFixed(1)}
                  </span>
                  <span
                    className="mt-1.5 flex items-center justify-center gap-0.5 text-gold-600"
                    aria-hidden="true"
                  >
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <HalfStarIcon />
                  </span>
                  <span className="mt-2 block max-w-[8rem] text-xs font-semibold leading-tight text-choc-600">
                    {site.reviewCount}+ Google reviews from {site.area} diners
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 data-reveal className="text-section max-w-[18ch] text-choc-900">
                Four things we do not cut corners on
              </h2>

              <dl className="mt-8 divide-y divide-choc-900/12 border-y border-choc-900/12">
                {FACTS.map(({ icon: Icon, title, body }, i) => (
                  <div
                    key={title}
                    data-reveal
                    style={{ '--reveal-delay': `${i * 90}ms` }}
                    className="flex gap-4 py-5 sm:gap-6"
                  >
                    <Icon className="mt-1 shrink-0 text-[1.6rem] text-syrup" />
                    <div>
                      <dt className="font-display text-xl text-choc-900">{title}</dt>
                      <dd className="mt-1 max-w-[52ch] text-[0.975rem] leading-relaxed text-choc-700/90">
                        {body}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
