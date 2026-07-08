import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import clsx from 'clsx'
import { fadeUp, stagger, viewport } from '../lib/motion'

const FAQS = [
  {
    q: '¿Cada cuánto debo hacerme una limpieza dental?',
    a: 'Recomendamos una limpieza profesional cada 6 meses para prevenir caries y enfermedades de las encías, aunque en algunos casos puede ajustarse según tu salud bucal.',
  },
  {
    q: '¿Los tratamientos de ortodoncia duelen?',
    a: 'Es normal sentir presión o sensibilidad los primeros días después de un ajuste, pero no debería ser un dolor intenso. Te acompañamos durante todo el proceso para que sea lo más cómodo posible.',
  },
  {
    q: '¿Aceptan planes de obra social o financiamiento?',
    a: 'Trabajamos con distintas opciones de pago y financiamiento en cuotas. Escríbenos por WhatsApp con tu obra social o consulta y te confirmamos la cobertura antes de tu cita.',
  },
  {
    q: '¿Cuánto dura un implante dental?',
    a: 'Con buenos cuidados e higiene, un implante dental puede durar toda la vida. El proceso completo, desde la colocación hasta la corona final, suele tomar entre 3 y 6 meses.',
  },
  {
    q: '¿Cómo agendo mi primera cita?',
    a: 'Lo más rápido es escribirnos por WhatsApp con el botón de "Agendar cita" en cualquier parte del sitio. Te responderemos con los horarios disponibles a la brevedad.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-line py-24 lg:py-28">
      <div className="container-px mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger()}
          className="mb-14 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-[12px] font-semibold uppercase tracking-[0.22em] text-sage-600"
          >
            Preguntas frecuentes
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-4 max-w-lg text-balance font-display text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-ink lg:text-[2.75rem]"
          >
            Resolvemos tus dudas.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.05)}
          className="divide-y divide-line border-y border-line"
        >
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div key={item.q} variants={fadeUp}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={clsx(
                      'text-[16.5px] font-medium tracking-tight transition-colors',
                      isOpen ? 'text-sage-700' : 'text-ink'
                    )}
                  >
                    {item.q}
                  </span>
                  <span
                    className={clsx(
                      'grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300',
                      isOpen
                        ? 'rotate-45 border-sage-300 bg-sage-50 text-sage-700'
                        : 'border-line text-ink-soft'
                    )}
                  >
                    <Plus size={15} strokeWidth={2} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
