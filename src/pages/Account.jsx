import { useState } from 'react';

const platforms = [
  { id: 1, name: 'Facebook Ads', icon: '📘', status: 'connected', lastSync: '2 mins ago', spend: '₨45,230' },
  { id: 2, name: 'TikTok Ads', icon: '🎵', status: 'connected', lastSync: '5 mins ago', spend: '₨32,100' },
  { id: 3, name: 'Google Ads', icon: '🔍', status: 'pending', lastSync: 'Never', spend: '—' },
  { id: 4, name: 'Instagram Ads', icon: '📸', status: 'disconnected', lastSync: '3 days ago', spend: '₨18,450' },
];

export default function Account() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  return (
    <div className="page-content">
      {/* ── HEADER */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{
          fontFamily: 'var(--font-head)',
          fontSize: 28,
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: 8,
        }}>Connected Ad Accounts</h1>
        <p style={{ color: 'var(--text2)', fontSize: 14 }}>
          Manage your ad platform connections and sync data in real-time
        </p>
      </div>

      {/* ── CONNECTED ACCOUNTS GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 16,
        marginBottom: 32,
      }}>
        {platforms.map((p) => {
          const isConnected = p.status === 'connected';
          const statusColor = isConnected ? 'var(--green)' : p.status === 'pending' ? 'var(--amber)' : 'var(--text3)';
          const statusBg = isConnected ? 'var(--green-bg)' : p.status === 'pending' ? 'var(--amber-bg)' : 'rgba(148,163,184,0.1)';

          return (
            <div
              key={p.id}
              onClick={() => setSelectedPlatform(p.id)}
              style={{
                background: 'var(--card)',
                border: `1px solid ${selectedPlatform === p.id ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: 20,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: selectedPlatform === p.id ? '0 0 0 3px var(--accent-dim)' : 'var(--shadow)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                if (selectedPlatform !== p.id) {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent-dim)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedPlatform !== p.id) {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'var(--shadow)';
                }
              }}
            >
              {/* Gradient accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 120,
                height: 120,
                background: isConnected ? 'rgba(16,185,129,0.08)' : 'rgba(148,163,184,0.05)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Platform header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 32 }}>{p.icon}</span>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-head)',
                        fontSize: 15,
                        fontWeight: 700,
                        color: 'var(--text)',
                        marginBottom: 2,
                      }}>{p.name}</h3>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        fontSize: 11,
                        fontWeight: 700,
                        color: statusColor,
                        background: statusBg,
                        padding: '4px 10px',
                        borderRadius: 12,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>
                        <span style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: statusColor,
                          display: 'inline-block',
                        }} />
                        {p.status === 'connected' ? '✓ Connected' : p.status === 'pending' ? '⏳ Pending' : 'Not Connected'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 12,
                  marginBottom: 16,
                  padding: '12px',
                  background: 'var(--bg2)',
                  borderRadius: 'var(--radius-sm)',
                }}>
                  <div>
                    <p style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Last Sync
                    </p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>
                      {p.lastSync}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Total Spend
                    </p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: isConnected ? 'var(--blue)' : 'var(--text3)' }}>
                      {p.spend}
                    </p>
                  </div>
                </div>

                {/* Action buttons */}
                <div style={{
                  display: 'flex',
                  gap: 8,
                }}>
                  <button style={{
                    flex: 1,
                    padding: '10px 12px',
                    background: isConnected ? 'var(--accent)' : 'var(--blue)',
                    color: isConnected ? 'var(--accent-txt)' : '#fff',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {isConnected ? '⚙️ Manage' : '🔗 Connect'}
                  </button>
                  {isConnected && (
                    <button style={{
                      padding: '10px 12px',
                      background: 'var(--bg3)',
                      color: 'var(--text)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 600,
                      fontSize: 12,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--red-bg)';
                        e.currentTarget.style.color = 'var(--red)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--bg3)';
                        e.currentTarget.style.color = 'var(--text)';
                      }}
                    >
                      🔌 Disconnect
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── INFO SECTION */}
      <div style={{
        background: 'var(--card)',
        border: `1px solid var(--border)`,
        borderRadius: 'var(--radius-lg)',
        padding: 20,
      }}>
        <h3 style={{
          fontFamily: 'var(--font-head)',
          fontSize: 15,
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: 12,
        }}>💡 How to Connect</h3>
        <ul style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.8 }}>
          <li style={{ marginBottom: 8 }}>✓ Click "Connect" on any platform to authorize Addvally</li>
          <li style={{ marginBottom: 8 }}>✓ Data syncs automatically every 5 minutes for connected accounts</li>
          <li>✓ You can manage multiple accounts per platform</li>
        </ul>
      </div>
    </div>
  );
}