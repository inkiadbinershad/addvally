// src/pages/Settings.jsx
import { useState } from 'react'

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="page-content" style={{ padding: '32px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-hdr">
          <div>
            <div className="section-title">Settings</div>
            <div className="section-sub">Manage your account & preferences</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 24 }}>
          {/* Sidebar Tabs */}
          <div style={{ width: 240, flexShrink: 0 }}>
            <div className="card" style={{ padding: 8 }}>
              {[
                { id: 'profile', label: 'Profile' },
                { id: 'account', label: 'Connected Accounts' },
                { id: 'notifications', label: 'Notifications' },
                { id: 'billing', label: 'Billing' },
              ].map(tab => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '14px 20px',
                    borderRadius: 10,
                    background: activeTab === tab.id ? '#facc15' : 'transparent',
                    color: activeTab === tab.id ? '#000' : 'var(--text)',
                    fontWeight: 600,
                    marginBottom: 4,
                    cursor: 'pointer'
                  }}
                >
                  {tab.label}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div style={{ flex: 1 }}>
            {activeTab === 'profile' && (
              <div className="card">
                <h3 style={{ marginBottom: 20 }}>Profile Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input className="form-input" defaultValue="Ahmed Khan" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Business Name</label>
                    <input className="form-input" defaultValue="Ahmed's Restaurant" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" defaultValue="ahmed@restaurant.pk" />
                </div>
                <button className="btn-primary" style={{ marginTop: 16 }}>Save Changes</button>
              </div>
            )}

            {activeTab === 'account' && (
              <div className="card">
                <h3 style={{ marginBottom: 20 }}>Connected Ad Accounts</h3>
                <p style={{ color: 'var(--text2)' }}>Your Meta, Google & TikTok accounts will appear here.</p>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="card">
                <h3 style={{ marginBottom: 20 }}>Notification Preferences</h3>
                <p style={{ color: 'var(--text2)' }}>Manage what notifications you want to receive.</p>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="card">
                <h3 style={{ marginBottom: 20 }}>Billing Settings</h3>
                <p style={{ color: 'var(--text2)' }}>Manage your payment methods and subscription.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}