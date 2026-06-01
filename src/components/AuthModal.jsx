import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

const roles = [
  'Contractor / Subcontractor',
  'Site Manager / Supervisor',
  'Structural / Façade Engineer',
  'Architect',
  'Consultant',
  'Supplier / Manufacturer',
  'Authority / Government Body',
  'Developer / Client',
  'Other',
]

export default function AuthModal({ onClose }) {
  const [tab, setTab] = useState('signup') // 'signup' | 'login'
  const [form, setForm] = useState({ email: '', password: '', fullName: '', role: '', company: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { signUp, signIn } = useAuth()

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')
    try {
      if (tab === 'signup') {
        if (!form.fullName || !form.role) { setError('Please fill in all fields.'); setLoading(false); return }
        await signUp({ email: form.email, password: form.password, fullName: form.fullName, role: form.role, company: form.company })
        setSuccess('Account created! Check your email to verify, then come back and log in.')
      } else {
        await signIn({ email: form.email, password: form.password })
        onClose()
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-hero-gradient px-7 pt-8 pb-6 text-white relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/60 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-center gap-1 mb-4">
            <span className="text-brand-orange font-extrabold text-lg">Builder</span>
            <span className="font-extrabold text-lg">Kaki</span>
            <span className="ml-1 text-[10px] font-bold bg-brand-orange text-white rounded-full px-2 py-0.5">SG</span>
          </div>
          <h2 className="text-xl font-extrabold">
            {tab === 'signup' ? 'Join the façade community' : 'Welcome back'}
          </h2>
          <p className="text-white/65 text-sm mt-1">
            {tab === 'signup' ? 'Free forever. No credit card needed.' : 'Sign in to your BuilderKaki account.'}
          </p>

          {/* Tabs */}
          <div className="flex gap-1 mt-5 bg-white/10 rounded-xl p-1">
            {[['signup', 'Join Free'], ['login', 'Sign In']].map(([key, label]) => (
              <button key={key} onClick={() => { setTab(key); setError(''); setSuccess('') }}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${tab === key ? 'bg-white text-brand-navy' : 'text-white/70 hover:text-white'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-4">
          {tab === 'signup' && (
            <div>
              <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">Full Name *</label>
              <input type="text" required placeholder="Your full name" value={form.fullName} onChange={e => set('fullName', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm transition-colors" />
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">Email Address *</label>
            <input type="email" required placeholder="you@company.com" value={form.email} onChange={e => set('email', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm transition-colors" />
          </div>

          <div>
            <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">Password *</label>
            <input type="password" required placeholder="Min. 8 characters" minLength={8} value={form.password} onChange={e => set('password', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm transition-colors" />
          </div>

          {tab === 'signup' && (
            <>
              <div>
                <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">Your Role in the Industry *</label>
                <select required value={form.role} onChange={e => set('role', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm transition-colors bg-white">
                  <option value="">Select your role...</option>
                  {roles.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">Company Name (optional)</label>
                <input type="text" placeholder="Your company or firm" value={form.company} onChange={e => set('company', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm transition-colors" />
              </div>
            </>
          )}

          {error && <p className="text-red-500 text-sm bg-red-50 rounded-xl px-4 py-3">{error}</p>}
          {success && <p className="text-green-700 text-sm bg-green-50 rounded-xl px-4 py-3">{success}</p>}

          {!success && (
            <button type="submit" disabled={loading}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3.5 rounded-xl transition-colors disabled:opacity-60 mt-1">
              {loading ? 'Please wait...' : tab === 'signup' ? 'Create Free Account →' : 'Sign In →'}
            </button>
          )}

          {tab === 'login' && (
            <p className="text-center text-xs text-brand-navy/50">
              No account?{' '}
              <button type="button" onClick={() => setTab('signup')} className="text-brand-orange font-semibold hover:underline">Join free</button>
            </p>
          )}

          <p className="text-center text-xs text-brand-navy/40">
            By joining you agree to our Terms of Service. We never share your data.
          </p>
        </form>
      </div>
    </div>
  )
}
