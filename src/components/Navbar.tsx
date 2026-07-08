import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { whatsappLink } from '../lib/whatsapp'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#tratamientos', label: 'Tratamientos' },
  { href: '#pacientes', label: 'Pacientes' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || !isHome
          ? 'bg-cream/80 backdrop-blur-lg border-b border-line shadow-[0_1px_0_0_rgba(0,0,0,0.02)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between py-5">
        <Link to="/" className="flex flex-col leading-none group">
          <span className="font-display text-[19px] tracking-tight text-ink group-hover:text-sage-700 transition-colors">
            Dra. Noelia Palermo
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-ink-faint">
            Odontología y Ortodoncia
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={isHome ? link.href : `/${link.href}`}
                className="group relative text-[14.5px] text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-sage-800 py-3 pl-5 pr-4 text-[14px] font-medium text-cream transition-all duration-300 hover:bg-sage-700 hover:shadow-lg hover:shadow-sage-800/20"
          >
            Agendar cita
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full text-ink lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-cream lg:hidden"
          >
            <ul className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-6">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={isHome ? link.href : `/${link.href}`}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[17px] text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-sage-800 py-3 pl-5 pr-4 text-[14px] font-medium text-cream"
                >
                  Agendar cita
                  <ArrowRight size={15} strokeWidth={2} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
