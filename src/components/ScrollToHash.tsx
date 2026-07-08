import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Smoothly scrolls to the #hash target after route changes (React Router doesn't do this natively). */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const id = hash.slice(1)
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])

  return null
}
