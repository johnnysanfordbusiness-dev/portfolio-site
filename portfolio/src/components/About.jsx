import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    icon: '⬡',
    title: 'Systems Over Solutions',
    body: 'I build architectures that scale, not point fixes that stagnate. Every system I design is engineered to compound in value over time.',
  },
  {
    icon: '⟳',
    title: 'Automation by Default',
    body: 'Manual processes are technical debt with a human cost. My instinct is to eliminate operational drag at the root, not manage it.',
  },
  {
    icon: '◈',
    title: 'Architectural Precision',
    body: 'Clean system design is not an accident. I approach infrastructure the way a structural engineer approaches a bridge — with intent and load in mind.',
  },
]

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <FadeInSection>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{
            fontFamily: 'monospace', fontSize: '12px', color: '#00ff88',
            letterSpacing: '0.2em', marginBottom: '1rem',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ width: '24px', height: '1px', background: '#00ff88', display: 'inline-block' }} />
            ARCHITECT.BIO
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#e2e8f0',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}>
            I build the machinery<br />
            <span style={{ color: '#00ff88' }}>behind the result.</span>
          </h2>
          <p style={{
            color: '#94a3b8',
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            lineHeight: 1.75,
            maxWidth: '620px',
          }}>
            As an Automation Architect and Founder, my work sits at the intersection of
            engineering discipline and operational strategy. I specialize in designing
            the invisible layer — the automated pipelines, integrated dashboards, and
            modular systems — that power efficient, scalable organizations.
          </p>
        </div>
      </FadeInSection>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
      }}>
        {pillars.map((p, i) => (
          <FadeInSection key={p.title} delay={i * 0.12}>
            <motion.div
              whileHover={{ borderColor: 'rgba(0,255,136,0.35)', y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'rgba(13,13,26,0.7)',
                border: '1px solid rgba(26,26,58,0.9)',
                borderRadius: '8px',
                padding: '2rem',
                cursor: 'default',
              }}
            >
              <div style={{
                width: '40px', height: '40px',
                border: '1px solid rgba(0,255,136,0.3)',
                borderRadius: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#00ff88', fontSize: '18px',
                marginBottom: '1.25rem',
              }}>
                {p.icon}
              </div>
              <h3 style={{
                color: '#e2e8f0', fontSize: '16px', fontWeight: 700,
                marginBottom: '0.75rem', letterSpacing: '-0.01em',
              }}>
                {p.title}
              </h3>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.7 }}>
                {p.body}
              </p>
            </motion.div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
