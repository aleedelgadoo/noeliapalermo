import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TreatmentsPage from './pages/TreatmentsPage'
import PatientExperiencesPage from './pages/PatientExperiencesPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tratamientos" element={<TreatmentsPage />} />
        <Route path="experiencias" element={<PatientExperiencesPage />} />
      </Route>
    </Routes>
  )
}

export default App
