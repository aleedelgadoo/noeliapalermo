import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TreatmentsPage from './pages/TreatmentsPage'
import PatientExperiencesPage from './pages/PatientExperiencesPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tratamientos" element={<TreatmentsPage />} />
        <Route path="experiencias" element={<PatientExperiencesPage />} />
        <Route path="sobre-mi" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App
