import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

function AnimatedTitle({ text }: { text: string }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <h1
      className="font-playfair text-[clamp(48px,6vw,96px)] font-bold leading-[1.05] tracking-[-2px] text-pure-white"
      style={{ color: '#FFFFFF' }}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-[1200ms]"
          style={{
            transitionDelay: `${0.4 + i * 0.04}s`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(60px)',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-deep-navy"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="./hero-knowledge-assembly.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(2,12,27,0.7) 0%, rgba(2,12,27,0.4) 50%, rgba(2,12,27,0.85) 100%)',
        }}
      />

      {/* Liquid Glass Card */}
      <div
        className="relative z-10 mx-6 w-full max-w-[700px] rounded-[16px] p-10 text-center md:p-14"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow:
            '0 4px 30px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255,255,255,0.05)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: '0.6s',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'scale(1)' : 'scale(0.95)',
        }}
      >
        {/* Eyebrow */}
        <p
          className="mb-4 font-inter text-[12px] font-medium uppercase tracking-[3px] text-accent-gold"
          style={{
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.2s',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          STUDYCLUB PRESENTS
        </p>

        {/* Title */}
        <AnimatedTitle text="THINK AND GROW RICH" />

        {/* Subtitle */}
        <p
          className="mx-auto mt-6 max-w-[560px] font-inter text-[20px] font-light leading-[1.6] text-off-white"
          style={{
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '1.0s',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          A 13-Week Study Program Based on Napoleon Hill&apos;s Timeless Philosophy of Success
        </p>

        {/* CTA Buttons */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '1.4s',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <Link
            to="/study-plan"
            className="rounded-[4px] bg-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#C4A02E] hover:shadow-gold-glow"
          >
            Start Your Journey
          </Link>
          <Link
            to="/principles"
            className="rounded-[4px] border border-accent-gold bg-transparent px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-accent-gold transition-all duration-300 hover:bg-accent-gold hover:text-deep-navy"
          >
            Explore the 13 Principles
          </Link>
        </div>
      </div>

      {/* Scroll Chevron */}
      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        style={{ color: 'var(--accent-gold)' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce-chevron"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
