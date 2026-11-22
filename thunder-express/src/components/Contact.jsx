import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

const contacts = [
  {
    icon: Phone,
    label: 'Main Line',
    value: '682-772-2464',
    sub: 'General inquiries & support',
    href: 'tel:6827722464',
    tag: 'MAIN',
  },
  {
    icon: Phone,
    label: 'Operations',
    value: '682-651-1100',
    sub: 'Dispatch & freight coordination',
    href: 'tel:6826511100',
    tag: 'OPS',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'thunderexpress.trucking@gmail.com',
    sub: 'We respond within 2 business hours',
    href: 'mailto:thunderexpress.trucking@gmail.com',
    tag: 'EMAIL',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '1521 Finley St',
    sub: 'Cedar Hill, TX 75104',
    href: 'https://maps.google.com/?q=1521+Finley+St+Cedar+Hill+TX+75104',
    tag: 'HQ',
  },
]

export default function Contact() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg,#F2ECD8,#FDFBF6)' }} />
      <div className="absolute inset-0 diagonal-stripes opacity-20" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,transparent,#A88C50)' }} />
            <span className="section-tag">Reach Us</span>
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,#A88C50,transparent)' }} />
          </div>
          <h2 className="section-title text-5xl lg:text-6xl">
            LET'S MOVE<br />FREIGHT TOGETHER
          </h2>
          <p className="font-body text-khaki-600 mt-5 max-w-xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
            Ready to ship? Have a question? Our team picks up the phone. Real people,
            real answers — no automated run-arounds.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {contacts.map((c, i) => {
            const Icon = c.icon
            return (
              <a
                key={c.tag}
                href={c.href}
                target={c.tag === 'HQ' ? '_blank' : undefined}
                rel="noreferrer"
                className="card-vintage group rounded-sm p-6 flex flex-col gap-4 fade-up transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Icon + tag row */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full"
                    style={{
                      background: 'rgba(168,140,80,0.12)',
                      border: '1px solid rgba(168,140,80,0.3)'
                    }}>
                    <Icon size={18} className="text-khaki-600 group-hover:text-sand transition-colors" />
                  </div>
                  <div className="worn-label text-[10px]">{c.tag}</div>
                </div>

                {/* Details */}
                <div>
                  <div className="font-mono text-khaki-600 text-xs tracking-widest uppercase mb-1">
                    {c.label}
                  </div>
                  <div className="font-heading text-sand text-base font-semibold tracking-wide break-all group-hover:text-parchment transition-colors">
                    {c.value}
                  </div>
                  <div className="font-body text-khaki-500 text-xs mt-1" style={{ fontWeight: 300 }}>
                    {c.sub}
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center gap-1 text-khaki-700 group-hover:text-khaki-600 transition-colors mt-auto">
                  <span className="font-mono text-[10px] tracking-widest">CONNECT</span>
                  <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            )
          })}
        </div>

        {/* Hours + CTA row */}
        <div className="grid md:grid-cols-2 gap-6 fade-up">
          {/* Hours */}
          <div className="card-vintage rounded-sm p-7 flex items-start gap-5">
            <Clock size={22} className="text-khaki-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-3">
              <h4 className="font-heading text-parchment font-semibold tracking-wider uppercase text-sm">
                Business Hours
              </h4>
              {[
                ['Monday – Friday', '7:00 AM – 6:00 PM CST'],
                ['Saturday',        '8:00 AM – 2:00 PM CST'],
                ['Sunday',          'Emergency Dispatch Only'],
              ].map(([day, hrs]) => (
                <div key={day} className="flex justify-between gap-8">
                  <span className="font-body text-khaki-600 text-sm" style={{ fontWeight: 300 }}>{day}</span>
                  <span className="font-mono text-khaki-700 text-sm">{hrs}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="relative rounded-sm overflow-hidden"
            style={{ border: '1px solid rgba(168,140,80,0.3)' }}>
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg,rgba(192,98,42,0.15),rgba(168,140,80,0.08))' }} />
            <div className="relative z-10 p-8 flex flex-col justify-between h-full gap-6">
              <div>
                <h4 className="font-display text-3xl text-parchment tracking-wide mb-2">
                  READY TO SHIP?
                </h4>
                <p className="font-body text-khaki-700 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                  Get a freight quote fast. Tell us your origin, destination, and load details
                  — we'll get you a number you can count on.
                </p>
              </div>
              <Link to="/quote" className="btn-primary self-start">
                <span className="flex items-center gap-2">Request a Quote <ArrowRight size={15} /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
