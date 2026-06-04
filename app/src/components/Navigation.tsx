import { useEffect, useState, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { useApp } from '@/context/AppContext'

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Location', href: '#location' },
  { label: 'Floor Plans', href: '#floorplans' },
  { label: 'Amenities', href: '#amenities' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMenuOpen, toggleMenu, setMenuOpen, setEnquiryModalOpen } = useApp()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [setMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-ge-bg-primary/90 backdrop-blur-xl border-b border-ge-border-subtle'
            : 'bg-transparent'
        }`}
        style={{ height: 72 }}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-6 lg:px-12">
          {/* Brand */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="flex flex-col">
            <span className="font-brand italic text-xl text-ge-text-primary leading-tight">
              Gulshan
            </span>
            <span className="text-[10px] font-body font-semibold tracking-[0.15em] text-ge-gold uppercase">
              EMPIRE
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-body font-medium text-ge-text-secondary hover:text-ge-text-primary transition-colors duration-300 link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => { setMenuOpen(false); setEnquiryModalOpen(true); }}
            className="hidden md:inline-flex items-center px-6 py-2.5 border border-ge-gold text-ge-gold text-xs font-body font-semibold tracking-[0.06em] uppercase hover:bg-ge-gold hover:text-ge-bg-primary transition-all duration-300"
          >
            Book Site Visit
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-ge-text-primary p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ge-bg-primary/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-display text-ge-text-primary hover:text-ge-gold transition-colors duration-300"
              style={{
                transitionDelay: isMenuOpen ? `${i * 80}ms` : '0ms',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); setEnquiryModalOpen(true); }}
            className="mt-4 inline-flex items-center px-8 py-3 border border-ge-gold text-ge-gold text-sm font-body font-semibold tracking-[0.06em] uppercase hover:bg-ge-gold hover:text-ge-bg-primary transition-all duration-300"
            style={{
              transitionDelay: isMenuOpen ? '320ms' : '0ms',
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            Book Site Visit
          </button>
        </div>
      </div>
    </>
  )
}
