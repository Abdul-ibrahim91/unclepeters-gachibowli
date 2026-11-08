// A poured-batter edge that joins two bands of the page. The lobes are a fixed,
// hand-picked sequence so the pour looks ladled rather than machine-waved.
const LOBES = [34, 17, 47, 25, 39, 15, 45, 21, 37, 19]
const SEG = 120

const path = (() => {
  let d = 'M0 14'
  LOBES.forEach((dip, i) => {
    const x = i * SEG
    d += ` Q ${x + SEG / 2} ${dip} ${x + SEG} 14`
  })
  return `${d} L1200 0 L0 0 Z`
})()

/**
 * @param {{ color: string, className?: string }} props
 *   color - the band the batter is pouring FROM (a CSS color value)
 */
export default function BatterEdge({ color, className = '' }) {
  return (
    <svg
      className={`batter-edge ${className}`}
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} fill={color} />
    </svg>
  )
}
