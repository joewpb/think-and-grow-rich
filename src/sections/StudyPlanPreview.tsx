import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

const cards = [
  {
    num: 1,
    title: 'Weekly Structure',
    content:
      'Each week focuses on one principle. Read the chapter, complete exercises, join the discussion group, and apply the principle to your life.',
  },
  {
    num: 2,
    title: 'Resources Provided',
    content:
      'Study guides, discussion questions, reflection worksheets, and audio summaries for every principle. Everything you need is included.',
  },
  {
    num: 3,
    title: 'Community Support',
    content:
      'Join a mastermind group of like-minded learners. Share insights, hold each other accountable, and grow together.',
  },
]

export default function StudyPlanPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setTimeout(() => setCardsVisible(true), 200)
          setTimeout(() => setCtaVisible(true), 800)
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-warm-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="font-playfair text-[clamp(32px,4vw,56px)] font-semibold uppercase text-deep-navy"
            style={{
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            YOUR 13-WEEK STUDY PLAN
          </h2>
          <p
            className="mt-4 font-inter text-[18px] text-charcoal"
            style={{
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0.15s',
              opacity: visible ? 1 : 0,
            }}
          >
            A structured path to mastering each principle, one week at a time
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.num}
              className="rounded-[4px] border border-[rgba(0,0,0,0.08)] bg-pure-white p-10 transition-all duration-300 hover:shadow-lg"
              style={{
                transitionDelay: `${i * 0.12}s`,
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible
                  ? 'translateY(0)'
                  : 'translateY(40px)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transitionProperty: 'opacity, transform, box-shadow',
                transitionDuration: '0.6s',
              }}
            >
              {/* Gold numeral circle */}
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold"
              >
                <span className="font-instrument text-[20px] font-medium text-deep-navy">
                  {card.num}
                </span>
              </div>

              <h3 className="font-playfair text-[24px] font-semibold text-deep-navy">
                {card.title}
              </h3>
              <p className="mt-3 font-inter text-[16px] leading-[1.7] text-charcoal">
                {card.content}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-12 text-center"
          style={{
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.4s',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <Link
            to="/study-plan"
            className="inline-block rounded-[4px] bg-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#C4A02E] hover:shadow-gold-glow"
          >
            View Full Study Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
