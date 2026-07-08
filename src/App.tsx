import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TreatmentsPage from './pages/TreatmentsPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tratamientos" element={<TreatmentsPage />} />
      </Route>
    </Routes>
  )
}

export default App
