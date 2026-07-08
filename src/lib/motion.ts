import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
}

export const stagger = (delayChildren = 0, staggerChildren = 0.12): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
})

export const viewport = { once: true, margin: '-80px' }
