import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, Clock } from 'lucide-react'
import { TREATMENTS } from '../data/treatments'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { whatsappLink } from '../lib/whatsapp'

export default function TreatmentsPage() {
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
            Tratamientos
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-ink lg:text-6xl"
          >
            Todos nuestros tratamientos.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-[16px] leading-relaxed text-ink-soft"
          >
            Cada plan se adapta a tu boca y tus tiempos. Conoce el detalle de cada tratamiento y
            escríbenos si tienes dudas sobre cuál es el indicado para ti.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.06)}
          className="mt-16 grid grid-cols-1 gap-6 pb-28 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TREATMENTS.map(({ slug, icon: Icon, title, description, highlights, duration }) => (
            <motion.article
              key={slug}
              variants={fadeUp}
              className="flex flex-col rounded-3xl border border-line bg-white/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sage-200 hover:shadow-[0_20px_40px_-20px_rgba(45,64,52,0.18)]"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-sage-50 text-sage-600">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-faint">
                  <Clock size={13} strokeWidth={1.8} />
                  {duration}
                </span>
              </div>

              <h2 className="mt-6 text-[19px] font-medium tracking-tight text-ink">{title}</h2>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{description}</p>

              <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[13.5px] text-ink-soft">
                    <Check size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-sage-500" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(`Hola, quisiera más información sobre ${title.toLowerCase()}.`)}
                target="_blank"
                rel="noreferrer"
                className="group mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-sage-700 transition-colors hover:text-sage-800"
              >
                Consultar por este tratamiento
                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="border-t border-line bg-sage-50/70">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-balance font-display text-2xl font-medium tracking-tight text-ink lg:text-3xl">
              ¿No sabes cuál tratamiento necesitas?
            </h2>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Cuéntanos qué sientes y te orientamos por WhatsApp antes de agendar tu cita.
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
