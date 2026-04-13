import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40, alignItems: 'start' }}>
        <div className="footer-section">
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>
            Addvally.pk
          </div>
          <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, maxWidth: 300 }}>
            Automate your Meta, Google & TikTok ads with campaigns that scale.
          </div>
        </div>

        <div className="footer-section">
          <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 13 }}>Product</div>
          <NavLink to="/pricing" style={{ display: 'block', marginBottom: 8, color: 'var(--text2)', fontSize: 13 }}>Pricing</NavLink>
          <NavLink to="/create" style={{ display: 'block', marginBottom: 8, color: 'var(--text2)', fontSize: 13 }}>Create Campaign</NavLink>
          <NavLink to="/campaigns" style={{ display: 'block', marginBottom: 8, color: 'var(--text2)', fontSize: 13 }}>My Campaigns</NavLink>
        </div>

        <div className="footer-section">
          <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 13 }}>Company</div>
          <NavLink to="/about" style={{ display: 'block', marginBottom: 8, color: 'var(--text2)', fontSize: 13 }}>About Us</NavLink>
          <NavLink to="/privacy" style={{ display: 'block', marginBottom: 8, color: 'var(--text2)', fontSize: 13 }}>Privacy policy</NavLink>
          <NavLink to="/terms" style={{ display: 'block', marginBottom: 8, color: 'var(--text2)', fontSize: 13 }}>Terms</NavLink>
        </div>
      </div>

      <div style={{ height: 1, background: 'var(--border)', marginTop: 32, marginBottom: 16 }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, fontSize: 13, color: 'var(--text3)' }}>
        <div>© 2025 Addvally.pk. All rights reserved.</div>
        <div>Made in Pakistan 🇵🇰</div>
      </div>
    </footer>
  )
}
