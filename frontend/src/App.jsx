import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Home from './pages/Home'
import JoinUsPage from './pages/JoinUsPage'
import ProjectsPage from './pages/ProjectsPage'
import TrusteesPage from './pages/TrusteesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<ProjectsPage />} />
        <Route path="/trustees" element={<TrusteesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
