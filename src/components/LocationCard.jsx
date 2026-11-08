import { site } from '../site.js'
import { PinIcon } from './Icons.jsx'

/**
 * A stylised street plan, not a map. It stands in for the embedded map, which
 * Google blocks on some networks and in some browsers, and leaves the real
 * routing to the directions link below it.
 */
function StreetPlan() {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="400" height="300" fill="#1C1008" />

      {/* blocks */}
      <g fill="#27180C">
        <rect x="18" y="26" width="118" height="78" rx="7" />
        <rect x="170" y="18" width="94" height="86" rx="7" />
        <rect x="300" y="34" width="86" height="70" rx="7" />
        <rect x="26" y="152" width="100" height="62" rx="7" />
        <rect x="162" y="148" width="130" height="70" rx="7" />
        <rect x="316" y="160" width="70" height="58" rx="7" />
        <rect x="40" y="252" width="150" height="40" rx="7" />
        <rect x="224" y="246" width="140" height="46" rx="7" />
      </g>

      {/* streets */}
      <g stroke="#412915" strokeLinecap="round" fill="none">
        <path d="M-10 124H410" strokeWidth="15" />
        <path d="M-10 234H410" strokeWidth="9" />
        <path d="M152 -10V310" strokeWidth="12" />
        <path d="M304 -10V310" strokeWidth="7" />
      </g>

      {/* the flyover, cutting across */}
      <path d="M-20 288L420 44" stroke="#52351D" strokeWidth="20" strokeLinecap="round" />
      <path
        d="M-20 288L420 44"
        stroke="#F2A714"
        strokeWidth="2"
        strokeDasharray="14 16"
        opacity="0.5"
      />

      {/* the walk in from the main road */}
      <path
        d="M110 124L236 124Q262 124 262 106"
        stroke="#FFBE3C"
        strokeWidth="4"
        strokeDasharray="9 9"
        strokeLinecap="round"
        fill="none"
      />

      {/* us */}
      <circle cx="262" cy="92" r="36" fill="#F2A714" opacity="0.18" />
      <circle cx="262" cy="92" r="19" fill="#F2A714" opacity="0.3" />
      <circle cx="232" cy="158" r="9" fill="#FFD66B" stroke="#1A0F07" strokeWidth="3" />
    </svg>
  )
}

export default function LocationCard() {
  return (
    <div className="glass-photo relative overflow-hidden rounded-3xl">
      <StreetPlan />

      {/* keep the type off the street plan */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(175deg,rgba(20,11,5,0.28)_0%,rgba(20,11,5,0.46)_40%,rgba(20,11,5,0.93)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(110%_70%_at_60%_38%,rgba(242,167,20,0.22),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="glass-ring pointer-events-none absolute inset-0 rounded-3xl"
      />

      <div className="on-photo relative flex h-72 flex-col justify-between p-6 sm:h-80 sm:p-7">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-400/30 bg-choc-950/55 px-3 py-1.5 text-xs font-bold text-gold-200 backdrop-blur-sm">
          <PinIcon className="text-[1.1em]" />
          {site.area}, {site.city}
        </p>

        <div>
          <p className="max-w-[28ch] text-[0.95rem] leading-relaxed text-cream-200/85">
            Off the Gachibowli flyover, a two-minute walk from the main road junction.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Uncle+Peters+Pancakes+Gachibowli+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gold-400 px-4 py-3 font-display text-[0.9rem] text-choc-900 sm:gap-2.5 sm:px-5 sm:text-base shadow-plate transition duration-300 ease-out hover:bg-gold-300 motion-safe:hover:scale-[1.045] motion-safe:active:scale-[0.985]"
          >
            <PinIcon className="text-[1.15em]" />
            Open directions in Google Maps
          </a>
        </div>
      </div>
    </div>
  )
}
