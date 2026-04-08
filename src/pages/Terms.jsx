import { useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'

export default function Terms() {
  const [agreed, setAgreed] = useState(false)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const rawNext = searchParams.get('next') || '/signup'
  const nextUrl = rawNext ? decodeURIComponent(rawNext) : '/signup'

  const handleContinue = () => {
    if (!agreed) return
    navigate(nextUrl)
  }

  return (
    <div className="page-content">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 clamp(16px, 5vw, 48px)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 48px)' }}>
          <h1 style={{ fontFamily: 'Syne', fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 800, color: 'var(--text)' }}>Terms and Conditions</h1>
          <p style={{ fontSize: 'clamp(12px, 2.5vw, 15px)', color: 'var(--text2)' }}>Last updated: January 1, 2025</p>
        </div>

        <div className="card" style={{ padding: 'clamp(20px, 4vw, 32px)' }}>
          <ol style={{ fontSize: 'clamp(12px, 2.5vw, 14px)', lineHeight: 1.7, color: 'var(--text)' }}>
            <li>
              <strong>Service Description</strong>
              <p>This platform operates as an AI Agent that automatically manages and runs advertising campaigns on third-party platforms including Meta (Facebook/Instagram), Google Ads, and TikTok Ads based on the instructions and configurations provided by the user.</p>
            </li>
            <li>
              <strong>Limitation of Liability</strong>
              <ul>
                <li>We act solely as a platform provider. We do not guarantee that your advertising campaigns will achieve any specific results, such as a certain number of clicks, impressions, conversions, or return on investment (ROI).</li>
                <li>The user retains full control and sole responsibility for their advertising budget, creative assets (images, videos, text), targeting settings, and overall campaign strategy.</li>
                <li>The Company shall not be held liable for any errors, downtime, delays, or changes in service resulting from issues with third-party APIs, including but not limited to Meta, Google, and TikTok.</li>
              </ul>
            </li>
            <li>
              <strong>Payments and No Refund Policy</strong>
              <ul>
                <li>All subscription fees paid to the Company are non-refundable.</li>
                <li>Under no circumstances will a user be entitled to a refund of any fees already paid, whether or not they choose to cancel their campaigns or discontinue using the platform.</li>
              </ul>
            </li>
            <li>
              <strong>Resolution of Technical Issues</strong>
              <p>In the event that a user's scheduled campaigns fail to run due to a technical fault on the Company's platform (e.g., server downtime, API connection error):</p>
              <ul>
                <li>The Company will notify the affected users through the platform.</li>
                <li>The lost campaign duration will be rescheduled and added to the user's account to be run at a later time (e.g., if 2 days of campaigns were missed, an additional 2 days will be added to the schedule).</li>
                <li>Note: This provision applies only to technical faults originating from the Company's platform. It does not apply to issues caused by user error (e.g., incorrect budget, improper targeting) or issues originating from third-party advertising platforms (e.g., Meta, Google, TikTok).</li>
              </ul>
            </li>
            <li>
              <strong>Modifications to Service</strong>
              <p>The Company reserves the right to modify, suspend, or discontinue any aspect of the service, including features and pricing, at any time without prior notice. It is the user's responsibility to review these Terms periodically.</p>
            </li>
            <li>
              <strong>User Content and Copyright</strong>
              <p>The user is solely responsible for all content (including images, videos, text, and logos) used in their advertising campaigns. The user warrants that they own all rights to the content or have obtained the necessary permissions for its use. The Company is not liable for any copyright infringement or legal claims arising from the user's content.</p>
            </li>
            <li>
              <strong>Account Security</strong>
              <p>Users are responsible for maintaining the security of their account credentials, including their email, password, and any connected API keys. The Company is not liable for any unauthorized access or use of a user's account.</p>
            </li>
          </ol>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'clamp(32px, 6vw, 40px)', fontSize: 'clamp(10px, 2vw, 12px)', color: 'var(--text3)' }}>
          By using Addvally, you agree to these Terms and Conditions.
        </div>

        <div style={{ maxWidth: 800, margin: 'clamp(24px, 4vw, 30px) auto 0', padding: 'clamp(16px, 3vw, 24px)', border: '1px solid var(--border)', borderRadius: 'clamp(10px, 2vw, 14px)', background: 'var(--card)' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'clamp(12px, 2.5vw, 16px)', color: 'var(--text)', fontSize: 'clamp(12px, 2.5vw, 14px)' }}>
            <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
            I have read and agree to the <Link to="/terms" style={{ color: 'var(--blue)', textDecoration: 'underline' }}>Terms and Conditions</Link>
          </label>
          <button
            onClick={handleContinue}
            disabled={!agreed}
            style={{
              width: '100%', padding: 'clamp(10px, 2vw, 12px) clamp(12px, 2.5vw, 14px)', fontSize: 'clamp(12px, 2.5vw, 14px)', fontWeight: 700,
              background: agreed ? 'var(--blue)' : 'var(--border)',
              color: agreed ? '#fff' : 'var(--text3)', border: 'none', borderRadius: 'clamp(8px, 2vw, 10px)',
              cursor: agreed ? 'pointer' : 'not-allowed'
            }}
          >
            Continue to Sign up
          </button>
          {!agreed && (
            <p style={{ marginTop: 'clamp(10px, 2vw, 12px)', fontSize: 'clamp(10px, 2vw, 12px)', color: 'var(--text2)' }}>
              Please agree to the Terms and Conditions before continuing.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

