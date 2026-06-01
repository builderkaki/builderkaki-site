import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['All', 'Curtain Wall', 'Glass & Glazing', 'Sealants', 'Cladding', 'Technology', 'Regulatory', 'Sustainability']

const launches = [
  {
    id: 1, category: 'Curtain Wall', tag: 'System Launch',
    title: 'Schüco CW 90.SI — Ultra-Slim Curtain Wall with Integrated Solar Shading',
    company: 'Schüco Singapore', date: 'June 2026',
    tagColor: 'bg-blue-100 text-blue-700', featured: true,
    image: '🏢',
    summary: 'New 90mm face-width aluminium curtain wall system with thermally broken profiles and integrated external louvre system. Thermal performance Uf = 1.4 W/m²K meets BCA Green Mark Platinum requirements.',
    highlights: [
      'Uf value 1.4 W/m²K — exceeds ETTV requirements',
      'Integrated G-sun solar shading system',
      'Compatible with SGP and heat-strengthened glass',
      'Available in Singapore from Q3 2026',
    ],
    contact: 'singapore@schueco.com',
  },
  {
    id: 2, category: 'Sealants', tag: 'Product Launch',
    title: 'Sika SG-30HM Structural Sealant — 30 Year Warranty, BCA Pre-Qualified',
    company: 'Sika Singapore', date: 'May 2026',
    tagColor: 'bg-emerald-100 text-emerald-700', featured: true,
    image: '🔧',
    summary: 'New generation structural sealant with 30-year performance warranty. Pre-qualified by BCA for use in Singapore façade projects. Suitable for SGP laminated glass and ±50% movement joints.',
    highlights: [
      '30-year warranty with third-party certification',
      'BCA pre-qualification letter available on request',
      'Movement capacity ±50% (superior to Dow 993)',
      'Local technical support and pull-off testing service',
    ],
    contact: 'singapore@sika.com',
  },
  {
    id: 3, category: 'Regulatory', tag: 'Standard Update',
    title: 'SS CP 83:2026 Revised — Glass in Buildings Code of Practice',
    company: 'Spring Singapore / BCA', date: 'April 2026',
    tagColor: 'bg-red-100 text-red-700', featured: false,
    image: '🏛️',
    summary: 'Major revision to the Singapore Standard Code of Practice for Glass in Buildings. Key changes affect wind load requirements for curtain walls above 100m, sloped glazing safety factors, and balustrade design.',
    highlights: [
      'New wind load tables for buildings >100m',
      'Revised sloped glazing safety factors',
      'Updated balustrade impact requirements',
      'Effective from 1 July 2026 for all new submissions',
    ],
    contact: '',
  },
  {
    id: 4, category: 'Technology', tag: 'Tech Launch',
    title: 'FacadeAI Inspector — Drone + AI MCS Inspection Platform',
    company: 'FacadeTech Pte Ltd', date: 'March 2026',
    tagColor: 'bg-purple-100 text-purple-700', featured: false,
    image: '🤖',
    summary: 'Singapore-developed drone inspection system with AI defect detection. Automatically classifies façade defects, generates BCA-compliant MCS reports, and reduces inspection time by 70%.',
    highlights: [
      '70% faster than traditional rope access inspection',
      'AI classifies defects to BCA severity categories',
      'Auto-generates BCA MCS report format',
      'Integration with BCA CORENET X available',
    ],
    contact: 'info@facadetech.sg',
  },
  {
    id: 5, category: 'Glass & Glazing', tag: 'Product Launch',
    title: 'Guardian SunGuard Ultra-Clear Low-E — Neutral Appearance, High Performance',
    company: 'Guardian Industries', date: 'February 2026',
    tagColor: 'bg-cyan-100 text-cyan-700', featured: false,
    image: '🪟',
    summary: 'New neutral-appearance low-emissivity glass with SHGC 0.27 and VLT 62%. Maintains clear glass aesthetics while meeting BCA ETTV requirements without green or blue tint.',
    highlights: [
      'SHGC 0.27 — exceeds Green Mark requirements',
      'VLT 62% — more daylight than standard low-e',
      'Neutral colour (no green/blue tint)',
      'Available in DGU with warm-edge spacer option',
    ],
    contact: 'sg.info@guardian.com',
  },
  {
    id: 6, category: 'Sustainability', tag: 'Certification',
    title: 'BCA Green Mark 2021 — Updated Envelope Performance Calculator Released',
    company: 'Building & Construction Authority', date: 'January 2026',
    tagColor: 'bg-green-100 text-green-700', featured: false,
    image: '🌿',
    summary: 'BCA has released an updated version of the Envelope Thermal Transfer Value (ETTV) calculator incorporating the new SS CP 83:2026 glass performance data. All new projects from March 2026 must use this version.',
    highlights: [
      'Updated ETTV calculator with 2026 glass data',
      'New solar heat gain coefficients for popular coated glasses',
      'Mandatory for new GFA submissions from March 2026',
      'Free download from BCA website',
    ],
    contact: '',
  },
]

