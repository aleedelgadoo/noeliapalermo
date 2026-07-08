import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Award, BadgeCheck, GraduationCap, Users } from 'lucide-react'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { whatsappLink } from '../lib/whatsapp'

const DOCTOR_IMG =
  'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1200&auto=format&fit=crop'

const TIMELINE = [
  {
    icon: GraduationCap,
    year: '2012',
    title: 'Título de Odontóloga',
    description: 'Egresada de la Facultad de Odontología, con orientación en odontología integral.',
  },
  {
    icon: Award,
    year: '2015',
    title: 'Especialización en Estética Dental',
    description: 'Formación de posgrado enfocada en diseño de sonrisa, carillas y blanqueamiento.',
  },
  {
    icon: BadgeCheck,
    year: '2018',
    title: 'Certificación en Ortodoncia',
    description: 'Actualización continua en alineadores estéticos y tratamientos de ortodoncia.',
  },
  {
    icon: Users,
    year: 'Hoy',
    title: '+10 años acompañando pacientes',
    description: 'Consultorio propio, tecnología digital y un trato cercano en cada tratamiento.',
  },
]

export default function AboutPage() {
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
            Sobre mí
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-ink lg:text-6xl"
          >
            Dra. Noelia Palermo.
          </motion.h1>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-14 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-[420px] w-full overflow-hidden rounded-[2rem] sm:h-[480px] lg:h-[600px]"
          >
            <img
              src={DOCTOR_IMG}
              alt="Dra. Noelia Palermo"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.1)}>
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-balance text-[16px] leading-relaxed text-ink-soft"
            >
              Soy la Dra. Noelia Palermo, odontóloga apasionada por la odontología estética y
              preventiva. A lo largo de mi trayectoria me formé de manera continua para ofrecer
              tratamientos precisos, cómodos y a la altura de cada paciente, siempre con un trato
              cercano y honesto que genera confianza desde la primera consulta.
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-12 text-[19px] font-medium tracking-tight text-ink"
            >
              Trayectoria profesional
            </motion.h2>

            <motion.ol variants={stagger(0.06)} className="mt-8 flex flex-col gap-8">
              {TIMELINE.map(({ icon: Icon, year, title, description }) => (
                <motion.li key={title} variants={fadeUp} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sage-50 text-sage-600">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>
                    <div className="mt-2 w-px flex-1 bg-line last:hidden" />
                  </div>
                  <div className="pb-1">
                    <span className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-sage-600">
                      {year}
                    </span>
                    <h3 className="mt-1.5 text-[16px] font-medium tracking-tight text-ink">
                      {title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[14.5px] leading-relaxed text-ink-soft">
                      {description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>

            <motion.div variants={fadeUp} className="mt-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-sage-800 py-3.5 pl-6 pr-5 text-[14px] font-medium text-cream transition-all duration-300 hover:bg-sage-700 hover:shadow-lg hover:shadow-sage-800/20"
              >
                Agendar cita
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
