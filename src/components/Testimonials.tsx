import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import clsx from 'clsx'
import { fadeUp, stagger, viewport } from '../lib/motion'

const TESTIMONIALS = [
  {
    quote:
      'Excelente atención, super profesionales y el consultorio es hermoso. Me sentí en confianza desde el primer día.',
    name: 'Mariana G.',
  },
  {
    quote:
      'La Dra. Noelia me explicó cada paso de mi tratamiento con mucha paciencia. Hoy sonrío con total seguridad.',
    name: 'Diego R.',
  },
  {
    quote:
      'Tecnología de punta y un equipo muy cálido. Es la primera vez que disfruto ir al dentista.',
    name: 'Camila S.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-24 lg:py-28">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger()}
        >
          <motion.span
            variants={fadeUp}
            className="text-[12px] font-semibold uppercase tracking-[0.22em] text-sage-600"
          >
            Pacientes
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-sm text-balance font-display text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-ink lg:text-[2.75rem]"
          >
            Lo que dicen de nosotros.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="relative"
        >
          <Quote className="text-sage-200" size={40} strokeWidth={1.5} fill="currentColor" />

          <div className="relative mt-4 min-h-[132px] sm:min-h-[104px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="text-balance text-xl leading-relaxed text-ink sm:text-2xl">
                  {TESTIMONIALS[active].quote}
                </blockquote>
                <figcaption className="mt-5 text-[14.5px] font-medium text-ink-soft">
                  {TESTIMONIALS[active].name}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-2.5">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Ver testimonio de ${t.name}`}
                onClick={() => setActive(i)}
                className="group py-2"
              >
                <span
                  className={clsx(
                    'block h-1.5 rounded-full transition-all duration-400',
                    i === active ? 'w-8 bg-sage-600' : 'w-1.5 bg-line group-hover:bg-sage-300'
                  )}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
