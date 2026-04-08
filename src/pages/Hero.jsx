export default function Hero() {
  return (
    <div className="dashboard-hero" style={{
      background: 'linear-gradient(135deg, var(--blue) 0%, var(--blue-dim) 100%)',
      borderRadius: 'var(--radius-lg)',
      padding: '36px 32px',
      color: 'white',
      marginBottom: '28px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 12px 40px rgba(15,82,186,0.15)'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)',
        opacity: 0.6
      }} />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 12, 
          background: 'rgba(255,255,255,0.15)', 
          padding: '8px 16px', 
          borderRadius: '20px', 
          fontFamily: 'DM Mono', 
          fontSize: 11, 
          fontWeight: 700, 
          color: 'rgba(255,255,255,0.9)',
          marginBottom: 16,
          maxWidth: 'fit-content'
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)' }} />
          3 campaigns live • ₨8.4K spent this month
        </div>
        
        <div style={{ 
          fontFamily: 'Syne', 
          fontSize: 32, 
          fontWeight: 800, 
          lineHeight: 1.2, 
          marginBottom: 8 
        }}>
          Good morning, Ahmed 👋
        </div>
        
        <div style={{ 
          fontSize: 16, 
          lineHeight: 1.6, 
          marginBottom: 28,
          maxWidth: 520
        }}>
          Your ads are reaching <strong style={{ fontWeight: 700 }}>48.2K people</strong> this week with 1.54% CTR. 
          Ready to launch your next campaign?
        </div>
        
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="/create" className="btn-primary" style={{ 
            background: 'white', 
            color: 'var(--blue)', 
            padding: '14px 28px',
            fontSize: 13,
            fontWeight: 700,
            borderRadius: 'var(--radius-sm)'
          }}>
            ➕ Create new campaign
          </a>
          
          <a href="/ai" className="btn-ghost" style={{ 
            color: 'white', 
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '14px 24px',
            fontSize: 13
          }}>
            ✨ Generate with AI
          </a>
          
          <div style={{ 
            fontSize: 13, 
            marginTop: 8, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 6 
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.8 }}>
              <path d="M7 1L8.5 5.5H13L9.5 8L11 12.5L7 10L3 12.5L4.5 8L1 5.5H5.5L7 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            <span>AI Tip: Try video creatives for 40% more engagement</span>
          </div>
        </div>
      </div>
    </div>
  )
}
