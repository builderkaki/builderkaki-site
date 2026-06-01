import { useState } from 'react'

const FORMSPREE_ID = 'mpqngkbo'

const reasons = ['General Enquiry', 'Advertise with Us', 'List My Company', 'Partnership Opportunity', 'Technical Issue', 'Press / Media', 'Other']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', reason: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ form_type: 'contact', ...form }),
      })
      if (res.ok) setSubmitted(true)
      else setError('Something went wrong. Email us at hello@builderkaki.sg')
    } catch { setError('Network error. Please try again.') }
    finally { setLoading(false) }
  }

  return (
    <div className="bg-brand-cream min-h-screen pt-16">
      <div className="bg-hero-gradient text-white py-14 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Contact BuilderKaki</h1>
          <p className="text-white/70 text-lg">We reply to every message within 24 hours.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-extrabold text-brand-navy mb-6">Other ways to reach us</h2>
            <div className="flex flex-col gap-5">
              {[
                { icon: '📧', label: 'General', value: 'hello@builderkaki.sg', href: 'mailto:hello@builderkaki.sg' },
                { icon: '📢', label: 'Advertise', value: 'advertise@builderkaki.sg', href: 'mailto:advertise@builderkaki.sg' },
                { icon: '🤝', label: 'Partner', value: 'partners@builderkaki.sg', href: 'mailto:partners@builderkaki.sg' },
                { icon: '💼', label: 'Courses', value: 'courses@builderkaki.sg', href: 'mailto:courses@builderkaki.sg' },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-lg shrink-0">{c.icon}</div>
                  <div>
                    <p className="text-xs font-semibold text-brand-navy/50 uppercase tracking-wider">{c.label}</p>
                    <a href={c.href} className="text-brand-orange text-sm font-medium hover:underline">{c.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-hero-gradient rounded-2xl p-5 text-white">
              <p className="font-bold mb-1">Based in Singapore 🇸🇬</p>
              <p className="text-white/65 text-sm">BuilderKaki is built by and for Singapore's façade industry.</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-card p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-extrabold text-brand-navy mb-2">Message sent!</h3>
                <p className="text-brand-navy/60">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-card p-7 flex flex-col gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">Your Name *</label>
                    <input type="text" required placeholder="Full name" value={form.name} onChange={e => set('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">Email *</label>
                    <input type="email" required placeholder="your@email.com" value={form.email} onChange={e => set('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">Reason for Contact *</label>
                  <select required value={form.reason} onChange={e => set('reason', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm bg-white transition-colors">
                    <option value="">Select a reason...</option>
                    {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">Message *</label>
                  <textarea required placeholder="How can we help?" value={form.message} onChange={e => set('message', e.target.value)} rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm transition-colors resize-none" />
                </div>
                {error && <p className="text-red-500 text-sm bg-red-50 rounded-xl px-4 py-3">{error}</p>}
                <button type="submit" disabled={loading}
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3.5 rounded-xl transition-colors disabled:opacity-60">
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
