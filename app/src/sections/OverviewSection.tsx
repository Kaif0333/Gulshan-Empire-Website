import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Building2, Bed, MapPin, ShieldCheck, Route, Train, Plane, Hospital, GraduationCap, ShoppingBag, ArrowRight } from 'lucide-react'

const specs = [
  { icon: Building2, value: '4', label: 'PREMIUM TOWERS' },
  { icon: Bed, value: '3\u00264 BHK', label: 'SPACIOUS HOMES' },
  { icon: MapPin, value: '5.5 ACRES', label: 'TOTAL LAND AREA' },
  { icon: ShieldCheck, value: 'RERA', label: 'APPROVED' },
]

const connectivity = [
  { icon: Route, name: 'NH24 Highway', time: '1 Min' },
  { icon: Train, name: 'Wave City Metro', time: '5 Mins' },
  { icon: Plane, name: 'IGI Airport', time: '40 Mins' },
  { icon: Hospital, name: 'Top Hospitals', time: '10 Mins' },
  { icon: GraduationCap, name: 'Reputed Schools', time: '5-10 Mins' },
  { icon: ShoppingBag, name: 'Shopping Malls', time: '10 Mins' },
]

const features = [
  {
    image: '/feature-homes.jpg',
    title: 'Spacious 3 & 4 BHK Homes',
    description: 'Optimized layouts with abundant natural light and ventilation.',
    link: 'VIEW FLOOR PLANS',
    href: '#floorplans',
  },
  {
    image: '/feature-density.jpg',
    title: 'Low-Density Living',
    description: 'Less crowd, more space, greater privacy and peace of mind.',
    link: 'LEARN MORE',
    href: '#overview',
  },
  {
    image: '/feature-amenities.jpg',
    title: 'World-Class Amenities',
    description: 'Curated lifestyle amenities for health, leisure & recreation.',
    link: 'EXPLORE AMENITIES',
    href: '#amenities',
  },
  {
    image: '/feature-gated.jpg',
    title: 'Gated & Secure Community',
    description: '24/7 security with advanced surveillance for your safety.',
    link: 'SAFETY & SECURITY',
    href: '#overview',
  },
  {
    image: '/feature-green.jpg',
    title: 'Green & Sustainable Living',
    description: 'Eco-friendly spaces for a healthier and greener tomorrow.',
    link: 'SUSTAINABILITY',
    href: '#overview',
  },
]

export default function OverviewSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const specsRef = useRef<HTMLDivElement>(null)
  const masterPlanRef = useRef<HTMLDivElement>(null)
  const connectRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Headline words
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

    // Description
    gsap.fromTo(descRef.current,
      { y: 25, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: descRef.current, start: 'top 80%' }
      }
    )

    // Specs
    if (specsRef.current) {
      gsap.fromTo(specsRef.current.children,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: specsRef.current, start: 'top 85%' }
        }
      )
    }

    // Master plan image
    gsap.fromTo(masterPlanRef.current,
      { x: 40, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: masterPlanRef.current, start: 'top 80%' }
      }
    )

    // Connectivity items
    if (connectRef.current) {
      gsap.fromTo(connectRef.current.children,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: connectRef.current, start: 'top 85%' }
        }
      )
    }

    // Feature cards
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
        }
      )
    }
  }, { scope: sectionRef })

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} id="overview" className="bg-ge-bg-primary">
      {/* Part A — Master Plan Row */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-12 items-start">
          {/* Left — Text */}
          <div>
            <span className="inline-block text-xs font-body font-medium tracking-[0.15em] text-ge-gold uppercase mb-4">
              PROJECT OVERVIEW
            </span>

            <h2
              ref={headlineRef}
              className="font-display font-medium text-3xl sm:text-4xl lg:text-[56px] text-ge-text-primary leading-[1.1] mb-6"
            >
              <span className="word inline-block">Ultra</span>{' '}
              <span className="word inline-block">Luxury</span>{' '}
              <span className="word inline-block">Residences</span>
              <br className="hidden sm:block" />
              <span className="word inline-block">in</span>{' '}
              <span className="word inline-block">the</span>{' '}
              <span className="word inline-block">Heart</span>{' '}
              <span className="word inline-block">of</span>{' '}
              <span className="word inline-block">Wave</span>{' '}
              <span className="word inline-block">City</span>
            </h2>

            <p ref={descRef} className="text-base sm:text-lg font-body text-ge-text-secondary leading-relaxed mb-8">
              Gulshan Empire is a premium residential address on NH24, Ghaziabad.
              Thoughtfully designed for those who value elegance, comfort, and
              seamless connectivity.
            </p>

            {/* Specs */}
            <div ref={specsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {specs.map((spec) => (
                <div key={spec.label} className="text-left">
                  <spec.icon className="w-6 h-6 text-ge-gold mb-2" strokeWidth={1.5} />
                  <div className="font-display font-semibold text-xl sm:text-2xl text-ge-text-primary">
                    {spec.value}
                  </div>
                  <div className="text-[10px] font-body font-medium tracking-[0.08em] text-ge-text-muted uppercase">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#floorplans"
              onClick={(e) => handleLinkClick(e, '#floorplans')}
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-ge-gold hover:gap-3 transition-all duration-300"
            >
              Explore Master Plan <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — Master Plan Image */}
          <div ref={masterPlanRef} className="relative border border-ge-gold/25">
            <img
              src="/master-plan.jpg"
              alt="Gulshan Empire Master Plan — aerial site view"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-ge-bg-primary/90 px-3 py-2 text-[10px] font-body font-semibold tracking-[0.1em] text-ge-text-muted uppercase border border-ge-border-subtle">
              LEGEND
            </div>
          </div>
        </div>
      </div>

      {/* Part B — Connectivity Strip */}
      <div className="bg-ge-bg-secondary border-y border-ge-border-subtle">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-shrink-0">
              <h3 className="font-display text-xl sm:text-2xl text-ge-text-primary mb-1">
                Seamless Connectivity
              </h3>
              <p className="text-sm font-body text-ge-text-secondary">
                Live connected to everything that matters.
              </p>
            </div>
            <div ref={connectRef} className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
              {connectivity.map((item) => (
                <div key={item.name} className="flex flex-col items-center text-center">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-ge-gold mb-2" strokeWidth={1.5} />
                  <span className="text-xs sm:text-sm font-body text-ge-text-primary leading-tight">{item.name}</span>
                  <span className="text-[10px] sm:text-xs font-body text-ge-text-muted">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Part C — Feature Cards */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-ge-bg-secondary border border-ge-border-subtle overflow-hidden cursor-pointer"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h4 className="font-display text-lg text-ge-text-primary mb-2 leading-snug">
                  {feature.title}
                </h4>
                <p className="text-sm font-body text-ge-text-secondary mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <a
                  href={feature.href}
                  onClick={(e) => handleLinkClick(e, feature.href)}
                  className="inline-flex items-center gap-1.5 text-[11px] font-body font-semibold tracking-[0.06em] text-ge-gold uppercase hover:gap-2.5 transition-all duration-300"
                >
                  {feature.link} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
