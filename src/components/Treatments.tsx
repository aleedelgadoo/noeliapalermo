import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { TREATMENTS } from '../data/treatments'
import { fadeUp, stagger, viewport } from '../lib/motion'

const PREVIEW = TREATMENTS.slice(0, 4)

export default function Treatments() {
  return (
    <section id="tratamientos" className="py-24 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger()}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="text-[12px] font-semibold uppercase tracking-[0.22em] text-sage-600"
            >
              Tratamientos
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 max-w-lg text-balance font-display text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-ink lg:text-[2.75rem]"
            >
              Soluciones para cada necesidad.
            </motion.h2>
          </div>

          <motion.div variants={fadeUp}>
            <Link
              to="/tratamientos"
              className="group inline-flex shrink-0 items-center gap-1.5 text-[14.5px] font-medium text-sage-700 transition-colors hover:text-sage-800"
            >
              Ver todos los tratamientos
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.05)}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PREVIEW.map(({ slug, icon: Icon, title, short }) => (
            <motion.div
              key={slug}
              variants={fadeUp}
              className="group rounded-3xl border border-line bg-cream p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sage-200 hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(45,64,52,0.18)] sm:text-left"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-sage-50 text-sage-600 transition-colors duration-300 group-hover:bg-sage-100 sm:mx-0">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-[16.5px] font-medium tracking-tight text-ink">{title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">{short}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
