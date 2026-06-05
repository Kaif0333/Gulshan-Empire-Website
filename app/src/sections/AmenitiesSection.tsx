import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {
  Clapperboard,
  Flower2,
  Dumbbell,
  Trees,
  Landmark,
  PartyPopper,
  Baby,
  Mountain,
  Footprints,
  Target,
  CircleDot,
  Waves,
  Droplets,
  LifeBuoy,
  Snowflake,
} from 'lucide-react'

const amenities = [
  { icon: Clapperboard, label: 'Open Air Theatre' },
  { icon: Flower2, label: 'Aroma Garden' },
  { icon: Dumbbell, label: 'Pickleball Court' },
  { icon: Trees, label: 'Garden Pavilion' },
  { icon: Landmark, label: 'Temple Complex' },
  { icon: PartyPopper, label: 'Banquet Hall' },
  { icon: Baby, label: 'Kids Play Area' },
  { icon: Mountain, label: 'Multipurpose Lawn' },
  { icon: Footprints, label: 'Reflexology Garden' },
  { icon: Target, label: 'Half Basketball Court' },
  { icon: CircleDot, label: 'Cricket Net Practice' },
  { icon: Waves, label: 'Kids Pool' },
  { icon: Droplets, label: 'Water Feature at the Entrance' },
  { icon: LifeBuoy, label: 'Infinity Edge Pool' },
  { icon: Snowflake, label: 'Skating Rink' },
]

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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

    // Icon grid — Icon Reveal Grid effect
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        { y: 20, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.6, stagger: 0.06, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
        }
      )
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="amenities" className="bg-ge-bg-tertiary">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-body font-medium tracking-[0.15em] text-ge-gold uppercase mb-4">
            WORLD-CLASS AMENITIES
          </span>
          <h2
            ref={headlineRef}
            className="font-display font-medium text-3xl sm:text-4xl lg:text-[56px] text-ge-text-primary leading-relaxed mb-5"
          >
            <span className="word inline-block">The</span>{' '}
            <span className="word inline-block">Finest</span>{' '}
            <span className="word inline-block">is</span>{' '}
            <span className="word inline-block">Still</span>{' '}
            <span className="word inline-block">Unfolding.</span>
          </h2>
          <p ref={subtextRef} className="text-base sm:text-lg font-body text-ge-text-secondary max-w-[560px] mx-auto leading-relaxed">
            A curated collection of lifestyle amenities designed for every age and every moment.
          </p>
        </div>

        {/* Amenities Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-8"
        >
          {amenities.map((amenity) => (
            <div
              key={amenity.label}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-ge-gold/30 flex items-center justify-center mb-3 transition-all duration-300 group-hover:border-ge-gold group-hover:scale-110">
                <amenity.icon
                  className="w-6 h-6 sm:w-7 sm:h-7 text-ge-gold transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-xs sm:text-sm font-body text-ge-text-primary leading-tight max-w-[120px]">
                {amenity.label}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[10px] font-body text-ge-text-muted mt-12 tracking-wide">
          *Amenities shown are indicative and subject to change.
        </p>
      </div>
    </section>
  )
}
