import { useState } from 'react'
import { heroPhoto, showcase, site, whatsappUrl } from '../site.js'
import { useOpenStatus } from '../hooks/useOpenStatus.js'
import { PhoneIcon, StarIcon, WhatsAppIcon, WheatFreeIcon, MoonIcon } from './Icons.jsx'

const zoom =
  'transition duration-300 ease-out motion-safe:hover:scale-[1.045] motion-safe:active:scale-[0.985]'

function PriceRow({ item }) {
  return (
    <li className="flex items-baseline justify-between gap-4">
      <span className="text-[0.95rem] text-cream-100/90">{item.name}</span>
      <span className="font-display text-base text-gold-300">₹{item.price}</span>
    </li>
  )
}

export default function Hero() {
  const { isOpen, note } = useOpenStatus()
  const { featured, alsoTonight } = showcase
  // If the photograph cannot be reached, the card falls back to plain glass.
  const [photoLoaded, setPhotoLoaded] = useState(true)

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pb-24">
      {/* warm light behind the whole hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gold-500/18 blur-[90px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.02fr_1fr] lg:gap-12">
        {/* ---------------- left: the line ---------------- */}
        <div className="lg:py-6">
          <p
            data-reveal
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/35 bg-choc-800/60 px-3.5 py-1.5 text-xs font-semibold tracking-wide"
          >
            <span
              className={`relative flex h-2 w-2 ${isOpen ? 'text-open' : 'text-gold-400'}`}
              aria-hidden="true"
            >
              <span className="absolute inset-0 rounded-full bg-current opacity-60 motion-safe:animate-ping" />
              <span className="h-2 w-2 rounded-full bg-current" />
            </span>
            <span className="text-cream-100">{note}</span>
          </p>

          <h1
            data-reveal="rise"
            style={{ '--reveal-delay': '90ms' }}
            className="hero-title mt-6 max-w-[15ch] text-hero text-cream-50"
          >
            Fluffy pancakes &amp; crispy waffles
            <span className="hero-subline mt-4 block text-[0.42em] leading-tight text-gold-300">
              in {site.area}, open till 1 AM
            </span>
          </h1>

          <p
            data-reveal
            style={{ '--reveal-delay': '220ms' }}
            className="mt-7 max-w-[38ch] text-[1.05rem] leading-relaxed text-cream-200/80 sm:text-lg"
          >
            A small dessert counter off the Gachibowli flyover. Batter rested, griddled to order,
            plated the minute it leaves the iron.
          </p>

          <div
            data-reveal
            style={{ '--reveal-delay': '320ms' }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-6 py-3.5 font-display text-lg text-choc-900 shadow-plate hover:bg-gold-300 ${zoom}`}
            >
              <WhatsAppIcon className="text-[1.25em]" />
              Order via WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className={`inline-flex items-center gap-2.5 rounded-full border border-cream-100/30 px-6 py-3.5 font-display text-lg text-cream-50 hover:border-gold-300 hover:text-gold-300 ${zoom}`}
            >
              <PhoneIcon className="text-[1.15em]" />
              Call now
            </a>
          </div>

          <p
            data-reveal
            style={{ '--reveal-delay': '400ms' }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-cream-200/75"
          >
            <span className="flex items-center gap-2">
              <WheatFreeIcon className="text-[1.15em] text-gold-400" />
              Gluten-free griddle, kept separate
            </span>
            <span className="flex items-center gap-2">
              <MoonIcon className="text-[1.05em] text-gold-400" />
              Last orders 12:45 AM
            </span>
          </p>
        </div>

        {/* ---------------- right: the showcase ---------------- */}
        <div data-reveal="right" style={{ '--reveal-delay': '160ms' }} className="lg:order-last">
          <div className="relative mx-auto w-full max-w-[25rem] pb-14 lg:max-w-[27rem]">
            {/* golden light pooling behind the glass */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/35 blur-[80px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -left-14 h-52 w-52 rounded-full bg-syrup/45 blur-[80px]"
            />

            <div className="float-slow relative">
              {/* the layers stacked behind */}
              <div
                aria-hidden="true"
                className="glass-quiet absolute inset-x-5 -top-7 bottom-10 -rotate-[5deg] rounded-[2rem]"
              />
              <div
                aria-hidden="true"
                className="glass-quiet absolute inset-x-2 -top-3.5 bottom-5 rotate-[2.5deg] rounded-[2rem]"
              />

              <article className="glass-photo relative overflow-hidden rounded-[2rem]">
                {photoLoaded && (
                  <img
                    src={heroPhoto.src}
                    alt=""
                    aria-hidden="true"
                    width="900"
                    height="1087"
                    fetchPriority="high"
                    onError={() => setPhotoLoaded(false)}
                    className="absolute inset-0 h-full w-full object-cover object-[center_60%]"
                  />
                )}
                {/* dark chocolate wash: the type sits on 50% at the top, 88% at the foot */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(168deg,rgba(20,11,5,0.5)_0%,rgba(20,11,5,0.7)_45%,rgba(20,11,5,0.88)_100%)]"
                />
                {/* warm light leaking in from the top right */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(115%_75%_at_88%_-5%,rgba(242,167,20,0.3),transparent_62%)]"
                />
                {/* the glass ring, painted over the photograph */}
                <div
                  aria-hidden="true"
                  className="glass-ring pointer-events-none absolute inset-0 rounded-[2rem]"
                />

                <div className="on-photo relative p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-bold tracking-wide text-gold-200">
                      Tonight at the counter
                    </p>
                    <p className="flex items-center gap-1.5 text-xs font-semibold text-cream-200/80">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${isOpen ? 'bg-open' : 'bg-gold-500'}`}
                        aria-hidden="true"
                      />
                      {isOpen ? 'Griddle on' : 'Griddle off'}
                    </p>
                  </div>

                  <p className="hero-title mt-5 text-[1.85rem] leading-[1.05] text-cream-50 sm:text-[2.1rem]">
                    {featured.name}
                  </p>
                  <p className="mt-2.5 max-w-[30ch] text-[0.95rem] leading-relaxed text-cream-200/85">
                    {featured.detail}. Finished with a maple pour at the table.
                  </p>

                  <p className="mt-5 flex items-baseline gap-2">
                    <span className="font-display text-4xl text-gold-300">₹{featured.price}</span>
                    <span className="text-xs font-semibold text-cream-200/70">
                      stack of five, serves one generously
                    </span>
                  </p>

                  {/* frosted panel: real backdrop blur, over the photograph */}
                  <div className="glass-strip mt-7 rounded-2xl p-4">
                    <ul className="space-y-3">
                      {alsoTonight.map((item) => (
                        <PriceRow key={item.name} item={item} />
                      ))}
                    </ul>

                    <div className="hairline my-4" />

                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-gold-300/40 bg-gold-400/15 px-3 py-1 text-[0.7rem] font-bold text-gold-200">
                        Gluten-free available
                      </span>
                      <span className="rounded-full border border-cream-100/25 bg-cream-100/10 px-3 py-1 text-[0.7rem] font-bold text-cream-200/85">
                        Eggless on request
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              {/* the rating, floating free of the card */}
              <div className="float-badge absolute -bottom-10 left-2 sm:-left-6">
                <p className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                  <span className="flex items-baseline gap-1 font-display text-2xl leading-none text-cream-50">
                    {site.rating.toFixed(1)}
                    <StarIcon className="translate-y-[1px] text-[0.75em] text-gold-400" />
                  </span>
                  <span className="text-[0.72rem] font-semibold leading-tight text-cream-200/80">
                    Rated on Google
                    <span className="block text-cream-200/60">{site.reviewCount}+ reviews</span>
                  </span>
                  <span className="sr-only">
                    Rated {site.rating} out of 5 from {site.reviewCount}+ Google reviews
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
