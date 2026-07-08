import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { InstagramIcon, WhatsAppIcon } from './icons'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { whatsappLink } from '../lib/whatsapp'

const CONTACT = [
  { icon: MapPin, text: 'Juan Larrea 1470, B° General Paz, Córdoba Capital' },
  { icon: Phone, text: '+54 9 3515 20-0092', href: 'tel:+5493515200092' },
  { icon: Mail, text: 'hola@dranoeliapalermo.com', href: 'mailto:hola@dranoeliapalermo.com' },
]

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-line">
      <div className="container-px mx-auto max-w-7xl py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger()}
          className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-8"
        >
          <motion.div variants={fadeUp}>
            <span className="font-display text-[22px] tracking-tight text-ink">
              Dra. Noelia Palermo
            </span>
            <p className="mt-4 max-w-sm text-balance text-[15px] leading-relaxed text-ink-soft">
              Odontología moderna, personalizada y enfocada en tu bienestar. Agenda tu cita y da
              el primer paso hacia la sonrisa que quieres.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-sage-800 py-3.5 pl-6 pr-5 text-[14px] font-medium text-cream transition-all duration-300 hover:bg-sage-700"
            >
              Agendar cita
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 gap-4 sm:grid-cols-1">
            {CONTACT.map(({ icon: Icon, text, href }) => {
              const content = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage-50 text-sage-600">
                    <Icon size={17} strokeWidth={1.6} />
                  </span>
                  <span className="text-[14.5px] leading-relaxed text-ink-soft">{text}</span>
                </>
              )
              return href ? (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-4 transition-colors hover:text-ink"
                >
                  {content}
                </a>
              ) : (
                <div key={text} className="flex items-center gap-4">
                  {content}
                </div>
              )
            })}
          </motion.div>
        </motion.div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-6 border-t border-line pt-8 sm:flex-row">
          <p className="text-[13px] text-ink-faint">
            © 2026 Dra. Noelia Palermo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-sage-300 hover:text-sage-700"
            >
              <InstagramIcon size={15} strokeWidth={1.6} />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-sage-300 hover:text-sage-700"
            >
              <WhatsAppIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
