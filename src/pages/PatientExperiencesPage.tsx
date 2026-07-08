import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PATIENT_CASES } from '../data/patients'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { whatsappLink } from '../lib/whatsapp'

export default function PatientExperiencesPage() {
  return (
    <div className="pt-32 lg:pt-36">
      <section className="container-px mx-auto max-w-7xl">
        <motion.div initial="hidden" animate="show" variants={stagger(0.1)}>
          <motion.div variants={fadeUp}>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <ArrowLeft
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
              Volver al inicio
            </Link>
          </motion.div>

          <motion.span
            variants={fadeUp}
            className="mt-8 block text-[12px] font-semibold uppercase tracking-[0.22em] text-sage-600"
          >
            Pacientes
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-ink lg:text-6xl"
          >
            Antes y después de nuestros pacientes.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-[16px] leading-relaxed text-ink-soft"
          >
            Estas son algunas de las transformaciones que acompañamos. Cada tratamiento se
            adapta a la boca y los tiempos de cada paciente.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.06)}
          className="mt-16 grid grid-cols-1 gap-6 pb-28 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PATIENT_CASES.map(({ id, name, treatment, before, after }) => (
            <motion.article
              key={id}
              variants={fadeUp}
              className="overflow-hidden rounded-3xl border border-line bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-sage-200 hover:shadow-[0_20px_40px_-20px_rgba(45,64,52,0.18)]"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-[3/4]">
                  <img src={before} alt={`${name} antes del tratamiento`} className="h-full w-full object-cover" />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-cream/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-ink-soft">
                    Antes
                  </span>
                </div>
                <div className="relative aspect-[3/4]">
                  <img src={after} alt={`${name} después del tratamiento`} className="h-full w-full object-cover" />
                  <span className="absolute right-2.5 top-2.5 rounded-full bg-sage-800/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-cream">
                    Después
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-[16px] font-medium tracking-tight text-ink">{name}</h2>
                <p className="mt-1 text-[13.5px] text-ink-soft">{treatment}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="border-t border-line bg-sage-50/70">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-balance font-display text-2xl font-medium tracking-tight text-ink lg:text-3xl">
              ¿Querés ser nuestra próxima historia?
            </h2>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Escribinos por WhatsApp y te ayudamos a encontrar el tratamiento indicado para vos.
            </p>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-sage-800 py-4 pl-7 pr-6 text-[15px] font-medium text-cream transition-all duration-300 hover:bg-sage-700"
          >
            Escribinos por WhatsApp
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </section>
    </div>
  )
}
