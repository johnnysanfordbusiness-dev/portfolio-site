import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import CaseStudies from './components/CaseStudies'
import Process from './components/Process'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(26,26,58,0.8)',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      background: 'rgba(5,5,10,0.8)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '24px', height: '24px',
          border: '1px solid rgba(0,255,136,0.4)',
          borderRadius: '4px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: 'monospace', color: '#00ff88', fontSize: '10px', fontWeight: 700 }}>JS</span>
        </div>
        <span style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '12px' }}>
          Johnny Sanford — Automation Architect
        </span>
      </div>
      <p style={{ color: '#1e293b', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.08em' }}>
        © {new Date().getFullYear()} // SYSTEM OPERATIONAL
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#05050a', position: 'relative', overflowX: 'hidden' }}>
      {/* Subtle global grid */}
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(26,26,58,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26,26,58,0.07) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Ambient glow — top right */}
      <div style={{
        position: 'fixed',
        top: '-200px', right: '-200px',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav />
        <Hero />
        <About />
        <Stack />
        <CaseStudies />
        <Process />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
