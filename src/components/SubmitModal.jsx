import { useState } from 'react'

const FORMSPREE_ID = 'mpqngkbo'

const configs = {
  job: {
    title: 'Post a Job',
    subtitle: 'Reach 2,800+ façade professionals. First 3 posts free.',
    emoji: '💼',
    fields: [
      { key: 'job_title', label: 'Job Title *', type: 'text', placeholder: 'e.g. Façade Project Manager', required: true },
      { key: 'company', label: 'Company Name *', type: 'text', placeholder: 'Your company', required: true },
      { key: 'job_type', label: 'Job Type *', type: 'select', options: ['Full-time', 'Contract', 'Freelance', 'Part-time'], required: true },
      { key: 'location', label: 'Location *', type: 'text', placeholder: 'e.g. Tanjong Pagar, Singapore', required: true },
      { key: 'salary', label: 'Salary Range', type: 'text', placeholder: 'e.g. S$6,000 – S$9,000/mo' },
      { key: 'description', label: 'Job Description *', type: 'textarea', placeholder: 'Describe the role, requirements, and how to apply...', required: true },
      { key: 'contact_email', label: 'Your Email *', type: 'email', placeholder: 'Applications sent here', required: true },
    ],
  },
  company: {
    title: 'List Your Company',
    subtitle: 'Free basic listing. Verified badge after BCA check.',
    emoji: '🏢',
    fields: [
      { key: 'company_name', label: 'Company Name *', type: 'text', placeholder: 'Registered company name', required: true },
      { key: 'company_type', label: 'Company Type *', type: 'select', options: ['Contractor', 'Supplier', 'Consultant', 'Engineer', 'Manufacturer', 'Other'], required: true },
      { key: 'specialty', label: 'Specialty / Services *', type: 'text', placeholder: 'e.g. Curtain Wall, Structural Glazing', required: true },
      { key: 'bca_reg', label: 'BCA Registration No.', type: 'text', placeholder: 'e.g. CW01 A1 or N/A' },
      { key: 'location', label: 'Location *', type: 'text', placeholder: 'e.g. Jurong East, Singapore', required: true },
      { key: 'contact_name', label: 'Contact Person *', type: 'text', placeholder: 'Your name', required: true },
      { key: 'contact_email', label: 'Contact Email *', type: 'email', placeholder: 'your@company.com', required: true },
      { key: 'description', label: 'Company Description', type: 'textarea', placeholder: 'Brief description of your company...' },
    ],
  },
  launch: {
    title: 'Submit a Product Launch',
    subtitle: 'Reach the entire façade ecosystem. S$300/post.',
    emoji: '🚀',
    fields: [
      { key: 'product_name', label: 'Product / System Name *', type: 'text', placeholder: 'e.g. SilcoFlex Ultra Sealant', required: true },
      { key: 'company', label: 'Company Name *', type: 'text', placeholder: 'Your company', required: true },
      { key: 'category', label: 'Category *', type: 'select', options: ['Curtain Wall', 'Glass & Glazing', 'Sealants', 'Cladding', 'Technology', 'Regulatory', 'Sustainability', 'Other'], required: true },
      { key: 'summary', label: 'Product Summary *', type: 'textarea', placeholder: 'Describe your product, key features, and why it matters...', required: true },
      { key: 'availability', label: 'Availability / Launch Date', type: 'text', placeholder: 'e.g. Available Q3 2026 in Singapore' },
      { key: 'contact_email', label: 'Your Email *', type: 'email', placeholder: 'We will contact you to confirm and arrange payment', required: true },
    ],
  },
  discussion: {
    title: 'Post a Discussion',
    subtitle: 'Ask the community. Get answers from real industry professionals.',
    emoji: '💬',
    fields: [
      { key: 'your_name', label: 'Your Name *', type: 'text', placeholder: 'Your full name', required: true },
      { key: 'your_role', label: 'Your Role', type: 'text', placeholder: 'e.g. Façade Engineer' },
      { key: 'category', label: 'Topic Category *', type: 'select', options: ['Technical', 'Contracts & Payment', 'Regulatory & BCA', 'Products & Systems', 'Safety & MCS', 'General'], required: true },
      { key: 'title', label: 'Discussion Title *', type: 'text', placeholder: 'Ask a clear question...', required: true },
      { key: 'body', label: 'Details *', type: 'textarea', placeholder: 'Provide context, what you have tried, what you need help with...', required: true },
      { key: 'contact_email', label: 'Your Email *', type: 'email', placeholder: 'So we can notify you of replies', required: true },
    ],
  },
}

export default function SubmitModal({ type, onClose }) {
  const config = configs[type]
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const set = (key, val) => setFormData(f => ({ ...f, [key]: val }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ form_type: type, ...formData }),
      })
      if (res.ok) setSubmitted(true)
      else setError('Something went wrong. Please email us directly.')
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white px-7 pt-7 pb-4 border-b border-gray-100 flex items-start justify-between">
          <div>
            <div className="text-3xl mb-1">{config.emoji}</div>
            <h2 className="text-xl font-extrabold text-brand-navy">{config.title}</h2>
            <p className="text-brand-navy/55 text-sm">{config.subtitle}</p>
          </div>
          <button onClick={onClose} className="text-brand-navy/40 hover:text-brand-navy mt-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="px-7 py-10 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-extrabold text-brand-navy mb-2">Submitted!</h3>
            <p className="text-brand-navy/60 text-sm mb-6">We have received your submission and will be in touch within 24 hours.</p>
            <button onClick={onClose} className="bg-brand-orange text-white font-bold px-6 py-3 rounded-xl hover:bg-brand-orange-hover transition-colors">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-4">
            {config.fields.map(field => (
              <div key={field.key}>
                <label className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider block mb-1.5">{field.label}</label>
                {field.type === 'select' ? (
                  <select required={field.required} value={formData[field.key] || ''} onChange={e => set(field.key, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm bg-white transition-colors">
                    <option value="">Select...</option>
                    {field.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea required={field.required} placeholder={field.placeholder} value={formData[field.key] || ''} onChange={e => set(field.key, e.target.value)} rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm transition-colors resize-none" />
                ) : (
                  <input type={field.type} required={field.required} placeholder={field.placeholder} value={formData[field.key] || ''} onChange={e => set(field.key, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange outline-none text-sm transition-colors" />
                )}
              </div>
            ))}
            {error && <p className="text-red-500 text-sm bg-red-50 rounded-xl px-4 py-3">{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3.5 rounded-xl transition-colors disabled:opacity-60">
              {loading ? 'Submitting...' : `Submit ${config.title}`}
            </button>
            <p className="text-center text-xs text-brand-navy/40">We review all submissions within 24 hours.</p>
          </form>
        )}
      </div>
    </div>
  )
}
