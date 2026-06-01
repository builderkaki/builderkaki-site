import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Discussions', href: '/discussions' },
  { label: 'Job Board', href: '/jobs' },
  { label: 'Directory', href: '/directory' },
  { label: 'Courses', href: '/courses' },
  { label: 'New Launches', href: '/launches' },
  { label: 'Advertise', href: '/advertise' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const isDark = isHome && !scrolled

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5">
          <span className="text-brand-orange font-extrabold text-xl tracking-tight">Builder</span>
          <span className={`font-extrabold text-xl tracking-tight transition-colors ${isDark ? 'text-white' : 'text-brand-navy'}`}>Kaki</span>
          <span className="ml-1 text-[10px] font-bold bg-brand-orange text-white rounded-full px-2 py-0.5 uppercase tracking-widest">SG</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.href}
              to={l.href}
              className={`nav-link text-sm font-medium transition-colors ${
                location.pathname === l.href
                  ? 'text-brand-orange'
                  : isDark
                    ? 'text-white/80 hover:text-white'
                    : 'text-brand-navy/70 hover:text-brand-navy'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#join"
            className="bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Join Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg ${isDark ? 'text-white' : 'text-brand-navy'}`}
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
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-3">
          {links.map(l => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium py-1 ${location.pathname === l.href ? 'text-brand-orange' : 'text-brand-navy'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#join"
            onClick={() => setMenuOpen(false)}
            className="bg-brand-orange text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center mt-1"
          >
            Join Free
          </Link>
        </div>
      )}
    </nav>
  )
}
