import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.3s ease, border-color 0.3s ease',
        background: scrolled ? 'rgba(5, 5, 10, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,255,136,0.08)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: 'none' }}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '32px', height: '32px',
            border: '1.5px solid #00ff88',
            borderRadius: '6px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 12px rgba(0,255,136,0.3)',
          }}>
            <span style={{ fontFamily: 'monospace', color: '#00ff88', fontSize: '14px', fontWeight: 700 }}>JS</span>
          </div>
          <span style={{ fontFamily: 'monospace', color: '#e2e8f0', fontSize: '13px', letterSpacing: '0.08em' }}>
            Johnny Sanford
          </span>
        </motion.div>
      </a>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}
        className="hidden-mobile">
        {links.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
          >
            <a
              href={link.href}
              style={{
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '13px',
                letterSpacing: '0.06em',
                fontFamily: 'monospace',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#00ff88'}
              onMouseLeave={e => e.target.style.color = '#94a3b8'}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <a
            href="#contact"
            style={{
              background: 'transparent',
              border: '1px solid #00ff88',
              color: '#00ff88',
              padding: '6px 18px',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'monospace',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              transition: 'background 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.target.style.background = 'rgba(0,255,136,0.1)'
              e.target.style.boxShadow = '0 0 16px rgba(0,255,136,0.2)'
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent'
              e.target.style.boxShadow = 'none'
            }}
          >
            HIRE ME
          </a>
        </motion.li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="show-mobile"
        onClick={() => setMenuOpen(v => !v)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'none', flexDirection: 'column', gap: '5px', padding: '4px',
        }}
      >
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            animate={menuOpen
              ? i === 1 ? { opacity: 0 } : i === 0 ? { rotate: 45, y: 7 } : { rotate: -45, y: -7 }
              : { rotate: 0, y: 0, opacity: 1 }}
            style={{ display: 'block', width: '22px', height: '1.5px', background: '#00ff88', transformOrigin: 'center' }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              top: '64px', left: 0, right: 0,
              background: 'rgba(5,5,10,0.97)',
              borderBottom: '1px solid rgba(0,255,136,0.12)',
              padding: '1.5rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: '#94a3b8', textDecoration: 'none',
                  fontFamily: 'monospace', fontSize: '14px',
                  borderBottom: '1px solid rgba(26,26,58,0.5)',
                  paddingBottom: '1rem',
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
