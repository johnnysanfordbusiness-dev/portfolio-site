import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    id: 'eric-szymczak',
    name: 'Eric Szymczak',
    role: 'Executive Chef, The Statler Hotel at Cornell University',
    quote:
      "Johnny was an incredible team member. He was reliable and could always be trusted to follow through. He is an excellent problem solver, and was able to take his keen knowledge of computers and programming to help us launch a system to track the countless packages we received daily. This cut down processing times, completely removed the risk of errors, and made sure our clients got the service they were expecting.",
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function TestimonialCard({ testimonial, index }) {
  return (
    <FadeIn delay={index * 0.12}>
      <div style={{
        background: 'rgba(5,5,10,0.8)',
        border: '1px solid rgba(26,26,58,0.9)',
        borderRadius: '8px',
        padding: '2rem',
      }}>
        <p style={{
          color: '#64748b', fontFamily: 'monospace', fontSize: '11px',
          letterSpacing: '0.1em', marginBottom: '1.25rem',
        }}>
          // VERIFIED.SOURCE
        </p>
        <p style={{
          color: '#94a3b8', fontSize: '15px', lineHeight: 1.8,
          marginBottom: '1.75rem',
        }}>
          "{testimonial.quote}"
        </p>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          borderTop: '1px solid rgba(26,26,58,0.9)', paddingTop: '1.25rem',
        }}>
          <span style={{ color: '#00ff88', fontSize: '12px' }}>◆</span>
          <div>
            <div style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: 700 }}>
              {testimonial.name}
            </div>
            <div style={{ color: '#64748b', fontSize: '12px', fontFamily: 'monospace' }}>
              {testimonial.role}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default function Testimonials({ items = testimonials }) {
  if (!items.length) return null

  return (
    <section
      id="testimonials"
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <FadeIn>
        <p style={{
          fontFamily: 'monospace', fontSize: '12px', color: '#00ff88',
          letterSpacing: '0.2em', marginBottom: '1rem',
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <span style={{ width: '24px', height: '1px', background: '#00ff88', display: 'inline-block' }} />
          FIELD.TESTIMONIALS
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800, color: '#e2e8f0',
          letterSpacing: '-0.02em', marginBottom: '0.75rem',
        }}>
          What People Say
        </h2>
        <p style={{
          color: '#64748b', fontSize: '15px', lineHeight: 1.7,
          maxWidth: '480px', marginBottom: '3rem',
        }}>
          Direct feedback from people who worked alongside the systems above.
        </p>
      </FadeIn>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
      }}>
        {items.map((testimonial, i) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
        ))}
      </div>
    </section>
  )
}