export default function LaunchesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = launches.filter(l => activeCategory === 'All' || l.category === activeCategory)

  return (
    <div className="bg-brand-cream min-h-screen pt-16">
      {/* Header */}
      <div className="bg-hero-gradient text-white py-14 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Industry Updates</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">New Launches & Updates</h1>
          <p className="text-white/70 text-lg max-w-xl">
            New façade systems, products, regulatory updates and technology innovations — curated for Singapore's industry.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
            <span>🚀 {launches.length} recent launches</span>
            <span>📢 Suppliers can post here</span>
            <span>🔔 Get email alerts on sign up</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-10">
        {/* Category filter */}
        <div className="bg-white rounded-2xl shadow-card p-4 mb-6 flex flex-wrap gap-2">
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCategory(c)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${activeCategory === c ? 'bg-brand-orange text-white' : 'bg-gray-100 text-brand-navy/70 hover:bg-gray-200'}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Featured launches */}
        {activeCategory === 'All' && (
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {launches.filter(l => l.featured).map(l => (
              <div key={l.id} className="bg-hero-gradient rounded-2xl p-6 text-white relative overflow-hidden">
                <span className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-2.5 py-1 rounded-full">Featured</span>
                <div className="text-4xl mb-4">{l.image}</div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${l.tagColor} mb-3 inline-block`}>{l.tag}</span>
                <h3 className="font-bold text-lg leading-snug mb-2">{l.title}</h3>
                <p className="text-white/60 text-sm mb-1">{l.company}</p>
                <p className="text-white/50 text-xs mb-4">{l.date}</p>
                <p className="text-white/75 text-sm leading-relaxed mb-4">{l.summary}</p>
                {l.contact && (
                  <a href={`mailto:${l.contact}`} className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors">
                    Enquire →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* All launches */}
        <div className="flex flex-col gap-4">
          {filtered.filter(l => !l.featured || activeCategory !== 'All').map(l => (
            <div key={l.id} className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1 shrink-0">{l.image}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${l.tagColor}`}>{l.tag}</span>
                        <span className="text-xs text-brand-navy/40">{l.date}</span>
                      </div>
                      <h3 className="font-bold text-brand-navy text-base leading-snug">{l.title}</h3>
                      <p className="text-brand-navy/55 text-sm mt-0.5">{l.company}</p>
                    </div>
                  </div>

                  <p className="text-sm text-brand-navy/65 leading-relaxed mb-3">{l.summary}</p>

                  <ul className="grid md:grid-cols-2 gap-1.5 mb-4">
                    {l.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-xs text-brand-navy/65">
                        <svg className="w-3.5 h-3.5 text-brand-orange mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    {l.contact ? (
                      <a href={`mailto:${l.contact}`} className="text-brand-orange font-semibold text-sm hover:underline">
                        Enquire →
                      </a>
                    ) : (
                      <Link to="/#join" className="text-brand-orange font-semibold text-sm hover:underline">
                        Get notified of updates →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supplier CTA */}
        <div className="mt-10 bg-white rounded-2xl shadow-card p-8 text-center border-2 border-dashed border-brand-orange/30">
          <p className="text-3xl mb-3">📢</p>
          <h3 className="text-xl font-extrabold text-brand-navy mb-2">Suppliers — launch your product here</h3>
          <p className="text-brand-navy/60 mb-5 max-w-xl mx-auto text-sm">
            New product launches, system updates, and technical bulletins reach thousands of façade decision-makers.
            A featured launch post is S$300 and includes notification to all members.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:advertise@builderkaki.sg" className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              Submit a Launch →
            </a>
            <Link to="/advertise" className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              View Advertising Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
