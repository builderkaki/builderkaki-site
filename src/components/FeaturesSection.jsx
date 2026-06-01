const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Job Board',
    desc: 'Post and find façade contracts, subcontracts, and professional roles. Verified companies only.',
    badge: 'Free to post',
    href: '#join',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Technical Discussions',
    desc: 'Industry-specific forums for façade systems, structural glazing, curtain walls, cladding and more.',
    badge: 'Members only',
    href: '#community',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Contract Hub',
    desc: 'Plain-English guides, template clauses, SOP Act explained, and live contract Q&A with experienced practitioners.',
    badge: 'Free guides',
    href: '#join',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: 'Product Advertising',
    desc: 'Suppliers and consultants get prime placement in front of thousands of decision-makers across the façade supply chain.',
    badge: 'From S$400/mo',
    href: '#advertise',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Micro-Learning',
    desc: 'Short video courses on contracts, safety, BCA regulations, and site management. Earn CPD points and certificates.',
    badge: 'S$150/course',
    href: '#join',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Safety Scorecard',
    desc: 'Automatic safety ratings pulled from BCA incident data. Know a company\'s track record before you hire or partner.',
    badge: 'Verified data',
    href: '#join',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-brand-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider mx-auto mb-5" />
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Platform Features</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
            Everything the façade industry needs
          </h2>
          <p className="mt-4 text-brand-navy/60 text-lg max-w-2xl mx-auto">
            A LinkedIn-style professional network built specifically for the façade industry — with tools you actually need.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <a key={f.title} href={f.href} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group block">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
                <span className="text-xs font-semibold bg-brand-orange/10 text-brand-orange px-2.5 py-1 rounded-full">
                  {f.badge}
                </span>
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-2">{f.title}</h3>
              <p className="text-brand-navy/60 text-sm leading-relaxed mb-3">{f.desc}</p>
              <span className="text-brand-orange text-sm font-semibold group-hover:underline">Learn more →</span>
            </a>
          ))}
        </div>

        {/* Kaki Points promo */}
        <div className="mt-12 bg-hero-gradient rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-white text-sm font-medium mb-4">
              ⭐ Kaki Points System
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Get rewarded for being a good kaki
            </h3>
            <p className="text-white/70 leading-relaxed">
              Earn Kaki Points for completing courses, uploading safe-site photos, paying invoices on time, and helping others in discussions.
              Redeem for discounted PPE gear, course vouchers, and premium features.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 shrink-0">
            {[
              { pts: '+50 pts', action: 'Complete a course' },
              { pts: '+20 pts', action: 'Upload site photo' },
              { pts: '+30 pts', action: 'Answer a question' },
              { pts: '+100 pts', action: 'Ontime payment' },
            ].map(item => (
              <div key={item.action} className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-brand-gold font-bold text-lg">{item.pts}</p>
                <p className="text-white/70 text-xs mt-1">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
