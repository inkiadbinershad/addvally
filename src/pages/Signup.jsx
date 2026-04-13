import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Signup() {
  const navigate = useNavigate()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' })

  const handleSubmit = e => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) return
    navigate('/terms?next=/dashboard')
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: isDark ? 'var(--bg)' : 'linear-gradient(135deg, var(--bg) 0%, var(--bg2) 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      padding: '20px',
    }}>
        <div style={{ 
          width: '100%', 
          maxWidth: 522,
          margin: '0 auto',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
        }}>
          <Link to="/" style={{ 
            fontFamily: 'var(--font-head)', 
            fontSize: 24, 
            fontWeight: 800, 
            color: 'var(--text)', 
            textDecoration: 'none', 
            marginBottom: 24,
            letterSpacing: '-0.02em'
          }}>
            Addvally
          </Link>
          
          <div className="card" style={{ 
            width: '100%', 
            padding: '40px 32px',
            background: 'var(--card)', 
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'var(--border)'}`,
            borderRadius: '20px',
            boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.4)' : '0 8px 32px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            
          <h1 style={{ 
            fontFamily: 'var(--font-head)', 
            fontSize: 28, 
            fontWeight: 800, 
            color: 'var(--text)', 
            marginBottom: 8,
            textAlign: 'center'
          }}>
            Create account
          </h1>
          <p style={{ fontSize: 15, color: 'var(--text2)', marginBottom: 32, textAlign: 'center' }}>
            Start building smarter campaigns with Addvally
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%', maxWidth: '430px' }}>
            
            <div style={{ width: '100%' }}>
              <label className="form-label">Email address</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="ahmed@business.pk" 
                value={form.email} 
                onChange={e => setForm({ ...form, email: e.target.value })} 
                required 
                style={{ width: '100%' }}              />
            </div>

            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <label className="form-label" style={{ marginBottom: 0 }}>Password</label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: isDark ? '#00ff9f' : 'var(--blue)',
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <input 
                type={showPassword ? 'text' : 'password'} 
                className="form-input" 
                placeholder="Create a password" 
                value={form.password} 
                onChange={e => setForm({ ...form, password: e.target.value })} 
                required 
                style={{ width: '100%' }}              />
            </div>

            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <label className="form-label" style={{ marginBottom: 0 }}>Confirm Password</label>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: isDark ? '#00ff9f' : 'var(--blue)',
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <input 
                type={showConfirmPassword ? 'text' : 'password'} 
                className="form-input" 
                placeholder="Confirm your password" 
                value={form.confirmPassword} 
                onChange={e => setForm({ ...form, confirmPassword: e.target.value })} 
                required 
                style={{ width: '100%' }}              />
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              style={{ 
                width: '280px', 
                padding: '12px 16px',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '12px',
                margin: '0 auto'
              }}
            >
              Create account →
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>
            <div>
              Already have an account?{' '}
              <Link to="/login" style={{ color: isDark ? '#00ff9f' : 'var(--blue)', fontWeight: 700 }}>Sign in</Link>
            </div>
            <div>
              By creating an account, you agree to our{' '}
              <Link to="/terms" style={{ color: isDark ? '#00ff9f' : 'var(--blue)', fontWeight: 700 }}>Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}