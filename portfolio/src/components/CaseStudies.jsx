import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const studies = [
  {
    id: 'performance',
    tag: 'CS-001',
    title: "Sanford's Performance",
    subtitle: 'Full-Stack AI Sales & Agentic Platform',
    status: 'PRODUCTION',
    statusColor: '#f59e0b',
    description:
      'Sole architect and developer of a private, full-stack AI lead-generation, CRM, and sales-automation platform. Built with Python 3.12, FastAPI, PostgreSQL 16, React 18 with TypeScript, and Docker Compose. 339 backend tests passing across 8 completed build phases.',
    impact: [
      'Deterministic ICP scoring using a local Hermes 3 8B model via Ollama for structured fact extraction, with a weighted Python rubric instead of stochastic rating prompts',
      'Playwright lead scrapers with provider-pattern abstraction and deduplication precedence logic (phone, then domain, then name plus geo)',
      'Kanban CRM with drag-and-drop',
      'Stripe Checkout integration with HMAC-verified idempotent webhooks, verified against real Stripe test-mode including replay safety',
      "Also designed and shipped the company's public-facing marketing site",
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Docker', 'Ollama', 'Agentic AI'],
    metrics: [{ label: 'Tests Passing', value: '339' }, { label: 'Build Phases', value: '8' }],
    link: '#',
  },
  {
    id: 'agentic-architecture',
    tag: 'CS-004',
    title: 'Agentic Architecture & Orchestration Layer',
    subtitle: 'AI Agent System Design',
    status: 'PRODUCTION',
    statusColor: '#f59e0b',
    description:
      "The orchestration and safety layer underneath Sanford's Performance's agent templates: how each agent is isolated at deploy time, how plain-language requests get compiled into an executable workflow graph, and how every public-facing agent surface is guarded against adversarial input.",
    impact: [
      'Four production agent templates with clone-on-deploy isolation, so each customer instance runs on its own isolated clone with no shared state',
      'Natural-language-to-node-graph workflow builder on a React Flow canvas, compiling plain-language instructions into an executable agent workflow',
      '25-entry adversarial prompt-injection regression corpus (floor: 5 consecutive 5/5 runs), an output-side instruction-leak guard, and Redis sliding-window circuit breakers on every public agent surface',
    ],
    stack: ['Agentic AI', 'Python', 'React Flow', 'Redis', 'Ollama'],
    metrics: [{ label: 'Agent Templates', value: '4' }, { label: 'Regression Corpus', value: '25' }, { label: 'Isolation', value: 'Clone-on-Deploy' }],
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
  {
    id: 'package-tracking',
    tag: 'CS-005',
    title: 'Package Tracking & Scanning System',
    subtitle: 'Mobile Logistics Automation, The Statler Hotel at Cornell',
    status: 'DEPLOYED',
    statusColor: '#00ff88',
    description:
      'Collaborated with the IT department to design and implement a mobile package scanning system for a high-volume hotel receiving operation, handling the daily package load for the property. The system replaced manual logging with mobile scanning, cutting processing time and eliminating tracking errors for guests and staff awaiting deliveries.',
    impact: [
      'Co-designed the scanning workflow with IT to replace manual, error-prone package logging',
      'Reduced processing time and eliminated tracking errors across a high-volume daily package flow',
      'Trained and supervised incoming staff on the new system and broader warehouse protocols',
    ],
    stack: ['Mobile Scanning', 'Process Design', 'Systems Collaboration'],
    metrics: [{ label: 'Role', value: 'Co-Designer' }, { label: 'Scope', value: 'Property-Wide' }],
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {!expanded && (
                <>
                  <span style={{
                    color: '#64748b', fontFamily: 'monospace', fontSize: '9px',
                    letterSpacing: '0.1em', whiteSpace: 'nowrap',
                  }}>
                    CLICK TO EXPAND
                  </span>
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: '#00ff88', flexShrink: 0,
                    }}
                  />
                </>
              )}
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
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {study.stack.slice(0, 4).map(t => (
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
