import { useState } from 'react';

export default function ContactUs() {
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

  return (
    <div className="page-content">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="syne fw-800 bg-gradient-blue mb-4" style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            backgroundImage: 'linear-gradient(to right, var(--blue), #A855F7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Contact Us
          </h1>
          <p className="fs-16 md:fs-18 text-muted max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Get in touch with us today.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div>
            <h2 className="syne fw-700 text-primary mb-8" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>
              Get in touch
            </h2>
            
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>Email</div>
              <div style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', fontWeight: 500, color: 'var(--text)' }}>hello@adboost.pk</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>Response time: 2 hours</div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>Phone</div>
              <div style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', fontWeight: 500, color: 'var(--text)' }}>+92 300 1234567</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>Mon - Fri 9AM - 6PM</div>
            </div>

            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>Address</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text)' }}>Karachi, Pakistan</div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="syne fw-700 text-primary mb-8" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
            {status && (
              <div className="card mt-4 p-3" style={{ 
                backgroundColor: 'var(--green-bg)', 
                border: '1px solid var(--green)', 
                color: 'var(--green)' 
              }}>
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

