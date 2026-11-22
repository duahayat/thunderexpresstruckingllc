import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

const HERO_IMG = 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1400&q=80'

function PageHero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg,rgba(250,247,240,0.97),rgba(242,236,216,0.88))' }} />
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(180deg,transparent,#A88C50,#C0622A,transparent)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5 anim-1">
          <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,#C0622A,#A88C50)' }} />
          <span className="section-tag">Reach Out</span>
        </div>
        <h1 className="section-title text-6xl lg:text-8xl mb-5 anim-2">CONTACT US</h1>
        <p className="font-body text-khaki-700 text-lg max-w-xl leading-relaxed anim-3" style={{ fontWeight: 300 }}>
          We're a phone call away. Real people, real answers — no bots, no runarounds.
        </p>
      </div>
    </section>
  )
}

const inputCls = `
  w-full bg-transparent border border-khaki-800 rounded-sm px-4 py-3
  font-body text-parchment text-sm placeholder-khaki-700
  focus:outline-none focus:border-khaki-500 focus:ring-1 focus:ring-khaki-500/30
  transition-colors duration-200
`

export default function ContactPage() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmit] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    setSubmit(true)
  }

  return (
    <>
      <PageHero />

      <section className="py-24 relative">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg,#FDFBF6,#F2ECD8)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left — info */}
            <div className="space-y-8 fade-up">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,#C0622A,#A88C50)' }} />
                  <span className="section-tag">Contact Info</span>
                </div>
                <h2 className="section-title text-4xl lg:text-5xl mb-5">
                  GET IN<br />TOUCH
                </h2>
                <p className="font-body text-khaki-600 leading-relaxed" style={{ fontWeight: 300 }}>
                  Whether you have a load ready to move, a question about our services,
                  or you just want to talk freight — we're here and ready.
                </p>
              </div>

              {/* Contact cards */}
              {[
                { icon: Phone, tag: 'MAIN LINE',    val: '682-772-2464',           sub: 'General inquiries',            href: 'tel:6827722464' },
                { icon: Phone, tag: 'OPERATIONS',   val: '682-651-1100',           sub: 'Dispatch & freight coordination', href: 'tel:6826511100' },
                { icon: Mail,  tag: 'EMAIL',         val: 'thunderexpress.trucking@gmail.com', sub: 'Response within 2 hours',      href: 'mailto:thunderexpress.trucking@gmail.com' },
                { icon: MapPin, tag: 'HEADQUARTERS', val: '1521 Finley St, Cedar Hill, TX 75104', sub: 'Visit by appointment', href: 'https://maps.google.com/?q=1521+Finley+St+Cedar+Hill+TX+75104' },
              ].map(c => {
                const Icon = c.icon
                return (
                  <a key={c.tag} href={c.href}
                    target={c.tag === 'HEADQUARTERS' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="card-vintage group flex items-start gap-5 p-5 rounded-sm transition-all duration-300">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0"
                      style={{ background: 'rgba(168,140,80,0.12)', border: '1px solid rgba(168,140,80,0.3)' }}>
                      <Icon size={16} className="text-khaki-600 group-hover:text-sand transition-colors" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-khaki-700 tracking-widest uppercase mb-1">{c.tag}</div>
                      <div className="font-heading text-sand text-sm font-semibold group-hover:text-parchment transition-colors">{c.val}</div>
                      <div className="font-body text-khaki-600 text-xs mt-0.5" style={{ fontWeight: 300 }}>{c.sub}</div>
                    </div>
                  </a>
                )
              })}

              {/* Hours */}
              <div className="card-vintage rounded-sm p-6">
                <div className="flex items-center gap-3 mb-5">
                  <Clock size={16} className="text-khaki-500" />
                  <h4 className="font-heading text-sand text-sm font-semibold tracking-wider uppercase">Business Hours</h4>
                </div>
                {[
                  ['Monday – Friday', '7:00 AM – 6:00 PM CST'],
                  ['Saturday',        '8:00 AM – 2:00 PM CST'],
                  ['Sunday',          'Emergency Dispatch Only'],
                ].map(([day, hrs]) => (
                  <div key={day} className="flex justify-between gap-4 py-2 border-b border-khaki-900/60 last:border-0">
                    <span className="font-body text-khaki-600 text-sm" style={{ fontWeight: 300 }}>{day}</span>
                    <span className="font-mono text-khaki-700 text-sm">{hrs}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="fade-up" style={{ transitionDelay: '0.15s' }}>
              <div className="card-vintage rounded-sm p-8">
                <h3 className="font-display text-3xl text-parchment tracking-wide mb-2">SEND A MESSAGE</h3>
                <p className="font-mono text-khaki-600 text-xs tracking-widest mb-8 uppercase">We'll respond within 2 business hours</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <CheckCircle2 size={48} className="text-khaki-500 mx-auto mb-4" />
                    <h4 className="font-display text-2xl text-parchment tracking-wide mb-2">MESSAGE SENT</h4>
                    <p className="font-body text-khaki-600 text-sm" style={{ fontWeight: 300 }}>
                      Thank you, {form.name}. We'll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-mono text-[10px] text-khaki-600 tracking-widest uppercase block mb-2">Full Name *</label>
                        <input name="name" required value={form.name} onChange={handle}
                          placeholder="John Smith" className={inputCls} />
                      </div>
                      <div>
                        <label className="font-mono text-[10px] text-khaki-600 tracking-widest uppercase block mb-2">Phone</label>
                        <input name="phone" value={form.phone} onChange={handle}
                          placeholder="(555) 000-0000" className={inputCls} />
                      </div>
                    </div>
                    <div>
                      <label className="font-mono text-[10px] text-khaki-600 tracking-widest uppercase block mb-2">Email Address *</label>
                      <input name="email" type="email" required value={form.email} onChange={handle}
                        placeholder="you@company.com" className={inputCls} />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] text-khaki-600 tracking-widest uppercase block mb-2">Subject</label>
                      <input name="subject" value={form.subject} onChange={handle}
                        placeholder="How can we help?" className={inputCls} />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] text-khaki-600 tracking-widest uppercase block mb-2">Message *</label>
                      <textarea name="message" required value={form.message} onChange={handle}
                        rows={5} placeholder="Tell us about your freight needs..."
                        className={inputCls + ' resize-none'} />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      <span className="flex items-center justify-center gap-2">
                        <Send size={14} /> Send Message
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
