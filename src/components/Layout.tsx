import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import ScrollToHash from './ScrollToHash'

export default function Layout() {
  return (
    <div className="min-h-screen bg-cream">
      <ScrollToHash />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
