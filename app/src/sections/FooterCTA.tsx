import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useApp } from '@/context/AppContext'

export default function FooterCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { setEnquiryModalOpen } = useApp()

  useGSAP(() => {
    if (contentRef.current) {
      const children = contentRef.current.children
      gsap.fromTo(children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="contact" className="bg-ge-bg-secondary">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
        <div ref={contentRef} className="flex flex-col items-center text-center">
          <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-[56px] text-ge-text-primary leading-[1.1] mb-5">
            Your Empire Awaits
          </h2>

          <p className="text-base sm:text-lg font-body text-ge-text-secondary max-w-[560px] leading-relaxed mb-10">
            Experience the pinnacle of luxury living at Wave City, Ghaziabad.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-12">
            <button 
              onClick={() => setEnquiryModalOpen(true)}
              className="gold-shimmer px-10 py-4 text-xs font-body font-semibold tracking-[0.06em] uppercase text-ge-bg-primary hover:shadow-gold transition-shadow duration-300"
            >
              Schedule a Visit
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
            <div className="flex items-center gap-2.5 text-ge-text-secondary">
              <Phone className="w-4 h-4 text-ge-gold" strokeWidth={1.5} />
              <span className="text-sm font-body">+91 72755 75757</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-ge-border-subtle" />
            <div className="flex items-center gap-2.5 text-ge-text-secondary">
              <Mail className="w-4 h-4 text-ge-gold" strokeWidth={1.5} />
              <span className="text-sm font-body">info@gulshanempire.com</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-ge-border-subtle" />
            <div className="flex items-center gap-2.5 text-ge-text-secondary">
              <MapPin className="w-4 h-4 text-ge-gold" strokeWidth={1.5} />
              <span className="text-sm font-body">Wave City, Ghaziabad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
