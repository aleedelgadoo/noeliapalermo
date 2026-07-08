import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ChairIcon } from './icons'
import { fadeUp, stagger, viewport } from '../lib/motion'

export default function TechBanner() {
  return (
    <section id="tecnologia" className="border-y border-line bg-sage-50/70">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger()}
        className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 py-14 lg:grid-cols-[auto_1fr_auto] lg:gap-12 lg:py-12"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-5">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-cream text-sage-600 shadow-sm">
            <ChairIcon size={28} strokeWidth={1.4} />
          </div>
          <h3 className="max-w-[220px] text-balance text-[19px] font-medium leading-snug tracking-tight text-ink">
            Tecnología que transforma tu experiencia.
          </h3>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="max-w-xl text-balance text-[15px] leading-relaxed text-ink-soft"
        >
          Contamos con escáneres digitales, radiografía 3D y herramientas de última generación
          para brindarte tratamientos más precisos, rápidos y cómodos.
        </motion.p>

        <motion.a
          variants={fadeUp}
          href="#contacto"
          className="group inline-flex shrink-0 items-center gap-1.5 text-[14.5px] font-medium text-sage-700 transition-colors hover:text-sage-800"
        >
          Conocer tecnología
          <ArrowRight
            size={15}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </motion.a>
      </motion.div>
    </section>
  )
}
