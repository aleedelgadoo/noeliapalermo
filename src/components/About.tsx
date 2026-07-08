import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { fadeUp, stagger, viewport } from '../lib/motion'

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop'

export default function About() {
  return (
    <section id="sobre-mi" className="bg-sage-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.1)}
          className="container-px py-20 lg:py-0 lg:pr-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-[12px] font-semibold uppercase tracking-[0.22em] text-sage-600"
          >
            Sobre mí
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-balance font-display text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-ink lg:text-[2.75rem]"
          >
            Cuidado dental
            <br />
            con propósito.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-balance text-[16px] leading-relaxed text-ink-soft"
          >
            Soy la Dra. Noelia Palermo, apasionada por la odontología estética y preventiva. Mi
            misión es ayudarte a lograr una sonrisa sana, funcional y hermosa, con un trato
            cercano y honesto.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9">
            <Link
              to="/sobre-mi"
              className="group inline-flex items-center gap-2 rounded-full border border-sage-300/70 bg-cream py-3.5 pl-6 pr-5 text-[14.5px] font-medium text-ink transition-all duration-300 hover:border-sage-400 hover:bg-white"
            >
              Conóceme mejor
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="text-sage-600 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-[340px] w-full sm:h-[440px] lg:h-[560px]"
        >
          <img
            src={ABOUT_IMG}
            alt="Consultorio dental moderno de la Dra. Noelia Palermo"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
