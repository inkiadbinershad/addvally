// src/components/Sidebar.jsx
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { user } from '../data/dummy'

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/campaigns', label: 'My Campaigns' },
  { path: '/create', label: 'Create Campaign' },
  { path: '/billing', label: 'Billing & Plans' },
  { path: '/settings', label: 'Settings' },
  { path: '/growth', label: 'Growth & Revenue' },
  { path: '/onboarding', label: 'Onboarding' },
]

const icons = {
  '/dashboard': <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/></svg>,
  '/campaigns': <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M4 3V2a1 1 0 011-1h4a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.2"/></svg>,
  '/create': <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/><line x1="7" y1="4" x2="7" y2="10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><line x1="4" y1="7" x2="10" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  '/billing': <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M1 6h12" stroke="currentColor" strokeWidth="1.2"/></svg>,
  '/settings': <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2"/><path d="M7 1v2M7 11v2M1 7h2M11 7h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  '/growth': <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 10l3-4 3 3 4-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  '/onboarding': <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1a6 6 0 100 12A6 6 0 007 1z" stroke="currentColor" strokeWidth="1.2"/><path d="M4.5 7l2 2 3-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
}

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate()

  const handleNavClick = () => {
    if (onClose) onClose()
  }

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`sidebar-overlay${isOpen ? ' visible' : ''}`}
        onClick={onClose}
      />

      <nav className={`sidebar${isOpen ? ' open' : ''}`}>
        <div className="sb-brand">
          <div className="sb-brand-dot" />
          Addvally
        </div>

        {/* Homepage button */}
        <div
          onClick={() => { navigate('/'); handleNavClick() }}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '7px 20px', margin: '4px 10px 6px',
            borderRadius: 8, cursor: 'pointer',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.07)',
            fontSize: 12, color: 'rgba(255,255,255,0.5)',
            fontWeight: 600, transition: '.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.09)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 7L7 1.5L13 7V13H9V9H5V13H1V7Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round"/></svg>
          View Homepage
        </div>

        <div className="sb-section">Main</div>
        {navItems.slice(0, 3).map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `sb-item${isActive ? ' active' : ''}`}
            onClick={handleNavClick}
          >
            {icons[item.path]}
            {item.label}
          </NavLink>
        ))}

        <div className="sb-section">Account</div>
        {navItems.slice(3).map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `sb-item${isActive ? ' active' : ''}`}
            onClick={handleNavClick}
          >
            {icons[item.path]}
            {item.label}
          </NavLink>
        ))}

        <div className="sb-foot">
          <div className="sb-avatar">{user.avatar}</div>
          <div>
            <div className="sb-username">{user.name}</div>
            <div className="sb-plan">{user.plan} Plan</div>
          </div>
        </div>
      </nav>
    </>
  )
}