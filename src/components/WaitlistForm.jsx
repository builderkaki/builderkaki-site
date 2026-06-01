import { useState } from 'react'

// TODO: Replace YOUR_FORM_ID below with your Formspree form ID.
// 1. Go to https://formspree.io and create a free account.
// 2. Create a new form — you get a URL like https://formspree.io/f/abcdefgh
// 3. Copy the ID (e.g. "abcdefgh") and paste it here.
const FORMSPREE_ID = 'mpqngkbo'

// Update this number as your real waitlist grows
const WAITLIST_COUNT = 47

export default function WaitlistForm({ submitted, setSubmitted, dark = false }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className={`rounded-2xl p-6 text-center border ${dark ? 'bg-white/10 border-white/20' : 'bg-brand-orange/10 border-brand-orange/30'}`}>
        <div className="text-3xl mb-2">🎉</div>
        <p className={`font-bold text-lg ${dark ? 'text-white' : 'text-brand-navy'}`}>You are on the list!</p>
        <p className={`mt-1 text-sm ${dark ? 'text-white/70' : 'text-brand-navy/60'}`}>
          We will send your free Contract Red Flags guide the moment we launch.
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className={`text-sm font-medium mb-3 ${dark ? 'text-white/60' : 'text-brand-navy/50'}`}>
        🔥 <span className="font-semibold">{WAITLIST_COUNT} professionals</span> already on the list
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 rounded-xl px-4 py-3.5 text-base outline-none border-2 transition-colors font-medium
            ${dark
              ? 'bg-white/10 text-white placeholder-white/40 border-white/20 focus:border-brand-orange'
              : 'bg-white text-brand-navy placeholder-brand-navy/35 border-gray-200 focus:border-brand-orange'
            }`}
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-pulse bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-6 py-3.5 rounded-xl transition-colors whitespace-nowrap disabled:opacity-60 text-sm"
        >
          {loading ? 'Joining...' : 'Join Free →'}
        </button>
      </form>
      {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
      <p className={`mt-2.5 text-xs ${dark ? 'text-white/40' : 'text-brand-navy/40'}`}>
        Free to join. No spam. Unsubscribe anytime.
      </p>
    </div>
  )
}
