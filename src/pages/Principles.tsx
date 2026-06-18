import { useRef } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'framer-motion'
import Layout from '../components/Layout'

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

interface Principle {
  number: number
  title: string
  quote: string
  description: string
  apply: string
}

const PRINCIPLES: Principle[] = [
  {
    number: 1,
    title: 'Desire',
    quote:
      'The starting point of all achievement is desire. Keep this constantly in mind.',
    description:
      'Desire is not mere wishing \u2014 it is an all-consuming obsession backed by definite purpose. Weak desires bring weak results. Your desire must be so intense that you can almost taste it.',
    apply: 'Write down the exact amount of money you desire and the date you will possess it.',
  },
  {
    number: 2,
    title: 'Faith',
    quote:
      'Faith is the eternal elixir which gives life, power, and action to the impulse of thought.',
    description:
      'Faith is the head chemist of the mind. Through affirmation and repeated visualization, you can develop faith in your ability to achieve any goal. Repetition of belief creates certainty.',
    apply: 'Create a written statement of your goal and read it aloud twice daily with full emotional belief.',
  },
  {
    number: 3,
    title: 'Auto-Suggestion',
    quote:
      'Auto-suggestion is the agency of control through which an individual may voluntarily feed the subconscious mind thoughts.',
    description:
      'The subconscious mind accepts any thought you repeatedly place before it. Use auto-suggestion to reprogram your mind with positive, success-oriented thoughts. Speak your desires into existence.',
    apply: 'Record your desire statement in your own voice and listen to it before sleep and upon waking.',
  },
  {
    number: 4,
    title: 'Specialized Knowledge',
    quote:
      'Knowledge is only potential power. It becomes power only when organized into a definite plan of action.',
    description:
      'General knowledge has little value in accumulating wealth. You need specialized knowledge in your chosen field \u2014 and the ability to organize that knowledge into practical plans.',
    apply: 'Identify the specific knowledge gaps between where you are and your goal. Create a learning plan.',
  },
  {
    number: 5,
    title: 'Imagination',
    quote:
      'The imagination is literally the workshop wherein are fashioned all plans created by man.',
    description:
      'There are two forms: synthetic imagination (rearranging existing ideas) and creative imagination (tapping into infinite intelligence). Both can be strengthened through use, like a muscle.',
    apply: 'Spend 15 minutes daily visualizing your desired outcome in vivid, sensory-rich detail.',
  },
  {
    number: 6,
    title: 'Organized Planning',
    quote: 'A goal is a dream with a deadline.',
    description:
      'No plan is perfect. But a flawed plan executed today is infinitely better than a perfect plan executed never. Ally yourself with a mastermind group to refine and strengthen your plans.',
    apply: 'Write a one-page plan for your goal. Share it with two trusted people for feedback this week.',
  },
  {
    number: 7,
    title: 'Decision',
    quote:
      'The world has the habit of making room for the man whose words and actions show that he knows where he is going.',
    description:
      'Successful people reach decisions promptly and change them slowly. Procrastination is the opposite of decision \u2014 and one of the most common causes of failure.',
    apply: 'Practice making one small decision you have been avoiding within the next 24 hours.',
  },
  {
    number: 8,
    title: 'Persistence',
    quote: 'A quitter never wins \u2014 and a winner never quits.',
    description:
      'Persistence is the sustained effort necessary to induce faith. It is born from the power of will. Most people fail because they quit when they are closest to success. Persistence can be developed.',
    apply: 'Identify one goal you have abandoned. Restart it today with a specific daily action, no matter how small.',
  },
  {
    number: 9,
    title: 'The Master Mind',
    quote:
      'No two minds ever come together without thereby creating a third, invisible, intangible force which may be likened to a third mind.',
    description:
      'The mastermind principle is the coordination of knowledge and effort between two or more people for the attainment of a definite purpose. Harmonious alliance creates exponential power.',
    apply: 'Identify three people who share your goals. Propose a weekly mastermind meeting to them.',
  },
  {
    number: 10,
    title: 'Sex Transmutation',
    quote:
      'Sex transmutation is the switching of the mind from thoughts of physical expression to thoughts of some other nature.',
    description:
      'Sex is the most powerful creative drive. Transmuting this energy into creative and productive effort is the mark of genius. Most successful people channel this force into their work.',
    apply: 'Redirect one hour of leisure energy this week into a creative or productive project.',
  },
  {
    number: 11,
    title: 'The Subconscious Mind',
    quote:
      'The subconscious mind will not remain idle! If you fail to plant desires in it, it will feed upon the thoughts which reach it as the result of your neglect.',
    description:
      'Your subconscious accepts and acts upon any thought you plant in it \u2014 positive or negative. Master positivity. Denounce negativity. Remove toxic influences from your life.',
    apply: 'Write five positive affirmations. Read them every morning for the next 30 days without exception.',
  },
  {
    number: 12,
    title: 'The Brain',
    quote:
      'The brain is both a broadcasting and receiving station for the vibration of thought.',
    description:
      'Every brain is both a broadcasting station and a receiving station for thought vibrations. You attract what you mentally broadcast. Maintain vibrational harmony with what you desire.',
    apply: 'Monitor your dominant thoughts today. Each time a negative thought arises, consciously replace it with your desire.',
  },
  {
    number: 13,
    title: 'The Sixth Sense',
    quote:
      'The sixth sense is that portion of the subconscious mind which has been referred to as the Creative Imagination.',
    description:
      'The apex of the Think and Grow Rich philosophy. It comes only with mastery of the other 12 principles. It is your direct line to infinite intelligence \u2014 the source of all great ideas, hunches, and inspiration.',
    apply: 'Dedicate 10 minutes daily to silent meditation or quiet reflection. Listen for insights without forcing them.',
  },
]

