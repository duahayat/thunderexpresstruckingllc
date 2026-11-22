import React from 'react'
import { Shield, Truck, Users, Award, CheckCircle2 } from 'lucide-react'
import Leadership from '../components/Leadership'

const HERO_IMG   = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80'
const FLEET_IMG  = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80'
const ROAD_IMG   = 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=80'
const DOCK_IMG   = 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80'

const values = [
  { icon: Shield, title: 'Safety Above All',    desc: 'Every driver, every load, every mile — safety is our non-negotiable standard. We follow every regulation and go beyond when needed.' },
  { icon: Truck,  title: 'Reliability You Can Count On', desc: 'We do what we say, when we say it. Our reputation is built on consistency, not promises.' },
  { icon: Users,  title: 'People-First Culture', desc: 'From our drivers to our clients, we treat people with respect and professionalism in every interaction.' },
  { icon: Award,  title: 'Unmatched Professionalism', desc: 'Clean equipment, clear communication, and a team that takes pride in representing Thunder Express.' },
]

function PageHero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="About Thunder Express" className="w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg,rgba(250,247,240,0.97),rgba(242,236,216,0.88))' }} />
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(180deg,transparent,#A88C50,#C0622A,transparent)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5 anim-1">
          <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,#C0622A,#A88C50)' }} />
          <span className="section-tag">Our Story</span>
        </div>
        <h1 className="section-title text-6xl lg:text-8xl mb-5 anim-2">
          ABOUT<br />THUNDER EXPRESS
        </h1>
        <p className="font-body text-khaki-700 text-lg max-w-xl leading-relaxed anim-3" style={{ fontWeight: 300 }}>
          A Texas-based freight company built on sweat, principle, and a relentless drive
          to deliver — every time, without exception.
        </p>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero />

      {/* Story section */}
      <section className="py-24 relative">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg,#FDFBF6,#F2ECD8)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 fade-up">
              <div className="flex items-center gap-3">
                <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,#C0622A,#A88C50)' }} />
                <span className="section-tag">The Foundation</span>
              </div>
              <h2 className="section-title text-4xl lg:text-5xl">
                FORGED IN<br />HARD WORK
              </h2>
              <p className="font-body text-khaki-700 leading-relaxed" style={{ fontWeight: 300, fontSize: '1.05rem' }}>
                Thunder Express Trucking LLC was established with a clear mandate: bring
                genuine reliability to freight transportation. Founded and owned by{' '}
                <strong className="text-sand font-medium">Hamid Shojayee</strong>, the company
                operates out of <strong className="text-sand font-medium">Cedar Hill, TX</strong> —
                a strategically positioned base in the Dallas-Fort Worth metroplex that gives
                us access to major interstate corridors across the nation.
              </p>
              <p className="font-body text-khaki-600 leading-relaxed" style={{ fontWeight: 300 }}>
                Day-to-day operations are led by <strong className="text-sand font-medium">Muhammad Talha Hayat</strong>,
                whose logistics expertise keeps our freight moving efficiently and our clients
                informed every step of the way. Together, they've assembled a team of professional
                drivers and coordinators who share one standard: excellence.
              </p>
              <p className="font-body text-khaki-600 leading-relaxed" style={{ fontWeight: 300 }}>
                We're not the biggest name in trucking — we're the most reliable one you'll
                find. Every load is handled with the care and accountability that only a
                focused, driven team can provide.
              </p>
            </div>

            {/* Images */}
            <div className="relative fade-up" style={{ transitionDelay: '0.2s' }}>
              <div className="stamp-border rounded-sm overflow-hidden mb-4">
                <img src={FLEET_IMG} alt="Thunder Express fleet" className="w-full h-72 object-cover" />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg,transparent,rgba(250,247,240,0.4))' }} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="stamp-border rounded-sm overflow-hidden">
                  <img src={ROAD_IMG} alt="Open road" className="w-full h-40 object-cover" />
                </div>
                <div className="stamp-border rounded-sm overflow-hidden">
                  <img src={DOCK_IMG} alt="Loading dock" className="w-full h-40 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg,#F2ECD8,#FDFBF6)' }} />
        <div className="absolute inset-0 diagonal-stripes opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,transparent,#A88C50)' }} />
              <span className="section-tag">What Drives Us</span>
              <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,#A88C50,transparent)' }} />
            </div>
            <h2 className="section-title text-5xl">CORE VALUES</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div key={v.title}
                  className="card-vintage rounded-sm p-7 fade-up"
                  style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full mb-5"
                    style={{ background: 'rgba(168,140,80,0.12)', border: '1px solid rgba(168,140,80,0.3)' }}>
                    <Icon size={20} className="text-khaki-600" />
                  </div>
                  <h3 className="font-heading text-sand font-semibold tracking-wide text-sm uppercase mb-3">
                    {v.title}
                  </h3>
                  <p className="font-body text-khaki-500 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                    {v.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#1C1008,#130C06)' }}>
        <div className="absolute inset-0 diagonal-stripes opacity-20" />
        <div className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: 'linear-gradient(180deg,transparent,#C0622A,transparent)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-up">
          <span className="section-tag block mb-6">Mission Statement</span>
          <p className="font-heading text-2xl md:text-3xl text-[#F5EDD6] leading-relaxed font-light">
            "Driven by the values of hard work and reliability, our mission is to provide{' '}
            <span className="text-khaki-300 font-semibold">superior freight transportation services</span>{' '}
            with professionalism, timely delivery, and a commitment to{' '}
            <span className="text-khaki-300 font-semibold">safety across every mile we serve.</span>"
          </p>
        </div>
      </section>

      <Leadership />
    </>
  )
}
