import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Diagnose the System',
    body: 'Before writing a single line, I map the operational topology — where friction compounds, where automation has the highest leverage, and where technical debt is silently accumulating.',
    icon: '◉',
  },
  {
    num: '02',
    title: 'Design the Architecture',
    body: 'I draft the system blueprint: data flows, module boundaries, automation triggers, and scalability constraints. Architecture decisions made here prevent three refactors later.',
    icon: '◈',
  },
  {
    num: '03',
    title: 'Build with Precision',
    body: 'Implementation follows architectural intent — no scope creep, no speculative features. Every component is modular, testable, and replaceable without breaking the whole.',
    icon: '◆',
  },
  {
    num: '04',
    title: 'Automate & Harden',
    body: 'The system is only as good as its reliability. I wire automation, monitoring, and failsafes into the foundation — not as an afterthought, but as a design requirement.',
    icon: '⬡',
  },
]

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'up' ? 24 : 0, x: direction === 'left' ? -24 : 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function Process() {
  return (
    <section
      id="process"
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) 2rem',
        background: 'rgba(13,13,26,0.4)',
        borderTop: '1px solid rgba(26,26,58,0.7)',
        borderBottom: '1px solid rgba(26,26,58,0.7)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <FadeIn>
          <p style={{
            fontFamily: 'monospace', fontSize: '12px', color: '#00ff88',
            letterSpacing: '0.2em', marginBottom: '1rem',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ width: '24px', height: '1px', background: '#00ff88', display: 'inline-block' }} />
            ARCHITECTURAL.PROCESS
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800, color: '#e2e8f0',
            letterSpacing: '-0.02em', marginBottom: '0.75rem',
          }}>
            How I Build Systems
          </h2>
          <p style={{
            color: '#64748b', fontSize: '15px', lineHeight: 1.7,
            maxWidth: '500px', marginBottom: '4rem',
          }}>
            A disciplined approach to complexity — from diagnosis to automation.
            No guesswork. No cowboy commits.
          </p>
        </FadeIn>

        <div style={{ position: 'relative' }}>
          {/* Vertical connector line */}
          <div style={{
            position: 'absolute',
            left: '29px',
            top: '40px',
            bottom: '40px',
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(0,255,136,0.4), rgba(0,255,136,0.05))',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.12}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    gap: '1.75rem',
                    alignItems: 'flex-start',
                    padding: '1.75rem',
                    background: 'rgba(5,5,10,0.7)',
                    border: '1px solid rgba(26,26,58,0.9)',
                    borderRadius: '8px',
                    position: 'relative',
                  }}
                >
                  {/* Step number node */}
                  <div style={{
                    width: '44px', height: '44px',
                    border: '1px solid rgba(0,255,136,0.4)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(5,5,10,0.9)',
                    flexShrink: 0,
                    boxShadow: '0 0 16px rgba(0,255,136,0.1)',
                    position: 'relative', zIndex: 1,
                  }}>
                    <span style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700 }}>
                      {step.num}
                    </span>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                      <span style={{ color: '#00ff88', fontSize: '14px' }}>{step.icon}</span>
                      <h3 style={{
                        color: '#e2e8f0', fontSize: 'clamp(16px, 2vw, 18px)',
                        fontWeight: 700, letterSpacing: '-0.01em',
                      }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.75, maxWidth: '600px' }}>
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
