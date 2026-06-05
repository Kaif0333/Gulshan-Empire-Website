import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Route, Building2, TrendingUp, Leaf } from 'lucide-react'

const cards = [
  {
    icon: Route,
    title: 'Infrastructure Growth',
    text: 'The Delhi-Meerut Expressway and Eastern Peripheral Expressway have transformed connectivity, reducing travel time to Delhi, Noida, and Greater Noida. Ongoing metro expansion and road infrastructure projects continue to enhance accessibility and drive property appreciation NH24.',
    quote: '"Wave City is witnessing rapid infrastructure development with new schools, hospitals, and commercial centres adding to its investment appeal."'
  },
  {
    icon: Building2,
    title: 'Smart Township Living',
    text: 'Wave City is a 4,200-acre pre-certified platinum-rated green township with smart city features including Central Command Centre, intelligent traffic management, automated water management, and complete fiber optic connectivity. With 30,000+ residents and counting, it represents the future of integrated township living.',
    quote: '"A self-sufficient mini-city with everything from schools to hospitals within walking distance."'
  },
  {
    icon: TrendingUp,
    title: 'High ROI Potential',
    text: "Properties along NH24 Ghaziabad have shown consistent appreciation due to improved connectivity and infrastructure development. The Wave City location advantage, combined with Gulshan Group's reputation for timely delivery, positions Gulshan Empire as a high ROI investment for both end-users and investors.",
    quote: '"Pre-launch pricing at Rs.9,500/sq.ft offers significant upside potential as the project progresses toward completion."'
  },
  {
    icon: Leaf,
    title: 'Sustainable Development',
    text: "Wave City integrates eco-friendly features like rainwater harvesting, solar-powered street lighting, waste management systems, and over 750 acres of green spaces. The township's commitment to sustainable and green living ensures lower maintenance costs and a healthier lifestyle for residents.",
    quote: '"Environmentally responsible development with features that preserve nature while ensuring modern comforts."'
  }
]

export default function InvestmentSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (headlineRef.current) {
      gsap.fromTo(headlineRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headlineRef.current, start: 'top 80%' }
        }
      )
    }

    if (subtextRef.current) {
      gsap.fromTo(subtextRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: subtextRef.current, start: 'top 85%' }
        }
      )
    }

    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 75%' }
        }
      )
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="investment" className="bg-ge-bg-primary">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-xs font-body font-medium tracking-[0.15em] text-ge-gold uppercase mb-4">
            INVESTMENT POTENTIAL
          </span>
          <h2
            ref={headlineRef}
            className="font-display font-medium text-3xl sm:text-4xl lg:text-[52px] text-ge-text-primary leading-relaxed mb-6"
          >
            Why Invest in Wave City NH24 Ghaziabad?
          </h2>
          <p ref={subtextRef} className="text-base sm:text-lg font-body text-ge-text-secondary max-w-[700px] mx-auto leading-relaxed">
            Strategic location, infrastructure growth, and integrated township advantages make this a compelling investment destination
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-ge-bg-secondary border border-ge-border-subtle p-8 flex flex-col hover:border-ge-gold/50 transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <card.icon className="w-6 h-6 text-ge-gold" strokeWidth={1.5} />
                <h3 className="font-display font-medium text-xl text-ge-text-primary">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm font-body text-ge-text-secondary leading-relaxed mb-6 flex-grow">
                {card.text}
              </p>
              <p className="text-sm font-brand italic text-ge-gold/80 leading-relaxed">
                {card.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
