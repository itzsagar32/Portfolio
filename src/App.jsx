import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import CinematicIntro from './sections/CinematicIntro'
import HeroFaceSection from './sections/HeroFaceSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import SecuritySection from './sections/SecuritySection'
import JourneySection from './sections/JourneySection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'

export default function App() {
  const [introFinished, setIntroFinished] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setIntroFinished(true)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-slate-100 selection:bg-amber-500 selection:text-black">
      {/* Soft Vignette Overlay */}
      <div className="cinematic-vignette" />

      {/* SECTION 1: Fullscreen Cinematic Intro */}
      {!introFinished && (
        <CinematicIntro onComplete={() => setIntroFinished(true)} />
      )}

      {/* Navigation Header */}
      <Navbar onSkipToContent={() => setIntroFinished(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* SECTIONS 2, 3, 4: Hero 3D Face, Scroll Progression & Scars */}
        <HeroFaceSection />

        {/* SECTION 5: About Me */}
        <AboutSection />

        {/* SECTION 6: Skills & Telemetry */}
        <SkillsSection />

        {/* SECTION 7: Projects */}
        <ProjectsSection />

        {/* SECTION 8: Security & Research */}
        <SecuritySection />

        {/* SECTION 9: Experience / Journey Timeline */}
        <JourneySection />

        {/* SECTION 10: Contact */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}
