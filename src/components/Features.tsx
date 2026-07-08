import { motion } from 'framer-motion'
import { CalendarCheck, Heart, Leaf, ShieldCheck } from 'lucide-react'
import { fadeUp, stagger, viewport } from '../lib/motion'

const FEATURES = [
  {
    icon: Heart,
    title: 'Atención personalizada',
    desc: 'Escuchamos tus necesidades y creamos el mejor plan para ti.',
  },
  {
    icon: ShieldCheck,
    title: 'Tecnología avanzada',
    desc: 'Equipos de última generación para diagnósticos precisos y tratamientos más cómodos.',
  },
  {
    icon: Leaf,
    title: 'Experiencia cómoda',
    desc: 'Ambientes tranquilos y un enfoque suave para que te sientas en confianza.',
  },
  {
    icon: CalendarCheck,
    title: 'Agendamiento fácil',
    desc: 'Reserva tu cita de forma rápida y sencilla cuando lo necesites.',
  },
]

export default function Features() {
  return (
    <section className="border-t border-line py-24 lg:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger()}
        className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10"
      >
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <motion.div key={title} variants={fadeUp} className="group text-center sm:text-left">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sage-50 text-sage-600 transition-colors duration-300 group-hover:bg-sage-100 sm:mx-0">
              <Icon size={22} strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 text-[17px] font-medium tracking-tight text-ink">{title}</h3>
            <p className="mx-auto mt-3 max-w-[240px] text-[14.5px] leading-relaxed text-ink-soft sm:mx-0">
              {desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
