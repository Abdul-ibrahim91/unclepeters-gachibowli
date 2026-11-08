import { StarIcon, HalfStarIcon } from './Icons.jsx'

/**
 * Star row for a fractional rating. The number and review count are read out
 * as one sentence; the stars themselves are decorative.
 */
export default function Rating({ value, count, className = '', starClass = 'text-[1.05rem]' }) {
  const full = Math.floor(value)
  const hasHalf = value - full >= 0.25

  return (
    <p className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 ${className}`}>
      <span className="flex items-center gap-0.5 text-gold-400" aria-hidden="true">
        {Array.from({ length: full }, (_, i) => (
          <StarIcon key={i} className={starClass} />
        ))}
        {hasHalf && <HalfStarIcon className={starClass} />}
      </span>
      <span className="font-display text-lg leading-none">{value.toFixed(1)}</span>
      <span className="text-sm opacity-80">
        from {count}+ Google reviews
        <span className="sr-only">, rated {value} out of 5</span>
      </span>
    </p>
  )
}
