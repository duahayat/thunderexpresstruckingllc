import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, Package, Clock, Shield, MapPin, BarChart3, CheckCircle2, ArrowRight, Phone } from 'lucide-react'

const HERO_IMG = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80'

const services = [
  {
    icon: Truck,
    tag: 'FTL',
    title: 'Full Truckload (FTL)',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80',
    desc: 'When your shipment fills a trailer, FTL is the gold standard. A dedicated truck goes directly from origin to destination — no stops, no co-loading, no compromises on timing or security.',
    features: [
      'Dedicated trailer capacity',
      'Direct origin-to-destination routing',
      'Ideal for 20,000+ lb shipments',
      'Reduced handling & damage risk',
      'Faster transit times',
      'Full shipment control',
    ],
  },
  {
    icon: Package,
    tag: 'LTL',
    title: 'Less-Than-Truckload (LTL)',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80',
    desc: 'Efficient freight consolidation for shipments that don\'t need a full trailer. Pay only for the space you use while still receiving professional, tracked, on-time delivery.',
    features: [
      'Cost-effective for smaller loads',
      'Flexible pickup scheduling',
      'Freight consolidation expertise',
      'Real-time tracking',
      'Ideal for 150–20,000 lb shipments',
      'Competitive transit times',
    ],
  },
  {
    icon: Clock,
    tag: 'EXPRESS',
    title: 'Expedited Freight',
    img: 'https://images.unsplash.com/photo-1485575301924-6891ef935dcd?w=900&q=80',
    desc: 'When the clock is the enemy, we become your advantage. Priority routing, direct lanes, and 24/7 dispatch coordination for shipments that absolutely cannot be late.',
    features: [
      'Priority dispatch & routing',
      'Same-day & next-day options',
      'Round-the-clock coordination',
      'Direct delivery lanes',
      'Emergency freight specialists',
      'Real-time status updates',
    ],
  },
  {
    icon: Shield,
    tag: 'SECURED',
    title: 'Secured Freight',
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&q=80',
    desc: 'High-value, sensitive, or regulated cargo demands extra diligence. Sealed trailers, verified chain of custody, and dedicated handling protocols protect your most critical shipments.',
    features: [
      'Sealed & locked trailers',
      'Verified chain of custody',
      'Driver background checks',
      'High-value cargo experience',
      'Full insurance coverage',
      'Incident reporting & accountability',
    ],
  },
  {
    icon: MapPin,
    tag: 'LONG-HAUL',
    title: 'Regional & Long-Haul',
    img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=80',
    desc: 'Whether you need a freight partner for Texas regional runs or cross-country corridors, our drivers know the lanes and take pride in every mile they represent Thunder Express.',
    features: [
      'Texas & Southwest regional coverage',
      'Nationwide cross-country lanes',
      'Experienced long-haul drivers',
      'HOS-compliant scheduling',
      'Multi-stop route capability',
      'Consistent driver assignments',
    ],
  },
  {
    icon: BarChart3,
    tag: 'CONSULT',
    title: 'Logistics Consulting',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80',
    desc: 'Before the first wheel turns, we help you optimize. Freight strategy, lane analysis, cost reduction, and supply chain planning — delivered with real-world trucking expertise.',
    features: [
      'Freight cost analysis',
      'Lane optimization',
      'Supply chain mapping',
      'Carrier rate benchmarking',
      'Load planning strategy',
      'Ongoing operational support',
    ],
  },
]

function PageHero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg,rgba(250,247,240,0.97),rgba(242,236,216,0.88))' }} />
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(180deg,transparent,#A88C50,#C0622A,transparent)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5 anim-1">
          <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,#C0622A,#A88C50)' }} />
          <span className="section-tag">What We Offer</span>
        </div>
        <h1 className="section-title text-6xl lg:text-8xl mb-5 anim-2">
          FREIGHT<br />SERVICES
        </h1>
        <p className="font-body text-khaki-700 text-lg max-w-xl leading-relaxed anim-3" style={{ fontWeight: 300 }}>
          Six core service lines designed to cover every freight need — from a single pallet to
          a full trailer, from local Texas routes to nationwide lanes.
        </p>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <PageHero />

      <section className="py-24 relative">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg,#FDFBF6,#F2ECD8)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-20">
          {services.map((s, i) => {
            const Icon = s.icon
            const isEven = i % 2 === 0
            return (
              <div
                key={s.tag}
                className={`grid lg:grid-cols-2 gap-12 items-center fade-up ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                {/* Image */}
                <div className="relative">
                  <div className="stamp-border rounded-sm overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-72 lg:h-80 object-cover" />
                    <div className="absolute inset-0"
                      style={{ background: 'linear-gradient(180deg,transparent,rgba(250,247,240,0.35))' }} />
                  </div>
                  <div className="absolute top-4 right-4 worn-label text-sm">{s.tag}</div>
                  {/* Corner marks */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-khaki-600 -translate-x-1 -translate-y-1" />
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-khaki-600 translate-x-1 translate-y-1" />
                </div>

                {/* Content */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full"
                      style={{ background: 'rgba(168,140,80,0.12)', border: '1px solid rgba(168,140,80,0.3)' }}>
                      <Icon size={16} className="text-khaki-600" />
                    </div>
                    <h2 className="font-display text-4xl text-parchment tracking-wide">{s.title}</h2>
                  </div>
                  <p className="font-body text-khaki-700 leading-relaxed" style={{ fontWeight: 300, fontSize: '1.02rem' }}>
                    {s.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {s.features.map(f => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-khaki-600 mt-0.5 flex-shrink-0" />
                        <span className="font-body text-khaki-600 text-sm" style={{ fontWeight: 300 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/quote" className="btn-primary inline-flex mt-2">
                    <span className="flex items-center gap-2">Quote This Service <ArrowRight size={14} /></span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg,#F2ECD8,#E8DCC0,#F2ECD8)' }} />
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="section-divider absolute bottom-0 left-0 right-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-up">
          <h2 className="section-title text-4xl lg:text-5xl mb-5">NOT SURE WHICH SERVICE FITS?</h2>
          <p className="font-body text-khaki-600 mb-8 leading-relaxed" style={{ fontWeight: 300 }}>
            Call our operations line and talk to a real person. We'll help you figure out exactly
            what your freight needs — no guesswork, no sales pressure.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:6826511100" className="btn-primary inline-flex">
              <span className="flex items-center gap-2"><Phone size={15} /> Call Operations: 682-651-1100</span>
            </a>
            <Link to="/quote" className="btn-outline inline-flex">
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
