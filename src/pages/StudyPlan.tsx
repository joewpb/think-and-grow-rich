import { useRef } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'framer-motion'
import { BookOpen, FileText, Headphones } from 'lucide-react'
import Layout from '../components/Layout'

const easeExpoOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const weeks = [
  { week: 1, principle: 'Desire', reading: 'Ch. 1–2', exercises: ['Desire Statement', 'Visualization', 'Burning Desire Test'], prompt: 'What do you want so badly you can almost taste it?' },
  { week: 2, principle: 'Faith', reading: 'Ch. 3', exercises: ['Affirmation Writing', 'Faith Builder', 'Belief Audit'], prompt: 'What would you attempt if you knew you could not fail?' },
  { week: 3, principle: 'Auto-Suggestion', reading: 'Ch. 4', exercises: ['Auto-Suggestion Script', 'Mirror Practice', 'Voice Recording'], prompt: 'What story do you tell yourself every day?' },
  { week: 4, principle: 'Specialized Knowledge', reading: 'Ch. 5', exercises: ['Skills Audit', 'Learning Plan', 'Knowledge Gap Analysis'], prompt: 'What specific knowledge stands between you and your goal?' },
  { week: 5, principle: 'Imagination', reading: 'Ch. 6', exercises: ['Vision Board', 'Creative Exercise', 'Synthetic vs Creative Test'], prompt: 'Can you see, feel, and touch your desired future?' },
  { week: 6, principle: 'Organized Planning', reading: 'Ch. 7', exercises: ['One-Page Plan', 'Mastermind Pitch', 'Deadline Setting'], prompt: 'What is your goal with a deadline attached?' },
  { week: 7, principle: 'Decision', reading: 'Ch. 8', exercises: ['Decision Journal', 'Procrastination Audit', '24-Hour Challenge'], prompt: 'What decision have you been avoiding? Make it this week.' },
  { week: 8, principle: 'Persistence', reading: 'Ch. 9', exercises: ['Persistence Tracker', 'Restart a Goal', 'Obstacle Plan'], prompt: 'What goal did you give up on too soon?' },
  { week: 9, principle: 'Master Mind', reading: 'Ch. 10', exercises: ['Group Formation', 'Meeting Structure', 'Accountability Pair'], prompt: 'Who are your three mastermind partners?' },
  { week: 10, principle: 'Sex Transmutation', reading: 'Ch. 11', exercises: ['Energy Audit', 'Creative Channeling', 'Passion Project'], prompt: 'Where is your most powerful energy going? Redirect it.' },
  { week: 11, principle: 'Subconscious Mind', reading: 'Ch. 12', exercises: ['Affirmation Repetition', 'Negativity Detox', 'Thought Monitoring'], prompt: 'What toxic thoughts have you allowed to take root?' },
  { week: 12, principle: 'The Brain', reading: 'Ch. 13', exercises: ['Broadcasting Practice', 'Vibration Check', 'Thought Replacement'], prompt: 'What signal are you broadcasting to the world?' },
  { week: 13, principle: 'Sixth Sense', reading: 'Ch. 14–15', exercises: ['Meditation Practice', 'Intuition Journal', 'Integration Review'], prompt: 'How does it feel to have mastered all 12 principles?' },
]

