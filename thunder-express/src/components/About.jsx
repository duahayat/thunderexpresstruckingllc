import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const ABOUT_IMG   = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80'
const CONVOY_IMG  = 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=80'

const pillars = [
  'Safety-first operations culture',
  'Experienced professional drivers',
  'Real-time shipment visibility',
  'Consistent on-time delivery focus',
  'Careful, compliant operations',
  'Direct communication, always',
]

export default function About() {
  return (
    <section className="py-28 relative overflow-hidden">

      {/* bg tint */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg,#FAF7F0 0%,#FDFBF6 50%,#FAF7F0 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 fade-up">
          <div className="h-px flex-1 max-w-[60px]"
            style={{ background: 'linear-gradient(90deg, #C0622A, #A88C50)' }} />
          <span className="section-tag">Who We Are</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — images stacked with badge */}
          <div className="relative fade-up">
            {/* Main image */}
            <div className="relative rounded-sm overflow-hidden stamp-border">
              <img
                src={ABOUT_IMG}
                alt="Thunder Express operations"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg,rgba(250,247,240,0.2),transparent)' }} />
            </div>

            {/* Floating second image */}
            <div className="absolute -bottom-10 -right-6 w-52 h-40 rounded-sm overflow-hidden stamp-border hidden md:block shadow-2xl"
              style={{ border: '2px solid #A88C50' }}>
              <img src={CONVOY_IMG} alt="Convoy" className="w-full h-full object-cover" />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg,transparent,rgba(250,247,240,0.5))' }} />
            </div>

            {/* Stat badge */}
            <div className="absolute -left-4 top-8 card-vintage p-5 shadow-2xl hidden md:block"
              style={{ border: '1px solid #A88C5060' }}>
              <div className="stat-num text-5xl leading-none">100%</div>
              <div className="font-mono text-khaki-500 text-xs tracking-widest mt-1 uppercase">Committed</div>
              <div className="font-body text-khaki-600 text-xs mt-0.5">To Every Delivery</div>
            </div>

            {/* Decorative corner marks */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-khaki-600 -translate-x-1 -translate-y-1" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-khaki-600 translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-khaki-600 -translate-x-1 translate-y-1" />
          </div>

          {/* RIGHT — text */}
          <div className="space-y-7 fade-up" style={{ transitionDelay: '0.2s' }}>
            <h2 className="section-title text-5xl lg:text-6xl">
              BUILT ON RELIABILITY,<br />DRIVEN BY INTEGRITY
            </h2>

            <p className="font-body text-khaki-800 leading-relaxed" style={{ fontWeight: 300, fontSize: '1.05rem' }}>
              Thunder Express Trucking LLC was founded on a simple promise: every shipment
              treated like it's the most important load on the road. Based in <strong className="text-sand font-medium">Cedar Hill, TX</strong>,
              we operate with the discipline of a professional outfit and the care of a family business.
            </p>

            <p className="font-body text-khaki-700 leading-relaxed" style={{ fontWeight: 300 }}>
              Under the ownership of <strong className="text-sand font-medium">Hamid Shojayee</strong> and
              day-to-day operations led by <strong className="text-sand font-medium">Muhammad Talha Hayat</strong>,
              our team brings veteran logistics expertise to every lane we run — from local Texas
              hauls to cross-country freight corridors.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {pillars.map(p => (
                <div key={p} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-khaki-500 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-khaki-700 text-sm">{p}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link to="/about" className="btn-primary inline-flex">
                <span className="flex items-center gap-2">Full Company Story <ArrowRight size={15} /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
