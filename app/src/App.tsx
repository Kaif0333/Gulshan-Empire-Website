import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AppProvider, useApp } from '@/context/AppContext'
import Navigation from '@/components/Navigation'
import HeroSection from '@/sections/HeroSection'
import OverviewSection from '@/sections/OverviewSection'
import LocationSection from '@/sections/LocationSection'
import FloorPlansSection from '@/sections/FloorPlansSection'
import AmenitiesSection from '@/sections/AmenitiesSection'
import InvestmentSection from '@/sections/InvestmentSection'
import FAQSection from '@/sections/FAQSection'
import FooterCTA from '@/sections/FooterCTA'
import Footer from '@/sections/Footer'
import EnquiryModal from '@/components/EnquiryModal'
import WhatsAppWidget from '@/components/WhatsAppWidget'

function AppContent() {
  const lenisRef = useRef<Lenis | null>(null)
  const { setEnquiryModalOpen } = useApp()

  useEffect(() => {
    // Check if it's the first time visiting in this session
    const hasVisited = sessionStorage.getItem('hasVisitedBefore')
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setEnquiryModalOpen(true)
        sessionStorage.setItem('hasVisitedBefore', 'true')
      }, 3000) // Show after 3 seconds
      return () => clearTimeout(timer)
    }
  }, [setEnquiryModalOpen])

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      lenisRef.current = lenis

      // Connect Lenis to GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update)

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })

      gsap.ticker.lagSmoothing(0)

      return () => {
        lenis.destroy()
        lenisRef.current = null
      }
    }
  }, [])

  return (
    <div className="bg-ge-bg-primary min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <OverviewSection />
        <LocationSection />
        <FloorPlansSection />
        <AmenitiesSection />
        <InvestmentSection />
        <FAQSection />
        <FooterCTA />
      </main>
      <Footer />
      <EnquiryModal />
      <WhatsAppWidget />
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
