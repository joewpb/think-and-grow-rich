import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: 1,
    title: 'Fix the Amount',
    desc: 'Fix in your mind the exact amount of money you desire. Be definite.',
  },
  {
    num: 2,
    title: 'Determine the Price',
    desc: 'Determine exactly what you intend to give in return for the money.',
  },
  {
    num: 3,
    title: 'Set a Date',
    desc: 'Establish a definite date when you intend to possess the money.',
  },
  {
    num: 4,
    title: 'Create a Plan',
    desc: 'Create a definite plan for carrying out your desire, and begin at once.',
  },
  {
    num: 5,
    title: 'Write It Down',
    desc: 'Write out a clear, concise statement of the amount, the time limit, and the plan.',
  },
  {
    num: 6,
    title: 'Read It Aloud',
    desc: 'Read your written statement aloud, twice daily — once before retiring and once after arising.',
  },
]

export default function SixSteps() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [cardVisible, setCardVisible] = useState<boolean[]>(new Array(6).fill(false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          // Stagger card animations
          steps.forEach((_, i) => {
            setTimeout(() => {
              setCardVisible((prev) => {
                const next = [...prev]
                next[i] = true
                return next
              })
            }, 300 + i * 150)
          })
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-midnight-blue py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1000px] px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="font-playfair text-[clamp(36px,4vw,56px)] font-semibold uppercase"
            style={{
              color: '#FFFFFF',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            THE SIX STEPS TO RICHES
          </h2>
          <p
            className="mt-4 font-inter text-[18px] font-light text-steel-blue"
            style={{
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0.2s',
              opacity: visible ? 1 : 0,
            }}
          >
            Napoleon Hill&apos;s practical framework for turning desire into reality
          </p>
        </div>

        {/* Staircase with SVG connector */}
        <div className="relative">
          {/* SVG Connecting Line */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            style={{ zIndex: 1 }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="goldLine" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e0633a" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#e0633a" stopOpacity="1" />
                <stop offset="100%" stopColor="#e0633a" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Diagonal gold line connecting cards */}
            <line
              x1="25%"
              y1="8%"
              x2="75%"
              y2="25%"
              stroke="url(#goldLine)"
              strokeWidth="1"
              strokeDasharray="6 4"
              opacity={visible ? 0.6 : 0}
              style={{ transition: 'opacity 1.5s ease-out 0.5s' }}
            />
            <line
              x1="75%"
              y1="25%"
              x2="25%"
              y2="42%"
              stroke="url(#goldLine)"
              strokeWidth="1"
              strokeDasharray="6 4"
              opacity={visible ? 0.6 : 0}
              style={{ transition: 'opacity 1.5s ease-out 0.8s' }}
            />
            <line
              x1="25%"
              y1="42%"
              x2="75%"
              y2="58%"
              stroke="url(#goldLine)"
              strokeWidth="1"
              strokeDasharray="6 4"
              opacity={visible ? 0.6 : 0}
              style={{ transition: 'opacity 1.5s ease-out 1.1s' }}
            />
            <line
              x1="75%"
              y1="58%"
              x2="25%"
              y2="75%"
              stroke="url(#goldLine)"
              strokeWidth="1"
              strokeDasharray="6 4"
              opacity={visible ? 0.6 : 0}
              style={{ transition: 'opacity 1.5s ease-out 1.4s' }}
            />
            <line
              x1="25%"
              y1="75%"
              x2="75%"
              y2="92%"
              stroke="url(#goldLine)"
              strokeWidth="1"
              strokeDasharray="6 4"
              opacity={visible ? 0.6 : 0}
              style={{ transition: 'opacity 1.5s ease-out 1.7s' }}
            />
          </svg>

          {/* Step Cards */}
          <div className="relative flex flex-col gap-8" style={{ zIndex: 2 }}>
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={step.num}
                  className={`flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div
                    className="w-full max-w-[480px] rounded-none border-l-[3px] border-accent-gold bg-charcoal p-6"
                    style={{
                      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      opacity: cardVisible[i] ? 1 : 0,
                      transform: cardVisible[i]
                        ? 'translateY(0)'
                        : 'translateY(40px)',
                    }}
                  >
                    <span className="font-instrument text-[36px] italic text-accent-gold">
                      {step.num}
                    </span>
                    <h3
                      className="mt-2 font-playfair text-[22px] font-semibold"
                      style={{ color: '#FFFFFF' }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 font-inter text-[16px] leading-[1.6] text-off-white">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
