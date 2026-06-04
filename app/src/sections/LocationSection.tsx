import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Route, Train, Building2, TrendingUp, MapPin, Landmark, Plane, Users, Home, FileCheck, Leaf } from 'lucide-react'

const locationAdvantages = [
  { icon: Route, title: 'Direct Access to NH24', desc: 'Just 1 minute drive' },
  { icon: Train, title: 'Metro Connectivity', desc: '12 minutes to Ghaziabad Metro Station' },
  { icon: Building2, title: 'Close to IT & Business Hubs', desc: '15 minutes to Noida Sector 62' },
  { icon: TrendingUp, title: 'High Appreciation Potential', desc: "Located in NCR's fastest growing corridor" },
]

const distances = [
  { icon: Route, label: 'NH24', time: '1 MIN' },
  { icon: Train, label: 'GHAZIABAD METRO STATION', time: '12 MIN' },
  { icon: Building2, label: 'NOIDA SECTOR 62', time: '15 MIN' },
  { icon: Landmark, label: 'AKSHARDHAM TEMPLE', time: '20 MIN' },
  { icon: Landmark, label: 'CONNAUGHT PLACE, DELHI', time: '30 MIN' },
  { icon: Plane, label: 'IGI AIRPORT', time: '40 MIN' },
]

const waveCityStats = [
  { icon: MapPin, number: '4200+', label: 'Acres', sublabel: 'Integrated Township' },
  { icon: Users, number: '30,000+', label: 'Happy Residents', sublabel: '' },
  { icon: Home, number: '12,600+', label: 'Possessions Delivered', sublabel: '' },
  { icon: FileCheck, number: '10,800+', label: 'Registrations Completed', sublabel: '' },
  { icon: Leaf, number: 'Platinum Rated', label: 'Green Township', sublabel: 'IGBC Pre-Certified' },
]

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const advantagesRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const distancesRef = useRef<HTMLDivElement>(null)
  const waveCityRef = useRef<HTMLDivElement>(null)
  const waveStatsRef = useRef<HTMLDivElement>(null)

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

    // Advantages
    if (advantagesRef.current) {
      gsap.fromTo(advantagesRef.current.children,
        { y: 25, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: advantagesRef.current, start: 'top 80%' }
        }
      )
    }

    // Map
    gsap.fromTo(mapRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: mapRef.current, start: 'top 80%' }
      }
    )

    // Distances
    if (distancesRef.current) {
      gsap.fromTo(distancesRef.current.children,
        { x: 20, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: distancesRef.current, start: 'top 85%' }
        }
      )
    }

    // Wave City section
    gsap.fromTo(waveCityRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: waveCityRef.current, start: 'top 80%' }
      }
    )

    // Wave City stats with counter animation
    if (waveStatsRef.current) {
      const statItems = waveStatsRef.current.querySelectorAll('.stat-item')
      gsap.fromTo(statItems,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: waveStatsRef.current, start: 'top 85%' }
        }
      )

      // Number counter animation
      statItems.forEach((item) => {
        const numEl = item.querySelector('.stat-number')
        if (numEl && numEl.textContent) {
          const text = numEl.textContent
          const numericMatch = text.match(/[\d,]+/)
          if (numericMatch) {
            const target = parseInt(numericMatch[0].replace(/,/g, ''), 10)
            const obj = { value: 0 }
            gsap.to(obj, {
              value: target,
              duration: 2,
              ease: 'power2.out',
              scrollTrigger: { trigger: item, start: 'top 90%', once: true },
              onUpdate: () => {
                numEl.textContent = text.replace(numericMatch[0], Math.floor(obj.value).toLocaleString())
              }
            })
          }
        }
      })
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="location" className="bg-ge-bg-tertiary">
      {/* Part A — Header + Map */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 lg:pt-28">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-body font-medium tracking-[0.15em] text-ge-gold uppercase mb-4">
            STRATEGIC LOCATION
          </span>
          <h2
            ref={headlineRef}
            className="font-display font-medium text-3xl sm:text-4xl lg:text-[56px] text-ge-text-primary leading-[1.1] mb-5 max-w-[800px] mx-auto"
          >
            <span className="word inline-block">Prime</span>{' '}
            <span className="word inline-block">NH24</span>{' '}
            <span className="word inline-block">Location</span>{' '}
            <span className="word inline-block">with</span>
            <br className="hidden sm:block" />
            <span className="word inline-block">Excellent</span>{' '}
            <span className="word inline-block">Connectivity</span>
          </h2>
          <p ref={subtextRef} className="text-base sm:text-lg font-body text-ge-text-secondary max-w-[640px] mx-auto leading-relaxed">
            Perfectly positioned on NH24, Wave City Ghaziabad offers seamless access
            to Delhi, Noida, Greater Noida, and Meerut. Live close to everything that matters.
          </p>
        </div>

        <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-12 items-start mb-16">
          {/* Left — Location Advantages */}
          <div ref={advantagesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {locationAdvantages.map((adv) => (
              <div key={adv.title} className="flex gap-3">
                <adv.icon className="w-7 h-7 text-ge-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h4 className="font-display text-lg text-ge-text-primary mb-1">{adv.title}</h4>
                  <p className="text-sm font-body text-ge-text-secondary">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Map */}
          <div ref={mapRef} className="border border-ge-border-subtle overflow-hidden">
            <img
              src="/location-map.png"
              alt="Gulshan Empire location map showing NH24 connectivity"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Part B — Connectivity Distance Strip */}
      <div className="bg-ge-bg-secondary border-y border-ge-border-subtle">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-5 sm:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <span className="text-[10px] sm:text-xs font-body font-semibold tracking-[0.1em] text-ge-gold uppercase whitespace-nowrap">
              EVERYTHING WITHIN PERFECT REACH
            </span>
            <div ref={distancesRef} className="flex-1 grid grid-cols-3 sm:grid-cols-6 gap-4 lg:gap-6">
              {distances.map((d) => (
                <div key={d.label} className="flex flex-col items-center text-center">
                  <d.icon className="w-4 h-4 sm:w-5 sm:h-5 text-ge-gold mb-1" strokeWidth={1.5} />
                  <span className="text-[9px] sm:text-[10px] font-body font-medium text-ge-text-primary tracking-wide leading-tight">
                    {d.label}
                  </span>
                  <span className="text-xs sm:text-sm font-display font-semibold text-ge-gold">
                    {d.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Part C — Wave City Advantage */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div
          ref={waveCityRef}
          className="border border-ge-border-subtle p-6 sm:p-10 lg:p-12"
        >
          <div className="grid lg:grid-cols-[35%_65%] gap-8 lg:gap-12 items-start mb-8">
            {/* Left */}
            <div>
              <h3 className="font-display font-medium text-2xl sm:text-3xl lg:text-[42px] text-ge-text-primary leading-[1.15] mb-4">
                The Wave City Advantage
              </h3>
              <p className="text-base sm:text-lg font-body text-ge-text-secondary leading-relaxed">
                India's first smart township with world-class infrastructure, green
                spaces, and a thriving community of over 30,000 residents.
              </p>
            </div>

            {/* Right — Stats */}
            <div ref={waveStatsRef} className="grid grid-cols-2 sm:grid-cols-5 gap-6">
              {waveCityStats.map((stat) => (
                <div key={stat.label} className="stat-item text-center sm:text-left">
                  <stat.icon className="w-5 h-5 text-ge-gold mx-auto sm:mx-0 mb-2" strokeWidth={1.5} />
                  <div className="stat-number font-display font-semibold text-lg sm:text-xl lg:text-2xl text-ge-gold leading-tight">
                    {stat.number}
                  </div>
                  <div className="text-sm font-body text-ge-text-primary">{stat.label}</div>
                  {stat.sublabel && (
                    <div className="text-[10px] font-body text-ge-text-muted mt-0.5">{stat.sublabel}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-ge-bg-secondary px-4 sm:px-6 py-4 flex items-center justify-center gap-2 text-center">
            <MapPin className="w-4 h-4 text-ge-gold flex-shrink-0" strokeWidth={1.5} />
            <span className="text-sm font-body text-ge-text-secondary">
              Strategically located in the heart of NCR's growth corridor — Today's convenience, tomorrow's prosperity.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
