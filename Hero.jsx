import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Clock, MapPin } from 'lucide-react'

// Unsplash truck/highway images (free to use)
const BG_IMAGE = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="Thunder Express truck on the highway"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered vintage overlays */}
        <div className="absolute inset-0 bg-espresso-900/80" />
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(250,247,240,0.98) 0%, rgba(242,236,216,0.85) 45%, rgba(250,247,240,0.65) 100%)'
          }}
        />
        {/* Grain texture */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '256px'
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(250,247,240,0.7) 100%)' }}
        />
      </div>

      {/* Decorative diagonal stripe (right side) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block"
        style={{
          background: 'repeating-linear-gradient(135deg, transparent, transparent 24px, rgba(168,140,80,0.04) 24px, rgba(168,140,80,0.04) 26px)'
        }}
      />

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(180deg, transparent, #A88C50, #C0622A, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-3xl">

          {/* Pre-label */}
          <div className="flex items-center gap-3 mb-6 anim-1">
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, #C0622A, #A88C50)' }} />
            <span className="section-tag">Cedar Hill, TX · Est. in Service</span>
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, #A88C50, transparent)' }} />
          </div>

          {/* Main headline */}
          <h1 className="font-display text-7xl sm:text-8xl lg:text-[110px] leading-none tracking-wide mb-3 anim-2"
            style={{
              background: 'linear-gradient(135deg, #1C1008 0%, #6B5530 50%, #A88C50 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
            THUNDER
          </h1>
          <h1 className="font-display text-7xl sm:text-8xl lg:text-[110px] leading-none tracking-wide mb-6 anim-2"
            style={{
              background: 'linear-gradient(135deg, #C0622A 0%, #A88C50 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
            EXPRESS
          </h1>

          {/* Tagline */}
          <p className="font-body text-khaki-800 text-lg sm:text-xl leading-relaxed max-w-xl mb-3 anim-3" style={{ fontWeight: 300 }}>
            Superior freight transportation driven by hard work, reliability, and an unwavering commitment to safety —
            <em className="text-sand not-italic"> across every mile we serve.</em>
          </p>
          <p className="font-mono text-xs text-khaki-700 tracking-widest mb-10 anim-3 uppercase">
            Trucking LLC · 1521 Finley St, Cedar Hill, TX 75104
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 anim-4">
            <Link to="/quote" className="btn-primary">
              <span className="flex items-center gap-2">Request a Quote <ArrowRight size={16} /></span>
            </Link>
            <Link to="/services" className="btn-outline">
              <span>Our Services</span>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 max-w-sm anim-5">
            {[
              { icon: Shield,  label: 'Safety First',  sub: 'Every Load' },
              { icon: Clock,   label: 'On-Time',        sub: 'Delivery' },
              { icon: MapPin,  label: 'Nationwide',     sub: 'Coverage' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center text-center gap-1.5 p-4 rounded-sm"
                style={{
                  background: 'rgba(255,255,255,0.55)',
                  border: '1px solid rgba(168,140,80,0.35)',
                  backdropFilter: 'blur(6px)',
                }}>
                <Icon size={18} className="text-khaki-600 mb-1" />
                <span className="font-heading text-parchment text-xs tracking-wider uppercase">{label}</span>
                <span className="font-mono text-khaki-700 text-xs">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated road lines at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden opacity-30">
        <div className="road-line flex gap-16 w-[200%]">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-16 h-0.5 flex-shrink-0"
              style={{ background: 'linear-gradient(90deg, transparent, #A88C50, transparent)', marginTop: 24 }} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-50">
        <div className="font-mono text-[10px] text-khaki-500 tracking-widest rotate-90 mb-4">SCROLL</div>
        <div className="w-px h-12" style={{ background: 'linear-gradient(180deg, #A88C50, transparent)' }} />
      </div>
    </section>
  )
}
