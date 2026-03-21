import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import KeyInformationsPage from './pages/KeyInformationsPage.jsx'
import TopicsPage from './pages/TopicsPage.jsx'
import ProgramPage from './pages/ProgramPage.jsx'
import AuthorsGuidelinesPage from './pages/AuthorsGuidelinesPage.jsx'
import GIPPage from './pages/GIPPage.jsx'
import VenuePage from './pages/VenuePage.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[#f6f7f7]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/key-informations" element={<KeyInformationsPage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/authors-guidelines" element={<AuthorsGuidelinesPage />} />
          <Route path="/gip2026" element={<GIPPage />} />
          <Route path="/venue" element={<VenuePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
