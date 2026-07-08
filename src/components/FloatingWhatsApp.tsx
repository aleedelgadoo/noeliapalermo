import { motion } from 'framer-motion'
import { WhatsAppIcon } from './icons'
import { whatsappLink } from '../lib/whatsapp'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribinos por WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-6 right-5 z-50 flex items-center gap-3 sm:bottom-8 sm:right-8"
    >
      <span className="pointer-events-none hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-ink py-2.5 pl-0 pr-0 text-[13.5px] font-medium text-cream opacity-0 shadow-lg transition-all duration-300 group-hover:max-w-xs group-hover:px-4 group-hover:opacity-100 sm:block">
        ¿Tienes dudas? Escríbenos
      </span>

      <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/60 [animation-duration:2.4s]" />
        <WhatsAppIcon size={27} className="relative" />
      </span>
    </motion.a>
  )
}
