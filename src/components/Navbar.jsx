import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const links = [
  { label: 'Discussions', href: '/discussions' },
  { label: 'Job Board', href: '/jobs' },
  { label: 'Directory', href: '/directory' },
  { label: 'Courses', href: '/courses' },
  { label: 'New Launches', href: '/launches' },
  { label: 'Advertise', href: '/advertise' },
]

export default function Navbar({ openAuth }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { user, profile, signOut } = useAuth()
  const userMenuRef = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setUserMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isDark = isHome && !scrolled
  const meta = user?.user_metadata || {}
  const displayName = profile?.full_name || meta.full_name || user?.email?.split('@')[0] || ''
  const initials = displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || '?'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
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
            <Link key={l.href} to={l.href}
              className={`nav-link text-sm font-medium transition-colors ${location.pathname === l.href ? 'text-brand-orange' : isDark ? 'text-white/80 hover:text-white' : 'text-brand-navy/70 hover:text-brand-navy'}`}>
              {l.label}
            </Link>
          ))}

          {/* Auth area */}
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 bg-brand-orange text-white rounded-xl px-3 py-1.5 font-semibold text-sm hover:bg-brand-orange-hover transition-colors">
                <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-xs font-bold">{initials}</div>
                <span className="max-w-[80px] truncate">{displayName.split(' ')[0]}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-12 bg-white rounded-2xl shadow-card-hover border border-gray-100 py-2 w-48 z-50">
                  <Link to="/profile" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-brand-navy hover:bg-gray-50 transition-colors">
                    <span>👤</span> My Profile
                  </Link>
                  <Link to="/discussions" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-brand-navy hover:bg-gray-50 transition-colors">
                    <span>💬</span> Discussions
                  </Link>
                  <Link to="/jobs" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-brand-navy hover:bg-gray-50 transition-colors">
                    <span>💼</span> Saved Jobs
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  <button onClick={() => { signOut(); setUserMenuOpen(false) }} className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 w-full transition-colors">
                    <span>🚪</span> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={openAuth} className="bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              Join Free
            </button>
          )}
        </div>

        {/* Mobile button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden p-2 rounded-lg ${isDark ? 'text-white' : 'text-brand-navy'}`}>
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-3">
          {links.map(l => (
            <Link key={l.href} to={l.href} onClick={() => setMenuOpen(false)} className={`text-sm font-medium py-1 ${location.pathname === l.href ? 'text-brand-orange' : 'text-brand-navy'}`}>{l.label}</Link>
          ))}
          <div className="border-t border-gray-100 pt-3">
            {user ? (
              <>
                <Link to="/profile" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-brand-navy py-1">👤 My Profile</Link>
                <button onClick={() => { signOut(); setMenuOpen(false) }} className="block text-sm font-medium text-red-500 py-1 mt-1">Sign Out</button>
              </>
            ) : (
              <button onClick={() => { openAuth(); setMenuOpen(false) }} className="w-full bg-brand-orange text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                Join Free
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
