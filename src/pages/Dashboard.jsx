import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { campaigns, weeklyData, user } from '../data/dummy'

// ── Mini sparkline for stat cards
function Sparkline({ color = 'var(--accent)', values = [40, 55, 35, 70, 60, 80, 75] }) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const w = 80, h = 28
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w
    const y = h - ((v - min) / range) * h
    return `${x},${y}`
  }).join(' ')
  return (
    <svg width={w} height={h} style={{ overflow: 'visible' }}>
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <polyline
        points={`0,${h} ${pts} ${w},${h}`}
        fill={color}
        opacity="0.08"
        stroke="none"
      />
    </svg>
  )
}

// ── Platform icon
function PlatIcon({ platform }) {
  const map = {
    meta:   { bg: 'rgba(24,119,242,0.12)', color: '#1877F2', label: 'f' },
    google: { bg: 'rgba(234,67,53,0.12)',  color: '#EA4335', label: 'G' },
    tiktok: { bg: 'rgba(0,0,0,0.07)',      color: '#111',    label: 'TK' },
  }
  const p = map[platform] || map.meta
  return (
    <div style={{
      width: 30, height: 30, borderRadius: 8, flexShrink: 0,
      background: p.bg, color: p.color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 10, fontWeight: 800,
    }}>{p.label}</div>
  )
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [chartMetric, setChartMetric] = useState('impressions')
  const [hoveredBar, setHoveredBar] = useState(null)

  const liveCampaigns = campaigns.filter(c => c.status === 'live')
  const totalImpressions = campaigns.reduce((sum, c) => sum + (c.impressions || 0), 0)
  const totalSpent = campaigns.reduce((sum, c) => sum + c.spent, 0)
  const totalClicks = campaigns.reduce((sum, c) => sum + (c.clicks || 0), 0)
  const avgCTR = (campaigns.filter(c => c.ctr !== '—').reduce((s, c) => s + parseFloat(c.ctr), 0) / campaigns.filter(c => c.ctr !== '—').length).toFixed(2)

  const maxBarVal = Math.max(...weeklyData.map(d => d[chartMetric]))

  return (
    <div className="page-content">

      {/* ── HERO BANNER */}
      <div style={{
        background: 'linear-gradient(135deg, #0f52ba 0%, #1a6fd4 60%, #0a3d8f 100%)',
        borderRadius: 16,
        padding: '32px 32px 28px',
        marginBottom: 24,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 12px 40px rgba(15,82,186,0.25)',
      }}>
        {/* bg orbs */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-40, right:-40, width:220, height:220, borderRadius:'50%', background:'rgba(255,255,255,0.04)' }} />
          <div style={{ position:'absolute', bottom:-60, left:'30%', width:280, height:280, borderRadius:'50%', background:'rgba(255,255,255,0.03)' }} />
          <div style={{ position:'absolute', top:20, right:'20%', width:1, height:120, background:'rgba(255,255,255,0.08)' }} />
        </div>

        <div style={{ position:'relative', zIndex:1 }}>
          {/* Live badge */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            background:'rgba(255,255,255,0.12)',
            border:'1px solid rgba(255,255,255,0.18)',
            borderRadius:20, padding:'6px 14px',
            fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.9)',
            marginBottom:16, backdropFilter:'blur(8px)',
            fontFamily:'monospace',
          }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:'#10b981', boxShadow:'0 0 8px #10b981', display:'inline-block', animation:'heroDotPulse 2s ease-in-out infinite' }} />
            {liveCampaigns.length} campaigns live · ₨{(totalSpent/1000).toFixed(1)}K spent this month
          </div>

          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:16 }}>
            <div>
              <h1 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(22px,4vw,30px)', fontWeight:800, color:'#fff', margin:'0 0 8px', lineHeight:1.2 }}>
                Good morning, {user.name.split(' ')[0]} 👋
              </h1>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.78)', lineHeight:1.6, margin:'0 0 24px', maxWidth:480 }}>
                Your ads reached <strong style={{ color:'#fff', fontWeight:700 }}>{(totalImpressions/1000).toFixed(1)}K people</strong> across all platforms this week. Avg CTR: <strong style={{ color:'#facc15' }}>{avgCTR}%</strong>
              </p>
              <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                <button
                  onClick={() => navigate('/create')}
                  style={{ background:'#fff', color:'#0f52ba', border:'none', borderRadius:9, padding:'11px 22px', fontSize:13, fontWeight:700, cursor:'pointer', display:'flex', alignItems:'center', gap:6, transition:'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
                >
                  ➕ New Campaign
                </button>
                <button
                  onClick={() => navigate('/ai')}
                  style={{ background:'rgba(255,255,255,0.12)', color:'#fff', border:'1px solid rgba(255,255,255,0.25)', borderRadius:9, padding:'11px 20px', fontSize:13, fontWeight:600, cursor:'pointer', backdropFilter:'blur(8px)', transition:'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.12)'}
                >
                  ✨ AI Suggestions
                </button>
              </div>
            </div>

            {/* Quick stats strip on right */}
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              {[
                { label:'Leads', value:'27', sub:'this week', up:true },
                { label:'Best CTR', value:`${avgCTR}%`, sub:'avg across ads', up:true },
                { label:'Cost/Lead', value:'₨311', sub:'↓ 12% better', up:true },
              ].map((s,i) => (
                <div key={i} style={{
                  background:'rgba(255,255,255,0.1)',
                  border:'1px solid rgba(255,255,255,0.15)',
                  borderRadius:12, padding:'12px 16px',
                  backdropFilter:'blur(8px)', minWidth:110,
                  textAlign:'center',
                }}>
                  <div style={{ fontSize:18, fontWeight:800, color:'#fff', fontFamily:'var(--font-head)' }}>{s.value}</div>
                  <div style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.6)', textTransform:'uppercase', letterSpacing:'0.06em', marginTop:2 }}>{s.label}</div>
                  <div style={{ fontSize:10, color:'#10b981', marginTop:3, fontWeight:600 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── STAT CARDS */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginBottom:20 }}>
        {[
          {
            label:'Active Campaigns', value:liveCampaigns.length, suffix:'',
            change:'↑ 1 from last week', up:true,
            spark:[1,2,2,3,2,3,3], color:'#0f52ba',
            icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1" y="1" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="10" y="1" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="1" y="10" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="10" y="10" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/></svg>,
          },
          {
            label:'Total Impressions', value:`${(totalImpressions/1000).toFixed(1)}K`, suffix:'',
            change:'↑ 12% this week', up:true,
            spark:[40,55,35,70,60,80,75], color:'#8b5cf6',
            icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 9C3.5 4 6 2 9 2s5.5 2 7.5 7c-2 5-4.5 7-7.5 7S3.5 14 1.5 9z" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>,
          },
          {
            label:'Budget Used', value:`₨${(totalSpent/1000).toFixed(1)}K`, suffix:'',
            change:'of ₨50K total', up:null,
            progress: totalSpent / 50000,
            spark:[20,35,45,50,60,68,56], color:'#f97316',
            icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1" y="4" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1 8h16" stroke="currentColor" strokeWidth="1.4"/><circle cx="5" cy="12" r="1" fill="currentColor"/></svg>,
          },
          {
            label:'Total Clicks', value:totalClicks.toLocaleString(), suffix:'',
            change:'↑ 8% increase', up:true,
            spark:[30,45,38,62,55,70,65], color:'#10b981',
            icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 13L6.5 8l3 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 5h3M13 5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
          },
        ].map((stat, i) => (
          <div key={i} className="stat-card" style={{
            animationDelay:`${i*0.07}s`,
            cursor:'default',
          }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
              <div style={{ width:36, height:36, borderRadius:9, background:`${stat.color}15`, color:stat.color, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                {stat.icon}
              </div>
              <Sparkline values={stat.spark} color={stat.color} />
            </div>
            <div style={{ fontFamily:'var(--font-head)', fontSize:'clamp(22px,3vw,28px)', fontWeight:800, color:'var(--text)', lineHeight:1, marginBottom:4 }}>
              {stat.value}
            </div>
            <div style={{ fontSize:11, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:6 }}>
              {stat.label}
            </div>
            {stat.progress !== undefined ? (
              <div>
                <div style={{ height:4, background:'var(--border)', borderRadius:4, overflow:'hidden', marginBottom:4 }}>
                  <div style={{ height:'100%', width:`${stat.progress*100}%`, background:stat.color, borderRadius:4, transition:'width 0.6s ease' }} />
                </div>
                <div style={{ fontSize:11, color:'var(--text3)' }}>{stat.change}</div>
              </div>
            ) : (
              <div style={{ fontSize:11, fontWeight:600, color: stat.up ? 'var(--green)' : 'var(--text3)' }}>
                {stat.change}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── CHARTS ROW */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:20 }}>

        {/* Weekly Performance Chart */}
        <div className="card" style={{ padding:20 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20, gap:10, flexWrap:'wrap' }}>
            <div>
              <div style={{ fontFamily:'var(--font-head)', fontSize:15, fontWeight:700, color:'var(--text)' }}>Weekly Performance</div>
              <div style={{ fontSize:11, color:'var(--text3)', marginTop:2 }}>Last 7 days · all platforms</div>
            </div>
            <select
              value={chartMetric}
              onChange={e => setChartMetric(e.target.value)}
              style={{ padding:'6px 10px', fontSize:11, fontWeight:600, background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:7, color:'var(--text)', outline:'none', cursor:'pointer' }}
            >
              <option value="impressions">Impressions</option>
              <option value="clicks">Clicks</option>
            </select>
          </div>

          {/* Bar chart */}
          <div style={{ display:'flex', alignItems:'flex-end', gap:6, height:130, paddingBottom:4 }}>
            {weeklyData.map((d, i) => {
              const val = d[chartMetric]
              const pct = (val / maxBarVal) * 100
              const isHovered = hoveredBar === i
              const isWeekend = d.day === 'Sat' || d.day === 'Sun'
              return (
                <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:4, height:'100%', justifyContent:'flex-end' }}>
                  <div style={{
                    width:'100%', borderRadius:'5px 5px 0 0',
                    height:`${pct}%`, minHeight:4,
                    background: isHovered
                      ? 'var(--accent)'
                      : isWeekend
                        ? 'linear-gradient(180deg, #2563eb 0%, #1d4ed8 100%)'
                        : 'linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)',
                    transition:'all 0.2s ease',
                    cursor:'pointer',
                    boxShadow: isHovered ? '0 0 12px rgba(250,204,21,0.4)' : 'none',
                    transform: isHovered ? 'scaleX(1.1)' : 'scaleX(1)',
                    position:'relative',
                  }}
                    onMouseEnter={() => setHoveredBar(i)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    {isHovered && (
                      <div style={{
                        position:'absolute', bottom:'calc(100% + 6px)', left:'50%', transform:'translateX(-50%)',
                        background:'var(--text)', color:'var(--card)', padding:'3px 7px',
                        borderRadius:5, fontSize:10, fontWeight:700, whiteSpace:'nowrap', zIndex:10,
                      }}>
                        {chartMetric === 'impressions' ? `${(val/1000).toFixed(1)}K` : val}
                      </div>
                    )}
                  </div>
                  <div style={{ fontSize:9, color: isWeekend ? 'var(--text)' : 'var(--text3)', fontWeight: isWeekend ? 700 : 600, textTransform:'uppercase', letterSpacing:'0.04em' }}>
                    {d.day}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Chart bottom row */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:14 }}>
            <div style={{ background:'var(--bg2)', borderRadius:9, padding:'10px 12px' }}>
              <div style={{ fontSize:10, color:'var(--text3)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:3 }}>Best day</div>
              <div style={{ fontFamily:'var(--font-head)', fontSize:15, fontWeight:800, color:'var(--text)' }}>Saturday</div>
              <div style={{ fontSize:11, color:'var(--green)', fontWeight:600, marginTop:2 }}>11,200 impressions</div>
            </div>
            <div style={{ background:'var(--bg2)', borderRadius:9, padding:'10px 12px' }}>
              <div style={{ fontSize:10, color:'var(--text3)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:3 }}>Cost / lead</div>
              <div style={{ fontFamily:'var(--font-head)', fontSize:15, fontWeight:800, color:'var(--accent)' }}>₨311</div>
              <div style={{ fontSize:11, color:'var(--green)', fontWeight:600, marginTop:2 }}>↓ 12% better</div>
            </div>
          </div>
        </div>

        {/* Platform Breakdown + AI Tip */}
        <div className="card" style={{ padding:20 }}>
          <div style={{ fontFamily:'var(--font-head)', fontSize:15, fontWeight:700, color:'var(--text)', marginBottom:16 }}>Platform Breakdown</div>

          {[
            { label:'Meta (FB + IG)', pct:72, color:'#1877F2', icon:'f', platform:'meta' },
            { label:'Google Search', pct:28, color:'#EA4335', icon:'G', platform:'google' },
            { label:'TikTok', pct:0, color:'#94a3b8', icon:'TK', platform:'tiktok' },
          ].map((p, i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
              <PlatIcon platform={p.platform} />
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontSize:12, fontWeight:600, color:'var(--text)', marginBottom:4 }}>{p.label}</div>
                <div style={{ height:5, background:'var(--border)', borderRadius:4, overflow:'hidden' }}>
                  <div style={{ height:'100%', width:`${p.pct}%`, background:p.color, borderRadius:4, transition:'width 0.6s ease', boxShadow: p.pct ? `0 0 6px ${p.color}50` : 'none' }} />
                </div>
              </div>
              <div style={{ fontSize:12, fontWeight:700, color: p.pct ? 'var(--text)' : 'var(--text3)', fontFamily:'monospace', flexShrink:0, minWidth:32, textAlign:'right' }}>
                {p.pct ? `${p.pct}%` : '—'}
              </div>
            </div>
          ))}

          <div style={{ height:1, background:'var(--border)', margin:'14px 0' }} />

          {/* Top ad */}
          <div style={{ fontSize:12, fontWeight:700, color:'var(--text)', marginBottom:8 }}>Top performing ad</div>
          <div style={{ background:'var(--bg2)', borderRadius:9, padding:'10px 12px', marginBottom:12 }}>
            <div style={{ fontSize:12, fontWeight:700, color:'var(--text)', marginBottom:2 }}>Eid Special Offer</div>
            <div style={{ fontSize:11, color:'var(--text3)', marginBottom:6 }}>Meta · Restaurant · Ahmed's</div>
            <div style={{ display:'flex', justifyContent:'space-between' }}>
              <span style={{ fontSize:11, fontWeight:700, color:'var(--green)' }}>✓ 1.54% CTR</span>
              <span style={{ fontSize:11, color:'var(--text3)' }}>340 clicks</span>
            </div>
          </div>

          {/* AI tip */}
          <div style={{
            background:'linear-gradient(135deg, rgba(15,82,186,0.06) 0%, rgba(15,82,186,0.02) 100%)',
            border:'1px solid rgba(15,82,186,0.15)',
            borderRadius:10, padding:'10px 12px',
            display:'flex', alignItems:'flex-start', gap:10,
          }}>
            <div style={{ width:32, height:32, borderRadius:8, background:'#0f52ba', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:14 }}>
              ✨
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:11, fontWeight:700, color:'#0f52ba', marginBottom:3 }}>AI Insight</div>
              <div style={{ fontSize:11, color:'var(--text2)', lineHeight:1.5 }}>
                Video creative on your Eid ad could boost reach by <strong>40%</strong>. Try it now →
              </div>
              <button
                onClick={() => navigate('/ai')}
                style={{ marginTop:8, padding:'5px 12px', fontSize:10, fontWeight:700, background:'#0f52ba', color:'#fff', border:'none', borderRadius:6, cursor:'pointer' }}
              >
                Open AI Studio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── ACTIVE CAMPAIGNS TABLE */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12, flexWrap:'wrap', gap:10 }}>
        <div>
          <div style={{ fontFamily:'var(--font-head)', fontSize:15, fontWeight:700, color:'var(--text)' }}>Active Campaigns</div>
          <div style={{ fontSize:11, color:'var(--text3)', marginTop:2 }}>{liveCampaigns.length} campaigns running live</div>
        </div>
        <button
          onClick={() => navigate('/campaigns')}
          style={{ background:'transparent', border:'1px solid var(--border)', borderRadius:7, padding:'7px 14px', fontSize:12, fontWeight:600, color:'var(--text2)', cursor:'pointer', transition:'all 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--text)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text2)' }}
        >
          View all →
        </button>
      </div>

      <div className="table-wrap">
        {/* Table header */}
        <div style={{
          display:'grid', gridTemplateColumns:'2.5fr 1fr 1fr 1fr 100px',
          padding:'10px 20px', background:'var(--bg2)',
          borderBottom:'1px solid var(--border)',
          fontSize:10, fontWeight:700, color:'var(--text3)',
          textTransform:'uppercase', letterSpacing:'0.08em',
          minWidth:520,
        }}>
          <div>Campaign</div>
          <div>Impressions</div>
          <div>Clicks</div>
          <div>Spent</div>
          <div>Status</div>
        </div>

        {liveCampaigns.slice(0, 3).map((c, i) => (
          <div
            key={c.id}
            onClick={() => navigate('/campaigns')}
            style={{
              display:'grid', gridTemplateColumns:'2.5fr 1fr 1fr 1fr 100px',
              padding:'14px 20px', alignItems:'center',
              borderBottom: i < liveCampaigns.slice(0,3).length - 1 ? '1px solid var(--border)' : 'none',
              cursor:'pointer', transition:'background 0.15s',
              animation:`slideUp 0.4s ease both`,
              animationDelay:`${i*0.08}s`,
              minWidth:520,
            }}
            onMouseEnter={e => e.currentTarget.style.background='var(--bg2)'}
            onMouseLeave={e => e.currentTarget.style.background='transparent'}
          >
            {/* Campaign name + platform */}
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <PlatIcon platform={c.platform} />
              <div>
                <div style={{ fontSize:13, fontWeight:600, color:'var(--text)' }}>{c.title}</div>
                <div style={{ fontSize:10, color:'var(--text3)', marginTop:1 }}>{c.business} · {c.city}</div>
              </div>
            </div>

            <div style={{ fontSize:13, fontWeight:600, color:'var(--text)' }}>
              {c.impressions ? c.impressions.toLocaleString() : '—'}
            </div>
            <div style={{ fontSize:13, fontWeight:600, color:'var(--text)' }}>
              {c.clicks || '—'}
            </div>
            <div style={{ fontSize:13, fontWeight:600, color:'var(--text)' }}>
              ₨{c.spent.toLocaleString()}
            </div>

            {/* Status badge */}
            <div>
              <span style={{
                display:'inline-flex', alignItems:'center', gap:5,
                padding:'4px 10px', borderRadius:20,
                fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.04em',
                background:'rgba(16,185,129,0.12)', color:'var(--green)',
              }}>
                <span style={{ width:5, height:5, borderRadius:'50%', background:'var(--green)', animation:'pulseDot 2s infinite', display:'inline-block' }} />
                Live
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Scoped animations */}
      <style>{`
        @keyframes heroDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