const chapters = [
  { id: 'ch00', label: 'Introduction', slug: 'intro' },
  { id: 'ch01', label: 'Ch. 1 — Desire', slug: 'desire' },
  { id: 'ch02', label: 'Ch. 2 — Faith', slug: 'faith' },
  { id: 'ch03', label: 'Ch. 3 — Auto-Suggestion', slug: 'autosuggestion' },
  { id: 'ch04', label: 'Ch. 4 — Specialized Knowledge', slug: 'specialized_knowledge' },
  { id: 'ch05', label: 'Ch. 5 — Imagination', slug: 'imagination' },
  { id: 'ch06', label: 'Ch. 6 — Organized Planning', slug: 'organized_planning' },
  { id: 'ch07', label: 'Ch. 7 — Decision', slug: 'decision' },
  { id: 'ch08', label: 'Ch. 8 — Persistence', slug: 'persistence' },
  { id: 'ch09', label: 'Ch. 9 — Master Mind', slug: 'master_mind' },
  { id: 'ch10', label: 'Ch. 10 — Sex Transmutation', slug: 'sex_transmutation' },
  { id: 'ch11', label: 'Ch. 11 — Subconscious Mind', slug: 'subconscious' },
  { id: 'ch12', label: 'Ch. 12 — The Brain', slug: 'brain' },
  { id: 'ch13', label: 'Ch. 13 — Sixth Sense', slug: 'sixth_sense' },
  { id: 'ch14', label: 'Ch. 14 — Six Ghosts of Fear', slug: 'fear' },
]

type ResourceItem = {
  label: string
  href?: string
  gap?: boolean
}

type ResourceCard = {
  title: string
  icon: typeof BookOpen
  items: (ResourceItem & { chapters?: ResourceItem[] })[]
}

const resources: ResourceCard[] = [
  {
    title: 'Study Guides',
    icon: BookOpen,
    items: [
      { label: 'Chapter summaries',
        chapters: chapters.map(c => ({ label: c.label, href: `/resources/study-guides/chapter-summaries/sg-summary-${c.id}-${c.slug}.html` })) },
      { label: 'Key concept explanations',
        chapters: chapters.map(c => ({ label: c.label, href: `/resources/study-guides/key-concepts/sg-concepts-${c.id}-${c.slug}.html` })) },
      { label: 'Principle deep-dives',
        chapters: chapters.map(c => ({ label: c.label, href: `/resources/study-guides/principle-deep-dives/sg-deepdive-${c.id}-${c.slug}.html` })) },
      { label: 'Vocabulary definitions',
        chapters: chapters.map(c => ({ label: c.label, href: `/resources/study-guides/vocabulary/sg-vocab-${c.id}-${c.slug}.html` })) },
    ],
  },
  {
    title: 'Worksheets',
    icon: FileText,
    items: [
      { label: 'Desire statements',
        chapters: chapters.map(c => ({ label: c.label, href: `/resources/worksheets/desire-statements/ws-desire-${c.id}-${c.slug}.html` })) },
      { label: 'Affirmation templates',
        chapters: chapters.map(c => ({ label: c.label, href: `/resources/worksheets/affirmation-templates/ws-affirm-${c.id}-${c.slug}.html` })) },
      { label: 'Progress trackers',
        chapters: chapters.map(c => ({ label: c.label, href: `/resources/worksheets/progress-trackers/ws-tracker-${c.id}-${c.slug}.html` })) },
      { label: 'Self-analysis questionnaires',
        chapters: chapters.map(c => ({ label: c.label, href: `/resources/worksheets/self-analysis/ws-analysis-${c.id}-${c.slug}.html` })) },
    ],
  },
  {
    title: 'Audio Summaries',
    icon: Headphones,
    items: [
      { label: '15-minute chapter recaps', gap: true },
      { label: 'Guided visualization audio', href: '/resources/guided-visualization.m4a' },
      { label: 'Auto-suggestion recordings', href: '/resources/auto-suggestion-recordings.m4a' },
    ],
  },
]

const dailyPractices = [
  { time: 'Morning', name: 'Read Your Statement', desc: 'Read your written desire statement aloud immediately upon waking, with full faith and visualization.' },
  { time: 'Morning', name: 'Plan Your Day', desc: 'Organize your day around actions that move you toward your definite purpose.' },
  { time: 'Throughout', name: 'Monitor Your Thoughts', desc: 'Catch negative thoughts and immediately replace them with positive affirmations.' },
  { time: 'Evening', name: 'Study & Reflect', desc: 'Read one chapter or study guide section. Journal your insights and applications.' },
  { time: 'Evening', name: 'Read Your Statement Again', desc: 'Read your written statement aloud once more before sleep. Let your subconscious work overnight.' },
]

