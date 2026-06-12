import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Link } from 'react-router'
import * as THREE from 'three'

const principles = [
  { num: 1, name: 'Desire', summary: 'The Starting Point of All Achievement' },
  { num: 2, name: 'Faith', summary: 'Visualization of, and Belief in Attainment' },
  { num: 3, name: 'Auto-Suggestion', summary: 'The Medium for Influencing the Subconscious' },
  { num: 4, name: 'Specialized Knowledge', summary: 'Personal Experience or Observations' },
  { num: 5, name: 'Imagination', summary: 'The Workshop of the Mind' },
  { num: 6, name: 'Organized Planning', summary: 'The Crystallization of Desire into Action' },
  { num: 7, name: 'Decision', summary: 'The Mastery of Procrastination' },
  { num: 8, name: 'Persistence', summary: 'The Sustained Effort Necessary to Induce Faith' },
  { num: 9, name: 'The Master Mind', summary: 'Power of the Mastermind' },
  { num: 10, name: 'Sex Transmutation', summary: 'The Mystery of Sex Transmutation' },
  { num: 11, name: 'The Subconscious Mind', summary: 'The Connecting Link' },
  { num: 12, name: 'The Brain', summary: 'A Broadcasting and Receiving Station' },
  { num: 13, name: 'The Sixth Sense', summary: 'The Door to the Temple of Wisdom' },
]

/* ─── Golden Icosahedron Center ─── */
function CoreOfValue() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15
      meshRef.current.rotation.x += delta * 0.08
    }
  })
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.8, 0]} />
      <meshBasicMaterial color="#D4AF37" wireframe />
    </mesh>
  )
}

/* ─── Single Principle Card ─── */
function PrincipleCard({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const angle = index * 0.5
  const y = (index * 2.4) - 15.6
  const x = Math.cos(angle) * 4
  const z = Math.sin(angle) * 4

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.lookAt(0, y, 10)
    }
  })

  return (
    <mesh ref={meshRef} position={[x, y, z]} rotation={[0, -angle, 0]}>
      <planeGeometry args={[3.2, 2]} />
      <meshBasicMaterial color="#112240" transparent opacity={0.9} side={THREE.DoubleSide} />
      {/* Gold border line */}
      <mesh position={[0, -0.95, 0.01]}>
        <planeGeometry args={[3.2, 0.04]} />
        <meshBasicMaterial color="#D4AF37" />
      </mesh>
    </mesh>
  )
}

/* ─── Helix Group ─── */
function HelixScene() {
  const groupRef = useRef<THREE.Group>(null)
  const scrollRef = useRef(0)
  const targetRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight
      targetRef.current = (window.scrollY / maxScroll) * Math.PI * 4
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useFrame(() => {
    scrollRef.current += (targetRef.current - scrollRef.current) * 0.08
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollRef.current
    }
  })

  return (
    <group ref={groupRef}>
      <CoreOfValue />
      {principles.map((p, i) => (
        <PrincipleCard key={p.num} index={i} />
      ))}
    </group>
  )
}

export default function PrinciplesHelix() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="principles"
      className="relative bg-deep-navy"
      style={{ height: '200vh' }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-[100dvh]">
        {/* Section Header */}
        <div className="absolute left-0 right-0 top-0 z-10 pt-12 text-center">
          <h2
            className="font-playfair text-[clamp(36px,4vw,64px)] font-semibold uppercase text-pure-white"
            style={{
              color: '#FFFFFF',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            THE 13 PRINCIPLES
          </h2>
          <p
            className="mt-2 font-inter text-[16px] font-light text-steel-blue"
            style={{
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0.2s',
              opacity: visible ? 1 : 0,
            }}
          >
            Scroll to explore each principle
          </p>
          <div
            className="mx-auto mt-4 h-[1px] w-24 bg-accent-gold"
            style={{
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0.3s',
              opacity: visible ? 1 : 0,
              transform: visible ? 'scaleX(1)' : 'scaleX(0)',
            }}
          />
        </div>

        {/* 3D Canvas */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <Canvas
            camera={{ position: [0, 0, 12], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <HelixScene />
          </Canvas>
        </div>

        {/* Principle Cards as HTML overlay */}
        <PrincipleCardsOverlay />

        {/* CTA */}
        <div
          className="absolute bottom-8 left-0 right-0 z-10 text-center"
          style={{
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.4s',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <Link
            to="/principles"
            className="inline-block rounded-[4px] bg-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#C4A02E] hover:shadow-gold-glow"
          >
            Explore All 13 Principles in Detail
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── HTML Overlay Cards ─── */
function PrincipleCardsOverlay() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight
      setScrollProgress(window.scrollY / maxScroll)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cards = useMemo(() => {
    return principles.map((p, i) => {
      const angle = i * 0.5 + scrollProgress * Math.PI * 4
      const yPos = (i * 2.4) - 15.6
      const x = Math.cos(angle) * 4
      const z = Math.sin(angle) * 4
      const normalizedZ = (z + 4) / 8
      const opacity = 0.2 + normalizedZ * 0.8
      const scale = 0.8 + normalizedZ * 0.2

      return {
        ...p,
        xPos: `${50 + (x / 12) * 40}%`,
        yPos: `${50 + (yPos / 20) * 40}%`,
        opacity,
        scale,
        zIndex: Math.round(normalizedZ * 10),
      }
    })
  }, [scrollProgress])

  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ zIndex: 4, perspective: '800px' }}
    >
      {cards.map((card) => (
        <div
          key={card.num}
          onClick={() => { window.location.hash = '#/principles' }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-[4px] border border-slate-blue bg-midnight-blue p-4"
          style={{
            left: card.xPos,
            top: card.yPos,
            opacity: card.opacity,
            transform: `translate(-50%, -50%) scale(${card.scale})`,
            zIndex: card.zIndex,
            minWidth: '220px',
            pointerEvents: 'auto',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-gold)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(212,175,55,0.3)'
            e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--slate-blue)'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.transform = `translate(-50%, -50%) scale(${card.scale})`
          }}
        >
          <span className="font-instrument text-[40px] italic text-accent-gold">
            {card.num}
          </span>
          <h3
            className="mt-1 font-playfair text-[18px] font-semibold"
            style={{ color: '#FFFFFF' }}
          >
            {card.name}
          </h3>
          <p className="mt-1 font-inter text-[12px] leading-[1.5] text-off-white">
            {card.summary}
          </p>
          <div className="mt-3 h-[2px] w-full bg-accent-gold" />
        </div>
      ))}
    </div>
  )
}
