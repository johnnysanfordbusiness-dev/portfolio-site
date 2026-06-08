import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const LINES = [
  { prefix: '> ', text: 'init architect.profile --mode=expert', color: '#00ff88' },
  { prefix: '  ', text: 'Loading: Automation Systems .............. OK', color: '#94a3b8' },
  { prefix: '  ', text: 'Loading: Scalable Architecture ........... OK', color: '#94a3b8' },
  { prefix: '  ', text: 'Loading: Workflow Optimization ........... OK', color: '#94a3b8' },
  { prefix: '> ', text: 'status --brief', color: '#00ff88' },
  { prefix: '  ', text: 'Role   : Automation Architect & Founder', color: '#e2e8f0' },
  { prefix: '  ', text: 'Mission: Engineering the infrastructure of efficiency', color: '#00d4ff' },
]

function TerminalLine({ line, onDone }) {
  const [displayed, setDisplayed] = useState('')
  const idx = useRef(0)

  useEffect(() => {
    idx.current = 0
    setDisplayed('')
    const full = line.prefix + line.text
    const timer = setInterval(() => {
      idx.current += 1
      setDisplayed(full.slice(0, idx.current))
      if (idx.current >= full.length) {
        clearInterval(timer)
        setTimeout(onDone, 80)
      }
    }, 22)
    return () => clearInterval(timer)
  }, [line])

  return (
    <div style={{ color: line.color, minHeight: '1.5em', fontFamily: 'monospace', fontSize: 'clamp(12px, 1.5vw, 14px)' }}>
      {displayed}
      <span style={{ opacity: idx.current < (line.prefix + line.text).length ? 1 : 0, color: '#00ff88' }}>▋</span>
    </div>
  )
}

function Terminal() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [completedLines, setCompletedLines] = useState([])

  const handleLineDone = (idx) => {
    setCompletedLines(prev => [...prev, LINES[idx]])
    if (idx + 1 < LINES.length) setActiveIdx(idx + 1)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      style={{
        background: 'rgba(13, 13, 26, 0.8)',
        border: '1px solid rgba(0,255,136,0.2)',
        borderRadius: '8px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '560px',
        boxShadow: '0 0 40px rgba(0,255,136,0.08)',
      }}
    >
      {/* Terminal header */}
      <div style={{
        background: 'rgba(26,26,58,0.8)',
        padding: '10px 16px',
        display: 'flex', alignItems: 'center', gap: '8px',
        borderBottom: '1px solid rgba(0,255,136,0.08)',
      }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
        <span style={{ marginLeft: '8px', color: '#64748b', fontFamily: 'monospace', fontSize: '11px' }}>
          architect@sanford ~ zsh
        </span>
      </div>
      <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {completedLines.map((line, i) => (
          <div key={i} style={{ color: line.color, fontFamily: 'monospace', fontSize: 'clamp(12px, 1.5vw, 14px)' }}>
            {line.prefix}{line.text}
          </div>
        ))}
        {activeIdx < LINES.length && (
          <TerminalLine
            key={activeIdx}
            line={LINES[activeIdx]}
            onDone={() => handleLineDone(activeIdx)}
          />
        )}
      </div>
    </motion.div>
  )
}

const TITLE_WORDS = ['Automation', 'Architect.']

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 2rem 4rem',
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(26,26,58,0.13) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26,26,58,0.13) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        zIndex: 0,
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        gap: '2rem', maxWidth: '1100px', width: '100%',
      }}>
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            fontFamily: 'monospace', fontSize: '12px', color: '#00ff88',
            letterSpacing: '0.15em',
          }}
        >
          <span style={{ width: '24px', height: '1px', background: '#00ff88', display: 'inline-block' }} />
          SYSTEM: READY // v2.0.26
        </motion.div>

        {/* Main layout: headline + terminal */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '4rem',
          width: '100%',
          flexWrap: 'wrap',
        }}>
          {/* Left: headline */}
          <div style={{ flex: '1 1 400px', minWidth: '280px' }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '13px', marginBottom: '1rem', letterSpacing: '0.08em' }}
            >
              Johnny Sanford
            </motion.p>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#e2e8f0',
              marginBottom: '1.5rem',
            }}>
              {['Engineering', 'the', 'Infrastructure', 'of', 'Efficiency.'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                  style={{
                    display: 'inline-block',
                    marginRight: '0.3em',
                    color: (word === 'Infrastructure' || word === 'Efficiency.') ? '#00ff88' : '#e2e8f0',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              style={{
                color: '#94a3b8',
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                lineHeight: 1.7,
                maxWidth: '480px',
                marginBottom: '2rem',
              }}
            >
              I don't just write code — I design the automated systems and scalable architectures
              that eliminate operational drag and compound over time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <a
                href="#case-studies"
                style={{
                  background: '#00ff88',
                  color: '#05050a',
                  padding: '12px 28px',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  e.target.style.boxShadow = '0 0 24px rgba(0,255,136,0.4)'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.target.style.boxShadow = 'none'
                  e.target.style.transform = 'none'
                }}
              >
                VIEW CASE STUDIES →
              </a>
              <a
                href="#contact"
                style={{
                  background: 'transparent',
                  color: '#e2e8f0',
                  padding: '12px 28px',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  border: '1px solid rgba(226,232,240,0.15)',
                  transition: 'border-color 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => e.target.style.borderColor = 'rgba(226,232,240,0.4)'}
                onMouseLeave={e => e.target.style.borderColor = 'rgba(226,232,240,0.15)'}
              >
                GET IN TOUCH
              </a>
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <div style={{ flex: '1 1 300px', minWidth: '260px' }}>
            <Terminal />
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            display: 'flex', gap: '3rem', flexWrap: 'wrap',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(26,26,58,0.8)',
            width: '100%',
          }}
        >
          {[
            { value: '5+', label: 'Years Architecting' },
            { value: '20+', label: 'Systems Built' },
            { value: '100%', label: 'Automation-First' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#00ff88', fontFamily: 'monospace' }}>
                {stat.value}
              </div>
              <div style={{ color: '#64748b', fontSize: '12px', letterSpacing: '0.08em', marginTop: '2px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
