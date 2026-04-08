// src/components/Footer.jsx
import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/campaigns', label: 'Campaigns' },
  { path: '/ai', label: 'AI Tools' },
  { path: '/contact', label: 'Contact' },
  { path: '/onboarding', label: 'Onboarding' },
]

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <div style={{ fontFamily: 'Syne', fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>
            Add<em>vally</em>.pk
          </div>
          <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6, maxWidth: 280 }}>
            Automate your Meta, Google & TikTok ads with AI-powered campaigns that scale.
          </div>
        </div>
        
        {/* Rest of your footer remains the same */}
        {/* ... */}
      </div>
      
      <div style={{ height: 1, background: 'var(--border)', marginTop: 32, marginBottom: 16 }} />
      
      <div style={{ fontSize: 11, color: 'var(--text3)', textAlign: 'center' }}>
        © 2025 Addvally.pk. All rights reserved. | 
        <a href="/privacy" style={{ color: 'var(--text2)' }}>Privacy</a> | 
        <a href="/terms" style={{ color: 'var(--text2)' }}>Terms</a>
      </div>
    </footer>
  )
}