import { useEffect, useState } from 'react'
import { site } from '../site.js'

const MINUTES_PER_DAY = 24 * 60

function formatHour(hour24) {
  const h = ((hour24 % 24) + 24) % 24
  const suffix = h >= 12 ? 'PM' : 'AM'
  const display = h % 12 === 0 ? 12 : h % 12
  return `${display} ${suffix}`
}

/**
 * Live open/closed state for a kitchen that closes after midnight.
 * Returns the service window as a 0-1 progress value so the hours
 * timeline can show where "right now" sits on the griddle shift.
 */
function readStatus() {
  const now = new Date()
  const minutesNow = now.getHours() * 60 + now.getMinutes()
  const open = site.opensHour * 60
  const close = site.closesHour * 60 // may exceed 24h, e.g. 1 AM = 1500

  // Minutes since today's opening, wrapping past-midnight into the same shift.
  let since = minutesNow - open
  if (minutesNow < open && close > MINUTES_PER_DAY) {
    // early morning hours belong to the shift that started yesterday
    since = minutesNow + MINUTES_PER_DAY - open
  }

  const span = close - open
  const isOpen = since >= 0 && since < span
  const progress = Math.min(Math.max(since / span, 0), 1)

  let note
  if (isOpen) {
    const minsLeft = span - since
    note =
      minsLeft <= 60
        ? `Last orders in about ${Math.max(minsLeft, 1)} min`
        : `Griddle on till ${formatHour(site.closesHour)}`
  } else {
    note = `Opens at ${formatHour(site.opensHour)}`
  }

  return { isOpen, progress, note }
}

export function useOpenStatus() {
  const [status, setStatus] = useState(readStatus)

  useEffect(() => {
    const id = setInterval(() => setStatus(readStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  return status
}

export { formatHour }
