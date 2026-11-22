import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const nav = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/services', label: 'Services' },
  { to: '/contact',  label: 'Contact'  },
  { to: '/quote',    label: 'Get a Quote' },
]

const services = [
  'Full Truckload (FTL)',
  'Less-Than-Truckload (LTL)',
  'Expedited Freight',
  'Secured Freight',
  'Regional & Long-Haul',
  'Logistics Consulting',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#1C1008,#130C06)' }}>

      {/* Top divider */}
      <div className="section-divider" />

      {/* Diagonal texture */}
      <div className="absolute inset-0 diagonal-stripes opacity-15 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div>
              <div className="font-display text-3xl tracking-wider text-[#F5EDD6] leading-none">
                THUNDER EXPRESS
              </div>
              <div className="font-mono text-xs tracking-[0.3em] text-khaki-500 mt-1 uppercase">
                Trucking LLC
              </div>
            </div>
            <p className="font-body text-khaki-400 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Freight transportation driven by hard work, reliability, and a commitment to safety — across every mile.
            </p>
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm"
              style={{ border: '1px solid rgba(168,140,80,0.3)', background: 'rgba(168,140,80,0.08)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-khaki-500" />
              <span className="font-mono text-khaki-400 text-[10px] tracking-widest uppercase">
                Cedar Hill, TX · Family-Operated
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-khaki-300 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {nav.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-body text-khaki-500 text-sm hover:text-khaki-200 transition-colors flex items-center gap-2 group"
                    style={{ fontWeight: 300 }}
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-rust-400" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-khaki-300 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="font-body text-khaki-500 text-sm hover:text-khaki-200 transition-colors flex items-center gap-2 group"
                    style={{ fontWeight: 300 }}
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-rust-400" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-khaki-300 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:6827722464" className="flex items-start gap-3 group">
                  <Phone size={14} className="text-khaki-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] text-khaki-600 tracking-widest uppercase mb-0.5">Main</div>
                    <div className="font-body text-khaki-400 text-sm group-hover:text-khaki-200 transition-colors">682-772-2464</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:6826511100" className="flex items-start gap-3 group">
                  <Phone size={14} className="text-khaki-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] text-khaki-600 tracking-widest uppercase mb-0.5">Operations</div>
                    <div className="font-body text-khaki-400 text-sm group-hover:text-khaki-200 transition-colors">682-651-1100</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:thunderexpress.trucking@gmail.com" className="flex items-start gap-3 group">
                  <Mail size={14} className="text-khaki-500 mt-0.5 flex-shrink-0" />
                  <div className="font-body text-khaki-400 text-sm group-hover:text-khaki-200 transition-colors break-all">
                    thunderexpress.trucking@gmail.com
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=1521+Finley+St+Cedar+Hill+TX+75104"
                  target="_blank" rel="noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin size={14} className="text-khaki-500 mt-0.5 flex-shrink-0" />
                  <div className="font-body text-khaki-400 text-sm group-hover:text-khaki-200 transition-colors">
                    1521 Finley St<br />Cedar Hill, TX 75104
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-khaki-600 text-[11px] tracking-widest">
            © {new Date().getFullYear()} THUNDER EXPRESS TRUCKING LLC · ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-khaki-600 text-[11px] tracking-widest">
            1521 FINLEY ST · CEDAR HILL, TX 75104
          </p>
        </div>
      </div>
    </footer>
  )
}
