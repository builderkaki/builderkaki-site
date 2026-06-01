const plans = [
  {
    name: 'Banner Ad',
    price: 'S$400',
    per: '/month',
    desc: 'Rectangle banner displayed across all pages to thousands of industry professionals.',
    features: [
      'Leaderboard or rectangle placement',
      'Targeted to all façade professionals',
      'Click-through to your website or product page',
      'Monthly impression & click report',
    ],
    cta: 'Enquire',
    highlight: false,
  },
  {
    name: 'Premium Placement',
    price: 'S$800',
    per: '/month',
    desc: 'Top-of-page leaderboard + featured spot in weekly newsletter to 2,800+ subscribers.',
    features: [
      'Leaderboard banner (premium position)',
      'Featured in weekly email digest',
      'Priority listing in supplier directory',
      'Dedicated product launch post',
      'Monthly detailed analytics report',
    ],
    cta: 'Get Featured',
    highlight: true,
  },
  {
    name: 'New Launch Post',
    price: 'S$300',
    per: '/post',
    desc: 'Announce a new product, system or service to the entire BuilderKaki community.',
    features: [
      'Full-page product launch article',
      'Pushed to all members as notification',
      'Featured on New Launches section for 30 days',
      'Shared on BuilderKaki social channels',
    ],
    cta: 'Submit Launch',
    highlight: false,
  },
]

export default function AdvertiseSection() {
  return (
    <section id="advertise" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="section-divider mx-auto mb-5" />
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Advertise With Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
            Reach the entire façade supply chain
          </h2>
          <p className="mt-4 text-brand-navy/60 text-lg max-w-2xl mx-auto">
            Suppliers, manufacturers, consultants and training providers — get your products and services in front of
            thousands of verified façade professionals in Singapore.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {plans.map(p => (
            <div
              key={p.name}
              className={`rounded-2xl p-7 border-2 flex flex-col ${
                p.highlight
                  ? 'bg-hero-gradient border-brand-orange shadow-glow relative overflow-hidden'
                  : 'bg-white border-gray-200 hover:border-brand-orange/40 hover:shadow-card'
              } transition-all duration-300`}
            >
              {p.highlight && (
                <div className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div>
                <p className={`font-semibold text-sm uppercase tracking-wider mb-1 ${p.highlight ? 'text-white/60' : 'text-brand-navy/50'}`}>
                  {p.name}
                </p>
                <div className="flex items-end gap-1 mb-3">
                  <span className={`text-4xl font-extrabold ${p.highlight ? 'text-white' : 'text-brand-navy'}`}>{p.price}</span>
                  <span className={`text-sm pb-1.5 ${p.highlight ? 'text-white/60' : 'text-brand-navy/50'}`}>{p.per}</span>
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${p.highlight ? 'text-white/70' : 'text-brand-navy/60'}`}>{p.desc}</p>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${p.highlight ? 'text-brand-gold' : 'text-brand-orange'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${p.highlight ? 'text-white/80' : 'text-brand-navy/70'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="mailto:advertise@builderkaki.sg"
                className={`mt-auto text-center font-semibold py-3 px-5 rounded-xl transition-colors ${
                  p.highlight
                    ? 'bg-white text-brand-orange hover:bg-white/90'
                    : 'bg-brand-orange text-white hover:bg-brand-orange-hover'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Consultant CTA */}
        <div className="bg-brand-blue-light rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-4xl">📊</div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-bold text-brand-navy text-xl mb-1">Are you a consultant or specialist firm?</h3>
            <p className="text-brand-navy/65 text-sm">
              List your services in our verified consultant directory, post RFQs, and let contractors and developers find you.
              Free basic listing — premium from S$50/month.
            </p>
          </div>
          <a href="mailto:partners@builderkaki.sg" className="shrink-0 bg-brand-blue text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm">
            List Your Services
          </a>
        </div>
      </div>
    </section>
  )
}
