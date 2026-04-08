// src/pages/CreateCampaign.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { aiCopyOptions, templates } from '../data/dummy'

const steps = ['Platform', 'Business info', 'AI Content', 'Budget', 'Publish']

export default function CreateCampaign() {
  const navigate = useNavigate()
  const [step, setStep] = useState(2)

  const [selectedPlats, setSelectedPlats] = useState(['meta'])
  const [selectedTemplate, setSelectedTemplate] = useState(0)
  const [selectedCreative, setSelectedCreative] = useState(0)
  const [generating, setGenerating] = useState(false)
  const [budget, setBudget] = useState(500)
  const [duration, setDuration] = useState(7)
  const [published, setPublished] = useState(false)

  // AI Agent State
  const [businessDesc, setBusinessDesc] = useState('')
  const [aiSuggestions, setAiSuggestions] = useState([])
  const [selectedCopy, setSelectedCopy] = useState(null)

  const togglePlat = p => setSelectedPlats(prev => 
    prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
  )

  const getAISuggestions = () => {
    if (!businessDesc.trim()) return
    setGenerating(true)

    setTimeout(() => {
      const suggestions = [
        { id: 1, lang: 'English', headline: "🌙 Eid Special - 30% OFF Biryani & BBQ!", text: "Celebrate Eid with Ahmed's Restaurant. Family deals available. Order now in Karachi!" },
        { id: 2, lang: 'Urdu', headline: "عید مبارک! بریانی اور بی بی کیو پر 30% ڈسکاؤنٹ", text: "احمد ریسٹورنٹ کراچی میں عید کا خاص آفر۔ فیملی ڈیل دستیاب۔ ابھی آرڈر کریں!" },
        { id: 3, lang: 'English', headline: "Fresh Biryani & BBQ - Eid Offer!", text: "Limited time discount at Ahmed's Restaurant. Best taste in town." },
        { id: 4, lang: 'Urdu', headline: "تازہ بریانی اور بی بی کیو - عید آفر", text: "احمد ریسٹورنٹ میں محدود وقت کا ڈسکاؤنٹ۔ شہر کا بہترین ذائقہ۔" },
      ]
      setAiSuggestions(suggestions)
      setGenerating(false)
    }, 1400)
  }

  const useThisCopy = (copy) => {
    setSelectedCopy(copy)
    navigator.clipboard.writeText(`${copy.headline}\n\n${copy.text}`)
    alert(`Copied to clipboard!\n\n${copy.headline}\n${copy.text}`)
  }

  const handlePublish = () => {
    setPublished(true)
    setTimeout(() => navigate('/campaigns'), 1600)
  }

  const reach = Math.round((budget * duration * 4.2) / 10) * 10

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      
      {/* Horizontal Wizard Bar (kept) */}
      <div className="wizard-bar" style={{ padding: '16px 32px', background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                background: i < step ? 'var(--green)' : i === step ? 'var(--accent)' : 'var(--border)',
                color: i < step || i === step ? '#fff' : 'var(--text3)',
                fontSize: 12, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {i < step ? '✓' : i + 1}
              </div>
              <span style={{ fontSize: 13, fontWeight: i === step ? 700 : 500, color: i === step ? 'var(--accent)' : 'var(--text2)' }}>
                {s}
              </span>
              {i < steps.length - 1 && <div style={{ width: 20, height: 1, background: 'var(--border)' }} />}
            </div>
          ))}
        </div>
      </div>

      <div className="page-content" style={{ padding: '32px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32 }}>

            {/* Main Content Area */}
            <div>
              {/* STEP 2: AI CONTENT */}
              {step === 2 && (
                <div>
                  <div className="card" style={{ marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: '#facc15', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🤖</div>
                      <div>
                        <div style={{ fontSize: 18, fontWeight: 700 }}>Addvally AI Agent</div>
                        <div style={{ fontSize: 13, color: 'var(--text3)' }}>Your virtual Pakistani ad expert</div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Describe your business and offer (1-2 sentences)</label>
                      <textarea 
                        className="form-input" 
                        rows={5}
                        placeholder="Ahmed's Restaurant in Karachi. We sell biryani, BBQ and fast food. Running Eid special 30% off."
                        value={businessDesc}
                        onChange={(e) => setBusinessDesc(e.target.value)}
                      />
                    </div>

                    <button 
                      className="btn-primary" 
                      style={{ width: '100%', padding: '14px 0', fontSize: '15px', background: '#facc15', color: '#000' }}
                      onClick={getAISuggestions}
                      disabled={generating || !businessDesc.trim()}
                    >
                      {generating ? 'AI is thinking...' : 'Get AI Suggestions ✨'}
                    </button>
                  </div>

                  {aiSuggestions.length > 0 && (
                    <div className="card">
                      <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Fresh Ad Copy Suggestions</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                        {aiSuggestions.map((copy) => (
                          <div key={copy.id} style={{
                            border: '1px solid var(--border)',
                            borderRadius: 12,
                            padding: 16,
                            background: selectedCopy?.id === copy.id ? '#facc1520' : 'var(--card)',
                            cursor: 'pointer'
                          }}
                            onClick={() => useThisCopy(copy)}
                          >
                            <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 6 }}>{copy.lang}</div>
                            <div style={{ fontWeight: 600, marginBottom: 8 }}>{copy.headline}</div>
                            <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.5 }}>{copy.text}</div>
                            <button style={{ marginTop: 12, width: '100%', padding: '8px', background: '#facc15', color: '#000', border: 'none', borderRadius: 8, fontWeight: 700 }}>
                              Use This Copy
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 32 }}>
                {step > 0 && <button className="btn-ghost" onClick={() => setStep(s => s - 1)}>← Back</button>}
                {step < 4 && <button className="btn-primary" onClick={() => setStep(s => s + 1)}>Continue →</button>}
                {step === 4 && !published && <button className="btn-primary" onClick={handlePublish}>🚀 Publish Campaign</button>}
              </div>
            </div>

            {/* Preview Panel */}
            <div>
              <div className="card">
                <div style={{ fontFamily: 'DM Mono', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--text3)', marginBottom: 12 }}>Live preview — Facebook</div>
                <div className="phone-frame">
                  <div className="pf-bar top"><div className="pf-notch-bar" /></div>
                  <div style={{ background: '#1877F2', padding: '7px 10px', display: 'flex', alignItems: 'center', gap: 7 }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: '#1877F2' }}>A</div>
                    <div><div style={{ fontSize: 10, fontWeight: 700, color: '#fff' }}>Ahmed's Restaurant</div><div style={{ fontSize: 8, color: 'rgba(255,255,255,.7)' }}>Sponsored</div></div>
                  </div>
                  <div style={{ height: 110, background: 'linear-gradient(135deg,#FFF3E0,#FDEBD0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 42 }}>🍛</div>
                  <div style={{ padding: '10px 12px', background: '#fff' }}>
                    <div style={{ fontSize: 10, color: '#888', marginBottom: 4 }}>Sponsored</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#111', marginBottom: 4 }}>🌙 Eid Mubarak! 30% off your entire order</div>
                    <div style={{ fontSize: 10, color: '#555', marginBottom: 8 }}>Limited Eid offer at Ahmed's Restaurant, Karachi</div>
                    <button style={{ background: '#1877F2', color: '#fff', border: 'none', borderRadius: 5, padding: '5px 14px', fontSize: 11, fontWeight: 700 }}>Order Now</button>
                  </div>
                  <div className="pf-bar bottom"><div className="pf-home-bar" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}