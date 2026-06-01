const audiences = [
  {
    icon: '🏗️',
    title: 'Contractors & Subcontractors',
    desc: 'Find jobs, benchmark rates, understand your contractual rights, and connect with verified suppliers. Stop leaving money on the table.',
    tags: ['Job Board', 'Contract Guides', 'Payment Rights'],
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-200',
    iconBg: 'bg-orange-100',
  },
  {
    icon: '⚙️',
    title: 'Engineers',
    desc: 'Access technical resources, discuss façade systems, share load calculations, and collaborate on complex projects with industry peers.',
    tags: ['Technical Library', 'System Discussions', 'CPD Points'],
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    icon: '📐',
    title: 'Architects',
    desc: 'Discover the latest façade systems, connect with specialist contractors, and explore new materials and finishes for your next project.',
    tags: ['Product Showcase', 'Contractor Network', 'New Materials'],
    color: 'from-violet-50 to-purple-50',
    border: 'border-violet-200',
    iconBg: 'bg-violet-100',
  },
  {
    icon: '📊',
    title: 'Consultants',
    desc: 'Advertise your services, post RFQs, find specialist sub-consultants, and grow your practice through a targeted professional network.',
    tags: ['Service Listings', 'RFQ Board', 'Lead Generation'],
    color: 'from-teal-50 to-emerald-50',
    border: 'border-teal-200',
    iconBg: 'bg-teal-100',
  },
  {
    icon: '🏛️',
    title: 'Authorities & Bodies',
    desc: 'Publish regulatory updates, safety advisories, and BCA/MOM circulars directly to the professionals who need them most.',
    tags: ['Regulatory Updates', 'Safety Circulars', 'Official Notices'],
    color: 'from-red-50 to-rose-50',
    border: 'border-red-200',
    iconBg: 'bg-red-100',
  },
  {
    icon: '🔧',
    title: 'Suppliers & Manufacturers',
    desc: 'Advertise your façade products to decision-makers, launch new products to thousands, and build direct relationships with buyers.',
    tags: ['Product Ads', 'New Launches', 'Direct Enquiries'],
    color: 'from-yellow-50 to-orange-50',
    border: 'border-yellow-200',
    iconBg: 'bg-yellow-100',
  },
]

export default function AudienceSection() {
  return (
    <section id="audience" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider mx-auto mb-5" />
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Built For Everyone</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
            One platform. Every façade professional.
          </h2>
          <p className="mt-4 text-brand-navy/60 text-lg max-w-2xl mx-auto">
            BuilderKaki connects the entire façade ecosystem — from site workers to C-suite, from suppliers to government bodies.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map(a => (
            <div
              key={a.title}
              className={`bg-gradient-to-br ${a.color} rounded-2xl p-6 border ${a.border} hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className={`${a.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {a.icon}
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-2">{a.title}</h3>
              <p className="text-brand-navy/65 text-sm leading-relaxed mb-4">{a.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {a.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium bg-white/70 text-brand-navy/70 border border-white px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
