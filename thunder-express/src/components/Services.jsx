import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, Package, Clock, Shield, MapPin, BarChart3, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Full Truckload (FTL)',
    short: 'FTL',
    desc: 'Dedicated trailer capacity for large shipments. Your freight, your truck, your timeline — no stops, no delays, no compromises.',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=75',
  },
  {
    icon: Package,
    title: 'Less-Than-Truckload (LTL)',
    short: 'LTL',
    desc: 'Share the road, not the cost. Efficient freight consolidation for smaller loads without sacrificing delivery speed or care.',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=75',
  },
  {
    icon: Clock,
    title: 'Expedited Freight',
    short: 'EXPRESS',
    desc: 'When time is the cargo. Priority routing, direct delivery, and round-the-clock coordination for your most urgent shipments.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
  },
  {
    icon: Shield,
    title: 'Secured Freight',
    short: 'SECURED',
    desc: 'High-value and sensitive cargo handled with extra precautions — sealed trailers, verified chain of custody, full accountability.',
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=75',
  },
  {
    icon: MapPin,
    title: 'Regional & Long-Haul',
    short: 'RANGE',
    desc: 'From same-state hauls to coast-to-coast runs, our drivers know the routes and the responsibilities they carry.',
    img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=75',
  },
  {
    icon: BarChart3,
    title: 'Logistics Consulting',
    short: 'CONSULT',
    desc: 'We help you optimize freight strategy, reduce costs, and build supply chain resilience — before the first wheel turns.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=75',
  },
]

export default function Services() {
  return (
    <section className="py-28 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg,#FDFBF6 0%,#F2ECD8 50%,#FDFBF6 100%)'
        }}
      />
      {/* Diagonal stripes bg */}
      <div className="absolute inset-0 diagonal-stripes opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 fade-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,#C0622A,#A88C50)' }} />
              <span className="section-tag">What We Haul</span>
            </div>
            <h2 className="section-title text-5xl lg:text-6xl leading-none">
              FREIGHT SOLUTIONS<br />FOR EVERY NEED
            </h2>
          </div>
          <Link to="/services" className="btn-outline self-start md:self-auto whitespace-nowrap">
            <span className="flex items-center gap-2">All Services <ArrowRight size={14} /></span>
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.short}
                className="card-vintage group relative overflow-hidden rounded-sm cursor-pointer fade-up"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Image */}
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg,transparent 30%,#F5EDD6 100%)' }} />
                  {/* Short label top-right */}
                  <div className="absolute top-3 right-3 worn-label text-xs">
                    {s.short}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(168,140,80,0.15)', border: '1px solid rgba(168,140,80,0.3)' }}>
                      <Icon size={15} className="text-khaki-600" />
                    </div>
                    <h3 className="font-heading text-parchment text-base font-semibold tracking-wide uppercase">
                      {s.title}
                    </h3>
                  </div>
                  <p className="font-body text-khaki-600 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                    {s.desc}
                  </p>
                </div>

                {/* Bottom hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: 'linear-gradient(90deg,#C0622A,#A88C50)' }} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
