import { useRef } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'framer-motion'
import Layout from '../components/Layout'

const easeExpoOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

/* ═══════════════════════════════════════════
   Section 1 — Page Header (cold open)
   ═══════════════════════════════════════════ */
function PageHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center bg-deep-navy px-6"
      style={{ minHeight: '55vh' }}
    >
      <div className="relative z-10 mx-auto max-w-[760px] pb-16 pt-28 text-center">
        <motion.p
          className="font-inter text-[11px] font-medium uppercase tracking-[3px] text-steel-blue"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The Hill Codex
        </motion.p>

        <motion.h1
          className="mt-5 font-playfair text-[clamp(36px,5vw,64px)] font-bold leading-[1.08] tracking-[-1px] text-pure-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: easeExpoOut }}
        >
          The book is not the product.
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-[600px] font-inter text-[18px] leading-relaxed text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: easeExpoOut }}
        >
          The study club is.
        </motion.p>

        <motion.div
          className="mx-auto mt-10 h-[1px] w-[60px] bg-accent-gold"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.1, ease: easeExpoOut }}
        />
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   Section 2 — The Filter
   ═══════════════════════════════════════════ */
function FilterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} className="bg-deep-navy px-6 py-[80px]">
      <div className="mx-auto max-w-[760px]">
        <motion.p
          className="font-inter text-[11px] font-medium uppercase tracking-[3px] text-steel-blue"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Author's Preface
        </motion.p>

        <motion.p
          className="mt-8 font-inter text-[18px] leading-[1.75] text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: easeExpoOut }}
        >
          The Author's Preface to <em className="not-italic text-accent-gold">Think and Grow Rich</em> is not a foreword. It is a filter. Hill engineered it that way on purpose, and ninety years later, the filter still works exactly as designed.
        </motion.p>

        <motion.p
          className="mt-6 font-inter text-[18px] leading-[1.75] text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: easeExpoOut }}
        >
          If you are opening this book to be entertained, the preface is doing its job — it is filtering you out. If you are opening it to architect a different life, the preface is doing its other job — it is loading the operating system.
        </motion.p>

        <motion.p
          className="mt-6 font-inter text-[18px] leading-[1.75] text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: easeExpoOut }}
        >
          Same text. Two different machines.
        </motion.p>

        <motion.p
          className="mt-4 font-inter text-[14px] text-steel-blue"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          Verstehst du?
        </motion.p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   Section 3 — The Commission
   ═══════════════════════════════════════════ */
function CommissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} className="bg-midnight-blue px-6 py-[100px]">
      <div className="mx-auto max-w-[760px]">
        <motion.p
          className="font-inter text-[11px] font-medium uppercase tracking-[3px] text-steel-blue"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Origin
        </motion.p>

        <motion.p
          className="mt-8 font-inter text-[18px] leading-[1.75] text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: easeExpoOut }}
        >
          In 1908, Napoleon Hill — a young reporter from Virginia — sat down across a table from Andrew Carnegie. Carnegie was, at that moment, one of the wealthiest men who had ever lived. He handed Hill a single idea and went silent. No lecture. No slide deck. He tossed the secret over and watched, with what Hill later remembered as a "merry twinkle," to see if the kid had the wiring to receive it.
        </motion.p>

        <motion.p
          className="mt-6 font-inter text-[18px] leading-[1.75] text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: easeExpoOut }}
        >
          When Hill caught it, Carnegie made him an offer no MBA program will ever match. Spend twenty years. Build a working philosophy from the lives of five hundred of the most accomplished operators in America. Ford. Edison. Wrigley. Rockefeller. Schwab. Eastman. Bell. Wanamaker. Woolworth.
        </motion.p>

        <motion.p
          className="mt-6 font-inter text-[18px] leading-[1.75] text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: easeExpoOut }}
        >
          Hill said yes. He spent twenty-five. The book is the artifact of that promise — published in 1937, during the Great Depression, when the market for hope was limitless but the demand for procedure was real. Over 100 million copies later, the procedure still works exactly as documented.
        </motion.p>

        <motion.p
          className="mt-6 font-inter text-[18px] leading-[1.75] text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: easeExpoOut }}
        >
          The book is not a collection of motivational quotes. It is a field manual compiled from the operating procedures of five hundred people who actually built things. Hill treated success as an engineering problem. We treat the book the same way.
        </motion.p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   Section 4 — The Protocol
   ═══════════════════════════════════════════ */
function ProtocolSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="bg-deep-navy px-6 py-[100px]">
      <div className="mx-auto max-w-[760px]">
        <motion.p
          className="font-inter text-[11px] font-medium uppercase tracking-[3px] text-steel-blue"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Operating Manual
        </motion.p>

        <motion.h2
          className="mt-4 font-playfair text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] text-pure-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: easeExpoOut }}
        >
          Hill did not write a book for solitary readers.
        </motion.h2>

        <motion.p
          className="mt-6 font-inter text-[18px] leading-[1.75] text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: easeExpoOut }}
        >
          Before Chapter One begins, before a single principle is named, before the secret appears anywhere in the text, Hill lays down a protocol. Not a suggestion. A protocol. Six steps, printed in the Author's Preface. The club is not an add-on product. It is the operating environment the book was designed to run in.
        </motion.p>

        <motion.p
          className="mt-6 font-inter text-[18px] leading-[1.75] text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: easeExpoOut }}
        >
          Gather a friendly, harmonious group — any number works. Meet on a fixed cadence, as often as once a week. Each member reads and analyzes the chapter several days before. One strong reader voices it aloud, with color and feeling. Everyone discusses freely, and — this is the load-bearing step — writes down every idea the discussion sparks. Run with persistence.
        </motion.p>

        <motion.p
          className="mt-6 font-inter text-[18px] leading-[1.75] text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: easeExpoOut }}
        >
          Every session produces two knowledge streams. Stream one: the distilled experience of the five hundred operators Hill catalogued. Stream two: the latent intelligence already in the room. The capture step is also the filter. The unprepared member has nothing to write down and the table reveals it. The structure does the work. You don't have to call anyone out.
        </motion.p>

        <motion.p
          className="mt-6 font-inter text-[18px] leading-[1.75] text-off-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.75, ease: easeExpoOut }}
        >
          Harmony is not decoration. Hill names it before he names frequency, before he names reading, before he names anything else. The Master Mind does not function without it. This is the operating requirement.
        </motion.p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   Section 5 — The Difference (polarization close)
   ═══════════════════════════════════════════ */
function TheDifference() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} className="bg-warm-white px-6 py-[100px]">
      <div className="mx-auto max-w-[700px] text-center">
        <motion.p
          className="font-inter text-[12px] font-medium uppercase tracking-[3px] text-accent-gold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          The difference
        </motion.p>

        <motion.h2
          className="mt-4 font-playfair text-[clamp(26px,3vw,40px)] font-semibold leading-[1.2] text-deep-navy"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: easeExpoOut }}
        >
          Most people who pick up this book will not extract the secret.
        </motion.h2>

        <motion.p
          className="mt-6 font-inter text-[18px] leading-[1.7] text-charcoal"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: easeExpoOut }}
        >
          They will skim. They will highlight three lines for a story. They will close the book and return to the algorithm. They will tell themselves they "read it."
        </motion.p>

        <motion.p
          className="mt-5 font-inter text-[18px] leading-[1.7] text-charcoal"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: easeExpoOut }}
        >
          This is not a moral failure. It is a configuration error. The unready reader treats the book as content. The ready reader treats the book as a manual. Same pages. Different operating system.
        </motion.p>

        <motion.p
          className="mt-5 font-inter text-[18px] leading-[1.7] text-charcoal"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: easeExpoOut }}
        >
          Hill is telling you, before you turn a single chapter, that the determining factor is not the book.
        </motion.p>

        <motion.p
          className="mt-2 font-inter text-[18px] font-semibold leading-[1.7] text-deep-navy"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.75, ease: easeExpoOut }}
        >
          It is you.
        </motion.p>

        <motion.p
          className="mt-5 font-inter text-[18px] leading-[1.7] text-charcoal"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9, ease: easeExpoOut }}
        >
          If that sentence makes you defensive, the preface has already done its work. If it makes you sit up straighter, the preface has already done its work. Both responses are signal. The question is which one you act on this week.
        </motion.p>

        <motion.div
          className="mx-auto mt-6 h-[1px] w-[40px] bg-accent-gold"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.05, ease: easeExpoOut }}
        />

        <motion.p
          className="mt-10 font-inter text-[16px] leading-[1.7] text-charcoal"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.15 }}
        >
          Hill closes the preface with one of the stranger instructions in the book. When you recognize the secret as you read, "stop for a moment, and turn down a glass."
        </motion.p>

        <motion.p
          className="mt-3 font-inter text-[16px] leading-[1.7] text-charcoal"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          Most readers will never turn down a glass. Some of you will. That is the only difference that matters.
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.45, ease: easeExpoOut }}
        >
          <Link
            to="/study-plan"
            className="inline-block rounded-[4px] bg-accent-gold px-10 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#C4A02E]"
          >
            Start the Study Plan
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   About Page — assembled
   ═══════════════════════════════════════════ */
export default function About() {
  return (
    <Layout>
      <PageHeader />
      <FilterSection />
      <CommissionSection />
      <ProtocolSection />
      <TheDifference />
    </Layout>
  )
}
