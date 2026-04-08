import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

export default function PricingCard({ plan }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getButtonStyle = () => {
    if (plan.featured) {
      return {
        background: isDark ? 'var(--accent)' : 'var(--blue)',
        color: isDark ? '#000' : '#fff',
        border: 'none',
        boxShadow: isDark ? '0 0 20px rgba(0,255,159,0.3)' : 'none',
      };
    }
    if (plan.id === 'business') {
      return {
        background: '#16a34a',
        color: '#fff',
        border: 'none',
      };
    }
    return {
      background: 'transparent',
      border: `1px solid ${isDark ? 'rgba(0,255,159,0.25)' : 'var(--border)'}`,
      color: 'var(--text)',
    };
  };

  return (
    <div style={{
      background: 'var(--card)',
      border: plan.featured
        ? `2px solid ${isDark ? 'var(--accent)' : 'var(--blue)'}` 
        : `1px solid ${isDark ? 'rgba(0,255,159,0.08)' : 'var(--border)'}`,
      borderRadius: 20,
      padding: 'clamp(22px, 3vw, 32px)',
      position: 'relative',
      transform: plan.featured ? 'scale(1.04)' : 'none',
      boxShadow: plan.featured
        ? isDark
          ? '0 0 40px rgba(0,255,159,0.15), 0 20px 50px rgba(0,0,0,0.4)'
          : '0 20px 60px rgba(15,82,186,0.15)'
        : 'var(--shadow)',
      display: 'flex', flexDirection: 'column',
      transition: 'all .2s',
    }}
      onMouseEnter={e => {
        if (!plan.featured) e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        if (!plan.featured) e.currentTarget.style.transform = 'none';
      }}
    >
      {plan.badge && (
        <div style={{
          position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
          background: plan.badgeColor,
          color: '#fff', fontSize: 11, fontWeight: 800,
          padding: '5px 18px', borderRadius: 20, whiteSpace: 'nowrap',
          boxShadow: isDark ? `0 0 12px ${plan.badgeColor}88` : 'none',
        }}>
          {plan.badge}
        </div>
      )}

      <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8, fontWeight: 700 }}>
        {plan.name}
      </div>

      <div style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: isDark ? 'var(--accent)' : 'var(--blue)', marginBottom: 4, lineHeight: 1 }}>
        {plan.price}
        {plan.price !== 'Free' && <span style={{ fontSize: 14, fontWeight: 400, color: 'var(--text3)' }}>/mo</span>}
      </div>

      <div style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 20, paddingBottom: 16, borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'var(--border)'}` }}>
        {plan.desc}
      </div>

      {plan.roiNote && (
        <div style={{ background: 'var(--green-bg)', border: '1px solid var(--green)', borderRadius: 10, padding: '10px 12px', marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', marginBottom: 4 }}>{plan.roiNote.title}</div>
          <div style={{ fontSize: 11, color: 'var(--text2)', lineHeight: 1.6 }}>{plan.roiNote.body}</div>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24, flex: 1 }}>
        {plan.features.map((f, j) => (
          <div key={j} style={{ fontSize: 13, color: f.included ? 'var(--text2)' : 'var(--text3)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <span style={{ color: f.included ? 'var(--green)' : 'var(--text3)', fontWeight: 700, flexShrink: 0 }}>
              {f.included ? '✓' : '✗'}
            </span>
            {f.text}
          </div>
        ))}
      </div>

      {/* START NOW BUTTON */}
      <Link 
        to={`/payment?plan=${plan.id}`}
        style={{
maxWidth: '90%',
          display: 'block', margin: '0 auto', textAlign: 'center',
          padding: '13px 20px',
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 14,
          fontFamily: 'var(--font-body)',
          textDecoration: 'none',
          transition: 'all .2s',
          ...getButtonStyle(),
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          if (plan.featured && isDark) e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,159,0.5)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'none';
          if (plan.featured && isDark) e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,159,0.3)';
        }}
      >
        Start Now
      </Link>
    </div>
  );
}
