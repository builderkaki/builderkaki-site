import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { Navigate } from 'react-router-dom'

const roles = [
  'Contractor / Subcontractor', 'Site Manager / Supervisor', 'Structural / Façade Engineer',
  'Architect', 'Consultant', 'Supplier / Manufacturer', 'Authority / Government Body',
  'Developer / Client', 'Other',
]

export default function ProfilePage({ openAuth }) {
  const { user, profile, signOut, updateProfile } = useAuth()
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState(null)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  if (!user) return <Navigate to="/" replace />

  const meta = user.user_metadata || {}
  const displayName = profile?.full_name || meta.full_name || user.email
  const displayRole = profile?.role || meta.role || '—'
  const displayCompany = profile?.company || meta.company || '—'

  const startEdit = () => {
    setForm({
      full_name: profile?.full_name || meta.full_name || '',
      role: profile?.role || meta.role || '',
      company: profile?.company || meta.company || '',
      bio: profile?.bio || '',
      location: profile?.location || '',
      linkedin: profile?.linkedin || '',
    })
    setEditing(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      await updateProfile(form)
      setEditing(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (err) {
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  const initials = displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)

  return (
    <div className="bg-brand-cream min-h-screen pt-16">
      {/* Header banner */}
      <div className="bg-hero-gradient h-32" />

      <div className="max-w-3xl mx-auto px-5 pb-16">
        {/* Profile card */}
        <div className="bg-white rounded-3xl shadow-card -mt-12 p-7 mb-6">
          <div className="flex items-start gap-5">
            <div className="w-20 h-20 rounded-2xl bg-brand-orange text-white flex items-center justify-center text-2xl font-extrabold shrink-0 -mt-4 shadow-lg">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-brand-navy">{displayName}</h1>
                  <p className="text-brand-navy/60">{displayRole}</p>
                  {displayCompany !== '—' && <p className="text-brand-navy/50 text-sm">{displayCompany}</p>}
                </div>
                <div className="flex gap-2">
                  <button onClick={startEdit}
                    className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
                    Edit Profile
                  </button>
                  <button onClick={signOut}
                    className="border border-gray-200 text-brand-navy/60 hover:border-red-300 hover:text-red-500 font-medium px-4 py-2 rounded-xl text-sm transition-colors">
                    Sign Out
                  </button>
                </div>
              </div>
              {profile?.bio && <p className="mt-3 text-brand-navy/65 text-sm leading-relaxed">{profile.bio}</p>}
              <div className="flex flex-wrap gap-3 mt-3 text-xs text-brand-navy/50">
                {profile?.location && <span>📍 {profile.location}</span>}
                <span>📧 {user.email}</span>
                {profile?.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">LinkedIn →</a>
                )}
              </div>
            </div>
          </div>

          {saved && (
            <div className="mt-4 bg-green-50 text-green-700 text-sm font-medium px-4 py-3 rounded-xl">
              ✅ Profile saved successfully!
            </div>
          )}
        </div>

        {/* Kaki Points */}
        <div className="bg-hero-gradient rounded-2xl p-6 text-white mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-1">Kaki Points</p>
              <p className="text-4xl font-extrabold">50 <span className="text-brand-gold">pts</span></p>
              <p className="text-white/60 text-sm mt-1">You earned 50 points for joining!</p>
            </div>
            <div className="text-5xl">⭐</div>
          </div>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { pts: '+50', action: 'Complete a course', done: false },
              { pts: '+20', action: 'Post a discussion', done: false },
              { pts: '+30', action: 'Answer a question', done: false },
              { pts: '+100', action: 'Pay on time', done: false },
            ].map(item => (
              <div key={item.action} className="bg-white/10 rounded-xl p-3 text-center">
                <p className="text-brand-gold font-bold">{item.pts}</p>
                <p className="text-white/60 text-xs mt-0.5">{item.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activity placeholders */}
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: '💬', title: 'My Discussions', desc: 'You have not posted any discussions yet.', cta: 'Start a discussion', href: '/discussions' },
            { icon: '💼', title: 'Saved Jobs', desc: 'You have not saved any jobs yet.', cta: 'Browse jobs', href: '/jobs' },
            { icon: '🎓', title: 'My Courses', desc: 'You have not enrolled in any courses yet.', cta: 'Browse courses', href: '/courses' },
          ].map(item => (
            <div key={item.title} className="bg-white rounded-2xl shadow-card p-6 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-brand-navy mb-1">{item.title}</h3>
              <p className="text-brand-navy/50 text-sm mb-4">{item.desc}</p>
              <a href={item.href} className="text-brand-orange font-semibold text-sm hover:underline">{item.cta} →</a>
            </div>
          ))}
        </div>
      </div>

      {/* Edit modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-7 pt-7 pb-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-brand-navy">Edit Profile</h2>
              <button onClick={() => setEditing(false)} className="text-brand-navy/40 hover:text-brand-navy">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSave} className="px-7 py-6 flex flex-col gap-4">
              {[
                { key: 'full_name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                { key: 'company', label: 'Company / Firm', type: 'text', placeholder: 'Your company name' },
                { key: 'location', label: 'Location', type: 'text', placeholder: 'e.g. Singapore' },
                { key: 'linkedin', label: 'LinkedIn URL', type: 'url', placeholder: 'https://linkedin.com/in/yourname' },
              ].map(field => (
                <div key={field.key}>
                  <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} value={form[field.key]}
                    onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm transition-colors" />
                </div>
              ))}
              <div>
                <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">Your Role</label>
                <select value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm bg-white transition-colors">
                  {roles.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">Bio (optional)</label>
                <textarea placeholder="A short intro about yourself and your experience..." value={form.bio}
                  onChange={e => setForm(f => ({ ...f, bio: e.target.value }))} rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm transition-colors resize-none" />
              </div>
              <button type="submit" disabled={saving}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3.5 rounded-xl transition-colors disabled:opacity-60">
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
