import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { plans } from '../data/dummy'
import PricingCard from '../components/PricingCard'

import { useTheme } from '../context/ThemeContext.jsx'

export default function HomePage() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = theme === 'dark'

  const platforms = [
    { l: 'f', name: 'Facebook', color: '#1877F2', bg: 'rgba(24,119,242,0.1)' },
    { l: 'Ig', name: 'Instagram', color: '#E1306C', bg: 'rgba(225,48,108,0.1)' },
    { l: 'G', name: 'Google', color: '#EA4335', bg: 'rgba(234,67,53,0.1)' },
    { l: 'TK', name: 'TikTok', color: isDark ? '#fff' : '#111', bg: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' },
    { l: 'YT', name: 'YouTube', color: '#FF0000', bg: 'rgba(255,0,0,0.1)' },
  ]
  const sliderPlatforms = [...platforms, ...platforms]

  return (
    <div style={{
      background: 'var(--bg)',
      color: 'var(--text)',
      minHeight: '100vh',
      fontFamily: 'var(--font-body)',
    }}>

      {/* ── GLASSMORPHISM NAVBAR ───────────────────────────────────── */}
      <nav className="hp-nav" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: 64,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: isDark
          ? 'rgba(2, 4, 8, 0.8)'
          : 'rgba(248, 250, 255, 0.85)',
        borderBottom: `1px solid ${isDark ? 'rgba(0,255,159,0.1)' : 'rgba(15,82,186,0.1)'}`,
        boxShadow: scrolled
          ? isDark
            ? '0 4px 32px rgba(0,0,0,0.6), 0 1px 0 rgba(0,255,159,0.08)'
            : '0 4px 32px rgba(15,82,186,0.1), 0 1px 0 rgba(255,255,255,0.8)'
          : 'none',
        transition: 'box-shadow .3s',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(20px, 5vw, 56px)',
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: 'var(--font-head)',
          fontSize: 20, fontWeight: 800,
          color: 'var(--text)',
          letterSpacing: '-0.5px',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: isDark ? 'var(--accent)' : 'var(--blue)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L8.5 5.5H13L9.5 8L11 12.5L7 10L3 12.5L4.5 8L1 5.5H5.5L7 1Z"
                fill={isDark ? '#000' : '#fff'} />
            </svg>
          </div>
          Addvally
        </div>

        {/* Desktop nav links */}
        <div className="hp-nav-links" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {[['Home', '#home'], ['About', '#about'], ['Pricing', '#pricing'], ['Contact', '#contact-section']].map(([label, href]) => (
            <a key={label} href={href} style={{
              fontSize: 14, fontWeight: 500,
              color: 'var(--text2)',
              textDecoration: 'none',
              transition: 'color .15s',
            }}
              onMouseEnter={e => e.target.style.color = isDark ? 'var(--accent)' : 'var(--blue)'}
              onMouseLeave={e => e.target.style.color = 'var(--text2)'}
            >{label}</a>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {/* Theme toggle */}
          <button onClick={toggleTheme} style={{
            width: 36, height: 36, borderRadius: 8,
            border: `1px solid ${isDark ? 'rgba(0,255,159,0.2)' : 'var(--border)'}`,
            background: 'transparent', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text2)',
          }}>
            {isDark
              ? <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.1 3.1l1.4 1.4M11.5 11.5l1.4 1.4M3.1 12.9l1.4-1.4M11.5 4.5l1.4-1.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              : <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M13.5 10A6.5 6.5 0 016 2.5a6 6 0 100 11A6.5 6.5 0 0013.5 10z" stroke="currentColor" strokeWidth="1.3" fill="none"/></svg>
            }
          </button>

          <Link to="/login" style={{
            width: '120px',
            padding: '8px 18px', borderRadius: 8,
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'var(--border)'}`,
            fontSize: 13, fontWeight: 600,
            color: 'var(--text)', textDecoration: 'none',
            background: 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>Login</Link>

          <Link to="/signup" style={{
            width: '140px',
            padding: '8px 20px', borderRadius: 8,
            background: isDark ? 'var(--accent)' : 'var(--blue)',
            color: '#fff',
            fontSize: 13, fontWeight: 700,
            textDecoration: 'none',
            boxShadow: isDark ? '0 0 16px var(--accent-glow)' : 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>Start Free →</Link>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: 64 }} />

      {/* ── HERO SECTION ──────────────────────────────────────────────── */}
      <section id="home" className="hp-hero" style={{
        position: 'relative',
        padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 56px)',
        overflow: 'hidden',
        minHeight: isDark ? '92vh' : '80vh',
        display: 'flex', alignItems: 'center',
        background: isDark
          ? '#020408'
          : 'linear-gradient(145deg, #f8faff 0%, #eef4ff 50%, #f0f7ff 100%)',
      }}>

        {/* Dark mode: animated neon green horizontal band (Aaghaz.ai style) */}
        {isDark && (
          <>
            <div style={{
              position: 'absolute', top: '30%', left: '-10%', right: '-10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,159,0.4) 30%, rgba(0,255,159,0.8) 50%, rgba(0,255,159,0.4) 70%, transparent 100%)',
              boxShadow: '0 0 40px rgba(0,255,159,0.3), 0 0 80px rgba(0,255,159,0.15)',
              animation: 'glowPulse 3s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', bottom: '28%', left: '-10%', right: '-10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,159,0.2) 30%, rgba(0,255,159,0.5) 50%, rgba(0,255,159,0.2) 70%, transparent 100%)',
              boxShadow: '0 0 30px rgba(0,255,159,0.2)',
              animation: 'glowPulse 3s 1.5s ease-in-out infinite',
            }} />
            {/* Grid pattern overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `
                linear-gradient(rgba(0,255,159,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,159,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            }} />
            {/* Radial glow center */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,255,159,0.06) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
          </>
        )}

        {/* Light mode subtle mesh */}
        {!isDark && (
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(15,82,186,0.06) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(37,99,235,0.04) 0%, transparent 50%)
            `,
            pointerEvents: 'none',
          }} />
        )}

        {/* Hero grid */}
        <div className="hp-hero-grid" style={{
          position: 'relative', zIndex: 1,
          maxWidth: 1200, margin: '0 auto', width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>

          {/* LEFT — text */}
          <div>
            {/* Tag */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 20, marginBottom: 24,
              background: isDark ? 'rgba(0,255,159,0.08)' : 'rgba(15,82,186,0.08)',
              border: `1px solid ${isDark ? 'rgba(0,255,159,0.25)' : 'rgba(15,82,186,0.2)'}`,
              fontSize: 12, fontWeight: 700,
              color: isDark ? 'var(--accent)' : 'var(--blue)',
              boxShadow: isDark ? '0 0 12px rgba(0,255,159,0.1)' : 'none',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: isDark ? 'var(--accent)' : 'var(--blue)', animation: 'pulseDot 2s infinite', boxShadow: isDark ? '0 0 6px var(--accent)' : 'none' }} />
              🇵🇰 Pakistan's first AI ad platform
            </div>

            {/* Headline */}
            <h1 className="hp-h1" style={{
              fontFamily: 'var(--font-head)',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-1.5px',
              marginBottom: 20,
              color: isDark ? '#fff' : 'var(--text)',
            }}>
              Run{' '}
              <span style={{
                backgroundImage: isDark
                  ? 'linear-gradient(135deg, #00FF9F 0%, #00e676 100%)'
                  : 'linear-gradient(135deg, #0f52ba 0%, #2563eb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: isDark ? '0 0 40px rgba(0,255,159,0.3)' : 'none',

              }}>
                smarter ads
              </span>
              <br />on every platform
            </h1>

            {/* Subheadline */}
            <p style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: 'var(--text2)',
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 480,
            }}>
              AI finds your perfect audience. You approve. Addvally auto-posts to Meta, Google & TikTok — in Urdu or English.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <Link to="/payment?plan=trial" style={{
                padding: '14px 28px',
                borderRadius: 10,
                background: isDark ? 'var(--accent)' : 'var(--blue)',
                color: isDark ? '#000' : '#fff',
                fontSize: 15, fontWeight: 700,
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: isDark ? '0 0 24px rgba(0,255,159,0.35)' : '0 4px 16px rgba(15,82,186,0.3)',
                transition: 'all .2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                Get Started Free
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </Link>

              <a href="#how-it-works" style={{
                padding: '14px 24px',
                borderRadius: 10,
                border: `1px solid ${isDark ? 'rgba(0,255,159,0.25)' : 'var(--border)'}`,
                color: isDark ? 'rgba(255,255,255,0.8)' : 'var(--text)',
                fontSize: 14, fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: isDark ? 'rgba(255,255,255,0.03)' : 'transparent',
                backdropFilter: isDark ? 'blur(8px)' : 'none',
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M5.5 5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .6-.35 1.1-.86 1.37L7 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  <circle cx="7" cy="9.5" r=".75" fill="currentColor"/>
                </svg>
                Watch Demo
              </a>
            </div>

            {/* Trust badges */}
            <div style={{
              display: 'flex', gap: 20, flexWrap: 'wrap',
              fontSize: 12, fontWeight: 600,
              color: 'var(--text3)',
            }}>
              {['✓ 1,200+ businesses', '✓ 3-day free trial', '✓ Pay in PKR'].map(b => (
                <span key={b} style={{ color: isDark ? 'rgba(0,255,159,0.7)' : 'var(--text3)' }}>{b}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — dashboard mockup card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Main mockup card */}
            <div style={{
              width: '100%', maxWidth: 420,
              background: isDark
                ? 'rgba(13, 17, 23, 0.9)'
                : '#ffffff',
              border: `1px solid ${isDark ? 'rgba(0,255,159,0.2)' : 'rgba(15,82,186,0.12)'}`,
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: isDark
                ? '0 0 60px rgba(0,255,159,0.1), 0 20px 60px rgba(0,0,0,0.5)'
                : '0 20px 60px rgba(15,82,186,0.15)',
              backdropFilter: isDark ? 'blur(10px)' : 'none',
            }}>
              {/* Mockup top bar */}
              <div style={{
                padding: '12px 16px',
                borderBottom: `1px solid ${isDark ? 'rgba(0,255,159,0.1)' : 'var(--border)'}`,
                display: 'flex', alignItems: 'center', gap: 8,
                background: isDark ? 'rgba(0,255,159,0.04)' : 'var(--bg2)',
              }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div style={{
                  flex: 1, height: 22, background: isDark ? 'rgba(255,255,255,0.06)' : 'var(--bg3)',
                  borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 9, color: 'var(--text3)', fontFamily: 'var(--font-body)',
                }}>
                  app.addvally.pk/dashboard
                </div>
              </div>

              {/* Dashboard content inside mockup */}
              <div style={{ padding: '16px' }}>
                {/* Stats row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 14 }}>
                  {[
                    { label: 'Impressions', val: '48.2K', up: true },
                    { label: 'Leads', val: '27', up: true },
                    { label: 'Budget', val: '₨8.4K', up: false },
                  ].map((s, i) => (
                    <div key={i} style={{
                      padding: '10px 10px',
                      background: isDark ? 'rgba(255,255,255,0.04)' : 'var(--bg2)',
                      borderRadius: 10,
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'var(--border)'}`,
                    }}>
                      <div style={{ fontSize: 9, color: 'var(--text3)', marginBottom: 4, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                      <div style={{ fontFamily: 'var(--font-head)', fontSize: 17, fontWeight: 800, color: isDark ? '#fff' : 'var(--text)' }}>{s.val}</div>
                      <div style={{ fontSize: 9, color: s.up ? 'var(--green)' : 'var(--text3)', marginTop: 2, fontWeight: 600 }}>{s.up ? '↑ 12%' : '56% used'}</div>
                    </div>
                  ))}
                </div>

                {/* Mini bar chart */}
                <div style={{
                  padding: '12px', marginBottom: 12,
                  background: isDark ? 'rgba(255,255,255,0.03)' : 'var(--bg2)',
                  borderRadius: 10, border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'var(--border)'}`,
                }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--text3)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Weekly Performance</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 40 }}>
                    {[40, 65, 45, 80, 70, 95, 75].map((h, i) => (
                      <div key={i} style={{
                        flex: 1, height: `${h}%`, borderRadius: '3px 3px 0 0',
                        background: isDark
                          ? `rgba(0,255,159,${0.3 + h/200})`
                          : `rgba(15,82,186,${0.3 + h/200})`,
                        boxShadow: isDark && h > 70 ? '0 0 8px rgba(0,255,159,0.4)' : 'none',
                      }} />
                    ))}
                  </div>
                </div>

                {/* Active campaign row */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 12px',
                  background: isDark ? 'rgba(0,255,159,0.04)' : 'var(--blue-dim)',
                  borderRadius: 10,
                  border: `1px solid ${isDark ? 'rgba(0,255,159,0.15)' : 'var(--blue-mid)'}`,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', animation: 'pulseDot 2s infinite', flexShrink: 0 }} />
                  <div style={{ flex: 1, fontSize: 11, color: 'var(--text)', fontWeight: 600 }}>Eid Special Offer — Live</div>
                  <div style={{ fontSize: 10, color: 'var(--green)', fontWeight: 700 }}>1.54% CTR</div>
                </div>
              </div>
            </div>

            {/* Floating badge 1 */}
            <div className="float-1" style={{
              position: 'absolute', top: -10, right: -14,
              background: isDark ? 'rgba(13,17,23,0.95)' : '#fff',
              border: `1px solid ${isDark ? 'rgba(0,255,159,0.25)' : 'var(--border)'}`,
              borderRadius: 12, padding: '8px 14px',
              boxShadow: isDark ? '0 0 20px rgba(0,255,159,0.15)' : 'var(--shadow)',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', whiteSpace: 'nowrap' }}>✅ Ad Live on Meta</div>
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>2 minutes ago</div>
            </div>

            {/* Floating badge 2 */}
            <div className="float-2" style={{
              position: 'absolute', bottom: 20, left: -14,
              background: isDark ? 'rgba(13,17,23,0.95)' : '#fff',
              border: `1px solid ${isDark ? 'rgba(0,255,159,0.25)' : 'var(--border)'}`,
              borderRadius: 12, padding: '8px 14px',
              boxShadow: isDark ? '0 0 20px rgba(0,255,159,0.15)' : 'var(--shadow)',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--blue)', whiteSpace: 'nowrap' }}>📊 27 new leads this week</div>
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>₨311 per lead · ↓ 12% cost</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGO SLIDER ─────────────────────────────────────────────── */}
      <div style={{
        background: isDark ? '#080c12' : 'var(--bg2)',
        borderTop: `1px solid ${isDark ? 'rgba(0,255,159,0.07)' : 'var(--border)'}`,
        borderBottom: `1px solid ${isDark ? 'rgba(0,255,159,0.07)' : 'var(--border)'}`,
        padding: '20px 0', overflow: 'hidden',
      }}>
        <div style={{ fontSize: 10, textAlign: 'center', color: 'var(--text3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>
          Publishes to all major platforms
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {sliderPlatforms.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="marquee-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '0 32px',
                  borderRight: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'var(--border)'}`,
                  flexShrink: 0,
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: p.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 800, color: p.color,
                  fontFamily: 'var(--font-head)',
                }}>{p.l}</div>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text2)', whiteSpace: 'nowrap' }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS BANNER ─────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(40px, 6vw, 60px) clamp(20px, 5vw, 56px)' }}>
        <div className="hp-stats-grid" style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 'clamp(10px, 2vw, 20px)',
        }}>
          {[
            { icon: '🏪', val: '1,200+', label: 'Brands served' },
            { icon: '🛍️', val: '480+', label: 'E-commerce stores' },
            { icon: '🎯', val: '98%', label: 'Targeting accuracy' },
            { icon: '📊', val: '+340%', label: 'Avg growth' },
            { icon: '💰', val: '₨4.2Cr+', label: 'Ad spend managed' },
          ].map((s, i) => (
            <div key={i} style={{
              textAlign: 'center', padding: 'clamp(16px, 2vw, 22px) 12px',
              background: 'var(--card)',
              border: `1px solid ${isDark ? 'rgba(0,255,159,0.1)' : 'var(--border)'}`,
              borderRadius: 14,
              boxShadow: isDark ? '0 0 20px rgba(0,255,159,0.04)' : 'var(--shadow)',
              transition: 'all .2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = isDark ? 'rgba(0,255,159,0.3)' : 'var(--blue)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = isDark ? 'rgba(0,255,159,0.1)' : 'var(--border)'
              }}
            >
              <div style={{ fontSize: 26, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 800, color: isDark ? 'var(--accent)' : 'var(--blue)', marginBottom: 4 }}>{s.val}</div>
              <div style={{ fontSize: 11, color: 'var(--text3)', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────────────────── */}
      <section id="about" className="hp-section" style={{
        padding: 'clamp(52px, 8vw, 80px) clamp(20px, 5vw, 56px)',
        background: isDark ? '#080c12' : 'var(--bg2)',
        borderTop: `1px solid ${isDark ? 'rgba(0,255,159,0.07)' : 'var(--border)'}`,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, color: isDark ? 'var(--accent)' : 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12, fontWeight: 700 }}>What We Do</div>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: -1, marginBottom: 16, color: 'var(--text)' }}>
              One platform. Three ad networks.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text2)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              Stop switching between 3 different ad managers. Addvally handles Meta, Google, and TikTok from one dashboard.
            </p>
          </div>

          <div className="hp-what-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2.5vw, 24px)' }}>
            {[
              { l: 'f', color: '#1877F2', bg: 'rgba(24,119,242,0.1)', platform: 'Meta Ads', desc: 'Facebook & Instagram ads. Reach 40M+ Pakistanis on the most-used platforms.', features: ['Facebook Feed & Stories', 'Instagram Reels', 'WhatsApp Click-to-chat'] },
              { l: 'G', color: '#EA4335', bg: 'rgba(234,67,53,0.1)', platform: 'Google Ads', desc: 'Appear when customers search. Capture high-intent buyers across Pakistan.', features: ['Search ads', 'Display network', 'YouTube placements'] },
              { l: 'TK', color: isDark ? '#fff' : '#111', bg: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)', platform: 'TikTok Ads', desc: "Reach Pakistan's youngest buyers. 40M+ TikTok users and growing 80% per year.", features: ['In-feed video ads', 'TopView placement', 'Branded hashtags'] },
            ].map((p, i) => (
              <div key={i} style={{
                background: 'var(--card)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'var(--border)'}`,
                borderRadius: 16, overflow: 'hidden',
                transition: 'all .2s',
                boxShadow: 'var(--shadow)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = isDark ? `0 0 30px rgba(0,255,159,0.08)` : 'var(--shadow-lg)'
                  e.currentTarget.style.borderColor = isDark ? 'rgba(0,255,159,0.2)' : p.color + '44'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'var(--shadow)'
                  e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'var(--border)'
                }}
              >
                <div style={{ height: 4, background: p.color, boxShadow: isDark ? `0 0 8px ${p.color}88` : 'none' }} />
                <div style={{ padding: 'clamp(18px, 2.5vw, 26px)' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: p.color, marginBottom: 16, fontFamily: 'var(--font-head)' }}>{p.l}</div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>{p.platform}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {p.features.map((f, j) => (
                      <div key={j} style={{ fontSize: 13, color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: p.color, fontWeight: 700 }}>✓</span> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────── */}
      <section className="hp-section" style={{ padding: 'clamp(52px, 8vw, 80px) clamp(20px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, color: isDark ? 'var(--accent)' : 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12, fontWeight: 700 }}>Why Choose Us</div>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: -1, marginBottom: 16, color: 'var(--text)' }}>
              Built for Pakistan. Priced for Pakistan.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text2)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              International tools charge in dollars. We charge in rupees, support EasyPaisa & JazzCash, and target in Urdu.
            </p>
          </div>

          <div className="hp-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(12px, 2vw, 20px)' }}>
            {[
              { icon: '🤖', title: 'AI Finds Your Audience', desc: 'Tell us your business. AI searches for the perfect age, location and posting time automatically.' },
              { icon: '💳', title: 'Pay in PKR', desc: 'EasyPaisa, JazzCash, or bank transfer. No dollar conversions. 100% local payment.' },
              { icon: '📱', title: 'Publish in 1 Click', desc: 'Approve targeting, set budget, hit publish. Posts to Meta, Google and TikTok at once.' },
              { icon: '📊', title: 'Track Everything', desc: 'Impressions, leads, spend — all in one dashboard. See exactly what is working.' },
            ].map((f, i) => (
              <div key={i} style={{
                background: 'var(--card)',
                border: `1px solid ${isDark ? 'rgba(0,255,159,0.08)' : 'var(--border)'}`,
                borderRadius: 14, padding: 'clamp(16px, 2vw, 24px)',
                boxShadow: 'var(--shadow)', transition: 'all .2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = isDark ? 'rgba(0,255,159,0.25)' : 'var(--blue)'
                  e.currentTarget.style.boxShadow = isDark ? '0 0 24px rgba(0,255,159,0.08)' : 'var(--shadow-lg)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.borderColor = isDark ? 'rgba(0,255,159,0.08)' : 'var(--border)'
                  e.currentTarget.style.boxShadow = 'var(--shadow)'
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 15, fontWeight: 700, marginBottom: 8, color: 'var(--text)' }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section id="how-it-works" className="hp-section" style={{
        padding: 'clamp(52px, 8vw, 80px) clamp(20px, 5vw, 56px)',
        background: isDark ? '#080c12' : 'var(--bg2)',
        borderTop: `1px solid ${isDark ? 'rgba(0,255,159,0.07)' : 'var(--border)'}`,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, color: isDark ? 'var(--accent)' : 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12, fontWeight: 700 }}>How It Works</div>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: -1, color: 'var(--text)' }}>Live in 3 steps</h2>
          </div>

          <div className="hp-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2.5vw, 24px)' }}>
            {[
              { n: '01', title: 'Choose your plan', desc: 'Pick Free Trial, Starter, or Agency. Pay in PKR via EasyPaisa, JazzCash, or bank. No credit card needed.' },
              { n: '02', title: 'AI targets your audience', desc: 'Describe your business. AI searches for the perfect age group, location, and best time to post.' },
              { n: '03', title: 'Publish & track results', desc: 'One click posts to all platforms. Track every lead, impression, and rupee spent in real time.' },
            ].map((s, i) => (
              <div key={i} style={{
                textAlign: 'center', padding: 'clamp(24px, 3vw, 36px) clamp(16px, 2vw, 24px)',
                background: 'var(--card)',
                border: `1px solid ${isDark ? 'rgba(0,255,159,0.08)' : 'var(--border)'}`,
                borderRadius: 16, boxShadow: 'var(--shadow)',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: isDark ? 'rgba(0,255,159,0.08)' : 'var(--blue-dim)',
                  border: `2px solid ${isDark ? 'rgba(0,255,159,0.3)' : 'var(--blue-mid)'}`,
                  color: isDark ? 'var(--accent)' : 'var(--blue)',
                  fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 800,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: isDark ? '0 0 16px rgba(0,255,159,0.12)' : 'none',
                }}>{s.n}</div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 17, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section id="pricing" className="hp-section" style={{ padding: 'clamp(52px, 8vw, 80px) clamp(20px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, color: isDark ? 'var(--accent)' : 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12, fontWeight: 700 }}>Pricing</div>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: -1, marginBottom: 12, color: 'var(--text)' }}>Simple, transparent pricing</h2>
            <p style={{ fontSize: 16, color: 'var(--text2)' }}>All prices in PKR. No hidden fees. Cancel anytime.</p>
          </div>

          <div className="hp-pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2.5vw, 28px)', alignItems: 'center' }}>
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}

          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact-section" className="hp-section" style={{
        padding: 'clamp(52px, 8vw, 80px) clamp(20px, 5vw, 56px)',
        background: isDark ? '#080c12' : 'var(--bg2)',
        borderTop: `1px solid ${isDark ? 'rgba(0,255,159,0.07)' : 'var(--border)'}`,
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, color: isDark ? 'var(--accent)' : 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12, fontWeight: 700 }}>Contact</div>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, marginBottom: 16, color: 'var(--text)' }}>Questions? We are here.</h2>
          <p style={{ fontSize: 16, color: 'var(--text2)', marginBottom: 40 }}>Reach us via WhatsApp, email, or call directly.</p>

          <div className="hp-contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(12px, 2vw, 20px)', maxWidth: 680, margin: '0 auto' }}>
            {[
              { icon: '💬', title: 'WhatsApp', value: '+92 300 0000000', sub: 'Fastest response', href: 'https://wa.me/923000000000' },
              { icon: '📧', title: 'Email', value: 'hello@addvally.pk', sub: 'Reply within 2 hrs', href: 'mailto:hello@addvally.pk' },
              { icon: '📍', title: 'Office', value: 'Karachi, Pakistan', sub: 'Mon–Sat 9am–6pm', href: '#' },
            ].map((c, i) => (
              <a key={i} href={c.href} style={{
                display: 'block', padding: 'clamp(18px, 2.5vw, 24px) 16px',
                background: 'var(--card)',
                border: `1px solid ${isDark ? 'rgba(0,255,159,0.08)' : 'var(--border)'}`,
                borderRadius: 14, textDecoration: 'none',
                transition: 'all .2s',
                boxShadow: 'var(--shadow)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = isDark ? 'rgba(0,255,159,0.3)' : 'var(--blue)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.borderColor = isDark ? 'rgba(0,255,159,0.08)' : 'var(--border)'
                }}
              >
                <div style={{ fontSize: 26, marginBottom: 10 }}>{c.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{c.title}</div>
                <div style={{ fontSize: 13, color: isDark ? 'var(--accent)' : 'var(--blue)', marginBottom: 3 }}>{c.value}</div>
                <div style={{ fontSize: 11, color: 'var(--text3)' }}>{c.sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer style={{
        background: isDark ? '#020408' : '#0d1117',
        padding: 'clamp(40px, 6vw, 56px) clamp(20px, 5vw, 56px) clamp(20px, 3vw, 28px)',
        borderTop: `1px solid ${isDark ? 'rgba(0,255,159,0.08)' : 'rgba(255,255,255,0.07)'}`,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="hp-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'clamp(24px, 4vw, 48px)', marginBottom: 40 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Addvally</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: 260, marginBottom: 20 }}>
                Pakistan's first AI-powered ad management platform. Meta, Google & TikTok from one place.
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                {[['EP', '#16A34A'], ['JC', '#DC2626'], ['VISA', '#1B4FD8']].map(([code, bg]) => (
                  <div key={code} style={{ background: bg, color: '#fff', fontSize: 9, fontWeight: 800, padding: '4px 10px', borderRadius: 5 }}>{code}</div>
                ))}
              </div>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'How it works', 'Get started'] },
              { title: 'Company', links: ['About us', 'Contact', 'Privacy policy', 'Terms'] },
              { title: 'Support', links: ['Help center', 'WhatsApp', 'Email us', 'Status'] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>{col.title}</div>
                {col.links.map(link => (
                  <a key={link} href="#" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 10 }}>{link}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2025 Addvally. All rights reserved.</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>Made in Pakistan 🇵🇰</div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Action Button */}
      <a href="https://wa.me/923000000000" className="whatsapp-fab" 
         style={{
           position: 'fixed',
           bottom: '24px',
           right: '24px',
           width: '56px',
           height: '56px',
           borderRadius: '50%',
           background: isDark ? '#25D366' : '#25D366',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
           zIndex: 999,
           transition: 'all 0.2s',
           textDecoration: 'none',
         }}
         target="_blank" rel="noopener noreferrer"
         onMouseEnter={e => {
           e.currentTarget.style.transform = 'scale(1.05)';
           e.currentTarget.style.boxShadow = '0 6px 24px rgba(37, 211, 102, 0.5)';
         }}
         onMouseLeave={e => {
           e.currentTarget.style.transform = 'scale(1)';
           e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
         }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{width: '24px', height: '24px'}}>
          <path d="M17.47 14.38c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.446l-.232-.132-3.527-.25 1.132-3.243a9.87 9.87 0 011.44-4.997l.005-.006.112-.15 1.165 2.107-.728.657a9.87 9.87 0 01-1.272 1.481l-.004.004-.002.001-.001.001a8.26 8.26 0 001.703 3.707 9.62 9.62 0 004.031 2.762l.005.003.001.001.001.001.003.002a9.62 9.62 0 002.966-.24l.001-.001.003-.003a8.26 8.26 0 001.612-2.988l.004-.005a8.26 8.26 0 00-.999-1.362l-.243-.221-1.165-2.107.112-.15a9.62 9.62 0 004.04 4.997l3.526.25-.232.132a9.87 9.87 0 01-5.031 1.446z"/>
        </svg>
      </a>
    </div>
  )
}
