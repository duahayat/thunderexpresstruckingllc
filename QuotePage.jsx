import React, { useState } from 'react'
import { ArrowRight, CheckCircle2, Truck, Package, Clock, Shield, MapPin, BarChart3 } from 'lucide-react'

const HERO_IMG = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=80'

const serviceTypes = [
  { id: 'ftl',      icon: Truck,      label: 'Full Truckload (FTL)' },
  { id: 'ltl',      icon: Package,    label: 'Less-Than-Truckload (LTL)' },
  { id: 'express',  icon: Clock,      label: 'Expedited Freight' },
  { id: 'secured',  icon: Shield,     label: 'Secured Freight' },
  { id: 'longhaul', icon: MapPin,     label: 'Regional / Long-Haul' },
  { id: 'consult',  icon: BarChart3,  label: 'Logistics Consulting' },
]

const inputCls = `
  w-full bg-transparent border border-khaki-800 rounded-sm px-4 py-3
  font-body text-parchment text-sm placeholder-khaki-700
  focus:outline-none focus:border-khaki-500 focus:ring-1 focus:ring-khaki-500/30
  transition-colors duration-200
`

export default function QuotePage() {
  const [step, setStep]       = useState(1)
  const [service, setService] = useState('')
  const [form, setForm]       = useState({
    name: '', company: '', email: '', phone: '',
    origin: '', destination: '', weight: '', dimensions: '',
    pickupDate: '', deliveryDate: '', notes: '',
  })
  const [done, setDone]       = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submitQuote = e => {
    e.preventDefault()
    setDone(true)
  }

  return (
    <>
      {/* Page hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Get a Quote" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg,rgba(250,247,240,0.97),rgba(242,236,216,0.88))' }} />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: 'linear-gradient(180deg,transparent,#A88C50,#C0622A,transparent)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5 anim-1">
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,#C0622A,#A88C50)' }} />
            <span className="section-tag">Free Estimate</span>
          </div>
          <h1 className="section-title text-6xl lg:text-8xl mb-5 anim-2">
            REQUEST<br />A QUOTE
          </h1>
          <p className="font-body text-khaki-700 text-lg max-w-xl leading-relaxed anim-3" style={{ fontWeight: 300 }}>
            Fill out the form below and our team will respond with a competitive
            freight rate — typically within 2 business hours.
          </p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg,#FDFBF6,#F2ECD8)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">

          {done ? (
            <div className="card-vintage rounded-sm p-16 text-center fade-up">
              <CheckCircle2 size={56} className="text-khaki-500 mx-auto mb-6" />
              <h2 className="font-display text-4xl text-parchment tracking-wide mb-3">
                QUOTE REQUEST RECEIVED
              </h2>
              <p className="font-body text-khaki-600 leading-relaxed mb-2" style={{ fontWeight: 300 }}>
                Thank you, <strong className="text-sand">{form.name}</strong>. Our team is reviewing your
                freight details and will reach out to{' '}
                <strong className="text-sand">{form.email}</strong> with a competitive rate shortly.
              </p>
              <p className="font-mono text-khaki-600 text-xs tracking-widest mt-4">
                For urgent shipments, call: 682-651-1100
              </p>
            </div>
          ) : (
            <>
              {/* Step indicator */}
              <div className="flex items-center gap-4 mb-12 fade-up">
                {[1, 2].map(s => (
                  <React.Fragment key={s}>
                    <div className={`flex items-center gap-2 ${step >= s ? 'text-sand' : 'text-khaki-700'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-heading font-semibold transition-all ${
                        step >= s
                          ? 'bg-khaki-700 text-khaki-50 border border-khaki-500'
                          : 'bg-khaki-100 text-khaki-600 border border-khaki-300'
                      }`}>{s}</div>
                      <span className="font-mono text-xs tracking-widest uppercase hidden sm:inline">
                        {s === 1 ? 'Service Type' : 'Shipment Details'}
                      </span>
                    </div>
                    {s < 2 && (
                      <div className="flex-1 h-px"
                        style={{ background: step > s ? 'linear-gradient(90deg,#A88C50,#C0622A)' : 'rgba(168,140,80,0.2)' }} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Step 1 — Service Type */}
              {step === 1 && (
                <div className="fade-up">
                  <h2 className="font-display text-3xl text-parchment tracking-wide mb-2">SELECT SERVICE TYPE</h2>
                  <p className="font-mono text-khaki-600 text-xs tracking-widest mb-8 uppercase">Choose the freight solution that fits your shipment</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {serviceTypes.map(s => {
                      const Icon = s.icon
                      const selected = service === s.id
                      return (
                        <button key={s.id} type="button"
                          onClick={() => setService(s.id)}
                          className={`card-vintage rounded-sm p-6 text-left transition-all duration-300 group ${
                            selected ? 'border-khaki-500' : ''
                          }`}
                          style={selected ? { borderColor: '#A88C50', background: 'rgba(168,140,80,0.08)' } : {}}>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-all ${
                            selected ? 'bg-khaki-700/50' : 'bg-khaki-100'
                          }`} style={{ border: `1px solid ${selected ? '#A88C50' : 'rgba(168,140,80,0.2)'}` }}>
                            <Icon size={16} className={selected ? 'text-sand' : 'text-khaki-600'} />
                          </div>
                          <div className={`font-heading text-sm font-semibold tracking-wide uppercase transition-colors ${
                            selected ? 'text-sand' : 'text-khaki-600 group-hover:text-khaki-700'
                          }`}>
                            {s.label}
                          </div>
                          {selected && (
                            <div className="mt-2 flex items-center gap-1">
                              <CheckCircle2 size={12} className="text-khaki-500" />
                              <span className="font-mono text-[10px] text-khaki-500 tracking-widest">SELECTED</span>
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                  <button
                    onClick={() => service && setStep(2)}
                    disabled={!service}
                    className={`btn-primary ${!service ? 'opacity-40 cursor-not-allowed' : ''}`}>
                    <span className="flex items-center gap-2">Continue to Shipment Details <ArrowRight size={14} /></span>
                  </button>
                </div>
              )}

              {/* Step 2 — Shipment Details */}
              {step === 2 && (
                <div className="fade-up">
                  <div className="flex items-center gap-3 mb-2">
                    <button onClick={() => setStep(1)}
                      className="font-mono text-xs text-khaki-600 hover:text-khaki-600 transition-colors tracking-widest uppercase">
                      ← Back
                    </button>
                  </div>
                  <h2 className="font-display text-3xl text-parchment tracking-wide mb-2">SHIPMENT DETAILS</h2>
                  <p className="font-mono text-khaki-600 text-xs tracking-widest mb-8 uppercase">
                    Service: <span className="text-khaki-600">{serviceTypes.find(s => s.id === service)?.label}</span>
                  </p>

                  <form onSubmit={submitQuote} className="space-y-6">
                    {/* Contact info */}
                    <div>
                      <div className="font-mono text-xs text-khaki-600 tracking-widest uppercase mb-4">Contact Information</div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-mono text-[10px] text-khaki-700 tracking-widest uppercase block mb-2">Full Name *</label>
                          <input name="name" required value={form.name} onChange={handle} placeholder="John Smith" className={inputCls} />
                        </div>
                        <div>
                          <label className="font-mono text-[10px] text-khaki-700 tracking-widest uppercase block mb-2">Company</label>
                          <input name="company" value={form.company} onChange={handle} placeholder="Company Name" className={inputCls} />
                        </div>
                        <div>
                          <label className="font-mono text-[10px] text-khaki-700 tracking-widest uppercase block mb-2">Email *</label>
                          <input name="email" type="email" required value={form.email} onChange={handle} placeholder="you@company.com" className={inputCls} />
                        </div>
                        <div>
                          <label className="font-mono text-[10px] text-khaki-700 tracking-widest uppercase block mb-2">Phone *</label>
                          <input name="phone" required value={form.phone} onChange={handle} placeholder="(555) 000-0000" className={inputCls} />
                        </div>
                      </div>
                    </div>

                    {/* Route */}
                    <div>
                      <div className="font-mono text-xs text-khaki-600 tracking-widest uppercase mb-4">Freight Route</div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-mono text-[10px] text-khaki-700 tracking-widest uppercase block mb-2">Origin City / State *</label>
                          <input name="origin" required value={form.origin} onChange={handle} placeholder="Dallas, TX" className={inputCls} />
                        </div>
                        <div>
                          <label className="font-mono text-[10px] text-khaki-700 tracking-widest uppercase block mb-2">Destination City / State *</label>
                          <input name="destination" required value={form.destination} onChange={handle} placeholder="Houston, TX" className={inputCls} />
                        </div>
                        <div>
                          <label className="font-mono text-[10px] text-khaki-700 tracking-widest uppercase block mb-2">Pickup Date</label>
                          <input name="pickupDate" type="date" value={form.pickupDate} onChange={handle} className={inputCls} />
                        </div>
                        <div>
                          <label className="font-mono text-[10px] text-khaki-700 tracking-widest uppercase block mb-2">Delivery Date</label>
                          <input name="deliveryDate" type="date" value={form.deliveryDate} onChange={handle} className={inputCls} />
                        </div>
                      </div>
                    </div>

                    {/* Cargo */}
                    <div>
                      <div className="font-mono text-xs text-khaki-600 tracking-widest uppercase mb-4">Cargo Details</div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-mono text-[10px] text-khaki-700 tracking-widest uppercase block mb-2">Estimated Weight (lbs)</label>
                          <input name="weight" value={form.weight} onChange={handle} placeholder="e.g. 5,000 lbs" className={inputCls} />
                        </div>
                        <div>
                          <label className="font-mono text-[10px] text-khaki-700 tracking-widest uppercase block mb-2">Dimensions / Pallets</label>
                          <input name="dimensions" value={form.dimensions} onChange={handle} placeholder="e.g. 4 pallets, 48x40" className={inputCls} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-[10px] text-khaki-700 tracking-widest uppercase block mb-2">Additional Notes</label>
                      <textarea name="notes" value={form.notes} onChange={handle}
                        rows={4} placeholder="Hazmat, fragile, special handling requirements, preferred pickup window..."
                        className={inputCls + ' resize-none'} />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      <span className="flex items-center justify-center gap-2">
                        <Truck size={15} /> Submit Quote Request
                      </span>
                    </button>

                    <p className="font-mono text-khaki-700 text-[11px] text-center tracking-widest">
                      FOR URGENT FREIGHT · CALL 682-651-1100
                    </p>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
