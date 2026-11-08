import { reviews, site } from '../site.js'
import BatterEdge from './BatterEdge.jsx'
import { StarIcon } from './Icons.jsx'
import Rating from './Rating.jsx'

export default function Reviews() {
  return (
    <section id="reviews" className="band-cream relative">
      <BatterEdge color="var(--color-gold-400)" />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <h2 data-reveal className="text-section max-w-[20ch] text-choc-900">
            What {site.reviewCount} diners wrote down
          </h2>
          <div data-reveal style={{ '--reveal-delay': '80ms' }} className="text-choc-700">
            <Rating value={site.rating} count={site.reviewCount} className="text-choc-900" />
            <a
              href={site.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm font-semibold text-syrup underline decoration-syrup/40 decoration-2 underline-offset-4 hover:text-choc-900"
            >
              Read every review on Google
            </a>
          </div>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {reviews.map((review, i) => (
            <li
              key={review.author}
              data-reveal
              style={{ '--reveal-delay': `${i * 110}ms` }}
              className="border-t-2 border-dashed border-syrup/35 pt-6"
            >
              <p className="flex gap-0.5 text-gold-600" aria-hidden="true">
                {Array.from({ length: review.stars }, (_, s) => (
                  <StarIcon key={s} className="text-[1.05rem]" />
                ))}
              </p>
              <blockquote className="mt-4 text-[1.05rem] leading-relaxed text-choc-800">
                {review.quote}
              </blockquote>
              <p className="mt-4 font-display text-lg text-choc-900">
                {review.author}
                <span className="ml-2 align-middle text-xs font-semibold text-choc-600">
                  {review.context}
                  <span className="sr-only">, {review.stars} out of 5 stars</span>
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
