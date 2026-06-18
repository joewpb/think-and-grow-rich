import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router'
import Layout from '../components/Layout'

const easeExpoOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const chapters = [
  { slug: 'intro', label: 'Introduction' },
  { slug: 'desire', label: 'Ch. 1 — Desire' },
  { slug: 'faith', label: 'Ch. 2 — Faith' },
  { slug: 'autosuggestion', label: 'Ch. 3 — Auto-Suggestion' },
  { slug: 'specialized_knowledge', label: 'Ch. 4 — Specialized Knowledge' },
  { slug: 'imagination', label: 'Ch. 5 — Imagination' },
  { slug: 'organized_planning', label: 'Ch. 6 — Organized Planning' },
  { slug: 'decision', label: 'Ch. 7 — Decision' },
  { slug: 'persistence', label: 'Ch. 8 — Persistence' },
  { slug: 'master_mind', label: 'Ch. 9 — Master Mind' },
  { slug: 'sex_transmutation', label: 'Ch. 10 — Sex Transmutation' },
  { slug: 'subconscious', label: 'Ch. 11 — Subconscious Mind' },
  { slug: 'brain', label: 'Ch. 12 — The Brain' },
  { slug: 'sixth_sense', label: 'Ch. 13 — Sixth Sense' },
  { slug: 'fear', label: 'Ch. 14 — Six Ghosts of Fear' },
]

const protocol = [
  {
    num: '1',
    title: 'Gather a friendly, harmonious group.',
    desc: 'Any number works. The single requirement is harmony — Hill names it before he names frequency, before he names reading. The Master Mind doesn\'t function without it.',
  },
  {
    num: '2',
    title: 'Meet on a fixed cadence.',
    desc: 'Once a week, as often as possible. The rhythm is the engine. Sporadic meetings produce sporadic results.',
  },
  {
    num: '3',
    title: 'Read and analyze before you arrive.',
    desc: 'Each member reads the chapter several days ahead. Underline what cuts. Walk in prepared. The unready member arrives empty and the table reveals it.',
  },
  {
    num: '4',
    title: 'One strong reader voices it aloud.',
    desc: 'Not a lecture. A member reads the chapter aloud — with color and feeling. The spoken word lands differently than the silent scan. Hill insisted on it.',
  },
  {
    num: '5',
    title: 'Discuss freely. Capture everything.',
    desc: 'Every member writes down every idea the discussion sparks — their own ideas, not a transcript. This is the capture step, and it is also the filter. If you have nothing to write, you weren\'t prepared.',
  },
  {
    num: '6',
    title: 'Run with persistence.',
    desc: 'Thirteen weeks minimum. Every session surfaces two streams of knowledge: the distilled experience of the five hundred operators Hill catalogued, and the latent intelligence already in the room. Both streams require repetition to unlock.',
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
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-[12px] font-medium uppercase tracking-[3px] text-accent-gold"
        >
          THE HILL CODEX
        </motion.p>

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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 1.0, ease: easeExpoOut }}
          className="mx-auto mt-8 max-w-[700px] font-instrument text-[clamp(18px,2vw,24px)] italic leading-[1.5] text-accent-gold"
        >
          &ldquo;No two minds ever come together without thereby creating a third, invisible, intangible force which may be likened to a third mind.&rdquo;
        </motion.p>

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
/*  SECTION 2 — THE PROTOCOL (Hill's 6-step operating manual)          */
/* ------------------------------------------------------------------ */

function ProtocolSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="bg-deep-navy px-6 py-[100px]">
      <div className="mx-auto max-w-[1000px]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeExpoOut }}
          className="mb-4 text-center font-playfair text-[36px] font-semibold text-pure-white"
        >
          HOW THE CLUB RUNS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-16 max-w-[640px] text-center font-inter text-[16px] leading-relaxed text-off-white"
        >
          Hill didn&apos;t just write a book. He wrote an <em className="not-italic text-accent-gold">operating manual</em> for a study club — in the Author&apos;s Preface, before Chapter One even begins. Six steps. That&apos;s the protocol. The rest is commentary.
        </motion.p>

        <div className="flex flex-col gap-8">
          {protocol.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: easeExpoOut,
              }}
              className="flex gap-6 border-b border-slate-blue pb-8 last:border-b-0"
            >
              <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center bg-midnight-blue font-instrument text-[24px] text-accent-gold">
                {p.num}
              </div>
              <div>
                <h3 className="font-playfair text-[20px] font-semibold text-pure-white">
                  {p.title}
                </h3>
                <p className="mt-2 font-inter text-[16px] leading-relaxed text-off-white">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — THE TWO STREAMS                                        */
/* ------------------------------------------------------------------ */

