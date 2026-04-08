import { useState } from 'react';

// Mini chart component
function MiniChart({ data, color = 'var(--accent)' }) {
  const max = Math.max(...data);
  const w = 100, h = 40;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - (v / max) * h;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={w} height={h} style={{ overflow: 'visible' }}>
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <polyline points={`0,${h} ${points} ${w},${h}`} fill={color} opacity="0.12" stroke="none" />
    </svg>
  );
}

// Stat card component
function StatCard({ label, value, change, trend, chart, icon }) {
  const isPositive = trend > 0;
  const chartData = chart || [20, 35, 28, 42, 38, 50, 45, 60];

  return (
    <div style={{
      background: 'var(--card)',
      border: `1px solid var(--border)`,
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gradient accent */}
      <div style={{
        position: 'absolute',
        top: -40,
        right: -40,
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: isPositive ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <p style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
              {label}
            </p>
            <h3 style={{
              fontSize: 28,
              fontWeight: 800,
              color: 'var(--text)',
              fontFamily: 'var(--font-head)',
            }}>
              {value}
            </h3>
          </div>
          <div style={{ fontSize: 28 }}>{icon}</div>
        </div>

        {/* Chart */}
        <div style={{ marginBottom: 16, height: 40 }}>
          <MiniChart data={chartData} color={isPositive ? 'var(--green)' : 'var(--red)'} />
        </div>

        {/* Change indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 13,
          fontWeight: 700,
          color: isPositive ? 'var(--green)' : 'var(--red)',
        }}>
          <span>{isPositive ? '↑' : '↓'} {Math.abs(change)}%</span>
          <span style={{ color: 'var(--text2)', fontWeight: 500 }}>vs last month</span>
        </div>
      </div>
    </div>
  );
}

export default function GrowthRevenue() {
  const [timeRange, setTimeRange] = useState('month');

  return (
    <div className="page-content">
      {/* ── HEADER */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{
              fontFamily: 'var(--font-head)',
              fontSize: 28,
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: 4,
            }}>Growth & Revenue</h1>
            <p style={{ fontSize: 14, color: 'var(--text2)' }}>Track your ad performance and revenue growth</p>
          </div>

          {/* Time range selector */}
          <div style={{
            display: 'flex',
            background: 'var(--bg2)',
            border: `1px solid var(--border)`,
            borderRadius: 'var(--radius-sm)',
            padding: 4,
            gap: 4,
          }}>
            {['week', 'month', 'quarter', 'year'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                style={{
                  padding: '6px 14px',
                  background: timeRange === range ? 'var(--card)' : 'transparent',
                  color: timeRange === range ? 'var(--text)' : 'var(--text2)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: timeRange === range ? 700 : 500,
                  fontSize: 12,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textTransform: 'capitalize',
                }}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── KEY METRICS GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 16,
        marginBottom: 32,
      }}>
        <StatCard
          label="Total Revenue"
          value="₨847,230"
          change={24.5}
          trend={1}
          icon="💰"
          chart={[30, 42, 35, 55, 48, 65, 72, 85]}
        />
        <StatCard
          label="Active Campaigns"
          value="48"
          change={12}
          trend={1}
          icon="🎯"
          chart={[15, 20, 18, 30, 28, 40, 45, 48]}
        />
        <StatCard
          label="Avg ROAS"
          value="3.8x"
          change={8.2}
          trend={1}
          icon="📈"
          chart={[2.1, 2.4, 2.8, 3.1, 3.2, 3.5, 3.7, 3.8]}
        />
        <StatCard
          label="Total Impressions"
          value="2.3M"
          change={-5.3}
          trend={-1}
          icon="👁️"
          chart={[450, 520, 480, 610, 580, 700, 650, 700]}
        />
      </div>

      {/* ── DETAILED INSIGHTS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: 16,
        marginBottom: 32,
      }}>
        {/* Top Performing Campaigns */}
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
            marginBottom: 16,
          }}>Top Performing Campaigns</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { name: 'Summer Collection 2024', roas: '4.2x', spent: '₨45,200' },
              { name: 'Flash Sale Series', roas: '3.9x', spent: '₨38,500' },
              { name: 'New Product Launch', roas: '3.5x', spent: '₨52,100' },
            ].map((campaign, idx) => (
              <div key={idx} style={{
                paddingBottom: 12,
                borderBottom: idx < 2 ? `1px solid var(--border)` : 'none',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: 13 }}>{campaign.name}</p>
                  <span style={{
                    background: 'var(--green-bg)',
                    color: 'var(--green)',
                    padding: '2px 8px',
                    borderRadius: 4,
                    fontSize: 11,
                    fontWeight: 700,
                  }}>
                    {campaign.roas}
                  </span>
                </div>
                <p style={{ fontSize: 12, color: 'var(--text3)' }}>Spent: {campaign.spent}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Breakdown */}
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
            marginBottom: 16,
          }}>Revenue by Platform</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { platform: 'Facebook Ads', revenue: '₨480,500', pct: 56.7 },
              { platform: 'TikTok Ads', revenue: '₨260,200', pct: 30.7 },
              { platform: 'Google Ads', revenue: '₨106,530', pct: 12.6 },
            ].map((item, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                  <p style={{ fontWeight: 600, color: 'var(--text)' }}>{item.platform}</p>
                  <span style={{ color: 'var(--text2)', fontWeight: 700 }}>{item.revenue}</span>
                </div>
                <div style={{
                  height: 6,
                  background: 'var(--bg3)',
                  borderRadius: 3,
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${item.pct}%`,
                    background: 'var(--accent)',
                    borderRadius: 3,
                  }} />
                </div>
                <p style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4 }}>{item.pct}% of total</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GROWTH INSIGHTS */}
      <div style={{
        background: 'linear-gradient(135deg, var(--accent-dim), var(--blue-dim))',
        border: `1px solid var(--accent)`,
        borderRadius: 'var(--radius-lg)',
        padding: 24,
      }}>
        <h3 style={{
          fontFamily: 'var(--font-head)',
          fontSize: 15,
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: 12,
        }}>💡 Smart Insights</h3>

<ul style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.8 }}>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: 'var(--text)' }}>Best Performing Time:</strong> Your campaigns perform 28% better on Fridays & Saturdays
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: 'var(--text)' }}>Audience Insight:</strong> Ages 25-34 have the highest ROAS at 4.5x
          </li>
          <li>
            <strong style={{ color: 'var(--text)' }}>Recommendation:</strong> Increase budget allocation to TikTok Ads — highest growth rate this month
          </li>
        </ul>
      </div>
    </div>
  );
}