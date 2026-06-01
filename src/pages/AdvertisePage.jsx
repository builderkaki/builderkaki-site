import { Link } from 'react-router-dom'

const adPlans = [
  {
    name: 'Rectangle Banner', price: 'S$400', per: '/month',
    desc: 'Displayed across all pages — job board, discussions, directory, courses.',
    features: ['300×250px placement', 'Targeted to all façade professionals', 'Click-through to your URL', 'Monthly impressions report', 'Min. 1 month commitment'],
    cta: 'Book Banner', email: 'advertise@builderkaki.sg', highlight: false,
  },
  {
    name: 'Leaderboard Premium', price: 'S$800', per: '/month',
    desc: 'Top-of-page 728×90 leaderboard + featured spot in weekly member newsletter.',
    features: ['728×90 leaderboard (top of every page)', 'Featured in weekly email to 2,800+ members', 'Priority listing in supplier directory', 'Dedicated product launch post included', 'Detailed monthly analytics', 'Min. 3 month — discount to S$650/mo at 6mo'],
    cta: 'Get Premium', email: 'advertise@builderkaki.sg', highlight: true,
  },
  {
    name: 'Product Launch Post', price: 'S$300', per: '/post',
    desc: 'Full-page product announcement pushed to all members as a notification.',
    features: ['Full article on New Launches page', 'Push notification to all members', 'Featured for 30 days', 'Shared on BuilderKaki social', 'Enquiry email forwarding for 30 days', 'One-time payment'],
    cta: 'Submit Launch', email: 'advertise@builderkaki.sg', highlight: false,
  },
]

const consultantPlans = [
  {
    name: 'Basic Listing', price: 'Free', per: '',
    desc: 'Your firm listed in the directory visible to all members.',
    features: ['Company name, location and specialty', 'Contact email listed', 'BCA registration displayed', 'Safety score shown'],
    cta: 'List Free', email: 'hello@builderkaki.sg',
  },
  {
    name: 'Premium Profile', price: 'S$50', per: '/month',
    desc: 'Full-featured profile with project portfolio and priority placement.',
    features: ['Everything in Basic', 'Priority search placement', 'Project portfolio gallery', 'Team profiles and credentials', 'RFQ enquiry button', 'Verified badge', 'Monthly enquiry analytics'],
    cta: 'Go Premium', email: 'advertise@builderkaki.sg',
  },
]

const faqs = [
  { q: 'Who sees my advertisement?', a: 'All BuilderKaki members — contractors, engineers, architects, consultants, and project managers across Singapore\'s façade industry. We verify company registration for all sign-ups.' },
  { q: 'How do I provide the banner artwork?', a: 'Email your artwork to advertise@builderkaki.sg in JPG, PNG or GIF format at the required dimensions. We can also design a simple banner for you at no extra cost.' },
  { q: 'Can I target specific audiences?', a: 'Currently all ads are shown to all members. Targeted advertising by role (e.g. engineers only, contractors only) is on our roadmap for Q4 2026.' },
  { q: 'Is there a minimum commitment?', a: 'Rectangle banners are 1 month minimum. Leaderboard premium is 3 months minimum (significant discount at 6 months). Product launch posts are one-time.' },
  { q: 'How do I track performance?', a: 'We email a monthly report with impressions, clicks, and click-through rate. Premium advertisers get a more detailed breakdown.' },
  { q: 'Can I cancel anytime?', a: 'You can cancel at the end of your committed period. We do not offer refunds mid-period, but we are always flexible if there is a genuine issue.' },
]

