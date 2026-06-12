import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'framer-motion'
import { toast } from 'sonner'
import Layout from '../components/Layout'

const easeExpoOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    num: '01',
    title: 'Collective Intelligence',
    desc: "When minds unite around a shared purpose, the resulting intelligence exceeds the sum of its parts. Problems that stump individuals are solved by groups.",
  },
  {
    num: '02',
    title: 'Accountability',
    desc: 'A mastermind group ensures you follow through on your commitments. When you report your progress to others, your motivation multiplies.',
  },
  {
    num: '03',
    title: 'Diverse Perspective',
    desc: "Different backgrounds, skills, and viewpoints reveal blind spots you would never see alone. Diversity of thought is the mastermind's secret weapon.",
  },
]

const steps = [
  { num: 1, title: 'Join', desc: 'Sign up for the StudyClub. You\'ll be placed in a mastermind group of 4–6 members who share your commitment level.' },
  { num: 2, title: 'Meet Weekly', desc: 'Your group meets for 60 minutes each week via video call. One member shares a challenge, the group provides solutions.' },
  { num: 3, title: 'Study Together', desc: 'Each week focuses on one of the 13 Principles. Read the chapter, complete exercises, and discuss insights with your group.' },
  { num: 4, title: 'Grow Together', desc: 'Apply the principles to your life. Track your progress. Celebrate wins. Hold each other accountable for 13 weeks and beyond.' },
]

const events = [
  {
    title: 'Weekly Principle Discussion',
    date: 'Every Tuesday 7PM EST',
    desc: 'Group discussion of the week\'s principle. Share insights, ask questions, apply together.',
  },
  {
    title: 'Vision Board Workshop',
    date: 'First Saturday of Month',
    desc: 'A hands-on session to visualize your desires. Materials provided. Open to all members.',
  },
  {
    title: 'Guest Speaker Series',
    date: 'Monthly',
    desc: "Successful entrepreneurs and leaders share how they applied Hill's principles in their lives.",
  },
]

/* ------------------------------------------------------------------ */
/*  SECTION 1 — PAGE HEADER                                            */
/* ------------------------------------------------------------------ */

function PageHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const titleChars = 'THE MASTERMIND'.split('')

  return (
    <section
      ref={ref}
      className="relative flex min-h-[60vh] items-center justify-center bg-deep-navy px-6 pt-20"
    >
      <div className="mx-auto max-w-[1200px] text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-[12px] font-medium uppercase tracking-[3px] text-accent-gold"
        >
          JOIN US
        </motion.p>

        {/* Title with char split */}
        <h1 className="mt-4 font-playfair text-[clamp(48px,6vw,96px)] font-bold leading-[1.05] tracking-[-2px] text-pure-white">
          {titleChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.04,
                ease: easeExpoOut,
              }}
              className="inline-block"
              style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Pull quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 1.0, ease: easeExpoOut }}
          className="mx-auto mt-8 max-w-[700px] font-instrument text-[clamp(18px,2vw,24px)] italic leading-[1.5] text-accent-gold"
        >
          &ldquo;No two minds ever come together without thereby creating a third, invisible, intangible force which may be likened to a third mind.&rdquo;
        </motion.p>

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-4 font-inter text-[14px] font-normal text-steel-blue"
        >
          — Napoleon Hill, Think and Grow Rich
        </motion.p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 2 — WHY A MASTERMIND? (THREE PILLARS)                      */
/* ------------------------------------------------------------------ */

function PillarsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="bg-deep-navy px-6 py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeExpoOut }}
          className="mb-16 text-center font-playfair text-[clamp(32px,4vw,56px)] font-semibold text-pure-white"
        >
          WHY A MASTERMIND?
        </motion.h2>

        {/* Pillar cards grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: easeExpoOut,
              }}
              className="relative overflow-hidden bg-midnight-blue p-12"
            >
              {/* Gold top border with scaleX animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.15,
                  ease: easeExpoOut,
                }}
                className="absolute left-0 top-0 h-[3px] w-full origin-left bg-accent-gold"
              />

              {/* Pillar number */}
              <p className="font-instrument text-[64px] leading-none text-accent-gold">
                {p.num}
              </p>

              {/* Title */}
              <h3 className="mt-4 font-playfair text-[24px] font-semibold text-pure-white">
                {p.title}
              </h3>

              {/* Description */}
              <p className="mt-4 font-inter text-[16px] leading-[1.7] text-off-white">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — HOW IT WORKS (STEP PROCESS)                            */
/* ------------------------------------------------------------------ */

