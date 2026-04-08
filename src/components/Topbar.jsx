import { useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'

const pageTitles = {
  '/dashboard': { title: 'Dashboard', sub: 'Welcome back, Ahmed' },
  '/campaigns': { title: 'My Campaigns', sub: 'All campaigns' },
  '/create': { title: 'Create Campaign', sub: 'New campaign wizard' },
  '/notifications': { title: 'Notifications', sub: '3 unread' },
  '/billing': { title: 'Billing & Plans', sub: 'Current plan: Growth' },
  '/ai': { title: 'AI Features', sub: 'Powered by Claude AI' },
  '/settings': { title: 'Settings', sub: 'Account preferences' },
  '/growth': { title: 'Growth & Revenue', sub: 'Referrals and add-ons' },
  '/onboarding': { title: 'Onboarding', sub: 'Setup wizard' },
}

export default function Topbar() {
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const info = pageTitles[location.pathname] || { title: 'AdBoost.pk', sub: '' }

  return (
    <div className="topbar">
      <div>
        <div className="tb-page-title">{info.title}</div>
        <div className="tb-breadcrumb">
          {info.sub}
          {location.pathname === '/dashboard' && (
            <><span className="live-dot" style={{ marginLeft: 4 }} /> 3 campaigns live</>
          )}
        </div>
      </div>
      <div className="tb-right">
        <div
          className="tb-icon-btn"
          onClick={() => navigate('/notifications')}
          title="Notifications"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M8 1a5 5 0 015 5v3l1.5 2H1.5L3 9V6a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <path d="M6.5 13.5a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          </svg>
          <div className="notif-dot" />
        </div>

        <div
          className="tb-icon-btn"
          onClick={toggleTheme}
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13.5 10A6.5 6.5 0 016 2.5a6 6 0 100 11A6.5 6.5 0 0113.5 10z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.1 3.1l1.4 1.4M11.5 11.5l1.4 1.4M3.1 12.9l1.4-1.4M11.5 4.5l1.4-1.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          )}
        </div>

        <button
          className="btn-primary"
          onClick={() => navigate('/create')}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="1" x2="6" y2="11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          New Campaign
        </button>
      </div>
    </div>
  )
}
