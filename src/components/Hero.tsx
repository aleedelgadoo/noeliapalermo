import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { fadeUp, stagger } from '../lib/motion'
import { whatsappLink } from '../lib/whatsapp'

const HERO_IMG =
  'https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?q=80&w=1400&auto=format&fit=crop'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 lg:pt-36">
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-sage-100/70 blur-3xl" />
      <div className="pointer-events-none absolute right-1/3 top-96 h-72 w-72 rounded-full bg-blush/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.15)}
          className="container-px lg:pr-4"
        >
          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-[2.75rem] font-medium leading-[1.06] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            Tu sonrisa,
            <br />
            nuestra prioridad.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-md text-balance text-[17px] leading-relaxed text-ink-soft"
          >
            Odontología moderna, personalizada y enfocada en tu bienestar.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-sage-800 py-4 pl-7 pr-6 text-[15px] font-medium text-cream shadow-lg shadow-sage-800/15 transition-all duration-300 hover:bg-sage-700 hover:shadow-xl hover:shadow-sage-800/25"
            >
              Agendar cita
              <ArrowRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <motion.a
            href="#sobre-mi"
            variants={fadeUp}
            className="group mt-24 hidden items-center gap-3 text-[13px] text-ink-faint transition-colors hover:text-ink-soft lg:inline-flex"
          >
            Desliza para descubrir
            <span className="grid h-7 w-7 place-items-center rounded-full border border-line">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown size={13} />
              </motion.span>
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[340px] w-full sm:h-[440px] lg:h-[620px]"
        >
          <div className="absolute inset-0 lg:rounded-l-[2.5rem] overflow-hidden">
            <img
              src={HERO_IMG}
              alt="Sonrisa radiante de una paciente"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
