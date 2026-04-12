import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function ContactUs() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  const isDark = theme === 'dark';

  return (
    <div style={{
      background: 'var(--bg)',
      color: 'var(--text)',
      minHeight: '100vh',
      fontFamily: 'var(--font-body)',
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: 60,
      }}>
        <h1 style={{
          fontFamily: 'var(--font-head)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800,
          background: isDark ? 'var(--accent)' : 'var(--blue)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 16,
          lineHeight: 1.1,
        }}>
          Contact Us
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          color: 'var(--text2)',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Have questions? Get in touch with our team.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(40px, 8vw, 64px)',
        alignItems: 'start',
      }}>
        {/* Contact Info */}
        <div>
          <h2 style={{
            fontFamily: 'var(--font-head)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: 32,
          }}>
            Get in touch
          </h2>
          
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>Email</div>
            <div style={{ fontSize: 18, fontWeight: 500, color: 'var(--text)', marginBottom: 4 }}>hello@addvally.pk</div>
            <div style={{ fontSize: 13, color: 'var(--text3)' }}>Response within 2 hours</div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>Phone</div>
            <div style={{ fontSize: 18, fontWeight: 500, color: 'var(--text)', marginBottom: 4 }}>+92 300 1234567</div>
            <div style={{ fontSize: 13, color: 'var(--text3)' }}>Mon - Fri, 9AM - 6PM PKT</div>
          </div>

          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>Address</div>
            <div style={{ fontSize: 16, color: 'var(--text)', lineHeight: 1.5 }}>
              FSD, G.M. Abad<br />
              Office P62, Pakistan
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 style={{
            fontFamily: 'var(--font-head)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: 32,
          }}>
            Send a message
          </h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: '12px 16px',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'var(--border)'}`,
                borderRadius: 12,
                background: isDark ? 'rgba(255,255,255,0.05)' : 'var(--card)',
                color: 'var(--text)',
                fontSize: 15,
                outline: 'none',
                transition: 'all 0.2s',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = isDark ? '#00ff9f' : 'var(--blue)';
                e.target.style.boxShadow = `0 0 0 3px ${isDark ? 'rgba(0,255,159,0.1)' : 'rgba(15,82,186,0.1)'}`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'var(--border)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: '12px 16px',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'var(--border)'}`,
                borderRadius: 12,
                background: isDark ? 'rgba(255,255,255,0.05)' : 'var(--card)',
                color: 'var(--text)',
                fontSize: 15,
                outline: 'none',
                transition: 'all 0.2s',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = isDark ? '#00ff9f' : 'var(--blue)';
                e.target.style.boxShadow = `0 0 0 3px ${isDark ? 'rgba(0,255,159,0.1)' : 'rgba(15,82,186,0.1)'}`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'var(--border)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                padding: '12px 16px',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'var(--border)'}`,
                borderRadius: 12,
                background: isDark ? 'rgba(255,255,255,0.05)' : 'var(--card)',
                color: 'var(--text)',
                fontSize: 15,
                outline: 'none',
                resize: 'vertical',
                minHeight: '120px',
                transition: 'all 0.2s',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = isDark ? '#00ff9f' : 'var(--blue)';
                e.target.style.boxShadow = `0 0 0 3px ${isDark ? 'rgba(0,255,159,0.1)' : 'rgba(15,82,186,0.1)'}`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'var(--border)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px 24px',
                background: isDark ? 'var(--accent)' : 'var(--blue)',
                color: '#fff',
                border: 'none',
                borderRadius: 12,
                fontFamily: 'var(--font-head)',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = isDark ? '#e0b300' : '#0e4aa4';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = `0 8px 24px ${isDark ? 'rgba(245,196,0,0.3)' : 'rgba(15,82,186,0.3)'}`;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = isDark ? 'var(--accent)' : 'var(--blue)';
                e.target.style.transform = 'none';
                e.target.style.boxShadow = 'none';
              }}
            >
              Send Message
            </button>
          </form>
          {status && (
            <div style={{
              marginTop: 16,
              padding: 16,
              background: isDark ? 'rgba(0,255,159,0.1)' : 'var(--green-bg)',
              border: `1px solid ${isDark ? 'rgba(0,255,159,0.3)' : 'var(--green)'}`,
              borderRadius: 12,
              color: isDark ? '#00ff9f' : 'var(--green)',
              fontWeight: 500,
            }}>
              {status}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}

