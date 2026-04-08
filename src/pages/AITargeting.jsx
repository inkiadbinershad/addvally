import { useState } from 'react';

export default function AITargeting() {
  const [step, setStep] = useState('list'); // list, delete-confirm, deleted
  const [selectedId, setSelectedId] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [reason, setReason] = useState('');

  const targetingRules = [
    {
      id: 1,
      name: 'Summer Sale 2024',
      desc: 'Ages 25-45, Interest in fashion & lifestyle',
      platforms: ['Facebook', 'Instagram'],
      status: 'active',
      campaigns: 3,
      impressions: '1.2M',
    },
    {
      id: 2,
      name: 'Tech Enthusiasts',
      desc: 'High-income earners interested in gadgets',
      platforms: ['Google Ads', 'TikTok'],
      status: 'active',
      campaigns: 5,
      impressions: '2.8M',
    },
    {
      id: 3,
      name: 'Budget Conscious',
      desc: 'Price-sensitive buyers, deal hunters',
      platforms: ['Facebook'],
      status: 'paused',
      campaigns: 2,
      impressions: '450K',
    },
  ];

  const selected = targetingRules.find(r => r.id === selectedId);

  if (step === 'list') {
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
          }}>AI Targeting Rules</h1>
          <p style={{ fontSize: 14, color: 'var(--text2)' }}>
            Manage your AI-powered audience targeting configurations
          </p>
        </div>

        {/* ── TARGETING RULES LIST */}
        <div style={{ display: 'grid', gap: 16, marginBottom: 32 }}>
          {targetingRules.map((rule) => (
            <div
              key={rule.id}
              style={{
                background: 'var(--card)',
                border: `1px solid var(--border)`,
                borderRadius: 'var(--radius-lg)',
                padding: 20,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent-dim)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Status accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: rule.status === 'active' ? 'var(--green)' : 'var(--text3)',
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 8,
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: 16,
                      fontWeight: 700,
                      color: 'var(--text)',
                    }}>
                      {rule.name}
                    </h3>
                    <span style={{
                      background: rule.status === 'active' ? 'var(--green-bg)' : 'var(--bg3)',
                      color: rule.status === 'active' ? 'var(--green)' : 'var(--text3)',
                      padding: '3px 10px',
                      borderRadius: 12,
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}>
                      {rule.status}
                    </span>
                  </div>

                  <p style={{
                    fontSize: 13,
                    color: 'var(--text2)',
                    marginBottom: 12,
                  }}>
                    {rule.desc}
                  </p>

                  <div style={{
                    display: 'flex',
                    gap: 20,
                    fontSize: 12,
                    color: 'var(--text3)',
                  }}>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', marginBottom: 2 }}>Platforms</p>
                      <p style={{ fontWeight: 600 }}>{rule.platforms.join(', ')}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', marginBottom: 2 }}>Active Campaigns</p>
                      <p style={{ fontWeight: 600 }}>{rule.campaigns}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', marginBottom: 2 }}>Impressions</p>
                      <p style={{ fontWeight: 600 }}>{rule.impressions}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedId(rule.id);
                    setStep('delete-confirm');
                  }}
                  style={{
                    padding: '8px 16px',
                    background: 'var(--red-bg)',
                    color: 'var(--red)',
                    border: `1px solid var(--red)`,
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--red)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--red-bg)';
                    e.currentTarget.style.color = 'var(--red)';
                  }}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── INFO */}
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
          }}>💡 About AI Targeting</h3>
          <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7 }}>
            AI Targeting Rules are audience segments created by our machine learning algorithms. They help optimize your campaigns for better performance. You can delete any rule, but active campaigns using it will need to be reconfigured.
          </p>
        </div>
      </div>
    );
  }

  if (step === 'delete-confirm' && selected) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--bg2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <div style={{ width: '100%', maxWidth: 500 }}>
          <div style={{
            background: 'var(--card)',
            border: `2px solid var(--red)`,
            borderRadius: 'var(--radius-lg)',
            padding: '40px 32px',
            boxShadow: 'var(--shadow-lg)',
          }}>
            {/* Icon */}
            <div style={{
              fontSize: 48,
              marginBottom: 20,
              textAlign: 'center',
            }}>⚠️</div>

            {/* Title */}
            <h1 style={{
              fontFamily: 'var(--font-head)',
              fontSize: 22,
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: 8,
              textAlign: 'center',
            }}>
              Delete Targeting Rule?
            </h1>

            <p style={{
              fontSize: 13,
              color: 'var(--text2)',
              marginBottom: 20,
              textAlign: 'center',
              lineHeight: 1.6,
            }}>
              You're about to permanently delete <strong>{selected.name}</strong>. This action cannot be undone.
            </p>

            {/* Impact */}
            <div style={{
              background: 'var(--red-bg)',
              border: `1px solid var(--red)`,
              borderRadius: 'var(--radius-lg)',
              padding: 16,
              marginBottom: 20,
            }}>
              <h3 style={{
                color: 'var(--red)',
                fontWeight: 700,
                fontSize: 13,
                marginBottom: 8,
              }}>Impact Summary:</h3>
              <ul style={{
                color: 'var(--red)',
                fontSize: 12,
                lineHeight: 1.6,
              }}>
                <li>• <strong>{selected.campaigns}</strong> active campaigns will lose this targeting</li>
                <li>• <strong>{selected.impressions}</strong> estimated impressions affected</li>
                <li>• Campaigns will default to broader audience</li>
              </ul>
            </div>

            {/* Reason field */}
            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: 8,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Why are you deleting this? (Optional)
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'var(--bg2)',
                  border: `1px solid var(--border)`,
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text)',
                  fontSize: 13,
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                }}
              >
                <option value="">Select a reason...</option>
                <option value="poor-performance">Poor performance</option>
                <option value="no-longer-needed">No longer needed</option>
                <option value="test-failed">Test failed</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Confirmation checkbox */}
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 24,
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
            }}>
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                style={{
                  width: 18,
                  height: 18,
                  cursor: 'pointer',
                  accentColor: 'var(--red)',
                }}
              />
              <span style={{ color: 'var(--text2)' }}>
                I understand this action is permanent
              </span>
            </label>

            {/* Buttons */}
            <div style={{
              display: 'flex',
              gap: 12,
            }}>
              <button
                onClick={() => setStep('list')}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  background: 'var(--bg2)',
                  border: `1px solid var(--border)`,
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text)',
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg2)';
                }}
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  if (confirmed) {
                    setStep('deleted');
                  }
                }}
                disabled={!confirmed}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  background: confirmed ? 'var(--red)' : 'var(--bg3)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  color: confirmed ? '#fff' : 'var(--text3)',
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: confirmed ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (confirmed) {
                    e.currentTarget.style.background = '#d32f2f';
                  }
                }}
                onMouseLeave={(e) => {
                  if (confirmed) {
                    e.currentTarget.style.background = 'var(--red)';
                  }
                }}
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'deleted' && selected) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--bg2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <div style={{ width: '100%', maxWidth: 500, textAlign: 'center' }}>
          <div style={{
            background: 'var(--card)',
            border: `1px solid var(--green)`,
            borderRadius: 'var(--radius-lg)',
            padding: '40px 32px',
            boxShadow: 'var(--shadow-lg)',
          }}>
            {/* Icon */}
            <div style={{ fontSize: 64, marginBottom: 20 }}>✓</div>

            {/* Title */}
            <h1 style={{
              fontFamily: 'var(--font-head)',
              fontSize: 24,
              fontWeight: 700,
              color: 'var(--green)',
              marginBottom: 12,
            }}>
              Targeting Rule Deleted
            </h1>

            <p style={{
              fontSize: 14,
              color: 'var(--text2)',
              marginBottom: 28,
              lineHeight: 1.6,
            }}>
              <strong>{selected.name}</strong> has been permanently deleted. Your affected campaigns have been updated.
            </p>

            <button
              onClick={() => {
                setStep('list');
                setSelectedId(null);
                setConfirmed(false);
                setReason('');
              }}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--green)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 700,
                fontSize: 13,
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
              Back to Targeting Rules
            </button>
          </div>
        </div>
      </div>
    );
  }
}