// src/components/PricingCard.jsx
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function PricingCard({ plan }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const isHighBudget = plan.id === 'highbudget'

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
      display: 'flex',
      flexDirection: 'column',
      transition: 'all .2s',
      minHeight: '100%',
    }}
      onMouseEnter={e => {
        if (!plan.featured) e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        if (!plan.featured) e.currentTarget.style.transform = 'none'
      }}
    >
      {plan.badge && !isHighBudget && (
        <div style={{
          position: 'absolute',
          top: -14,
          left: '50%',
          transform: 'translateX(-50%)',
          background: plan.badgeColor || '#facc15',
          color: '#000',
          fontSize: 11,
          fontWeight: 800,
          padding: '5px 18px',
          borderRadius: 20,
          whiteSpace: 'nowrap',
          boxShadow: isDark ? `0 0 12px ${(plan.badgeColor || '#facc15')}88` : 'none',
        }}>
          {plan.badge}
        </div>
      )}

      <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8, fontWeight: 700 }}>
        {plan.name}
      </div>

        {plan.oldPrice && (
          <div style={{
            fontFamily: 'var(--font-head)',
            fontSize: 18,
            fontWeight: 600,
            color: 'var(--text2)',
            opacity: 0.6,
            textDecoration: 'line-through',
            marginBottom: 4,
            textAlign: 'center'
          }}>
            {plan.oldPrice}
          </div>
        )}
      <div style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: isDark ? 'var(--accent)' : 'var(--blue)', marginBottom: 4, lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
        <span style={{marginRight: '4px'}}>{plan.price}</span>
        {plan.trial ? (
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text3)' }}>{plan.trial}</span>
        ) : !isHighBudget ? (
          <span style={{ fontSize: 14, fontWeight: 400, color: 'var(--text3)' }}>/mo</span>
        ) : null}
      </div>

      <div style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 20, paddingBottom: 16, borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'var(--border)'}` }}>
        {plan.desc}
      </div>

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

      <Link
        to={isHighBudget ? '/contact' : `/payment?plan=${plan.id}`}
        style={{
          display: 'block',
          margin: '0 auto',
          textAlign: 'center',
          padding: '13px 20px',
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 14,
          fontFamily: 'var(--font-body)',
          textDecoration: 'none',
          width: '100%',
          background: isHighBudget ? 'var(--blue)' : (plan.featured ? '#facc15' : 'transparent'),
          color: isHighBudget ? '#fff' : (plan.featured ? '#000' : 'var(--text)'),
          border: plan.featured || isHighBudget ? 'none' : `1px solid ${isDark ? 'rgba(0,255,159,0.25)' : 'var(--border)'}`,
        }}
      >
        {isHighBudget ? 'Contact Us' : 'Start Now'}
      </Link>
    </div>
  )
}
