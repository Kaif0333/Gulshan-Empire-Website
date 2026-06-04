export default function Footer() {
  return (
    <footer className="bg-ge-bg-primary border-t border-ge-border-subtle">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — Brand + Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="font-brand italic text-lg text-ge-text-primary">
              Gulshan
            </span>
            <span className="text-[10px] font-body text-ge-text-muted tracking-wide">
              © 2024 Gulshan Empire. All rights reserved.
            </span>
          </div>

          {/* Center — Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="text-[11px] font-body text-ge-text-muted hover:text-ge-text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] font-body text-ge-text-muted hover:text-ge-text-secondary transition-colors">
              Terms
            </a>
            <a href="#" className="text-[11px] font-body text-ge-text-muted hover:text-ge-text-secondary transition-colors">
              RERA Details
            </a>
          </div>

          {/* Right — RERA */}
          <span className="text-[10px] font-body text-ge-text-muted tracking-wide">
            RERA Registration: UPRERAPRJ123456
          </span>
        </div>
      </div>
    </footer>
  )
}
