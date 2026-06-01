const launches = [
  {
    category: 'System Launch',
    title: 'Ultra-Slim Curtain Wall System CW-90',
    company: 'Schüco Singapore',
    desc: 'New 90mm face-width aluminium curtain wall with integrated solar shading. Thermal performance Uf = 1.4 W/m²K.',
    date: 'Jun 2026',
    tag: 'Curtain Wall',
    color: 'bg-blue-50 border-blue-200',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    category: 'Product Launch',
    title: 'StructuralSeal Pro – BCA Approved',
    company: 'Sika Singapore',
    desc: 'New structural sealant with 30-year warranty, suitable for SGP laminated glass and high-movement façades up to ±50%.',
    date: 'May 2026',
    tag: 'Sealants',
    color: 'bg-emerald-50 border-emerald-200',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    category: 'Standard Update',
    title: 'SS CP 83:2026 Revised — Glass in Buildings',
    company: 'Spring Singapore / BCA',
    desc: 'Updated Code of Practice for glass in buildings. Key changes to wind load requirements and sloped glazing safety factors.',
    date: 'Apr 2026',
    tag: 'Regulatory',
    color: 'bg-red-50 border-red-200',
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    category: 'Tech Innovation',
    title: 'AI-Powered Façade Inspection Tool',
    company: 'FacadeTech Pte Ltd',
    desc: 'Drone + AI system that automates MCS cyclic inspection reporting. Reduces inspection time by 70% and auto-generates BCA reports.',
    date: 'Mar 2026',
    tag: 'Technology',
    color: 'bg-purple-50 border-purple-200',
    tagColor: 'bg-purple-100 text-purple-700',
  },
]

export default function NewLaunches() {
  return (
    <section id="launches" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="section-divider mb-5" />
            <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">New Launches</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
              Stay ahead of the industry
            </h2>
            <p className="mt-3 text-brand-navy/60 text-lg max-w-xl">
              New systems, products, regulatory updates and technology — curated for façade professionals.
            </p>
          </div>
          <a href="#join" className="shrink-0 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm">
            Get Launch Alerts →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {launches.map(l => (
            <div key={l.title} className={`rounded-2xl p-6 border ${l.color} hover:shadow-card transition-all duration-300 hover:-translate-y-0.5`}>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="text-xs font-semibold text-brand-navy/50 uppercase tracking-wider mb-1">{l.category}</p>
                  <h3 className="font-bold text-brand-navy text-base leading-snug">{l.title}</h3>
                </div>
                <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${l.tagColor}`}>{l.tag}</span>
              </div>
              <p className="text-sm text-brand-navy/60 font-medium mb-2">{l.company}</p>
              <p className="text-sm text-brand-navy/65 leading-relaxed mb-4">{l.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-brand-navy/40 font-medium">{l.date}</span>
                <button className="text-brand-blue text-sm font-semibold hover:text-brand-orange transition-colors">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon banner */}
        <div className="mt-8 rounded-2xl border-2 border-dashed border-brand-orange/30 bg-brand-orange/5 p-6 text-center">
          <p className="text-brand-navy font-bold text-lg mb-1">📢 Suppliers — be the first to launch here</p>
          <p className="text-brand-navy/60 text-sm">
            New product launches, system updates, and technical bulletins reach thousands of decision-makers.{' '}
            <a href="#advertise" className="text-brand-orange font-semibold hover:underline">See advertising options →</a>
          </p>
        </div>
      </div>
    </section>
  )
}
