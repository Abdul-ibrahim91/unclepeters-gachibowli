const base = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 3.5h-.8A2.3 2.3 0 0 0 3.5 6c.3 3.4 1.9 6.6 4.4 9 2.4 2.5 5.6 4.1 9 4.5a2.3 2.3 0 0 0 2.5-2.3v-.8a1.6 1.6 0 0 0-1.3-1.6l-2.3-.5a1.6 1.6 0 0 0-1.6.6l-.6.8a12.2 12.2 0 0 1-4.8-4.8l.8-.6a1.6 1.6 0 0 0 .6-1.6l-.5-2.3a1.6 1.6 0 0 0-1.6-1.3Z" />
    </svg>
  )
}

export function WhatsAppIcon(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12.04 2.2a9.72 9.72 0 0 0-8.3 14.74L2.2 21.8l4.98-1.5a9.72 9.72 0 1 0 4.86-18.1Zm0 1.78a7.94 7.94 0 0 1 3.95 14.82 7.94 7.94 0 0 1-7.9-.09l-.4-.24-2.63.79.8-2.57-.25-.4A7.94 7.94 0 0 1 12.04 3.98Zm-3.1 4.1c-.2 0-.52.07-.78.35-.26.28-.86.84-.86 2.03 0 1.19.86 2.33.98 2.49.12.16 1.67 2.66 4.1 3.62 2.02.8 2.43.64 2.87.6.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.8-.76.96-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.16-.38-.33-.4-.46-.4h-.3Z" />
    </svg>
  )
}

export function StarIcon(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="m12 2.6 2.86 5.9 6.44.9-4.68 4.5 1.14 6.4L12 17.2l-5.76 3.1 1.14-6.4L2.7 9.4l6.44-.9L12 2.6Z" />
    </svg>
  )
}

export function HalfStarIcon(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <defs>
        <linearGradient id="halfStarFill">
          <stop offset="60%" stopColor="currentColor" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <path
        d="m12 2.6 2.86 5.9 6.44.9-4.68 4.5 1.14 6.4L12 17.2l-5.76 3.1 1.14-6.4L2.7 9.4l6.44-.9L12 2.6Z"
        fill="url(#halfStarFill)"
      />
    </svg>
  )
}

export function WheatFreeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21V9" />
      <path d="M12 9c0-2 1.3-3.4 3-3.4 0 2-1.2 3.4-3 3.4Zm0 0c0-2-1.3-3.4-3-3.4 0 2 1.2 3.4 3 3.4Z" />
      <path d="M12 14.5c0-2 1.3-3.4 3-3.4 0 2-1.2 3.4-3 3.4Zm0 0c0-2-1.3-3.4-3-3.4 0 2 1.2 3.4 3 3.4Z" />
      <path d="M3.5 3.5 20.5 20.5" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.6V12l3 2" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M19 10.4c0 5-7 11-7 11s-7-6-7-11a7 7 0 0 1 14 0Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </svg>
  )
}

export function LeafIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 19.5c0-8 5.5-13 15-13.5.5 9.5-5 15-13.5 15" />
      <path d="M6 18C9.5 14.5 12 12.5 16.5 10.5" />
    </svg>
  )
}

export function MoonIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.6A8.4 8.4 0 0 1 9.4 4 8.6 8.6 0 1 0 20 14.6Z" />
    </svg>
  )
}

export function FlameIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c3.3 0 6-2.4 6-5.6 0-4-4-5.4-3.2-9.9C12.3 6.4 9.6 8.6 9.6 11c0 1.3.5 2 .5 2.7 0 1-.8 1.6-1.6 1.6-1 0-1.7-.8-1.7-2C6 16.9 8.4 21 12 21Z" />
    </svg>
  )
}
