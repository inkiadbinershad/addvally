// src/pages/Campaigns.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { campaigns } from '../data/dummy'

export default function Campaigns() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all') // all, live, draft, paused

  const filteredCampaigns = campaigns.filter(c => {
    if (filter === 'all') return true
    if (filter === 'live') return c.status === 'live'
    if (filter === 'draft') return c.status === 'draft'
    if (filter === 'paused') return c.status === 'paused'
    return true
  })

  return (
    <div className="page-content" style={{ padding: '32px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>My Campaigns</h1>
            <p style={{ color: 'var(--text3)', marginTop: 4 }}>Manage and track all your ad campaigns</p>
          </div>
          <button 
            className="btn-primary"
            onClick={() => navigate('/create')}
            style={{ padding: '12px 24px', fontSize: 15 }}
          >
            + New Campaign
          </button>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {[
            { label: 'All Campaigns', value: 'all' },
            { label: 'Live', value: 'live' },
            { label: 'Draft', value: 'draft' },
            { label: 'Paused', value: 'paused' }
          ].map(item => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              style={{
                padding: '8px 20px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                background: filter === item.value ? 'var(--accent)' : 'var(--bg2)',
                color: filter === item.value ? '#000' : 'var(--text)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Campaigns Table */}
        <div className="card">
          <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border)', fontSize: 13, fontWeight: 700, color: 'var(--text3)', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 16 }}>
            <div>CAMPAIGN</div>
            <div>PLATFORM</div>
            <div>IMPRESSIONS</div>
            <div>CLICKS</div>
            <div>SPENT</div>
            <div>STATUS</div>
          </div>

          {filteredCampaigns.map(c => (
            <div
              key={c.id}
              style={{
                padding: '18px 24px',
                borderBottom: '1px solid var(--border)',
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                gap: 16,
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/dashboard')}
            >
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text)' }}>{c.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text3)' }}>{c.business} • {c.city}</div>
              </div>
              <div style={{ fontSize: 20 }}>{c.platform === 'meta' ? '📘' : c.platform === 'google' ? '🔍' : '🎵'}</div>
              <div style={{ fontWeight: 600 }}>{c.impressions?.toLocaleString() || '—'}</div>
              <div style={{ fontWeight: 600 }}>{c.clicks || '—'}</div>
              <div style={{ fontWeight: 600 }}>₨{c.spent.toLocaleString()}</div>
              <div>
                <span className={`badge badge-${c.status}`}>
                  {c.status === 'live' && <span style={{ display: 'inline-block', width: 6, height: 6, background: '#16a34a', borderRadius: '50%', marginRight: 6 }} />}
                  {c.status === 'live' ? 'Live' : c.status === 'draft' ? 'Draft' : 'Paused'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCampaigns.length === 0 && (
          <div style={{ textAlign: 'center', padding: 60, color: 'var(--text3)' }}>
            No campaigns found in this filter.
          </div>
        )}
      </div>
    </div>
  )
}