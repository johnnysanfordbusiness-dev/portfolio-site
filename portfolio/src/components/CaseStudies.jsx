import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const studies = [
  {
    id: 'performance',
    tag: 'CS-001',
    title: "Sanford's Performance",
    subtitle: 'Full-Stack Business Web Architecture',
    status: 'DEPLOYED',
    statusColor: '#00ff88',
    description:
      "Architected the complete digital presence for Sanford's Performance — a modular, high-performance web system designed for scalability. Built with a component-driven architecture enabling rapid iteration while maintaining strict UI consistency across all touchpoints.",
    impact: [
      'Component-driven design system with zero duplication',
      'Sub-2s load times through aggressive optimization',
      'Responsive architecture scaling from mobile to 4K',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    metrics: [{ label: 'Performance', value: '98' }, { label: 'SEO', value: '100' }, { label: 'A11y', value: '95' }],
    link: '#',
  },
  {
    id: 'tools',
    tag: 'CS-002',
    title: 'Automation Tools Suite',
    subtitle: 'Backend Automation & Data Engineering',
    status: 'ACTIVE',
    statusColor: '#00d4ff',
    description:
      'Engineered a suite of Python-based automation tools including web scrapers, data generators, and workflow orchestration scripts. These systems eliminate hours of manual labor weekly by automating data acquisition, transformation, and delivery pipelines.',
    impact: [
      'Automated data acquisition pipelines saving 10+ hours/week',
      'Configurable scrapers with rate-limiting and retry logic',
      'Structured output formats for downstream system consumption',
    ],
    stack: ['Python', 'Automation', 'Web Scraping', 'Data Pipelines'],
    metrics: [{ label: 'Hours Saved', value: '10+' }, { label: 'Reliability', value: '99%' }, { label: 'Coverage', value: 'Full' }],
    link: '#',
  },
  {
    id: 'dashboards',
    tag: 'CS-003',
    title: 'Integrated Client Dashboards',
    subtitle: 'Administrative Interface Architecture',
    status: 'PRODUCTION',
    statusColor: '#f59e0b',
    description:
      'Designed and built integrated client portals and administrative interfaces that consolidate multiple data streams into unified, real-time dashboards. Each dashboard is architected as a modular system — panels can be reconfigured per client without rebuilding the core.',
    impact: [
      'Modular panel system enabling per-client reconfiguration',
      'Real-time data visualization with low-latency updates',
      'Role-based access control baked into the architecture',
    ],
    stack: ['React', 'JavaScript', 'CSS3', 'REST APIs'],
    metrics: [{ label: 'Data Streams', value: '5+' }, { label: 'Latency', value: '<200ms' }, { label: 'Uptime', value: '99.9%' }],
    link: '#',
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

function CaseStudyCard({ study, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <FadeIn delay={index * 0.12}>
      <motion.div
        layout
        style={{
          background: 'rgba(5,5,10,0.8)',
          border: `1px solid ${expanded ? 'rgba(0,255,136,0.25)' : 'rgba(26,26,58,0.9)'}`,
          borderRadius: '8px',
          overflow: 'hidden',
          transition: 'border-color 0.25s',
          boxShadow: expanded ? '0 0 40px rgba(0,255,136,0.06)' : 'none',
        }}
      >
        {/* Card header */}
        <div
          onClick={() => setExpanded(v => !v)}
          style={{
            padding: '2rem',
            cursor: 'pointer',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '1rem',
            alignItems: 'start',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <span style={{
                fontFamily: 'monospace', fontSize: '11px',
                color: '#64748b', letterSpacing: '0.1em',
              }}>
                {study.tag}
              </span>
              <span style={{
                background: `${study.statusColor}18`,
                border: `1px solid ${study.statusColor}40`,
                color: study.statusColor,
                padding: '2px 10px',
                borderRadius: '3px',
                fontFamily: 'monospace',
                fontSize: '10px',
                letterSpacing: '0.12em',
              }}>
                {study.status}
              </span>
            </div>
            <h3 style={{
              color: '#e2e8f0',
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: 700,
              marginBottom: '4px',
              letterSpacing: '-0.01em',
            }}>
              {study.title}
            </h3>
            <p style={{ color: '#64748b', fontSize: '13px', fontFamily: 'monospace' }}>
              {study.subtitle}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
            <motion.div
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              style={{
                width: '32px', height: '32px',
                border: '1px solid rgba(0,255,136,0.3)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#00ff88', fontSize: '18px', lineHeight: 1,
                flexShrink: 0,
              }}
            >
              +
            </motion.div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {study.stack.slice(0, 2).map(t => (
                <span key={t} style={{
                  color: '#64748b', fontFamily: 'monospace', fontSize: '11px',
                  background: 'rgba(26,26,58,0.5)', padding: '3px 10px', borderRadius: '3px',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                padding: '0 2rem 2rem',
                borderTop: '1px solid rgba(26,26,58,0.9)',
                paddingTop: '1.75rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '2rem',
              }}>
                <div>
                  <p style={{
                    color: '#94a3b8', fontSize: '14px', lineHeight: 1.75,
                    marginBottom: '1.5rem',
                  }}>
                    {study.description}
                  </p>
                  <div>
                    <p style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                      // ARCHITECTURAL IMPACT
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {study.impact.map(item => (
                        <li key={item} style={{ display: 'flex', gap: '10px', color: '#94a3b8', fontSize: '13px' }}>
                          <span style={{ color: '#00ff88', flexShrink: 0 }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Metrics */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                      // SYSTEM METRICS
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      {study.metrics.map(m => (
                        <div key={m.label} style={{
                          background: 'rgba(13,13,26,0.7)',
                          border: '1px solid rgba(26,26,58,0.9)',
                          borderRadius: '6px',
                          padding: '0.75rem 1rem',
                          minWidth: '80px',
                          textAlign: 'center',
                        }}>
                          <div style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '18px', fontWeight: 700 }}>
                            {m.value}
                          </div>
                          <div style={{ color: '#64748b', fontSize: '11px', marginTop: '2px' }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stack */}
                  <div>
                    <p style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                      // STACK
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {study.stack.map(t => (
                        <span key={t} style={{
                          background: 'rgba(0,255,136,0.07)',
                          border: '1px solid rgba(0,255,136,0.2)',
                          color: '#00ff88',
                          padding: '4px 12px',
                          borderRadius: '3px',
                          fontFamily: 'monospace',
                          fontSize: '12px',
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </FadeIn>
  )
}

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
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
          ENGINEERING.CASE_STUDIES
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: '#e2e8f0',
          letterSpacing: '-0.02em',
          marginBottom: '0.75rem',
        }}>
          Architectural Achievements
        </h2>
        <p style={{
          color: '#64748b', fontSize: '15px', lineHeight: 1.7,
          maxWidth: '520px', marginBottom: '3rem',
        }}>
          Not demos. Not tutorials. Real systems — designed, engineered, and deployed.
          Click any card to expand the full case study.
        </p>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {studies.map((study, i) => (
          <CaseStudyCard key={study.id} study={study} index={i} />
        ))}
      </div>
    </section>
  )
}
