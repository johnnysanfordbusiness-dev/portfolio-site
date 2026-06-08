import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const inputStyle = {
  width: '100%',
  background: 'rgba(5,5,10,0.8)',
  border: '1px solid rgba(26,26,58,0.9)',
  borderRadius: '6px',
  padding: '12px 16px',
  color: '#e2e8f0',
  fontFamily: 'monospace',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s',
}

function Field({ label, name, type = 'text', multiline = false, value, onChange }) {
  const [focused, setFocused] = useState(false)
  const Tag = multiline ? 'textarea' : 'input'

  return (
    <div>
      <label style={{
        display: 'block',
        color: '#64748b',
        fontFamily: 'monospace',
        fontSize: '11px',
        letterSpacing: '0.12em',
        marginBottom: '8px',
      }}>
        {label}
      </label>
      <Tag
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={multiline ? 5 : undefined}
        style={{
          ...inputStyle,
          borderColor: focused ? 'rgba(0,255,136,0.4)' : 'rgba(26,26,58,0.9)',
          boxShadow: focused ? '0 0 12px rgba(0,255,136,0.08)' : 'none',
          resize: multiline ? 'vertical' : undefined,
          minHeight: multiline ? '120px' : undefined,
        }}
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio Inquiry',
          message: form.message,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm(EMPTY_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const isSending = status === 'sending'

  return (
    <section
      id="contact"
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
          INIT.CONTACT
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800, color: '#e2e8f0',
          letterSpacing: '-0.02em', marginBottom: '0.75rem',
        }}>
          Start a Project
        </h2>
        <p style={{
          color: '#64748b', fontSize: '15px', lineHeight: 1.7,
          maxWidth: '480px', marginBottom: '3rem',
        }}>
          Have a system that needs architecting? A workflow that should be automated?
          Let's build it properly the first time.
        </p>
      </FadeIn>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'start',
      }}>
        {/* Form */}
        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <Field label="// NAME" name="name" value={form.name} onChange={handleChange} />
              <Field label="// EMAIL" name="email" type="email" value={form.email} onChange={handleChange} />
            </div>
            <Field label="// SUBJECT" name="subject" value={form.subject} onChange={handleChange} />
            <Field label="// MESSAGE" name="message" multiline value={form.message} onChange={handleChange} />

            {status === 'success' ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '13px' }}
              >
                ✓ Message routed. I'll respond within 24 hours.
              </motion.p>
            ) : (
              <>
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={!isSending ? { scale: 1.02, boxShadow: '0 0 24px rgba(0,255,136,0.3)' } : {}}
                  whileTap={!isSending ? { scale: 0.98 } : {}}
                  style={{
                    background: '#00ff88',
                    color: '#05050a',
                    border: 'none',
                    padding: '14px 28px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    cursor: isSending ? 'not-allowed' : 'pointer',
                    alignSelf: 'flex-start',
                    opacity: isSending ? 0.7 : 1,
                    transition: 'opacity 0.2s',
                  }}
                >
                  {isSending ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE →'}
                </motion.button>
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: '#f87171', fontFamily: 'monospace', fontSize: '12px' }}
                  >
                    ✗ Transmission failed. Please try again or email directly.
                  </motion.p>
                )}
              </>
            )}
          </form>
        </FadeIn>

        {/* Info panel */}
        <FadeIn delay={0.2}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{
              background: 'rgba(5,5,10,0.8)',
              border: '1px solid rgba(26,26,58,0.9)',
              borderRadius: '8px',
              padding: '1.75rem',
            }}>
              <p style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>
                // DIRECT CHANNEL
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Email', value: 'johnnysanfordbusiness@gmail.com', icon: '◉' },
                  { label: 'GitHub', value: 'johnnysanfordbusiness-dev', icon: '◈' },
                  { label: 'Status', value: 'Available for Projects', icon: '◆' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#00ff88', fontSize: '12px', marginTop: '1px' }}>{item.icon}</span>
                    <div>
                      <div style={{ color: '#64748b', fontSize: '11px', fontFamily: 'monospace', marginBottom: '2px' }}>
                        {item.label}
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: '13px', fontFamily: 'monospace', wordBreak: 'break-all' }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'rgba(0,255,136,0.04)',
              border: '1px solid rgba(0,255,136,0.15)',
              borderRadius: '8px',
              padding: '1.5rem',
            }}>
              <p style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                // RESPONSE PROTOCOL
              </p>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.7 }}>
                I review all serious inquiries within 24 hours. Come with a problem — I'll come back with an architectural approach.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
