// src/pages/Notifications.jsx
import { useState } from 'react'

export default function Notifications() {
  const [notifications] = useState([
    {
      id: 1,
      title: "Campaign Live!",
      message: "Your Eid Special Offer campaign is now live on Meta & Instagram.",
      time: "2m ago",
      read: false,
      type: "success"
    },
    {
      id: 2,
      title: "Budget Alert",
      message: "Your daily budget for 'Karachi Restaurant Promo' is 85% used.",
      time: "47m ago",
      read: false,
      type: "warning"
    },
    {
      id: 3,
      title: "AI Suggestion Ready",
      message: "Addvally AI found 3 new high-performing Urdu + English ad copies.",
      time: "3h ago",
      read: true,
      type: "info"
    },
    {
      id: 4,
      title: "Campaign Approved",
      message: "Your TikTok campaign 'Summer BBQ' has been approved.",
      time: "Yesterday",
      read: true,
      type: "success"
    }
  ])

  const markAllRead = () => {
    // In real app this would update state
    alert("All notifications marked as read!")
  }

  return (
    <div className="page-content" style={{ 
      minHeight: '100vh', 
      background: 'var(--bg2)', 
      padding: '32px 40px' 
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Notifications</h1>
            <p style={{ color: 'var(--text3)', marginTop: 4 }}>Stay updated with campaigns and AI insights</p>
          </div>
          <button 
            onClick={markAllRead}
            style={{ 
              padding: '10px 24px', 
              background: '#facc15', 
              color: '#000', 
              border: 'none', 
              borderRadius: 8, 
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Mark all as read
          </button>
        </div>

        <div className="card">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                gap: 16,
                background: notif.read ? 'transparent' : '#facc1520',
              }}
            >
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: notif.type === 'success' ? '#16a34a' : notif.type === 'warning' ? '#facc15' : '#0f52ba',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                flexShrink: 0
              }}>
                {notif.type === 'success' ? '🚀' : notif.type === 'warning' ? '⚠️' : '💡'}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 700 }}>{notif.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--text3)' }}>{notif.time}</div>
                </div>
                <div style={{ marginTop: 4, color: 'var(--text2)', lineHeight: 1.5 }}>
                  {notif.message}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 40, color: 'var(--text3)', fontSize: 13 }}>
          No more notifications
        </p>
      </div>
    </div>
  )
}