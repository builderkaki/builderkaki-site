import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AuthModal from './components/AuthModal.jsx'

// Home sections
import Hero from './components/Hero.jsx'
import AudienceSection from './components/AudienceSection.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import NewLaunchesHome from './components/NewLaunches.jsx'
import CommunitySection from './components/CommunitySection.jsx'
import AdvertiseSection from './components/AdvertiseSection.jsx'
import CtaBanner from './components/CtaBanner.jsx'

// Pages
import DiscussionsPage from './pages/DiscussionsPage.jsx'
import JobBoardPage from './pages/JobBoardPage.jsx'
import DirectoryPage from './pages/DirectoryPage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import LaunchesPage from './pages/LaunchesPage.jsx'
import AdvertisePage from './pages/AdvertisePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function HomePage({ submitted, setSubmitted, openAuth }) {
  return (
    <>
      <Hero submitted={submitted} setSubmitted={setSubmitted} openAuth={openAuth} />
      <AudienceSection />
      <FeaturesSection />
      <NewLaunchesHome />
      <CommunitySection />
      <AdvertiseSection />
      <CtaBanner submitted={submitted} setSubmitted={setSubmitted} />
    </>
  )
}

export default function App() {
  const [submitted, setSubmitted] = useState(false)
  const [showAuth, setShowAuth] = useState(false)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-cream flex flex-col">
        <Navbar openAuth={() => setShowAuth(true)} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage submitted={submitted} setSubmitted={setSubmitted} openAuth={() => setShowAuth(true)} />} />
            <Route path="/discussions" element={<DiscussionsPage />} />
            <Route path="/jobs" element={<JobBoardPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/launches" element={<LaunchesPage />} />
            <Route path="/advertise" element={<AdvertisePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      </div>
    </BrowserRouter>
  )
}
