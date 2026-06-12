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

const resources = [
  {
    title: 'Study Guides',
    icon: BookOpen,
    items: ['Chapter summaries', 'Key concept explanations', 'Principle deep-dives', 'Vocabulary definitions'],
  },
  {
    title: 'Worksheets',
    icon: FileText,
    items: ['Desire statements', 'Affirmation templates', 'Progress trackers', 'Self-analysis questionnaires'],
  },
  {
    title: 'Audio Summaries',
    icon: Headphones,
    items: ['15-minute chapter recaps', 'Guided visualization audio', 'Auto-suggestion recordings'],
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
          YOUR PATH
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
          A structured, week-by-week journey through Think and Grow Rich. Each week covers one principle with reading, exercises, and group discussion.
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
          WEEK BY WEEK
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
              stroke="#D4AF37"
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
          Everything you need to complete the 13-week program
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
                className="rounded-[4px] border border-black/[0.08] bg-pure-white p-10"
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
                <ul className="mt-4 flex flex-col gap-2">
                  {r.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-inter text-[16px] text-charcoal"
                    >
                      <span className="mt-[0.5em] block h-[5px] w-[5px] flex-shrink-0 rounded-full bg-charcoal" />
                      {item}
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
          Hill&apos;s recommended daily disciplines, practiced by the world&apos;s most successful people
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
          Ready to Begin?
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] font-inter text-[18px] font-light text-off-white">
          Join the StudyClub community and start your 13-week journey today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/community"
            className="inline-block rounded-[4px] bg-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#C4A02E] hover:shadow-gold-glow"
          >
            Join the Community
          </Link>
          <Link
            to="/principles"
            className="inline-block rounded-[4px] border border-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-accent-gold transition-all duration-300 hover:bg-accent-gold hover:text-deep-navy"
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
