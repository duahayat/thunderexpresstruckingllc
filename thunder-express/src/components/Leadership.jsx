import React from 'react'
import { Mail } from 'lucide-react'

const leaders = [
  {
    name:    'Hamid Shojayee',
    role:    'Founder & Owner',
    tag:     'OWNERSHIP',
    initials: 'HS',
    bio:     'Hamid founded Thunder Express Trucking LLC to bring genuine reliability and professionalism to freight transportation, setting the standard for every operation the company runs.',
    email:   'thunderexpress.trucking@gmail.com',
  },
  {
    name:    'Muhammad Talha Hayat',
    role:    'Head of Operations',
    tag:     'OPERATIONS',
    initials: 'TH',
    bio:     'Talha leads day-to-day operations — coordinating drivers, managing freight schedules, and keeping clients informed every step of the way.',
    email:   'thunderexpress.trucking@gmail.com',
  },
]

export default function Leadership() {
  return (
    <section className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#1C1008 0%,#130C06 50%,#1C1008 100%)' }}>

      {/* Grain / stripe texture for depth */}
      <div className="absolute inset-0 diagonal-stripes opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,transparent,#A88C50)' }} />
            <span className="section-tag">The People Behind It</span>
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,#A88C50,transparent)' }} />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl leading-none tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #F5EDD6 30%, #A88C50)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
            LEADERSHIP &amp; TEAM
          </h2>
          <p className="font-body text-khaki-300 mt-5 max-w-xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
            Thunder Express is built by people who believe a handshake still means something —
            and that your freight deserves the same respect.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((l, i) => (
            <div
              key={l.name}
              className="group rounded-sm overflow-hidden fade-up p-8"
              style={{
                background: 'linear-gradient(145deg, #241608, #1A1008)',
                border: '1px solid #A88C5030',
                transitionDelay: `${i * 0.15}s`
              }}
            >
              {/* Monogram + tag */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #A88C50, #C0622A)',
                  }}>
                  <span className="font-display text-2xl text-[#1C1008] tracking-wide">{l.initials}</span>
                </div>
                <div className="worn-label text-xs">{l.tag}</div>
              </div>

              {/* Name / role */}
              <h3 className="font-display text-2xl text-[#F5EDD6] tracking-wide leading-none mb-1">
                {l.name}
              </h3>
              <p className="font-mono text-khaki-500 text-xs tracking-widest mb-5 uppercase">
                {l.role}
              </p>

              {/* Bio */}
              <p className="font-body text-khaki-300 text-sm leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                {l.bio}
              </p>

              {/* Divider */}
              <div className="section-divider mb-5" />

              {/* Contact */}
              <a
                href={`mailto:${l.email}`}
                className="flex items-center gap-2 text-khaki-400 hover:text-khaki-200 transition-colors text-sm font-mono"
              >
                <Mail size={13} />
                {l.email}
              </a>
            </div>
          ))}
        </div>

        {/* Team note */}
        <div className="text-center mt-16 fade-up">
          <div className="inline-block px-10 py-6 rounded-sm"
            style={{ background: '#241608', border: '1px solid #A88C5030' }}>
            <p className="font-heading text-khaki-300 text-sm tracking-wider uppercase">
              Backed by a team of experienced professional drivers
            </p>
            <p className="font-mono text-khaki-500 text-xs mt-1 tracking-widest">
              Operating out of Cedar Hill, TX · Serving the nation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