/* ------------------------------------------------------------------ */
/*  ANIMATION VARIANTS                                                 */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  SECTION 1 — PAGE HEADER                                            */
/* ------------------------------------------------------------------ */

function PageHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const titleWords = '13-WEEK STUDY PLAN'.split(' ')

  return (
    <section
      ref={ref}
      className="relative flex min-h-[50vh] items-center justify-center bg-deep-navy px-6"
    >
      <div className="mx-auto max-w-[1200px] text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-[12px] font-medium uppercase tracking-[3px] text-accent-gold"
        >
          THE PROTOCOL
        </motion.p>

        {/* Title with word split */}
        <h1 className="mt-4 font-playfair text-[clamp(42px,5vw,72px)] font-bold leading-[1.1] text-pure-white">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.08, ease: easeExpoOut }}
              className="mr-[0.3em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease: easeExpoOut }}
          className="mx-auto mt-6 max-w-[600px] font-inter text-[18px] font-light leading-[1.6] text-off-white"
        >
          One principle per week. Read the chapter. Work the exercises. Discuss with serious peers. The structure is the installation protocol. The outcome is your configuration.
        </motion.p>

        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2, ease: easeExpoOut }}
          className="mx-auto mt-8 h-[1px] w-[80px] origin-center bg-accent-gold"
        />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 2 — WEEKLY TIMELINE                                        */
/* ------------------------------------------------------------------ */

function WeeklyTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative bg-deep-navy px-6 py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeExpoOut }}
          className="mb-16 text-center font-playfair text-[36px] font-semibold text-pure-white"
        >
          THE INSTALL
        </motion.h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Gold vertical line — SVG for stroke animation */}
          <svg
            className="absolute left-[28px] top-0 hidden h-full w-[2px] md:block"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#e0633a"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
            />
          </svg>

          {/* Week cards */}
          <div className="flex flex-col gap-0">
            {weeks.map((w, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={w.week}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.1,
                    ease: easeExpoOut,
                  }}
                  className="relative mb-8 flex items-start gap-6 pl-0 last:mb-0 md:pl-0"
                >
                  {/* Week badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.1,
                      ease: easeExpoOut,
                    }}
                    className="z-10 flex h-[56px] w-[56px] flex-shrink-0 items-center justify-center rounded-full bg-accent-gold font-inter text-[20px] font-semibold text-deep-navy"
                  >
                    {w.week}
                  </motion.div>

                  {/* Card content */}
                  <div className="flex-1 border-b border-slate-blue pb-8">
                    <h3 className="font-playfair text-[24px] font-semibold text-pure-white">
                      {w.principle}
                    </h3>
                    <p className="mt-1 font-inter text-[16px] text-off-white">
                      {w.reading}
                    </p>

                    {/* Exercise tags */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {w.exercises.map((ex) => (
                        <span
                          key={ex}
                          className="rounded-full bg-midnight-blue px-3 py-1 font-inter text-[12px] font-medium text-accent-gold"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>

                    {/* Discussion prompt */}
                    <p
                      className="mt-3 font-instrument text-[16px] italic"
                      style={{ color: 'rgba(212,175,55,0.5)' }}
                    >
                      &ldquo;{w.prompt}&rdquo;
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — RESOURCES & MATERIALS                                  */
/* ------------------------------------------------------------------ */

function ResourcesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="bg-warm-white px-6 py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeExpoOut }}
          className="text-center font-playfair text-[clamp(32px,4vw,48px)] font-semibold text-deep-navy"
        >
          STUDY RESOURCES
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: easeExpoOut }}
          className="mx-auto mt-4 max-w-[600px] text-center font-inter text-[18px] font-normal text-charcoal"
        >
          Each resource maps to one chapter. No filler. Every file is a tool with a specific job.
        </motion.p>

        {/* Resource cards grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.12,
                  ease: easeExpoOut,
                }}
                className="rounded-none border border-black/[0.08] bg-pure-white p-10"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon size={48} strokeWidth={1.5} className="text-accent-gold" />
                </div>

                {/* Category title */}
                <h3 className="font-playfair text-[24px] font-semibold text-deep-navy">
                  {r.title}
                </h3>

                {/* Item list */}
                <ul className="mt-4 flex flex-col gap-3">
                  {r.items.map((item) => (
                    <li key={item.label} className="font-inter text-[14px]">
                      {item.chapters ? (
                        <div>
                          <p className="mb-1 font-medium text-charcoal">
                            {item.label}
                          </p>
                          <div className="flex flex-wrap gap-x-1 gap-y-0.5 leading-relaxed">
                            {item.chapters.map((ch, ci) => (
                              <span key={ch.label}>
                                <a
                                  href={ch.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-steel-blue underline-offset-2 transition-colors hover:text-accent-gold hover:underline"
                                >
                                  {ch.label}
                                </a>
                                {ci < item.chapters!.length - 1 && (
                                  <span className="text-slate-blue"> · </span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-steel-blue underline-offset-2 transition-colors hover:text-accent-gold hover:underline"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="flex items-start gap-2 text-steel-blue">
                          <span className="mt-[0.5em] block h-[5px] w-[5px] flex-shrink-0 rounded-full bg-steel-blue" />
                          {item.label}
                          {item.gap && (
                            <span className="text-[11px] italic text-steel-blue">
                              — in production
                            </span>
                          )}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — DAILY PRACTICE FRAMEWORK                               */
/* ------------------------------------------------------------------ */

function DailyPractice() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="bg-deep-navy px-6 py-[100px]">
      <div className="mx-auto max-w-[800px] text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeExpoOut }}
          className="font-playfair text-[36px] font-semibold text-pure-white"
        >
          DAILY PRACTICE
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: easeExpoOut }}
          className="mx-auto mt-4 max-w-[600px] font-inter text-[18px] font-light text-off-white"
        >
          Hill catalogued five hundred operators. The ones who succeeded ran the same five moves until the behavior became invisible. The reps are the signal. Skipping them is the noise.
        </motion.p>

        {/* Practice items */}
        <div className="mt-12 text-left">
          {dailyPractices.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.1,
                ease: easeExpoOut,
              }}
              className="border-b border-slate-blue py-6 last:border-b-0"
            >
              <p className="font-inter text-[14px] font-medium uppercase tracking-[1.5px] text-accent-gold">
                {p.time}
              </p>
              <h3 className="mt-2 font-playfair text-[22px] font-semibold text-pure-white">
                {p.name}
              </h3>
              <p className="mt-2 font-inter text-[16px] text-off-white">
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
/*  SECTION 5 — CTA BANNER                                             */
/* ------------------------------------------------------------------ */

function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-midnight-blue px-6 py-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: easeExpoOut }}
        className="mx-auto max-w-[800px] text-center"
      >
        <h2 className="font-playfair text-[clamp(28px,3vw,48px)] font-semibold text-pure-white">
          The Preface Is a Filter
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] font-inter text-[18px] font-light text-off-white">
          You read the preface. You are still here. The first principle is the only step that matters right now.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/study-plan"
            className="inline-block rounded-none bg-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#c45430] hover:shadow-gold-glow"
          >
            Start the Study Plan
          </Link>
          <Link
            to="/principles"
            className="inline-block rounded-none border border-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-accent-gold transition-all duration-300 hover:bg-accent-gold hover:text-deep-navy"
          >
            Explore the Principles
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE COMPONENT                                                */
/* ------------------------------------------------------------------ */

export default function StudyPlan() {
  return (
    <Layout>
      <PageHeader />
      <WeeklyTimeline />
      <ResourcesSection />
      <DailyPractice />
      <CTABanner />
    </Layout>
  )
}
