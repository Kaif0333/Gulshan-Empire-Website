import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Bed, MapPin, Building2, ShieldCheck } from 'lucide-react'
import { useApp } from '@/context/AppContext'

const stats = [
  { icon: Bed, value: '3 \u0026 4', label: 'BHK CONFIGURATIONS' },
  { icon: MapPin, value: '5.5', label: 'ACRES DEVELOPMENT' },
  { icon: Building2, value: '4', label: 'PREMIUM TOWERS' },
  { icon: ShieldCheck, value: 'RERA', label: 'APPROVED' },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLSpanElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const priceLabelRef = useRef<HTMLDivElement>(null)
  const priceRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const { setEnquiryModalOpen } = useApp()

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Background fade + scale
    tl.fromTo(
      bgRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
    )

    // Eyebrow
    tl.fromTo(
      eyebrowRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      0.3
    )

    // Headline words
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word')
      tl.fromTo(
        words,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        0.5
      )
    }

    // Description
    tl.fromTo(
      descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      1.0
    )

    // Price
    tl.fromTo(
      [priceLabelRef.current, priceRef.current],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
      1.2
    )

    // CTAs
    tl.fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      1.4
    )

    // Stats bar
    tl.fromTo(
      statsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      1.6
    )
  }, { scope: sectionRef })

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-[100dvh] overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ opacity: 0 }}
      >
        <img
          src="/hero-building.jpg"
          alt="Gulshan Empire luxury residential towers"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.7) 35%, rgba(15,15,15,0.3) 55%, rgba(15,15,15,0.1) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-5 sm:px-8 lg:px-12 pt-24 pb-40">
        <div className="max-w-[640px]">
          {/* Eyebrow */}
          <span
            ref={eyebrowRef}
            className="inline-block text-xs font-body font-medium tracking-[0.15em] text-ge-gold uppercase mb-5"
            style={{ opacity: 0 }}
          >
            GULSHAN EMPIRE PRESENTS
          </span>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-7xl text-ge-text-primary leading-relaxed mb-6"
            style={{ opacity: 1 }}
          >
            <span className="word inline-block" style={{ opacity: 0 }}>Redefine</span>{' '}
            <span className="word inline-block" style={{ opacity: 0 }}>Your</span>
            <br />
            <span className="word inline-block" style={{ opacity: 0 }}>Empire</span>
          </h1>

          {/* Description */}
          <p
            ref={descRef}
            className="text-base sm:text-lg font-body text-ge-text-secondary leading-relaxed max-w-[520px] mb-8"
            style={{ opacity: 0 }}
          >
            Experience ultra luxury living at Gulshan Empire Wave City Ghaziabad.
            Premium 3 &amp; 4 BHK apartments on NH24 with Delhi-Meerut Expressway
            connectivity. RERA approved.
          </p>

          {/* Price */}
          <div className="mb-9" style={{ opacity: 0 }} ref={priceLabelRef}>
            <span className="block text-xs font-body font-medium tracking-[0.1em] text-ge-text-muted uppercase mb-2">
              STARTING FROM
            </span>
            <div ref={priceRef} className="font-display font-semibold text-4xl sm:text-5xl text-ge-gold" style={{ opacity: 0 }}>
              ₹1.97 Cr*
            </div>
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-4" style={{ opacity: 0 }}>
            <button
              onClick={() => handleScrollTo('#floorplans')}
              className="gold-shimmer px-8 py-3.5 text-xs font-body font-semibold tracking-[0.06em] uppercase text-ge-bg-primary hover:shadow-gold transition-shadow duration-300"
            >
              Explore Apartments
            </button>
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="px-8 py-3.5 border border-ge-text-primary text-ge-text-primary text-xs font-body font-semibold tracking-[0.06em] uppercase hover:bg-ge-text-primary hover:text-ge-bg-primary transition-all duration-300"
            >
              Schedule Site Visit
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        ref={statsRef}
        className="absolute bottom-0 left-0 right-0 z-10 bg-ge-bg-primary/80 backdrop-blur-lg border-t border-ge-border-subtle"
        style={{ opacity: 0 }}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-5 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-ge-gold flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="font-display font-semibold text-xl sm:text-2xl lg:text-3xl text-ge-text-primary leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-body font-medium tracking-[0.08em] text-ge-text-muted uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
