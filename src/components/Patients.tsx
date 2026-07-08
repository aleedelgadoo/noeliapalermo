import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'
import { PATIENT_GALLERY } from '../data/patients'
import { fadeUp, stagger, viewport } from '../lib/motion'

export default function Patients() {
  const [active, setActive] = useState(0)
  const total = PATIENT_GALLERY.length

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % total), 5000)
    return () => clearInterval(id)
  }, [total])

  const next = () => setActive((v) => (v + 1) % total)
  const prev = () => setActive((v) => (v - 1 + total) % total)

  return (
    <section id="pacientes" className="border-y border-line bg-sage-50/70 py-24 lg:py-28">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
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
            Sonrisas reales, resultados reales.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-balance text-[15px] leading-relaxed text-ink-soft"
          >
            Cada tratamiento es una historia distinta. Conoce a algunos de nuestros pacientes y
            el resultado de su transformación.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9">
            <Link
              to="/experiencias"
              className="group inline-flex items-center gap-2 rounded-full bg-sage-800 py-3.5 pl-6 pr-5 text-[14px] font-medium text-cream transition-all duration-300 hover:bg-sage-700 hover:shadow-lg hover:shadow-sage-800/20"
            >
              Ver todas las experiencias
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="relative"
        >
          <div className="relative h-[360px] overflow-hidden rounded-[2rem] sm:h-[420px] lg:h-[460px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={PATIENT_GALLERY[active].id}
                src={PATIENT_GALLERY[active].src}
                alt={PATIENT_GALLERY[active].alt}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

            <button
              aria-label="Foto anterior"
              onClick={prev}
              className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-cream/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-cream"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              aria-label="Foto siguiente"
              onClick={next}
              className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-cream/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-cream"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2.5">
            {PATIENT_GALLERY.map((photo, i) => (
              <button
                key={photo.id}
                aria-label={`Ver foto ${i + 1}`}
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
