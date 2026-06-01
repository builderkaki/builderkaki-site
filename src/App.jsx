import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AudienceSection from './components/AudienceSection.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import NewLaunches from './components/NewLaunches.jsx'
import CommunitySection from './components/CommunitySection.jsx'
import AdvertiseSection from './components/AdvertiseSection.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <Hero submitted={submitted} setSubmitted={setSubmitted} />
      <AudienceSection />
      <FeaturesSection />
      <NewLaunches />
      <CommunitySection />
      <AdvertiseSection />
      <CtaBanner submitted={submitted} setSubmitted={setSubmitted} />
      <Footer />
    </div>
  )
}
