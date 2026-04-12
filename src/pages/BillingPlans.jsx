import { useState } from 'react';

const plans = [
  {
    id: 1,
    name: 'Starter',
    price: '₨ 400',
    period: '3 day trial',
    desc: 'Perfect for new businesses',
    features: [
      { text: 'Up to 3 ad accounts', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Manual campaign creation', included: true },
      { text: 'Email support', included: true },
      { text: 'Priority support', included: false },
    ],
    cta: 'Start Now',
    popular: false,
  },
  {
    id: 2,
    name: 'Growth',
    price: '₨ 2,499',
    period: '/month',
    desc: 'For growing agencies',
    features: [
      { text: 'Up to 15 ad accounts', included: true },
      { text: 'Advanced analytics & reports', included: true },
      { text: 'Campaign creation', included: true },
      { text: 'Priority email & chat support', included: true },
      { text: 'Custom integrations', included: false },
    ],
    cta: 'Start Now',
    popular: true,
  },
  {
    id: 3,
    name: 'Business Agency',
    price: '₨ 7,999',
    period: '/month',
    desc: 'For agencies managing multiple campaigns',
    features: [
      { text: '10 Campaigns', included: true },
      { text: 'Enterprise analytics', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Custom features', included: true },
      { text: 'White-label solution', included: true },
    ],
    cta: 'Start Now',
    popular: false,
  },
  {
    id: 4,
    name: 'High Budget Campaign',
    price: 'Custom',
    period: 'Minimum 10 Lac PKR',
    desc: 'For large scale campaigns',
    features: [
      { text: 'Custom strategy', included: true },
      { text: 'Dedicated manager', included: true },
      { text: 'Advanced reporting', included: true },
      { text: 'Priority execution', included: true },
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function BillingPlans() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="page-content">
      {/* ── HEADER */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{
          fontFamily: 'var(--font-head)',
          fontSize: 32,
          fontWeight: 800,
          color: 'var(--text)',
          marginBottom: 8,
        }}>Simple, Transparent Pricing</h1>
        <p style={{ fontSize: 15, color: 'var(--text2)', marginBottom: 24 }}>
          Choose the perfect plan for your business. All plans include 14-day free trial.
        </p>

        {/* Toggle */}
        <div style={{
          display: 'inline-flex',
          background: 'var(--bg2)',
          border: `1px solid var(--border)`,
          borderRadius: 12,
          padding: 4,
        }}>
          {['monthly', 'yearly'].map((cycle) => (
            <button
              key={cycle}
              onClick={() => setBillingCycle(cycle)}
              style={{
                padding: '8px 20px',
                background: billingCycle === cycle ? 'var(--card)' : 'transparent',
                border: 'none',
                borderRadius: 8,
                color: 'var(--text)',
                fontWeight: 700,
                fontSize: 13,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: billingCycle === cycle ? 'var(--shadow)' : 'none',
              }}
            >
              {cycle === 'monthly' ? 'Monthly' : 'Yearly'}
              {cycle === 'yearly' && (
                <span style={{
                  marginLeft: 8,
                  background: 'var(--accent)',
                  color: 'var(--accent-txt)',
                  padding: '2px 6px',
                  borderRadius: 4,
                  fontSize: 10,
                  fontWeight: 700,
                }}>
                  Save 20%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── PRICING CARDS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 24,
        marginBottom: 40,
      }}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            style={{
              position: 'relative',
              background: plan.popular ? 'linear-gradient(135deg, var(--accent-dim), var(--blue-dim))' : 'var(--card)',
              border: `2px solid ${plan.popular ? 'var(--accent)' : 'var(--border)'}`,
              borderRadius: 'var(--radius-lg)',
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
              boxShadow: plan.popular ? '0 12px 40px rgba(245,196,0,0.15)' : 'var(--shadow)',
              transform: plan.popular ? 'scale(1.02)' : 'scale(1)',
            }}
            onMouseEnter={(e) => {
              if (!plan.popular) {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(245,196,0,0.08)';
              }
            }}
            onMouseLeave={(e) => {
              if (!plan.popular) {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
              }
            }}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div style={{
                position: 'absolute',
                top: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--accent)',
                color: 'var(--accent-txt)',
                padding: '4px 12px',
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                ⭐ Most Popular
              </div>
            )}

            {/* Plan name & desc */}
            <div style={{ marginBottom: 20 }}>
              <h3 style={{
                fontFamily: 'var(--font-head)',
                fontSize: 20,
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: 4,
              }}>{plan.name}</h3>
              <p style={{ fontSize: 12, color: 'var(--text3)' }}>{plan.desc}</p>
            </div>

            {/* Price */}
            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontSize: 32,
                fontWeight: 800,
                color: 'var(--text)',
                fontFamily: 'var(--font-head)',
              }}>
                {plan.price}
              </div>
              <p style={{ fontSize: 12, color: 'var(--text2)', marginTop: 4 }}>{plan.period}</p>
            </div>

            {/* CTA Button */}
            <button style={{
              padding: '12px 16px',
              background: plan.popular ? 'var(--accent)' : 'var(--blue)',
              color: plan.popular ? 'var(--accent-txt)' : '#fff',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 700,
              fontSize: 13,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              marginBottom: 20,
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
              {plan.cta}
            </button>

            {/* Divider */}
            <div style={{
              height: 1,
              background: 'var(--border)',
              marginBottom: 20,
            }} />

            {/* Features */}
            <ul style={{
              flex: 1,
              listStyle: 'none',
              fontSize: 13,
              color: 'var(--text2)',
            }}>
              {plan.features.map((feature, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 12,
                  color: feature.included ? 'var(--text)' : 'var(--text3)',
                  textDecoration: feature.included ? 'none' : 'line-through',
                }}>
                  <span style={{
                    width: 18,
                    height: 18,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: feature.included ? 'var(--green-bg)' : 'var(--bg3)',
                    color: feature.included ? 'var(--green)' : 'var(--text3)',
                    borderRadius: 4,
                    fontWeight: 700,
                    fontSize: 10,
                  }}>
                    {feature.included ? '✓' : '−'}
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── FAQ SECTION */}
      <div style={{
        background: 'var(--card)',
        border: `1px solid var(--border)`,
        borderRadius: 'var(--radius-lg)',
        padding: 28,
      }}>
        <h3 style={{
          fontFamily: 'var(--font-head)',
          fontSize: 18,
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: 20,
        }}>Frequently Asked Questions</h3>

        <div style={{ display: 'grid', gap: 16 }}>
          {[
            { q: 'Can I change plans anytime?', a: 'Yes, upgrade or downgrade your plan at any time. Changes take effect immediately.' },
            { q: 'Is there a setup fee?', a: 'No setup fees. Just start your 14-day free trial and begin managing your ads.' },
            { q: 'What payment methods do you accept?', a: 'We accept credit cards, debit cards, and bank transfers in Pakistan.' },
          ].map((item, idx) => (
            <div key={idx} style={{
              paddingBottom: 16,
              borderBottom: idx < 2 ? `1px solid var(--border)` : 'none',
            }}>
              <h4 style={{
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: 6,
                fontSize: 13,
              }}>Q: {item.q}</h4>
              <p style={{
                fontSize: 13,
                color: 'var(--text2)',
                lineHeight: 1.6,
              }}>A: {item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}