import { useState, useEffect } from 'react'

const links = [
  { label: 'Who It\'s For', href: '#audience' },
  { label: 'Features', href: '#features' },
  { label: 'New Launches', href: '#launches' },
  { label: 'Community', href: '#community' },
  { label: 'Advertise', href: '#advertise' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5">
          <span className="text-brand-orange font-extrabold text-xl tracking-tight">Builder</span>
          <span className={`font-extrabold text-xl tracking-tight transition-colors ${scrolled ? 'text-brand-navy' : 'text-white'}`}>Kaki</span>
          <span className="ml-1 text-[10px] font-bold bg-brand-orange text-white rounded-full px-2 py-0.5 uppercase tracking-widest">SG</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-sm font-medium transition-colors ${
                scrolled ? 'text-brand-navy/70 hover:text-brand-navy' : 'text-white/80 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            className="bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-brand-navy' : 'text-white'}`}
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-brand-navy font-medium text-sm">{l.label}</a>
          ))}
          <a href="#join" onClick={() => setMenuOpen(false)} className="bg-brand-orange text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  )
}
