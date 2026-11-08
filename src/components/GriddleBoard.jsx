import { pancakes, waffles, sides, whatsappUrl } from '../site.js'
import BatterEdge from './BatterEdge.jsx'
import { WhatsAppIcon } from './Icons.jsx'

const SECTIONS = [
  {
    id: 'pancakes',
    title: 'Signature pancakes',
    note: 'Stacks of five, salted butter and warm maple on every plate',
    items: pancakes,
  },
  {
    id: 'waffles',
    title: 'Belgian waffles',
    note: 'Pressed to order on a cast-iron iron, crisp at the edge',
    items: waffles,
  },
  {
    id: 'sides',
    title: 'To drink',
    note: 'Brewed in-house through the night',
    items: sides,
  },
]

function Tag({ children }) {
  const glutenFree = children === 'Gluten-free'
  return (
    <span
      className={`ml-2 inline-block translate-y-[-1px] rounded-full px-2.5 py-0.5 align-middle text-[0.68rem] font-bold whitespace-nowrap ${
        glutenFree ? 'bg-gold-400 text-choc-900' : 'bg-cream-100/15 text-gold-200'
      }`}
    >
      {children}
    </span>
  )
}

export default function GriddleBoard() {
  return (
    <section id="griddle-board" className="band-choc relative">
      <BatterEdge color="var(--color-cream-100)" />
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-16">
        <header className="max-w-[40ch]">
          <h2 data-reveal className="text-section text-cream-50">
            The griddle board
          </h2>
          <p data-reveal style={{ '--reveal-delay': '80ms' }} className="mt-4 text-cream-200/85">
            Prices in rupees. Swap any batter for the gluten-free oat or buckwheat mix for ₹40.
          </p>
        </header>

        <div className="mt-12 space-y-14">
          {SECTIONS.map((section, si) => (
            <div key={section.id} data-reveal style={{ '--reveal-delay': `${si * 70}ms` }}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b-2 border-gold-400/40 pb-2">
                <h3 className="font-display text-2xl text-gold-300 sm:text-[1.7rem]">
                  {section.title}
                </h3>
                <p className="text-sm italic text-cream-200/70">{section.note}</p>
              </div>

              <ul className="mt-5 space-y-5">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <p className="flex items-end">
                      <span className="font-display text-xl leading-tight text-cream-50 sm:text-[1.35rem]">
                        {item.name}
                        {item.tags?.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </span>
                      <span className="dot-leader border-cream-300/40" aria-hidden="true" />
                      <span className="font-display text-xl text-gold-300 sm:text-[1.35rem]">
                        ₹{item.price}
                      </span>
                    </p>
                    <p className="mt-1 max-w-[46ch] text-[0.95rem] text-cream-200/70">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p data-reveal className="mt-14 border-t border-cream-100/15 pt-8 text-cream-200/80">
          Full menu runs to thirty-odd stacks, shakes and savoury plates.{' '}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-gold-300 underline decoration-gold-400/50 decoration-2 underline-offset-4 hover:text-gold-200"
          >
            <WhatsAppIcon className="text-[1.05em]" />
            Ask us on WhatsApp
          </a>{' '}
          and we will send today&apos;s board.
        </p>
      </div>
    </section>
  )
}
