import { useState } from 'react'

export default function ToggleRow({ label, defaultOn }) {
  const [on, setOn] = useState(defaultOn)
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
      <div style={{ fontSize: 12, color: 'var(--text2)' }}>{label}</div>
      <div className={`toggle-track${on ? ' on' : ''}`} onClick={() => setOn(!on)}>
        <div className="toggle-thumb" />
      </div>
    </div>
  )
}
