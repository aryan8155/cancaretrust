import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Home from './pages/Home'
import JoinUsPage from './pages/JoinUsPage'
import ProjectsPage from './pages/ProjectsPage'
import TrusteesPage from './pages/TrusteesPage'
import EventsPage from './pages/EventsPage'
import GalleryPage from './pages/GalleryPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminDashboardPage from './pages/AdminDashboardPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<ProjectsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/trustees" element={<TrusteesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