interface Step {
  number: number
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: 1,
    title: 'Fix the Amount',
    description: 'Decide exactly how much money you desire.',
  },
  {
    number: 2,
    title: 'Determine the Price',
    description: 'Decide what you will give in return.',
  },
  {
    number: 3,
    title: 'Set a Date',
    description: 'Fix a definite date for possession.',
  },
  {
    number: 4,
    title: 'Create a Plan',
    description: 'Form a concrete plan to achieve it.',
  },
  {
    number: 5,
    title: 'Write It Down',
    description: 'Write a clear, concise statement.',
  },
  {
    number: 6,
    title: 'Read It Aloud',
    description: 'Read aloud twice daily with belief.',
  },
]

interface Fear {
  name: string
  description: string
  overcome: string
}

const FEARS: Fear[] = [
  {
    name: 'Fear of Poverty',
    description:
      'The most destructive of all fears. It paralyzes initiative and destroys imagination.',
    overcome: 'Develop a definite plan to earn the money you need. Focus on abundance, not lack.',
  },
  {
    name: 'Fear of Criticism',
    description:
      'Destroys initiative and limits individuality. Most people live their entire lives conforming to avoid criticism.',
    overcome: 'Make decisions independently. Ask for advice, but reserve the right to choose.',
  },
  {
    name: 'Fear of Ill Health',
    description:
      'Often hypochondriacal, this fear stems from negative thought habits and can create real physical illness.',
    overcome: 'Think health, not sickness. Exercise regularly and fill your mind with positive thoughts.',
  },
  {
    name: 'Fear of Loss of Love',
    description:
      'Jealousy and suspicion are symptoms of this fear. It drives people to irrational behavior.',
    overcome:
      'Build self-confidence. True love cannot be lost through force \u2014 it must be freely given.',
  },
  {
    name: 'Fear of Old Age',
    description:
      'The habit of killing off initiative and imagination by falsely believing that age brings incapacity.',
    overcome: 'Keep learning, keep growing, keep taking action. Age is a state of mind.',
  },
  {
    name: 'Fear of Death',
    description:
      'The cruelest of all fears, based on religious misinterpretation and ignorance of nature\u2019s cycles.',
    overcome: 'Live fully now. The only thing to fear is a life unlived.',
  },
]

/* ------------------------------------------------------------------ */
/*  ANIMATION VARIANTS                                                 */
/* ------------------------------------------------------------------ */

const easeExpoOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

const fadeUp = (delay = 0, duration = 0.8) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: easeExpoOut },
  },
})

const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
})

const cardEnter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeExpoOut },
  },
}

const numberScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeExpoOut, delay: 0.1 },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeExpoOut },
  },
}

