import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Plus, X } from 'lucide-react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/lib/utils'

function FAQAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-6 text-left text-base sm:text-lg font-display font-medium transition-all outline-none [&[data-state=open]>svg.plus]:hidden [&[data-state=open]>svg.cross]:block [&[data-state=closed]>svg.plus]:block [&[data-state=closed]>svg.cross]:hidden",
          className
        )}
        {...props}
      >
        {children}
        <Plus className="plus text-ge-gold size-5 shrink-0 transition-transform duration-200" strokeWidth={2} />
        <X className="cross text-ge-gold size-5 shrink-0 transition-transform duration-200" strokeWidth={2} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

const faqs = [
  {
    question: "What is the price of 3 BHK in Gulshan Empire Wave City?",
    answer: "The 3 BHK + 1 apartments at Gulshan Empire Wave City are approximately 2075 sq.ft. and are priced at Rs.1.97 Cr (pre-launch price Rs.9,500/sq.ft). This includes car parking, club charges, and power backup as per the current pre-launch plan. Post-launch, the indicative price will be Rs.11,000/sq.ft. Prices and details are subject to change as per the developer's final pricing plan."
  },
  {
    question: "What is the RERA registration number for Gulshan Empire?",
    answer: "Gulshan Empire is a fully RERA approved project. The RERA registration number is UPRERAPRJ166511/05/2026. This ensures complete transparency, regulatory compliance, and buyer protection under the Real Estate (Regulation and Development) Act, 2016."
  },
  {
    question: "Where is Gulshan Empire located in Wave City?",
    answer: "Gulshan Empire is located in Sector 1, Oak Wood Enclave, Wave City, Ghaziabad, right on NH24. It offers excellent connectivity to the Delhi-Meerut Expressway."
  },
  {
    question: "What amenities are available at Gulshan Empire?",
    answer: "We offer world-class amenities including an Infinity Edge Pool, Pickleball Court, Aroma Garden, Open Air Theatre, Banquet Hall, and a dedicated Kids Play Area."
  },
  {
    question: "Is Wave City a good place to invest in property?",
    answer: "Yes, Wave City is a 4,200-acre pre-certified platinum-rated green township with smart infrastructure, massive green spaces, and a strategic location on NH24, offering strong appreciation potential."
  },
  {
    question: "What is the possession timeline for Gulshan Empire?",
    answer: "The declared date of completion and possession for Gulshan Empire is February 2031, adhering strictly to the UP RERA guidelines."
  },
  {
    question: "How is the connectivity from Wave City to Delhi and Noida?",
    answer: "Wave City offers high-speed, signal-free connectivity to Noida and Delhi via the newly expanded 14-lane Delhi-Meerut Expressway (NH-24), significantly reducing travel time."
  }
]

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const accordionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' }
        }
      )
    }

    if (accordionRef.current) {
      gsap.fromTo(accordionRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: accordionRef.current, start: 'top 75%' }
        }
      )
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="faqs" className="bg-ge-bg-tertiary">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-xs font-body font-medium tracking-[0.15em] text-ge-gold uppercase mb-4">
            COMMON QUESTIONS
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-[52px] text-ge-text-primary leading-relaxed mb-6">
            Frequently Asked Questions About Gulshan Empire
          </h2>
          <p className="text-base sm:text-lg font-body text-ge-text-secondary max-w-[600px] mx-auto leading-relaxed">
            Find answers to the most common queries about our premium residences in Wave City Ghaziabad
          </p>
        </div>

        <div ref={accordionRef}>
          <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionPrimitive.Item
                key={index}
                value={`item-${index}`}
                className="border-b border-ge-border-subtle last:border-0"
              >
                <FAQAccordionTrigger className="text-ge-text-primary hover:text-ge-gold focus-visible:ring-ge-gold">
                  {faq.question}
                </FAQAccordionTrigger>
                <AccordionPrimitive.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-6 text-base font-body text-ge-text-secondary leading-relaxed pr-8">
                    {faq.answer}
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </div>
    </section>
  )
}
