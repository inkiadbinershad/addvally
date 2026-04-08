import { Link } from 'react-router-dom'

export default function Payment() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="card" style={{ maxWidth: 420, padding: 32 }}>
        <h1 style={{ fontFamily: 'Syne', fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Payment</h1>
        <p style={{ color: 'var(--text2)', marginBottom: 20 }}>This is a placeholder payment page. Add your payment flow here.</p>
        <Link to="/" style={{ color: 'var(--blue)', textDecoration: 'underline' }}>Back to Home</Link>
      </div>
    </div>
  )
}
