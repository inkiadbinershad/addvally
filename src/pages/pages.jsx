// src/pages/pages.jsx
import { useState } from 'react'
import { notifications, plans, billingHistory } from '../data/dummy'

// ─── NOTIFICATIONS ───────────────────────────────
export function Notifications() {
  const [items, setItems] = useState(notifications)

  const markAll = () => {
    setItems(prev => prev.map(n => ({ ...n, unread: false })))
  }

  const dotColors = {
    success: 'var(--green)',
    info: 'var(--blue)',
    warning: 'var(--amber)',
    neutral: 'var(--text3)'
  }

  return (
    <div className="page-content" style={{ padding: '32px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-hdr" style={{ marginBottom: 24 }}>
          <div>
            <div className="section-title">Notifications</div>
            <div className="section-sub">
              {items.filter(n => n.unread).length} unread
            </div>
          </div>
          <button className="btn-ghost" style={{ fontSize: 13 }} onClick={markAll}>
            Mark all read
          </button>
        </div>

        <div className="card">
          {items.map(n => (
            <div key={n.id} className="notif-item" style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
              <div className="notif-dot" style={{ background: dotColors[n.type] }} />
              <div style={{ flex: 1 }}>
                <div className="notif-title">{n.title}</div>
                <div className="notif-sub">{n.body}</div>
                <div className="notif-time">{n.time}</div>
              </div>
              {n.unread && <span className="badge badge-blue">New</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── BILLING & PLANS ─────────────────────────────
export function Billing() {
  const [yearly, setYearly] = useState(false)

  return (
    <div className="page-content" style={{ padding: '32px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-hdr" style={{ marginBottom: 24 }}>
          <div>
            <div className="section-title">Billing & Plans</div>
            <div className="section-sub">Current plan: Growth · Renews July 17, 2025</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 13, color: 'var(--text3)' }}>Monthly</span>
            <div className={`toggle-track${yearly ? ' on' : ''}`} onClick={() => setYearly(!yearly)}>
              <div className="toggle-thumb" />
            </div>
            <span style={{ fontSize: 13, color: 'var(--text3)' }}>
              Yearly <span style={{ color: 'var(--green)', fontWeight: 700 }}>-20%</span>
            </span>
          </div>
        </div>

        {/* Current Plan Card */}
        <div className="card" style={{ marginBottom: 32, border: '2px solid var(--blue)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase' }}>Current Plan</div>
              <div style={{ fontSize: 24, fontWeight: 800 }}>Growth Plan</div>
              <div style={{ color: 'var(--text3)' }}>₨12,999 / month</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13 }}>3 of 3 campaigns used</div>
              <div className="prog-track" style={{ width: 180, marginTop: 8 }}>
                <div className="prog-fill" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Plan Grid */}
        <div className="plan-grid">
          {plans.map(plan => (
            <div key={plan.id} className={`plan-card${plan.featured ? ' featured' : ''}`}>
              {plan.featured && <div className="plan-badge">CURRENT</div>}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">
                {yearly ? plan.yearlyPrice : plan.price}
                <sub>/mo</sub>
              </div>
              <div className="plan-desc">{plan.desc}</div>
              <button className={`plan-btn ${plan.featured ? '' : 'plan-btn-outline'}`}>
                {plan.featured ? 'Active Plan' : 'Upgrade →'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Placeholder for other pages (so no errors) ───
export function AIFeatures() { return <div className="page-content">AI Features Page</div> }
export function Settings() { return <div className="page-content">Settings Page</div> }
export function Growth() { return <div className="page-content">Growth Page</div> }
export function Onboarding() { return <div className="page-content">Onboarding Page</div> }