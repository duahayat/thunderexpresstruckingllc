import React from 'react'
import { Shield, Clock, Truck, Handshake } from 'lucide-react'

const HIGHWAY_IMG = 'https://images.unsplash.com/photo-1485575301924-6891ef935dcd?w=1400&q=80'

const pillars = [
  { icon: Shield,    label: 'Safety First',      sub: 'Every load, every mile' },
  { icon: Clock,     label: 'On-Time Focus',      sub: 'Reliable scheduling' },
  { icon: Truck,     label: 'Nationwide Reach',    sub: 'Coast to coast' },
  { icon: Handshake, label: 'Direct Communication', sub: 'Real people, real answers' },
]

export default function Mission() {
  return (
    <>
      {/* ── MISSION STATEMENT BANNER (dark accent) ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HIGHWAY_IMG} alt="Highway" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg,rgba(28,16,8,0.95),rgba(19,12,6,0.92))' }} />
          <div className="absolute inset-0 diagonal-stripes opacity-20" />
        </div>

        {/* Left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: 'linear-gradient(180deg,transparent,#C0622A,#A88C50,transparent)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center fade-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg,transparent,#A88C50)' }} />
            <span className="section-tag">Our Mission</span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg,#A88C50,transparent)' }} />
          </div>

          {/* Large decorative quote mark */}
          <div className="font-display text-[120px] leading-none text-khaki-700 select-none mb-[-30px] opacity-50">
            "
          </div>

          <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#F5EDD6] leading-relaxed font-light tracking-wide">
            Driven by the values of hard work and reliability, our mission is to provide{' '}
            <span className="text-khaki-300 font-semibold">superior freight transportation services</span>{' '}
            with professionalism, timely delivery, and a commitment to{' '}
            <span className="text-khaki-300 font-semibold">safety across every mile we serve.</span>
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg,transparent,#C0622A)' }} />
            <span className="font-mono text-xs text-rust-400 tracking-widest uppercase">
              Thunder Express Trucking LLC
            </span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg,#C0622A,transparent)' }} />
          </div>
        </div>
      </section>

      {/* ── VALUES BAR ── */}
      <section className="relative py-16 overflow-hidden"
        style={{ background: 'linear-gradient(90deg,#F2ECD8,#E8DCC0,#F2ECD8)' }}>

        {/* Top/bottom lines */}
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute bottom-0 left-0 right-0 section-divider" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={s.label}
                  className="text-center fade-up"
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(168,140,80,0.15)', border: '1px solid rgba(168,140,80,0.3)' }}>
                    <Icon size={20} className="text-khaki-700" />
                  </div>
                  <div className="font-heading text-parchment text-sm font-semibold tracking-wider uppercase mt-2">
                    {s.label}
                  </div>
                  <div className="font-mono text-khaki-600 text-xs tracking-widest mt-1">
                    {s.sub}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