export default function AdvertisePage() {
  return (
    <div className="bg-brand-cream min-h-screen pt-16">
      {/* Header */}
      <div className="bg-hero-gradient text-white py-14 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">For Suppliers & Consultants</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Advertise on BuilderKaki</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Reach Singapore's entire façade supply chain — contractors, engineers, architects, consultants and project managers.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[['2,800+', 'Verified Members'], ['6', 'Audience Types'], ['S$34bn', 'Industry Size'], ['Singapore', 'Focused']].map(([val, label]) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-white">{val}</p>
                <p className="text-white/50 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-14">

        {/* Supplier advertising */}
        <div className="mb-16">
          <div className="section-divider mb-5" />
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">For Suppliers & Manufacturers</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-3">Get your products in front of decision-makers</h2>
          <p className="text-brand-navy/60 mb-8 max-w-2xl">Architects specify, engineers approve, and contractors purchase. All three are on BuilderKaki.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {adPlans.map(p => (
              <div key={p.name} className={`rounded-2xl p-7 border-2 flex flex-col ${p.highlight ? 'bg-hero-gradient border-brand-orange shadow-glow relative' : 'bg-white border-gray-200'} transition-all duration-300`}>
                {p.highlight && <span className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-2.5 py-1 rounded-full">Most Popular</span>}
                <p className={`font-semibold text-sm uppercase tracking-wider mb-1 ${p.highlight ? 'text-white/60' : 'text-brand-navy/50'}`}>{p.name}</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-extrabold ${p.highlight ? 'text-white' : 'text-brand-navy'}`}>{p.price}</span>
                  {p.per && <span className={`text-sm pb-1.5 ${p.highlight ? 'text-white/60' : 'text-brand-navy/50'}`}>{p.per}</span>}
                </div>
                <p className={`text-sm mb-5 ${p.highlight ? 'text-white/70' : 'text-brand-navy/60'}`}>{p.desc}</p>
                <ul className="flex flex-col gap-2 mb-7 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${p.highlight ? 'text-brand-gold' : 'text-brand-orange'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-xs ${p.highlight ? 'text-white/80' : 'text-brand-navy/70'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={`mailto:${p.email}?subject=${encodeURIComponent(p.name + ' — Advertising Enquiry')}`}
                  className={`text-center font-bold py-3 px-5 rounded-xl transition-colors ${p.highlight ? 'bg-white text-brand-orange hover:bg-white/90' : 'bg-brand-orange text-white hover:bg-brand-orange-hover'}`}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Consultant profiles */}
        <div className="mb-16">
          <div className="section-divider mb-5" />
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">For Consultants & Service Firms</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-3">Be found by contractors and developers</h2>
          <p className="text-brand-navy/60 mb-8 max-w-2xl">List your firm in the verified consultant directory and receive direct enquiries from BuilderKaki members.</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            {consultantPlans.map(p => (
              <div key={p.name} className="bg-white rounded-2xl border-2 border-gray-200 hover:border-brand-orange p-7 flex flex-col transition-colors">
                <p className="font-semibold text-sm uppercase tracking-wider text-brand-navy/50 mb-1">{p.name}</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl font-extrabold text-brand-navy">{p.price}</span>
                  {p.per && <span className="text-sm pb-1 text-brand-navy/50">{p.per}</span>}
                </div>
                <p className="text-sm text-brand-navy/60 mb-5">{p.desc}</p>
                <ul className="flex flex-col gap-2 mb-7 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-brand-navy/70">
                      <svg className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={`mailto:${p.email}?subject=${encodeURIComponent(p.name + ' — Listing Enquiry')}`}
                  className="text-center bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 px-5 rounded-xl transition-colors text-sm">
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <div className="section-divider mb-5" />
          <h2 className="text-2xl font-extrabold text-brand-navy mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-card">
                <p className="font-bold text-brand-navy mb-2">{faq.q}</p>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-hero-gradient rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-extrabold mb-2">Not sure which option is right for you?</h3>
          <p className="text-white/70 mb-5">Email us and we will recommend the best approach for your budget and goals.</p>
          <a href="mailto:advertise@builderkaki.sg" className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Email advertise@builderkaki.sg
          </a>
        </div>
      </div>
    </div>
  )
}
