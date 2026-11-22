import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }          = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-espresso-900/97 backdrop-blur-md shadow-2xl border-b border-khaki-800/40'
          : 'bg-transparent'
      }`}
    >
      {/* Top ticker bar */}
      <div className="bg-khaki-700 text-espresso-900 text-xs font-mono tracking-widest py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="opacity-80">THUNDER EXPRESS TRUCKING LLC · EST. CEDAR HILL, TX</span>
          <div className="flex items-center gap-6">
            <a href="tel:6827722464" className="flex items-center gap-1.5 hover:text-rust-500 transition-colors">
              <Phone size={11} /> MAIN: 682-772-2464
            </a>
            <span className="opacity-40">|</span>
            <a href="tel:6826511100" className="flex items-center gap-1.5 hover:text-rust-500 transition-colors">
              <Phone size={11} /> OPS: 682-651-1100
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 flex items-center justify-center">
            <img
              src="/images/Thunder Express Logo.png"
              alt="Thunder Express"
              className="w-full h-full object-contain"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
            />
            {/* Fallback emblem */}
            <div className="hidden w-11 h-11 items-center justify-center rounded-full border-2 border-khaki-500 bg-khaki-800/30">
              <span className="font-display text-khaki-600 text-lg leading-none">T</span>
            </div>
          </div>
          <div>
            <div className="font-display text-2xl leading-none tracking-wider text-parchment group-hover:text-sand transition-colors">
              THUNDER EXPRESS
            </div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-khaki-500 uppercase">
              Trucking LLC
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${pathname === l.to ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/quote" className="btn-primary text-sm py-2.5 px-6 ml-2">
            <span>Get a Quote</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-khaki-700 hover:text-parchment transition-colors p-1"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'linear-gradient(180deg,#F2ECD8,#FAF7F0)' }}
      >
        <div className="px-6 py-4 flex flex-col gap-1 border-t border-khaki-800/40">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link py-3 border-b border-khaki-900/60 block ${pathname === l.to ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/quote" className="btn-primary text-center mt-4 block">
            <span>Get a Quote</span>
          </Link>
          <div className="mt-4 pt-4 border-t border-khaki-900/60 space-y-2">
            <a href="tel:6827722464" className="flex items-center gap-2 text-khaki-600 text-sm font-mono">
              <Phone size={14} /> 682-772-2464
            </a>
            <a href="tel:6826511100" className="flex items-center gap-2 text-khaki-600 text-sm font-mono">
              <Phone size={14} /> 682-651-1100
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