function TwoStreams() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="bg-midnight-blue px-6 py-[100px]">
      <div className="mx-auto max-w-[1000px]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeExpoOut }}
          className="mb-16 text-center font-playfair text-[36px] font-semibold text-pure-white"
        >
          THE TWO STREAMS
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: easeExpoOut }}
            className="bg-deep-navy p-10"
          >
            <p className="font-inter text-[12px] font-medium uppercase tracking-[2px] text-steel-blue">
              Stream One
            </p>
            <h3 className="mt-4 font-playfair text-[22px] font-semibold text-pure-white">
              The Distilled Five Hundred
            </h3>
            <p className="mt-4 font-inter text-[16px] leading-relaxed text-off-white">
              Hill spent twenty-five years cataloguing the operating procedures of Ford, Edison, Carnegie, Wrigley, Rockefeller, Schwab, Eastman, Bell, Wanamaker, and Woolworth — five hundred operators in total. Every chapter in the book is a composite pattern drawn from that data set. When your club discusses a chapter, you are not swapping opinions. You are decoding the field manual those operators ran.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: easeExpoOut }}
            className="bg-deep-navy p-10"
          >
            <p className="font-inter text-[12px] font-medium uppercase tracking-[2px] text-steel-blue">
              Stream Two
            </p>
            <h3 className="mt-4 font-playfair text-[22px] font-semibold text-pure-white">
              The Latent Intelligence
            </h3>
            <p className="mt-4 font-inter text-[16px] leading-relaxed text-off-white">
              Hill&apos;s protocol requires every member to write down their own ideas during discussion — not a transcript, not notes on what someone else said. Your own ideas. The capture step doubles as the filter: the prepared member has something to capture. The unprepared member sits in silence. The structure does the work. You don&apos;t have to call anyone out.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — SESSION MATERIALS                                      */
/* ------------------------------------------------------------------ */

function SessionMaterials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} className="bg-deep-navy px-6 py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeExpoOut }}
          className="mb-4 text-center font-playfair text-[36px] font-semibold text-pure-white"
        >
          SESSION MATERIALS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-12 max-w-[580px] text-center font-inter text-[16px] text-off-white"
        >
          Every chapter has a discussion guide. Five questions drawn from the source text. Open it before your session.
        </motion.p>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {chapters.map((c) => (
            <motion.a
              key={c.slug}
              href={`/resources/discussion-guides/dg-ch${String(chapters.indexOf(c)).padStart(2, '0')}-${c.slug}.html`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.05 * chapters.indexOf(c),
                ease: easeExpoOut,
              }}
              className="group flex items-center gap-4 bg-midnight-blue px-6 py-5 transition-colors duration-300 hover:bg-[#1a2d4a]"
            >
              <span className="flex h-[36px] w-[36px] flex-shrink-0 items-center justify-center bg-deep-navy font-inter text-[13px] font-medium text-accent-gold group-hover:text-[#e8c14a]">
                {chapters.indexOf(c) + 1}
              </span>
              <span className="font-inter text-[14px] text-off-white group-hover:text-pure-white">
                {c.label}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-10 text-center font-inter text-[14px] text-steel-blue"
        >
          Full resource library — worksheets, deep-dives, and chapter summaries — available on the{' '}
          <Link to="/study-plan" className="text-accent-gold underline-offset-2 hover:underline">
            Study Plan
          </Link>{' '}
          page.
        </motion.p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 5 — THE DIFFERENCE                                         */
/* ------------------------------------------------------------------ */

function TheDifference() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-warm-white px-6 py-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: easeExpoOut }}
        className="mx-auto max-w-[700px] text-center"
      >
        <p className="font-inter text-[12px] font-medium uppercase tracking-[3px] text-accent-gold">
          THE DIFFERENCE
        </p>

        <h2 className="mt-4 font-playfair text-[clamp(24px,3vw,36px)] font-semibold leading-[1.3] text-deep-navy">
          Reading alone is the broken configuration.
        </h2>

        <p className="mt-6 font-inter text-[18px] leading-relaxed text-charcoal">
          Most people who pick up <em className="not-italic text-deep-navy font-medium">Think and Grow Rich</em> in 2026 will not extract the secret. They will skim. They will highlight three lines for a story. They will close the book and return to the algorithm. They will tell themselves they &ldquo;read it.&rdquo;
        </p>

        <p className="mt-4 font-inter text-[18px] leading-relaxed text-charcoal">
          The study club is not an add-on. It is the <em className="not-italic font-medium text-accent-gold">required configuration</em>. Hill built the protocol into the Author&apos;s Preface — before the first chapter, before the secret, before any principle is named. The group is not supplementary. It is the operating environment the book was designed to run in.
        </p>

        <p className="mt-4 font-inter text-[18px] leading-relaxed text-charcoal">
          Same text. Two different machines.
        </p>

        <Link
          to="/study-plan"
          className="mt-10 inline-block bg-accent-gold px-10 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#C4A02E] hover:shadow-gold-glow"
        >
          Start the Study Plan
        </Link>
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
      <ProtocolSection />
      <TwoStreams />
      <SessionMaterials />
      <TheDifference />
    </Layout>
  )
}
