import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, Package, Clock, Shield, ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'

const CTA_IMG = 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&q=80'

// Marquee ticker between sections
function Ticker() {
  const items = [
    'FULL TRUCKLOAD', 'LTL FREIGHT', 'EXPEDITED DELIVERY',
    'NATIONWIDE COVERAGE', 'SAFETY FIRST', 'ON-TIME DELIVERY',
    'CEDAR HILL TX', 'THUNDER EXPRESS', 'PROFESSIONAL DRIVERS',
  ]
  const repeated = [...items, ...items]
  return (
    <div className="overflow-hidden py-3 border-y"
      style={{
        borderColor: 'rgba(168,140,80,0.2)',
        background: 'linear-gradient(90deg,#F2ECD8,#E8DCC0,#F2ECD8)'
      }}>
      <div className="marquee-inner">
        {repeated.map((item, i) => (
          <span key={i} className="font-mono text-xs tracking-[0.25em] uppercase mx-8 flex items-center gap-8">
            <span className="text-khaki-600">{item}</span>
            <span className="text-rust-500 text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// Compact teaser strip — icons only, no duplicated page content
function AtAGlance() {
  const items = [
    { icon: Truck,  label: 'Full Truckload',   sub: 'Dedicated capacity' },
    { icon: Package, label: 'LTL Freight',      sub: 'Cost-efficient hauls' },
    { icon: Clock,  label: 'Expedited',         sub: 'Priority delivery' },
    { icon: Shield, label: 'Secured Freight',   sub: 'High-value cargo' },
  ]
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#FDFBF6 0%,#F2ECD8 50%,#FDFBF6 100%)' }}>
      <div className="absolute inset-0 diagonal-stripes opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 fade-up">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,transparent,#A88C50)' }} />
            <span className="section-tag">What We Do</span>
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,#A88C50,transparent)' }} />
          </div>
          <h2 className="section-title text-4xl lg:text-5xl">FREIGHT SOLUTIONS AT A GLANCE</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <div key={it.label} className="card-vintage rounded-sm p-6 text-center fade-up"
                style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(168,140,80,0.12)', border: '1px solid rgba(168,140,80,0.3)' }}>
                  <Icon size={20} className="text-khaki-600" />
                </div>
                <div className="font-heading text-parchment text-sm font-semibold tracking-wide uppercase mb-1">
                  {it.label}
                </div>
                <div className="font-mono text-khaki-600 text-xs">{it.sub}</div>
              </div>
            )
          })}
        </div>

        <div className="text-center fade-up">
          <Link to="/services" className="btn-outline inline-flex">
            <span className="flex items-center gap-2">View All Services <ArrowRight size={14} /></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Final CTA band with background photo
function CtaBand() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={CTA_IMG} alt="Freight on the highway" className="w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg,rgba(28,16,8,0.93),rgba(19,12,6,0.88))' }} />
        <div className="absolute inset-0 diagonal-stripes opacity-20" />
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(180deg,transparent,#C0622A,#A88C50,transparent)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-up">
        <span className="section-tag block mb-5">Ready When You Are</span>
        <h2 className="font-display text-5xl lg:text-6xl leading-none tracking-wide mb-6"
          style={{
            background: 'linear-gradient(135deg, #F5EDD6 30%, #A88C50)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
          LET'S MOVE YOUR FREIGHT
        </h2>
        <p className="font-body text-khaki-300 text-lg leading-relaxed max-w-xl mx-auto mb-10" style={{ fontWeight: 300 }}>
          Get a fast, straightforward quote — or reach out and talk to a real person about your shipment.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/quote" className="btn-primary">
            <span className="flex items-center gap-2">Request a Quote <ArrowRight size={16} /></span>
          </Link>
          <Link to="/contact" className="btn-outline-light">
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <AtAGlance />
      <CtaBand />
    </>
  )
}
