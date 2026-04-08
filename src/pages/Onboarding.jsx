// src/pages/Onboarding.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Onboarding() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)

  const steps = [
    {
      title: "Connect Your Ad Accounts",
      desc: "Link Meta, Google & TikTok in one click",
      icon: "🔗"
    },
    {
      title: "AI Does the Heavy Lifting",
      desc: "Describe your business → AI finds audience & creates ads",
      icon: "🤖"
    },
    {
      title: "Go Live & Scale",
      desc: "One click publish to all platforms. Track everything live.",
      icon: "🚀"
    }
  ]

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      navigate('/create')
    }
  }

  return (
    <div className="page-content" style={{ 
      padding: '40px 40px', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      background: 'var(--bg2)'
    }}>
      <div style={{ maxWidth: 620, margin: '0 auto', width: '100%' }}>
        
        {/* Progress Bar */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40 }}>
          {steps.map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 6,
                borderRadius: 999,
                background: i <= step ? '#facc15' : 'var(--border)',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>

        <div className="card" style={{ padding: 48, textAlign: 'center' }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>{steps[step].icon}</div>
          
          <h1 style={{
            fontFamily: 'var(--font-head)',
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 16,
            lineHeight: 1.2
          }}>
            {steps[step].title}
          </h1>
          
          <p style={{ 
            fontSize: 17, 
            color: 'var(--text2)', 
            maxWidth: 420, 
            margin: '0 auto 40px',
            lineHeight: 1.6
          }}>
            {steps[step].desc}
          </p>

          <button
            onClick={nextStep}
            className="btn-primary"
            style={{ 
              padding: '16px 48px', 
              fontSize: 16, 
              width: '100%', 
              maxWidth: 320 
            }}
          >
            {step < steps.length - 1 ? 'Continue →' : 'Create My First Campaign 🚀'}
          </button>

          <button
            onClick={() => navigate('/dashboard')}
            style={{
              marginTop: 16,
              background: 'transparent',
              border: '1px solid var(--border)',
              color: 'var(--text2)',
              padding: '12px 32px',
              borderRadius: 12,
              fontWeight: 600,
              width: '100%',
              maxWidth: 320
            }}
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  )
}