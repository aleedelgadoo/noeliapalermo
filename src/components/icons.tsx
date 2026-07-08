import type { SVGProps } from 'react'

/**
 * Custom line icons matching the lucide-react prop signature (size + strokeWidth),
 * for glyphs lucide doesn't ship (tooth, dental chair) — kept interchangeable with lucide icons.
 */
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'strokeWidth'> {
  size?: number | string
  strokeWidth?: number | string
}

export function ToothIcon({ size = 24, strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3.25c-1.35 0-2.14.68-2.9.68-.92 0-1.6-.62-2.48-.62C5.02 3.31 3.5 4.75 3.5 7.4c0 4.1 1.9 9.35 3.6 9.35 1.1 0 1.28-1.7 1.87-4.06.3-1.18.68-2.24 1.53-2.24s1.23 1.06 1.53 2.24c.59 2.36.77 4.06 1.87 4.06 1.7 0 3.6-5.25 3.6-9.35 0-2.65-1.52-4.09-3.12-4.09-.88 0-1.63.62-2.38.62" />
    </svg>
  )
}

export function ChairIcon({ size = 24, strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 20v-5.5a2.5 2.5 0 0 1 2.5-2.5H12" />
      <path d="M6 14.5V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <path d="M4 20h9" />
      <path d="M15 20l1.2-4.8a1 1 0 0 1 .97-.76V10.5a1.5 1.5 0 0 1 3 0v5.86a2.5 2.5 0 0 1-2.5 2.5" />
      <circle cx="9" cy="3.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** lucide-react dropped brand glyphs — Instagram recreated to match the stroke system. */
export function InstagramIcon({ size = 24, strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** lucide-react dropped brand glyphs — WhatsApp recreated as a filled glyph (brand shape, not the stroke system). */
export function WhatsAppIcon({ size = 24, ...props }: Omit<IconProps, 'strokeWidth'>) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.02 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 1.68.44 3.26 1.21 4.63L2.5 21.5l4.98-1.2a9.46 9.46 0 0 0 4.54 1.16h.01c5.24 0 9.5-4.25 9.5-9.5s-4.26-9.46-9.51-9.46zm0 17.32h-.01a7.8 7.8 0 0 1-3.98-1.09l-.29-.17-2.96.71.71-2.88-.19-.3a7.82 7.82 0 0 1-1.2-4.17c0-4.32 3.53-7.85 7.87-7.85 2.1 0 4.07.82 5.55 2.31a7.79 7.79 0 0 1 2.3 5.55c0 4.33-3.53 7.86-7.8 7.86z" />
    </svg>
  )
}
