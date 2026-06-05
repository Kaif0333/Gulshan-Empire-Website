import { useRef, useState, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { X, ArrowRight, Maximize2 } from 'lucide-react'

const floorPlans = [
  {
    id: '3bhk',
    image: '/floorplan-3bhk.jpg',
    title: 'TYPICAL 3BHK + Helper\'s Room',
    subtitle: 'Apartment Layout',
    areas: [
      { label: 'Carpet Area', value: '1142.17 Sq.Ft', sub: '(106.11 Sq. Mt)' },
      { label: 'Built-up Area', value: '1640.00 Sq.Ft', sub: '(152.36 Sq. Mt)' },
      { label: 'Saleable Area', value: '2075.00 Sq.Ft', sub: '(192.77 Sq. Mt)' },
    ],
  },
  {
    id: '4bhk',
    image: '/floorplan-4bhk.jpg',
    title: 'TYPICAL 4BHK + Helper\'s Room',
    subtitle: 'Apartment Layout',
    areas: [
      { label: 'Carpet Area', value: '1583.38 Sq.Ft', sub: '(147.10 Sq. Mt)' },
      { label: 'Built-up Area', value: '2090.00 Sq.Ft', sub: '(194.96 Sq. Mt)' },
      { label: 'Saleable Area', value: '2750.00 Sq.Ft', sub: '(255.48 Sq. Mt)' },
    ],
  },
]

export default function FloorPlansSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [activePlan, setActivePlan] = useState<string | null>(null)

  const openModal = useCallback((planId: string) => {
    setActivePlan(planId)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setModalOpen(false)
    document.body.style.overflow = ''
  }, [])

  useGSAP(() => {
    // Headline
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word')
      gsap.fromTo(words,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: headlineRef.current, start: 'top 80%' }
        }
      )
    }

    // Subtext
    gsap.fromTo(subtextRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: subtextRef.current, start: 'top 85%' }
      }
    )

    // Cards
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
        }
      )
    }
  }, { scope: sectionRef })

  const activePlanData = floorPlans.find(p => p.id === activePlan)

  return (
    <>
      <section ref={sectionRef} id="floorplans" className="bg-ge-bg-primary">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-xs font-body font-medium tracking-[0.15em] text-ge-gold uppercase mb-4">
              CONFIGURATIONS
            </span>
            <h2
              ref={headlineRef}
              className="font-display font-medium text-3xl sm:text-4xl lg:text-[56px] text-ge-text-primary leading-relaxed mb-5"
            >
              <span className="word inline-block">Thoughtfully</span>{' '}
              <span className="word inline-block">Designed</span>{' '}
              <span className="word inline-block">Residences</span>
            </h2>
            <p ref={subtextRef} className="text-base sm:text-lg font-body text-ge-text-secondary max-w-[640px] mx-auto leading-relaxed">
              Every home at Gulshan Empire is crafted with precision — optimized layouts
              that maximize space, light, and ventilation.
            </p>
          </div>

          {/* Floor Plan Cards */}
          <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {floorPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-ge-bg-secondary border border-ge-border-subtle overflow-hidden group"
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden aspect-[4/3] cursor-pointer"
                  onClick={() => openModal(plan.id)}
                >
                  <img
                    src={plan.image}
                    alt={`${plan.title} floor plan`}
                    className="w-full h-full object-contain bg-white transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl sm:text-2xl text-ge-gold leading-snug">
                    {plan.title}
                  </h3>
                  <p className="text-sm font-body text-ge-text-muted mt-1">
                    {plan.subtitle}
                  </p>

                  <div className="h-px bg-ge-border-subtle my-5" />

                  {/* Specs Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {plan.areas.map((area) => (
                      <div key={area.label}>
                        <span className="block text-[10px] font-body font-medium tracking-[0.08em] text-ge-text-muted uppercase mb-1">
                          {area.label}
                        </span>
                        <span className="block text-sm sm:text-base font-body font-medium text-ge-text-primary">
                          {area.value}
                        </span>
                        <span className="block text-[10px] font-body text-ge-text-muted">
                          {area.sub}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => openModal(plan.id)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-body font-medium text-ge-gold hover:gap-2.5 transition-all duration-300"
                  >
                    View Full Layout <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[10px] font-body text-ge-text-muted mt-10 tracking-wide">
            *These are purely conceptual and constitute no legal offerings. 1 Sq. Mt. = 10.764 Sq. Ft.
          </p>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && activePlanData && (
        <div
          className="fixed inset-0 z-[100] bg-ge-bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-ge-text-secondary hover:text-ge-text-primary transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-7 h-7" />
          </button>

          <div
            className="w-full max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display text-xl sm:text-2xl text-ge-gold mb-4 text-center">
              {activePlanData.title}
            </h3>
            <img
              src={activePlanData.image}
              alt={`${activePlanData.title} full layout`}
              className="max-w-full max-h-[70vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
