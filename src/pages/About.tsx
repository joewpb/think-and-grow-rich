import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import Layout from '../components/Layout'

/* ─── easing token ─── */
const easeExpoOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

/* ═══════════════════════════════════════════
   Section 1 — Page Header
   ═══════════════════════════════════════════ */
function PageHeader() {
  const titleChars = 'NAPOLEON HILL'.split('')

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-deep-navy"
      style={{ minHeight: '60vh' }}
    >
      <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center px-6 pb-16 pt-28 text-center">
        {/* Eyebrow */}
        <motion.p
          className="mb-6 font-inter text-[12px] font-medium uppercase tracking-[3px] text-accent-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeExpoOut }}
        >
          THE AUTHOR &amp; THE BOOK
        </motion.p>

        {/* Title — char split */}
        <h1 className="mb-6 flex flex-wrap justify-center font-playfair text-[clamp(48px,6vw,96px)] font-bold leading-[1.1] text-pure-white">
          {titleChars.map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.04,
                ease: easeExpoOut,
              }}
              style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Decorative gold line */}
        <motion.div
          className="mb-6 h-[1px] w-20 bg-accent-gold"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: easeExpoOut }}
        />

        {/* Subtitle */}
        <motion.p
          className="mx-auto max-w-[640px] font-inter text-[18px] font-light leading-relaxed text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: easeExpoOut }}
        >
          1883–1970 — The man who spent 20 years interviewing 500+ of the world&apos;s
          most successful people to uncover the philosophy of achievement.
        </motion.p>

        {/* Portrait */}
        <motion.div
          className="mt-12 h-48 w-48 overflow-hidden rounded-full border-2 border-accent-gold shadow-gold-glow md:h-56 md:w-56"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: easeExpoOut }}
        >
          <img
            src="/napoleon-hill-portrait.jpg"
            alt="Napoleon Hill portrait"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   Section 2 — Biography Timeline
   ═══════════════════════════════════════════ */
const timelineEvents = [
  { year: '1883', text: 'Born in a one-room cabin in Pound, Virginia. His mother died when he was nine.' },
  { year: '1908', text: 'Hired as a reporter, he secured an interview with Andrew Carnegie — then the world\'s richest man. Carnegie was impressed.' },
  { year: '1908–1928', text: 'Carnegie challenged Hill to interview successful people and systematize their methods. Hill spent 20 years meeting Ford, Edison, Rockefeller, and 500+ others.' },
  { year: '1928', text: 'Published "The Law of Success," an eight-volume work and precursor to Think and Grow Rich.' },
  { year: '1937', text: 'Published Think and Grow Rich during the Great Depression. It was an immediate success, providing hope and a practical path forward.' },
  { year: '1970', text: 'Napoleon Hill passed away, but his work continues to influence millions worldwide. The book has sold over 100 million copies.' },
]

function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.15 })
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    if (!isInView) return
    const timers: ReturnType<typeof setTimeout>[] = []
    timelineEvents.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setActiveIndex(i)
        }, 300 + i * 400)
      )
    })
    return () => timers.forEach(clearTimeout)
  }, [isInView])

  return (
    <section className="bg-deep-navy py-24 md:py-32">
      <div ref={containerRef} className="mx-auto max-w-[900px] px-6">
        {/* Title */}
        <motion.h2
          className="mb-16 text-center font-playfair text-[36px] font-semibold text-pure-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: easeExpoOut }}
        >
          THE JOURNEY
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* SVG vertical gold line — draws on scroll */}
          <svg
            className="absolute left-[5px] top-0 h-full w-[2px] md:left-[7px]"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#D4AF37"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2.4, ease: 'easeInOut' }}
            />
          </svg>

          {/* Timeline items */}
          <div className="flex flex-col gap-12 md:gap-16">
            {timelineEvents.map((event, i) => (
              <div key={event.year + i} className="relative">
                {/* Node */}
                <motion.div
                  className="absolute -left-[27px] top-[6px] h-3 w-3 rounded-full bg-accent-gold md:-left-[31px]"
                  initial={{ scale: 0 }}
                  animate={{ scale: activeIndex >= i ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: easeExpoOut }}
                />

                {/* Content */}
                <motion.div
                  className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: activeIndex >= i ? 1 : 0, x: activeIndex >= i ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: easeExpoOut }}
                >
                  <span className="shrink-0 font-inter text-[20px] font-bold text-accent-gold">
                    {event.year}
                  </span>
                  <p className="font-inter text-[16px] leading-[1.7] text-off-white">
                    {event.text}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   Section 3 — Key Quotes Gallery
   ═══════════════════════════════════════════ */
const quotes = [
  { text: 'Tell the world what you intend to do, but first show it.', context: 'On action over announcement' },
  { text: 'Fears are nothing more than states of mind. One\'s state of mind is subject to control and direction.', context: 'On mastering fear' },
  { text: 'Man can create nothing which he does not first conceive in the form of an impulse of thought.', context: 'On the power of thought' },
  { text: 'There is a difference between WISHING for a thing and being READY to receive it.', context: 'On preparedness' },
  { text: 'The way of success is the way of continuous pursuit of knowledge.', context: 'On lifelong learning' },
  { text: 'A quitter never wins — and a winner never quits.', context: 'On persistence' },
]

function QuotesSection() {
  return (
    <section className="bg-warm-white py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Title */}
        <motion.h2
          className="mb-4 text-center font-playfair text-[clamp(32px,4vw,56px)] font-semibold"
          style={{ color: '#020C1B' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: easeExpoOut }}
        >
          WORDS OF WISDOM
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mb-16 text-center font-inter text-[18px] font-normal"
          style={{ color: '#2C2C2C' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.15, ease: easeExpoOut }}
        >
          Timeless insights from Think and Grow Rich
        </motion.p>

        {/* Quote Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden bg-pure-white p-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: easeExpoOut,
              }}
            >
              {/* Animated gold left border — scaleY(0->1) from top */}
              <motion.div
                className="absolute bottom-0 left-0 top-0 w-[3px] bg-accent-gold"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1 + 0.2,
                  ease: easeExpoOut,
                }}
                style={{ transformOrigin: 'top' }}
              />

              <p
                className="mb-4 font-instrument text-[clamp(18px,2vw,22px)] italic leading-[1.6]"
                style={{ color: '#020C1B' }}
              >
                &ldquo;{quote.text}&rdquo;
              </p>
              <span className="font-inter text-[12px] font-medium uppercase tracking-[1px] text-accent-gold">
                {quote.context}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   Section 4 — Legacy Impact Stats
   ═══════════════════════════════════════════ */
const stats = [
  { number: 100, suffix: 'M+', label: 'Copies sold worldwide across all editions and translations', rawLabel: 'Copies Sold' },
  { number: 40, suffix: '+', label: 'Languages translated into, making it one of the most accessible books ever written', rawLabel: 'Languages' },
  { number: 20, suffix: '+', label: 'Years Hill spent interviewing the most successful people of his era', rawLabel: 'Years of Research' },
  { number: 500, suffix: '+', label: 'Successful individuals including Ford, Edison, Rockefeller, and Carnegie', rawLabel: 'People Interviewed' },
]

function useCountUp(target: number, duration: number, triggered: boolean) {
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (v) => Math.round(v))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!triggered) return
    const controls = animate(mv, target, { duration, ease: easeExpoOut })
    const unsub = rounded.on('change', (v) => setDisplay(v))
    return () => {
      controls.stop()
      unsub()
    }
  }, [triggered, target, duration, mv, rounded])

  return display
}

