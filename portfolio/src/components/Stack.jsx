import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    label: 'Frontend',
    color: '#00ff88',
    skills: [
      { name: 'React', level: 95 },
      { name: 'JavaScript ES6+', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 85 },
      { name: 'HTML5 / CSS3', level: 97 },
    ],
  },
  {
    label: 'Automation & Backend',
    color: '#00d4ff',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Workflow Automation', level: 94 },
      { name: 'Web Scraping / Scrapers', level: 90 },
      { name: 'REST APIs', level: 85 },
      { name: 'Data Pipelines', level: 80 },
    ],
  },
  {
    label: 'Architecture & Systems',
    color: '#f59e0b',
    skills: [
      { name: 'Modular System Design', level: 93 },
      { name: 'Client Portals / Dashboards', level: 91 },
      { name: 'Performance Optimization', level: 88 },
      { name: 'Monorepo Management', level: 82 },
      { name: 'Documentation Systems', level: 86 },
    ],
  },
]

const tools = [
  'VS Code', 'Git', 'GitHub', 'Node.js', 'npm',
  'Vite', 'Figma', 'Postman', 'Chrome DevTools', 'Bash',
]

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ color: '#94a3b8', fontSize: '13px', fontFamily: 'monospace' }}>{name}</span>
        <span style={{ color: color, fontSize: '11px', fontFamily: 'monospace' }}>{level}%</span>
      </div>
      <div style={{
        height: '3px',
        background: 'rgba(26,26,58,0.8)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            borderRadius: '2px',
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  )
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function Stack() {
  return (
    <section
      id="stack"
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) 2rem',
        background: 'rgba(13,13,26,0.5)',
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
            TECHNICAL.STACK
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#e2e8f0',
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}>
            The Toolkit
          </h2>
          <p style={{
            color: '#64748b', fontSize: '15px', lineHeight: 1.7,
            maxWidth: '500px', marginBottom: '3.5rem',
          }}>
            A precision stack, chosen for performance, composability, and long-term maintainability.
          </p>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
        }}>
          {categories.map((cat, ci) => (
            <FadeIn key={cat.label} delay={ci * 0.1}>
              <div style={{
                background: 'rgba(5,5,10,0.7)',
                border: '1px solid rgba(26,26,58,0.9)',
                borderRadius: '8px',
                padding: '1.75rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                  <span style={{ color: cat.color, fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.12em' }}>
                    {cat.label.toUpperCase()}
                  </span>
                </div>
                {cat.skills.map((sk, si) => (
                  <SkillBar
                    key={sk.name}
                    name={sk.name}
                    level={sk.level}
                    color={cat.color}
                    delay={si * 0.07 + ci * 0.1}
                  />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tools */}
        <FadeIn delay={0.3}>
          <div style={{
            background: 'rgba(5,5,10,0.7)',
            border: '1px solid rgba(26,26,58,0.9)',
            borderRadius: '8px',
            padding: '1.75rem',
          }}>
            <p style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
              // TOOLS & ENVIRONMENT
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {tools.map(tool => (
                <motion.span
                  key={tool}
                  whileHover={{ borderColor: '#00ff8866', color: '#00ff88', scale: 1.03 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    background: 'rgba(26,26,58,0.5)',
                    border: '1px solid rgba(26,26,58,0.9)',
                    color: '#94a3b8',
                    padding: '5px 14px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    cursor: 'default',
                    transition: 'all 0.15s',
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