const lineExpand = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: easeExpoOut },
  },
}

/* ------------------------------------------------------------------ */
/*  SECTION 1 \u2014 PAGE HEADER                                           */
/* ------------------------------------------------------------------ */

function PageHeader() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })

  const titleWords = '13 PRINCIPLES OF SUCCESS'.split(' ')

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center bg-deep-navy"
      style={{ minHeight: '60vh', paddingTop: '80px' }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 py-20 text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: easeExpoOut }}
          className="mb-6 font-inter text-[12px] font-medium uppercase tracking-[3px] text-accent-gold"
        >
          THE PHILOSOPHY
        </motion.span>

        {/* Title with word stagger */}
        <motion.h1
          variants={staggerContainer(0.08, 0.4)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-playfair text-[clamp(42px,5vw,80px)] font-bold leading-[1.1] tracking-[-1px] text-pure-white"
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, ease: easeExpoOut },
                },
              }}
              className="mr-[0.3em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease: easeExpoOut }}
          className="mx-auto mt-6 max-w-[640px] font-inter text-[20px] font-light leading-[1.6] text-off-white"
        >
          Napoleon Hill distilled two decades of research into 13 actionable
          principles. Master them, and you master the path to achievement.
        </motion.p>

        {/* Gold decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2, ease: easeExpoOut }}
          className="mt-8 h-[2px] w-20 bg-accent-gold"
          style={{ originX: 0.5 }}
        />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 2 \u2014 PRINCIPLE CARDS                                        */
/* ------------------------------------------------------------------ */

function PrincipleCard({ principle }: { principle: Principle }) {
  return (
    <motion.div
      variants={cardEnter}
      className="group relative flex flex-col border border-transparent bg-midnight-blue p-8 transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:border-accent-gold-dim hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(212,175,55,0.3)]"
      style={{ borderRadius: '4px' }}
    >
      {/* Number */}
      <motion.span
        variants={numberScale}
        className="mb-4 font-instrument text-[64px] leading-none text-accent-gold"
        style={{ fontStyle: 'italic' }}
      >
        {principle.number}
      </motion.span>

      {/* Title */}
      <h3 className="mb-4 font-playfair text-[28px] font-semibold text-pure-white">
        {principle.title}
      </h3>

      {/* Quote */}
      <blockquote
        className="mb-4 border-l-2 border-accent-gold pb-2 pl-4 font-instrument text-[18px] leading-[1.5] text-accent-gold-dim"
        style={{ fontStyle: 'italic' }}
      >
        &ldquo;{principle.quote}&rdquo;
      </blockquote>

      {/* Description */}
      <p className="mb-6 flex-1 font-inter text-[16px] leading-[1.7] text-off-white">
        {principle.description}
      </p>

      {/* Apply It */}
      <div className="mb-6">
        <span className="block font-inter text-[12px] font-medium uppercase tracking-[1px] text-accent-gold">
          APPLY IT:
        </span>
        <span className="mt-1 block font-inter text-[14px] leading-[1.5] text-off-white">
          {principle.apply}
        </span>
      </div>

      {/* Bottom accent line */}
      <div className="h-[2px] w-full bg-slate-blue" />
    </motion.div>
  )
}

function PrinciplesGrid() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="bg-deep-navy py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-8"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          }}
        >
          {PRINCIPLES.map((p) => (
            <PrincipleCard key={p.number} principle={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 \u2014 SIX STEPS TO RICHES                                   */
/* ------------------------------------------------------------------ */

function StepsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-6">
        {/* Title */}
        <motion.h2
          variants={fadeUp(0, 0.8)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center font-playfair text-[clamp(32px,4vw,56px)] font-semibold text-deep-navy"
        >
          THE SIX STEPS TO RICHES
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp(0.15, 0.8)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mx-auto mb-16 mt-4 max-w-[600px] text-center font-inter text-[18px] text-charcoal"
        >
          Hill&rsquo;s practical framework &mdash; follow these steps with any desire
        </motion.p>

        {/* Process Flow */}
        <div className="relative">
          {/* Desktop horizontal flow */}
          <div className="hidden md:block">
            <motion.div
              variants={staggerContainer(0.15, 0.3)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex items-start justify-between gap-4"
            >
              {STEPS.map((step, i) => (
                <div key={step.number} className="relative flex flex-1 flex-col items-center text-center">
                  {/* Connecting line (left) */}
                  {i > 0 && (
                    <motion.div
                      variants={lineExpand}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      className="absolute right-1/2 top-7 h-[2px] w-full bg-slate-blue"
                      style={{ originX: 0, marginRight: '28px' }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                    />
                  )}

                  {/* Circle */}
                  <motion.div
                    variants={scaleIn}
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-accent-gold font-playfair text-[18px] font-semibold text-deep-navy"
                  >
                    {step.number}
                  </motion.div>

                  {/* Title */}
                  <h4 className="mt-4 font-playfair text-[20px] font-semibold text-deep-navy">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 max-w-[130px] font-inter text-[14px] leading-[1.5] text-charcoal">
                    {step.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile vertical flow */}
          <div className="flex flex-col gap-8 md:hidden">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: easeExpoOut }}
                className="flex items-start gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-gold font-playfair text-[18px] font-semibold text-deep-navy">
                    {step.number}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="mt-2 h-8 w-[2px] bg-slate-blue" />
                  )}
                </div>
                <div className="pt-2">
                  <h4 className="font-playfair text-[20px] font-semibold text-deep-navy">
                    {step.title}
                  </h4>
                  <p className="mt-1 font-inter text-[14px] leading-[1.5] text-charcoal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 \u2014 SIX GHOSTS OF FEAR                                    */
/* ------------------------------------------------------------------ */

function FearCard({ fear }: { fear: Fear }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: easeExpoOut },
        },
      }}
      className="border border-slate-blue bg-midnight-blue p-8"
    >
      <h3 className="mb-4 font-playfair text-[24px] font-semibold text-pure-white">
        {fear.name}
      </h3>
      <p className="mb-6 font-inter text-[16px] leading-[1.7] text-off-white">
        {fear.description}
      </p>
      <div>
        <span className="block font-inter text-[12px] font-medium uppercase tracking-[1px] text-accent-gold">
          OVERCOME IT:
        </span>
        <span className="mt-1 block font-inter text-[14px] leading-[1.5] text-off-white">
          {fear.overcome}
        </span>
      </div>
    </motion.div>
  )
}

function GhostsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="bg-deep-navy py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Title */}
        <motion.h2
          variants={fadeUp(0, 0.8)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center font-playfair text-[clamp(32px,4vw,56px)] font-semibold text-pure-white"
        >
          THE SIX GHOSTS OF FEAR
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp(0.2, 0.8)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mx-auto mb-16 mt-4 max-w-[700px] text-center font-instrument text-[20px] leading-[1.5] text-accent-gold-dim"
          style={{ fontStyle: 'italic' }}
        >
          Indecision breeds doubt. Doubt and indecision together give birth to
          fear. Know your enemies.
        </motion.p>

        {/* Fear cards grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2"
        >
          {FEARS.map((fear) => (
            <FearCard key={fear.name} fear={fear} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 5 \u2014 CTA BANNER                                            */
/* ------------------------------------------------------------------ */

function CTABanner() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      ref={ref}
      className="border-y border-slate-blue bg-midnight-blue py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-[700px] flex-col items-center px-6 text-center">
        {/* Quote */}
        <motion.blockquote
          variants={fadeUp(0, 1.0)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-instrument text-[clamp(20px,2.5vw,32px)] leading-[1.5] text-accent-gold"
          style={{ fontStyle: 'italic' }}
        >
          &ldquo;When you begin to think and grow rich, you will observe that
          riches begin with a state of mind.&rdquo;
        </motion.blockquote>

        {/* Attribution */}
        <motion.span
          variants={fadeUp(0.2, 0.8)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-6 block font-inter text-[16px] text-steel-blue"
        >
          &mdash; Napoleon Hill
        </motion.span>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: easeExpoOut }}
          className="mt-10"
        >
          <Link
            to="/study-plan"
            className="inline-block rounded-none bg-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#c45430] hover:shadow-gold-glow"
          >
            Start Your Study Plan
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function Principles() {
  return (
    <Layout>
      <PageHeader />
      <PrinciplesGrid />
      <StepsSection />
      <GhostsSection />
      <CTABanner />
    </Layout>
  )
}