function StatBlock({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(stat.number, 2, isInView)

  return (
    <motion.div
      ref={ref}
      className="flex flex-1 flex-col items-center px-6 py-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: easeExpoOut }}
    >
      <span className="font-playfair text-[clamp(48px,6vw,80px)] font-bold text-accent-gold">
        {count}
        {stat.suffix}
      </span>
      <span className="mb-3 font-inter text-[16px] font-medium text-off-white">
        {stat.rawLabel}
      </span>
      <p className="max-w-[240px] font-inter text-[16px] text-off-white">
        {stat.label}
      </p>
    </motion.div>
  )
}

function LegacySection() {
  return (
    <section className="bg-deep-navy py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-6">
        {/* Title */}
        <motion.h2
          className="mb-4 text-center font-playfair text-[36px] font-semibold text-pure-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: easeExpoOut }}
        >
          THE LEGACY
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mb-16 text-center font-inter text-[18px] font-light text-off-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.15, ease: easeExpoOut }}
        >
          Over 85 years of impact across the world
        </motion.p>

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row md:items-stretch">
          {stats.map((stat, i) => (
            <div key={stat.rawLabel} className="flex flex-1">
              <StatBlock stat={stat} index={i} />
              {/* Divider */}
              {i < stats.length - 1 && (
                <div
                  className="hidden w-[1px] self-stretch md:block"
                  style={{ backgroundColor: '#233554' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   Section 5 — CTA Banner
   ═══════════════════════════════════════════ */
function CTASection() {
  return (
    <section
      className="border-y border-slate-blue bg-midnight-blue py-20 md:py-24"
    >
      <div className="mx-auto max-w-[800px] px-6 text-center">
        {/* Quote */}
        <motion.blockquote
          className="mx-auto mb-4 max-w-[700px] font-instrument text-[clamp(18px,2vw,24px)] italic leading-relaxed text-accent-gold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.0, ease: easeExpoOut }}
        >
          &ldquo;When you begin to think and grow rich, you will observe that riches begin
          with a state of mind, with definiteness of purpose, with little or no hard work.&rdquo;
        </motion.blockquote>

        {/* Attribution */}
        <motion.p
          className="mb-10 font-inter text-[14px] text-steel-blue"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeExpoOut }}
        >
          — Napoleon Hill
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeExpoOut }}
          >
            <Link
              to="/study-plan"
              className="inline-block rounded-[4px] bg-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#C4A02E] hover:shadow-gold-glow"
            >
              Start Your Study Plan
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.55, ease: easeExpoOut }}
          >
            <Link
              to="/community"
              className="inline-block rounded-[4px] border border-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-accent-gold transition-all duration-300 hover:bg-accent-gold hover:text-deep-navy"
            >
              Join the Community
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   About Page
   ═══════════════════════════════════════════ */
export default function About() {
  return (
    <Layout>
      <PageHeader />
      <TimelineSection />
      <QuotesSection />
      <LegacySection />
      <CTASection />
    </Layout>
  )
}