function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-warm-white px-6 py-[100px]">
      <div className="mx-auto max-w-[1000px]">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeExpoOut }}
          className="mb-16 text-center font-playfair text-[36px] font-semibold text-deep-navy"
        >
          HOW IT WORKS
        </motion.h2>

        {/* Steps - horizontal on desktop, vertical on mobile */}
        <div className="relative flex flex-col gap-12 md:flex-row md:items-start md:gap-0">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex flex-1 flex-col items-center text-center md:px-4">
              {/* Step circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.2,
                  ease: easeExpoOut,
                }}
                className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-accent-gold font-inter text-[28px] font-bold text-deep-navy"
              >
                {s.num}
              </motion.div>

              {/* Connecting line — between circles, hidden for last item */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.2 + 0.3,
                    ease: easeExpoOut,
                  }}
                  className="absolute left-1/2 top-[36px] hidden h-[2px] w-[calc(100%-72px)] origin-left bg-accent-gold md:block"
                  style={{ transform: 'translateX(36px)' }}
                />
              )}

              {/* Mobile connecting line */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.2 + 0.3,
                    ease: easeExpoOut,
                  }}
                  className="mt-4 h-[40px] w-[2px] origin-top bg-accent-gold md:hidden"
                />
              )}

              {/* Step text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.2 + 0.2,
                  ease: easeExpoOut,
                }}
                className="mt-6"
              >
                <h3 className="font-playfair text-[22px] font-semibold text-deep-navy">
                  {s.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[240px] font-inter text-[16px] leading-[1.6] text-charcoal">
                  {s.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — EVENTS CALENDAR                                        */
/* ------------------------------------------------------------------ */

function EventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="bg-deep-navy px-6 py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeExpoOut }}
          className="text-center font-playfair text-[36px] font-semibold text-pure-white"
        >
          UPCOMING EVENTS
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: easeExpoOut }}
          className="mx-auto mt-4 max-w-[600px] text-center font-inter text-[18px] font-light text-off-white"
        >
          Weekly gatherings, special workshops, and guest speaker sessions
        </motion.p>

        {/* Event cards */}
        <div className="mt-12 flex flex-col gap-6">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.12,
                ease: easeExpoOut,
              }}
              className="flex flex-col overflow-hidden border-l-[3px] border-accent-gold bg-midnight-blue md:flex-row"
            >
              {/* Date badge */}
              <div className="flex w-full items-center justify-center bg-accent-gold px-6 py-4 md:w-[200px]">
                <span className="font-inter text-[14px] font-semibold uppercase tracking-[1px] text-deep-navy">
                  {e.date}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 items-center justify-between p-8">
                <div>
                  <h3 className="font-playfair text-[22px] font-semibold text-pure-white">
                    {e.title}
                  </h3>
                  <p className="mt-2 font-inter text-[16px] text-off-white">
                    {e.desc}
                  </p>
                </div>
                <Link
                  to="/community"
                  className="ml-6 flex-shrink-0 rounded-[4px] border border-accent-gold px-5 py-3 font-inter text-[12px] font-medium uppercase tracking-[1px] text-accent-gold transition-all duration-300 hover:bg-accent-gold hover:text-deep-navy"
                  onClick={(ev) => {
                    ev.preventDefault()
                    toast.success('RSVP sent!', {
                      description: `You\'re registered for "${e.title}". We\'ll send a calendar invite.`,
                      duration: 4000,
                    })
                  }}
                >
                  RSVP
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 5 — JOIN CTA                                               */
/* ------------------------------------------------------------------ */

function JoinCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [email, setEmail] = useState('')
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      toast.error('Please enter your email address')
      return
    }
    toast.success('You\'re in!', {
      description: 'Welcome to the StudyClub. Check your email for next steps.',
      duration: 5000,
    })
    setEmail('')
  }

  return (
    <section
      ref={ref}
      className="border-t border-slate-blue bg-midnight-blue px-6 py-[100px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: easeExpoOut }}
        className="mx-auto max-w-[600px] text-center"
      >
        {/* Title */}
        <h2 className="font-playfair text-[clamp(28px,3vw,44px)] font-semibold text-pure-white">
          Start Your Mastermind Journey
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-[560px] font-inter text-[18px] font-light text-off-white">
          The 13 Principles come alive when studied together. Join a group of committed learners and transform your thinking.
        </p>

        {/* Email form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Enter your email address"
            className="flex-1 rounded-[4px] bg-deep-navy px-5 py-4 font-inter text-[16px] text-off-white outline-none transition-colors duration-300"
            style={{
              border: focused
                ? '1px solid var(--accent-gold)'
                : '1px solid var(--slate-blue)',
            }}
          />
          <button
            type="submit"
            className="rounded-[4px] bg-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#C4A02E] hover:shadow-gold-glow"
          >
            Join the StudyClub
          </button>
        </motion.form>

        {/* Privacy note */}
        <p className="mt-4 font-inter text-[12px] font-normal text-steel-blue">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </motion.div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE COMPONENT                                                */
/* ------------------------------------------------------------------ */

export default function Community() {
  return (
    <Layout>
      <PageHeader />
      <PillarsSection />
      <HowItWorks />
      <EventsSection />
      <JoinCTA />
    </Layout>
  )
}
